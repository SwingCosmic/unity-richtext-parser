import { CharStreams, CommonTokenStream, ParseTree } from "antlr4";
import UnityRichTextLexer from "../grammar/UnityRichTextLexer";
import UnityRichTextParser, {
  AttributeContext,
  AttributeValueContext,
  ChardataContext,
  ContentContext,
  DocumentContext,
  ElementContext,
  PairedAbbrElementContext,
  PairedElementContext,
  SelfClosingAbbrElementContext,
  SelfClosingElementContext,
} from "../grammar/UnityRichTextParser";
import { ConverterManager } from "../converters/ConverterManager";
import interpolation, { InterpolationProcessor } from '../interpolation';
import { TagContext, ParseOptions } from "../types";
import { DefaultProcessor } from "../interpolation/DefaultProcessor";


/**
 * 富文本解析器
 * 负责使用ANTLR4解析Unity富文本并转换为DOM
 */
export class RichTextParser {
  private converterManager: ConverterManager;

  private dataContext: any;
  private get domParser() {
    return this.options.domParser!;
  }

  private options: ParseOptions;
  interpolation: InterpolationProcessor;
  constructor(converterManager: ConverterManager, options: ParseOptions = {}) {
    this.converterManager = converterManager;

    options.domParser ||= new DOMParser();
    this.options = options;
    this.interpolation = options.interpolationProcessor || new DefaultProcessor();
  }

  /**
   * 解析富文本为DOM元素
   */
  parse(richText: string, data?: any): Element {

    this.dataContext = data;

    // 处理插值表达式
    // const processedText = InterpolationProcessor.process(richText, this.dataContext);

    // 创建根元素
    const rootElement = this.createElement("div");

    // 使用ANTLR4解析富文本
    const documentFragment = this.parseWithANTLR(richText);

    // 将解析结果添加到根元素
    while (documentFragment.firstChild) {
      rootElement.appendChild(documentFragment.firstChild);
    }

    return rootElement;
  }

  /**
   * 使用ANTLR4解析富文本
   */
  private parseWithANTLR(text: string): DocumentFragment {
    const fragment = this.domParser
      .parseFromString("<div></div>", "text/html")
      .createDocumentFragment();

    // 创建ANTLR词法分析器和语法分析器
    const inputStream = CharStreams.fromString(text);
    const lexer = new UnityRichTextLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new UnityRichTextParser(tokenStream);

    // 解析文档
    const documentContext = parser.document();

    // 遍历解析树并构建DOM
    this.buildDOMFromParseTree(documentContext, fragment);

    return fragment;
  }

  /**
   * 从解析树构建DOM
   */
  private buildDOMFromParseTree(
    context: DocumentContext,
    parentElement: Element | DocumentFragment,
  ): void {
    // 遍历文档中的所有节点
    const nodes = context.children!;
    for (let nodeContext of nodes) {
      this.processNode(nodeContext, parentElement);
    }
  }

  /**
   * 处理节点
   */
  private processNode(
    nodeContext: ParseTree,
    parentElement: Element | DocumentFragment,
  ): void {
    if (nodeContext instanceof ElementContext) {
      // 处理元素节点
      this.processElement(nodeContext, parentElement);
    } else if (nodeContext instanceof ChardataContext) {
      // 处理文本节点
      this.processText(nodeContext, parentElement);
    } else if (nodeContext instanceof ContentContext) {
      // 处理内容节点（元素 or 文本）
      for (const content of nodeContext.children!) {
        this.processNode(content, parentElement);
      }
    }
  }

  /**
   * 处理元素节点
   */
  private processElement(
    elementContext: ElementContext,
    parentElement: Element | DocumentFragment,
  ): void {
    if (
      elementContext instanceof PairedElementContext ||
      elementContext instanceof PairedAbbrElementContext
    ) {
      this.processPairedElement(elementContext, parentElement);
    } else if (
      elementContext instanceof SelfClosingElementContext ||
      elementContext instanceof SelfClosingAbbrElementContext
    ) {
      this.processSelfClosingElement(elementContext, parentElement);
    }
  }

  /**
   * 处理成对元素（有开始和结束标签）
   */
  private processPairedElement(
    elementContext: PairedElementContext | PairedAbbrElementContext,
    parentElement: Element | DocumentFragment,
  ): void {
    const tagName = elementContext.Name(0).getText();
    const attributes = this.extractAttributes(elementContext);

    const content: ContentContext = elementContext.content();

    // 创建标签上下文
    const tagContext: TagContext = {
      tagName,
      attributes,
      data: this.dataContext,
      content,
      parentElement:
        parentElement instanceof Element ? parentElement : undefined,
    };

    // 使用转换器转换标签
    const converter = this.converterManager.getConverter(tagName);
    const element = converter.convert(tagContext, this.domParser);

    // 处理子节点
    if (!tagContext.skipChildren) {
      this.processNode(content, element);
    }

    parentElement.appendChild(element);
  }

  /**
   * 处理自闭合元素
   */
  private processSelfClosingElement(
    elementContext: SelfClosingElementContext | SelfClosingAbbrElementContext,
    parentElement: Element | DocumentFragment,
  ): void {
    const tagName = elementContext.Name().getText();
    const attributes = this.extractAttributes(elementContext);

    // 创建标签上下文
    const tagContext: TagContext = {
      tagName,
      attributes,
      data: this.dataContext,
      parentElement:
        parentElement instanceof Element ? parentElement : undefined,
    };

    // 使用转换器转换标签
    const converter = this.converterManager.getConverter(tagName);
    const element = converter.convert(tagContext, this.domParser);

    parentElement.appendChild(element);
  }

  /**
   * 处理文本节点
   */
  private processText(
    textNodeContext: ChardataContext,
    parentElement: Element | DocumentFragment
  ): void {
    let textContent = textNodeContext.getText().trim();
    if (textContent) {
      let content: string | Node = this.interpolation.process(textContent, this.dataContext);
      if (typeof content === "string") {
        content = this.createDecodedTextNode(content);
      }
      parentElement.appendChild(content);
    }
  }

  /**
   * 提取元素属性
   */
  private extractAttributes(
    elementContext: ElementContext
  ): Record<string, string | number> {
    const attributes: Record<string, string | number> = {};

    if (
      elementContext instanceof PairedElementContext ||
      elementContext instanceof SelfClosingElementContext
    ) {
      let attrContexts = elementContext.attribute_list();
      for (const attrContext of attrContexts) {
        const name = attrContext.Name().getText();
        const value = this.extractAttributeValue(attrContext.attributeValue());

        if (name) {
          attributes[name] = value;
        }
      }
    } else if (
      elementContext instanceof PairedAbbrElementContext ||
      elementContext instanceof SelfClosingAbbrElementContext
    ) {
      const name = elementContext.Name(0).getText();
      const value = this.extractAttributeValue(elementContext.attributeValue());
      attributes[name] = value;
    } else {
      return attributes;
    }

    return attributes;
  }

  /**
   * 提取属性值
   */
  private extractAttributeValue(
    attrValueContext: AttributeValueContext
  ): string | number {
    if (!attrValueContext) {
      return ""; // 没有值的属性，返回空字符串
    }

    const text = attrValueContext.getText();

    // 如果是字符串，去掉引号
    if (text.startsWith('"') && text.endsWith('"')) {
      return text.slice(1, -1);
    }

    if (text.startsWith("'") && text.endsWith("'")) {
      return text.slice(1, -1);
    }

    // 如果是十六进制颜色
    if (text.startsWith("#")) {
      return text;
    }

    // 如果是数字，转换为数字类型
    const numberValue = Number(text);
    if (!isNaN(numberValue)) {
      return numberValue;
    }

    // 否则返回原始文本
    return text;
  }

  /**
   * 创建DOM元素
   */
  private createElement(tagName: string): Element {
    const doc = this.domParser.parseFromString(
      `<${tagName}></${tagName}>`,
      "text/html"
    );
    return doc.body.firstElementChild as Element;
  }

  private createDecodedTextNode(escapedString: string) {
    const textarea = document.createElement('textarea')
    textarea.innerHTML = escapedString;
    const decodedString = textarea.value;
    return document.createTextNode(decodedString);
  }
}

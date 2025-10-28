import { ConverterManager } from './converters/ConverterManager';
import { RichTextParser } from './parser/RichTextParser';
import { InterpolationProcessor } from './utils/InterpolationProcessor';
import { ParseOptions } from './types';

/**
 * Unity富文本解析器主类
 */
export class UnityRichTextSerializer {
  private converterManager: ConverterManager;
  private richTextParser: RichTextParser;
  

  constructor() {
    this.converterManager = new ConverterManager();
    this.richTextParser = new RichTextParser(this.converterManager);
  }

  /**
   * 解析Unity富文本为DOM元素
   * @param richText Unity富文本字符串
   * @param options 解析选项
   * @returns DOM元素
   */
  parseToDOM(richText: string, options: ParseOptions = {}): Element {
    return this.richTextParser.parse(richText, options);
  }

  /**
   * 解析Unity富文本为HTML字符串
   * @param richText Unity富文本字符串
   * @param options 解析选项
   * @returns HTML字符串
   */
  parseToHTML(richText: string, options: ParseOptions = {}): string {
    const domElement = this.parseToDOM(richText, options);
    return domElement.innerHTML;
  }

  /**
   * 注册自定义标签转换器
   * @param converter 标签转换器
   */
  registerConverter(converter: any): void {
    this.converterManager.registerConverter(converter);
  }

  /**
   * 注销标签转换器
   * @param converter 标签转换器
   */
  unregisterConverter(converter: any): void {
    this.converterManager.unregisterConverter(converter);
  }

  /**
   * 创建DOM元素
   */
  private createElement(tagName: string, domParser: DOMParser): Element {
    const doc = domParser.parseFromString(`<${tagName}></${tagName}>`, 'text/html');
    return doc.body.firstElementChild as Element;
  }
}

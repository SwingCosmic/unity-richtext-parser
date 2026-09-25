import { CharStream, CommonTokenStream, ErrorListener, ParseTree, Token } from "antlr4";
import UnityRichTextLexer from "../grammar/UnityRichTextLexer";
import UnityRichTextParser, {
  AttributeValueContext, ChardataContext, CloseElementContext, ContentContext,
  ElementContext, OpenAbbrElementContext, OpenElementContext,
  SelfClosingAbbrElementContext, SelfClosingElementContext,
} from "../grammar/UnityRichTextParser";
import { ConverterManager } from "../converters/ConverterManager";
import { InterpolationProcessor } from "../interpolation";
import { ParseDiagnostic, ParseOptions, TagContext } from "../types";
import { DefaultProcessor } from "../interpolation/DefaultProcessor";
import { DEFAULT_SELF_CLOSING_TAGS, normalizeSelfClosingTags } from "./tagSyntax";

type Header = OpenElementContext | OpenAbbrElementContext |
  SelfClosingElementContext | SelfClosingAbbrElementContext;

/** ANTLR reads lossless headers/text; pairing never inserts or deletes source. */
export class RichTextParser {
  interpolation: InterpolationProcessor;
  private readonly domParser: DOMParser;

  constructor(private converterManager: ConverterManager, private options: ParseOptions = {}) {
    this.domParser = options.domParser ?? new DOMParser();
    this.interpolation = options.interpolationProcessor ?? new DefaultProcessor();
  }

  parse(richText: string, data?: any): Element {
    const doc = this.domParser.parseFromString("<div></div>", "text/html");
    const root = doc.body.firstElementChild!;
    const processor = this.interpolation;
    const report = (diagnostic: ParseDiagnostic) => this.options.onDiagnostic?.(diagnostic);
    const source = processor.processSource
      ? processor.processSource(richText, data, { reportDiagnostic: report })
      : richText;
    const text = normalizeSelfClosingTags(source, this.options.selfClosingTags ?? DEFAULT_SELF_CLOSING_TAGS);
    // UTF-16 offsets agree with the shared tag scanner and JS string slicing.
    const lexer = new UnityRichTextLexer(new CharStream(text, false));
    const parser = new UnityRichTextParser(new CommonTokenStream(lexer));
    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    const lexical = new ErrorListener<number>();
    lexical.syntaxError = (_recognizer, _symbol, _line, _column, message) =>
      report({ stage: "lexer", message, position: lexer._tokenStartCharIndex });
    const syntactic = new ErrorListener<Token>();
    syntactic.syntaxError = (_recognizer, token, _line, _column, message) =>
      report({ stage: "parser", message, position: token?.start ?? text.length });
    lexer.addErrorListener(lexical);
    parser.addErrorListener(syntactic);
    const nodes = parser.document().content().children ?? [];
    const pairs = this.pairHeaders(nodes, report);

    const render = (start: number, end: number, parent: Element) => {
      for (let i = start; i < end; i++) {
        const node = nodes[i];
        if (node instanceof ChardataContext) {
          const raw = node.getText();
          // A complete-looking but unsupported header is text, with a diagnostic.
          for (const match of raw.matchAll(/<\/?[A-Za-z_:][^<>]*/g)) {
            report({ stage: "lexer", message: "Incomplete or invalid tag header", position: node.start.start + match.index! });
          }
          const value = processor.processSource ? raw : processor.process(raw, data);
          parent.appendChild(typeof value === "string" ? this.decodeText(value, doc) : value);
        } else if (node instanceof ElementContext) {
          const close = pairs.get(i);
          if (node instanceof CloseElementContext ||
              ((node instanceof OpenElementContext || node instanceof OpenAbbrElementContext) && close === undefined)) {
            parent.appendChild(doc.createTextNode(text.slice(node.start.start, node.stop!.stop + 1)));
            continue;
          }
          const header = node as Header;
          let content: ContentContext | undefined;
          if (close !== undefined) {
            content = new ContentContext(parser);
            content.children = nodes.slice(i + 1, close);
            content.start = nodes[i + 1] instanceof ElementContext || nodes[i + 1] instanceof ChardataContext
              ? (nodes[i + 1] as ElementContext | ChardataContext).start : header.stop!;
            content.stop = (nodes[close] as CloseElementContext).start;
          }
          const context: TagContext = {
            tagName: header.Name().getText(), attributes: this.attributes(header, doc),
            data, content, parentElement: parent,
          };
          const element = this.converterManager.getConverter(context.tagName).convert(context, this.domParser);
          if (close !== undefined) {
            if (!context.skipChildren) render(i + 1, close, element);
            i = close;
          }
          parent.appendChild(element);
        }
        // Unity comments do not produce visible content.
      }
    };
    render(0, nodes.length, root);
    return root;
  }

  private pairHeaders(nodes: ParseTree[], report: (diagnostic: ParseDiagnostic) => void): Map<number, number> {
    const pairs = new Map<number, number>();
    const stack: Array<{ name: string; index: number; position: number }> = [];
    const unmatched = (position: number, name: string) =>
      report({ stage: "pairing", position, message: `Unmatched tag: ${name}` });
    nodes.forEach((node, index) => {
      if (node instanceof OpenElementContext || node instanceof OpenAbbrElementContext) {
        stack.push({ name: node.Name().getText().toLowerCase(), index, position: node.start.start });
      } else if (node instanceof CloseElementContext) {
        const name = node.Name().getText().toLowerCase();
        let match = stack.length - 1;
        while (match >= 0 && stack[match].name !== name) match--;
        if (match < 0) { unmatched(node.start.start, `/${name}`); return; }
        while (stack.length - 1 > match) {
          const abandoned = stack.pop()!;
          unmatched(abandoned.position, abandoned.name);
        }
        pairs.set(stack.pop()!.index, index);
      }
    });
    for (const open of stack) unmatched(open.position, open.name);
    return pairs;
  }

  private attributes(header: Header, doc: Document): Record<string, string | number> {
    if (header instanceof OpenAbbrElementContext || header instanceof SelfClosingAbbrElementContext) {
      return { [header.Name().getText()]: this.attributeValue(header.attributeValue(), doc) };
    }
    return Object.fromEntries(header.attribute_list().map(attribute =>
      [attribute.Name().getText(), this.attributeValue(attribute.attributeValue(), doc)]));
  }

  private attributeValue(context: AttributeValueContext, doc: Document): string {
    const text = context.getText();
    return text.startsWith('"') || text.startsWith("'") ? this.decodeText(text.slice(1, -1), doc).data : text;
  }

  private decodeText(text: string, doc: Document): Text {
    const textarea = doc.createElement("textarea");
    // Escape literal '<' before entity decoding, including '</textarea>'.
    textarea.innerHTML = text.replaceAll("<", "&lt;");
    return doc.createTextNode(textarea.value);
  }
}

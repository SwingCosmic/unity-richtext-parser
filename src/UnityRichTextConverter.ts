import { ConverterManager } from './converters/ConverterManager';
import { RichTextParser } from './parser/RichTextParser';
import { InterpolationProcessor } from './interpolation';
import { ParseOptions, TagConverter } from './types';

/**
 * Unity富文本解析器主类
 */
export class UnityRichTextConverter {
  private converterManager: ConverterManager;
  private richTextParser: RichTextParser;
  

  constructor(options: ParseOptions = {}) {
    this.converterManager = new ConverterManager();
    this.richTextParser = new RichTextParser(this.converterManager, options);
  }

  /**
   * 解析Unity富文本为DOM元素
   * @param richText Unity富文本字符串
   * @param options 解析选项
   * @returns DOM元素
   */
  parseToDOM(richText: string, data?: any): Element {
    return this.richTextParser.parse(richText, data);
  }

  /**
   * 解析Unity富文本为HTML字符串
   * @param richText Unity富文本字符串
   * @param options 解析选项
   * @returns HTML字符串
   */
  parseToHTML(richText: string, data?: any): string {
    const domElement = this.parseToDOM(richText, data);
    return domElement.innerHTML;
  }

  /**
   * 注册自定义标签转换器
   * @param converter 标签转换器
   */
  registerConverter(converter: TagConverter): void {
    this.converterManager.registerConverter(converter);
  }

  /**
   * 注销标签转换器
   * @param converter 标签转换器
   */
  unregisterConverter(converter: TagConverter): void {
    this.converterManager.unregisterConverter(converter);
  }

  get interpolationProcessor() {
    return this.richTextParser.interpolation;
  }
  set interpolationProcessor(processor: InterpolationProcessor | null) {
    if (processor) {
      this.richTextParser.interpolation = processor;
    }
  }

}

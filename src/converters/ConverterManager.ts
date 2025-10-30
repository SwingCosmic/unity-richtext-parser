import { TagContext, TagConverter as ITagConverter } from '../types';
import { InlineTagConverter } from './InlineTagConverter';
import { ColorTagConverter } from './ColorTagConverter';
import { SizeTagConverter } from './SizeTagConverter';
import { LinkTagConverter } from './LinkTagConverter';
import { ImageTagConverter } from './ImageTagConverter';
import { DefaultTagConverter } from './DefaultTagConverter';
import { BrTagConverter } from './BrTagConverter';
import { UnbreakConverter } from './UnbreakConverter';

/**
 * 转换器管理器
 * 负责管理所有标签转换器
 */
export class ConverterManager {
  private converters: ITagConverter[] = [];
  private defaultConverter = new DefaultTagConverter();

  constructor() {
    // 注册默认转换器
    this.registerDefaultConverters();
  }

  /**
   * 注册转换器
   */
  registerConverter(converter: ITagConverter): void {
    this.converters.push(converter);
  }

  /**
   * 注销转换器
   */
  unregisterConverter(converter: ITagConverter): void {
    const index = this.converters.indexOf(converter);
    if (index > -1) {
      this.converters.splice(index, 1);
    }
  }

  /**
   * 获取支持指定标签的转换器
   */
  getConverter(tagName: string): ITagConverter {
    // 查找支持该标签的转换器
    for (const converter of this.converters) {
      if (converter.supportedTags.includes(tagName.toLowerCase())) {
        return converter;
      }
    }

    // 如果没有找到，使用默认转换器
    return this.defaultConverter;
  }

  /**
   * 获取默认转换器
   */
  getDefaultConverter(): ITagConverter {
    return this.defaultConverter;
  }

  /**
   * 转换标签为DOM元素
   */
  convert(context: TagContext, domParser: DOMParser): Element {
    const converter = this.getConverter(context.tagName);
    return converter.convert(context, domParser);
  }

  /**
   * 注册默认转换器
   */
  private registerDefaultConverters(): void {
    this.registerConverter(new InlineTagConverter());
    this.registerConverter(new ColorTagConverter());
    this.registerConverter(new SizeTagConverter());
    this.registerConverter(new LinkTagConverter());
    this.registerConverter(new ImageTagConverter());
    this.registerConverter(new BrTagConverter());
    this.registerConverter(new UnbreakConverter());
  }
}

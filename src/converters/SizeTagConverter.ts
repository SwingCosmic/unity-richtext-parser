import { TagContext } from '../types';
import { TagConverter } from './TagConverter';

/**
 * 大小标签转换器
 * 处理 <size> 标签
 */
export class SizeTagConverter extends TagConverter {
  readonly supportedTags = ['size'];
  
  convert(context: TagContext, domParser: DOMParser): Element {
    const element = this.createElement('span', domParser);
    
    // 设置字体大小样式
    const size = this.parseSize(context.attributes);
    if (size) {
      this.setStyle(element, { 'font-size': size });
    }
    delete context.attributes['size'];
    delete context.attributes['value'];
    
    // 设置其他属性
    this.setAttributes(element, context.attributes);
    
    return element;
  }
  
  /**
   * 解析大小值
   */
  private parseSize(attributes: Record<string, string | number>): string | null {
    const sizeValue = attributes['value'] || attributes['size'];
    if (!sizeValue) return null;
    
    const sizeStr = String(sizeValue).trim();
    
    // 如果是数字，添加px单位
    if (/^\d+$/.test(sizeStr)) {
      return `${sizeStr}px`;
    }
    
    // 如果已经有单位，直接返回
    if (/(px|em|rem|pt|%)$/.test(sizeStr)) {
      return sizeStr;
    }
    
    // 默认添加px单位
    return `${sizeStr}px`;
  }
}

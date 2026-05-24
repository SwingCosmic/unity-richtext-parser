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
    
    context.attributes['data-tag-is'] = context.tagName;
    
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
    
    const match = /^([+-])?(\d*\.?\d+)(px|em|rem|pt|%)?$/.exec(sizeStr);
    if (!match) return null;

    const sign = match[1] || '';
    let number = parseFloat(match[2]);
    const unit = match[3] || 'px';
    
    if (sign) {
      let baseNumber = 16; // 默认基准值为16px
      number = sign === '+' ? (baseNumber + number) : (baseNumber - number);
    }

    return `${number}${unit}`;
  }
}

import { TagContext } from '../types';
import { TagConverter } from './TagConverter';

/**
 * 图片标签转换器
 * 处理 <img> 标签
 */
export class ImageTagConverter extends TagConverter {
  readonly supportedTags = ['img', 'image'];
  
  convert(context: TagContext, domParser: DOMParser): Element {
    const element = this.createElement('img', domParser);
    
    // 设置图片源
    const src = this.parseSrc(context.attributes);
    if (src) {
      element.setAttribute('src', src);
    }
    
    // 设置替代文本
    const alt = this.parseAlt(context.attributes);
    if (alt) {
      element.setAttribute('alt', alt);
    }
    
    // 设置其他属性
    this.setAttributes(element, context.attributes);
    
    return element;
  }
  
  /**
   * 解析图片源地址
   */
  private parseSrc(attributes: Record<string, string | number>): string | null {
    const srcValue = attributes['src'] || attributes['source'] || attributes['url'] || attributes['value'];
    if (!srcValue) return null;
    
    return String(srcValue).trim();
  }
  
  /**
   * 解析替代文本
   */
  private parseAlt(attributes: Record<string, string | number>): string | null {
    const altValue = attributes['alt'] || attributes['title'] || attributes['text'];
    if (!altValue) return null;
    
    return String(altValue).trim();
  }
}

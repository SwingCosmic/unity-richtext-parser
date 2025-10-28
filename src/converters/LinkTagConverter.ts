import { TagContext } from '../types';
import { TagConverter } from './TagConverter';

/**
 * 链接标签转换器
 * 处理 <a> 标签
 */
export class LinkTagConverter extends TagConverter {
  readonly supportedTags = ['a', 'link'];
  
  convert(context: TagContext, domParser: DOMParser): Element {
    const element = this.createElement('a', domParser);
    
    // 设置链接属性
    const href = this.parseHref(context.attributes);
    if (href) {
      element.setAttribute('href', href);
    }
    
    // 设置其他属性
    this.setAttributes(element, context.attributes);
    
    // 如果有内容，设置文本内容
    if (context.content) {
      element.textContent = context.content;
    }
    
    return element;
  }
  
  /**
   * 解析链接地址
   */
  private parseHref(attributes: Record<string, string | number>): string | null {
    const hrefValue = attributes['href'] || attributes['url'] || attributes['value'];
    if (!hrefValue) return null;
    
    const hrefStr = String(hrefValue).trim();
    
    // 确保链接有协议前缀
    if (hrefStr.startsWith('http://') || hrefStr.startsWith('https://') || hrefStr.startsWith('mailto:') || hrefStr.startsWith('tel:')) {
      return hrefStr;
    }
    
    // 如果没有协议，添加https://
    if (hrefStr.includes('.') && !hrefStr.startsWith('#')) {
      return `https://${hrefStr}`;
    }
    
    return hrefStr;
  }
}

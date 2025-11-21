import { TagContext } from '../types';
import { TagConverter } from './TagConverter';

/**
 * 默认标签转换器
 * 处理未知标签，转换为 <span> 元素
 */
export class DefaultTagConverter extends TagConverter {
  readonly supportedTags: string[] = []; // 空数组表示支持所有标签
  
  convert(context: TagContext, domParser: DOMParser): Element {
    // 将未知标签转换为 span 元素
    const element = this.createElement('span', domParser);
    
    // 设置所有属性
    this.setAttributes(element, {
      ...context.attributes,
      'data-tag-is': context.tagName,
    });
    
    return element;
  }
  
  /**
   * 检查是否支持该标签
   * 默认转换器支持所有标签
   */
  supports(tagName: string): boolean {
    return true;
  }
}

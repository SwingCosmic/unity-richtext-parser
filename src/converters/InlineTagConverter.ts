import { TagContext } from '../types';
import { TagConverter } from './TagConverter';

/**
 * 行内样式标签转换器
 * 处理 <b>, <i>, <u>, <s>, <sub>, <sup> 等标签
 */
export class InlineTagConverter extends TagConverter {
  readonly supportedTags = ['b', 'i', 'u', 's', 'sub', 'sup', 'strong', 'em'];
  
  convert(context: TagContext, domParser: DOMParser): Element {
    const element = this.createElement(context.tagName, domParser);
    
    // 设置属性
    this.setAttributes(element, context.attributes);
    
    // 如果有内容，设置文本内容
    if (context.content) {
      element.textContent = context.content;
    }
    
    return element;
  }
}

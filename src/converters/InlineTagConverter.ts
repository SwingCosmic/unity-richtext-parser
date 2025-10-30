import { TagContext } from '../types';
import { TagConverter } from './TagConverter';

/**
 * 行内样式标签转换器
 * 处理 <b>, <i>, <u>, <s>, <sub>, <sup> 等标签
 */
export class InlineTagConverter extends TagConverter {
  readonly supportedTags = ['b', 'i', 'u', 's', 'sub', 'sup'];
  
  convert(context: TagContext, domParser: DOMParser): Element {
    const element = this.createElement(context.tagName, domParser);
    
    // 设置属性
    this.setAttributes(element, context.attributes);
    
    return element;
  }
}

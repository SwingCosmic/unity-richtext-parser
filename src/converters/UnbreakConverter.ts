import { TagContext } from '../types';
import { HSRInterpolationProcessor } from '../utils/HSRInterpolationProcessor';
import { TagConverter } from './TagConverter';

/**
 * SR Tools的unbreak标签
 */
export class UnbreakConverter extends TagConverter {
  readonly supportedTags = ['unbreak'];
  
  convert(context: TagContext, domParser: DOMParser): Element {
    const element = this.createElement("span", domParser);
    
    // 设置属性
    this.setStyle(element, {
      padding: "0 4px",
    });
    
    // 如果有内容，设置文本内容
    if (context.content) {
      const text = context.content.getText();
      element.textContent = HSRInterpolationProcessor.process(text, context.data);
      context.skipChildren = true;
    }
    
    return element;
  }
}

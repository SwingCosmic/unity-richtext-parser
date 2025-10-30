import { TagContext } from '../types';
import { TagConverter } from './TagConverter';

/**
 * 换行标签转换器
 */
export class BrTagConverter extends TagConverter {
  readonly supportedTags = ['br'];
  
  convert(context: TagContext, domParser: DOMParser): Element {
    return this.createElement(context.tagName, domParser);
  }
}

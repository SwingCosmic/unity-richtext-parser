import { TagContext, TagConverter as ITagConverter } from '../types';

/**
 * 抽象标签转换器基类
 */
export abstract class TagConverter implements ITagConverter {
  abstract readonly supportedTags: string[];
  
  abstract convert(context: TagContext, domParser: DOMParser): Element;
  
  /**
   * 创建基础DOM元素
   */
  protected createElement(tagName: string, domParser: DOMParser): Element {
    const doc = domParser.parseFromString(`<${tagName}></${tagName}>`, 'text/html');
    return doc.body.firstElementChild!;
  }
  
  /**
   * 设置元素属性
   */
  protected setAttributes(element: Element, attributes: Record<string, string | number>): void {
    for (const [key, value] of Object.entries(attributes)) {
      if (key === 'style') {
        this.setStyle(element, value as any);
      } else {
        // 普通属性
        element.setAttribute(key, String(value));
      }
    }
  }
  
  /**
   * 设置元素样式
   */
  protected setStyle(element: Element, styles: Record<string, string>): void {
    // const styleString = Object.entries(styles)
    //   .map(([prop, value]) => `${prop}: ${value};`)
    //   .join(' ');
    // element.setAttribute('style', styleString);
    let style = (element as HTMLElement).style;
    for (const [s, v] of Object.entries(styles)) {
      style.setProperty(s, String(v));
    }
  }
}

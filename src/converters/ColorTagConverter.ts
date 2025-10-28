import { TagContext } from '../types';
import { TagConverter } from './TagConverter';

/**
 * 颜色标签转换器
 * 处理 <color> 标签
 */
export class ColorTagConverter extends TagConverter {
  readonly supportedTags = ['color'];
  
  convert(context: TagContext, domParser: DOMParser): Element {
    const element = this.createElement('span', domParser);
    
    // 设置颜色样式
    const color = this.parseColor(context.attributes);
    if (color) {
      this.setStyle(element, { color });
    }
    delete context.attributes['color'];
    
    // 设置其他属性
    this.setAttributes(element, context.attributes);
    
    // 如果有内容，设置文本内容
    if (context.content) {
      element.textContent = context.content;
    }
    
    return element;
  }
  
  /**
   * 解析颜色值
   */
  private parseColor(attributes: Record<string, string | number>): string | null {
    const colorValue = attributes['value'] || attributes['color'];
    if (!colorValue) return null;
    
    const colorStr = String(colorValue).trim();
    
    // 处理十六进制颜色
    if (colorStr.startsWith('#')) {
      return colorStr;
    }
    
    // 处理rgb颜色
    if (colorStr.startsWith('rgb')) {
      return colorStr;
    }
    
    // 处理颜色名称
    const colorNames: Record<string, string> = {
      'red': '#ff0000',
      'green': '#00ff00',
      'blue': '#0000ff',
      'yellow': '#ffff00',
      'cyan': '#00ffff',
      'magenta': '#ff00ff',
      'black': '#000000',
      'white': '#ffffff',
      'gray': '#808080',
      'grey': '#808080',
      'orange': '#ffa500',
      'purple': '#800080',
      'pink': '#ffc0cb',
      'brown': '#a52a2a'
    };
    
    return colorNames[colorStr.toLowerCase()] || colorStr;
  }
}

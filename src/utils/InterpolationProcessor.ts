import template from 'lodash.template';

/**
 * 插值表达式处理器
 * 使用 lodash.template 处理插值表达式
 */
export class InterpolationProcessor {
  /**
   * 处理文本中的插值表达式
   * @param text 包含插值表达式的文本
   * @param data 插值数据对象
   * @returns 处理后的文本
   */
  static process(text: string, data?: Record<string, any>): string {
    if (!data || Object.keys(data).length === 0) {
      return text;
    }

    try {
      // 使用 lodash.template 处理插值表达式
      const compiled = template(text, {
        interpolate: /<%=([\s\S]+?)%>/g, // 匹配 <%= expression %>
        escape: /<%-([\s\S]+?)%>/g,      // 匹配 <%- expression %>
        evaluate: /<%([\s\S]+?)%>/g      // 匹配 <% code %>
      });

      return compiled(data);
    } catch (error) {
      // 如果处理失败，返回原始文本
      console.warn('插值表达式处理失败:', error);
      return text;
    }
  }

}

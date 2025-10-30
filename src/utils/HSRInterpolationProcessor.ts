
/**
 * 插值表达式处理器
 * 使用 lodash.template 处理插值表达式
 */
export class HSRInterpolationProcessor {
  /**
   * 处理文本中的插值表达式
   * @param text 包含插值表达式的文本
   * @param data 插值数据对象
   * @returns 处理后的文本
   */
  static process(text: string, data?: number[]): string {
    if (!Array.isArray(data)) {
      return text;
    }

    try {
      
      return text.replaceAll(/#(\d+)\[([A-Za-z0-9]+)\](%*)/g, (match, index, format, hasPercent) => {
        let rawValue = data[parseInt(index) - 1];
        hasPercent ||= "";
        if (hasPercent) {
          rawValue *= 100;
        }
        if (format == "i") {
          return String(~~rawValue) + hasPercent;
        } else if (format.startsWith("f")) {
          const precision = parseInt(format.slice(1));
          return rawValue.toFixed(precision) + hasPercent;
        } else {
          console.warn(`未知的格式：${format}`);
          return String(rawValue) + hasPercent;
        }
      });
    } catch (error) {
      // 如果处理失败，返回原始文本
      console.warn('插值表达式处理失败:', error);
      return text;
    }
  }

}

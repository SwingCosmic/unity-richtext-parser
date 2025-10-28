export interface ParseOptions {
  /**
   * 是否启用插值表达式
   */
  enableInterpolation?: boolean;
  
  /**
   * 插值表达式使用的数据对象
   */
  data?: Record<string, any>;
  
  /**
   * 自定义标签转换器
   */
  customConverters?: Record<string, TagConverter>;
  
  /**
   * DOM解析器实例
   */
  domParser?: DOMParser;
}

export interface TagContext {
  /**
   * 标签名
   */
  tagName: string;
  
  /**
   * 标签属性
   */
  attributes: Record<string, string | number>;
  
  /**
   * 标签内容（对于非自闭合标签）
   */
  content?: string;
  
  /**
   * 父级DOM元素
   */
  parentElement?: Element;
}

export interface TagConverter {
  /**
   * 转换标签为DOM元素
   * @param context 标签上下文
   * @param domParser DOM解析器实例
   * @returns 转换后的DOM元素
   */
  convert(context: TagContext, domParser: DOMParser): Element;
  
  /**
   * 支持的标签名
   */
  supportedTags: string[];
}

export interface ParseResult {
  /**
   * 解析后的DOM文档片段
   */
  fragment: DocumentFragment;
  
  /**
   * 解析后的HTML字符串
   */
  html: string;
  
  /**
   * 解析过程中遇到的错误
   */
  errors: ParseError[];
}

export interface ParseError {
  /**
   * 错误消息
   */
  message: string;
  
  /**
   * 错误位置（如果可用）
   */
  position?: number;
  
  /**
   * 错误类型
   */
  type: 'syntax' | 'semantic' | 'conversion';
}

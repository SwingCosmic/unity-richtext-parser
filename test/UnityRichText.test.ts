/// <reference types="jest" />

import UnityRichText from '../src';
import { UnityRichTextSerializer } from '../src/UnityRichTextSerializer';

describe('UnityRichText', () => {
  let parser: UnityRichTextSerializer;

  beforeEach(() => {
    parser = new UnityRichTextSerializer();
  });

  describe('parseToHTML', () => {
    it('应该解析普通文本', () => {
      const result = parser.parseToHTML('Hello World');
      expect(result).toBe('Hello World');
    });

    it('应该处理HTML转义', () => {
      const result = parser.parseToHTML('Love&nbsp;&amp;&nbsp;Peace');
      expect(result).toBe('Love&nbsp;&amp;&nbsp;Peace');
    });

    // it('应该处理转义插值表达式', () => {
    //   const result = parser.parseToHTML('Hello <%- name %>', {
    //     data: { name: '<World>' }
    //   });
    //   expect(result).toBe('Hello <World>');
    // });

    it('应该解析粗体标签', () => {
      const result = parser.parseToHTML('<b>Bold Text</b>');
      expect(result).toBe('<b>Bold Text</b>');
    });

    it('应该解析斜体标签', () => {
      const result = parser.parseToHTML('<i>Italic Text</i>');
      expect(result).toBe('<i>Italic Text</i>');
    });

    it('应该解析颜色标签', () => {
      const result = parser.parseToHTML('<color=#ff0000>Red Text</color>');
      expect(result).toBe('<span style="color: #ff0000;">Red Text</span>');
    });

    it('应该解析大小标签', () => {
      const result = parser.parseToHTML('<size=20>Large Text</size>');
      expect(result).toBe('<span style="font-size: 20px;">Large Text</span>');
    });

    // it('应该解析链接标签', () => {
    //   const result = parser.parseToHTML('<a href="https://example.com">Link</a>');
    //   expect(result).toBe('<a href="https://example.com">Link</a>');
    // });

    // it('应该解析图片标签', () => {
    //   const result = parser.parseToHTML('<img src="image.png" />');
    //   expect(result).toBe('<img src="image.png">');
    // });

    it('应该处理嵌套标签', () => {
      const result = parser.parseToHTML('<b><i>Bold Italic</i>other</b>');
      expect(result).toBe('<b><i>Bold Italic</i>other</b>');
    });

    it('应该处理未知标签', () => {
      const result = parser.parseToHTML('<unknown>Text</unknown>');
      expect(result).toBe('<span>Text</span>');
    });

    it('应该处理未知属性', () => {
      const result = parser.parseToHTML('<b size=20>Text</b>');
      expect(result).toBe('<b size="20">Text</b>');
    });
  });

  describe('parseToDOM', () => {
    it('应该返回DOM元素', () => {
      const result = parser.parseToDOM('Hello World');
      expect(result).toBeInstanceOf(Element);
      expect(result.tagName).toBe('DIV');
      expect(result.textContent).toBe('Hello World');
    });

    it('应该使用自定义DOM解析器', () => {
      const customParser = new DOMParser();
      const result = parser.parseToDOM('Hello World', {
        domParser: customParser
      });
      expect(result).toBeInstanceOf(Element);
    });

    it('应该解析富文本标签为DOM', () => {
      const result = parser.parseToDOM('<b>Bold</b> and <i>Italic</i>');
      expect(result.innerHTML).toBe('<b>Bold</b> and <i>Italic</i>');
    });
  });

  describe('default instance', () => {
    it('应该提供默认实例', () => {
      expect(UnityRichText).toBeInstanceOf(UnityRichTextSerializer);
    });

    it('默认实例应该工作正常', () => {
      const result = UnityRichText.parseToHTML('Hello World');
      expect(result).toBe('Hello World');
    });

    it('默认实例应该支持富文本标签', () => {
      const result = UnityRichText.parseToHTML('<b>Bold</b>');
      expect(result).toBe('<b>Bold</b>');
    });
  });
});

# unity-richtext

一个可扩展的Unity富文本解析器和DOM转换器

## Features

* 采用ANTLR4解析，支持多种富文本标签语法
* 兼容大部分HTML语法，并且支持HTML实体转义如`&lt;`
* 支持UGUI, TextMeshPro, 和UI Toolkit各自的版本
* 针对不同标签的转换器可以扩展和自定义替换
* 支持插值表达式，并且可以自定义插值语法和处理器
* 未知标签和属性可以转换为回退默认元素，默认为`<span>`
* 可以用来处理半结构化的LLM/agent输出内容，混合了大量文本和自定义标签如`<think>`和`<file_content>`



示例：采用了自定义标签解析器、自定义插值处理器（Ruby和图标）并忽略未知标签的HTML渲染结果，数据内容来自游戏《崩坏：星穹铁道》

![预览示例](https://github.com/user-attachments/assets/e92f581d-57ea-4521-9c59-a8d4e4190746)

## 语法支持

### 标签语法


* `<br />` 简单自闭标签
* `<u>underline</u>` 简单成对标签
* `<a href="https://github.com">GitHub</a>` 带普通属性的标签，支持成对和自闭形式。属性值只包含字母数字时可以省略引号
* `<color=#FF0000>red text</color>` 默认属性标签，支持成对和自闭形式

### 注释

* `<!-- comment -->` 注释标签

### 文本内容

* 不构成完整标签的 `<` 按普通文本保留，例如 `a < b` 和颜文字
* 支持HTML实体转义，可用`&lt;`代替`<`
* 保留原始空白字符；浏览器中的显示方式由 CSS `white-space` 决定

### 注意事项

* 默认将 `br`、`img`、`image` 的隐式自闭形式补为 `/>`。通过 `selfClosingTags` 指定完整白名单；已有自闭形式和明确成对的标签保持不变。
* 未配对的标签头保留为可见文本，后续合法内容继续转换，不自动补结束标签。
* `onDiagnostic` 可接收恢复性诊断，含 `stage`、`message` 和 UTF-16 `position`。位置对应当前阶段输入：插值阶段使用原文，标签解析阶段使用插值及白名单规范化后的文本。


## 快速开始

```typescript

import UnityRichText from 'unity-richtext';

const text = `<color=#FFFF00>Hello, ${name}!</color>`;
UnityRichText.parseToHTML(desc, {
  name: 'World'
});

// <span style="color: #FFFF00;">Hello, World!</span>

```

## 插值处理器

您可以自定义插值处理器来应对各种字符串插值表达式。
例如，使用lodash.template来将`${expr}`风格换成`<%= expr %>`。

* 插值处理器支持返回HTML，但需要自行处理以防止XSS注入

### 整段插值

旧的 `process(text, data)` 在文本节点上执行，返回字符串时作为文本插入，返回 DOM 元素时直接插入。
需要处理跨标签表达式时，可提供 `processSource(text, data, context)`：

```typescript
const converter = new UnityRichTextConverter({
  interpolationProcessor: {
    process: text => text,
    processSource(text, data, context) {
      // 在此调用业务自己的插值解析器，返回 Unity 富文本字符串。
      // context.reportDiagnostic({ stage: 'interpolation', position: 0, message: '...' });
      return text;
    },
  },
  selfClosingTags: ['br', 'img', 'image', 'icon'],
  onDiagnostic: diagnostic => console.warn(diagnostic),
});
```

提供 `processSource` 时每次转换只执行一次，并跳过文本节点的 `process`。
顺序为整段插值、白名单规范化、ANTLR 标签解析、配对校验和 DOM 转换。
游戏插值语法由调用方维护，通用包不解释花括号。插入的普通变量应转义为文本，只有明确的结构表达式生成标签。
`readUnityTag` 提供与 lexer 一致的标签头识别，业务解析器可用它跳过属性中的插值样式字符。

`TagContext.content` 保留为 `ContentContext`，其中的子项为正文及独立标签头；标签配对由转换阶段负责，不再依赖 ANTLR 的嵌套元素恢复。

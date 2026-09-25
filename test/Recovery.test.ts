import { UnityRichTextConverter } from '../src/UnityRichTextConverter';
import { normalizeSelfClosingTags, readUnityTag } from '../src/parser/tagSyntax';
import type { ParseDiagnostic } from '../src/types';

describe('lossless rich text parsing', () => {
  test.each(['', ' ', '\n\t ', 'a < b', 'x<y', '<ﾉ)♡', '🙂 < b', '</textarea>'])('preserves %j', input => {
    expect(new UnityRichTextConverter().parseToDOM(input).textContent).toBe(input);
  });

  test('preserves spaces around tags and entity decoding exactly once', () => {
    const parser = new UnityRichTextConverter();
    expect(parser.parseToHTML('A <b>B</b> C')).toBe('A <b>B</b> C');
    expect(parser.parseToDOM('&lt;b&gt;&amp;lt;').textContent).toBe('<b>&lt;');
    expect(parser.parseToHTML('a <<b>b</b>')).toBe('a &lt;<b>b</b>');
  });

  test.each(['<b>x</i>', '<b>before', '<b broken=>x', '<b><i>x</b></i>'])('reports malformed %s and retains subsequent content', input => {
    const diagnostics: ParseDiagnostic[] = [];
    const parser = new UnityRichTextConverter({ onDiagnostic: item => diagnostics.push(item) });
    const dom = parser.parseToDOM(input + '<u>after</u>');
    expect(dom.querySelector('u')?.textContent).toBe('after');
    expect(dom.textContent).toContain(input.includes('before') ? 'before' : 'x');
    expect(diagnostics.length).toBeGreaterThan(0);
  });

  test('an unclosed parent does not hide a valid nested element', () => {
    expect(new UnityRichTextConverter().parseToHTML('<b>before<i>good</i>')).toBe('&lt;b&gt;before<i>good</i>');
  });

  test('quotes isolate angle brackets in attributes', () => {
    expect(new UnityRichTextConverter().parseToDOM('<b title="a > b < c">text</b>').firstElementChild?.getAttribute('title')).toBe('a > b < c');
    expect(readUnityTag('<b broken=>', 0)).toBeUndefined();
  });

  test('source interpolation takes precedence and runs once per conversion', () => {
    const process = jest.fn(() => 'wrong');
    const processSource = jest.fn(() => '<b>result</b>');
    const parser = new UnityRichTextConverter({ interpolationProcessor: { process, processSource } });
    expect(parser.parseToHTML('source')).toBe('<b>result</b>');
    expect(processSource).toHaveBeenCalledTimes(1);
    expect(process).not.toHaveBeenCalled();
    parser.parseToDOM('source');
    expect(processSource).toHaveBeenCalledTimes(2);
  });

  test('old text processors still receive whole contiguous text', () => {
    const process = jest.fn(text => text.replace('${name}', 'World'));
    expect(new UnityRichTextConverter({ interpolationProcessor: { process } }).parseToHTML('Hello < ${name}')).toBe('Hello &lt; World');
    expect(process).toHaveBeenCalledTimes(1);
  });
});

describe('implicit void tags', () => {
  const names = ['img', 'br', 'icon'];
  test.each([
    ['<img src="a>b" >', '<img src="a>b" />'],
    ['<icon=x>', '<icon=x/>'],
    ['<br/><br />', '<br/><br />'],
    ['<img src="x"></img>', '<img src="x"></img>'],
    ['<unknown>x', '<unknown>x'],
    ['<!-- <br> --><br>', '<!-- <br> --><br/>'],
    ['<img title="<br>">', '<img title="<br>"/>'],
  ])('normalizes %s idempotently', (input, expected) => {
    const output = normalizeSelfClosingTags(input, names);
    expect(output).toBe(expected);
    expect(normalizeSelfClosingTags(output, names)).toBe(output);
  });

  test('default whitelist renders img and br', () => {
    const dom = new UnityRichTextConverter().parseToDOM('<img src="x">a<br>b');
    expect(dom.querySelector('img')?.getAttribute('src')).toBe('x');
    expect(dom.querySelectorAll('br')).toHaveLength(1);
    expect(dom.textContent).toBe('ab');
  });
});

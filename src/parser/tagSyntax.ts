/** Complete Unity tag header; offsets are UTF-16 indices in the input. */
export interface UnityTagHeader {
  name: string;
  end: number;
  closing: boolean;
  selfClosing: boolean;
}

// Keep these lexical atoms aligned with UnityRichTextLexer.g4.
const nameStart = "[_:a-zA-Z\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]";
const name = `${nameStart}(?:${nameStart}|[-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040])*`;
const number = "[+-]?[0-9]+(?:\\.[0-9]+)?";
const value = `(?:"[^"]*"|'[^']*'|#[a-fA-F0-9]+|${number}(?:[a-zA-Z_][a-zA-Z0-9_]*|%)?|${name})`;
const space = "[ \\t\\r\\n]";
const tag = new RegExp(`</(${name})${space}*>|<(${name})(?:${space}*=${space}*${value}|(?:${space}+${name}${space}*=${space}*${value})*)${space}*(/?)>`, "y");

/** Reads a valid header without consuming literal '<' or incomplete tags. */
export function readUnityTag(source: string, start: number): UnityTagHeader | undefined {
  if (source[start] !== "<") return;
  tag.lastIndex = start;
  const match = tag.exec(source);
  if (!match) return;
  return { name: match[1] ?? match[2], end: tag.lastIndex,
    closing: match[1] !== undefined, selfClosing: match[3] === "/" };
}

export const DEFAULT_SELF_CLOSING_TAGS: readonly string[] = ["br", "img", "image"];

/** Repairs only whitelisted implicit void tags; explicit pairs are preserved. */
export function normalizeSelfClosingTags(source: string, names: readonly string[]): string {
  const whitelist = new Set(names.map(name => name.toLowerCase()));
  const headers: UnityTagHeader[] = [];
  const stacks = new Map<string, number[]>();
  const paired = new Set<number>();
  for (let i = 0; i < source.length;) {
    if (source.startsWith("<!--", i)) {
      const end = source.indexOf("-->", i + 4);
      i = end < 0 ? source.length : end + 3;
      continue;
    }
    const header = readUnityTag(source, i);
    if (!header) { i++; continue; }
    const name = header.name.toLowerCase();
    if (whitelist.has(name)) {
      const index = headers.length;
      headers.push(header);
      const stack = stacks.get(name) ?? [];
      stacks.set(name, stack);
      if (header.closing) {
        const open = stack.pop();
        if (open !== undefined) paired.add(open);
      } else if (!header.selfClosing) {
        stack.push(index);
      }
    }
    i = header.end;
  }
  let result = "", cursor = 0;
  headers.forEach((header, index) => {
    if (header.closing || header.selfClosing || paired.has(index)) return;
    result += source.slice(cursor, header.end - 1) + "/>";
    cursor = header.end;
  });
  return result + source.slice(cursor);
}

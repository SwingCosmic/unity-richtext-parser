parser grammar UnityRichTextParser;

options { tokenVocab = UnityRichTextLexer; }

document : content EOF;
content : (element | chardata | COMMENT)*;

// Pair complete headers in the DOM builder, without ANTLR inserting end tags.
element
    : OPEN Name attribute* CLOSE                  # OpenElement
    | OPEN Name EQUALS attributeValue CLOSE       # OpenAbbrElement
    | OPEN SLASH Name CLOSE                       # CloseElement
    | OPEN Name attribute* SLASH_CLOSE            # SelfClosingElement
    | OPEN Name EQUALS attributeValue SLASH_CLOSE  # SelfClosingAbbrElement
    ;
attribute : Name EQUALS attributeValue;
attributeValue : STRING | COLOR | NUMBER_UNIT | NUMBER | Name;
chardata : (TEXT | LITERAL_LT)+;

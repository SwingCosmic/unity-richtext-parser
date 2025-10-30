
lexer grammar UnityRichTextLexer;

// Default "mode": Everything OUTSIDE of a tag
COMMENT : '<!--' .*? '-->';

// EntityRef : '&' Name ';';
// CharRef   : '&#' DIGIT+ ';' | '&#x' HEXDIGIT+ ';';
SEA_WS    : (' ' | '\t' | '\r'? '\n')+;

OPEN         : '<'       -> pushMode(INSIDE);

TEXT: ~[<]+; // match any 16 bit char other than < and &

// ----------------- Everything INSIDE of a tag ---------------------
mode INSIDE;

CLOSE         : '>'  -> popMode;
SLASH_CLOSE   : '/>' -> popMode;
SLASH         : '/';
EQUALS        : '=';
STRING        : '"' ~[<"]* '"' | '\'' ~[<']* '\'';


COLOR         : '#' HEXDIGIT+;
NUMBER_UNIT   : NUMBER (IDENTIFIER | '%');
NUMBER        : '-'? DIGIT+ ('.' DIGIT+)?;

Name          : NameStartChar NameChar*;
S             : [ \t\r\n] -> skip;



fragment HEXDIGIT: [a-fA-F0-9];
fragment IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;

fragment DIGIT: [0-9];

fragment NameChar:
    NameStartChar
    | '-'
    | '.'
    | DIGIT
    | '\u00B7'
    | '\u0300' ..'\u036F'
    | '\u203F' ..'\u2040'
;

fragment NameStartChar:
    [_:a-zA-Z]
    | '\u2070' ..'\u218F'
    | '\u2C00' ..'\u2FEF'
    | '\u3001' ..'\uD7FF'
    | '\uF900' ..'\uFDCF'
    | '\uFDF0' ..'\uFFFD'
;

// ----------------- Handle <? ... ?> ---------------------
mode PROC_INSTR;

IGNORE : .    -> more;
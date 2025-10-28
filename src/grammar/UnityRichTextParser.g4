
parser grammar UnityRichTextParser;

options {
    tokenVocab = UnityRichTextLexer;
}

document
    : (misc | element | chardata)+  EOF
    ;


content
    : chardata? ((element  | COMMENT) chardata?)*
    ;

element
    : '<' Name attribute* '>' content '<' '/' Name '>'         # PairedElement
    | '<' Name '=' attributeValue '>' content '<' '/' Name '>' # PairedAbbrElement
    | '<' Name attribute* '/>'                                 # SelfClosingElement
    | '<' Name '=' attributeValue '/>'                         # SelfClosingAbbrElement
    ;


attribute
    : Name '=' attributeValue
    ; // Our STRING is AttValue in spec

attributeValue
    : COLOR
    | NUMBER
    | Name 
    ;

/** ``All text that is not markup constitutes the character data of
 *  the document.''
 */
chardata
    : TEXT
    | SEA_WS
    ;

misc
    : COMMENT
    | SEA_WS
    ;
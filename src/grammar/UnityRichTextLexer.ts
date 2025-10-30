// Generated from UnityRichTextLexer.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class UnityRichTextLexer extends Lexer {
	public static readonly COMMENT = 1;
	public static readonly SEA_WS = 2;
	public static readonly OPEN = 3;
	public static readonly TEXT = 4;
	public static readonly CLOSE = 5;
	public static readonly SLASH_CLOSE = 6;
	public static readonly SLASH = 7;
	public static readonly EQUALS = 8;
	public static readonly STRING = 9;
	public static readonly COLOR = 10;
	public static readonly NUMBER_UNIT = 11;
	public static readonly NUMBER = 12;
	public static readonly Name = 13;
	public static readonly S = 14;
	public static readonly EOF = Token.EOF;
	public static readonly INSIDE = 1;
	public static readonly PROC_INSTR = 2;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, "'<'", 
                                                            null, "'>'", 
                                                            "'/>'", "'/'", 
                                                            "'='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "COMMENT", 
                                                             "SEA_WS", "OPEN", 
                                                             "TEXT", "CLOSE", 
                                                             "SLASH_CLOSE", 
                                                             "SLASH", "EQUALS", 
                                                             "STRING", "COLOR", 
                                                             "NUMBER_UNIT", 
                                                             "NUMBER", "Name", 
                                                             "S" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", "INSIDE", 
                                                "PROC_INSTR", ];

	public static readonly ruleNames: string[] = [
		"COMMENT", "SEA_WS", "OPEN", "TEXT", "CLOSE", "SLASH_CLOSE", "SLASH", 
		"EQUALS", "STRING", "COLOR", "NUMBER_UNIT", "NUMBER", "Name", "S", "HEXDIGIT", 
		"IDENTIFIER", "DIGIT", "NameChar", "NameStartChar", "IGNORE",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, UnityRichTextLexer._ATN, UnityRichTextLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "UnityRichTextLexer.g4"; }

	public get literalNames(): (string | null)[] { return UnityRichTextLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return UnityRichTextLexer.symbolicNames; }
	public get ruleNames(): string[] { return UnityRichTextLexer.ruleNames; }

	public get serializedATN(): number[] { return UnityRichTextLexer._serializedATN; }

	public get channelNames(): string[] { return UnityRichTextLexer.channelNames; }

	public get modeNames(): string[] { return UnityRichTextLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,14,169,6,-1,6,-1,
	6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,
	8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,
	15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,0,1,0,1,0,1,0,1,0,1,0,5,0,
	50,8,0,10,0,12,0,53,9,0,1,0,1,0,1,0,1,0,1,1,1,1,3,1,61,8,1,1,1,4,1,64,8,
	1,11,1,12,1,65,1,2,1,2,1,2,1,2,1,3,4,3,73,8,3,11,3,12,3,74,1,4,1,4,1,4,
	1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,5,8,92,8,8,10,8,12,8,95,
	9,8,1,8,1,8,1,8,5,8,100,8,8,10,8,12,8,103,9,8,1,8,3,8,106,8,8,1,9,1,9,4,
	9,110,8,9,11,9,12,9,111,1,10,1,10,1,10,3,10,117,8,10,1,11,3,11,120,8,11,
	1,11,4,11,123,8,11,11,11,12,11,124,1,11,1,11,4,11,129,8,11,11,11,12,11,
	130,3,11,133,8,11,1,12,1,12,5,12,137,8,12,10,12,12,12,140,9,12,1,13,1,13,
	1,13,1,13,1,14,1,14,1,15,1,15,5,15,150,8,15,10,15,12,15,153,9,15,1,16,1,
	16,1,17,1,17,1,17,1,17,3,17,161,8,17,1,18,3,18,164,8,18,1,19,1,19,1,19,
	1,19,1,51,0,20,3,1,5,2,7,3,9,4,11,5,13,6,15,7,17,8,19,9,21,10,23,11,25,
	12,27,13,29,14,31,0,33,0,35,0,37,0,39,0,41,0,3,0,1,2,11,2,0,9,9,32,32,1,
	0,60,60,2,0,34,34,60,60,2,0,39,39,60,60,3,0,9,10,13,13,32,32,3,0,48,57,
	65,70,97,102,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,1,0,48,
	57,3,0,183,183,768,879,8255,8256,9,0,58,58,65,90,95,95,97,122,8304,8591,
	11264,12271,12289,55295,63744,64975,65008,65533,180,0,3,1,0,0,0,0,5,1,0,
	0,0,0,7,1,0,0,0,0,9,1,0,0,0,1,11,1,0,0,0,1,13,1,0,0,0,1,15,1,0,0,0,1,17,
	1,0,0,0,1,19,1,0,0,0,1,21,1,0,0,0,1,23,1,0,0,0,1,25,1,0,0,0,1,27,1,0,0,
	0,1,29,1,0,0,0,2,41,1,0,0,0,3,43,1,0,0,0,5,63,1,0,0,0,7,67,1,0,0,0,9,72,
	1,0,0,0,11,76,1,0,0,0,13,80,1,0,0,0,15,85,1,0,0,0,17,87,1,0,0,0,19,105,
	1,0,0,0,21,107,1,0,0,0,23,113,1,0,0,0,25,119,1,0,0,0,27,134,1,0,0,0,29,
	141,1,0,0,0,31,145,1,0,0,0,33,147,1,0,0,0,35,154,1,0,0,0,37,160,1,0,0,0,
	39,163,1,0,0,0,41,165,1,0,0,0,43,44,5,60,0,0,44,45,5,33,0,0,45,46,5,45,
	0,0,46,47,5,45,0,0,47,51,1,0,0,0,48,50,9,0,0,0,49,48,1,0,0,0,50,53,1,0,
	0,0,51,52,1,0,0,0,51,49,1,0,0,0,52,54,1,0,0,0,53,51,1,0,0,0,54,55,5,45,
	0,0,55,56,5,45,0,0,56,57,5,62,0,0,57,4,1,0,0,0,58,64,7,0,0,0,59,61,5,13,
	0,0,60,59,1,0,0,0,60,61,1,0,0,0,61,62,1,0,0,0,62,64,5,10,0,0,63,58,1,0,
	0,0,63,60,1,0,0,0,64,65,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,6,1,0,0,
	0,67,68,5,60,0,0,68,69,1,0,0,0,69,70,6,2,0,0,70,8,1,0,0,0,71,73,8,1,0,0,
	72,71,1,0,0,0,73,74,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,10,1,0,0,0,76,
	77,5,62,0,0,77,78,1,0,0,0,78,79,6,4,1,0,79,12,1,0,0,0,80,81,5,47,0,0,81,
	82,5,62,0,0,82,83,1,0,0,0,83,84,6,5,1,0,84,14,1,0,0,0,85,86,5,47,0,0,86,
	16,1,0,0,0,87,88,5,61,0,0,88,18,1,0,0,0,89,93,5,34,0,0,90,92,8,2,0,0,91,
	90,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,96,1,0,0,0,95,93,
	1,0,0,0,96,106,5,34,0,0,97,101,5,39,0,0,98,100,8,3,0,0,99,98,1,0,0,0,100,
	103,1,0,0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,104,1,0,0,0,103,101,1,0,
	0,0,104,106,5,39,0,0,105,89,1,0,0,0,105,97,1,0,0,0,106,20,1,0,0,0,107,109,
	5,35,0,0,108,110,3,31,14,0,109,108,1,0,0,0,110,111,1,0,0,0,111,109,1,0,
	0,0,111,112,1,0,0,0,112,22,1,0,0,0,113,116,3,25,11,0,114,117,3,33,15,0,
	115,117,5,37,0,0,116,114,1,0,0,0,116,115,1,0,0,0,117,24,1,0,0,0,118,120,
	5,45,0,0,119,118,1,0,0,0,119,120,1,0,0,0,120,122,1,0,0,0,121,123,3,35,16,
	0,122,121,1,0,0,0,123,124,1,0,0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,132,
	1,0,0,0,126,128,5,46,0,0,127,129,3,35,16,0,128,127,1,0,0,0,129,130,1,0,
	0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,133,1,0,0,0,132,126,1,0,0,0,132,
	133,1,0,0,0,133,26,1,0,0,0,134,138,3,39,18,0,135,137,3,37,17,0,136,135,
	1,0,0,0,137,140,1,0,0,0,138,136,1,0,0,0,138,139,1,0,0,0,139,28,1,0,0,0,
	140,138,1,0,0,0,141,142,7,4,0,0,142,143,1,0,0,0,143,144,6,13,2,0,144,30,
	1,0,0,0,145,146,7,5,0,0,146,32,1,0,0,0,147,151,7,6,0,0,148,150,7,7,0,0,
	149,148,1,0,0,0,150,153,1,0,0,0,151,149,1,0,0,0,151,152,1,0,0,0,152,34,
	1,0,0,0,153,151,1,0,0,0,154,155,7,8,0,0,155,36,1,0,0,0,156,161,3,39,18,
	0,157,161,2,45,46,0,158,161,3,35,16,0,159,161,7,9,0,0,160,156,1,0,0,0,160,
	157,1,0,0,0,160,158,1,0,0,0,160,159,1,0,0,0,161,38,1,0,0,0,162,164,7,10,
	0,0,163,162,1,0,0,0,164,40,1,0,0,0,165,166,9,0,0,0,166,167,1,0,0,0,167,
	168,6,19,3,0,168,42,1,0,0,0,21,0,1,2,51,60,63,65,74,93,101,105,111,116,
	119,124,130,132,138,151,160,163,4,5,1,0,4,0,0,6,0,0,3,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!UnityRichTextLexer.__ATN) {
			UnityRichTextLexer.__ATN = new ATNDeserializer().deserialize(UnityRichTextLexer._serializedATN);
		}

		return UnityRichTextLexer.__ATN;
	}


	static DecisionsToDFA = UnityRichTextLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}
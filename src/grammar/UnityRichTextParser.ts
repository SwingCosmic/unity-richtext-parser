// Generated from UnityRichTextParser.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import UnityRichTextParserListener from "./UnityRichTextParserListener.js";
import UnityRichTextParserVisitor from "./UnityRichTextParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class UnityRichTextParser extends Parser {
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
	public static readonly NUMBER = 11;
	public static readonly Name = 12;
	public static readonly S = 13;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_document = 0;
	public static readonly RULE_content = 1;
	public static readonly RULE_element = 2;
	public static readonly RULE_attribute = 3;
	public static readonly RULE_attributeValue = 4;
	public static readonly RULE_chardata = 5;
	public static readonly RULE_misc = 6;
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
                                                             "NUMBER", "Name", 
                                                             "S" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "content", "element", "attribute", "attributeValue", "chardata", 
		"misc",
	];
	public get grammarFileName(): string { return "UnityRichTextParser.g4"; }
	public get literalNames(): (string | null)[] { return UnityRichTextParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return UnityRichTextParser.symbolicNames; }
	public get ruleNames(): string[] { return UnityRichTextParser.ruleNames; }
	public get serializedATN(): number[] { return UnityRichTextParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, UnityRichTextParser._ATN, UnityRichTextParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public document(): DocumentContext {
		let localctx: DocumentContext = new DocumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, UnityRichTextParser.RULE_document);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 17;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 14;
					this.misc();
					}
					break;
				case 2:
					{
					this.state = 15;
					this.element();
					}
					break;
				case 3:
					{
					this.state = 16;
					this.chardata();
					}
					break;
				}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 30) !== 0));
			this.state = 21;
			this.match(UnityRichTextParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public content(): ContentContext {
		let localctx: ContentContext = new ContentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, UnityRichTextParser.RULE_content);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 24;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2 || _la===4) {
				{
				this.state = 23;
				this.chardata();
				}
			}

			this.state = 35;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 28;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 3:
						{
						this.state = 26;
						this.element();
						}
						break;
					case 1:
						{
						this.state = 27;
						this.match(UnityRichTextParser.COMMENT);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 31;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===2 || _la===4) {
						{
						this.state = 30;
						this.chardata();
						}
					}

					}
					}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let localctx: ElementContext = new ElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, UnityRichTextParser.RULE_element);
		let _la: number;
		try {
			this.state = 79;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				localctx = new PairedElementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 38;
				this.match(UnityRichTextParser.OPEN);
				this.state = 39;
				this.match(UnityRichTextParser.Name);
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===12) {
					{
					{
					this.state = 40;
					this.attribute();
					}
					}
					this.state = 45;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 46;
				this.match(UnityRichTextParser.CLOSE);
				this.state = 47;
				this.content();
				this.state = 48;
				this.match(UnityRichTextParser.OPEN);
				this.state = 49;
				this.match(UnityRichTextParser.SLASH);
				this.state = 50;
				this.match(UnityRichTextParser.Name);
				this.state = 51;
				this.match(UnityRichTextParser.CLOSE);
				}
				break;
			case 2:
				localctx = new PairedAbbrElementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 53;
				this.match(UnityRichTextParser.OPEN);
				this.state = 54;
				this.match(UnityRichTextParser.Name);
				this.state = 55;
				this.match(UnityRichTextParser.EQUALS);
				this.state = 56;
				this.attributeValue();
				this.state = 57;
				this.match(UnityRichTextParser.CLOSE);
				this.state = 58;
				this.content();
				this.state = 59;
				this.match(UnityRichTextParser.OPEN);
				this.state = 60;
				this.match(UnityRichTextParser.SLASH);
				this.state = 61;
				this.match(UnityRichTextParser.Name);
				this.state = 62;
				this.match(UnityRichTextParser.CLOSE);
				}
				break;
			case 3:
				localctx = new SelfClosingElementContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 64;
				this.match(UnityRichTextParser.OPEN);
				this.state = 65;
				this.match(UnityRichTextParser.Name);
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===12) {
					{
					{
					this.state = 66;
					this.attribute();
					}
					}
					this.state = 71;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 72;
				this.match(UnityRichTextParser.SLASH_CLOSE);
				}
				break;
			case 4:
				localctx = new SelfClosingAbbrElementContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 73;
				this.match(UnityRichTextParser.OPEN);
				this.state = 74;
				this.match(UnityRichTextParser.Name);
				this.state = 75;
				this.match(UnityRichTextParser.EQUALS);
				this.state = 76;
				this.attributeValue();
				this.state = 77;
				this.match(UnityRichTextParser.SLASH_CLOSE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let localctx: AttributeContext = new AttributeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, UnityRichTextParser.RULE_attribute);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 81;
			this.match(UnityRichTextParser.Name);
			this.state = 82;
			this.match(UnityRichTextParser.EQUALS);
			this.state = 83;
			this.attributeValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attributeValue(): AttributeValueContext {
		let localctx: AttributeValueContext = new AttributeValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, UnityRichTextParser.RULE_attributeValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 85;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7168) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public chardata(): ChardataContext {
		let localctx: ChardataContext = new ChardataContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, UnityRichTextParser.RULE_chardata);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 87;
			_la = this._input.LA(1);
			if(!(_la===2 || _la===4)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public misc(): MiscContext {
		let localctx: MiscContext = new MiscContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, UnityRichTextParser.RULE_misc);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 89;
			_la = this._input.LA(1);
			if(!(_la===1 || _la===2)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,13,92,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,1,0,1,0,1,0,4,0,18,8,0,11,
	0,12,0,19,1,0,1,0,1,1,3,1,25,8,1,1,1,1,1,3,1,29,8,1,1,1,3,1,32,8,1,5,1,
	34,8,1,10,1,12,1,37,9,1,1,2,1,2,1,2,5,2,42,8,2,10,2,12,2,45,9,2,1,2,1,2,
	1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
	1,2,5,2,68,8,2,10,2,12,2,71,9,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,80,8,2,
	1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,3,1,
	0,10,12,2,0,2,2,4,4,1,0,1,2,96,0,17,1,0,0,0,2,24,1,0,0,0,4,79,1,0,0,0,6,
	81,1,0,0,0,8,85,1,0,0,0,10,87,1,0,0,0,12,89,1,0,0,0,14,18,3,12,6,0,15,18,
	3,4,2,0,16,18,3,10,5,0,17,14,1,0,0,0,17,15,1,0,0,0,17,16,1,0,0,0,18,19,
	1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,21,1,0,0,0,21,22,5,0,0,1,22,1,1,
	0,0,0,23,25,3,10,5,0,24,23,1,0,0,0,24,25,1,0,0,0,25,35,1,0,0,0,26,29,3,
	4,2,0,27,29,5,1,0,0,28,26,1,0,0,0,28,27,1,0,0,0,29,31,1,0,0,0,30,32,3,10,
	5,0,31,30,1,0,0,0,31,32,1,0,0,0,32,34,1,0,0,0,33,28,1,0,0,0,34,37,1,0,0,
	0,35,33,1,0,0,0,35,36,1,0,0,0,36,3,1,0,0,0,37,35,1,0,0,0,38,39,5,3,0,0,
	39,43,5,12,0,0,40,42,3,6,3,0,41,40,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,
	43,44,1,0,0,0,44,46,1,0,0,0,45,43,1,0,0,0,46,47,5,5,0,0,47,48,3,2,1,0,48,
	49,5,3,0,0,49,50,5,7,0,0,50,51,5,12,0,0,51,52,5,5,0,0,52,80,1,0,0,0,53,
	54,5,3,0,0,54,55,5,12,0,0,55,56,5,8,0,0,56,57,3,8,4,0,57,58,5,5,0,0,58,
	59,3,2,1,0,59,60,5,3,0,0,60,61,5,7,0,0,61,62,5,12,0,0,62,63,5,5,0,0,63,
	80,1,0,0,0,64,65,5,3,0,0,65,69,5,12,0,0,66,68,3,6,3,0,67,66,1,0,0,0,68,
	71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,72,1,0,0,0,71,69,1,0,0,0,72,80,
	5,6,0,0,73,74,5,3,0,0,74,75,5,12,0,0,75,76,5,8,0,0,76,77,3,8,4,0,77,78,
	5,6,0,0,78,80,1,0,0,0,79,38,1,0,0,0,79,53,1,0,0,0,79,64,1,0,0,0,79,73,1,
	0,0,0,80,5,1,0,0,0,81,82,5,12,0,0,82,83,5,8,0,0,83,84,3,8,4,0,84,7,1,0,
	0,0,85,86,7,0,0,0,86,9,1,0,0,0,87,88,7,1,0,0,88,11,1,0,0,0,89,90,7,2,0,
	0,90,13,1,0,0,0,9,17,19,24,28,31,35,43,69,79];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!UnityRichTextParser.__ATN) {
			UnityRichTextParser.__ATN = new ATNDeserializer().deserialize(UnityRichTextParser._serializedATN);
		}

		return UnityRichTextParser.__ATN;
	}


	static DecisionsToDFA = UnityRichTextParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class DocumentContext extends ParserRuleContext {
	constructor(parser?: UnityRichTextParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(UnityRichTextParser.EOF, 0);
	}
	public misc_list(): MiscContext[] {
		return this.getTypedRuleContexts(MiscContext) as MiscContext[];
	}
	public misc(i: number): MiscContext {
		return this.getTypedRuleContext(MiscContext, i) as MiscContext;
	}
	public element_list(): ElementContext[] {
		return this.getTypedRuleContexts(ElementContext) as ElementContext[];
	}
	public element(i: number): ElementContext {
		return this.getTypedRuleContext(ElementContext, i) as ElementContext;
	}
	public chardata_list(): ChardataContext[] {
		return this.getTypedRuleContexts(ChardataContext) as ChardataContext[];
	}
	public chardata(i: number): ChardataContext {
		return this.getTypedRuleContext(ChardataContext, i) as ChardataContext;
	}
    public get ruleIndex(): number {
    	return UnityRichTextParser.RULE_document;
	}
	public enterRule(listener: UnityRichTextParserListener): void {
	    if(listener.enterDocument) {
	 		listener.enterDocument(this);
		}
	}
	public exitRule(listener: UnityRichTextParserListener): void {
	    if(listener.exitDocument) {
	 		listener.exitDocument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UnityRichTextParserVisitor<Result>): Result {
		if (visitor.visitDocument) {
			return visitor.visitDocument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContentContext extends ParserRuleContext {
	constructor(parser?: UnityRichTextParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public chardata_list(): ChardataContext[] {
		return this.getTypedRuleContexts(ChardataContext) as ChardataContext[];
	}
	public chardata(i: number): ChardataContext {
		return this.getTypedRuleContext(ChardataContext, i) as ChardataContext;
	}
	public element_list(): ElementContext[] {
		return this.getTypedRuleContexts(ElementContext) as ElementContext[];
	}
	public element(i: number): ElementContext {
		return this.getTypedRuleContext(ElementContext, i) as ElementContext;
	}
	public COMMENT_list(): TerminalNode[] {
	    	return this.getTokens(UnityRichTextParser.COMMENT);
	}
	public COMMENT(i: number): TerminalNode {
		return this.getToken(UnityRichTextParser.COMMENT, i);
	}
    public get ruleIndex(): number {
    	return UnityRichTextParser.RULE_content;
	}
	public enterRule(listener: UnityRichTextParserListener): void {
	    if(listener.enterContent) {
	 		listener.enterContent(this);
		}
	}
	public exitRule(listener: UnityRichTextParserListener): void {
	    if(listener.exitContent) {
	 		listener.exitContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UnityRichTextParserVisitor<Result>): Result {
		if (visitor.visitContent) {
			return visitor.visitContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	constructor(parser?: UnityRichTextParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return UnityRichTextParser.RULE_element;
	}
	public override copyFrom(ctx: ElementContext): void {
		super.copyFrom(ctx);
	}
}
export class SelfClosingAbbrElementContext extends ElementContext {
	constructor(parser: UnityRichTextParser, ctx: ElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OPEN(): TerminalNode {
		return this.getToken(UnityRichTextParser.OPEN, 0);
	}
	public Name(): TerminalNode {
		return this.getToken(UnityRichTextParser.Name, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(UnityRichTextParser.EQUALS, 0);
	}
	public attributeValue(): AttributeValueContext {
		return this.getTypedRuleContext(AttributeValueContext, 0) as AttributeValueContext;
	}
	public SLASH_CLOSE(): TerminalNode {
		return this.getToken(UnityRichTextParser.SLASH_CLOSE, 0);
	}
	public enterRule(listener: UnityRichTextParserListener): void {
	    if(listener.enterSelfClosingAbbrElement) {
	 		listener.enterSelfClosingAbbrElement(this);
		}
	}
	public exitRule(listener: UnityRichTextParserListener): void {
	    if(listener.exitSelfClosingAbbrElement) {
	 		listener.exitSelfClosingAbbrElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UnityRichTextParserVisitor<Result>): Result {
		if (visitor.visitSelfClosingAbbrElement) {
			return visitor.visitSelfClosingAbbrElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PairedElementContext extends ElementContext {
	constructor(parser: UnityRichTextParser, ctx: ElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OPEN_list(): TerminalNode[] {
	    	return this.getTokens(UnityRichTextParser.OPEN);
	}
	public OPEN(i: number): TerminalNode {
		return this.getToken(UnityRichTextParser.OPEN, i);
	}
	public Name_list(): TerminalNode[] {
	    	return this.getTokens(UnityRichTextParser.Name);
	}
	public Name(i: number): TerminalNode {
		return this.getToken(UnityRichTextParser.Name, i);
	}
	public CLOSE_list(): TerminalNode[] {
	    	return this.getTokens(UnityRichTextParser.CLOSE);
	}
	public CLOSE(i: number): TerminalNode {
		return this.getToken(UnityRichTextParser.CLOSE, i);
	}
	public content(): ContentContext {
		return this.getTypedRuleContext(ContentContext, 0) as ContentContext;
	}
	public SLASH(): TerminalNode {
		return this.getToken(UnityRichTextParser.SLASH, 0);
	}
	public attribute_list(): AttributeContext[] {
		return this.getTypedRuleContexts(AttributeContext) as AttributeContext[];
	}
	public attribute(i: number): AttributeContext {
		return this.getTypedRuleContext(AttributeContext, i) as AttributeContext;
	}
	public enterRule(listener: UnityRichTextParserListener): void {
	    if(listener.enterPairedElement) {
	 		listener.enterPairedElement(this);
		}
	}
	public exitRule(listener: UnityRichTextParserListener): void {
	    if(listener.exitPairedElement) {
	 		listener.exitPairedElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UnityRichTextParserVisitor<Result>): Result {
		if (visitor.visitPairedElement) {
			return visitor.visitPairedElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PairedAbbrElementContext extends ElementContext {
	constructor(parser: UnityRichTextParser, ctx: ElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OPEN_list(): TerminalNode[] {
	    	return this.getTokens(UnityRichTextParser.OPEN);
	}
	public OPEN(i: number): TerminalNode {
		return this.getToken(UnityRichTextParser.OPEN, i);
	}
	public Name_list(): TerminalNode[] {
	    	return this.getTokens(UnityRichTextParser.Name);
	}
	public Name(i: number): TerminalNode {
		return this.getToken(UnityRichTextParser.Name, i);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(UnityRichTextParser.EQUALS, 0);
	}
	public attributeValue(): AttributeValueContext {
		return this.getTypedRuleContext(AttributeValueContext, 0) as AttributeValueContext;
	}
	public CLOSE_list(): TerminalNode[] {
	    	return this.getTokens(UnityRichTextParser.CLOSE);
	}
	public CLOSE(i: number): TerminalNode {
		return this.getToken(UnityRichTextParser.CLOSE, i);
	}
	public content(): ContentContext {
		return this.getTypedRuleContext(ContentContext, 0) as ContentContext;
	}
	public SLASH(): TerminalNode {
		return this.getToken(UnityRichTextParser.SLASH, 0);
	}
	public enterRule(listener: UnityRichTextParserListener): void {
	    if(listener.enterPairedAbbrElement) {
	 		listener.enterPairedAbbrElement(this);
		}
	}
	public exitRule(listener: UnityRichTextParserListener): void {
	    if(listener.exitPairedAbbrElement) {
	 		listener.exitPairedAbbrElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UnityRichTextParserVisitor<Result>): Result {
		if (visitor.visitPairedAbbrElement) {
			return visitor.visitPairedAbbrElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelfClosingElementContext extends ElementContext {
	constructor(parser: UnityRichTextParser, ctx: ElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OPEN(): TerminalNode {
		return this.getToken(UnityRichTextParser.OPEN, 0);
	}
	public Name(): TerminalNode {
		return this.getToken(UnityRichTextParser.Name, 0);
	}
	public SLASH_CLOSE(): TerminalNode {
		return this.getToken(UnityRichTextParser.SLASH_CLOSE, 0);
	}
	public attribute_list(): AttributeContext[] {
		return this.getTypedRuleContexts(AttributeContext) as AttributeContext[];
	}
	public attribute(i: number): AttributeContext {
		return this.getTypedRuleContext(AttributeContext, i) as AttributeContext;
	}
	public enterRule(listener: UnityRichTextParserListener): void {
	    if(listener.enterSelfClosingElement) {
	 		listener.enterSelfClosingElement(this);
		}
	}
	public exitRule(listener: UnityRichTextParserListener): void {
	    if(listener.exitSelfClosingElement) {
	 		listener.exitSelfClosingElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UnityRichTextParserVisitor<Result>): Result {
		if (visitor.visitSelfClosingElement) {
			return visitor.visitSelfClosingElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	constructor(parser?: UnityRichTextParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Name(): TerminalNode {
		return this.getToken(UnityRichTextParser.Name, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(UnityRichTextParser.EQUALS, 0);
	}
	public attributeValue(): AttributeValueContext {
		return this.getTypedRuleContext(AttributeValueContext, 0) as AttributeValueContext;
	}
    public get ruleIndex(): number {
    	return UnityRichTextParser.RULE_attribute;
	}
	public enterRule(listener: UnityRichTextParserListener): void {
	    if(listener.enterAttribute) {
	 		listener.enterAttribute(this);
		}
	}
	public exitRule(listener: UnityRichTextParserListener): void {
	    if(listener.exitAttribute) {
	 		listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UnityRichTextParserVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeValueContext extends ParserRuleContext {
	constructor(parser?: UnityRichTextParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLOR(): TerminalNode {
		return this.getToken(UnityRichTextParser.COLOR, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(UnityRichTextParser.NUMBER, 0);
	}
	public Name(): TerminalNode {
		return this.getToken(UnityRichTextParser.Name, 0);
	}
    public get ruleIndex(): number {
    	return UnityRichTextParser.RULE_attributeValue;
	}
	public enterRule(listener: UnityRichTextParserListener): void {
	    if(listener.enterAttributeValue) {
	 		listener.enterAttributeValue(this);
		}
	}
	public exitRule(listener: UnityRichTextParserListener): void {
	    if(listener.exitAttributeValue) {
	 		listener.exitAttributeValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UnityRichTextParserVisitor<Result>): Result {
		if (visitor.visitAttributeValue) {
			return visitor.visitAttributeValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChardataContext extends ParserRuleContext {
	constructor(parser?: UnityRichTextParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TEXT(): TerminalNode {
		return this.getToken(UnityRichTextParser.TEXT, 0);
	}
	public SEA_WS(): TerminalNode {
		return this.getToken(UnityRichTextParser.SEA_WS, 0);
	}
    public get ruleIndex(): number {
    	return UnityRichTextParser.RULE_chardata;
	}
	public enterRule(listener: UnityRichTextParserListener): void {
	    if(listener.enterChardata) {
	 		listener.enterChardata(this);
		}
	}
	public exitRule(listener: UnityRichTextParserListener): void {
	    if(listener.exitChardata) {
	 		listener.exitChardata(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UnityRichTextParserVisitor<Result>): Result {
		if (visitor.visitChardata) {
			return visitor.visitChardata(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MiscContext extends ParserRuleContext {
	constructor(parser?: UnityRichTextParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMENT(): TerminalNode {
		return this.getToken(UnityRichTextParser.COMMENT, 0);
	}
	public SEA_WS(): TerminalNode {
		return this.getToken(UnityRichTextParser.SEA_WS, 0);
	}
    public get ruleIndex(): number {
    	return UnityRichTextParser.RULE_misc;
	}
	public enterRule(listener: UnityRichTextParserListener): void {
	    if(listener.enterMisc) {
	 		listener.enterMisc(this);
		}
	}
	public exitRule(listener: UnityRichTextParserListener): void {
	    if(listener.exitMisc) {
	 		listener.exitMisc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UnityRichTextParserVisitor<Result>): Result {
		if (visitor.visitMisc) {
			return visitor.visitMisc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

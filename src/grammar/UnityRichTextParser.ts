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
	public static readonly OPEN = 2;
	public static readonly LITERAL_LT = 3;
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
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_document = 0;
	public static readonly RULE_content = 1;
	public static readonly RULE_element = 2;
	public static readonly RULE_attribute = 3;
	public static readonly RULE_attributeValue = 4;
	public static readonly RULE_chardata = 5;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, "'<'", 
                                                            null, "'>'", 
                                                            "'/>'", "'/'", 
                                                            "'='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "COMMENT", 
                                                             "OPEN", "LITERAL_LT", 
                                                             "TEXT", "CLOSE", 
                                                             "SLASH_CLOSE", 
                                                             "SLASH", "EQUALS", 
                                                             "STRING", "COLOR", 
                                                             "NUMBER_UNIT", 
                                                             "NUMBER", "Name", 
                                                             "S" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "content", "element", "attribute", "attributeValue", "chardata",
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
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 12;
			this.content();
			this.state = 13;
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
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 20;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 30) !== 0)) {
				{
				this.state = 18;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 2:
					{
					this.state = 15;
					this.element();
					}
					break;
				case 3:
				case 4:
					{
					this.state = 16;
					this.chardata();
					}
					break;
				case 1:
					{
					this.state = 17;
					this.match(UnityRichTextParser.COMMENT);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 22;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
			this.state = 57;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				localctx = new OpenElementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 23;
				this.match(UnityRichTextParser.OPEN);
				this.state = 24;
				this.match(UnityRichTextParser.Name);
				this.state = 28;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===13) {
					{
					{
					this.state = 25;
					this.attribute();
					}
					}
					this.state = 30;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 31;
				this.match(UnityRichTextParser.CLOSE);
				}
				break;
			case 2:
				localctx = new OpenAbbrElementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 32;
				this.match(UnityRichTextParser.OPEN);
				this.state = 33;
				this.match(UnityRichTextParser.Name);
				this.state = 34;
				this.match(UnityRichTextParser.EQUALS);
				this.state = 35;
				this.attributeValue();
				this.state = 36;
				this.match(UnityRichTextParser.CLOSE);
				}
				break;
			case 3:
				localctx = new CloseElementContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 38;
				this.match(UnityRichTextParser.OPEN);
				this.state = 39;
				this.match(UnityRichTextParser.SLASH);
				this.state = 40;
				this.match(UnityRichTextParser.Name);
				this.state = 41;
				this.match(UnityRichTextParser.CLOSE);
				}
				break;
			case 4:
				localctx = new SelfClosingElementContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 42;
				this.match(UnityRichTextParser.OPEN);
				this.state = 43;
				this.match(UnityRichTextParser.Name);
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===13) {
					{
					{
					this.state = 44;
					this.attribute();
					}
					}
					this.state = 49;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 50;
				this.match(UnityRichTextParser.SLASH_CLOSE);
				}
				break;
			case 5:
				localctx = new SelfClosingAbbrElementContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 51;
				this.match(UnityRichTextParser.OPEN);
				this.state = 52;
				this.match(UnityRichTextParser.Name);
				this.state = 53;
				this.match(UnityRichTextParser.EQUALS);
				this.state = 54;
				this.attributeValue();
				this.state = 55;
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
			this.state = 59;
			this.match(UnityRichTextParser.Name);
			this.state = 60;
			this.match(UnityRichTextParser.EQUALS);
			this.state = 61;
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
			this.state = 63;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 15872) !== 0))) {
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
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 66;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 65;
					_la = this._input.LA(1);
					if(!(_la===3 || _la===4)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 68;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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

	public static readonly _serializedATN: number[] = [4,1,14,71,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,1,0,1,0,1,0,1,1,1,1,1,1,5,1,19,8,
	1,10,1,12,1,22,9,1,1,2,1,2,1,2,5,2,27,8,2,10,2,12,2,30,9,2,1,2,1,2,1,2,
	1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,46,8,2,10,2,12,2,49,9,2,
	1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,58,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,5,4,5,
	67,8,5,11,5,12,5,68,1,5,0,0,6,0,2,4,6,8,10,0,2,1,0,9,13,1,0,3,4,74,0,12,
	1,0,0,0,2,20,1,0,0,0,4,57,1,0,0,0,6,59,1,0,0,0,8,63,1,0,0,0,10,66,1,0,0,
	0,12,13,3,2,1,0,13,14,5,0,0,1,14,1,1,0,0,0,15,19,3,4,2,0,16,19,3,10,5,0,
	17,19,5,1,0,0,18,15,1,0,0,0,18,16,1,0,0,0,18,17,1,0,0,0,19,22,1,0,0,0,20,
	18,1,0,0,0,20,21,1,0,0,0,21,3,1,0,0,0,22,20,1,0,0,0,23,24,5,2,0,0,24,28,
	5,13,0,0,25,27,3,6,3,0,26,25,1,0,0,0,27,30,1,0,0,0,28,26,1,0,0,0,28,29,
	1,0,0,0,29,31,1,0,0,0,30,28,1,0,0,0,31,58,5,5,0,0,32,33,5,2,0,0,33,34,5,
	13,0,0,34,35,5,8,0,0,35,36,3,8,4,0,36,37,5,5,0,0,37,58,1,0,0,0,38,39,5,
	2,0,0,39,40,5,7,0,0,40,41,5,13,0,0,41,58,5,5,0,0,42,43,5,2,0,0,43,47,5,
	13,0,0,44,46,3,6,3,0,45,44,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,
	0,0,0,48,50,1,0,0,0,49,47,1,0,0,0,50,58,5,6,0,0,51,52,5,2,0,0,52,53,5,13,
	0,0,53,54,5,8,0,0,54,55,3,8,4,0,55,56,5,6,0,0,56,58,1,0,0,0,57,23,1,0,0,
	0,57,32,1,0,0,0,57,38,1,0,0,0,57,42,1,0,0,0,57,51,1,0,0,0,58,5,1,0,0,0,
	59,60,5,13,0,0,60,61,5,8,0,0,61,62,3,8,4,0,62,7,1,0,0,0,63,64,7,0,0,0,64,
	9,1,0,0,0,65,67,7,1,0,0,66,65,1,0,0,0,67,68,1,0,0,0,68,66,1,0,0,0,68,69,
	1,0,0,0,69,11,1,0,0,0,6,18,20,28,47,57,68];

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
	public content(): ContentContext {
		return this.getTypedRuleContext(ContentContext, 0) as ContentContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(UnityRichTextParser.EOF, 0);
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
export class OpenElementContext extends ElementContext {
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
	public CLOSE(): TerminalNode {
		return this.getToken(UnityRichTextParser.CLOSE, 0);
	}
	public attribute_list(): AttributeContext[] {
		return this.getTypedRuleContexts(AttributeContext) as AttributeContext[];
	}
	public attribute(i: number): AttributeContext {
		return this.getTypedRuleContext(AttributeContext, i) as AttributeContext;
	}
	public enterRule(listener: UnityRichTextParserListener): void {
	    if(listener.enterOpenElement) {
	 		listener.enterOpenElement(this);
		}
	}
	public exitRule(listener: UnityRichTextParserListener): void {
	    if(listener.exitOpenElement) {
	 		listener.exitOpenElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UnityRichTextParserVisitor<Result>): Result {
		if (visitor.visitOpenElement) {
			return visitor.visitOpenElement(this);
		} else {
			return visitor.visitChildren(this);
		}
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
export class OpenAbbrElementContext extends ElementContext {
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
	public CLOSE(): TerminalNode {
		return this.getToken(UnityRichTextParser.CLOSE, 0);
	}
	public enterRule(listener: UnityRichTextParserListener): void {
	    if(listener.enterOpenAbbrElement) {
	 		listener.enterOpenAbbrElement(this);
		}
	}
	public exitRule(listener: UnityRichTextParserListener): void {
	    if(listener.exitOpenAbbrElement) {
	 		listener.exitOpenAbbrElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UnityRichTextParserVisitor<Result>): Result {
		if (visitor.visitOpenAbbrElement) {
			return visitor.visitOpenAbbrElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CloseElementContext extends ElementContext {
	constructor(parser: UnityRichTextParser, ctx: ElementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OPEN(): TerminalNode {
		return this.getToken(UnityRichTextParser.OPEN, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(UnityRichTextParser.SLASH, 0);
	}
	public Name(): TerminalNode {
		return this.getToken(UnityRichTextParser.Name, 0);
	}
	public CLOSE(): TerminalNode {
		return this.getToken(UnityRichTextParser.CLOSE, 0);
	}
	public enterRule(listener: UnityRichTextParserListener): void {
	    if(listener.enterCloseElement) {
	 		listener.enterCloseElement(this);
		}
	}
	public exitRule(listener: UnityRichTextParserListener): void {
	    if(listener.exitCloseElement) {
	 		listener.exitCloseElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: UnityRichTextParserVisitor<Result>): Result {
		if (visitor.visitCloseElement) {
			return visitor.visitCloseElement(this);
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
	public STRING(): TerminalNode {
		return this.getToken(UnityRichTextParser.STRING, 0);
	}
	public COLOR(): TerminalNode {
		return this.getToken(UnityRichTextParser.COLOR, 0);
	}
	public NUMBER_UNIT(): TerminalNode {
		return this.getToken(UnityRichTextParser.NUMBER_UNIT, 0);
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
	public TEXT_list(): TerminalNode[] {
	    	return this.getTokens(UnityRichTextParser.TEXT);
	}
	public TEXT(i: number): TerminalNode {
		return this.getToken(UnityRichTextParser.TEXT, i);
	}
	public LITERAL_LT_list(): TerminalNode[] {
	    	return this.getTokens(UnityRichTextParser.LITERAL_LT);
	}
	public LITERAL_LT(i: number): TerminalNode {
		return this.getToken(UnityRichTextParser.LITERAL_LT, i);
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

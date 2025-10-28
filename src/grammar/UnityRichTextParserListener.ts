// Generated from UnityRichTextParser.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { DocumentContext } from "./UnityRichTextParser.js";
import { ContentContext } from "./UnityRichTextParser.js";
import { PairedElementContext } from "./UnityRichTextParser.js";
import { PairedAbbrElementContext } from "./UnityRichTextParser.js";
import { SelfClosingElementContext } from "./UnityRichTextParser.js";
import { SelfClosingAbbrElementContext } from "./UnityRichTextParser.js";
import { AttributeContext } from "./UnityRichTextParser.js";
import { AttributeValueContext } from "./UnityRichTextParser.js";
import { ChardataContext } from "./UnityRichTextParser.js";
import { MiscContext } from "./UnityRichTextParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `UnityRichTextParser`.
 */
export default class UnityRichTextParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `UnityRichTextParser.document`.
	 * @param ctx the parse tree
	 */
	enterDocument?: (ctx: DocumentContext) => void;
	/**
	 * Exit a parse tree produced by `UnityRichTextParser.document`.
	 * @param ctx the parse tree
	 */
	exitDocument?: (ctx: DocumentContext) => void;
	/**
	 * Enter a parse tree produced by `UnityRichTextParser.content`.
	 * @param ctx the parse tree
	 */
	enterContent?: (ctx: ContentContext) => void;
	/**
	 * Exit a parse tree produced by `UnityRichTextParser.content`.
	 * @param ctx the parse tree
	 */
	exitContent?: (ctx: ContentContext) => void;
	/**
	 * Enter a parse tree produced by the `PairedElement`
	 * labeled alternative in `UnityRichTextParser.element`.
	 * @param ctx the parse tree
	 */
	enterPairedElement?: (ctx: PairedElementContext) => void;
	/**
	 * Exit a parse tree produced by the `PairedElement`
	 * labeled alternative in `UnityRichTextParser.element`.
	 * @param ctx the parse tree
	 */
	exitPairedElement?: (ctx: PairedElementContext) => void;
	/**
	 * Enter a parse tree produced by the `PairedAbbrElement`
	 * labeled alternative in `UnityRichTextParser.element`.
	 * @param ctx the parse tree
	 */
	enterPairedAbbrElement?: (ctx: PairedAbbrElementContext) => void;
	/**
	 * Exit a parse tree produced by the `PairedAbbrElement`
	 * labeled alternative in `UnityRichTextParser.element`.
	 * @param ctx the parse tree
	 */
	exitPairedAbbrElement?: (ctx: PairedAbbrElementContext) => void;
	/**
	 * Enter a parse tree produced by the `SelfClosingElement`
	 * labeled alternative in `UnityRichTextParser.element`.
	 * @param ctx the parse tree
	 */
	enterSelfClosingElement?: (ctx: SelfClosingElementContext) => void;
	/**
	 * Exit a parse tree produced by the `SelfClosingElement`
	 * labeled alternative in `UnityRichTextParser.element`.
	 * @param ctx the parse tree
	 */
	exitSelfClosingElement?: (ctx: SelfClosingElementContext) => void;
	/**
	 * Enter a parse tree produced by the `SelfClosingAbbrElement`
	 * labeled alternative in `UnityRichTextParser.element`.
	 * @param ctx the parse tree
	 */
	enterSelfClosingAbbrElement?: (ctx: SelfClosingAbbrElementContext) => void;
	/**
	 * Exit a parse tree produced by the `SelfClosingAbbrElement`
	 * labeled alternative in `UnityRichTextParser.element`.
	 * @param ctx the parse tree
	 */
	exitSelfClosingAbbrElement?: (ctx: SelfClosingAbbrElementContext) => void;
	/**
	 * Enter a parse tree produced by `UnityRichTextParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `UnityRichTextParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Enter a parse tree produced by `UnityRichTextParser.attributeValue`.
	 * @param ctx the parse tree
	 */
	enterAttributeValue?: (ctx: AttributeValueContext) => void;
	/**
	 * Exit a parse tree produced by `UnityRichTextParser.attributeValue`.
	 * @param ctx the parse tree
	 */
	exitAttributeValue?: (ctx: AttributeValueContext) => void;
	/**
	 * Enter a parse tree produced by `UnityRichTextParser.chardata`.
	 * @param ctx the parse tree
	 */
	enterChardata?: (ctx: ChardataContext) => void;
	/**
	 * Exit a parse tree produced by `UnityRichTextParser.chardata`.
	 * @param ctx the parse tree
	 */
	exitChardata?: (ctx: ChardataContext) => void;
	/**
	 * Enter a parse tree produced by `UnityRichTextParser.misc`.
	 * @param ctx the parse tree
	 */
	enterMisc?: (ctx: MiscContext) => void;
	/**
	 * Exit a parse tree produced by `UnityRichTextParser.misc`.
	 * @param ctx the parse tree
	 */
	exitMisc?: (ctx: MiscContext) => void;
}


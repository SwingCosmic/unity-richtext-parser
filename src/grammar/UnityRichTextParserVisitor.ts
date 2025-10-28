// Generated from UnityRichTextParser.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `UnityRichTextParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class UnityRichTextParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `UnityRichTextParser.document`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocument?: (ctx: DocumentContext) => Result;
	/**
	 * Visit a parse tree produced by `UnityRichTextParser.content`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContent?: (ctx: ContentContext) => Result;
	/**
	 * Visit a parse tree produced by the `PairedElement`
	 * labeled alternative in `UnityRichTextParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPairedElement?: (ctx: PairedElementContext) => Result;
	/**
	 * Visit a parse tree produced by the `PairedAbbrElement`
	 * labeled alternative in `UnityRichTextParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPairedAbbrElement?: (ctx: PairedAbbrElementContext) => Result;
	/**
	 * Visit a parse tree produced by the `SelfClosingElement`
	 * labeled alternative in `UnityRichTextParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelfClosingElement?: (ctx: SelfClosingElementContext) => Result;
	/**
	 * Visit a parse tree produced by the `SelfClosingAbbrElement`
	 * labeled alternative in `UnityRichTextParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelfClosingAbbrElement?: (ctx: SelfClosingAbbrElementContext) => Result;
	/**
	 * Visit a parse tree produced by `UnityRichTextParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;
	/**
	 * Visit a parse tree produced by `UnityRichTextParser.attributeValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeValue?: (ctx: AttributeValueContext) => Result;
	/**
	 * Visit a parse tree produced by `UnityRichTextParser.chardata`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChardata?: (ctx: ChardataContext) => Result;
	/**
	 * Visit a parse tree produced by `UnityRichTextParser.misc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMisc?: (ctx: MiscContext) => Result;
}


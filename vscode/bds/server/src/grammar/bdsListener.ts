// Generated from server/src/grammar/bds.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ProgramUnitContext } from "./bdsParser";
import { EolContext } from "./bdsParser";
import { IncludeFileContext } from "./bdsParser";
import { TypeListContext } from "./bdsParser";
import { TypeContext } from "./bdsParser";
import { VarDeclarationContext } from "./bdsParser";
import { VariableInitContext } from "./bdsParser";
import { VariableInitImplicitContext } from "./bdsParser";
import { FunctionDeclarationContext } from "./bdsParser";
import { FieldContext } from "./bdsParser";
import { ClassDefContext } from "./bdsParser";
import { StatementContext } from "./bdsParser";
import { ForInitContext } from "./bdsParser";
import { ForConditionContext } from "./bdsParser";
import { ForEndContext } from "./bdsParser";
import { ExpressionContext } from "./bdsParser";
import { ExpressionListContext } from "./bdsParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `bdsParser`.
 */
export default class bdsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `bdsParser.programUnit`.
	 * @param ctx the parse tree
	 */
	enterProgramUnit?: (ctx: ProgramUnitContext) => void;
	/**
	 * Exit a parse tree produced by `bdsParser.programUnit`.
	 * @param ctx the parse tree
	 */
	exitProgramUnit?: (ctx: ProgramUnitContext) => void;
	/**
	 * Enter a parse tree produced by `bdsParser.eol`.
	 * @param ctx the parse tree
	 */
	enterEol?: (ctx: EolContext) => void;
	/**
	 * Exit a parse tree produced by `bdsParser.eol`.
	 * @param ctx the parse tree
	 */
	exitEol?: (ctx: EolContext) => void;
	/**
	 * Enter a parse tree produced by `bdsParser.includeFile`.
	 * @param ctx the parse tree
	 */
	enterIncludeFile?: (ctx: IncludeFileContext) => void;
	/**
	 * Exit a parse tree produced by `bdsParser.includeFile`.
	 * @param ctx the parse tree
	 */
	exitIncludeFile?: (ctx: IncludeFileContext) => void;
	/**
	 * Enter a parse tree produced by `bdsParser.typeList`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by `bdsParser.typeList`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Enter a parse tree produced by `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
	/**
	 * Enter a parse tree produced by `bdsParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVarDeclaration?: (ctx: VarDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `bdsParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVarDeclaration?: (ctx: VarDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `bdsParser.variableInit`.
	 * @param ctx the parse tree
	 */
	enterVariableInit?: (ctx: VariableInitContext) => void;
	/**
	 * Exit a parse tree produced by `bdsParser.variableInit`.
	 * @param ctx the parse tree
	 */
	exitVariableInit?: (ctx: VariableInitContext) => void;
	/**
	 * Enter a parse tree produced by `bdsParser.variableInitImplicit`.
	 * @param ctx the parse tree
	 */
	enterVariableInitImplicit?: (ctx: VariableInitImplicitContext) => void;
	/**
	 * Exit a parse tree produced by `bdsParser.variableInitImplicit`.
	 * @param ctx the parse tree
	 */
	exitVariableInitImplicit?: (ctx: VariableInitImplicitContext) => void;
	/**
	 * Enter a parse tree produced by `bdsParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `bdsParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `bdsParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `bdsParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;
	/**
	 * Enter a parse tree produced by `bdsParser.classDef`.
	 * @param ctx the parse tree
	 */
	enterClassDef?: (ctx: ClassDefContext) => void;
	/**
	 * Exit a parse tree produced by `bdsParser.classDef`.
	 * @param ctx the parse tree
	 */
	exitClassDef?: (ctx: ClassDefContext) => void;
	/**
	 * Enter a parse tree produced by `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `bdsParser.forInit`.
	 * @param ctx the parse tree
	 */
	enterForInit?: (ctx: ForInitContext) => void;
	/**
	 * Exit a parse tree produced by `bdsParser.forInit`.
	 * @param ctx the parse tree
	 */
	exitForInit?: (ctx: ForInitContext) => void;
	/**
	 * Enter a parse tree produced by `bdsParser.forCondition`.
	 * @param ctx the parse tree
	 */
	enterForCondition?: (ctx: ForConditionContext) => void;
	/**
	 * Exit a parse tree produced by `bdsParser.forCondition`.
	 * @param ctx the parse tree
	 */
	exitForCondition?: (ctx: ForConditionContext) => void;
	/**
	 * Enter a parse tree produced by `bdsParser.forEnd`.
	 * @param ctx the parse tree
	 */
	enterForEnd?: (ctx: ForEndContext) => void;
	/**
	 * Exit a parse tree produced by `bdsParser.forEnd`.
	 * @param ctx the parse tree
	 */
	exitForEnd?: (ctx: ForEndContext) => void;
	/**
	 * Enter a parse tree produced by `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `bdsParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `bdsParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;
}


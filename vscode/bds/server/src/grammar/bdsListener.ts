// Generated from server/src/grammar/bds.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ProgramUnitContext } from "./bdsParser";
import { EolContext } from "./bdsParser";
import { IncludeFileContext } from "./bdsParser";
import { TypeListContext } from "./bdsParser";
import { TypeArrayContext } from "./bdsParser";
import { TypeIntContext } from "./bdsParser";
import { TypeMapContext } from "./bdsParser";
import { TypeRealContext } from "./bdsParser";
import { TypeStringContext } from "./bdsParser";
import { TypeClassContext } from "./bdsParser";
import { TypeBoolContext } from "./bdsParser";
import { TypeVoidContext } from "./bdsParser";
import { VarDeclarationContext } from "./bdsParser";
import { VariableInitContext } from "./bdsParser";
import { VariableInitImplicitContext } from "./bdsParser";
import { FunctionDeclarationContext } from "./bdsParser";
import { FieldDeclarationContext } from "./bdsParser";
import { MethodDeclarationContext } from "./bdsParser";
import { ClassDefContext } from "./bdsParser";
import { BlockContext } from "./bdsParser";
import { BreakContext } from "./bdsParser";
import { BreakpointContext } from "./bdsParser";
import { CheckpointContext } from "./bdsParser";
import { ContinueContext } from "./bdsParser";
import { DebugContext } from "./bdsParser";
import { ExitContext } from "./bdsParser";
import { PrintContext } from "./bdsParser";
import { PrintlnContext } from "./bdsParser";
import { WarningContext } from "./bdsParser";
import { ErrorContext } from "./bdsParser";
import { TryCatchFinallyContext } from "./bdsParser";
import { ThrowContext } from "./bdsParser";
import { ForLoopContext } from "./bdsParser";
import { ForLoopListContext } from "./bdsParser";
import { IfContext } from "./bdsParser";
import { KillContext } from "./bdsParser";
import { ReturnContext } from "./bdsParser";
import { WaitContext } from "./bdsParser";
import { SwitchContext } from "./bdsParser";
import { WhileContext } from "./bdsParser";
import { StatementFunctionDeclarationContext } from "./bdsParser";
import { StatementVarDeclarationContext } from "./bdsParser";
import { ClassDeclarationContext } from "./bdsParser";
import { StatementExprContext } from "./bdsParser";
import { StatementIncludeContext } from "./bdsParser";
import { HelpContext } from "./bdsParser";
import { StatmentEolContext } from "./bdsParser";
import { ForInitContext } from "./bdsParser";
import { ForConditionContext } from "./bdsParser";
import { ForEndContext } from "./bdsParser";
import { LiteralNullContext } from "./bdsParser";
import { LiteralStringContext } from "./bdsParser";
import { ExpressionAssignmentListContext } from "./bdsParser";
import { ExpressionDepOperatorContext } from "./bdsParser";
import { ExpressionAssignmentBitAndContext } from "./bdsParser";
import { ExpressionUnaryPlusMinusContext } from "./bdsParser";
import { LiteralMapContext } from "./bdsParser";
import { ExpressionBitNegationContext } from "./bdsParser";
import { ExpressionAssignmentBitOrContext } from "./bdsParser";
import { PostContext } from "./bdsParser";
import { ExpressionTaskContext } from "./bdsParser";
import { ExpressionCastContext } from "./bdsParser";
import { ReferenceVarContext } from "./bdsParser";
import { ExpressionTimesDivModContext } from "./bdsParser";
import { ReferenceMapContext } from "./bdsParser";
import { ExpressionLogicNotContext } from "./bdsParser";
import { ExpressionSysContext } from "./bdsParser";
import { ExpressionVariableInitImplicitContext } from "./bdsParser";
import { ExpressionAssignmentMultContext } from "./bdsParser";
import { ExpressionDepContext } from "./bdsParser";
import { ExpressionAssignmentMinusContext } from "./bdsParser";
import { ExpressionNewContext } from "./bdsParser";
import { ExpressionAssignmentDivContext } from "./bdsParser";
import { ReferenceListContext } from "./bdsParser";
import { PreContext } from "./bdsParser";
import { LiteralListEmptyContext } from "./bdsParser";
import { ExpressionParallelContext } from "./bdsParser";
import { ExpressionCompContext } from "./bdsParser";
import { LiteralBoolContext } from "./bdsParser";
import { ExpressionLogicOpContext } from "./bdsParser";
import { ExpressionGoalContext } from "./bdsParser";
import { ExpressionTaskLiteralContext } from "./bdsParser";
import { ExpressionAssignmentContext } from "./bdsParser";
import { ExpressionPlusMinusContext } from "./bdsParser";
import { ReferenceFieldContext } from "./bdsParser";
import { LiteralRealContext } from "./bdsParser";
import { ExpressionBitOpContext } from "./bdsParser";
import { ExpressionAssignmentPlusContext } from "./bdsParser";
import { FunctionCallContext } from "./bdsParser";
import { ExpressionParenContext } from "./bdsParser";
import { ExpressionCondContext } from "./bdsParser";
import { LiteralListContext } from "./bdsParser";
import { LiteralIntContext } from "./bdsParser";
import { LiteralMapEmptyContext } from "./bdsParser";
import { MethodCallContext } from "./bdsParser";
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
	 * Enter a parse tree produced by the `typeArray`
	 * labeled alternative in `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeArray?: (ctx: TypeArrayContext) => void;
	/**
	 * Exit a parse tree produced by the `typeArray`
	 * labeled alternative in `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeArray?: (ctx: TypeArrayContext) => void;
	/**
	 * Enter a parse tree produced by the `typeInt`
	 * labeled alternative in `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeInt?: (ctx: TypeIntContext) => void;
	/**
	 * Exit a parse tree produced by the `typeInt`
	 * labeled alternative in `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeInt?: (ctx: TypeIntContext) => void;
	/**
	 * Enter a parse tree produced by the `typeMap`
	 * labeled alternative in `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeMap?: (ctx: TypeMapContext) => void;
	/**
	 * Exit a parse tree produced by the `typeMap`
	 * labeled alternative in `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeMap?: (ctx: TypeMapContext) => void;
	/**
	 * Enter a parse tree produced by the `typeReal`
	 * labeled alternative in `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeReal?: (ctx: TypeRealContext) => void;
	/**
	 * Exit a parse tree produced by the `typeReal`
	 * labeled alternative in `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeReal?: (ctx: TypeRealContext) => void;
	/**
	 * Enter a parse tree produced by the `typeString`
	 * labeled alternative in `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeString?: (ctx: TypeStringContext) => void;
	/**
	 * Exit a parse tree produced by the `typeString`
	 * labeled alternative in `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeString?: (ctx: TypeStringContext) => void;
	/**
	 * Enter a parse tree produced by the `typeClass`
	 * labeled alternative in `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeClass?: (ctx: TypeClassContext) => void;
	/**
	 * Exit a parse tree produced by the `typeClass`
	 * labeled alternative in `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeClass?: (ctx: TypeClassContext) => void;
	/**
	 * Enter a parse tree produced by the `typeBool`
	 * labeled alternative in `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeBool?: (ctx: TypeBoolContext) => void;
	/**
	 * Exit a parse tree produced by the `typeBool`
	 * labeled alternative in `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeBool?: (ctx: TypeBoolContext) => void;
	/**
	 * Enter a parse tree produced by the `typeVoid`
	 * labeled alternative in `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeVoid?: (ctx: TypeVoidContext) => void;
	/**
	 * Exit a parse tree produced by the `typeVoid`
	 * labeled alternative in `bdsParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeVoid?: (ctx: TypeVoidContext) => void;
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
	 * Enter a parse tree produced by the `fieldDeclaration`
	 * labeled alternative in `bdsParser.field`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `fieldDeclaration`
	 * labeled alternative in `bdsParser.field`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `methodDeclaration`
	 * labeled alternative in `bdsParser.field`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `methodDeclaration`
	 * labeled alternative in `bdsParser.field`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
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
	 * Enter a parse tree produced by the `block`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by the `block`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by the `break`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterBreak?: (ctx: BreakContext) => void;
	/**
	 * Exit a parse tree produced by the `break`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitBreak?: (ctx: BreakContext) => void;
	/**
	 * Enter a parse tree produced by the `breakpoint`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterBreakpoint?: (ctx: BreakpointContext) => void;
	/**
	 * Exit a parse tree produced by the `breakpoint`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitBreakpoint?: (ctx: BreakpointContext) => void;
	/**
	 * Enter a parse tree produced by the `checkpoint`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterCheckpoint?: (ctx: CheckpointContext) => void;
	/**
	 * Exit a parse tree produced by the `checkpoint`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitCheckpoint?: (ctx: CheckpointContext) => void;
	/**
	 * Enter a parse tree produced by the `continue`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterContinue?: (ctx: ContinueContext) => void;
	/**
	 * Exit a parse tree produced by the `continue`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitContinue?: (ctx: ContinueContext) => void;
	/**
	 * Enter a parse tree produced by the `debug`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDebug?: (ctx: DebugContext) => void;
	/**
	 * Exit a parse tree produced by the `debug`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDebug?: (ctx: DebugContext) => void;
	/**
	 * Enter a parse tree produced by the `exit`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExit?: (ctx: ExitContext) => void;
	/**
	 * Exit a parse tree produced by the `exit`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExit?: (ctx: ExitContext) => void;
	/**
	 * Enter a parse tree produced by the `print`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterPrint?: (ctx: PrintContext) => void;
	/**
	 * Exit a parse tree produced by the `print`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitPrint?: (ctx: PrintContext) => void;
	/**
	 * Enter a parse tree produced by the `println`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterPrintln?: (ctx: PrintlnContext) => void;
	/**
	 * Exit a parse tree produced by the `println`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitPrintln?: (ctx: PrintlnContext) => void;
	/**
	 * Enter a parse tree produced by the `warning`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterWarning?: (ctx: WarningContext) => void;
	/**
	 * Exit a parse tree produced by the `warning`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitWarning?: (ctx: WarningContext) => void;
	/**
	 * Enter a parse tree produced by the `error`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterError?: (ctx: ErrorContext) => void;
	/**
	 * Exit a parse tree produced by the `error`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitError?: (ctx: ErrorContext) => void;
	/**
	 * Enter a parse tree produced by the `tryCatchFinally`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterTryCatchFinally?: (ctx: TryCatchFinallyContext) => void;
	/**
	 * Exit a parse tree produced by the `tryCatchFinally`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitTryCatchFinally?: (ctx: TryCatchFinallyContext) => void;
	/**
	 * Enter a parse tree produced by the `throw`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterThrow?: (ctx: ThrowContext) => void;
	/**
	 * Exit a parse tree produced by the `throw`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitThrow?: (ctx: ThrowContext) => void;
	/**
	 * Enter a parse tree produced by the `forLoop`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterForLoop?: (ctx: ForLoopContext) => void;
	/**
	 * Exit a parse tree produced by the `forLoop`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitForLoop?: (ctx: ForLoopContext) => void;
	/**
	 * Enter a parse tree produced by the `forLoopList`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterForLoopList?: (ctx: ForLoopListContext) => void;
	/**
	 * Exit a parse tree produced by the `forLoopList`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitForLoopList?: (ctx: ForLoopListContext) => void;
	/**
	 * Enter a parse tree produced by the `if`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterIf?: (ctx: IfContext) => void;
	/**
	 * Exit a parse tree produced by the `if`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitIf?: (ctx: IfContext) => void;
	/**
	 * Enter a parse tree produced by the `kill`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterKill?: (ctx: KillContext) => void;
	/**
	 * Exit a parse tree produced by the `kill`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitKill?: (ctx: KillContext) => void;
	/**
	 * Enter a parse tree produced by the `return`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterReturn?: (ctx: ReturnContext) => void;
	/**
	 * Exit a parse tree produced by the `return`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitReturn?: (ctx: ReturnContext) => void;
	/**
	 * Enter a parse tree produced by the `wait`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterWait?: (ctx: WaitContext) => void;
	/**
	 * Exit a parse tree produced by the `wait`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitWait?: (ctx: WaitContext) => void;
	/**
	 * Enter a parse tree produced by the `switch`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSwitch?: (ctx: SwitchContext) => void;
	/**
	 * Exit a parse tree produced by the `switch`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSwitch?: (ctx: SwitchContext) => void;
	/**
	 * Enter a parse tree produced by the `while`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterWhile?: (ctx: WhileContext) => void;
	/**
	 * Exit a parse tree produced by the `while`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitWhile?: (ctx: WhileContext) => void;
	/**
	 * Enter a parse tree produced by the `statementFunctionDeclaration`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatementFunctionDeclaration?: (ctx: StatementFunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `statementFunctionDeclaration`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatementFunctionDeclaration?: (ctx: StatementFunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `statementVarDeclaration`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatementVarDeclaration?: (ctx: StatementVarDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `statementVarDeclaration`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatementVarDeclaration?: (ctx: StatementVarDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `classDeclaration`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `classDeclaration`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by the `statementExpr`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatementExpr?: (ctx: StatementExprContext) => void;
	/**
	 * Exit a parse tree produced by the `statementExpr`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatementExpr?: (ctx: StatementExprContext) => void;
	/**
	 * Enter a parse tree produced by the `statementInclude`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatementInclude?: (ctx: StatementIncludeContext) => void;
	/**
	 * Exit a parse tree produced by the `statementInclude`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatementInclude?: (ctx: StatementIncludeContext) => void;
	/**
	 * Enter a parse tree produced by the `help`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterHelp?: (ctx: HelpContext) => void;
	/**
	 * Exit a parse tree produced by the `help`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitHelp?: (ctx: HelpContext) => void;
	/**
	 * Enter a parse tree produced by the `statmentEol`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatmentEol?: (ctx: StatmentEolContext) => void;
	/**
	 * Exit a parse tree produced by the `statmentEol`
	 * labeled alternative in `bdsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatmentEol?: (ctx: StatmentEolContext) => void;
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
	 * Enter a parse tree produced by the `literalNull`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralNull?: (ctx: LiteralNullContext) => void;
	/**
	 * Exit a parse tree produced by the `literalNull`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralNull?: (ctx: LiteralNullContext) => void;
	/**
	 * Enter a parse tree produced by the `literalString`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralString?: (ctx: LiteralStringContext) => void;
	/**
	 * Exit a parse tree produced by the `literalString`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralString?: (ctx: LiteralStringContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionAssignmentList`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionAssignmentList?: (ctx: ExpressionAssignmentListContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionAssignmentList`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionAssignmentList?: (ctx: ExpressionAssignmentListContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionDepOperator`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionDepOperator?: (ctx: ExpressionDepOperatorContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionDepOperator`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionDepOperator?: (ctx: ExpressionDepOperatorContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionAssignmentBitAnd`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionAssignmentBitAnd?: (ctx: ExpressionAssignmentBitAndContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionAssignmentBitAnd`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionAssignmentBitAnd?: (ctx: ExpressionAssignmentBitAndContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionUnaryPlusMinus`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionUnaryPlusMinus?: (ctx: ExpressionUnaryPlusMinusContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionUnaryPlusMinus`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionUnaryPlusMinus?: (ctx: ExpressionUnaryPlusMinusContext) => void;
	/**
	 * Enter a parse tree produced by the `literalMap`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralMap?: (ctx: LiteralMapContext) => void;
	/**
	 * Exit a parse tree produced by the `literalMap`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralMap?: (ctx: LiteralMapContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionBitNegation`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionBitNegation?: (ctx: ExpressionBitNegationContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionBitNegation`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionBitNegation?: (ctx: ExpressionBitNegationContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionAssignmentBitOr`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionAssignmentBitOr?: (ctx: ExpressionAssignmentBitOrContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionAssignmentBitOr`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionAssignmentBitOr?: (ctx: ExpressionAssignmentBitOrContext) => void;
	/**
	 * Enter a parse tree produced by the `post`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPost?: (ctx: PostContext) => void;
	/**
	 * Exit a parse tree produced by the `post`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPost?: (ctx: PostContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionTask`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionTask?: (ctx: ExpressionTaskContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionTask`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionTask?: (ctx: ExpressionTaskContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionCast`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionCast?: (ctx: ExpressionCastContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionCast`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionCast?: (ctx: ExpressionCastContext) => void;
	/**
	 * Enter a parse tree produced by the `referenceVar`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterReferenceVar?: (ctx: ReferenceVarContext) => void;
	/**
	 * Exit a parse tree produced by the `referenceVar`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitReferenceVar?: (ctx: ReferenceVarContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionTimesDivMod`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionTimesDivMod?: (ctx: ExpressionTimesDivModContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionTimesDivMod`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionTimesDivMod?: (ctx: ExpressionTimesDivModContext) => void;
	/**
	 * Enter a parse tree produced by the `referenceMap`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterReferenceMap?: (ctx: ReferenceMapContext) => void;
	/**
	 * Exit a parse tree produced by the `referenceMap`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitReferenceMap?: (ctx: ReferenceMapContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionLogicNot`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionLogicNot?: (ctx: ExpressionLogicNotContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionLogicNot`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionLogicNot?: (ctx: ExpressionLogicNotContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionSys`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionSys?: (ctx: ExpressionSysContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionSys`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionSys?: (ctx: ExpressionSysContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionVariableInitImplicit`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionVariableInitImplicit?: (ctx: ExpressionVariableInitImplicitContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionVariableInitImplicit`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionVariableInitImplicit?: (ctx: ExpressionVariableInitImplicitContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionAssignmentMult`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionAssignmentMult?: (ctx: ExpressionAssignmentMultContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionAssignmentMult`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionAssignmentMult?: (ctx: ExpressionAssignmentMultContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionDep`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionDep?: (ctx: ExpressionDepContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionDep`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionDep?: (ctx: ExpressionDepContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionAssignmentMinus`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionAssignmentMinus?: (ctx: ExpressionAssignmentMinusContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionAssignmentMinus`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionAssignmentMinus?: (ctx: ExpressionAssignmentMinusContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionNew`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionNew?: (ctx: ExpressionNewContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionNew`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionNew?: (ctx: ExpressionNewContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionAssignmentDiv`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionAssignmentDiv?: (ctx: ExpressionAssignmentDivContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionAssignmentDiv`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionAssignmentDiv?: (ctx: ExpressionAssignmentDivContext) => void;
	/**
	 * Enter a parse tree produced by the `referenceList`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterReferenceList?: (ctx: ReferenceListContext) => void;
	/**
	 * Exit a parse tree produced by the `referenceList`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitReferenceList?: (ctx: ReferenceListContext) => void;
	/**
	 * Enter a parse tree produced by the `pre`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPre?: (ctx: PreContext) => void;
	/**
	 * Exit a parse tree produced by the `pre`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPre?: (ctx: PreContext) => void;
	/**
	 * Enter a parse tree produced by the `literalListEmpty`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralListEmpty?: (ctx: LiteralListEmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `literalListEmpty`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralListEmpty?: (ctx: LiteralListEmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionParallel`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionParallel?: (ctx: ExpressionParallelContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionParallel`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionParallel?: (ctx: ExpressionParallelContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionComp`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionComp?: (ctx: ExpressionCompContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionComp`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionComp?: (ctx: ExpressionCompContext) => void;
	/**
	 * Enter a parse tree produced by the `literalBool`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralBool?: (ctx: LiteralBoolContext) => void;
	/**
	 * Exit a parse tree produced by the `literalBool`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralBool?: (ctx: LiteralBoolContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionLogicOp`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionLogicOp?: (ctx: ExpressionLogicOpContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionLogicOp`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionLogicOp?: (ctx: ExpressionLogicOpContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionGoal`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionGoal?: (ctx: ExpressionGoalContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionGoal`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionGoal?: (ctx: ExpressionGoalContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionTaskLiteral`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionTaskLiteral?: (ctx: ExpressionTaskLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionTaskLiteral`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionTaskLiteral?: (ctx: ExpressionTaskLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionAssignment`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionAssignment?: (ctx: ExpressionAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionAssignment`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionAssignment?: (ctx: ExpressionAssignmentContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionPlusMinus`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionPlusMinus?: (ctx: ExpressionPlusMinusContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionPlusMinus`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionPlusMinus?: (ctx: ExpressionPlusMinusContext) => void;
	/**
	 * Enter a parse tree produced by the `referenceField`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterReferenceField?: (ctx: ReferenceFieldContext) => void;
	/**
	 * Exit a parse tree produced by the `referenceField`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitReferenceField?: (ctx: ReferenceFieldContext) => void;
	/**
	 * Enter a parse tree produced by the `literalReal`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralReal?: (ctx: LiteralRealContext) => void;
	/**
	 * Exit a parse tree produced by the `literalReal`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralReal?: (ctx: LiteralRealContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionBitOp`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionBitOp?: (ctx: ExpressionBitOpContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionBitOp`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionBitOp?: (ctx: ExpressionBitOpContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionAssignmentPlus`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionAssignmentPlus?: (ctx: ExpressionAssignmentPlusContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionAssignmentPlus`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionAssignmentPlus?: (ctx: ExpressionAssignmentPlusContext) => void;
	/**
	 * Enter a parse tree produced by the `functionCall`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCall`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionParen`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionParen?: (ctx: ExpressionParenContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionParen`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionParen?: (ctx: ExpressionParenContext) => void;
	/**
	 * Enter a parse tree produced by the `expressionCond`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionCond?: (ctx: ExpressionCondContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionCond`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionCond?: (ctx: ExpressionCondContext) => void;
	/**
	 * Enter a parse tree produced by the `literalList`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralList?: (ctx: LiteralListContext) => void;
	/**
	 * Exit a parse tree produced by the `literalList`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralList?: (ctx: LiteralListContext) => void;
	/**
	 * Enter a parse tree produced by the `literalInt`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralInt?: (ctx: LiteralIntContext) => void;
	/**
	 * Exit a parse tree produced by the `literalInt`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralInt?: (ctx: LiteralIntContext) => void;
	/**
	 * Enter a parse tree produced by the `literalMapEmpty`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralMapEmpty?: (ctx: LiteralMapEmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `literalMapEmpty`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralMapEmpty?: (ctx: LiteralMapEmptyContext) => void;
	/**
	 * Enter a parse tree produced by the `methodCall`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMethodCall?: (ctx: MethodCallContext) => void;
	/**
	 * Exit a parse tree produced by the `methodCall`
	 * labeled alternative in `bdsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMethodCall?: (ctx: MethodCallContext) => void;
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


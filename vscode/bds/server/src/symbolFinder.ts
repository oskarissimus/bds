import {
  CharStream,
  CommonTokenStream,
  ParserRuleContext,
  TerminalNode,
  Token,
} from "antlr4";
import bdsParser, {
  ClassDefContext,
  ExpressionContext,
  ExpressionNewContext,
  FieldContext,
  FieldDeclarationContext,
  FunctionDeclarationContext,
  MethodCallContext,
  MethodDeclarationContext,
  ReferenceVarContext,
} from "./grammar/bdsParser";
import { Position } from "vscode-languageserver";
import bdsLexer from "./grammar/bdsLexer";
import { SymbolTable } from "./symbolTable";

export function getScopedSymbolFromAST(
  sourceCode: string,
  position: Position,
  symbolTable: SymbolTable
): string | null {
  const tree = parseSourceCode(sourceCode);
  const targetNode = findNodeAtPosition(tree, position);
  if (!targetNode) return null;
  if (isTragetNodeIDPartOfMethodCall(targetNode)) {
    const methodCall = getParentMethodCall(targetNode);
    return getScopedSymbolFromMethodCall(methodCall, symbolTable);
  }

  if (isTargetNodePartOfExpressionNew(targetNode)) {
    const className = targetNode.getText();
    return `${className}.${className}`;
  }

  if (isTargetNodeTypeOfVariableInitInMethod(targetNode)) {
    return targetNode.getText();
  }

  if (isTargetNodeTypeOfFieldDefinition(targetNode)) {
    return targetNode.getText();
  }

  const parentFunctionName = findParentFunction(targetNode);
  const parentClassName = findParentClass(targetNode);
  let scopedSymbolName = targetNode.getText();
  if (parentFunctionName) {
    scopedSymbolName = `${parentFunctionName}:${scopedSymbolName}`;
  }
  if (parentClassName) {
    scopedSymbolName = `${parentClassName}.${scopedSymbolName}`;
  }

  return scopedSymbolName;
}

function isTargetNodeTypeOfVariableInitInMethod(node: ParserRuleContext) {
  let currentScope = node;

  while (
    currentScope &&
    !(currentScope instanceof MethodDeclarationContext) &&
    currentScope.parentCtx
  ) {
    currentScope = currentScope.parentCtx;
  }

  if (!(currentScope instanceof MethodDeclarationContext)) return false;

  const methodDeclaration = currentScope as MethodDeclarationContext;
  const vars = methodDeclaration.functionDeclaration().varDeclaration_list();
  return vars.some((varDeclaration) => {
    return (
      varDeclaration.type_() &&
      varDeclaration.type_().getText() === node.getText()
    );
  });
}

function isTargetNodeTypeOfFieldDefinition(node: ParserRuleContext): boolean {
  let currentScope = node;

  while (
    currentScope &&
    !(currentScope instanceof FieldDeclarationContext) &&
    currentScope.parentCtx
  ) {
    currentScope = currentScope.parentCtx;
  }

  if (!(currentScope instanceof FieldDeclarationContext)) return false;

  const field = currentScope as FieldDeclarationContext;
  return field.varDeclaration().type_().getText() === node.getText();
}

function isTargetNodePartOfExpressionNew(node: ParserRuleContext): boolean {
  let currentScope = node;

  while (
    currentScope &&
    !(currentScope instanceof ExpressionNewContext) &&
    currentScope.parentCtx
  ) {
    currentScope = currentScope.parentCtx;
  }

  return currentScope instanceof ExpressionNewContext;
}

function getParentMethodCall(node: ParserRuleContext): MethodCallContext {
  let currentScope = node;

  while (
    currentScope &&
    !(currentScope instanceof MethodCallContext) &&
    currentScope.parentCtx
  ) {
    currentScope = currentScope.parentCtx;
  }

  return currentScope as MethodCallContext;
}
function isTragetNodeIDPartOfMethodCall(node: ParserRuleContext): boolean {
  let currentScope = node;

  while (
    currentScope &&
    !(currentScope instanceof MethodCallContext) &&
    currentScope.parentCtx
  ) {
    currentScope = currentScope.parentCtx;
  }

  if (!(currentScope instanceof MethodCallContext)) return false;

  const methodCall = currentScope as MethodCallContext;
  return methodCall.ID().getText() === node.getText();
}

function getScopedSymbolFromMethodCall(
  node: MethodCallContext,
  symbolTable: SymbolTable
): string | null {
  const methodCall = node;
  const methodName = methodCall.ID().getText();
  const object = methodCall.expression(0);
  const expressionType = getExpressionType(object, symbolTable);
  if (!expressionType) return null;
  return `${expressionType}.${methodName}`;
}

function getExpressionType(
  node: ExpressionContext,
  symbolTable: SymbolTable
): string | null {
  if (node instanceof ReferenceVarContext) {
    const referenceVar = node as ReferenceVarContext;
    const referenceName = referenceVar.ID().getText();
    const referenceSymbol = symbolTable.get(referenceName);
    if (referenceSymbol) {
      return referenceSymbol.type;
    }
  }
  return null;
}

function parseSourceCode(sourceCode: string): ParserRuleContext {
  const charStream = new CharStream(sourceCode);
  const lexer = new bdsLexer(charStream);
  const tokens = new CommonTokenStream(lexer);
  const parser = new bdsParser(tokens);
  return parser.programUnit();
}

function findNodeAtPosition(
  node: ParserRuleContext,
  position: Position
): ParserRuleContext | null {
  if (node instanceof TerminalNode) {
    const symbol = node.symbol;
    if (isPositionWithinSymbol(position, symbol)) {
      return node;
    } else {
      return null;
    }
  }

  for (let i = 0; i < node.getChildCount(); i++) {
    const childNode = node.getChild(i) as ParserRuleContext;
    const result = findNodeAtPosition(childNode, position);
    if (result) return result;
  }

  return null;
}

function isPositionWithinSymbol(position: Position, symbol: Token): boolean {
  return (
    symbol.line === position.line + 1 &&
    symbol.column <= position.character &&
    position.character < symbol.column + symbol.text.length
  );
}

function findParentFunction(node: ParserRuleContext): string | null {
  let currentScope = node;

  while (
    currentScope &&
    !(currentScope instanceof FunctionDeclarationContext) &&
    currentScope.parentCtx
  ) {
    currentScope = currentScope.parentCtx;
  }

  if (currentScope && currentScope instanceof FunctionDeclarationContext) {
    const result = currentScope.ID().getText();
    return result;
  }

  return null;
}

function findParentClass(node: ParserRuleContext): string | null {
  let currentScope = node;

  while (
    currentScope &&
    !(currentScope instanceof ClassDefContext) &&
    currentScope.parentCtx
  ) {
    currentScope = currentScope.parentCtx;
  }

  if (currentScope && currentScope instanceof ClassDefContext) {
    return currentScope.ID(0).getText();
  }

  return null;
}

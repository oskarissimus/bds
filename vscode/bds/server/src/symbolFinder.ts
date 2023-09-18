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
  MethodCallContext,
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

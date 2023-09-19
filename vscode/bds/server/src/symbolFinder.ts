import {
  CharStream,
  CommonTokenStream,
  ParserRuleContext,
  TerminalNode,
  Token,
} from "antlr4";
import bdsParser, {
  ExpressionContext,
  MethodCallContext,
  ReferenceVarContext,
} from "./grammar/bdsParser";
import { Position } from "vscode-languageserver";
import bdsLexer from "./grammar/bdsLexer";
import { SymbolTable } from "./symbolTable";

export function getScopedSymbolFromMethodCall(
  node: MethodCallContext | null,
  symbolTable: SymbolTable
): string | null {
  if (!node) return null;
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

export function parseSourceCode(sourceCode: string): ParserRuleContext {
  const charStream = new CharStream(sourceCode);
  const lexer = new bdsLexer(charStream);
  const tokens = new CommonTokenStream(lexer);
  const parser = new bdsParser(tokens);
  return parser.programUnit();
}

export function findNodeAtPosition(
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
function isTragetNodeIDPartOfMethodCall(targetNode: ParserRuleContext) {
  throw new Error("Function not implemented.");
}
export function isTargetNodeTypeOfVariableInitInMethod(
  targetNode: ParserRuleContext
) {
  throw new Error("Function not implemented.");
}

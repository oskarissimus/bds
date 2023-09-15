import {
  CharStream,
  CommonTokenStream,
  ParserRuleContext,
  TerminalNode,
  Token,
} from "antlr4";
import bdsParser, { FunctionDeclarationContext } from "./grammar/bdsParser";
import { Position } from "vscode-languageserver";
import bdsLexer from "./grammar/bdsLexer";

export function getScopedSymbolFromAST(
  sourceCode: string,
  position: Position
): string | null {
  const tree = parseSourceCode(sourceCode);
  const targetNode = findNodeAtPosition(tree, position);
  if (!targetNode) return null;
  let currentScope = targetNode;

  while (
    currentScope &&
    !(currentScope instanceof FunctionDeclarationContext) &&
    currentScope.parentCtx
  ) {
    currentScope = currentScope.parentCtx;
  }

  if (currentScope && currentScope instanceof FunctionDeclarationContext) {
    const functionName = currentScope.ID().getText();
    return `${functionName}:${targetNode.getText()}`;
  }

  return targetNode.getText();
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

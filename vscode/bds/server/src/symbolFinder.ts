import { CharStream, InputStream, Token } from "antlr4";
import bdsLexer from "./grammar/bdsLexer";
import { Position } from "vscode-languageserver";

export function getAllTokens(sourceCode: string): Token[] {
  console.log(sourceCode);
  const charStream = new CharStream(sourceCode);
  const lexer = new bdsLexer(charStream);
  const tokens = lexer.getAllTokens();
  //   console.log(tokens);
  return tokens;
}

export function isPositionWithinToken(
  position: Position,
  token: Token
): boolean {
  //   console.log(position);
  //   console.log(`token ${token.line}:${token.column}`);
  return (
    token.line == position.line + 1 &&
    token.column <= position.character &&
    position.character < token.column + token.text.length
  );
}

export function getSymbolFromTokens(
  sourceCode: string,
  position: Position
): string | null {
  const tokens = getAllTokens(sourceCode);

  for (let token of tokens) {
    // console.log(token.text);
    if (isPositionWithinToken(position, token)) {
      //   console.log("BINGO");
      return token.text;
    }
  }

  return null;
}

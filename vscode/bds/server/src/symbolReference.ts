import { CharStream, Token } from "antlr4";
import bdsLexer from "./grammar/bdsLexer";
import { Location, Position, Range } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";

export class SymbolReferenceTable {
  private references: Map<string, Location[]>;

  constructor() {
    this.references = new Map();
  }

  public indexDocument(document: TextDocument): void {
    const charStream = new CharStream(document.getText());
    const lexer = new bdsLexer(charStream);
    const tokens = lexer.getAllTokens(); // Get all tokens from the lexer

    for (const token of tokens) {
      if (token.type === bdsLexer.ID) {
        // Assuming 'ID' is the token type for identifiers
        this._addReference(token, document);
      }
    }
  }

  get(symbol: string): Location[] | null {
    return this.references.get(symbol) ?? null;
  }

  private _addReference(token: Token, document: TextDocument): void {
    const symbolName = token.text;
    const start = Position.create(token.line - 1, token.column);
    const end = Position.create(
      token.line - 1,
      token.column + symbolName.length
    );
    const range = Range.create(start, end);
    const location = Location.create(document.uri, range);

    if (this.references.has(symbolName)) {
      this.references.get(symbolName)?.push(location);
    } else {
      this.references.set(symbolName, [location]);
    }
  }
}

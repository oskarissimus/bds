import {
  CommonTokenStream,
  ParseTreeWalker,
  TerminalNode,
  CharStream,
} from "antlr4";
import bdsLexer from "./grammar/bdsLexer";
import bdsParser from "./grammar/bdsParser";
import bdsListener from "./grammar/bdsListener";
import { Location, Position, Range } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";

class SymbolReferenceListener extends bdsListener {
  references: Map<string, Range[]>;

  constructor() {
    super();
    this.references = new Map();
  }

  // Capturing function calls
  enterFunctionCall = (ctx: any): void => {
    if (ctx.ID()) {
      this._addReference(ctx.ID());
    }
  };

  private _addReference(token: TerminalNode): void {
    const symbolName = token.getText();
    const symbol = token.symbol;
    const start = Position.create(symbol.line - 1, symbol.column);
    const end = Position.create(
      symbol.line - 1,
      symbol.column + symbolName.length
    );
    const range = Range.create(start, end);

    if (this.references.has(symbolName)) {
      this.references.get(symbolName)?.push(range);
    } else {
      this.references.set(symbolName, [range]);
    }
  }
}

export class SymbolReferencesTable {
  private references: Map<string, Location[]>;

  constructor() {
    this.references = new Map();
  }

  public indexDocument(document: TextDocument): void {
    const charStream = new CharStream(document.getText());
    const lexer = new bdsLexer(charStream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new bdsParser(tokens);
    const listener = new SymbolReferenceListener();
    const walker = new ParseTreeWalker();
    walker.walk(listener, parser.programUnit());
    const newReferences = mapRangesToLocations(
      document.uri,
      listener.references
    );
    this.references = new Map([...this.references, ...newReferences]);
  }

  get(symbol: string): Location[] | null {
    return this.references.get(symbol) ?? null;
  }
}

function mapRangesToLocations(
  uri: string,
  references: Map<string, Range[]>
): Map<string, Location[]> {
  const locations = new Map();
  for (const [symbol, ranges] of references.entries()) {
    const symbolLocations = ranges.map((range) => Location.create(uri, range));
    locations.set(symbol, symbolLocations);
  }
  return locations;
}

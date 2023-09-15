import {
  CommonTokenStream,
  ParseTreeWalker,
  TerminalNode,
  CharStream,
} from "antlr4";
import bdsLexer from "./grammar/bdsLexer";
import bdsParser, {
  FunctionDeclarationContext,
  VariableInitContext,
  VariableInitImplicitContext,
} from "./grammar/bdsParser";
import bdsListener from "./grammar/bdsListener";
import { Location, Position, Range } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";

class SymbolDefinitionListener extends bdsListener {
  symbols: Map<string, Range>;

  constructor() {
    super();
    this.symbols = new Map();
  }

  enterFunctionDeclaration = (ctx: FunctionDeclarationContext): void => {
    this._addSymbol(ctx.ID());
  };

  enterVariableInitImplicit = (ctx: VariableInitImplicitContext): void => {
    this._addSymbol(ctx.ID());
  };

  enterVariableInit = (ctx: VariableInitContext): void => {
    this._addSymbol(ctx.ID());
  };

  private _addSymbol(token: TerminalNode): void {
    const symbolName = token.getText();
    const symbol = token.symbol;
    const start = Position.create(symbol.line - 1, symbol.column);
    const end = Position.create(
      symbol.line - 1,
      symbol.column + symbolName.length
    );
    this.symbols.set(symbolName, Range.create(start, end));
  }
}

export class SymbolTable {
  private symbols: Map<string, Location>;
  constructor() {
    this.symbols = new Map();
  }

  public indexDocument(document: TextDocument): void {
    const charStream = new CharStream(document.getText());
    const lexer = new bdsLexer(charStream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new bdsParser(tokens);
    const listener = new SymbolDefinitionListener();
    const walker = new ParseTreeWalker();
    walker.walk(listener, parser.programUnit());
    const newSymbols = mapRangesToLocations(document.uri, listener.symbols);
    this.symbols = new Map([...this.symbols, ...newSymbols]);
  }

  get(symbol: string): Location | null {
    return this.symbols.get(symbol) ?? null;
  }
}

function mapRangesToLocations(
  uri: string,
  symbols: Map<string, Range>
): Map<string, Location> {
  const locations = new Map();
  for (const [symbol, range] of symbols.entries()) {
    locations.set(symbol, Location.create(uri, range));
  }
  return locations;
}

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
import { Position, Range } from "vscode-languageserver";

class SymbolDefinitionListener extends bdsListener {
  symbolMap: Record<string, Range>;

  constructor() {
    super();
    this.symbolMap = {};
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
    this.symbolMap[symbolName] = Range.create(start, end);
  }
}

export class SymbolTable {
  sourceCode: string;
  symbolMap: Record<string, Range>;

  constructor(sourceCode: string) {
    this.sourceCode = sourceCode;
    this.symbolMap = this._initializeSymbolMap();
  }

  private _initializeSymbolMap(): Record<string, Range> {
    const charStream = new CharStream(this.sourceCode);
    const lexer = new bdsLexer(charStream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new bdsParser(tokens);
    const listener = new SymbolDefinitionListener();
    const walker = new ParseTreeWalker();
    walker.walk(listener, parser.programUnit());
    return listener.symbolMap;
  }

  get(symbol: string): Range | null {
    return this.symbolMap[symbol] || null;
  }
}

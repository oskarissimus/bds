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
  ClassDefContext,
  VarDeclarationContext,
  TypeContext,
} from "./grammar/bdsParser";
import bdsListener from "./grammar/bdsListener";
import { Location, Position, Range } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
class SymbolInfo {
  type: string; // The type of the symbol.
  location: Location; // The location of the symbol in the source code.

  constructor(type: string, location: Location) {
    this.type = type;
    this.location = location;
  }
}

class SymbolDefinitionListener extends bdsListener {
  symbols: Map<string, SymbolInfo>;
  private classScope: string | null = null;
  private functionScope: string | null = null;
  private documentUri: string;

  constructor(documentUri: string) {
    super();
    this.symbols = new Map();
    this.documentUri = documentUri;
  }

  enterClassDef = (ctx: ClassDefContext): void => {
    this._addSymbol(ctx.ID(0), ctx.ID(0).getText());
    this.classScope = ctx.ID(0).getText();
  };

  exitClassDef = (): void => {
    this.classScope = null;
  };

  enterFunctionDeclaration = (ctx: FunctionDeclarationContext): void => {
    const returnType: string = ctx.type_().getText();
    this._addSymbol(ctx.ID(), returnType);
    this.functionScope = ctx.ID().getText();
  };

  exitFunctionDeclaration = (): void => {
    this.functionScope = null;
  };

  enterVariableInitImplicit = (ctx: VariableInitImplicitContext): void => {
    let inferredType: string | null = null;

    const expressionCtx = ctx.expression();

    if (
      expressionCtx.getChildCount() > 2 &&
      expressionCtx.getChild(0).getText() === "new"
    ) {
      inferredType = expressionCtx.getChild(1).getText();
    }
    if (!inferredType) return;
    this._addSymbol(ctx.ID(), inferredType);
  };

  enterVarDeclaration = (ctx: VarDeclarationContext): void => {
    const typeContext = ctx.type_();
    if (!(typeContext instanceof TypeContext)) return;
    const type: string = typeContext.getText();
    ctx.variableInit_list().forEach((variableInit) => {
      const id = variableInit.ID();
      this._addSymbol(id, type);
    });
  };

  private _addSymbol(token: TerminalNode, type: string): void {
    console.log(`Adding symbol ${token.getText()}`);
    const symbolName = token.getText();
    let scopedSymbolName = symbolName;
    if (this.functionScope) {
      scopedSymbolName = `${this.functionScope}:${symbolName}`;
    }
    if (this.classScope) {
      scopedSymbolName = `${this.classScope}.${scopedSymbolName}`;
    }
    const symbol = token.symbol;
    const start = Position.create(symbol.line - 1, symbol.column);
    const end = Position.create(
      symbol.line - 1,
      symbol.column + symbolName.length
    );
    const range = Range.create(start, end);
    const location = Location.create(this.documentUri, range);
    const symbolInfo = new SymbolInfo(type, location);
    this.symbols.set(scopedSymbolName, symbolInfo);
  }
}

export class SymbolTable {
  private symbols: Map<string, SymbolInfo>;
  constructor() {
    this.symbols = new Map();
  }

  public indexDocument(document: TextDocument): void {
    const charStream = new CharStream(document.getText());
    const lexer = new bdsLexer(charStream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new bdsParser(tokens);
    const listener = new SymbolDefinitionListener(document.uri);
    const walker = new ParseTreeWalker();
    walker.walk(listener, parser.programUnit());
    this.symbols = new Map([...this.symbols, ...listener.symbols]);
  }

  get(symbol: string): SymbolInfo | null {
    return this.symbols.get(symbol) ?? null;
  }
}

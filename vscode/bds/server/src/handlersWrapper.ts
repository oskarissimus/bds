import {
  InitializeParams,
  InitializeResult,
  DefinitionParams,
  Definition,
  Connection,
  TextDocumentSyncKind,
  TextDocumentChangeEvent,
  TextDocuments,
  ClientCapabilities,
  ReferenceParams,
  Location,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { WorkspaceIndexer } from "./fileIndexer";
import { getScopedSymbolFromAST } from "./symbolFinder";
import { SymbolTable } from "./symbolTable";
import { SymbolReferenceTable } from "./symbolReference";

class HandlersWrapper {
  private clientCapabilities: ClientCapabilities = {};
  private connection: Connection;
  private documents: TextDocuments<TextDocument>;
  private symbolTable: SymbolTable;
  private symbolReferenceTable: SymbolReferenceTable;

  constructor(
    connection: Connection,
    documents: TextDocuments<TextDocument>,
    symbolTable: SymbolTable,
    symbolReferenceTable: SymbolReferenceTable
  ) {
    this.connection = connection;
    this.documents = documents;
    this.symbolTable = symbolTable;
    this.symbolReferenceTable = symbolReferenceTable;
  }
  handleInitialize(params: InitializeParams): InitializeResult {
    this.clientCapabilities = params.capabilities;
    return {
      capabilities: {
        textDocumentSync: TextDocumentSyncKind.Incremental,
        definitionProvider: true,
        referencesProvider: true,
      },
    };
  }

  handleInitialized(): void {
    const indexer = new WorkspaceIndexer(
      this.connection.workspace,
      this.clientCapabilities.workspace?.workspaceFolders,
      this.symbolTable,
      this.symbolReferenceTable,
      this.connection
    );
    indexer.run();
  }

  handleDocumentChange(change: TextDocumentChangeEvent<TextDocument>): void {
    this.symbolTable.indexDocument(change.document);
    this.symbolReferenceTable.indexDocument(change.document);
  }

  handleDefinition(textDocumentPosition: DefinitionParams): Definition | null {
    const document: TextDocument | undefined = this.documents.get(
      textDocumentPosition.textDocument.uri
    );

    if (!document) return null;
    const code = document.getText();
    const symbol = getScopedSymbolFromAST(
      code,
      textDocumentPosition.position,
      this.symbolTable
    );
    if (!symbol) return null;
    const symbolInfo = this.symbolTable.get(symbol);
    if (!symbolInfo) return null;
    return symbolInfo.location;
  }

  handleReferences(textDocumentPosition: ReferenceParams): Location[] {
    const document: TextDocument | undefined = this.documents.get(
      textDocumentPosition.textDocument.uri
    );

    if (!document) return [];
    const code = document.getText();
    const symbol = getScopedSymbolFromAST(
      code,
      textDocumentPosition.position,
      this.symbolTable
    );
    if (!symbol) return [];
    this.symbolReferenceTable.indexDocument(document);
    const symbolLocations = this.symbolReferenceTable.get(symbol);
    if (!symbolLocations) return [];
    return symbolLocations;
  }
  registerHandlers() {
    this.connection.onInitialize(this.handleInitialize.bind(this));
    this.connection.onInitialized(this.handleInitialized.bind(this));
    this.documents.onDidChangeContent(this.handleDocumentChange.bind(this));
    this.connection.onDefinition(this.handleDefinition.bind(this));
    this.connection.onReferences(this.handleReferences.bind(this));
  }

  listen() {
    this.documents.listen(this.connection);
    this.connection.listen();
  }
}

export default HandlersWrapper;

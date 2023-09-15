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
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { WorkspaceIndexer } from "./fileIndexer";
import { getSymbolFromTokens } from "./symbolFinder";
import { SymbolDefinitionsTable } from "./symbolDefinitions";

class HandlersWrapper {
  private clientCapabilities: ClientCapabilities = {};
  private connection: Connection;
  private documents: TextDocuments<TextDocument>;
  private symbolTable: SymbolDefinitionsTable;

  constructor(
    connection: Connection,
    documents: TextDocuments<TextDocument>,
    symbolTable: SymbolDefinitionsTable
  ) {
    this.connection = connection;
    this.documents = documents;
    this.symbolTable = symbolTable;
  }
  handleInitialize(params: InitializeParams): InitializeResult {
    this.clientCapabilities = params.capabilities;
    return {
      capabilities: {
        textDocumentSync: TextDocumentSyncKind.Incremental,
        definitionProvider: true,
        // referencesProvider: true,
      },
    };
  }

  handleInitialized(): void {
    const indexer = new WorkspaceIndexer(
      this.connection.workspace,
      this.clientCapabilities.workspace?.workspaceFolders,
      this.symbolTable,
      this.connection
    );
    indexer.run();
  }

  handleDocumentChange(change: TextDocumentChangeEvent<TextDocument>): void {
    this.symbolTable.indexDocument(change.document);
  }

  handleDefinition(textDocumentPosition: DefinitionParams): Definition | null {
    const document: TextDocument | undefined = this.documents.get(
      textDocumentPosition.textDocument.uri
    );

    if (!document) return null;
    const code = document.getText();
    const symbol = getSymbolFromTokens(code, textDocumentPosition.position);
    if (!symbol) return null;
    console.log(this.symbolTable);
    this.symbolTable.indexDocument(document);
    console.log(this.symbolTable);
    const symbolLocation = this.symbolTable.get(symbol);
    if (!symbolLocation) return null;
    return symbolLocation;
  }

  registerHandlers() {
    this.connection.onInitialize(this.handleInitialize.bind(this));
    this.connection.onInitialized(this.handleInitialized.bind(this));
    this.documents.onDidChangeContent(this.handleDocumentChange.bind(this));
    this.connection.onDefinition(this.handleDefinition.bind(this));
  }

  listen() {
    this.documents.listen(this.connection);
    this.connection.listen();
  }
}

export default HandlersWrapper;

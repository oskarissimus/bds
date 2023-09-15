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
import { getSymbolFromTokens } from "./symbolFinder";
import { SymbolDefinitionTable } from "./symbolDefinition";
import { SymbolReferenceTable } from "./symbolReference";

class HandlersWrapper {
  private clientCapabilities: ClientCapabilities = {};
  private connection: Connection;
  private documents: TextDocuments<TextDocument>;
  private symbolDefinitionTable: SymbolDefinitionTable;
  private symbolReferenceTable: SymbolReferenceTable;

  constructor(
    connection: Connection,
    documents: TextDocuments<TextDocument>,
    symbolDefinitionTable: SymbolDefinitionTable,
    symbolReferenceTable: SymbolReferenceTable
  ) {
    this.connection = connection;
    this.documents = documents;
    this.symbolDefinitionTable = symbolDefinitionTable;
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
      this.symbolDefinitionTable,
      this.symbolReferenceTable,
      this.connection
    );
    indexer.run();
  }

  handleDocumentChange(change: TextDocumentChangeEvent<TextDocument>): void {
    this.symbolDefinitionTable.indexDocument(change.document);
    this.symbolReferenceTable.indexDocument(change.document);
  }

  handleDefinition(textDocumentPosition: DefinitionParams): Definition | null {
    const document: TextDocument | undefined = this.documents.get(
      textDocumentPosition.textDocument.uri
    );

    if (!document) return null;
    const code = document.getText();
    const symbol = getSymbolFromTokens(code, textDocumentPosition.position);
    if (!symbol) return null;
    console.log(this.symbolDefinitionTable);
    this.symbolDefinitionTable.indexDocument(document);
    console.log(this.symbolDefinitionTable);
    const symbolLocation = this.symbolDefinitionTable.get(symbol);
    if (!symbolLocation) return null;
    return symbolLocation;
  }

  handleReferences(textDocumentPosition: ReferenceParams): Location[] {
    const document: TextDocument | undefined = this.documents.get(
      textDocumentPosition.textDocument.uri
    );

    if (!document) return [];
    const code = document.getText();
    const symbol = getSymbolFromTokens(code, textDocumentPosition.position);
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

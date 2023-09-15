import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import HandlersWrapper from "./handlersWrapper";
import { SymbolDefinitionTable } from "./symbolDefinition";
import { SymbolReferenceTable } from "./symbolReference";

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments(TextDocument);
const symbolDefinitionTable = new SymbolDefinitionTable();
const symbolReferenceTable = new SymbolReferenceTable();

const requestHandler = new HandlersWrapper(
  connection,
  documents,
  symbolDefinitionTable,
  symbolReferenceTable
);

requestHandler.registerHandlers();
requestHandler.listen();

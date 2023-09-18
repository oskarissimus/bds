import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import HandlersWrapper from "./handlersWrapper";
import { SymbolTable } from "./symbolTable";
import { SymbolReferenceTable } from "./symbolReference";

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments(TextDocument);
const symbolTable = new SymbolTable();
const symbolReferenceTable = new SymbolReferenceTable();

const requestHandler = new HandlersWrapper(
  connection,
  documents,
  symbolTable,
  symbolReferenceTable
);

requestHandler.registerHandlers();
requestHandler.listen();

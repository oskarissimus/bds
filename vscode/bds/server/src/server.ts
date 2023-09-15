import {
  createConnection,
  TextDocuments,
  ProposedFeatures,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import HandlersWrapper from "./handlersWrapper";
import { SymbolTable } from "./symbolTable";

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments(TextDocument);
const symbolTable = new SymbolTable();

const requestHandler = new HandlersWrapper(connection, documents, symbolTable);

requestHandler.registerHandlers();
requestHandler.listen();

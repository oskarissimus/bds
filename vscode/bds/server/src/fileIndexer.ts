import {
  Connection,
  RemoteWorkspace,
  WorkspaceFolder,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { SymbolTable } from "./symbolTable";
import { SymbolReferenceTable } from "./symbolReference";
import * as moment from "moment";
import "moment-duration-format";

import {
  readFile,
  buildDocument,
  isSourceRootDirectoryValid,
  getPathsFromRootDirectory,
  getPathsFromWorkspaceFolders,
} from "./fileIndexerUtils";
export type FileData = {
  path: string;
  content: string;
};

export class WorkspaceIndexer {
  constructor(
    private workspace: RemoteWorkspace,
    private supportsWorkspaceFolders: boolean | undefined,
    private symbolDefinitionTable: SymbolTable,
    private symbolReferenceTable: SymbolReferenceTable,
    private connection: Connection
  ) {}

  private async getSourceRootDirectory() {
    const config = await this.connection.workspace.getConfiguration(
      "bds-extension"
    );
    return config.sourceRootDirectory;
  }

  public async run(): Promise<void> {
    const start = Date.now();
    try {
      this.connection.sendNotification(
        "custom/indexingStatus",
        "Indexing started."
      );

      const folders = await this.getFolders();
      const filePaths = await this.findPaths(folders);

      for (const filePath of filePaths) {
        const file = await readFile(filePath);
        const document = buildDocument(file);
        this.indexFile(document);
        const indexedFilesNumber = filePaths.indexOf(filePath) + 1;
        const totalFilesNumber = filePaths.length;
        const elapsed = Date.now() - start;
        const formatted = moment.duration(elapsed).format("m[m] s[s] S[ms]");
        console.log(
          `Indexed file ${filePath} (${indexedFilesNumber}/${totalFilesNumber}) in ${formatted}.`
        );
      }

      this.connection.sendNotification(
        "custom/indexingStatus",
        "Indexing finished."
      );
    } catch (error) {
      this.connection.sendNotification(
        "custom/showErrorMessage",
        "Indexing failed."
      );
      throw error;
    }
  }

  private async getFolders(): Promise<WorkspaceFolder[]> {
    if (!this.supportsWorkspaceFolders) {
      this.connection.sendNotification(
        "custom/showErrorMessage",
        "Workspace folders are not supported by this extension."
      );
      throw new Error("Workspace folders not supported");
    }

    const folders = await this.workspace.getWorkspaceFolders();

    if (folders === null) {
      this.connection.sendNotification(
        "custom/showErrorMessage",
        "Unable to retrieve workspace folders."
      );
      throw new Error("Failed to retrieve workspace folders");
    }

    if (folders.length === 0) {
      this.connection.sendNotification(
        "custom/showErrorMessage",
        "There are no workspace folders open."
      );
      throw new Error("No workspace folders open");
    }

    return folders;
  }

  private async findPaths(folders: WorkspaceFolder[]): Promise<string[]> {
    const sourceRootDirectory = await this.getSourceRootDirectory();

    if (isSourceRootDirectoryValid(sourceRootDirectory, this.connection)) {
      return getPathsFromRootDirectory(sourceRootDirectory);
    } else {
      return getPathsFromWorkspaceFolders(folders);
    }
  }

  private indexFile(document: TextDocument): void {
    this.symbolDefinitionTable.indexDocument(document);
    this.symbolReferenceTable.indexDocument(document);
  }
}

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
  getPathsFromRootDirectory,
  getPathsFromWorkspaceFolders,
} from "./fileIndexerUtils";
import { Validator } from "./Validator";
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
    private connection: Connection,
    private validator: Validator
  ) {}

  private async getSourceRootDirectory() {
    const config = await this.connection.workspace.getConfiguration(
      "bds-extension"
    );
    return config.sourceRootDirectory;
  }

  private notifyIndexingStarted() {
    this.connection.sendNotification(
      "custom/indexingStatus",
      "Indexing started."
    );
  }

  private notifyIndexingFinished() {
    this.connection.sendNotification(
      "custom/indexingStatus",
      "Indexing finished."
    );
  }

  private notifyIndexingFailed() {
    this.connection.sendNotification(
      "custom/showErrorMessage",
      "Indexing failed."
    );
  }

  public async run(): Promise<void> {
    const start = Date.now();
    try {
      this.notifyIndexingStarted();
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
      this.notifyIndexingFinished();
    } catch (error) {
      this.notifyIndexingFailed();
      throw error;
    }
  }

  private async getFolders(): Promise<WorkspaceFolder[]> {
    this.validator.validateWorkspaceFoldersSupport(
      this.supportsWorkspaceFolders
    );
    const folders = await this.workspace.getWorkspaceFolders();
    const validated = this.validator.validateRetrievedFolders(folders);
    return validated;
  }

  private async findPaths(folders: WorkspaceFolder[]): Promise<string[]> {
    const sourceRootDirectory = await this.getSourceRootDirectory();

    if (this.validator.isSourceRootDirectoryValid(sourceRootDirectory)) {
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

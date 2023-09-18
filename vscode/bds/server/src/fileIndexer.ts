import {
  Connection,
  RemoteWorkspace,
  WorkspaceFolder,
  combineConsoleFeatures,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import { glob } from "glob";
import { SymbolTable } from "./symbolTable";
import { SymbolReferenceTable } from "./symbolReference";

type FileData = {
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

  public async run(): Promise<void> {
    const start = Date.now();
    try {
      this.connection.sendNotification(
        "custom/indexingStatus",
        "Indexing started."
      );

      const folders = await this.getFolders();
      const filePaths = this.findPaths(folders);

      for (const filePath of filePaths) {
        const file = await this.readFile(filePath);
        const document = this.buildDocument(file);
        this.indexFile(document);
        const indexedFilesNumber = filePaths.indexOf(filePath) + 1;
        const totalFilesNumber = filePaths.length;
        const elapsed = Date.now() - start;
        console.log(
          `Indexed file ${filePath} (${indexedFilesNumber}/${totalFilesNumber}) in ${elapsed}ms.`
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

  private findPaths(folders: WorkspaceFolder[]): string[] {
    return folders
      .map((folder) => {
        const folderPath = fileURLToPath(folder.uri);
        return glob.sync(folderPath + "/**/*.bds", { follow: true });
      })
      .flat();
  }

  private async readFile(filePath: string): Promise<FileData> {
    return {
      path: filePath,
      content: await fs.readFile(filePath, "utf8"),
    };
  }

  private buildDocument(file: FileData): TextDocument {
    return TextDocument.create(file.path, "bds", 1, file.content);
  }

  private indexFile(document: TextDocument): void {
    this.symbolDefinitionTable.indexDocument(document);
    this.symbolReferenceTable.indexDocument(document);
  }
}

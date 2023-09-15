import {
  Connection,
  RemoteWorkspace,
  WorkspaceFolder,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import { glob } from "glob";
import { SymbolDefinitionsTable } from "./symbolDefinitions";

type FileData = {
  path: string;
  content: string;
};
export class WorkspaceIndexer {
  constructor(
    private workspace: RemoteWorkspace,
    private supportsWorkspaceFolders: boolean | undefined,
    private symbolTable: SymbolDefinitionsTable,
    private connection: Connection
  ) {}

  public async run(): Promise<void> {
    try {
      this.connection.sendNotification(
        "custom/indexingStatus",
        "Indexing started."
      );

      const folders = await this.getFolders();
      const filePaths = this.findPaths(folders);
      console.log(filePaths);
      const files = await this.readFiles(filePaths);
      const documents = this.buildDocuments(files);
      this.indexFiles(documents);

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

  private async readFiles(filePaths: string[]): Promise<FileData[]> {
    return Promise.all(
      filePaths.map(async (filePath) => {
        console.log(`Reading file ${filePath}...`);
        return {
          path: filePath,
          content: await fs.readFile(filePath, "utf8"),
        };
      })
    );
  }

  private buildDocuments(files: FileData[]): TextDocument[] {
    return files.map((file) => {
      console.log(`Building document ${file.path}...`);
      return TextDocument.create(file.path, "bds", 1, file.content);
    });
  }

  private indexFiles(documents: TextDocument[]): void {
    documents.forEach((document) => {
      console.log(`Indexing document ${document.uri}...`);
      this.symbolTable.indexDocument(document);
    });
  }
}

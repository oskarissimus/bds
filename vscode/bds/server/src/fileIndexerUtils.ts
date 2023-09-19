import { WorkspaceFolder } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { fileURLToPath } from "url";
import { glob } from "glob";
import * as fs from "fs";
import { FileData } from "./fileIndexer";

export async function readFile(filePath: string): Promise<FileData> {
  return {
    path: filePath,
    content: await fs.promises.readFile(filePath, "utf8"),
  };
}

export function buildDocument(file: FileData): TextDocument {
  return TextDocument.create(file.path, "bds", 1, file.content);
}

export function getPathsFromWorkspaceFolders(
  folders: WorkspaceFolder[]
): string[] {
  return folders
    .map((folder) => {
      const folderPath = fileURLToPath(folder.uri);
      return glob.sync(folderPath + "/**/*.bds", { follow: true });
    })
    .flat();
}

export function getPathsFromRootDirectory(
  sourceRootDirectory: string
): string[] {
  return glob.sync(sourceRootDirectory + "/**/*.bds", { follow: true });
}

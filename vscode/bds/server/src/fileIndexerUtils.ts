import { WorkspaceFolder } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { fileURLToPath } from "url";
import { glob } from "glob";
import * as fs from "fs";
import * as path from "path";
import { FileData } from "./fileIndexer";

export function isSourceRootDirectoryValid(
  sourceRootDirectory: string | undefined,
  connection: any
): boolean {
  if (!sourceRootDirectory) return false;
  try {
    validateIsAbsolutePath(sourceRootDirectory);
    validateDirectoryExists(sourceRootDirectory);
    return true;
  } catch (error: Error | any) {
    connection.sendNotification("custom/showErrorMessage", error.message);
    return false;
  }
}
function validateIsAbsolutePath(p: string): void {
  if (!path.isAbsolute(p)) {
    throw new Error(
      `The provided sourceRootDirectory "${p}" is not an absolute path.`
    );
  }
}

async function validateDirectoryExists(p: string): Promise<void> {
  if (!(await fs.promises.stat(p)).isDirectory()) {
    throw new Error(
      `The provided sourceRootDirectory "${p}" does not exist or is not a directory.`
    );
  }
}
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

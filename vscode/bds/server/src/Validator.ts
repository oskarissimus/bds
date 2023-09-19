import { WorkspaceFolder } from "vscode-languageserver/node";
import { NotifyOnError } from "./NotifyOnError";
import * as fs from "fs";
import * as path from "path";

export class Validator {
  constructor(private connection: any) {}

  isSourceRootDirectoryValid(sourceRootDirectory: string | undefined): boolean {
    if (!sourceRootDirectory) return false;
    this.validateIsAbsolutePath(sourceRootDirectory);
    this.validateDirectoryExists(sourceRootDirectory);
    return true;
  }

  @NotifyOnError
  private validateIsAbsolutePath(p: string): void {
    if (!path.isAbsolute(p)) {
      throw new Error(
        `The provided sourceRootDirectory "${p}" is not an absolute path.`
      );
    }
  }

  @NotifyOnError
  private async validateDirectoryExists(p: string): Promise<void> {
    if (!(await fs.promises.stat(p)).isDirectory()) {
      throw new Error(
        `The provided sourceRootDirectory "${p}" does not exist or is not a directory.`
      );
    }
  }

  @NotifyOnError
  validateWorkspaceFoldersSupport(
    supportsWorkspaceFolders: boolean | undefined
  ): void {
    if (!supportsWorkspaceFolders) {
      throw new Error("Workspace folders are not supported by this Client.");
    }
  }

  @NotifyOnError
  validateRetrievedFolders(
    folders: WorkspaceFolder[] | null
  ): WorkspaceFolder[] {
    if (folders === null) {
      throw new Error("Failed to retrieve workspace folders");
    }

    if (folders.length === 0) {
      throw new Error("There are no workspace folders open.");
    }

    return folders;
  }
}

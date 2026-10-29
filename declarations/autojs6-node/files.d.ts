declare module "files" {
  namespace files {
    /** A Java charset name; UTF-8, UTF-16 (BE / LE), ISO-8859-1 and US-ASCII are built in, other names are read only. */
    export type TextEncoding = string;
    export type ListDirFilter = (name: string) => unknown;
    export type JavaHandle = import("java").ObjectHandle;
    export type Bytes = readonly number[] | Uint8Array | Int8Array | Uint8ClampedArray;

    /**
     * Rhino's files module (FilesModule and its prototype, the host's Files object): same argument counts, path
     * resolution (java.io.File, relative to cwd()), conversions and errors (a Java exception is an Error named after
     * its class). The file operations run synchronously in this process with node:fs, so the plugin's Android file
     * access applies; open, toFile and readAssets go through the Java facade (java_interop) and return Promises of
     * handles the caller releases. files.batchRename is not available yet (api-coverage Q82).
     */
    export interface FilesModule {
      /** Environment.getExternalStorageDirectory() of this Android user. */
      readonly sdcardPath: string;
      getSdcardPath(): string;
      /** The working directory of the execution (process.cwd()). */
      cwd(): string;
      /** The absolute path, or null without a path (or above /). */
      path(relativePath?: string | null): string | null;
      nonNullPath(relativePath: string): string;
      join(base: string, ...paths: string[]): string;
      /** PFiles.open: a PReadableTextFile / PWritableTextFile handle (call("read"), call("write", [text]), call("close")). */
      open(path: string, mode?: "r" | "w" | "a" | string | null, encoding?: TextEncoding | null, bufferSize?: number | null): Promise<JavaHandle>;
      /** A java.io.File handle of the resolved path. */
      toFile(path: string): Promise<JavaHandle>;
      create(path: string): boolean;
      createIfNotExists(path: string): boolean;
      createWithDirs(path: string): boolean;
      exists(path: string): boolean;
      ensureDir(path: string): boolean;
      read(path: string, encoding?: TextEncoding): string;
      /** A file of the host app's assets. */
      readAssets(fileName: string, encoding?: TextEncoding): Promise<string>;
      /** Unsigned bytes (Rhino: a signed Java byte[]). */
      readBytes(path: string): Uint8Array;
      write(path: string, text: unknown, encoding?: TextEncoding): void;
      append(path: string, text: unknown, encoding?: TextEncoding): void;
      writeBytes(path: string, bytes: Bytes): void;
      appendBytes(path: string, bytes: Bytes): void;
      copy(pathFrom: string, pathTo: string): boolean;
      rename(path: string, newName: string): boolean;
      renameWithoutExtension(path: string, newName: string): boolean;
      move(path: string, newPath: string): boolean;
      getExtension(fileName: string): string;
      getName(filePath: string): string;
      getNameWithoutExtension(filePath: string): string;
      remove(path: string): boolean;
      removeDir(path: string): boolean;
      listDir(path: string, filter?: ListDirFilter): string[];
      isFile(path: string): boolean;
      isDir(path: string): boolean;
      isEmptyDir(path: string): boolean;
      getHumanReadableSize(bytes: number, useIecIdentifier?: boolean): string;
      formatSizeWithUnit(bytes: number): string;
      getSimplifiedPath(path: string): string;
    }
  }

  const files: files.FilesModule;
  export = files;
}

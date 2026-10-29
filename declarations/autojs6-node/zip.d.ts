/**
 * Rhino's zip module (ZipModule, Zip; zip4j in the host) on the Java facade (java_interop). The module functions
 * resolve with a Zip; argument errors Rhino raises before any work are thrown synchronously, the rest reject. Paths
 * are absolute or relative to the working directory and are opened by the host, so the host's Android file access
 * applies. Java values (FileHeader, ZipFile, ZipParameters, UnzipParameters) are facade handles the caller owns.
 */
declare module "autojs6:zip" {
  namespace zip {
    export type JavaHandle = import("java").ObjectHandle;
    export interface ZipOptions {
      readonly password?: string;
      readonly aesKeyStrength?: string | number | JavaHandle;
      readonly aesVersion?: string | number | JavaHandle;
      readonly compressionLevel?: string | number | JavaHandle;
      readonly compressionMethod?: string | number | JavaHandle;
      readonly encryptionMethod?: string | number | JavaHandle;
      readonly excludeFileFilter?: (file: JavaHandle) => unknown;
      readonly [option: string]: unknown;
    }

    export interface Zip {
      /** "open", "zipFile", "zipDir", "zipFiles" or "unzip". */
      readonly name: string;
      readonly path: string;
      readonly options: ZipOptions;
      getPath(): string;
      toString(): string;
      toStringReadable(): string;
      addFile(filePath: string, options?: ZipOptions | null): Promise<void>;
      addFiles(filePathList: readonly string[], options?: ZipOptions | null): Promise<void>;
      addFolder(folderPath: string, options?: ZipOptions | null): Promise<void>;
      extractAll(destPath: string, options?: ZipOptions | null): Promise<void>;
      extractFile(fileName: string, destPath: string, options?: ZipOptions | null, newFileName?: string | null): Promise<void>;
      setPassword(password: string): Promise<void>;
      getFileHeader(fileName: string): Promise<JavaHandle | null>;
      getFileHeaders(): Promise<JavaHandle[]>;
      isEncrypted(): Promise<boolean>;
      removeFile(fileName: string): Promise<void>;
      isValidZipFile(): Promise<boolean>;
      /** A new handle of the Zip's ZipFile each time. */
      getZipFile(): Promise<JavaHandle>;
      /** Rhino: the zipFile / zipParameters / unzipParameters properties. */
      zipFile(): Promise<JavaHandle>;
      zipParameters(): Promise<JavaHandle>;
      unzipParameters(): Promise<JavaHandle>;
    }

    export interface ZipModule {
      (zipPath: string): Promise<Zip>;
      open(zipPath: string, options?: ZipOptions | null): Promise<Zip>;
      zipFile(filePath: string, destZipPath: string | null | undefined | ZipOptions, options?: ZipOptions | null): Promise<Zip>;
      zipDir(dirPath: string, destZipPath: string | null | undefined | ZipOptions, options?: ZipOptions | null): Promise<Zip>;
      zipFiles(filePathList: readonly string[], destZipPath: string | null | undefined | ZipOptions, options?: ZipOptions | null): Promise<Zip>;
      unzip(zipPath: string, destPath: string | null | undefined | ZipOptions, options?: ZipOptions | null): Promise<Zip>;
    }
  }

  const zip: zip.ZipModule;
  export = zip;
}

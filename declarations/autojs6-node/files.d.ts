declare module "files" {
  namespace files {
    /** A Java charset name; UTF-8, UTF-16 (BE / LE), ISO-8859-1 and US-ASCII are built in, other names are read only. */
    export type TextEncoding = string;
    export type ListDirFilter = (name: string) => unknown;
    export type JavaHandle = import("java").ObjectHandle;
    export type Bytes = readonly number[] | Uint8Array | Int8Array | Uint8ClampedArray;

    /**
     * files.batchRename (capability batch_rename), through the external Batch Rename plugin: Rhino's members with the same
     * argument rules and error codes, each returning a Promise. A plan belongs to the execution, so a Worker can apply a plan of
     * the main thread. onProgress runs on the calling JS thread; a throwing onProgress does not interrupt the batch, the call
     * rejects with its error afterwards.
     */
    export interface FilesBatchRename {
      (paths: string | string[], options: FilesBatchRename.Options, callOptions?: FilesBatchRename.CallOptions): Promise<FilesBatchRename.Result>;
      readonly BatchRenameError: FilesBatchRename.BatchRenameErrorConstructor;
      plan(paths: string | string[], options: FilesBatchRename.Options, callOptions?: FilesBatchRename.CallOptions): Promise<FilesBatchRename.Plan>;
      planAsync(paths: string | string[], options: FilesBatchRename.Options, callOptions?: FilesBatchRename.CallOptions): Promise<FilesBatchRename.Plan>;
      preview(item: string | FilesBatchRename.PreviewItem, options: FilesBatchRename.Options, callOptions?: FilesBatchRename.CallOptions): Promise<FilesBatchRename.PreviewResult>;
      preview(items: (string | FilesBatchRename.PreviewItem)[], options: FilesBatchRename.Options, callOptions?: FilesBatchRename.CallOptions): Promise<FilesBatchRename.PreviewResult[]>;
      previewAsync(item: string | FilesBatchRename.PreviewItem, options: FilesBatchRename.Options, callOptions?: FilesBatchRename.CallOptions): Promise<FilesBatchRename.PreviewResult>;
      previewAsync(items: (string | FilesBatchRename.PreviewItem)[], options: FilesBatchRename.Options, callOptions?: FilesBatchRename.CallOptions): Promise<FilesBatchRename.PreviewResult[]>;
      apply(plan: FilesBatchRename.Plan, options?: FilesBatchRename.ApplyOptions | null, callOptions?: FilesBatchRename.CallOptions): Promise<FilesBatchRename.Result>;
      applyAsync(plan: FilesBatchRename.Plan, options?: FilesBatchRename.ApplyOptions | null, callOptions?: FilesBatchRename.CallOptions): Promise<FilesBatchRename.Result>;
      undo(target: FilesBatchRename.Result | string, callOptions?: FilesBatchRename.CallOptions): Promise<FilesBatchRename.UndoResult>;
      undoAsync(target: FilesBatchRename.Result | string, callOptions?: FilesBatchRename.CallOptions): Promise<FilesBatchRename.UndoResult>;
      history(limit?: number | null, callOptions?: FilesBatchRename.CallOptions): Promise<FilesBatchRename.HistoryEntry[]>;
      deleteHistory(target: FilesBatchRename.Result | FilesBatchRename.HistoryEntry | string, callOptions?: FilesBatchRename.CallOptions): Promise<boolean>;
      clearHistory(options?: FilesBatchRename.ClearHistoryOptions | null, callOptions?: FilesBatchRename.CallOptions): Promise<number>;
      presets(callOptions?: FilesBatchRename.CallOptions): Promise<FilesBatchRename.Preset[]>;
      presetsAsync(callOptions?: FilesBatchRename.CallOptions): Promise<FilesBatchRename.Preset[]>;
      importPresets(json: string | FilesBatchRename.PresetDocument, options?: FilesBatchRename.ImportPresetsOptions | null, callOptions?: FilesBatchRename.CallOptions): Promise<FilesBatchRename.ImportPresetsResult>;
      importPresetsAsync(json: string | FilesBatchRename.PresetDocument, options?: FilesBatchRename.ImportPresetsOptions | null, callOptions?: FilesBatchRename.CallOptions): Promise<FilesBatchRename.ImportPresetsResult>;
      isAvailable(callOptions?: FilesBatchRename.CallOptions): Promise<boolean>;
    }

    export namespace FilesBatchRename {
        /** No deadline by default; a signal cancels the wait, journaled renames stay. */
        type CallOptions = Pick<AutoJs6Node.BridgeCallOptions, "signal" | "timeoutMs">;


        type ErrorCode =
            | 'PLUGIN_UNAVAILABLE'
            | 'PLUGIN_DISABLED'
            | 'PLUGIN_INCOMPATIBLE'
            | 'INVALID_OPTIONS'
            | 'INVALID_PATHS'
            | 'LIMIT_EXCEEDED'
            | 'PLAN_REJECTED'
            | 'PLAN_STALE'
            | 'IO_FAILED'
            | 'UNDO_UNAVAILABLE'
            | 'INTERNAL';

        /** `name` is `'BatchRenameError'`; `toString()` yields `BatchRenameError [CODE]: message`; `message` is not enumerable. */
        interface BatchRenameError extends Error {
            readonly name: 'BatchRenameError';
            readonly code: ErrorCode | string;
        }

        interface BatchRenameErrorConstructor {
            (message?: string, code?: ErrorCode | string): BatchRenameError;
            new(message?: string, code?: ErrorCode | string): BatchRenameError;
            (message: string, code?: ErrorCode | string): BatchRenameError;
            readonly prototype: BatchRenameError;
        }

        type Target = 'all' | 'name' | 'extension';

        type TextFormat = 'none' | 'lower' | 'upper' | 'title' | 'capitalize';

        type ConflictPolicy = 'fail' | 'skip' | 'number' | 'overwrite';

        type ProgressCallback = (done: number, total: number, item: ResultItem) => void;

        type PinyinTone = 'none' | 'mark' | 'number';

        type PinyinSeparator = 'none' | 'space' | 'underscore' | 'hyphen';

        type PinyinCase = 'lower' | 'capitalize';

        /**
         * Options of `files.batchRename(paths, options)`, `plan` and `preview`; null and undefined
         * values take the default. `search` is required unless `preset` names a preset that gives it.
         */
        type Options = SearchOptions | PresetOptions;

        interface SearchOptions extends CommonOptions {
            /**
             * Plain text, or regular expression source with `regex`. A `RegExp` is always a regular
             * expression whose `g` / `i` flags replace `matchAll` / `caseSensitive` (`m`, `s`, `u`, `y`
             * apply as well). An empty string matches every item and replaces nothing.
             */
            search: string | RegExp;
            /** A preset of the plugin: the defaults, then the preset, then the other options given here. An unknown name throws `INVALID_OPTIONS`. */
            preset?: string;
        }

        interface PresetOptions extends CommonOptions {
            /** Overrides the search of the preset. */
            search?: string | RegExp;
            /** A preset of the plugin: the defaults, then the preset, then the other options given here. An unknown name throws `INVALID_OPTIONS`. */
            preset: string;
        }

        /** The options besides `search` and `preset`. */
        interface CommonOptions {
            /**
             * Replacement with variables: counters `${start=X;increment=X;padding=X}` (with `enumerate`),
             * date and time `$YYYY` ... `$f` (unless `dateTime` is false), random values
             * `${rstringalnum=N}`, `${rstringalpha=N}`, `${rstringdigit=N}`, `${ruuidv4}` (with `random`),
             * `${pinyin}` (the pinyin of the original target part, always on) and the photo metadata
             * variables `$CAMERA_MAKE`, `$CAMERA_MODEL`, `$LENS`, `$ISO`, `$APERTURE`, `$SHUTTER`,
             * `$FOCAL`, `$FLASH`, `$WIDTH`, `$HEIGHT`, `$AUTHOR`, `$COPYRIGHT`, `$LATITUDE`, `$LONGITUDE`,
             * `$ALTITUDE`, `$DATE_TAKEN_YYYY`, `$DATE_TAKEN_YY`, `$DATE_TAKEN_MM`, `$DATE_TAKEN_DD`,
             * `$DATE_TAKEN_HH`, `$DATE_TAKEN_mm`, `$DATE_TAKEN_SS`, `$EXPOSURE_BIAS`, `$ORIENTATION`,
             * `$COLOR_SPACE` (with `metadata`); `$$` is a literal `$`. Regular expressions also take `$1`,
             * `$<name>` and `$&`. Default `''`.
             */
            replace?: string;
            /** Default false. */
            regex?: boolean;
            /** Replace every match instead of the first; default false. */
            matchAll?: boolean;
            /** Default false. */
            caseSensitive?: boolean;
            /** The part searched and replaced; default `'all'`. Folders and names like `.nomedia` have no extension. */
            target?: Target;
            /** Default true. */
            includeFiles?: boolean;
            /** Default true; also covers named folders. */
            includeFolders?: boolean;
            /** Add everything below the named folders; default true. */
            includeSubfolders?: boolean;
            /** Default `'none'`; case mapping follows the current language. */
            format?: TextFormat;
            /** Expand `${...}` counters; default false (literal text). */
            enumerate?: boolean;
            /** Expand random values; default false (literal text). */
            random?: boolean;
            /** Time of the date variables: modification time or the time of `plan`; false (or `'none'`) keeps them literal. Default `'modified'`. */
            dateTime?: 'modified' | 'now' | 'none' | false;
            /** Unicode normalization; default false. */
            normalize?: 'nfc' | 'nfd' | 'none' | false;
            /** Full-width forms and the ideographic space to half-width; default false. */
            halfWidth?: boolean;
            /** Replace characters FAT32 / exFAT reject and suffix reserved Windows names; default false. */
            sanitize?: boolean;
            /** Default `'_'`. */
            sanitizeReplacement?: string;
            /** Remove leading white space and trailing white space and dots; default false. */
            trim?: boolean;
            /** Continue counters after the largest number already present in the folders; default false. */
            continueNumbering?: boolean;
            /** Default `'fail'`. */
            onConflict?: ConflictPolicy;
            /** Suffix of the `'number'` policy, must contain `{n}`; default `' ({n})'`. */
            conflictNumberPattern?: string;
            /** Convert the Chinese characters of the new name to pinyin after the replacement, before `format`; default false. */
            pinyin?: boolean;
            /** Tones of `pinyin` and `${pinyin}`: none (`zhang`), marks (`zhāng`) or numbers (`zhang1`); default `'none'`. */
            pinyinTone?: PinyinTone;
            /** Separator between adjacent syllables; default `'none'`. */
            pinyinSeparator?: PinyinSeparator;
            /** `'lower'` (`zhangsan`) or `'capitalize'` (`ZhangSan`); default `'lower'`. */
            pinyinCase?: PinyinCase;
            /** Keep only the first letter of every syllable; default false. */
            pinyinInitials?: boolean;
            /**
             * Expand the photo metadata variables from the EXIF (and XMP) of image files; missing values
             * expand to nothing and mark `metadataMissing`, `$DATE_TAKEN_*` fall back to the modification
             * time. Default false; `preview` rejects it.
             */
            metadata?: boolean;
            /** Progress of the one-step call; `plan` ignores it. */
            onProgress?: ProgressCallback;
        }

        interface ApplyOptions {
            /** Overrides the policy of the plan. */
            onConflict?: ConflictPolicy;
            /** Called once per handled rename; `total` counts the items to rename. */
            onProgress?: ProgressCallback;
        }

        /** The options of a plan with every default filled in; a `RegExp` search appears as its source. */
        interface NormalizedOptions {
            search: string;
            replace: string;
            regex: boolean;
            /** Flags among `m`, `s`, `u` and `y`. */
            regexFlags: string;
            matchAll: boolean;
            caseSensitive: boolean;
            target: Target;
            includeFiles: boolean;
            includeFolders: boolean;
            includeSubfolders: boolean;
            format: TextFormat;
            enumerate: boolean;
            random: boolean;
            dateTime: 'modified' | 'now' | 'none';
            normalize: 'nfc' | 'nfd' | 'none';
            halfWidth: boolean;
            sanitize: boolean;
            sanitizeReplacement: string;
            trim: boolean;
            continueNumbering: boolean;
            onConflict: ConflictPolicy;
            conflictNumberPattern: string;
            pinyin: boolean;
            pinyinTone: PinyinTone;
            pinyinSeparator: PinyinSeparator;
            pinyinCase: PinyinCase;
            pinyinInitials: boolean;
            metadata: boolean;
        }

        interface PreviewItem {
            /** One file name of 1 to 1024 characters. */
            name: string;
            /** Default false. */
            isDirectory?: boolean;
            /** Epoch milliseconds or a `Date`; the time of the call when missing. */
            lastModified?: number | Date;
        }

        interface PreviewResult {
            readonly newName: string;
            readonly status: PlanStatus;
            readonly reason: PlanReason | null;
        }

        interface ClearHistoryOptions {
            /** Every source when missing. */
            source?: 'script' | 'explorer';
        }

        interface Preset {
            readonly name: string;
            /** The complete options of the preset. */
            readonly options: NormalizedOptions;
        }

        /** The format of the files the plugin exports; missing options take their defaults. */
        interface PresetDocument {
            format: 'autojs6-batch-rename-presets';
            version: 1;
            presets: { name: string; options: Partial<NormalizedOptions> }[];
        }

        interface ImportPresetsOptions {
            /** Default `'skip'`. */
            onConflict?: 'skip' | 'overwrite' | 'rename';
        }

        interface ImportPresetsResult {
            /** The names stored, `'rename'` names included. */
            readonly imported: string[];
            readonly skipped: string[];
            /** `index` is the position in `presets`; `reason` is in English. */
            readonly rejected: { readonly index: number; readonly name: string | null; readonly reason: string }[];
        }

        type PlanStatus = 'rename' | 'unchanged' | 'conflict' | 'invalid' | 'excluded';

        type PlanReason =
            | 'noMatch'
            | 'sameName'
            | 'excludedByCaller'
            | 'notIncluded'
            | 'duplicateInBatch'
            | 'existingEntry'
            | 'numbersExhausted'
            | 'numbered'
            | 'overwrite'
            | 'empty'
            | 'dotName'
            | 'separator'
            | 'tooLong'
            | 'restrictedCharacter';

        interface Plan {
            readonly id: string;
            /** With `preset`, the options the plugin merged (defaults, preset, given options); `apply` keeps using them. */
            readonly options: NormalizedOptions;
            /** In enumeration order: named paths first in their order, each folder depth first, sorted by name. */
            readonly items: PlanItem[];
            readonly counts: { readonly [status in PlanStatus]: number };
            /** True with an `invalid` item, or with a `conflict` item under `'fail'`. */
            readonly rejected: boolean;
        }

        interface PlanItem {
            /** Absolute path. */
            readonly path: string;
            readonly name: string;
            readonly kind: 'file' | 'dir';
            /** 0 for a named path, one more per folder level below it. */
            readonly depth: number;
            /** The current name for items that keep it; the unusable name for `conflict` and `invalid`. */
            readonly newName: string;
            readonly status: PlanStatus;
            readonly reason: PlanReason | null;
            /** Set to true before `apply` to keep the name (reason `excludedByCaller`). */
            excluded: boolean;
            /** The `'overwrite'` policy replaces an existing entry of that name. */
            readonly overwrites: boolean;
            /** A photo metadata variable of the new name had no value; false without `metadata`. */
            readonly metadataMissing: boolean;
        }

        type ResultStatus = 'renamed' | 'skipped' | 'failed' | 'stale' | 'excluded';

        interface ResultItem {
            /** Path before the batch. */
            readonly path: string;
            /** Path after the batch, renamed parent folders included. */
            readonly newPath: string;
            readonly status: ResultStatus;
            /** The plan's reason for `skipped` and `excluded`; `missing`, `kindChanged`, `changed`, `occupied`, `trashFailed` or `ioFailed` otherwise. */
            readonly reason: string | null;
        }

        interface Result {
            /** Batch of the undo journal; null when nothing was to be renamed. */
            readonly batchId: string | null;
            readonly counts: { readonly [status in ResultStatus]: number };
            /** One per plan item, in the same order. */
            readonly items: ResultItem[];
            readonly undoable: boolean;
        }

        interface UndoItem {
            /** Path before the undo. */
            readonly path: string;
            /** Path after the undo. */
            readonly newPath: string;
            readonly status: 'restored' | 'stale' | 'failed';
            readonly reason: string | null;
        }

        interface UndoResult {
            readonly batchId: string;
            readonly state: 'restored' | 'recoveryRequired';
            readonly counts: { readonly restored: number; readonly stale: number; readonly failed: number };
            readonly items: UndoItem[];
            /** True while some items can still be undone (failed ones, for instance). */
            readonly undoable: boolean;
        }

        interface HistoryEntry {
            readonly batchId: string;
            readonly source: 'script' | 'explorer';
            readonly state: 'committed' | 'partial' | 'rejected' | 'restored' | 'recoveryRequired';
            /** Milliseconds since the epoch. */
            readonly createdAt: number;
            /** Milliseconds since the epoch. */
            readonly updatedAt: number;
            readonly counts: { readonly renamed: number; readonly notRenamed: number; readonly restored: number };
            readonly undoable: boolean;
        }
    }

    /**
     * Rhino's files module (FilesModule and its prototype, the host's Files object): same argument counts, path
     * resolution (java.io.File, relative to cwd()), conversions and errors (a Java exception is an Error named after
     * its class). The file operations run synchronously in this process with node:fs, so the plugin's Android file
     * access applies; open, toFile and readAssets go through the Java facade (java_interop) and return Promises of
     * handles the caller releases. files.batchRename goes through the Batch Rename plugin and returns Promises.
     */
    export interface FilesModule {
      /** Batch renaming through the Batch Rename plugin (capability batch_rename). */
      readonly batchRename: FilesBatchRename;
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

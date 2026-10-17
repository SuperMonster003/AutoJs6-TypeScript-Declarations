declare module "sqlite" {
  /** Host database bridge. For synchronous in-process SQLite use Node's `node:sqlite` module. */
  import database = require("database");

  namespace sqlite {
    export interface SQLiteModule {
      (name: string, options?: AutoJs6Node.BridgeCallOptions): Promise<database.DatabaseHandle>;
      (options: database.OpenOptions): Promise<database.DatabaseHandle>;
      open(name: string, options?: AutoJs6Node.BridgeCallOptions): Promise<database.DatabaseHandle>;
      open(options: database.OpenOptions): Promise<database.DatabaseHandle>;
    }
  }

  const sqlite: sqlite.SQLiteModule;
  export = sqlite;
}

/** Native Node SQLite; file paths follow the execution's filesystem policy. */
declare module "node:sqlite" {
  export type SQLInputValue = null | number | bigint | string | Uint8Array;
  export type SQLOutputValue = null | number | bigint | string | Uint8Array;
  export type SQLRow = Record<string, SQLOutputValue> | SQLOutputValue[];
  export type SQLParameters = SQLInputValue[] | [Record<string, SQLInputValue>, ...SQLInputValue[]];
  /** File path, Buffer path, file URL object, SQLite `file:` URI string, `:memory:` or `""` (private temporary database). */
  export type DatabasePath = string | Uint8Array | { readonly protocol: string; readonly href: string };
  export type AuthorizerCallback = (
    actionCode: number,
    arg1: string | null,
    arg2: string | null,
    dbName: string | null,
    triggerOrView: string | null,
  ) => number;

  export interface DatabaseSyncOptions {
    open?: boolean;
    readOnly?: boolean;
    enableForeignKeyConstraints?: boolean;
    enableDoubleQuotedStringLiterals?: boolean;
    /** Allow native SQLite extensions for this connection (Node default: false). */
    allowExtension?: boolean;
    timeout?: number;
    readBigInts?: boolean;
    returnArrays?: boolean;
    allowBareNamedParameters?: boolean;
    allowUnknownNamedParameters?: boolean;
  }

  export interface FunctionOptions {
    deterministic?: boolean;
    directOnly?: boolean;
    useBigIntArguments?: boolean;
    varargs?: boolean;
  }

  export interface AggregateOptions<T> extends FunctionOptions {
    start: T | (() => T);
    step(accumulator: T, ...values: SQLOutputValue[]): T;
    inverse?(accumulator: T, ...values: SQLOutputValue[]): T;
    result?(accumulator: T): SQLInputValue;
  }

  export interface StatementColumnMetadata {
    name: string;
    database: string | null;
    table: string | null;
    column: string | null;
    type: string | null;
  }

  export interface StatementResultingChanges {
    changes: number | bigint;
    lastInsertRowid: number | bigint;
  }

  export class StatementSync {
    private constructor();
    readonly sourceSQL: string;
    readonly expandedSQL: string;
    all(...parameters: SQLParameters): SQLRow[];
    get(...parameters: SQLParameters): SQLRow | undefined;
    iterate(...parameters: SQLParameters): IterableIterator<SQLRow>;
    run(...parameters: SQLParameters): StatementResultingChanges;
    columns(): StatementColumnMetadata[];
    setAllowBareNamedParameters(enabled: boolean): void;
    setAllowUnknownNamedParameters(enabled: boolean): void;
    setReturnArrays(enabled: boolean): void;
    setReadBigInts(enabled: boolean): void;
  }

  export interface Session {
    changeset(): Uint8Array;
    patchset(): Uint8Array;
    close(): void;
  }

  export class DatabaseSync {
    constructor(path: DatabasePath, options?: DatabaseSyncOptions);
    readonly isOpen: boolean;
    readonly isTransaction: boolean;
    open(): void;
    close(): void;
    /** Since M23.1 this is Node's own DatabaseSync: ATTACH (literal, bound or computed filenames), VACUUM INTO and directory PRAGMAs are native SQLite; Android file access is the only boundary. */
    exec(sql: string): void;
    prepare(sql: string): StatementSync;
    location(dbName?: string): string | null;
    function(name: string, callback: (...values: SQLOutputValue[]) => SQLInputValue): void;
    function(name: string, options: FunctionOptions, callback: (...values: SQLOutputValue[]) => SQLInputValue): void;
    aggregate<T>(name: string, options: AggregateOptions<T>): void;
    createSession(options?: { table?: string; db?: string }): Session;
    applyChangeset(changeset: Uint8Array, options?: {
      filter?: (tableName: string) => boolean;
      onConflict?: (conflictType: number) => number;
    }): boolean;
    /** Node's native authorizer; null removes the callback. Throws ERR_INVALID_STATE on a closed connection. */
    setAuthorizer(callback: AuthorizerCallback | null): void;
    /** Can enable loading only when allowExtension was true at construction. */
    enableLoadExtension(allow: boolean): void;
    /** Load an Android-compatible SQLite extension using Node's native API. */
    loadExtension(path: string, entryPoint?: string): void;
  }

  export function backup(source: DatabaseSync, path: DatabasePath, options?: {
    source?: string;
    target?: string;
    rate?: number;
    progress?: (info: { totalPages: number; remainingPages: number }) => void;
  }): Promise<number>;
  export const constants: Readonly<Record<string, number>>;
}

/**
 * Rhino's installer module (api-coverage P3.1b) through the host's InstallerService: sources, options and results are
 * those of the Rhino module; every call returns a Promise (the *Async names are the same functions) and failures reject
 * with InstallerError. session() starts the session and resolves with an EventEmitter (stage, progress, complete,
 * error). Capabilities: installer; install, uninstall, setDefault, session and authorizer.request also need installer.mutate.
 */
declare module "autojs6:installer" {
  namespace installer {
    export type Source = string | AutoJs6Node.JsonObject | readonly (string | AutoJs6Node.JsonObject)[];
    export type Options = AutoJs6Node.JsonObject & AutoJs6Node.BridgeCallOptions;
    export interface InstallerError extends Error {
      readonly code?: string;
      readonly retryable?: boolean;
      readonly status?: number;
      readonly systemMessage?: string;
      readonly packageName?: string;
      readonly authorizer?: string;
    }
    export interface InstallerErrorConstructor {
      new (message?: string, fields?: AutoJs6Node.JsonObject): InstallerError;
      readonly prototype: InstallerError;
    }
    export type SessionEvent = "stage" | "progress" | "complete" | "error";
    export interface InstallSession {
      on(event: SessionEvent, listener: (...args: any[]) => void): this;
      once(event: SessionEvent, listener: (...args: any[]) => void): this;
      off(event: SessionEvent, listener: (...args: any[]) => void): this;
      addListener(event: SessionEvent, listener: (...args: any[]) => void): this;
      removeListener(event: SessionEvent, listener: (...args: any[]) => void): this;
      listenerCount(event: SessionEvent): number;
      readonly id: string;
      readonly state: string;
      readonly result: AutoJs6Node.JsonValue | undefined;
      cancel(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      wait(timeoutMs?: number): Promise<AutoJs6Node.JsonValue>;
    }
    export interface Authorizer {
      readonly available: Promise<readonly string[]>;
      state(name?: string, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.JsonObject>;
      request(name: string, timeoutMs?: number, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.JsonObject>;
      requestAsync(name: string, timeoutMs?: number, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.JsonObject>;
    }
    export interface InstallerModule {
      readonly InstallerError: InstallerErrorConstructor;
      readonly authorizer: Authorizer;
      readonly status: Promise<AutoJs6Node.JsonObject>;
      isAvailable(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      isDefault(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      users(options?: AutoJs6Node.BridgeCallOptions): Promise<readonly AutoJs6Node.JsonObject[]>;
      usersAsync(options?: AutoJs6Node.BridgeCallOptions): Promise<readonly AutoJs6Node.JsonObject[]>;
      inspect(source: Source, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.JsonValue>;
      inspectAsync(source: Source, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.JsonValue>;
      install(source: Source, options?: Options): Promise<AutoJs6Node.JsonValue>;
      installAsync(source: Source, options?: Options): Promise<AutoJs6Node.JsonValue>;
      uninstall(packageName: string, options?: Options): Promise<AutoJs6Node.JsonObject>;
      uninstallAsync(packageName: string, options?: Options): Promise<AutoJs6Node.JsonObject>;
      setDefault(enabled?: boolean, options?: Options): Promise<AutoJs6Node.JsonValue>;
      setDefaultAsync(enabled?: boolean, options?: Options): Promise<AutoJs6Node.JsonValue>;
      session(source: Source, options?: Options): Promise<InstallSession>;
    }
  }

  const installer: installer.InstallerModule;
  export = installer;
}

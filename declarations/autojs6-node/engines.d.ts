declare module "engines" {
  namespace engines {
    export interface EngineSnapshot {
      readonly id: number | string;
      readonly engineName: string;
      readonly backend?: string;
      readonly sourceName?: string;
      readonly cwd?: string;
      readonly workingDirectory?: string;
      readonly packageName?: string;
      readonly nodeVersion?: string;
      readonly spawnDepth: number;
    }

    /** A host execution as engines.all() lists it (Rhino's view of every running script). */
    export interface HostExecution {
      readonly id: number;
      readonly engineName: string;
      readonly sourceName: string;
      readonly sourcePath: string;
      readonly workingDirectory: string;
      readonly state: string;
      readonly startedAt: number;
      readonly uptimeMs: number | null;
    }

    export interface StopAllOptions extends AutoJs6Node.BridgeCallOptions {
      /** "host" (default, as Rhino) stops every host execution, this one included; "plugin" keeps the plugin-process view. */
      scope?: "host" | "plugin";
    }

    export interface ExecOptions extends AutoJs6Node.BridgeCallOptions {
      /** The run's limit in milliseconds, at most 60000 (the default). */
      timeoutMs?: number;
      delay?: number;
      interval?: number;
      loopTimes?: number;
      cwd?: string;
      arguments?: AutoJs6Node.JsonObject;
    }

    export interface EnginesModule {
      myEngine(): EngineSnapshot;
      all(options?: AutoJs6Node.BridgeCallOptions): Promise<readonly HostExecution[]>;
      getEngines(options?: AutoJs6Node.BridgeCallOptions): Promise<readonly HostExecution[]>;
      stopAll(options?: StopAllOptions): Promise<number>;
      /** Rhino's stopAllAndToast: every host execution, with the host's toast. */
      stopAllAndToast(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      stopSelf(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      execScript(name: string, source: string, options?: ExecOptions): Promise<EngineSnapshot>;
      execScriptFile(path: string, options?: ExecOptions): Promise<EngineSnapshot>;
      /** An Auto.js recording (.auto) file. */
      execAutoFile(path: string, options?: ExecOptions): Promise<EngineSnapshot>;
    }
  }

  const engines: engines.EnginesModule;
  export = engines;
}

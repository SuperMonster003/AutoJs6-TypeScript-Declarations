/**
 * Rhino's global system functions (api-coverage P3.1b). current* read the foreground app by mode ("auto" tries Shizuku,
 * root, then accessibility); waitFor* poll with Rhino's limit / interval / callback rules and resolve. exit / stop end
 * the execution (from a Worker, the main thread's); the stop state is local to the thread. WIDTH / HEIGHT are the
 * device screen size at the start; setScreenMetrics scales the coordinates of accessibility.click / swipe / gesture.
 */
declare module "autojs6:system" {
  namespace system {
    export type ComponentMode = "auto" | "accessibility" | "a11y" | "shizuku" | "root" | { readonly by?: string; readonly mode?: string };
    export interface WaitCallback {
      then?(value: boolean): unknown;
      else?(value: boolean): unknown;
    }
    export interface SystemModule {
      readonly WIDTH: number;
      readonly HEIGHT: number;
      currentPackage(mode?: ComponentMode): Promise<string>;
      currentActivity(mode?: ComponentMode): Promise<string>;
      currentComponent(mode?: ComponentMode): Promise<string>;
      waitForActivity(activityName: string, limit?: number | WaitCallback, interval?: number | WaitCallback, callback?: WaitCallback): Promise<unknown>;
      waitForPackage(packageName: string, limit?: number | WaitCallback, interval?: number | WaitCallback, callback?: WaitCallback): Promise<unknown>;
      isStopped(): boolean;
      isShuttingDown(): boolean;
      notStopped(): boolean;
      isRunning(): boolean;
      exit(error?: unknown): void;
      stop(): void;
      requiresApi(api: number): void;
      requiresAutojsVersion(version: string | number): void;
      setScreenMetrics(width: number, height: number): void;
      readonly isAutoJs6: true;
      /** Rhino's getClip / setClip: the system clipboard (capability clipboard). */
      getClip(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      setClip(text: unknown, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
    }
  }

  const system: system.SystemModule;
  export = system;
}

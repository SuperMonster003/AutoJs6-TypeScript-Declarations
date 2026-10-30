/**
 * Rhino's global system functions (api-coverage P3.1b). current* read the foreground app by mode ("auto" tries Shizuku,
 * root, then accessibility); waitFor* poll with Rhino's limit / interval / callback rules and resolve. exit / stop end
 * the execution (from a Worker, the main thread's); the stop state is local to the thread. WIDTH / HEIGHT are the
 * device screen size at the start; setScreenMetrics scales the coordinates of accessibility.click / swipe / gesture.
 * As in Rhino, these members and R of autojs6:autojs are also globals (accessors on globalThis in main threads and
 * Workers; assigning one replaces it).
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
      /** Rhino's sleep (api-coverage P3.4): a random pause in [min, max] ms; an interrupted threads task rejects. */
      sleep(min: number, max?: number): Promise<void>;
      readonly wait: RhinoWait;
    }
    export interface RhinoWaitCallback<T = unknown> {
      then?(value: T): unknown;
      else?(value: T): unknown;
    }
    /**
     * Rhino's wait: a function (sync or async) or a selector checked until satisfied. A limit below 100 counts checks,
     * otherwise it is a timeout in ms (10000 by default); interval 200 ms; callback.then / else get the last check and a
     * value they return replaces the boolean result.
     */
    export interface RhinoWait {
      (condition: (() => unknown) | import("autojs6:selector").Target, limit?: number | RhinoWaitCallback, interval?: number | RhinoWaitCallback,
        callback?: RhinoWaitCallback): Promise<unknown>;
      /** flow.waitAsync. */
      readonly async: import("flow").Wait;
    }
  }

  const system: system.SystemModule;
  export = system;
}

declare const WIDTH: number;
declare const HEIGHT: number;
declare const isAutoJs6: true;
declare const R: import("autojs6:autojs").Resources;
declare function currentPackage(mode?: import("autojs6:system").ComponentMode): Promise<string>;
declare function currentActivity(mode?: import("autojs6:system").ComponentMode): Promise<string>;
declare function currentComponent(mode?: import("autojs6:system").ComponentMode): Promise<string>;
declare function waitForActivity(activityName: string, limit?: number | import("autojs6:system").WaitCallback,
  interval?: number | import("autojs6:system").WaitCallback, callback?: import("autojs6:system").WaitCallback): Promise<unknown>;
declare function waitForPackage(packageName: string, limit?: number | import("autojs6:system").WaitCallback,
  interval?: number | import("autojs6:system").WaitCallback, callback?: import("autojs6:system").WaitCallback): Promise<unknown>;
declare function isStopped(): boolean;
declare function isShuttingDown(): boolean;
declare function notStopped(): boolean;
declare function isRunning(): boolean;
declare function exit(error?: unknown): void;
declare function stop(): void;
declare function requiresApi(api: number): void;
declare function requiresAutojsVersion(version: string | number): void;
declare function setScreenMetrics(width: number, height: number): void;
declare function getClip(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
declare function setClip(text: unknown, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
declare function sleep(min: number, max?: number): Promise<void>;
declare const wait: import("autojs6:system").RhinoWait;

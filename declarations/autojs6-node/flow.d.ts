/** Async Flow chains run on the importing Node main thread or Worker. */
declare module "flow" {
  namespace flow {
    interface FlowError extends Error {
      readonly code: "TIMEOUT" | "CANCELLED" | "A11Y_UNAVAILABLE" | "INVALID_TARGET";
      readonly step: string;
      readonly selector: string | null;
      readonly elapsed: number;
      readonly attempts: number;
      readonly reason: string | null;
    }
    interface FlowErrorConstructor {
      new(code: FlowError["code"], step: string, selector?: string | null, elapsed?: number, attempts?: number, reason?: string | null): FlowError;
      (code: FlowError["code"], step: string, selector?: string | null, elapsed?: number, attempts?: number, reason?: string | null): FlowError;
      readonly prototype: FlowError;
    }
    interface Bounds { left: number; top: number; right: number; bottom: number; }
    type Pattern = string | {pattern: string; flags?: string};
    /** Exact IDs/class names; regexes use whole-value Android matching with i/m/s flags. */
    interface Selector {
      text?: string; textContains?: string; textMatches?: Pattern;
      desc?: string; descContains?: string; descMatches?: Pattern;
      id?: string; idMatches?: Pattern; className?: string; classNameMatches?: Pattern;
      content?: string; contentMatches?: Pattern;
      clickable?: boolean; enabled?: boolean; scrollable?: boolean; visibleToUser?: boolean;
      depth?: number; boundsInside?: Bounds; boundsContains?: Bounds;
    }
    /** A fresh JSON snapshot. This is not a live Java UiObject or an actionable node handle. */
    interface NodeSnapshot {
      text: string; desc: string | null; id: string | null; className: string | null;
      bounds: Bounds; clickable: boolean; enabled: boolean; visibleToUser: boolean;
      scrollable: boolean; checked: boolean; selected: boolean; packageName: string;
    }
    type Condition<T> = (() => T | PromiseLike<T>) | PromiseLike<T>;
    interface Defaults { timeout: number; interval: number; stableFor: number; recoverService: boolean; trace: boolean; }
    interface WaitOptions<T = unknown> {
      /** Milliseconds, 10000 by default; Infinity is unbounded, 0 performs one probe. */
      timeout?: number;
      /** Milliseconds, 200 by default. */
      interval?: number;
      /** Maximum probes, a positive integer or Infinity. */
      times?: number;
      /** Milliseconds of continuous stability, 100 by default. */
      stableFor?: number;
      compare?: "fingerprint" | "bounds" | "content" | ((previous: T, next: T) => boolean | PromiseLike<boolean>);
      /** An acyclic projection copied after each sample. Mutually exclusive with compare. */
      snapshot?: (value: T) => unknown | PromiseLike<unknown>;
      missing?: "reset" | "fail";
      /** Wait quietly through service outages; this does not grant permissions or open Settings. */
      recoverService?: boolean;
    }
    interface Wait {
      <T>(condition: Condition<T>, options?: WaitOptions<T>): Flow<T>;
      <T>(condition: Condition<T>, timeout?: number, interval?: number): Flow<T>;
      (selector: Selector | string | RegExp, options?: WaitOptions<NodeSnapshot>): Flow<NodeSnapshot>;
      (selector: Selector | string | RegExp, timeout?: number, interval?: number): Flow<NodeSnapshot>;
      <T, U = T>(condition: Condition<T>, options: WaitOptions<T>, onOk?: ((value: T) => U | PromiseLike<U>) | null, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U>;
      <U = NodeSnapshot>(selector: Selector | string | RegExp, options: WaitOptions<NodeSnapshot>, onOk?: ((value: NodeSnapshot) => U | PromiseLike<U>) | null, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U>;
    }
    interface BooleanWait {
      (condition: Condition<unknown> | Selector | string | RegExp, options?: WaitOptions): Flow<boolean>;
      (condition: Condition<unknown> | Selector | string | RegExp, timeout?: number, interval?: number): Flow<boolean>;
    }
    interface ComponentWait {
      (name: string, options?: WaitOptions<boolean>): Flow<boolean>;
      (name: string, timeout?: number, interval?: number): Flow<boolean>;
    }
    type OptionalOptions = Pick<WaitOptions, "timeout" | "interval" | "times" | "recoverService">;
    interface RepeatOptions {
      timeout?: number; interval?: number;
      /** Maximum actions; 0 is unlimited within the finite timeout. */
      maxAttempts?: number;
      retryOn?: (error: unknown, attempt: number) => boolean | PromiseLike<boolean>;
    }
    interface Waits {
      readonly wait: Wait; readonly waitUntil: Wait; readonly waitWhile: BooleanWait;
      readonly waitForStable: Wait; readonly waitForVisible: Wait;
      readonly waitForHidden: BooleanWait; readonly waitForGone: BooleanWait;
      readonly waitForActivity: ComponentWait; readonly waitForPackage: ComponentWait;
    }
    interface Flow<T> extends PromiseLike<T>, Waits {
      readonly state: "pending" | "fulfilled" | "rejected" | "cancelled";
      readonly step: string; readonly value: T | undefined; readonly error: unknown;
      then<U = T, V = never>(onOk?: ((value: T) => U | PromiseLike<U>) | null, onError?: ((error: any) => V | PromiseLike<V>) | null): Flow<U | V>;
      catch<U = never>(onError: (error: any) => U | PromiseLike<U>): Flow<T | U>;
      else<U = never>(onError: (error: any) => U | PromiseLike<U>): Flow<T | U>;
      finally(callback: () => unknown): Flow<T>;
      map<U>(callback: (value: T) => U | PromiseLike<U>): Flow<U>;
      run<U>(callback: (value: T) => U | PromiseLike<U>): Flow<U>;
      peek(callback: (value: T) => unknown): Flow<T>;
      filter(callback: (value: T) => unknown): Flow<T>;
      sleep(min: number, max?: number): Flow<T>;
      delay(min: number, max?: number): Flow<T>;
      /** Sets a deadline for steps appended after this one, starting when this step runs. */
      timeout(milliseconds: number): Flow<T>;
      /** Reruns only the preceding failed step; never reruns a cancelled step or adopted Promise. */
      retry(times?: number, delay?: number): Flow<T>;
      whenPresent<U>(condition: Condition<U>, handler: (value: U) => unknown, options?: OptionalOptions): Flow<T>;
      whenPresent(selector: Selector | string | RegExp, handler: (value: NodeSnapshot) => unknown, options?: OptionalOptions): Flow<T>;
      repeatUntil<U>(action: (attempt: number) => unknown, condition: Condition<U>, options?: RepeatOptions): Flow<U>;
      repeatUntil(action: (attempt: number) => unknown, selector: Selector | string | RegExp, options?: RepeatOptions): Flow<NodeSnapshot>;
      cancel(): boolean;
      toPromise(): Promise<T>;
      toString(): string;
    }
    interface FlowConstructor {
      <T>(value: T | PromiseLike<T>): Flow<T>;
      new<T>(value: T | PromiseLike<T>): Flow<T>;
      (): Flow<undefined>; new(): Flow<undefined>;
    }
    type Source<T> = Condition<T> | Selector | string | RegExp;
    interface API extends Waits, Wait {
      readonly Flow: FlowConstructor; readonly FlowError: FlowErrorConstructor;
      readonly waitAsync: Wait;
      readonly pending: number;
      /** Always 0: this portable implementation does not create scheduler threads. */
      readonly workers: 0;
      of<T>(value: T | PromiseLike<T>): Flow<T>; of(): Flow<undefined>;
      run<T>(callback: () => T | PromiseLike<T>): Flow<T>;
      sleep(min: number, max?: number): Flow<undefined>; delay(min: number, max?: number): Flow<undefined>;
      all<T>(sources: readonly Source<T>[]): Flow<Array<T | NodeSnapshot>>;
      all<T>(...sources: Source<T>[]): Flow<Array<T | NodeSnapshot>>;
      race<T>(sources: readonly Source<T>[]): Flow<T | NodeSnapshot>; race<T>(...sources: Source<T>[]): Flow<T | NodeSnapshot>;
      any<T>(sources: readonly Source<T>[]): Flow<T | NodeSnapshot>; any<T>(...sources: Source<T>[]): Flow<T | NodeSnapshot>;
      whenPresent<T>(condition: Condition<T>, handler: (value: T) => unknown, options?: OptionalOptions): Flow<undefined>;
      whenPresent(selector: Selector | string | RegExp, handler: (value: NodeSnapshot) => unknown, options?: OptionalOptions): Flow<undefined>;
      repeatUntil<T>(action: (attempt: number) => unknown, condition: Condition<T>, options?: RepeatOptions): Flow<T>;
      repeatUntil(action: (attempt: number) => unknown, selector: Selector | string | RegExp, options?: RepeatOptions): Flow<NodeSnapshot>;
      cancelAll(): number; defaults(options?: Partial<Defaults>): Defaults; trace(enabled?: boolean): boolean;
    }
  }
  const flow: flow.API;
  export = flow;
}
declare module "autojs6:flow" { import flow = require("flow"); export = flow; }

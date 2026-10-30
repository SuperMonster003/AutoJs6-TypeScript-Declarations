/**
 * Rhino's automation family (api-coverage P3.4): automator, auto, threads, continuation, Rhino's timers, yolo and selector,
 * with Rhino's global sleep / wait in autojs6:system, the KeyEvent codes of keys (keys.d.ts), the events module's members
 * (host_events.d.ts) and ocr's modes (ocr.d.ts). Rhino's blocking calls resolve Promises here. The coordinates of click /
 * press / swipe / gesture* follow setScreenMetrics. Capabilities: accessibility; accessibility.gesture for press, swipe and
 * gesture*; keys for global actions other than back / home / recents; accessibility.service for auto.start / stop /
 * launchSettings / clearCache (never implied); yolo and image for yolo.
 * As in Rhino, the automator actions, sync, keepAlive, loop and the selector functions are also globals (accessors on
 * globalThis in main threads and Workers; assigning one replaces it).
 */
declare module "autojs6:automator" {
  namespace automator {
    export type XY = readonly [x: number, y: number];
    /** [x, y], [x] (both x) or {x, y}. */
    export type Point = XY | readonly [x: number] | { readonly x: number; readonly y: number };
    export interface BoundsLike { readonly left: number; readonly top: number; readonly right: number; readonly bottom: number; }
    /** A bounds object or a node snapshot: its center is tapped. */
    export type Target = BoundsLike | { readonly bounds: BoundsLike };
    /** [start, duration, [x, y], ...] or [duration, [x, y], ...]. */
    export type Stroke = readonly [start: number, duration: number, ...points: XY[]] | readonly [duration: number, ...points: XY[]];
    /** true / onCompleted when Android completed the gesture, false / onCancelled otherwise. */
    export type GestureCallback = ((completed: boolean) => void) | { onCompleted?(): void; onCancelled?(): void };
    export interface RetryOptions { times?: number; delay?: number; backoff?: number; signal?: AutoJs6Node.AbortSignalLike; }
    export type GlobalAction = (options?: AutoJs6Node.BridgeCallOptions) => Promise<boolean>;
    export interface ClickLike {
      (x: number, y: number): Promise<boolean>;
      (point: Point | Target): Promise<boolean>;
      /** The index-th node (all when omitted) whose text is text. */
      (text: string, index?: number): Promise<boolean>;
      (left: number, top: number, right: number, bottom: number): Promise<boolean>;
    }
    export interface Scroll {
      /** The index-th scrollable node, the largest when omitted. */
      (index?: number): Promise<boolean>;
      (text: string, index?: number): Promise<boolean>;
      (left: number, top: number, right: number, bottom: number): Promise<boolean>;
    }
    export interface EditText {
      /** All editable nodes, or the index-th one. */
      (text: unknown): Promise<boolean>;
      (index: number, text: unknown): Promise<boolean>;
    }
    export interface AutomatorModule {
      click: ClickLike;
      longClick: ClickLike;
      /** Duration 100 ms (Android's tap timeout) by default. */
      press(x: number, y: number, duration?: number): Promise<boolean>;
      press(point: XY, duration?: number): Promise<boolean>;
      press(duration: number, point: XY): Promise<boolean>;
      swipe(x1: number, y1: number, x2: number, y2: number, duration: number): Promise<boolean>;
      swipe(from: XY, to: XY, duration: number): Promise<boolean>;
      swipe(duration: number, from: XY, to: XY): Promise<boolean>;
      swipe(duration: number, points: readonly XY[] | readonly number[]): Promise<boolean>;
      swipe(points: readonly XY[] | readonly number[], duration: number): Promise<boolean>;
      gesture(duration: number, ...points: (Point | readonly number[])[]): Promise<boolean>;
      /** Returns at once; a trailing callback hears the result. */
      gestureAsync(duration: number, ...points: (Point | readonly number[] | GestureCallback)[]): Promise<void>;
      gestures(...strokes: Stroke[]): Promise<boolean>;
      gesturesAsync(...strokes: (Stroke | GestureCallback)[]): Promise<void>;
      scrollUp: Scroll;
      scrollDown: Scroll;
      /** Appends text. */
      input: EditText;
      /** Replaces the text. */
      setText: EditText;
      back: GlobalAction; home: GlobalAction; recents: GlobalAction;
      notifications: GlobalAction; quickSettings: GlobalAction; powerDialog: GlobalAction; splitScreen: GlobalAction;
      lockScreen: GlobalAction; takeScreenshot: GlobalAction; headsetHook: GlobalAction; headsethook: GlobalAction;
      accessibilityButton: GlobalAction; accessibilityButtonChooser: GlobalAction; accessibilityShortcut: GlobalAction;
      accessibilityAllApps: GlobalAction; dismissNotificationShade: GlobalAction;
      switchToInputMethod(packageName: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      switchToInputMethodWithId(id: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      isServiceRunning(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      ensureService(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      /** Enables the service when Android allows it, then polls it; as in Rhino a timeout ends the whole execution (the promise never settles). */
      waitForService(timeout?: number, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      /** The accessibility screenshot (Android 11+), an image of the images module. Needs screen_capture and image too. */
      captureScreen(options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.ImageHandle>;
      /** Reruns fn(attempt) after a failure: times 3, delay 500 ms, backoff 1 by default. */
      retry<T>(fn: (attempt: number) => T | PromiseLike<T>, options?: number | RetryOptions): Promise<T>;
    }
  }
  const automator: automator.AutomatorModule;
  export = automator;
}

declare module "autojs6:auto" {
  namespace auto {
    export type Mode = "normal" | "fast";
    export type Flag = "findOnUiThread" | "useUsageStats" | "useShell" | "appWindowsFallback" | "eventAssistedPolling" | "noFastPath" | "noRefreshOnHit";
    export type WindowType = "application" | "inputMethod" | "system" | "accessibilityOverlay" | "splitScreenDivider" | "magnificationOverlay" | string;
    export interface WindowSnapshot {
      readonly id: number;
      readonly type: WindowType;
      readonly layer: number;
      readonly title: string | null;
      readonly active: boolean;
      readonly focused: boolean;
      readonly accessibilityFocused: boolean;
      readonly displayId: number;
      readonly packageName: string | null;
      readonly bounds: AutoJs6Node.Bounds;
    }
    /** Rhino's window match arguments. */
    export interface WindowFilter {
      type?: WindowType | readonly WindowType[];
      packageName?: string | RegExp;
      title?: string | RegExp;
      displayId?: number;
      active?: boolean;
      focused?: boolean;
      id?: number;
      layer?: number;
    }
    export interface ServiceInfo {
      readonly id: string;
      readonly eventTypes: number;
      readonly feedbackType: number;
      readonly flags: number;
      readonly notificationTimeout: number;
      readonly capabilities: number;
      readonly packageNames: readonly string[] | null;
    }
    export interface State {
      readonly hasInstance: boolean;
      readonly hasService: boolean;
      readonly isRunning: boolean;
      readonly isOperational: boolean;
      readonly adoptedByEvent: boolean;
    }
    /** The service state with this thread's mode, flags and registrations (Rhino's node lookup counters stay in the host). */
    export interface Stats extends State {
      readonly mode: Mode;
      readonly flags: readonly Flag[];
      readonly windowFilter: boolean;
      readonly events: readonly string[];
      readonly stateListener: boolean;
    }
    export interface AccessibilityEvent {
      readonly type: "accessibility";
      readonly name: string;
      readonly eventType: number;
      readonly packageName: string | null;
      readonly className: string | null;
      readonly eventTime: number;
      readonly action: number;
      readonly isFullScreen: boolean;
      readonly source: import("flow").NodeSnapshot | null;
      readonly time: number;
    }
    export interface RegisterOptions {
      /** Drops an event equal to the previous one within `within` ms (500 by default): by window, by source node, or a key function. */
      distinct?: boolean | "window" | "source" | ((event: AccessibilityEvent) => unknown);
      within?: number;
      debounce?: number;
    }
    export type EventListener = ((event: AccessibilityEvent) => void) | { onAccessibilityEvent(event: AccessibilityEvent): void };
    export type StateListener = ((state: "connected" | "disconnected") => void) | { onConnected?(): void; onDisconnected?(): void };
    export interface Explanation { readonly found: boolean; readonly text: string; toString(): string; readonly [key: string]: unknown; }
    export interface AutoModule {
      /** auto() / auto(forceRestart) / auto(mode, forceRestart?): sets the mode, then makes sure the service runs. */
      (forceRestart?: boolean): Promise<void>;
      (mode: Mode, forceRestart?: boolean): Promise<void>;
      /** A new Promise per read. */
      readonly service: Promise<ServiceInfo | null>;
      readonly services: Promise<readonly string[]>;
      readonly windows: Promise<readonly WindowSnapshot[]>;
      readonly root: Promise<import("flow").NodeSnapshot | null>;
      readonly rootInActiveWindow: Promise<import("flow").NodeSnapshot | null>;
      readonly windowRoots: Promise<readonly import("flow").NodeSnapshot[]>;
      readonly state: Promise<State>;
      readonly stats: Promise<Stats>;
      start(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      stop(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      /** start. */
      enable(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      /** stop. */
      disable(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      launchSettings(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      clearCache(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      hasInstance(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      hasService(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      exists(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      isRunning(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      isOperational(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      /** D-1: enables the service when Android allows it, then polls it; as in Rhino a timeout ends the whole execution (the promise never settles). */
      waitFor(timeout?: number, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      /** flow.wait. */
      readonly wait: import("flow").Wait;
      setMode(mode: Mode): void;
      /** Sets these flags ("!name" leaves one out) and clears the rest. */
      setFlags(flags: Flag | `!${Flag}` | readonly (Flag | `!${Flag}`)[]): void;
      clearFlags(flags: Flag | readonly Flag[]): void;
      setWindowFilter(filter: WindowFilter | boolean | ((window: WindowSnapshot) => unknown) | null): void;
      findWindows(filter?: WindowFilter, options?: AutoJs6Node.BridgeCallOptions): Promise<readonly WindowSnapshot[]>;
      findWindowRoots(filter?: WindowFilter, options?: AutoJs6Node.BridgeCallOptions): Promise<readonly import("flow").NodeSnapshot[]>;
      getWindowRoot(window: WindowSnapshot | number, options?: AutoJs6Node.BridgeCallOptions): Promise<import("flow").NodeSnapshot | null>;
      registerEvent(name: string, listener: EventListener | null, options?: RegisterOptions): Promise<void>;
      registerEvents(name: string, listener: EventListener | null, options?: RegisterOptions): Promise<void>;
      removeEvent(name: string): Promise<void>;
      removeEvents(name: string): Promise<void>;
      /** null removes the listener. */
      stateListener(listener: StateListener | null): Promise<void>;
      currentPackage(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      currentActivity(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      currentComponent(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      explain(selector: import("accessibility").SelectorDescriptor, options?: AutoJs6Node.BridgeCallOptions & { readonly [key: string]: unknown }): Promise<Explanation>;
      /** The window tree as text ("text") or JSON. */
      dump(options?: string | (AutoJs6Node.BridgeCallOptions & { format?: string; readonly [key: string]: unknown })): Promise<string>;
    }
  }
  const auto: auto.AutoModule;
  export = auto;
}

declare module "autojs6:threads" {
  namespace threads {
    /** Q175 (a): an asynchronous task of this thread; its signal aborts on interrupt. */
    export interface Thread {
      readonly id: number;
      readonly name: string;
      readonly signal: AutoJs6Node.AbortSignalLike;
      isAlive(): boolean;
      isInterrupted(): boolean;
      interrupt(): void;
      getId(): number;
      getName(): string;
      /** true once the task ended; with a timeout, false when it still runs. */
      join(timeout?: number): Promise<boolean>;
      waitFor(): Promise<void>;
      toString(): string;
    }
    export interface CurrentThread { readonly id: number; readonly name: string; readonly isMainThread?: boolean; toString(): string; }
    export interface PoolOptions { corePoolSize?: number; maxPoolSize?: number; keepAliveTime?: number; }
    export interface Pool {
      submit<T>(task: (signal: AutoJs6Node.AbortSignalLike) => T | PromiseLike<T>): Promise<T>;
      execute(task: (signal: AutoJs6Node.AbortSignalLike) => unknown): void;
      shutdown(): void;
      /** Interrupts the running tasks; resolves the count of tasks that never started. */
      shutdownNow(): number;
      isShutdown(): boolean;
      isTerminated(): boolean;
      awaitTermination(timeout?: number): Promise<boolean>;
      getActiveCount(): number;
      getQueueSize(): number;
    }
    /** Q176 (a): a 64-bit integer in a SharedArrayBuffer; post buffer to a Worker and open it there with threads.atomic(buffer). */
    export interface AtomicLong {
      readonly buffer: SharedArrayBuffer;
      get(): number;
      set(value: number): void;
      getAndSet(value: number): number;
      compareAndSet(expected: number, value: number): boolean;
      getAndAdd(delta: number): number;
      addAndGet(delta: number): number;
      getAndIncrement(): number;
      incrementAndGet(): number;
      getAndDecrement(): number;
      decrementAndGet(): number;
      valueOf(): number;
      toString(): string;
    }
    /** Q176 (a): a non-reentrant lock in a SharedArrayBuffer, shared with Workers as threads.lock(buffer). */
    export interface Lock {
      readonly buffer: SharedArrayBuffer;
      lock(): Promise<void>;
      /** Without a timeout, one attempt. */
      tryLock(timeout?: number): Promise<boolean>;
      unlock(): void;
      isLocked(): boolean;
    }
    /** Rhino's VolatileDispose: blockedGet resolves with the value of setAndNotify, or null after the timeout. */
    export interface VolatileDispose<T = unknown> {
      setAndNotify(value: T): void;
      blockedGet(timeout?: number): Promise<T | null>;
      /** An interrupt of the waiting task rejects with new ErrorClass(message); a timeout resolves defaultValue. */
      blockedGetOrThrow<D = T>(ErrorClass?: new (message?: string) => Error, timeout?: number, defaultValue?: D): Promise<T | D>;
    }
    export interface ThreadsModule {
      start(action: ((signal: AutoJs6Node.AbortSignalLike) => unknown) | { run(): unknown }): Thread;
      pool(options?: PoolOptions | null): Pool;
      atomic(initial?: number | SharedArrayBuffer | { readonly buffer: SharedArrayBuffer }): AtomicLong;
      lock(shared?: SharedArrayBuffer | { readonly buffer: SharedArrayBuffer }): Lock;
      disposable<T = unknown>(): VolatileDispose<T>;
      interrupt(thread: Thread): void;
      shutDownAll(): void;
      currentThread(): Thread | CurrentThread;
      /** Calls of the returned function on the same lock (a threads.lock, any object, else this, else fn) run one after another. */
      sync<A extends unknown[], R>(fn: (...args: A) => R, lock?: object): (...args: A) => Promise<Awaited<R>>;
    }
  }
  const threads: threads.ThreadsModule;
  export = threads;
}

declare module "autojs6:continuation" {
  namespace continuation {
    export interface Continuation<T = unknown> {
      await(): Promise<T>;
      resume(value?: T): void;
      resumeError(error: unknown): void;
    }
    export interface ContinuationModule {
      /** False as in a Rhino engine without the continuation feature; await is native here. */
      readonly enabled: false;
      create<T = unknown>(): Continuation<T>;
      await<T>(value: T | PromiseLike<T>): Promise<T>;
      delay(millis: number): Promise<void>;
    }
  }
  const continuation: continuation.ContinuationModule;
  export = continuation;
}

declare module "autojs6:timers" {
  namespace timers {
    export interface IntervalRecord { readonly interval: number; readonly timeout: number; readonly initTimestamp: number; readonly handle: AutoJs6NodeTimers.TimerHandle; }
    export interface RhinoTimersModule {
      /** An empty timer that keeps the event loop busy: an interval without timeout, else a timeout. As in Rhino it returns a numeric id for clearTimeout / clearInterval. */
      keepAlive(timeout?: number): number;
      /** Runs listener every interval ms (200 by default) until the timeout or until condition returns a value other than false; then callback(value). */
      setIntervalExt(listener: () => void, interval?: number, timeoutOrCondition?: number | ((this: IntervalRecord) => unknown),
        callback?: (this: IntervalRecord, value: unknown) => void): number;
      /** Abandoned in Rhino: only warns once. */
      loop(): void;
    }
  }
  const timers: timers.RhinoTimersModule;
  export = timers;
}

declare module "autojs6:yolo" {
  namespace yolo {
    export interface LoadOptions extends AutoJs6Node.BridgeCallOptions {
      /** The YOLO plugin's component, package/class. */
      component: string;
      timeoutMillis?: number;
      readonly [key: string]: unknown;
    }
    export interface Detection {
      readonly classId: number;
      readonly label: string;
      readonly confidence: number;
      readonly bounds: AutoJs6Node.Bounds;
    }
    /** Rhino's YoloDetector; failures carry Rhino's YOLO_* codes in error.code. */
    export interface YoloDetector {
      readonly id: string;
      readonly component: string;
      readonly closed: boolean;
      detect(image: AutoJs6Node.ImageHandleLike, options?: AutoJs6Node.BridgeCallOptions & { confidence?: number; timeoutMillis?: number; readonly [key: string]: unknown }): Promise<readonly Detection[]>;
      /** false when already closed. */
      close(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      toString(): string;
    }
    export interface YoloModule {
      load(modelDir: string, options: LoadOptions): Promise<YoloDetector>;
    }
  }
  const yolo: yolo.YoloModule;
  export = yolo;
}

declare module "autojs6:selector" {
  namespace selector {
    export type Target = import("flow").Selector | import("flow").NodeSnapshot | string | RegExp;
    export interface SelectorModule {
      /** One probe of flow.wait: the result, or null when absent. */
      pickup(target: Target, compass?: string | null, resultType?: import("flow").ResultType): Promise<unknown>;
      detect(node: import("flow").NodeSnapshot, compass?: string | null, resultType?: import("flow").ResultType): Promise<unknown>;
      existsOne(...targets: (Target | readonly Target[])[]): Promise<boolean>;
      existsAll(...targets: (Target | readonly Target[])[]): Promise<boolean>;
    }
  }
  const selector: selector.SelectorModule;
  export = selector;
}

/** Rhino's qrcode: the barcode module limited to QR codes. */
declare module "autojs6:qrcode" {
  const qrcode: import("barcode").BarcodeModule;
  export = qrcode;
}

declare const click: import("autojs6:automator").ClickLike;
declare const longClick: import("autojs6:automator").ClickLike;
declare const press: import("autojs6:automator").AutomatorModule["press"];
declare const swipe: import("autojs6:automator").AutomatorModule["swipe"];
declare const gesture: import("autojs6:automator").AutomatorModule["gesture"];
declare const gestureAsync: import("autojs6:automator").AutomatorModule["gestureAsync"];
declare const gestures: import("autojs6:automator").AutomatorModule["gestures"];
declare const gesturesAsync: import("autojs6:automator").AutomatorModule["gesturesAsync"];
declare const scrollUp: import("autojs6:automator").Scroll;
declare const scrollDown: import("autojs6:automator").Scroll;
declare const input: import("autojs6:automator").EditText;
declare const setText: import("autojs6:automator").EditText;
declare const back: import("autojs6:automator").GlobalAction;
declare const home: import("autojs6:automator").GlobalAction;
declare const recents: import("autojs6:automator").GlobalAction;
declare const notifications: import("autojs6:automator").GlobalAction;
declare const quickSettings: import("autojs6:automator").GlobalAction;
declare const powerDialog: import("autojs6:automator").GlobalAction;
declare const splitScreen: import("autojs6:automator").GlobalAction;
declare const retry: import("autojs6:automator").AutomatorModule["retry"];
declare const sync: import("autojs6:threads").ThreadsModule["sync"];
declare const keepAlive: import("autojs6:timers").RhinoTimersModule["keepAlive"];
declare const loop: import("autojs6:timers").RhinoTimersModule["loop"];
declare const pickup: import("autojs6:selector").SelectorModule["pickup"];
declare const detect: import("autojs6:selector").SelectorModule["detect"];
declare const existsOne: import("autojs6:selector").SelectorModule["existsOne"];
declare const existsAll: import("autojs6:selector").SelectorModule["existsAll"];

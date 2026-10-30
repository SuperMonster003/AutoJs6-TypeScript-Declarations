/** Available in main, CJS/ESM Workers and nested Workers. Android operations share the parent execution. */
declare namespace AutoJs6NodeConsole {
  export interface WritableLike {
    write(chunk: unknown, ...args: unknown[]): unknown;
  }

  export interface ConsoleOptions {
    readonly stdout: WritableLike;
    readonly stderr?: WritableLike;
  }

  export interface ConsoleConstructor {
    new(stdout: WritableLike | ConsoleOptions, stderr?: WritableLike): ConsoleInstance;
    (stdout: WritableLike | ConsoleOptions, stderr?: WritableLike): ConsoleInstance;
    readonly prototype: ConsoleInstance;
  }

  export interface ConsoleInstance {
    log(...data: unknown[]): void;
    info(...data: unknown[]): void;
    debug(...data: unknown[]): void;
    dir(...data: unknown[]): void;
    dirxml(...data: unknown[]): void;
    table(...data: unknown[]): void;
    error(...data: unknown[]): void;
    warn(...data: unknown[]): void;
    assert(value?: unknown, ...data: unknown[]): void;
    count(label?: string): void;
    countReset(label?: string): void;
    time(label?: string): void;
    timeLog(label?: string, ...data: unknown[]): void;
    timeEnd(label?: string): void;
    trace(...data: unknown[]): void;
    printAllStackTrace(error?: unknown): void;
    clear(): void;
    group(...data: unknown[]): void;
    groupCollapsed(...data: unknown[]): void;
    groupEnd(): void;
  }

  export interface ConsoleModule extends ConsoleInstance {
    readonly Console: ConsoleConstructor;
    context(): ConsoleModule;
    createTask(): { run<T>(fn: (...args: unknown[]) => T, ...args: unknown[]): T };
    print(...data: unknown[]): void;
    verbose(...data: unknown[]): void;
    err(...data: unknown[]): void;
    /** Android console controls are asynchronous and require the console capability. */
    clear(): Promise<void>;
    clearConsole(): Promise<void>;
    show(reset?: boolean): Promise<void>;
    showConsole(reset?: boolean): Promise<void>;
    openConsole(reset?: boolean): Promise<void>;
    hide(): Promise<void>;
    reset(): Promise<void>;
    expand(): Promise<void>;
    collapse(): Promise<void>;
    launch(): Promise<void>;
    launchConsole(): Promise<void>;
    setSize(width: number, height: number): Promise<void>;
    setPosition(x: number, y: number): Promise<void>;
    setTitle(title?: unknown): Promise<void>;
    setTitleTextSize(size: number): Promise<void>;
    setTitleTextColor(color: unknown): Promise<void>;
    setTitleBackgroundColor(color: unknown): Promise<void>;
    setTitleBackgroundTint(color?: unknown): Promise<void>;
    setTitleBackgroundAlpha(alpha: number): Promise<void>;
    setTitleIconsTint(color?: unknown): Promise<void>;
    setContentTextSize(size: number): Promise<void>;
    setContentTextColor(...colors: unknown[]): Promise<void>;
    setContentTextColors(...colors: unknown[]): Promise<void>;
    setContentBackgroundColor(color: unknown): Promise<void>;
    setContentBackgroundTint(color?: unknown): Promise<void>;
    setContentBackgroundAlpha(alpha: number): Promise<void>;
    setTextSize(size: number): Promise<void>;
    setTextColor(color: unknown): Promise<void>;
    setBackgroundColor(color: unknown): Promise<void>;
    setBackgroundTint(color?: unknown): Promise<void>;
    setBackgroundAlpha(alpha: number): Promise<void>;
    setExitOnClose(enabledOrTimeout?: boolean | number): Promise<void>;
    setTouchable(touchable?: boolean): Promise<void>;
    setGlobalLogConfig(config: Record<string, unknown>): Promise<void>;
    resetGlobalLogConfig(): Promise<void>;
    // api-coverage P3.3: the remaining window controls of Rhino's console.
    isShowing(): Promise<boolean>;
    resetBackgroundAlpha(): Promise<void>;
    resetContentBackgroundAlpha(): Promise<void>;
    resetTitleBackgroundAlpha(): Promise<void>;
    setAvoidStatusBar(avoid?: boolean): Promise<void>;
    setColorful(colorful?: boolean): Promise<void>;
    setGravity(gravity: number): Promise<void>;
    setInputVisible(visible?: boolean): Promise<void>;
    setTimeFormat(pattern?: string | null): Promise<void>;
    setTimeVisible(visible?: boolean): Promise<void>;
    setTouchThrough(touchThrough?: boolean): Promise<void>;
    /** Prints the prompt like log, shows the console window with its input field and settles with the submitted line
     * (one queue with process.stdin; rejects when the execution ends or the window closes). Q165 (a). */
    rawInput(...prompt: unknown[]): Promise<string>;
    /** rawInput, then the line evaluated in this thread's global scope (indirect eval, as Rhino). */
    input(...prompt: unknown[]): Promise<any>;
    /** A configurator recorded here; show() applies it in one host call (Q166 (a)). Keys name setters (size -> setSize). */
    build(options?: Record<string, unknown>): ConsoleConfigurator;
    profile(...data: unknown[]): void;
    profileEnd(...data: unknown[]): void;
    timeStamp(...data: unknown[]): void;
  }

  /** Rhino's ConsoleImpl.Configurator: setters record and return the configurator; getters read what was recorded (null
   * when unset, the window keeps its value); show applies the record with console.configure. */
  export interface ConsoleConfigurator {
    setSize(width: number, height: number): this;
    setPosition(x: number, y: number): this;
    setGravity(gravity?: number | null): this;
    setTitle(title?: unknown): this;
    setTitleTextSize(size: number): this;
    setTitleTextColor(color: unknown): this;
    setTitleBackgroundColor(color: unknown): this;
    setTitleBackgroundTint(color: unknown): this;
    setTitleBackgroundAlpha(alpha?: number | null): this;
    setTitleIconsTint(color: unknown): this;
    setContentTextSize(size: number): this;
    setContentTextColors(...colors: unknown[]): this;
    setContentBackgroundColor(color: unknown): this;
    setContentBackgroundTint(color: unknown): this;
    setContentBackgroundAlpha(alpha?: number | null): this;
    setTextSize(size: number): this;
    setTextColor(color: unknown): this;
    setBackgroundColor(color: unknown): this;
    setBackgroundTint(color: unknown): this;
    setBackgroundAlpha(alpha?: number | null): this;
    setExitOnClose(exitOnCloseOrTimeout?: boolean | number): this;
    setTouchable(touchable?: boolean): this;
    setTouchThrough(touchThrough?: boolean): this;
    setTimeVisible(visible?: boolean): this;
    setTimeFormat(pattern?: string | null): this;
    setColorful(colorful?: boolean): this;
    setAvoidStatusBar(avoid?: boolean): this;
    setInputVisible(visible?: boolean): this;
    readonly size: { readonly width: number; readonly height: number } | null;
    readonly position: { readonly x: number; readonly y: number } | null;
    readonly gravity: number | null;
    readonly title: string | null;
    readonly titleTextSize: number | null;
    readonly titleTextColor: unknown;
    readonly titleBackgroundColor: unknown;
    readonly titleBackgroundTint: unknown;
    readonly titleBackgroundAlpha: number | null;
    readonly titleIconsTint: unknown;
    readonly contentTextSize: number | null;
    readonly contentTextColors: readonly unknown[] | null;
    readonly contentBackgroundColor: unknown;
    readonly contentBackgroundTint: unknown;
    readonly contentBackgroundAlpha: number | null;
    readonly exitOnCloseTimeout: number | null;
    readonly timeFormat: string | null;
    isTouchable(): boolean | null;
    isExitOnClose(): boolean | null;
    isTimeVisible(): boolean | null;
    isColorful(): boolean | null;
    isAvoidStatusBar(): boolean | null;
    isInputVisible(): boolean | null;
    /** The record as console.configure options. */
    toOptions(): Record<string, unknown>;
    show(isReset?: boolean): Promise<void>;
  }
}

interface Console extends AutoJs6NodeConsole.ConsoleModule {}

declare var console: Console;

declare module "console" {
  namespace console {
    export type WritableLike = AutoJs6NodeConsole.WritableLike;
    export type ConsoleOptions = AutoJs6NodeConsole.ConsoleOptions;
    export type ConsoleConstructor = AutoJs6NodeConsole.ConsoleConstructor;
    export type ConsoleInstance = AutoJs6NodeConsole.ConsoleInstance;
    export type ConsoleModule = AutoJs6NodeConsole.ConsoleModule;
    export type ConsoleConfigurator = AutoJs6NodeConsole.ConsoleConfigurator;
  }

  const console: console.ConsoleModule;
  export = console;
}

declare module "node:console" {
  import console = require("console");
  export = console;
}

declare module "autojs6:console" {
  import api = require("console");
  export = api;
}

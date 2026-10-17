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
    input(title?: unknown, prefill?: unknown): never;
    rawInput(title?: unknown, prefill?: unknown): never;
    build(options?: unknown): never;
    profile(...data: unknown[]): void;
    profileEnd(...data: unknown[]): void;
    timeStamp(...data: unknown[]): void;
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
  }

  const console: console.ConsoleModule;
  export = console;
}

declare module "node:console" {
  import console = require("console");
  export = console;
}

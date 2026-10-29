declare module "shell" {
  namespace shell {
    interface ShellExecOptions extends AutoJs6Node.BridgeCallOptions {
      root?: boolean;
      shizuku?: boolean;
      /** Alias of shizuku. */
      adb?: boolean;
      pty?: boolean;
      /** Host-app path; relative paths use the host script working directory. */
      cwd?: string;
      env?: Readonly<Record<string, string>>;
      /** Client-side capture bound for exec; further bytes are drained and marked truncated. */
      maxOutputBytes?: number;
    }
    interface ShellSpawnOptions extends ShellExecOptions {
      /** Process lifetime; 0 or omitted means until exit, explicit close or execution shutdown. */
      timeoutMs?: number;
      drainIntervalMs?: number;
    }
    interface ShellOpenOptions extends ShellSpawnOptions { cmd?: string; }
    interface ShellAccessOptions { root?: boolean; shizuku?: boolean; adb?: boolean; }
    interface ShellAccessReport {
      readonly shell: boolean; readonly root: boolean; readonly shizuku: boolean;
      readonly missingCapabilities: readonly string[];
    }
    interface ShellAccessState {
      readonly shell: boolean; readonly rootAvailable: boolean;
      readonly shizukuRunning: boolean; readonly shizukuGranted: boolean; readonly shizuku: boolean;
      /** Rhino shizuku.isInstalled / hasService / isOperational; absent before AutoJs6 6.8.0. */
      readonly shizukuInstalled?: boolean; readonly shizukuHasService?: boolean; readonly shizukuOperational?: boolean;
      readonly uid: number; readonly missingCapabilities: readonly string[];
    }
    interface ShellResult {
      readonly code: number; readonly stdout: string; readonly stderr: string;
      readonly timedOut: boolean; readonly truncated: boolean;
    }
    /** Rhino command: an array runs its lines in one shell. */
    type ShellCommand = string | readonly string[];
    /**
     * Rhino command arguments: `{l: true, maxDepth: 2}` or `"l|max-depth=2"` become `-l --max-depth 2`;
     * the keys root, adb and exit set the route and append "exit" as in Rhino.
     */
    type ShellCommandArguments = string | Readonly<Record<string, string | number | boolean | null | undefined>>;
    /** Rhino AbstractShell.Result: each line ends with "\n"; output on stderr turns exit code 0 into 1. */
    interface ShellCommandResult {
      readonly code: number; readonly result: string; readonly error: string;
      readonly timedOut: boolean; readonly truncated: boolean;
    }
    /** Defaults of execCommand, spawn and the global key / input functions; null clears one. */
    interface ShellDefaultOptions { root?: boolean | null; adb?: boolean | null; }
    interface ShizukuState {
      readonly isInstalled: boolean; readonly hasService: boolean; readonly isRunning: boolean;
      readonly hasPermission: boolean; readonly isOperational: boolean;
    }
    interface OutputChunk extends Uint8Array { toString(encoding?: string, start?: number, end?: number): string; }
    /** Real node:stream objects; this portable declaration covers their common streaming operations. */
    interface OutputStream<T = OutputChunk> extends AsyncIterable<T> {
      on(event: 'data', listener: (data: T) => void): this;
      on(event: 'end' | 'close' | 'readable', listener: () => void): this;
      on(event: 'error', listener: (error: Error) => void): this;
      once(event: 'data', listener: (data: T) => void): this;
      once(event: 'end' | 'close' | 'readable', listener: () => void): this;
      once(event: 'error', listener: (error: Error) => void): this;
      setEncoding(encoding: string): OutputStream<string>;
      read(size?: number): T | null;
      pause(): this; resume(): this;
      pipe<U extends InputStream>(destination: U): U;
      destroy(error?: Error): this;
      readonly readableEnded: boolean; readonly readableLength: number; readonly readableHighWaterMark: number;
    }
    interface InputStream {
      write(data: string | Uint8Array, callback?: (error?: Error | null) => void): boolean;
      end(callback?: (error?: Error | null) => void): this;
      end(data: string | Uint8Array, callback?: (error?: Error | null) => void): this;
      on(event: 'drain' | 'finish' | 'close', listener: () => void): this;
      on(event: 'error', listener: (error: Error) => void): this;
      destroy(error?: Error): this;
      readonly writableFinished: boolean;
    }
    interface ShellProcess {
      readonly id: string; readonly pid: number; readonly command: string;
      readonly mode: 'sh' | 'root' | 'adb' | 'adb+root';
      readonly closed: boolean; readonly killed: boolean; readonly exitCode: number | null;
      readonly timedOut: boolean;
      readonly ready: Promise<void>; readonly exited: Promise<number>;
      readonly stdin: InputStream; readonly stdout: OutputStream; readonly stderr: OutputStream;
      readLine(): Promise<string | null>; readErrorLine(): Promise<string | null>;
      write(data: string | Uint8Array): Promise<ShellProcess>;
      writeLine(text: string): Promise<ShellProcess>; closeInput(): Promise<ShellProcess>;
      waitFor(): Promise<number>; waitFor(timeoutMs: number): Promise<number | null>;
      /** Terminates the process tree; consume output to receive remaining data and exit. */
      kill(): Promise<boolean>;
      /** Releases the process and discards undrained host output; safe to repeat. */
      close(): Promise<boolean>;
      on(event: 'output' | 'errorOutput', listener: (line: string) => void): this;
      on(event: 'exit' | 'close', listener: (code: number | null) => void): this;
      on(event: 'error', listener: (error: Error) => void): this;
      once(event: 'output' | 'errorOutput', listener: (line: string) => void): this;
      once(event: 'exit' | 'close', listener: (code: number | null) => void): this;
      once(event: 'error', listener: (error: Error) => void): this;
      off(event: string, listener: (...args: any[]) => void): this;
      removeAllListeners(event?: string): this;
      addListener(event: string, listener: (...args: any[]) => void): this;
      removeListener(event: string, listener: (...args: any[]) => void): this;
      prependListener(event: string, listener: (...args: any[]) => void): this;
      prependOnceListener(event: string, listener: (...args: any[]) => void): this;
      listenerCount(event: string): number;
      isAlive(): boolean;
      /** Rhino names: stdout, stderr and stdin; reading a stream directly excludes readLine / readErrorLine on it. */
      getInputStream(): OutputStream;
      getErrorStream(): OutputStream;
      getOutputStream(): InputStream;
      toString(): string;
    }
    interface ShellModule {
      exec(command: string, options?: ShellExecOptions): Promise<ShellResult>;
      execRoot(command: string, options?: ShellExecOptions): Promise<ShellResult>;
      execShizuku(command: string, options?: ShellExecOptions): Promise<ShellResult>;
      execFile(path: string, args?: readonly string[], options?: ShellExecOptions): Promise<ShellResult>;
      /** Synchronous project grant report; use getAccess for Android service/permission state. */
      checkAccess(options?: ShellAccessOptions): ShellAccessReport;
      getAccess(options?: AutoJs6Node.BridgeCallOptions): Promise<ShellAccessState>;
      requestShizukuPermission(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      setDefaultTimeout(ms: number): number;
      /** A boolean is Rhino's root flag; absent root / adb follow setDefaultOptions. */
      spawn(command: ShellCommand, options?: ShellSpawnOptions | boolean): ShellProcess;
      open(options?: ShellOpenOptions): ShellProcess;
      /**
       * Rhino shell(command, arguments?, withRoot?): root through su, adb through Shizuku ("su -c" when both);
       * a leading "adb shell" is dropped. A command that cannot start resolves with its error.
       */
      execCommand(command: ShellCommand, argumentsOrRoot?: ShellCommandArguments | boolean | number, withRoot?: boolean | number): Promise<ShellCommandResult>;
      /** The text execCommand runs; root adds a leading "su" line. */
      getCommand(command: ShellCommand, argumentsOrRoot?: ShellCommandArguments | boolean | number, withRoot?: boolean | number): string;
      /** The "am" arguments of a JSON intent, as app.intentToShell. */
      fromIntent(request: import("app").IntentRequest | import("app").IntentDescriptor): string;
      /** "am force-stop" through root for an alias, package name or application label; false without root. */
      kill(target: string): Promise<boolean>;
      setDefaultOptions(options?: ShellDefaultOptions | null): void;
      isRootAvailable(): Promise<boolean>;
      /** The resumed activity read with root from "dumpsys activity activities"; "" without root. */
      currentPackage(): Promise<string>;
      currentActivity(): Promise<string>;
      currentComponent(): Promise<string>;
      /** Rhino global key functions: "input keyevent" through a usable Shizuku, else root. */
      Menu(): Promise<void>;
      Home(): Promise<void>;
      Back(): Promise<void>;
      Up(): Promise<void>;
      Down(): Promise<void>;
      Left(): Promise<void>;
      Right(): Promise<void>;
      OK(): Promise<void>;
      VolumeUp(): Promise<void>;
      VolumeDown(): Promise<void>;
      Power(): Promise<void>;
      Camera(): Promise<void>;
      /** A key code, a KeyEvent name with or without "KEYCODE_", or "0x" hexadecimal; unknown names reject. */
      KeyCode(keyCode: number | string): Promise<void>;
      /** Rhino global input functions: root, or Shizuku after setDefaultOptions({adb: true}); results are not reported. */
      Text(text: string): Promise<void>;
      Input(text: string): Promise<void>;
      /** Coordinates scale from SetScreenMetrics to the device size. */
      Tap(x: number, y: number): Promise<void>;
      Swipe(x1: number, y1: number, x2: number, y2: number, duration?: number): Promise<void>;
      Screencap(path: string): Promise<void>;
      SetScreenMetrics(width: number, height: number): void;
    }
    interface ShizukuModule {
      (command: string, options?: ShellExecOptions): Promise<ShellResult>;
      exec(command: string, options?: ShellExecOptions): Promise<ShellResult>;
      spawn(command: ShellCommand, options?: ShellSpawnOptions | boolean): ShellProcess;
      open(options?: ShellOpenOptions): ShellProcess;
      checkAccess(options?: ShellAccessOptions): ShellAccessReport;
      getAccess(options?: AutoJs6Node.BridgeCallOptions): Promise<ShellAccessState>;
      requestPermission(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      /** Rhino shizuku(command, arguments?): always through Shizuku; root is ignored. */
      execCommand(command: ShellCommand, argumentsOrRoot?: ShellCommandArguments | boolean | number, withRoot?: boolean | number): Promise<ShellCommandResult>;
      getCommand(command: ShellCommand, argumentsOrRoot?: ShellCommandArguments | boolean | number, withRoot?: boolean | number): string;
      kill(target: string): Promise<boolean>;
      /** Read through Shizuku from "dumpsys activity activities"; the activity is a full class name. */
      currentPackage(): Promise<string>;
      currentActivity(): Promise<string>;
      currentComponent(): Promise<string>;
      isInstalled(): Promise<boolean>;
      hasService(): Promise<boolean>;
      isRunning(): Promise<boolean>;
      hasPermission(): Promise<boolean>;
      isOperational(): Promise<boolean>;
      /** Read on every access. */
      readonly state: Promise<ShizukuState>;
    }
  }

  const shell: shell.ShellModule;
  export = shell;
}

declare module "autojs6:shell" { import shell = require("shell"); export = shell; }
declare module "shizuku" { import shell = require("shell"); const shizuku: shell.ShizukuModule; export = shizuku; }
declare module "autojs6:shizuku" { import shizuku = require("shizuku"); export = shizuku; }

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
      readonly uid: number; readonly missingCapabilities: readonly string[];
    }
    interface ShellResult {
      readonly code: number; readonly stdout: string; readonly stderr: string;
      readonly timedOut: boolean; readonly truncated: boolean;
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
      spawn(command: string, options?: ShellSpawnOptions): ShellProcess;
      open(options?: ShellOpenOptions): ShellProcess;
    }
    interface ShizukuModule {
      (command: string, options?: ShellExecOptions): Promise<ShellResult>;
      exec(command: string, options?: ShellExecOptions): Promise<ShellResult>;
      spawn(command: string, options?: ShellSpawnOptions): ShellProcess;
      open(options?: ShellOpenOptions): ShellProcess;
      checkAccess(options?: ShellAccessOptions): ShellAccessReport;
      getAccess(options?: AutoJs6Node.BridgeCallOptions): Promise<ShellAccessState>;
      requestPermission(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
    }
  }

  const shell: shell.ShellModule;
  export = shell;
}

declare module "autojs6:shell" { import shell = require("shell"); export = shell; }
declare module "shizuku" { import shell = require("shell"); const shizuku: shell.ShizukuModule; export = shizuku; }
declare module "autojs6:shizuku" { import shizuku = require("shizuku"); export = shizuku; }

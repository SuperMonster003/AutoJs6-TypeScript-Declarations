/**
 * Rhino's terminal module (api-coverage P3.3): sessions and visible execution of the 3-Shell Terminal plugin through
 * the host. Capability terminal (Q167 (a); not implied by shell). Each name and its Async form are the same call and
 * return Promises; failures reject with TerminalError (code PLUGIN_UNAVAILABLE, PLUGIN_INCOMPATIBLE, TIMEOUT, ...).
 * Session output events (Rhino's line / overflow / end listeners) are not delivered: use waitFor and transcript.
 */
declare module "autojs6:terminal" {
  namespace terminal {
    export interface TerminalError extends Error {
      readonly name: "TerminalError";
      code: string;
      sessionId?: string;
    }
    export interface TerminalErrorConstructor {
      new(message?: string, code?: string, sessionId?: string): TerminalError;
      (message?: string, code?: string, sessionId?: string): TerminalError;
      readonly prototype: TerminalError;
    }
    export interface OpenOptions {
      cwd?: string;
      show?: boolean;
      [key: string]: unknown;
    }
    export interface ExecOptions {
      cwd?: string;
      timeout?: number;
      show?: boolean;
      [key: string]: unknown;
    }
    export interface TerminalSession {
      readonly id: string;
      readonly cwd?: string;
      readonly state?: string;
      readonly exitCode?: number | null;
      readonly [field: string]: unknown;
      isAlive(): Promise<boolean>;
      isAliveAsync(): Promise<boolean>;
      write(text: string): Promise<this>;
      writeAsync(text: string): Promise<this>;
      waitFor(pattern: string | RegExp, timeout?: number): Promise<string>;
      waitForAsync(pattern: string | RegExp, timeout?: number): Promise<string>;
      transcript(maxBytes?: number): Promise<string>;
      transcriptAsync(maxBytes?: number): Promise<string>;
      show(): Promise<this>;
      showAsync(): Promise<this>;
      close(): Promise<boolean>;
      closeAsync(): Promise<boolean>;
    }
    export interface TerminalModule {
      readonly TerminalError: TerminalErrorConstructor;
      open(options?: OpenOptions): Promise<TerminalSession>;
      openAsync(options?: OpenOptions): Promise<TerminalSession>;
      sessions(): Promise<TerminalSession[]>;
      sessionsAsync(): Promise<TerminalSession[]>;
      session(id: string): Promise<TerminalSession | null>;
      close(session: string | TerminalSession): Promise<boolean>;
      closeAsync(session: string | TerminalSession): Promise<boolean>;
      closeAll(): Promise<number>;
      closeAllAsync(): Promise<number>;
      show(session?: string | TerminalSession): Promise<void>;
      showAsync(session?: string | TerminalSession): Promise<void>;
      /** "available" | "not_installed" | "disabled" | "incompatible" | "unavailable" */
      state(): Promise<string>;
      isAvailable(): Promise<boolean>;
      isAvailableAsync(): Promise<boolean>;
      exec(command: string, options?: ExecOptions): Promise<unknown>;
      execAsync(command: string, options?: ExecOptions): Promise<unknown>;
      env(): Promise<Record<string, unknown>>;
      envAsync(): Promise<Record<string, unknown>>;
      readonly npm: {
        run(script: string, dir?: string | null, options?: ExecOptions): Promise<unknown>;
        runAsync(script: string, dir?: string | null, options?: ExecOptions): Promise<unknown>;
      };
    }
  }

  const terminal: terminal.TerminalModule;
  export = terminal;
}

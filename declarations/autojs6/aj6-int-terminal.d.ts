// Type definitions for AutoJs6 internal module terminal
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
// Last modified: Oct 5, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/terminal/Terminal.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/terminal/TerminalSessionNativeObject.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/terminal/TerminalJsErrors.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/terminal/TerminalScriptArguments.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/terminal/TerminalService.kt
 * @Source %AutoJs6%/plugin-api/terminal-api/src/main/java/org/autojs/plugin/terminal/api/TerminalContract.kt
 * @Source %AutoJs6%/plugin-api/terminal-api/src/main/java/org/autojs/plugin/terminal/api/TerminalErrorCodes.kt
 */
declare namespace Internal {
    /**
     * Interactive system-shell sessions owned by the 3-Shell Terminal plugin, since AutoJs6 6.8.0.
     * `terminal === $terminal`. Install and enable the plugin before calling session operations.
     * Sessions run under the plugin UID and permissions; they do not gain root or host permissions.
     * Synchronous operations must run off the Android UI thread. Async forms return Promises and
     * deliver results on the originating script thread. Script exit removes observers but leaves
     * user sessions running. Plugin process death destroys the sessions.
     * @see https://docs.autojs6.com/#/terminal
     */
    interface Terminal {
        /** New visible session. cwd defaults to the script directory, or plugin HOME when absent. */
        open(): Terminal.Session;
        open(directory: string): Terminal.Session;
        open(options: Terminal.OpenOptions): Terminal.Session;
        openAsync(): Promise<Terminal.Session>;
        openAsync(directory: string): Promise<Terminal.Session>;
        openAsync(options: Terminal.OpenOptions): Promise<Terminal.Session>;
        /** Lists every session in the plugin, including sessions opened outside this script. */
        sessions(): Terminal.Session[];
        sessionsAsync(): Promise<Terminal.Session[]>;
        /** Returns null when the id is no longer registered; there is no sessionAsync method. */
        session(id: string): Terminal.Session | null;
        close(id: string): boolean;
        closeAsync(id: string): Promise<boolean>;
        /** Closes all plugin sessions, including those owned by the user or another script. */
        closeAll(): number;
        closeAllAsync(): Promise<number>;
        /** Shows this session or the most recent one. Android may restrict background UI starts. */
        show(id?: string): void;
        showAsync(id?: string): Promise<void>;
        /** Availability state; missing or disabled plugins are returned as a state. */
        state(): Terminal.PluginState;
        isAvailable(): boolean;
        isAvailableAsync(): Promise<boolean>;
        /**
         * Runs a command in a new session. Defaults: show=true, keepOpen=true, wait=false.
         * Use keepOpen=false with wait=true to receive the command's exit code; a timeout does
         * not close the session. This returns a Session, not the result of the separate shell() API.
         */
        exec(command: string, options?: Terminal.ExecOptions): Terminal.Session;
        execAsync(command: string, options?: Terminal.ExecOptions): Promise<Terminal.Session>;
        env(): Terminal.Environment;
        envAsync(): Promise<Terminal.Environment>;
        readonly npm: Terminal.Npm;
        readonly TerminalError: Terminal.ErrorConstructor;
    }

    namespace Terminal {
        type PluginState = 'available' | 'not_installed' | 'disabled' | 'incompatible' | 'unavailable';
        type SessionState = 'pending' | 'running' | 'exited';
        type StorageAccess = 'granted' | 'denied' | 'not_applicable';
        type NodeState = 'available' | 'disabled' | 'plugin-missing' | 'plugin-untrusted' |
            'plugin-too-old' | 'executable-missing' | 'exec-denied' | 'setup-failed';
        type ErrorCode = 'PLUGIN_UNAVAILABLE' | 'PLUGIN_INCOMPATIBLE' | 'INVALID_ARGUMENT' |
            'SESSION_NOT_FOUND' | 'SESSION_LIMIT' | 'SESSION_CLOSED' | 'DIRECTORY_INACCESSIBLE' |
            'STORAGE_PERMISSION_REQUIRED' | 'PTY_FAILED' | 'NODE_UNAVAILABLE' | 'SUBSCRIPTION_LIMIT' |
            'TIMEOUT' | 'CANCELLED' | 'INTERNAL';

        interface OpenOptions {
            /** Absolute or script-relative directory path; URIs are rejected. */
            cwd?: string;
            /** Up to 64 string entries. HOME, PREFIX and PATH may not be overridden. */
            env?: Record<string, string>;
            /** Open the terminal screen. Default true. */
            show?: boolean;
            /** Nonblank session title. */
            title?: string;
        }
        interface ExecOptions extends OpenOptions {
            /** Keep an interactive shell after the command. Default true. */
            keepOpen?: boolean;
            /** Wait for the entire session to exit, including a retained interactive shell. Default false. */
            wait?: boolean;
            /** Integer milliseconds for wait=true. Default 600000; 0 means unlimited. */
            timeout?: number;
            /** Strip ANSI sequences from delivered output. Default true. */
            stripAnsi?: boolean;
        }
        interface Npm {
            /** npm run <script>. Requires trusted Node.js Runtime 1.5.0+. No dependency installation. */
            run(script: string, directory?: string | null, options?: ExecOptions): Session;
            runAsync(script: string, directory?: string | null, options?: ExecOptions): Promise<Session>;
        }
        interface Environment {
            home: string;
            prefix: string;
            shell: string;
            node: {
                available: boolean;
                version: string | null;
                packageName: string | null;
                pluginVersion: string | null;
                /** null when available; otherwise the typed reason for falling back to plain shell. */
                reason: Exclude<NodeState, 'available'> | null;
            };
            npmRegistry: string;
            storageAccess: StorageAccess;
            pluginVersion: string;
            contractVersion: number;
        }
        interface Error extends globalThis.Error {
            name: 'TerminalError';
            code: ErrorCode | (string & {});
            sessionId?: string;
        }
        interface ErrorConstructor {
            (message?: string | null, code?: ErrorCode | (string & {}) | null, sessionId?: string | null): Error;
            new(message?: string | null, code?: ErrorCode | (string & {}) | null, sessionId?: string | null): Error;
            readonly prototype: Error;
        }
        interface Events {
            output: [text: string];
            exit: [exitCode: number];
            overflow: [droppedBytes: number];
        }
        type Listener<K extends string> = (...args: K extends keyof Events ? Events[K] : any[]) => void;

        /**
         * EventEmitter session. Output is a bounded observation stream: ANSI is stripped by default,
         * lines are split at 64 KiB, and incomplete prompts are flushed after an idle interval.
         * exit follows stream drain; no output follows it. Removing the final output/overflow
         * listener releases the subscription. Script exit leaves the actual terminal session alive.
         */
        interface Session extends EventEmitter$ {
            readonly id: string;
            readonly cwd: string;
            readonly title: string;
            /** Epoch milliseconds. */
            readonly createdAt: number;
            /** Child pid, or a negative value while pending. */
            readonly pid: number;
            readonly state: SessionState;
            /** null until the exit has been observed. */
            readonly exitCode: number | null;
            /** Refreshes this object's session snapshot. */
            isAlive(): boolean;
            /** Nonempty UTF-8 text or integer byte values 0..255, up to 64 KiB. Include newline to execute. */
            write(data: string | number[]): this;
            writeAsync(data: string | number[]): Promise<void>;
            show(): this;
            showAsync(): Promise<void>;
            close(): boolean;
            closeAsync(): Promise<boolean>;
            /**
             * Matches future output, not historical transcript. Default timeout=600000 ms, 0 unlimited.
             * Returns the matching line or prompt fragment. Throws TIMEOUT or SESSION_CLOSED on failure.
             * Regex syntax follows the host's Java-compatible translation; lastIndex is not advanced.
             */
            waitFor(pattern: string | RegExp, timeout?: number): string;
            waitForAsync(pattern: string | RegExp, timeout?: number): Promise<string>;
            /** Rendered screen/scrollback, newest text retained. Limit 1..1048576 UTF-8 bytes, default 1048576. */
            transcript(maxBytes?: number): string;
            transcriptAsync(maxBytes?: number): Promise<string>;
            on<K extends string>(event: K, listener: Listener<K>): this;
            once<K extends string>(event: K, listener: Listener<K>): this;
            prependListener<K extends string>(event: K, listener: Listener<K>): this;
            prependOnceListener<K extends string>(event: K, listener: Listener<K>): this;
            off<K extends string>(event: K, listener: Listener<K>): this;
            removeListener<K extends string>(event: K, listener: Listener<K>): this;
            removeAllListeners(event?: string): this;
        }
    }
}

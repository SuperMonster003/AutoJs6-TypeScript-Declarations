// Type definitions for AutoJs6 internal module installer
// TypeScript Version: 5.1.3
// Last modified: Oct 1, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/installer/Installer.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/installer/InstallSessionNativeObject.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/installer/InstallerScriptOptions.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/installer/InstallerScriptArguments.kt
 */
declare namespace Internal {

    /**
     * The global installer / $installer API, provided by the external 3-Setup Installer plugin.
     * Probe isAvailable/status before use; actions throw or reject PLUGIN_UNAVAILABLE without
     * a compatible, enabled and authorized plugin. Synchronous calls cannot block the Android
     * UI thread. Promise callbacks and session events run on the creating script thread.
     * @since 6.8.0
     * @see https://docs.autojs6.com/#/installer
     */
    interface Installer {
        install(source: Installer.InstallSource, options?: Installer.InstallOptions): Installer.InstallResult;
        /** An array always returns an array, including one application. At most 32 items. */
        install(sources: Installer.InstallSource[], options?: Installer.InstallOptions): Installer.InstallResult[];
        install(source: Installer.InstallSource | Installer.InstallSource[], options?: Installer.InstallOptions): Installer.InstallResult | Installer.InstallResult[];
        installAsync(source: Installer.InstallSource, options?: Installer.InstallOptions): Promise<Installer.InstallResult>;
        installAsync(sources: Installer.InstallSource[], options?: Installer.InstallOptions): Promise<Installer.InstallResult[]>;
        installAsync(source: Installer.InstallSource | Installer.InstallSource[], options?: Installer.InstallOptions): Promise<Installer.InstallResult | Installer.InstallResult[]>;

        session(source: Installer.InstallSource, options?: Installer.InstallOptions): Installer.InstallSession<Installer.InstallResult>;
        session(sources: Installer.InstallSource[], options?: Installer.InstallOptions): Installer.InstallSession<Installer.InstallResult[]>;
        session(source: Installer.InstallSource | Installer.InstallSource[], options?: Installer.InstallOptions): Installer.InstallSession;

        /** Plugin uninstall with a result; app.uninstall remains the separate system intent API. */
        uninstall(packageName: string, options?: Installer.UninstallOptions): Installer.UninstallResult;
        uninstallAsync(packageName: string, options?: Installer.UninstallOptions): Promise<Installer.UninstallResult>;

        /** One ordinary source only. Explicit split sets and arrays are rejected. AAB is inspectable. */
        inspect(source: Installer.Source): Installer.PackageArchiveInfo;
        inspectAsync(source: Installer.Source): Promise<Installer.PackageArchiveInfo>;

        readonly authorizer: Installer.Authorizers;
        isDefault(): boolean;
        /** Requires Shizuku or Root. True means the requested enabled/disabled state was reached; enabled defaults to true. */
        setDefault(enabled?: boolean, options?: Installer.DefaultOptions): boolean;
        setDefaultAsync(enabled?: boolean, options?: Installer.DefaultOptions): Promise<boolean>;
        users(): Installer.DeviceUser[];
        usersAsync(): Promise<Installer.DeviceUser[]>;
        /** Plugin readiness only; it does not imply privileged or silent installation is available. */
        isAvailable(): boolean;
        readonly status: Installer.Status;
        readonly InstallerError: Installer.InstallerErrorConstructor;
    }

    namespace Installer {
        type AuthorizerName = 'auto' | 'none' | 'shizuku' | 'root';
        type ActualAuthorizer = Exclude<AuthorizerName, 'auto'>;
        type Interaction = 'auto' | 'dialog' | 'silent';
        type User = number | 'current' | 'all';

        /** A local path, file:// URI, readable content:// URI, File or Uri. Relative paths use the script cwd. */
        type Source = string | java.io.File | android.net.Uri;
        /** One application: an ordinary source or an explicit non-empty set of at most 64 split files. */
        type InstallSource = Source | { splits: Source[] };

        /** Unknown keys and explicit null values are INVALID_ARGUMENT. There is no options.splits field. */
        interface InstallOptions {
            /** Defaults to auto; an explicit choice does not fall back to another authorizer. */
            authorizer?: AuthorizerName;
            /** Defaults to auto. Silent never falls back to a confirmation dialog. */
            interaction?: Interaction;
            allowDowngrade?: boolean;
            allowTestOnly?: boolean;
            bypassLowTargetSdk?: boolean;
            /** Installer package name, at most 255 UTF-8 bytes. Omitted or empty string uses the plugin. */
            installer?: string;
            /** Defaults to current; numeric IDs are integers in 0..2147483647. */
            user?: User;
            /**
             * Defaults to false. After confirmed success, try deleting path/file URI sources.
             * Content URI sources and failed items are retained. Check sourceDeleted and notes.
             */
            deleteSource?: boolean;
            /** Defaults to true. Failed batch items carry error; false terminates at the first failure. */
            continueOnError?: boolean;
            /** Entire operation timeout in milliseconds: integer 1..7200000, default 1800000. */
            timeout?: number;
        }

        interface UninstallOptions {
            authorizer?: AuthorizerName;
            interaction?: Interaction;
            /** Defaults to false; keeping data requires a privileged authorizer. */
            keepData?: boolean;
            user?: User;
            /** Milliseconds, integer 1..7200000, default 1800000. */
            timeout?: number;
        }

        interface DefaultOptions {
            /** Defaults to auto. */
            authorizer?: AuthorizerName;
        }

        interface InstallResult {
            ok: boolean;
            packageName?: string;
            versionName?: string;
            versionCode?: number;
            previousVersionCode?: number;
            /** Actual authorizer; unavailable when failure happened before authorizer selection. */
            authorizer?: ActualAuthorizer;
            interaction?: Exclude<Interaction, 'auto'>;
            durationMillis?: number;
            sourceDeleted?: boolean;
            notes?: string[];
            /** A real InstallerError instance, including failed items in a completed batch. */
            error?: InstallerError;
        }

        interface UninstallResult {
            ok: boolean;
            packageName: string;
            authorizer?: ActualAuthorizer;
            error?: InstallerError;
        }

        type SessionState = 'pending' | 'preparing' | 'confirming' | 'writing' | 'committing' | 'completed' | 'failed' | 'cancelled';

        interface StageDetail {
            /** Zero-based batch index. */
            index?: number;
            packageName?: string;
        }

        interface ProgressDetail {
            index?: number;
            bytesWritten: number;
            totalBytes: number;
        }

        /** An EventEmitter owned by its creating script thread. Unhandled error events are logged. */
        interface InstallSession<R extends InstallResult | InstallResult[] = InstallResult | InstallResult[]>
            extends Pick<EventEmitter$, 'emit' | 'eventNames' | 'getMaxListeners' | 'listenerCount' | 'listeners'> {
            readonly id: string;
            readonly state: SessionState;
            /** Undefined until completion; preserves the original source/array result shape. */
            readonly result: R | undefined;
            /** True means a new cancellation request was accepted, not that installation was rolled back. */
            cancel(): boolean;
            /**
             * Waits for completion. Optional timeout is an integer in 1..7200000 ms and ends only
             * this wait with TIMEOUT; the operation continues. An uncaught error may exit the script,
             * whose cleanup then cancels its pending sessions. Omit to await the operation deadline.
             */
            wait(timeout?: number): R;

            on(eventName: 'stage', listener: (stage: SessionState, detail: StageDetail) => void): this;
            on(eventName: 'progress', listener: (progress: number, detail: ProgressDetail) => void): this;
            on(eventName: 'complete', listener: (result: R) => void): this;
            on(eventName: 'error', listener: (error: InstallerError) => void): this;
            on(eventName: 'cancel', listener: () => void): this;
            on(eventName: string, listener: (...args: any[]) => void): this;
            once(eventName: 'stage', listener: (stage: SessionState, detail: StageDetail) => void): this;
            once(eventName: 'progress', listener: (progress: number, detail: ProgressDetail) => void): this;
            once(eventName: 'complete', listener: (result: R) => void): this;
            once(eventName: 'error', listener: (error: InstallerError) => void): this;
            once(eventName: 'cancel', listener: () => void): this;
            once(eventName: string, listener: (...args: any[]) => void): this;
            addListener(eventName: string, listener: (...args: any[]) => void): this;
            off(eventName: string, listener: (...args: any[]) => void): this;
            removeListener(eventName: string, listener: (...args: any[]) => void): this;
            removeAllListeners(eventName?: string): this;
            prependListener(eventName: string, listener: (...args: any[]) => void): this;
            prependOnceListener(eventName: string, listener: (...args: any[]) => void): this;
            setMaxListeners(maxListeners: number): this;
        }

        interface Authorizers {
            /** Available implementations, excluding auto. Availability does not imply running or granted. */
            readonly available: ActualAuthorizer[];
            /** Defaults to auto, which aggregates readiness without exposing the plugin's configured order. */
            state(name?: AuthorizerName): AuthorizerState;
            /**
             * Default wait 300000 ms, integer 1..7200000. Use shizuku/root to request their consent.
             * Auto only checks already-ready paths and does not initiate privileged consent.
             */
            request(name: AuthorizerName, timeout?: number): boolean;
            requestAsync(name: AuthorizerName, timeout?: number): Promise<boolean>;
        }

        interface AuthorizerState {
            name: AuthorizerName;
            available: boolean;
            running: boolean;
            granted: boolean;
            reason?: string;
        }

        interface Status {
            available: boolean;
            pluginVersion?: string;
            contractVersion?: number;
            reason?: string;
        }

        interface DeviceUser {
            id: number;
            name?: string;
            primary: boolean;
            running: boolean;
        }

        interface PackageArchiveInfo {
            format: 'apk' | 'apks' | 'xapk' | 'apkm' | 'apkz' | 'zip' | 'aab' | 'unknown';
            installable: boolean;
            packageName?: string;
            versionName?: string;
            versionCode?: number;
            label?: string;
            minSdk?: number;
            targetSdk?: number;
            size: number;
            icon?: android.graphics.Bitmap;
            splits?: Array<{ name: string; size: number; selected: boolean; reason?: string }>;
            signatureSchemes?: string[];
            installed?: { versionName?: string; versionCode: number; signerMatch: 'match' | 'mismatch' | 'unknown'; installer?: string };
            /** AAB module names. AAB can be inspected but cannot be installed directly. */
            modules?: string[];
            problems?: string[];
        }

        type ErrorCode =
            | 'PLUGIN_UNAVAILABLE' | 'INVALID_ARGUMENT' | 'SOURCE_NOT_FOUND' | 'SOURCE_UNREADABLE'
            | 'UNSUPPORTED_FORMAT' | 'INVALID_PACKAGE' | 'INCOMPATIBLE_DEVICE'
            | 'AUTHORIZER_UNAVAILABLE' | 'AUTHORIZER_DENIED' | 'AUTHORIZER_REQUIRED'
            | 'USER_CANCELLED' | 'USER_ACTION_TIMEOUT' | 'SIGNATURE_MISMATCH' | 'INSUFFICIENT_STORAGE'
            | 'INSTALL_FAILED' | 'UNINSTALL_FAILED' | 'BLOCKED_BY_POLICY' | 'TIMEOUT' | 'CANCELLED' | 'INTERNAL';

        interface InstallerError extends Error {
            readonly name: 'InstallerError';
            readonly code: ErrorCode | string;
            readonly status?: number;
            readonly systemMessage?: string;
            readonly packageName?: string;
            readonly authorizer?: string;
            readonly retryable: boolean;
        }

        interface InstallerErrorConstructor {
            new(message?: string, code?: ErrorCode | string, status?: number | null, systemMessage?: string | null, packageName?: string | null, authorizer?: string | null, retryable?: boolean): InstallerError;
            (message?: string, code?: ErrorCode | string, status?: number | null, systemMessage?: string | null, packageName?: string | null, authorizer?: string | null, retryable?: boolean): InstallerError;
            readonly prototype: InstallerError;
        }
    }
}

// Type definitions for AutoJs6 internal module installer
// TypeScript Version: 5.1.3
// Last modified: Oct 2, 2026

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
     * Dhizuku, notification installation and persistent defaults require host build 5306+ and
     * a plugin advertising the corresponding V2 capability. Existing V1 calls remain supported.
     * Advanced install options require host 5308+ and V3 advanced-install-options on the same
     * selected plugin. Omission preserves legacy defaults; explicit false/none still needs V3.
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
        /** Current APK intent resolution only; true does not prove a persistent policy. */
        isDefault(): boolean;
        /**
         * True means the requested scope reached enabled/disabled. Defaults: true, preferred.
         * Preferred uses Shizuku/Root. Persistent accepts Dhizuku on API 26..33 or Root in user 0
         * with a compatible independent system-UID bridge. Dhizuku rejects persistent on API 34+.
         * Persistent auto considers only enabled/ready Root or supported Dhizuku, skipping
         * Shizuku/none. Explicit selection and execution failures never change identity or mode.
         * Removing persistent scope can leave a preferred default, so isDefault() may stay true.
         * Partial writes/process death do not guarantee rollback. persistentConfigured is a
         * local protocol receipt (host 5307+), not a current-policy proof or script property.
         */
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
        type AuthorizerName = 'auto' | 'none' | 'shizuku' | 'root' | 'dhizuku';
        type ActualAuthorizer = Exclude<AuthorizerName, 'auto'>;
        type Interaction = 'auto' | 'dialog' | 'silent' | 'notification';
        type DefaultMode = 'preferred' | 'persistent';
        type DexoptMode = 'none' | 'verify' | 'speed-profile' | 'speed';
        type DexoptStatus = 'accepted' | 'failed' | 'cancelled' | 'timeout' | 'unavailable' | 'unknown';
        type InstallReason = 'unknown' | 'device-restore' | 'device-setup' | 'user' | 'policy';
        type PackageSource = 'unspecified' | 'store' | 'local-file' | 'downloaded-file' | 'other';
        type User = number | 'current' | 'all';

        /** A local path, file:// URI, readable content:// URI, File or Uri. Relative paths use the script cwd. */
        type Source = string | java.io.File | android.net.Uri;
        /** One application: an ordinary source or an explicit non-empty set of at most 64 split files. */
        type InstallSource = Source | { splits: Source[] };

        /**
         * With host 5312+ and the plugin's V3 source-profiles feature, omitted per-package fields
         * can inherit the first enabled source/package-prefix profile. Explicit false/auto/current/
         * none take precedence. Only installer/installReason/packageSource accept null resets;
         * other null values and unknown keys are INVALID_ARGUMENT. There is no options.splits.
         * Profiles never override interaction, timeout or continueOnError. A real confirmation
         * dialog may still change the final item options, subject to mandatory installation policy.
         */
        interface InstallOptions {
            /**
             * Defaults to auto; explicit choices never fall back. Dhizuku requires API 26+, an
             * activated device/profile owner and separate plugin consent. It only targets the
             * current owner/profile user and rejects the three privileged flags below.
             */
            authorizer?: AuthorizerName;
            /**
             * Defaults to auto. Silent never falls back to a confirmation dialog. Notification
             * requires its V2 feature and usable notifications, else NOTIFICATION_UNAVAILABLE.
             * Android confirmation, when needed, is still entered through the notification action.
             */
            interaction?: Interaction;
            allowDowngrade?: boolean;
            allowTestOnly?: boolean;
            bypassLowTargetSdk?: boolean;
            /**
             * V3. Omitted means no request unless inherited from a profile. True uses Shizuku/Root to request system-grantable
             * permissions and supported installer-changeable app-ops. Android restrictions still
             * apply; this does not grant accessibility, overlays or arbitrary signature permissions.
             */
            grantAllRequestedPermissions?: boolean;
            /**
             * V3, API 34+ for true. Enforcement can start only on initial installation; Android
             * may ignore updates or existing other-user packages. False does not revoke an owner.
             * The request is not a guarantee; inspect updateOwner/notes on a successful result.
             */
            requestUpdateOwnership?: boolean;
            /**
             * V3. Defaults to no extra manual compilation. Non-none requires Shizuku/Root;
             * verify needs API 26+. None does not disable Android's normal compilation.
             */
            dexopt?: DexoptMode;
            /** V3, API 26+ for non-null. Null resets inheritance to the backend default and still requires V3 support. */
            installReason?: InstallReason | null;
            /** V3, API 33+ for non-null. Null resets inheritance to existing local-file attribution on API 33+. */
            packageSource?: PackageSource | null;
            /**
             * At most 255 UTF-8 bytes. Default follows the identity: shell for Shizuku ADB,
             * plugin for Root/none, owner for Dhizuku. Dhizuku refuses a different installer.
             * Null or the empty string explicitly resets an inherited installer to that default.
             */
            installer?: string | null;
            /** Defaults to current; numeric IDs are integers in 0..2147483647. */
            user?: User;
            /**
             * Defaults to false unless inherited. Explicit false always vetoes host deletion.
             * After confirmed success, try deleting owned path/file URI sources. Content URIs
             * and aliases shared with retained/failed/unprocessed items stay retained. An invalid
             * negotiated cleanup decision also retains the file. Check sourceDeleted and notes.
             */
            deleteSource?: boolean;
            /** Defaults to true. Failed batch items carry error; false terminates at the first failure. */
            continueOnError?: boolean;
            /** Entire operation timeout in milliseconds: integer 1..7200000, default 1800000. */
            timeout?: number;
        }

        interface UninstallOptions {
            authorizer?: AuthorizerName;
            /** Notification presentation is installation-only. */
            interaction?: Exclude<Interaction, 'notification'>;
            /** Defaults to false; needs Shizuku/Root. Dhizuku refuses keepData and other/all users. */
            keepData?: boolean;
            user?: User;
            /** Milliseconds, integer 1..7200000, default 1800000. */
            timeout?: number;
        }

        interface DefaultOptions {
            /** Auto uses configured order; persistent filters to eligible Root/Dhizuku only. */
            authorizer?: AuthorizerName;
            /**
             * Preferred by default. Persistent requires its negotiated V2 feature and a supporting
             * identity: Dhizuku API 26..33 or a system-UID Root bridge in user 0. Root compatibility
             * is device-specific; API 24/Magisk 25.2/SELinux Enforcing is the verified environment.
             */
            mode?: DefaultMode;
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
            /** Effective request from negotiated source profiles; true does not mean deletion succeeded. */
            sourceDeleteRequested?: boolean;
            notes?: string[];
            /**
             * Observation visible to the calling identity after ownership was requested. Null
             * means Android returned no owner, including visibility filtering; it does not prove
             * globally absent ownership. A failed read omits the field and reports notes.
             */
            updateOwner?: string | null;
            /** Extra manual dexopt observation; its failure does not reverse confirmed installation. */
            dexopt?: DexoptResult;
            /** A real InstallerError instance, including failed items in a completed batch. */
            error?: InstallerError;
        }

        interface UninstallResult {
            ok: boolean;
            packageName: string;
            authorizer?: ActualAuthorizer;
            error?: InstallerError;
        }

        interface DexoptResult {
            filter: Exclude<DexoptMode, 'none'>;
            /** Accepted includes a system skip; it does not prove compilation actually ran. */
            status: DexoptStatus;
            message?: string;
        }

        type SessionState = 'pending' | 'preparing' | 'confirming' | 'writing' | 'committing' | 'optimizing' | 'completed' | 'failed' | 'cancelled';

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
             * Default wait 300000 ms, integer 1..7200000. Use shizuku/root/dhizuku for their consent.
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
            /** Negotiated version, not an assumption that every optional feature is implemented. */
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
            | 'INSTALL_FAILED' | 'UNINSTALL_FAILED' | 'BLOCKED_BY_POLICY' | 'TIMEOUT' | 'CANCELLED' | 'INTERNAL'
            | 'NOTIFICATION_UNAVAILABLE';

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

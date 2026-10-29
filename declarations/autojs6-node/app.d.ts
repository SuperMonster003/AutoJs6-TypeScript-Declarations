declare module "app" {
  namespace app {
    export type IntentExtraValue =
      | AutoJs6Node.JsonPrimitive
      | readonly string[]
      | readonly number[]
      | readonly boolean[];

    export interface IntentExtras {
      readonly [key: string]: IntentExtraValue;
    }

    export interface IntentRequest {
      action?: string;
      data?: string;
      url?: string;
      type?: string;
      packageName?: string;
      package?: string;
      className?: string;
      component?: string;
      category?: string | readonly string[];
      categories?: string | readonly string[];
      flags?: number | readonly number[];
      extras?: IntentExtras;
      /**
       * Rhino intent options of startActivity, startService and sendBroadcast: run "am" through Shizuku or root when
       * requested, declared (shell.shizuku / shell.root) and usable, else the ordinary call; dual starts the activity
       * for the other users as startDualActivity. startDualActivity reads root / shizuku as the route order.
       */
      root?: boolean;
      shizuku?: boolean;
      dual?: boolean;
    }

    export interface IntentDescriptor {
      readonly action?: string;
      readonly data?: string;
      readonly type?: string;
      readonly packageName?: string;
      readonly className?: string;
      readonly component?: string;
      readonly categories?: readonly string[];
      readonly flags?: number;
      readonly extras?: IntentExtras;
    }

    export interface UriDescriptor {
      readonly schema: "autojs6-node-app-uri-descriptor-v1";
      readonly value: string;
      readonly scheme?: string;
      readonly authority?: string;
      readonly userInfo?: string;
      readonly host?: string;
      readonly port?: number;
      readonly path?: string;
      readonly query?: string;
      readonly fragment?: string;
    }

    export type StartActivityRequest = IntentRequest | string;

    export type EmailAddressList = string | readonly string[];

    export interface PackageInfo {
      readonly packageName: string;
      readonly appName: string;
      readonly versionName: string;
      readonly versionCode: number;
      readonly system: boolean;
      readonly enabled: boolean;
      readonly firstInstallTime: number;
      readonly lastUpdateTime: number;
    }

    /** PackageManager flag names: `{get: ["activities"]}` is GET_ACTIVITIES; GET_META_DATA is always set. */
    export interface PackageQueryOptions {
      readonly get?: readonly string[];
      readonly match?: readonly string[];
    }

    /** JSON snapshot of android.content.pm.PackageInfo; component lists are null unless requested with get. */
    export interface PackageSnapshot extends PackageInfo {
      readonly uid: number;
      readonly targetSdkVersion: number;
      readonly minSdkVersion: number;
      readonly sourceDir: string | null;
      readonly requestedPermissions: readonly string[] | null;
      readonly activities: readonly string[] | null;
      readonly services: readonly string[] | null;
      readonly receivers: readonly string[] | null;
      readonly providers: readonly string[] | null;
    }

    /** A preset application of AutoJs6 (app.getAppByAlias), e.g. alias "QQ". */
    export interface PresetApp {
      readonly alias: string;
      readonly packageName: string;
      readonly appName: string;
      readonly appNameZh: string;
      readonly appNameEn: string;
    }

    export interface SendEmailRequest {
      readonly to?: EmailAddressList;
      readonly email?: EmailAddressList;
      readonly address?: EmailAddressList;
      readonly cc?: EmailAddressList;
      readonly bcc?: EmailAddressList;
      readonly subject?: string;
      readonly text?: string;
      readonly body?: string;
    }

    export interface AppModule {
      readonly packageName: string;
      readonly versionName: string;
      readonly versionCode: number;
      intent(request: IntentRequest): IntentDescriptor;
      parseUri(uri: string | null | undefined): UriDescriptor | null;
      getUriForFile(path: string, options?: AutoJs6Node.BridgeCallOptions): Promise<import("autojs6:android").UriSnapshot>;
      intentToShell(request: IntentRequest | IntentDescriptor): string;
      openUrl(url: string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      /**
       * Dual-user helpers (D-4): "am" / "cmd package" for each other user through Shizuku, root or the plain shell,
       * whichever is declared and usable first; they also need app.query and shell. Without other users they do
       * nothing (launch / kill helpers resolve true, isDualInstalled false).
       */
      openDualUrl(url: string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      sendEmail(request: SendEmailRequest | EmailAddressList, options?: AutoJs6Node.BridgeCallOptions & Partial<SendEmailRequest>): Promise<void>;
      uninstall(packageName: string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      uninstallDual(packageName: string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      getPackageName(appName: string, options?: AutoJs6Node.BridgeCallOptions): Promise<string | null>;
      getAppName(packageName: string, options?: AutoJs6Node.BridgeCallOptions): Promise<string | null>;
      isInstalled(packageName: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      isDualInstalled(packageName: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      viewFile(path: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      editFile(path: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      launch(packageName: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      launchDual(packageName: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      launchPackage(packageName: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      launchDualPackage(packageName: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      launchApp(appName: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      launchDualApp(appName: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      openAppSetting(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      openAppSetting(packageName?: string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      openAppSettings(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      openAppSettings(packageName?: string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      openDualAppSetting(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      openDualAppSetting(packageName?: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      openDualAppSettings(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      openDualAppSettings(packageName?: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      launchSettings(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      launchSettings(packageName?: string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      launchDualSettings(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      launchDualSettings(packageName?: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      launchAppDetailsSettings(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      launchAppDetailsSettings(packageName?: string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      launchDualAppDetailsSettings(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      launchDualAppDetailsSettings(packageName?: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      startActivity(request: IntentRequest, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      startActivity(url: string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      startDualActivity(request: IntentRequest | string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      /** Sends through Android as the host app; a string is an action name. */
      sendBroadcast(request: IntentRequest | string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      /** Starts a regular Android service, subject to Android background-start restrictions. */
      startService(request: IntentRequest, options?: AutoJs6Node.BridgeCallOptions): Promise<string | null>;
      /** Returns packages visible to Android's package manager. */
      getInstalledApps(filter?: { readonly includeSystem?: boolean }, options?: AutoJs6Node.BridgeCallOptions): Promise<readonly PackageInfo[]>;
      getPackageInfo(packageName: string, options?: AutoJs6Node.BridgeCallOptions): Promise<PackageInfo | null>;
      getInstalledPackages(query?: PackageQueryOptions, options?: AutoJs6Node.BridgeCallOptions): Promise<readonly PackageSnapshot[]>;
      /** Reads an APK file in the script's file scope; null when it is not a readable package. */
      getApkInfo(path: string, query?: PackageQueryOptions, options?: AutoJs6Node.BridgeCallOptions): Promise<PackageSnapshot | null>;
      getAppByAlias(alias: string, options?: AutoJs6Node.BridgeCallOptions): Promise<PresetApp | null>;
      /** Delivers to the host app's local receivers before resolving; a string is an action name. */
      sendLocalBroadcastSync(request: IntentRequest | string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      /** "am force-stop" through Shizuku, root or the plain shell; true when the command succeeds. */
      kill(packageName: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      killDual(packageName: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      /** Rhino's app.autojs: the autojs6:autojs module of this thread. */
      readonly autojs: typeof import("autojs6:autojs");
    }
  }

  const app: app.AppModule;
  export = app;
}

declare module "autojs6:app" { import app = require("app"); export = app; }

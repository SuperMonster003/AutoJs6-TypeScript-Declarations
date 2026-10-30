/**
 * Rhino's autojs module (api-coverage P3.1b). The version fields are synchronous; autojs.version compares as the host's
 * io.github.g00fy2.versioncompare does. Everything that asks the host returns a Promise, the getters rotation /
 * orientation / themeColor included; R.<type>.<name> resolves with the resource id ("strings" reads as "string").
 * getRootMode resolves with Rhino's RootMode object (key, description, name(), ordinal(), toString()).
 * Capabilities: autojs; setRootMode, restart and exit also need autojs.control.
 */
declare module "autojs6:autojs" {
  namespace autojs {
    export type RootModeName = "AUTO_DETECT" | "FORCE_ROOT" | "FORCE_NON_ROOT";
    /** Rhino's RootUtils.RootMode: one frozen object per mode. */
    export interface RootMode {
      /** The settings key, such as "key_$_root_mode_auto_detect". */
      readonly key: string;
      /** The English description, such as "Auto detect root access". */
      readonly description: string;
      name(): RootModeName;
      ordinal(): number;
      /** "RootMode{key=..., description='...'}", as the Java enum prints. */
      toString(): string;
    }
    export type RootModeInput = RootMode | RootModeName | 1 | 0 | -1 | boolean | "root" | "non-root" | "auto";
    export interface Version {
      readonly code: number;
      readonly name: string;
      readonly date: string;
      isHigherThan(other: string | { toString(): string }): boolean;
      isLowerThan(other: string | { toString(): string }): boolean;
      isEqual(other: string | { toString(): string }): boolean;
      isAtLeast(other: string | { toString(): string }, ignoreSuffix?: boolean): boolean;
    }
    export interface ThemeColor {
      readonly colorPrimary: number;
      readonly colorPrimaryDark: number;
      readonly colorAccent: number;
    }
    export type Resources = { readonly [type: string]: { readonly [name: string]: Promise<number> } };
    export interface AutojsModule {
      readonly versionCode: number;
      readonly versionName: string;
      readonly versionDate: string;
      readonly name: string;
      readonly packageName: string;
      readonly version: Version;
      readonly R: Resources;
      readonly rotation: Promise<number>;
      readonly orientation: Promise<number>;
      readonly themeColor: Promise<ThemeColor>;
      isRootAvailable(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      getRootMode(options?: AutoJs6Node.BridgeCallOptions): Promise<RootMode>;
      /** isWriteIntoPreference: true or "write_into_pref" also stores the mode in the settings. */
      setRootMode(mode: RootModeInput, isWriteIntoPreference?: boolean | string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      canModifySystemSettings(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      canWriteSecureSettings(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      canDisplayOverOtherApps(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      getLanguage(options?: AutoJs6Node.BridgeCallOptions): Promise<Intl.Locale>;
      getLanguageTag(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      isScreenPortrait(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      isScreenLandscape(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      /** scripts run after the restart ("@" is the current script, ".js" is appended). */
      restart(scripts?: string | readonly string[] | null, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      exit(scripts?: string | readonly string[] | null, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
    }
  }

  const autojs: autojs.AutojsModule;
  export = autojs;
}

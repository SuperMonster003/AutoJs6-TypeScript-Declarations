/**
 * Rhino's settings module (api-coverage P3.1b): switches by key, the script export and its categories, each a Promise.
 * Capabilities: settings; setEnabled also needs settings.write, export files.write.
 */
declare module "autojs6:settings" {
  namespace settings {
    export interface SettingsModule {
      isEnabled(key: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      setEnabled(key: string, enabled: boolean, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      export(path?: string | null, categories?: string | readonly string[] | null, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.JsonObject>;
      categories(options?: AutoJs6Node.BridgeCallOptions): Promise<readonly AutoJs6Node.JsonObject[]>;
    }
  }

  const settings: settings.SettingsModule;
  export = settings;
}

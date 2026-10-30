/** Rhino's sysprops module (api-coverage P3.1b): Android system properties, each a Promise. Capability: sysprops. */
declare module "autojs6:sysprops" {
  namespace sysprops {
    export interface SyspropsModule {
      get(name: string, defaultValue?: string | null, options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      getInt(name: string, defaultValue?: number | null, options?: AutoJs6Node.BridgeCallOptions): Promise<number | null>;
      getBoolean(name: string, defaultValue?: boolean | null, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean | null>;
      getAll(options?: AutoJs6Node.BridgeCallOptions): Promise<Readonly<Record<string, string>>>;
    }
  }

  const sysprops: sysprops.SyspropsModule;
  export = sysprops;
}

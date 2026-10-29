/** Rhino's sysprops module (api-coverage P3.1b): Android system properties, each a Promise. Capability: sysprops. */
declare module "autojs6:sysprops" {
  namespace sysprops {
    export interface SyspropsModule {
      get(name: string, defaultValue?: string, options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      getInt(name: string, defaultValue?: number, options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      getBoolean(name: string, defaultValue?: boolean, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      getAll(options?: AutoJs6Node.BridgeCallOptions): Promise<Readonly<Record<string, string>>>;
    }
  }

  const sysprops: sysprops.SyspropsModule;
  export = sysprops;
}

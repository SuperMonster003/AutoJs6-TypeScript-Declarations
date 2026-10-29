declare module "storage" {
  namespace storage {
    export type StorageValue = AutoJs6Node.JsonValue;

    export interface StorageStore {
      readonly name: string;
      /** The number of keys (a read-only property in Rhino). */
      size(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      get<T extends StorageValue = StorageValue>(key: string, defaultValue: T, options?: AutoJs6Node.BridgeCallOptions): Promise<StorageValue | T>;
      get<T extends StorageValue = StorageValue>(key: string, defaultValue?: T, options?: AutoJs6Node.BridgeCallOptions): Promise<StorageValue | T | undefined>;
      put(key: string, value: StorageValue, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      putSync(key: string, value: StorageValue, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      remove(key: string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      removeSync(key: string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      clear(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      clearSync(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      keys(options?: AutoJs6Node.BridgeCallOptions): Promise<readonly string[]>;
      contains(key: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      selfRemove(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      selfRemoveSync(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
    }

    export interface StorageModule {
      create(name: string): StorageStore;
      open(name: string): StorageStore;
      remove(name: string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      removeSync(name: string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      /** The non-empty stores of this package and working directory that Node scripts have put values in (the runtime keeps their names), sorted. */
      names(options?: AutoJs6Node.BridgeCallOptions): Promise<readonly string[]>;
      all(options?: AutoJs6Node.BridgeCallOptions): Promise<readonly StorageStore[]>;
    }
  }

  const storage: storage.StorageModule;
  export = storage;
}

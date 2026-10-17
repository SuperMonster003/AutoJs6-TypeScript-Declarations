declare module "autojs6:bridge" {
  interface BridgeModule {
    /**
     * Calls the host broker. In a Worker, the call travels through its parent
     * MessagePort; nested workers use the same root execution's permissions.
     * Arguments and results cross threads using Node's structured clone.
     */
    callAutoJs<T = unknown>(
      moduleName: string,
      methodName: string,
      args?: readonly unknown[],
      options?: AutoJs6Node.BridgeCallOptions
    ): Promise<T>;
    /** Returns the execution's permission declaration snapshot. */
    permissions(): AutoJs6Node.BridgePermissionsReport;
  }
  const bridge: BridgeModule;
  export = bridge;
}

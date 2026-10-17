declare module "keys" {
  /** Requires keys and Android accessibility. false means Android declined the action. */
  interface KeysModule {
    notifications(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
    quickSettings(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
    lockScreen(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
    /** Invokes Android's screenshot UI; use images.captureScreen to receive pixels. */
    takeScreenshot(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
    splitScreen(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
    /** Opens the system power menu. */
    powerDialog(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
  }
  const keys: KeysModule;
  export = keys;
}

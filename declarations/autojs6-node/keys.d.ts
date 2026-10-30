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
    /** Rhino's KeyEvent codes (api-coverage P3.4). */
    readonly home: 3; readonly HOME: 3; readonly back: 4; readonly BACK: 4; readonly menu: 82; readonly MENU: 82;
    readonly volumeUp: 24; readonly volume_up: 24; readonly VOLUME_UP: 24;
    readonly volumeDown: 25; readonly volume_down: 25; readonly VOLUME_DOWN: 25;
  }
  const keys: KeysModule;
  export = keys;
}
declare module "autojs6:keys" { import keys = require("keys"); export = keys; }

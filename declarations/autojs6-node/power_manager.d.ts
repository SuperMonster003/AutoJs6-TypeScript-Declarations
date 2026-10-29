/**
 * Rhino's powerManager module (api-coverage P3.1b); packageName defaults to AutoJs6. The request opens the system
 * dialog, which the user answers. Capabilities: device and device.power (as device.isIgnoringBatteryOptimizations).
 */
declare module "autojs6:power_manager" {
  namespace powerManager {
    export interface PowerManagerModule {
      isIgnoringBatteryOptimizations(packageName?: string | null, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      requestIgnoreBatteryOptimizations(forceRequest?: boolean, packageName?: string | null, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
    }
  }

  const powerManager: powerManager.PowerManagerModule;
  export = powerManager;
}

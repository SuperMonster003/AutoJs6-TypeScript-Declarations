declare module "device" {
  namespace device {
    export interface DeviceModule {
      readonly sdkInt: number;
      readonly width: number;
      readonly height: number;
      readonly density: number;
      readonly densityDpi: number;
      readonly release: string;
      readonly model: string;
      readonly brand: string;
      readonly product: string;
      readonly board: string;
      readonly bootloader: string;
      readonly hardware: string;
      readonly fingerprint: string;
      readonly buildId: string;
      /** Live host snapshot. Synchronous properties above describe script startup. */
      info(options?: AutoJs6Node.BridgeCallOptions): Promise<DeviceInfo>;
      getWidth(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      getHeight(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      getDensity(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      getDensityDpi(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      getBrightness(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      getBrightnessMode(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      getBattery(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      isCharging(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      getSdkInt(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      getRelease(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      getModel(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      getBrand(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      getProduct(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      getBoard(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      getBootloader(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      getHardware(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      getFingerprint(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      getBuildId(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      getTotalMem(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      getAvailMem(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      /** Requires device.power and Android's modify-system-settings permission; value 0..255. */
      setBrightness(value: number, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      setBrightnessMode(mode: 0 | 1, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      /** Requires device.power. Positive timeout; script exit also releases the wake lock. */
      keepScreenOn(timeoutMs: number, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      cancelKeepingAwake(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      /** Audio helpers delegate to media and require media + media.audio. */
      getMusicVolume(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      getMusicMaxVolume(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      setMusicVolume(value: number, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      getNotificationVolume(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      getNotificationMaxVolume(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      setNotificationVolume(value: number, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      getAlarmVolume(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      getAlarmMaxVolume(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      setAlarmVolume(value: number, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      isScreenOn(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      wakeUp(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      vibrate(durationMs: number, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      isIgnoringBatteryOptimizations(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      openBatteryOptimizationSettings(options?: DevicePowerSettingsOptions): Promise<DevicePowerSettingsResult>;
    }

    export interface DeviceInfo {
      readonly schema: "autojs6-bridge-device-info-v1";
      readonly build: {
        readonly sdkInt: number;
        readonly release: string;
        readonly model: string;
        readonly brand: string;
        readonly product: string;
        readonly board: string;
        readonly bootloader: string;
        readonly hardware: string;
        readonly fingerprint: string;
        readonly buildId: string;
        readonly [key: string]: unknown;
      };
      readonly screen: {
        readonly width: number;
        readonly height: number;
        readonly density: number;
        readonly densityDpi: number;
        /** -1 if Android does not expose the setting. */
        readonly brightness: number;
        readonly brightnessMode: number;
        readonly canWriteSettings: boolean;
        readonly orientation: "portrait" | "landscape";
        readonly rotation: number;
        readonly rotationDegrees: number;
      } | { readonly error: string };
      readonly battery: {
        readonly available: boolean;
        readonly percent?: number;
        readonly isCharging?: boolean;
        readonly status?: string;
        readonly plugged?: string;
        readonly temperatureCelsius?: number | null;
      } | { readonly error: string };
      readonly memory: { readonly totalMem: number; readonly availMem: number } | { readonly error: string };
      readonly screenOn: boolean;
      readonly locale: string;
      readonly timeZone: string;
      readonly uptimeMs: number;
      readonly now: number;
      readonly [key: string]: unknown;
    }

    export interface DevicePowerSettingsOptions extends AutoJs6Node.BridgeCallOptions {
      dryRun?: boolean;
    }

    export interface DevicePowerSettingsResult {
      readonly schema: "autojs6-node-battery-optimization-settings-v1";
      readonly sdkInt: number;
      readonly ignoringBatteryOptimizations: boolean;
      readonly canOpenSettings: boolean;
      readonly opened: boolean;
      readonly dryRun: boolean;
      readonly action: string;
      readonly reason: string;
    }
  }

  const device: device.DeviceModule;
  export = device;
}

declare module "device" {
  namespace device {
    export interface DeviceModule {
      readonly sdkInt: number;
      /** The whole display's short side in pixels (Rhino's device.width; the same in both orientations). */
      readonly width: number;
      /** The whole display's long side in pixels. */
      readonly height: number;
      /** Density in dpi, as Rhino (densityDpi); the scale factor is DisplayMetrics.density of info().screen. */
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
      /** Build.DISPLAY, as Rhino's device.buildId; getBuildId() resolves Build.ID. */
      readonly buildId: string;
      readonly buildDisplay: string;
      readonly manufacturer: string;
      readonly device: string;
      readonly incremental: string;
      readonly baseOS: string;
      readonly securityPatch: string;
      readonly codename: string;
      /** The native page size in bytes (4096 or 16384). */
      readonly pageSize: number;
      /** "brand (manufacturer) / device (model) / release (sdkInt)", each suffix only when it differs. */
      digest(): string;
      /** ro.product.marketname, ro.semc.product.name, ro.config.marketing_name, ro.product.model, else model. */
      getMarketName(): string;
      /** Case-insensitive comparison with Build.MANUFACTURER. */
      isManufacturer(manufacturer: string): boolean;
      readonly manufacturers: DeviceManufacturers;
      readonly brands: DeviceBrands;
      readonly roms: DeviceRoms;
      /** Each read asks the host (Display.getRotation(): 0..3). */
      readonly rotation: Promise<number>;
      /** Each read asks the host (Configuration.ORIENTATION_*: 1 portrait, 2 landscape, 0 undefined). */
      readonly orientation: Promise<number>;
      /** Requires device.identifiers; null without the phone state permission. */
      readonly imei: Promise<string | null>;
      /** Requires device.identifiers. */
      readonly serial: Promise<string | null>;
      summary(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      getOrientation(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      getRotation(options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      isScreenOff(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      isScreenPortrait(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      isScreenLandscape(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      isPowerSourceAC(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      isPowerSourceUSB(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      isPowerSourceWireless(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      isPowerSourceDock(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      getIpAddress(useIPv4?: boolean | null, options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      getIpv6Address(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      getGatewayAddress(options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      isActiveNetworkMetered(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      isConnectedOrConnecting(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      isWifiAvailable(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      isPointerLocationEnabled(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      isPointerLocationDisabled(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      /** Requires device.power; Root or Shizuku toggles the setting. Resolves whether the state is the requested one. */
      setPointerLocation(enabled: boolean, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      setPointerLocationEnabled(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      setPointerLocationDisabled(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      togglePointerLocation(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      hasReadPhoneStatePermission(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      /** Rejects when AutoJs6 lacks the phone state permission. */
      ensureReadPhoneStatePermission(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      /** The hardware identifiers require device.identifiers (never implied by device). */
      getIMEI(options?: AutoJs6Node.BridgeCallOptions): Promise<string | null>;
      getSerial(options?: AutoJs6Node.BridgeCallOptions): Promise<string | null>;
      getAndroidId(useSystemId?: boolean, options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      getMacAddress(options?: AutoJs6Node.BridgeCallOptions): Promise<string | null>;
      getSharedDeviceId(options?: AutoJs6Node.BridgeCallOptions): Promise<string | null>;
      /** Requires device.power. PowerManager wake lock flags; without a timeout the lock is held until cancelKeepingAwake or the end of the execution. */
      keepAwake(flags: number, timeoutMs?: number, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      keepAwake(flags: number, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      /** Requires device.power. Keeps the screen on at a dimmed level. */
      keepScreenDim(timeoutMs?: number, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      keepScreenDim(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      wakeUpIfNeeded(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      cancelVibration(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      /** Live host snapshot. Synchronous properties above describe script startup. */
      info(options?: AutoJs6Node.BridgeCallOptions): Promise<DeviceInfo>;
      /** Full live snapshot, also available in Bun without changing its legacy info() format. */
      getInfo(options?: AutoJs6Node.BridgeCallOptions): Promise<DeviceInfo>;
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
      /** Requires device.power. Without a timeout the lock is held until cancelKeepingAwake; script exit also releases it. */
      keepScreenOn(timeoutMs?: number, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      keepScreenOn(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
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
      /** One duration (at most 10 s), a timing array starting with the delay, or a morse code string, as Rhino. */
      vibrate(pattern: number | readonly number[] | string, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      /** (off, millis), (timingsWithoutOff, off) or (morseCode, delay). */
      vibrate(pattern: number | readonly number[] | string, second: number, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      isIgnoringBatteryOptimizations(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      openBatteryOptimizationSettings(options?: DevicePowerSettingsOptions): Promise<DevicePowerSettingsResult>;
    }

    /** Rhino's device.manufacturers: Build.MANUFACTURER checks of the startup snapshot. */
    export interface DeviceManufacturers {
      isHtc(): boolean;
      isLG(): boolean;
      isOnePlus(): boolean;
      isSamsung(): boolean;
      isZte(): boolean;
      isLetv(): boolean;
      /** Huawei, Nova or Honor. */
      isHuawei(): boolean;
      isNova(): boolean;
      isHonor(): boolean;
      /** Xiaomi, or brands.isRedmi() / isMiMix(). */
      isXiaomi(): boolean;
      isOppo(): boolean;
      /** Sony, or brands.isXperia(). */
      isSony(): boolean;
      isVivo(): boolean;
      isLenovo(): boolean;
      /** Manufacturer "yulong". */
      isCoolpad(): boolean;
      isSmartisan(): boolean;
      isMeizu(): boolean;
    }

    /** Rhino's device.brands (system properties of the startup snapshot). */
    export interface DeviceBrands {
      isXperia(): boolean;
      isRedmi(): boolean;
      isMiMix(): boolean;
    }

    /** Rhino's device.roms (system properties of the startup snapshot). */
    export interface DeviceRoms {
      isMiui(): boolean;
      isEmui(): boolean;
      isOppo(): boolean;
      isSmartisan(): boolean;
      isVivo(): boolean;
      isGionee(): boolean;
      isLenovo(): boolean;
      isFlyme(): boolean;
      isQiku(): boolean;
      /** Asks the host whether AutoJs6 may start activities from the background (MIUI / vivo permission, ColorOS overlay permission, else true). */
      isBackgroundStartGranted(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
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

declare module "autojs6:device" { import device = require("device"); export = device; }

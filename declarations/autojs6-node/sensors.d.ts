declare module "sensors" {
  namespace sensors {
    /** Rhino's sensor names (sensors.register / getSensor also take any lower-case Sensor.TYPE_ name, e.g. "step_counter"). */
    export type SensorType = "accelerometer" | "gyroscope" | "light" | "ambient_temperature" | "gravity" | "linear_acceleration"
      | "magnetic_field" | "orientation" | "pressure" | "proximity" | "relative_humidity" | "temperature";

    export interface SensorInfo {
      readonly type: SensorType;
      readonly name: string;
      readonly vendor?: string;
      readonly version?: number;
      readonly resolution?: number;
      readonly power?: number;
      readonly minDelayUs?: number;
      readonly maxDelayUs?: number;
    }

    export interface SensorEvent {
      readonly type: SensorType;
      readonly timestamp: number;
      readonly accuracy: number;
      readonly values: readonly number[];
    }

    export interface SensorOptions extends AutoJs6Node.BridgeCallOptions {
      /** Rhino's sensors.delay (0..3); replaces samplingIntervalMs. */
      delay?: number;
      samplingIntervalMs?: number;
      intervalMs?: number;
      maxQueueSize?: number;
      drainIntervalMs?: number;
    }

    export interface SensorSubscription {
      /** Present when the host negotiated pushed events. */
      readonly subscriptionId?: string;
      on(event: "event", listener: (event: SensorEvent) => void): this;
      once(event: "event", listener: (event: SensorEvent) => void): this;
      off(event: "event", listener: (event: SensorEvent) => void): this;
      on(event: "close" | "accuracy" | "error", listener: (event: unknown) => void): this;
      once(event: "close" | "accuracy" | "error", listener: (event: unknown) => void): this;
      off(event: "close" | "accuracy" | "error", listener: (event: unknown) => void): this;
      readonly id: string;
      readonly type: SensorType;
      readonly closed: boolean;
      /** Resolves after native registration. AbortSignal remains active until close. */
      readonly ready: Promise<void>;
      close(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
    }

    /** The default sensor of a name in the startup snapshot (the bean properties of android.hardware.Sensor). */
    export interface RhinoSensorInfo {
      readonly name: string;
      readonly vendor: string;
      readonly version: number;
      readonly type: number;
      readonly stringType: string;
      readonly maximumRange: number;
      readonly resolution: number;
      readonly power: number;
      readonly minDelay: number;
      readonly maxDelay: number;
      readonly reportingMode: number;
      readonly wakeUpSensor: boolean;
      readonly fifoMaxEventCount: number;
      readonly fifoReservedEventCount: number;
    }

    /** The first argument of "change": the sample with its sensor. */
    export interface RhinoSensorEvent extends SensorEvent {
      readonly sensor: RhinoSensorInfo;
    }

    /** Rhino's Timer surface over this thread's timers (numeric ids). */
    export interface RhinoTimer {
      setTimeout(callback: (...args: any[]) => void, delay?: number, ...args: any[]): number;
      clearTimeout(id: number): boolean;
      setInterval(callback: (...args: any[]) => void, interval?: number, ...args: any[]): number;
      clearInterval(id: number): boolean;
      setImmediate(callback: (...args: any[]) => void, ...args: any[]): number;
      clearImmediate(id: number): boolean;
      hasPendingCallbacks(): boolean;
      removeAllCallbacks(): void;
    }

    /**
     * Rhino's EventEmitter (org.autojs.autojs.core.eventloop.EventEmitter): listeners run in order when emitted, a sticky
     * event reaches listeners added later, at most getMaxListeners() listeners per event (0: no limit), and newListener /
     * removeListener events are emitted.
     */
    export interface RhinoEventEmitter {
      on(eventName: string, listener: (...args: any[]) => void): this;
      addListener(eventName: string, listener: (...args: any[]) => void): this;
      prependListener(eventName: string, listener: (...args: any[]) => void): this;
      prependOnceListener(eventName: string, listener: (...args: any[]) => void): this;
      removeListener(eventName: string, listener: (...args: any[]) => void): this;
      removeAllListeners(eventName?: string): this;
      emit(eventName: string, ...args: any[]): boolean;
      emitSticky(eventName: string, ...args: any[]): boolean;
      eventNames(): string[];
      listenerCount(eventName: string): number;
      listeners(eventName: string): Array<(...args: any[]) => void>;
      getMaxListeners(): number;
      setMaxListeners(maxListeners: number): this;
      getTimer(): RhinoTimer;
    }

    /** Returned by sensors.register: "change" (event, ...values), "accuracy_change" (accuracy), "error" (host failures). */
    export interface SensorEventEmitter extends RhinoEventEmitter {
      once(eventName: string, listener: (...args: any[]) => void): this;
      on(eventName: "change", listener: (event: RhinoSensorEvent, ...values: number[]) => void): this;
      on(eventName: "accuracy_change", listener: (accuracy: number) => void): this;
      on(eventName: string, listener: (...args: any[]) => void): this;
      unregister(): void;
    }

    export interface SensorsModule extends RhinoEventEmitter {
      readonly policy: {
        readonly maxSubscriptions: number;
        readonly minSamplingIntervalMs: number;
        readonly defaultSamplingIntervalMs: number;
        readonly maxSamplingIntervalMs: number;
        readonly defaultTimeoutMs: number;
        readonly drainIntervalMs: number;
        readonly defaultMaxQueueSize: number;
        readonly hardMaxQueueSize: number;
      };

      getAvailableSensors(options?: AutoJs6Node.BridgeCallOptions): Promise<readonly SensorInfo[]>;
      /** Uses a temporary subscription; releases it on sample, timeout or abort. */
      once(type: SensorType, options?: SensorOptions): Promise<SensorEvent>;
      /** Rhino's EventEmitter once when the second argument is a function. */
      once(eventName: string, listener: (...args: any[]) => void): this;
      /** Rhino's delay constants: normal 3, ui 2, game 1, fastest 0 (sampled at the game rate). */
      readonly delay: { readonly normal: 3; readonly ui: 2; readonly game: 1; readonly fastest: 0 };
      /** When true, register of a missing sensor emits "unsupported_sensor" and returns an emitter that never fires. */
      ignoresUnsupportedSensor: boolean;
      /**
       * Rhino's sensors.register (requires sensors): null when the device has no such sensor. delay is one of sensors.delay
       * (default normal) or a sampling period in microseconds. Host failures reach the emitter's "error" listeners, else a
       * console warning; at most policy.maxSubscriptions sensors are active at once.
       */
      register(sensorName: string, delay?: number): SensorEventEmitter | null;
      unregister(emitter: SensorEventEmitter | null | undefined): void;
      unregisterAll(): void;
      getSensor(sensorName: string): RhinoSensorInfo | null;
      subscribe(type: SensorType, callback?: (event: SensorEvent) => void, options?: SensorOptions): SensorSubscription;
    }
  }

  const sensors: sensors.SensorsModule;
  export = sensors;
}

/** Available in main threads and CommonJS/ESM/nested Workers. */
declare module "autojs6:sensors" {
  import sensors = require("sensors");
  export = sensors;
}

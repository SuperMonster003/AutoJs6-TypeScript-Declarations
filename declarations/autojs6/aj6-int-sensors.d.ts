// Type definitions for AutoJs6 internal module sensors
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Oct 15, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/sensors/Sensors.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/Sensors.java
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/SensorEventEmitter.java
 */

declare namespace Internal {
    interface Sensors extends Omit<org.autojs.autojs.runtime.api.Sensors, 'register' | 'unregister'> {
        ignoresUnsupportedSensor: boolean;
        /** Unsupported sensors return null unless ignoresUnsupportedSensor enables a no-op emitter. */
        register(sensorName: 'light', delay?: number): Sensors.Light | null;
        register(sensorName: 'accelerometer', delay?: number): Sensors.Accelerometer | null;
        register(sensorName: 'ambient_temperature', delay?: number): Sensors.AmbientTemperature | null;
        register(sensorName: 'gravity', delay?: number): Sensors.Gravity | null;
        register(sensorName: 'gyroscope', delay?: number): Sensors.Gyroscope | null;
        register(sensorName: 'linear_acceleration', delay?: number): Sensors.LinearAcceleration | null;
        register(sensorName: 'magnetic_field', delay?: number): Sensors.MagneticField | null;
        register(sensorName: 'orientation', delay?: number): Sensors.Orientation | null;
        register(sensorName: 'pressure', delay?: number): Sensors.Pressure | null;
        register(sensorName: 'proximity', delay?: number): Sensors.Proximity | null;
        register(sensorName: 'relative_humidity', delay?: number): Sensors.RelativeHumidity | null;
        register(sensorName: string, delay?: number): Sensors.EventEmitter | null;
        unregister(emitter: Sensors.EventEmitter | null): void;
    }

    namespace Sensors {
        type Event = android.hardware.SensorEvent;
        interface EventEmitter<Values extends number[] = number[]> {
            on(eventName: 'change', listener: (event: Event, ...values: Values) => void): this;
            on(eventName: 'accuracy_change', listener: (accuracy: number) => void): this;
            on(eventName: string, listener: (...args: unknown[]) => void): this;
            once(eventName: 'change', listener: (event: Event, ...values: Values) => void): this;
            once(eventName: 'accuracy_change', listener: (accuracy: number) => void): this;
            once(eventName: string, listener: (...args: unknown[]) => void): this;
            addListener: EventEmitter<Values>['on'];
            prependListener: EventEmitter<Values>['on'];
            prependOnceListener: EventEmitter<Values>['once'];
            unregister(): void;
            emit(eventName: string, ...args: unknown[]): boolean;
            emitSticky(eventName: string, ...args: unknown[]): boolean;
            eventNames(): string[];
            listenerCount(eventName: string): number;
            getMaxListeners(): number;
            setMaxListeners(count: number): this;
            getTimer(): org.autojs.autojs.core.looper.Timer | null;
            listeners(eventName: string): Function[];
            removeAllListeners(eventName?: string): this;
            removeListener(eventName: string, listener: Function): this;
        }
        type Light = EventEmitter<[light: number]>;
        type Accelerometer = EventEmitter<[ax: number, ay: number, az: number]>;
        type AmbientTemperature = EventEmitter<[temperature: number]>;
        type Gravity = EventEmitter<[gx: number, gy: number, gz: number]>;
        type Gyroscope = EventEmitter<[wx: number, wy: number, wz: number]>;
        type LinearAcceleration = EventEmitter<[ax: number, ay: number, az: number]>;
        type MagneticField = EventEmitter<[bx: number, by: number, bz: number]>;
        type Orientation = EventEmitter<[azimuth: number, pitch: number, roll: number]>;
        type Pressure = EventEmitter<[pressure: number]>;
        type Proximity = EventEmitter<[distance: number]>;
        type RelativeHumidity = EventEmitter<[humidity: number]>;
    }
}

// Type definitions for Auto.js internal global object device
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.5.4
//
// Last modified: Mar 22, 2022

/// <reference path="../index.d.ts" />

declare namespace Internal {
    interface Recorder {
        /**
         * Record or get the record for a time gap
         * @param key
         * @param timestamp
         * @return - timestamp
         */
        (key?: string | Function, timestamp?: number | ThisType<any>): number | void;

        /**
         * @param key
         * @param ts=Date.now()
         */
        save(key?: string, ts?: number): number;

        /**
         * @param key
         * @param ts=Date.now()
         */
        load(key?: string, ts?: number): number;

        isLessThan(key: string, compare: number | any): boolean;

        isGreaterThan(key: string, compare: number | any): boolean;

        has(key: string): boolean;

        remove(key: string): boolean;

        clear(): void;
    }
}

declare namespace Recorder {
    type Keycode = 'home' | 'back' | 'recents' | 'power_dialog' | 'notifications' | 'quick_settings' | 'split_screen';
}
// Type definitions for AutoJs6 internal module storages
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Jul 27, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/storages/Storages.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/storages/StorageNativeObject.kt
 */

declare namespace Internal {

    interface Storages {

        create(name: string | number | boolean): Storages.Storage;

        remove(name: string | number | boolean): void;

        removeSync(name: string | number | boolean): boolean;

        all(): Storages.Storage[];

        names(): string[];

    }

}

declare namespace Storages {

    type StorageKey = string | number | boolean;

    interface Storage extends org.mozilla.javascript.NativeObject {

        readonly name: string;

        readonly size: number;

        get<T = any>(key: StorageKey): T | null | undefined;

        get<T = any>(key: StorageKey, defaultValue: T): T | null;

        put(key: StorageKey, value: any): this;

        putSync(key: StorageKey, value: any): this;

        remove(key: StorageKey): this;

        removeSync(key: StorageKey): this;

        contains(key: StorageKey): boolean;

        clear(): void;

        clearSync(): void;

        selfRemove(): this;

        selfRemoveSync(): this;

    }

}

declare namespace Internal {

    interface LocalStorage extends Storages.Storage {
        /* Compatibility alias for older declaration users. */
    }

}

// Type definitions for Auto.js internal module storages
//
// Project: https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../auto.js.d.ts" />

/**
 * @Source %autojs%/assets/modules/__storages__.js
 */

declare namespace Internal {
    interface Storages {
        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * let storages = {};
         * storages.create = function (name) {
         *     return new LocalStorage(name);
         * };
         * function LocalStorage(name) {
         *     this._storage = new com.stardust.autojs.core.storage.LocalStorage(context, name);
         *     this.put = function (key, value) {
         *         if (typeof (value) == 'undefined') {
         *             throw new TypeError('value cannot be undefined');
         *         }
         *         this._storage.put(key, JSON.stringify(value));
         *     };
         *     this.get = function (key, defaultValue) {
         *         let value = this._storage.getString(key, null);
         *         if (!value) {
         *             return defaultValue;
         *         }
         *         return JSON.parse(value);
         *     };
         *     this.remove = function (key) {
         *         this._storage.remove(key);
         *     };
         *     this.contains = function (key) {
         *         return this._storage.contains(key);
         *     };
         *     this.clear = function () {
         *         this._storage.clear();
         *     };
         * }
         */
        create(name: string): LocalStorage;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * let storages = {};
         * storages.remove = function (name) {
         *     this.create(name).clear();
         * };
         * function LocalStorage(name) {
         *     this._storage = new com.stardust.autojs.core.storage.LocalStorage(context, name);
         *     this.put = function (key, value) {
         *         if (typeof (value) == 'undefined') {
         *             throw new TypeError('value cannot be undefined');
         *         }
         *         this._storage.put(key, JSON.stringify(value));
         *     };
         *     this.get = function (key, defaultValue) {
         *         let value = this._storage.getString(key, null);
         *         if (!value) {
         *             return defaultValue;
         *         }
         *         return JSON.parse(value);
         *     };
         *     this.remove = function (key) {
         *         this._storage.remove(key);
         *     };
         *     this.contains = function (key) {
         *         return this._storage.contains(key);
         *     };
         *     this.clear = function () {
         *         this._storage.clear();
         *     };
         * }
         */
        remove(name: string): void;
    }
}

declare interface LocalStorage {
    _storage: com.stardust.autojs.core.storage.LocalStorage;

    /**
     * @example Source code summary (zh-CN: 源代码摘要)
     * function LocalStorage(name) {
     *     this._storage = new com.stardust.autojs.core.storage.LocalStorage(context, name);
     *     this.put = function (key, value) {
     *         if (typeof (value) == 'undefined') {
     *             throw new TypeError('value cannot be undefined');
     *         }
     *         this._storage.put(key, JSON.stringify(value));
     *     };
     * }
     */
    put(key: string, value: any): void;

    /**
     * @example Source code summary (zh-CN: 源代码摘要)
     * function LocalStorage(name) {
     *     this._storage = new com.stardust.autojs.core.storage.LocalStorage(context, name);
     *     this.get = function (key, defaultValue) {
     *         let value = this._storage.getString(key, null);
     *         if (!value) {
     *             return defaultValue;
     *         }
     *         return JSON.parse(value);
     *     };
     * }
     */
    get(key: string, defaultValue?: any): any;

    /**
     * @example Source code summary (zh-CN: 源代码摘要)
     * function LocalStorage(name) {
     *     this._storage = new com.stardust.autojs.core.storage.LocalStorage(context, name);
     *     this.remove = function (key) {
     *         this._storage.remove(key);
     *     };
     * }
     */
    remove(key: string): void;

    /**
     * @example Source code summary (zh-CN: 源代码摘要)
     * function LocalStorage(name) {
     *     this._storage = new com.stardust.autojs.core.storage.LocalStorage(context, name);
     *     this.contains = function (key) {
     *         return this._storage.contains(key);
     *     };
     * }
     */
    contains(key: string): boolean;

    /**
     * @example Source code summary (zh-CN: 源代码摘要)
     * function LocalStorage(name) {
     *     this._storage = new com.stardust.autojs.core.storage.LocalStorage(context, name);
     *     this.clear = function () {
     *         this._storage.clear();
     *     }
     * }
     */
    clear(): void;
}
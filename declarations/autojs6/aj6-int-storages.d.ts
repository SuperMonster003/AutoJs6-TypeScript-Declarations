// Type definitions for AutoJs6 internal module storages
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../index.d.ts" />

/**
 * @Source %AutoJs6Assets%/modules/__storages__.js
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
         *     this._storage = new org.autojs.autojs.core.storage.LocalStorage(context, name);
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
         *     this._storage = new org.autojs.autojs.core.storage.LocalStorage(context, name);
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

    interface LocalStorage {

        _storage: org.autojs.autojs.core.storage.LocalStorage;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * function LocalStorage(name) {
         *     this._storage = new org.autojs.autojs.core.storage.LocalStorage(context, name);
         *     this.put = function (key, value) {
         *         if (typeof (value) == 'undefined') {
         *             throw new TypeError('value cannot be undefined');
         *         }
         *         this._storage.put(key, JSON.stringify(value));
         *     };
         * }
         */
        put(key: string, value: any): LocalStorage;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * function LocalStorage(name) {
         *     this._storage = new org.autojs.autojs.core.storage.LocalStorage(context, name);
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
         *     this._storage = new org.autojs.autojs.core.storage.LocalStorage(context, name);
         *     this.remove = function (key) {
         *         this._storage.remove(key);
         *     };
         * }
         */
        remove(key: string): LocalStorage;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * function LocalStorage(name) {
         *     this._storage = new org.autojs.autojs.core.storage.LocalStorage(context, name);
         *     this.contains = function (key) {
         *         return this._storage.contains(key);
         *     };
         * }
         */
        contains(key: string): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * function LocalStorage(name) {
         *     this._storage = new org.autojs.autojs.core.storage.LocalStorage(context, name);
         *     this.clear = function () {
         *         this._storage.clear();
         *     }
         * }
         */
        clear(): void;

    }

}
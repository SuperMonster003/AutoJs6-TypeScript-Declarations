// Type definitions for AutoJs6 internal module jvm-npm
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../autojs6.d.ts" />

/**
 * @Source %AutoJs6Assets%/modules/jvm-npm.js
 */

declare namespace Internal {

    interface Require {

        (id: Require.ID, parent?: { id?: string }): Require.Result;

        debug: boolean;
        cache: { [prop: string]: object | any };
        extensions: {};
        root: string;
        NODE_PATH: any;

        // noinspection HttpUrlsUsage
        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * Require.resolve = function (id, parent) {
         *     var roots = findRoots(parent);
         *     for (var i = 0; i < roots.length; ++i) {
         *         var root = roots[i];
         *         var result = resolveCoreModule(id, root) ||
         *             resolveAsFile(id, root, '.js') ||
         *             resolveAsFile(id, root, '.json') ||
         *             resolveAsDirectory(id, root) ||
         *             resolveAsNodeModule(id, root);
         *         if (result) {
         *             return result;
         *         }
         *     }
         *     return false;
         * };
         */
        resolve(id: Require.ID, parent?: { id?: string }): { path: string, core: boolean } | string | false;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * Require.paths = function () {
         *     var r = [];
         *     r.push(java.lang.System.getProperty('user.home') + '/.node_modules');
         *     r.push(java.lang.System.getProperty('user.home') + '/.node_libraries');
         *     if (Require.NODE_PATH) {
         *         r = r.concat(parsePaths(Require.NODE_PATH));
         *     } else {
         *         var NODE_PATH = java.lang.System.getenv().NODE_PATH;
         *         if (NODE_PATH) {
         *             r = r.concat(parsePaths(NODE_PATH));
         *         }
         *     }
         *     // r.push( $PREFIX + "/node/library" )
         *     return r;
         * };
         */
        paths(): string[];

    }

    namespace Require {

        // noinspection HttpUrlsUsage
        type ID = 'events' | 'http://.*' | 'https://.*' | InternalModule | string;

        type Result = Internal.Events | any;

        type InternalModule = '__app__.js' | '__automator__.js' | '__bridges__.js' | '__console__.js' | '__continuation__.js' | '__device__' | '__dialogs__.js' | '__engines__.js' | '__events__.js' | '__floaty__.js' | '__globals__.js' | '__http__.js' | '__images__.js' | '__files__.js' | '__media__.js' | '__plugins__.js' | '__RootAutomator__.js' | '__selector__.js' | '__sensors__.js' | '__shell__.js' | '__storages__.js' | '__threads__.js' | '__timers__.js' | '__ui__.js' | '__util__.js' | '__web__.js' | 'array-observe.min.js' | 'jvm-npm.js' | 'object-observe-lite.min.js' | 'promise.js' | 'result-adapter.js' | '__app__' | '__automator__' | '__bridges__' | '__console__' | '__continuation__' | '__dialogs__' | '__engines__' | '__events__' | '__floaty__' | '__globals__' | '__http__' | '__images__' | '__files__' | '__media__' | '__plugins__' | '__web__' | '__RootAutomator__' | 'promise' | '__selector__' | '__sensors__' | '__shell__' | '__storages__' | '__threads__' | '__timers__' | '__ui__' | '__unit_test__' | '__util__' | 'array-observe.min' | 'jvm-npm' | 'object-observe-lite.min' | 'result-adapter';

        class Module {

            constructor(id?: Require.ID, parent?, core?: boolean);

            public _exports: any;
            public id: Require.ID;
            public core: boolean;
            public parent: { children?: any[] };
            public children: [];
            public filename: Require.ID;
            public loaded: boolean;

            public static require(id: Require.ID, parent?: { id?: string }): Require.Result;

            /**
             * @example Source code summary (zh-CN: 源代码摘要)
             * Module._load = function _load(file, parent, core, main) {
             *     return NativeRequire.require(file);
             * };
             */
            public static _load(file: string): any;

            /**
             * @example Source code summary (zh-CN: 源代码摘要)
             * Module.runMain = function runMain(main) {
             *     let file = Require.resolve(main);
             *     Module._load(file, undefined, false, true);
             * };
             */
            public static runMain(main): any;

            /**
             * @example Source code summary (zh-CN: 源代码摘要)
             * Object.defineProperty(this, 'exports', {
             *     get: function () {
             *         return this._exports;
             *     }.bind(this),
             *     set: function (val) {
             *         Require.cache[this.filename] = val;
             *         this._exports = val;
             *     }.bind(this)
             * });
             */
            public get exports(): any;

            /**
             * @example Source code summary (zh-CN: 源代码摘要)
             * Object.defineProperty(this, 'exports', {
             *     get: function () {
             *         return this._exports;
             *     }.bind(this),
             *     set: function (val) {
             *         Require.cache[this.filename] = val;
             *         this._exports = val;
             *     }.bind(this)
             * });
             */
            public set exports(val: any);

            /**
             * @example
             * this.require = function (id) {
             *     return Require(id, this);
             * }.bind(this);
             */
            public require(id: Require.ID): Require.Result;

        }

    }

}
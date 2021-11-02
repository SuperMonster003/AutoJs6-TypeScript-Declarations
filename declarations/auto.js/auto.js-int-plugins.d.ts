// Type definitions for Auto.js internal module plugins
//
// Project: https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../auto.js.d.ts" />

/**
 * @Source %autojs%/assets/modules/__plugins__.js
 */

declare namespace Internal {
    interface Plugins {
        ();
        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * function plugins() {}
         * plugins.load = function (packageName) {
         *     let plugin = runtime.plugins.load(packageName);
         *     let index = require(plugin.mainScriptPath);
         *     return index(plugin.unwrap());
         * };
         * return plugins;
         */
        load(packageName: string): any;
    }
}
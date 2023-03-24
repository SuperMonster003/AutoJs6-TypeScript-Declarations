// Type definitions for AutoJs6 internal module plugins
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.7.4
//
// Last modified: Nov 8, 2021

/// <reference path="../autojs6.d.ts" />

/**
 * @Source %AutoJs6Assets%/modules/__plugins__.js
 */

declare namespace Internal {

    interface Plugins {

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

        extend: Plugins.Extend;

        extendAll(): void;

        extendAllBut(...moduleNames: (Plugins.ExtendModules.Names | Plugins.ExtendModules.Names[])[]): void;

    }

    namespace Plugins {

        namespace ExtendModules {

            type Names = 'Array' | 'Arrayx' | 'Number' | 'Numberx' | 'Math' | 'Mathx';

            type Interface = {

                protoKeys?: { [keys: string]: number | null | (() => any) };

                extendJsBuildInObjects: () => void;

            };

        }

        interface Extend {

            (...moduleNames: (ExtendModules.Names | ExtendModules.Names[])[]): void;

            /**
             * @internal
             */
            exclude(...moduleNames: (ExtendModules.Names | ExtendModules.Names[])[]): void;

            /**
             * @internal
             */
            registerModule(module: {
                [moduleName: string]: ExtendModules.Interface;
            });

        }

    }

}
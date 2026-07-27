// Type definitions for AutoJs6 internal module plugins
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Jul 27, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/plugins/Plugins.kt
 */

declare namespace Internal {

    interface Plugins {

        (name: string): any;

        readonly extend: Plugins.Extend;

        extendAll(): void;

        extendAllBut(...names: Plugins.ExtensionName[]): void;

        load(name: string): any;

    }

    namespace Plugins {

        type ExtensionName = string | ExtensionName[];

        interface Extend {
            (...names: ExtensionName[]): void;

            exclude(...names: ExtensionName[]): void;

            registerModule(module: Record<string, {
                extendJsBuildInObjects(): void;
            }>): void;
        }

    }

}

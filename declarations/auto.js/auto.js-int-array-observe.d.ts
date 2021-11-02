// Type definitions for Auto.js internal module array-observe
//
// Project: https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021
//
// See: https://github.com/MaxArt2501/array-observe/blob/master/array-observe.js

/// <reference path="../auto.js.d.ts" />

/**
 * @Source %autojs%/assets/modules/array-observe.min.js
 */

declare interface Array {
    observe(object: object, handler: Object.Observe.Handler): object;

    unobserve(object: object, handler: Object.Observe.Handler): object;
}
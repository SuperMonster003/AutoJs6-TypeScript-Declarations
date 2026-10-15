// Type definitions for AutoJs6 internal module array-observe
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 15, 2026
//
// See: https://github.com/MaxArt2501/array-observe/blob/master/array-observe.js

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6Assets%/modules/array-observe.min.js
 */

declare interface ArrayConstructor {
    observe(object: object, handler: Object.Observe.Handler): object;

    unobserve(object: object, handler: Object.Observe.Handler): object;
}

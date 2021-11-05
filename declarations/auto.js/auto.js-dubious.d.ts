// Type definitions for Auto.js which is dubious
//
// Project: https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Nov 5, 2021

/// <reference path="../auto.js.d.ts" />

/**
 * @Source rhino-1.7.7.2.jar!/org/mozilla/javascript/ScriptRuntime
 */

declare interface WrappedError extends Error {
    name: 'Error' | 'EvalError' | 'InternalError' | 'JavaException' | 'RangeError' | 'ReferenceError' | 'SyntaxError' | 'TypeError' | 'URIError' | string;
    fileName: string;
    lineNumber: number;
    stack: string;
    javaException?: java.lang.Exception;
    rhinoException?: java.lang.Exception;
}
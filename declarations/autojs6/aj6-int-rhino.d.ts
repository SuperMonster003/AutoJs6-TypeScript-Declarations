// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection

/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>
/// <reference path="../autojs6.d.ts" />

/**
 * @Source %RhinoJar%/org/mozilla/javascript/ImporterTopLevel
 */

// @ts-ignore
declare let constructor: ConstructorConstructor<any>;

interface ConstructorConstructor<T> {
    /**
     * @Dubious by SuperMonster003 as of May 7, 2022.
     *  ! Dunno the real meaning of this interface.
     *
     * @example
     * let o = Object.create({a: 1}); // or any
     * constructor(o) === new constructor(o); // true
     * constructor(o) === o; // true
     */
    (o: T): T;
    new(o: T): T;
}

declare let JavaAdapter: JavaAdapterConstructor;

declare interface JavaAdapterConstructor {
    new<T>(javaIntfOrClass: T, implementationsObject: object): T;
    new<T, T1>(javaIntfOrClass: T, javaIntf: T1, implementationsObject: object): T & T1;
    new<T, T1, T2>(javaIntfOrClass: T, javaIntf1: T1, javaIntf2: T2, implementationsObject: object): T & T1 & T2;
    new<T, T1, T2, T3>(javaIntfOrClass: T, javaIntf1: T1, javaIntf2: T2, javaIntf3: T3, implementationsObject: object): T & T1 & T2 & T3;
    new<T, T1, T2, T3, T4>(javaIntfOrClass: T, javaIntf1: T1, javaIntf2: T2, javaIntf3: T3, javaIntf4: T4, implementationsObject: object): T & T1 & T2 & T3 & T4;
    new<T, T1, T2, T3, T4, T5>(javaIntfOrClass: T, javaIntf1: T1, javaIntf2: T2, javaIntf3: T3, javaIntf4: T4, javaIntf5: T5, implementationsObject: object): T & T1 & T2 & T3 & T4 & T5;
}

/**
 * @example
 * importPackage(org.opencv.core);
 * console.log(typeof Point); // "function"
 * console.log(typeof Rect); // "function"
 */
declare function importPackage(pkg: org.mozilla.javascript.NativeJavaPackage | object): void;

declare function getClass<T>(javaObject: T): java.lang.Class<T>;

/**
 * @Source %RhinoJar%/org/mozilla/javascript/ScriptRuntime
 */

declare let Packages: {
    android: typeof android;
    androidx: typeof androidx;
    java: typeof java;
    javax: typeof javax;
    org: typeof org;
    com: typeof com;
    net: typeof net;
    de: typeof de;
    ezy: typeof ezy;
    kotlin: typeof kotlin;
    okhttp3: typeof okhttp3;
    io: typeof io;
};

declare class Continuation extends org.mozilla.javascript.NativeContinuation {}

/**
 * @example
 * let opencvImporter = new JavaImporter(
 *     org.opencv.core.Point, // class
 *     org.opencv.core.Point3, // class
 *     org.opencv.core.Rect, // class
 *     // ... ...
 *     org.autojs.autojs.core.opencv // package
 * );
 * @example
 * let opencvImporter = new JavaImporter(
 *     org.opencv.core, // package
 *     org.autojs.autojs.core.opencv // package
 * );
 */
declare class JavaImporter {
    constructor(...content: (org.mozilla.javascript.NativeJavaClass | org.mozilla.javascript.NativeJavaPackage)[]);
}

declare class XML extends org.mozilla.javascript.xml.XMLLib {}

declare class XMLList extends org.mozilla.javascript.xml.XMLLib {}

declare class Namespace extends org.mozilla.javascript.xml.XMLLib {}

declare class QName extends org.mozilla.javascript.xml.XMLLib {}

declare class ArrayBuffer extends org.mozilla.javascript.typedarrays.NativeArrayBuffer {}

declare class Int8Array extends org.mozilla.javascript.typedarrays.NativeInt8Array {}

declare class Uint8Array extends org.mozilla.javascript.typedarrays.NativeUint8Array {}

declare class Uint8ClampedArray extends org.mozilla.javascript.typedarrays.NativeUint8ClampedArray {}

declare class Int16Array extends org.mozilla.javascript.typedarrays.NativeInt16Array {}

declare class Uint16Array extends org.mozilla.javascript.typedarrays.NativeUint16Array {}

declare class Int32Array extends org.mozilla.javascript.typedarrays.NativeInt32Array {}

declare class Uint32Array extends org.mozilla.javascript.typedarrays.NativeUint32Array {}

declare class Float32Array extends org.mozilla.javascript.typedarrays.NativeFloat32Array {}

declare class Float64Array extends org.mozilla.javascript.typedarrays.NativeFloat64Array {}

declare class DataView extends org.mozilla.javascript.typedarrays.NativeDataView {}

// @ts-ignore
declare let Error: AutoJsError;

interface AutoJsError extends ErrorConstructor {
    new(message?: string): EvalError;
    (message?: string): EvalError;
    readonly prototype: EvalError;

    captureStackTrace(obj: object, func: Function): void;

    name: 'Error' | 'EvalError' | 'InternalError' | 'JavaException' | 'RangeError' | 'ReferenceError' | 'SyntaxError' | 'TypeError' | 'URIError' | string;
    fileName: string;
    lineNumber: number;
    stack: string;
    javaException?: java.lang.Exception;
    rhinoException?: java.lang.Exception;
}

// Object.xxx
declare interface ObjectConstructor {
    hasOwn(o: object, v: PropertyKey);
}
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection

/// <reference path="../auto.js.d.ts" />

/**
 * @Source rhino-1.7.7.2.jar!/org/mozilla/javascript/ImporterTopLevel
 */

declare let constructor: Object;

/**
 * @example
 * importPackage(org.opencv.core);
 * console.log(typeof Point); // "function"
 * console.log(typeof Rect); // "function"
 */
declare function importPackage(pkg: org.mozilla.javascript.NativeJavaPackage | object): void;

/**
 * @example
 * importClass(org.opencv.core.Point);
 * console.log(typeof Point); // "function"
 */
declare function importClass(cls: org.mozilla.javascript.NativeJavaClass | object): void;

/**
 * @Source rhino-1.7.7.2.jar!/org/mozilla/javascript/ScriptRuntime
 */

declare let Packages: {
    android: typeof android;
    androidx: typeof androidx;
    java: typeof java;
    javax: typeof javax;
    org: typeof org;
    com: typeof com;
    edu: typeof edu;
    net: typeof net;
    de: typeof de;
    okhttp3: typeof okhttp3;
};

declare class Continuation extends org.mozilla.javascript.NativeContinuation {}

declare class JavaAdapter extends org.mozilla.javascript.JavaAdapter {}

/**
 * @example
 * let opencvImporter = new JavaImporter(
 *     org.opencv.core.Point, // class
 *     org.opencv.core.Point3, // class
 *     org.opencv.core.Rect, // class
 *     // ... ...
 *     com.stardust.autojs.core.opencv // package
 * );
 * @example
 * let opencvImporter = new JavaImporter(
 *     org.opencv.core, // package
 *     com.stardust.autojs.core.opencv // package
 * );
 */
declare class JavaImporter {
    constructor(...content: (org.mozilla.javascript.NativeJavaClass | org.mozilla.javascript.NativeJavaPackage)[]);
}

declare class getClass extends org.mozilla.javascript.NativeJavaTopPackage {}

declare class MutableOkHttp extends com.stardust.autojs.core.http.MutableOkHttp {}

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
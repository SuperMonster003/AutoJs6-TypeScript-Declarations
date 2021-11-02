// Type definitions for Auto.js internal module java-util
//
// Project: https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../auto.js.d.ts" />

/**
 * @Source %autojs%/assets/modules/__java_util__.js
 */

declare interface JavaUtil {
    /**
     * @example
     * log(util.java.instanceOf(device, "java.lang.Object")); // true
     * log(util.java.instanceOf({getClass: () => files.getClass()}, "java.lang.Object")); // true
     * log(util.java.instanceOf(java.lang.Boolean.TRUE, "java.lang.Boolean")); // true
     * @example Source code summary (zh-CN: 源代码摘要)
     * let J = {};
     * J.instanceOf = function (obj, clazz) {
     *     return java.lang.Class.forName(clazz).isAssignableFrom(obj.getClass());
     * };
     */
    instanceOf(obj: java.lang.Class<any>, clazz: java.lang.Class<any>): boolean;

    /**
     * @example
     * images.readPixels = function (path) {
     *     let img = images.read(path);
     *     let bitmap = img.getBitmap();
     *     let w = bitmap.getWidth();
     *     let h = bitmap.getHeight();
     *     let pixels = util.java.array("int", w * h);
     *     bitmap.getPixels(pixels, 0, w, 0, 0, w, h);
     *     img.recycle();
     *     return {data: pixels, width: w, height: h};
     * };
     * @example Source code summary (zh-CN: 源代码摘要)
     * let J = {};
     * J.array = array;
     * function array(type) {
     *     let clazz = typeToClass(type);
     *     let args = arguments;
     *     args[0] = clazz;
     *     return java.lang.reflect.Array.newInstance.apply(null, args);
     * }
     * function typeToClass(type) {
     *     if (typeof type !== 'string') {
     *         return type;
     *     }
     *     if (type === 'string') {
     *         return java.lang.String;
     *     }
     *     let types = {
     *         "int": "Integer",
     *         "long": "Long",
     *         "double": "Double",
     *         "char": "Character",
     *         "byte": "Byte",
     *         "float": "Float"
     *     };
     *     return types[type] ? Packages["java.lang." + types[type]].TYPE : Packages[type];
     * }
     */
    array(type: Java.LangAbbr | java.lang.Class<any> | any, length: number): Array<java.lang.Integer | java.lang.Long | java.lang.Double | java.lang.Character | java.lang.Byte | java.lang.Float | java.lang.String | any>;

    /**
     * @example Source code summary (zh-CN: 源代码摘要)
     * let J = {};
     * J.array = array;
     * function array(type) {
     *     let clazz = typeToClass(type);
     *     let args = arguments;
     *     args[0] = clazz;
     *     return java.lang.reflect.Array.newInstance.apply(null, args);
     * }
     * function typeToClass(type) {
     *     if (typeof type !== 'string') {
     *         return type;
     *     }
     *     if (type === 'string') {
     *         return java.lang.String;
     *     }
     *     let types = {
     *         "int": "Integer",
     *         "long": "Long",
     *         "double": "Double",
     *         "char": "Character",
     *         "byte": "Byte",
     *         "float": "Float"
     *     };
     *     return types[type] ? Packages["java.lang." + types[type]].TYPE : Packages[type];
     * }
     */
    array(type: Java.LangAbbr | java.lang.Class<any> | any, ...dimensions: number[]): Array<java.lang.Integer | java.lang.Long | java.lang.Double | java.lang.Character | java.lang.Byte | java.lang.Float | java.lang.String | any>;

    /**
     * @example
     * log(util.java.toJsArray(runtime.accessibilityBridge.windowRoots(), false).map((root) => {
     *     return com.stardust.automator.UiObject.Companion.createRoot(root);
     * }));
     * @example Source code summary (zh-CN: 源代码摘要)
     * let J = {};
     * J.toJsArray = function (list, nullListToEmptyArray) {
     *     if (list === null || list === undefined) {
     *         return nullListToEmptyArray ? [] : null;
     *     }
     *     let arr = Array(list.size());
     *     for (let i = 0; i < list.size(); i++) {
     *         arr[i] = list.get(i);
     *     }
     *     return arr;
     * };
     */
    toJsArray(list?: java.util.List<any>, nullListToEmptyArray?: boolean): any[];

    /**
     * @example
     * log(util.java.mapToObject(util.java.objectToMap({a: "A", b: "B"})));
     * @example Source code summary (zh-CN: 源代码摘要)
     * let J = {};
     * J.objectToMap = function (obj) {
     *     if (obj === null || obj === undefined) {
     *         return null;
     *     }
     *     let map = new java.util.HashMap();
     *     for (let key in obj) {
     *         if (obj.hasOwnProperty(key)) {
     *             map.put(key, obj[key]);
     *         }
     *     }
     *     return map;
     * };
     */
    objectToMap(obj?: object): java.util.HashMap<any, any> | null;

    /**
     * @example
     * log(util.java.mapToObject(util.java.objectToMap({a: "A", b: "B"})));
     * @example Source code summary (zh-CN: 源代码摘要)
     * let J = {};
     * J.mapToObject = function (map) {
     *     if (map === null || map === undefined) {
     *         return null;
     *     }
     *     let iter = map.entrySet().iterator();
     *     let obj = {};
     *     while (iter.hasNext()) {
     *         let entry = iter.next();
     *         obj[entry.key] = entry.value;
     *     }
     *     return obj;
     * };
     */
    mapToObject(map?: java.util.HashMap<any, any>): object | null;
}

declare namespace Java {
    type LangAbbr = 'int' | 'long' | 'double' | 'char' | 'byte' | 'float' | 'string';
}
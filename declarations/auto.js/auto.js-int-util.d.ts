// Type definitions for Auto.js internal module util
//
// Project: https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../auto.js.d.ts" />

/**
 * @Source %autojs%/assets/modules/__util__.js
 */

declare namespace Internal {
    interface Util {
        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.__assignFunctions__ = function (src, target, functions) {
         *     for (let f of functions) {
         *         target[f] = src[f].bind(src);
         *     }
         * };
         */
        __assignFunctions__(src: object, target: object, functions: string[]): void;

        java: JavaUtil;

        inspect: Util.Inspect;

        /**
         * @example
         * function Animal(name) {
         *     this.name = name;
         *     this.sayName = () => toastLog(this.name);
         * }
         * let a = new Animal("Milo");
         * a.sayName();
         * function Dog() {}
         * util.extend(Dog, Animal);
         * let b = new Animal("Oscar");
         * b.sayName();
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.extend = (function () {
         *     let extendStatics = Object.setPrototypeOf
         *         || {__proto__: []} instanceof Array && function (d, b) {d.__proto__ = b}
         *         || function (d, b) {for (let p in b) if (b.hasOwnProperty(p)) d[p] = b[p]};
         *     return function (d, b) {
         *         extendStatics(d, b);
         *         function __() {this.constructor = d}
         *         d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
         *     };
         * })();
         */
        extend(subClass: Function | object, parentClass: Function | object | null): void;

        /**
         * @example
         * log(util.format("%s%s%d", "0x10", ": ", "0x10")); // "0x10: 16"
         * log(util.format("10%% is 0.1")); // "10% is 0.1"
         * log(util.format([1], 2, "3", {num: 4, age: 5})); // "[ 1 ] 2 '3' { num: 4, age: 5 }"
         * log(util.format({a: {b: {c: "d"}}})); // "{ a: { b: { c: 'd' } } }"
         * log(util.format({a: {b: {c: {d: {e: "f"}}}}})); // "{ a: { b: { c: [Object] } } }"
         * log(util.format('%s:%s', '22', '59', 'Go to bed')); // "22:59 Go to bed"
         * @example
         * let indices = [1, 2, 5];
         * let items = ["A", "B", "E"];
         * log(util.format("选项索引: %j, 选项内容 %j", indices, items));
         * @example
         * let colors = {
         *     'bold': [1, 22], 'italic': [3, 23], 'underline': [4, 24],
         *     'inverse': [7, 27], 'white': [37, 39], 'grey': [90, 39],
         *     'black': [30, 39], 'blue': [34, 39], 'cyan': [36, 39],
         *     'green': [32, 39], 'magenta': [35, 39], 'red': [31, 39], 'yellow': [33, 39],
         * };
         * let styles = {
         *     'special': 'cyan', 'number': 'yellow', 'boolean': 'yellow',
         *     'undefined': 'grey', 'null': 'bold', 'string': 'green',
         *     'date': 'magenta', 'regexp': 'red',
         * };
         * let stylizeWithColor = (str, styleType) => {
         *     let style = styles[styleType];
         *     return style ? '\u001b[' + colors[style][0] + 'm' + str + '\u001b[' + colors[style][1] + 'm' : str;
         * };
         * log(util.format({inspect: (recurseTimes, ctx) => (ctx.stylize = stylizeWithColor, stylizeWithColor)}));
         * log(util.format({inspect: (recurseTimes, ctx) => (ctx.stylize = stylizeWithColor, 1)}));
         * log(util.format({inspect: (recurseTimes, ctx) => (ctx.stylize = stylizeWithColor, /regex/)}));
         * log(util.format({inspect: (recurseTimes, ctx) => (ctx.stylize = stylizeWithColor, true)}));
         * log(util.format({inspect: (recurseTimes, ctx) => (ctx.stylize = stylizeWithColor, null)}));
         * log(util.format({inspect: (recurseTimes, ctx) => (ctx.stylize = stylizeWithColor, "hello")}));
         * log(util.format({inspect: (recurseTimes, ctx) => (ctx.stylize = stylizeWithColor, new Date())}));
         */
        format(...args: any[]): string;

        /**
         * @example
         * util.log("%d %s %d = %d", 1, "+", 3, 4); // e.g. "7 Aug 11:57:40 - 1 + 3 = 4"
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.log = function () {
         *     console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
         * };
         * let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
         * function timestamp() {
         *     let d = new Date();
         *     let time = [pad(d.getHours()),
         *         pad(d.getMinutes()),
         *         pad(d.getSeconds())].join(':');
         *     return [d.getDate(), months[d.getMonth()], time].join('\x20');
         * }
         * function pad(n) {
         *     return n < 10 ? '0' + n.toString(10) : n.toString(10);
         * }
         */
        log(...args: any[]): void;

        /**
         * @deprecated Not available for Auto.js 4.1.1 Alpha2 (marked by SuperMonster005 at Aug 7, 2020)
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.deprecate = function (fn, msg) {
         *     // Allow for deprecating things in the process of starting up.
         *     if (isUndefined(global.process)) {
         *         return function () {
         *             return exports.deprecate(fn, msg).apply(this, arguments);
         *         };
         *     }
         *     if (process.noDeprecation === true) {
         *         return fn;
         *     }
         *     let warned = false;
         *     function deprecated() {
         *         if (!warned) {
         *             if (process.throwDeprecation) {
         *                 throw new Error(msg);
         *             } else if (process.traceDeprecation) {
         *                 console.trace(msg);
         *             } else {
         *                 console.error(msg);
         *             }
         *             warned = true;
         *         }
         *         return fn.apply(this, arguments);
         *     }
         *     return deprecated;
         * };
         */
        deprecate(fn: Func, msg: string): Func;

        /**
         * @deprecated Not available for Auto.js 4.1.1 Alpha2 (marked by SuperMonster005 at Aug 7, 2020)
         * @example Source code summary (zh-CN: 源代码摘要)
         * let debugs = {};
         * let debugEnviron;
         * exports.debuglog = function (set) {
         *     if (isUndefined(debugEnviron))
         *         debugEnviron = process.env.NODE_DEBUG || '';
         *     set = set.toUpperCase();
         *     if (!debugs[set]) {
         *         if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
         *             let pid = process.pid;
         *             debugs[set] = function () {
         *                 let msg = exports.format.apply(exports, arguments);
         *                 console.error('%s %d: %s', set, pid, msg);
         *             };
         *         } else {
         *             debugs[set] = function () {
         *             };
         *         }
         *     }
         *     return debugs[set];
         * };
         */
        debuglog(set): any;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.isArray = isArray;
         * function isArray(ar) {
         *     return Array.isArray(ar);
         * }
         */
        isArray(arg: any): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.isBoolean = isBoolean;
         * function isBoolean(arg) {
         *     return typeof arg === 'boolean';
         * }
         */
        isBoolean(arg: any): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.isNull = isNull;
         * function isNull(arg) {
         *     return arg === null;
         * }
         */
        isNull(arg: any): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.isNullOrUndefined = isNullOrUndefined;
         * function isNullOrUndefined(arg) {
         *     return arg == null;
         * }
         */
        isNullOrUndefined(arg: any): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.isNumber = isNumber;
         * function isNumber(arg) {
         *     return typeof arg === 'number';
         * }
         */
        isNumber(arg: any): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.isString = isString;
         * function isString(arg) {
         *     return typeof arg === 'string';
         * }
         */
        isString(arg: any): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.isSymbol = isSymbol;
         * function isSymbol(arg) {
         *     return typeof arg === 'symbol';
         * }
         */
        isSymbol(arg: any): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.isUndefined = isUndefined;
         * function isUndefined(arg) {
         *     return arg === void 0;
         * }
         */
        isUndefined(arg: any): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.isRegExp = isRegExp;
         * function isRegExp(re) {
         *     return isObject(re) && objectToString(re) === '[object RegExp]';
         * }
         * function isObject(arg) {
         *     return typeof arg === 'object' && arg !== null;
         * }
         * function objectToString(o) {
         *     return Object.prototype.toString.call(o);
         * }
         */
        isRegExp(arg: any): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.isObject = isObject;
         * function isObject(arg) {
         *     return typeof arg === 'object' && arg !== null;
         * }
         */
        isObject(arg: any): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.isDate = isDate;
         * function isDate(d) {
         *     return isObject(d) && objectToString(d) === '[object Date]';
         * }
         * function isObject(arg) {
         *     return typeof arg === 'object' && arg !== null;
         * }
         * function objectToString(o) {
         *     return Object.prototype.toString.call(o);
         * }
         */
        isDate(arg: any): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.isError = isError;
         * function isError(e) {
         *     return isObject(e) &&
         *         (objectToString(e) === '[object Error]' || e instanceof Error);
         * }
         * function isObject(arg) {
         *     return typeof arg === 'object' && arg !== null;
         * }
         * function objectToString(o) {
         *     return Object.prototype.toString.call(o);
         * }
         */
        isError(arg: any): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.isFunction = isFunction;
         * function isFunction(arg) {
         *     return typeof arg === 'function';
         * }
         */
        isFunction(arg: any): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.isPrimitive = isPrimitive;
         * function isPrimitive(arg) {
         *     return arg === null ||
         *         typeof arg === 'boolean' ||
         *         typeof arg === 'number' ||
         *         typeof arg === 'string' ||
         *         typeof arg === 'symbol' ||  // ES6 symbol
         *         typeof arg === 'undefined';
         * }
         */
        isPrimitive(arg: any): boolean;
    }
}

declare namespace Util {
    interface Inspect {
        /**
         * @param [value]
         * @param [showHidden=false] - whether to show the names of not enumerable properties or methods
         * @param [depth=2] - recurse times
         * @param [colors=false] - stylize with color or not
         * @example
         * function Animal (name) {
         *     this.name = name;
         * }
         * let dog = new Animal("Oscar");
         * dog.age = 9;
         * Object.defineProperties(dog, {
         *     sex: {value: "Male"},
         *     hobby: {value: "Accompany", enumerable: true},
         *     isYoung: {get() {return () => this.age < 10}},
         * });
         * log(util.inspect(dog, false, 0, true));
         * log(util.inspect(dog, true, 0, true));
         * @example Source code summary (zh-CN: 源代码摘要)
         * exports.inspect = inspect;
         * // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
         * inspect.colors = {
         *     'bold': [1, 22],
         *     'italic': [3, 23],
         *     'underline': [4, 24],
         *     'inverse': [7, 27],
         *     'white': [37, 39],
         *     'grey': [90, 39],
         *     'black': [30, 39],
         *     'blue': [34, 39],
         *     'cyan': [36, 39],
         *     'green': [32, 39],
         *     'magenta': [35, 39],
         *     'red': [31, 39],
         *     'yellow': [33, 39]
         * };
         * // Don't use 'blue' not visible on cmd.exe
         * inspect.styles = {
         *     'special': 'cyan',
         *     'number': 'yellow',
         *     'boolean': 'yellow',
         *     'undefined': 'grey',
         *     'null': 'bold',
         *     'string': 'green',
         *     'date': 'magenta',
         *     // "name": intentionally not styling
         *     'regexp': 'red'
         * };
         */
        (value?: any, showHidden?: boolean, depth?: number, colors?: boolean): string;

        /**
         * Avoid using 'blue' on cmd.exe
         * @see http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
         */
        colors: {
            bold: [1, 22];
            italic: [3, 23];
            underline: [4, 24];
            inverse: [7, 27];
            white: [37, 39];
            grey: [90, 39];
            black: [30, 39];
            blue: [34, 39];
            cyan: [36, 39];
            green: [32, 39];
            magenta: [35, 39];
            red: [31, 39];
            yellow: [33, 39];
        };
        styles: {
            special: 'cyan';
            number: 'yellow';
            boolean: 'yellow';
            undefined: 'grey';
            null: 'bold';
            string: 'green';
            date: 'magenta';
            regexp: 'red';
        };
    }
}
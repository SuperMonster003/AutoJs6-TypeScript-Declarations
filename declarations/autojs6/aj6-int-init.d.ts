// Type definitions for AutoJs6 internal module init
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021
//
// noinspection JSUnusedGlobalSymbols

/// <reference path="../autojs6.d.ts" />

/**
 * @Source %AutoJs6Assets%/init.js
 */

declare let app: Internal.App;
declare let auto: Internal.Auto;
declare let autojs: Internal.Autojs;
declare let automator: Internal.Automator;
declare let base64: Internal.Base64;
declare let colors: Internal.Colors;
declare let console: Internal.Console;
declare let continuation: Internal.Continuation;
declare let device: Internal.Device;
declare let dialogs: Internal.Dialogs;
declare let engines: Internal.Engines;
declare let events: Internal.Events;
declare let files: Internal.Files;
declare let floaty: Internal.Floaty;
declare let http: Internal.Http;
declare let i18n: Internal.I18n;
declare let images: Internal.Images;
declare let media: Internal.Media;
declare let notice: Internal.Notice;
declare let ocr: Internal.Ocr;
declare let plugins: Internal.Plugins;
declare let recorder: Internal.Recorder;
declare let require: Internal.Require;
declare let sensors: Internal.Sensors;
declare let storages: Internal.Storages;
declare let tasks: Internal.Tasks;
declare let threads: Internal.Threads;
declare let timers: Internal.Timers;
declare let toast: Internal.Toast;
declare let ui: Internal.UI;
declare let util: Internal.Util;
declare let web: Internal.Web;
declare let Mathx: Internal.Mathx;
declare let Numberx: Internal.Numberx;
declare let Arrayx: Internal.Arrayx;

/**
 * Objects can change the behavior of Object.prototype.toString() by defining
 * a Symbol.toStringTag property, leading to unexpected results.
 * Using Object.prototype.toString() to detect object class, therefore, is **UNRELIABLE**
 * but **NOT** for AutoJs6 (last checked version: v6.2.0).
 *
 * @example expected results
 * const toString = Object.prototype.toString;
 *
 * toString.call(new Date);    // [object Date]
 * toString.call(new String);  // [object String]
 * toString.call(Math);        // [object Math]
 *
 * // Since JavaScript 1.8.5
 * toString.call(undefined);   // [object Undefined]
 * toString.call(null);        // [object Null]
 *
 * @example unexpected results
 * const myDate = new Date();
 * Object.prototype.toString.call(myDate);     // [object Date]
 *
 * myDate[Symbol.toStringTag] = 'myDate';
 * Object.prototype.toString.call(myDate);     // [object myDate]
 *
 * Date.prototype[Symbol.toStringTag] = 'prototype polluted';
 * Object.prototype.toString.call(new Date()); // [object prototype polluted] for Node.js; [object Date] for AutoJs6 (v6.2.0)
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
 */
declare let species: Species;

declare function isNullish(o: any): boolean;

declare function isInteger(o: any): boolean;

declare function isPrimitive(o: any): boolean;

declare function isReference(o: any): boolean;

declare function isObject(o: any): boolean;

declare function isJavaObject(o: any): boolean;

declare function isJavaClass(o: any): boolean;

declare function isJavaPackage(o: any): boolean;

declare interface Species {
    (o: any): string
        | 'Array' | 'ArrayBuffer' | 'BigInt' | 'Boolean' | 'Continuation' | 'DataView' | 'Date' | 'Error' | 'Float32Array' | 'Float64Array'
        | 'Function' | 'HTMLDocument' | 'Int16Array' | 'Int32Array' | 'Int8Array' | 'JavaObject' | 'JavaPackage' | 'Map' | 'Namespace'
        | 'Null' | 'Number' | 'Object' | 'QName' | 'RegExp' | 'Set' | 'String' | 'Uint16Array' | 'Uint32Array' | 'Uint8Array' | 'Uint8ClampedArray'
        | 'Undefined' | 'WeakMap' | 'WeakSet' | 'Window' | 'XML' | 'XMLList';

    isArray(o: any): boolean;

    isArrayBuffer(o: any): boolean;

    isBigInt(o: any): boolean;

    isBoolean(o: any): boolean;

    isContinuation(o: any): boolean;

    isDataView(o: any): boolean;

    isDate(o: any): boolean;

    isError(o: any): boolean;

    isFloat32Array(o: any): boolean;

    isFloat64Array(o: any): boolean;

    isFunction(o: any): boolean;

    isHTMLDocument(o: any): boolean;

    isInt16Array(o: any): boolean;

    isInt32Array(o: any): boolean;

    isInt8Array(o: any): boolean;

    isJavaObject(o: any): boolean;

    isJavaPackage(o: any): boolean;

    isMap(o: any): boolean;

    isNamespace(o: any): boolean;

    isNull(o: any): boolean;

    isNumber(o: any): boolean;

    isObject(o: any): boolean;

    isQName(o: any): boolean;

    isRegExp(o: any): boolean;

    isSet(o: any): boolean;

    isString(o: any): boolean;

    isUint16Array(o: any): boolean;

    isUint32Array(o: any): boolean;

    isUint8Array(o: any): boolean;

    isUint8ClampedArray(o: any): boolean;

    isUndefined(o: any): boolean;

    isWeakMap(o: any): boolean;

    isWeakSet(o: any): boolean;

    isWindow(o: any): boolean;

    isXML(o: any): boolean;

    isXMLList(o: any): boolean;
}

declare function unwrapJavaObject(o: { getClass(): java.lang.Class<any> }): any;

declare class RootAutomator extends Internal.RootAutomator {
    // Empty class body.
}

declare class App extends org.autojs.autojs.util.App {
    // Empty class body.
}

declare class RootMode extends org.autojs.autojs.util.RootUtils.RootMode {
    // Empty class body.
}

declare class Version extends io.github.g00fy2.versioncompare.Version {
    // Empty class body.
}

declare class ColorTable extends org.autojs.autojs.core.image.ColorTable {
    // Empty class body.
}

declare class R extends org.autojs.autojs6.R {
    // Empty class body.
}

declare module org {

    export module autojs {

        export module autojs {

            export module util {

                // @ts-ignore
                export class App extends java.lang.Enum<org.autojs.autojs.util.App> {
                    // Empty class body.
                }

            }

        }

    }

}

declare class Pref extends org.autojs.autojs.pref.Pref {
    // Empty class body.
}

declare class Canvas extends org.autojs.autojs.core.graphics.ScriptCanvas {
    // Empty class body.
}

declare class Image extends ImageWrapper {
    // Empty class body.
}

declare class Shell extends org.autojs.autojs.runtime.api.Shell {
    // Empty class body.
}

declare class Paint extends android.graphics.Paint {
    // Empty class body.
}

declare class KeyEvent extends android.view.KeyEvent {
    // Empty class body.
}

declare class UiObject extends org.autojs.autojs.core.automator.UiObject {
    // Empty class body.
}

declare class UiObjectCollection extends org.autojs.autojs.core.automator.UiObjectCollection {
    // Empty class body.
}

declare class UiSelector extends org.autojs.autojs.core.accessibility.UiSelector {
    // Empty class body.
}

declare class ScriptInterruptedException extends org.autojs.autojs.runtime.exception.ScriptInterruptedException {
    // Empty class body.
}

declare class Toast extends android.widget.Toast {
    // Empty class body.
}

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * -- @ScriptVariable
 * public final AccessibilityBridge accessibilityBridge;
 * public UiSelector selector() {
 *     return new UiSelector(accessibilityBridge);
 * }
 * @see org.autojs.autojs.annotation.ScriptVariable
 * @see org.autojs.autojs.core.accessibility.AccessibilityBridge
 * @see org.autojs.autojs.core.accessibility.UiSelector
 */
declare function selector(): Internal.Selector;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * public AbstractShell.Result shell(String cmd, int root) {
 *     return ProcessShell.execCommand(cmd, root != 0);
 * }
 * @see org.autojs.autojs.runtime.api.ProcessShell
 * @see org.autojs.autojs.runtime.api.AbstractShell
 */
declare function shell(cmd: string, root?: boolean | any): org.autojs.autojs.runtime.api.AbstractShell.Result;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * global.__asGlobal__ = function (obj, functions) {
 *     let len = functions.length;
 *     for (let i = 0; i < len; i++) {
 *         let funcName = functions[i];
 *         let func = obj[funcName];
 *         if (!func) {
 *             continue;
 *         }
 *         (function (obj, funcName, func) {
 *             global[funcName] = function () {
 *                 return func.apply(obj, arguments);
 *             };
 *         })(obj, funcName, func);
 *     }
 * };
 */
declare function __asGlobal__(obj: object, functions: (string | { [prop: string]: string })[], scope?: org.mozilla.javascript.Scriptable): void;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * global.__exitIfError__ = function (action) {
 *     try {
 *         return action();
 *     } catch (err) {
 *         if (err instanceof java.lang.Throwable) {
 *             exit(err);
 *         } else if (err instanceof Error) {
 *             exit(new org.mozilla.javascript.EvaluatorException(err.name + ": " + err.message, err.fileName, err.lineNumber));
 *         } else {
 *             exit();
 *         }
 *     }
 * };
 */
declare function __exitIfError__<T>(action: (...args: any) => T): T;

/**
 * @example
 * importClass(org.opencv.core.Point);
 * importClass('org.opencv.core.Point'); // same as above
 * console.log(typeof Point); // "function"
 */
declare function importClass(...cls: Array<string | object>): void;

/**
 * @example
 * importPackage(org.opencv.core);
 * importPackage('org.opencv.core'); // same as above
 * console.log(typeof Point); // "function"
 */
declare function importPackage(...pkg: Array<string | object>): void;

/**
 * @Source org.autojs.autojs.runtime.ScriptRuntime
 */

declare let runtime: Internal.Runtime;

/**
 * @Source org.autojs.autojs.ScriptEngineService
 */

declare let context: Internal.Context;

/**
 * @Source org.autojs.autojs.execution.ScriptExecuteActivity
 */

declare let activity: Internal.Activity;

declare namespace Internal {

    class Activity extends org.autojs.autojs.execution.ScriptExecuteActivity {
        window: Activity.PhoneWindow;
    }

    /**
     * Modified by SuperMonster003 on May 23, 2022.
     * Android platform API: 32.
     */
    class Context extends android.content.Context {
        public ACCESSIBILITY_SERVICE: string;
        public ACCOUNT_SERVICE: string;
        public ACTIVITY_SERVICE: string;
        public ALARM_SERVICE: string;
        public APPWIDGET_SERVICE: string;
        public APP_OPS_SERVICE: string;
        public APP_SEARCH_SERVICE: string;
        public AUDIO_SERVICE: string;
        public BATTERY_SERVICE: string;
        public BIND_ABOVE_CLIENT: number;
        public BIND_ADJUST_WITH_ACTIVITY: number;
        public BIND_ALLOW_OOM_MANAGEMENT: number;
        public BIND_AUTO_CREATE: number;
        public BIND_DEBUG_UNBIND: number;
        public BIND_EXTERNAL_SERVICE: number;
        public BIND_IMPORTANT: number;
        public BIND_INCLUDE_CAPABILITIES: number;
        public BIND_NOT_FOREGROUND: number;
        public BIND_NOT_PERCEPTIBLE: number;
        public BIND_WAIVE_PRIORITY: number;
        public BIOMETRIC_SERVICE: string;
        public BLOB_STORE_SERVICE: string;
        public BLUETOOTH_SERVICE: string;
        public BUGREPORT_SERVICE: string;
        public CAMERA_SERVICE: string;
        public CAPTIONING_SERVICE: string;
        public CARRIER_CONFIG_SERVICE: string;
        public CLIPBOARD_SERVICE: string;
        public COMPANION_DEVICE_SERVICE: string;
        public CONNECTIVITY_DIAGNOSTICS_SERVICE: string;
        public CONNECTIVITY_SERVICE: string;
        public CONSUMER_IR_SERVICE: string;
        public CONTEXT_IGNORE_SECURITY: number;
        public CONTEXT_INCLUDE_CODE: number;
        public CONTEXT_RESTRICTED: number;
        public CROSS_PROFILE_APPS_SERVICE: string;
        public DEVICE_POLICY_SERVICE: string;
        public DISPLAY_HASH_SERVICE: string;
        public DISPLAY_SERVICE: string;
        public DOMAIN_VERIFICATION_SERVICE: string;
        public DOWNLOAD_SERVICE: string;
        public DROPBOX_SERVICE: string;
        public EUICC_SERVICE: string;
        public FILE_INTEGRITY_SERVICE: string;
        public FINGERPRINT_SERVICE: string;
        public GAME_SERVICE: string;
        public HARDWARE_PROPERTIES_SERVICE: string;
        public INPUT_METHOD_SERVICE: string;
        public INPUT_SERVICE: string;
        public IPSEC_SERVICE: string;
        public JOB_SCHEDULER_SERVICE: string;
        public KEYGUARD_SERVICE: string;
        public LAUNCHER_APPS_SERVICE: string;
        public LAYOUT_INFLATER_SERVICE: string;
        public LOCATION_SERVICE: string;
        public MEDIA_COMMUNICATION_SERVICE: string;
        public MEDIA_METRICS_SERVICE: string;
        public MEDIA_PROJECTION_SERVICE: string;
        public MEDIA_ROUTER_SERVICE: string;
        public MEDIA_SESSION_SERVICE: string;
        public MIDI_SERVICE: string;
        public MODE_APPEND: number;
        public MODE_ENABLE_WRITE_AHEAD_LOGGING: number;
        public MODE_MULTI_PROCESS: number;
        public MODE_NO_LOCALIZED_COLLATORS: number;
        public MODE_PRIVATE: number;
        public MODE_WORLD_READABLE: number;
        public MODE_WORLD_WRITEABLE: number;
        public NETWORK_STATS_SERVICE: string;
        public NFC_SERVICE: string;
        public NOTIFICATION_SERVICE: string;
        public NSD_SERVICE: string;
        public PEOPLE_SERVICE: string;
        public PERFORMANCE_HINT_SERVICE: string;
        public POWER_SERVICE: string;
        public PRINT_SERVICE: string;
        public RECEIVER_VISIBLE_TO_INSTANT_APPS: number;
        public RESTRICTIONS_SERVICE: string;
        public ROLE_SERVICE: string;
        public SEARCH_SERVICE: string;
        public SENSOR_SERVICE: string;
        public SHORTCUT_SERVICE: string;
        public STORAGE_SERVICE: string;
        public STORAGE_STATS_SERVICE: string;
        public SYSTEM_HEALTH_SERVICE: string;
        public TELECOM_SERVICE: string;
        public TELEPHONY_IMS_SERVICE: string;
        public TELEPHONY_SERVICE: string;
        public TELEPHONY_SUBSCRIPTION_SERVICE: string;
        public TEXT_CLASSIFICATION_SERVICE: string;
        public TEXT_SERVICES_MANAGER_SERVICE: string;
        public TV_INPUT_SERVICE: string;
        public UI_MODE_SERVICE: string;
        public USAGE_STATS_SERVICE: string;
        public USB_SERVICE: string;
        public USER_SERVICE: string;
        public VIBRATOR_MANAGER_SERVICE: string;
        public VIBRATOR_SERVICE: string;
        public VPN_MANAGEMENT_SERVICE: string;
        public WALLPAPER_SERVICE: string;
        public WIFI_AWARE_SERVICE: string;
        public WIFI_P2P_SERVICE: string;
        public WIFI_RTT_RANGING_SERVICE: string;
        public WIFI_SERVICE: string;
        public WINDOW_SERVICE: string;
        public applicationContext: android.content.Context;
        public applicationInfo: android.content.pm.ApplicationInfo;
        public assets: android.content.res.AssetManager;
        public attributionSource: android.content.AttributionSource;
        public attributionTag: string;
        public cacheDir: java.io.File;
        public classLoader: java.lang.ClassLoader;
        public codeCacheDir: java.io.File;
        public contentResolver: android.content.ContentResolver;
        public dataDir: java.io.File;
        public display: android.view.Display;
        public externalCacheDir: java.io.File;
        public externalCacheDirs: Array<java.io.File>;
        /** @deprecated */
        public externalMediaDirs: Array<java.io.File>;
        public filesDir: java.io.File;
        public mainExecutor: java.util.concurrent.Executor;
        public mainLooper: android.os.Looper;
        public noBackupFilesDir: java.io.File;
        public obbDir: java.io.File;
        public obbDirs: Array<java.io.File>;
        public opPackageName: string;
        public packageCodePath: string;
        public packageManager: android.content.pm.PackageManager;
        public packageName: string;
        public packageResourcePath: string;
        public params: android.content.ContextParams;
        public resources: android.content.res.Resources;
        public theme: android.content.res.Resources.Theme;
        /** @deprecated */
        public wallpaper: android.graphics.drawable.Drawable;
        /** @deprecated */
        public wallpaperDesiredMinimumHeight: number;
        /** @deprecated */
        public wallpaperDesiredMinimumWidth: number;
    }

    /**
     * Created by SuperMonster003 on May 23, 2022.
     * Mixed Class A and B (both are "ui selector"s) together.
     * Class A: org.autojs.autojs.core.accessibility.UiSelector
     * Class B: org.autojs.autojs.core.automator.UiGlobalSelector
     * @example Source code summary (zh-CN: 源代码摘要)
     * this.scope[method] = ((method) => {
     *     return function () {
     *         let s = global.selector();
     *         return s[method].apply(s, arguments);
     *     };
     * })(method);
     */
    class Selector extends org.autojs.autojs.core.accessibility.UiSelector {

        public accessibilityFocused(b?: boolean): this;

        public action(...actions: any[]): this;

        public algorithm(str: string): this;

        public bottom(min: number, max: number): this;
        public bottom(value: number): this;

        public bounds(l: number, t: number, r: number, b: number): this;

        public boundsBottom(min: number, max: number): this;
        public boundsBottom(value: number): this;

        public boundsCenterX(min: number, max: number): this;
        public boundsCenterX(value: number): this;

        public boundsCenterY(min: number, max: number): this;
        public boundsCenterY(value: number): this;

        public boundsContains(l: number, t: number, r: number, b: number): this;

        public boundsHeight(min: number, max: number): this;
        public boundsHeight(value: number): this;

        public boundsInside(l: number, t: number, r: number, b: number): this;

        public boundsLeft(min: number, max: number): this;
        public boundsLeft(value: number): this;

        public boundsMaxBottom(value: number): this;

        public boundsMaxCenterX(value: number): this;

        public boundsMaxCenterY(value: number): this;

        public boundsMaxHeight(value: number): this;

        public boundsMaxLeft(value: number): this;

        public boundsMaxRight(value: number): this;

        public boundsMaxTop(value: number): this;

        public boundsMaxWidth(value: number): this;

        public boundsMinBottom(value: number): this;

        public boundsMinCenterX(value: number): this;

        public boundsMinCenterY(value: number): this;

        public boundsMinHeight(value: number): this;

        public boundsMinLeft(value: number): this;

        public boundsMinRight(value: number): this;

        public boundsMinTop(value: number): this;

        public boundsMinWidth(value: number): this;

        public boundsRight(min: number, max: number): this;
        public boundsRight(value: number): this;

        public boundsTop(min: number, max: number): this;
        public boundsTop(value: number): this;

        public boundsWidth(min: number, max: number): this;
        public boundsWidth(value: number): this;

        public centerX(min: number, max: number): this;
        public centerX(value: number): this;

        public centerY(min: number, max: number): this;
        public centerY(value: number): this;

        public checkable(b?: boolean): this;

        public checked(b?: boolean): this;

        public className(str: Selector.ClassName | Selector.ClassNameAbbr | string): this;

        public classNameContains(str: string): this;

        public classNameEndsWith(suffix: string): this;

        public classNameMatch(regex: string | RegExp): this;

        /** @deprecated */
        public classNameMatches(regex: string | RegExp): this;

        public classNameStartsWith(prefix: string): this;

        public clickable(b?: boolean): this;

        public column(d: number): this;

        public columnCount(d: number): this;

        public columnSpan(d: number): this;

        public content(str: string): this;

        public contentContains(str: string): this;

        public contentEndsWith(suffix: string): this;

        public contentInvalid(b?: boolean): this;

        public contentMatch(regex: string | RegExp): this;

        /** @deprecated */
        public contentMatches(regex: string | RegExp): this;

        public contentStartsWith(prefix: string): this;

        public contextClickable(b?: boolean): this;

        public currentApp(app: org.autojs.autojs.util.App): this;
        public currentApp(name: string): this;

        public depth(d: number): this;

        public desc(str: string): this;

        public descContains(str: string): this;

        public descEndsWith(suffix: string): this;

        public descMatch(regex: string | RegExp): this;

        /** @deprecated */
        public descMatches(regex: string | RegExp): this;

        public descStartsWith(prefix: string): this;

        public dismissable(b?: boolean): this;

        public drawingOrder(order: number): this;

        public editable(b?: boolean): this;

        public enabled(b?: boolean): this;

        public filter(filter: org.autojs.autojs.core.automator.filter.BooleanFilter.BooleanSupplier | ((w: UiObject) => boolean)): this;

        public focusable(b?: boolean): this;

        public focused(b?: boolean): this;

        public height(min: number, max: number): this;
        public height(value: number): this;

        public id(str: string): this;

        public idContains(str: string): this;

        public idEndsWith(suffix: string): this;

        public idHex(str: string): this;

        public idMatch(regex: string | RegExp): this;

        /** @deprecated */
        public idMatches(regex: string | RegExp): this;

        public idStartsWith(prefix: string): this;

        public indexInParent(index: number): this;

        public left(min: number, max: number): this;
        public left(value: number): this;

        public longClickable(b?: boolean): this;

        public maxBottom(value: number): this;

        public maxCenterX(value: number): this;

        public maxCenterY(value: number): this;

        public maxHeight(value: number): this;

        public maxLeft(value: number): this;

        public maxRight(value: number): this;

        public maxTop(value: number): this;

        public maxWidth(value: number): this;

        public minBottom(value: number): this;

        public minCenterX(value: number): this;

        public minCenterY(value: number): this;

        public minHeight(value: number): this;

        public minLeft(value: number): this;

        public minRight(value: number): this;

        public minTop(value: number): this;

        public minWidth(value: number): this;

        public multiLine(b?: boolean): this;

        public packageName(app: org.autojs.autojs.util.App): this;
        public packageName(str: string): this;

        public packageNameContains(str: string): this;

        public packageNameEndsWith(suffix: string): this;

        public packageNameMatch(regex: string | RegExp): this;

        /** @deprecated */
        public packageNameMatches(regex: string | RegExp): this;

        public packageNameStartsWith(prefix: string): this;

        public password(b?: boolean): this;

        public right(min: number, max: number): this;
        public right(value: number): this;

        public row(d: number): this;

        public rowCount(d: number): this;

        public rowSpan(d: number): this;

        public screenCenterX(): this;
        public screenCenterX(b: boolean): this;
        public screenCenterX(b: boolean, tolerance: number): this;
        public screenCenterX(tolerance: number): this;

        public screenCenterY(): this;
        public screenCenterY(b: boolean): this;
        public screenCenterY(b: boolean, tolerance: number): this;
        public screenCenterY(tolerance: number): this;

        public screenCoverage(): this;
        public screenCoverage(min: number): this;

        public scrollable(b?: boolean): this;

        public selected(b?: boolean): this;

        public text(str: string): this;

        public textContains(str: string): this;

        public textEndsWith(suffix: string): this;

        public textMatch(regex: string | RegExp): this;

        /** @deprecated */
        public textMatches(regex: string | RegExp): this;

        public textStartsWith(prefix: string): this;

        public top(min: number, max: number): this;
        public top(value: number): this;

        public visibleToUser(b?: boolean): this;

        public width(min: number, max: number): this;
        public width(value: number): this;

    }

    class Runtime extends org.autojs.autojs.runtime.ScriptRuntime {

        public applicationContext: android.content.Context;

        /**
         * @example
         * let str_clip = runtime.clip;
         * console.log("clipboard text: " + str_clip);
         * @example Source code summary (zh-CN: 源代码摘要)
         * if (Looper.myLooper() === Looper.getMainLooper()) {
         *     return ClipboardUtil.getClipOrEmpty(uiHandler.getContext()).toString();
         * }
         * let clip = new VolatileDispose();
         * uiHandler.post(function () {
         *     clip.setAndNotify(ClipboardUtil.getClipOrEmpty(uiHandler.getContext()).toString());
         * });
         * return clip.blockedGetOrThrow(ScriptInterruptedException.class);
         * @see org.autojs.autojs.concurrent.VolatileDispose
         * @see android.os.Looper
         * @see org.autojs.autojs.util.ClipboardUtils
         */
        public clip: string;
        /**
         * @example
         * let java_images = runtime.images;
         * let orientation = org.autojs.autojs.core.image.capture.ScreenCapturer.ORIENTATION_AUTO;
         * const ResultAdapter = require("result-adapter");
         *
         * if (ResultAdapter.wait(java_images.requestScreenCapture(orientation))) {
         *     let capt = java_images.captureScreen();
         *     console.log(capt.width + " × " + capt.height); // e.g. 720 × 1280
         * } else {
         *     console.error('request screen capture permission failed');
         * }
         */
        public images: org.autojs.autojs.runtime.api.Images;
        public rootShell: org.autojs.autojs.runtime.api.AbstractShell;
        public screenMetrics: org.autojs.autojs.runtime.api.ScreenMetrics;
        public topLevelScope: org.autojs.autojs.rhino.TopLevelScope;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * private TopLevelScope mTopLevelScope;
         * public Continuation createContinuation() {
         *     return Continuation.Companion.create(this, mTopLevelScope);
         * }
         * public Continuation createContinuation(Scriptable scope) {
         *     return Continuation.Companion.create(this, scope);
         * }
         * @see org.autojs.autojs.rhino.TopLevelScope
         * @see org.autojs.autojs.rhino.continuation.Continuation
         * @see org.mozilla.javascript.Scriptable
         * @param [scope=global]
         */
        public createContinuation(scope?: org.mozilla.javascript.Scriptable): org.autojs.autojs.rhino.continuation.Continuation;

        /**
         * @example
         * runtime.exit();
         * @example Source code summary (zh-CN: 源代码摘要)
         * mThread.interrupt();
         * engines.myEngine().forceStop();
         * threads.exit();
         * if (Looper.myLooper() !== Looper.getMainLooper()) {
         *     throw new ScriptInterruptedException();
         * }
         * @see org.autojs.autojs.runtime.ScriptRuntime.exit
         */
        public exit(): void;
        /**
         * @example
         * try {throw new Error('test')}
         * catch(e) {runtime.exit(java.lang.Throwable(e))}
         * log("OK");
         * @example Source code summary (zh-CN: 源代码摘要)
         * engines.myEngine().uncaughtException(e);
         * exit();
         * @see org.autojs.autojs.runtime.ScriptRuntime.exit
         */
        public exit(e: java.lang.Throwable): void;

        /**
         * @example
         * let str_clip = runtime.getClip();
         * console.log("clipboard text: " + str_clip);
         * @example Source code summary (zh-CN: 源代码摘要)
         * if (Looper.myLooper() === Looper.getMainLooper()) {
         *     return ClipboardUtil.getClipOrEmpty(uiHandler.getContext()).toString();
         * }
         * let clip = new VolatileDispose();
         * uiHandler.post(function () {
         *     clip.setAndNotify(ClipboardUtil.getClipOrEmpty(uiHandler.getContext()).toString());
         * });
         * return clip.blockedGetOrThrow(ScriptInterruptedException.class);
         * @see org.autojs.autojs.concurrent.VolatileDispose
         * @see android.os.Looper
         * @see org.autojs.autojs.util.ClipboardUtils
         */
        public getClip(): string;

        /**
         * @example
         * let java_images = runtime.getImages();
         * let orientation = org.autojs.autojs.core.image.capture.ScreenCapturer.ORIENTATION_AUTO;
         * const ResultAdapter = require("result-adapter");
         *
         * if (ResultAdapter.wait(java_images.requestScreenCapture(orientation))) {
         *     let capt = java_images.captureScreen();
         *     console.log(capt.width + " × " + capt.height); // e.g. 720 × 1280
         * } else {
         *     console.error('request screen capture permission failed');
         * }
         */
        public getImages(): org.autojs.autojs.runtime.api.Images;

        /**
         * @example
         * runtime.isStopped();
         * @example Source code summary (zh-CN: 源代码摘要)
         * Thread.currentThread().isInterrupted();
         * @see java.lang.Thread
         */
        public isStopped(): boolean;

        /**
         * @example
         * runtime.loadDex("test.dex");
         * @example Source code summary (zh-CN: 源代码摘要)
         * ContextFactory.getGlobal().getApplicationClassLoader()).loadDex(new File(path));
         * @see org.mozilla.javascript.ContextFactory
         */
        public loadDex(path: string): void;

        /**
         * @example
         * runtime.loadJar("test.jar");
         * @example Source code summary (zh-CN: 源代码摘要)
         * ContextFactory.getGlobal().getApplicationClassLoader()).loadJar(new File(path));
         * @see org.mozilla.javascript.ContextFactory
         */
        public loadJar(path: string): void;

        /**
         * @example
         * runtime.requestPermissions("access_fine_location"); // GPS
         * runtime.requestPermissions("record_audio"); // REC
         * @example Source code summary (zh-CN: 源代码摘要)
         * if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
         *     permissions = Permissions.getPermissionsNeedToRequest(context, permissions);
         *     permissions.length && Permissions.requestPermissions(context, permissions);
         * }
         * @see org.autojs.autojs.core.permission.Permissions
         */
        public requestPermissions(permissions: ('access_fine_location' | 'record_audio')[]): void;

        /**
         * @example
         * runtime.requiresApi(26); // Oreo 8.0.0
         * runtime.requiresApi(25); // Nougat 7.1
         * runtime.requiresApi(24); // Nougat 7.0
         * runtime.requiresApi(23); // Marshmallow 6.0
         * runtime.requiresApi(22); // Lollipop 5.1
         * runtime.requiresApi(21); // Lollipop 5.0
         * runtime.requiresApi(19); // KitKat 4.4 - 4.4.4
         * runtime.requiresApi(18); // Jelly Bean 4.3.x
         * runtime.requiresApi(17); // Jelly Bean 4.2.x
         * runtime.requiresApi(16); // Jelly Bean 4.1.x
         * runtime.requiresApi(15); // Ice Cream Sandwich 4.0.3 - 4.0.4
         * runtime.requiresApi(14); // Ice Cream Sandwich 4.0.1 - 4.0.2
         * @example Source code summary (zh-CN: 源代码摘要)
         * if (Build.VERSION.SDK_INT < i) {
         *     let str_a = GlobalAppContext.getString(R.string.text_requires_sdk_version_to_run_the_script);
         *     let str_b = SdkVersionUtil.sdkIntToString(i);
         *     throw new ScriptException(str_a + str_b);
         * }
         * @see org.autojs.autojs.app.GlobalAppContext
         * @see org.autojs.autojs.util.SdkVersionUtils
         * @see org.autojs.autojs.runtime.exception.ScriptException
         */
        public requiresApi(api: number): void;

        public setApplicationContext(context: android.content.Context): void;

        /**
         * @example
         * runtime.setClip("Hello");
         * @example Source code summary (zh-CN: 源代码摘要)
         * if (Looper.myLooper() == Looper.getMainLooper()) {
         *     ClipboardUtil.setClip(uiHandler.getContext(), text);
         * } else {
         *     let dispose = new VolatileDispose();
         *     uiHandler.post(function () {
         *         ClipboardUtil.setClip(uiHandler.getContext(), text);
         *         dispose.setAndNotify(text);
         *     });
         *     dispose.blockedGet();
         * }
         * @see org.autojs.autojs.concurrent.VolatileDispose
         * @see android.os.Looper
         * @see org.autojs.autojs.util.ClipboardUtils
         */
        public setClip(text: string): void;

        /**
         * @example
         * runtime.setScreenMetrics(720, 1280);
         * @example Source code summary (zh-CN: 源代码摘要)
         * let mScreenMetrics = new ScreenMetrics();
         * mScreenMetrics.setScreenMetrics(width, height);
         * @see org.autojs.autojs.runtime.api.ScreenMetrics
         */
        public setScreenMetrics(width: number, height: number): void;

        public setTopLevelScope(topLevelScope: org.autojs.autojs.rhino.TopLevelScope): void;

        public shell(cmd: string, root: number): org.autojs.autojs.runtime.api.AbstractShell.Result;

        /**
         * @example
         * sleep(1000);
         * @example Source code summary (zh-CN: 源代码摘要)
         * if (ui.isUiThread()) {
         *     throw new Error('不能在ui线程执行阻塞操作，请使用setTimeout代替');
         * }
         * runtime.sleep(t);
         * @see java.lang.Thread.sleep
         */
        public sleep(millis: number): void;

        /** @deprecated */
        public stop(): void;

        /**
         * @example
         * toast("Hello");
         * @example Source code summary (zh-CN: 源代码摘要)
         * uiHandler.toast(text);
         * @see org.autojs.autojs.runtime.ScriptRuntime.uiHandler
         */
        public toast(text): void;

    }

}

declare namespace Activity {

    class PhoneWindow extends com.android.internal.policy.PhoneWindow {
        public decorView: com.android.internal.policy.DecorView;
    }

}

// @Supplement

declare class Intent extends android.content.Intent {
    // Empty class body.
}

declare class OkHttpClient extends okhttp3.OkHttpClient {
    // Empty class body.
}

declare class __engine__ extends org.autojs.autojs.engine.LoopBasedJavaScriptEngine {
    // Empty class body.
}

declare class MutableOkHttp extends org.autojs.autojs.core.http.MutableOkHttp {
    // Empty class body.
}

declare class VolatileBox<T> extends org.autojs.autojs.concurrent.VolatileBox<T> {
    // Empty class body.
}

declare class ReentrantLock extends java.util.concurrent.locks.ReentrantLock {
    // Empty class body.
}

declare class ScreenMetrics extends org.autojs.autojs.runtime.api.ScreenMetrics {
    // Empty class body.
}

declare class WebView extends android.webkit.WebView {
    // Empty class body.
}

declare class WebViewClient extends android.webkit.WebViewClient {
    // Empty class body.
}

declare class WebChromeClient extends android.webkit.WebChromeClient {
    // Empty class body.
}

declare class StandardCharsets extends java.nio.charset.StandardCharsets {
    // Empty class body.
}

declare class PendingIntent extends android.app.PendingIntent {
    // Empty class body.
}

declare class GlobalAppContext extends org.autojs.autojs.app.GlobalAppContext {
    // Empty class body.
}
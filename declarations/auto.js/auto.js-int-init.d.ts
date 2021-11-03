// Type definitions for Auto.js internal module init
//
// Project: https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021
//
// noinspection JSUnusedGlobalSymbols

/// <reference path="../auto.js.d.ts" />

/**
 * @Source %autojs%/assets/init.js
 */

declare let app: Internal.App;
declare let automator: Internal.Automator;
declare let auto: Internal.Auto;
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
declare let images: Internal.Images;
declare let media: Internal.Media;
declare let plugins: Internal.Plugins;
declare let sensors: Internal.Sensors;
declare let storages: Internal.Storages;
declare let require: Internal.Require;
declare let threads: Internal.Threads;
declare let timers: Internal.Timers;
declare let ui: Internal.UI;
declare let util: Internal.Util;

declare class Canvas extends com.stardust.autojs.core.graphics.ScriptCanvas {}

declare class Image extends com.stardust.autojs.core.image.ImageWrapper {}

declare class Shell extends com.stardust.autojs.core.util.Shell {}

declare class Paint extends android.graphics.Paint {}

declare class KeyEvent extends android.view.KeyEvent {}

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * -- @ScriptVariable
 * public final AccessibilityBridge accessibilityBridge;
 * public UiSelector selector() {
 *     return new UiSelector(accessibilityBridge);
 * }
 * @see com.stardust.autojs.annotation.ScriptVariable
 * @see com.stardust.autojs.core.accessibility.AccessibilityBridge
 * @see com.stardust.autojs.core.accessibility.UiSelector
 */
declare function selector(): Internal.Selector;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * public AbstractShell.Result shell(String cmd, int root) {
 *     return ProcessShell.execCommand(cmd, root != 0);
 * }
 * @see com.stardust.autojs.core.util.ProcessShell
 * @see com.stardust.autojs.runtime.api.AbstractShell
 */
declare function shell(cmd: string, root?: boolean | any): Internal.Shell;

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
declare function __asGlobal__(obj, functions): void;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * global.__exitIfError__ = function (action, defReturnValue) {
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
 *         return defReturnValue;
 *     }
 * };
 */
declare function __exitIfError__(action, defReturnValue): void;

/**
 * @example
 * importClass(org.opencv.core.Point);
 * importClass('org.opencv.core.Point'); // same as above
 * console.log(typeof Point); // "function"
 */
declare function importClass(cls: org.mozilla.javascript.NativeJavaClass | string | object): void;

/**
 * @Source %autojs%/autojs/src/main/java/com/stardust/autojs/engine/JavaScriptEngine
 */

declare let runtime: Internal.Runtime;

/**
 * @Source %autojs%/autojs/src/main/java/com/stardust/autojs/ScriptEngineService
 */

declare let context: Internal.Context;

/**
 * @Source %autojs%/autojs/src/main/java/com/stardust/autojs/execution/ScriptExecuteActivity
 */

declare let activity: Internal.Activity;

declare namespace Internal {
    class Activity extends com.stardust.autojs.execution.ScriptExecuteActivity {
        window: Activity.PhoneWindow;
    }

    class Context extends android.content.Context {
        public ACCESSIBILITY_SERVICE: string;
        public ACCOUNT_SERVICE: string;
        public ACTIVITY_SERVICE: string;
        public ALARM_SERVICE: string;
        public APPWIDGET_SERVICE: string;
        public APP_INTEGRITY_SERVICE: string;
        public APP_OPS_SERVICE: string;
        public APP_PREDICTION_SERVICE: string;
        public AUDIO_SERVICE: string;
        public BACKUP_SERVICE: string;
        public BATTERY_SERVICE: string;
        public BATTERY_STATS_SERVICE: string;
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
        public CONTENT_SUGGESTIONS_SERVICE: string;
        public CONTEXTHUB_SERVICE: string;
        public CONTEXT_IGNORE_SECURITY: number;
        public CONTEXT_INCLUDE_CODE: number;
        public CONTEXT_RESTRICTED: number;
        public COUNTRY_DETECTOR: string;
        public CROSS_PROFILE_APPS_SERVICE: string;
        public DEVICE_POLICY_SERVICE: string;
        public DISPLAY_SERVICE: string;
        public DOWNLOAD_SERVICE: string;
        public DROPBOX_SERVICE: string;
        public ETHERNET_SERVICE: string;
        public EUICC_CARD_SERVICE: string;
        public EUICC_SERVICE: string;
        public FILE_INTEGRITY_SERVICE: string;
        public FINGERPRINT_SERVICE: string;
        public HARDWARE_PROPERTIES_SERVICE: string;
        public HDMI_CONTROL_SERVICE: string;
        public INPUT_METHOD_SERVICE: string;
        public INPUT_SERVICE: string;
        public IPSEC_SERVICE: string;
        public JOB_SCHEDULER_SERVICE: string;
        public KEYGUARD_SERVICE: string;
        public LAUNCHER_APPS_SERVICE: string;
        public LAYOUT_INFLATER_SERVICE: string;
        public LOCATION_SERVICE: string;
        public MEDIA_PROJECTION_SERVICE: string;
        public MEDIA_ROUTER_SERVICE: string;
        public MEDIA_SESSION_SERVICE: string;
        public MIDI_SERVICE: string;
        public MODE_APPEND: number;
        public MODE_ENABLE_WRITE_AHEAD_LOGGING: number;
        public MODE_MULTI_PROCESS: number;
        public MODE_NO_LOCALIZED_COLLATORS: number;
        public MODE_WORLD_READABLE: number;
        public MODE_WORLD_WRITEABLE: number;
        public NETD_SERVICE: string;
        public NETWORK_SCORE_SERVICE: string;
        public NETWORK_STATS_SERVICE: string;
        public NFC_SERVICE: string;
        public NOTIFICATION_SERVICE: string;
        public NSD_SERVICE: string;
        public OEM_LOCK_SERVICE: string;
        public PERMISSION_SERVICE: string;
        public PERSISTENT_DATA_BLOCK_SERVICE: string;
        public POWER_SERVICE: string;
        public PRINT_SERVICE: string;
        public RECEIVER_VISIBLE_TO_INSTANT_APPS: number;
        public RESTRICTIONS_SERVICE: string;
        public ROLE_SERVICE: string;
        public ROLLBACK_SERVICE: string;
        public SEARCH_SERVICE: string;
        public SECURE_ELEMENT_SERVICE: string;
        public SENSOR_SERVICE: string;
        public SHORTCUT_SERVICE: string;
        public STATS_MANAGER: string;
        public STATUS_BAR_SERVICE: string;
        public STORAGE_SERVICE: string;
        public STORAGE_STATS_SERVICE: string;
        public SYSTEM_CONFIG_SERVICE: string;
        public SYSTEM_HEALTH_SERVICE: string;
        public SYSTEM_UPDATE_SERVICE: string;
        public TELECOM_SERVICE: string;
        public TELEPHONY_IMS_SERVICE: string;
        public TELEPHONY_SERVICE: string;
        public TELEPHONY_SUBSCRIPTION_SERVICE: string;
        public TETHERING_SERVICE: string;
        public TEXT_CLASSIFICATION_SERVICE: string;
        public TEXT_SERVICES_MANAGER_SERVICE: string;
        public TV_INPUT_SERVICE: string;
        public UI_MODE_SERVICE: string;
        public USAGE_STATS_SERVICE: string;
        public USB_SERVICE: string;
        public USER_SERVICE: string;
        public VIBRATOR_SERVICE: string;
        public VPN_MANAGEMENT_SERVICE: string;
        public VR_SERVICE: string;
        public WALLPAPER_SERVICE: string;
        public WIFI_AWARE_SERVICE: string;
        public WIFI_NL80211_SERVICE: string;
        public WIFI_P2P_SERVICE: string;
        public WIFI_RTT_RANGING_SERVICE: string;
        public WIFI_RTT_SERVICE: string;
        public WIFI_SCANNING_SERVICE: string;
        public WIFI_SERVICE: string;
        public WINDOW_SERVICE: string;
        public applicationContext: android.content.Context;
        public applicationInfo: android.content.pm.ApplicationInfo;
        public assets: android.content.res.AssetManager;
        public cacheDir: java.io.File;
        public classLoader: java.lang.ClassLoader;
        public codeCacheDir: java.io.File;
        public contentResolver: android.content.ContentResolver;
        public dataDir: java.io.File;
        public externalCacheDir: java.io.File;
        public externalCacheDirs: java.io.File[];
        public externalMediaDirs: java.io.File[];
        public filesDir: java.io.File;
        public mainLooper: android.os.Looper;
        public noBackupFilesDir: java.io.File;
        public obbDir: java.io.File;
        public obbDirs: java.io.File[];
        public packageCodePath: string;
        public packageManager: android.content.pm.PackageManager;
        public packageName: string;
        public packageResourcePath: string;
        public resources: android.content.res.Resources;
        public theme: android.content.res.Resources.Theme;
        /** @deprecated */
        public wallpaper: android.graphics.drawable.Drawable;
        /** @deprecated */
        public wallpaperDesiredMinimumHeight: number;
        /** @deprecated */
        public wallpaperDesiredMinimumWidth: number;
    }

    class Runtime extends com.stardust.autojs.runtime.ScriptRuntime {
        public accessibilityBridge: com.stardust.autojs.core.accessibility.AccessibilityBridge;
        public applicationContext: globalAndroid.content.Context;
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
         * @see com.stardust.concurrent.VolatileDispose
         * @see android.os.Looper
         * @see com.stardust.util.ClipboardUtil
         */
        public clip: string;
        /**
         * @example
         * let java_images = runtime.images;
         * let orientation = com.stardust.autojs.core.image.capture.ScreenCapturer.ORIENTATION_AUTO;
         * const ResultAdapter = require("result_adapter");
         *
         * if (ResultAdapter.wait(java_images.requestScreenCapture(orientation))) {
         *     let capt = java_images.captureScreen();
         *     console.log(capt.width + " × " + capt.height); // e.g. 720 × 1280
         * } else {
         *     console.error('request screen capture permission failed');
         * }
         */
        public images: com.stardust.autojs.runtime.api.Images;
        public rootShell: com.stardust.autojs.runtime.api.AbstractShell;
        public screenMetrics: com.stardust.util.ScreenMetrics;
        public topLevelScope: com.stardust.autojs.rhino.TopLevelScope;
        public uiHandler: com.stardust.util.UiHandler;
    }

    class Selector extends com.stardust.autojs.core.accessibility.UiSelector {}
}

declare namespace Activity {
    class PhoneWindow extends com.android.internal.policy.PhoneWindow {
        public decorView: com.android.internal.policy.DecorView;
    }
}

// @Supplement

declare let web: undefined;

declare class Intent extends android.content.Intent {}

declare class Address extends okhttp3.Address {}

declare class Authenticator extends okhttp3.Authenticator {}

declare class Cache extends okhttp3.Cache {}

declare class Call extends okhttp3.Call {}

declare class CertificatePinner extends okhttp3.CertificatePinner {}

declare class Challenge extends okhttp3.Challenge {}

declare class CipherSuite extends okhttp3.CipherSuite {}

declare class Connection extends okhttp3.Connection {}

declare class ConnectionSpec extends okhttp3.ConnectionSpec {}

declare class ConnectionPool extends okhttp3.ConnectionPool {}

declare class Callback extends okhttp3.Callback {}

declare class CacheControl extends okhttp3.CacheControl {}

declare class Cookie extends okhttp3.Cookie {}

declare class CookieJar extends okhttp3.CookieJar {}

declare class Credentials extends okhttp3.Credentials {}

declare class Dns extends okhttp3.Dns {}

declare class Dispatcher extends okhttp3.Dispatcher {}

declare class EventListener extends okhttp3.EventListener {}

declare class FormBody extends okhttp3.FormBody {}

declare class Handshake extends okhttp3.Handshake {}

declare class Headers extends okhttp3.Headers {}

declare class HttpUrl extends okhttp3.HttpUrl {}

declare class Interceptor extends okhttp3.Interceptor {}

declare class MultipartReader extends okhttp3.MultipartReader {}

declare class MediaType extends okhttp3.MediaType {}

declare class MultipartBody extends okhttp3.MultipartBody {}

declare class OkHttp extends okhttp3.OkHttp {}

declare class OkHttpClient extends okhttp3.OkHttpClient {}

declare class Protocol extends okhttp3.Protocol {}

declare class Request extends okhttp3.Request {}

declare class ResponseBody extends okhttp3.ResponseBody {}

declare class Response extends okhttp3.Response {}

declare class RequestBody extends okhttp3.RequestBody {}

declare class TlsVersion extends okhttp3.TlsVersion {}

declare class WebSocket extends okhttp3.WebSocket {}

declare class WebSocketListener extends okhttp3.WebSocketListener {}

declare class __engine__ extends com.stardust.autojs.engine.LoopBasedJavaScriptEngine {}
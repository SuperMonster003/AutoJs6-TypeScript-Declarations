// Type definitions for Auto.js internal module globals
//
// Project: https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../auto.js.d.ts" />

/**
 * @Source %autojs%/assets/modules/__globals__.js
 */

/**
 * @see runtime.sleep
 */
declare function sleep(millis: number): void;

/**
 * @see runtime.toast
 */
declare function toast(text): void;

/**
 * @example
 * toastLog("Hello");
 * @example Source code summary (zh-CN: 源代码摘要)
 * runtime.toast(text);
 * global.log(text);
 * @see runtime.toast
 * @see log
 */
declare function toastLog(text): void;

/**
 * @example
 * try {
 *     throw new Error('test');
 * } catch(e) {
 *     exit(java.lang.Throwable(e));
 * }
 * log('OK');
 * @example Source code summary (zh-CN: 源代码摘要)
 * runtime.exit.bind(runtime)
 * @see runtime.exit
 */
declare function exit(e?: java.lang.Throwable): void;

/**
 * @deprecated use exit() instead
 * @see exit
 */
declare function stop(): void;

/**
 * @see runtime.isStopped
 */
declare function isStopped(): boolean;

/** @see isStopped */
declare function isShuttingDown(): boolean;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * return !isStopped();
 * @see isStopped
 */
declare function notStopped(): boolean;

/** @see notStopped */
declare function isRunning(): boolean;

/**
 * @see runtime.setClip
 */
declare function setClip(text: string): void;

/**
 * @see runtime.getClip
 */
declare function getClip(): string;

/**
 * @example
 * while (~sleep(200)) {
 *     if (currentPackage() === "com.example.test") {
 *         break;
 *     }
 * }
 * @example Source code summary (zh-CN: 源代码摘要)
 * global.auto();
 * return runtime.info.getLatestPackage();
 * @see auto
 * @see runtime.info.getLatestPackage
 */
declare function currentPackage(): string;

/**
 * @example
 * while (~sleep(200)) {
 *     if (currentActivity() === "com.sonymobile.home.HomeActivity") {
 *         break;
 *     }
 * }
 * @example Source code summary (zh-CN: 源代码摘要)
 * global.auto();
 * return runtime.info.getLatestActivity();
 * @see auto
 * @see runtime.info.getLatestActivity
 */
declare function currentActivity(): string;

/**
 * @param packageName
 * @param [period=200]
 * @example
 * waitForPackage("com.example.test", 120);
 * toastLog("OK");
 * @example Source code summary (zh-CN: 源代码摘要)
 * if (ui.isUiThread()) {
 *     throw new Error('不能在ui线程执行阻塞操作，请在子线程或子脚本执行，或者使用setInterval循环检测当前activity和package');
 * }
 * period = period || 200;
 * while (global.currentPackage() !== packageName) {
 *     sleep(period);
 * }
 * @see currentPackage
 */
declare function waitForPackage(packageName: string, period ?: number): void;

/**
 * @param activity
 * @param [period=200]
 * @example
 * waitForActivity("com.sonymobile.home.HomeActivity", 120);
 * toastLog("OK");
 * @example Source code summary (zh-CN: 源代码摘要)
 * if (ui.isUiThread()) {
 *     throw new Error('不能在ui线程执行阻塞操作，请在子线程或子脚本执行，或者使用setInterval循环检测当前activity和package');
 * }
 * period = period || 200;
 * while (global.currentActivity() !== activity) {
 *     sleep(period);
 * }
 * @see currentActivity
 */
declare function waitForActivity(activity: string, period ?: number): void;

/**
 * @example
 * setScreenMetrics(720, 1280);
 * @example Source code summary (zh-CN: 源代码摘要)
 * global.setScreenMetrics = runtime.setScreenMetrics.bind(runtime);
 * @see runtime.setScreenMetrics
 */
declare function setScreenMetrics(width: number, height: number): void;

/**
 * @example
 * requiresApi(26); // Oreo 8.0.0
 * requiresApi(25); // Nougat 7.1
 * requiresApi(24); // Nougat 7.0
 * requiresApi(23); // Marshmallow 6.0
 * requiresApi(22); // Lollipop 5.1
 * requiresApi(21); // Lollipop 5.0
 * requiresApi(19); // KitKat 4.4 - 4.4.4
 * requiresApi(18); // Jelly Bean 4.3.x
 * requiresApi(17); // Jelly Bean 4.2.x
 * requiresApi(16); // Jelly Bean 4.1.x
 * requiresApi(15); // Ice Cream Sandwich 4.0.3 - 4.0.4
 * requiresApi(14); // Ice Cream Sandwich 4.0.1 - 4.0.2
 * @example Source code summary (zh-CN: 源代码摘要)
 * global.requiresApi = runtime.requiresApi.bind(runtime);
 * @see runtime.requiresApi
 */
declare function requiresApi(api: number): void;

/**
 * @example
 * // extra log will be printed
 * // look up the code in source code summary
 * requiresAutojsVersion("4.1.1 Alpha2");
 * requiresAutojsVersion(461); // same as above
 * @example Source code summary (zh-CN: 源代码摘要)
 * if (typeof version === 'number') {
 *     if (compare(version, app.autojs.versionCode) > 0) {
 *         throw new Error("需要Auto.js版本号" + version + "以上才能运行");
 *     }
 * } else {
 *     if (compareVersion(version, app.autojs.versionName) > 0) {
 *         throw new Error("需要Auto.js版本" + version + "以上才能运行");
 *     }
 * }
 * function compareVersion(v1, v2) {
 *     v1 = parseVersion(v1);
 *     v2 = parseVersion(v2);
 *     log(v1, v2);
 *     return v1.major != v2.major ? compare(v1.major, v2.major) :
 *         v1.minor != v2.minor ? compare(v1.minor, v2.minor) :
 *         v1.revision != v2.revision ? compare(v1.revision, v2.revision) :
 *         v1.buildType != v2.buildType ? compare(v1.buildType, v2.buildType) :
 *         compare(v1.build, v2.build);
 * }
 * function compare(a, b) {
 *     return a > b ? 1 : a < b ? -1 : 0;
 * }
 * function parseVersion(v) {
 *     let m = /(\d+)\.(\d+)\.(\d+)[ ]?(Alpha|Beta)?(\d*)/.exec(v);
 *     if (!m) throw new Error("版本格式不合法: " + v)
 *     return {
 *         major: parseInt(m[1]),
 *         minor: parseInt(m[2]),
 *         revision: parseInt(m[3]),
 *         buildType: buildType(m[4]),
 *         build: m[5] ? parseInt(m[5]) : 1
 *     };
 * }
 */
declare function requiresAutojsVersion(version: string | number): void;

/**
 * @example
 * let amount = 3;
 * while(amount--) {
 *     log(random());
 * }
 * @example Source code summary (zh-CN: 源代码摘要)
 * return Math.random();
 * @see Math.random
 */
declare function random(): number;
/**
 * @example
 * let amount = 3;
 * while(amount--) {
 *     log(random(80, 100));
 * }
 * @example Source code summary (zh-CN: 源代码摘要)
 * return Math.floor(Math.random() * (max - min + 1)) + min;
 * @see Math.random
 * @see Math.floor
 */
declare function random(min: number, max: number): number;
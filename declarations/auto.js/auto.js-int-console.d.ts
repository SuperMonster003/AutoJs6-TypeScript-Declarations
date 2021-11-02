// Type definitions for Auto.js internal module console
//
// Project: https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../auto.js.d.ts" />
/// <reference no-default-lib="true" />

/**
 * @Source %autojs%/assets/modules/__console__.js
 */

declare namespace Internal {
    interface Console {
        /**
         * @example
         * console.log("Hello");
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.log = function () {
         *     runtime.console.log(util.format.apply(util, arguments));
         * };
         * @see com.stardust.autojs.core.console.ConsoleImpl.log
         */
        log(...text): void;

        /**
         * @example
         * let a = 1 + 1;
         * console.assert(a === 2, "Wrong result");
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.assert = function (value, message) {
         *     message = message || "";
         *     runtime.console.assertTrue(value, message);
         * };
         * @see com.stardust.autojs.core.console.ConsoleImpl.assert
         */
        assert(value: boolean, message?: string): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.rawInput = runtime.console.rawInput.bind(rtConsole);
         * @see com.stardust.autojs.core.console.ConsoleImpl.rawInput
         */
        rawInput(): string;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.rawInput = runtime.console.rawInput.bind(rtConsole);
         * @see com.stardust.autojs.core.console.ConsoleImpl.rawInput
         */
        rawInput(data: any, ...args: any[]): string;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.input = function (data, param) {
         *     return eval(console.rawInput.call(console, [].slice(arguments)) + "");
         * };
         * @see console.rawInput
         */
        input(...data): any;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.verbose = function () {
         *     runtime.console.verbose(util.format.apply(util, arguments));
         * }；
         * @see com.stardust.autojs.core.console.ConsoleImpl.verbose
         */
        verbose(...text): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.print = function () {
         *     runtime.console.print(android.util.Log.DEBUG, util.format.apply(util, arguments));
         * };
         */
        print(...text): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.into = function () {
         *     runtime.console.into(util.format.apply(util, arguments));
         * }；
         * @see com.stardust.autojs.core.console.ConsoleImpl.into
         */
        info(...text): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.warn = function () {
         *     runtime.console.warn(util.format.apply(util, arguments));
         * }；
         * @see com.stardust.autojs.core.console.ConsoleImpl.warn
         */
        warn(...text): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.error = function () {
         *     runtime.console.error(util.format.apply(util, arguments));
         * }；
         * @see com.stardust.autojs.core.console.ConsoleImpl.error
         */
        error(...text): void;

        /**
         * @polyfill
         * @example Source code summary (zh-CN: 源代码摘要)
         * let timers = {};
         * let ascu = android.os.SystemClock.uptimeMillis;
         * console.time = console.time || function (label) {
         *     label = label || "default";
         *     timers[label] = ascu();
         * };
         * @see android.os.SystemClock.uptimeMillis
         */
        time(label?: string): void;

        /**
         * @polyfill
         * @example Source code summary (zh-CN: 源代码摘要)
         * let timers = {};
         * let ascu = android.os.SystemClock.uptimeMillis;
         * console.timeEnd = console.timeEnd || function (label) {
         *     label = label || "default";
         *     let result = ascu() - timers[label];
         *     delete timers[label];
         *     console.log(label + ": " + result + "ms");
         * };
         * @see android.os.SystemClock.uptimeMillis
         */
        timeEnd(label?: string): void;

        /**
         * @polyfill
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.trace = console.trace || function captureStack(message) {
         *     let k = {};
         *     Error.captureStackTrace(k, captureStack);
         *     console.log(util.format.apply(util, arguments) + "\n" + k.stack);
         * };
         * @see java.lang.Error
         */
        trace(...message): void;

        /**
         * Configuration of saving Auto.js logs to local storage (path, file name, etc...)
         * @param {{
         *     file?: string,
         *     filePattern?: "%m%n"|"%d - [%p::%c::%C] - %m%n"|string,
         *     immediateFlush?: boolean,
         *     maxBackupSize?: number,
         *     maxFileSize?: number,
         *     resetConfiguration?: boolean,
         *     rootLevel?: "OFF"|"FATAL"|"ERROR"|"WARN"|"INFO"|"DEBUG"|"TRACE"|"ALL",
         * }} [config={
         *     filePattern: "%m%n",
         *     immediateFlush: true,
         *     maxBackupSize: 5,
         *     maxFileSize: 512 << 10,
         *     resetConfiguration: true,
         *     rootLevel: "ALL",
         * }]
         * @example
         * console.setGlobalLogConfig({file: "./test.log"});
         * @example
         * console.setGlobalLogConfig({
         *     file: (() => {
         *         let _now = new Date();
         *         let _pad = n => n < 10 ? "0" + n : n.toString();
         *         return "./log/autojs-log-" + _pad(_now.getFullYear()) +
         *             _pad(_now.getMonth() + 1) + _pad(_now.getDate()) + ".log";
         *     })(),
         *     filePattern: "%d{yyyy-MM-dd/}%m%n",
         *     maxBackupSize: 16,
         *     maxFileSize: 384 << 10,
         * });
         * @example
         * void function disableGlobalLog() {
         *     let _lc = new Packages['de.mindpipe.android.logging.log4j'].LogConfigurator();
         *     _lc.setRootLevel(org.apache.log4j.Level.OFF);
         *     _lc.setUseFileAppender(false);
         *     _lc.setResetConfiguration(true);
         *     _lc.configure();
         * }();
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.setGlobalLogConfig = function (config) {
         *     let logConfigurator = new Packages['de.mindpipe.android.logging.log4j'].LogConfigurator();
         *     if (config.file) {
         *         logConfigurator.setFileName(files.path(config.file));
         *         logConfigurator.setUseFileAppender(true);
         *     }
         *     logConfigurator.setFilePattern(option(config.filePattern, "%m%n"));
         *     logConfigurator.setMaxFileSize(option(config.maxFileSize, 512 << 10));
         *     logConfigurator.setImmediateFlush(option(config.immediateFlush, true));
         *     let rootLevel = option(config.rootLevel, "ALL");
         *     logConfigurator.setRootLevel(org.apache.log4j.Level[rootLevel.toUpperCase()]);
         *     logConfigurator.setMaxBackupSize(option(config.maxBackupSize, 5));
         *     logConfigurator.setResetConfiguration(option(config.resetConfiguration, true));
         *     logConfigurator.configure();
         * };
         * function option(value, def) {
         *     return value == undefined ? def : value;
         * };
         */
        setGlobalLogConfig(config: {
            file?: string;
            /**
             * Not supported on Auto.js Pro versions
             * @default "%m%n"
             */
            filePattern?: string;
            /** @default 512 << 10 (512KB) */
            maxFileSize?: number;
            /** @default true */
            immediateFlush?: boolean;
            /** @default "ALL" */
            rootLevel?: 'OFF' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'FATAL' | 'ALL';
            /** @default 5 */
            maxBackupSize?: number;
            /** @default true */
            resetConfiguration?: boolean;
        }): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.console.show.bind(runtime.console);
         */
        show(): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.console.hide.bind(runtime.console);
         */
        hide(): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.console.clear.bind(runtime.console);
         */
        clear(): void;

        /**
         * @example
         * console.show();
         * console.setPosition(100, 100);
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.console.setPosition.bind(runtime.console);
         */
        setPosition(x: number, y: number): void;

        /**
         * @example
         * console.show();
         * console.setSize(device.width / 2, device.height / 2);
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.console.setSize.bind(runtime.console);
         */
        setSize(width: number, height: number): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.console.setTitle.bind(runtime.console);
         */
        setTitle(title: string): void;
    }
}

/**
 * @example
 * log("Hello");
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.log = console.log.bind(console);
 * @see console.log
 */
declare function log(...text): void;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.print = console.print.bind(console);
 * @see console.print
 */
declare function print(...text): void;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.err = console.error.bind(console);
 * @see console.error
 */
declare function err(...text): void;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.openConsole = console.show.bind(console);
 * @see console.show
 */
declare function openConsole(): void;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.clearConsole = console.clear.bind(console);
 * @see console.clear
 */
declare function clearConsole(): void;
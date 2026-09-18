// Type definitions for AutoJs6 internal module console
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Sep 8, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/console/Console.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/core/console/ConsoleImpl.kt
 */

declare namespace Internal {

    class Console extends org.autojs.autojs.core.console.GlobalConsole {

        /**
         * @example
         * let a = 1 + 1;
         * console.assert(a === 2, "Wrong result");
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.assert = function (value, message) {
         *     message = message || "";
         *     runtime.console.assertTrue(value, message);
         * };
         * @see org.autojs.autojs.core.console.ConsoleImpl.assert
         */
        assert(value: boolean | (() => boolean), message?: string): void;

        /**
         * Reads a line submitted in the console input bar and returns it as-is.
         * Blocks the script thread until the user submits (must not be called on the UI thread).
         * The floating console shows itself when nothing else displays the script console.
         * zh-CN: 读取用户在控制台输入栏提交的一行文本并原样返回.
         * 阻塞脚本线程直到用户提交 (不能在 UI 线程调用). 若没有其他界面显示脚本控制台, 浮动控制台会自动显示.
         * @example
         * let name = console.rawInput();
         * console.log("Hello, %s", name);
         * @since 6.8.0
         * @see org.autojs.autojs.core.console.ConsoleImpl.rawInput
         */
        rawInput(): string;

        /**
         * Prints a prompt like `console.log(data, ...args)`, then reads a line submitted in the console input bar.
         * zh-CN: 像 `console.log(data, ...args)` 一样打印提示, 然后读取用户在控制台输入栏提交的一行文本.
         * @example
         * let name = console.rawInput("Your name:");
         * console.log("Hello, %s", name);
         * @since 6.8.0
         * @see org.autojs.autojs.core.console.ConsoleImpl.rawInput
         */
        rawInput(data: any, ...args: any[]): string;

        /**
         * Reads a line submitted in the console input bar and evaluates it as a JavaScript expression.
         * zh-CN: 读取用户在控制台输入栏提交的一行文本, 并作为 JavaScript 表达式求值后返回.
         * @example
         * let num = console.input("A number:");
         * console.log("%s squared is %s", num, num * num);
         * @since 6.8.0
         * @see console.rawInput
         */
        input(data?: any, ...args: any[]): any;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.verbose = function () {
         *     runtime.console.verbose(util.format.apply(util, arguments));
         * }；
         * @see org.autojs.autojs.core.console.ConsoleImpl.verbose
         */
        verbose(data?: any, ...text): void;

        /**
         * @example
         * console.log("Hello");
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.log = function () {
         *     runtime.console.log(util.format.apply(util, arguments));
         * };
         * @see org.autojs.autojs.core.console.ConsoleImpl.log
         */
        log(data?: any, ...text): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.into = function () {
         *     runtime.console.into(util.format.apply(util, arguments));
         * }；
         * @see org.autojs.autojs.core.console.ConsoleImpl.into
         */
        info(data?: any, ...text): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.warn = function () {
         *     runtime.console.warn(util.format.apply(util, arguments));
         * }；
         * @see org.autojs.autojs.core.console.ConsoleImpl.warn
         */
        warn(data?: any, ...text): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.error = function () {
         *     runtime.console.error(util.format.apply(util, arguments));
         * }；
         * @see org.autojs.autojs.core.console.ConsoleImpl.error
         */
        error(data?: any, ...text): void;

        /**
         * @deprecated
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.print = function () {
         *     runtime.console.print(android.util.Log.DEBUG, util.format.apply(util, arguments));
         * };
         */
        print(data?: any, ...text): void;

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
         * trace: (() => {
         *     return function captureStack(message, level) {
         *         let target = {};
         *         Error.captureStackTrace(target, captureStack);
         *         if (typeof level === 'string') {
         *             level = level.toUpperCase();
         *         }
         *         let msg = `${util.format(message)}\n${target.stack}`;
         *         switch (level) {
         *             case Log.VERBOSE:
         *             case 'VERBOSE':
         *                 _.console.verbose(msg);
         *                 break;
         *             case Log.DEBUG:
         *             case 'DEBUG':
         *                 _.console.debug(msg);
         *                 break;
         *             case Log.INFO:
         *             case 'INFO':
         *                 _.console.info(msg);
         *                 break;
         *             case Log.WARN:
         *             case 'WARN':
         *                 _.console.warn(msg);
         *                 break;
         *             case Log.ERROR:
         *             case 'ERROR':
         *                 _.console.error(msg);
         *                 break;
         *             default:
         *                 _.console.log(msg);
         *         }
         *     };
         * })()
         */
        trace(message: string, ...args): void;
        trace(message: string, level: 'verbose' | 'debug' | 'info' | 'warn' | 'error' | number): void;

        /**
         * Configuration of saving Auto.js logs to local storage (path, file name, etc...)
         * @param {{
         *     file?: string,
         *     filePattern?: '%m%n'|'%d - [%p::%c::%C] - %m%n'|string,
         *     immediateFlush?: boolean,
         *     maxBackupSize?: number,
         *     maxFileSize?: number,
         *     resetConfiguration?: boolean,
         *     rootLevel?: 'OFF'|'FATAL'|'ERROR'|'WARN'|'INFO'|'DEBUG'|'TRACE'|'ALL',
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
         *     let _lc = new LogConfigurator(); // org.autojs.autojs.core.console.log.LogConfigurator
         *     _lc.setRootLevel(Level.OFF); // org.autojs.autojs.core.console.log.Level
         *     _lc.setUseFileAppender(false);
         *     _lc.setResetConfiguration(true);
         *     _lc.configure();
         * }();
         * @example Source code summary (zh-CN: 源代码摘要)
         * console.setGlobalLogConfig = function (config) {
         *     let logConfigurator = new LogConfigurator(); // org.autojs.autojs.core.console.log.LogConfigurator
         *     if (config.file) {
         *         logConfigurator.setFileName(files.path(config.file));
         *         logConfigurator.setUseFileAppender(true);
         *     }
         *     logConfigurator.setFilePattern(option(config.filePattern, "%m%n"));
         *     logConfigurator.setMaxFileSize(option(config.maxFileSize, 512 << 10));
         *     logConfigurator.setImmediateFlush(option(config.immediateFlush, true));
         *     let rootLevel = option(config.rootLevel, "ALL");
         *     logConfigurator.setRootLevel(Level.valueOf(rootLevel.toUpperCase())); // org.autojs.autojs.core.console.log.Level
         *     logConfigurator.setMaxBackupSize(option(config.maxBackupSize, 5));
         *     logConfigurator.setResetConfiguration(option(config.resetConfiguration, true));
         *     logConfigurator.configure();
         * };
         * function option(value, def) {
         *     return value == undefined ? def : value;
         * };
         */
        setGlobalLogConfig(config: Console.GlobalLogConfig): void;

        resetGlobalLogConfig(): void;

        show(isAutoExpand?: boolean): this;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.console.hide.bind(runtime.console);
         */
        hide(): this;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.console.clear.bind(runtime.console);
         */
        clear(): this;

        reset(): this;

        expand(): this;

        collapse(): this;

        launch(): void;

        build(options?: Console.BuildOptions): org.autojs.autojs.core.console.ConsoleImpl.Configurator;

        /**
         * @example
         * console.show();
         * console.setSize(device.width / 2, device.height / 2);
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.console.setSize.bind(runtime.console);
         */
        setSize(width: number, height: number): this;

        /**
         * @example
         * console.show();
         * console.setPosition(100, 100);
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.console.setPosition.bind(runtime.console);
         */
        setPosition(x: number, y: number): this;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.console.setTitle.bind(runtime.console);
         */
        setTitle(title: string): this;

        setTitleTextSize(size: number): this;

        setTitleTextColor(color: OmniColor): this;

        setTitleBackgroundColor(color: OmniColor): this;

        setTitleBackgroundTint(color: OmniColor): this;

        setTitleBackgroundAlpha(alpha: number): this;

        resetTitleBackgroundAlpha(): this;

        setTitleIconsTint(color: OmniColor): this;

        setContentTextSize(size: number): this;

        // @ts-ignore
        setContentTextColor(colors: OmniColor): this;
        // @ts-ignore
        setContentTextColor(colors: OmniColor[]): this;
        // @ts-ignore
        setContentTextColor(colors: {
            verbose?: OmniColor;
            log?: OmniColor;
            info?: OmniColor;
            warn?: OmniColor;
            error?: OmniColor;
            assert?: OmniColor;
        }): this;
        // @ts-ignore
        setContentTextColor(verbose: OmniColor, log?: OmniColor, info?: OmniColor, warn?: OmniColor, error?: OmniColor, assert?: OmniColor): this;

        setContentBackgroundColor(color: OmniColor): this;

        setContentBackgroundTint(color: OmniColor): this;

        setContentBackgroundAlpha(alpha: number): this;

        resetContentBackgroundAlpha(): this;

        setTextSize(size: number): this;

        setTextColor(color: OmniColor): this;

        setBackgroundColor(color: OmniColor): this;

        setBackgroundTint(color: OmniColor): this;

        setBackgroundAlpha(alpha: number): this;

        resetBackgroundAlpha(): this;

        setExitOnClose(timeout: number): this;
        setExitOnClose(exitOnClose?: boolean): this;

        setTouchable(touchable?: boolean): this;

        /**
         * Whether the floating console keeps clear of the status bar (`setPosition(0, 0)` then lands right below it).
         * zh-CN: 浮动控制台是否避让状态栏 (避让时 `setPosition(0, 0)` 位于状态栏正下方).
         * @default true
         * @since 6.8.0
         */
        setAvoidStatusBar(avoid?: boolean): this;

        /**
         * Whether each log line is prefixed with its time (like `12:34:56.789/D: `).
         * zh-CN: 是否在每条日志前显示时间前缀 (如 `12:34:56.789/D: `).
         * @default false
         * @since 6.8.0
         */
        setTimeVisible(visible?: boolean): this;

        /**
         * Pattern of the time prefix (java.text.SimpleDateFormat); omitted or invalid pattern restores the default.
         * zh-CN: 时间前缀的格式 (java.text.SimpleDateFormat); 省略或无效时恢复默认.
         * @default "HH:mm:ss.SSS"
         * @since 6.8.0
         */
        setTimeFormat(pattern?: string): this;

        /**
         * Whether log lines are colored by level; `false` renders every level with the `log` color.
         * zh-CN: 是否按日志等级着色; 为 `false` 时所有等级使用 `log` 等级的颜色.
         * @default true
         * @since 6.8.0
         */
        setColorful(colorful?: boolean): this;

        /**
         * Whether the input bar stays visible even when no script is waiting for input.
         * zh-CN: 是否常驻显示输入栏 (即使没有脚本在等待输入).
         * @default false
         * @since 6.8.0
         */
        setInputVisible(visible?: boolean): this;

        printAllStackTrace(t: OmniThrowable): void;

    }

    namespace Console {

        type GlobalLogConfig = {
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
        };

        type BuildOptions = {
            size?: [width: number, height: number];
            position?: [x: number, y: number];
            title?: string;
            titleTextSize?: number;
            titleTextColor?: OmniColor;
            titleBackgroundColor?: OmniColor;
            titleBackgroundTint?: OmniColor;
            titleBackgroundAlpha?: number;
            titleIconsTint?: OmniColor;
            contentTextSize?: number;
            contentTextColor?: OmniColor | OmniColor[] | {
                verbose?: OmniColor;
                log?: OmniColor;
                info?: OmniColor;
                warn?: OmniColor;
                error?: OmniColor;
                assert?: OmniColor;
            };
            contentBackgroundColor?: OmniColor;
            contentBackgroundTint?: OmniColor;
            contentBackgroundAlpha?: number;
            textSize?: number;
            textColor?: OmniColor;
            backgroundColor?: OmniColor;
            backgroundTint?: OmniColor;
            backgroundAlpha?: number;
            exitOnClose?: number | boolean;
            touchable?: boolean;
            /** @since 6.8.0 */
            avoidStatusBar?: boolean;
            /** @since 6.8.0 */
            timeVisible?: boolean;
            /** @since 6.8.0 */
            timeFormat?: string;
            /** @since 6.8.0 */
            colorful?: boolean;
            /** @since 6.8.0 */
            inputVisible?: boolean;
        }

    }

}

/**
 * @example
 * log("Hello");
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.log = console.log.bind(console);
 * @see console.log
 */
declare function log(data?: any, ...text): void;

/**
 * @deprecated
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.print = console.print.bind(console);
 * @see console.print
 */
declare function print(data?: any, ...text): void;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.err = console.error.bind(console);
 * @see console.error
 */
declare function err(data?: any, ...text): void;

/**
 * @see console.warn
 */
declare function warn(data?: any, ...text): void;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.openConsole = console.show.bind(console);
 * @see console.show
 */
declare function openConsole(): void;

/**
 * @see console.show
 */
declare function showConsole(): void;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.clearConsole = console.clear.bind(console);
 * @see console.clear
 */
declare function clearConsole(): void;

/**
 * @see console.launch
 */
declare function launchConsole(): void;

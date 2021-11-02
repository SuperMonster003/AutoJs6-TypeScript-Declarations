// Type definitions for Auto.js internal module engines
//
// Project: https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../auto.js.d.ts" />

/**
 * @Source %autojs%/assets/modules/__engines__.js
 */

declare namespace Internal {
    interface Engines {
        /**
         * @example without extended module
         * engines.execScript("hello", "!" + function () {
         *     let argv = engines.myEngine().execArgv;
         *     let argv_info = [];
         *     for (let i in argv.information) {
         *         if (argv.information.hasOwnProperty(i)) {
         *             argv_info.push(i + ": " + argv.information[i]);
         *         }
         *     }
         *     alert(argv.title + "\n\n" + argv_info.join('\n'));
         * }.toString() + "()", {
         *     arguments: {
         *         title: "information",
         *         information: {
         *             name: "003",
         *             age: 3,
         *             born: "1333/3/3",
         *         },
         *     },
         * });
         * @example with extended module
         * enginesx.execScript("hello", "!" + function () {
         *     let argv = engines.myEngine().execArgv;
         *     let argv_info = [];
         *     for (let i in argv.information) {
         *         if (argv.information.hasOwnProperty(i)) {
         *             argv_info.push(i + ": " + argv.information[i]);
         *         }
         *     }
         *     alert(
         *         "continuation: " + engines.myEngine().hasFeature('continuation') + '\n\n' +
         *         argv.title + "\n\n" + argv_info.join('\n')
         *     );
         * }.toString() + "()", {
         *     scriptConfig: {
         *         useFeatures: ['continuation'],
         *     },
         *     arguments: {
         *         title : "information",
         *         information: {
         *             name: "003",
         *             age: 3,
         *             born: "1333/3/3",
         *         },
         *     },
         * });
         * @example Source code summary (zh-CN: 源代码摘要)
         * let rtEngines = __runtime__.engines;
         * engines.execScript = function (name, script, config) {
         *     return rtEngines.execScript(name, script, fillConfig(config));
         * };
         * function fillConfig(c) {
         *     let config = new com.stardust.autojs.execution.ExecutionConfig();
         *     c = c || {};
         *     c.path = c.path || files.cwd();
         *     if (c.path) {
         *         config.workingDirectory = c.path;
         *     }
         *     config.delay = c.delay || 0;
         *     config.interval = c.interval || 0;
         *     config.loopTimes = (c.loopTimes === undefined) ? 1 : c.loopTimes;
         *     if (c.arguments) {
         *         let arguments = c.arguments;
         *         for (let key in arguments) {
         *             if (arguments.hasOwnProperty(key)) {
         *                 config.setArgument(key, arguments[key]);
         *             }
         *         }
         *     }
         *     return config;
         * }
         * @see com.stardust.autojs.runtime.api.Engines.execScript
         */
        execScript(name: string, script: string, config?: Engines.ExecutionConfig): com.stardust.autojs.execution.ScriptExecution;

        /**
         * @example without extended module
         * engines.execScriptFile("./test.js", {
         *     arguments: {
         *         title: "information",
         *         information: {
         *             name: "003",
         *             age: 3,
         *             born: "1333/3/3",
         *         },
         *     },
         * });
         * @example with extended module
         * enginesx.execScript("./test.js", {
         *     scriptConfig: {
         *         useFeatures: ['continuation'],
         *     },
         *     arguments: {
         *         title : "information",
         *         information: {
         *             name: "003",
         *             age: 3,
         *             born: "1333/3/3",
         *         },
         *     },
         * });
         * @example Source code summary (zh-CN: 源代码摘要)
         * let rtEngines = __runtime__.engines;
         * engines.execScriptFile = function (path, config) {
         *     return rtEngines.execScriptFile(path, fillConfig(config));
         * };
         * function fillConfig(c) {
         *     let config = new com.stardust.autojs.execution.ExecutionConfig();
         *     c = c || {};
         *     c.path = c.path || files.cwd();
         *     if (c.path) {
         *         config.workingDirectory = c.path;
         *     }
         *     config.delay = c.delay || 0;
         *     config.interval = c.interval || 0;
         *     config.loopTimes = (c.loopTimes === undefined) ? 1 : c.loopTimes;
         *     if (c.arguments) {
         *         let arguments = c.arguments;
         *         for (let key in arguments) {
         *             if (arguments.hasOwnProperty(key)) {
         *                 config.setArgument(key, arguments[key]);
         *             }
         *         }
         *     }
         *     return config;
         * }
         * @see com.stardust.autojs.runtime.api.Engines.execScriptFile
         */
        execScriptFile(path: string, config?: Engines.ExecutionConfig): com.stardust.autojs.execution.ScriptExecution;

        /**
         * @example
         * engines.execAutoFile("./test.auto");
         * @example Source code summary (zh-CN: 源代码摘要)
         * let rtEngines = __runtime__.engines;
         * engines.execAutoFile = function (path, config) {
         *     return rtEngines.execAutoFile(path, fillConfig(config));
         * };
         * function fillConfig(c) {
         *     let config = new com.stardust.autojs.execution.ExecutionConfig();
         *     c = c || {};
         *     c.path = c.path || files.cwd();
         *     if (c.path) {
         *         config.workingDirectory = c.path;
         *     }
         *     config.delay = c.delay || 0;
         *     config.interval = c.interval || 0;
         *     config.loopTimes = (c.loopTimes === undefined) ? 1 : c.loopTimes;
         *     if (c.arguments) {
         *         let arguments = c.arguments;
         *         for (let key in arguments) {
         *             if (arguments.hasOwnProperty(key)) {
         *                 config.setArgument(key, arguments[key]);
         *             }
         *         }
         *     }
         *     return config;
         * }
         * @see com.stardust.autojs.runtime.api.Engines.execAutoFile
         */
        execAutoFile(path: string, config?: com.stardust.autojs.execution.ExecutionConfig): com.stardust.autojs.execution.ScriptExecution;

        /**
         * @example
         * console.log(engines.myEngine().execArgv);
         * @example Source code summary (zh-CN: 源代码摘要)
         * let rtEngines = __runtime__.engines;
         * engines.myEngine = function () {
         *     return rtEngines.myEngine();
         * };
         */
        myEngine(): com.stardust.autojs.engine.JavaScriptEngine;

        /**
         * @example
         * console.log(engines.all().filter((e) => {
         *     return e.getTag('exclusive_task') && e.id < engines.myEngine().id;
         * }));
         * @example Source code summary (zh-CN: 源代码摘要)
         * let rtEngines = __runtime__.engines;
         * engines.all = function () {
         *     return rtEngines.all();
         * };
         */
        all(): com.stardust.autojs.engine.ScriptEngine<any>[];

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * let rtEngines = __runtime__.engines;
         * engines.stopAll = rtEngines.stopAll.bind(rtEngines);
         */
        stopAll(): number;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * let rtEngines = __runtime__.engines;
         * engines.stopAllAndToast = rtEngines.stopAllAndToast.bind(rtEngines);
         */
        stopAllAndToast(): void;
    }
}

declare namespace Engines {
    interface ExecutionConfig {
        /** @default files.cwd() */
        path?: string | string[];
        /** @default 0 */
        delay?: number;
        /** @default 0 */
        interval?: number;
        /** @default 1 */
        loopTimes?: number;
        arguments?: object;
    }
}
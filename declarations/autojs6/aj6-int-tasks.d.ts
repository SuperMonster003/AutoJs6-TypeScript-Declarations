// Type definitions for AutoJs6 internal module tasks
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.5.4
//
// Last modified: Apr 17, 2022
// noinspection JSUnusedGlobalSymbols

/// <reference path="../ant-forest.d.ts" />
/// <reference path="../android.d.ts" />

/**
 * @Source %AutoJs6Assets%/modules/__tasks__.js
 */

declare namespace Internal {

    interface Tasks {

        addTask<T extends TimedTask$ | IntentTask$>(task: T): T;

        /**
         * @example
         * tasks.addDailyTask({
         *     time: Date.now() + 3.6e6,
         *     path: files.path('./test.js'),
         * });
         */
        addDailyTask(options?: Tasks.TimedTask.Daily): TimedTask$ | Promise<any> | null;

        /**
         * @example
         * tasks.addWeeklyTask({
         *     time: Date.now() + 3.6e6,
         *     path: files.path('./test.js'),
         *     daysOfWeek: [1, 3, 6, 7],
         * });
         */
        addWeeklyTask(options?: Tasks.TimedTask.Weekly): TimedTask$ | Promise<any> | null;

        /**
         * @example
         * tasks.addDisposableTask({
         *     path: engines.myEngine().source,
         *     date: Date.now() + 3.6e6,
         * });
         */
        addDisposableTask(options?: Tasks.TimedTask.Disposable): TimedTask$ | Promise<any> | null;

        /**
         * @example
         * tasks.addIntentTask({
         *     path: files.path('./test.js'),
         *     action: 'android.intent.action.BATTERY_CHANGED',
         * });
         */
        addIntentTask(options: Tasks.IntentTask.Basic): IntentTask$ | Promise<any> | null;

        getTimedTask(id: number): TimedTask$;

        getIntentTask(id: number): IntentTask$;

        removeTask<T extends TimedTask$ | IntentTask$>(task: T): T;

        removeTimedTask(id: number, options?: Tasks.TimedTask.Extension): TimedTask$ | Promise<any> | null;

        removeIntentTask(id: number, options?: Tasks.TimedTask.Extension): TimedTask$ | Promise<any> | null;

        updateTask<T extends TimedTask$>(task: T): T;

        queryTimedTasks(options?: { path?: string }): TimedTask$[];

        queryIntentTasks(options?: { path?: string, action?: string }): IntentTask$[];

        /**
         * @example
         * // [0, 1, 2, 4, 5] -- Sun, Mon, Tue, Thu, Fri
         * tasks.timeFlagToDays(55);
         * // [0, 1, 2, 3, 4, 5, 6] -- every day
         * tasks.timeFlagToDays(127);
         * // [] -- disposable
         * tasks.timeFlagToDays(0);
         */
        timeFlagToDays(flag: number): number[];

        /**
         * @example
         * // 23 -- Sun, Mon, Tue, Thu
         * tasks.daysToTimeFlag([0, 1, 2, 4]);
         * // 127 -- every day
         * tasks.daysToTimeFlag([0, 1, 2, 3, 4, 5, 6]);
         * // 0 -- disposable
         * tasks.daysToTimeFlag([]);
         */
        daysToTimeFlag(days: number[]): number;

    }

}

declare namespace Tasks {

    namespace TimedTask {

        interface Extension {

            isAsync?: boolean;

            callback?(task?: TimedTask$ | IntentTask$): any;

            condition?(): boolean;

        }

        interface Basic extends Extension {

            path: string;

            delay?: number;

            interval?: number;

            loopTimes?: number;

        }

        interface Daily extends Basic {

            time?: string | Date | number;

        }

        interface Weekly extends Daily {

            /**
             * Day(s) of week (like: [3, '四', 'Fri'])
             */
            daysOfWeek?: ('Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
                | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
                | '一' | '二' | '三' | '四' | '五' | '六' | '日' | string | number)[];

        }

        interface Disposable extends Basic {

            date?: string | Date | number;

        }
    }

    namespace IntentTask {

        interface Basic extends TimedTask.Extension {

            path: string;

            action?: Android.Intent.Action.Strings;

            dataType?: string;

            local?: boolean;

        }

    }
}

declare type TimedTask$ = org.autojs.autojs.timing.TimedTask;

declare type IntentTask$ = org.autojs.autojs.timing.IntentTask;
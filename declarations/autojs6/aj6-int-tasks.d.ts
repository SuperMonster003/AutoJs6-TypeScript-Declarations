// Type definitions for AutoJs6 internal module tasks
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Jul 27, 2026
// noinspection JSUnusedGlobalSymbols

/// <reference path="./index.d.ts" />
/// <reference path="../android.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/tasks/Tasks.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/tasks/WorkManager.kt
 */

declare namespace Internal {

    interface Tasks {

        addTask<T extends TimedTask$ | IntentTask$ | null | undefined>(task: T): Tasks.NullishToNull<T>;

        addTimedTask<TResult = TimedTask$>(options: Tasks.TimedTask.General<TResult>): Tasks.AddTaskResult<TimedTask$, TResult>;

        addDailyTask<TResult = TimedTask$>(options: Tasks.TimedTask.Daily<TResult>): Tasks.AddTaskResult<TimedTask$, TResult>;

        addWeeklyTask<TResult = TimedTask$>(options: Tasks.TimedTask.Weekly<TResult>): Tasks.AddTaskResult<TimedTask$, TResult>;

        addMonthlyTask<TResult = TimedTask$>(options: Tasks.TimedTask.Monthly<TResult>): Tasks.AddTaskResult<TimedTask$, TResult>;

        addYearlyTask<TResult = TimedTask$>(options: Tasks.TimedTask.Yearly<TResult>): Tasks.AddTaskResult<TimedTask$, TResult>;

        addDisposableTask<TResult = TimedTask$>(options: Tasks.TimedTask.Disposable<TResult>): Tasks.AddTaskResult<TimedTask$, TResult>;

        addCountdownTask<TResult = TimedTask$>(options: Tasks.TimedTask.Countdown<TResult>): Tasks.AddTaskResult<TimedTask$, TResult>;

        addIntentTask<TResult = IntentTask$>(options: Tasks.IntentTask.Basic<TResult>): Tasks.AddTaskResult<IntentTask$, TResult>;

        addBroadcastIntentTask<TResult = IntentTask$>(options: Tasks.IntentTask.Basic<TResult>): Tasks.AddTaskResult<IntentTask$, TResult>;

        getTimedTask(id: number): TimedTask$ | null;

        getIntentTask(id: number): IntentTask$ | null;

        removeTask<T extends TimedTask$ | IntentTask$ | null | undefined>(task: T): T;

        removeTimedTask(id: number): TimedTask$ | null;

        removeTimedTask<TResult = TimedTask$ | null>(
            id: number,
            options: Tasks.Fulfillment<TimedTask$ | null, TResult>,
        ): Tasks.FulfillmentResult<TimedTask$ | null, TResult>;

        removeIntentTask(id: number): IntentTask$ | null;

        removeIntentTask<TResult = IntentTask$ | null>(
            id: number,
            options: Tasks.Fulfillment<IntentTask$ | null, TResult>,
        ): Tasks.FulfillmentResult<IntentTask$ | null, TResult>;

        updateTask<T extends TimedTask$ | IntentTask$ | null | undefined>(task: T): Tasks.NullishToNull<T>;

        queryTimedTasks(options?: Tasks.Query.Timed): TimedTask$[];

        queryIntentTasks(options?: Tasks.Query.Intent): IntentTask$[];

        timeFlagToDays(flag: number): number[];

        daysToTimeFlag(days: number[]): number;

    }

    /**
     * Auto.js Pro compatible synchronous task facade.
     * Completion callback and async options are accepted for compatibility but ignored.
     */
    interface WorkManager {

        addDailyTask<TResult = TimedTask$>(options: Tasks.TimedTask.Daily<TResult>): TimedTask$;

        addWeeklyTask<TResult = TimedTask$>(options: Tasks.TimedTask.Weekly<TResult>): TimedTask$;

        addDisposableTask<TResult = TimedTask$>(options: Tasks.TimedTask.Disposable<TResult>): TimedTask$;

        addIntentTask<TResult = IntentTask$>(options: Tasks.IntentTask.Basic<TResult>): IntentTask$;

        addBroadcastIntentTask<TResult = IntentTask$>(options: Tasks.IntentTask.Basic<TResult>): IntentTask$;

        getTimedTask(id: number): TimedTask$ | null;

        getIntentTask(id: number): IntentTask$ | null;

        removeTimedTask(id: number): boolean | null;

        removeIntentTask(id: number): boolean | null;

        queryTimedTasks(options?: Tasks.Query.Timed): TimedTask$[];

        queryIntentTasks(options?: Tasks.Query.Intent): IntentTask$[];

    }

}

declare namespace Tasks {

    type NullishToNull<T> = T extends null | undefined ? null : T;

    type AsyncTaskResult = ReturnType<Internal.Threads["start"]>;

    interface Fulfillment<TTask, TResult = TTask> {

        callback?: (task: TTask) => TResult;

        isAsync?: boolean;
        async?: boolean;

    }

    type FulfillmentResult<TTask, TResult = TTask> = TTask | TResult | AsyncTaskResult;

    type AddTaskResult<TTask, TResult = TTask> = FulfillmentResult<TTask, TResult>;

    namespace Query {

        interface Timed {

            path?: string;

        }

        interface Intent extends Timed {

            action?: Android.Intent.Action.Strings | string;

        }

    }

    namespace TimedTask {

        type DateTime = string | Date | number;

        type RepeatModeCode = 0 | 1 | 2 | 3 | 4 | 5;

        type RepeatModeName =
            | "disposable"
            | "once"
            | "onetime"
            | "oneoff"
            | "countdown"
            | "after"
            | "runafter"
            | "later"
            | "daily"
            | "day"
            | "weekly"
            | "week"
            | "monthly"
            | "month"
            | "yearly"
            | "year"
            | "annually"
            | "annual";

        /**
         * Runtime names are case-insensitive and ignore spaces, "_" and "-".
         */
        type RepeatMode = RepeatModeCode | RepeatModeName | (string & {});

        interface RepeatModeAliases {

            repeatMode?: RepeatMode;
            repeat?: RepeatMode;
            type?: RepeatMode;
            mode?: RepeatMode;

        }

        type RepeatModeSelector =
            | (RepeatModeAliases & { repeatMode: RepeatMode })
            | (RepeatModeAliases & { repeat: RepeatMode })
            | (RepeatModeAliases & { type: RepeatMode })
            | (RepeatModeAliases & { mode: RepeatMode });

        type EndModeCode = 0 | 1 | 2;

        type EndModeName =
            | "forever"
            | "always"
            | "never"
            | "untildate"
            | "until"
            | "date"
            | "count"
            | "times"
            | "number"
            | "numberofevents"
            | "fornumberofevents";

        /**
         * Runtime names are case-insensitive and ignore spaces, "_" and "-".
         */
        type EndMode = EndModeCode | EndModeName | (string & {});

        interface RepeatEnd {

            endMode?: EndMode;
            ends?: EndMode;
            end?: EndMode;
            repeatEnd?: EndMode;

            untilDate?: DateTime;
            until?: DateTime;
            endDate?: DateTime;

            times?: number;
            endCount?: number;
            count?: number;

        }

        interface DurationFields {

            days?: number;
            day?: number;
            d?: number;
            delayDays?: number;

            hours?: number;
            hour?: number;
            hr?: number;
            h?: number;
            delayHours?: number;

            minutes?: number;
            minute?: number;
            min?: number;
            m?: number;
            delayMinutes?: number;

            seconds?: number;
            second?: number;
            sec?: number;
            s?: number;
            delaySeconds?: number;

            milliseconds?: number;
            millisecond?: number;
            millis?: number;
            ms?: number;
            delayMillis?: number;

        }

        type CountdownDuration = DurationFields;

        type Duration = number | CountdownDuration;

        interface DurationAliases {

            after?: Duration;
            countdown?: Duration;
            timeOffset?: Duration;
            duration?: Duration;
            runAfter?: Duration;

        }

        interface Time {

            time?: DateTime;
            date?: DateTime;

        }

        interface Basic<TResult = TimedTask$> extends Tasks.Fulfillment<TimedTask$, TResult> {

            path: string;

            delay?: number;

            interval?: number;

            loopTimes?: number;

        }

        interface GeneralFields extends Time, RepeatEnd, DurationAliases, DurationFields {

            daysOfWeek?: (string | number)[];

            dayOfMonth?: number;
            day?: number;

            monthOfYear?: number;
            month?: number;

        }

        type General<TResult = TimedTask$> = Basic<TResult> & GeneralFields & RepeatModeSelector;

        interface Daily<TResult = TimedTask$> extends Basic<TResult>, Time, RepeatEnd {

        }

        interface Weekly<TResult = TimedTask$> extends Daily<TResult> {

            /**
             * Day(s) of week, for example [3, 'Thu', 'Fri'].
             */
            daysOfWeek?: (string | number)[];

        }

        interface Monthly<TResult = TimedTask$> extends Daily<TResult> {

            dayOfMonth?: number;
            day?: number;

        }

        interface Yearly<TResult = TimedTask$> extends Monthly<TResult> {

            monthOfYear?: number;
            month?: number;

        }

        interface Disposable<TResult = TimedTask$> extends Basic<TResult>, Time, DurationAliases {

        }

        interface Countdown<TResult = TimedTask$> extends Basic<TResult>, DurationAliases, DurationFields {

        }

    }

    namespace IntentTask {

        interface Basic<TResult = IntentTask$> extends Tasks.Fulfillment<IntentTask$, TResult> {

            path: string;

            action?: Android.Intent.Action.Strings | string;

            category?: string;

            dataType?: string;

            isLocal?: boolean;
            local?: boolean;

        }

    }
}

declare type TimedTask$ = org.autojs.autojs.timing.TimedTask;

declare type IntentTask$ = org.autojs.autojs.timing.IntentTask;

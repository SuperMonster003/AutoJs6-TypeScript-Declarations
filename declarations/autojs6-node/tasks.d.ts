declare module "tasks" {
  namespace tasks {
    export type RepeatMode = "disposable" | "once" | "daily" | "weekly" | "monthly" | "yearly" | "countdown" | 0 | 1 | 2 | 3 | 4 | 5;
    export type DateInput = Date | number | string;
    export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";
    export interface TimedTaskOptions extends AutoJs6Node.BridgeCallOptions {
      path?: string; scriptPath?: string; entry?: string;
      repeatMode?: RepeatMode;
      date?: DateInput;
      /** Local HH:mm[:ss[.SSS]], Date or epoch milliseconds. */
      time?: DateInput;
      delayMs?: number;
      daysOfWeek?: readonly Weekday[];
      dayOfMonth?: number; monthOfYear?: number;
      endMode?: "forever" | "count" | "until_date" | "date";
      times?: number; untilDate?: string;
      delay?: number; interval?: number; loopTimes?: number;
    }
    export interface IntentTaskOptions extends AutoJs6Node.BridgeCallOptions {
      path?: string; scriptPath?: string; entry?: string;
      action: string; category?: string | null; dataType?: string | null; local?: boolean; isLocal?: boolean;
    }
    export interface TimedTask {
      readonly id: number; readonly kind: "timed"; readonly path: string;
      readonly repeatMode: Exclude<RepeatMode, number | "once">;
      readonly millis: number; readonly timeFlag: number; readonly nextTime: number; readonly scheduled: boolean;
      readonly finishedTimes: number; readonly sourceKind: string | null; readonly projectRoot: string | null;
      readonly options: Readonly<TimedTaskOptions>;
    }
    export interface TriggerIntent {
      readonly action: string | null; readonly data: string | null; readonly type: string | null;
      readonly packageName: string | null; readonly flags: number; readonly categories: readonly string[];
      readonly extras: Readonly<Record<string, AutoJs6Node.JsonValue>>; readonly receivedAt: number;
    }
    export interface IntentTask {
      readonly id: number; readonly kind: "intent"; readonly path: string; readonly action: string;
      readonly category: string | null; readonly dataType: string | null; readonly local: boolean;
      readonly options: Readonly<IntentTaskOptions>; readonly lastIntent: TriggerIntent | null;
    }
    export type Task = TimedTask | IntentTask;
    export interface QueryOptions extends AutoJs6Node.BridgeCallOptions { path?: string; scriptPath?: string; repeatMode?: RepeatMode; action?: string; }
    export interface LocalIntent {
      action: string; category?: string | null; categories?: readonly string[]; type?: string | null; data?: string | null;
      extras?: Readonly<Record<string, string | number | boolean | null>>;
    }
    export interface TasksModule {
      addTask(options: TimedTaskOptions | IntentTaskOptions): Promise<Task>;
      addTimedTask(options: TimedTaskOptions & { repeatMode: RepeatMode }): Promise<TimedTask>;
      addDailyTask(options: TimedTaskOptions): Promise<TimedTask>;
      addWeeklyTask(options: TimedTaskOptions & { daysOfWeek: readonly Weekday[] }): Promise<TimedTask>;
      addMonthlyTask(options: TimedTaskOptions & { dayOfMonth: number }): Promise<TimedTask>;
      addYearlyTask(options: TimedTaskOptions & { dayOfMonth: number; monthOfYear: number }): Promise<TimedTask>;
      addDisposableTask(options: TimedTaskOptions): Promise<TimedTask>;
      addCountdownTask(options: TimedTaskOptions & { delayMs: number }): Promise<TimedTask>;
      addIntentTask(options: IntentTaskOptions): Promise<IntentTask>;
      addBroadcastIntentTask(options: IntentTaskOptions): Promise<IntentTask>;
      queryTasks(options?: QueryOptions): Promise<readonly Task[]>;
      queryTimedTasks(options?: QueryOptions): Promise<readonly TimedTask[]>;
      queryIntentTasks(options?: QueryOptions): Promise<readonly IntentTask[]>;
      getTimedTask(id: number | string | TimedTask, options?: AutoJs6Node.BridgeCallOptions): Promise<TimedTask | null>;
      getIntentTask(id: number | string | IntentTask, options?: AutoJs6Node.BridgeCallOptions): Promise<IntentTask | null>;
      removeTask(task: Task | number | string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      removeTimedTask(id: number | string | TimedTask, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      removeIntentTask(id: number | string | IntentTask, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      updateTask(task: TimedTask, patch?: TimedTaskOptions): Promise<TimedTask | null>;
      updateTask(task: IntentTask, patch?: Partial<IntentTaskOptions>): Promise<IntentTask | null>;
      updateTask(task: Task, patch?: TimedTaskOptions | Partial<IntentTaskOptions>): Promise<Task | null>;
      sendLocalBroadcastSync(action: string | LocalIntent, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      daysToTimeFlag(days: readonly (0 | 1 | 2 | 3 | 4 | 5 | 6)[]): number;
      timeFlagToDays(flag: number): readonly number[];
    }
  }
  const tasks: tasks.TasksModule;
  export = tasks;
}
declare module "autojs6:tasks" { import tasks = require("tasks"); export = tasks; }

declare module "worker_threads" {
  /**
   * Node's own worker_threads module. The root script receives the native module object
   * with the AutoJs6 additions WorkerPool, policy, nativeAvailable and diagnostics; inside a
   * Worker, require("worker_threads") is the native module without those additions.
   */
  namespace workerThreads {
    export type Transferable = ArrayBuffer | MessagePort | { readonly [key: string]: unknown };
    export type ResourceLimits = AutoJs6Node.WorkerThreadsResourceLimits;

    /** A URL object or anything with an href, such as new URL("./task.mjs", import.meta.url). */
    export interface UrlLike {
      readonly href: string;
    }

    export interface StreamLike {
      setEncoding(encoding?: string): this;
      pipe<T>(destination: T): T;
      on(event: string, listener: (...args: any[]) => void): this;
      once(event: string, listener: (...args: any[]) => void): this;
    }

    export interface WritableLike {
      write(chunk: string | Uint8Array, callback?: (error?: Error | null) => void): boolean;
      end(chunk?: string | Uint8Array, callback?: () => void): this;
      on(event: string, listener: (...args: any[]) => void): this;
    }

    export interface WorkerOptions {
      argv?: readonly unknown[];
      /** An object, or SHARE_ENV to share process.env with the parent. */
      env?: Readonly<Record<string, string | undefined>> | typeof SHARE_ENV;
      /** Treat the filename argument as JavaScript source. */
      eval?: boolean;
      execArgv?: readonly string[];
      stdin?: boolean;
      stdout?: boolean;
      stderr?: boolean;
      workerData?: unknown;
      trackUnmanagedFds?: boolean;
      transferList?: readonly Transferable[];
      /** The request's resourceLimits are defaults; these values override them either way. */
      resourceLimits?: ResourceLimits;
      name?: string;
    }

    export interface EventLoopUtilization {
      readonly idle: number;
      readonly active: number;
      readonly utilization: number;
    }

    export class MessagePort {
      postMessage(value: unknown, transferList?: readonly Transferable[]): void;
      start(): void;
      close(): void;
      ref(): this;
      unref(): this;
      hasRef(): boolean;
      on(event: "message", listener: (value: any) => void): this;
      on(event: "messageerror", listener: (error: Error) => void): this;
      on(event: "close", listener: () => void): this;
      once(event: "message", listener: (value: any) => void): this;
      once(event: "messageerror", listener: (error: Error) => void): this;
      once(event: "close", listener: () => void): this;
      off(event: "message" | "messageerror" | "close", listener: (...args: any[]) => void): this;
      addListener(event: "message", listener: (value: any) => void): this;
      addListener(event: "messageerror" | "close", listener: (...args: any[]) => void): this;
      removeListener(event: "message" | "messageerror" | "close", listener: (...args: any[]) => void): this;
      removeAllListeners(event?: "message" | "messageerror" | "close"): this;
    }

    export class MessageChannel {
      readonly port1: MessagePort;
      readonly port2: MessagePort;
    }

    export class BroadcastChannel {
      constructor(name: unknown);
      readonly name: string;
      onmessage: ((event: { readonly data: unknown }) => void) | null;
      onmessageerror: ((event: { readonly data: unknown }) => void) | null;
      postMessage(message: unknown): void;
      close(): void;
      ref(): this;
      unref(): this;
    }

    export class Worker {
      constructor(filename: string | UrlLike, options?: WorkerOptions);
      readonly threadId: number;
      readonly threadName: string | null;
      readonly resourceLimits?: ResourceLimits;
      readonly stdin: WritableLike | null;
      readonly stdout: StreamLike;
      readonly stderr: StreamLike;
      readonly performance: {
        eventLoopUtilization(utilization1?: EventLoopUtilization, utilization2?: EventLoopUtilization): EventLoopUtilization;
      };
      postMessage(value: unknown, transferList?: readonly Transferable[]): void;
      ref(): void;
      unref(): void;
      /** Resolves with the exit code. */
      terminate(): Promise<number>;
      getHeapSnapshot(options?: { exposeInternals?: boolean; exposeNumericValues?: boolean }): Promise<StreamLike>;
      on(event: "online", listener: () => void): this;
      on(event: "message", listener: (value: any) => void): this;
      on(event: "messageerror" | "error", listener: (error: Error) => void): this;
      on(event: "exit", listener: (exitCode: number) => void): this;
      once(event: "online", listener: () => void): this;
      once(event: "message", listener: (value: any) => void): this;
      once(event: "messageerror" | "error", listener: (error: Error) => void): this;
      once(event: "exit", listener: (exitCode: number) => void): this;
      off(event: "online" | "message" | "messageerror" | "error" | "exit", listener: (...args: any[]) => void): this;
      addListener(event: "online" | "message" | "messageerror" | "error" | "exit", listener: (...args: any[]) => void): this;
      removeListener(event: "online" | "message" | "messageerror" | "error" | "exit", listener: (...args: any[]) => void): this;
      removeAllListeners(event?: "online" | "message" | "messageerror" | "error" | "exit"): this;
    }

    export interface LockInfo {
      readonly name: string;
      readonly mode: "exclusive" | "shared";
      readonly clientId: string;
    }

    export interface LockManager {
      request<T>(name: string, callback: (lock: LockInfo | null) => T | Promise<T>): Promise<T>;
      request<T>(name: string, options: { mode?: "exclusive" | "shared"; ifAvailable?: boolean; steal?: boolean; signal?: AutoJs6Node.AbortSignalLike }, callback: (lock: LockInfo | null) => T | Promise<T>): Promise<T>;
      query(): Promise<{ readonly held: readonly LockInfo[]; readonly pending: readonly LockInfo[] }>;
    }

    export const isMainThread: boolean;
    export const isInternalThread: boolean;
    /** The parent's port inside a Worker; null in the root script. */
    export const parentPort: MessagePort | null;
    /** Limits of this Worker; an empty object in the root script. */
    export const resourceLimits: ResourceLimits;
    export const SHARE_ENV: unique symbol;
    export const threadId: number;
    export const threadName: string | null;
    /** The workerData option of this Worker; undefined in the root script. */
    export const workerData: any;
    export const locks: LockManager;
    export function getEnvironmentData(key: unknown): unknown;
    export function setEnvironmentData(key: unknown, value?: unknown): void;
    export function markAsUncloneable(value: object): void;
    export function markAsUntransferable(value: object): void;
    export function isMarkedAsUntransferable(value: object): boolean;
    export function moveMessagePortToContext(port: MessagePort, contextifiedSandbox: object): MessagePort;
    export function receiveMessageOnPort(port: MessagePort): { readonly message: any } | undefined;
    export function postMessageToThread(threadId: number, value: unknown, transferList?: readonly Transferable[], timeout?: number): Promise<void>;

    // AutoJs6 additions (root script only).

    export type WorkerPoolErrorCode =
      | "ERR_AUTOJS6_WORKER_POOL_CLOSED"
      | "ERR_AUTOJS6_WORKER_POOL_QUEUE_FULL"
      | "ERR_AUTOJS6_WORKER_POOL_TASK_TIMEOUT"
      | "ERR_AUTOJS6_WORKER_POOL_TASK_CANCELLED"
      | "ERR_AUTOJS6_WORKER_POOL_TASK_FAILED";

    export interface WorkerPoolOptions {
      /** Workers started with the pool; default 0. */
      minWorkers?: number;
      /** Workers running at once; default the CPU parallelism (os.availableParallelism()). */
      maxWorkers?: number;
      /** Idle Workers above minWorkers end after this many milliseconds, 0..60000; default 1000. */
      idleTimeoutMs?: number;
      /** Default task deadline; 0 (the default) means none. */
      taskTimeoutMs?: number;
      /** Queued tasks allowed; null or absent (the default) means no limit. */
      queueLimit?: number | null;
      workerData?: unknown;
      resourceLimits?: ResourceLimits;
    }

    export interface WorkerPoolRunOptions {
      transferList?: readonly Transferable[];
      /** Overrides taskTimeoutMs for this task; 0 means none. A timed-out task ends its Worker. */
      timeoutMs?: number;
    }

    /** run() result: settles with the Worker's reply value. */
    export interface WorkerPoolTask<T> extends Promise<T> {
      /** Removes a queued task or ends the Worker running it; false when the task already settled. */
      cancel(): boolean;
    }

    /** What a pool Worker receives through parentPort for each task. */
    export interface WorkerPoolTaskMessage<TValue = any> {
      readonly __autojs6PoolTaskId: number;
      readonly value: TValue;
    }

    /** What a pool Worker posts back; a non-null error rejects the task with ERR_AUTOJS6_WORKER_POOL_TASK_FAILED. */
    export type WorkerPoolReplyMessage<TResult = unknown> =
      | { readonly __autojs6PoolTaskId: number; readonly value: TResult }
      | { readonly __autojs6PoolTaskId: number; readonly error: string | { readonly message?: string; readonly code?: string } };

    export interface WorkerPoolDiagnostics {
      readonly closed: boolean;
      readonly workerCount: number;
      readonly idleWorkerCount: number;
      readonly busyWorkerCount: number;
      readonly queuedTaskCount: number;
      readonly createdWorkerCount: number;
      readonly completedTaskCount: number;
      readonly cancelledTaskCount: number;
      readonly timedOutTaskCount: number;
    }

    export interface WorkerPool {
      run<T = unknown>(value: unknown, options?: WorkerPoolRunOptions): WorkerPoolTask<T>;
      diagnostics(): WorkerPoolDiagnostics;
      /** Rejects queued tasks with ERR_AUTOJS6_WORKER_POOL_CLOSED and ends every Worker. */
      close(): Promise<void>;
      /** Same as close(). */
      shutdown(): Promise<void>;
    }

    export interface WorkerPoolConstructor {
      new (filename: string | UrlLike, options?: WorkerPoolOptions): WorkerPool;
      (filename: string | UrlLike, options?: WorkerPoolOptions): WorkerPool;
      readonly prototype: WorkerPool;
    }

    export interface WorkerThreadsDiagnostics {
      readonly activeWorkerCount: number;
      readonly maxActiveWorkerCount: number;
      readonly createdCount: number;
      readonly terminatedCount: number;
      readonly startupTimeoutCount: number;
      readonly rejectedByPolicyCount: number;
      readonly cleanupRequestedCount: number;
      readonly cleanupTerminateRequestedCount: number;
      readonly cleanupErrorCount: number;
      readonly cleanupPendingMessageRejectedCount: number;
      readonly activeMessagePortCount: number;
      readonly maxActiveMessagePortCount: number;
      readonly messagePortCreatedCount: number;
      readonly messagePortClosedCount: number;
      readonly messageRejectedCount: number;
      readonly activeWorkerPoolCount: number;
      readonly maxActiveWorkerPoolCount: number;
      readonly workerPoolCreatedCount: number;
      readonly workerPoolClosedCount: number;
      readonly workerPoolTaskCompletedCount: number;
      readonly workerPoolTaskCancelledCount: number;
      readonly workerPoolTaskTimeoutCount: number;
      readonly workerPoolQueueRejectedCount: number;
      readonly lastPolicyRejection: string;
      readonly lastMessageRejection: string;
    }

    /**
     * Reuses Workers for tasks: each run(value) goes to an idle Worker as a
     * WorkerPoolTaskMessage, and the Worker answers with a WorkerPoolReplyMessage
     * carrying the same __autojs6PoolTaskId. Root script only.
     */
    export const WorkerPool: WorkerPoolConstructor;
    /** Worker policy: builtins, Worker fs / network / bridge routes, WorkerPool and resourceLimits defaults. Root script only. */
    export const policy: AutoJs6Node.WorkerThreadsPolicy;
    /** Whether native Workers are available. Root script only. */
    export const nativeAvailable: boolean;
    /** Worker, MessagePort and WorkerPool counters of this execution. Root script only. */
    export function diagnostics(): WorkerThreadsDiagnostics;
  }

  export = workerThreads;
}

declare module "node:worker_threads" {
  import workerThreads = require("worker_threads");
  export = workerThreads;
}

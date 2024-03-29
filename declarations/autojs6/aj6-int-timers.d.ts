// Type definitions for AutoJs6 internal module timers
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../index.d.ts" />

/**
 * @Source %AutoJs6Assets%/modules/__timers__.js
 */

declare namespace Internal {

    interface Timers extends org.autojs.autojs.runtime.api.Timers {

        /**
         * Replacement of setInterval() with functional timeout supported
         * @param listener
         * @param interval=200
         * @param timeout=Infinity
         * @param callback
         * @example
         * // print 'hello' every 1 second for 5 (or 4 sometimes) times
         * timers.setIntervalExt(() => console.log('hello'), 1e3, 5e3);
         * @example
         * timers.setIntervalExt(() => log('Good luck comes later...'), 100, () => {
         *     let num = Math.random() * 100 + 1;
         *     return num > 90 && Math.floor(num);
         * }, res => log('Your lucky number is ' + res));
         * @return {number}
         * @see https://dev.to/akanksha_9560/why-not-to-use-setinterval--2na9
         */
        setIntervalExt(listener: Function, interval?: number, timeout?: number | (() => boolean), callback?: Function): number;

    }

}

/**
 * Method loop() has been deprecated and has no effect
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.loop = function () {
 *     console.warn('loop() has been deprecated and has no effect. Remove it from your code.');
 * };
 * @deprecated
 */
declare function loop(): void;

/**
 * @example
 * let imd_id = setImmediate((msg) => {
 *     toast(msg);
 *     clearImmediate(imd_id);
 * }, "hello");
 * @example Source code summary (zh-CN: 源代码摘要)
 * private Threads mThreads;
 * private Timer mMainTimer;
 * private Timer mUiTimer;
 * public boolean clearImmediate(int id) {
 *     return getTimerForCurrentThread().clearImmediate(id);
 * }
 * public Timer getTimerForCurrentThread() {
 *     return getTimerForThread(Thread.currentThread());
 * }
 * public Timer getTimerForThread(Thread thread) {
 *     if (thread == mThreads.getMainThread()) {
 *         return mMainTimer;
 *     }
 *     Timer timer = TimerThread.getTimerForThread(thread);
 *     if (timer == null && Looper.myLooper() == Looper.getMainLooper()) {
 *         return mUiTimer;
 *     }
 *     return timer;
 * }
 * @see android.os.Looper
 * @see org.autojs.autojs.core.looper.Timer
 * @see org.autojs.autojs.core.looper.TimerThread
 * @see org.autojs.autojs.runtime.api.Threads
 */
declare function clearImmediate(id: number): boolean;

/**
 * @example
 * let i = 0;
 * let itv_id = setInterval((max) => {
 *     let m = max || 20;
 *     i < m ? console.log(i += 1) : (clearInterval(itv_id), toast(i));
 * }, 100, 9);
 * @example Source code summary (zh-CN: 源代码摘要)
 * private Threads mThreads;
 * private Timer mMainTimer;
 * private Timer mUiTimer;
 * public boolean clearInterval(int id) {
 *     return getTimerForCurrentThread().clearInterval(id);
 * }
 * public Timer getTimerForCurrentThread() {
 *     return getTimerForThread(Thread.currentThread());
 * }
 * public Timer getTimerForThread(Thread thread) {
 *     if (thread == mThreads.getMainThread()) {
 *         return mMainTimer;
 *     }
 *     Timer timer = TimerThread.getTimerForThread(thread);
 *     if (timer == null && Looper.myLooper() == Looper.getMainLooper()) {
 *         return mUiTimer;
 *     }
 *     return timer;
 * }
 * @see android.os.Looper
 * @see org.autojs.autojs.core.looper.Timer
 * @see org.autojs.autojs.core.looper.TimerThread
 * @see org.autojs.autojs.runtime.api.Threads
 */
declare function clearInterval(id: number): boolean;

/**
 * @example
 * let tt_id = setTimeout((msg) => {
 *     toast(msg);
 *     clearTimeout(tt_id);
 * }, 10, "hello");
 * @example Source code summary (zh-CN: 源代码摘要)
 * private Threads mThreads;
 * private Timer mMainTimer;
 * private Timer mUiTimer;
 * public boolean clearTimeout(int id) {
 *     return getTimerForCurrentThread().clearTimeout(id);
 * }
 * public Timer getTimerForCurrentThread() {
 *     return getTimerForThread(Thread.currentThread());
 * }
 * public Timer getTimerForThread(Thread thread) {
 *     if (thread == mThreads.getMainThread()) {
 *         return mMainTimer;
 *     }
 *     Timer timer = TimerThread.getTimerForThread(thread);
 *     if (timer == null && Looper.myLooper() == Looper.getMainLooper()) {
 *         return mUiTimer;
 *     }
 *     return timer;
 * }
 * @see android.os.Looper
 * @see org.autojs.autojs.core.looper.Timer
 * @see org.autojs.autojs.core.looper.TimerThread
 * @see org.autojs.autojs.runtime.api.Threads
 */
declare function clearTimeout(id: number): boolean;

/**
 * @example
 * let imd_id = setImmediate((msg) => {
 *     toast(msg);
 *     clearImmediate(imd_id);
 * }, "hello");
 * @example Source code summary (zh-CN: 源代码摘要)
 * private Threads mThreads;
 * private Timer mMainTimer;
 * private Timer mUiTimer;
 * public int setImmediate(Object listener, Object... args) {
 *     return getTimerForCurrentThread().setImmediate(listener, args);
 * }
 * public Timer getTimerForCurrentThread() {
 *     return getTimerForThread(Thread.currentThread());
 * }
 * public Timer getTimerForThread(Thread thread) {
 *     if (thread == mThreads.getMainThread()) {
 *         return mMainTimer;
 *     }
 *     Timer timer = TimerThread.getTimerForThread(thread);
 *     if (timer == null && Looper.myLooper() == Looper.getMainLooper()) {
 *         return mUiTimer;
 *     }
 *     return timer;
 * }
 * @see android.os.Looper
 * @see org.autojs.autojs.core.looper.Timer
 * @see org.autojs.autojs.core.looper.TimerThread
 * @see org.autojs.autojs.runtime.api.Threads
 */
declare function setImmediate(listener: any, ...args: any[]): number;

/**
 * @example
 * setTimeout(() => console.log(0), 0);
 * console.log(1);
 * setTimeout(() => console.log(2), 500);
 * console.log(3);
 * setTimeout(() => console.log(4), 300);
 * setTimeout(() => console.log(5), 100);
 * console.log(6);
 * console.log(7);
 * // result: 1, 3, 6, 7, 0, 5, 4, 2
 * @example
 * let tt_id = setTimeout((msg) => {
 *     toast(msg);
 *     clearTimeout(tt_id);
 * }, 10, "hello");
 * @example Source code summary (zh-CN: 源代码摘要)
 * private Threads mThreads;
 * private Timer mMainTimer;
 * private Timer mUiTimer;
 * public int setTimeout(Object callback, long delay, Object... args) {
 *     return getTimerForCurrentThread().setTimeout(callback, delay, args);
 * }
 * public Timer getTimerForCurrentThread() {
 *     return getTimerForThread(Thread.currentThread());
 * }
 * public Timer getTimerForThread(Thread thread) {
 *     if (thread == mThreads.getMainThread()) {
 *         return mMainTimer;
 *     }
 *     Timer timer = TimerThread.getTimerForThread(thread);
 *     if (timer == null && Looper.myLooper() == Looper.getMainLooper()) {
 *         return mUiTimer;
 *     }
 *     return timer;
 * }
 * @see android.os.Looper
 * @see org.autojs.autojs.core.looper.Timer
 * @see org.autojs.autojs.core.looper.TimerThread
 * @see org.autojs.autojs.runtime.api.Threads
 */
declare function setTimeout(callback: any, delay: number, ...args: any[]): number;

/**
 * @example
 * let i = 0;
 * let itv_id = setInterval((max) => {
 *     let m = max || 20;
 *     i < m ? console.log(i += 1) : (clearInterval(itv_id), toast(i));
 * }, 100, 9);
 * @example Source code summary (zh-CN: 源代码摘要)
 * private Threads mThreads;
 * private Timer mMainTimer;
 * private Timer mUiTimer;
 * public int setInterval(Object listener, long interval, Object... args) {
 *     return getTimerForCurrentThread().setInterval(listener, interval, args);
 * }
 * public Timer getTimerForCurrentThread() {
 *     return getTimerForThread(Thread.currentThread());
 * }
 * public Timer getTimerForThread(Thread thread) {
 *     if (thread == mThreads.getMainThread()) {
 *         return mMainTimer;
 *     }
 *     Timer timer = TimerThread.getTimerForThread(thread);
 *     if (timer == null && Looper.myLooper() == Looper.getMainLooper()) {
 *         return mUiTimer;
 *     }
 *     return timer;
 * }
 * @see android.os.Looper
 * @see org.autojs.autojs.core.looper.Timer
 * @see org.autojs.autojs.core.looper.TimerThread
 * @see org.autojs.autojs.runtime.api.Threads
 */
declare function setInterval(listener: any, interval: number, ...args: any[]): number;
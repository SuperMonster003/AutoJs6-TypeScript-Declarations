// Type definitions for AutoJs6 internal module automator
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Sep 7, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/automator/Auto.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/automator/Automator.kt
 */

import StrokeParams = Automator.StrokeParams;
import GestureResultCallbackLike = Automator.GestureResultCallbackLike;

declare namespace Internal {

    interface Automator {

        /**
         * @example
         * automator.click(360, 540);
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.click(x, y);
         */
        click(x: number, y: number): boolean;
        click(point: [x: number, y: number]): boolean;
        click(point: {x: number, y: number}): boolean;
        click(point: android.graphics.Point): boolean;
        click(point: org.opencv.core.Point): boolean;

        /**
         * @param text
         * @param [index=0]
         * @example
         * // all "OK" clickable widgets will be clicked
         * automator.click("OK");
         * @example
         * // only the first "OK" clickable widget be clicked
         * automator.click("OK", 0);
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.click(runtime.automator.text(...args));
         */
        click(text: string, index?: number): boolean;

        /**
         * @example
         * automator.click(0, 0, 300, 500);
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.click(runtime.automator.bounds(...args));
         */
        click(left: number, top: number, right: number, bottom: number): boolean;

        click(widget: UiObject): boolean;

        click(bounds: android.graphics.Rect): boolean;

        /**
         * @example
         * automator.longClick(360, 540);
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.longClick(x, y);
         */
        longClick(x: number, y: number): boolean;
        longClick(point: [x: number, y: number]): boolean;
        longClick(point: {x: number, y: number}): boolean;
        longClick(point: android.graphics.Point): boolean;
        longClick(point: org.opencv.core.Point): boolean;

        /**
         * @param text
         * @param [index=0]
         * @example
         * // all "OK" long clickable widgets will be long clicked
         * automator.longClick("OK");
         * @example
         * // only the first "OK" long clickable widget be long clicked
         * automator.longClick("OK", 0);
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.longClick(runtime.automator.text(...args));
         */
        longClick(text: string, index?: number): boolean;

        /**
         * @example
         * automator.longClick(0, 0, 300, 500);
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.longClick(runtime.automator.bounds(...args));
         */
        longClick(left: number, top: number, right: number, bottom: number): boolean;

        longClick(widget: UiObject): boolean;

        longClick(bounds: android.graphics.Rect): boolean;

        /**
         * @Legacy
         *
         * @example
         * for (let i = 0; i < 100; i++) {
         *     press(500, 1000, 1);
         * }
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.press.bind(runtime.automator);
         *
         * @param x
         * @param y
         * @param [duration=ViewConfiguration.getTapTimeout()]
         */
        press(x: number, y: number, duration?: number): boolean;
        /**
         * @param point
         * @param [duration=ViewConfiguration.getTapTimeout()]
         */
        press(point: [x: number, y: number], duration?: number): boolean;
        /** @Recommended */
        press(duration: number, point: [x: number, y: number]): boolean;

        /**
         * @Legacy
         *
         * @example
         * automator.swipe(540, 600, 540, 200, 500);
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.swipe.bind(runtime.automator);
         * @example Source code summary (zh-CN: 源代码摘要)
         * gesture(0, duration, intArrayOf(x1, y1), intArrayOf(x2, y2));
         */
        swipe(x1: number, y1: number, x2: number, y2: number, duration: number): boolean;
        swipe(pointA: [x: number, y: number], pointB: [x: number, y: number], duration: number): boolean;
        swipe(pointsGroup: [[x: number, y: number], [x: number, y: number]], duration: number): boolean;
        swipe(points: [x1: number, y1: number, x2: number, y2: number], duration: number): boolean;
        /** @Recommended */
        swipe(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number]): boolean;
        /** @Recommended */
        swipe(duration: number, pointsGroup: [[x: number, y: number], [x: number, y: number]]): boolean;
        swipe(duration: number, points: [x1: number, y1: number, x2: number, y2: number]): boolean;

        /**
         * @Legacy
         * @Recommended
         *
         * @example
         * automator.gesture(1000, [0, 0], [500, 500], [500, 1000]);
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.gesture.bind(runtime.automator, 0);
         */
        gesture(duration: number, ...point: [x: number, y: number][]): boolean;
        /** @Recommended */
        gesture(duration: number, pointsGroup: [...[x: number, y: number][]]): boolean;
        gesture(duration: number, points: [...number[]]): boolean;

        gestureAsync(duration: number, point: [x: number, y: number], callback: GestureResultCallbackLike): void;
        gestureAsync(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number], callback: GestureResultCallbackLike): void;
        gestureAsync(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number], pointC: [x: number, y: number], callback: GestureResultCallbackLike): void;
        gestureAsync(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number], pointC: [x: number, y: number], pointD: [x: number, y: number], callback: GestureResultCallbackLike): void;
        gestureAsync(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number], pointC: [x: number, y: number], pointD: [x: number, y: number], pointE: [x: number, y: number], callback: GestureResultCallbackLike): void;
        gestureAsync(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number], pointC: [x: number, y: number], pointD: [x: number, y: number], pointE: [x: number, y: number], pointF: [x: number, y: number], callback: GestureResultCallbackLike): void;
        gestureAsync(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number], pointC: [x: number, y: number], pointD: [x: number, y: number], pointE: [x: number, y: number], pointF: [x: number, y: number], pointG: [x: number, y: number], callback: GestureResultCallbackLike): void;
        gestureAsync(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number], pointC: [x: number, y: number], pointD: [x: number, y: number], pointE: [x: number, y: number], pointF: [x: number, y: number], pointG: [x: number, y: number], pointH: [x: number, y: number], callback: GestureResultCallbackLike): void;
        gestureAsync(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number], pointC: [x: number, y: number], pointD: [x: number, y: number], pointE: [x: number, y: number], pointF: [x: number, y: number], pointG: [x: number, y: number], pointH: [x: number, y: number], pointI: [x: number, y: number], callback: GestureResultCallbackLike): void;
        /** @Recommended */
        gestureAsync(duration: number, pointsGroup: [...[x: number, y: number][]], callback?: GestureResultCallbackLike): void;
        gestureAsync(duration: number, points: [...number[]], callback?: GestureResultCallbackLike): void;
        /**
         * @Legacy
         * @Recommended
         *
         * @example
         * type StrokeParams =
         * automator.gestureAsync(1000, [0, 0], [500, 500], [500, 1000]);
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.gestureAsync.bind(runtime.automator, 0);
         */
        gestureAsync(duration: number, ...point: [x: number, y: number][]): void;

        /**
         * @example
         * automator.gestures(
         *     [0, 500, [800, 300], [500, 1000]],
         *     [0, 500, [300, 1500], [500, 1000]]
         * );
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.gestures(toStrokes(arguments));
         *
         * function toStrokes(args) {
         *     let screenMetrics = runtime.getScreenMetrics();
         *     let len = args.length;
         *     let strokes = java.lang.reflect.Array.newInstance(android.accessibilityservice.GestureDescription.StrokeDescription, len);
         *     for (let i = 0; i < len; i++) {
         *         let gesture = args[i];
         *         let pointsIndex = 1;
         *         let start, duration;
         *         if (typeof (gesture[1]) == 'number') {
         *             start = gesture[0];
         *             duration = gesture[1];
         *             pointsIndex = 2;
         *         } else {
         *             start = 0;
         *             duration = gesture[0];
         *         }
         *         let gestureLen = gesture.length;
         *         let path = new android.graphics.Path();
         *         path.moveTo(screenMetrics.scaleX(gesture[pointsIndex][0]), screenMetrics.scaleY(gesture[pointsIndex][1]));
         *         for (let j = pointsIndex + 1; j < gestureLen; j++) {
         *             path.lineTo(screenMetrics.scaleX(gesture[j][0]), screenMetrics.scaleY(gesture[j][1]));
         *         }
         *         strokes[i] = new android.accessibilityservice.GestureDescription.StrokeDescription(path, start, duration);
         *     }
         *     return strokes;
         * }
         */
        gestures(...stroke: StrokeParams[]): boolean;

        gesturesAsync(stroke: StrokeParams, callback: GestureResultCallbackLike): void;
        gesturesAsync(strokeA: StrokeParams, strokeB: StrokeParams, callback: GestureResultCallbackLike): void;
        gesturesAsync(strokeA: StrokeParams, strokeB: StrokeParams, strokeC: StrokeParams, callback: GestureResultCallbackLike): void;
        gesturesAsync(strokeA: StrokeParams, strokeB: StrokeParams, strokeC: StrokeParams, strokeD: StrokeParams, callback: GestureResultCallbackLike): void;
        gesturesAsync(strokeA: StrokeParams, strokeB: StrokeParams, strokeC: StrokeParams, strokeD: StrokeParams, strokeE: StrokeParams, callback: GestureResultCallbackLike): void;
        gesturesAsync(strokeA: StrokeParams, strokeB: StrokeParams, strokeC: StrokeParams, strokeD: StrokeParams, strokeE: StrokeParams, strokeF: StrokeParams, callback: GestureResultCallbackLike): void;
        gesturesAsync(strokeA: StrokeParams, strokeB: StrokeParams, strokeC: StrokeParams, strokeD: StrokeParams, strokeE: StrokeParams, strokeF: StrokeParams, strokeG: StrokeParams, callback: GestureResultCallbackLike): void;
        gesturesAsync(strokeA: StrokeParams, strokeB: StrokeParams, strokeC: StrokeParams, strokeD: StrokeParams, strokeE: StrokeParams, strokeF: StrokeParams, strokeG: StrokeParams, strokeH: StrokeParams, callback: GestureResultCallbackLike): void;
        gesturesAsync(strokeA: StrokeParams, strokeB: StrokeParams, strokeC: StrokeParams, strokeD: StrokeParams, strokeE: StrokeParams, strokeF: StrokeParams, strokeG: StrokeParams, strokeH: StrokeParams, strokeI: StrokeParams, callback: GestureResultCallbackLike): void;
        /** @Recommended */
        gesturesAsync(strokesGroup: [...StrokeParams[]], callback?: GestureResultCallbackLike): void;
        /**
         * @Legacy
         * @Recommended
         *
         * @example
         * automator.gesturesAsync(
         *     [0, 500, [800, 300], [500, 1000]],
         *     [0, 500, [300, 1500], [500, 1000]]
         * );
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.gesturesAsync(toStrokes(arguments));
         *
         * function toStrokes(args) {
         *     let screenMetrics = runtime.getScreenMetrics();
         *     let len = args.length;
         *     let strokes = java.lang.reflect.Array.newInstance(android.accessibilityservice.GestureDescription.StrokeDescription, len);
         *     for (let i = 0; i < len; i++) {
         *         let gesture = args[i];
         *         let pointsIndex = 1;
         *         let start, duration;
         *         if (typeof (gesture[1]) == 'number') {
         *             start = gesture[0];
         *             duration = gesture[1];
         *             pointsIndex = 2;
         *         } else {
         *             start = 0;
         *             duration = gesture[0];
         *         }
         *         let gestureLen = gesture.length;
         *         let path = new android.graphics.Path();
         *         path.moveTo(screenMetrics.scaleX(gesture[pointsIndex][0]), screenMetrics.scaleY(gesture[pointsIndex][1]));
         *         for (let j = pointsIndex + 1; j < gestureLen; j++) {
         *             path.lineTo(screenMetrics.scaleX(gesture[j][0]), screenMetrics.scaleY(gesture[j][1]));
         *         }
         *         strokes[i] = new android.accessibilityservice.GestureDescription.StrokeDescription(path, start, duration);
         *     }
         *     return strokes;
         * }
         */
        gesturesAsync(...stroke: StrokeParams[]): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.scrollMaxForward();
         */
        scrollDown(): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.scrollForward(index);
         */
        scrollDown(index: number): boolean;

        /**
         * @param text
         * @param [index=0]
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.scrollForward(runtime.automator.text(...args));
         */
        scrollDown(text: string, index?: number): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.scrollDown(runtime.automator.bounds(...args));
         */
        scrollDown(left: number, top: number, right: number, bottom: number): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.scrollMaxBackward();
         */
        scrollUp(): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.scrollBackward(index);
         */
        scrollUp(index: number): boolean;

        /**
         * @param text
         * @param [index=0]
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.scrollBackward(runtime.automator.text(...args));
         */
        scrollUp(text: string, index?: number): boolean;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.automator.scrollUp(runtime.automator.bounds(...args));
         */
        scrollUp(left: number, top: number, right: number, bottom: number): boolean;

        /**
         * Replace old text with new one
         * @example
         * automator.setText("test");
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.setText(runtime.automator.editable(-1), text);
         */
        setText(text: string): boolean;

        /**
         * Replace old text with new one
         * @example
         * automator.setText(2, "test");
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.setText(runtime.automator.editable(index), text);
         */
        setText(index: number, text: string): boolean;

        /**
         * Append text to old text
         * @example
         * automator.input("test");
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.appendText(runtime.automator.editable(-1), text);
         */
        input(text: string): boolean;

        /**
         * Append text to old text
         * @example
         * automator.input(2, "test");
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.automator.appendText(runtime.automator.editable(index), text);
         */
        input(index: number, text: string): boolean;

        captureScreen(): ImageWrapper;

        isServiceRunning(): boolean;

        ensureService(): void;

        waitForService(timeout?: number): void;

        // @RequiresApi(28)
        lockScreen(): boolean;

        // @RequiresApi(28)
        takeScreenshot(): boolean;

        // @RequiresApi(30)
        headsethook(): boolean;

        // @RequiresApi(30)
        headsetHook(): boolean;

        switchToInputMethodWithId(id: string): boolean;

        switchToInputMethod(name: string): boolean;

        // @RequiresApi(30)
        accessibilityButton(): boolean;

        // @RequiresApi(30)
        accessibilityButtonChooser(): boolean;

        // @RequiresApi(30)
        accessibilityShortcut(): boolean;

        // @RequiresApi(30)
        accessibilityAllApps(): boolean;

        // @RequiresApi(30)
        dismissNotificationShade(): boolean;

        back(): boolean;

        home(): boolean;

        powerDialog(): boolean;

        notifications(): boolean;

        quickSettings(): boolean;

        recents(): boolean;

        splitScreen(): boolean;

        // Toolkit (roadmap P4): synchronous helpers, also global functions; not for the UI thread; failures throw FlowError.
        // zh-CN: 工具集 (Roadmap P4): 同步助手, 亦为全局函数; 不可在 UI 线程调用; 失败抛出 FlowError.

        /**
         * Clicks the target by node action, else by the nearest clickable ancestor, else by a gesture at its center; optionally verifies.
         * zh-CN: 依次尝试节点动作, 最近的可点击祖先, 中心手势; 可选校验.
         * @example
         * let res = smartClick('Login', { verify: 'Welcome' });
         * console.log(res.method); // 'node' | 'ancestor' | 'gesture'
         */
        smartClick(target: Automator.Target, options?: Automator.SmartClickOptions): Automator.SmartClickResult;
        smartClickBounds(target: Automator.Target, options?: Automator.ClickBoundsOptions): Automator.SmartClickBoundsResult;

        /** `smartClick` when the target shows up within `timeout` (default 0: a single look), else `false`. zh-CN: 目标在 `timeout` (默认 0: 只看一次) 内出现则 `smartClick`, 否则 `false`. */
        clickIfExists(target: Automator.Target, options?: Automator.SmartClickOptions | number): boolean;
        clickBoundsIfExists(target: Automator.Target, options?: Automator.ClickBoundsOptions | number): boolean;

        /** Clicks the first candidate that shows up; `null` when none did within `timeout`. zh-CN: 点击最先出现的候选; 时限内都未出现为 `null`. */
        clickAny(targets: Automator.Target | Automator.Target[], options?: Automator.SmartClickOptions | number): Automator.ClickedCandidate | null;
        clickBoundsAny(targets: Automator.Target | Automator.Target[], options?: Automator.ClickBoundsOptions | number): Automator.ClickedBoundsCandidate | null;

        /** The first candidate that shows up; `null` when none did within `timeout`. zh-CN: 最先出现的候选; 时限内都未出现为 `null`. */
        findAny(targets: Automator.Target | Automator.Target[], options?: Automator.ToolOptions | number): Automator.FoundCandidate | null;

        /** Scrolls a container step by step until the target shows up; returns the target. zh-CN: 逐步滚动容器直到目标出现; 返回目标. */
        scrollUntil(target: Automator.Target, options?: Automator.ScrollUntilOptions): UiObject;

        /** Types into a field (a target, an editable index, or `null` for the focused field), verifying by default. zh-CN: 向输入框 (目标, 可编辑控件索引, 或 `null` 表示焦点输入框) 输入文本, 默认校验. */
        typeInto(target: Automator.TextTarget, text: string, options?: Automator.TypeIntoOptions): UiObject;

        /**
         * Closes popups matching any of the targets: once (default) returning the dismissed candidate or `null`, every round
         * (`once: false`) returning an array, or a background guard (`watch: true`).
         * zh-CN: 关闭匹配任一目标的弹窗: 一次 (默认, 返回被关闭的候选或 `null`), 全部轮次 (`once: false`, 返回数组), 或后台守护 (`watch: true`).
         */
        dismissPopups(targets: Automator.Target | Automator.Target[], options?: Automator.DismissPopupsOptions | number): Automator.ClickedCandidate | Automator.ClickedCandidate[] | Automator.PopupGuard | null;

        /** Harvests the items of a scrolling list, deduplicated by default. zh-CN: 滚动采集列表项, 默认去重. */
        collectList(container: Automator.Target | null, item: Automator.Target, options?: Automator.CollectListOptions): any[];

        /** Launches an app and waits until it is in the foreground. zh-CN: 启动应用并等待其到达前台. */
        launchAndWait(app: Automator.AppLike, options?: Automator.LaunchOptions | number): Automator.LaunchResult;

        /** Presses back until the condition holds; returns the condition value. zh-CN: 按返回直到条件成立; 返回条件的值. */
        backUntil(cond: Automator.Target, options?: Automator.BackOptions | number): any;

        /** Presses back until the app is in the foreground; returns its package name. zh-CN: 按返回直到该应用位于前台; 返回其包名. */
        backToApp(app: Automator.AppLike, options?: Automator.BackOptions | number): string;

        /** Sets a checkable target to `checked`, clicking only when needed. zh-CN: 把可选中目标设为 `checked`, 仅在需要时点击. */
        toggle(target: Automator.Target, checked: boolean, options?: Automator.ToggleOptions): Automator.ToggleResult;

        /** Calls `fn` until it returns without throwing, up to `times` attempts (default 3). zh-CN: 调用 `fn` 直到不抛出异常, 最多 `times` 次 (默认 3). */
        retry<R>(fn: (attempt: number) => R, options?: Automator.RetryOptions | number): R;

        // Event-driven waits (roadmap P5.2). zh-CN: 事件驱动等待 (Roadmap P5.2).

        /** Waits until no accessibility event arrived for `quietFor` milliseconds (default 500). zh-CN: 等待连续 `quietFor` 毫秒 (默认 500) 没有无障碍事件. */
        waitForIdle(quietFor?: number): Automator.IdleResult;
        waitForIdle(options: Automator.IdleOptions): Automator.IdleResult;

        /** Waits for the next event of `type` (default any) accepted by `filter`. zh-CN: 等待下一个 `type` 类型 (默认任意) 且通过 `filter` 的事件. */
        waitForEvent(type?: string | string[] | null, filter?: Automator.EventFilter | null, timeout?: number): Automator.AccessibilityEvent;
        waitForEvent(type: string | string[] | null, timeout: number, filter?: Automator.EventFilter | null): Automator.AccessibilityEvent;

        /** Waits for a toast whose text matches. zh-CN: 等待文本匹配的 Toast. */
        waitForToast(text?: Automator.ToastFilter | null, timeout?: number): Automator.Toast;
        waitForToast(timeout: number): Automator.Toast;

        /** Waits for a notification accepted by `filter`. zh-CN: 等待通过 `filter` 的通知. */
        waitForNotification(filter?: Automator.NotificationFilter | null, timeout?: number): org.autojs.autojs.core.notification.Notification;
        waitForNotification(timeout: number): org.autojs.autojs.core.notification.Notification;

    }

    interface Auto {
        /**
         * Set accessibility (aka a11y) service mode and make sure it's enabled.
         * An exception will be thrown and a11y configuration page will be prompted without the service running normally.
         * zh-CN: 设置无障碍模式并确保无障碍服务启动; 如果无障碍服务未启用, 则抛出异常并跳转到无障碍服务启用界面
         * @param [mode="normal"]
         * @param [isForcibleRestart=false]
         * @example
         * // normal mode (default)
         * // zh-CN: 正常模式 (默认)
         * auto();
         * auto("normal"); // same as above
         *
         * // fast mode
         * // inspect screen layout at a faster speed in this mode
         * // zh-CN: 快速模式
         * // 该模式下会启用控件缓存, 从而选择器获取屏幕控件更快
         * // 对于需要快速的控件操作的脚本可以使用该模式, 一般脚本则没有必要使用该函数
         * auto("fast");
         *
         * // the additional
         * // auto.waitFor() and auto.setMode() are recommended,
         * // as auto() may interrupt the current script
         * // zh-CN: 附加说明
         * // 建议使用 auto.waitFor() 和 auto.setMode() 代替该方法
         * // 若无障碍服务未启动, 使用 auto() 后脚本会立即停止运行
         * // 而 auto.waitFor() 在无障碍服务启动后使脚本继续运行
         * @example Source code summary (zh-CN: 源代码摘要)
         * if (mode) {
         *    global.auto.setMode(mode);
         * }
         * runtime.accessibilityBridge.ensureServiceEnabled();
         * @see auto.waitFor
         * @see ensureServiceStarted
         */
        (mode?: Automator.Mode, isForcibleRestart?: boolean): void;
        (isForcibleRestart: boolean): void;
        (mode: Automator.Mode | null, isForcibleRestart: boolean): void;

        start(): boolean;

        enable(): boolean;

        stop(): boolean;

        disable(): boolean;

        hasInstance(): boolean;

        hasService(): boolean;

        exists(): boolean;

        isRunning(): boolean;

        isOperational(): boolean;

        stateListener(listener?: Automator.StateListener | null): void;

        registerEvent(name: string, listener?: Automator.AccessibilityEventListener | null): void;
        /**
         * With `options`, repeated deliveries are filtered: `distinct` by window / source / event fingerprint / a key function,
         * `within` milliseconds (default 500), or `debounce` by delivering only the last event of a burst.
         * zh-CN: 带 `options` 时过滤重复送达: `distinct` 按窗口 / 来源 / 事件指纹 / 键函数去重, `within` 毫秒 (默认 500), 或 `debounce` 只送达一阵事件中的最后一个.
         * @example
         * auto.registerEvent('list-changed', e => console.log(e.className), { distinct: 'window', within: 1e3 });
         */
        registerEvent(name: string, listener: Automator.AccessibilityEventListener, options: Automator.RegisterEventOptions): void;

        registerEvents(name: string, listener?: Automator.AccessibilityEventListener | null): void;
        registerEvents(name: string, listener: Automator.AccessibilityEventListener, options: Automator.RegisterEventOptions): void;

        removeEvent(name: string): void;

        removeEvents(name: string): void;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * return runtime.accessibilityBridge.getService();
         * @see org.autojs.autojs.core.accessibility.AccessibilityBridge.getService
         */
        get service(): org.autojs.autojs.core.accessibility.AccessibilityService | null;

        get services(): string[];

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * let service = auto.service;
         * return service === null ? [] : util.java.toJsArray(service.getWindows(), true);
         * @see auto.service
         * @see android.accessibilityservice.AccessibilityService.getWindows
         */
        get windows(): android.view.accessibility.AccessibilityWindowInfo[];

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * let root = runtime.accessibilityBridge.getRootInCurrentWindow(); // may be null
         * return root && org.autojs.autojs.core.automator.UiObject.Companion.createRoot(root);
         * @see org.autojs.autojs.core.automator.UiObject.Companion.createRoot
         */
        get root(): UiObject | null;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * let root = runtime.accessibilityBridge.getRootInActiveWindow();
         * return root && org.autojs.autojs.core.automator.UiObject.Companion.createRoot(root);
         * @see org.autojs.autojs.core.automator.UiObject.Companion.createRoot
         */
        get rootInActiveWindow(): UiObject | null;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * return util.java.toJsArray(runtime.accessibilityBridge.windowRoots(), false)
         *     .map(root => org.autojs.autojs.core.automator.UiObject.Companion.createRoot(root));
         * @see org.autojs.autojs.core.accessibility.AccessibilityBridge.windowRoots
         * @see org.autojs.autojs.core.automator.UiObject.Companion.createRoot
         */
        get windowRoots(): UiObject[];

        getWindowRoot(window: android.view.accessibility.AccessibilityWindowInfo): UiObject | null;

        get state(): Automator.AutoState;

        /**
         * @example
         * auto.waitFor();
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.accessibilityBridge.waitForServiceEnabled();
         * @see org.autojs.autojs.core.accessibility.AccessibilityBridge.waitForServiceEnabled
         */
        waitFor(timeout?: number | null): void;

        /**
         * @example
         * auto.setMode("normal");
         * @example
         * auto.setMode("fast");
         * @example Source code summary (zh-CN: 源代码摘要)
         * runtime.accessibilityBridge.setMode({"normal": 0, "fast": 1}[modeStr]);
         * @see org.autojs.autojs.core.accessibility.AccessibilityBridge.setMode
         */
        setMode(modeStr: Automator.Mode): void;

        /**
         * Sets the accessibility bridge flags; the given set replaces the previous one.
         * `appWindowsFallback` (6.8.0): look for a root in the other application windows when the active one has none;
         * `eventAssistedPolling` (6.8.0): wake blocking waits (`findOne(timeout)`, `waitUntilGone`, `waitForStable`) by accessibility events between attempts.
         * zh-CN: 设置无障碍桥接标志; 本次给出的集合替换之前的.
         * `appWindowsFallback` (6.8.0): 活动窗口没有根节点时到其他应用窗口中寻找; `eventAssistedPolling` (6.8.0): 阻塞等待两次尝试之间由无障碍事件唤醒.
         * @example
         * auto.setFlags("useUsageStats");
         * @example
         * auto.setFlags(["useShell", "useUsageStats", "findOnUiThread"]);
         * @example
         * auto.setFlags(["appWindowsFallback", "eventAssistedPolling"]);
         * @see org.autojs.autojs.core.accessibility.AccessibilityBridge.setFlags
         */
        setFlags(flags: Automator.Flags | Automator.Flags[]): void;

        /**
         * Sets the filter deciding which windows `auto.root` / `auto.windowRoots` and the selectors search: a function over
         * the window info, a match object (6.8.0), `true` (all windows) / `false` (the active window only), or a nullish value
         * for the default (all windows).
         * zh-CN: 设置 `auto.root` / `auto.windowRoots` 与选择器搜索哪些窗口的过滤器: 窗口信息的函数, 匹配对象 (6.8.0), `true` (全部窗口) / `false` (仅活动窗口), 或 nullish 表示默认 (全部窗口).
         * @example
         * auto.setWindowFilter(function (window) {
         *     return window.title === "QQ";
         * });
         * @example
         * auto.setWindowFilter({ type: 'application', packageName: 'com.tencent.mobileqq' });
         * @see org.autojs.autojs.core.accessibility.AccessibilityBridge.WindowFilter
         * @see android.view.accessibility.AccessibilityWindowInfo
         */
        setWindowFilter(filter?: Automator.WindowFilterLike | null): void;

        /** `flow.wait`: the asynchronous wait. zh-CN: `flow.wait`: 异步等待. */
        wait: Flow.WaitFunction<UiObject>;

        /** The windows accepted by `filter` (default: the current window filter). zh-CN: 通过 `filter` 的窗口 (默认: 当前窗口过滤器). */
        findWindows(filter?: Automator.WindowFilterLike | null): android.view.accessibility.AccessibilityWindowInfo[];

        /** The roots of the windows accepted by `filter` (default: the current window filter). zh-CN: 通过 `filter` 的窗口的根节点 (默认: 当前窗口过滤器). */
        findWindowRoots(filter?: Automator.WindowFilterLike | null): UiObject[];

        /**
         * Explains why a selector matches or fails: per-filter and cumulative counts, the failing step, near misses and a text report.
         * zh-CN: 解释选择器为何匹配或失败: 逐过滤器与累计计数, 失败步骤, 差一点的节点与文本报告.
         * @example
         * console.log(auto.explain(text('Login').clickable()).text);
         */
        explain(selector: Automator.Target, root?: UiObject | null): Automator.ExplainResult;

        /**
         * Dumps the node tree as text (default), JSON or uiautomator-style XML.
         * zh-CN: 以文本 (默认), JSON 或 uiautomator 风格 XML 导出节点树.
         * @example
         * files.write('/sdcard/dump.xml', auto.dump('xml'));
         * @example
         * console.log(auto.dump({ root: auto.root, maxDepth: 3, visibleOnly: true }));
         */
        dump(options?: Automator.DumpFormat | Automator.DumpOptions): string;

        /** A snapshot of the search / polling query / Flow step statistics since the last `reset()`. zh-CN: 自上次 `reset()` 以来的搜索 / 轮询查询 / Flow 步骤统计快照. */
        get stats(): Automator.StatsSnapshot;

        launchSettings(): void;

        clearCache(): boolean;

        currentPackage(): string;

        currentActivity(): string;

        currentComponent(): string;
    }
}

declare namespace Automator {
    type Flags = 'findOnUiThread' | 'useUsageStats' | 'useShell' | 'appWindowsFallback' | 'eventAssistedPolling';
    type Mode = 'normal' | 'fast';
    type AccessibilityEvent = org.autojs.autojs.core.automator.AccessibilityEventWrapper;
    type AccessibilityEventListener = org.autojs.autojs.core.accessibility.SimpleActionAutomator.Companion.AccessibilityEventCallback | ((event: AccessibilityEvent) => void) | {
        onAccessibilityEvent(event: AccessibilityEvent): void;
    };
    interface AutoState {
        hasInstance: boolean;
        hasService: boolean;
        isRunning: boolean;
        isOperational: boolean;
        /** Whether the service instance was adopted from a connection event rather than started by AutoJs6 (6.8.0). zh-CN: 服务实例是否由连接事件采纳而非 AutoJs6 自行启动 (6.8.0). */
        adoptedByEvent: boolean;
    }
    type GestureResultCallbackLike = ((isComplete: boolean) => void) | {
        onCompleted?(gestureDescription: android.accessibilityservice.GestureDescription): void;
        onCancelled?(gestureDescription: android.accessibilityservice.GestureDescription): void;
    }
    type StateListener = org.autojs.autojs.core.accessibility.AccessibilityServiceCallback | {
        onConnected?(): void;
        onDisconnected?(): void;
    };
    type StrokeParams = [startTime: number, duration: number, ...point: [x: number, y: number][]] | [duration: number, ...point: [x: number, y: number][]];
    type WindowFilterLike = boolean | org.autojs.autojs.core.accessibility.AccessibilityBridge.WindowFilter | ((info: android.view.accessibility.AccessibilityWindowInfo) => boolean) | WindowMatch;

    type WindowType = 'application' | 'inputMethod' | 'system' | 'accessibilityOverlay' | 'splitScreenDivider' | 'magnificationOverlay' | (string & {});

    /** A window match object for `setWindowFilter` / `findWindows` / `findWindowRoots`; every given key must match. zh-CN: `setWindowFilter` / `findWindows` / `findWindowRoots` 的窗口匹配对象; 给出的键须全部匹配. */
    interface WindowMatch {
        type?: WindowType | WindowType[] | number;
        packageName?: string | RegExp;
        title?: string | RegExp;
        displayId?: number;
        active?: boolean;
        focused?: boolean;
        id?: number;
        layer?: number;
    }

    interface RegisterEventOptions {
        /** `'window'` (one delivery per window), `'source'` (per source node), `true` (per event fingerprint) or a key function. zh-CN: `'window'` (每窗口一次), `'source'` (每来源节点一次), `true` (按事件指纹) 或键函数. */
        distinct?: 'window' | 'source' | true | ((event: AccessibilityEvent) => any);
        /** The span in milliseconds within which repeats are dropped; default 500. zh-CN: 视为重复的时间窗 (毫秒); 默认 500. */
        within?: number;
        /** Deliver only the last event of a burst, after this many quiet milliseconds. zh-CN: 一阵事件安静这么多毫秒后只送达最后一个. */
        debounce?: number;
    }

    // Toolkit (roadmap P4). zh-CN: 工具集 (Roadmap P4).

    /** A selector-like target: the `pickup` selector forms (a string is a content match), a node, or a function returning one. zh-CN: 选择器类目标: `pickup` 的各种选择器形式 (字符串为内容匹配), 节点, 或返回节点的函数. */
    type Target = Pickup.Selector | UiObject | (() => any);

    /** `typeInto`: a target, the index of an editable field (`-1`: the last), or `null` for the focused field. zh-CN: `typeInto`: 目标, 可编辑控件的索引 (`-1`: 最后一个), 或 `null` 表示焦点输入框. */
    type TextTarget = Target | number | null;

    /** An app by package name, application name or alias, as `app.launch`. zh-CN: 包名, 应用名或别名, 同 `app.launch`. */
    type AppLike = string;

    /** `true` / `false`, or per-item settings: an offset (pixels or `[x, y]` range) for gesture clicks and a `[min, max]` delay before actions. zh-CN: `true` / `false`, 或分项设置: 手势点击的偏移 (像素或 `[x, y]` 范围) 与动作前的 `[min, max]` 延时. */
    type HumanizeLike = boolean | { offset?: number | [number, number]; delay?: number | [number, number] };

    interface ToolOptions {
        /** Milliseconds to wait for the target; default 0 (a single look). zh-CN: 等待目标的毫秒数; 默认 0 (只看一次). */
        timeout?: number;
        /** Polling interval; default 50. zh-CN: 轮询间隔; 默认 50. */
        interval?: number;
        /** The search root. zh-CN: 查找根节点. */
        root?: UiObject | null;
        humanize?: HumanizeLike;
    }

    type ClickMethod = 'node' | 'ancestor' | 'gesture';

    interface SmartClickOptions extends ToolOptions {
        /** Try the clickable ancestors when the node itself is not clickable; default `true`. zh-CN: 节点自身不可点击时上溯可点击祖先; 默认 `true`. */
        climb?: boolean;
        /** How many ancestors to try; default 5. zh-CN: 上溯的最多层数; 默认 5. */
        maxClimb?: number;
        /** Fall back to a gesture at the node center; default `true`. zh-CN: 回退到节点中心的手势点按; 默认 `true`. */
        gestureFallback?: boolean;
        /** The signed integer pixel offset from the center. zh-CN: 手势相对中心的有符号整数像素偏移. */
        offset?: number | [number, number];
        /** A target that must show up after the click, or a predicate. zh-CN: 点击后必须出现的目标, 或断言函数. */
        verify?: Target;
        /** Milliseconds for `verify`; default 2000. zh-CN: `verify` 的时限; 默认 2000. */
        verifyTimeout?: number;
        /** Polling interval for `verify`; default 100. zh-CN: `verify` 的轮询间隔; 默认 100. */
        verifyInterval?: number;
    }

    /** Direct bounds taps accept signed integer pixel offsets, verification and common tool options. */
    type ClickBoundsOptions = Omit<SmartClickOptions, 'climb' | 'maxClimb' | 'gestureFallback'>;

    type SmartClickBoundsResult = Omit<SmartClickResult, 'method'> & { method: 'gesture' };

    type ClickedBoundsCandidate = Omit<ClickedCandidate, 'method'> & { method: 'gesture' };

    interface SmartClickResult {
        ok: true;
        method: ClickMethod;
        /** The node the click was performed on. zh-CN: 实际被点击的节点. */
        target: UiObject;
        /** The `verify` result, or `null` without verification. zh-CN: `verify` 的结果, 未校验时为 `null`. */
        verified: any;
    }

    interface FoundCandidate {
        /** The index in the given targets. zh-CN: 在给定目标中的索引. */
        index: number;
        target: any;
        node: UiObject;
    }

    interface ClickedCandidate extends FoundCandidate {
        method: ClickMethod;
        verified: any;
    }

    type ScrollDirection = 'up' | 'down' | 'left' | 'right';

    type ScrollMethod = 'action' | 'gesture';

    interface ScrollUntilOptions extends ToolOptions {
        /** The scrolling container; default: the largest scrollable node. zh-CN: 滚动容器; 默认为面积最大的可滚动节点. */
        container?: Target | null;
        /** Default `'down'`. */
        direction?: ScrollDirection;
        /** Default 20. */
        maxSteps?: number;
        /** `'action'` (scroll actions, default) or `'gesture'` (swipes). zh-CN: `'action'` (滚动动作, 默认) 或 `'gesture'` (滑动手势). */
        method?: ScrollMethod;
        /** Stop when the content no longer moves; default `true`. zh-CN: 内容不再移动时停止; 默认 `true`. */
        stopAtEnd?: boolean;
        /** Milliseconds to settle after each step; default 300. zh-CN: 每步之后的静置毫秒数; 默认 300. */
        settle?: number;
        /** Swipe duration for the gesture method; default 400. zh-CN: 手势方式的滑动时长; 默认 400. */
        gestureDuration?: number;
    }

    interface TypeIntoOptions extends ToolOptions {
        /** Clear the field first; default `true`. zh-CN: 先清空; 默认 `true`. */
        clear?: boolean;
        /** Send the IME action afterwards; default `false`. zh-CN: 之后发送输入法动作; 默认 `false`. */
        submit?: boolean;
        /** Verify the text was applied; default `true`. zh-CN: 校验文本已写入; 默认 `true`. */
        verify?: boolean;
        /** Default 1000. */
        verifyTimeout?: number;
        /** Default 100. */
        verifyInterval?: number;
    }

    interface DismissPopupsOptions extends ToolOptions {
        /** One round only; default `true`. zh-CN: 只做一轮; 默认 `true`. */
        once?: boolean;
        /** Keep watching in the background and return a guard; default `false` (synchronous functions only). zh-CN: 后台持续守护并返回句柄; 默认 `false` (仅同步函数支持). */
        watch?: boolean;
        /** Milliseconds to settle after a dismissal; default 300. zh-CN: 关闭后的静置毫秒数; 默认 300. */
        settle?: number;
        /** Rounds per pass; default 10. zh-CN: 每次最多轮数; 默认 10. */
        maxRounds?: number;
        /** Watching: quiet milliseconds after an event before a pass; default 300. zh-CN: 守护: 事件后静默多少毫秒再检查; 默认 300. */
        debounce?: number;
        /** Options of the `smartClick` used to dismiss. zh-CN: 用于关闭的 `smartClick` 选项. */
        click?: SmartClickOptions;
        onDismissed?: (info: ClickedCandidate) => void;
        onError?: (error: Flow.FlowError | Error) => void;
    }

    /** The handle of `dismissPopups(..., { watch: true })`. zh-CN: `dismissPopups(..., { watch: true })` 的句柄. */
    interface PopupGuard {
        stop(): void;
        /** Run a pass now. zh-CN: 立即检查一次. */
        trigger(): void;
        readonly isRunning: boolean;
        /** Dismissals so far. zh-CN: 至今关闭的次数. */
        readonly count: number;
        /** Passes so far. zh-CN: 至今检查的次数. */
        readonly passes: number;
        readonly dismissed: ClickedCandidate[];
        toString(): string;
    }

    interface CollectListOptions extends ToolOptions {
        direction?: ScrollDirection;
        /** Default 20. */
        maxSteps?: number;
        method?: ScrollMethod;
        /** What to collect per item, as the `pickup` result type (a name or an array of names). zh-CN: 每项采集什么, 同 `pickup` 的结果类型 (名称或名称数组). */
        resultType?: Pickup.ResultType | Pickup.ResultType[];
        /** Drop repeated items; default `true`. zh-CN: 去掉重复项; 默认 `true`. */
        dedupe?: boolean;
        /** Stop once an item satisfies the predicate (that item is included). zh-CN: 某项满足断言时停止 (含该项). */
        until?: (item: any) => any;
        maxItems?: number;
        settle?: number;
        gestureDuration?: number;
    }

    interface LaunchOptions {
        /** Default 10000. */
        timeout?: number;
        /** Default 200. */
        interval?: number;
        /** Launch even when the app is already running but not in front; default `true`. zh-CN: 应用已运行但不在前台时也启动; 默认 `true`. */
        bringToFront?: boolean;
    }

    interface LaunchResult {
        packageName: string;
        /** Whether a launch was issued (`false` when the app was already in front). zh-CN: 是否执行了启动 (应用已在前台时为 `false`). */
        launched: boolean;
        elapsed: number;
        attempts: number;
    }

    interface BackOptions {
        root?: UiObject | null;
        humanize?: HumanizeLike;
        /** Default 10. */
        maxTimes?: number;
        /** Milliseconds after each back press; default 500. zh-CN: 每次返回后的毫秒数; 默认 500. */
        delay?: number;
        /** Default 100. */
        interval?: number;
    }

    interface ToggleOptions extends ToolOptions {
        /** Default 1000. */
        verifyTimeout?: number;
        /** Default 100. */
        verifyInterval?: number;
        click?: SmartClickOptions;
    }

    interface ToggleResult {
        node: UiObject;
        /** Whether a click was needed. zh-CN: 是否需要点击. */
        changed: boolean;
        checked: boolean;
        method: ClickMethod | null;
    }

    interface RetryOptions {
        /** Default 3. */
        times?: number;
        /** Milliseconds between attempts; default 500. zh-CN: 两次尝试之间的毫秒数; 默认 500. */
        delay?: number;
        /** Multiplier of `delay` per attempt; default 1. zh-CN: 每次尝试后 `delay` 的倍数; 默认 1. */
        backoff?: number;
    }

    // Event-driven waits (roadmap P5.2). zh-CN: 事件驱动等待 (Roadmap P5.2).

    interface IdleOptions {
        /** Default 500. */
        quietFor?: number;
        timeout?: number;
        /** Event type names to watch; default all. zh-CN: 关注的事件类型名; 默认全部. */
        eventTypes?: string | string[];
    }

    interface IdleResult {
        quietFor: number;
        elapsed: number;
        /** Events seen while waiting. zh-CN: 等待期间看到的事件数. */
        events: number;
    }

    type EventFilter = ((event: AccessibilityEvent) => boolean) | {
        packageName?: string | RegExp;
        className?: string | RegExp;
        text?: string | RegExp;
    };

    type Toast = org.autojs.autojs.core.accessibility.AccessibilityNotificationObserver.Toast;

    type ToastFilter = string | RegExp | ((toast: Toast) => boolean) | {
        packageName?: string | RegExp;
        text?: string | RegExp;
    };

    type NotificationFilter = string | RegExp | ((notification: org.autojs.autojs.core.notification.Notification) => boolean) | {
        packageName?: string | RegExp;
        title?: string | RegExp;
        text?: string | RegExp;
    };

    // Diagnostics (roadmap P5.1). zh-CN: 诊断 (Roadmap P5.1).

    interface ExplainStep {
        index: number;
        /** The filter as text, such as `text("Login")`. zh-CN: 过滤器的文本, 如 `text("Login")`. */
        filter: string;
        /** Nodes matching this filter alone. zh-CN: 单独匹配此过滤器的节点数. */
        matched: number;
        /** Nodes matching the filters up to this one. zh-CN: 匹配到此为止全部过滤器的节点数. */
        cumulative: number;
    }

    interface ExplainResult {
        selector: string;
        /** Roots searched. zh-CN: 搜索过的根节点数. */
        roots: number;
        /** Nodes visited. zh-CN: 访问过的节点数. */
        nodes: number;
        /** Whether the node budget cut the search short. zh-CN: 是否因节点预算而截断. */
        truncated: boolean;
        found: boolean;
        count: number;
        /** The index of the first filter that left no node, or -1. zh-CN: 首个使结果为空的过滤器索引, 或 -1. */
        failingIndex: number;
        failingFilter: string | null;
        steps: ExplainStep[];
        matches: UiObject[];
        /** Nodes that failed only the failing filter. zh-CN: 只差失败的那个过滤器的节点. */
        nearMisses: UiObject[];
        /** The report as text. zh-CN: 文本报告. */
        text: string;
        toString(): string;
    }

    type DumpFormat = 'text' | 'json' | 'xml';

    interface DumpOptions {
        format?: DumpFormat;
        /** Default: the roots of the current window filter. zh-CN: 默认: 当前窗口过滤器的各根节点. */
        root?: UiObject | UiObject[] | null;
        maxDepth?: number;
        /** The properties to include. zh-CN: 要包含的属性. */
        properties?: string | string[];
        /** Default `false`. */
        visibleOnly?: boolean;
        /** Default 2000. */
        maxNodes?: number;
        indent?: string | number;
    }

    interface Timing {
        count: number;
        totalMillis: number;
        averageMillis: number;
        maxMillis: number;
    }

    interface QueryTiming extends Timing {
        found: number;
        missed: number;
        attempts: number;
    }

    interface SelectorStats {
        selector: string;
        searches: Timing;
        queries: Timing;
        found: number;
    }

    interface StepStats {
        name: string;
        runs: Timing;
        rejected: number;
    }

    interface StatsSnapshot {
        /** Epoch milliseconds of the last reset. zh-CN: 上次重置的时间戳 (毫秒). */
        since: number;
        now: number;
        elapsed: number;
        /** Single searches (`find*`, `pickup`). zh-CN: 单次搜索 (`find*`, `pickup`). */
        searches: Timing;
        /** Polling queries (`findOne(timeout)`, `wait`, Flow waits). zh-CN: 轮询查询 (`findOne(timeout)`, `wait`, Flow 等待). */
        queries: QueryTiming;
        selectors: SelectorStats[];
        slowest: SelectorStats | null;
        /** Flow steps. zh-CN: Flow 步骤. */
        steps: StepStats[];
        text: string;
        reset(): void;
        toString(): string;
    }
}

/**
 * @see org.autojs.autojs.core.accessibility.SimpleActionAutomator.back
 */
declare function back(): boolean;

/**
 * @see org.autojs.autojs.core.accessibility.SimpleActionAutomator.home
 */
declare function home(): boolean;

/**
 * @see org.autojs.autojs.core.accessibility.SimpleActionAutomator.powerDialog
 */
declare function powerDialog(): boolean;

/**
 * @see org.autojs.autojs.core.accessibility.SimpleActionAutomator.notifications
 */
declare function notifications(): boolean;

/**
 * @see org.autojs.autojs.core.accessibility.SimpleActionAutomator.quickSettings
 */
declare function quickSettings(): boolean;

/**
 * @see org.autojs.autojs.core.accessibility.SimpleActionAutomator.recents
 */
declare function recents(): boolean;

/**
 * @see org.autojs.autojs.core.accessibility.SimpleActionAutomator.splitScreen
 */
declare function splitScreen(): boolean;

declare function click(bounds: android.graphics.Rect): boolean;

declare function click(widget: UiObject): boolean;

/**
 * @param text
 * @param [index=0]
 * @see Internal.Automator.click
 */
declare function click(text: string, index?: number): boolean;

/**
 * @see Internal.Automator.click
 */
declare function click(x: number, y: number): boolean;
declare function click(point: [x: number, y: number]): boolean;
declare function click(point: {x: number, y: number}): boolean;
declare function click(point: android.graphics.Point): boolean;
declare function click(point: org.opencv.core.Point): boolean;

/**
 * @see Internal.Automator.click
 */
declare function click(left: number, top: number, right: number, bottom: number): boolean;

/**
 * @see Internal.Automator.longClick
 */
declare function longClick(x: number, y: number): boolean;
declare function longClick(point: [x: number, y: number]): boolean;
declare function longClick(point: {x: number, y: number}): boolean;
declare function longClick(point: android.graphics.Point): boolean;
declare function longClick(point: org.opencv.core.Point): boolean;
/**
 * @param text
 * @param [index=0]
 * @see Internal.Automator.longClick
 */
declare function longClick(text: string, index?: number): boolean;
declare function longClick(bounds: android.graphics.Rect): boolean;
declare function longClick(widget: UiObject): boolean;
/**
 * @see Internal.Automator.longClick
 */
declare function longClick(left: number, top: number, right: number, bottom: number): boolean;

/**
 * @Legacy
 *
 * @see Internal.Automator.press
 */
declare function press(x: number, y: number, duration?: number): boolean;
declare function press(point: [x: number, y: number], duration?: number): boolean;
/** @Recommended */
declare function press(duration: number, point: [x: number, y: number]): boolean;

/**
 * @Legacy
 *
 * @see Internal.Automator.swipe
 */
declare function swipe(x1: number, y1: number, x2: number, y2: number, duration: number): boolean;
declare function swipe(pointA: [x: number, y: number], pointB: [x: number, y: number], duration: number): boolean;
declare function swipe(pointsGroup: [[x: number, y: number], [x: number, y: number]], duration: number): boolean;
declare function swipe(points: [x1: number, y1: number, x2: number, y2: number], duration: number): boolean;
/** @Recommended */
declare function swipe(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number]): boolean;
/** @Recommended */
declare function swipe(duration: number, pointsGroup: [[x: number, y: number], [x: number, y: number]]): boolean;
declare function swipe(duration: number, points: [x1: number, y1: number, x2: number, y2: number]): boolean;

/**
 * @Legacy
 * @Recommended
 *
 * @see Internal.Automator.gesture
 */
declare function gesture(duration: number, ...point: [x: number, y: number][]): boolean;
/** @Recommended */
declare function gesture(duration: number, pointsGroup: [...[x: number, y: number][]]): boolean;
declare function gesture(duration: number, points: [...number[]]): boolean;

declare function gestureAsync(duration: number, point: [x: number, y: number], callback: GestureResultCallbackLike): void;
declare function gestureAsync(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number], callback: GestureResultCallbackLike): void;
declare function gestureAsync(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number], pointC: [x: number, y: number], callback: GestureResultCallbackLike): void;
declare function gestureAsync(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number], pointC: [x: number, y: number], pointD: [x: number, y: number], callback: GestureResultCallbackLike): void;
declare function gestureAsync(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number], pointC: [x: number, y: number], pointD: [x: number, y: number], pointE: [x: number, y: number], callback: GestureResultCallbackLike): void;
declare function gestureAsync(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number], pointC: [x: number, y: number], pointD: [x: number, y: number], pointE: [x: number, y: number], pointF: [x: number, y: number], callback: GestureResultCallbackLike): void;
declare function gestureAsync(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number], pointC: [x: number, y: number], pointD: [x: number, y: number], pointE: [x: number, y: number], pointF: [x: number, y: number], pointG: [x: number, y: number], callback: GestureResultCallbackLike): void;
declare function gestureAsync(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number], pointC: [x: number, y: number], pointD: [x: number, y: number], pointE: [x: number, y: number], pointF: [x: number, y: number], pointG: [x: number, y: number], pointH: [x: number, y: number], callback: GestureResultCallbackLike): void;
declare function gestureAsync(duration: number, pointA: [x: number, y: number], pointB: [x: number, y: number], pointC: [x: number, y: number], pointD: [x: number, y: number], pointE: [x: number, y: number], pointF: [x: number, y: number], pointG: [x: number, y: number], pointH: [x: number, y: number], pointI: [x: number, y: number], callback: GestureResultCallbackLike): void;
/** @Recommended */
declare function gestureAsync(duration: number, pointsGroup: [...[x: number, y: number][]], callback?: GestureResultCallbackLike): void;
declare function gestureAsync(duration: number, points: [...number[]], callback?: GestureResultCallbackLike): void;
/**
 * @Legacy
 * @Recommended
 *
 * @see Internal.Automator.gestureAsync
 */
declare function gestureAsync(duration: number, ...point: [x: number, y: number][]): void;

/**
 * @see Internal.Automator.gestures
 */
declare function gestures(...stroke: StrokeParams[]): boolean;

declare function gesturesAsync(stroke: StrokeParams, callback: GestureResultCallbackLike): void;
declare function gesturesAsync(strokeA: StrokeParams, strokeB: StrokeParams, callback: GestureResultCallbackLike): void;
declare function gesturesAsync(strokeA: StrokeParams, strokeB: StrokeParams, strokeC: StrokeParams, callback: GestureResultCallbackLike): void;
declare function gesturesAsync(strokeA: StrokeParams, strokeB: StrokeParams, strokeC: StrokeParams, strokeD: StrokeParams, callback: GestureResultCallbackLike): void;
declare function gesturesAsync(strokeA: StrokeParams, strokeB: StrokeParams, strokeC: StrokeParams, strokeD: StrokeParams, strokeE: StrokeParams, callback: GestureResultCallbackLike): void;
declare function gesturesAsync(strokeA: StrokeParams, strokeB: StrokeParams, strokeC: StrokeParams, strokeD: StrokeParams, strokeE: StrokeParams, strokeF: StrokeParams, callback: GestureResultCallbackLike): void;
declare function gesturesAsync(strokeA: StrokeParams, strokeB: StrokeParams, strokeC: StrokeParams, strokeD: StrokeParams, strokeE: StrokeParams, strokeF: StrokeParams, strokeG: StrokeParams, callback: GestureResultCallbackLike): void;
declare function gesturesAsync(strokeA: StrokeParams, strokeB: StrokeParams, strokeC: StrokeParams, strokeD: StrokeParams, strokeE: StrokeParams, strokeF: StrokeParams, strokeG: StrokeParams, strokeH: StrokeParams, callback: GestureResultCallbackLike): void;
declare function gesturesAsync(strokeA: StrokeParams, strokeB: StrokeParams, strokeC: StrokeParams, strokeD: StrokeParams, strokeE: StrokeParams, strokeF: StrokeParams, strokeG: StrokeParams, strokeH: StrokeParams, strokeI: StrokeParams, callback: GestureResultCallbackLike): void;
/** @Recommended */
declare function gesturesAsync(strokesGroup: [...StrokeParams[]], callback?: GestureResultCallbackLike): void;
/**
 * @Legacy
 * @Recommended
 *
 * @see Internal.Automator.gesturesAsync
 */
declare function gesturesAsync(...stroke: StrokeParams[]): void;

/**
 * @see Internal.Automator.scrollDown
 */
declare function scrollDown(index?: number): boolean;
/**
 * @param text
 * @param [index=0]
 * @see Internal.Automator.scrollDown
 */
declare function scrollDown(text: string, index?: number): boolean;
/**
 * @see Internal.Automator.scrollDown
 */
declare function scrollDown(left: number, top: number, right: number, bottom: number): boolean;

/**
 * @see Internal.Automator.scrollUp
 */
declare function scrollUp(index?: number): boolean;
/**
 * @param text
 * @param [index=0]
 * @see Internal.Automator.scrollUp
 */
declare function scrollUp(text: string, index?: number): boolean;
/**
 * @see Internal.Automator.scrollUp
 */
declare function scrollUp(left: number, top: number, right: number, bottom: number): boolean;

/**
 * @see Internal.Automator.setText
 */
declare function setText(text: string): boolean;
/**
 * @see Internal.Automator.setText
 */
declare function setText(index: number, text: string): boolean;

/**
 * @see Internal.Automator.input
 */
declare function input(text: string): boolean;
/**
 * @see Internal.Automator.input
 */
declare function input(index: number, text: string): boolean;

/**
 * @see Internal.Automator.smartClick
 */
declare function smartClick(target: Automator.Target, options?: Automator.SmartClickOptions): Automator.SmartClickResult;
declare function smartClickBounds(target: Automator.Target, options?: Automator.ClickBoundsOptions): Automator.SmartClickBoundsResult;

/**
 * @see Internal.Automator.clickIfExists
 */
declare function clickIfExists(target: Automator.Target, options?: Automator.SmartClickOptions | number): boolean;
declare function clickBoundsIfExists(target: Automator.Target, options?: Automator.ClickBoundsOptions | number): boolean;

/**
 * @see Internal.Automator.clickAny
 */
declare function clickAny(targets: Automator.Target | Automator.Target[], options?: Automator.SmartClickOptions | number): Automator.ClickedCandidate | null;
declare function clickBoundsAny(targets: Automator.Target | Automator.Target[], options?: Automator.ClickBoundsOptions | number): Automator.ClickedBoundsCandidate | null;

/**
 * @see Internal.Automator.findAny
 */
declare function findAny(targets: Automator.Target | Automator.Target[], options?: Automator.ToolOptions | number): Automator.FoundCandidate | null;

/**
 * @see Internal.Automator.scrollUntil
 */
declare function scrollUntil(target: Automator.Target, options?: Automator.ScrollUntilOptions): UiObject;

/**
 * @see Internal.Automator.typeInto
 */
declare function typeInto(target: Automator.TextTarget, text: string, options?: Automator.TypeIntoOptions): UiObject;

/**
 * @see Internal.Automator.dismissPopups
 */
declare function dismissPopups(targets: Automator.Target | Automator.Target[], options?: Automator.DismissPopupsOptions | number): Automator.ClickedCandidate | Automator.ClickedCandidate[] | Automator.PopupGuard | null;

/**
 * @see Internal.Automator.collectList
 */
declare function collectList(container: Automator.Target | null, item: Automator.Target, options?: Automator.CollectListOptions): any[];

/**
 * @see Internal.Automator.launchAndWait
 */
declare function launchAndWait(app: Automator.AppLike, options?: Automator.LaunchOptions | number): Automator.LaunchResult;

/**
 * @see Internal.Automator.backUntil
 */
declare function backUntil(cond: Automator.Target, options?: Automator.BackOptions | number): any;

/**
 * @see Internal.Automator.backToApp
 */
declare function backToApp(app: Automator.AppLike, options?: Automator.BackOptions | number): string;

/**
 * @see Internal.Automator.toggle
 */
declare function toggle(target: Automator.Target, checked: boolean, options?: Automator.ToggleOptions): Automator.ToggleResult;

/**
 * @see Internal.Automator.retry
 */
declare function retry<R>(fn: (attempt: number) => R, options?: Automator.RetryOptions | number): R;

/**
 * @see Internal.Automator.waitForIdle
 */
declare function waitForIdle(quietFor?: number): Automator.IdleResult;
declare function waitForIdle(options: Automator.IdleOptions): Automator.IdleResult;

/**
 * @see Internal.Automator.waitForEvent
 */
declare function waitForEvent(type?: string | string[] | null, filter?: Automator.EventFilter | null, timeout?: number): Automator.AccessibilityEvent;
declare function waitForEvent(type: string | string[] | null, timeout: number, filter?: Automator.EventFilter | null): Automator.AccessibilityEvent;

/**
 * @see Internal.Automator.waitForToast
 */
declare function waitForToast(text?: Automator.ToastFilter | null, timeout?: number): Automator.Toast;
declare function waitForToast(timeout: number): Automator.Toast;

/**
 * @see Internal.Automator.waitForNotification
 */
declare function waitForNotification(filter?: Automator.NotificationFilter | null, timeout?: number): org.autojs.autojs.core.notification.Notification;
declare function waitForNotification(timeout: number): org.autojs.autojs.core.notification.Notification;

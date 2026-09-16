// noinspection JSUnusedGlobalSymbols

// Type definitions for AutoJs6 internal module flow
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Sep 16, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/flow/Flow.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/flow/FlowNativeObject.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/flow/FlowArguments.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/flow/RuntimeFlowBindings.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/core/automator/flow/FlowError.kt
 */

declare namespace Internal {

    /**
     * The `flow` namespace object (also `$flow`). Callable: `flow(cond, ...)` is `flow.wait(cond, ...)`.
     * zh-CN: `flow` 命名空间对象 (亦即 `$flow`). 可调用: `flow(cond, ...)` 即 `flow.wait(cond, ...)`.
     * @example
     * flow.wait('Login', 5e3).click().then(() => console.log('clicked'));
     * @example
     * flow.all('Username', 'Password').then(([ user, pwd ]) => {
     *     user.setText('admin');
     *     pwd.setText('123456');
     * });
     */
    interface FlowApi extends Flow.WaitFunction<UiObject> {

        /** Waits for a condition; the same as the global `waitAsync` / `wait.async`. zh-CN: 等待条件; 同全局 `waitAsync` / `wait.async`. */
        wait: Flow.WaitFunction<UiObject>;

        waitAsync: Flow.WaitFunction<UiObject>;

        /** The same as `wait`, reading better with a predicate. zh-CN: 同 `wait`, 用于函数条件时语义更清晰. */
        waitUntil: Flow.WaitFunction<UiObject>;

        /** Waits until the condition no longer holds; fulfills `true`. zh-CN: 等待条件不再满足; 以 `true` fulfill. */
        waitWhile: Flow.WaitWhileFunction;

        /** Waits until the target has been unchanged for `stableFor` milliseconds. zh-CN: 等待目标连续 `stableFor` 毫秒无变化. */
        waitForStable: Flow.WaitFunction<UiObject>;

        /** Waits until the target is visible to the user and stable. zh-CN: 等待目标对用户可见且稳定. */
        waitForVisible: Flow.WaitFunction<UiObject>;

        /** Waits until the target has been absent or invisible for `stableFor` milliseconds. zh-CN: 等待目标连续 `stableFor` 毫秒不存在或不可见. */
        waitForHidden: Flow.WaitHiddenFunction;

        /** Alias of `waitForHidden`. */
        waitForGone: Flow.WaitHiddenFunction;

        /** Waits for `currentActivity()` to equal the name; fulfills `true`. zh-CN: 等待 `currentActivity()` 变为给定名称; 以 `true` fulfill. */
        waitForActivity: Flow.NativeWaitFunction;

        /** Waits for `currentPackage()` to equal the name; fulfills `true`. zh-CN: 等待 `currentPackage()` 变为给定包名; 以 `true` fulfill. */
        waitForPackage: Flow.NativeWaitFunction;

        /** `wait(cond, ...).click()`. */
        waitThenClick: Flow.WaitFunction<UiObject>;
        waitThenClickBounds: Flow.WaitFunction<UiObject>;

        /** Alias of `waitThenClick`. */
        clickWait: Flow.WaitFunction<UiObject>;
        clickBoundsWait: Flow.WaitFunction<UiObject>;

        /** `wait(cond, ...).longClick()`. */
        waitThenLongClick: Flow.WaitFunction<UiObject>;

        /** `waitForStable(cond, ...).click()`. */
        waitForStableThenClick: Flow.WaitFunction<UiObject>;
        waitForStableThenClickBounds: Flow.WaitFunction<UiObject>;

        /** Alias of `waitForStableThenClick`. */
        clickWhenStable: Flow.WaitFunction<UiObject>;
        clickBoundsWhenStable: Flow.WaitFunction<UiObject>;

        /** `waitForStable(cond, ...).sleep(delayMin, delayMax).click()`. */
        clickWhenStableAfter: Flow.WaitAfterFunction;
        clickBoundsWhenStableAfter: Flow.WaitAfterFunction;

        /**
         * Starts a chain with a sleep, as the global `sleep`. zh-CN: 以一次休眠起链, 参数同全局 `sleep`.
         */
        sleep(millis: number): Flow<void>;
        sleep(millisMin: number, millisMax: number | string): Flow<void>;

        /** Alias of `sleep`. */
        delay(millis: number): Flow<void>;
        delay(millisMin: number, millisMax: number | string): Flow<void>;

        /**
         * Runs `fn` on a flow worker thread; a returned Flow or Promise is adopted.
         * zh-CN: 在 Flow 工作线程上运行 `fn`; 返回 Flow 或 Promise 时采纳其结果.
         */
        run<R>(fn: () => R | Flow<R> | PromiseLike<R>): Flow<R>;

        /** A fulfilled chain with `value`. zh-CN: 以 `value` 起链的已 fulfill 的 Flow. */
        of<V>(value: V): Flow<V>;

        /**
         * The constructor of Flow objects (`x instanceof flow.Flow`); called with a Flow returns it, with a thenable adopts it, else `of`.
         * zh-CN: Flow 对象的构造函数 (`x instanceof flow.Flow`); 参数为 Flow 时原样返回, thenable 时采纳, 其余同 `of`.
         */
        Flow: Flow.Constructor;

        /** Promise-like `all`: an array of the results, rejected by the first rejection. zh-CN: 同 Promise 的 `all`: 结果数组, 首个拒绝即拒绝. */
        all(...sources: Flow.Source[]): Flow<any[]>;
        all(sources: Flow.Source[]): Flow<any[]>;

        /** Promise-like `race`: settled by the first source to settle. zh-CN: 同 Promise 的 `race`: 以最先结算的来源结算. */
        race(...sources: Flow.Source[]): Flow<any>;
        race(sources: Flow.Source[]): Flow<any>;

        /** Promise-like `any`: the first fulfillment, rejected when every source rejects. zh-CN: 同 Promise 的 `any`: 最先的 fulfill, 全部拒绝时拒绝. */
        any(...sources: Flow.Source[]): Flow<any>;
        any(sources: Flow.Source[]): Flow<any>;

        /** Cancels every pending flow of this script; returns how many. zh-CN: 取消本脚本全部待定的 Flow; 返回个数. */
        cancelAll(): number;

        /** Reads the per-script defaults, or writes the given keys and returns the new snapshot. zh-CN: 读取每脚本的默认值, 或写入给定的键并返回新快照. */
        defaults(): Flow.Defaults;
        defaults(options: Flow.DefaultsOptions): Flow.Defaults;

        /** Switches the console trace; returns whether it is on. zh-CN: 开关控制台追踪; 返回是否开启. */
        trace(on?: boolean): boolean;

        /** Pending (unsettled) flows of this script. zh-CN: 本脚本待定的 Flow 数. */
        readonly pending: number;

        /** Live flow worker threads of this script. zh-CN: 本脚本存活的 Flow 工作线程数. */
        readonly workers: number;

        // Toolkit roots (roadmap P4.2): the target is waited for by the flow defaults.
        // zh-CN: 工具集起点 (Roadmap P4.2): 目标按 Flow 默认值等待.

        smartClick(target: Automator.Target, options?: Automator.SmartClickOptions, onOk?: Flow.OnOk<Automator.SmartClickResult>, onErr?: Flow.OnErr): Flow<Automator.SmartClickResult>;

        smartClickBounds(target: Automator.Target, options?: Automator.ClickBoundsOptions, onOk?: Flow.OnOk<Automator.SmartClickBoundsResult>, onErr?: Flow.OnErr): Flow<Automator.SmartClickBoundsResult>;

        clickIfExists(target: Automator.Target, options?: Automator.SmartClickOptions | number, onOk?: Flow.OnOk<boolean>, onErr?: Flow.OnErr): Flow<boolean>;

        clickBoundsIfExists(target: Automator.Target, options?: Automator.ClickBoundsOptions | number, onOk?: Flow.OnOk<boolean>, onErr?: Flow.OnErr): Flow<boolean>;

        /** Optional handler on a worker; awaits returned work and preserves the root's null value. zh-CN: 工作线程上的可选处理; 等待返回的任务并透传起点的 null 值. */
        whenPresent(cond: Flow.SelectorCond, handler: (match: UiObject[]) => any, options: Flow.WhenPresentOptions & { resultType: '[]' }): Flow<null>;
        whenPresent<R = UiObject>(cond: Flow.Cond<R>, handler: (match: R) => any, options?: Flow.WhenPresentOptions): Flow<null>;

        repeatUntil: Flow.RepeatUntilFunction;

        clickAny(targets: Automator.Target | Automator.Target[], options?: Automator.SmartClickOptions | number, onOk?: Flow.OnOk<Automator.ClickedCandidate | null>, onErr?: Flow.OnErr): Flow<Automator.ClickedCandidate | null>;

        clickBoundsAny(targets: Automator.Target | Automator.Target[], options?: Automator.ClickBoundsOptions | number, onOk?: Flow.OnOk<Automator.ClickedBoundsCandidate | null>, onErr?: Flow.OnErr): Flow<Automator.ClickedBoundsCandidate | null>;

        findAny(targets: Automator.Target | Automator.Target[], options?: Automator.ToolOptions | number, onOk?: Flow.OnOk<Automator.FoundCandidate | null>, onErr?: Flow.OnErr): Flow<Automator.FoundCandidate | null>;

        scrollUntil(target: Automator.Target, options?: Automator.ScrollUntilOptions, onOk?: Flow.OnOk<UiObject>, onErr?: Flow.OnErr): Flow<UiObject>;

        typeInto(target: Automator.TextTarget, text: string, options?: Automator.TypeIntoOptions, onOk?: Flow.OnOk<UiObject>, onErr?: Flow.OnErr): Flow<UiObject>;

        dismissPopups(targets: Automator.Target | Automator.Target[], options?: Automator.DismissPopupsOptions | number, onOk?: Flow.OnOk<Automator.ClickedCandidate | Automator.ClickedCandidate[] | null>, onErr?: Flow.OnErr): Flow<Automator.ClickedCandidate | Automator.ClickedCandidate[] | null>;

        collectList(container: Automator.Target | null, item: Automator.Target, options?: Automator.CollectListOptions, onOk?: Flow.OnOk<any[]>, onErr?: Flow.OnErr): Flow<any[]>;

        launchAndWait(app: Automator.AppLike, options?: Automator.LaunchOptions | number, onOk?: Flow.OnOk<Automator.LaunchResult>, onErr?: Flow.OnErr): Flow<Automator.LaunchResult>;

        backUntil(cond: Automator.Target, options?: Automator.BackOptions | number, onOk?: Flow.OnOk<any>, onErr?: Flow.OnErr): Flow<any>;

        backToApp(app: Automator.AppLike, options?: Automator.BackOptions | number, onOk?: Flow.OnOk<string>, onErr?: Flow.OnErr): Flow<string>;

        toggle(target: Automator.Target, checked: boolean, options?: Automator.ToggleOptions, onOk?: Flow.OnOk<Automator.ToggleResult>, onErr?: Flow.OnErr): Flow<Automator.ToggleResult>;

        // Event-driven wait roots (roadmap P5.2). zh-CN: 事件驱动等待起点 (Roadmap P5.2).

        waitForIdle(quietFor?: number): Flow<Automator.IdleResult>;
        waitForIdle(options: Automator.IdleOptions): Flow<Automator.IdleResult>;

        waitForEvent(type?: string | string[] | null, filter?: Automator.EventFilter | null, timeout?: number): Flow<Automator.AccessibilityEvent>;
        waitForEvent(type: string | string[] | null, timeout: number, filter?: Automator.EventFilter | null): Flow<Automator.AccessibilityEvent>;

        waitForToast(text?: Automator.ToastFilter | null, timeout?: number): Flow<Automator.Toast>;
        waitForToast(timeout: number): Flow<Automator.Toast>;

        waitForNotification(filter?: Automator.NotificationFilter | null, timeout?: number): Flow<org.autojs.autojs.core.notification.Notification>;
        waitForNotification(timeout: number): Flow<org.autojs.autojs.core.notification.Notification>;

    }

}

/**
 * One step of an asynchronous wait-and-act chain and its settlement (roadmap P3). Every chain method returns a new
 * Flow for the appended step; the receiver is unchanged, so a Flow can be forked. Steps run on a flow worker thread,
 * callbacks (`then`, `catch`, `finally`, `map`, `filter`, `peek`) on the script thread that created the Flow, `run`
 * callbacks and condition functions on the worker thread. A script with pending flows does not exit.
 * zh-CN: 异步等待与动作链上的一个步骤及其结算 (Roadmap P3). 每个链式方法都为追加的步骤返回新的 Flow, 接收者不变, 因此可以分叉.
 * 步骤在 Flow 工作线程上运行, 回调 (`then`, `catch`, `finally`, `map`, `filter`, `peek`) 在创建 Flow 的脚本线程上运行, `run` 的回调
 * 与条件函数在工作线程上运行. 有待定 Flow 的脚本不会退出.
 * @example
 * let f = flow.wait('Login', 5e3);
 * f.click();
 * f.then(w => console.log(w.bounds()));
 * @example
 * let w = flow.wait('Login', 5e3).sync(); // throws a FlowError on timeout
 */
interface Flow<T = any> {

    /** `'pending'` | `'fulfilled'` | `'rejected'` | `'cancelled'`. */
    readonly state: Flow.State;

    /** The step name, such as `'wait'`, `'click'`, `'then'`. zh-CN: 步骤名, 如 `'wait'`, `'click'`, `'then'`. */
    readonly step: string;

    /** The value once fulfilled, else `undefined`. zh-CN: 已 fulfill 时的值, 否则为 `undefined`. */
    readonly value: T | undefined;

    /** The error once rejected, else `undefined`. zh-CN: 已拒绝时的错误, 否则为 `undefined`. */
    readonly error: Flow.FlowError | Error | undefined;

    // Waits appended after this step. zh-CN: 追加在本步骤之后的等待.

    wait: Flow.WaitFunction<UiObject>;
    waitUntil: Flow.WaitFunction<UiObject>;
    waitWhile: Flow.WaitWhileFunction;
    /** As `wait`, and the found node becomes the root of the following waits. zh-CN: 同 `wait`, 且找到的节点成为后续等待的根节点. */
    within: Flow.WaitFunction<UiObject>;
    waitForStable: Flow.WaitFunction<UiObject>;
    waitForVisible: Flow.WaitFunction<UiObject>;
    waitForHidden: Flow.WaitHiddenFunction;
    waitForGone: Flow.WaitHiddenFunction;
    waitForActivity: Flow.NativeWaitFunction;
    waitForPackage: Flow.NativeWaitFunction;
    waitThenClick: Flow.WaitFunction<UiObject>;
    waitThenClickBounds: Flow.WaitFunction<UiObject>;
    clickWait: Flow.WaitFunction<UiObject>;
    clickBoundsWait: Flow.WaitFunction<UiObject>;
    waitThenLongClick: Flow.WaitFunction<UiObject>;
    waitForStableThenClick: Flow.WaitFunction<UiObject>;
    waitForStableThenClickBounds: Flow.WaitFunction<UiObject>;
    clickWhenStable: Flow.WaitFunction<UiObject>;
    clickBoundsWhenStable: Flow.WaitFunction<UiObject>;
    clickWhenStableAfter: Flow.WaitAfterFunction;
    clickBoundsWhenStableAfter: Flow.WaitAfterFunction;

    // Node actions on the current value (a UiObject, a collection / array of them, or a point for click / longClick);
    // success keeps the target as the value, `false` rejects ACTION_FAILED under `strictActions`.
    // zh-CN: 对当前值 (UiObject, 其集合 / 数组, 或 click / longClick 的坐标点) 的节点动作; 成功时值仍为目标, `false` 在 `strictActions` 下以 ACTION_FAILED 拒绝.

    click(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    longClick(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    clickBounds(offsetX?: number, offsetY?: number, onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    setText(text: string, onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    appendText(text: string, onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    clear(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    paste(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    copy(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    cut(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    select(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    focus(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    clearFocus(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    scrollForward(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    scrollBackward(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    scrollUp(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    scrollDown(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    scrollLeft(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    scrollRight(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    expand(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    collapse(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    dismiss(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    show(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    contextClick(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    imeEnter(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    performAction(action: number | string, ...args: any[]): Flow<T>;
    /** A sleep, then `click`. zh-CN: 先休眠再 `click`. */
    clickAfter(millis: number, onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    clickBoundsAfter(millis: number, onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    clickAfter(millisMin: number, millisMax: number | string, onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    clickBoundsAfter(millisMin: number, millisMax: number | string, onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    /** A sleep, then `longClick`. zh-CN: 先休眠再 `longClick`. */
    longClickAfter(millis: number, onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    longClickAfter(millisMin: number, millisMax: number | string, onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;

    // Global actions of the automator module; the value passes through. zh-CN: automator 模块的全局动作; 透传当前值.

    back(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    home(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    recents(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    notifications(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    quickSettings(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    powerDialog(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    splitScreen(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    lockScreen(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    takeScreenshot(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    dismissNotificationShade(onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    press(x: number, y: number, duration: number): Flow<T>;
    press(point: Flow.Point, duration?: number): Flow<T>;
    swipe(x1: number, y1: number, x2: number, y2: number, duration?: number): Flow<T>;
    swipe(from: Flow.Point, to: Flow.Point, duration?: number): Flow<T>;
    gesture(duration: number, ...points: [x: number, y: number][]): Flow<T>;
    gestures(...strokes: Automator.StrokeParams[]): Flow<T>;

    // Toolkit steps (roadmap P4.2) over the current value. zh-CN: 以当前值为目标的工具集步骤 (Roadmap P4.2).

    /** Smart-clicks the current node. zh-CN: 智能点击当前节点. */
    smartClick(options?: Automator.SmartClickOptions, onOk?: Flow.OnOk<Automator.SmartClickResult>, onErr?: Flow.OnErr): Flow<Automator.SmartClickResult>;
    smartClickBounds(options?: Automator.ClickBoundsOptions, onOk?: Flow.OnOk<Automator.SmartClickBoundsResult>, onErr?: Flow.OnErr): Flow<Automator.SmartClickBoundsResult>;

    /** Explicit target; defaults to one lookup. Missing returns false, action errors reject. */
    clickIfExists(target: Automator.Target, options?: Automator.SmartClickOptions | number, onOk?: Flow.OnOk<boolean>, onErr?: Flow.OnErr): Flow<boolean>;
    clickBoundsIfExists(target: Automator.Target, options?: Automator.ClickBoundsOptions | number, onOk?: Flow.OnOk<boolean>, onErr?: Flow.OnErr): Flow<boolean>;
    clickAny(targets: Automator.Target | Automator.Target[], options?: Automator.SmartClickOptions | number, onOk?: Flow.OnOk<Automator.ClickedCandidate | null>, onErr?: Flow.OnErr): Flow<Automator.ClickedCandidate | null>;
    clickBoundsAny(targets: Automator.Target | Automator.Target[], options?: Automator.ClickBoundsOptions | number, onOk?: Flow.OnOk<Automator.ClickedBoundsCandidate | null>, onErr?: Flow.OnErr): Flow<Automator.ClickedBoundsCandidate | null>;
    findAny(targets: Automator.Target | Automator.Target[], options?: Automator.ToolOptions | number, onOk?: Flow.OnOk<Automator.FoundCandidate | null>, onErr?: Flow.OnErr): Flow<Automator.FoundCandidate | null>;

    /** Skips absence only, awaits the handler's Flow/Promise, and preserves T. Handler runs on a worker. zh-CN: 仅在目标缺失时跳过, 等待处理器返回的 Flow/Promise 并透传 T; 处理器在工作线程运行. */
    whenPresent(cond: Flow.SelectorCond, handler: (match: UiObject[]) => any, options: Flow.WhenPresentOptions & { resultType: '[]' }): Flow<T>;
    whenPresent<R = UiObject>(cond: Flow.Cond<R>, handler: (match: R) => any, options?: Flow.WhenPresentOptions): Flow<T>;
    repeatUntil: Flow.RepeatUntilFunction;
    /** Scrolls the current node (the container, unless `options.container` is given) until `target` shows up. zh-CN: 滚动当前节点 (容器, 除非给出 `options.container`) 直到 `target` 出现. */
    scrollUntil(target: Automator.Target, options?: Automator.ScrollUntilOptions, onOk?: Flow.OnOk<UiObject>, onErr?: Flow.OnErr): Flow<UiObject>;
    /** Types into the current node (`null`: the focused field). zh-CN: 向当前节点输入 (`null`: 焦点输入框). */
    typeInto(text: string, options?: Automator.TypeIntoOptions, onOk?: Flow.OnOk<UiObject>, onErr?: Flow.OnErr): Flow<UiObject>;
    /** Closes popups once (or all with `once: false`) and passes the value through. zh-CN: 关闭弹窗一次 (`once: false` 时全部) 并透传当前值. */
    dismissPopups(targets: Automator.Target | Automator.Target[], options?: Automator.DismissPopupsOptions, onOk?: Flow.OnOk<T>, onErr?: Flow.OnErr): Flow<T>;
    /** Harvests the list in the current node (`null`: the largest scrollable node). zh-CN: 采集当前节点 (`null`: 面积最大的可滚动节点) 中的列表. */
    collectList(item: Automator.Target, options?: Automator.CollectListOptions, onOk?: Flow.OnOk<any[]>, onErr?: Flow.OnErr): Flow<any[]>;
    launchAndWait(app: Automator.AppLike, options?: Automator.LaunchOptions, onOk?: Flow.OnOk<Automator.LaunchResult>, onErr?: Flow.OnErr): Flow<Automator.LaunchResult>;
    backUntil(cond: Automator.Target, options?: Automator.BackOptions, onOk?: Flow.OnOk<any>, onErr?: Flow.OnErr): Flow<any>;
    backToApp(app: Automator.AppLike, options?: Automator.BackOptions, onOk?: Flow.OnOk<string>, onErr?: Flow.OnErr): Flow<string>;
    /** Sets the checked state of the current node. zh-CN: 设置当前节点的选中状态. */
    toggle(checked: boolean, options?: Automator.ToggleOptions, onOk?: Flow.OnOk<Automator.ToggleResult>, onErr?: Flow.OnErr): Flow<Automator.ToggleResult>;

    // Event-driven wait steps (roadmap P5.2). zh-CN: 事件驱动等待步骤 (Roadmap P5.2).

    /** Waits for the screen to stay quiet and passes the value through. zh-CN: 等待界面安静并透传当前值. */
    waitForIdle(quietFor?: number): Flow<T>;
    waitForIdle(options: Automator.IdleOptions): Flow<T>;
    waitForEvent(type?: string | string[] | null, filter?: Automator.EventFilter | null, timeout?: number): Flow<Automator.AccessibilityEvent>;
    waitForEvent(type: string | string[] | null, timeout: number, filter?: Automator.EventFilter | null): Flow<Automator.AccessibilityEvent>;
    waitForToast(text?: Automator.ToastFilter | null, timeout?: number): Flow<Automator.Toast>;
    waitForToast(timeout: number): Flow<Automator.Toast>;
    waitForNotification(filter?: Automator.NotificationFilter | null, timeout?: number): Flow<org.autojs.autojs.core.notification.Notification>;
    waitForNotification(timeout: number): Flow<org.autojs.autojs.core.notification.Notification>;

    // Timing, scope and retries. zh-CN: 计时, 作用域与重试.

    /** Sleeps and passes the value through, as the global `sleep`. zh-CN: 休眠后透传当前值, 参数同全局 `sleep`. */
    sleep(millis: number): Flow<T>;
    sleep(millisMin: number, millisMax: number | string): Flow<T>;
    delay(millis: number): Flow<T>;
    delay(millisMin: number, millisMax: number | string): Flow<T>;
    /** A deadline for the rest of the chain: later waits are clipped, later steps reject TIMEOUT (reason `chain`). zh-CN: 链其余部分的截止: 之后的等待被截短, 截止后的步骤以 TIMEOUT (reason `chain`) 拒绝. */
    timeout(millis: number): Flow<T>;
    /** Reruns the previous step up to `times` more times when it rejected. zh-CN: 上一步骤拒绝时最多重跑 `times` 次. */
    retry(times?: number, delay?: number): Flow<T>;
    /** The scope (root, compass, result type) of the following waits. zh-CN: 后续等待的作用域 (根节点, 罗盘, 结果类型). */
    scope(options: Flow.ScopeOptions): Flow<T>;

    // Callbacks on the creating script thread (Promise semantics). zh-CN: 在创建线程上的回调 (Promise 语义).

    then<R1 = T, R2 = never>(onOk?: ((value: T) => R1 | Flow<R1> | PromiseLike<R1>) | null, onErr?: ((error: Flow.FlowError | any) => R2 | Flow<R2> | PromiseLike<R2>) | null): Flow<R1 | R2>;
    catch<R = never>(onErr: (error: Flow.FlowError | any) => R | Flow<R> | PromiseLike<R>): Flow<T | R>;
    /** Alias of `catch`. */
    else<R = never>(onErr: (error: Flow.FlowError | any) => R | Flow<R> | PromiseLike<R>): Flow<T | R>;
    finally(fn: () => any): Flow<T>;
    map<R>(fn: (value: T) => R | Flow<R> | PromiseLike<R>): Flow<R>;
    /** Rejects INVALID_TARGET (reason `filtered out`) when `fn` returns a falsy value. zh-CN: `fn` 返回假值时以 INVALID_TARGET (reason `filtered out`) 拒绝. */
    filter(fn: (value: T) => any): Flow<T>;
    /** Observes the value and passes it through. zh-CN: 观察值并透传. */
    peek(fn: (value: T) => any): Flow<T>;
    /** `then` executed on the flow worker thread (blocking calls allowed, no UI, no `sync`). zh-CN: 在 Flow 工作线程上执行的 `then` (可阻塞, 不可操作 UI, 不可 `sync`). */
    run<R1 = T, R2 = never>(onOk?: ((value: T) => R1 | Flow<R1> | PromiseLike<R1>) | null, onErr?: ((error: Flow.FlowError | any) => R2 | Flow<R2> | PromiseLike<R2>) | null): Flow<R1 | R2>;

    // Terminals. zh-CN: 终结.

    /**
     * Blocks until settled: the value, or the rejection thrown; `timeout` (default none) throws TIMEOUT (reason `sync`).
     * Not on the UI thread or a flow worker thread. zh-CN: 阻塞直到结算: 返回值或抛出拒绝; `timeout` (默认不限) 到期抛出 TIMEOUT (reason `sync`).
     * 不可在 UI 线程或 Flow 工作线程调用.
     */
    sync(timeout?: number): T;

    /** `toPromise().await()` (continuation mode). zh-CN: `toPromise().await()` (续体模式). */
    await(): T;

    /** A Promise settled on the script thread. zh-CN: 在脚本线程上结算的 Promise. */
    toPromise(): Promise<T>;

    /** Cancels this flow (and unobserved pending ancestors); whether anything was cancelled. zh-CN: 取消本 Flow (及无其它分支的待定祖先); 是否取消了什么. */
    cancel(): boolean;

    /** `Flow(<step>, <state>)`. */
    toString(): string;

}

declare namespace Flow {

    type State = 'pending' | 'fulfilled' | 'rejected' | 'cancelled';

    type ErrorCode = 'TIMEOUT' | 'ACTION_FAILED' | 'CANCELLED' | 'A11Y_UNAVAILABLE' | 'INVALID_TARGET';

    /**
     * The error of a failed step (`name` is `'FlowError'`); also thrown by the synchronous toolkit and event-wait functions.
     * zh-CN: 步骤失败的错误 (`name` 为 `'FlowError'`); 工具集与事件等待的同步函数也抛出它.
     */
    interface FlowError extends Error {
        /** Async step creation stack, when available. zh-CN: 可用时提供异步步骤创建栈. */
        readonly flowStack?: string;
        readonly name: 'FlowError';
        readonly code: ErrorCode;
        /** The failed step, such as `'wait'`, `'click'`, `'smartClick'`, `'sync'`. zh-CN: 失败的步骤, 如 `'wait'`, `'click'`, `'smartClick'`, `'sync'`. */
        readonly step: string;
        /** The description of the awaited target, or `null`. zh-CN: 等待目标的描述, 或 `null`. */
        readonly selector: string | null;
        /** Milliseconds spent before a timeout, else 0. zh-CN: 超时前已等待的毫秒数, 其余为 0. */
        readonly elapsed: number;
        /** Attempts made before a timeout, else 0. zh-CN: 超时前的尝试次数, 其余为 0. */
        readonly attempts: number;
        /** A refinement of the code (`'chain'`, `'sync'`, `'noTarget'`, `'verify'`, ...), or `null`. zh-CN: 代码的细化原因 (`'chain'`, `'sync'`, `'noTarget'`, `'verify'`, ...), 或 `null`. */
        readonly reason: string | null;
    }

    /** A selector-like condition: the `pickup` selector forms (a string is a content match), or a node to refresh. zh-CN: 选择器类条件: `pickup` 的各种选择器形式 (字符串为内容匹配), 或待刷新的节点. */
    type SelectorCond = Pickup.Selector | number | UiObject;

    /** Any wait condition. zh-CN: 任意等待条件. */
    type Cond<T = any> = SelectorCond | (() => T) | Flow<T> | PromiseLike<T>;

    type OnOk<T, R = any> = (value: T) => R;

    type OnErr<R = any> = (error: FlowError) => R;

    type Compare = 'fingerprint' | 'bounds' | 'content' | ((prev: any, next: any) => boolean);

    type Missing = 'reset' | 'fail';

    /** Milliseconds, `[min, max]`, `[min, '±delta']` or a `'±delta'` string, as the global `sleep`. zh-CN: 毫秒数, `[min, max]`, `[min, '±delta']` 或 `'±delta'` 字符串, 同全局 `sleep`. */
    type Delay = number | [min: number, max: number] | [min: number, delta: string] | string;

    type Point = [x: number, y: number] | { x: number; y: number } | android.graphics.Point | org.opencv.core.Point;

    type Source = Flow<any> | PromiseLike<any> | Cond;

    interface WaitOptions {
        /** Default `flow.defaults().timeout` (10000); `Infinity` for none, 0 for a single attempt. zh-CN: 默认 `flow.defaults().timeout` (10000); `Infinity` 不限, 0 为单次尝试. */
        timeout?: number;
        /** Default `flow.defaults().interval` (200). */
        interval?: number;
        /** The maximum number of attempts; default none. zh-CN: 最多尝试次数; 默认不限. */
        times?: number;
        /** The search root of a selector condition. zh-CN: 选择器条件的查找根节点. */
        root?: UiObject;
        /** A compass applied to the found node. zh-CN: 应用于找到的节点的罗盘. */
        compass?: Detect.Compass;
        /** The `pickup` result type of a selector condition. zh-CN: 选择器条件的 `pickup` 结果类型. */
        resultType?: Pickup.ResultType;
        /** Stability waits: the unchanged span in milliseconds; default `flow.defaults().stableFor` (0). zh-CN: 稳定类等待: 无变化时长 (毫秒); 默认 `flow.defaults().stableFor` (0). */
        stableFor?: number;
        /** Stability waits: what is compared between sightings; default `'fingerprint'`. zh-CN: 稳定类等待: 两次看到目标之间比较什么; 默认 `'fingerprint'`. */
        compare?: Compare;
        /** A worker-side projection copied structurally at sampling time. Mutually exclusive with compare; resolves the original sample. zh-CN: 在工作线程采样并按结构复制投影值; 与 compare 互斥, 仍以原始样本结算. */
        snapshot?: (value: any) => Snapshot;
        /** Stability waits: what to do when the target disappears; default `'reset'`. zh-CN: 稳定类等待: 目标消失时的处理; 默认 `'reset'`. */
        missing?: Missing;
        /** Whether a following action reporting `false` rejects; default `flow.defaults().strictActions`. zh-CN: 随后的动作返回 `false` 时是否拒绝; 默认 `flow.defaults().strictActions`. */
        strict?: boolean;
        /** Keep waiting through an accessibility service outage; default `flow.defaults().recoverService` (false). zh-CN: 无障碍服务中断期间继续等待; 默认 `flow.defaults().recoverService` (false). */
        recoverService?: boolean;
        /** The pause before the action of the `*After` forms. zh-CN: `*After` 形式动作前的延时. */
        delay?: Delay;
    }

    interface ScopeOptions {
        root?: UiObject;
        compass?: Detect.Compass;
        resultType?: Pickup.ResultType;
    }

    type Snapshot = null | undefined | boolean | number | string | Snapshot[] | { [key: string]: Snapshot };

    type WhenPresentOptions = Pick<WaitOptions, 'timeout' | 'interval' | 'times' | 'root' | 'compass' | 'resultType' | 'recoverService'>;

    interface RepeatUntilOptions extends ScopeOptions {
        /** Finite total milliseconds, default flow.defaults().timeout; 0 checks once without an action. */
        timeout?: number;
        /** Maximum action invocations, including the first; default 0 means unlimited, subject to timeout. Non-negative integer. */
        maxAttempts?: number;
        /** Delay between actions, default flow.defaults().interval. */
        interval?: number;
        /** Synchronous worker predicate for action errors; default propagate. Cancellation never retries. */
        retryOn?: (error: any, attempt: number) => boolean;
    }

    interface RepeatUntilFunction {
        (action: (attempt: number) => any, cond: SelectorCond, options: RepeatUntilOptions & { resultType: '[]' }): Flow<UiObject[]>;
        (action: (attempt: number) => any, cond: SelectorCond, options?: RepeatUntilOptions): Flow<UiObject>;
        <R>(action: (attempt: number) => any, cond: (() => R) | Flow<R> | PromiseLike<R>, options?: RepeatUntilOptions): Flow<R>;
    }

    interface Defaults {
        timeout: number;
        interval: number;
        stableFor: number;
        strictActions: boolean;
        humanize: { offset: [number, number]; delay: [number, number] };
        recoverService: boolean;
        trace: boolean;
    }

    interface DefaultsOptions {
        timeout?: number;
        interval?: number;
        stableFor?: number;
        strictActions?: boolean;
        humanize?: Automator.HumanizeLike;
        recoverService?: boolean;
        trace?: boolean;
    }

    /** `(cond, timeout?, interval?, onOk?, onErr?)` or `(cond, options, onOk?, onErr?)`. */
    interface WaitFunction<V = any> {
        (cond: SelectorCond, options: WaitOptions & { resultType: '[]' }, onOk?: OnOk<UiObject[]>, onErr?: OnErr): Flow<UiObject[]>;
        (cond: SelectorCond, timeout?: number, interval?: number, onOk?: OnOk<V>, onErr?: OnErr): Flow<V>;
        (cond: SelectorCond, options: WaitOptions, onOk?: OnOk<V>, onErr?: OnErr): Flow<V>;
        <T>(cond: () => T, timeout?: number, interval?: number, onOk?: OnOk<T>, onErr?: OnErr): Flow<T>;
        <T>(cond: () => T, options: WaitOptions, onOk?: OnOk<T>, onErr?: OnErr): Flow<T>;
        <T>(cond: Flow<T> | PromiseLike<T>, timeout?: number, interval?: number, onOk?: OnOk<T>, onErr?: OnErr): Flow<T>;
        <T>(cond: Flow<T> | PromiseLike<T>, options: WaitOptions, onOk?: OnOk<T>, onErr?: OnErr): Flow<T>;
    }

    /** `waitWhile`: fulfills `true` once the condition stops holding. zh-CN: `waitWhile`: 条件不再满足时以 `true` fulfill. */
    interface WaitWhileFunction {
        (cond: Cond, timeout?: number, interval?: number, onOk?: OnOk<boolean>, onErr?: OnErr): Flow<boolean>;
        (cond: Cond, options: WaitOptions, onOk?: OnOk<boolean>, onErr?: OnErr): Flow<boolean>;
    }

    /** `waitForHidden` / `waitForGone`: fulfills `true` once the target has stayed absent or invisible. zh-CN: `waitForHidden` / `waitForGone`: 目标持续不存在或不可见后以 `true` fulfill. */
    interface WaitHiddenFunction {
        (cond: Cond, timeout?: number, interval?: number, onOk?: OnOk<boolean>, onErr?: OnErr): Flow<boolean>;
        (cond: Cond, options: WaitOptions, onOk?: OnOk<boolean>, onErr?: OnErr): Flow<boolean>;
    }

    /** `waitForActivity(name, ...)` / `waitForPackage(name, ...)`. */
    interface NativeWaitFunction {
        (name: string, timeout?: number, interval?: number, onOk?: OnOk<boolean>, onErr?: OnErr): Flow<boolean>;
        (name: string, options: WaitOptions, onOk?: OnOk<boolean>, onErr?: OnErr): Flow<boolean>;
    }

    /** `clickWhenStableAfter(cond, timeout?, interval?, delayMin?, delayMax?, onOk?, onErr?)` or `(cond, options, onOk?, onErr?)`. */
    interface WaitAfterFunction {
        (cond: SelectorCond, timeout?: number, interval?: number, delayMin?: number, delayMax?: number | string, onOk?: OnOk<UiObject>, onErr?: OnErr): Flow<UiObject>;
        (cond: SelectorCond, options: WaitOptions, onOk?: OnOk<UiObject>, onErr?: OnErr): Flow<UiObject>;
    }

    /** `flow.Flow`: callable and constructable. zh-CN: `flow.Flow`: 可调用亦可构造. */
    interface Constructor {
        new(value?: any): Flow<any>;
        (value?: any): Flow<any>;
        readonly prototype: Flow<any>;
    }

}

/** The asynchronous `wait`; also `wait.async`. zh-CN: 异步的 `wait`; 亦即 `wait.async`. */
declare const waitAsync: Flow.WaitFunction<UiObject>;

declare const waitThenClick: Flow.WaitFunction<UiObject>;

declare const waitThenClickBounds: Flow.WaitFunction<UiObject>;

declare const clickWait: Flow.WaitFunction<UiObject>;

declare const clickBoundsWait: Flow.WaitFunction<UiObject>;

declare const waitForStable: Flow.WaitFunction<UiObject>;

declare const waitForStableThenClick: Flow.WaitFunction<UiObject>;

declare const waitForStableThenClickBounds: Flow.WaitFunction<UiObject>;

declare const clickWhenStable: Flow.WaitFunction<UiObject>;

declare const clickBoundsWhenStable: Flow.WaitFunction<UiObject>;

declare const waitForVisible: Flow.WaitFunction<UiObject>;

declare const waitForHidden: Flow.WaitHiddenFunction;

declare const waitForGone: Flow.WaitHiddenFunction;

declare const clickWhenStableAfter: Flow.WaitAfterFunction;

declare const clickBoundsWhenStableAfter: Flow.WaitAfterFunction;

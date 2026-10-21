/** Async Flow chains run on the importing Node main thread or Worker. */
declare module "flow" {
  namespace flow {
    interface FlowError extends Error {
      readonly code: "TIMEOUT" | "ACTION_FAILED" | "CANCELLED" | "A11Y_UNAVAILABLE" | "INVALID_TARGET";
      readonly step: string;
      readonly selector: string | null;
      readonly elapsed: number;
      readonly attempts: number;
      readonly reason: string | null;
    }
    interface FlowErrorConstructor {
      new(code: FlowError["code"], step: string, selector?: string | null, elapsed?: number, attempts?: number, reason?: string | null): FlowError;
      (code: FlowError["code"], step: string, selector?: string | null, elapsed?: number, attempts?: number, reason?: string | null): FlowError;
      readonly prototype: FlowError;
    }
    interface Bounds { left: number; top: number; right: number; bottom: number; }
    type Pattern = string | RegExp | {pattern: string; flags?: string};
    /** Exact IDs/class names; regexes use whole-value Android matching with i/m/s flags. */
    interface Selector {
      text?: string; textContains?: string; textMatches?: Pattern;
      desc?: string; descContains?: string; descMatches?: Pattern;
      id?: string; idMatches?: Pattern; className?: string; classNameMatches?: Pattern;
      content?: string; contentMatches?: Pattern;
      clickable?: boolean; enabled?: boolean; scrollable?: boolean; visibleToUser?: boolean;
      checkable?: boolean; checked?: boolean; editable?: boolean; focused?: boolean; selected?: boolean;
      depth?: number; boundsInside?: Bounds; boundsContains?: Bounds;
    }
    /** Immutable-in-origin JSON data. Actions relocate a unique matching node in the same window; stale snapshots reject. */
    interface NodeSnapshot {
      text: string; desc: string | null; id: string | null; className: string | null;
      bounds: Bounds; clickable: boolean; enabled: boolean; visibleToUser: boolean;
      scrollable: boolean; checked: boolean; selected: boolean; packageName: string;
      windowId: number; depth: number; indexInParent: number;
      checkable: boolean; editable: boolean; focused: boolean;
    }
    type Point = readonly [x: number, y: number];
    interface PointValue { x: number; y: number; }
    type Stroke = readonly [duration: number, first: Point, ...points: Point[]] | readonly [start: number, duration: number, first: Point, ...points: Point[]];
    type WidgetResult = "#" | "w" | "widget";
    type WidgetsResult = "[]" | "ws" | "widgets" | "{}" | "wc" | "collection" | "list" | "##" | "#[]" | "[#]" | "w[]" | "[w]" | "#{}" | "{#}" | "w{}" | "{w}";
    type ContentResult = "$" | "txt" | "content";
    type ContentsResult = "contents" | "$$" | "$[]" | "[$]" | "txt[]" | "[txt]" | "content[]" | "[content]";
    type PointResult = "." | "pt" | "point";
    type PointsResult = "points" | "pts" | ".." | ".[]" | "[.]" | "point[]" | "[point]" | "pt[]" | "[pt]";
    type NumericProjection = "childCount" | "width" | "height" | "centerX" | "centerY" | "left" | "top" | "right" | "bottom";
    type Projection = NodeProperty | NumericProjection | "parent" | "point" | "content";
    type ResultType = WidgetResult | WidgetsResult | ContentResult | ContentsResult | PointResult | PointsResult | "?" | "exists" | "@" | "selector" | "sel" | Projection | "" |
      readonly [] | readonly [Projection | WidgetResult | ContentResult | PointResult] | readonly ["child", number] | readonly ["compass", string];
    /** Collections are JSON arrays; projections expose documented data and navigation, never Java reflection. */
    type ResultOf<R> = R extends readonly ["child", number] | readonly ["compass", string] ? NodeSnapshot :
      R extends readonly [] | readonly [WidgetResult] ? NodeSnapshot[] :
      R extends readonly ["$" | "txt"] ? string[] : R extends readonly ["." | "pt"] ? PointValue[] :
      R extends readonly [infer P] ? ResultOf<P> : R extends NodeProperty ? NodeSnapshot[R] :
      R extends NumericProjection ? number : R extends "parent" | WidgetResult ? NodeSnapshot :
      R extends WidgetsResult ? NodeSnapshot[] : R extends ContentResult ? string : R extends ContentsResult ? string[] :
      R extends PointResult ? PointValue : R extends PointsResult ? PointValue[] :
      R extends "?" | "exists" ? true : R extends "@" | "selector" | "sel" ? Selector : never;
    interface ScopeOptions {
      /** A fresh snapshot. Non-null fields override inherited scope; null/undefined keep it. */
      root?: NodeSnapshot | null; compass?: string | null; resultType?: ResultType | null;
    }
    type Condition<T> = (() => T | PromiseLike<T>) | PromiseLike<T>;
    interface Humanize { offset?: number | [number, number]; delay?: number | [number, number]; }
    interface Defaults { timeout: number; interval: number; stableFor: number; recoverService: boolean; trace: boolean; strictActions: boolean; humanize: Humanize | false; }
    interface WaitOptions<T = unknown> extends ScopeOptions {
      /** Milliseconds, 10000 by default; Infinity is unbounded, 0 performs one probe. */
      timeout?: number;
      /** Milliseconds, 200 by default. */
      interval?: number;
      /** Maximum probes, a positive integer or Infinity. */
      times?: number;
      /** Milliseconds of continuous stability, 100 by default. */
      stableFor?: number;
      compare?: "fingerprint" | "bounds" | "content" | ((previous: T, next: T) => boolean | PromiseLike<boolean>);
      /** An acyclic projection copied after each sample. Mutually exclusive with compare. */
      snapshot?: (value: T) => unknown | PromiseLike<unknown>;
      missing?: "reset" | "fail";
      /** Wait quietly through service outages; this does not grant permissions or open Settings. */
      recoverService?: boolean;
    }
    interface Wait<S = NodeSnapshot> {
      (node: NodeSnapshot, options?: WaitOptions<NodeSnapshot>): Flow<NodeSnapshot, S>;
      <R extends ResultType>(selector: Selector | string | RegExp, options: WaitOptions<ResultOf<R>> & {resultType: R}): Flow<ResultOf<R>, S>;
      <R extends ResultType, U = ResultOf<R>>(selector: Selector | string | RegExp, options: WaitOptions<ResultOf<R>> & {resultType: R}, onOk: Success<ResultOf<R>, U> | null, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      <T>(condition: Condition<T>, options?: WaitOptions<T>): Flow<T, S>;
      <T>(condition: Condition<T>, timeout?: number, interval?: number): Flow<T, S>;
      (selector: Selector | string | RegExp, options?: WaitOptions<S>): Flow<S, S>;
      (selector: Selector | string | RegExp, timeout?: number, interval?: number): Flow<S, S>;
      <T, U = T>(condition: Condition<T>, options: WaitOptions<T>, onOk?: Success<T, U> | null, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      <U = S>(selector: Selector | string | RegExp, options: WaitOptions<S>, onOk?: Success<S, U> | null, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
    }
    interface BooleanWait<S = NodeSnapshot> {
      (condition: Condition<unknown> | NodeSnapshot | Selector | string | RegExp, options?: WaitOptions): Flow<boolean, S>;
      (condition: Condition<unknown> | NodeSnapshot | Selector | string | RegExp, timeout?: number, interval?: number): Flow<boolean, S>;
    }
    interface ComponentWait<S = NodeSnapshot> {
      (name: string, options?: WaitOptions<boolean>): Flow<boolean, S>;
      (name: string, timeout?: number, interval?: number): Flow<boolean, S>;
    }
    type OptionalOptions = Pick<WaitOptions, "timeout" | "interval" | "times" | "recoverService" | "root" | "compass" | "resultType">;
    interface RepeatOptions extends ScopeOptions {
      timeout?: number; interval?: number;
      /** Maximum actions; 0 is unlimited within the finite timeout. */
      maxAttempts?: number;
      retryOn?: (error: unknown, attempt: number) => boolean | PromiseLike<boolean>;
    }
    interface Waits<S = NodeSnapshot> {
      readonly wait: Wait<S>; readonly waitUntil: Wait<S>; readonly waitWhile: BooleanWait<S>;
      readonly waitForStable: Wait<S>; readonly waitForVisible: Wait<S>;
      readonly waitForHidden: BooleanWait<S>; readonly waitForGone: BooleanWait<S>;
      readonly waitForActivity: ComponentWait<S>; readonly waitForPackage: ComponentWait<S>;
    }
    type Target = Selector | string | RegExp | NodeSnapshot | (() => NodeSnapshot | null | PromiseLike<NodeSnapshot | null>);
    type Probe = Target | (() => unknown) | boolean | number;
    interface ToolOptions {
      /** Bounds the whole portable operation, including callbacks. Infinity is unbounded. With 0, locate once under the captured default operation budget. */
      timeout?: number; interval?: number; root?: Target; humanize?: Humanize | boolean;
    }
    interface SmartClickOptions extends ToolOptions {
      climb?: boolean; maxClimb?: number;
      /** True by default and requires the gesture grant before the first click. */
      gestureFallback?: boolean;
      verify?: Probe; verifyTimeout?: number; verifyInterval?: number; offset?: number | [number, number];
    }
    type BoundsClickOptions = Omit<SmartClickOptions, "climb" | "maxClimb" | "gestureFallback">;
    interface ClickResult { ok: true; method: "node" | "ancestor" | "gesture"; target: NodeSnapshot; verified: unknown; }
    interface Found { index: number; target: Target; node: NodeSnapshot; }
    interface Clicked extends Found { method: ClickResult["method"]; verified: unknown; }
    type Dismissed = Clicked;
    interface ScrollOptions extends ToolOptions {
      container?: Target; direction?: "up" | "down" | "left" | "right"; maxSteps?: number;
      method?: "action" | "gesture"; stopAtEnd?: boolean; settle?: number; gestureDuration?: number;
    }
    interface TypeIntoOptions extends ToolOptions { clear?: boolean; submit?: boolean; verify?: boolean; verifyTimeout?: number; verifyInterval?: number; }
    interface PopupOptions extends ToolOptions {
      once?: boolean;
      /** Flow supports finite dismissal passes; persistent watch belongs to the Rhino synchronous API. */
      watch?: false;
      settle?: number; maxRounds?: number; debounce?: number; click?: SmartClickOptions;
    }
    type NodeProperty = "text" | "desc" | "id" | "className" | "packageName" | "bounds" | "depth" | "indexInParent" | "clickable" | "enabled" | "scrollable" | "visibleToUser" | "checked" | "checkable" | "editable" | "focused" | "selected";
    interface CollectOptions<T = string> extends Omit<ScrollOptions, "container" | "stopAtEnd"> {
      resultType?: "$" | "#" | NodeProperty | ((node: NodeSnapshot) => T | PromiseLike<T>);
      dedupe?: boolean; until?: (item: T) => unknown; maxItems?: number;
    }
    interface LaunchOptions { timeout?: number; interval?: number; bringToFront?: boolean; }
    interface LaunchResult { packageName: string; launched: boolean; elapsed: number; attempts: number; }
    interface BackOptions extends ToolOptions { maxTimes?: number; delay?: number; }
    interface ToggleOptions extends ToolOptions { verifyTimeout?: number; verifyInterval?: number; click?: SmartClickOptions; }
    interface ToggleResult { node: NodeSnapshot; changed: boolean; checked: boolean; method: ClickResult["method"] | null; }
    type Success<T, U> = (value: T) => U | PromiseLike<U>;
    interface ToolCall<A extends unknown[], O, R, S = NodeSnapshot> {
      (...args: [...positional: A, options?: O]): Flow<R, S>;
      <U = R>(...args: [...positional: A, options: O | undefined, onOk: Success<R, U> | null, onError?: (error: unknown) => U | PromiseLike<U>]): Flow<U, S>;
      <U = R>(...args: [...positional: A, onOk: Success<R, U>, onError?: (error: unknown) => U | PromiseLike<U>]): Flow<U, S>;
    }
    interface CollectRoot<S = NodeSnapshot> {
      (container: Target | null, item: Target, options?: Omit<CollectOptions<string>, "resultType"> & {resultType?: "$"}): Flow<string[], S>;
      (container: Target | null, item: Target, options: CollectOptions<NodeSnapshot> & {resultType: "#"}): Flow<NodeSnapshot[], S>;
      <K extends NodeProperty>(container: Target | null, item: Target, options: CollectOptions<NodeSnapshot[K]> & {resultType: K}): Flow<NodeSnapshot[K][], S>;
      <T>(container: Target | null, item: Target, options: CollectOptions<T> & {resultType: (node: NodeSnapshot) => T | PromiseLike<T>}): Flow<T[], S>;
    }
    interface CollectChain<S = NodeSnapshot> {
      (item: Target, options?: Omit<CollectOptions<string>, "resultType"> & {resultType?: "$"}): Flow<string[], S>;
      (item: Target, options: CollectOptions<NodeSnapshot> & {resultType: "#"}): Flow<NodeSnapshot[], S>;
      <K extends NodeProperty>(item: Target, options: CollectOptions<NodeSnapshot[K]> & {resultType: K}): Flow<NodeSnapshot[K][], S>;
      <T>(item: Target, options: CollectOptions<T> & {resultType: (node: NodeSnapshot) => T | PromiseLike<T>}): Flow<T[], S>;
    }
    interface SharedTools<S = NodeSnapshot> {
      readonly clickIfExists: ToolCall<[target: Target], SmartClickOptions | number, boolean, S>;
      readonly clickBoundsIfExists: ToolCall<[target: Target], BoundsClickOptions | number, boolean, S>;
      readonly clickAny: ToolCall<[targets: readonly Target[]], SmartClickOptions | number, Clicked | null, S>;
      readonly clickBoundsAny: ToolCall<[targets: readonly Target[]], BoundsClickOptions | number, Clicked | null, S>;
      readonly findAny: ToolCall<[targets: readonly Target[]], ToolOptions | number, Found | null, S>;
      /** On a chain, the incoming value supplies container when options.container is absent. */
      readonly scrollUntil: ToolCall<[target: Target], ScrollOptions, NodeSnapshot, S>;
      readonly launchAndWait: ToolCall<[app: string], LaunchOptions | number, LaunchResult, S>;
      readonly backUntil: ToolCall<[condition: Probe], BackOptions | number, unknown, S>;
      readonly backToApp: ToolCall<[app: string], BackOptions | number, string, S>;
    }
    interface ClickWaitOptions extends WaitOptions<NodeSnapshot> { strict?: boolean; delay?: number | [number, number]; }
    interface ClickWait<S = NodeSnapshot> {
      (target: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, options?: ClickWaitOptions): Flow<NodeSnapshot, S>;
      (target: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, timeout?: number, interval?: number): Flow<NodeSnapshot, S>;
      <T = NodeSnapshot>(target: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, options: ClickWaitOptions, onOk: Success<NodeSnapshot, T> | null, onError?: (error: unknown) => T | PromiseLike<T>): Flow<T, S>;
    }
    interface ClickWaitAfter<S = NodeSnapshot> {
      (target: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, options: ClickWaitOptions & {delay: number | [number, number]}): Flow<NodeSnapshot, S>;
      (target: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, timeout: number, interval: number, delayMin: number, delayMax?: number): Flow<NodeSnapshot, S>;
    }
    interface ClickWaits<S = NodeSnapshot> {
      readonly waitThenClick: ClickWait<S>; readonly clickWait: ClickWait<S>;
      readonly waitThenClickBounds: ClickWait<S>; readonly clickBoundsWait: ClickWait<S>; readonly waitThenLongClick: ClickWait<S>;
      readonly waitForStableThenClick: ClickWait<S>; readonly clickWhenStable: ClickWait<S>;
      readonly waitForStableThenClickBounds: ClickWait<S>; readonly clickBoundsWhenStable: ClickWait<S>;
      readonly clickWhenStableAfter: ClickWaitAfter<S>; readonly clickBoundsWhenStableAfter: ClickWaitAfter<S>;
    }
    interface EventFlow<T, S = NodeSnapshot> extends Flow<T, S> {
      /** Resolves after the actual listener is installed. Rejects if installation or the wait fails first. */
      readonly ready: Promise<void>;
    }
    type EventTypes = string | number | readonly (string | number)[] | null;
    interface IdleOptions { quietFor?: number; timeout?: number; eventTypes?: EventTypes; }
    interface IdleResult { quietFor: number; elapsed: number; events: number; }
    interface AccessibilityEventSnapshot { type: string; eventType: number; packageName: string; className: string; text: string; contentDescription: string; eventTime: number; windowId: number; contentChangeTypes: number; }
    interface ToastSnapshot { type: "toast"; packageName: string; text: string; }
    interface NotificationSnapshot { type: "notification"; packageName: string; title: string; text: string; }
    type EventFilter = {packageName?: Pattern; className?: Pattern; text?: Pattern} | ((event: AccessibilityEventSnapshot) => unknown);
    type ToastFilter = Pattern | {packageName?: Pattern; text?: Pattern} | ((toast: ToastSnapshot) => unknown);
    type NotificationFilter = Pattern | {packageName?: Pattern; title?: Pattern; text?: Pattern} | ((notification: NotificationSnapshot) => unknown);
    interface EventWaits<T, S = NodeSnapshot> {
      waitForIdle(options?: IdleOptions | number): EventFlow<T, S>;
      waitForEvent(types?: EventTypes, filter?: EventFilter | null, timeout?: number): EventFlow<AccessibilityEventSnapshot, S>;
      waitForEvent(types: EventTypes, timeout: number): EventFlow<AccessibilityEventSnapshot, S>;
      waitForToast(filter?: ToastFilter | null, timeout?: number): EventFlow<ToastSnapshot, S>;
      waitForToast(timeout: number): EventFlow<ToastSnapshot, S>;
      waitForNotification(filter?: NotificationFilter | null, timeout?: number): EventFlow<NotificationSnapshot, S>;
      waitForNotification(timeout: number): EventFlow<NotificationSnapshot, S>;
    }
    interface ActionCall<A extends unknown[], T = NodeSnapshot, S = NodeSnapshot> {
      (...args: A): Flow<T | false, S>;
      <U = T | false>(...args: [...positional: A, onOk: Success<T | false, U>, onError?: (error: unknown) => U | PromiseLike<U>]): Flow<U, S>;
    }
    interface NodeActions<T = NodeSnapshot, S = NodeSnapshot> {
      readonly click: ActionCall<[], T, S>; readonly longClick: ActionCall<[], T, S>; readonly clickBounds: ActionCall<[offsetX?: number, offsetY?: number], T, S>;
      readonly setText: ActionCall<[text: string], T, S>; readonly appendText: ActionCall<[text: string], T, S>;
      readonly clear: ActionCall<[], T, S>; readonly paste: ActionCall<[], T, S>; readonly copy: ActionCall<[], T, S>; readonly cut: ActionCall<[], T, S>;
      readonly select: ActionCall<[], T, S>; readonly focus: ActionCall<[], T, S>; readonly clearFocus: ActionCall<[], T, S>;
      readonly scrollForward: ActionCall<[], T, S>; readonly scrollBackward: ActionCall<[], T, S>; readonly scrollUp: ActionCall<[], T, S>; readonly scrollDown: ActionCall<[], T, S>; readonly scrollLeft: ActionCall<[], T, S>; readonly scrollRight: ActionCall<[], T, S>;
      readonly expand: ActionCall<[], T, S>; readonly collapse: ActionCall<[], T, S>; readonly dismiss: ActionCall<[], T, S>; readonly show: ActionCall<[], T, S>; readonly contextClick: ActionCall<[], T, S>; readonly imeEnter: ActionCall<[], T, S>;
      readonly performAction: ActionCall<[action: number, arguments?: Record<string, string | number | boolean>], T, S>;
      clickAfter(min: number, max?: number): Flow<T | false, S>; clickBoundsAfter(min: number, max?: number): Flow<T | false, S>; longClickAfter(min: number, max?: number): Flow<T | false, S>;
    }
    interface Flow<T, S = NodeSnapshot> extends PromiseLike<T>, Waits<S>, SharedTools<S>, ClickWaits<S>, EventWaits<T, S>, NodeActions<T, S> {
      /** Set the root for following waits/tools. A non-node result rejects INVALID_TARGET. */
      within(condition: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, options?: WaitOptions<NodeSnapshot>): Flow<NodeSnapshot, S>;
      within(condition: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, timeout?: number, interval?: number): Flow<NodeSnapshot, S>;
      within<U = NodeSnapshot>(condition: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, options: WaitOptions<NodeSnapshot>, onOk: Success<NodeSnapshot, U> | null, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      within<U = NodeSnapshot>(condition: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, onOk: Success<NodeSnapshot, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      within<U = NodeSnapshot>(condition: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, timeout: number | undefined, interval: number | undefined, onOk: Success<NodeSnapshot, U> | null, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      scope<R extends ResultType>(options: ScopeOptions & {resultType: R}): Flow<T, ResultOf<R>>;
      scope(options: Omit<ScopeOptions, "resultType"> & {resultType?: null}): Flow<T, S>;
      scope(options: ScopeOptions): Flow<T, unknown>;
      /** Global gestures preserve T. Coordinates are pixels; omitted press duration uses Android's tap timeout. */
      press(point: Point, duration?: number): Flow<T, S>;
      press(x: number, y: number, duration?: number): Flow<T, S>;
      press(duration: number, point: Point): Flow<T, S>;
      press<U = T>(point: Point, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      press<U = T>(point: Point, duration: number, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      press<U = T>(x: number, y: number, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      press<U = T>(x: number, y: number, duration: number, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      press<U = T>(duration: number, point: Point, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      swipe(x1: number, y1: number, x2: number, y2: number, duration: number): Flow<T, S>;
      swipe(pointA: Point, pointB: Point, duration: number): Flow<T, S>;
      swipe(points: readonly [Point, Point] | readonly [number, number, number, number], duration: number): Flow<T, S>;
      swipe(duration: number, pointA: Point, pointB: Point): Flow<T, S>;
      swipe(duration: number, points: readonly [Point, Point] | readonly [number, number, number, number]): Flow<T, S>;
      swipe<U = T>(x1: number, y1: number, x2: number, y2: number, duration: number, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      swipe<U = T>(pointA: Point, pointB: Point, duration: number, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      swipe<U = T>(points: readonly [Point, Point] | readonly [number, number, number, number], duration: number, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      swipe<U = T>(duration: number, pointA: Point, pointB: Point, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      swipe<U = T>(duration: number, points: readonly [Point, Point] | readonly [number, number, number, number], onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      gesture(duration: number, first: Point, ...points: Point[]): Flow<T, S>;
      gesture(duration: number, points: readonly Point[] | readonly number[]): Flow<T, S>;
      gesture<U = T>(duration: number, first: Point, ...rest: [...points: Point[], onOk: Success<T, U>]): Flow<U, S>;
      gesture<U = T>(duration: number, first: Point, ...rest: [...points: Point[], onOk: Success<T, U>, onError: (error: unknown) => U | PromiseLike<U>]): Flow<U, S>;
      gesture<U = T>(duration: number, points: readonly Point[] | readonly number[], onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      gestures(first: Stroke, ...strokes: Stroke[]): Flow<T, S>;
      gestures<U = T>(first: Stroke, ...rest: [...strokes: Stroke[], onOk: Success<T, U>]): Flow<U, S>;
      gestures<U = T>(first: Stroke, ...rest: [...strokes: Stroke[], onOk: Success<T, U>, onError: (error: unknown) => U | PromiseLike<U>]): Flow<U, S>;
      readonly smartClick: ToolCall<[], SmartClickOptions, ClickResult, S>;
      readonly smartClickBounds: ToolCall<[], BoundsClickOptions, ClickResult, S>;
      readonly typeInto: ToolCall<[text: string], TypeIntoOptions, NodeSnapshot, S>;
      readonly collectList: CollectChain<S>;
      readonly dismissPopups: ToolCall<[targets: readonly Target[]], PopupOptions | number, T, S>;
      readonly toggle: ToolCall<[checked: boolean], ToggleOptions, ToggleResult, S>;
      back(): Flow<T, S>; home(): Flow<T, S>; recents(): Flow<T, S>; notifications(): Flow<T, S>; quickSettings(): Flow<T, S>;
      powerDialog(): Flow<T, S>; splitScreen(): Flow<T, S>; lockScreen(): Flow<T, S>; takeScreenshot(): Flow<T, S>; dismissNotificationShade(): Flow<T, S>;
      readonly state: "pending" | "fulfilled" | "rejected" | "cancelled";
      readonly step: string; readonly value: T | undefined; readonly error: unknown;
      then<U = T, V = never>(onOk?: ((value: T) => U | PromiseLike<U>) | null, onError?: ((error: any) => V | PromiseLike<V>) | null): Flow<U | V, S>;
      catch<U = never>(onError: (error: any) => U | PromiseLike<U>): Flow<T | U, S>;
      else<U = never>(onError: (error: any) => U | PromiseLike<U>): Flow<T | U, S>;
      finally(callback: () => unknown): Flow<T, S>;
      map<U>(callback: (value: T) => U | PromiseLike<U>): Flow<U, S>;
      run<U>(callback: (value: T) => U | PromiseLike<U>): Flow<U, S>;
      peek(callback: (value: T) => unknown): Flow<T, S>;
      filter(callback: (value: T) => unknown): Flow<T, S>;
      sleep(min: number, max?: number): Flow<T, S>;
      delay(min: number, max?: number): Flow<T, S>;
      /** Sets a deadline for steps appended after this one, starting when this step runs. */
      timeout(milliseconds: number): Flow<T, S>;
      /** Reruns only the preceding failed step; never reruns a cancelled step or adopted Promise. */
      retry(times?: number, delay?: number): Flow<T, S>;
      whenPresent<U>(condition: Condition<U>, handler: (value: U) => unknown, options?: OptionalOptions): Flow<T, S>;
      whenPresent(node: NodeSnapshot, handler: (value: NodeSnapshot) => unknown, options?: OptionalOptions): Flow<T, S>;
      whenPresent<R extends ResultType>(selector: Selector | string | RegExp, handler: (value: ResultOf<R>) => unknown, options: OptionalOptions & {resultType: R}): Flow<T, S>;
      whenPresent(selector: Selector | string | RegExp, handler: (value: S) => unknown, options?: OptionalOptions): Flow<T, S>;
      repeatUntil<U>(action: (attempt: number) => unknown, condition: Condition<U>, options?: RepeatOptions): Flow<U, S>;
      repeatUntil(action: (attempt: number) => unknown, node: NodeSnapshot, options?: RepeatOptions): Flow<NodeSnapshot, S>;
      repeatUntil<R extends ResultType>(action: (attempt: number) => unknown, selector: Selector | string | RegExp, options: RepeatOptions & {resultType: R}): Flow<ResultOf<R>, S>;
      repeatUntil(action: (attempt: number) => unknown, selector: Selector | string | RegExp, options?: RepeatOptions): Flow<S, S>;
      cancel(): boolean;
      toPromise(): Promise<T>;
      toString(): string;
    }
    interface FlowConstructor {
      <T>(value: T | PromiseLike<T>): Flow<T>;
      new<T>(value: T | PromiseLike<T>): Flow<T>;
      (): Flow<undefined>; new(): Flow<undefined>;
    }
    type Source<T> = Condition<T> | NodeSnapshot | Selector | string | RegExp;
    interface API extends Waits, Wait, SharedTools, ClickWaits, EventWaits<IdleResult> {
      readonly smartClick: ToolCall<[target: Target], SmartClickOptions, ClickResult>;
      readonly smartClickBounds: ToolCall<[target: Target], BoundsClickOptions, ClickResult>;
      readonly typeInto: ToolCall<[target: Target | number | null, text: string], TypeIntoOptions, NodeSnapshot>;
      readonly collectList: CollectRoot;
      readonly dismissPopups: ToolCall<[targets: readonly Target[]], PopupOptions | number, Dismissed | Dismissed[] | null>;
      readonly toggle: ToolCall<[target: Target, checked: boolean], ToggleOptions, ToggleResult>;
      /** Cancel pending work, close this facade's native client and reject subsequent native tool calls. */
      dispose(): Promise<void>;
      readonly Flow: FlowConstructor; readonly FlowError: FlowErrorConstructor;
      readonly waitAsync: Wait;
      readonly pending: number;
      /** Number of this facade's pending native tool/event operations; local chains do not add workers. */
      readonly workers: number;
      of<T>(value: T | PromiseLike<T>): Flow<T>; of(): Flow<undefined>;
      run<T>(callback: () => T | PromiseLike<T>): Flow<T>;
      sleep(min: number, max?: number): Flow<undefined>; delay(min: number, max?: number): Flow<undefined>;
      all<T>(sources: readonly Source<T>[]): Flow<Array<T | NodeSnapshot>>;
      all<T>(...sources: Source<T>[]): Flow<Array<T | NodeSnapshot>>;
      race<T>(sources: readonly Source<T>[]): Flow<T | NodeSnapshot>; race<T>(...sources: Source<T>[]): Flow<T | NodeSnapshot>;
      any<T>(sources: readonly Source<T>[]): Flow<T | NodeSnapshot>; any<T>(...sources: Source<T>[]): Flow<T | NodeSnapshot>;
      whenPresent<T>(condition: Condition<T>, handler: (value: T) => unknown, options?: OptionalOptions): Flow<undefined>;
      whenPresent(node: NodeSnapshot, handler: (value: NodeSnapshot) => unknown, options?: OptionalOptions): Flow<undefined>;
      whenPresent<R extends ResultType>(selector: Selector | string | RegExp, handler: (value: ResultOf<R>) => unknown, options: OptionalOptions & {resultType: R}): Flow<undefined>;
      whenPresent(selector: Selector | string | RegExp, handler: (value: NodeSnapshot) => unknown, options?: OptionalOptions): Flow<undefined>;
      repeatUntil<T>(action: (attempt: number) => unknown, condition: Condition<T>, options?: RepeatOptions): Flow<T>;
      repeatUntil(action: (attempt: number) => unknown, node: NodeSnapshot, options?: RepeatOptions): Flow<NodeSnapshot>;
      repeatUntil<R extends ResultType>(action: (attempt: number) => unknown, selector: Selector | string | RegExp, options: RepeatOptions & {resultType: R}): Flow<ResultOf<R>>;
      repeatUntil(action: (attempt: number) => unknown, selector: Selector | string | RegExp, options?: RepeatOptions): Flow<NodeSnapshot>;
      cancelAll(): number; defaults(options?: Partial<Defaults>): Defaults; trace(enabled?: boolean): boolean;
    }
  }
  const flow: flow.API;
  export = flow;
}
declare module "autojs6:flow" { import flow = require("flow"); export = flow; }

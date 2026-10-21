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
    type Condition<T> = (() => T | PromiseLike<T>) | PromiseLike<T>;
    interface Humanize { offset?: number | [number, number]; delay?: number | [number, number]; }
    interface Defaults { timeout: number; interval: number; stableFor: number; recoverService: boolean; trace: boolean; strictActions: boolean; humanize: Humanize | false; }
    interface WaitOptions<T = unknown> {
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
    interface Wait {
      <T>(condition: Condition<T>, options?: WaitOptions<T>): Flow<T>;
      <T>(condition: Condition<T>, timeout?: number, interval?: number): Flow<T>;
      (selector: Selector | string | RegExp, options?: WaitOptions<NodeSnapshot>): Flow<NodeSnapshot>;
      (selector: Selector | string | RegExp, timeout?: number, interval?: number): Flow<NodeSnapshot>;
      <T, U = T>(condition: Condition<T>, options: WaitOptions<T>, onOk?: ((value: T) => U | PromiseLike<U>) | null, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U>;
      <U = NodeSnapshot>(selector: Selector | string | RegExp, options: WaitOptions<NodeSnapshot>, onOk?: ((value: NodeSnapshot) => U | PromiseLike<U>) | null, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U>;
    }
    interface BooleanWait {
      (condition: Condition<unknown> | Selector | string | RegExp, options?: WaitOptions): Flow<boolean>;
      (condition: Condition<unknown> | Selector | string | RegExp, timeout?: number, interval?: number): Flow<boolean>;
    }
    interface ComponentWait {
      (name: string, options?: WaitOptions<boolean>): Flow<boolean>;
      (name: string, timeout?: number, interval?: number): Flow<boolean>;
    }
    type OptionalOptions = Pick<WaitOptions, "timeout" | "interval" | "times" | "recoverService">;
    interface RepeatOptions {
      timeout?: number; interval?: number;
      /** Maximum actions; 0 is unlimited within the finite timeout. */
      maxAttempts?: number;
      retryOn?: (error: unknown, attempt: number) => boolean | PromiseLike<boolean>;
    }
    interface Waits {
      readonly wait: Wait; readonly waitUntil: Wait; readonly waitWhile: BooleanWait;
      readonly waitForStable: Wait; readonly waitForVisible: Wait;
      readonly waitForHidden: BooleanWait; readonly waitForGone: BooleanWait;
      readonly waitForActivity: ComponentWait; readonly waitForPackage: ComponentWait;
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
    interface ToolCall<A extends unknown[], O, R> {
      (...args: [...positional: A, options?: O]): Flow<R>;
      <U = R>(...args: [...positional: A, options: O | undefined, onOk: Success<R, U> | null, onError?: (error: unknown) => U | PromiseLike<U>]): Flow<U>;
      <U = R>(...args: [...positional: A, onOk: Success<R, U>, onError?: (error: unknown) => U | PromiseLike<U>]): Flow<U>;
    }
    interface CollectRoot {
      (container: Target | null, item: Target, options?: Omit<CollectOptions<string>, "resultType"> & {resultType?: "$"}): Flow<string[]>;
      (container: Target | null, item: Target, options: CollectOptions<NodeSnapshot> & {resultType: "#"}): Flow<NodeSnapshot[]>;
      <K extends NodeProperty>(container: Target | null, item: Target, options: CollectOptions<NodeSnapshot[K]> & {resultType: K}): Flow<NodeSnapshot[K][]>;
      <T>(container: Target | null, item: Target, options: CollectOptions<T> & {resultType: (node: NodeSnapshot) => T | PromiseLike<T>}): Flow<T[]>;
    }
    interface CollectChain {
      (item: Target, options?: Omit<CollectOptions<string>, "resultType"> & {resultType?: "$"}): Flow<string[]>;
      (item: Target, options: CollectOptions<NodeSnapshot> & {resultType: "#"}): Flow<NodeSnapshot[]>;
      <K extends NodeProperty>(item: Target, options: CollectOptions<NodeSnapshot[K]> & {resultType: K}): Flow<NodeSnapshot[K][]>;
      <T>(item: Target, options: CollectOptions<T> & {resultType: (node: NodeSnapshot) => T | PromiseLike<T>}): Flow<T[]>;
    }
    interface SharedTools {
      readonly clickIfExists: ToolCall<[target: Target], SmartClickOptions | number, boolean>;
      readonly clickBoundsIfExists: ToolCall<[target: Target], BoundsClickOptions | number, boolean>;
      readonly clickAny: ToolCall<[targets: readonly Target[]], SmartClickOptions | number, Clicked | null>;
      readonly clickBoundsAny: ToolCall<[targets: readonly Target[]], BoundsClickOptions | number, Clicked | null>;
      readonly findAny: ToolCall<[targets: readonly Target[]], ToolOptions | number, Found | null>;
      /** On a chain, the incoming value supplies container when options.container is absent. */
      readonly scrollUntil: ToolCall<[target: Target], ScrollOptions, NodeSnapshot>;
      readonly launchAndWait: ToolCall<[app: string], LaunchOptions | number, LaunchResult>;
      readonly backUntil: ToolCall<[condition: Probe], BackOptions | number, unknown>;
      readonly backToApp: ToolCall<[app: string], BackOptions | number, string>;
    }
    interface ClickWaitOptions extends WaitOptions<NodeSnapshot> { strict?: boolean; delay?: number | [number, number]; }
    interface ClickWait {
      (target: Selector | string | RegExp | Condition<NodeSnapshot>, options?: ClickWaitOptions): Flow<NodeSnapshot>;
      (target: Selector | string | RegExp | Condition<NodeSnapshot>, timeout?: number, interval?: number): Flow<NodeSnapshot>;
      <T = NodeSnapshot>(target: Selector | string | RegExp | Condition<NodeSnapshot>, options: ClickWaitOptions, onOk: Success<NodeSnapshot, T> | null, onError?: (error: unknown) => T | PromiseLike<T>): Flow<T>;
    }
    interface ClickWaitAfter {
      (target: Selector | string | RegExp | Condition<NodeSnapshot>, options: ClickWaitOptions & {delay: number | [number, number]}): Flow<NodeSnapshot>;
      (target: Selector | string | RegExp | Condition<NodeSnapshot>, timeout: number, interval: number, delayMin: number, delayMax?: number): Flow<NodeSnapshot>;
    }
    interface ClickWaits {
      readonly waitThenClick: ClickWait; readonly clickWait: ClickWait;
      readonly waitThenClickBounds: ClickWait; readonly clickBoundsWait: ClickWait; readonly waitThenLongClick: ClickWait;
      readonly waitForStableThenClick: ClickWait; readonly clickWhenStable: ClickWait;
      readonly waitForStableThenClickBounds: ClickWait; readonly clickBoundsWhenStable: ClickWait;
      readonly clickWhenStableAfter: ClickWaitAfter; readonly clickBoundsWhenStableAfter: ClickWaitAfter;
    }
    interface EventFlow<T> extends Flow<T> {
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
    interface EventWaits<TIdle> {
      waitForIdle(options?: IdleOptions | number): EventFlow<TIdle>;
      waitForEvent(types?: EventTypes, filter?: EventFilter | null, timeout?: number): EventFlow<AccessibilityEventSnapshot>;
      waitForEvent(types: EventTypes, timeout: number): EventFlow<AccessibilityEventSnapshot>;
      waitForToast(filter?: ToastFilter | null, timeout?: number): EventFlow<ToastSnapshot>;
      waitForToast(timeout: number): EventFlow<ToastSnapshot>;
      waitForNotification(filter?: NotificationFilter | null, timeout?: number): EventFlow<NotificationSnapshot>;
      waitForNotification(timeout: number): EventFlow<NotificationSnapshot>;
    }
    interface ActionCall<A extends unknown[]> {
      (...args: A): Flow<NodeSnapshot>;
      <T = NodeSnapshot>(...args: [...positional: A, onOk: Success<NodeSnapshot, T>, onError?: (error: unknown) => T | PromiseLike<T>]): Flow<T>;
    }
    interface NodeActions {
      readonly click: ActionCall<[]>; readonly longClick: ActionCall<[]>; readonly clickBounds: ActionCall<[offsetX?: number, offsetY?: number]>;
      readonly setText: ActionCall<[text: string]>; readonly appendText: ActionCall<[text: string]>;
      readonly clear: ActionCall<[]>; readonly paste: ActionCall<[]>; readonly copy: ActionCall<[]>; readonly cut: ActionCall<[]>;
      readonly select: ActionCall<[]>; readonly focus: ActionCall<[]>; readonly clearFocus: ActionCall<[]>;
      readonly scrollForward: ActionCall<[]>; readonly scrollBackward: ActionCall<[]>; readonly scrollUp: ActionCall<[]>; readonly scrollDown: ActionCall<[]>; readonly scrollLeft: ActionCall<[]>; readonly scrollRight: ActionCall<[]>;
      readonly expand: ActionCall<[]>; readonly collapse: ActionCall<[]>; readonly dismiss: ActionCall<[]>; readonly show: ActionCall<[]>; readonly contextClick: ActionCall<[]>; readonly imeEnter: ActionCall<[]>;
      readonly performAction: ActionCall<[action: number, arguments?: Record<string, string | number | boolean>]>;
      clickAfter(min: number, max?: number): Flow<NodeSnapshot>; clickBoundsAfter(min: number, max?: number): Flow<NodeSnapshot>; longClickAfter(min: number, max?: number): Flow<NodeSnapshot>;
    }
    interface Flow<T> extends PromiseLike<T>, Waits, SharedTools, ClickWaits, EventWaits<T>, NodeActions {
      readonly smartClick: ToolCall<[], SmartClickOptions, ClickResult>;
      readonly smartClickBounds: ToolCall<[], BoundsClickOptions, ClickResult>;
      readonly typeInto: ToolCall<[text: string], TypeIntoOptions, NodeSnapshot>;
      readonly collectList: CollectChain;
      readonly dismissPopups: ToolCall<[targets: readonly Target[]], PopupOptions | number, T>;
      readonly toggle: ToolCall<[checked: boolean], ToggleOptions, ToggleResult>;
      back(): Flow<T>; home(): Flow<T>; recents(): Flow<T>; notifications(): Flow<T>; quickSettings(): Flow<T>;
      powerDialog(): Flow<T>; splitScreen(): Flow<T>; lockScreen(): Flow<T>; takeScreenshot(): Flow<T>; dismissNotificationShade(): Flow<T>;
      readonly state: "pending" | "fulfilled" | "rejected" | "cancelled";
      readonly step: string; readonly value: T | undefined; readonly error: unknown;
      then<U = T, V = never>(onOk?: ((value: T) => U | PromiseLike<U>) | null, onError?: ((error: any) => V | PromiseLike<V>) | null): Flow<U | V>;
      catch<U = never>(onError: (error: any) => U | PromiseLike<U>): Flow<T | U>;
      else<U = never>(onError: (error: any) => U | PromiseLike<U>): Flow<T | U>;
      finally(callback: () => unknown): Flow<T>;
      map<U>(callback: (value: T) => U | PromiseLike<U>): Flow<U>;
      run<U>(callback: (value: T) => U | PromiseLike<U>): Flow<U>;
      peek(callback: (value: T) => unknown): Flow<T>;
      filter(callback: (value: T) => unknown): Flow<T>;
      sleep(min: number, max?: number): Flow<T>;
      delay(min: number, max?: number): Flow<T>;
      /** Sets a deadline for steps appended after this one, starting when this step runs. */
      timeout(milliseconds: number): Flow<T>;
      /** Reruns only the preceding failed step; never reruns a cancelled step or adopted Promise. */
      retry(times?: number, delay?: number): Flow<T>;
      whenPresent<U>(condition: Condition<U>, handler: (value: U) => unknown, options?: OptionalOptions): Flow<T>;
      whenPresent(selector: Selector | string | RegExp, handler: (value: NodeSnapshot) => unknown, options?: OptionalOptions): Flow<T>;
      repeatUntil<U>(action: (attempt: number) => unknown, condition: Condition<U>, options?: RepeatOptions): Flow<U>;
      repeatUntil(action: (attempt: number) => unknown, selector: Selector | string | RegExp, options?: RepeatOptions): Flow<NodeSnapshot>;
      cancel(): boolean;
      toPromise(): Promise<T>;
      toString(): string;
    }
    interface FlowConstructor {
      <T>(value: T | PromiseLike<T>): Flow<T>;
      new<T>(value: T | PromiseLike<T>): Flow<T>;
      (): Flow<undefined>; new(): Flow<undefined>;
    }
    type Source<T> = Condition<T> | Selector | string | RegExp;
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
      whenPresent(selector: Selector | string | RegExp, handler: (value: NodeSnapshot) => unknown, options?: OptionalOptions): Flow<undefined>;
      repeatUntil<T>(action: (attempt: number) => unknown, condition: Condition<T>, options?: RepeatOptions): Flow<T>;
      repeatUntil(action: (attempt: number) => unknown, selector: Selector | string | RegExp, options?: RepeatOptions): Flow<NodeSnapshot>;
      cancelAll(): number; defaults(options?: Partial<Defaults>): Defaults; trace(enabled?: boolean): boolean;
    }
  }
  const flow: flow.API;
  export = flow;
}
declare module "autojs6:flow" { import flow = require("flow"); export = flow; }

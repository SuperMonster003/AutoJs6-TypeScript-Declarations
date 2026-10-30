declare module "autojs6:events" {
  namespace hostEvents {
    export interface EventBase { readonly type: string; readonly time: number; readonly source: string; }
    export interface NotificationEvent extends EventBase {
      readonly type: "notification";
      readonly id: number;
      readonly key: string;
      readonly packageName: string;
      readonly tag: string | null;
      readonly title: string;
      readonly text: string;
      readonly postTime: number;
    }
    export interface ToastEvent extends EventBase {
      readonly type: "toast";
      readonly packageName: string;
      readonly text: string;
    }
    export interface KeyEvent extends EventBase {
      readonly type: "key";
      readonly key: string;
      readonly keyCode: number;
      readonly action: "up" | "down";
      readonly repeatCount: number;
      readonly eventTime: number;
    }
    export interface BatteryEvent extends EventBase {
      readonly type: "battery_changed";
      readonly level: number;
      readonly scale: number;
      readonly percent: number;
      readonly isCharging: boolean;
    }
    export interface ObserveOptions extends AutoJs6Node.BridgeCallOptions {
      /** Polling interval for Bun/Workers, default 100 ms, in 25..60000. */
      drainIntervalMs?: number;
    }
    export interface OverflowEvent extends EventBase { readonly type: "overflow"; readonly dropped: number; }
    export interface CloseEvent extends EventBase { readonly type: "close"; readonly reason: string; }
    export type Event = NotificationEvent | ToastEvent | KeyEvent | BatteryEvent | OverflowEvent | CloseEvent | EventBase;
    export interface EventMap {
      notification: NotificationEvent;
      toast: ToastEvent;
      key: KeyEvent;
      battery_changed: BatteryEvent;
      screen_on: EventBase;
      screen_off: EventBase;
      close: CloseEvent;
      overflow: OverflowEvent;
      error: Error;
      event: Event;
    }
    export interface Listeners {
      on<K extends keyof EventMap>(event: K, listener: (event: EventMap[K]) => void): this;
      once<K extends keyof EventMap>(event: K, listener: (event: EventMap[K]) => void): this;
      off<K extends keyof EventMap>(event: K, listener: (event: EventMap[K]) => void): this;
    }
    export interface Subscription extends Listeners {
      readonly id: string;
      readonly source: "notification" | "toast" | "key" | "broadcast";
      readonly closed: boolean;
      drainEvents(options?: AutoJs6Node.BridgeCallOptions): Promise<readonly Event[]>;
      close(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
    }
    export interface TouchEvent extends EventBase { readonly type: "touch"; readonly x: number; readonly y: number; }
    /** Rhino's EventEmitter on a Node EventEmitter: emitSticky reaches later listeners at once. */
    export interface RhinoEmitter {
      on(event: string | symbol, listener: (...args: any[]) => void): this;
      once(event: string | symbol, listener: (...args: any[]) => void): this;
      addListener(event: string | symbol, listener: (...args: any[]) => void): this;
      prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
      prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
      off(event: string | symbol, listener: (...args: any[]) => void): this;
      removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
      removeAllListeners(event?: string | symbol): this;
      emit(event: string | symbol, ...args: unknown[]): boolean;
      emitSticky(event: string | symbol, ...args: unknown[]): boolean;
      eventNames(): (string | symbol)[];
      listenerCount(event: string | symbol): number;
      getTimer(): unknown;
    }
    /** Rhino's events.broadcast: emit reaches the broadcast listeners of every script (this one's too). */
    export interface Broadcast {
      emit(event: string, ...args: unknown[]): Promise<boolean>;
      on(event: string, listener: (...args: any[]) => void): this;
      addListener(event: string, listener: (...args: any[]) => void): this;
      once(event: string, listener: (...args: any[]) => void): this;
      off(event: string, listener: (...args: any[]) => void): this;
      removeListener(event: string, listener: (...args: any[]) => void): this;
      removeAllListeners(event?: string): this;
      listenerCount(event: string): number;
      eventNames(): (string | symbol)[];
    }
    export interface EventsModule extends Listeners {
      /** Requires events + events.notification and Android notification-listener access. */
      observeNotification(options?: ObserveOptions): Promise<Subscription>;
      /** Requires events + events.toast and accessibility. Observes external apps' Toast messages. */
      observeToast(options?: ObserveOptions): Promise<Subscription>;
      /** Requires events + events.key and accessibility. Never intercepts hardware keys. */
      observeKey(options?: ObserveOptions): Promise<Subscription>;
      /** Requires events. on/once for screen or battery also starts this subscription. */
      observeBroadcasts(options?: ObserveOptions): Promise<Subscription>;
      /** Closes this client's sources and removes module listeners. Script termination also releases sources. */
      close(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      /**
       * Rhino's events module (api-coverage P3.4). Key events also reach the key name, __key_down__#name / __key_up__#name
       * and key_down / key_up (keyCode, event); sticky events reach later listeners at once; an error event without
       * listeners is not thrown.
       */
      on(event: string | symbol, listener: (...args: any[]) => void): this;
      once(event: string | symbol, listener: (...args: any[]) => void): this;
      off(event: string | symbol, listener: (...args: any[]) => void): this;
      addListener(event: string | symbol, listener: (...args: any[]) => void): this;
      prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
      prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
      removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
      removeAllListeners(event?: string | symbol): this;
      emit(event: string | symbol, ...args: unknown[]): boolean;
      emitSticky(event: string | symbol, ...args: unknown[]): boolean;
      eventNames(): (string | symbol)[];
      getMaxListeners(): number;
      setMaxListeners(count: number): this;
      listenerCount(event: string | symbol): number;
      listeners(event: string | symbol): Function[];
      emitter(): RhinoEmitter;
      getTimer(): unknown;
      readonly broadcast: Broadcast;
      /** Needs observeKey for the events; key is a key name such as volume_up. */
      onKeyDown(key: string, listener: (event: KeyEvent) => void): this;
      onceKeyDown(key: string, listener: (event: KeyEvent) => void): this;
      removeAllKeyDownListeners(key: string): this;
      onKeyUp(key: string, listener: (event: KeyEvent) => void): this;
      onceKeyUp(key: string, listener: (event: KeyEvent) => void): this;
      removeAllKeyUpListeners(key: string): this;
      /** Consumes the keys while enabled: all (enabled) or one key name (key, enabled). Requires events.key.intercept (never implied) and accessibility. */
      setKeyInterceptionEnabled(enabled: boolean): Promise<void>;
      setKeyInterceptionEnabled(key: string, enabled: boolean): Promise<void>;
      /** Requires events + events.touch (never implied) and Root or Shizuku. One event per position change, at most one per touch event timeout. */
      observeTouch(options?: ObserveOptions): Promise<Subscription>;
      onTouch(listener: (event: TouchEvent) => void): this;
      removeAllTouchListeners(): this;
      /** 10 ms by default. */
      getTouchEventTimeout(): number;
      setTouchEventTimeout(millis: number): void;
      onNotification(listener: (event: NotificationEvent) => void): this;
      onToast(listener: (event: ToastEvent) => void): this;
      removeNotificationObserver(): Promise<void>;
      removeToastObserver(): Promise<void>;
    }
  }
  const hostEvents: hostEvents.EventsModule;
  export = hostEvents;
}

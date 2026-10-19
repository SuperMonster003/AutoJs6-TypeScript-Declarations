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
    }
  }
  const hostEvents: hostEvents.EventsModule;
  export = hostEvents;
}

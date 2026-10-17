declare module "autojs6:host" {
  interface HostMessages {
    /** Listen for JSON values sent by the host's postMessage transaction. */
    on(event: "message", listener: (message: unknown) => void): this;
    once(event: "message", listener: (message: unknown) => void): this;
    addListener(event: "message", listener: (message: unknown) => void): this;
    prependListener(event: "message", listener: (message: unknown) => void): this;
    prependOnceListener(event: "message", listener: (message: unknown) => void): this;
    off(event: "message", listener: (message: unknown) => void): this;
    removeListener(event: "message", listener: (message: unknown) => void): this;
    removeAllListeners(event?: "message"): this;
    listenerCount(event: "message"): number;
    /** Listeners keep the execution alive by default; unref opts out. */
    ref(): this;
    unref(): this;
  }
  const host: HostMessages;
  export = host;
}

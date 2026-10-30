/**
 * Rhino's web module (api-coverage P3.3, Q168 (a)). newWebSocket returns at once and connects through the controlled
 * WebSocket of autojs6:websocket (capability network) with Rhino's events: open, message and text / bytes, closing,
 * closed, failure, max_rebuilds; send queues until open. The injectable WebView / client evaluate scripts after the first
 * page finishes, as Rhino's do. ByteString is okio's immutable bytes (UTF-8 only).
 */
declare module "autojs6:web" {
  namespace web {
    type NativeViewHandle = import("ui").NativeViewHandle;
    export interface ByteString {
      utf8(): string;
      string(charset?: string): string;
      hex(): string;
      base64(): string;
      base64Url(): string;
      size(): number;
      getSize(): number;
      getByte(index: number): number;
      toByteArray(): Uint8Array;
      toAsciiLowercase(): ByteString;
      toAsciiUppercase(): ByteString;
      substring(begin?: number, end?: number): ByteString;
      startsWith(prefix: string | ByteString): boolean;
      endsWith(suffix: string | ByteString): boolean;
      indexOf(other: string | ByteString, fromIndex?: number): number;
      equals(other: unknown): boolean;
      toString(): string;
    }
    export interface ByteStringConstructor {
      readonly prototype: ByteString;
      of(...bytes: number[]): ByteString;
      encodeUtf8(text: string): ByteString;
      encodeString(text: string, charset?: string): ByteString;
      decodeHex(hex: string): ByteString;
      decodeBase64(base64: string): ByteString | null;
      from(value: string | ArrayBuffer | ArrayBufferView | readonly number[] | ByteString): ByteString;
    }
    export interface WebSocketOptions {
      headers?: Readonly<Record<string, string>>;
      protocols?: readonly string[];
      timeoutMs?: number;
    }
    type Listener = (...args: any[]) => void;
    export interface WebSocket {
      readonly url: string;
      /** Rhino's OkHttpClient; always null in Node. */
      readonly client: null;
      request(): { readonly url: string; readonly method: "GET"; readonly headers: Readonly<Record<string, string>> };
      /** Queues a text or binary message; false once closed. */
      send(data: string | ByteString | Uint8Array): boolean;
      close(code?: number, reason?: string): boolean;
      close(reason: string): boolean;
      cancel(): void;
      /** Bytes queued and not yet sent. */
      queueSize(): number;
      /** Cancels and reconnects (at most `maxRebuildTimes` times; then emits max_rebuilds). */
      rebuild(maxRebuildTimes?: number): void;
      /** Ends the execution when the socket closes (after `timeout` ms). */
      exitOnClose(exitOnCloseOrTimeout?: boolean | number): void;
      /** The timers of this thread (Rhino: the event thread's timer). */
      getTimer(): { setTimeout: typeof setTimeout; clearTimeout: typeof clearTimeout; setInterval: typeof setInterval; clearInterval: typeof clearInterval };
      /** Emits and remembers the arguments: a listener added later receives them at once. */
      emitSticky(event: string, ...args: unknown[]): boolean;
      on(event: string, listener: Listener): this;
      addListener(event: string, listener: Listener): this;
      once(event: string, listener: Listener): this;
      prependListener(event: string, listener: Listener): this;
      prependOnceListener(event: string, listener: Listener): this;
      off(event: string, listener: Listener): this;
      removeListener(event: string, listener: Listener): this;
      removeAllListeners(event?: string): this;
      setMaxListeners(count: number): this;
      emit(event: string, ...args: unknown[]): boolean;
      listeners(event: string): Function[];
      listenerCount(event: string): number;
      eventNames(): string[];
      getMaxListeners(): number;
    }
    /** A WebView native View handle with inject. */
    export type InjectableWebView = NativeViewHandle & {
      /** Evaluates the script in the page (after the first page finished); the callback and the Promise get the result as JSON text. */
      inject(script: string, callback?: (value: string | null) => void): Promise<string | null>;
    };
    /** A WebView client for setWebViewClient whose inject waits for the first page finished. */
    export interface InjectableWebClient {
      onPageFinished(this: NativeViewHandle, event: unknown): void;
      inject(script: string, callback?: (value: string | null) => void): Promise<string | null>;
      injectAndWait(script: string): Promise<string | null>;
    }
    export interface WebModule {
      readonly ByteString: ByteStringConstructor;
      newWebSocket(url: string, options?: WebSocketOptions): WebSocket;
      newInjectableWebView(url?: string): Promise<InjectableWebView>;
      newInjectableWebView(context: unknown, url?: string): Promise<InjectableWebView>;
      newInjectableWebClient(): InjectableWebClient;
    }
  }

  const web: web.WebModule;
  export = web;
}

// Rhino's web globals (installed on globalThis in main and Workers).
declare const newWebSocket: import("autojs6:web").WebModule["newWebSocket"];
declare const newInjectableWebView: import("autojs6:web").WebModule["newInjectableWebView"];
declare const newInjectableWebClient: import("autojs6:web").WebModule["newInjectableWebClient"];

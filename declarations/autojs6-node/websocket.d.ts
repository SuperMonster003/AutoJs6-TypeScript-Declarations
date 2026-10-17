declare module "websocket" {
  namespace websocket {
    export type ReadyState = "connecting" | "open" | "closing" | "closed";

    export interface ConnectOptions {
      headers?: Readonly<Record<string, string>> | readonly (readonly [string, string])[];
      protocols?: string | readonly string[];
      /** Passed to the host provider unclamped; its policy caps the connect timeout. Default 10000. */
      timeoutMs?: number;
      /** Passed to the host provider only when set; the connection reports the value the host applied. */
      maxMessageBytes?: number;
      /** Passed to the host provider only when set; its policy supplies the default and ceiling. */
      maxQueueSize?: number;
      signal?: AutoJs6Node.AbortSignalLike;
    }

    export interface Message {
      readonly type: "text" | "binary";
      readonly text?: string;
      readonly dataBase64?: string;
    }

    export interface CloseEvent {
      readonly type: "close";
      readonly code: number;
      readonly reason: string;
    }

    export interface Connection {
      readonly subscriptionId?: string;
      readonly id: string;
      readonly url: string;
      readonly readyState: ReadyState;
      readonly maxMessageBytes: number;
      onopen: (() => void) | null;
      onmessage: ((message: Message) => void) | null;
      onclose: ((event: CloseEvent) => void) | null;
      onerror: ((error: Error) => void) | null;
      on(event: "open", listener: () => void): this;
      on(event: "message", listener: (message: Message) => void): this;
      on(event: "close", listener: (event: CloseEvent) => void): this;
      on(event: "error", listener: (error: Error) => void): this;
      once(event: "open", listener: () => void): this;
      once(event: "message", listener: (message: Message) => void): this;
      once(event: "close", listener: (event: CloseEvent) => void): this;
      once(event: "error", listener: (error: Error) => void): this;
      off(event: "open", listener: () => void): this;
      off(event: "message", listener: (message: Message) => void): this;
      off(event: "close", listener: (event: CloseEvent) => void): this;
      off(event: "error", listener: (error: Error) => void): this;
      addEventListener(event: "open", listener: () => void): this;
      addEventListener(event: "message", listener: (message: Message) => void): this;
      addEventListener(event: "close", listener: (event: CloseEvent) => void): this;
      addEventListener(event: "error", listener: (error: Error) => void): this;
      removeEventListener(event: "open", listener: () => void): this;
      removeEventListener(event: "message", listener: (message: Message) => void): this;
      removeEventListener(event: "close", listener: (event: CloseEvent) => void): this;
      removeEventListener(event: "error", listener: (error: Error) => void): this;
      send(message: string | ArrayBuffer | Uint8Array, options?: { timeoutMs?: number; signal?: AutoJs6Node.AbortSignalLike }): Promise<void>;
      close(code?: number, reason?: string, options?: { timeoutMs?: number; signal?: AutoJs6Node.AbortSignalLike }): Promise<void>;
    }

    /** Connect timeout ceilings, message and queue sizes are the host provider's policy; the runtime passes the caller's options through unclamped. */
    export interface Policy {
      readonly defaultTimeoutMs: number;
      readonly allowedSchemes: readonly string[];
      readonly limitsEnforcedBy: "host_provider";
    }

    export interface Diagnostics {
      readonly activeConnectionCount: number;
      readonly maxActiveConnectionCount: number;
      readonly timeoutCount: number;
      readonly rejectedByPolicyCount: number;
      readonly closedCount: number;
      readonly messageCount: number;
      readonly lastPolicyRejection: string;
    }

    export interface WebSocketModule {
      readonly policy: Policy;
      connect(url: string, options?: ConnectOptions): Promise<Connection>;
      diagnostics(): Diagnostics;
    }
  }

  const websocket: websocket.WebSocketModule;
  export = websocket;
}

declare module "autojs6:websocket" {
  import bridge = require("websocket");
  export = bridge;
}

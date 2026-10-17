declare module "fetch" {
  namespace fetchModule {
    export type HeaderInit = Readonly<Record<string, string>> | readonly (readonly [string, string])[];
    export type BodyInit = string | ArrayBuffer | Uint8Array | null;

    export interface RequestOptions {
      method?: string;
      headers?: HeaderInit;
      body?: BodyInit;
      /** Passed to the host provider unclamped; its policy caps the timeout. Default 30000. */
      timeoutMs?: number;
      /** Passed to the host provider only when set; its policy supplies the default and ceiling. */
      maxResponseBytes?: number;
      /** Redirects the runtime follows itself; default 20 like Node's fetch. */
      maxRedirects?: number;
      signal?: AutoJs6Node.AbortSignalLike;
    }

    export interface Headers {
      get(name: string): string | null;
      has(name: string): boolean;
      entries(): IterableIterator<readonly [string, string]>;
      toJSON?(): readonly (readonly [string, string])[];
    }

    export interface Response {
      readonly url: string;
      readonly status: number;
      readonly statusText: string;
      readonly ok: boolean;
      readonly headers: Headers;
      text(): Promise<string>;
      json<T = unknown>(): Promise<T>;
      arrayBuffer(): Promise<ArrayBuffer>;
    }

    /** Timeout ceilings, response size and the accepted method set are the host network provider's policy; the runtime only fills these defaults. */
    export interface Policy {
      readonly defaultTimeoutMs: number;
      readonly defaultMaxRedirects: number;
      readonly allowedSchemes: readonly string[];
      readonly limitsEnforcedBy: "host_provider";
    }

    export interface Diagnostics {
      readonly activeRequestCount: number;
      readonly maxActiveRequestCount: number;
      readonly timeoutCount: number;
      readonly rejectedByPolicyCount: number;
      readonly abortedCount: number;
    }

    export interface FetchModule {
      (input: string, init?: RequestOptions): Promise<Response>;
      readonly fetch: FetchModule;
      readonly request: FetchModule;
      readonly default: FetchModule;
      readonly policy: Policy;
      diagnostics(): Diagnostics;
    }
  }

  const fetchModule: fetchModule.FetchModule;
  export = fetchModule;
}

declare module "autojs6:fetch" {
  import bridge = require("fetch");
  export = bridge;
}

/**
 * Rhino's memory module (api-coverage P3.1b): snapshot / collect / retained / dumpHeap of the host's memory diagnostics,
 * each a Promise. memory.watch is Rhino-only (not-portable: runtime-native; FinalizationRegistry and node:v8
 * writeHeapSnapshot are the Node equivalents). Capabilities: memory; dumpHeap also needs memory.dump.
 */
declare module "autojs6:memory" {
  namespace memory {
    export interface MemoryModule {
      snapshot(options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.JsonObject>;
      /** Waits up to timeoutMs (0 .. 60000, 10000 by default) for the tracked objects to be cleared. */
      collect(timeoutMs?: number, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.JsonObject>;
      retained(options?: AutoJs6Node.BridgeCallOptions): Promise<readonly AutoJs6Node.JsonObject[]>;
      /** Debug builds, or with the developer option on; resolves with the absolute path of the dump. */
      dumpHeap(path?: string, options?: AutoJs6Node.BridgeCallOptions): Promise<string>;
    }
  }

  const memory: memory.MemoryModule;
  export = memory;
}

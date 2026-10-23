// Type definitions for AutoJs6 internal module memory
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Oct 23, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/memory/Memory.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/memory/MemorySnapshot.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/memory/MemoryDiagnosticsCore.kt
 */

declare namespace Internal {

    /**
     * The global `memory` object (also `$memory`), available since AutoJs6 6.8.0: read-only memory
     * diagnostics of the AutoJs6 process, from the same source as Developer options > Memory
     * diagnostics. It never releases the resources of a script. For the memory of the whole
     * device use `device.getTotalMem()` / `device.getAvailMem()`.
     *
     * @see https://docs.autojs6.com/#/memory
     */
    interface Memory {

        /**
         * The current readings, without collecting garbage first (the Java heap still holds
         * garbage; use {@link collect} for readings after a collection). Reading the PSS walks the
         * memory maps of the process and takes a few milliseconds.
         * @since 6.8.0
         * @example
         * let s = memory.snapshot();
         * console.log(fmt.bytes(s.javaHeapUsed) + ' / ' + fmt.bytes(s.javaHeapMax));
         */
        snapshot(): Memory.Snapshot;

        /**
         * Forces garbage collection (3 rounds with finalization, then one more every 500 ms) and
         * waits up to `timeout` milliseconds for every finished script runtime and bridge session
         * to be reclaimed, then returns a new snapshot. It returns as soon as none is left; a
         * `retainedRuntimes` above 0 afterwards means something still holds a finished script (see
         * {@link retained}), and a count above 0 in `bridgeSessions` means something still holds
         * the session objects of a finished execution of that plugin engine.
         * Blocks the calling thread (do not call it on the UI thread) and stops at once when the
         * script is stopped. Throws when `timeout` is not a number from 0 to 60000.
         * @param timeout milliseconds to wait, 10000 by default
         * @since 6.8.0
         * @example
         * let after = memory.collect(3000);
         * console.log('unreclaimed runtimes: ' + after.retainedRuntimes);
         */
        collect(timeout?: number): Memory.Snapshot;

        /**
         * Finished script runtimes (Rhino and Node.js scripts only) that are still reachable,
         * earliest first. A script that has just ended stays listed until the next garbage
         * collection; the ones left after {@link collect} are held by something, which usually
         * means a leak. Unreclaimed sessions of Bun, QuickJS, Lua and Python scripts are only
         * counted in `bridgeSessions` of {@link snapshot}.
         * @since 6.8.0
         * @example
         * memory.collect();
         * memory.retained().forEach(r => console.log(r.name, r.exitKind, r.elapsedMs));
         */
        retained(): Memory.RetainedRuntime[];

        /**
         * Writes an hprof heap dump of the AutoJs6 process and returns its absolute path. `path`
         * resolves against the script working directory like `files.path`; an existing directory,
         * a path ending with `/`, or no path at all gets the file name
         * `AutoJs6-heap-<yyyyMMdd-HHmmss>.hprof`. An existing file is overwritten, and the process
         * pauses while dumping (about 2 s for a 50 MB heap).
         *
         * The dump holds everything in the heap, the variables of every running script included.
         * Debug builds always allow it; release builds throw unless Developer options > Memory
         * diagnostics > "Allow scripts to export hprof" is on (off by default).
         * @param path the hprof file, or the directory to write it into
         * @since 6.8.0
         * @example
         * console.log(memory.dumpHeap('./heap/before-cleanup.hprof'));
         */
        dumpHeap(path?: string): string;

        /**
         * Hands `obj` to LeakCanary, which reports it as retained (with its reference chain once
         * the heap is analyzed) when it is still reachable after a while (5 s by default). Only
         * debug builds with Developer options > Memory diagnostics > LeakCanary on watch it and
         * return true; otherwise nothing happens and it returns false. A Java object is watched
         * itself, not its script wrapper. Throws for null, undefined and primitive values.
         * @param name shown in the LeakCanary report; `memory.watch(<class>) in <script>` by default
         * @since 6.8.0
         * @example
         * let cache = { items: [] };
         * memory.watch(cache, 'temporary cache');
         * cache = null;
         */
        watch(obj: object, name?: string): boolean;
    }

}

declare namespace Memory {

    /** Bytes and counts of one reading of `memory.snapshot()` or `memory.collect()`. */
    interface Snapshot {
        /** Java heap in use, `Runtime.totalMemory() - Runtime.freeMemory()`, in bytes. */
        javaHeapUsed: number;
        /** Java heap reserved by the VM, `Runtime.totalMemory()`, in bytes. */
        javaHeapTotal: number;
        /** Java heap limit, `Runtime.maxMemory()`, in bytes. */
        javaHeapMax: number;
        /** `Debug.getNativeHeapAllocatedSize()`, in bytes. */
        nativeHeapAllocated: number;
        /** `Debug.getNativeHeapSize()`, in bytes. */
        nativeHeapSize: number;
        /** Proportional set size of the AutoJs6 process, in bytes. */
        pss: number;
        /** Live script engines, the calling script included. */
        engines: number;
        /** Finished script runtimes not reclaimed yet, the length of `memory.retained()`. */
        retainedRuntimes: number;
        /**
         * Finished executions of each plugin engine whose session objects (the host capability
         * broker, output callbacks) are not reclaimed yet. A finished execution is counted until
         * the next garbage collection, as with `retainedRuntimes`.
         */
        bridgeSessions: BridgeSessions;
        /** Script images neither recycled nor collected. */
        images: number;
        /** Threads created for scripts, told by their names (script, threads.start / pool, timer, screen capture and looper threads). */
        threads: number;
        /** All live threads of the process. */
        allThreads: number;
        /** Rhino contexts entered and not yet released, -1 when they cannot be counted. */
        contexts: number;
        /** Time of the reading, in milliseconds since the epoch. */
        timestamp: number;
    }

    /** Unreclaimed bridge sessions per plugin engine (`Snapshot.bridgeSessions`). */
    interface BridgeSessions {
        /** Node.js scripts. */
        node: number;
        /** Bun scripts. */
        bun: number;
        /** QuickJS scripts. */
        quickjs: number;
        /** Lua scripts. */
        lua: number;
        /** Python scripts. */
        python: number;
    }

    /** A finished script runtime that is still reachable (`memory.retained()`). */
    interface RetainedRuntime {
        /** The id of the script engine. */
        id: number;
        /** The name of the script. */
        name: string;
        /** The script path shown in the console when it started. */
        source: string;
        /** When the script ended, in milliseconds since the epoch. */
        endedAt: number;
        /** Milliseconds since the script ended. */
        elapsedMs: number;
        /** How the script ended: on its own, with an uncaught error, or stopped (task list, `engines.stopAll`, or its own `exit()`). */
        exitKind: ExitKind;
        /** The script engine: `rhino` for JavaScript (Rhino) scripts, `node` for Node.js scripts. */
        engine: RetainedEngine;
    }

    type ExitKind = 'normal' | 'error' | 'stopped';

    type RetainedEngine = 'rhino' | 'node';

}

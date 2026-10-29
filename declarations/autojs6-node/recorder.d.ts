/** @remarks Requires media + media.recording, Android microphone permission and a microphone foreground service. */
declare module "recorder" {
  namespace recorder {
    export interface RecorderStatus {
      readonly schema: "autojs6-node-recorder-status-v1";
      readonly recording: boolean;
      readonly starting: boolean;
      readonly providerAvailable: boolean;
      readonly microphonePermissionRequired: boolean;
      readonly microphonePermissionGranted: boolean;
      readonly foregroundDisclosureRequired: boolean;
      readonly reason: string;
      readonly active: Recording | null;
      readonly lastRecording: RecordingResult | null;
    }

    export interface Recording {
      readonly id: string;
      readonly path: string;
      readonly recording: boolean;
      readonly format: "m4a";
      readonly mimeType: "audio/mp4";
      readonly maxDurationMs: number;
    }
    export interface RecordingResult extends Recording {
      readonly recording: false;
      readonly durationMs: number;
      readonly byteCount: number;
      readonly reason: string;
    }

    export interface RecorderStartOptions extends AutoJs6Node.BridgeCallOptions {
      /** Absolute or working-directory-relative output file path; Android file access applies with the updated host. */
      readonly path?: string;
      readonly sampleRate?: number;
      readonly bitRate?: number;
      readonly format?: "m4a" | "mp4";
      /** Defaults to 60000; range 1000..300000. The recording stops automatically at this limit. */
      readonly maxDurationMs?: number;
    }

    /**
     * Rhino's recorder: the timing recorder (recorder(key?, ts?), save / load / isLessThan / isGreaterThan / has /
     * remove / clear, synchronous, per thread) with the audio recorder's getStatus / start / stop.
     */
    export interface RecorderModule {
      /** A function key runs it and gives its duration; another key saves the first time and loads afterwards. */
      (key?: unknown, timestamp?: unknown): number;
      /** Saves the time (now, or timestamp) under key (or on the anonymous stack); returns it. */
      save(key?: string | null, timestamp?: number | null): number;
      /** The milliseconds from the saved time to now (or timestamp); the anonymous form pops the last record. */
      load(key?: string | null, timestamp?: number | null): number;
      isLessThan(key: string | null, compare: number): boolean;
      isGreaterThan(key: string | null, compare: number): boolean;
      has(key: string | null): boolean;
      remove(key: string | null): boolean;
      clear(): void;
      getStatus(options?: AutoJs6Node.BridgeCallOptions): Promise<RecorderStatus>;
      start(options?: RecorderStartOptions): Promise<Recording>;
      /** Returns the last completed recording, or null when none has started. */
      stop(options?: AutoJs6Node.BridgeCallOptions): Promise<RecordingResult | null>;
    }
  }

  const recorder: recorder.RecorderModule;
  export = recorder;
}

declare module "autojs6:recorder" {
  import api = require("recorder");
  export = api;
}

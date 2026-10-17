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

    export interface RecorderModule {
      getStatus(options?: AutoJs6Node.BridgeCallOptions): Promise<RecorderStatus>;
      start(options?: RecorderStartOptions): Promise<Recording>;
      /** Returns the last completed recording, or null when none has started. */
      stop(options?: AutoJs6Node.BridgeCallOptions): Promise<RecordingResult | null>;
    }
  }

  const recorder: recorder.RecorderModule;
  export = recorder;
}

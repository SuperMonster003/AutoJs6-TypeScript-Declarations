/** MP4 recording in the main thread and CJS/ESM/nested Workers. Requires screen_capture and Android capture consent. */
declare module "screen_recorder" {
  namespace screenRecorder {
    export type AudioSource = "none" | "microphone" | "playback" | "mixed";
    export interface StartOptions extends AutoJs6Node.BridgeCallOptions {
      /** Fixed video dimensions, even integers in 2..8192. Screenshots retain capture dimensions. */
      width?: number;
      height?: number;
      /** Target frames per second in 1..120, default 30. */
      frameRate?: number;
      /** AVC target bitrate, default 8000000. */
      bitRate?: number;
      /** Default none. Audio requires media + media.recording and Android RECORD_AUDIO. Playback/mixed require Android 10+. */
      audio?: AudioSource | false;
    }
    export interface ControlOptions extends AutoJs6Node.BridgeCallOptions {
      /** Operate only on this recording. A stale ID returns null/false and leaves the current recording intact. */
      id?: string;
    }
    export interface ActiveRecording {
      readonly state: "recording" | "failed";
      readonly id: string;
      readonly path: string;
      readonly width: number;
      readonly height: number;
      readonly frameRate: number;
      readonly bitRate: number;
      readonly elapsedMs: number;
      readonly audio: boolean;
      readonly audioSource: AudioSource;
      readonly error: string | null;
    }
    export type Status = { readonly state: "idle" } | ActiveRecording;
    export interface RecordingResult {
      readonly id: string;
      readonly path: string;
      readonly size: number;
      readonly durationMs: number;
      readonly width: number;
      readonly height: number;
      readonly mimeType: "video/mp4";
      readonly videoCodec: "h264";
      readonly audio: boolean;
      readonly audioSource: AudioSource;
      readonly audioCodec: "aac" | null;
      readonly audioSampleRate: 48000 | null;
      readonly audioChannels: 1 | null;
    }
    export interface ScreenRecorderModule {
      /** One recording per execution. Existing output files are rejected. Worker exit discards its unsaved recording. */
      start(path: string, options?: StartOptions): Promise<ActiveRecording>;
      /** Finalize and publish the MP4. Main thread and Workers share the execution's recorder. */
      stop(options?: ControlOptions): Promise<RecordingResult | null>;
      /** Discard the partial file while retaining capture permission and screenshot availability. */
      cancel(options?: ControlOptions): Promise<boolean>;
      getStatus(options?: AutoJs6Node.BridgeCallOptions): Promise<Status>;
    }
  }
  const screenRecorder: screenRecorder.ScreenRecorderModule;
  export = screenRecorder;
}

declare module "autojs6:screen_recorder" {
  import api = require("screen_recorder");
  export = api;
}

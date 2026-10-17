declare module "media" {
  namespace media {
    export type AudioStreamName =
      | "music"
      | "media"
      | "notification"
      | "alarm"
      | "ring"
      | "ringtone"
      | "system"
      | "voice_call"
      | "call"
      | "dtmf";

    export interface AudioStreamInfo {
      readonly schema: "autojs6-node-media-audio-stream-v1";
      readonly stream: string;
      readonly streamType: number;
      readonly volume: number;
      readonly maxVolume: number;
      readonly minVolume: number;
      readonly volumeFixed: boolean;
    }

    /** Snapshot of the execution's script music session (host schema autojs6-node-media-playback-v1). */
    export interface PlaybackStatus {
      readonly schema: "autojs6-node-media-playback-v1";
      /** Session id; empty when no session exists for the requested target. */
      readonly id: string;
      /** Host-resolved absolute path of the audio file, or null when unknown. */
      readonly path: string | null;
      /** True while the host still holds the script music lease for this session. */
      readonly active: boolean;
      readonly playing: boolean;
      /** True once a non-looping session reached the end of the file; the lease stays active until stop(). */
      readonly ended: boolean;
      readonly looping: boolean;
      readonly volume: number | null;
      readonly durationMs: number;
      /** -1 when the session is not active. */
      readonly positionMs: number;
    }

    export interface PlayOptions extends AutoJs6Node.BridgeCallOptions {
      /** 0..1, default 1. */
      readonly volume?: number;
      readonly looping?: boolean;
    }

    export type PlaybackSessionRef = PlaybackSession | PlaybackStatus | string;

    export interface PlaybackControlOptions extends AutoJs6Node.BridgeCallOptions {
      /** Target a specific session; defaults to the execution's current session. Stale ids are inactive no-ops. */
      readonly session?: PlaybackSessionRef;
    }

    /** Frozen handle returned by play(); every method returns the session's PlaybackStatus. */
    export interface PlaybackSession {
      readonly id: string;
      readonly path: string | null;
      readonly looping: boolean;
      readonly volume: number | null;
      status(options?: AutoJs6Node.BridgeCallOptions): Promise<PlaybackStatus>;
      pause(options?: AutoJs6Node.BridgeCallOptions): Promise<PlaybackStatus>;
      resume(options?: AutoJs6Node.BridgeCallOptions): Promise<PlaybackStatus>;
      seekTo(positionMs: number, options?: AutoJs6Node.BridgeCallOptions): Promise<PlaybackStatus>;
      stop(options?: AutoJs6Node.BridgeCallOptions): Promise<PlaybackStatus>;
    }

    export interface MediaModule {
      getAudioStreamVolume(stream?: AudioStreamName, options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      getAudioStreamMaxVolume(stream?: AudioStreamName, options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      getAudioStreamInfo(stream?: AudioStreamName, options?: AutoJs6Node.BridgeCallOptions): Promise<AudioStreamInfo>;
      /** Integer within getAudioStreamInfo's minVolume..maxVolume; Android policy may restrict changes. */
      setAudioStreamVolume(stream: AudioStreamName, volume: number, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      /**
       * Plays an audio file through the host's shared script music session (media + media.playback).
       * The host resolves the path (absolute or relative to the execution working directory) and
       * shows the media notification; a newer play() replaces the previous session.
       */
      play(path: string, options?: PlayOptions): Promise<PlaybackSession>;
      pause(options?: PlaybackControlOptions): Promise<PlaybackStatus>;
      resume(options?: PlaybackControlOptions): Promise<PlaybackStatus>;
      stop(options?: PlaybackControlOptions): Promise<PlaybackStatus>;
      seekTo(positionMs: number, options?: PlaybackControlOptions): Promise<PlaybackStatus>;
      getPlaybackStatus(options?: PlaybackControlOptions): Promise<PlaybackStatus>;
    }
  }

  const media: media.MediaModule;
  export = media;
}

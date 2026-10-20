/** Async speech plugin access for Node main threads and Workers. No global speech is injected. */
declare module "speech" {
  namespace speech {
    /** Optional whole-operation deadline and cancellation. Ordinary calls have no added runtime deadline. */
    type CallOptions = Pick<AutoJs6Node.BridgeCallOptions, "signal" | "timeoutMs">;
    interface API {
        readonly SpeechError: ErrorConstructor;
        readonly models: Models;
        isAvailable(callOptions?: CallOptions): Promise<boolean>;
        capabilities(callOptions?: CallOptions): Promise<Capabilities>;
        /** Returns a pending session. Attach ready/error/end listeners before feeding audio. */
        listen(options?: ListenOptions | null, callOptions?: CallOptions): Promise<Session>;
        recognize(source: AudioSource, options?: RecognizeOptions | null, callOptions?: CallOptions): Promise<Recognition>;
        recognizeAsync(source: AudioSource, options?: RecognizeOptions | null, callOptions?: CallOptions): Promise<Recognition>;
        detectVoice(source: AudioSource, options?: VadOptions | null, callOptions?: CallOptions): Promise<VadResult>;
        wake(keywords: KeywordInput | readonly KeywordInput[], options?: WakeOptions | null, callOptions?: CallOptions): Promise<WakeSession>;
        synthesize(text: string, path: string, options?: SynthesisOptions | null, callOptions?: CallOptions): Promise<SynthesisResult>;
        synthesizeAsync(text: string, path: string, options?: SynthesisOptions | null, callOptions?: CallOptions): Promise<SynthesisResult>;
        speak(text: string, options?: SpeakOptions | null, callOptions?: CallOptions): Promise<import("tts").Result>;
        /** Cancels this facade's operations/sessions and releases resources. A later call opens a new client. */
        close(): Promise<boolean>;
    }


        type ErrorCode =
            | 'PLUGIN_UNAVAILABLE'
            | 'PLUGIN_DISABLED'
            | 'PLUGIN_INCOMPATIBLE'
            | 'PERMISSION_DENIED'
            | 'MODEL_MISSING'
            | 'MODEL_DOWNLOAD_FAILED'
            | 'MODEL_CHECKSUM_MISMATCH'
            | 'MODEL_LICENSE_NOT_ACCEPTED'
            | 'INVALID_OPTIONS'
            | 'UNSUPPORTED_FORMAT'
            | 'LIMIT_EXCEEDED'
            | 'SESSION_BUSY'
            | 'SESSION_CLOSED'
            | 'SESSION_CANCELLED'
            | 'ENGINE_FAILED'
            | 'IO_FAILED'
            | 'TIMEOUT'
            | 'INTERNAL';

        /** What the plugin implements; a call whose feature is missing fails with `PLUGIN_INCOMPATIBLE`. */
        type Feature = 'asr' | 'asrStreaming' | 'vad' | 'kws' | 'tts' | 'ttsSystemEngine' | 'models';

        /** Model kinds: recognition, synthesis, keyword spotting (wake words) and voice activity detection. */
        type Kind = 'asr' | 'tts' | 'kws' | 'vad';

        /** `pending` until `ready`, then `active`, then `ended`. */
        type State = 'pending' | 'active' | 'ended';

        /**
         * Why a session ended: `stop()`, `timeoutMillis` or `maxDurationMillis` (audio time),
         * `cancel()`, an `error` event, or `overflow` when the script did not drain the events
         * (`error` with `LIMIT_EXCEEDED` first).
         */
        type EndReason = 'stopped' | 'timeout' | 'maxDuration' | 'cancelled' | 'error' | 'overflow';

        /** `'mic'` records the plugin's microphone; `'external'` recognizes PCM given to `feed`. */
        type Source = 'mic' | 'external';

        /** Mono PCM16 LE. Buffer and offset typed array views preserve exactly their visible bytes. */
        type Pcm = ArrayBuffer | ArrayBufferView;

        /** A WAV file path or PCM. */
        type AudioSource = string | Pcm;

        /** A warning (the call or session went on) as `{ code, message }`. */
        interface Problem {
            readonly code: ErrorCode | (string & {});
            readonly message: string;
        }

        /** Speech failures preserve the plugin error code and are instances of SpeechError. */
        interface SpeechError extends Error {
            readonly name: 'SpeechError';
            code: ErrorCode | (string & {});
        }

        /** Callable with or without `new`; `message` and `code` become strings, by default `''` and `'INTERNAL'`. */
        interface ErrorConstructor {
            new(message?: unknown, code?: ErrorCode | (string & {}) | null): SpeechError;
            (message?: unknown, code?: ErrorCode | (string & {}) | null): SpeechError;
            readonly prototype: SpeechError;
        }

        interface Capabilities {
            /** Speech contract version, 1. */
            readonly contractVersion: number;
            readonly features: (Feature | (string & {}))[];
            /** Version of the plugin's model catalog. */
            readonly catalogVersion: number;
            /** The speech runtime, `'sherpa-onnx'` for 3-Macaw Speech; null when not reported. */
            readonly engineName: string | null;
            readonly engineVersion: string | null;
            /** Package of the plugin's system TTS engine (feature `ttsSystemEngine`), null without one. */
            readonly ttsEnginePackage: string | null;
            /** Whether the plugin holds the microphone permission right now; null when not reported. */
            readonly microphoneGranted: boolean | null;
            readonly packageName: string;
            readonly versionName: string | null;
            readonly versionCode: number;
        }

        interface RecognizeOptions {
            /** Recognition model id; default the default `asr` model. */
            model?: string;
            /** Language hint such as `'zh'`, `'en'`, `'ja'`, `'ko'` or `'yue'`; bilingual models ignore it. */
            language?: string;
            /** Hotwords of transducer models, at most 200 of at most 128 characters; other models answer a warning. */
            hotwords?: string[];
            /** Keep the punctuation the model emits; default true. */
            punctuation?: boolean;
            /** Voice activity segmentation (files and PCM) or gating (microphone); default true. */
            vad?: boolean;
            /** PCM only: input sample rate, 8000 to 192000; default 16000. WAV files carry their own rate. */
            sampleRate?: number;
        }

        interface ListenOptions extends Omit<RecognizeOptions, 'sampleRate'> {
            /** Default `'mic'`. */
            source?: Source;
            /** Only 16000: external PCM is 16 kHz mono PCM16 LE. */
            sampleRate?: 16000;
            /** Silence that ends an utterance, 1 to 60000; default 1200. */
            silenceEndMillis?: number;
            /** Session length in audio time, at most 1800000 (`LIMIT_EXCEEDED` beyond); default 300000. */
            maxDurationMillis?: number;
            /** Ends the session when neither speech nor new text comes within it (audio time), 0 to 1800000, 0 never; default 15000. */
            timeoutMillis?: number;
        }

        /** Dictation options of the rounds that follow wake word hits; they always record the microphone. */
        interface RoundOptions extends Omit<ListenOptions, 'source'> {
            source?: 'mic';
        }

        interface VadOptions {
            /** Voice activity model id; default the default `vad` model. */
            model?: string;
            /** Speech probability threshold, 0 to 1; default of the model. */
            threshold?: number;
            /** 0 to 1800000; default of the model. */
            minSpeechMillis?: number;
            /** 0 to 1800000; default of the model. */
            minSilenceMillis?: number;
            /** PCM only: input sample rate, 8000 to 192000; default 16000. */
            sampleRate?: number;
        }

        interface Keyword {
            /** At most 128 characters. */
            keyword: string;
            /** -100 to 100. */
            boost?: number;
            /** Trigger threshold, 0 to 1; default of the model. */
            threshold?: number;
        }

        type KeywordInput = string | Keyword;

        interface WakeOptions {
            /** Keyword spotting model id; default the default `kws` model. */
            model?: string;
            /** Least time between two hits, 0 to 600000; default 1500. */
            minIntervalMillis?: number;
            /** `true` or dictation options: each hit is followed by one dictation round, the `listen` of the `wake` event. */
            thenListen?: boolean | RoundOptions;
        }

        interface SynthesisOptions {
            /** TTS model id; default the default `tts` model. */
            model?: string;
            /**
             * Speaker id (an integer from 0) or name (such as `'SSB0005'` of AISHELL-3); default the
             * model's default speaker. A model with a single speaker ignores it and says so in
             * `warnings` (`INVALID_OPTIONS`).
             */
            speaker?: string | number;
            /** 0.5 to 2.0; default 1.0. */
            speed?: number;
            /** Only `'wav'`. */
            format?: 'wav';
        }

        /**
         * The options of `tts` except `engine`, `voice`, `rate` and `speechRate`, which are
         * refused. With `model`, `locale` / `language` / `lang` only choose the model's speaker and
         * do not reach `tts`.
         */
        interface SpeakOptions extends Omit<import("tts").SpeechOptions, 'engine' | 'voice' | 'rate' | 'speechRate'> {
            /** TTS model id; without it the engine's voice for the language is used. */
            model?: string;
            /** Speaker id or name without `/`; needs `model`. */
            speaker?: string | number;
            /** 0.5 to 2.0, the speech rate. */
            speed?: number;
        }

        interface Tags {
            readonly emotion?: string;
            readonly event?: string;
        }

        interface Segment {
            readonly startMillis: number;
            readonly endMillis: number;
            /** Empty when the result had to leave the segment texts out (a `LIMIT_EXCEEDED` warning says so). */
            readonly text: string;
            readonly language?: string;
            readonly tags?: Tags;
        }

        /** @see https://docs.autojs6.com/#/speechRecognitionResultType */
        interface Recognition {
            /** The whole text. */
            readonly text: string;
            readonly segments: Segment[];
            /** Language of the audio when the model reports one. */
            readonly language?: string;
            readonly durationMillis: number;
            readonly modelId: string;
            readonly warnings: Problem[];
        }

        interface VadSegment {
            readonly startMillis: number;
            readonly endMillis: number;
        }

        interface VadResult {
            readonly segments: VadSegment[];
            readonly durationMillis: number;
        }

        interface SynthesisResult {
            /** The written file, resolved against the working directory. */
            readonly path: string;
            readonly sampleRate: number;
            readonly durationMillis: number;
            readonly modelId: string;
            readonly speakerId: number;
            readonly sizeBytes: number;
            /** Empty unless the plugin adjusted the request. */
            readonly warnings: Problem[];
        }

        interface ReadyEvent {
            readonly sessionId: string;
            readonly modelId: string;
        }

        interface PartialEvent {
            /** The current utterance so far. */
            readonly text: string;
            readonly segmentIndex: number;
        }

        interface FinalEvent {
            readonly text: string;
            readonly segmentIndex: number;
            readonly startMillis: number;
            readonly endMillis: number;
            readonly language?: string;
            readonly tags?: Tags;
        }

        interface VadEvent {
            readonly active: boolean;
        }

        interface EndEvent {
            readonly reason: EndReason | 'script-exit';
            /** The text of the whole session. */
            readonly text: string;
        }

        /** `endpoint` closes an utterance after its `final`; `warning` leaves the session running; `error` is followed by `end`. */
        interface SessionEvents {
            ready: ReadyEvent;
            partial: PartialEvent;
            final: FinalEvent;
            endpoint: undefined;
            vad: VadEvent;
            warning: Problem;
            error: SpeechError;
            end: EndEvent;
        }

        /**
         * The dictation session of {@link API.listen}, or a dictation round of a wake session.
         * `end` is the terminal event of a `listen` session.
         * @see https://docs.autojs6.com/#/speechSessionType
         */
        interface Session {
            /** The plugin's session id from `ready`, null before it. */
            readonly id: string | null;
            /** The model serving the session, from `ready`, null before it. */
            readonly modelId: string | null;
            /** Epoch milliseconds when the session was requested. */
            readonly startedAt: number;
            readonly state: State;
            /** The `end` reason once ended (`'script-exit'` after a silent cancel at script exit), null before. */
            readonly reason: EndReason | 'script-exit' | null;
            readonly isEnded: boolean;
            readonly source: Source;
            /** The dictation round of a wake session (from 0), -1 for a session of `listen`. */
            readonly round: number;

            /** Whether the session is still pending or active. */
            isActive(): boolean;
            /** The text so far: the joined `final` texts, the whole session text once ended. */
            result(): string;
            /** Flushes the recognizer and ends the session (`end` with `'stopped'`); for a wake round, ends the round only. Idempotent. */
            stop(): Promise<this>;
            /** Ends without a last result (`end` with `'cancelled'`); for a wake round, ends the round only. Idempotent. */
            cancel(): Promise<this>;
            /** Only `source: 'external'`: 16 kHz mono PCM16 LE, at most 1 MiB per call. */
            feed(pcm: Pcm): Promise<this>;
            /** `SpeechSession { source: ..., state: ... }` with the round, model and reason when known. */
            toString(): string;

            on<K extends keyof SessionEvents>(name: K, listener: (event: SessionEvents[K]) => void): this;
            once<K extends keyof SessionEvents>(name: K, listener: (event: SessionEvents[K]) => void): this;
            off<K extends keyof SessionEvents>(name: K, listener: (event: SessionEvents[K]) => void): this;
            removeListener<K extends keyof SessionEvents>(name: K, listener: (event: SessionEvents[K]) => void): this;
            removeAllListeners(name?: keyof SessionEvents): this;
        }

        interface WakeEvent {
            /** The keyword as the script wrote it. */
            readonly keyword: string;
            /** The trigger threshold of the keyword with 3-Macaw Speech (the runtime reports no confidence); null when not reported. */
            readonly score: number | null;
            /** Epoch milliseconds of the hit. */
            readonly timestampMillis: number;
            /** With `thenListen`: the dictation round that follows the hit. */
            readonly listen?: Session;
        }

        interface WakeEndEvent {
            readonly reason: EndReason | 'script-exit';
        }

        interface WakeEvents {
            ready: ReadyEvent;
            wake: WakeEvent;
            warning: Problem;
            error: SpeechError;
            end: WakeEndEvent;
        }

        /**
         * The wake word session of {@link API.wake}; `end` is its terminal event.
         * @see https://docs.autojs6.com/#/speechWakeSessionType
         */
        interface WakeSession {
            /** The keywords as the script wrote them. */
            readonly keywords: string[];
            readonly id: string | null;
            readonly modelId: string | null;
            /** Epoch milliseconds when the session was requested. */
            readonly startedAt: number;
            readonly state: State;
            readonly reason: EndReason | 'script-exit' | null;
            readonly isEnded: boolean;

            /** Ends the wake session and a running round (`end` with `'stopped'`). Idempotent. */
            stop(): Promise<this>;
            isActive(): boolean;
            /** `SpeechWakeSession { keywords: [...], state: ... }` with the reason when known. */
            toString(): string;

            on<K extends keyof WakeEvents>(name: K, listener: (event: WakeEvents[K]) => void): this;
            once<K extends keyof WakeEvents>(name: K, listener: (event: WakeEvents[K]) => void): this;
            off<K extends keyof WakeEvents>(name: K, listener: (event: WakeEvents[K]) => void): this;
            removeListener<K extends keyof WakeEvents>(name: K, listener: (event: WakeEvents[K]) => void): this;
            removeAllListeners(name?: keyof WakeEvents): this;
        }

        interface License {
            /** SPDX identifier, `'LicenseRef-UserImported'` for an imported model without one. */
            readonly spdx: string;
            /** False also when the license does not say; such models need `acceptLicense`. */
            readonly commercialUse: boolean;
            readonly noticeUrl?: string;
        }

        /** @see https://docs.autojs6.com/#/speechModelInfoType */
        interface ModelInfo {
            readonly id: string;
            readonly kind: Kind;
            readonly modelType: string;
            readonly name: string;
            readonly languages: string[];
            /** Download size in bytes, 0 for an imported model. */
            readonly sizeBytes: number;
            /** Bytes on disk, installed models only. */
            readonly installedBytes?: number;
            readonly installed: boolean;
            readonly isDefault: boolean;
            readonly recommended: boolean;
            readonly version: number;
            readonly source: 'catalog' | 'imported';
            readonly license: License;
            /** TTS models: number of speakers. */
            readonly speakers?: number;
            /** TTS models: output sample rate. */
            readonly sampleRate?: number;
        }

        interface ModelFilter {
            kind?: Kind;
            language?: string;
            installed?: boolean;
        }

        interface InstallOptions {
            /** Accept a license that does not allow commercial use (`MODEL_LICENSE_NOT_ACCEPTED` otherwise); default false. */
            acceptLicense?: boolean;
            /** Bytes done and total (0 when unknown), called on the script thread. */
            onProgress?: (done: number, total: number) => void;
        }

        interface ImportOptions extends InstallOptions {
            /** Model id of a model outside the catalog. */
            id?: string;
            kind?: Kind;
            modelType?: string;
            /** At most 128 characters. */
            name?: string;
            languages?: string[];
        }

        interface Models {
            /** Reads the plugin catalog and imported models without installing or accepting licenses. */
            list(filter?: ModelFilter | null, callOptions?: CallOptions): Promise<ModelInfo[]>;
            /** Explicitly downloads a catalog model. onProgress runs on this runtime's JS thread. */
            install(id: string, options?: InstallOptions | null, callOptions?: CallOptions): Promise<ModelInfo>;
            installAsync(id: string, options?: InstallOptions | null, callOptions?: CallOptions): Promise<ModelInfo>;
            /** Imports a host-readable tar.bz2 or zip archive. */
            importFile(path: string, options?: ImportOptions | null, callOptions?: CallOptions): Promise<ModelInfo>;
            /** Refused with SESSION_BUSY while the model is in use. */
            remove(id: string, callOptions?: CallOptions): Promise<boolean>;
            setDefault(kind: Kind, id: string, callOptions?: CallOptions): Promise<ModelInfo>;
            getDefault(kind: Kind, callOptions?: CallOptions): Promise<ModelInfo | null>;
            refreshCatalog(callOptions?: CallOptions): Promise<{ version: number; updated: boolean }>;
        }
  }
  const speech: speech.API;
  export = speech;
}
declare module "autojs6:speech" { import speech = require("speech"); export = speech; }

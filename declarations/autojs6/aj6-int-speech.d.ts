// Type definitions for AutoJs6 internal module speech
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Oct 29, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/modules/speech/Speech.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/modules/speech/SpeechModels.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/modules/speech/SpeechSpeaker.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/modules/speech/SpeechSession.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/modules/speech/SpeechWakeSession.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/modules/speech/SpeechJsErrors.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/speech/SpeechScriptArguments.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/speech/SpeechScriptValues.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/core/plugin/speech/SpeechBundles.kt
 * @Source %AutoJs6%/plugin-api/speech-api/src/main/java/org/autojs/plugin/speech/api/SpeechContract.kt
 * @Source %AutoJs6%/plugin-api/speech-api/src/main/java/org/autojs/plugin/speech/api/SpeechErrorCodes.kt
 * @Source %AutoJs6%/plugin-api/speech-api/src/main/java/org/autojs/plugin/speech/api/SpeechLimits.kt
 * @Source %AutoJs6%/docs/dev/speech-plugin-protocol-v1.md
 */

declare namespace Internal {

    /**
     * The global `speech` object (also `$speech`), available since AutoJs6 6.8.0 through the
     * external 3-Macaw Speech plugin: offline speech recognition of files, PCM and the
     * microphone, voice activity detection, wake words and neural speech synthesis, and from
     * 3-Macaw Speech 1.3.0 speaker recognition, speaker diarization, language identification and
     * audio tagging, with the models kept in the plugin. AutoJs6 has no recognizer or synthesizer
     * of its own: while the plugin is missing, disabled or incompatible, every method throws (or
     * rejects with) a
     * `SpeechError` whose `code` is `PLUGIN_UNAVAILABLE`, `PLUGIN_DISABLED` or
     * `PLUGIN_INCOMPATIBLE`; {@link isAvailable} probes without throwing.
     *
     * Audio files are named by paths (relative paths resolve against the script working directory;
     * URIs such as `content://` are refused): WAV with every plugin, and with a plugin that declares
     * the `audioDecode` feature (3-Macaw Speech 1.2.0 or later) any format the device decodes, such as
     * MP3, AAC (M4A), Ogg (Vorbis, Opus), FLAC, AMR or the first audio track of a video file; PCM is
     * mono PCM16 LE. The plugin records the microphone itself and needs its own microphone
     * permission (see {@link Speech.Capabilities.microphoneGranted}).
     *
     * Options are checked before anything reaches the plugin: an unknown option key or a value of
     * the wrong shape or range fails with `INVALID_OPTIONS`, a value beyond a contract ceiling
     * (session length, hotwords, keywords, text length) with `LIMIT_EXCEEDED`. The synchronous
     * forms that may wait long ({@link recognize}, {@link detectVoice}, {@link synthesize},
     * {@link diarize}, {@link detectLanguage}, {@link tag}, `speaker.enroll`, `speaker.verify`,
     * `speaker.identify`, `models.install`, `models.importFile` and `models.refreshCatalog`)
     * refuse the UI thread with `INVALID_OPTIONS`; use the `Async` forms there.
     *
     * @see https://docs.autojs6.com/#/speech
     */
    interface Speech {

        /**
         * Whether a compatible, enabled speech plugin answers right now; never throws. `true`
         * does not mean that a model is installed or that the plugin holds the microphone
         * permission.
         * @since 6.8.0
         */
        isAvailable(): boolean;

        /**
         * A snapshot of the plugin's capabilities: contract version, features, catalog version,
         * runtime, system TTS engine package, microphone permission and plugin version.
         * @since 6.8.0
         * @example
         * let caps = speech.capabilities();
         * if (!caps.microphoneGranted) console.warn('3-Macaw Speech has no microphone permission');
         */
        capabilities(): Speech.Capabilities;

        /**
         * Opens a dictation session and returns it once the plugin opened it (state `pending`
         * until `ready`). The default source `'mic'` records the plugin's microphone; the whole
         * plugin runs one microphone session (dictation or wake) at a time, so a second one fails
         * at once with `SESSION_BUSY`, and a missing microphone permission fails with
         * `PERMISSION_DENIED`. The source `'external'` recognizes 16 kHz PCM given to
         * {@link Speech.Session.feed}.
         *
         * The script keeps running until the session's `end` event; the script's exit cancels the
         * session silently. Open microphone sessions that should keep recording in the background
         * while AutoJs6 is visible (or while its accessibility service is bound): a session
         * opened later reports silenced audio as a `warning` with `PERMISSION_DENIED` and goes on.
         * @since 6.8.0
         * @example
         * let session = speech.listen({ language: 'zh', maxDurationMillis: 10000 });
         * session.on('final', event => console.log(event.text));
         * session.on('error', error => console.error(error.code, error.message));
         * session.on('end', event => console.log(event.reason, session.result()));
         */
        listen(options?: Speech.ListenOptions | null): Speech.Session;

        /**
         * Recognizes an audio file (at most 200 MiB and 30 minutes; formats other than WAV need the
         * `audioDecode` feature, else `UNSUPPORTED_FORMAT`, which also reports a file without an audio
         * track, without a decoder on the device or damaged) or PCM and waits for the result (at most
         * 10 minutes). Blocking; refuses the UI thread.
         * @since 6.8.0
         * @example
         * let result = speech.recognize('./voice.wav', { language: 'en' });
         * console.log(result.text, result.durationMillis);
         */
        recognize(source: Speech.AudioSource, options?: Speech.RecognizeOptions | null): Speech.Recognition;

        /** {@link recognize} settled on the script thread; usable on the UI thread. @since 6.8.0 */
        recognizeAsync(source: Speech.AudioSource, options?: Speech.RecognizeOptions | null): Promise<Speech.Recognition>;

        /**
         * The voice segments of an audio file or PCM (same sources and limits as {@link recognize}). Blocking;
         * refuses the UI thread. There is no `Async` form.
         * @since 6.8.0
         */
        detectVoice(source: Speech.AudioSource, options?: Speech.VadOptions | null): Speech.VadResult;

        /**
         * Opens a wake word session for 1 to 50 distinct keywords and returns it once the plugin
         * opened it. Each hit emits `wake`; with `thenListen` the hit is followed by one dictation
         * round, the `listen` session of the `wake` event, after which spotting resumes. A wake
         * session, its rounds included, is the plugin's one microphone session. The script keeps
         * running until its `end` event.
         * @since 6.8.0
         * @example
         * let wake = speech.wake(['hello macaw'], { thenListen: { silenceEndMillis: 1200 } });
         * wake.on('wake', event => {
         *     event.listen?.on('final', result => console.log('command:', result.text));
         * });
         */
        wake(keywords: Speech.KeywordInput | readonly Speech.KeywordInput[], options?: Speech.WakeOptions | null): Speech.WakeSession;

        /**
         * Synthesizes 1 to 8000 characters into a WAV file (PCM16 at the model's sample rate, at
         * most 100 MiB). The plugin writes a staged file next to `path` and AutoJs6 moves it over
         * `path` once complete, so a failed or cancelled synthesis leaves nothing there. The call
         * fails with `TIMEOUT` after 10 minutes without progress. Blocking; refuses the UI thread.
         * @since 6.8.0
         * @example
         * let written = speech.synthesize('Task completed', './done.wav', { speed: 1.1 });
         * console.log(written.path, written.durationMillis, written.warnings.length);
         */
        synthesize(text: string, path: string, options?: Speech.SynthesisOptions | null): Speech.SynthesisResult;

        /** {@link synthesize} settled on the script thread; usable on the UI thread. @since 6.8.0 */
        synthesizeAsync(text: string, path: string, options?: Speech.SynthesisOptions | null): Promise<Speech.SynthesisResult>;

        /**
         * Speaks the text through the plugin's system TTS engine: `tts(text, options)` with the
         * engine fixed to 3-Macaw Speech, the voice chosen by `model` / `speaker` and the rate set
         * by `speed`, so it returns the Promise of `tts()`. Without `model` the engine speaks with
         * its default voice for the given language or, without one, for the language of the text;
         * with `model` but no `speaker` it takes the model's lowest numbered speaker of that
         * language. While the plugin is not installed the Promise rejects with a `SpeechError`
         * `PLUGIN_UNAVAILABLE`; other failures are those of `tts`.
         * @since 6.8.0
         * @example
         * speech.speak('Task completed').then(() => console.log('spoken'));
         */
        speak(text: string, options?: Speech.SpeakOptions | null): Promise<Tts.Result>;

        /**
         * Who spoke when in an audio file (speaker diarization; feature `diarization`, 3-Macaw
         * Speech 1.3.0 and later). The file follows the rules of {@link recognize} (a path only, no
         * PCM). Needs a `segment` model and a `speaker` model; a missing one fails with
         * `MODEL_MISSING`. Speakers are numbered from 0 in order of first appearance; more than
         * 10000 turns fail with `LIMIT_EXCEEDED`. Blocking; refuses the UI thread.
         * @since 6.8.0
         * @example
         * let result = speech.diarize('./meeting.wav', { speakers: 2 });
         * result.segments.forEach(s => console.log(s.speaker, s.startMillis, s.endMillis));
         */
        diarize(file: string, options?: Speech.DiarizeOptions | null): Speech.Diarization;

        /** {@link diarize} settled on the script thread; usable on the UI thread. @since 6.8.0 */
        diarizeAsync(file: string, options?: Speech.DiarizeOptions | null): Promise<Speech.Diarization>;

        /**
         * The spoken language of an audio file (feature `languageId`, 3-Macaw Speech 1.3.0 and
         * later): the plugin cuts the speech into windows of at most 30 seconds and votes over the
         * first `windows` of them. The file follows the rules of {@link recognize} (a path only);
         * a file without speech fails with `AUDIO_TOO_SHORT`. Blocking; refuses the UI thread.
         * @since 6.8.0
         * @example
         * let detected = speech.detectLanguage('./voice.mp3', { windows: 5 });
         * console.log(detected.language, JSON.stringify(detected.candidates));
         */
        detectLanguage(file: string, options?: Speech.DetectLanguageOptions | null): Speech.LanguageDetection;

        /** {@link detectLanguage} settled on the script thread; usable on the UI thread. @since 6.8.0 */
        detectLanguageAsync(file: string, options?: Speech.DetectLanguageOptions | null): Promise<Speech.LanguageDetection>;

        /**
         * The sounds in an audio file (audio tagging; feature `audioTagging`, 3-Macaw Speech 1.3.0
         * and later), scored in windows of 10 seconds against the 527 English labels of AudioSet.
         * Each label keeps its best window; the `topK` best labels are answered. The file follows
         * the rules of {@link recognize} (a path only). Blocking; refuses the UI thread.
         * @since 6.8.0
         * @example
         * let tagged = speech.tag('./street.wav', { topK: 3 });
         * tagged.labels.forEach(l => console.log(l.label, l.score, l.startMillis));
         */
        tag(file: string, options?: Speech.TagOptions | null): Speech.Tagging;

        /** {@link tag} settled on the script thread; usable on the UI thread. @since 6.8.0 */
        tagAsync(file: string, options?: Speech.TagOptions | null): Promise<Speech.Tagging>;

        /** Model catalog and installed models of the plugin. @since 6.8.0 */
        readonly models: Speech.Models;

        /**
         * Speaker voiceprints the plugin keeps (feature `speaker`, 3-Macaw Speech 1.3.0 and later;
         * an earlier plugin refuses every call with `PLUGIN_INCOMPATIBLE`). No result carries an
         * embedding.
         * @since 6.8.0
         */
        readonly speaker: Speech.Speaker;

        /** The error class of the module; `e instanceof speech.SpeechError`. @since 6.8.0 */
        readonly SpeechError: Speech.ErrorConstructor;
    }

    namespace Speech {

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
            | 'SPEAKER_NOT_FOUND'
            | 'AUDIO_TOO_SHORT'
            | 'INTERNAL';

        /** What the plugin implements; a call whose feature is missing fails with `PLUGIN_INCOMPATIBLE`. */
        type Feature =
            | 'asr'
            | 'asrStreaming'
            | 'vad'
            | 'kws'
            | 'tts'
            | 'ttsSystemEngine'
            | 'models'
            | 'audioDecode'
            | 'speaker'
            | 'diarization'
            | 'languageId'
            | 'audioTagging';

        /**
         * Model kinds: recognition, synthesis, keyword spotting (wake words), voice activity
         * detection, and from 3-Macaw Speech 1.3.0 speaker embedding (`speaker`), speaker
         * segmentation for diarization (`segment`), language identification (`langid`) and audio
         * tagging (`tagger`).
         */
        type Kind = 'asr' | 'tts' | 'kws' | 'vad' | 'speaker' | 'segment' | 'langid' | 'tagger';

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

        /**
         * Mono PCM16 LE: an `ArrayBuffer`, a typed array view such as `Int16Array`, or a Java
         * `byte[]` (for example from `files.readBytes`, declared as `number[]`). A plain script
         * array of numbers is refused.
         */
        type Pcm = ArrayBuffer | ArrayBufferView | number[];

        /** An audio file path (WAV, or any format the device decodes with the `audioDecode` feature) or PCM. */
        type AudioSource = string | Pcm;

        /** A warning (the call or session went on) as `{ code, message }`. */
        interface Problem {
            readonly code: ErrorCode | (string & {});
            readonly message: string;
        }

        /**
         * `name` is `'SpeechError'`; `toString()` yields `SpeechError [CODE]: message`; `message`
         * is not enumerable. Errors thrown by AutoJs6 carry the underlying Java exception as the
         * non-enumerable `javaException`.
         */
        interface SpeechError extends Error {
            readonly name: 'SpeechError';
            code: ErrorCode | (string & {});
            readonly javaException?: java.lang.Throwable;
        }

        /** Callable with or without `new`; `message` and `code` become strings, by default `''` and `'INTERNAL'`. */
        interface ErrorConstructor {
            new(message?: unknown, code?: ErrorCode | (string & {}) | null): SpeechError;
            (message?: unknown, code?: ErrorCode | (string & {}) | null): SpeechError;
            readonly prototype: SpeechError;
        }

        interface Capabilities {
            /** Speech contract version: 1, or 2 from 3-Macaw Speech 1.3.0 (speakers and the offline analyses). */
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
            /**
             * Punctuation; default true. The model's own punctuation (SenseVoice) is kept; results of
             * streaming models get punctuation from an installed punctuation model (3-Macaw Speech 1.2.0
             * or later; Chinese and English, English casing restored) and stay as they are when none
             * covers their language. `false` removes all punctuation.
             */
            punctuation?: boolean;
            /** Voice activity segmentation (files and PCM) or gating (microphone); default true. */
            vad?: boolean;
            /** PCM only: input sample rate, 8000 to 192000; default 16000. Audio files carry their own rate. */
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
        interface SpeakOptions extends Omit<Tts.SpeechOptions, 'engine' | 'voice' | 'rate' | 'speechRate'> {
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
            readonly reason: EndReason;
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
         * The dictation session of {@link Speech.listen}, or a dictation round of a wake session.
         * `end` is the terminal event of a `listen` session.
         * @see https://docs.autojs6.com/#/speechSessionType
         */
        interface Session extends EventEmitter$ {
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
            stop(): this;
            /** Ends without a last result (`end` with `'cancelled'`); for a wake round, ends the round only. Idempotent. */
            cancel(): this;
            /** Only `source: 'external'`: 16 kHz mono PCM16 LE, at most 1 MiB per call. */
            feed(pcm: Pcm): this;
            /** `SpeechSession { source: ..., state: ... }` with the round, model and reason when known. */
            toString(): string;

            on<K extends keyof SessionEvents>(name: K, listener: (event: SessionEvents[K]) => void): this;
            on(name: string, listener: (...args: any[]) => void): this;
            once<K extends keyof SessionEvents>(name: K, listener: (event: SessionEvents[K]) => void): this;
            once(name: string, listener: (...args: any[]) => void): this;
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
            readonly reason: EndReason;
        }

        interface WakeEvents {
            ready: ReadyEvent;
            wake: WakeEvent;
            warning: Problem;
            error: SpeechError;
            end: WakeEndEvent;
        }

        /**
         * The wake word session of {@link Speech.wake}; `end` is its terminal event.
         * @see https://docs.autojs6.com/#/speechWakeSessionType
         */
        interface WakeSession extends EventEmitter$ {
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
            stop(): this;
            isActive(): boolean;
            /** `SpeechWakeSession { keywords: [...], state: ... }` with the reason when known. */
            toString(): string;

            on<K extends keyof WakeEvents>(name: K, listener: (event: WakeEvents[K]) => void): this;
            on(name: string, listener: (...args: any[]) => void): this;
            once<K extends keyof WakeEvents>(name: K, listener: (event: WakeEvents[K]) => void): this;
            once(name: string, listener: (...args: any[]) => void): this;
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
            /**
             * Language tags such as `'zh'`; empty for voice activity detection, `['mul']` for
             * language identification and `['zxx']` for segmentation and tagging models.
             */
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
            /** Catalog and imported models, at most 512. @since 6.8.0 */
            list(filter?: ModelFilter | null): ModelInfo[];
            /**
             * Downloads and installs a catalog model and waits. Blocking; refuses the UI thread.
             * @since 6.8.0
             * @example
             * speech.models.install('kws.zipformer.zh-en.2025-12-20', {
             *     onProgress: (done, total) => console.log(done, '/', total),
             * });
             */
            install(id: string, options?: InstallOptions | null): ModelInfo;
            /** {@link install} settled on the script thread; usable on the UI thread. @since 6.8.0 */
            installAsync(id: string, options?: InstallOptions | null): Promise<ModelInfo>;
            /** Imports a local model archive (`tar.bz2` or `zip`) the script can read. Blocking; refuses the UI thread. @since 6.8.0 */
            importFile(path: string, options?: ImportOptions | null): ModelInfo;
            /** Removes an installed model; `SESSION_BUSY` while a session uses it. @since 6.8.0 */
            remove(id: string): boolean;
            /** Makes an installed model the default of its kind. @since 6.8.0 */
            setDefault(kind: Kind, id: string): ModelInfo;
            /** The installed default model of the kind, null when none is installed. @since 6.8.0 */
            getDefault(kind: Kind): ModelInfo | null;
            /**
             * Fetches the signed model catalog (at most 2 minutes): `version` is the catalog version
             * in use afterwards, `updated` whether a newer catalog was installed. Blocking; refuses
             * the UI thread.
             * @since 6.8.0
             */
            refreshCatalog(): { version: number; updated: boolean };
        }

        interface EnrollOptions {
            /** Drops the speaker's earlier samples first; required to switch a speaker to another model. */
            replace?: boolean;
            /** Speaker model id; the default speaker model when omitted. */
            model?: string;
        }

        interface Enrollment {
            readonly name: string;
            /** Samples the voiceprint averages so far. */
            readonly samples: number;
            /** Milliseconds of speech this call used. */
            readonly durationMillis: number;
            readonly modelId: string;
        }

        interface VerifyOptions {
            /** Cosine score between 0 and 1; the plugin's default of the speaker model when omitted. */
            threshold?: number;
        }

        interface IdentifyOptions extends VerifyOptions {
            /** Candidates to answer, an integer from 1 to 10 (default 3). */
            topK?: number;
        }

        interface Match {
            /** The speaker; for {@link Speaker.identify} null when no score reached the threshold. */
            readonly name: string | null;
            /** Cosine score, four decimals. */
            readonly score: number;
            readonly matched: boolean;
            /** The threshold used. */
            readonly threshold: number;
        }

        interface Verification extends Match {
            readonly name: string;
        }

        interface Identification extends Match {
            /** The best speakers, highest score first, at most `topK`. */
            readonly candidates: { readonly name: string; readonly score: number }[];
        }

        interface SpeakerInfo {
            readonly name: string;
            readonly samples: number;
            /** Last enrollment, milliseconds since the epoch. */
            readonly updatedAt: number;
            readonly modelId: string;
        }

        /**
         * Recordings follow the file rules of `speech.recognize`, each at most 60 seconds
         * (`LIMIT_EXCEEDED`) with at least 1 second of speech (`AUDIO_TOO_SHORT`). Names are trimmed,
         * 1 to 64 characters without control characters. The plugin keeps at most 50 speakers.
         */
        interface Speaker {
            /**
             * Enrolls a speaker from one recording or an array of 1 to 10, averaged; the samples join
             * the speaker's earlier ones unless `replace: true`. Blocking; refuses the UI thread.
             * @since 6.8.0
             * @example
             * let enrolled = speech.speaker.enroll('Alice', ['./alice-1.wav', './alice-2.wav'], { replace: true });
             * console.log(enrolled.samples, enrolled.durationMillis);
             */
            enroll(name: string, files: string | string[], options?: EnrollOptions | null): Enrollment;
            /** {@link enroll} settled on the script thread; usable on the UI thread. @since 6.8.0 */
            enrollAsync(name: string, files: string | string[], options?: EnrollOptions | null): Promise<Enrollment>;
            /**
             * Whether the recording is the enrolled speaker's; `SPEAKER_NOT_FOUND` for a name not
             * enrolled. Blocking; refuses the UI thread.
             * @since 6.8.0
             */
            verify(name: string, file: string, options?: VerifyOptions | null): Verification;
            /** {@link verify} settled on the script thread; usable on the UI thread. @since 6.8.0 */
            verifyAsync(name: string, file: string, options?: VerifyOptions | null): Promise<Verification>;
            /**
             * The enrolled speakers of the current speaker model most like the recording. Blocking;
             * refuses the UI thread.
             * @since 6.8.0
             * @example
             * let who = speech.speaker.identify('./test.wav', { topK: 3 });
             * console.log(who.name === null ? 'unknown' : who.name, who.candidates);
             */
            identify(file: string, options?: IdentifyOptions | null): Identification;
            /** {@link identify} settled on the script thread; usable on the UI thread. @since 6.8.0 */
            identifyAsync(file: string, options?: IdentifyOptions | null): Promise<Identification>;
            /** The enrolled speakers, sorted by name. @since 6.8.0 */
            list(): SpeakerInfo[];
            /** Removes the speaker's voiceprint; false when the name is not enrolled. @since 6.8.0 */
            remove(name: string): boolean;
        }

        /**
         * Options shared by {@link Speech.diarize}, {@link Speech.detectLanguage} and
         * {@link Speech.tag}. AutoJs6 waits 10 minutes for each progress of the plugin (`TIMEOUT`
         * without one), with no limit on the whole call.
         */
        interface AnalysisOptions {
            /** Milliseconds of audio done and in all, called on the script thread; a thrown error is rethrown once the call ends. */
            onProgress?: (done: number, total: number) => void;
        }

        interface DiarizeOptions extends AnalysisOptions {
            /** Segmentation model id (kind `segment`); default the default `segment` model. */
            model?: string;
            /** Speaker embedding model id (kind `speaker`); default the default `speaker` model. */
            speakerModel?: string;
            /** Number of speakers when known, an integer from 0 to 20; 0 (default) lets the plugin count them. */
            speakers?: number;
            /** Clustering threshold from 0 to 2, a larger one merges more voices into one speaker; default the plugin's value. */
            threshold?: number;
            /** Also names each speaker after the closest voiceprint enrolled with {@link Speech.speaker}; default false. */
            identify?: boolean;
        }

        interface DiarizationSegment {
            readonly startMillis: number;
            readonly endMillis: number;
            /** The speaker number, from 0 in order of first appearance. */
            readonly speaker: number;
        }

        interface DiarizationName {
            /** The speaker number of {@link DiarizationSegment.speaker}. */
            readonly speaker: number;
            /** The enrolled speaker whose voiceprint is closest, null when its score is below that speaker model's threshold. */
            readonly name: string | null;
            /** Cosine score of the closest voiceprint, four decimals; null when nothing could be compared. */
            readonly score: number | null;
        }

        interface Diarization {
            /** Speaker turns in ascending time. */
            readonly segments: DiarizationSegment[];
            /** Number of speakers found. */
            readonly speakers: number;
            /** Length of the decoded audio. */
            readonly durationMillis: number;
            /** The segmentation model used. */
            readonly modelId: string;
            /** With `identify: true`: one entry per speaker. */
            readonly names?: DiarizationName[];
        }

        interface DetectLanguageOptions extends AnalysisOptions {
            /** Language identification model id (kind `langid`); default the default `langid` model. */
            model?: string;
            /** Speech windows to vote over, an integer from 1 to 60 (default 3); 60 windows cover 30 minutes. */
            windows?: number;
        }

        interface LanguageSegment {
            readonly startMillis: number;
            readonly endMillis: number;
            readonly language: string;
        }

        interface LanguageDetection {
            /** The language most windows voted for, a Whisper code such as `'zh'`, `'en'` or `'ja'`; a tie goes to the earliest window. */
            readonly language: string;
            /** Every language voted for with its share of the windows (0 to 1, four decimals), most voted first. */
            readonly candidates: { readonly language: string; readonly score: number }[];
            /** One entry per window that voted. */
            readonly segments: LanguageSegment[];
            /** Length of the decoded audio. */
            readonly durationMillis: number;
            readonly modelId: string;
        }

        interface TagOptions extends AnalysisOptions {
            /** Audio tagging model id (kind `tagger`); default the default `tagger` model. */
            model?: string;
            /** Labels to answer, an integer from 1 to 20 (default 5); also the labels per window of `timeline`. */
            topK?: number;
            /** Also answers the `topK` labels of every 10 second window; default false. */
            timeline?: boolean;
        }

        interface AudioLabel {
            /** English AudioSet label such as `'Speech'` or `'Music'`. */
            readonly label: string;
            /** AudioSet ontology id such as `'/m/09x0r'`. */
            readonly mid: string;
            /** Four decimals. */
            readonly score: number;
        }

        interface TaggedLabel extends AudioLabel {
            /** The window where the label scored best. */
            readonly startMillis: number;
            readonly endMillis: number;
        }

        interface TagWindow {
            readonly startMillis: number;
            readonly endMillis: number;
            readonly labels: AudioLabel[];
        }

        interface Tagging {
            /** The `topK` labels with the best scores, best first. */
            readonly labels: TaggedLabel[];
            /** Length of the decoded audio. */
            readonly durationMillis: number;
            readonly modelId: string;
            /** With `timeline: true`: one entry per 10 second window. */
            readonly timeline?: TagWindow[];
        }
    }
}

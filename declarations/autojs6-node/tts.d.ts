/** Async, execution-owned Android TTS. Does not inject a global tts variable. */
declare module "tts" {
  namespace tts {
    interface API {

        (text: string, options?: SpeechOptions, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Result>;

        readonly maxInputLength: 3999;
        readonly maxSynthesisFileSize: 536870912;
        readonly QUEUE_FLUSH: 'flush';
        readonly QUEUE_ADD: 'add';

        speak(text: string, options?: SpeechOptions, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Result>;
        enqueue(text: string, options?: SpeechOptions, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Result>;

        utterance(text: string, options?: SpeechOptions, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Utterance>;
        speakTask(text: string, options?: SpeechOptions, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Utterance>;
        enqueueUtterance(text: string, options?: SpeechOptions, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Utterance>;
        enqueueTask(text: string, options?: SpeechOptions, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Utterance>;

        synthesize(text: string, path: string, options?: SynthesisOptions, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Result>;
        synthesizeToFile(text: string, path: string, options?: SynthesisOptions, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Result>;
        synthesis(text: string, path: string, options?: SynthesisOptions, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Utterance>;
        synthesizeTask(text: string, path: string, options?: SynthesisOptions, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Utterance>;
        synthesisTask(text: string, path: string, options?: SynthesisOptions, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Utterance>;

        silence(duration: number, options?: SpeechOptions, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Result>;
        silenceTask(duration: number, options?: SpeechOptions, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Utterance>;

        ready(engine?: EngineQuery, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<ReadyInfo>;
        engines(engine?: EngineQuery, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<EngineInfo[]>;
        voices(filter?: EngineQuery | VoiceFilter, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<VoiceInfo[]>;
        languages(engine?: EngineQuery, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<string[]>;
        isLanguageAvailable(locale: string, engine?: EngineQuery, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
        languageAvailability(locale: string, engine?: EngineQuery, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<LanguageAvailability>;

        stop(callOptions?: AutoJs6Node.BridgeCallOptions): Promise<number>;
        stopAll(callOptions?: AutoJs6Node.BridgeCallOptions): Promise<number>;
        reset(callOptions?: AutoJs6Node.BridgeCallOptions): Promise<number>;
        isSpeaking(callOptions?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
        isBusy(callOptions?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
        status(callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Status>;
        defaults(callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Defaults>;
        config(callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Defaults>;
        configure(options: SpeechOptions, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<Defaults>;
        getMaxInputLength(): 3999;
        openSettings(callOptions?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
        installData(engine?: EngineQuery, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;

        close(): Promise<boolean>;
        on<K extends keyof EventMap>(event: K, listener: (event: {id: string; value: EventMap[K]}) => void): this;
        once<K extends keyof EventMap>(event: K, listener: (event: {id: string; value: EventMap[K]}) => void): this;
        off<K extends keyof EventMap>(event: K, listener: (event: {id: string; value: EventMap[K]}) => void): this;
        removeAllListeners(event?: keyof EventMap): this;
    }
        type Operation = 'speech' | 'silence' | 'file';
        type QueueMode = 'flush' | 'replace' | 'add' | 'enqueue' | 'append' | 0 | 1;
        type Usage = 'media' | 'accessibility' | 'assistant' | 'navigation' | 'alarm'
            | 'notification' | 'voiceCommunication';
        type EngineQuery = string | null | { engine?: string | null };
        type ParameterValue = string | boolean | number;

        interface SpeechOptions {
            engine?: string | null;
            locale?: string | null;
            language?: string | null;
            lang?: string | null;
            voice?: string | null;
            rate?: number;
            speechRate?: number;
            pitch?: number;
            volume?: number;
            pan?: number;
            queue?: QueueMode;
            autoSplit?: boolean;
            split?: boolean;
            offlineOnly?: boolean;
            offline?: boolean;
            audioEvents?: boolean;
            emitAudio?: boolean;
            usage?: Usage | null;
            audioUsage?: Usage | null;
            timeout?: number | null | 'auto';
            timeoutMillis?: number | null | 'auto';
            timeoutMs?: number | null | 'auto';
            parameters?: Record<string, ParameterValue> | null;
            params?: Record<string, ParameterValue> | null;
        }

        interface SynthesisOptions extends SpeechOptions {
            overwrite?: boolean;
            createDirectories?: boolean;
            mkdirs?: boolean;
        }

        interface VoiceFilter {
            engine?: string | null;
            locale?: string | null;
            language?: string | null;
            lang?: string | null;
            offlineOnly?: boolean | null;
            offline?: boolean | null;
            installedOnly?: boolean | null;
            installed?: boolean | null;
        }

        interface Defaults {
            engine: string | null;
            locale: string | null;
            voice: string | null;
            rate: number;
            pitch: number;
            volume: number;
            pan: number;
            queue: 'flush' | 'add';
            autoSplit: boolean;
            offlineOnly: boolean;
            audioEvents: boolean;
            usage: Usage;
            timeout: number | 'auto';
            parameters: Record<string, ParameterValue>;
        }

        interface Result {
            id: string;
            operation: Operation;
            status: 'done';
            engine: string | null;
            requestedEngine: string | null;
            voice: string | null;
            locale: string | null;
            usage: Usage | null;
            chunks: number;
            characters: number;
            duration: number;
            path: string | null;
        }

        interface Status {
            state: 'idle' | 'initializing' | 'working' | 'ready' | 'failed' | 'closed';
            engine: string | null;
            requestedEngine: string | null;
            activeId: string | null;
            operation: Operation | null;
            queued: number;
            isSpeaking: boolean;
            isBusy: boolean;
        }

        interface ReadyInfo {
            state: 'ready';
            engine: string | null;
            requestedEngine: string | null;
            defaultEngine: string | null;
            voice: VoiceInfo | null;
            locale: string | null;
        }

        interface EngineInfo {
            name: string;
            label: string;
            default: boolean;
            requested: boolean;
        }

        interface VoiceInfo {
            name: string;
            locale: string;
            quality: number;
            latency: number;
            networkRequired: boolean;
            offline: boolean;
            notInstalled: boolean;
            features: string[];
        }

        interface LanguageAvailability {
            locale: string;
            available: boolean;
            support: 'language'
                | 'language_and_country'
                | 'language_country_and_variant'
                | 'missing_data'
                | 'not_supported'
                | 'unknown';
            statusCode: number;
        }

        interface QueuedInfo {
            id: string;
            operation: Operation;
            queue: 'flush' | 'add';
            chunks: number;
        }

        interface StartInfo {
            id: string;
            operation: Operation;
            voice: string | null;
            locale: string | null;
            chunks: number;
        }

        interface ChunkInfo {
            id: string;
            index: number;
            count: number;
            start: number;
            end: number;
        }

        interface RangeInfo {
            id: string;
            start: number;
            end: number;
            frame: number;
            chunk: number;
        }

        interface SynthesisInfo {
            id: string;
            sampleRate: number;
            encoding: 'pcm_8_bit' | 'pcm_16_bit' | 'pcm_float' | 'unknown';
            channels: number;
            chunk: number;
        }

        interface AudioInfo {
            id: string;
            data: Uint8Array;
            chunk: number;
        }

        interface StopInfo {
            id: string;
            operation: Operation;
            status: 'stopped';
            reason: string;
        }

        interface Failure extends Error {
            readonly code: string;
            readonly errorCode: number | null;
        }

        interface EventMap {
            queued: QueuedInfo; start: StartInfo; chunk: ChunkInfo; range: RangeInfo;
            synthesis: SynthesisInfo; audio: AudioInfo; done: Result;
            stop: StopInfo; cancelled: StopInfo; error: Failure;
        }
        interface Utterance {
            readonly id: string;
            readonly operation: Operation;
            readonly text: string | null;
            readonly result: Promise<Result>;
            readonly state: 'created' | 'queued' | 'running' | 'done' | 'stopped' | 'error' | 'cancelled';
            readonly isDone: boolean;
            on<K extends keyof EventMap>(event: K, listener: (value: EventMap[K]) => void): this;
            once<K extends keyof EventMap>(event: K, listener: (value: EventMap[K]) => void): this;
            off<K extends keyof EventMap>(event: K, listener: (value: EventMap[K]) => void): this;
            removeAllListeners(event?: keyof EventMap): this;
            stop(): Promise<this>;
            cancel(): Promise<this>;
        }
  }
  const tts: tts.API;
  export = tts;
}
declare module "autojs6:tts" { import tts = require("tts"); export = tts; }

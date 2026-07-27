// Type definitions for AutoJs6 internal module tts
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Jul 27, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/tts/Tts.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/tts/TtsUtterance.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/tts/TtsOptions.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/tts/TtsService.kt
 */

declare namespace Internal {

    interface Tts {

        (text: string, options?: Tts.SpeechOptions): Promise<Tts.Result>;

        readonly maxInputLength: 3999;
        readonly maxSynthesisFileSize: 536870912;
        readonly QUEUE_FLUSH: 'flush';
        readonly QUEUE_ADD: 'add';

        speak(text: string, options?: Tts.SpeechOptions): Promise<Tts.Result>;
        enqueue(text: string, options?: Tts.SpeechOptions): Promise<Tts.Result>;

        utterance(text: string, options?: Tts.SpeechOptions): Tts.Utterance;
        speakTask(text: string, options?: Tts.SpeechOptions): Tts.Utterance;
        enqueueUtterance(text: string, options?: Tts.SpeechOptions): Tts.Utterance;
        enqueueTask(text: string, options?: Tts.SpeechOptions): Tts.Utterance;

        synthesize(text: string, path: string, options?: Tts.SynthesisOptions): Promise<Tts.Result>;
        synthesizeToFile(text: string, path: string, options?: Tts.SynthesisOptions): Promise<Tts.Result>;
        synthesis(text: string, path: string, options?: Tts.SynthesisOptions): Tts.Utterance;
        synthesizeTask(text: string, path: string, options?: Tts.SynthesisOptions): Tts.Utterance;
        synthesisTask(text: string, path: string, options?: Tts.SynthesisOptions): Tts.Utterance;

        silence(duration: number, options?: Tts.SpeechOptions): Promise<Tts.Result>;
        silenceTask(duration: number, options?: Tts.SpeechOptions): Tts.Utterance;

        ready(engine?: Tts.EngineQuery): Promise<Tts.ReadyInfo>;
        engines(engine?: Tts.EngineQuery): Promise<Tts.EngineInfo[]>;
        voices(filter?: Tts.EngineQuery | Tts.VoiceFilter): Promise<Tts.VoiceInfo[]>;
        languages(engine?: Tts.EngineQuery): Promise<string[]>;
        isLanguageAvailable(locale: string, engine?: Tts.EngineQuery): Promise<boolean>;
        languageAvailability(locale: string, engine?: Tts.EngineQuery): Promise<Tts.LanguageAvailability>;

        stop(): number;
        stopAll(): number;
        reset(): number;
        isSpeaking(): boolean;
        isBusy(): boolean;
        status(): Tts.Status;
        defaults(): Tts.Defaults;
        config(): Tts.Defaults;
        configure(options: Tts.SpeechOptions): Tts.Defaults;
        getMaxInputLength(): 3999;
        openSettings(): boolean;
        installData(engine?: Tts.EngineQuery): boolean;

    }

    namespace Tts {

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
            data: number[];
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

        interface Utterance extends EventEmitter$ {
            readonly id: string;
            readonly operation: Operation;
            readonly text: string | null;
            readonly result: Promise<Result>;
            readonly state: 'created' | 'queued' | 'running' | 'done' | 'stopped' | 'error' | 'cancelled';
            readonly isDone: boolean;

            on(eventName: 'queued', listener: (info: QueuedInfo) => void): this;
            on(eventName: 'start', listener: (info: StartInfo) => void): this;
            on(eventName: 'chunk', listener: (info: ChunkInfo) => void): this;
            on(eventName: 'range', listener: (info: RangeInfo) => void): this;
            on(eventName: 'synthesis', listener: (info: SynthesisInfo) => void): this;
            on(eventName: 'audio', listener: (info: AudioInfo) => void): this;
            on(eventName: 'done', listener: (result: Result) => void): this;
            on(eventName: 'stop' | 'cancelled', listener: (info: StopInfo) => void): this;
            on(eventName: 'error', listener: (error: Failure) => void): this;
            on(eventName: string, listener: (...args: any[]) => void): this;

            once(eventName: 'queued', listener: (info: QueuedInfo) => void): this;
            once(eventName: 'start', listener: (info: StartInfo) => void): this;
            once(eventName: 'chunk', listener: (info: ChunkInfo) => void): this;
            once(eventName: 'range', listener: (info: RangeInfo) => void): this;
            once(eventName: 'synthesis', listener: (info: SynthesisInfo) => void): this;
            once(eventName: 'audio', listener: (info: AudioInfo) => void): this;
            once(eventName: 'done', listener: (result: Result) => void): this;
            once(eventName: 'stop' | 'cancelled', listener: (info: StopInfo) => void): this;
            once(eventName: 'error', listener: (error: Failure) => void): this;
            once(eventName: string, listener: (...args: any[]) => void): this;

            stop(): this;
            cancel(): this;
        }

    }

}

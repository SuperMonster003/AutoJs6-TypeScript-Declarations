// Type definitions for the Rhino speech API of the 3-Macaw Speech plugin.
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
/// <reference path="./index.d.ts" />

declare namespace Internal {
    /** Requires a compatible enabled 3-Macaw Speech plugin and the selected model. */
    interface Speech {
        isAvailable(): boolean;
        capabilities(): Speech.Capabilities;
        listen(options?: Speech.ListenOptions | null): Speech.Session;
        /** Blocking; unavailable on the UI thread. */
        recognize(source: Speech.AudioSource, options?: Speech.RecognizeOptions | null): Speech.Recognition;
        recognizeAsync(source: Speech.AudioSource, options?: Speech.RecognizeOptions | null): Promise<Speech.Recognition>;
        /** Blocking; unavailable on the UI thread. */
        detectVoice(source: Speech.AudioSource, options?: Speech.VadOptions | null): Speech.VadResult;
        wake(keywords: Speech.KeywordInput | readonly Speech.KeywordInput[], options?: Speech.WakeOptions | null): Speech.WakeSession;
        /** Writes a WAV file. Blocking; unavailable on the UI thread. */
        synthesize(text: string, path: string, options?: Speech.SynthesisOptions | null): Speech.SynthesisResult;
        synthesizeAsync(text: string, path: string, options?: Speech.SynthesisOptions | null): Promise<Speech.SynthesisResult>;
        /** Uses tts with the plugin engine; does not accept engine, voice, rate or speechRate. */
        speak(text: string, options?: Speech.SpeakOptions | null): Promise<Tts.Result>;
        readonly models: Speech.Models;
        readonly SpeechError: Speech.ErrorConstructor;
    }

    namespace Speech {
        type Kind = 'asr' | 'tts' | 'kws' | 'vad';
        type State = 'pending' | 'active' | 'ended';
        type EndReason = 'stopped' | 'timeout' | 'maxDuration' | 'cancelled' | 'error';
        /** number[] denotes a Java byte[] (for example files.readBytes), not an ordinary JS array. */
        type Pcm = ArrayBuffer | ArrayBufferView | number[];
        type AudioSource = string | Pcm;
        interface Problem { readonly code: string; readonly message: string; }
        interface SpeechError extends Error { readonly name: 'SpeechError'; code: string; }
        interface ErrorConstructor {
            new(message?: unknown, code?: unknown): SpeechError;
            (message?: unknown, code?: unknown): SpeechError;
            readonly prototype: SpeechError;
        }
        interface Capabilities {
            readonly contractVersion: number;
            readonly features: string[];
            readonly catalogVersion: number;
            readonly engineName: string | null;
            readonly engineVersion: string | null;
            readonly ttsEnginePackage: string | null;
            readonly microphoneGranted: boolean | null;
            readonly packageName: string;
            readonly versionName: string | null;
            readonly versionCode: number;
        }
        interface RecognizeOptions {
            model?: string; language?: string; hotwords?: string[];
            punctuation?: boolean; vad?: boolean;
            /** PCM input rate, 8000..192000; default 16000. */
            sampleRate?: number;
        }
        interface ListenOptions extends Omit<RecognizeOptions, 'sampleRate'> {
            source?: 'mic' | 'external';
            sampleRate?: 16000;
            silenceEndMillis?: number;
            maxDurationMillis?: number;
            timeoutMillis?: number;
        }
        interface VadOptions {
            model?: string; threshold?: number;
            minSpeechMillis?: number; minSilenceMillis?: number; sampleRate?: number;
        }
        interface Keyword { keyword: string; boost?: number; threshold?: number; }
        type KeywordInput = string | Keyword;
        interface WakeOptions {
            model?: string; minIntervalMillis?: number;
            thenListen?: boolean | (Omit<ListenOptions, 'source'> & { source?: 'mic' });
        }
        interface SynthesisOptions {
            model?: string; speaker?: string | number; speed?: number; format?: 'wav';
        }
        type SpeakOptions = Omit<Tts.SpeechOptions, 'engine' | 'voice' | 'rate' | 'speechRate'> & {
            model?: string; speaker?: string | number; speed?: number;
        };
        interface Segment {
            readonly startMillis: number; readonly endMillis: number; readonly text: string;
            readonly language?: string; readonly tags?: { readonly emotion?: string; readonly event?: string };
        }
        interface Recognition {
            readonly text: string; readonly segments: Segment[]; readonly durationMillis: number;
            readonly modelId: string; readonly warnings: Problem[];
        }
        interface VadResult {
            readonly segments: { readonly startMillis: number; readonly endMillis: number }[];
            readonly durationMillis: number; readonly modelId?: string; readonly warnings?: Problem[];
        }
        interface SynthesisResult {
            readonly path: string; readonly sampleRate: number; readonly durationMillis: number;
            readonly modelId: string; readonly speakerId: number; readonly sizeBytes: number; readonly warnings: Problem[];
        }
        interface ReadyEvent { readonly sessionId: string; readonly modelId: string; }
        interface TextEvent extends Partial<Segment> { readonly text: string; readonly segmentIndex?: number; }
        interface SessionEvents {
            ready: ReadyEvent; partial: TextEvent; final: TextEvent; endpoint: undefined;
            vad: { readonly active: boolean }; warning: Problem; error: SpeechError;
            end: { readonly reason: EndReason; readonly text: string };
        }
        interface Session extends EventEmitter$ {
            readonly id: string | null; readonly modelId: string | null; readonly startedAt: number;
            readonly state: State; readonly reason: EndReason | null; readonly isEnded: boolean;
            readonly source: 'mic' | 'external'; readonly round: number;
            isActive(): boolean; result(): string; stop(): this; cancel(): this;
            /** Only external input: mono PCM16 LE at 16 kHz, at most 1 MiB per call. */
            feed(pcm: Pcm): this;
            on<K extends keyof SessionEvents>(name: K, listener: (event: SessionEvents[K]) => void): this;
            on(name: string, listener: (...args: any[]) => void): this;
            once<K extends keyof SessionEvents>(name: K, listener: (event: SessionEvents[K]) => void): this;
            once(name: string, listener: (...args: any[]) => void): this;
        }
        interface WakeEvents {
            ready: ReadyEvent;
            wake: { readonly keyword: string; readonly score: number | null; readonly timestampMillis: number; readonly listen?: Session };
            warning: Problem; error: SpeechError; end: { readonly reason: EndReason };
        }
        interface WakeSession extends EventEmitter$ {
            readonly keywords: string[]; readonly id: string | null; readonly modelId: string | null;
            readonly startedAt: number; readonly state: State; readonly reason: EndReason | null; readonly isEnded: boolean;
            stop(): this; isActive(): boolean;
            on<K extends keyof WakeEvents>(name: K, listener: (event: WakeEvents[K]) => void): this;
            on(name: string, listener: (...args: any[]) => void): this;
            once<K extends keyof WakeEvents>(name: K, listener: (event: WakeEvents[K]) => void): this;
            once(name: string, listener: (...args: any[]) => void): this;
        }
        interface ModelInfo {
            readonly id: string; readonly kind: Kind; readonly modelType: string; readonly name: string;
            readonly languages: string[]; readonly sizeBytes: number; readonly installedBytes?: number;
            readonly installed: boolean; readonly isDefault: boolean; readonly recommended: boolean;
            readonly version: number; readonly source: 'catalog' | 'imported';
            readonly license: { readonly spdx: string; readonly commercialUse: boolean; readonly noticeUrl?: string };
            readonly speakers?: number; readonly sampleRate?: number;
        }
        interface ModelFilter { kind?: Kind; language?: string; installed?: boolean; }
        interface InstallOptions { acceptLicense?: boolean; onProgress?: (done: number, total: number) => void; }
        interface ImportOptions extends InstallOptions {
            id?: string; kind?: Kind; modelType?: string; name?: string; languages?: string[];
        }
        interface Models {
            list(filter?: ModelFilter | null): ModelInfo[];
            install(id: string, options?: InstallOptions | null): ModelInfo;
            installAsync(id: string, options?: InstallOptions | null): Promise<ModelInfo>;
            importFile(path: string, options?: ImportOptions | null): ModelInfo;
            remove(id: string): boolean;
            setDefault(kind: Kind, id: string): ModelInfo;
            getDefault(kind: Kind): ModelInfo | null;
            refreshCatalog(): { version: number; updated: boolean };
        }
    }
}

// Type definitions for AutoJs6 internal module ai
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Aug 26, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/ai/Ai.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/ai/AiStream.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/ai/AiSessionNativeObject.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/ai/AiService.kt
 */

declare namespace Internal {

    interface Ai {

        (input: Ai.Input, options?: Ai.Options): Promise<string>;

        ask(input: Ai.Input, options?: Ai.Options): Promise<string>;

        chat(input: Ai.Input, options?: Ai.Options): Promise<Ai.Response>;

        stream(input: Ai.Input, options?: Ai.Options): Ai.Stream;

        session(options?: Ai.SessionOptions | null): Promise<Ai.Session>;

        catalog(options?: Ai.CatalogOptions | null): Promise<Ai.TargetCatalog>;

    }

    namespace Ai {

        type JsonPrimitive = string | number | boolean | null;
        type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
        type JsonObject = { [key: string]: JsonValue };

        interface Message {
            role: 'system' | 'user' | 'assistant';
            content: string;
        }

        interface UserMessage extends Message {
            role: 'user';
        }

        type MessageList = [...Message[], UserMessage];

        interface Request extends Options {
            messages: MessageList;
        }

        type Input = string | UserMessage | MessageList | Request;

        interface PluginComponent {
            packageName: string;
            className: string;
        }

        /** Selects an exact third-party plugin component and provider. */
        interface PluginSelection {
            component: PluginComponent;
            providerId: string;
        }

        /** Selects the official 3-Stone AI plugin when component is omitted. */
        interface OfficialPluginSelection {
            component?: never;
            providerId?: string | null;
        }

        type PluginSelector = true | OfficialPluginSelection | PluginSelection;

        /** Stable catalog target ID, for example `local:model-id` or `profile:profile-id`. */
        type TargetId = string;

        /** Explicit inference backend profile when the selected target exposes one. */
        type Backend = 'cpu' | 'gpu' | 'npu';

        interface GenerationOptions {
            /** Finite, non-negative sampling temperature. */
            temperature?: number | null;
            /** Positive-integer top-K sampling limit. */
            topK?: number | null;
            /** Finite top-P sampling threshold in the inclusive range 0 through 1. */
            topP?: number | null;
            /** Provider-enforced output-token ceiling from 1 through 2,147,483,647. */
            maxTokens?: number | null;
            /** Unavailable profiles are rejected without fallback. */
            backend?: Backend | null;
            /** Requests reasoning output and requires the target's `reasoning` capability. */
            reasoning?: boolean | null;
            /** Enables native JSON Schema constrained decoding; defaults to false. */
            structuredJson?: boolean | null;
            /** JSON Schema object; providing it also enables structured JSON output. */
            responseSchema?: JsonObject | null;
            /** Absolute request timeout in milliseconds. */
            timeout?: number | null;
        }

        /**
         * Selects one plugin target. Omitting both selectors uses the official
         * 3-Stone AI plugin and its declared default target.
         */
        interface Options extends GenerationOptions {
            plugin?: PluginSelector;
            target?: TargetId | null;
        }

        /** Fixed configuration for one persistent plugin-target Conversation. */
        interface SessionOptions extends Options {
            /** Optional system preface sent only when the Conversation is created. */
            system?: string;
        }

        /** Options for {@link Internal.Ai.catalog}; the official plugin is the default. */
        interface CatalogOptions {
            plugin?: PluginSelector;
            timeout?: number | null;
        }

        interface Usage {
            inputTokens: number | null;
            outputTokens: number | null;
            totalTokens: number | null;
            reasoningTokens: number | null;
            cachedInputTokens: number | null;
            durationMillis: number | null;
            raw: null;
        }

        type FinishReason =
            | 'stop'
            | 'length'
            | 'tool_calls'
            | 'content_filter'
            | 'error'
            | 'other';

        interface PluginIdentity {
            provider: string;
            component: PluginComponent;
        }

        interface TargetProfileMetadata {
            id: string;
            provider: string;
            model: string;
            target: TargetId;
        }

        interface Response {
            text: string;
            reasoning: string;
            toolCalls: [];
            usage: Usage;
            finishReason: FinishReason;
            message: null;
            error: null;
            raw: null;
            profile: TargetProfileMetadata | null;
            target: Target;
            plugin: PluginIdentity;
            route: 'plugin';
            provider: string;
            model: string;
        }

        interface StreamMetadata {
            route: 'plugin';
            provider: string;
            model: string;
            target: Target;
            profile: TargetProfileMetadata | null;
            plugin: PluginIdentity;
        }

        interface StreamChunk {
            text: string;
            reasoning: string;
            toolCalls: [];
            usage: null;
            finishReason: null;
            done: false;
            raw: null;
        }

        type TargetCapability =
            | 'streaming'
            | 'reasoning'
            | 'tools'
            | 'structured-json'
            | 'usage'
            | 'persistent-session';

        type TargetControl =
            | 'maximum-output-tokens'
            | 'temperature'
            | 'top-k'
            | 'top-p'
            | 'response-json-schema'
            | 'backend-profile';

        interface TargetLimits {
            maximumContextBytes: number;
            maximumOutputBytes: number;
        }

        interface Target {
            id: TargetId;
            displayName: string;
            provider: string;
            profile: string | null;
            model: string;
            locality: 'local' | 'remote' | 'hybrid';
            credentialMode: 'none' | 'plugin-managed';
            configured: boolean;
            available: boolean;
            availability: 'available' | 'unavailable';
            isDefault: boolean;
            capabilities: TargetCapability[];
            supportedControls: TargetControl[];
            limits: TargetLimits;
            origins: string[];
            backendProfiles: BackendProfile[];
        }

        interface TargetCatalog {
            generation: string;
            plugin: PluginIdentity;
            defaultTarget: TargetId | null;
            targets: Target[];
        }

        interface AvailableBackendProfile {
            id: Backend;
            availability: 'available';
            unavailableReason?: never;
        }

        interface UnavailableBackendProfile {
            id: Backend;
            availability: 'unavailable';
            unavailableReason:
                | 'abi-unsupported'
                | 'opencl-library-unavailable'
                | 'npu-runtime-not-packaged';
        }

        type BackendProfile = AvailableBackendProfile | UnavailableBackendProfile;

        interface Session {
            readonly provider: string;
            readonly model: string;
            readonly target: TargetId;
            readonly profile: string | null;
            readonly backend: Backend | null;
            readonly state: 'ready' | 'closed';
            readonly isClosed: boolean;

            /** Sends only this new user prompt while retaining native Conversation context. */
            ask(prompt: string): Promise<string>;

            /** Sends only this new user prompt and returns the complete response. */
            chat(prompt: string): Promise<Response>;

            /** Streams one new user turn. Cancelling it also closes this session. */
            stream(prompt: string): Stream;

            /** Idempotently closes the persistent Conversation and any active turn. */
            close(): void;
        }

        interface PublicError {
            name: string;
            message: string;
            route: 'plugin';
            code: ErrorCode;
        }

        type ErrorCode =
            | 'INVALID_REQUEST'
            | 'AI_PROVIDER_UNAVAILABLE'
            | 'AI_PROVIDER_DISABLED'
            | 'AI_PROVIDER_REJECTED'
            | 'BUSY'
            | 'FUSED'
            | 'CANCELLED'
            | 'TIMED_OUT'
            | 'BINDER_DIED'
            | 'TARGET_NOT_FOUND'
            | 'TARGET_NOT_CONFIGURED'
            | 'TARGET_UNAVAILABLE'
            | 'TARGET_CAPABILITY_MISMATCH'
            | 'BACKEND_UNAVAILABLE'
            | 'SESSION_CLOSED'
            | 'SESSION_REJECTED'
            | 'PROVIDER_FAILED'
            | 'INTERNAL_FAILURE';

        interface Stream extends EventEmitter$ {
            readonly state: 'created' | 'open' | 'done' | 'error' | 'cancelled';
            readonly isDone: boolean;

            on(eventName: 'open', listener: (metadata: StreamMetadata) => void): this;
            on(eventName: 'delta', listener: (text: string, chunk: StreamChunk) => void): this;
            on(eventName: 'chunk', listener: (chunk: StreamChunk) => void): this;
            on(eventName: 'usage', listener: (usage: Usage) => void): this;
            on(eventName: 'done', listener: (response: Response) => void): this;
            on(eventName: 'error', listener: (error: PublicError) => void): this;
            on(eventName: 'cancelled', listener: () => void): this;
            on(eventName: string, listener: (...args: any[]) => void): this;

            once(eventName: 'open', listener: (metadata: StreamMetadata) => void): this;
            once(eventName: 'delta', listener: (text: string, chunk: StreamChunk) => void): this;
            once(eventName: 'chunk', listener: (chunk: StreamChunk) => void): this;
            once(eventName: 'usage', listener: (usage: Usage) => void): this;
            once(eventName: 'done', listener: (response: Response) => void): this;
            once(eventName: 'error', listener: (error: PublicError) => void): this;
            once(eventName: 'cancelled', listener: () => void): this;
            once(eventName: string, listener: (...args: any[]) => void): this;

            cancel(): this;
        }

    }

}

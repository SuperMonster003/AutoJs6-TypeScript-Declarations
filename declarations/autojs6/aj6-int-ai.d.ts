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

        (input: Ai.PluginInput, options: Ai.PluginAskOptions): Promise<string>;

        (input: Ai.Input, options?: Ai.Options): Promise<string>;

        ask(input: Ai.PluginInput, options: Ai.PluginAskOptions): Promise<string>;

        ask(input: Ai.Input, options?: Ai.Options): Promise<string>;

        chat(input: Ai.PluginInput, options: Ai.PluginChatOptions): Promise<Ai.PluginChatResponse>;

        chat(input: Ai.Input, options?: Ai.Options): Promise<Ai.Response>;

        stream(input: Ai.PluginInput, options: Ai.PluginStreamOptions): Ai.PluginStream;

        stream(input: Ai.Input, options?: Ai.Options): Ai.Stream;

        session(options?: Ai.PluginSessionOptions | null): Promise<Ai.Session>;

        catalog(options?: Ai.PluginCatalogOptions | null): Promise<Ai.TargetCatalog>;

    }

    namespace Ai {

        type JsonPrimitive = string | number | boolean | null;
        type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
        type JsonObject = { [key: string]: JsonValue };

        type Message = JsonObject & {
            role: string;
            content?: JsonValue;
        };

        type MessageWithContent = Message & {
            content: JsonValue;
        };

        type Request = Options & {
            messages: Message[];
        };

        type Input = string | MessageWithContent | Message[] | Request;

        interface PluginMessage {
            role: 'system' | 'user' | 'assistant';
            content: string;
        }

        interface PluginUserMessage extends PluginMessage {
            role: 'user';
        }

        type PluginInput = string | PluginUserMessage | [...PluginMessage[], PluginUserMessage];

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
        type PluginBackend = 'cpu' | 'gpu' | 'npu';

        interface PluginGenerationOptions {
            /** Finite, non-negative sampling temperature. */
            temperature?: number | null;
            /** Positive-integer top-K sampling limit. */
            topK?: number | null;
            /** Finite top-P sampling threshold in the inclusive range 0 through 1. */
            topP?: number | null;
            /** Provider-enforced output-token ceiling from 1 through 2,147,483,647. */
            maxTokens?: number | null;
            /** Unavailable profiles are rejected without fallback. */
            backend?: PluginBackend | null;
            /** Requests reasoning output and requires the target's `reasoning` capability. */
            reasoning?: boolean | null;
            /** Enables native JSON Schema constrained decoding; defaults to false. */
            structuredJson?: boolean | null;
            /** JSON Schema object; providing it also enables structured JSON output. */
            responseSchema?: JsonObject | null;
            timeout?: number | null;
            timeoutMillis?: number | null;
            timeoutMs?: number | null;
            timeout_millis?: number | null;
            profile?: never;
            profileId?: never;
            profile_id?: never;
            provider?: never;
            providerId?: never;
            provider_id?: never;
            baseUrl?: never;
            baseURL?: never;
            base_url?: never;
            model?: never;
            apiKey?: never;
            api_key?: never;
            stream?: never;
        }

        /**
         * Explicit plugin-target route. `target` alone selects the official plugin;
         * `plugin` without `target` selects that plugin's declared default target.
         */
        type PluginRouteOptions = PluginGenerationOptions & (
            | { target: TargetId; plugin?: PluginSelector }
            | { plugin: PluginSelector; target?: TargetId | null }
        );

        type PluginAskOptions = PluginRouteOptions;

        type PluginChatOptions = PluginRouteOptions;

        type PluginStreamOptions = PluginRouteOptions;

        /** Fixed configuration for one persistent plugin-target Conversation. */
        interface PluginSessionOptions extends PluginGenerationOptions {
            plugin?: PluginSelector;
            /** Exact catalog target; omitted means the plugin-declared default target. */
            target?: TargetId | null;
            /** Optional system preface sent only when the Conversation is created. */
            system?: string;
        }

        /** Options for {@link Internal.Ai.catalog}; the official plugin is the default. */
        interface PluginCatalogOptions {
            plugin?: PluginSelector;
            timeout?: number | null;
            timeoutMillis?: number | null;
            timeoutMs?: number | null;
            timeout_millis?: number | null;
            temperature?: never;
            topK?: never;
            topP?: never;
            maxTokens?: never;
            backend?: never;
            reasoning?: never;
            structuredJson?: never;
            responseSchema?: never;
            target?: never;
            profile?: never;
            profileId?: never;
            profile_id?: never;
            provider?: never;
            providerId?: never;
            provider_id?: never;
            baseUrl?: never;
            baseURL?: never;
            base_url?: never;
            model?: never;
            apiKey?: never;
            api_key?: never;
            stream?: never;
        }

        interface Options {
            plugin?: never;
            target?: never;
            backend?: never;
            profile?: string | null;
            profileId?: string | null;
            profile_id?: string | null;
            provider?: string | null;
            providerId?: string | null;
            provider_id?: string | null;
            baseUrl?: string | null;
            baseURL?: string | null;
            base_url?: string | null;
            model?: string | null;
            apiKey?: string | null;
            api_key?: string | null;
            timeout?: number | null;
            timeoutMillis?: number | null;
            timeoutMs?: number | null;
            timeout_millis?: number | null;
            [key: string]: JsonValue | undefined;
        }

        interface ProfileMetadata {
            id: string | null;
            name: string | null;
            provider: string;
            baseUrl: string;
            model: string;
        }

        interface ToolCall {
            index: number | null;
            id: string | null;
            name: string | null;
            arguments: string | null;
            argumentsAreDelta: boolean;
            raw: JsonValue;
        }

        interface Usage {
            inputTokens: number | null;
            outputTokens: number | null;
            totalTokens: number | null;
            reasoningTokens: number | null;
            cachedInputTokens: number | null;
            raw: JsonObject | null;
        }

        interface PluginUsage extends Usage {
            durationMillis: number | null;
            raw: null;
        }

        interface ProviderError {
            type: string | null;
            code: string | null;
            message: string | null;
        }

        interface Response {
            text: string;
            reasoning: string;
            toolCalls: ToolCall[];
            usage: Usage | null;
            finishReason: string | null;
            message: JsonObject | null;
            error: ProviderError | null;
            raw: JsonValue;
            profile: ProfileMetadata;
            provider: string;
            model: string;
        }

        interface PluginChatResponse {
            text: string;
            reasoning: string;
            toolCalls: [];
            usage: PluginUsage;
            finishReason: PluginFinishReason;
            message: null;
            error: null;
            raw: null;
            profile: PluginProfileMetadata | null;
            target: Target;
            plugin: PluginIdentity;
            route: 'plugin';
            provider: string;
            model: string;
        }

        interface StreamChunk {
            text: string;
            reasoning: string;
            toolCalls: ToolCall[];
            usage: Usage | null;
            finishReason: string | null;
            done: boolean;
            raw: JsonValue;
        }

        interface PluginStreamMetadata {
            route: 'plugin';
            provider: string;
            model: string;
            target: Target;
            profile: PluginProfileMetadata | null;
            plugin: PluginIdentity;
        }

        interface PluginStreamChunk {
            text: string;
            reasoning: string;
            toolCalls: [];
            usage: null;
            finishReason: null;
            done: false;
            raw: null;
        }

        interface PluginStreamResponse {
            text: string;
            reasoning: string;
            toolCalls: [];
            usage: PluginUsage;
            finishReason: PluginFinishReason;
            message: null;
            error: null;
            raw: null;
            profile: PluginProfileMetadata | null;
            target: Target;
            plugin: PluginIdentity;
            route: 'plugin';
            provider: string;
            model: string;
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

        type PluginFinishReason =
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

        interface PluginProfileMetadata {
            id: string;
            provider: string;
            model: string;
            target: TargetId;
        }

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
            backendProfiles: PluginBackendProfile[];
        }

        interface TargetCatalog {
            generation: string;
            plugin: PluginIdentity;
            defaultTarget: TargetId | null;
            targets: Target[];
        }

        interface AvailablePluginBackendProfile {
            id: PluginBackend;
            availability: 'available';
            unavailableReason?: never;
        }

        interface UnavailablePluginBackendProfile {
            id: PluginBackend;
            availability: 'unavailable';
            unavailableReason:
                | 'abi-unsupported'
                | 'opencl-library-unavailable'
                | 'npu-runtime-not-packaged';
        }

        type PluginBackendProfile = AvailablePluginBackendProfile | UnavailablePluginBackendProfile;

        interface Session {
            readonly provider: string;
            readonly model: string;
            readonly target: TargetId;
            readonly profile: string | null;
            readonly backend: PluginBackend | null;
            readonly state: 'ready' | 'closed';
            readonly isClosed: boolean;

            /** Sends only this new user prompt while retaining native Conversation context. */
            ask(prompt: string): Promise<string>;

            /** Sends only this new user prompt and returns the complete plugin response. */
            chat(prompt: string): Promise<PluginChatResponse>;

            /** Streams one new user turn. Cancelling it also closes this session. */
            stream(prompt: string): PluginStream;

            /** Idempotently closes the persistent Conversation and any active turn. */
            close(): void;
        }

        interface PublicError {
            name: string;
            message: string;
            route?: 'plugin';
            provider?: string;
            statusCode?: number;
            code?: string | null;
            type?: string | null;
            requestId?: string | null;
        }

        interface PluginStreamError {
            name: string;
            message: string;
            route: 'plugin';
            code: PluginErrorCode;
        }

        type PluginErrorCode =
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

            on(eventName: 'open', listener: (metadata: ProfileMetadata) => void): this;
            on(eventName: 'delta', listener: (text: string, chunk: StreamChunk) => void): this;
            on(eventName: 'chunk', listener: (chunk: StreamChunk) => void): this;
            on(eventName: 'toolCall', listener: (toolCall: ToolCall) => void): this;
            on(eventName: 'usage', listener: (usage: Usage) => void): this;
            on(eventName: 'done', listener: (response: Response) => void): this;
            on(eventName: 'error', listener: (error: PublicError) => void): this;
            on(eventName: 'cancelled', listener: () => void): this;
            on(eventName: string, listener: (...args: any[]) => void): this;

            once(eventName: 'open', listener: (metadata: ProfileMetadata) => void): this;
            once(eventName: 'delta', listener: (text: string, chunk: StreamChunk) => void): this;
            once(eventName: 'chunk', listener: (chunk: StreamChunk) => void): this;
            once(eventName: 'toolCall', listener: (toolCall: ToolCall) => void): this;
            once(eventName: 'usage', listener: (usage: Usage) => void): this;
            once(eventName: 'done', listener: (response: Response) => void): this;
            once(eventName: 'error', listener: (error: PublicError) => void): this;
            once(eventName: 'cancelled', listener: () => void): this;
            once(eventName: string, listener: (...args: any[]) => void): this;

            cancel(): this;
        }

        interface PluginStream extends EventEmitter$ {
            readonly state: 'created' | 'open' | 'done' | 'error' | 'cancelled';
            readonly isDone: boolean;

            on(eventName: 'open', listener: (metadata: PluginStreamMetadata) => void): this;
            on(eventName: 'delta', listener: (text: string, chunk: PluginStreamChunk) => void): this;
            on(eventName: 'chunk', listener: (chunk: PluginStreamChunk) => void): this;
            on(eventName: 'usage', listener: (usage: PluginUsage) => void): this;
            on(eventName: 'done', listener: (response: PluginStreamResponse) => void): this;
            on(eventName: 'error', listener: (error: PluginStreamError) => void): this;
            on(eventName: 'cancelled', listener: () => void): this;
            on(eventName: string, listener: (...args: any[]) => void): this;

            once(eventName: 'open', listener: (metadata: PluginStreamMetadata) => void): this;
            once(eventName: 'delta', listener: (text: string, chunk: PluginStreamChunk) => void): this;
            once(eventName: 'chunk', listener: (chunk: PluginStreamChunk) => void): this;
            once(eventName: 'usage', listener: (usage: PluginUsage) => void): this;
            once(eventName: 'done', listener: (response: PluginStreamResponse) => void): this;
            once(eventName: 'error', listener: (error: PluginStreamError) => void): this;
            once(eventName: 'cancelled', listener: () => void): this;
            once(eventName: string, listener: (...args: any[]) => void): this;

            cancel(): this;
        }

    }

}

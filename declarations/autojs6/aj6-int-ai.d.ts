// Type definitions for AutoJs6 internal module ai
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Aug 21, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/ai/Ai.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/ai/AiStream.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/ai/AiService.kt
 */

declare namespace Internal {

    interface Ai {

        (input: Ai.PluginAskInput, options: Ai.PluginAskOptions): Promise<string>;

        (input: Ai.Input, options?: Ai.Options): Promise<string>;

        ask(input: Ai.PluginAskInput, options: Ai.PluginAskOptions): Promise<string>;

        ask(input: Ai.Input, options?: Ai.Options): Promise<string>;

        chat(input: Ai.Input, options?: Ai.Options): Promise<Ai.Response>;

        stream(input: Ai.Input, options?: Ai.Options): Ai.Stream;

        profiles(): Ai.Profile[];

        providers(): Ai.Provider[];

        defaultProfile(): Ai.Profile | null;

        isConfigured(): boolean;

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

        interface PluginAskMessage {
            role: 'system' | 'user' | 'assistant';
            content: string;
        }

        interface PluginAskUserMessage extends PluginAskMessage {
            role: 'user';
        }

        type PluginAskInput = string | PluginAskUserMessage | [...PluginAskMessage[], PluginAskUserMessage];

        interface PluginComponent {
            packageName: string;
            className: string;
        }

        interface PluginSelection {
            component: PluginComponent;
            providerId: string;
            modelId: string;
        }

        /**
         * Explicit, ask-only local plugin route. Cloud provider controls and
         * provider-native request options cannot be combined with this shape.
         */
        interface PluginAskOptions {
            plugin: PluginSelection;
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

        interface Options {
            plugin?: never;
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

        interface AvailableProfile {
            id: string;
            name: string;
            provider: string;
            baseUrl: string;
            model: string;
            hasApiKey: boolean;
            isDefault: boolean;
            status: 'available';
            errorCode: null;
        }

        interface UnavailableProfile {
            id: string;
            name: null;
            provider: null;
            baseUrl: null;
            model: null;
            hasApiKey: null;
            isDefault: boolean;
            status: 'unavailable';
            errorCode: 'missing_entry' | 'decryption_failed' | 'invalid_data';
        }

        type Profile = AvailableProfile | UnavailableProfile;

        interface Provider {
            id: string;
            defaultBaseUrl: string | null;
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

        interface StreamChunk {
            text: string;
            reasoning: string;
            toolCalls: ToolCall[];
            usage: Usage | null;
            finishReason: string | null;
            done: boolean;
            raw: JsonValue;
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

    }

}

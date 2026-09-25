// Type definitions for AutoJs6 internal module ai
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Sep 25, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/ai/Ai.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/ai/AiStream.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/ai/AiSessionNativeObject.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/ai/AiService.kt
 */

declare namespace Internal {

    interface Ai {

        /** Agent tasks require host build 5293+ and an attached AI Agent plugin.
         * Agent 1.0.0 uses the host's 3-Stone AI model catalog.
         * Registered-script result/context require host build 5287+. */
        readonly agent: Ai.Agent;

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

        interface Agent {
            /** Validates arguments synchronously. Plugin unavailability returns a rejected handle. */
            run(goal: string, options?: AgentRunOptions): AgentRun;
            /** Copies options; per-call budget, tools, roots and cautious policy may only narrow. */
            create(options: AgentRunOptions): AgentAssistant;
            /** Observes an existing task. Null when the ID is no longer retained. */
            get(id: string): AgentRun | null;
            list(filter?: AgentListFilter): Promise<AgentRunSummary[]>;
            /** Reads registered metadata, including when the plugin is not connected. */
            catalog(query?: string): Promise<AgentScriptEntry[]>;
            presets(): Promise<string[]>;
            status(): AgentLinkStatus;

            /** Last accepted JSON report wins until execution ends. Maximum UTF-8 JSON size: 64 KiB.
             * Returns false with a warning outside registered execution. Does not finish the script. */
            result(value: JsonValue): boolean;

            /** Returns a fresh snapshot, or null outside registered execution. */
            context(): AgentExecutionContext | null;
        }

        interface AgentAssistant {
            /** Each access returns an independent JSON snapshot. */
            readonly options: AgentRunOptions;
            run(goal: string, overrides?: AgentRunOptions): AgentRun;
        }

        type AgentToolGroup = 'observe' | 'act' | 'ocr' | 'gesture' | 'script' | 'files' | 'shell' | 'memory' | 'user';
        type AgentTerminalState = 'completed' | 'partial' | 'failed' | 'blocked' | 'cancelled';
        type AgentState = 'queued' | 'running' | 'waiting_input' | 'waiting_confirmation' | 'cancelling' | AgentTerminalState;

        interface AgentBudget {
            /** Initial default 40; positive integer, protocol maximum 200. */
            maxSteps?: number;
            /** Initial default 60; positive integer, protocol maximum 300. */
            maxModelCalls?: number;
            /** Initial default 600000 (detached: 1800000); maximum 1800000 (detached: 3600000). */
            maxDurationMs?: number;
            /** Initial default 300000; positive integer, protocol maximum 1000000. */
            maxTotalTokens?: number;
        }

        interface AgentRunOptions {
            /** Omission uses the plugin's selected default preset. Settings are snapshotted on enqueue. */
            preset?: string;
            /** Exact model target. Omission uses the preset, then an available local or first available target. */
            target?: TargetId;
            /** Narrows global permissions and the preset; cannot enable a globally disabled tool group. */
            tools?: AgentToolGroup[] | { enable?: AgentToolGroup[]; disable?: AgentToolGroup[] };
            /** Positive integers within both host hard ceilings and the plugin's configured budget. */
            budget?: AgentBudget;
            /** Cannot relax cautious mode set globally or by the preset. */
            confirm?: 'default' | 'cautious';
            interaction?: 'plugin' | 'script';
            detached?: boolean;
            context?: string;
            parameters?: JsonObject;
            /** False disables automatic injection only. Disable the memory tool group to forbid queries/proposals.
             * True cannot widen the preset's memory scope or re-enable disabled injection. */
            memory?: boolean;
            scriptRoots?: string[];
            locale?: string;
        }

        interface AgentRun {
            readonly id: string;
            readonly state: AgentState;
            readonly goal: string;
            readonly startedAt: number;
            readonly detached: boolean;
            /** Control/link failure only; task failures appear in AgentResult.error. */
            readonly error: AgentError | null;
            /** Resolves every task terminal status. Rejects on control/link failures. */
            readonly result: Promise<AgentResult>;
            on<K extends keyof AgentEventMap>(event: K, listener: (event: AgentEventMap[K]) => void): this;
            off<K extends keyof AgentEventMap>(event: K, listener: (event: AgentEventMap[K]) => void): this;
            once<K extends keyof AgentEventMap>(event: K, listener: (event: AgentEventMap[K]) => void): this;
            respond(requestId: string, value: string | boolean): boolean;
            confirm(requestId: string, allowed: boolean, scope?: 'once' | 'run'): boolean;
            /** Requests cancellation; already completed external actions are not undone. */
            cancel(reason?: string): this;
            /** Originating script thread only, never UI. JOIN_TIMEOUT does not cancel the task. */
            join(timeoutMs?: number): AgentResult;
        }

        interface AgentError {
            code: string;
            message: string;
            hint?: string;
        }

        interface AgentUsage {
            modelCalls: number;
            inputTokens?: number;
            outputTokens?: number;
            totalTokens?: number;
            estimated: boolean;
        }

        interface AgentResult {
            id: string;
            status: AgentTerminalState;
            /** Legacy interrupted history can contain only id/status/error. */
            summary?: string;
            evidence?: string[];
            unfinished?: string[];
            steps?: number;
            toolCalls?: number;
            usage?: AgentUsage;
            durationMs?: number;
            script?: { id: string; path: string; executionId: number; result?: JsonValue; resultTruncated?: boolean };
            orderStatus?: 'none' | 'cart' | 'pending_payment' | 'submitted' | 'paid';
            error?: AgentError;
            truncated?: boolean;
        }

        interface AgentRunSummary {
            id: string;
            goal: string;
            state: AgentState;
            startedAt: number;
            detached: boolean;
            preset: string;
        }

        interface AgentListFilter {
            state?: AgentState | AgentState[];
            preset?: string;
            since?: number;
            until?: number;
            /** Inclusive range 1..50, default 50. */
            limit?: number;
        }

        interface AgentLinkStatus {
            state: string;
            queuedCount: number;
            runningRunId?: string;
            errorCode?: string;
        }

        interface AgentScriptEntry {
            id: string;
            path: string;
            kind: 'project' | 'file';
            description: string;
            parameters: JsonObject;
            result?: JsonObject;
            risk: 'readonly' | 'normal' | 'sensitive';
            confirm: 'never' | 'before-run';
            timeoutMs: number;
            examples: string[];
            tags: string[];
            updatedAt: number;
        }

        interface AgentInputEvent {
            requestId: string;
            kind: 'text' | 'choice' | 'confirm';
            question: string;
            choices: string[];
            memoryKey?: string;
            timeoutMs: number;
            readOnly: boolean;
        }

        interface AgentConfirmationEvent {
            requestId: string;
            tool: string;
            description: string;
            risk: 'normal' | 'sensitive';
            arguments: JsonObject;
            allowRunScope: boolean;
            timeoutMs: number;
            readOnly: boolean;
        }

        interface AgentProgressEvent {
            step: number;
            message: string;
            budget: { steps: number; modelCalls: number; durationMs: number; tokens: number };
        }

        interface AgentStepEvent {
            index: number;
            kind: string;
            decision: JsonObject;
            tool?: string;
            arguments?: JsonObject;
            confirmation?: 'allowed' | 'denied' | 'auto';
            observation?: string;
            elapsedMs: number;
            usage?: AgentUsage;
            error?: string;
            truncated?: boolean;
        }

        interface AgentEventMap {
            state: { from: AgentState; to: AgentState };
            progress: AgentProgressEvent;
            step: AgentStepEvent;
            input: AgentInputEvent;
            confirmation: AgentConfirmationEvent;
            done: AgentResult;
            error: AgentError;
        }

        type AgentEvent = AgentEventMap[keyof AgentEventMap];

        interface AgentExecutionContext {
            runId: string;
            parameters: { [key: string]: string | number | boolean };
            presetName: string | null;
        }

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

/** Explicit asynchronous provider access for Node main threads and Workers. */
declare module "ai" {
  namespace ai {
    type JsonPrimitive = string | number | boolean | null;
    type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
    type JsonObject = { [key: string]: JsonValue };
    type CallOptions = Pick<AutoJs6Node.BridgeCallOptions, "signal" | "timeoutMs">;
    interface AiError extends Error { readonly route: "plugin"; code: ErrorCode | (string & {}); }
    /** Task execution stays in 3-Stove Agent with the installed AutoJs6 host's model/device brokers. */
    interface AgentAPI {
      readonly AgentError: { new(message: string, code?: string, hint?: string): AgentError };
      run(goal: string, options?: AgentRunOptions, callOptions?: CallOptions): Promise<AgentRun>;
      /** Creates a reusable JSON snapshot. Effective overrides cannot widen its tools, roots or budgets. */
      create(options: AgentRunOptions): AgentAssistant;
      get(id: string, callOptions?: CallOptions): Promise<AgentRun | null>;
      list(filter?: AgentListFilter, callOptions?: CallOptions): Promise<AgentRunSummary[]>;
      catalog(query?: string, callOptions?: CallOptions): Promise<AgentScriptEntry[]>;
      presets(callOptions?: CallOptions): Promise<string[]>;
      /** Does not connect. A delegated application sees only its own active task IDs and queue count. */
      status(callOptions?: CallOptions): Promise<AgentLinkStatus>;
      /** Returns null outside registered execution; Workers share their execution's context. */
      context(): Promise<AgentExecutionContext | null>;
      /** Last JSON report wins until registered execution ends; returns false outside it. */
      result(value: JsonValue): Promise<boolean>;
      hasAccess(): Promise<boolean>;
      /** Generated applications require explicit consent in the installed AutoJs6 host. */
      requestAccess(): Promise<boolean>;
      /** Releases this facade's observers and cancels its owned non-detached tasks. */
      close(): Promise<boolean>;
    }
        interface AgentAssistant {
            /** Each access returns an independent JSON snapshot. */
            readonly options: AgentRunOptions;
            run(goal: string, overrides?: AgentRunOptions, callOptions?: CallOptions): Promise<AgentRun>;
        }

        /** script_dynamic requires AI Agent 1.1.0 and a compatible host. It starts disabled and confirms each source separately. */
        type AgentToolGroup = 'observe' | 'act' | 'ocr' | 'gesture' | 'script' | 'script_dynamic' | 'files' | 'shell' | 'memory' | 'user' | 'mcp';
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
            /** Narrows global permissions and the preset; cannot enable a globally disabled tool group.
             * gesture, script_dynamic, files, shell and mcp start disabled. Generated scripts always require individual confirmation.
             * mcp requires AI Agent 1.2.0 and a compatible host. Configure servers, allowed tools and per-server risk in the plugin. */
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
            /** Plan mode: the model first proposes 1 to 8 steps, reviewed through an input event of kind plan before the first tool runs.
             * Omission follows the preset's plan mode switch. */
            plan?: boolean;
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
            /** text/choice take a string, confirm a boolean, plan an array of 1 to 8 non-blank steps (at most 200 characters each). */
            respond(requestId: string, value: string | boolean | string[], callOptions?: CallOptions): Promise<boolean>;
            confirm(requestId: string, allowed: boolean, scope?: 'once' | 'run', callOptions?: CallOptions): Promise<boolean>;
            /** Requests cancellation; already completed external actions are not undone. */
            cancel(reason?: string, callOptions?: CallOptions): Promise<this>;
            /** Asynchronous wait. JOIN_TIMEOUT leaves the task running. */
            join(timeoutMs?: number): Promise<AgentResult>;
        }

        interface AgentError extends Error {
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
            kind: 'text' | 'choice' | 'confirm' | 'plan';
            question: string;
            choices: string[];
            /** Present for kind plan: the proposed steps, which may be edited before they are sent back with respond. */
            steps?: string[];
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
            parameters: { [key: string]: JsonPrimitive };
            presetName: string | null;
        }

    interface API {
      (input: Input, options?: Options | null, callOptions?: CallOptions): Promise<string>;
      readonly agent: AgentAPI;
      readonly AiError: { new(message?: string, code?: string): AiError };
      ask(input: Input, options?: Options | null, callOptions?: CallOptions): Promise<string>;
      chat(input: Input, options?: Options | null, callOptions?: CallOptions): Promise<Response>;
      stream(input: Input, options?: Options | null, callOptions?: CallOptions): Stream;
      session(options?: SessionOptions | null, callOptions?: CallOptions): Promise<Session>;
      catalog(options?: CatalogOptions | null, callOptions?: CallOptions): Promise<TargetCatalog>;
      /** The host uses its signature entry. Packaged apps need explicit consent in 3-Stone AI. */
      hasAccess(callOptions?: CallOptions): Promise<boolean>;
      /** Opens 3-Stone AI confirmation for local models and configured online accounts. */
      requestAccess(callOptions?: CallOptions): Promise<boolean>;
      /** Cancels this facade's AI work, sessions and owned non-detached Agent tasks. Subsequent calls create a fresh client. */
      close(): Promise<boolean>;
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

        /** Options for {@link API.catalog}; the official plugin is the default. */
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
            | 'vision'
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
            ask(prompt: string, callOptions?: CallOptions): Promise<string>;

            /** Sends only this new user prompt and returns the complete response. */
            chat(prompt: string, callOptions?: CallOptions): Promise<Response>;

            /** Streams one new user turn. Cancelling it also closes this session. */
            stream(prompt: string, callOptions?: CallOptions): Stream;

            /** Idempotently closes the persistent Conversation and any active turn. */
            close(): Promise<void>;
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
            | 'INTERNAL_FAILURE' | 'PERMISSION_DENIED' | 'TIMEOUT' | 'BACKPRESSURE';

    interface EventArguments {
      open: [metadata: StreamMetadata]; delta: [text: string, chunk: StreamChunk]; chunk: [chunk: StreamChunk];
      usage: [usage: Usage]; done: [response: Response]; error: [error: AiError]; cancelled: [];
    }
    interface Stream {
      readonly state: 'created' | 'open' | 'done' | 'error' | 'cancelled'; readonly isDone: boolean;
      readonly ready: Promise<Stream>; readonly result: Promise<Response>;
      on<K extends keyof EventArguments>(name: K, listener: (...args: EventArguments[K]) => void): this;
      once<K extends keyof EventArguments>(name: K, listener: (...args: EventArguments[K]) => void): this;
      addListener<K extends keyof EventArguments>(name: K, listener: (...args: EventArguments[K]) => void): this;
      off<K extends keyof EventArguments>(name: K, listener: (...args: EventArguments[K]) => void): this;
      removeListener<K extends keyof EventArguments>(name: K, listener: (...args: EventArguments[K]) => void): this;
      removeAllListeners(name?: keyof EventArguments): this;
      listenerCount(name: keyof EventArguments): number;
      cancel(): this;
    }
  }
  const ai: ai.API;
  export = ai;
}
declare module "autojs6:ai" { import ai = require("ai"); export = ai; }

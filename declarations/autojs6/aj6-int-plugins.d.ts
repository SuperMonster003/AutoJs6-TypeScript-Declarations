// Type definitions for AutoJs6 internal module plugins
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Oct 16, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/plugins/Plugins.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/plugins/PluginsTools.kt
 */

declare namespace Internal {

    interface Plugins {

        (name: string): any;

        readonly extend: Plugins.Extend;

        extendAll(): void;

        extendAllBut(...names: Plugins.ExtensionName[]): void;

        load(name: string): any;

        /**
         * The tools AutoJs6 plugins describe themselves (AutoJs6 6.8.0).
         */
        readonly tools: Plugins.Tools;

    }

    namespace Plugins {

        type ExtensionName = string | ExtensionName[];

        type ToolRisk = 'readonly' | 'write' | 'destructive' | 'network';

        type ToolTrust = 'official' | 'trusted' | 'user_granted';

        type ToolProviderStatus = 'available' | 'disabled' | 'unauthorized' | 'incompatible' | 'failed' | 'refused';

        interface ToolOutput {
            name: string;
            mimeType: string;
            description?: string;
        }

        interface ToolInfo {
            /** `<shortName>_<name>`, for example `opencc_convert`. */
            name: string;
            tool: string;
            shortName: string;
            provider: string;
            trust: ToolTrust;
            title?: string;
            /** Written by the plugin author, in English. */
            description: string;
            inputSchema: object;
            outputSchema?: object;
            risk: ToolRisk;
            timeoutMs: number;
            maxConcurrency: number;
            outputs: ToolOutput[];
            imageParameters: string[];
            fileParameters: string[];
            /** Parameters that take a directory path; AutoJs6 hands the plugin the files of that directory. */
            directoryParameters: string[];
        }

        interface ToolProviderInfo {
            packageName: string;
            versionCode: number;
            trust: ToolTrust | 'required';
            status: ToolProviderStatus;
            shortName?: string;
            sharedFamily?: string;
            tools?: number;
            diagnostics?: string[];
            detail?: string;
            toolsHidden?: boolean;
        }

        interface ToolCallOptions {
            /** Shortens the tool's time limit, in milliseconds. */
            timeoutMs?: number;
            /** Output name to the path where the output is written (resolved like files.path). */
            outputs?: { [name: string]: string };
            /** Replaces an existing output file. Default false. */
            overwrite?: boolean;
        }

        interface ToolCallResult {
            tool: string;
            provider: string;
            invocationId: string;
            result: any;
            text?: string;
            outputs: { name: string, path: string, bytes: number, mimeType: string }[];
            missingOutputs?: string[];
            durationMs: number;
        }

        /**
         * Image arguments take "screen", a path or an ImageWrapper; file arguments take a path; directory arguments
         * take a directory path, for example a model directory.
         */
        type ToolArguments = { [name: string]: any };

        interface Tools {
            list(): ToolInfo[];

            providers(): ToolProviderInfo[];

            call(name: string, args?: ToolArguments, options?: ToolCallOptions): ToolCallResult;

            callAsync(name: string, args?: ToolArguments, options?: ToolCallOptions): Promise<ToolCallResult>;
        }

        interface Extend {
            (...names: ExtensionName[]): void;

            exclude(...names: ExtensionName[]): void;

            registerModule(module: Record<string, {
                extendJsBuildInObjects(): void;
            }>): void;
        }

    }

}

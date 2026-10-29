// Type definitions for AutoJs6 internal module shizuku
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Oct 19, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/shizuku/Shizuku.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/WrappedShizuku.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/shell/Shell.kt
 */

declare namespace Internal {

    import AbstractShell = org.autojs.autojs.runtime.api.AbstractShell;

    interface Shizuku extends Omit<org.autojs.autojs.runtime.api.WrappedShizuku, 'execCommand'> {

        readonly state: Shizuku.State;

        /* Members of the Java prototype, declared here so that completion does not need the Java class declarations. */
        hasPermission(): boolean;
        hasService(): boolean;
        isInstalled(context: android.content.Context): boolean;
        isOperational(): boolean;
        isRunning(): boolean;

        (command: Shell.Command): AbstractShell.Result;
        (command: Shell.Command, withRoot: boolean | number): AbstractShell.Result;
        (command: Shell.Command, commandArgument: Shell.CommandArguments): AbstractShell.Result;
        (command: Shell.Command, commandArgument: Shell.CommandArguments, withRoot: boolean | number): AbstractShell.Result;

        execCommand(command: Shell.Command): AbstractShell.Result;
        execCommand(command: Shell.Command, withRoot: boolean | number): AbstractShell.Result;
        execCommand(command: Shell.Command, commandArgument: Shell.CommandArguments): AbstractShell.Result;
        execCommand(command: Shell.Command, commandArgument: Shell.CommandArguments, withRoot: boolean | number): AbstractShell.Result;

        getCommand(command: Shell.Command): string;
        getCommand(command: Shell.Command, withRoot: boolean | number): string;
        getCommand(command: Shell.Command, commandArgument: Shell.CommandArguments): string;
        getCommand(command: Shell.Command, commandArgument: Shell.CommandArguments, withRoot: boolean | number): string;

        /** Always uses Shizuku; ignores shell.setDefaultOptions, including an adb:false option. */
        spawn(command: Shell.Command, options?: Shell.SpawnOptions | boolean | null): Shell.Process;

        kill(app: org.autojs.autojs.util.App | string): boolean;

        currentPackage(): string;

        currentActivity(): string;

        currentComponent(): string;

    }

}

declare namespace Shizuku {

    interface State {
        isInstalled: boolean;
        hasService: boolean;
        isRunning: boolean;
        hasPermission: boolean;
        isOperational: boolean;
    }

}

declare module com {
	export module stericson {
		export module RootShell {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.stericson.RootShell.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module stericson {
		export module RootShell {
			export class RootShell extends java.lang.Object {
				public static class: java.lang.Class<com.stericson.RootShell.RootShell>;
				public static debugMode: boolean;
				public static version: string;
				public static handlerEnabled: boolean;
				public static defaultCommandTimeout: number;
				public static exists(file: string, isDir: boolean): boolean;
				public static getShell(root: boolean, timeout: number, shellContext: com.stericson.RootShell.execution.Shell.ShellContext): com.stericson.RootShell.execution.Shell;
				public static log(msg: string): void;
				public static isRootAvailable(): boolean;
				public static isAccessGiven(timeout: number, retries: number): boolean;
				public static getCustomShell(shellPath: string, timeout: number): com.stericson.RootShell.execution.Shell;
				public static log(TAG: string, msg: string, type: com.stericson.RootShell.RootShell.LogLevel, e: java.lang.Exception): void;
				public constructor();
				public static getShell(root: boolean): com.stericson.RootShell.execution.Shell;
				public static exists(file: string): boolean;
				public static isBusyboxAvailable(includeToybox: boolean): boolean;
				public static getShell(root: boolean, shellContext: com.stericson.RootShell.execution.Shell.ShellContext): com.stericson.RootShell.execution.Shell;
				public static getPath(): java.util.List<string>;
				public static getShell(root: boolean, timeout: number, shellContext: com.stericson.RootShell.execution.Shell.ShellContext, retry: number): com.stericson.RootShell.execution.Shell;
				public static closeCustomShell(): void;
				public static closeShell(root: boolean): void;
				public static log(msg: string, type: com.stericson.RootShell.RootShell.LogLevel, e: java.lang.Exception): void;
				public static log(TAG: string, msg: string): void;
				public static islog(): boolean;
				public static findBinary(binaryName: string, singlePath: boolean): java.util.List<string>;
				public static getShell(root: boolean, timeout: number): com.stericson.RootShell.execution.Shell;
				public static isAccessGiven(): boolean;
				public static closeAllShells(): void;
				public static isBusyboxAvailable(): boolean;
				public static findBinary(binaryName: string, searchPaths: java.util.List<string>, singlePath: boolean): java.util.List<string>;
			}
			export module RootShell {
				export class LogLevel {
					public static class: java.lang.Class<com.stericson.RootShell.RootShell.LogLevel>;
					public static VERBOSE: com.stericson.RootShell.RootShell.LogLevel;
					public static ERROR: com.stericson.RootShell.RootShell.LogLevel;
					public static DEBUG: com.stericson.RootShell.RootShell.LogLevel;
					public static WARN: com.stericson.RootShell.RootShell.LogLevel;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): com.stericson.RootShell.RootShell.LogLevel;
					public static values(): com.stericson.RootShell.RootShell.LogLevel[];
				}
			}
		}
	}
}

declare module com {
	export module stericson {
		export module RootShell {
			export module containers {
				export class RootClass extends java.lang.Object {
					public static class: java.lang.Class<com.stericson.RootShell.containers.RootClass>;
					public constructor(args: string[]);
					public static main(args: string[]): void;
				}
				export module RootClass {
					export class AnnotationsFinder extends java.lang.Object {
						public static class: java.lang.Class<com.stericson.RootShell.containers.RootClass.AnnotationsFinder>;
						public constructor();
						public getBuiltPath(): java.io.File;
						public hasClassAnnotation(file: java.io.File): boolean;
						public getPathToDx(): string;
						public lookup(path: java.io.File, fileList: java.util.List<java.io.File>): void;
					}
					export class Candidate extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.stericson.RootShell.containers.RootClass.Candidate>;
						/**
						 * Constructs a new instance of the com.stericson.RootShell.containers.RootClass$Candidate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
					export class READ_STATE {
						public static class: java.lang.Class<com.stericson.RootShell.containers.RootClass.READ_STATE>;
						public static STARTING: com.stericson.RootShell.containers.RootClass.READ_STATE;
						public static FOUND_ANNOTATION: com.stericson.RootShell.containers.RootClass.READ_STATE;
						public static valueOf(name: string): com.stericson.RootShell.containers.RootClass.READ_STATE;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): com.stericson.RootShell.containers.RootClass.READ_STATE[];
					}
					export class RootArgs extends java.lang.Object {
						public static class: java.lang.Class<com.stericson.RootShell.containers.RootClass.RootArgs>;
						public args: string[];
						public constructor(this$0: com.stericson.RootShell.containers.RootClass);
					}
				}
			}
		}
	}
}

declare module com {
	export module stericson {
		export module RootShell {
			export module exceptions {
				export class RootDeniedException extends java.lang.Exception {
					public static class: java.lang.Class<com.stericson.RootShell.exceptions.RootDeniedException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(error: string);
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module stericson {
		export module RootShell {
			export module execution {
				export class Command extends java.lang.Object {
					public static class: java.lang.Class<com.stericson.RootShell.execution.Command>;
					public javaCommand: boolean;
					public context: android.content.Context;
					public totalOutput: number;
					public totalOutputProcessed: number;
					public used: boolean;
					public getCommand(): string;
					public isFinished(): boolean;
					public setExitCode(code: number): void;
					public isHandlerEnabled(): boolean;
					public output(id: number, line: string): void;
					public startExecution(): void;
					public commandCompleted(id: number, exitcode: number): void;
					public finish(): void;
					public terminate(reason: string): void;
					public constructor(id: number, timeout: number, ...command: string[]);
					public commandFinished(): void;
					public finishCommand(): void;
					public constructor(id: number, handlerEnabled: boolean, ...command: string[]);
					public isExecuting(): boolean;
					public terminate(): void;
					public getExitCode(): number;
					public terminated(reason: string): void;
					public commandTerminated(id: number, reason: string): void;
					public commandOutput(id: number, line: string): void;
					public constructor(id: number, ...command: string[]);
				}
				export module Command {
					export class CommandHandler extends android.os.Handler {
						public static class: java.lang.Class<com.stericson.RootShell.execution.Command.CommandHandler>;
						public static ACTION: string;
						public static TEXT: string;
						public static COMMAND_OUTPUT: number;
						public static COMMAND_COMPLETED: number;
						public static COMMAND_TERMINATED: number;
						public handleMessage(msg: android.os.Message): void;
					}
					export class ExecutionMonitor extends java.lang.Thread {
						public static class: java.lang.Class<com.stericson.RootShell.execution.Command.ExecutionMonitor>;
						public constructor();
						public constructor(group: java.lang.ThreadGroup, name: string);
						public constructor(target: java.lang.Runnable, name: string);
						public run(): void;
						public constructor(name: string);
						public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: string);
						public constructor(param0: com.stericson.RootShell.execution.Command, command: com.stericson.RootShell.execution.Command);
						public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable);
						public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: string, stackSize: number);
						public constructor(target: java.lang.Runnable);
					}
				}
			}
		}
	}
}

declare module com {
	export module stericson {
		export module RootShell {
			export module execution {
				export class JavaCommand extends com.stericson.RootShell.execution.Command {
					public static class: java.lang.Class<com.stericson.RootShell.execution.JavaCommand>;
					public constructor(id: number, handlerEnabled: boolean, ...command: string[]);
					public constructor(id: number, handlerEnabled: boolean, context: android.content.Context, ...command: string[]);
					public commandCompleted(id: number, exitcode: number): void;
					public commandCompleted(id: number, exitCode: number): void;
					public constructor(id: number, timeout: number, ...command: string[]);
					public constructor(id: number, timeout: number, context: android.content.Context, ...command: string[]);
					public constructor(id: number, context: android.content.Context, ...command: string[]);
					public commandTerminated(id: number, reason: string): void;
					public commandOutput(id: number, line: string): void;
					public constructor(id: number, ...command: string[]);
				}
			}
		}
	}
}

declare module com {
	export module stericson {
		export module RootShell {
			export module execution {
				export class Shell extends java.lang.Object {
					public static class: java.lang.Class<com.stericson.RootShell.execution.Shell>;
					public static defaultContext: com.stericson.RootShell.execution.Shell.ShellContext;
					public isExecuting: boolean;
					public isReading: boolean;
					public isClosed: boolean;
					public getCommandQueuePositionString(cmd: com.stericson.RootShell.execution.Command): string;
					public static isAnyShellOpen(): boolean;
					public static runRootCommand(command: com.stericson.RootShell.execution.Command): com.stericson.RootShell.execution.Command;
					public static isCustomShellOpen(): boolean;
					public useCWD(context: android.content.Context): void;
					public static closeAll(): void;
					public static closeShell(): void;
					public close(): void;
					public add(command: com.stericson.RootShell.execution.Command): com.stericson.RootShell.execution.Command;
					public static isRootShellOpen(): boolean;
					public static startRootShell(timeout: number, shellContext: com.stericson.RootShell.execution.Shell.ShellContext, retry: number): com.stericson.RootShell.execution.Shell;
					public static startCustomShell(shellPath: string, timeout: number): com.stericson.RootShell.execution.Shell;
					public notifyThreads(): void;
					public static startCustomShell(shellPath: string): com.stericson.RootShell.execution.Shell;
					public static closeCustomShell(): void;
					public getCommandQueuePosition(cmd: com.stericson.RootShell.execution.Command): number;
					public isSELinuxEnforcing(): boolean;
					public static closeRootShell(): void;
					public switchRootShellContext(shellContext: com.stericson.RootShell.execution.Shell.ShellContext): com.stericson.RootShell.execution.Shell;
					public static startRootShell(): com.stericson.RootShell.execution.Shell;
					public static startRootShell(timeout: number, retry: number): com.stericson.RootShell.execution.Shell;
					public static getOpenShell(): com.stericson.RootShell.execution.Shell;
					public static startShell(): com.stericson.RootShell.execution.Shell;
					public static startShell(timeout: number): com.stericson.RootShell.execution.Shell;
					public static startRootShell(timeout: number): com.stericson.RootShell.execution.Shell;
					public processErrors(command: com.stericson.RootShell.execution.Command): void;
					public static isShellOpen(): boolean;
					public static runCommand(command: com.stericson.RootShell.execution.Command): com.stericson.RootShell.execution.Command;
				}
				export module Shell {
					export class ShellContext {
						public static class: java.lang.Class<com.stericson.RootShell.execution.Shell.ShellContext>;
						public static NORMAL: com.stericson.RootShell.execution.Shell.ShellContext;
						public static SHELL: com.stericson.RootShell.execution.Shell.ShellContext;
						public static SYSTEM_SERVER: com.stericson.RootShell.execution.Shell.ShellContext;
						public static SYSTEM_APP: com.stericson.RootShell.execution.Shell.ShellContext;
						public static PLATFORM_APP: com.stericson.RootShell.execution.Shell.ShellContext;
						public static UNTRUSTED_APP: com.stericson.RootShell.execution.Shell.ShellContext;
						public static RECOVERY: com.stericson.RootShell.execution.Shell.ShellContext;
						public getValue(): string;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): com.stericson.RootShell.execution.Shell.ShellContext;
						public static values(): com.stericson.RootShell.execution.Shell.ShellContext[];
					}
					export class ShellType {
						public static class: java.lang.Class<com.stericson.RootShell.execution.Shell.ShellType>;
						public static NORMAL: com.stericson.RootShell.execution.Shell.ShellType;
						public static ROOT: com.stericson.RootShell.execution.Shell.ShellType;
						public static CUSTOM: com.stericson.RootShell.execution.Shell.ShellType;
						public static valueOf(name: string): com.stericson.RootShell.execution.Shell.ShellType;
						public static values(): com.stericson.RootShell.execution.Shell.ShellType[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
					export class Worker extends java.lang.Thread {
						public static class: java.lang.Class<com.stericson.RootShell.execution.Shell.Worker>;
						public exit: number;
						public shell: com.stericson.RootShell.execution.Shell;
						public run(): void;
					}
				}
			}
		}
	}
}

//Generics information:


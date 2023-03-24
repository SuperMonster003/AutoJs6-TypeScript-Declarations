declare module jackpal {
	export module androidterm {
		export class FdHelperHoneycomb extends java.lang.Object {
			public static class: java.lang.Class<jackpal.androidterm.FdHelperHoneycomb>;
		}
	}
}

declare module jackpal {
	export module androidterm {
		export class TermExec extends java.lang.Object {
			public static class: java.lang.Class<jackpal.androidterm.TermExec>;
			public static SERVICE_ACTION_V1: string;
			public start(ptmxFd: android.os.ParcelFileDescriptor): number;
			public static sendSignal(param0: number, param1: number): void;
			public constructor(...command: string[]);
			public environment(): java.util.Map<string,string>;
			public command(): java.util.List<string>;
			public command(...command: string[]): jackpal.androidterm.TermExec;
			public constructor(command: java.util.List<string>);
			public static waitFor(param0: number): number;
			public command(command: java.util.List<string>): jackpal.androidterm.TermExec;
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module libtermexec {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.libtermexec.BuildConfig>;
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

declare module jackpal {
	export module androidterm {
		export module libtermexec {
			export module v1 {
				export class ITerminal extends java.lang.Object implements android.os.IInterface {
					public static class: java.lang.Class<jackpal.androidterm.libtermexec.v1.ITerminal>;
					/**
					 * Constructs a new instance of the jackpal.androidterm.libtermexec.v1.ITerminal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						startSession(param0: android.os.ParcelFileDescriptor, param1: android.os.ResultReceiver): android.content.IntentSender;
						asBinder(): android.os.IBinder;
					});
					public constructor();
					public startSession(param0: android.os.ParcelFileDescriptor, param1: android.os.ResultReceiver): android.content.IntentSender;
					public asBinder(): android.os.IBinder;
				}
				export module ITerminal {
					export abstract class Stub extends android.os.Binder implements jackpal.androidterm.libtermexec.v1.ITerminal {
						public static class: java.lang.Class<jackpal.androidterm.libtermexec.v1.ITerminal.Stub>;
						public static asInterface(obj: android.os.IBinder): jackpal.androidterm.libtermexec.v1.ITerminal;
						public constructor();
						public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
						public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
						public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
						public queryLocalInterface(param0: string): android.os.IInterface;
						public onTransact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
						public startSession(param0: android.os.ParcelFileDescriptor, param1: android.os.ResultReceiver): android.content.IntentSender;
						public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
						public queryLocalInterface(descriptor: string): android.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: string[]): void;
						public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, args: string[]): void;
						public asBinder(): android.os.IBinder;
						public dump(fd: java.io.FileDescriptor, args: string[]): void;
						public pingBinder(): boolean;
						public dumpAsync(fd: java.io.FileDescriptor, args: string[]): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
					}
					export module Stub {
						export class Proxy extends java.lang.Object implements jackpal.androidterm.libtermexec.v1.ITerminal {
							public static class: java.lang.Class<jackpal.androidterm.libtermexec.v1.ITerminal.Stub.Proxy>;
							public getInterfaceDescriptor(): string;
							public asBinder(): android.os.IBinder;
							public startSession(pseudoTerminalMultiplexerFd: android.os.ParcelFileDescriptor, callback: android.os.ResultReceiver): android.content.IntentSender;
							public startSession(param0: android.os.ParcelFileDescriptor, param1: android.os.ResultReceiver): android.content.IntentSender;
						}
					}
				}
			}
		}
	}
}

//Generics information:


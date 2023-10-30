declare module moe {
	export module shizuku {
		export module server {
			export class IRemoteProcess extends java.lang.Object implements android.os.IInterface {
				public static class: java.lang.Class<moe.shizuku.server.IRemoteProcess>;
				/**
				 * Constructs a new instance of the moe.shizuku.server.IRemoteProcess interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getOutputStream(): android.os.ParcelFileDescriptor;
					getInputStream(): android.os.ParcelFileDescriptor;
					getErrorStream(): android.os.ParcelFileDescriptor;
					waitFor(): number;
					exitValue(): number;
					destroy(): void;
					alive(): boolean;
					waitForTimeout(param0: number, param1: string): boolean;
					asBinder(): android.os.IBinder;
				});
				public constructor();
				public destroy(): void;
				public waitFor(): number;
				public alive(): boolean;
				public getInputStream(): android.os.ParcelFileDescriptor;
				public getOutputStream(): android.os.ParcelFileDescriptor;
				public waitForTimeout(param0: number, param1: string): boolean;
				public asBinder(): android.os.IBinder;
				public exitValue(): number;
				public getErrorStream(): android.os.ParcelFileDescriptor;
			}
			export module IRemoteProcess {
				export class Default extends java.lang.Object implements moe.shizuku.server.IRemoteProcess {
					public static class: java.lang.Class<moe.shizuku.server.IRemoteProcess.Default>;
					public waitForTimeout(param0: number, param1: string): boolean;
					public exitValue(): number;
					public destroy(): void;
					public constructor();
					public getErrorStream(): android.os.ParcelFileDescriptor;
					public waitFor(): number;
					public alive(): boolean;
					public waitForTimeout(timeout: number, param1: string): boolean;
					public asBinder(): android.os.IBinder;
					public getInputStream(): android.os.ParcelFileDescriptor;
					public getOutputStream(): android.os.ParcelFileDescriptor;
				}
				export abstract class Stub extends android.os.Binder implements moe.shizuku.server.IRemoteProcess {
					public static class: java.lang.Class<moe.shizuku.server.IRemoteProcess.Stub>;
					public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, args: string[]): void;
					public isBinderAlive(): boolean;
					public static asInterface(obj: android.os.IBinder): moe.shizuku.server.IRemoteProcess;
					public getInputStream(): android.os.ParcelFileDescriptor;
					public static getDefaultImpl(): moe.shizuku.server.IRemoteProcess;
					public destroy(): void;
					public dump(param0: java.io.FileDescriptor, param1: string[]): void;
					public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
					public constructor();
					public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
					public getInterfaceDescriptor(): string;
					public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
					public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
					public static setDefaultImpl(impl: moe.shizuku.server.IRemoteProcess): boolean;
					public waitFor(): number;
					public pingBinder(): boolean;
					public getOutputStream(): android.os.ParcelFileDescriptor;
					public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
					public dump(fd: java.io.FileDescriptor, args: string[]): void;
					public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
					public dumpAsync(fd: java.io.FileDescriptor, args: string[]): void;
					public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
					public waitForTimeout(param0: number, param1: string): boolean;
					public exitValue(): number;
					public getErrorStream(): android.os.ParcelFileDescriptor;
					public queryLocalInterface(descriptor: string): android.os.IInterface;
					public onTransact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
					public alive(): boolean;
					public asBinder(): android.os.IBinder;
					public queryLocalInterface(param0: string): android.os.IInterface;
				}
				export module Stub {
					export class Proxy extends java.lang.Object implements moe.shizuku.server.IRemoteProcess {
						public static class: java.lang.Class<moe.shizuku.server.IRemoteProcess.Stub.Proxy>;
						public static sDefaultImpl: moe.shizuku.server.IRemoteProcess;
						public getInterfaceDescriptor(): string;
						public waitFor(): number;
						public exitValue(): number;
						public alive(): boolean;
						public asBinder(): android.os.IBinder;
						public getInputStream(): android.os.ParcelFileDescriptor;
						public destroy(): void;
						public waitForTimeout(timeout: number, param1: string): boolean;
						public getErrorStream(): android.os.ParcelFileDescriptor;
						public getOutputStream(): android.os.ParcelFileDescriptor;
						public waitForTimeout(param0: number, param1: string): boolean;
					}
				}
			}
		}
	}
}

declare module moe {
	export module shizuku {
		export module server {
			export class IShizukuApplication extends java.lang.Object implements android.os.IInterface {
				public static class: java.lang.Class<moe.shizuku.server.IShizukuApplication>;
				/**
				 * Constructs a new instance of the moe.shizuku.server.IShizukuApplication interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					bindApplication(param0: android.os.Bundle): void;
					dispatchRequestPermissionResult(param0: number, param1: android.os.Bundle): void;
					showPermissionConfirmation(param0: number, param1: number, param2: string, param3: number): void;
					asBinder(): android.os.IBinder;
				});
				public constructor();
				public dispatchRequestPermissionResult(param0: number, param1: android.os.Bundle): void;
				public asBinder(): android.os.IBinder;
				public bindApplication(param0: android.os.Bundle): void;
				public showPermissionConfirmation(param0: number, param1: number, param2: string, param3: number): void;
			}
			export module IShizukuApplication {
				export class Default extends java.lang.Object implements moe.shizuku.server.IShizukuApplication {
					public static class: java.lang.Class<moe.shizuku.server.IShizukuApplication.Default>;
					public dispatchRequestPermissionResult(requestCode: number, data: android.os.Bundle): void;
					public showPermissionConfirmation(requestUid: number, requestPid: number, requestPackageName: string, requestCode: number): void;
					public constructor();
					public bindApplication(param0: android.os.Bundle): void;
					public bindApplication(data: android.os.Bundle): void;
					public dispatchRequestPermissionResult(param0: number, param1: android.os.Bundle): void;
					public showPermissionConfirmation(param0: number, param1: number, param2: string, param3: number): void;
					public asBinder(): android.os.IBinder;
				}
				export abstract class Stub extends android.os.Binder implements moe.shizuku.server.IShizukuApplication {
					public static class: java.lang.Class<moe.shizuku.server.IShizukuApplication.Stub>;
					public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, args: string[]): void;
					public isBinderAlive(): boolean;
					public static asInterface(obj: android.os.IBinder): moe.shizuku.server.IShizukuApplication;
					public dump(param0: java.io.FileDescriptor, param1: string[]): void;
					public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
					public constructor();
					public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
					public bindApplication(param0: android.os.Bundle): void;
					public dispatchRequestPermissionResult(param0: number, param1: android.os.Bundle): void;
					public getInterfaceDescriptor(): string;
					public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
					public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
					public pingBinder(): boolean;
					public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
					public static setDefaultImpl(impl: moe.shizuku.server.IShizukuApplication): boolean;
					public dump(fd: java.io.FileDescriptor, args: string[]): void;
					public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
					public dumpAsync(fd: java.io.FileDescriptor, args: string[]): void;
					public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
					public static getDefaultImpl(): moe.shizuku.server.IShizukuApplication;
					public showPermissionConfirmation(param0: number, param1: number, param2: string, param3: number): void;
					public queryLocalInterface(descriptor: string): android.os.IInterface;
					public onTransact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
					public asBinder(): android.os.IBinder;
					public queryLocalInterface(param0: string): android.os.IInterface;
				}
				export module Stub {
					export class Proxy extends java.lang.Object implements moe.shizuku.server.IShizukuApplication {
						public static class: java.lang.Class<moe.shizuku.server.IShizukuApplication.Stub.Proxy>;
						public static sDefaultImpl: moe.shizuku.server.IShizukuApplication;
						public bindApplication(param0: android.os.Bundle): void;
						public getInterfaceDescriptor(): string;
						public showPermissionConfirmation(param0: number, param1: number, param2: string, param3: number): void;
						public dispatchRequestPermissionResult(requestCode: number, data: android.os.Bundle): void;
						public asBinder(): android.os.IBinder;
						public showPermissionConfirmation(requestUid: number, requestPid: number, requestPackageName: string, requestCode: number): void;
						public bindApplication(data: android.os.Bundle): void;
						public dispatchRequestPermissionResult(param0: number, param1: android.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module moe {
	export module shizuku {
		export module server {
			export class IShizukuService extends java.lang.Object implements android.os.IInterface {
				public static class: java.lang.Class<moe.shizuku.server.IShizukuService>;
				/**
				 * Constructs a new instance of the moe.shizuku.server.IShizukuService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getVersion(): number;
					getUid(): number;
					checkPermission(param0: string): number;
					newProcess(param0: string[], param1: string[], param2: string): moe.shizuku.server.IRemoteProcess;
					getSELinuxContext(): string;
					getSystemProperty(param0: string, param1: string): string;
					setSystemProperty(param0: string, param1: string): void;
					addUserService(param0: moe.shizuku.server.IShizukuServiceConnection, param1: android.os.Bundle): number;
					removeUserService(param0: moe.shizuku.server.IShizukuServiceConnection, param1: android.os.Bundle): number;
					requestPermission(param0: number): void;
					checkSelfPermission(): boolean;
					shouldShowRequestPermissionRationale(): boolean;
					attachApplication(param0: moe.shizuku.server.IShizukuApplication, param1: android.os.Bundle): void;
					exit(): void;
					attachUserService(param0: android.os.IBinder, param1: android.os.Bundle): void;
					dispatchPackageChanged(param0: android.content.Intent): void;
					isHidden(param0: number): boolean;
					dispatchPermissionConfirmationResult(param0: number, param1: number, param2: number, param3: android.os.Bundle): void;
					getFlagsForUid(param0: number, param1: number): number;
					updateFlagsForUid(param0: number, param1: number, param2: number): void;
					asBinder(): android.os.IBinder;
				});
				public constructor();
				public getSystemProperty(param0: string, param1: string): string;
				public dispatchPackageChanged(param0: android.content.Intent): void;
				public getUid(): number;
				public getSELinuxContext(): string;
				public setSystemProperty(param0: string, param1: string): void;
				public dispatchPermissionConfirmationResult(param0: number, param1: number, param2: number, param3: android.os.Bundle): void;
				public asBinder(): android.os.IBinder;
				public updateFlagsForUid(param0: number, param1: number, param2: number): void;
				public checkPermission(param0: string): number;
				public getFlagsForUid(param0: number, param1: number): number;
				public exit(): void;
				public requestPermission(param0: number): void;
				public newProcess(param0: string[], param1: string[], param2: string): moe.shizuku.server.IRemoteProcess;
				public getVersion(): number;
				public isHidden(param0: number): boolean;
				public checkSelfPermission(): boolean;
				public removeUserService(param0: moe.shizuku.server.IShizukuServiceConnection, param1: android.os.Bundle): number;
				public attachUserService(param0: android.os.IBinder, param1: android.os.Bundle): void;
				public addUserService(param0: moe.shizuku.server.IShizukuServiceConnection, param1: android.os.Bundle): number;
				public shouldShowRequestPermissionRationale(): boolean;
				public attachApplication(param0: moe.shizuku.server.IShizukuApplication, param1: android.os.Bundle): void;
			}
			export module IShizukuService {
				export class Default extends java.lang.Object implements moe.shizuku.server.IShizukuService {
					public static class: java.lang.Class<moe.shizuku.server.IShizukuService.Default>;
					public dispatchPackageChanged(intent: android.content.Intent): void;
					public checkSelfPermission(): boolean;
					public removeUserService(conn: moe.shizuku.server.IShizukuServiceConnection, args: android.os.Bundle): number;
					public attachUserService(param0: android.os.IBinder, param1: android.os.Bundle): void;
					public addUserService(conn: moe.shizuku.server.IShizukuServiceConnection, args: android.os.Bundle): number;
					public dispatchPackageChanged(param0: android.content.Intent): void;
					public attachUserService(binder: android.os.IBinder, options: android.os.Bundle): void;
					public setSystemProperty(param0: string, param1: string): void;
					public attachApplication(param0: moe.shizuku.server.IShizukuApplication, param1: android.os.Bundle): void;
					public getSELinuxContext(): string;
					public newProcess(param0: string[], param1: string[], param2: string): moe.shizuku.server.IRemoteProcess;
					public getSystemProperty(param0: string, param1: string): string;
					public constructor();
					public isHidden(param0: number): boolean;
					public getFlagsForUid(uid: number, mask: number): number;
					public dispatchPermissionConfirmationResult(param0: number, param1: number, param2: number, param3: android.os.Bundle): void;
					public newProcess(cmd: string[], env: string[], dir: string): moe.shizuku.server.IRemoteProcess;
					public removeUserService(param0: moe.shizuku.server.IShizukuServiceConnection, param1: android.os.Bundle): number;
					public addUserService(param0: moe.shizuku.server.IShizukuServiceConnection, param1: android.os.Bundle): number;
					public isHidden(uid: number): boolean;
					public getSystemProperty(name: string, defaultValue: string): string;
					public getVersion(): number;
					public getUid(): number;
					public attachApplication(application: moe.shizuku.server.IShizukuApplication, args: android.os.Bundle): void;
					public dispatchPermissionConfirmationResult(requestUid: number, requestPid: number, requestCode: number, data: android.os.Bundle): void;
					public updateFlagsForUid(uid: number, mask: number, value: number): void;
					public updateFlagsForUid(param0: number, param1: number, param2: number): void;
					public setSystemProperty(name: string, value: string): void;
					public requestPermission(requestCode: number): void;
					public requestPermission(param0: number): void;
					public shouldShowRequestPermissionRationale(): boolean;
					public getFlagsForUid(param0: number, param1: number): number;
					public exit(): void;
					public checkPermission(param0: string): number;
					public checkPermission(permission: string): number;
					public asBinder(): android.os.IBinder;
				}
				export abstract class Stub extends android.os.Binder implements moe.shizuku.server.IShizukuService {
					public static class: java.lang.Class<moe.shizuku.server.IShizukuService.Stub>;
					public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, args: string[]): void;
					public checkSelfPermission(): boolean;
					public static getDefaultImpl(): moe.shizuku.server.IShizukuService;
					public isBinderAlive(): boolean;
					public attachUserService(param0: android.os.IBinder, param1: android.os.Bundle): void;
					public dispatchPackageChanged(param0: android.content.Intent): void;
					public setSystemProperty(param0: string, param1: string): void;
					public attachApplication(param0: moe.shizuku.server.IShizukuApplication, param1: android.os.Bundle): void;
					public newProcess(param0: string[], param1: string[], param2: string): moe.shizuku.server.IRemoteProcess;
					public getSELinuxContext(): string;
					public getSystemProperty(param0: string, param1: string): string;
					public dump(param0: java.io.FileDescriptor, param1: string[]): void;
					public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
					public constructor();
					public isHidden(param0: number): boolean;
					public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
					public getInterfaceDescriptor(): string;
					public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
					public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
					public dispatchPermissionConfirmationResult(param0: number, param1: number, param2: number, param3: android.os.Bundle): void;
					public pingBinder(): boolean;
					public removeUserService(param0: moe.shizuku.server.IShizukuServiceConnection, param1: android.os.Bundle): number;
					public addUserService(param0: moe.shizuku.server.IShizukuServiceConnection, param1: android.os.Bundle): number;
					public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
					public getVersion(): number;
					public dump(fd: java.io.FileDescriptor, args: string[]): void;
					public getUid(): number;
					public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
					public dumpAsync(fd: java.io.FileDescriptor, args: string[]): void;
					public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
					public static asInterface(obj: android.os.IBinder): moe.shizuku.server.IShizukuService;
					public updateFlagsForUid(param0: number, param1: number, param2: number): void;
					public requestPermission(param0: number): void;
					public shouldShowRequestPermissionRationale(): boolean;
					public getFlagsForUid(param0: number, param1: number): number;
					public queryLocalInterface(descriptor: string): android.os.IInterface;
					public checkPermission(param0: string): number;
					public exit(): void;
					public onTransact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
					public static setDefaultImpl(impl: moe.shizuku.server.IShizukuService): boolean;
					public asBinder(): android.os.IBinder;
					public queryLocalInterface(param0: string): android.os.IInterface;
				}
				export module Stub {
					export class Proxy extends java.lang.Object implements moe.shizuku.server.IShizukuService {
						public static class: java.lang.Class<moe.shizuku.server.IShizukuService.Stub.Proxy>;
						public static sDefaultImpl: moe.shizuku.server.IShizukuService;
						public attachUserService(param0: android.os.IBinder, param1: android.os.Bundle): void;
						public attachApplication(param0: moe.shizuku.server.IShizukuApplication, param1: android.os.Bundle): void;
						public newProcess(param0: string[], param1: string[], param2: string): moe.shizuku.server.IRemoteProcess;
						public requestPermission(param0: number): void;
						public getSystemProperty(param0: string, param1: string): string;
						public attachApplication(application: moe.shizuku.server.IShizukuApplication, args: android.os.Bundle): void;
						public getInterfaceDescriptor(): string;
						public getSystemProperty(name: string, defaultValue: string): string;
						public shouldShowRequestPermissionRationale(): boolean;
						public checkPermission(param0: string): number;
						public removeUserService(param0: moe.shizuku.server.IShizukuServiceConnection, param1: android.os.Bundle): number;
						public removeUserService(conn: moe.shizuku.server.IShizukuServiceConnection, args: android.os.Bundle): number;
						public asBinder(): android.os.IBinder;
						public getSELinuxContext(): string;
						public dispatchPackageChanged(param0: android.content.Intent): void;
						public isHidden(uid: number): boolean;
						public updateFlagsForUid(param0: number, param1: number, param2: number): void;
						public dispatchPermissionConfirmationResult(requestUid: number, requestPid: number, requestCode: number, data: android.os.Bundle): void;
						public setSystemProperty(param0: string, param1: string): void;
						public newProcess(cmd: string[], env: string[], dir: string): moe.shizuku.server.IRemoteProcess;
						public dispatchPackageChanged(intent: android.content.Intent): void;
						public getUid(): number;
						public getVersion(): number;
						public setSystemProperty(name: string, value: string): void;
						public getFlagsForUid(param0: number, param1: number): number;
						public updateFlagsForUid(uid: number, mask: number, value: number): void;
						public requestPermission(requestCode: number): void;
						public addUserService(param0: moe.shizuku.server.IShizukuServiceConnection, param1: android.os.Bundle): number;
						public dispatchPermissionConfirmationResult(param0: number, param1: number, param2: number, param3: android.os.Bundle): void;
						public checkPermission(permission: string): number;
						public getFlagsForUid(uid: number, mask: number): number;
						public isHidden(param0: number): boolean;
						public checkSelfPermission(): boolean;
						public exit(): void;
						public addUserService(conn: moe.shizuku.server.IShizukuServiceConnection, args: android.os.Bundle): number;
						public attachUserService(binder: android.os.IBinder, options: android.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module moe {
	export module shizuku {
		export module server {
			export class IShizukuServiceConnection extends java.lang.Object implements android.os.IInterface {
				public static class: java.lang.Class<moe.shizuku.server.IShizukuServiceConnection>;
				/**
				 * Constructs a new instance of the moe.shizuku.server.IShizukuServiceConnection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					connected(param0: android.os.IBinder): void;
					died(): void;
					asBinder(): android.os.IBinder;
				});
				public constructor();
				public died(): void;
				public connected(param0: android.os.IBinder): void;
				public asBinder(): android.os.IBinder;
			}
			export module IShizukuServiceConnection {
				export class Default extends java.lang.Object implements moe.shizuku.server.IShizukuServiceConnection {
					public static class: java.lang.Class<moe.shizuku.server.IShizukuServiceConnection.Default>;
					public connected(param0: android.os.IBinder): void;
					public constructor();
					public connected(service: android.os.IBinder): void;
					public died(): void;
					public asBinder(): android.os.IBinder;
				}
				export abstract class Stub extends android.os.Binder implements moe.shizuku.server.IShizukuServiceConnection {
					public static class: java.lang.Class<moe.shizuku.server.IShizukuServiceConnection.Stub>;
					public static setDefaultImpl(impl: moe.shizuku.server.IShizukuServiceConnection): boolean;
					public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
					public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, args: string[]): void;
					public static getDefaultImpl(): moe.shizuku.server.IShizukuServiceConnection;
					public connected(param0: android.os.IBinder): void;
					public isBinderAlive(): boolean;
					public dump(fd: java.io.FileDescriptor, args: string[]): void;
					public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
					public dumpAsync(fd: java.io.FileDescriptor, args: string[]): void;
					public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
					public dump(param0: java.io.FileDescriptor, param1: string[]): void;
					public static asInterface(obj: android.os.IBinder): moe.shizuku.server.IShizukuServiceConnection;
					public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
					public constructor();
					public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
					public died(): void;
					public getInterfaceDescriptor(): string;
					public queryLocalInterface(descriptor: string): android.os.IInterface;
					public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
					public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
					public onTransact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
					public pingBinder(): boolean;
					public asBinder(): android.os.IBinder;
					public queryLocalInterface(param0: string): android.os.IInterface;
				}
				export module Stub {
					export class Proxy extends java.lang.Object implements moe.shizuku.server.IShizukuServiceConnection {
						public static class: java.lang.Class<moe.shizuku.server.IShizukuServiceConnection.Stub.Proxy>;
						public static sDefaultImpl: moe.shizuku.server.IShizukuServiceConnection;
						public getInterfaceDescriptor(): string;
						public connected(service: android.os.IBinder): void;
						public connected(param0: android.os.IBinder): void;
						public asBinder(): android.os.IBinder;
						public died(): void;
					}
				}
			}
		}
	}
}

//Generics information:


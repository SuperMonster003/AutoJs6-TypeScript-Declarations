declare module rikka {
	export module shizuku {
		export class Shizuku extends java.lang.Object {
			public static class: java.lang.Class<rikka.shizuku.Shizuku>;
			public static addBinderReceivedListener(listener: rikka.shizuku.Shizuku.OnBinderReceivedListener, handler: android.os.Handler): void;
			public static removeRequestPermissionResultListener(listener: rikka.shizuku.Shizuku.OnRequestPermissionResultListener): boolean;
			public static bindUserService(args: rikka.shizuku.Shizuku.UserServiceArgs, conn: android.content.ServiceConnection): void;
			public static shouldShowRequestPermissionRationale(): boolean;
			public static dispatchPermissionConfirmationResult(requestUid: number, requestPid: number, requestCode: number, data: android.os.Bundle): void;
			public static peekUserService(args: rikka.shizuku.Shizuku.UserServiceArgs, conn: android.content.ServiceConnection): number;
			public static addBinderDeadListener(listener: rikka.shizuku.Shizuku.OnBinderDeadListener): void;
			public static addBinderReceivedListener(listener: rikka.shizuku.Shizuku.OnBinderReceivedListener): void;
			public static removeBinderDeadListener(listener: rikka.shizuku.Shizuku.OnBinderDeadListener): boolean;
			public static addRequestPermissionResultListener(listener: rikka.shizuku.Shizuku.OnRequestPermissionResultListener, handler: android.os.Handler): void;
			public static pingBinder(): boolean;
			public static requestPermission(requestCode: number): void;
			public static getServerPatchVersion(): number;
			public static addBinderReceivedListenerSticky(listener: rikka.shizuku.Shizuku.OnBinderReceivedListener, handler: android.os.Handler): void;
			public static addBinderDeadListener(listener: rikka.shizuku.Shizuku.OnBinderDeadListener, handler: android.os.Handler): void;
			public static getVersion(): number;
			public static onBinderReceived(newBinder: android.os.IBinder, packageName: string): void;
			public static attachUserService(binder: android.os.IBinder, options: android.os.Bundle): void;
			public static unbindUserService(args: rikka.shizuku.Shizuku.UserServiceArgs, conn: android.content.ServiceConnection, remove: boolean): void;
			public static getUid(): number;
			public static getSELinuxContext(): string;
			public constructor();
			public static transactRemote(data: android.os.Parcel, reply: android.os.Parcel, flags: number): void;
			public static addRequestPermissionResultListener(listener: rikka.shizuku.Shizuku.OnRequestPermissionResultListener): void;
			public static requireService(): moe.shizuku.server.IShizukuService;
			public static getFlagsForUid(uid: number, mask: number): number;
			public static getBinder(): android.os.IBinder;
			public static checkSelfPermission(): number;
			public static updateFlagsForUid(uid: number, mask: number, value: number): void;
			public static addBinderReceivedListenerSticky(listener: rikka.shizuku.Shizuku.OnBinderReceivedListener): void;
			public static removeBinderReceivedListener(listener: rikka.shizuku.Shizuku.OnBinderReceivedListener): boolean;
			public static exit(): void;
			public static isPreV11(): boolean;
			public static getLatestServiceVersion(): number;
			public static checkRemotePermission(permission: string): number;
		}
		export module Shizuku {
			export class ListenerHolder<T>  extends java.lang.Object {
				public static class: java.lang.Class<rikka.shizuku.Shizuku.ListenerHolder<any>>;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(o: any): boolean;
			}
			export class OnBinderDeadListener extends java.lang.Object {
				public static class: java.lang.Class<rikka.shizuku.Shizuku.OnBinderDeadListener>;
				/**
				 * Constructs a new instance of the rikka.shizuku.Shizuku$OnBinderDeadListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBinderDead(): void;
				});
				public constructor();
				public onBinderDead(): void;
			}
			export class OnBinderReceivedListener extends java.lang.Object {
				public static class: java.lang.Class<rikka.shizuku.Shizuku.OnBinderReceivedListener>;
				/**
				 * Constructs a new instance of the rikka.shizuku.Shizuku$OnBinderReceivedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBinderReceived(): void;
				});
				public constructor();
				public onBinderReceived(): void;
			}
			export class OnRequestPermissionResultListener extends java.lang.Object {
				public static class: java.lang.Class<rikka.shizuku.Shizuku.OnRequestPermissionResultListener>;
				/**
				 * Constructs a new instance of the rikka.shizuku.Shizuku$OnRequestPermissionResultListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRequestPermissionResult(param0: number, param1: number): void;
				});
				public constructor();
				public onRequestPermissionResult(param0: number, param1: number): void;
			}
			export class UserServiceArgs extends java.lang.Object {
				public static class: java.lang.Class<rikka.shizuku.Shizuku.UserServiceArgs>;
				public tag(tag: string): rikka.shizuku.Shizuku.UserServiceArgs;
				public daemon(daemon: boolean): rikka.shizuku.Shizuku.UserServiceArgs;
				public processNameSuffix(processNameSuffix: string): rikka.shizuku.Shizuku.UserServiceArgs;
				public version(versionCode: number): rikka.shizuku.Shizuku.UserServiceArgs;
				public debuggable(debuggable: boolean): rikka.shizuku.Shizuku.UserServiceArgs;
				public constructor(componentName: android.content.ComponentName);
			}
		}
	}
}

declare module rikka {
	export module shizuku {
		export class ShizukuBinderWrapper extends java.lang.Object implements android.os.IBinder {
			public static class: java.lang.Class<rikka.shizuku.ShizukuBinderWrapper>;
			public pingBinder(): boolean;
			public isBinderAlive(): boolean;
			public queryLocalInterface(param0: string): android.os.IInterface;
			public queryLocalInterface(descriptor: string): android.os.IInterface;
			public constructor(original: android.os.IBinder);
			public dump(fd: java.io.FileDescriptor, args: string[]): void;
			public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
			public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
			public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
			public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
			public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
			public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
			public dumpAsync(fd: java.io.FileDescriptor, args: string[]): void;
			public dump(param0: java.io.FileDescriptor, param1: string[]): void;
			public getInterfaceDescriptor(): string;
			public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
		}
	}
}

declare module rikka {
	export module shizuku {
		export class ShizukuRemoteProcess extends java.lang.Process implements android.os.Parcelable {
			public static class: java.lang.Class<rikka.shizuku.ShizukuRemoteProcess>;
			public static CREATOR: android.os.Parcelable.Creator<rikka.shizuku.ShizukuRemoteProcess>;
			public asBinder(): android.os.IBinder;
			public alive(): boolean;
			public getInputStream(): java.io.InputStream;
			public writeToParcel(dest: android.os.Parcel, flags: number): void;
			public exitValue(): number;
			public destroy(): void;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public getOutputStream(): java.io.OutputStream;
			public waitForTimeout(timeout: number, param1: java.util.concurrent.TimeUnit): boolean;
			public getErrorStream(): java.io.InputStream;
			public waitFor(): number;
		}
	}
}

declare module rikka {
	export module shizuku {
		export class ShizukuServiceConnection {
			public static class: java.lang.Class<rikka.shizuku.ShizukuServiceConnection>;
			public constructor(args: rikka.shizuku.Shizuku.UserServiceArgs);
			public clearConnections(): void;
			public removeConnection(conn: android.content.ServiceConnection): void;
			public addConnection(conn: android.content.ServiceConnection): void;
			public died(): void;
			public connected(binder: android.os.IBinder): void;
		}
	}
}

declare module rikka {
	export module shizuku {
		export class ShizukuServiceConnections extends java.lang.Object {
			public static class: java.lang.Class<rikka.shizuku.ShizukuServiceConnections>;
		}
	}
}

declare module rikka {
	export module shizuku {
		export class ShizukuSystemProperties extends java.lang.Object {
			public static class: java.lang.Class<rikka.shizuku.ShizukuSystemProperties>;
			public static getInt(key: string, def: number): number;
			public static getBoolean(key: string, def: boolean): boolean;
			public static set(key: string, val: string): void;
			public static get(key: string, def: string): string;
			public constructor();
			public static get(key: string): string;
			public static getLong(key: string, def: number): number;
		}
	}
}

declare module rikka {
	export module shizuku {
		export class SystemServiceHelper extends java.lang.Object {
			public static class: java.lang.Class<rikka.shizuku.SystemServiceHelper>;
			/** @deprecated */
			public static getTransactionCode(className: string, methodName: string): java.lang.Integer;
			/** @deprecated */
			public static obtainParcel(serviceName: string, interfaceName: string, methodName: string): android.os.Parcel;
			public static getSystemService(name: string): android.os.IBinder;
			public constructor();
			/** @deprecated */
			public static obtainParcel(serviceName: string, interfaceName: string, className: string, methodName: string): android.os.Parcel;
		}
	}
}

declare module rikka {
	export module sui {
		export class Sui extends java.lang.Object {
			public static class: java.lang.Class<rikka.sui.Sui>;
			public static isSui(): boolean;
			public constructor();
			public static init(packageName: string): boolean;
		}
	}
}

//Generics information:
//rikka.shizuku.Shizuku.ListenerHolder:1


declare module androidx {
	export module startup {
		export class AppInitializer extends java.lang.Object {
			public static class: java.lang.Class<androidx.startup.AppInitializer>;
			public static getInstance(context: android.content.Context): androidx.startup.AppInitializer;
			public initializeComponent(component: java.lang.Class<any>): any;
			public isEagerlyInitialized(component: java.lang.Class<any>): boolean;
		}
	}
}

declare module androidx {
	export module startup {
		export class InitializationProvider extends android.content.ContentProvider {
			public static class: java.lang.Class<androidx.startup.InitializationProvider>;
			public query(param0: android.net.Uri, param1: string[], param2: string, param3: string[], param4: string): android.database.Cursor;
			public delete(param0: android.net.Uri, param1: string, param2: string[]): number;
			public query(uri: android.net.Uri, projection: string[], selection: string, selectionArgs: string[], sortOrder: string): android.database.Cursor;
			public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: string[]): number;
			public update(uri: android.net.Uri, values: android.content.ContentValues, selection: string, selectionArgs: string[]): number;
			public constructor();
			public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;
			public getType(uri: android.net.Uri): string;
			public getType(param0: android.net.Uri): string;
			public onCreate(): boolean;
			public query(uri: android.net.Uri, projection: string[], selection: string, selectionArgs: string[], sortOrder: string, cancellationSignal: android.os.CancellationSignal): android.database.Cursor;
			public onTrimMemory(param0: number): void;
			public onTrimMemory(level: number): void;
			public delete(uri: android.net.Uri, selection: string, selectionArgs: string[]): number;
			public insert(uri: android.net.Uri, values: android.content.ContentValues): android.net.Uri;
		}
	}
}

declare module androidx {
	export module startup {
		export class Initializer<T>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.startup.Initializer<any>>;
			/**
			 * Constructs a new instance of the androidx.startup.Initializer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				create(param0: android.content.Context): T;
				dependencies(): java.util.List<java.lang.Class<any>>;
			});
			public constructor();
			public create(param0: android.content.Context): T;
			public dependencies(): java.util.List<java.lang.Class<any>>;
		}
	}
}

declare module androidx {
	export module startup {
		export class StartupException extends java.lang.RuntimeException {
			public static class: java.lang.Class<androidx.startup.StartupException>;
			public constructor(message: string);
			public constructor(throwable: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
			public constructor(message: string, throwable: java.lang.Throwable);
		}
	}
}

declare module androidx {
	export module startup {
		export class StartupLogger extends java.lang.Object {
			public static class: java.lang.Class<androidx.startup.StartupLogger>;
			public static i(message: string): void;
			public static e(message: string, throwable: java.lang.Throwable): void;
		}
	}
}

//Generics information:
//androidx.startup.Initializer:1


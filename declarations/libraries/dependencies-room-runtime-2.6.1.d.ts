/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module androidx {
	export module room {
		export class AutoCloser extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.AutoCloser>;
			public delegateOpenHelper: androidx.sqlite.db.SupportSQLiteOpenHelper;
			public static autoCloseBug: string;
			public incrementCountAndEnsureDbIsOpen(): androidx.sqlite.db.SupportSQLiteDatabase;
			public decrementCountAndScheduleClose(): void;
			public setLastDecrementRefCountTimeStamp$room_runtime_release(_set_: number): void;
			public getLastDecrementRefCountTimeStamp$room_runtime_release(): number;
			public setDelegateDatabase$room_runtime_release(_set_: androidx.sqlite.db.SupportSQLiteDatabase): void;
			public getRefCount$room_runtime_release(): number;
			public getDelegateDatabase$room_runtime_release(): androidx.sqlite.db.SupportSQLiteDatabase;
			public setDelegateOpenHelper(_set_: androidx.sqlite.db.SupportSQLiteOpenHelper): void;
			public setAutoCloseCallback(onAutoClose: java.lang.Runnable): void;
			public getDelegateOpenHelper(): androidx.sqlite.db.SupportSQLiteOpenHelper;
			public getOnAutoCloseCallback$room_runtime_release(): java.lang.Runnable;
			public executeRefCountingFunction(block: kotlin.jvm.functions.Function1): any;
			public getRefCountForTest$room_runtime_release(): number;
			public constructor(autoCloseTimeoutAmount: number, param1: java.util.concurrent.TimeUnit, autoCloseTimeUnit: java.util.concurrent.Executor);
			public setOnAutoCloseCallback$room_runtime_release(_set_: java.lang.Runnable): void;
			public setRefCount$room_runtime_release(_set_: number): void;
			public closeDatabaseIfOpen(): void;
			public init(delegateOpenHelper: androidx.sqlite.db.SupportSQLiteOpenHelper): void;
			public isActive(): boolean;
		}
		export module AutoCloser {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.AutoCloser.Companion>;
			}
		}
	}
}

declare module androidx {
	export module room {
		export class AutoClosingRoomOpenHelper extends java.lang.Object implements androidx.room.DelegatingOpenHelper {
			public static class: java.lang.Class<androidx.room.AutoClosingRoomOpenHelper>;
			public autoCloser: androidx.room.AutoCloser;
			public constructor(delegate: androidx.sqlite.db.SupportSQLiteOpenHelper, autoCloser: androidx.room.AutoCloser);
			public setWriteAheadLoggingEnabled(enabled: boolean): void;
			public getDatabaseName(): string;
			public getDelegate(): androidx.sqlite.db.SupportSQLiteOpenHelper;
			public close(): void;
			public getReadableDatabase(): androidx.sqlite.db.SupportSQLiteDatabase;
			public getWritableDatabase(): androidx.sqlite.db.SupportSQLiteDatabase;
		}
		export module AutoClosingRoomOpenHelper {
			export class AutoClosingSupportSQLiteDatabase extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.AutoClosingRoomOpenHelper.AutoClosingSupportSQLiteDatabase>;
				public beginTransaction(): void;
				public compileStatement(sql: string): androidx.sqlite.db.SupportSQLiteStatement;
				public getAttachedDbs(): java.util.List<android.util.Pair<string,string>>;
				public query(query: string): android.database.Cursor;
				public execSQL(sql: string): void;
				public pokeOpen(): void;
				public delete(table: string, whereClause: string, whereArgs: any[]): number;
				public beginTransactionNonExclusive(): void;
				public setMaximumSize(numBytes: number): number;
				public setLocale(locale: java.util.Locale): void;
				public setVersion(version: number): void;
				public isDbLockedByCurrentThread(): boolean;
				public isWriteAheadLoggingEnabled(): boolean;
				public getMaximumSize(): number;
				public yieldIfContendedSafely(sleepAfterYieldDelayMillis: number): boolean;
				public query(query: string, bindArgs: any[]): android.database.Cursor;
				public isDatabaseIntegrityOk(): boolean;
				public inTransaction(): boolean;
				public enableWriteAheadLogging(): boolean;
				public update(table: string, conflictAlgorithm: number, values: android.content.ContentValues, whereClause: string, whereArgs: any[]): number;
				public close(): void;
				public beginTransactionWithListenerNonExclusive(transactionListener: android.database.sqlite.SQLiteTransactionListener): void;
				public setTransactionSuccessful(): void;
				public query(query: androidx.sqlite.db.SupportSQLiteQuery): android.database.Cursor;
				public constructor(autoCloser: androidx.room.AutoCloser);
				public getPath(): string;
				public yieldIfContendedSafely(): boolean;
				public disableWriteAheadLogging(): void;
				public setForeignKeyConstraintsEnabled(enabled: boolean): void;
				public query(query: androidx.sqlite.db.SupportSQLiteQuery, cancellationSignal: android.os.CancellationSignal): android.database.Cursor;
				public setMaxSqlCacheSize(cacheSize: number): void;
				public setPageSize(numBytes: number): void;
				public getVersion(): number;
				public needUpgrade(newVersion: number): boolean;
				public getPageSize(): number;
				public beginTransactionWithListener(transactionListener: android.database.sqlite.SQLiteTransactionListener): void;
				public isReadOnly(): boolean;
				public isOpen(): boolean;
				public endTransaction(): void;
				public execSQL(sql: string, bindArgs: any[]): void;
				public insert(table: string, conflictAlgorithm: number, values: android.content.ContentValues): number;
			}
			export class AutoClosingSupportSqliteStatement extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.AutoClosingRoomOpenHelper.AutoClosingSupportSqliteStatement>;
				public execute(): void;
				public simpleQueryForString(): string;
				public close(): void;
				public simpleQueryForLong(): number;
				public bindDouble(index: number, value: number): void;
				public bindString(index: number, value: string): void;
				public bindBlob(index: number, value: number[]): void;
				public bindNull(index: number): void;
				public bindLong(index: number, value: number): void;
				public clearBindings(): void;
				public executeUpdateDelete(): number;
				public executeInsert(): number;
				public constructor(sql: string, autoCloser: androidx.room.AutoCloser);
			}
			export class KeepAliveCursor extends java.lang.Object implements android.database.Cursor {
				public static class: java.lang.Class<androidx.room.AutoClosingRoomOpenHelper.KeepAliveCursor>;
				public getColumnCount(): number;
				public moveToPrevious(): boolean;
				public getDouble(param0: number): number;
				public getColumnName(p0: number): string;
				public getShort(param0: number): number;
				public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;
				public move(param0: number): boolean;
				public getColumnNames(): string[];
				public moveToPosition(param0: number): boolean;
				public getColumnIndex(param0: string): number;
				public registerDataSetObserver(p0: android.database.DataSetObserver): void;
				public getNotificationUri(): android.net.Uri;
				public moveToPosition(p0: number): boolean;
				public isAfterLast(): boolean;
				public getExtras(): android.os.Bundle;
				public getInt(param0: number): number;
				public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;
				public getBlob(param0: number): number[];
				public isFirst(): boolean;
				public registerContentObserver(p0: android.database.ContentObserver): void;
				public close(): void;
				public isNull(param0: number): boolean;
				public getColumnIndex(p0: string): number;
				public respond(param0: android.os.Bundle): android.os.Bundle;
				public getColumnIndexOrThrow(p0: string): number;
				public unregisterDataSetObserver(p0: android.database.DataSetObserver): void;
				public isClosed(): boolean;
				public getCount(): number;
				public registerDataSetObserver(param0: android.database.DataSetObserver): void;
				public setExtras(param0: android.os.Bundle): void;
				public getType(param0: number): number;
				public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
				public moveToLast(): boolean;
				public getFloat(param0: number): number;
				public move(p0: number): boolean;
				public getLong(p0: number): number;
				public registerContentObserver(param0: android.database.ContentObserver): void;
				public getString(param0: number): string;
				public setNotificationUris(cr: android.content.ContentResolver, uris: java.util.List<any>): void;
				/** @deprecated */
				public deactivate(): void;
				public getPosition(): number;
				public constructor(delegate: android.database.Cursor, autoCloser: androidx.room.AutoCloser);
				public getString(p0: number): string;
				public getDouble(p0: number): number;
				public getColumnName(param0: number): string;
				public isNull(p0: number): boolean;
				public respond(p0: android.os.Bundle): android.os.Bundle;
				public setNotificationUri(p0: android.content.ContentResolver, p1: android.net.Uri): void;
				/** @deprecated */
				public requery(): boolean;
				public getLong(param0: number): number;
				public unregisterContentObserver(p0: android.database.ContentObserver): void;
				public moveToNext(): boolean;
				public unregisterContentObserver(param0: android.database.ContentObserver): void;
				public setExtras(extras: android.os.Bundle): void;
				public getBlob(p0: number): number[];
				public getFloat(p0: number): number;
				public getType(p0: number): number;
				public getColumnIndexOrThrow(param0: string): number;
				public getWantsAllOnMoveCalls(): boolean;
				public getShort(p0: number): number;
				public isLast(): boolean;
				public getInt(p0: number): number;
				public getNotificationUris(): java.util.List<android.net.Uri>;
				public copyStringToBuffer(p0: number, p1: android.database.CharArrayBuffer): void;
				public moveToFirst(): boolean;
				public isBeforeFirst(): boolean;
			}
		}
	}
}

declare module androidx {
	export module room {
		export class AutoClosingRoomOpenHelperFactory extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.AutoClosingRoomOpenHelperFactory>;
			public create(configuration: androidx.sqlite.db.SupportSQLiteOpenHelper.Configuration): androidx.room.AutoClosingRoomOpenHelper;
			public constructor(delegate: androidx.sqlite.db.SupportSQLiteOpenHelper.Factory, autoCloser: androidx.room.AutoCloser);
		}
	}
}

declare module androidx {
	export module room {
		export class DatabaseConfiguration extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.DatabaseConfiguration>;
			public context: android.content.Context;
			public name: string;
			public sqliteOpenHelperFactory: androidx.sqlite.db.SupportSQLiteOpenHelper.Factory;
			public migrationContainer: androidx.room.RoomDatabase.MigrationContainer;
			public callbacks: java.util.List<androidx.room.RoomDatabase.Callback>;
			public allowMainThreadQueries: boolean;
			public journalMode: androidx.room.RoomDatabase.JournalMode;
			public queryExecutor: java.util.concurrent.Executor;
			public transactionExecutor: java.util.concurrent.Executor;
			public multiInstanceInvalidationServiceIntent: android.content.Intent;
			public requireMigration: boolean;
			public allowDestructiveMigrationOnDowngrade: boolean;
			public copyFromAssetPath: string;
			public copyFromFile: java.io.File;
			public copyFromInputStream: java.util.concurrent.Callable<java.io.InputStream>;
			public prepackagedDatabaseCallback: androidx.room.RoomDatabase.PrepackagedDatabaseCallback;
			public typeConverters: java.util.List<any>;
			public autoMigrationSpecs: java.util.List<androidx.room.migration.AutoMigrationSpec>;
			public multiInstanceInvalidation: boolean;
			/** @deprecated */
			public constructor(context: android.content.Context, name: string, sqliteOpenHelperFactory: androidx.sqlite.db.SupportSQLiteOpenHelper.Factory, migrationContainer: androidx.room.RoomDatabase.MigrationContainer, callbacks: java.util.List<any>, allowMainThreadQueries: boolean, journalMode: androidx.room.RoomDatabase.JournalMode, queryExecutor: java.util.concurrent.Executor, transactionExecutor: java.util.concurrent.Executor, multiInstanceInvalidation: boolean, requireMigration: boolean, allowDestructiveMigrationOnDowngrade: boolean, migrationNotRequiredFrom: java.util.Set<java.lang.Integer>, copyFromAssetPath: string, copyFromFile: java.io.File, copyFromInputStream: java.util.concurrent.Callable<java.io.InputStream>);
			public constructor(context: android.content.Context, name: string, sqliteOpenHelperFactory: androidx.sqlite.db.SupportSQLiteOpenHelper.Factory, migrationContainer: androidx.room.RoomDatabase.MigrationContainer, callbacks: java.util.List<any>, allowMainThreadQueries: boolean, journalMode: androidx.room.RoomDatabase.JournalMode, queryExecutor: java.util.concurrent.Executor, transactionExecutor: java.util.concurrent.Executor, multiInstanceInvalidationServiceIntent: android.content.Intent, requireMigration: boolean, allowDestructiveMigrationOnDowngrade: boolean, migrationNotRequiredFrom: java.util.Set<java.lang.Integer>, copyFromAssetPath: string, copyFromFile: java.io.File, copyFromInputStream: java.util.concurrent.Callable<java.io.InputStream>, prepackagedDatabaseCallback: androidx.room.RoomDatabase.PrepackagedDatabaseCallback, typeConverters: java.util.List<any>, autoMigrationSpecs: java.util.List<any>);
			/** @deprecated */
			public constructor(context: android.content.Context, name: string, sqliteOpenHelperFactory: androidx.sqlite.db.SupportSQLiteOpenHelper.Factory, migrationContainer: androidx.room.RoomDatabase.MigrationContainer, callbacks: java.util.List<any>, allowMainThreadQueries: boolean, journalMode: androidx.room.RoomDatabase.JournalMode, queryExecutor: java.util.concurrent.Executor, requireMigration: boolean, migrationNotRequiredFrom: java.util.Set<java.lang.Integer>);
			/** @deprecated */
			public constructor(context: android.content.Context, name: string, sqliteOpenHelperFactory: androidx.sqlite.db.SupportSQLiteOpenHelper.Factory, migrationContainer: androidx.room.RoomDatabase.MigrationContainer, callbacks: java.util.List<any>, allowMainThreadQueries: boolean, journalMode: androidx.room.RoomDatabase.JournalMode, queryExecutor: java.util.concurrent.Executor, transactionExecutor: java.util.concurrent.Executor, multiInstanceInvalidation: boolean, requireMigration: boolean, allowDestructiveMigrationOnDowngrade: boolean, migrationNotRequiredFrom: java.util.Set<java.lang.Integer>, copyFromAssetPath: string, copyFromFile: java.io.File, copyFromInputStream: java.util.concurrent.Callable<java.io.InputStream>, prepackagedDatabaseCallback: androidx.room.RoomDatabase.PrepackagedDatabaseCallback);
			/** @deprecated */
			public constructor(context: android.content.Context, name: string, sqliteOpenHelperFactory: androidx.sqlite.db.SupportSQLiteOpenHelper.Factory, migrationContainer: androidx.room.RoomDatabase.MigrationContainer, callbacks: java.util.List<any>, allowMainThreadQueries: boolean, journalMode: androidx.room.RoomDatabase.JournalMode, queryExecutor: java.util.concurrent.Executor, transactionExecutor: java.util.concurrent.Executor, multiInstanceInvalidation: boolean, requireMigration: boolean, allowDestructiveMigrationOnDowngrade: boolean, migrationNotRequiredFrom: java.util.Set<java.lang.Integer>);
			/** @deprecated */
			public constructor(context: android.content.Context, name: string, sqliteOpenHelperFactory: androidx.sqlite.db.SupportSQLiteOpenHelper.Factory, migrationContainer: androidx.room.RoomDatabase.MigrationContainer, callbacks: java.util.List<any>, allowMainThreadQueries: boolean, journalMode: androidx.room.RoomDatabase.JournalMode, queryExecutor: java.util.concurrent.Executor, transactionExecutor: java.util.concurrent.Executor, multiInstanceInvalidation: boolean, requireMigration: boolean, allowDestructiveMigrationOnDowngrade: boolean, migrationNotRequiredFrom: java.util.Set<java.lang.Integer>, copyFromAssetPath: string, copyFromFile: java.io.File, copyFromInputStream: java.util.concurrent.Callable<java.io.InputStream>, prepackagedDatabaseCallback: androidx.room.RoomDatabase.PrepackagedDatabaseCallback, typeConverters: java.util.List<any>, autoMigrationSpecs: java.util.List<any>);
			public isMigrationRequired(fromVersion: number, toVersion: number): boolean;
			/** @deprecated */
			public isMigrationRequiredFrom(version: number): boolean;
			/** @deprecated */
			public constructor(context: android.content.Context, name: string, sqliteOpenHelperFactory: androidx.sqlite.db.SupportSQLiteOpenHelper.Factory, migrationContainer: androidx.room.RoomDatabase.MigrationContainer, callbacks: java.util.List<any>, allowMainThreadQueries: boolean, journalMode: androidx.room.RoomDatabase.JournalMode, queryExecutor: java.util.concurrent.Executor, transactionExecutor: java.util.concurrent.Executor, multiInstanceInvalidation: boolean, requireMigration: boolean, allowDestructiveMigrationOnDowngrade: boolean, migrationNotRequiredFrom: java.util.Set<java.lang.Integer>, copyFromAssetPath: string, copyFromFile: java.io.File);
			/** @deprecated */
			public constructor(context: android.content.Context, name: string, sqliteOpenHelperFactory: androidx.sqlite.db.SupportSQLiteOpenHelper.Factory, migrationContainer: androidx.room.RoomDatabase.MigrationContainer, callbacks: java.util.List<any>, allowMainThreadQueries: boolean, journalMode: androidx.room.RoomDatabase.JournalMode, queryExecutor: java.util.concurrent.Executor, transactionExecutor: java.util.concurrent.Executor, multiInstanceInvalidation: boolean, requireMigration: boolean, allowDestructiveMigrationOnDowngrade: boolean, migrationNotRequiredFrom: java.util.Set<java.lang.Integer>, copyFromAssetPath: string, copyFromFile: java.io.File, copyFromInputStream: java.util.concurrent.Callable<java.io.InputStream>, prepackagedDatabaseCallback: androidx.room.RoomDatabase.PrepackagedDatabaseCallback, typeConverters: java.util.List<any>);
		}
	}
}

declare module androidx {
	export module room {
		export class DelegatingOpenHelper extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.DelegatingOpenHelper>;
			/**
			 * Constructs a new instance of the androidx.room.DelegatingOpenHelper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getDelegate(): androidx.sqlite.db.SupportSQLiteOpenHelper;
			});
			public constructor();
			public getDelegate(): androidx.sqlite.db.SupportSQLiteOpenHelper;
		}
	}
}

declare module androidx {
	export module room {
		export abstract class EntityDeletionOrUpdateAdapter<T>  extends androidx.room.SharedSQLiteStatement {
			public static class: java.lang.Class<androidx.room.EntityDeletionOrUpdateAdapter<any>>;
			public handle(entity: any): number;
			public handleMultiple(entities: any[]): number;
			public bind(param0: androidx.sqlite.db.SupportSQLiteStatement, param1: any): void;
			public createQuery(): string;
			public handleMultiple(entities: java.lang.Iterable<any>): number;
			public constructor(database: androidx.room.RoomDatabase);
		}
	}
}

declare module androidx {
	export module room {
		export abstract class EntityInsertionAdapter<T>  extends androidx.room.SharedSQLiteStatement {
			public static class: java.lang.Class<androidx.room.EntityInsertionAdapter<any>>;
			public insertAndReturnIdsArrayBox(entities: any[]): java.lang.Long[];
			public insert(entities: any[]): void;
			public insertAndReturnIdsList(entities: java.util.Collection<any>): java.util.List<java.lang.Long>;
			public bind(param0: androidx.sqlite.db.SupportSQLiteStatement, param1: any): void;
			public insertAndReturnIdsArray(entities: java.util.Collection<any>): number[];
			public insertAndReturnIdsArray(entities: any[]): number[];
			public insertAndReturnIdsArrayBox(entities: java.util.Collection<any>): java.lang.Long[];
			public insert(entities: java.lang.Iterable<any>): void;
			public insertAndReturnIdsList(entities: any[]): java.util.List<java.lang.Long>;
			public constructor(database: androidx.room.RoomDatabase);
			public insert(entity: any): void;
			public insertAndReturnId(entity: any): number;
		}
	}
}

declare module androidx {
	export module room {
		export class EntityUpsertionAdapter<T>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.EntityUpsertionAdapter<any>>;
			public constructor(insertionAdapter: androidx.room.EntityInsertionAdapter<T>, updateAdapter: androidx.room.EntityDeletionOrUpdateAdapter<T>);
			public upsert(entity: T): void;
			public upsertAndReturnIdsArray(entities: T[]): number[];
			public upsertAndReturnIdsArrayBox(entities: T[]): java.lang.Long[];
			public upsert(entities: java.lang.Iterable<any>): void;
			public upsert(entities: T[]): void;
			public upsertAndReturnIdsArrayBox(entities: java.util.Collection<any>): java.lang.Long[];
			public upsertAndReturnIdsList(entities: T[]): java.util.List<java.lang.Long>;
			public upsertAndReturnIdsList(entities: java.util.Collection<any>): java.util.List<java.lang.Long>;
			public upsertAndReturnId(entity: T): number;
			public upsertAndReturnIdsArray(entities: java.util.Collection<any>): number[];
		}
	}
}

declare module androidx {
	export module room {
		export class ExperimentalRoomApi extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.room.ExperimentalRoomApi>;
			/**
			 * Constructs a new instance of the androidx.room.ExperimentalRoomApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module room {
		export class IMultiInstanceInvalidationCallback extends java.lang.Object implements android.os.IInterface {
			public static class: java.lang.Class<androidx.room.IMultiInstanceInvalidationCallback>;
			/**
			 * Constructs a new instance of the androidx.room.IMultiInstanceInvalidationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onInvalidation(param0: string[]): void;
				"<clinit>"(): void;
				asBinder(): android.os.IBinder;
			});
			public constructor();
			public static DESCRIPTOR: string;
			public asBinder(): android.os.IBinder;
			public onInvalidation(param0: string[]): void;
		}
		export module IMultiInstanceInvalidationCallback {
			export class Default extends java.lang.Object implements androidx.room.IMultiInstanceInvalidationCallback {
				public static class: java.lang.Class<androidx.room.IMultiInstanceInvalidationCallback.Default>;
				public onInvalidation(tables: string[]): void;
				public asBinder(): android.os.IBinder;
				public onInvalidation(param0: string[]): void;
				public constructor();
			}
			export abstract class Stub extends android.os.Binder implements androidx.room.IMultiInstanceInvalidationCallback {
				public static class: java.lang.Class<androidx.room.IMultiInstanceInvalidationCallback.Stub>;
				public dump(fd: java.io.FileDescriptor, args: string[]): void;
				public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
				public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
				public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
				public isBinderAlive(): boolean;
				public asBinder(): android.os.IBinder;
				public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
				public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
				public queryLocalInterface(param0: string): android.os.IInterface;
				public onInvalidation(param0: string[]): void;
				public constructor();
				public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
				public static asInterface(obj: android.os.IBinder): androidx.room.IMultiInstanceInvalidationCallback;
				public onTransact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
				public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
				public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, args: string[]): void;
				public dump(param0: java.io.FileDescriptor, param1: string[]): void;
				public dumpAsync(fd: java.io.FileDescriptor, args: string[]): void;
				public getInterfaceDescriptor(): string;
				public pingBinder(): boolean;
				public queryLocalInterface(descriptor: string): android.os.IInterface;
			}
			export module Stub {
				export class Proxy extends java.lang.Object implements androidx.room.IMultiInstanceInvalidationCallback {
					public static class: java.lang.Class<androidx.room.IMultiInstanceInvalidationCallback.Stub.Proxy>;
					public getInterfaceDescriptor(): string;
					public onInvalidation(param0: string[]): void;
					public onInvalidation(tables: string[]): void;
					public asBinder(): android.os.IBinder;
				}
			}
		}
	}
}

declare module androidx {
	export module room {
		export class IMultiInstanceInvalidationService extends java.lang.Object implements android.os.IInterface {
			public static class: java.lang.Class<androidx.room.IMultiInstanceInvalidationService>;
			/**
			 * Constructs a new instance of the androidx.room.IMultiInstanceInvalidationService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				registerCallback(param0: androidx.room.IMultiInstanceInvalidationCallback, param1: string): number;
				unregisterCallback(param0: androidx.room.IMultiInstanceInvalidationCallback, param1: number): void;
				broadcastInvalidation(param0: number, param1: string[]): void;
				"<clinit>"(): void;
				asBinder(): android.os.IBinder;
			});
			public constructor();
			public static DESCRIPTOR: string;
			public asBinder(): android.os.IBinder;
			public broadcastInvalidation(param0: number, param1: string[]): void;
			public registerCallback(param0: androidx.room.IMultiInstanceInvalidationCallback, param1: string): number;
			public unregisterCallback(param0: androidx.room.IMultiInstanceInvalidationCallback, param1: number): void;
		}
		export module IMultiInstanceInvalidationService {
			export class Default extends java.lang.Object implements androidx.room.IMultiInstanceInvalidationService {
				public static class: java.lang.Class<androidx.room.IMultiInstanceInvalidationService.Default>;
				public broadcastInvalidation(clientId: number, tables: string[]): void;
				public registerCallback(param0: androidx.room.IMultiInstanceInvalidationCallback, param1: string): number;
				public registerCallback(callback: androidx.room.IMultiInstanceInvalidationCallback, name: string): number;
				public broadcastInvalidation(param0: number, param1: string[]): void;
				public asBinder(): android.os.IBinder;
				public unregisterCallback(callback: androidx.room.IMultiInstanceInvalidationCallback, clientId: number): void;
				public unregisterCallback(param0: androidx.room.IMultiInstanceInvalidationCallback, param1: number): void;
				public constructor();
			}
			export abstract class Stub extends android.os.Binder implements androidx.room.IMultiInstanceInvalidationService {
				public static class: java.lang.Class<androidx.room.IMultiInstanceInvalidationService.Stub>;
				public dump(fd: java.io.FileDescriptor, args: string[]): void;
				public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
				public static asInterface(obj: android.os.IBinder): androidx.room.IMultiInstanceInvalidationService;
				public registerCallback(param0: androidx.room.IMultiInstanceInvalidationCallback, param1: string): number;
				public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
				public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
				public isBinderAlive(): boolean;
				public asBinder(): android.os.IBinder;
				public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
				public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
				public unregisterCallback(param0: androidx.room.IMultiInstanceInvalidationCallback, param1: number): void;
				public queryLocalInterface(param0: string): android.os.IInterface;
				public constructor();
				public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
				public onTransact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
				public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
				public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, args: string[]): void;
				public dump(param0: java.io.FileDescriptor, param1: string[]): void;
				public dumpAsync(fd: java.io.FileDescriptor, args: string[]): void;
				public broadcastInvalidation(param0: number, param1: string[]): void;
				public getInterfaceDescriptor(): string;
				public pingBinder(): boolean;
				public queryLocalInterface(descriptor: string): android.os.IInterface;
			}
			export module Stub {
				export class Proxy extends java.lang.Object implements androidx.room.IMultiInstanceInvalidationService {
					public static class: java.lang.Class<androidx.room.IMultiInstanceInvalidationService.Stub.Proxy>;
					public unregisterCallback(param0: androidx.room.IMultiInstanceInvalidationCallback, param1: number): void;
					public registerCallback(param0: androidx.room.IMultiInstanceInvalidationCallback, param1: string): number;
					public registerCallback(callback: androidx.room.IMultiInstanceInvalidationCallback, name: string): number;
					public broadcastInvalidation(param0: number, param1: string[]): void;
					public getInterfaceDescriptor(): string;
					public broadcastInvalidation(clientId: number, tables: string[]): void;
					public unregisterCallback(callback: androidx.room.IMultiInstanceInvalidationCallback, clientId: number): void;
					public asBinder(): android.os.IBinder;
				}
			}
		}
	}
}

declare module androidx {
	export module room {
		export class InvalidationLiveDataContainer extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.InvalidationLiveDataContainer>;
			public getLiveDataSet$room_runtime_release(): java.util.Set<androidx.lifecycle.LiveData<any>>;
			public create(tableNames: string[], inTransaction: boolean, computeFunction: java.util.concurrent.Callable<any>): androidx.lifecycle.LiveData;
			public constructor(database: androidx.room.RoomDatabase);
			public onActive(liveData: androidx.lifecycle.LiveData<any>): void;
			public onInactive(liveData: androidx.lifecycle.LiveData<any>): void;
		}
	}
}

declare module androidx {
	export module room {
		export class InvalidationTracker extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.InvalidationTracker>;
			public refreshRunnable: java.lang.Runnable;
			public static RESET_UPDATED_TABLES_SQL: string;
			public static SELECT_UPDATED_TABLES_SQL: string;
			public startMultiInstanceInvalidation$room_runtime_release(context: android.content.Context, name: string, serviceIntent: android.content.Intent): void;
			public stopMultiInstanceInvalidation$room_runtime_release(): void;
			public constructor(database: androidx.room.RoomDatabase, shadowTablesMap: java.util.Map<string,string>, viewTables: java.util.Map<string,java.util.Set<string>>, ...tableNames: string[]);
			public getTableIdLookup$room_runtime_release(): java.util.Map<string,java.lang.Integer>;
			public syncTriggers$room_runtime_release(): void;
			public addObserver(observer: androidx.room.InvalidationTracker.Observer): void;
			public notifyObserversByTableNames(...tables: string[]): void;
			public getPendingRefresh(): java.util.concurrent.atomic.AtomicBoolean;
			public refreshVersionsAsync(): void;
			public getDatabase$room_runtime_release(): androidx.room.RoomDatabase;
			public setAutoCloser$room_runtime_release(autoCloser: androidx.room.AutoCloser): void;
			public setCleanupStatement$room_runtime_release(_set_: androidx.sqlite.db.SupportSQLiteStatement): void;
			public getObserverMap$room_runtime_release(): androidx.arch.core.internal.SafeIterableMap<androidx.room.InvalidationTracker.Observer,androidx.room.InvalidationTracker.ObserverWrapper>;
			/** @deprecated */
			public createLiveData(tableNames: string[], computeFunction: java.util.concurrent.Callable<any>): androidx.lifecycle.LiveData;
			public constructor(database: androidx.room.RoomDatabase, ...tableNames: string[]);
			public createLiveData(tableNames: string[], inTransaction: boolean, computeFunction: java.util.concurrent.Callable<any>): androidx.lifecycle.LiveData;
			public getTablesNames$room_runtime_release(): string[];
			public getCleanupStatement$room_runtime_release(): androidx.sqlite.db.SupportSQLiteStatement;
			public removeObserver(observer: androidx.room.InvalidationTracker.Observer): void;
			public ensureInitialization$room_runtime_release(): boolean;
			public addWeakObserver(observer: androidx.room.InvalidationTracker.Observer): void;
			public syncTriggers$room_runtime_release(database: androidx.sqlite.db.SupportSQLiteDatabase): void;
			public refreshVersionsSync(): void;
			public internalInit$room_runtime_release(database: androidx.sqlite.db.SupportSQLiteDatabase): void;
		}
		export module InvalidationTracker {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.InvalidationTracker.Companion>;
				public getTriggerName$room_runtime_release(tableName: string, triggerType: string): string;
				public beginTransactionInternal$room_runtime_release(database: androidx.sqlite.db.SupportSQLiteDatabase): void;
			}
			export class ObservedTableTracker extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.InvalidationTracker.ObservedTableTracker>;
				public static NO_OP: number;
				public static ADD: number;
				public static REMOVE: number;
				public constructor(tableCount: number);
				public onRemoved(...tableIds: number[]): boolean;
				public getNeedsSync(): boolean;
				public resetTriggerState(): void;
				public getTablesToSync(): number[];
				public setNeedsSync(_set_: boolean): void;
				public getTableObservers(): number[];
				public onAdded(...tableIds: number[]): boolean;
			}
			export module ObservedTableTracker {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.room.InvalidationTracker.ObservedTableTracker.Companion>;
				}
			}
			export abstract class Observer extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.InvalidationTracker.Observer>;
				public onInvalidated(param0: java.util.Set<string>): void;
				public getTables$room_runtime_release(): string[];
				public constructor(tables: string[]);
				public constructor(firstTable: string, ...rest: string[]);
				public isRemote$room_runtime_release(): boolean;
			}
			export class ObserverWrapper extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.InvalidationTracker.ObserverWrapper>;
				public notifyByTableNames$room_runtime_release(tables: string[]): void;
				public getTableIds$room_runtime_release(): number[];
				public getObserver$room_runtime_release(): androidx.room.InvalidationTracker.Observer;
				public constructor(observer: androidx.room.InvalidationTracker.Observer, tableIds: number[], tableNames: string[]);
				public notifyByTableInvalidStatus$room_runtime_release(invalidatedTablesIds: java.util.Set<java.lang.Integer>): void;
			}
			export class WeakObserver extends androidx.room.InvalidationTracker.Observer {
				public static class: java.lang.Class<androidx.room.InvalidationTracker.WeakObserver>;
				public getTracker(): androidx.room.InvalidationTracker;
				public onInvalidated(param0: java.util.Set<string>): void;
				public constructor(tables: string[]);
				public onInvalidated(tables: java.util.Set<string>): void;
				public constructor(firstTable: string, ...rest: string[]);
				public constructor(tracker: androidx.room.InvalidationTracker, delegate: androidx.room.InvalidationTracker.Observer);
				public getDelegateRef(): java.lang.ref.WeakReference<androidx.room.InvalidationTracker.Observer>;
			}
		}
	}
}

declare module androidx {
	export module room {
		export class MultiInstanceInvalidationClient extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.MultiInstanceInvalidationClient>;
			public observer: androidx.room.InvalidationTracker.Observer;
			public getStopped(): java.util.concurrent.atomic.AtomicBoolean;
			public constructor(context: android.content.Context, name: string, serviceIntent: android.content.Intent, invalidationTracker: androidx.room.InvalidationTracker, executor: java.util.concurrent.Executor);
			public setObserver(_set_: androidx.room.InvalidationTracker.Observer): void;
			public getInvalidationTracker(): androidx.room.InvalidationTracker;
			public getExecutor(): java.util.concurrent.Executor;
			public getCallback(): androidx.room.IMultiInstanceInvalidationCallback;
			public setClientId(_set_: number): void;
			public setService(_set_: androidx.room.IMultiInstanceInvalidationService): void;
			public getService(): androidx.room.IMultiInstanceInvalidationService;
			public getClientId(): number;
			public getServiceConnection(): android.content.ServiceConnection;
			public getName(): string;
			public getSetUpRunnable(): java.lang.Runnable;
			public getRemoveObserverRunnable(): java.lang.Runnable;
			public stop(): void;
			public getObserver(): androidx.room.InvalidationTracker.Observer;
		}
	}
}

declare module androidx {
	export module room {
		export class MultiInstanceInvalidationService extends android.app.Service {
			public static class: java.lang.Class<androidx.room.MultiInstanceInvalidationService>;
			public getCallbackList$room_runtime_release(): android.os.RemoteCallbackList<androidx.room.IMultiInstanceInvalidationCallback>;
			public onTrimMemory(param0: number): void;
			public onBind(param0: android.content.Intent): android.os.IBinder;
			public onTrimMemory(level: number): void;
			public getMaxClientId$room_runtime_release(): number;
			public setMaxClientId$room_runtime_release(_set_: number): void;
			public constructor();
			public constructor(base: android.content.Context);
			public onBind(intent: android.content.Intent): android.os.IBinder;
			public getClientNames$room_runtime_release(): java.util.Map<java.lang.Integer,string>;
		}
	}
}

declare module androidx {
	export module room {
		export class QueryInterceptorDatabase extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.QueryInterceptorDatabase>;
			public isExecPerConnectionSQLSupported(): boolean;
			public isReadOnly(): boolean;
			public insert(table: string, conflictAlgorithm: number, values: android.content.ContentValues): number;
			public yieldIfContendedSafely(sleepAfterYieldDelayMillis: number): boolean;
			public setLocale(locale: java.util.Locale): void;
			public beginTransactionNonExclusive(): void;
			public getPageSize(): number;
			public setPageSize(_set_: number): void;
			public inTransaction(): boolean;
			public query(query: androidx.sqlite.db.SupportSQLiteQuery): android.database.Cursor;
			public getAttachedDbs(): java.util.List<android.util.Pair<string,string>>;
			public getVersion(): number;
			public enableWriteAheadLogging(): boolean;
			public endTransaction(): void;
			public execPerConnectionSQL(sql: string, bindArgs: any[]): void;
			public isOpen(): boolean;
			public setForeignKeyConstraintsEnabled(enabled: boolean): void;
			public setMaximumSize(numBytes: number): number;
			public setTransactionSuccessful(): void;
			public close(): void;
			public beginTransactionWithListener(transactionListener: android.database.sqlite.SQLiteTransactionListener): void;
			public update(table: string, conflictAlgorithm: number, values: android.content.ContentValues, whereClause: string, whereArgs: any[]): number;
			public beginTransactionWithListenerNonExclusive(transactionListener: android.database.sqlite.SQLiteTransactionListener): void;
			public isWriteAheadLoggingEnabled(): boolean;
			public beginTransaction(): void;
			public disableWriteAheadLogging(): void;
			public query(query: string): android.database.Cursor;
			public getMaximumSize(): number;
			public setMaxSqlCacheSize(cacheSize: number): void;
			public compileStatement(sql: string): androidx.sqlite.db.SupportSQLiteStatement;
			public query(query: string, bindArgs: any[]): android.database.Cursor;
			public isDbLockedByCurrentThread(): boolean;
			public constructor(delegate: androidx.sqlite.db.SupportSQLiteDatabase, queryCallbackExecutor: java.util.concurrent.Executor, queryCallback: androidx.room.RoomDatabase.QueryCallback);
			public delete(table: string, whereClause: string, whereArgs: any[]): number;
			public needUpgrade(newVersion: number): boolean;
			public getPath(): string;
			public execSQL(sql: string): void;
			public setVersion(_set_: number): void;
			public query(query: androidx.sqlite.db.SupportSQLiteQuery, cancellationSignal: android.os.CancellationSignal): android.database.Cursor;
			public execSQL(sql: string, bindArgs: any[]): void;
			public isDatabaseIntegrityOk(): boolean;
			public yieldIfContendedSafely(): boolean;
		}
	}
}

declare module androidx {
	export module room {
		export class QueryInterceptorOpenHelper extends java.lang.Object implements androidx.room.DelegatingOpenHelper {
			public static class: java.lang.Class<androidx.room.QueryInterceptorOpenHelper>;
			public setWriteAheadLoggingEnabled(enabled: boolean): void;
			public getDatabaseName(): string;
			public getDelegate(): androidx.sqlite.db.SupportSQLiteOpenHelper;
			public close(): void;
			public getReadableDatabase(): androidx.sqlite.db.SupportSQLiteDatabase;
			public constructor(delegate: androidx.sqlite.db.SupportSQLiteOpenHelper, queryCallbackExecutor: java.util.concurrent.Executor, queryCallback: androidx.room.RoomDatabase.QueryCallback);
			public getWritableDatabase(): androidx.sqlite.db.SupportSQLiteDatabase;
		}
	}
}

declare module androidx {
	export module room {
		export class QueryInterceptorOpenHelperFactory extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.QueryInterceptorOpenHelperFactory>;
			public create(configuration: androidx.sqlite.db.SupportSQLiteOpenHelper.Configuration): androidx.sqlite.db.SupportSQLiteOpenHelper;
			public constructor(delegate: androidx.sqlite.db.SupportSQLiteOpenHelper.Factory, queryCallbackExecutor: java.util.concurrent.Executor, queryCallback: androidx.room.RoomDatabase.QueryCallback);
		}
	}
}

declare module androidx {
	export module room {
		export class QueryInterceptorProgram extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.QueryInterceptorProgram>;
			public bindNull(index: number): void;
			public bindLong(index: number, value: number): void;
			public bindBlob(index: number, value: number[]): void;
			public getBindArgsCache$room_runtime_release(): java.util.List<any>;
			public bindDouble(index: number, value: number): void;
			public bindString(index: number, value: string): void;
			public clearBindings(): void;
			public constructor();
			public close(): void;
		}
	}
}

declare module androidx {
	export module room {
		export class QueryInterceptorStatement extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.QueryInterceptorStatement>;
			public bindNull(index: number): void;
			public bindLong(index: number, value: number): void;
			public bindBlob(index: number, value: number[]): void;
			public clearBindings(): void;
			public simpleQueryForString(): string;
			public execute(): void;
			public bindDouble(index: number, value: number): void;
			public bindString(index: number, value: string): void;
			public executeInsert(): number;
			public simpleQueryForLong(): number;
			public close(): void;
			public executeUpdateDelete(): number;
			public constructor(delegate: androidx.sqlite.db.SupportSQLiteStatement, sqlStatement: string, queryCallbackExecutor: java.util.concurrent.Executor, queryCallback: androidx.room.RoomDatabase.QueryCallback);
		}
	}
}

declare module androidx {
	export module room {
		export class Room extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.Room>;
			public static INSTANCE: androidx.room.Room;
			public static LOG_TAG: string;
			public static MASTER_TABLE_NAME: string;
			public static databaseBuilder(context: android.content.Context, klass: java.lang.Class<any>, name: string): androidx.room.RoomDatabase.Builder<any>;
			public static getGeneratedImplementation(klass: java.lang.Class<any>, suffix: string): any;
			public static inMemoryDatabaseBuilder(context: android.content.Context, klass: java.lang.Class<any>): androidx.room.RoomDatabase.Builder<any>;
		}
	}
}

declare module androidx {
	export module room {
		export abstract class RoomDatabase extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.RoomDatabase>;
			public mDatabase: androidx.sqlite.db.SupportSQLiteDatabase;
			public mCallbacks: java.util.List<any>;
			public static MAX_BIND_PARAMETER_CNT: number;
			public internalInitInvalidationTracker(db: androidx.sqlite.db.SupportSQLiteDatabase): void;
			public isMainThread$room_runtime_release(): boolean;
			public inTransaction(): boolean;
			public createInvalidationTracker(): androidx.room.InvalidationTracker;
			/** @deprecated */
			public setTransactionSuccessful(): void;
			public init(configuration: androidx.room.DatabaseConfiguration): void;
			public query(query: androidx.sqlite.db.SupportSQLiteQuery): android.database.Cursor;
			public query(query: string, args: any[]): android.database.Cursor;
			public setAutoMigrationSpecs(_set_: java.util.Map<java.lang.Class<any>,androidx.room.migration.AutoMigrationSpec>): void;
			public isOpen(): boolean;
			public runInTransaction(body: java.lang.Runnable): void;
			/** @deprecated */
			public beginTransaction(): void;
			public getTypeConverter(klass: java.lang.Class<any>): any;
			/** @deprecated */
			public endTransaction(): void;
			public getSuspendingTransactionId(): java.lang.ThreadLocal<java.lang.Integer>;
			public getTransactionExecutor(): java.util.concurrent.Executor;
			public getQueryExecutor(): java.util.concurrent.Executor;
			public assertNotMainThread(): void;
			public close(): void;
			public assertNotSuspendingTransaction(): void;
			public getAutoMigrationSpecs(): java.util.Map<java.lang.Class<any>,androidx.room.migration.AutoMigrationSpec>;
			public getRequiredTypeConverters(): java.util.Map<java.lang.Class<any>,java.util.List<java.lang.Class<any>>>;
			public query(query: androidx.sqlite.db.SupportSQLiteQuery, signal: android.os.CancellationSignal): android.database.Cursor;
			public getOpenHelper(): androidx.sqlite.db.SupportSQLiteOpenHelper;
			public createOpenHelper(param0: androidx.room.DatabaseConfiguration): androidx.sqlite.db.SupportSQLiteOpenHelper;
			public getInvalidationTracker(): androidx.room.InvalidationTracker;
			public constructor();
			public compileStatement(sql: string): androidx.sqlite.db.SupportSQLiteStatement;
			public clearAllTables(): void;
			public runInTransaction(body: java.util.concurrent.Callable<any>): any;
			public getCloseLock$room_runtime_release(): java.util.concurrent.locks.Lock;
			public getBackingFieldMap(): java.util.Map<string,any>;
			public getRequiredAutoMigrationSpecs(): java.util.Set<java.lang.Class<any>>;
			public getAutoMigrations(autoMigrationSpecs: java.util.Map<java.lang.Class<any>,androidx.room.migration.AutoMigrationSpec>): java.util.List<androidx.room.migration.Migration>;
			public isOpenInternal(): boolean;
		}
		export module RoomDatabase {
			export class Builder<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.RoomDatabase.Builder<any>>;
				public fallbackToDestructiveMigrationOnDowngrade(): androidx.room.RoomDatabase.Builder<T>;
				public allowMainThreadQueries(): androidx.room.RoomDatabase.Builder<T>;
				public addMigrations(...migrations: androidx.room.migration.Migration[]): androidx.room.RoomDatabase.Builder<T>;
				public constructor(context: android.content.Context, klass: java.lang.Class<T>, name: string);
				public createFromInputStream(inputStreamCallable: java.util.concurrent.Callable<java.io.InputStream>, callback: androidx.room.RoomDatabase.PrepackagedDatabaseCallback): androidx.room.RoomDatabase.Builder<T>;
				public setQueryExecutor(executor: java.util.concurrent.Executor): androidx.room.RoomDatabase.Builder<T>;
				public fallbackToDestructiveMigration(): androidx.room.RoomDatabase.Builder<T>;
				public setQueryCallback(queryCallback: androidx.room.RoomDatabase.QueryCallback, executor: java.util.concurrent.Executor): androidx.room.RoomDatabase.Builder<T>;
				public createFromInputStream(inputStreamCallable: java.util.concurrent.Callable<java.io.InputStream>): androidx.room.RoomDatabase.Builder<T>;
				public setJournalMode(journalMode: androidx.room.RoomDatabase.JournalMode): androidx.room.RoomDatabase.Builder<T>;
				public fallbackToDestructiveMigrationFrom(...startVersions: number[]): androidx.room.RoomDatabase.Builder<T>;
				public createFromFile(databaseFile: java.io.File, callback: androidx.room.RoomDatabase.PrepackagedDatabaseCallback): androidx.room.RoomDatabase.Builder<T>;
				public enableMultiInstanceInvalidation(): androidx.room.RoomDatabase.Builder<T>;
				public setTransactionExecutor(executor: java.util.concurrent.Executor): androidx.room.RoomDatabase.Builder<T>;
				public addCallback(callback: androidx.room.RoomDatabase.Callback): androidx.room.RoomDatabase.Builder<T>;
				public addTypeConverter(typeConverter: any): androidx.room.RoomDatabase.Builder<T>;
				public build(): T;
				public setAutoCloseTimeout(autoCloseTimeout: number, param1: java.util.concurrent.TimeUnit): androidx.room.RoomDatabase.Builder<T>;
				public createFromAsset(databaseFilePath: string, callback: androidx.room.RoomDatabase.PrepackagedDatabaseCallback): androidx.room.RoomDatabase.Builder<T>;
				public addAutoMigrationSpec(autoMigrationSpec: androidx.room.migration.AutoMigrationSpec): androidx.room.RoomDatabase.Builder<T>;
				public createFromAsset(databaseFilePath: string): androidx.room.RoomDatabase.Builder<T>;
				public openHelperFactory(factory: androidx.sqlite.db.SupportSQLiteOpenHelper.Factory): androidx.room.RoomDatabase.Builder<T>;
				public createFromFile(databaseFile: java.io.File): androidx.room.RoomDatabase.Builder<T>;
				public setMultiInstanceInvalidationServiceIntent(invalidationServiceIntent: android.content.Intent): androidx.room.RoomDatabase.Builder<T>;
			}
			export abstract class Callback extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.RoomDatabase.Callback>;
				public onOpen(db: androidx.sqlite.db.SupportSQLiteDatabase): void;
				public onDestructiveMigration(db: androidx.sqlite.db.SupportSQLiteDatabase): void;
				public onCreate(db: androidx.sqlite.db.SupportSQLiteDatabase): void;
				public constructor();
			}
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.RoomDatabase.Companion>;
			}
			export class JournalMode {
				public static class: java.lang.Class<androidx.room.RoomDatabase.JournalMode>;
				public static AUTOMATIC: androidx.room.RoomDatabase.JournalMode;
				public static TRUNCATE: androidx.room.RoomDatabase.JournalMode;
				public static WRITE_AHEAD_LOGGING: androidx.room.RoomDatabase.JournalMode;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): androidx.room.RoomDatabase.JournalMode[];
				public static valueOf(value: string): androidx.room.RoomDatabase.JournalMode;
				public resolve$room_runtime_release(context: android.content.Context): androidx.room.RoomDatabase.JournalMode;
			}
			export class MigrationContainer extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.RoomDatabase.MigrationContainer>;
				public getMigrations(): java.util.Map<java.lang.Integer,java.util.Map<java.lang.Integer,androidx.room.migration.Migration>>;
				public contains(startVersion: number, endVersion: number): boolean;
				public findMigrationPath(start: number, end: number): java.util.List<androidx.room.migration.Migration>;
				public addMigrations(...migrations: androidx.room.migration.Migration[]): void;
				public addMigrations(migrations: java.util.List<any>): void;
				public constructor();
			}
			export abstract class PrepackagedDatabaseCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.RoomDatabase.PrepackagedDatabaseCallback>;
				public onOpenPrepackagedDatabase(db: androidx.sqlite.db.SupportSQLiteDatabase): void;
				public constructor();
			}
			export class QueryCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.RoomDatabase.QueryCallback>;
				/**
				 * Constructs a new instance of the androidx.room.RoomDatabase$QueryCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onQuery(param0: string, param1: java.util.List<any>): void;
				});
				public constructor();
				public onQuery(param0: string, param1: java.util.List<any>): void;
			}
		}
	}
}

declare module androidx {
	export module room {
		export class RoomOpenHelper {
			public static class: java.lang.Class<androidx.room.RoomOpenHelper>;
			public onOpen(db: androidx.sqlite.db.SupportSQLiteDatabase): void;
			public onDowngrade(db: androidx.sqlite.db.SupportSQLiteDatabase, oldVersion: number, newVersion: number): void;
			public onUpgrade(db: androidx.sqlite.db.SupportSQLiteDatabase, oldVersion: number, newVersion: number): void;
			public onCreate(db: androidx.sqlite.db.SupportSQLiteDatabase): void;
			public constructor(configuration: androidx.room.DatabaseConfiguration, delegate: androidx.room.RoomOpenHelper.Delegate, legacyHash: string);
			public constructor(configuration: androidx.room.DatabaseConfiguration, delegate: androidx.room.RoomOpenHelper.Delegate, identityHash: string, legacyHash: string);
			public onConfigure(db: androidx.sqlite.db.SupportSQLiteDatabase): void;
		}
		export module RoomOpenHelper {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.RoomOpenHelper.Companion>;
				public hasRoomMasterTable$room_runtime_release(db: androidx.sqlite.db.SupportSQLiteDatabase): boolean;
				public hasEmptySchema$room_runtime_release(db: androidx.sqlite.db.SupportSQLiteDatabase): boolean;
			}
			export abstract class Delegate extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.RoomOpenHelper.Delegate>;
				public version: number;
				/** @deprecated */
				public validateMigration(db: androidx.sqlite.db.SupportSQLiteDatabase): void;
				public onPostMigrate(db: androidx.sqlite.db.SupportSQLiteDatabase): void;
				public constructor(version: number);
				public onOpen(param0: androidx.sqlite.db.SupportSQLiteDatabase): void;
				public onValidateSchema(db: androidx.sqlite.db.SupportSQLiteDatabase): androidx.room.RoomOpenHelper.ValidationResult;
				public dropAllTables(param0: androidx.sqlite.db.SupportSQLiteDatabase): void;
				public onCreate(param0: androidx.sqlite.db.SupportSQLiteDatabase): void;
				public createAllTables(param0: androidx.sqlite.db.SupportSQLiteDatabase): void;
				public onPreMigrate(db: androidx.sqlite.db.SupportSQLiteDatabase): void;
			}
			export class ValidationResult extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.RoomOpenHelper.ValidationResult>;
				public isValid: boolean;
				public expectedFoundMsg: string;
				public constructor(isValid: boolean, expectedFoundMsg: string);
			}
		}
	}
}

declare module androidx {
	export module room {
		export class RoomSQLiteQuery extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.RoomSQLiteQuery>;
			public longBindings: number[];
			public doubleBindings: number[];
			public stringBindings: string[];
			public blobBindings: number[][];
			public static POOL_LIMIT: number;
			public static DESIRED_POOL_SIZE: number;
			public static queryPool: java.util.TreeMap<java.lang.Integer,androidx.room.RoomSQLiteQuery>;
			public bindNull(index: number): void;
			public bindTo(statement: androidx.sqlite.db.SupportSQLiteProgram): void;
			public bindLong(index: number, value: number): void;
			public bindBlob(index: number, value: number[]): void;
			public static acquire(query: string, argumentCount: number): androidx.room.RoomSQLiteQuery;
			public static copyFrom(supportSQLiteQuery: androidx.sqlite.db.SupportSQLiteQuery): androidx.room.RoomSQLiteQuery;
			public clearBindings(): void;
			public init(query: string, initArgCount: number): void;
			public getCapacity(): number;
			public copyArgumentsFrom(other: androidx.room.RoomSQLiteQuery): void;
			public bindDouble(index: number, value: number): void;
			public bindString(index: number, value: string): void;
			public getArgCount(): number;
			public getSql(): string;
			public close(): void;
			public release(): void;
		}
		export module RoomSQLiteQuery {
			export class Binding extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.room.RoomSQLiteQuery.Binding>;
				/**
				 * Constructs a new instance of the androidx.room.RoomSQLiteQuery$Binding interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.RoomSQLiteQuery.Companion>;
				public copyFrom(supportSQLiteQuery: androidx.sqlite.db.SupportSQLiteQuery): androidx.room.RoomSQLiteQuery;
				public prunePoolLocked$room_runtime_release(): void;
				public acquire(query: string, argumentCount: number): androidx.room.RoomSQLiteQuery;
			}
		}
	}
}

declare module androidx {
	export module room {
		export class RoomTrackingLiveData<T>  extends androidx.lifecycle.LiveData<any> {
			public static class: java.lang.Class<androidx.room.RoomTrackingLiveData<any>>;
			public onActive(): void;
			public getRefreshRunnable(): java.lang.Runnable;
			public getRegisteredObserver(): java.util.concurrent.atomic.AtomicBoolean;
			public constructor();
			public constructor(param0: any);
			public getComputing(): java.util.concurrent.atomic.AtomicBoolean;
			public onInactive(): void;
			public getDatabase(): androidx.room.RoomDatabase;
			public getComputeFunction(): java.util.concurrent.Callable<any>;
			public getInvalidationRunnable(): java.lang.Runnable;
			public getInvalid(): java.util.concurrent.atomic.AtomicBoolean;
			public constructor(database: androidx.room.RoomDatabase, container: androidx.room.InvalidationLiveDataContainer, inTransaction: boolean, computeFunction: java.util.concurrent.Callable<any>, tableNames: string[]);
			public getQueryExecutor(): java.util.concurrent.Executor;
			public getInTransaction(): boolean;
			public getObserver(): androidx.room.InvalidationTracker.Observer;
		}
	}
}

declare module androidx {
	export module room {
		export class SQLiteCopyOpenHelper extends java.lang.Object implements androidx.room.DelegatingOpenHelper {
			public static class: java.lang.Class<androidx.room.SQLiteCopyOpenHelper>;
			public constructor(context: android.content.Context, copyFromAssetPath: string, copyFromFile: java.io.File, copyFromInputStream: java.util.concurrent.Callable<java.io.InputStream>, databaseVersion: number, delegate: androidx.sqlite.db.SupportSQLiteOpenHelper);
			public setWriteAheadLoggingEnabled(enabled: boolean): void;
			public getDatabaseName(): string;
			public getDelegate(): androidx.sqlite.db.SupportSQLiteOpenHelper;
			public close(): void;
			public getReadableDatabase(): androidx.sqlite.db.SupportSQLiteDatabase;
			public getWritableDatabase(): androidx.sqlite.db.SupportSQLiteDatabase;
			public setDatabaseConfiguration(databaseConfiguration: androidx.room.DatabaseConfiguration): void;
		}
	}
}

declare module androidx {
	export module room {
		export class SQLiteCopyOpenHelperFactory extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.SQLiteCopyOpenHelperFactory>;
			public create(configuration: androidx.sqlite.db.SupportSQLiteOpenHelper.Configuration): androidx.sqlite.db.SupportSQLiteOpenHelper;
			public constructor(mCopyFromAssetPath: string, mCopyFromFile: java.io.File, mCopyFromInputStream: java.util.concurrent.Callable<java.io.InputStream>, mDelegate: androidx.sqlite.db.SupportSQLiteOpenHelper.Factory);
		}
	}
}

declare module androidx {
	export module room {
		export abstract class SharedSQLiteStatement extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.SharedSQLiteStatement>;
			public createQuery(): string;
			public assertNotMainThread(): void;
			public acquire(): androidx.sqlite.db.SupportSQLiteStatement;
			public constructor(database: androidx.room.RoomDatabase);
			public release(statement: androidx.sqlite.db.SupportSQLiteStatement): void;
		}
	}
}

declare module androidx {
	export module room {
		export class TransactionExecutor extends java.lang.Object implements java.util.concurrent.Executor {
			public static class: java.lang.Class<androidx.room.TransactionExecutor>;
			public scheduleNext(): void;
			public constructor(executor: java.util.concurrent.Executor);
			public execute(command: java.lang.Runnable): void;
			public execute(param0: java.lang.Runnable): void;
		}
	}
}

declare module androidx {
	export module room {
		export module migration {
			export class AutoMigrationSpec extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.migration.AutoMigrationSpec>;
				/**
				 * Constructs a new instance of the androidx.room.migration.AutoMigrationSpec interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPostMigrate(db: androidx.sqlite.db.SupportSQLiteDatabase): void;
				});
				public constructor();
				public onPostMigrate(db: androidx.sqlite.db.SupportSQLiteDatabase): void;
			}
		}
	}
}

declare module androidx {
	export module room {
		export module migration {
			export abstract class Migration extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.migration.Migration>;
				public startVersion: number;
				public endVersion: number;
				public constructor(startVersion: number, endVersion: number);
				public migrate(param0: androidx.sqlite.db.SupportSQLiteDatabase): void;
			}
		}
	}
}

declare module androidx {
	export module room {
		export module paging {
			export abstract class LimitOffsetDataSource<T>  extends androidx.paging.PositionalDataSource<any> {
				public static class: java.lang.Class<androidx.room.paging.LimitOffsetDataSource<any>>;
				public constructor(db: androidx.room.RoomDatabase, query: androidx.sqlite.db.SupportSQLiteQuery, inTransaction: boolean, registerObserverImmediately: boolean, ...tables: string[]);
				public constructor(db: androidx.room.RoomDatabase, query: androidx.room.RoomSQLiteQuery, inTransaction: boolean, ...tables: string[]);
				public isInvalid(): boolean;
				public loadRange(startPosition: number, loadCount: number): java.util.List<any>;
				public loadRange(params: androidx.paging.PositionalDataSource.LoadRangeParams, callback: androidx.paging.PositionalDataSource.LoadRangeCallback<any>): void;
				public countItems(): number;
				public constructor(db: androidx.room.RoomDatabase, query: androidx.room.RoomSQLiteQuery, inTransaction: boolean, registerObserverImmediately: boolean, ...tables: string[]);
				public convertRows(param0: android.database.Cursor): java.util.List<any>;
				public loadInitial(params: androidx.paging.PositionalDataSource.LoadInitialParams, callback: androidx.paging.PositionalDataSource.LoadInitialCallback<any>): void;
				public constructor(db: androidx.room.RoomDatabase, query: androidx.sqlite.db.SupportSQLiteQuery, inTransaction: boolean, ...tables: string[]);
			}
		}
	}
}

declare module androidx {
	export module room {
		export module util {
			export class CursorUtil extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.util.CursorUtil>;
				public static findColumnIndexBySuffix(columnNames: string[], name: string): number;
				public static useCursor($this$useCursor: android.database.Cursor, block: kotlin.jvm.functions.Function1): any;
				public static copyAndClose(c: android.database.Cursor): android.database.Cursor;
				public static getColumnIndex(c: android.database.Cursor, name: string): number;
				public static wrapMappedColumns(cursor: android.database.Cursor, columnNames: string[], mapping: number[]): android.database.Cursor;
				public static getColumnIndexOrThrow(c: android.database.Cursor, name: string): number;
			}
		}
	}
}

declare module androidx {
	export module room {
		export module util {
			export class DBUtil extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.util.DBUtil>;
				public static readVersion(databaseFile: java.io.File): number;
				public static dropFtsSyncTriggers(db: androidx.sqlite.db.SupportSQLiteDatabase): void;
				public static foreignKeyCheck(db: androidx.sqlite.db.SupportSQLiteDatabase, tableName: string): void;
				public static createCancellationSignal(): android.os.CancellationSignal;
				public static query(db: androidx.room.RoomDatabase, sqLiteQuery: androidx.sqlite.db.SupportSQLiteQuery, maybeCopy: boolean, signal: android.os.CancellationSignal): android.database.Cursor;
				/** @deprecated */
				public static query(db: androidx.room.RoomDatabase, sqLiteQuery: androidx.sqlite.db.SupportSQLiteQuery, maybeCopy: boolean): android.database.Cursor;
			}
		}
	}
}

declare module androidx {
	export module room {
		export module util {
			export class FileUtil extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.util.FileUtil>;
				public static copy(input: java.nio.channels.ReadableByteChannel, output: java.nio.channels.FileChannel): void;
			}
		}
	}
}

declare module androidx {
	export module room {
		export module util {
			export class FtsTableInfo extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.util.FtsTableInfo>;
				public name: string;
				public columns: java.util.Set<string>;
				public options: java.util.Set<string>;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public constructor(name: string, columns: java.util.Set<string>, createSql: string);
				public hashCode(): number;
				public static read(database: androidx.sqlite.db.SupportSQLiteDatabase, tableName: string): androidx.room.util.FtsTableInfo;
				public constructor(name: string, columns: java.util.Set<string>, options: java.util.Set<string>);
				public toString(): string;
				public static parseOptions(createStatement: string): java.util.Set<string>;
			}
			export module FtsTableInfo {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.room.util.FtsTableInfo.Companion>;
					public read(database: androidx.sqlite.db.SupportSQLiteDatabase, tableName: string): androidx.room.util.FtsTableInfo;
					public parseOptions(createStatement: string): java.util.Set<string>;
				}
			}
		}
	}
}

declare module androidx {
	export module room {
		export module util {
			export class RelationUtil extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.util.RelationUtil>;
				public static recursiveFetchHashMap(map: java.util.HashMap<any,any>, isRelationCollection: boolean, fetchBlock: kotlin.jvm.functions.Function1): void;
				public static recursiveFetchLongSparseArray(map: androidx.collection.LongSparseArray, isRelationCollection: boolean, fetchBlock: kotlin.jvm.functions.Function1): void;
				public static recursiveFetchArrayMap(map: androidx.collection.ArrayMap, isRelationCollection: boolean, fetchBlock: kotlin.jvm.functions.Function1): void;
			}
		}
	}
}

declare module androidx {
	export module room {
		export module util {
			export class StringUtil extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.util.StringUtil>;
				public static EMPTY_STRING_ARRAY: string[];
				public static joinIntoString(input: java.util.List<java.lang.Integer>): string;
				public static splitToIntList(input: string): java.util.List<java.lang.Integer>;
				public static newStringBuilder(): java.lang.StringBuilder;
				public static appendPlaceholders(builder: java.lang.StringBuilder, count: number): void;
			}
		}
	}
}

declare module androidx {
	export module room {
		export module util {
			export class TableInfo extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.util.TableInfo>;
				public name: string;
				public columns: java.util.Map<string,androidx.room.util.TableInfo.Column>;
				public foreignKeys: java.util.Set<androidx.room.util.TableInfo.ForeignKey>;
				public indices: java.util.Set<androidx.room.util.TableInfo.Index>;
				public static CREATED_FROM_UNKNOWN: number;
				public static CREATED_FROM_ENTITY: number;
				public static CREATED_FROM_DATABASE: number;
				public constructor(name: string, columns: java.util.Map<string,androidx.room.util.TableInfo.Column>, foreignKeys: java.util.Set<androidx.room.util.TableInfo.ForeignKey>, indices: java.util.Set<androidx.room.util.TableInfo.Index>);
				public static read(database: androidx.sqlite.db.SupportSQLiteDatabase, tableName: string): androidx.room.util.TableInfo;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public hashCode(): number;
				public constructor(name: string, columns: java.util.Map<string,androidx.room.util.TableInfo.Column>, foreignKeys: java.util.Set<androidx.room.util.TableInfo.ForeignKey>);
				public toString(): string;
			}
			export module TableInfo {
				export class Column extends java.lang.Object {
					public static class: java.lang.Class<androidx.room.util.TableInfo.Column>;
					public name: string;
					public type: string;
					public notNull: boolean;
					public primaryKeyPosition: number;
					public defaultValue: string;
					public createdFrom: number;
					public affinity: number;
					public equals(obj: any): boolean;
					public toString(): string;
					public static defaultValueEquals(current: string, other: string): boolean;
					/** @deprecated */
					public constructor(name: string, type: string, notNull: boolean, primaryKeyPosition: number);
					public equals(other: any): boolean;
					public hashCode(): number;
					public isPrimaryKey(): boolean;
					public constructor(name: string, type: string, notNull: boolean, primaryKeyPosition: number, defaultValue: string, createdFrom: number);
				}
				export module Column {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<androidx.room.util.TableInfo.Column.Companion>;
						public defaultValueEquals(current: string, other: string): boolean;
					}
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.room.util.TableInfo.Companion>;
					public read(database: androidx.sqlite.db.SupportSQLiteDatabase, tableName: string): androidx.room.util.TableInfo;
				}
				export class CreatedFrom extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.room.util.TableInfo.CreatedFrom>;
					/**
					 * Constructs a new instance of the androidx.room.util.TableInfo$CreatedFrom interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class ForeignKey extends java.lang.Object {
					public static class: java.lang.Class<androidx.room.util.TableInfo.ForeignKey>;
					public referenceTable: string;
					public onDelete: string;
					public onUpdate: string;
					public columnNames: java.util.List<string>;
					public referenceColumnNames: java.util.List<string>;
					public equals(obj: any): boolean;
					public toString(): string;
					public equals(other: any): boolean;
					public constructor(referenceTable: string, onDelete: string, onUpdate: string, columnNames: java.util.List<string>, referenceColumnNames: java.util.List<string>);
					public hashCode(): number;
				}
				export class ForeignKeyWithSequence extends java.lang.Comparable<androidx.room.util.TableInfo.ForeignKeyWithSequence> {
					public static class: java.lang.Class<androidx.room.util.TableInfo.ForeignKeyWithSequence>;
					public constructor(id: number, sequence: number, from: string, to: string);
					public getFrom(): string;
					public getId(): number;
					public getTo(): string;
					public compareTo(other: androidx.room.util.TableInfo.ForeignKeyWithSequence): number;
					public getSequence(): number;
				}
				export class Index extends java.lang.Object {
					public static class: java.lang.Class<androidx.room.util.TableInfo.Index>;
					public name: string;
					public unique: boolean;
					public columns: java.util.List<string>;
					public orders: java.util.List<string>;
					public static DEFAULT_PREFIX: string;
					public equals(obj: any): boolean;
					public toString(): string;
					/** @deprecated */
					public constructor(name: string, unique: boolean, columns: java.util.List<string>);
					public equals(other: any): boolean;
					public hashCode(): number;
					public constructor(name: string, unique: boolean, columns: java.util.List<string>, orders: java.util.List<string>);
				}
				export module Index {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<androidx.room.util.TableInfo.Index.Companion>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module room {
		export module util {
			export class UUIDUtil extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.util.UUIDUtil>;
				public static convertUUIDToByte(uuid: java.util.UUID): number[];
				public static convertByteToUUID(bytes: number[]): java.util.UUID;
			}
		}
	}
}

declare module androidx {
	export module room {
		export module util {
			export class ViewInfo extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.util.ViewInfo>;
				public name: string;
				public sql: string;
				public static read(database: androidx.sqlite.db.SupportSQLiteDatabase, viewName: string): androidx.room.util.ViewInfo;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public hashCode(): number;
				public toString(): string;
				public constructor(name: string, sql: string);
			}
			export module ViewInfo {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.room.util.ViewInfo.Companion>;
					public read(database: androidx.sqlite.db.SupportSQLiteDatabase, viewName: string): androidx.room.util.ViewInfo;
				}
			}
		}
	}
}

//Generics information:
//androidx.room.EntityDeletionOrUpdateAdapter:1
//androidx.room.EntityInsertionAdapter:1
//androidx.room.EntityUpsertionAdapter:1
//androidx.room.RoomDatabase.Builder:1
//androidx.room.RoomTrackingLiveData:1
//androidx.room.paging.LimitOffsetDataSource:1


/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module androidx {
	export module room {
		export class CoroutinesRoom extends java.lang.Object {
			public static class: java.lang.Class<androidx.room.CoroutinesRoom>;
			public static execute(db: androidx.room.RoomDatabase, inTransaction: boolean, callable: java.util.concurrent.Callable<any>, $completion: kotlin.coroutines.Continuation): any;
			public static createFlow(db: androidx.room.RoomDatabase, inTransaction: boolean, tableNames: string[], callable: java.util.concurrent.Callable<any>): kotlinx.coroutines.flow.Flow;
			public static execute(db: androidx.room.RoomDatabase, inTransaction: boolean, cancellationSignal: android.os.CancellationSignal, callable: java.util.concurrent.Callable<any>, $completion: kotlin.coroutines.Continuation): any;
		}
		export module CoroutinesRoom {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<androidx.room.CoroutinesRoom.Companion>;
				public execute(db: androidx.room.RoomDatabase, inTransaction: boolean, cancellationSignal: android.os.CancellationSignal, callable: java.util.concurrent.Callable<any>, $completion: kotlin.coroutines.Continuation): any;
				public execute(db: androidx.room.RoomDatabase, inTransaction: boolean, callable: java.util.concurrent.Callable<any>, $completion: kotlin.coroutines.Continuation): any;
				public createFlow(db: androidx.room.RoomDatabase, inTransaction: boolean, tableNames: string[], callable: java.util.concurrent.Callable<any>): kotlinx.coroutines.flow.Flow;
			}
		}
	}
}

declare module androidx {
	export module room {
		export class TransactionElement extends java.lang.Object implements kotlin.coroutines.CoroutineContext.Element {
			public static class: java.lang.Class<androidx.room.TransactionElement>;
			public minusKey(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public fold(param0: any, param1: kotlin.jvm.functions.Function2): any;
			public get(key: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
			public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
			public get(param0: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
			public getTransactionDispatcher$room_ktx_release(): kotlin.coroutines.ContinuationInterceptor;
			public plus(context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public fold(initial: any, operation: kotlin.jvm.functions.Function2): any;
			public constructor(transactionDispatcher: kotlin.coroutines.ContinuationInterceptor);
			public plus(param0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public acquire(): void;
			public minusKey(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public release(): void;
			public getKey(): kotlin.coroutines.CoroutineContext.Key<androidx.room.TransactionElement>;
		}
		export module TransactionElement {
			export class Key extends kotlin.coroutines.CoroutineContext.Key<androidx.room.TransactionElement> {
				public static class: java.lang.Class<androidx.room.TransactionElement.Key>;
			}
		}
	}
}

declare module androidx {
	export module room {
		export module migration {
			export class MigrationImpl {
				public static class: java.lang.Class<androidx.room.migration.MigrationImpl>;
				public migrate(db: androidx.sqlite.db.SupportSQLiteDatabase): void;
				public constructor(startVersion: number, endVersion: number, migrateCallback: kotlin.jvm.functions.Function1<any,kotlin.Unit>);
				public getMigrateCallback(): kotlin.jvm.functions.Function1<androidx.sqlite.db.SupportSQLiteDatabase,kotlin.Unit>;
			}
		}
	}
}

//Generics information:


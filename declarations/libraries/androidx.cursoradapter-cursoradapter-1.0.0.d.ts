declare module androidx {
	export module cursoradapter {
		export module widget {
			export abstract class CursorAdapter extends android.widget.BaseAdapter implements android.widget.Filterable, androidx.cursoradapter.widget.CursorFilter.CursorFilterClient {
				public static class: java.lang.Class<androidx.cursoradapter.widget.CursorAdapter>;
				public mDataValid: boolean;
				public mAutoRequery: boolean;
				public mCursor: android.database.Cursor;
				public mContext: android.content.Context;
				public mRowIDColumn: number;
				public mChangeObserver: androidx.cursoradapter.widget.CursorAdapter.ChangeObserver;
				public mDataSetObserver: android.database.DataSetObserver;
				public mCursorFilter: androidx.cursoradapter.widget.CursorFilter;
				public mFilterQueryProvider: android.widget.FilterQueryProvider;
				public static FLAG_AUTO_REQUERY: number;
				public static FLAG_REGISTER_CONTENT_OBSERVER: number;
				/** @deprecated */
				public init(context: android.content.Context, c: android.database.Cursor, autoRequery: boolean): void;
				public convertToString(param0: android.database.Cursor): string;
				public getFilterQueryProvider(): android.widget.FilterQueryProvider;
				public changeCursor(param0: android.database.Cursor): void;
				public constructor(context: android.content.Context, c: android.database.Cursor, autoRequery: boolean);
				public getView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
				public getItem(position: number): any;
				public constructor();
				public bindView(param0: android.view.View, param1: android.content.Context, param2: android.database.Cursor): void;
				public convertToString(cursor: android.database.Cursor): string;
				public isEnabled(param0: number): boolean;
				public newDropDownView(context: android.content.Context, cursor: android.database.Cursor, parent: android.view.ViewGroup): android.view.View;
				public runQueryOnBackgroundThread(constraint: string): android.database.Cursor;
				public areAllItemsEnabled(): boolean;
				public changeCursor(cursor: android.database.Cursor): void;
				public getFilter(): android.widget.Filter;
				public getCount(): number;
				public swapCursor(newCursor: android.database.Cursor): android.database.Cursor;
				public getCursor(): android.database.Cursor;
				public runQueryOnBackgroundThread(param0: string): android.database.Cursor;
				public onContentChanged(): void;
				public setFilterQueryProvider(filterQueryProvider: android.widget.FilterQueryProvider): void;
				/** @deprecated */
				public constructor(context: android.content.Context, c: android.database.Cursor);
				public hasStableIds(): boolean;
				public getItemId(position: number): number;
				public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
				public constructor(context: android.content.Context, c: android.database.Cursor, flags: number);
				public newView(param0: android.content.Context, param1: android.database.Cursor, param2: android.view.ViewGroup): android.view.View;
				public isEnabled(position: number): boolean;
				public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
			}
			export module CursorAdapter {
				export class ChangeObserver extends android.database.ContentObserver {
					public static class: java.lang.Class<androidx.cursoradapter.widget.CursorAdapter.ChangeObserver>;
					public onChange(selfChange: boolean): void;
					public deliverSelfNotifications(): boolean;
					public onChange(selfChange: boolean, uri: android.net.Uri): void;
				}
				export class MyDataSetObserver extends android.database.DataSetObserver {
					public static class: java.lang.Class<androidx.cursoradapter.widget.CursorAdapter.MyDataSetObserver>;
					public onChanged(): void;
					public onInvalidated(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module cursoradapter {
		export module widget {
			export class CursorFilter extends android.widget.Filter {
				public static class: java.lang.Class<androidx.cursoradapter.widget.CursorFilter>;
				public publishResults(constraint: string, results: android.widget.Filter.FilterResults): void;
				public performFiltering(constraint: string): android.widget.Filter.FilterResults;
				public publishResults(param0: string, param1: android.widget.Filter.FilterResults): void;
				public convertResultToString(resultValue: any): string;
				public performFiltering(param0: string): android.widget.Filter.FilterResults;
			}
			export module CursorFilter {
				export class CursorFilterClient extends java.lang.Object {
					public static class: java.lang.Class<androidx.cursoradapter.widget.CursorFilter.CursorFilterClient>;
					/**
					 * Constructs a new instance of the androidx.cursoradapter.widget.CursorFilter$CursorFilterClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						convertToString(param0: android.database.Cursor): string;
						runQueryOnBackgroundThread(param0: string): android.database.Cursor;
						getCursor(): android.database.Cursor;
						changeCursor(param0: android.database.Cursor): void;
					});
					public constructor();
					public getCursor(): android.database.Cursor;
					public changeCursor(param0: android.database.Cursor): void;
					public runQueryOnBackgroundThread(param0: string): android.database.Cursor;
					public convertToString(param0: android.database.Cursor): string;
				}
			}
		}
	}
}

declare module androidx {
	export module cursoradapter {
		export module widget {
			export abstract class ResourceCursorAdapter extends androidx.cursoradapter.widget.CursorAdapter {
				public static class: java.lang.Class<androidx.cursoradapter.widget.ResourceCursorAdapter>;
				public convertToString(param0: android.database.Cursor): string;
				public setViewResource(layout: number): void;
				public changeCursor(param0: android.database.Cursor): void;
				public constructor(context: android.content.Context, c: android.database.Cursor, autoRequery: boolean);
				public constructor(context: android.content.Context, layout: number, c: android.database.Cursor, flags: number);
				public constructor();
				public setDropDownViewResource(dropDownLayout: number): void;
				public convertToString(cursor: android.database.Cursor): string;
				public isEnabled(param0: number): boolean;
				public newDropDownView(context: android.content.Context, cursor: android.database.Cursor, parent: android.view.ViewGroup): android.view.View;
				public areAllItemsEnabled(): boolean;
				public runQueryOnBackgroundThread(constraint: string): android.database.Cursor;
				/** @deprecated */
				public constructor(context: android.content.Context, layout: number, c: android.database.Cursor);
				public changeCursor(cursor: android.database.Cursor): void;
				public getFilter(): android.widget.Filter;
				/** @deprecated */
				public constructor(context: android.content.Context, layout: number, c: android.database.Cursor, autoRequery: boolean);
				public getCursor(): android.database.Cursor;
				public runQueryOnBackgroundThread(param0: string): android.database.Cursor;
				/** @deprecated */
				public constructor(context: android.content.Context, c: android.database.Cursor);
				public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
				public constructor(context: android.content.Context, c: android.database.Cursor, flags: number);
				public newView(context: android.content.Context, cursor: android.database.Cursor, parent: android.view.ViewGroup): android.view.View;
				public newView(param0: android.content.Context, param1: android.database.Cursor, param2: android.view.ViewGroup): android.view.View;
				public isEnabled(position: number): boolean;
				public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
			}
		}
	}
}

declare module androidx {
	export module cursoradapter {
		export module widget {
			export class SimpleCursorAdapter extends androidx.cursoradapter.widget.ResourceCursorAdapter {
				public static class: java.lang.Class<androidx.cursoradapter.widget.SimpleCursorAdapter>;
				public mFrom: number[];
				public mTo: number[];
				public constructor(context: android.content.Context, layout: number, c: android.database.Cursor, from: string[], to: number[], flags: number);
				public convertToString(param0: android.database.Cursor): string;
				public changeCursor(param0: android.database.Cursor): void;
				public getStringConversionColumn(): number;
				public constructor(context: android.content.Context, c: android.database.Cursor, autoRequery: boolean);
				public constructor(context: android.content.Context, layout: number, c: android.database.Cursor, flags: number);
				public setCursorToStringConverter(cursorToStringConverter: androidx.cursoradapter.widget.SimpleCursorAdapter.CursorToStringConverter): void;
				public constructor();
				public bindView(param0: android.view.View, param1: android.content.Context, param2: android.database.Cursor): void;
				/** @deprecated */
				public constructor(context: android.content.Context, layout: number, c: android.database.Cursor, from: string[], to: number[]);
				public convertToString(cursor: android.database.Cursor): string;
				public isEnabled(param0: number): boolean;
				public swapCursor(c: android.database.Cursor): android.database.Cursor;
				public areAllItemsEnabled(): boolean;
				public runQueryOnBackgroundThread(constraint: string): android.database.Cursor;
				/** @deprecated */
				public constructor(context: android.content.Context, layout: number, c: android.database.Cursor);
				public changeCursor(cursor: android.database.Cursor): void;
				public setViewText(v: android.widget.TextView, text: string): void;
				public setStringConversionColumn(stringConversionColumn: number): void;
				public getFilter(): android.widget.Filter;
				public getCursorToStringConverter(): androidx.cursoradapter.widget.SimpleCursorAdapter.CursorToStringConverter;
				public setViewImage(v: android.widget.ImageView, value: string): void;
				public swapCursor(newCursor: android.database.Cursor): android.database.Cursor;
				/** @deprecated */
				public constructor(context: android.content.Context, layout: number, c: android.database.Cursor, autoRequery: boolean);
				public getCursor(): android.database.Cursor;
				public bindView(view: android.view.View, context: android.content.Context, cursor: android.database.Cursor): void;
				public runQueryOnBackgroundThread(param0: string): android.database.Cursor;
				/** @deprecated */
				public constructor(context: android.content.Context, c: android.database.Cursor);
				public getViewBinder(): androidx.cursoradapter.widget.SimpleCursorAdapter.ViewBinder;
				public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
				public constructor(context: android.content.Context, c: android.database.Cursor, flags: number);
				public isEnabled(position: number): boolean;
				public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
				public changeCursorAndColumns(c: android.database.Cursor, from: string[], to: number[]): void;
				public setViewBinder(viewBinder: androidx.cursoradapter.widget.SimpleCursorAdapter.ViewBinder): void;
			}
			export module SimpleCursorAdapter {
				export class CursorToStringConverter extends java.lang.Object {
					public static class: java.lang.Class<androidx.cursoradapter.widget.SimpleCursorAdapter.CursorToStringConverter>;
					/**
					 * Constructs a new instance of the androidx.cursoradapter.widget.SimpleCursorAdapter$CursorToStringConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						convertToString(param0: android.database.Cursor): string;
					});
					public constructor();
					public convertToString(param0: android.database.Cursor): string;
				}
				export class ViewBinder extends java.lang.Object {
					public static class: java.lang.Class<androidx.cursoradapter.widget.SimpleCursorAdapter.ViewBinder>;
					/**
					 * Constructs a new instance of the androidx.cursoradapter.widget.SimpleCursorAdapter$ViewBinder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setViewValue(param0: android.view.View, param1: android.database.Cursor, param2: number): boolean;
					});
					public constructor();
					public setViewValue(param0: android.view.View, param1: android.database.Cursor, param2: number): boolean;
				}
			}
		}
	}
}

//Generics information:


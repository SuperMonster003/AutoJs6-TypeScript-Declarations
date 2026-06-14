/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module com {
	export module twofortyfouram {
		export module assertion {
			export class Assertions extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.assertion.Assertions>;
				public static assertInRangeInclusive(actual: number, param1: number, minInclusive: number, param3: string): void;
				public static assertInRangeInclusive(actual: number, minInclusive: number, maxInclusive: number, name: string): void;
				public static assertNotEmpty(array: any[], name: string): void;
				public static assertNoNullElements(map: java.util.Map<any,any>, name: string): void;
				public static assertNotEmpty(string: string, name: string): void;
				public static assertNotEmpty(map: java.util.Map<any,any>, name: string): void;
				public static assertNoNullElements(array: any[], name: string): void;
				public static assertNoNullElements(collection: java.util.Collection<any>, name: string): void;
				public static assertInSet(obj: any, ...set: any[]): void;
				public static assertNotEmpty(collection: java.util.Collection<any>, name: string): void;
				public static assertNotNull(object: any, name: string): any;
				public static assertIsMainThread(): void;
				public static assertIsNotMainThread(): void;
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module assertion {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.assertion.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module assertion {
			export class BundleAssertions extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.assertion.BundleAssertions>;
				public static assertHasLong(bundle: android.os.Bundle, requiredKey: string): void;
				public static assertKeyCount(bundle: android.os.Bundle, expectedCount: number): void;
				public static assertHasKey(bundle: any, requiredKey: string): void;
				public static assertHasInt(bundle: android.os.Bundle, requiredKey: string): void;
				public static assertKeyCount(bundle: any, expectedCount: number): void;
				public static assertHasByteArray(bundle: android.os.Bundle, requiredKey: string): void;
				public static assertHasString(bundle: android.os.Bundle, requiredKey: string, isNullAllowed: boolean, isEmptyStringAllowed: boolean): void;
				public static assertHasStringArray(bundle: android.os.Bundle, requiredKey: string): void;
				public static assertHasString(bundle: android.os.Bundle, requiredKey: string, ...allowedValues: string[]): void;
				public static assertHasInt(bundle: android.os.Bundle, requiredKey: string, lowerBound: number, upperBound: number): void;
				public static assertHasSerializable(bundle: android.os.Bundle, requiredKey: string, expectedClass: java.lang.Class<any>): java.io.Serializable;
				public static assertHasBoolean(bundle: android.os.Bundle, requiredKey: string): void;
				public static assertHasString(bundle: android.os.Bundle, requiredKey: string): void;
				public static assertHasParcelable(bundle: android.os.Bundle, requiredKey: string, expectedClass: java.lang.Class<any>): android.os.Parcelable;
				public static assertHasKey(bundle: android.os.Bundle, requiredKey: string): void;
				public static assertHasLong(bundle: android.os.Bundle, requiredKey: string, lowerBound: number, param3: number): void;
				public static assertSerializable(bundle: android.os.Bundle): void;
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module assertion {
			export class CursorAssertions extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.assertion.CursorAssertions>;
				public static assertCursorPositionValid(cursor: android.database.Cursor): void;
				public static assertCursorOpen(cursor: android.database.Cursor): void;
			}
		}
	}
}

//Generics information:


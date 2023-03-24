declare module io {
	export module github {
		export module g00fy2 {
			export module versioncompare {
				export class Version extends java.lang.Comparable<io.github.g00fy2.versioncompare.Version> {
					public static class: java.lang.Class<io.github.g00fy2.versioncompare.Version>;
					public getMinor(): number;
					public isLowerThan(otherVersion: io.github.g00fy2.versioncompare.Version): boolean;
					public equals(obj: any): boolean;
					public isHigherThan(otherVersion: string): boolean;
					public isLowerThan(otherVersion: string): boolean;
					public equals(o: any): boolean;
					public isAtLeast(otherVersion: io.github.g00fy2.versioncompare.Version): boolean;
					public isAtLeast(otherVersion: string, ignoreSuffix: boolean): boolean;
					public constructor(versionString: string, throwExceptions: boolean);
					public getMajor(): number;
					public constructor(versionString: string);
					public isHigherThan(otherVersion: io.github.g00fy2.versioncompare.Version): boolean;
					public toString(): string;
					public getSubversionNumbers(): java.util.List<java.lang.Long>;
					public isAtLeast(otherVersion: string): boolean;
					public isEqual(otherVersion: string): boolean;
					public isAtLeast(otherVersion: io.github.g00fy2.versioncompare.Version, ignoreSuffix: boolean): boolean;
					public getOriginalString(): string;
					public compareTo(version: io.github.g00fy2.versioncompare.Version): number;
					public getSuffix(): string;
					public hashCode(): number;
					public getPatch(): number;
					public isEqual(otherVersion: io.github.g00fy2.versioncompare.Version): boolean;
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module g00fy2 {
			export module versioncompare {
				export class VersionComparator extends java.lang.Object {
					public static class: java.lang.Class<io.github.g00fy2.versioncompare.VersionComparator>;
				}
				export module VersionComparator {
					export class ReleaseType {
						public static class: java.lang.Class<io.github.g00fy2.versioncompare.VersionComparator.ReleaseType>;
						public static SNAPSHOT: io.github.g00fy2.versioncompare.VersionComparator.ReleaseType;
						public static PRE_ALPHA: io.github.g00fy2.versioncompare.VersionComparator.ReleaseType;
						public static ALPHA: io.github.g00fy2.versioncompare.VersionComparator.ReleaseType;
						public static BETA: io.github.g00fy2.versioncompare.VersionComparator.ReleaseType;
						public static RC: io.github.g00fy2.versioncompare.VersionComparator.ReleaseType;
						public static STABLE: io.github.g00fy2.versioncompare.VersionComparator.ReleaseType;
						public static values(): io.github.g00fy2.versioncompare.VersionComparator.ReleaseType[];
						public static valueOf(name: string): io.github.g00fy2.versioncompare.VersionComparator.ReleaseType;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

//Generics information:


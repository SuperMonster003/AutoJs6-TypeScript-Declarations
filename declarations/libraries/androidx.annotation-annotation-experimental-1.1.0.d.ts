declare module androidx {
	export module annotation {
		export class OptIn extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.annotation.OptIn>;
			/**
			 * Constructs a new instance of the androidx.annotation.OptIn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				markerClass(): java.lang.Class<any>[];
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public markerClass(): java.lang.Class<any>[];
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module annotation {
		export class RequiresOptIn extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.annotation.RequiresOptIn>;
			/**
			 * Constructs a new instance of the androidx.annotation.RequiresOptIn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				level(): androidx.annotation.RequiresOptIn.Level;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public level(): androidx.annotation.RequiresOptIn.Level;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
		export module RequiresOptIn {
			export class Level {
				public static class: java.lang.Class<androidx.annotation.RequiresOptIn.Level>;
				public static WARNING: androidx.annotation.RequiresOptIn.Level;
				public static ERROR: androidx.annotation.RequiresOptIn.Level;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(param0: string): androidx.annotation.RequiresOptIn.Level;
				public static values(): androidx.annotation.RequiresOptIn.Level[];
			}
		}
	}
}

declare module androidx {
	export module annotation {
		export module experimental {
			export class Experimental extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.annotation.experimental.Experimental>;
				/**
				 * Constructs a new instance of the androidx.annotation.experimental.Experimental interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					level(): androidx.annotation.experimental.Experimental.Level;
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
				public level(): androidx.annotation.experimental.Experimental.Level;
				public toString(): string;
			}
			export module Experimental {
				export class Level {
					public static class: java.lang.Class<androidx.annotation.experimental.Experimental.Level>;
					public static WARNING: androidx.annotation.experimental.Experimental.Level;
					public static ERROR: androidx.annotation.experimental.Experimental.Level;
					public static values(): androidx.annotation.experimental.Experimental.Level[];
					public static valueOf(param0: string): androidx.annotation.experimental.Experimental.Level;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare module androidx {
	export module annotation {
		export module experimental {
			export class UseExperimental extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.annotation.experimental.UseExperimental>;
				/**
				 * Constructs a new instance of the androidx.annotation.experimental.UseExperimental interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					markerClass(): java.lang.Class<any>[];
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
				public markerClass(): java.lang.Class<any>[];
			}
		}
	}
}

//Generics information:


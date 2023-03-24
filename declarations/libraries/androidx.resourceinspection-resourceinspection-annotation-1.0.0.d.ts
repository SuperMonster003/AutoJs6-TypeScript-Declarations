declare module androidx {
	export module resourceinspection {
		export module annotation {
			export class AppCompatShadowedAttributes extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.resourceinspection.annotation.AppCompatShadowedAttributes>;
				/**
				 * Constructs a new instance of the androidx.resourceinspection.annotation.AppCompatShadowedAttributes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
		}
	}
}

declare module androidx {
	export module resourceinspection {
		export module annotation {
			export class Attribute extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.resourceinspection.annotation.Attribute>;
				/**
				 * Constructs a new instance of the androidx.resourceinspection.annotation.Attribute interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					value(): string;
					intMapping(): androidx.resourceinspection.annotation.Attribute.IntMap[];
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public value(): string;
				public intMapping(): androidx.resourceinspection.annotation.Attribute.IntMap[];
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
			export module Attribute {
				export class IntMap extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.resourceinspection.annotation.Attribute.IntMap>;
					/**
					 * Constructs a new instance of the androidx.resourceinspection.annotation.Attribute$IntMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						name(): string;
						value(): number;
						mask(): number;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public name(): string;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public mask(): number;
					public hashCode(): number;
					public value(): number;
				}
			}
		}
	}
}

//Generics information:


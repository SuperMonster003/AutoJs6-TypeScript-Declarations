/// <reference path="../android.d.ts" />

declare module com {
	export module google {
		export module gson {
			export class DefaultDateTypeAdapter extends com.google.gson.TypeAdapter<java.util.Date> {
				public static class: java.lang.Class<com.google.gson.DefaultDateTypeAdapter>;
				public constructor(param0: number, param1: number);
				public read(param0: com.google.gson.stream.JsonReader): any;
				public read(param0: com.google.gson.stream.JsonReader): java.util.Date;
				public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.Date): void;
				public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
				public constructor(param0: java.lang.Class<any>, param1: number, param2: number);
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class ExclusionStrategy extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.ExclusionStrategy>;
				/**
				 * Constructs a new instance of the com.google.gson.ExclusionStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					shouldSkipField(param0: com.google.gson.FieldAttributes): boolean;
					shouldSkipClass(param0: java.lang.Class<any>): boolean;
				});
				public constructor();
				public shouldSkipField(param0: com.google.gson.FieldAttributes): boolean;
				public shouldSkipClass(param0: java.lang.Class<any>): boolean;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class FieldAttributes extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.FieldAttributes>;
				public getAnnotation(param0: java.lang.Class<any>): java.lang.annotation.Annotation;
				public hasModifier(param0: number): boolean;
				public constructor(param0: java.lang.reflect.Field);
				public getDeclaredClass(): java.lang.Class<any>;
				public getDeclaredType(): java.lang.reflect.Type;
				public getName(): string;
				public getAnnotations(): java.util.Collection<java.lang.annotation.Annotation>;
				public getDeclaringClass(): java.lang.Class<any>;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export abstract class FieldNamingPolicy extends com.google.gson.FieldNamingStrategy {
				public static class: java.lang.Class<com.google.gson.FieldNamingPolicy>;
				public static IDENTITY: com.google.gson.FieldNamingPolicy;
				public static UPPER_CAMEL_CASE: com.google.gson.FieldNamingPolicy;
				public static UPPER_CAMEL_CASE_WITH_SPACES: com.google.gson.FieldNamingPolicy;
				public static LOWER_CASE_WITH_UNDERSCORES: com.google.gson.FieldNamingPolicy;
				public static LOWER_CASE_WITH_DASHES: com.google.gson.FieldNamingPolicy;
				public static LOWER_CASE_WITH_DOTS: com.google.gson.FieldNamingPolicy;
				public static valueOf(param0: string): com.google.gson.FieldNamingPolicy;
				public translateName(param0: java.lang.reflect.Field): string;
				public static values(): Array<com.google.gson.FieldNamingPolicy>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class FieldNamingStrategy extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.FieldNamingStrategy>;
				/**
				 * Constructs a new instance of the com.google.gson.FieldNamingStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					translateName(param0: java.lang.reflect.Field): string;
				});
				public constructor();
				public translateName(param0: java.lang.reflect.Field): string;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class Gson extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.Gson>;
				public excluder(): com.google.gson.internal.Excluder;
				public getDelegateAdapter(param0: com.google.gson.TypeAdapterFactory, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
				public getAdapter(param0: java.lang.Class<any>): com.google.gson.TypeAdapter<any>;
				public serializeNulls(): boolean;
				public newJsonReader(param0: java.io.Reader): com.google.gson.stream.JsonReader;
				public fromJson(param0: java.io.Reader, param1: java.lang.reflect.Type): any;
				public toJson(param0: com.google.gson.JsonElement, param1: com.google.gson.stream.JsonWriter): void;
				public fromJson(param0: string, param1: java.lang.Class<any>): any;
				public fromJson(param0: com.google.gson.JsonElement, param1: java.lang.Class<any>): any;
				public htmlSafe(): boolean;
				public fromJson(param0: string, param1: java.lang.reflect.Type): any;
				public constructor();
				public toJsonTree(param0: any, param1: java.lang.reflect.Type): com.google.gson.JsonElement;
				public newJsonWriter(param0: java.io.Writer): com.google.gson.stream.JsonWriter;
				public fieldNamingStrategy(): com.google.gson.FieldNamingStrategy;
				public fromJson(param0: com.google.gson.stream.JsonReader, param1: java.lang.reflect.Type): any;
				public toJson(param0: com.google.gson.JsonElement, param1: java.lang.Appendable): void;
				public fromJson(param0: java.io.Reader, param1: java.lang.Class<any>): any;
				public newBuilder(): com.google.gson.GsonBuilder;
				public toJson(param0: any, param1: java.lang.Appendable): void;
				public toJson(param0: any): string;
				public toJson(param0: any, param1: java.lang.reflect.Type, param2: com.google.gson.stream.JsonWriter): void;
				public toJson(param0: any, param1: java.lang.reflect.Type): string;
				public toJsonTree(param0: any): com.google.gson.JsonElement;
				public toString(): string;
				public toJson(param0: any, param1: java.lang.reflect.Type, param2: java.lang.Appendable): void;
				public toJson(param0: com.google.gson.JsonElement): string;
				public getAdapter(param0: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
				public fromJson(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type): any;
			}
			export module Gson {
				export class FutureTypeAdapter<T>  extends com.google.gson.TypeAdapter<any> {
					public static class: java.lang.Class<com.google.gson.Gson.FutureTypeAdapter<any>>;
					public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
					public setDelegate(param0: com.google.gson.TypeAdapter<any>): void;
					public read(param0: com.google.gson.stream.JsonReader): any;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class GsonBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.GsonBuilder>;
				public setPrettyPrinting(): com.google.gson.GsonBuilder;
				public setDateFormat(param0: number, param1: number): com.google.gson.GsonBuilder;
				public setLenient(): com.google.gson.GsonBuilder;
				public registerTypeAdapter(param0: java.lang.reflect.Type, param1: any): com.google.gson.GsonBuilder;
				public constructor();
				public registerTypeHierarchyAdapter(param0: java.lang.Class<any>, param1: any): com.google.gson.GsonBuilder;
				public generateNonExecutableJson(): com.google.gson.GsonBuilder;
				public excludeFieldsWithoutExposeAnnotation(): com.google.gson.GsonBuilder;
				public setDateFormat(param0: number): com.google.gson.GsonBuilder;
				public addSerializationExclusionStrategy(param0: com.google.gson.ExclusionStrategy): com.google.gson.GsonBuilder;
				public serializeNulls(): com.google.gson.GsonBuilder;
				public serializeSpecialFloatingPointValues(): com.google.gson.GsonBuilder;
				public addDeserializationExclusionStrategy(param0: com.google.gson.ExclusionStrategy): com.google.gson.GsonBuilder;
				public setExclusionStrategies(param0: Array<com.google.gson.ExclusionStrategy>): com.google.gson.GsonBuilder;
				public enableComplexMapKeySerialization(): com.google.gson.GsonBuilder;
				public create(): com.google.gson.Gson;
				public registerTypeAdapterFactory(param0: com.google.gson.TypeAdapterFactory): com.google.gson.GsonBuilder;
				public disableInnerClassSerialization(): com.google.gson.GsonBuilder;
				public disableHtmlEscaping(): com.google.gson.GsonBuilder;
				public setFieldNamingPolicy(param0: com.google.gson.FieldNamingPolicy): com.google.gson.GsonBuilder;
				public excludeFieldsWithModifiers(param0: number[]): com.google.gson.GsonBuilder;
				public setFieldNamingStrategy(param0: com.google.gson.FieldNamingStrategy): com.google.gson.GsonBuilder;
				public setLongSerializationPolicy(param0: com.google.gson.LongSerializationPolicy): com.google.gson.GsonBuilder;
				public setDateFormat(param0: string): com.google.gson.GsonBuilder;
				public setVersion(param0: number): com.google.gson.GsonBuilder;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class InstanceCreator<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.InstanceCreator<any>>;
				/**
				 * Constructs a new instance of the com.google.gson.InstanceCreator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createInstance(param0: java.lang.reflect.Type): T;
				});
				public constructor();
				public createInstance(param0: java.lang.reflect.Type): T;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonArray extends com.google.gson.JsonElement implements java.lang.Iterable<com.google.gson.JsonElement>  {
				public static class: java.lang.Class<com.google.gson.JsonArray>;
				public addAll(param0: com.google.gson.JsonArray): void;
				public getAsLong(): number;
				public deepCopy(): com.google.gson.JsonArray;
				public getAsShort(): number;
				public getAsBigDecimal(): java.math.BigDecimal;
				public constructor();
				public remove(param0: number): com.google.gson.JsonElement;
				public getAsInt(): number;
				public getAsBoolean(): boolean;
				public add(param0: com.google.gson.JsonElement): void;
				public hashCode(): number;
				/** @deprecated */
				public getAsCharacter(): string;
				public equals(param0: any): boolean;
				public getAsDouble(): number;
				public isEmpty(): boolean;
				public iterator(): java.util.Iterator<com.google.gson.JsonElement>;
				public getAsString(): string;
				public set(param0: number, param1: com.google.gson.JsonElement): com.google.gson.JsonElement;
				public getAsCharacter(): string;
				public spliterator(): java.util.Spliterator<any>;
				public iterator(): java.util.Iterator<any>;
				public contains(param0: com.google.gson.JsonElement): boolean;
				public add(param0: string): void;
				public size(): number;
				public deepCopy(): com.google.gson.JsonElement;
				public getAsBigInteger(): java.math.BigInteger;
				public getAsByte(): number;
				public add(param0: java.lang.Number): void;
				public remove(param0: com.google.gson.JsonElement): boolean;
				public get(param0: number): com.google.gson.JsonElement;
				public forEach(param0: any /* any*/): void;
				public constructor(param0: number);
				public getAsFloat(): number;
				public add(param0: java.lang.Boolean): void;
				public add(param0: java.lang.Character): void;
				public getAsNumber(): java.lang.Number;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonDeserializationContext extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.JsonDeserializationContext>;
				/**
				 * Constructs a new instance of the com.google.gson.JsonDeserializationContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type): any;
				});
				public constructor();
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type): any;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonDeserializer<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.JsonDeserializer<any>>;
				/**
				 * Constructs a new instance of the com.google.gson.JsonDeserializer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): T;
				});
				public constructor();
				public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): T;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export abstract class JsonElement extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.JsonElement>;
				public isJsonArray(): boolean;
				public getAsJsonArray(): com.google.gson.JsonArray;
				public getAsJsonPrimitive(): com.google.gson.JsonPrimitive;
				public getAsLong(): number;
				public isJsonPrimitive(): boolean;
				public getAsShort(): number;
				public toString(): string;
				public getAsBigDecimal(): java.math.BigDecimal;
				public constructor();
				public getAsJsonNull(): com.google.gson.JsonNull;
				public deepCopy(): com.google.gson.JsonElement;
				public getAsByte(): number;
				public getAsBigInteger(): java.math.BigInteger;
				public getAsBoolean(): boolean;
				public getAsInt(): number;
				public isJsonObject(): boolean;
				public getAsJsonObject(): com.google.gson.JsonObject;
				/** @deprecated */
				public getAsCharacter(): string;
				public isJsonNull(): boolean;
				public getAsDouble(): number;
				public getAsFloat(): number;
				public getAsString(): string;
				public getAsNumber(): java.lang.Number;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonIOException extends com.google.gson.JsonParseException {
				public static class: java.lang.Class<com.google.gson.JsonIOException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonNull extends com.google.gson.JsonElement {
				public static class: java.lang.Class<com.google.gson.JsonNull>;
				public static INSTANCE: com.google.gson.JsonNull;
				public deepCopy(): com.google.gson.JsonElement;
				/** @deprecated */
				public constructor();
				public deepCopy(): com.google.gson.JsonNull;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonObject extends com.google.gson.JsonElement {
				public static class: java.lang.Class<com.google.gson.JsonObject>;
				public addProperty(param0: string, param1: java.lang.Number): void;
				public getAsJsonArray(): com.google.gson.JsonArray;
				public getAsJsonPrimitive(): com.google.gson.JsonPrimitive;
				public keySet(): java.util.Set<string>;
				public get(param0: string): com.google.gson.JsonElement;
				public getAsJsonPrimitive(param0: string): com.google.gson.JsonPrimitive;
				public getAsJsonObject(param0: string): com.google.gson.JsonObject;
				public entrySet(): java.util.Set<java.util.Map.Entry<string,com.google.gson.JsonElement>>;
				public remove(param0: string): com.google.gson.JsonElement;
				public constructor();
				public size(): number;
				public deepCopy(): com.google.gson.JsonElement;
				public addProperty(param0: string, param1: java.lang.Character): void;
				public getAsJsonArray(param0: string): com.google.gson.JsonArray;
				public deepCopy(): com.google.gson.JsonObject;
				public hashCode(): number;
				public getAsJsonObject(): com.google.gson.JsonObject;
				public add(param0: string, param1: com.google.gson.JsonElement): void;
				public equals(param0: any): boolean;
				public addProperty(param0: string, param1: string): void;
				public has(param0: string): boolean;
				public addProperty(param0: string, param1: java.lang.Boolean): void;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonParseException extends java.lang.RuntimeException {
				public static class: java.lang.Class<com.google.gson.JsonParseException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonParser extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.JsonParser>;
				/** @deprecated */
				public constructor();
				public static parseString(param0: string): com.google.gson.JsonElement;
				/** @deprecated */
				public parse(param0: com.google.gson.stream.JsonReader): com.google.gson.JsonElement;
				/** @deprecated */
				public parse(param0: string): com.google.gson.JsonElement;
				public static parseReader(param0: com.google.gson.stream.JsonReader): com.google.gson.JsonElement;
				/** @deprecated */
				public parse(param0: java.io.Reader): com.google.gson.JsonElement;
				public static parseReader(param0: java.io.Reader): com.google.gson.JsonElement;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonPrimitive extends com.google.gson.JsonElement {
				public static class: java.lang.Class<com.google.gson.JsonPrimitive>;
				public getAsLong(): number;
				public isNumber(): boolean;
				public getAsShort(): number;
				public constructor(param0: java.lang.Number);
				public getAsBigDecimal(): java.math.BigDecimal;
				public constructor(param0: string);
				public constructor();
				public getAsBoolean(): boolean;
				public getAsInt(): number;
				public hashCode(): number;
				/** @deprecated */
				public getAsCharacter(): string;
				public equals(param0: any): boolean;
				public constructor(param0: java.lang.Character);
				public getAsDouble(): number;
				public isBoolean(): boolean;
				public getAsString(): string;
				public deepCopy(): com.google.gson.JsonPrimitive;
				public getAsCharacter(): string;
				public deepCopy(): com.google.gson.JsonElement;
				public getAsBigInteger(): java.math.BigInteger;
				public getAsByte(): number;
				public isString(): boolean;
				public getAsFloat(): number;
				public constructor(param0: java.lang.Boolean);
				public getAsNumber(): java.lang.Number;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonSerializationContext extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.JsonSerializationContext>;
				/**
				 * Constructs a new instance of the com.google.gson.JsonSerializationContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					serialize(param0: any): com.google.gson.JsonElement;
					serialize(param0: any, param1: java.lang.reflect.Type): com.google.gson.JsonElement;
				});
				public constructor();
				public serialize(param0: any, param1: java.lang.reflect.Type): com.google.gson.JsonElement;
				public serialize(param0: any): com.google.gson.JsonElement;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonSerializer<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.JsonSerializer<any>>;
				/**
				 * Constructs a new instance of the com.google.gson.JsonSerializer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					serialize(param0: T, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
				});
				public constructor();
				public serialize(param0: T, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonStreamParser extends java.util.Iterator<com.google.gson.JsonElement> {
				public static class: java.lang.Class<com.google.gson.JsonStreamParser>;
				public remove(): void;
				public hasNext(): boolean;
				public next(): com.google.gson.JsonElement;
				public constructor(param0: java.io.Reader);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonSyntaxException extends com.google.gson.JsonParseException {
				public static class: java.lang.Class<com.google.gson.JsonSyntaxException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export abstract class LongSerializationPolicy {
				public static class: java.lang.Class<com.google.gson.LongSerializationPolicy>;
				public static DEFAULT: com.google.gson.LongSerializationPolicy;
				public static STRING: com.google.gson.LongSerializationPolicy;
				public serialize(param0: java.lang.Long): com.google.gson.JsonElement;
				public static values(): Array<com.google.gson.LongSerializationPolicy>;
				public static valueOf(param0: string): com.google.gson.LongSerializationPolicy;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export abstract class TypeAdapter<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.TypeAdapter<any>>;
				public write(param0: com.google.gson.stream.JsonWriter, param1: T): void;
				public fromJson(param0: java.io.Reader): T;
				public toJsonTree(param0: T): com.google.gson.JsonElement;
				public toJson(param0: T): string;
				public nullSafe(): com.google.gson.TypeAdapter<T>;
				public fromJson(param0: string): T;
				public toJson(param0: java.io.Writer, param1: T): void;
				public fromJsonTree(param0: com.google.gson.JsonElement): T;
				public read(param0: com.google.gson.stream.JsonReader): T;
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class TypeAdapterFactory extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.TypeAdapterFactory>;
				/**
				 * Constructs a new instance of the com.google.gson.TypeAdapterFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
				});
				public constructor();
				public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class Expose extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.google.gson.annotations.Expose>;
					/**
					 * Constructs a new instance of the com.google.gson.annotations.Expose interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						serialize(): boolean;
						deserialize(): boolean;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public deserialize(): boolean;
					public serialize(): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class JsonAdapter extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.google.gson.annotations.JsonAdapter>;
					/**
					 * Constructs a new instance of the com.google.gson.annotations.JsonAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): java.lang.Class<any>;
						nullSafe(): boolean;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public value(): java.lang.Class<any>;
					public annotationType(): java.lang.Class<any>;
					public nullSafe(): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class SerializedName extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.google.gson.annotations.SerializedName>;
					/**
					 * Constructs a new instance of the com.google.gson.annotations.SerializedName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
						alternate(): string[];
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public value(): string;
					public alternate(): string[];
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class Since extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.google.gson.annotations.Since>;
					/**
					 * Constructs a new instance of the com.google.gson.annotations.Since interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): number;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
					public value(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module annotations {
				export class Until extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.google.gson.annotations.Until>;

					/**
					 * Constructs a new instance of the com.google.gson.annotations.Until interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): number;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();

					public equals(param0: any): boolean;

					public toString(): string;

					public annotationType(): java.lang.Class<any>;

					public hashCode(): number;

					public value(): number;
				}
			}
			export module internal {
				export module $Gson {
					export class Preconditions extends java.lang.Object {
						public static class: java.lang.Class<com.google.gson.internal.$Gson.Preconditions>;
						public static checkArgument(param0: boolean): void;
						public static checkNotNull(param0: any): any;
					}
					export class Types extends java.lang.Object {
						public static class: java.lang.Class<com.google.gson.internal.$Gson.Types>;
						public static resolve(param0: java.lang.reflect.Type, param1: java.lang.Class<any>, param2: java.lang.reflect.Type): java.lang.reflect.Type;
						public static getRawType(param0: java.lang.reflect.Type): java.lang.Class<any>;
						public static subtypeOf(param0: java.lang.reflect.Type): java.lang.reflect.WildcardType;
						public static arrayOf(param0: java.lang.reflect.Type): java.lang.reflect.GenericArrayType;
						public static canonicalize(param0: java.lang.reflect.Type): java.lang.reflect.Type;
						public static getArrayComponentType(param0: java.lang.reflect.Type): java.lang.reflect.Type;
						public static newParameterizedTypeWithOwner(param0: java.lang.reflect.Type, param1: java.lang.reflect.Type, param2: Array<java.lang.reflect.Type>): java.lang.reflect.ParameterizedType;
						public static getCollectionElementType(param0: java.lang.reflect.Type, param1: java.lang.Class<any>): java.lang.reflect.Type;
						public static supertypeOf(param0: java.lang.reflect.Type): java.lang.reflect.WildcardType;
						public static equals(param0: java.lang.reflect.Type, param1: java.lang.reflect.Type): boolean;
						public static typeToString(param0: java.lang.reflect.Type): string;
						public static getMapKeyAndValueTypes(param0: java.lang.reflect.Type, param1: java.lang.Class<any>): Array<java.lang.reflect.Type>;
						public equals(param0: any): boolean;
					}
					export module Types {
						export class GenericArrayTypeImpl extends java.lang.Object implements java.lang.reflect.GenericArrayType, java.io.Serializable {
							public static class: java.lang.Class<com.google.gson.internal.$Gson.Types.GenericArrayTypeImpl>;
							public toString(): string;
							public getTypeName(): string;
							public constructor(param0: java.lang.reflect.Type);
							public equals(param0: any): boolean;
							public hashCode(): number;
							public getGenericComponentType(): java.lang.reflect.Type;
						}
						export class ParameterizedTypeImpl extends java.lang.Object implements java.lang.reflect.ParameterizedType, java.io.Serializable {
							public static class: java.lang.Class<com.google.gson.internal.$Gson.Types.ParameterizedTypeImpl>;
							public toString(): string;
							public constructor(param0: java.lang.reflect.Type, param1: java.lang.reflect.Type, param2: Array<java.lang.reflect.Type>);
							public getTypeName(): string;
							public equals(param0: any): boolean;
							public getRawType(): java.lang.reflect.Type;
							public getActualTypeArguments(): Array<java.lang.reflect.Type>;
							public getOwnerType(): java.lang.reflect.Type;
							public hashCode(): number;
						}
						export class WildcardTypeImpl extends java.lang.Object implements java.lang.reflect.WildcardType, java.io.Serializable {
							public static class: java.lang.Class<com.google.gson.internal.$Gson.Types.WildcardTypeImpl>;
							public toString(): string;
							public getTypeName(): string;
							public equals(param0: any): boolean;
							public getUpperBounds(): Array<java.lang.reflect.Type>;
							public hashCode(): number;
							public constructor(param0: Array<java.lang.reflect.Type>, param1: Array<java.lang.reflect.Type>);
							public getLowerBounds(): Array<java.lang.reflect.Type>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class ConstructorConstructor extends java.lang.Object {
					public static class: java.lang.Class<com.google.gson.internal.ConstructorConstructor>;
					public toString(): string;
					public get(param0: com.google.gson.reflect.TypeToken<any>): com.google.gson.internal.ObjectConstructor<any>;
					public constructor(param0: java.util.Map<java.lang.reflect.Type,com.google.gson.InstanceCreator<any>>);
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class Excluder extends java.lang.Object implements com.google.gson.TypeAdapterFactory, java.lang.Cloneable {
					public static class: java.lang.Class<com.google.gson.internal.Excluder>;
					public static DEFAULT: com.google.gson.internal.Excluder;
					public disableInnerClassSerialization(): com.google.gson.internal.Excluder;
					public clone(): com.google.gson.internal.Excluder;
					public clone(): any;
					public constructor();
					public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
					public excludeField(param0: java.lang.reflect.Field, param1: boolean): boolean;
					public excludeFieldsWithoutExposeAnnotation(): com.google.gson.internal.Excluder;
					public withExclusionStrategy(param0: com.google.gson.ExclusionStrategy, param1: boolean, param2: boolean): com.google.gson.internal.Excluder;
					public withVersion(param0: number): com.google.gson.internal.Excluder;
					public withModifiers(param0: number[]): com.google.gson.internal.Excluder;
					public excludeClass(param0: java.lang.Class<any>, param1: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class GsonBuildConfig extends java.lang.Object {
					public static class: java.lang.Class<com.google.gson.internal.GsonBuildConfig>;
					public static VERSION: string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class JavaVersion extends java.lang.Object {
					public static class: java.lang.Class<com.google.gson.internal.JavaVersion>;
					public static isJava9OrLater(): boolean;
					public static getMajorJavaVersion(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export abstract class JsonReaderInternalAccess extends java.lang.Object {
					public static class: java.lang.Class<com.google.gson.internal.JsonReaderInternalAccess>;
					public static INSTANCE: com.google.gson.internal.JsonReaderInternalAccess;
					public constructor();
					public promoteNameToValue(param0: com.google.gson.stream.JsonReader): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class LazilyParsedNumber extends java.lang.Number {
					public static class: java.lang.Class<com.google.gson.internal.LazilyParsedNumber>;
					public equals(param0: any): boolean;
					public intValue(): number;
					public toString(): string;
					public constructor(param0: string);
					public constructor();
					public doubleValue(): number;
					public floatValue(): number;
					public longValue(): number;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class LinkedHashTreeMap<K, V>  extends java.util.AbstractMap<any,any> implements java.io.Serializable  {
					public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap<any,any>>;
					public replace(param0: any, param1: any): any;
					public isEmpty(): boolean;
					public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
					public forEach(param0: any /* any<any,any>*/): void;
					public size(): number;
					public merge(param0: any, param1: any, param2: any /* any<any,any,any>*/): any;
					public put(param0: any, param1: any): any;
					public getOrDefault(param0: any, param1: any): any;
					public putAll(param0: java.util.Map<any,any>): void;
					public replace(param0: any, param1: any, param2: any): boolean;
					public remove(param0: any): any;
					public containsValue(param0: any): boolean;
					public constructor();
					public keySet(): java.util.Set<any>;
					public clear(): void;
					public hashCode(): number;
					public putIfAbsent(param0: any, param1: any): any;
					public remove(param0: any, param1: any): boolean;
					public computeIfAbsent(param0: any, param1: any /* any<any,any>*/): any;
					public constructor(param0: java.util.Comparator<any>);
					public values(): java.util.Collection<any>;
					public equals(param0: any): boolean;
					public containsKey(param0: any): boolean;
					public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
					public compute(param0: any, param1: any /* any<any,any,any>*/): any;
					public replaceAll(param0: any /* any<any,any,any>*/): void;
					public get(param0: any): any;
				}
				export module LinkedHashTreeMap {
					export class AvlBuilder<K, V>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.AvlBuilder<any,any>>;
					}
					export class AvlIterator<K, V>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.AvlIterator<any,any>>;
						public next(): com.google.gson.internal.LinkedHashTreeMap.Node<K,V>;
					}
					export class EntrySet extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.EntrySet>;
						public iterator(): java.util.Iterator<any>;
						public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
						public contains(param0: any): boolean;
						public add(param0: any): boolean;
						public stream(): java.util.stream.Stream<any>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public parallelStream(): java.util.stream.Stream<any>;
						public remove(param0: any): boolean;
						public toArray(param0: any[]): any[];
						public addAll(param0: java.util.Collection<any>): boolean;
						public retainAll(param0: java.util.Collection<any>): boolean;
						public removeIf(param0: any /* any*/): boolean;
						public spliterator(): java.util.Spliterator<any>;
						public isEmpty(): boolean;
						public clear(): void;
						public size(): number;
						public removeAll(param0: java.util.Collection<any>): boolean;
						public toArray(): any[];
						public containsAll(param0: java.util.Collection<any>): boolean;
					}
					export class KeySet extends java.util.AbstractSet<any> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.KeySet>;
						public iterator(): java.util.Iterator<any>;
						public contains(param0: any): boolean;
						public add(param0: any): boolean;
						public stream(): java.util.stream.Stream<any>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public parallelStream(): java.util.stream.Stream<any>;
						public remove(param0: any): boolean;
						public toArray(param0: any[]): any[];
						public addAll(param0: java.util.Collection<any>): boolean;
						public retainAll(param0: java.util.Collection<any>): boolean;
						public removeIf(param0: any /* any*/): boolean;
						public spliterator(): java.util.Spliterator<any>;
						public isEmpty(): boolean;
						public clear(): void;
						public size(): number;
						public removeAll(param0: java.util.Collection<any>): boolean;
						public toArray(): any[];
						public containsAll(param0: java.util.Collection<any>): boolean;
					}
					export abstract class LinkedTreeMapIterator<T>  extends java.util.Iterator<any> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.LinkedTreeMapIterator<any>>;
						public hasNext(): boolean;
						public remove(): void;
					}
					export class Node<K, V>  extends java.util.Map.Entry<any,any> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedHashTreeMap.Node<any,any>>;
						public first(): com.google.gson.internal.LinkedHashTreeMap.Node<any,any>;
						public setValue(param0: any): any;
						public getValue(): any;
						public getKey(): any;
						public static comparingByValue(): java.util.Comparator<any>;
						public static comparingByKey(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static comparingByKey(): java.util.Comparator<any>;
						public static comparingByValue(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public last(): com.google.gson.internal.LinkedHashTreeMap.Node<any,any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class LinkedTreeMap<K, V>  extends java.util.AbstractMap<any,any> implements java.io.Serializable  {
					public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap<any,any>>;
					public replace(param0: any, param1: any): any;
					public isEmpty(): boolean;
					public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
					public forEach(param0: any /* any<any,any>*/): void;
					public size(): number;
					public merge(param0: any, param1: any, param2: any /* any<any,any,any>*/): any;
					public put(param0: any, param1: any): any;
					public getOrDefault(param0: any, param1: any): any;
					public putAll(param0: java.util.Map<any,any>): void;
					public replace(param0: any, param1: any, param2: any): boolean;
					public remove(param0: any): any;
					public containsValue(param0: any): boolean;
					public constructor();
					public keySet(): java.util.Set<any>;
					public clear(): void;
					public hashCode(): number;
					public putIfAbsent(param0: any, param1: any): any;
					public remove(param0: any, param1: any): boolean;
					public computeIfAbsent(param0: any, param1: any /* any<any,any>*/): any;
					public constructor(param0: java.util.Comparator<any>);
					public values(): java.util.Collection<any>;
					public equals(param0: any): boolean;
					public containsKey(param0: any): boolean;
					public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
					public compute(param0: any, param1: any /* any<any,any,any>*/): any;
					public replaceAll(param0: any /* any<any,any,any>*/): void;
					public get(param0: any): any;
				}
				export module LinkedTreeMap {
					export class EntrySet extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap.EntrySet>;
						public iterator(): java.util.Iterator<any>;
						public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
						public contains(param0: any): boolean;
						public add(param0: any): boolean;
						public stream(): java.util.stream.Stream<any>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public parallelStream(): java.util.stream.Stream<any>;
						public remove(param0: any): boolean;
						public toArray(param0: any[]): any[];
						public addAll(param0: java.util.Collection<any>): boolean;
						public retainAll(param0: java.util.Collection<any>): boolean;
						public removeIf(param0: any /* any*/): boolean;
						public spliterator(): java.util.Spliterator<any>;
						public isEmpty(): boolean;
						public clear(): void;
						public size(): number;
						public removeAll(param0: java.util.Collection<any>): boolean;
						public toArray(): any[];
						public containsAll(param0: java.util.Collection<any>): boolean;
					}
					export class KeySet extends java.util.AbstractSet<any> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap.KeySet>;
						public iterator(): java.util.Iterator<any>;
						public contains(param0: any): boolean;
						public add(param0: any): boolean;
						public stream(): java.util.stream.Stream<any>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public parallelStream(): java.util.stream.Stream<any>;
						public remove(param0: any): boolean;
						public toArray(param0: any[]): any[];
						public addAll(param0: java.util.Collection<any>): boolean;
						public retainAll(param0: java.util.Collection<any>): boolean;
						public removeIf(param0: any /* any*/): boolean;
						public spliterator(): java.util.Spliterator<any>;
						public isEmpty(): boolean;
						public clear(): void;
						public size(): number;
						public removeAll(param0: java.util.Collection<any>): boolean;
						public toArray(): any[];
						public containsAll(param0: java.util.Collection<any>): boolean;
					}
					export abstract class LinkedTreeMapIterator<T>  extends java.util.Iterator<any> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap.LinkedTreeMapIterator<any>>;
						public hasNext(): boolean;
						public remove(): void;
					}
					export class Node<K, V>  extends java.util.Map.Entry<any,any> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap.Node<any,any>>;
						public setValue(param0: any): any;
						public getValue(): any;
						public last(): com.google.gson.internal.LinkedTreeMap.Node<any,any>;
						public getKey(): any;
						public static comparingByValue(): java.util.Comparator<any>;
						public static comparingByKey(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static comparingByKey(): java.util.Comparator<any>;
						public static comparingByValue(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public first(): com.google.gson.internal.LinkedTreeMap.Node<any,any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class ObjectConstructor<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.google.gson.internal.ObjectConstructor<any>>;
					/**
					 * Constructs a new instance of the com.google.gson.internal.ObjectConstructor<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						construct(): T;
					});
					public constructor();
					public construct(): T;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class PreJava9DateFormatProvider extends java.lang.Object {
					public static class: java.lang.Class<com.google.gson.internal.PreJava9DateFormatProvider>;
					public constructor();
					public static getUSDateTimeFormat(param0: number, param1: number): java.text.DateFormat;
					public static getUSDateFormat(param0: number): java.text.DateFormat;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class Primitives extends java.lang.Object {
					public static class: java.lang.Class<com.google.gson.internal.Primitives>;
					public static unwrap(param0: java.lang.Class<any>): java.lang.Class<any>;
					public static isWrapperType(param0: java.lang.reflect.Type): boolean;
					public static wrap(param0: java.lang.Class<any>): java.lang.Class<any>;
					public static isPrimitive(param0: java.lang.reflect.Type): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class Streams extends java.lang.Object {
					public static class: java.lang.Class<com.google.gson.internal.Streams>;
					public static write(param0: com.google.gson.JsonElement, param1: com.google.gson.stream.JsonWriter): void;
					public static parse(param0: com.google.gson.stream.JsonReader): com.google.gson.JsonElement;
					public static writerForAppendable(param0: java.lang.Appendable): java.io.Writer;
				}
				export module Streams {
					export class AppendableWriter extends java.io.Writer {
						public static class: java.lang.Class<com.google.gson.internal.Streams.AppendableWriter>;
						public write(param0: string, param1: number, param2: number): void;
						public append(param0: string, param1: number, param2: number): java.io.Writer;
						public append(param0: string): java.io.Writer;
						public close(): void;
						public write(param0: number): void;
						public append(param0: string): java.lang.Appendable;
						public flush(): void;
						public write(param0: string[]): void;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
						public write(param0: string[], param1: number, param2: number): void;
						public write(param0: string): void;
					}
					export module AppendableWriter {
						export class CurrentWrite extends java.lang.Object implements java.lang.CharSequence {
							public static class: java.lang.Class<com.google.gson.internal.Streams.AppendableWriter.CurrentWrite>;
							public charAt(param0: number): string;
							public codePoints(): java.util.stream.IntStream;
							public chars(): java.util.stream.IntStream;
							public toString(): string;
							public length(): number;
							public subSequence(param0: number, param1: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export abstract class UnsafeAllocator extends java.lang.Object {
					public static class: java.lang.Class<com.google.gson.internal.UnsafeAllocator>;
					public static create(): com.google.gson.internal.UnsafeAllocator;
					public constructor();
					public newInstance(param0: java.lang.Class<any>): any;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class ArrayTypeAdapter<E>  extends com.google.gson.TypeAdapter<any> {
						public static class: java.lang.Class<com.google.gson.internal.bind.ArrayTypeAdapter<any>>;
						public static FACTORY: com.google.gson.TypeAdapterFactory;
						public constructor();
						public read(param0: com.google.gson.stream.JsonReader): any;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
						public constructor(param0: com.google.gson.Gson, param1: com.google.gson.TypeAdapter<any>, param2: java.lang.Class<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class CollectionTypeAdapterFactory extends java.lang.Object implements com.google.gson.TypeAdapterFactory {
						public static class: java.lang.Class<com.google.gson.internal.bind.CollectionTypeAdapterFactory>;
						public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
						public constructor(param0: com.google.gson.internal.ConstructorConstructor);
					}
					export module CollectionTypeAdapterFactory {
						export class Adapter<E>  extends com.google.gson.TypeAdapter<java.util.Collection<any>> {
							public static class: java.lang.Class<com.google.gson.internal.bind.CollectionTypeAdapterFactory.Adapter<any>>;
							public constructor();
							public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
							public constructor(param0: com.google.gson.Gson, param1: java.lang.reflect.Type, param2: com.google.gson.TypeAdapter<any>, param3: com.google.gson.internal.ObjectConstructor<any>);
							public read(param0: com.google.gson.stream.JsonReader): java.util.Collection<any>;
							public read(param0: com.google.gson.stream.JsonReader): any;
							public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.Collection<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class DateTypeAdapter extends com.google.gson.TypeAdapter<java.util.Date> {
						public static class: java.lang.Class<com.google.gson.internal.bind.DateTypeAdapter>;
						public static FACTORY: com.google.gson.TypeAdapterFactory;
						public constructor();
						public read(param0: com.google.gson.stream.JsonReader): java.util.Date;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
						public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.Date): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class JsonAdapterAnnotationTypeAdapterFactory extends java.lang.Object implements com.google.gson.TypeAdapterFactory {
						public static class: java.lang.Class<com.google.gson.internal.bind.JsonAdapterAnnotationTypeAdapterFactory>;
						public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
						public constructor(param0: com.google.gson.internal.ConstructorConstructor);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class JsonTreeReader extends com.google.gson.stream.JsonReader {
						public static class: java.lang.Class<com.google.gson.internal.bind.JsonTreeReader>;
						public nextNull(): void;
						public beginObject(): void;
						public promoteNameToValue(): void;
						public nextBoolean(): boolean;
						public close(): void;
						public endArray(): void;
						public getPath(): string;
						public beginArray(): void;
						public endObject(): void;
						public toString(): string;
						public nextInt(): number;
						public peek(): com.google.gson.stream.JsonToken;
						public nextLong(): number;
						public nextName(): string;
						public skipValue(): void;
						public constructor(param0: java.io.Reader);
						public hasNext(): boolean;
						public constructor(param0: com.google.gson.JsonElement);
						public nextDouble(): number;
						public nextString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class JsonTreeWriter extends com.google.gson.stream.JsonWriter {
						public static class: java.lang.Class<com.google.gson.internal.bind.JsonTreeWriter>;
						public nullValue(): com.google.gson.stream.JsonWriter;
						public constructor();
						public name(param0: string): com.google.gson.stream.JsonWriter;
						public value(param0: boolean): com.google.gson.stream.JsonWriter;
						public value(param0: number): com.google.gson.stream.JsonWriter;
						public close(): void;
						public constructor(param0: java.io.Writer);
						public flush(): void;
						public endObject(): com.google.gson.stream.JsonWriter;
						public value(param0: java.lang.Boolean): com.google.gson.stream.JsonWriter;
						public beginArray(): com.google.gson.stream.JsonWriter;
						public endArray(): com.google.gson.stream.JsonWriter;
						public beginObject(): com.google.gson.stream.JsonWriter;
						public value(param0: java.lang.Number): com.google.gson.stream.JsonWriter;
						public get(): com.google.gson.JsonElement;
						public value(param0: string): com.google.gson.stream.JsonWriter;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class MapTypeAdapterFactory extends java.lang.Object implements com.google.gson.TypeAdapterFactory {
						public static class: java.lang.Class<com.google.gson.internal.bind.MapTypeAdapterFactory>;
						public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
						public constructor(param0: com.google.gson.internal.ConstructorConstructor, param1: boolean);
					}
					export module MapTypeAdapterFactory {
						export class Adapter<K, V>  extends com.google.gson.TypeAdapter<java.util.Map<any,any>> {
							public static class: java.lang.Class<com.google.gson.internal.bind.MapTypeAdapterFactory.Adapter<any,any>>;
							public constructor();
							public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
							public read(param0: com.google.gson.stream.JsonReader): java.util.Map<any,any>;
							public read(param0: com.google.gson.stream.JsonReader): any;
							public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.Map<any,any>): void;
							public constructor(param0: com.google.gson.Gson, param1: java.lang.reflect.Type, param2: com.google.gson.TypeAdapter<any>, param3: java.lang.reflect.Type, param4: com.google.gson.TypeAdapter<any>, param5: com.google.gson.internal.ObjectConstructor<any>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class ObjectTypeAdapter extends com.google.gson.TypeAdapter<any> {
						public static class: java.lang.Class<com.google.gson.internal.bind.ObjectTypeAdapter>;
						public static FACTORY: com.google.gson.TypeAdapterFactory;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class ReflectiveTypeAdapterFactory extends java.lang.Object implements com.google.gson.TypeAdapterFactory {
						public static class: java.lang.Class<com.google.gson.internal.bind.ReflectiveTypeAdapterFactory>;
						public constructor(param0: com.google.gson.internal.ConstructorConstructor, param1: com.google.gson.FieldNamingStrategy, param2: com.google.gson.internal.Excluder, param3: com.google.gson.internal.bind.JsonAdapterAnnotationTypeAdapterFactory);
						public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
						public excludeField(param0: java.lang.reflect.Field, param1: boolean): boolean;
					}
					export module ReflectiveTypeAdapterFactory {
						export class Adapter<T>  extends com.google.gson.TypeAdapter<any> {
							public static class: java.lang.Class<com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.Adapter<any>>;
							public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
							public read(param0: com.google.gson.stream.JsonReader): any;
						}
						export abstract class BoundField extends java.lang.Object {
							public static class: java.lang.Class<com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.BoundField>;
							public constructor(param0: string, param1: boolean, param2: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class SqlDateTypeAdapter extends com.google.gson.TypeAdapter<java.sql.Date> {
						public static class: java.lang.Class<com.google.gson.internal.bind.SqlDateTypeAdapter>;
						public static FACTORY: com.google.gson.TypeAdapterFactory;
						public constructor();
						public write(param0: com.google.gson.stream.JsonWriter, param1: java.sql.Date): void;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public read(param0: com.google.gson.stream.JsonReader): java.sql.Date;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class TimeTypeAdapter extends com.google.gson.TypeAdapter<java.sql.Time> {
						public static class: java.lang.Class<com.google.gson.internal.bind.TimeTypeAdapter>;
						public static FACTORY: com.google.gson.TypeAdapterFactory;
						public constructor();
						public read(param0: com.google.gson.stream.JsonReader): java.sql.Time;
						public write(param0: com.google.gson.stream.JsonWriter, param1: java.sql.Time): void;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class TreeTypeAdapter<T>  extends com.google.gson.TypeAdapter<any> {
						public static class: java.lang.Class<com.google.gson.internal.bind.TreeTypeAdapter<any>>;
						public constructor();
						public constructor(param0: com.google.gson.JsonSerializer<any>, param1: com.google.gson.JsonDeserializer<any>, param2: com.google.gson.Gson, param3: com.google.gson.reflect.TypeToken<any>, param4: com.google.gson.TypeAdapterFactory);
						public static newTypeHierarchyFactory(param0: java.lang.Class<any>, param1: any): com.google.gson.TypeAdapterFactory;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public static newFactoryWithMatchRawType(param0: com.google.gson.reflect.TypeToken<any>, param1: any): com.google.gson.TypeAdapterFactory;
						public static newFactory(param0: com.google.gson.reflect.TypeToken<any>, param1: any): com.google.gson.TypeAdapterFactory;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
					}
					export module TreeTypeAdapter {
						export class GsonContextImpl extends java.lang.Object implements com.google.gson.JsonSerializationContext, com.google.gson.JsonDeserializationContext {
							public static class: java.lang.Class<com.google.gson.internal.bind.TreeTypeAdapter.GsonContextImpl>;
							public serialize(param0: any): com.google.gson.JsonElement;
							public serialize(param0: any, param1: java.lang.reflect.Type): com.google.gson.JsonElement;
							public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type): any;
						}
						export class SingleTypeFactory extends java.lang.Object implements com.google.gson.TypeAdapterFactory {
							public static class: java.lang.Class<com.google.gson.internal.bind.TreeTypeAdapter.SingleTypeFactory>;
							public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class TypeAdapterRuntimeTypeWrapper<T>  extends com.google.gson.TypeAdapter<any> {
						public static class: java.lang.Class<com.google.gson.internal.bind.TypeAdapterRuntimeTypeWrapper<any>>;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export class TypeAdapters extends java.lang.Object {
						public static class: java.lang.Class<com.google.gson.internal.bind.TypeAdapters>;
						public static CLASS: com.google.gson.TypeAdapter<java.lang.Class<any>>;
						public static CLASS_FACTORY: com.google.gson.TypeAdapterFactory;
						public static BIT_SET: com.google.gson.TypeAdapter<java.util.BitSet>;
						public static BIT_SET_FACTORY: com.google.gson.TypeAdapterFactory;
						public static BOOLEAN: com.google.gson.TypeAdapter<java.lang.Boolean>;
						public static BOOLEAN_AS_STRING: com.google.gson.TypeAdapter<java.lang.Boolean>;
						public static BOOLEAN_FACTORY: com.google.gson.TypeAdapterFactory;
						public static BYTE: com.google.gson.TypeAdapter<java.lang.Number>;
						public static BYTE_FACTORY: com.google.gson.TypeAdapterFactory;
						public static SHORT: com.google.gson.TypeAdapter<java.lang.Number>;
						public static SHORT_FACTORY: com.google.gson.TypeAdapterFactory;
						public static INTEGER: com.google.gson.TypeAdapter<java.lang.Number>;
						public static INTEGER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static ATOMIC_INTEGER: com.google.gson.TypeAdapter<java.util.concurrent.atomic.AtomicInteger>;
						public static ATOMIC_INTEGER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static ATOMIC_BOOLEAN: com.google.gson.TypeAdapter<java.util.concurrent.atomic.AtomicBoolean>;
						public static ATOMIC_BOOLEAN_FACTORY: com.google.gson.TypeAdapterFactory;
						public static ATOMIC_INTEGER_ARRAY: com.google.gson.TypeAdapter<java.util.concurrent.atomic.AtomicIntegerArray>;
						public static ATOMIC_INTEGER_ARRAY_FACTORY: com.google.gson.TypeAdapterFactory;
						public static LONG: com.google.gson.TypeAdapter<java.lang.Number>;
						public static FLOAT: com.google.gson.TypeAdapter<java.lang.Number>;
						public static DOUBLE: com.google.gson.TypeAdapter<java.lang.Number>;
						public static NUMBER: com.google.gson.TypeAdapter<java.lang.Number>;
						public static NUMBER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static CHARACTER: com.google.gson.TypeAdapter<java.lang.Character>;
						public static CHARACTER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static STRING: com.google.gson.TypeAdapter<string>;
						public static BIG_DECIMAL: com.google.gson.TypeAdapter<java.math.BigDecimal>;
						public static BIG_INTEGER: com.google.gson.TypeAdapter<java.math.BigInteger>;
						public static STRING_FACTORY: com.google.gson.TypeAdapterFactory;
						public static STRING_BUILDER: com.google.gson.TypeAdapter<java.lang.StringBuilder>;
						public static STRING_BUILDER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static STRING_BUFFER: com.google.gson.TypeAdapter<java.lang.StringBuffer>;
						public static STRING_BUFFER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static URL: com.google.gson.TypeAdapter<java.net.URL>;
						public static URL_FACTORY: com.google.gson.TypeAdapterFactory;
						public static URI: com.google.gson.TypeAdapter<java.net.URI>;
						public static URI_FACTORY: com.google.gson.TypeAdapterFactory;
						public static INET_ADDRESS: com.google.gson.TypeAdapter<java.net.InetAddress>;
						public static INET_ADDRESS_FACTORY: com.google.gson.TypeAdapterFactory;
						public static UUID: com.google.gson.TypeAdapter<java.util.UUID>;
						public static UUID_FACTORY: com.google.gson.TypeAdapterFactory;
						public static CURRENCY: com.google.gson.TypeAdapter<java.util.Currency>;
						public static CURRENCY_FACTORY: com.google.gson.TypeAdapterFactory;
						public static TIMESTAMP_FACTORY: com.google.gson.TypeAdapterFactory;
						public static CALENDAR: com.google.gson.TypeAdapter<java.util.Calendar>;
						public static CALENDAR_FACTORY: com.google.gson.TypeAdapterFactory;
						public static LOCALE: com.google.gson.TypeAdapter<java.util.Locale>;
						public static LOCALE_FACTORY: com.google.gson.TypeAdapterFactory;
						public static JSON_ELEMENT: com.google.gson.TypeAdapter<com.google.gson.JsonElement>;
						public static JSON_ELEMENT_FACTORY: com.google.gson.TypeAdapterFactory;
						public static ENUM_FACTORY: com.google.gson.TypeAdapterFactory;
						public static newFactory(param0: java.lang.Class<any>, param1: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
						public static newFactoryForMultipleTypes(param0: java.lang.Class<any>, param1: java.lang.Class<any>, param2: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
						public static newTypeHierarchyFactory(param0: java.lang.Class<any>, param1: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
						public static newFactory(param0: com.google.gson.reflect.TypeToken<any>, param1: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
						public static newFactory(param0: java.lang.Class<any>, param1: java.lang.Class<any>, param2: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
					}
					export module TypeAdapters {
						export class EnumTypeAdapter<T>  extends com.google.gson.TypeAdapter<any> {
							public static class: java.lang.Class<com.google.gson.internal.bind.TypeAdapters.EnumTypeAdapter<any>>;
							public constructor();
							public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
							public constructor(param0: java.lang.Class<any>);
							public read(param0: com.google.gson.stream.JsonReader): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module bind {
					export module util {
						export class ISO8601Utils extends java.lang.Object {
							public static class: java.lang.Class<com.google.gson.internal.bind.util.ISO8601Utils>;
							public constructor();
							public static format(param0: java.util.Date): string;
							public static format(param0: java.util.Date, param1: boolean, param2: java.util.TimeZone): string;
							public static parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
							public static format(param0: java.util.Date, param1: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module reflect {
					export class PreJava9ReflectionAccessor extends com.google.gson.internal.reflect.ReflectionAccessor {
						public static class: java.lang.Class<com.google.gson.internal.reflect.PreJava9ReflectionAccessor>;
						public makeAccessible(param0: java.lang.reflect.AccessibleObject): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module reflect {
					export abstract class ReflectionAccessor extends java.lang.Object {
						public static class: java.lang.Class<com.google.gson.internal.reflect.ReflectionAccessor>;
						public static getInstance(): com.google.gson.internal.reflect.ReflectionAccessor;
						public constructor();
						public makeAccessible(param0: java.lang.reflect.AccessibleObject): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export module reflect {
					export class UnsafeReflectionAccessor extends com.google.gson.internal.reflect.ReflectionAccessor {
						public static class: java.lang.Class<com.google.gson.internal.reflect.UnsafeReflectionAccessor>;
						public makeAccessible(param0: java.lang.reflect.AccessibleObject): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module reflect {
				export class TypeToken<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.google.gson.reflect.TypeToken<any>>;
					public static get(param0: java.lang.Class<any>): com.google.gson.reflect.TypeToken<any>;
					public getType(): java.lang.reflect.Type;
					/** @deprecated */
					public isAssignableFrom(param0: java.lang.Class<any>): boolean;
					public static getParameterized(param0: java.lang.reflect.Type, param1: Array<java.lang.reflect.Type>): com.google.gson.reflect.TypeToken<any>;
					public static get(param0: java.lang.reflect.Type): com.google.gson.reflect.TypeToken<any>;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor();
					/** @deprecated */
					public isAssignableFrom(param0: java.lang.reflect.Type): boolean;
					public static getArray(param0: java.lang.reflect.Type): com.google.gson.reflect.TypeToken<any>;
					/** @deprecated */
					public isAssignableFrom(param0: com.google.gson.reflect.TypeToken<any>): boolean;
					public hashCode(): number;
					public getRawType(): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module stream {
				export class JsonReader extends java.lang.Object implements java.io.Closeable {
					public static class: java.lang.Class<com.google.gson.stream.JsonReader>;
					public beginArray(): void;
					public nextBoolean(): boolean;
					public isLenient(): boolean;
					public nextNull(): void;
					public constructor(param0: java.io.Reader);
					public nextString(): string;
					public nextDouble(): number;
					public nextLong(): number;
					public setLenient(param0: boolean): void;
					public hasNext(): boolean;
					public beginObject(): void;
					public getPath(): string;
					public peek(): com.google.gson.stream.JsonToken;
					public toString(): string;
					public endObject(): void;
					public nextInt(): number;
					public close(): void;
					public endArray(): void;
					public skipValue(): void;
					public nextName(): string;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module stream {
				export class JsonScope extends java.lang.Object {
					public static class: java.lang.Class<com.google.gson.stream.JsonScope>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module stream {
				export class JsonToken {
					public static class: java.lang.Class<com.google.gson.stream.JsonToken>;
					public static BEGIN_ARRAY: com.google.gson.stream.JsonToken;
					public static END_ARRAY: com.google.gson.stream.JsonToken;
					public static BEGIN_OBJECT: com.google.gson.stream.JsonToken;
					public static END_OBJECT: com.google.gson.stream.JsonToken;
					public static NAME: com.google.gson.stream.JsonToken;
					public static STRING: com.google.gson.stream.JsonToken;
					public static NUMBER: com.google.gson.stream.JsonToken;
					public static BOOLEAN: com.google.gson.stream.JsonToken;
					public static NULL: com.google.gson.stream.JsonToken;
					public static END_DOCUMENT: com.google.gson.stream.JsonToken;
					public static values(): Array<com.google.gson.stream.JsonToken>;
					public static valueOf(param0: string): com.google.gson.stream.JsonToken;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module stream {
				export class JsonWriter extends java.lang.Object implements java.io.Closeable, java.io.Flushable {
					public static class: java.lang.Class<com.google.gson.stream.JsonWriter>;
					public isHtmlSafe(): boolean;
					public beginArray(): com.google.gson.stream.JsonWriter;
					public jsonValue(param0: string): com.google.gson.stream.JsonWriter;
					public isLenient(): boolean;
					public setSerializeNulls(param0: boolean): void;
					public flush(): void;
					public setLenient(param0: boolean): void;
					public beginObject(): com.google.gson.stream.JsonWriter;
					public value(param0: number): com.google.gson.stream.JsonWriter;
					public name(param0: string): com.google.gson.stream.JsonWriter;
					public setHtmlSafe(param0: boolean): void;
					public getSerializeNulls(): boolean;
					public endArray(): com.google.gson.stream.JsonWriter;
					public nullValue(): com.google.gson.stream.JsonWriter;
					public constructor(param0: java.io.Writer);
					public close(): void;
					public setIndent(param0: string): void;
					public value(param0: string): com.google.gson.stream.JsonWriter;
					public value(param0: java.lang.Boolean): com.google.gson.stream.JsonWriter;
					public endObject(): com.google.gson.stream.JsonWriter;
					public value(param0: boolean): com.google.gson.stream.JsonWriter;
					public value(param0: java.lang.Number): com.google.gson.stream.JsonWriter;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module stream {
				export class MalformedJsonException extends java.io.IOException {
					public static class: java.lang.Class<com.google.gson.stream.MalformedJsonException>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
				}
			}
		}
	}
}

//Generics information:
//com.google.gson.Gson.FutureTypeAdapter:1
//com.google.gson.InstanceCreator:1
//com.google.gson.JsonDeserializer:1
//com.google.gson.JsonSerializer:1
//com.google.gson.TypeAdapter:1
//com.google.gson.internal.LinkedHashTreeMap:2
//com.google.gson.internal.LinkedHashTreeMap.AvlBuilder:2
//com.google.gson.internal.LinkedHashTreeMap.AvlIterator:2
//com.google.gson.internal.LinkedHashTreeMap.LinkedTreeMapIterator:1
//com.google.gson.internal.LinkedHashTreeMap.Node:2
//com.google.gson.internal.LinkedTreeMap:2
//com.google.gson.internal.LinkedTreeMap.LinkedTreeMapIterator:1
//com.google.gson.internal.LinkedTreeMap.Node:2
//com.google.gson.internal.ObjectConstructor:1
//com.google.gson.internal.bind.ArrayTypeAdapter:1
//com.google.gson.internal.bind.CollectionTypeAdapterFactory.Adapter:1
//com.google.gson.internal.bind.MapTypeAdapterFactory.Adapter:2
//com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.Adapter:1
//com.google.gson.internal.bind.TreeTypeAdapter:1
//com.google.gson.internal.bind.TypeAdapterRuntimeTypeWrapper:1
//com.google.gson.internal.bind.TypeAdapters.EnumTypeAdapter:1
//com.google.gson.reflect.TypeToken:1


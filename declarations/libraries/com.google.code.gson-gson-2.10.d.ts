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
				public getAnnotation(annotation: java.lang.Class<any>): java.lang.annotation.Annotation;
				public getDeclaredClass(): java.lang.Class<any>;
				public getDeclaredType(): java.lang.reflect.Type;
				public getName(): string;
				public toString(): string;
				public getAnnotations(): java.util.Collection<java.lang.annotation.Annotation>;
				public hasModifier(modifier: number): boolean;
				public constructor(f: java.lang.reflect.Field);
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
				public static UPPER_CASE_WITH_UNDERSCORES: com.google.gson.FieldNamingPolicy;
				public static LOWER_CASE_WITH_UNDERSCORES: com.google.gson.FieldNamingPolicy;
				public static LOWER_CASE_WITH_DASHES: com.google.gson.FieldNamingPolicy;
				public static LOWER_CASE_WITH_DOTS: com.google.gson.FieldNamingPolicy;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public translateName(param0: java.lang.reflect.Field): string;
				public static values(): com.google.gson.FieldNamingPolicy[];
				public static valueOf(name: string): com.google.gson.FieldNamingPolicy;
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
				public toJson(jsonElement: com.google.gson.JsonElement, writer: com.google.gson.stream.JsonWriter): void;
				public fromJson(json: string, typeOfT: java.lang.reflect.Type): any;
				public fromJson(json: java.io.Reader, classOfT: java.lang.Class<any>): any;
				public serializeNulls(): boolean;
				public fromJson(json: string, classOfT: java.lang.Class<any>): any;
				public fromJson(json: com.google.gson.JsonElement, typeOfT: com.google.gson.reflect.TypeToken<any>): any;
				public htmlSafe(): boolean;
				public constructor();
				public fieldNamingStrategy(): com.google.gson.FieldNamingStrategy;
				public toJson(jsonElement: com.google.gson.JsonElement): string;
				public fromJson(json: java.io.Reader, typeOfT: com.google.gson.reflect.TypeToken<any>): any;
				public getAdapter(type: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
				public toJsonTree(src: any, typeOfSrc: java.lang.reflect.Type): com.google.gson.JsonElement;
				/** @deprecated */
				public excluder(): com.google.gson.internal.Excluder;
				public toJson(src: any, typeOfSrc: java.lang.reflect.Type, writer: java.lang.Appendable): void;
				public newBuilder(): com.google.gson.GsonBuilder;
				public toJson(src: any, writer: java.lang.Appendable): void;
				public newJsonWriter(writer: java.io.Writer): com.google.gson.stream.JsonWriter;
				public fromJson(json: string, typeOfT: com.google.gson.reflect.TypeToken<any>): any;
				public getDelegateAdapter(skipPast: com.google.gson.TypeAdapterFactory, type: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
				public newJsonReader(reader: java.io.Reader): com.google.gson.stream.JsonReader;
				public fromJson(reader: com.google.gson.stream.JsonReader, typeOfT: com.google.gson.reflect.TypeToken<any>): any;
				public toString(): string;
				public toJson(src: any): string;
				public fromJson(reader: com.google.gson.stream.JsonReader, typeOfT: java.lang.reflect.Type): any;
				public toJsonTree(src: any): com.google.gson.JsonElement;
				public toJson(src: any, typeOfSrc: java.lang.reflect.Type, writer: com.google.gson.stream.JsonWriter): void;
				public getAdapter(type: java.lang.Class<any>): com.google.gson.TypeAdapter<any>;
				public toJson(src: any, typeOfSrc: java.lang.reflect.Type): string;
				public toJson(jsonElement: com.google.gson.JsonElement, writer: java.lang.Appendable): void;
				public fromJson(json: com.google.gson.JsonElement, classOfT: java.lang.Class<any>): any;
				public fromJson(json: com.google.gson.JsonElement, typeOfT: java.lang.reflect.Type): any;
				public fromJson(json: java.io.Reader, typeOfT: java.lang.reflect.Type): any;
			}
			export module Gson {
				export class FutureTypeAdapter<T>  extends com.google.gson.internal.bind.SerializationDelegatingTypeAdapter<any> {
					public static class: java.lang.Class<com.google.gson.Gson.FutureTypeAdapter<any>>;
					public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
					public getSerializationDelegate(): com.google.gson.TypeAdapter<any>;
					public write(out: com.google.gson.stream.JsonWriter, value: any): void;
					public setDelegate(typeAdapter: com.google.gson.TypeAdapter<any>): void;
					public read(in: com.google.gson.stream.JsonReader): any;
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
				public setNumberToNumberStrategy(numberToNumberStrategy: com.google.gson.ToNumberStrategy): com.google.gson.GsonBuilder;
				public disableJdkUnsafe(): com.google.gson.GsonBuilder;
				public setFieldNamingStrategy(fieldNamingStrategy: com.google.gson.FieldNamingStrategy): com.google.gson.GsonBuilder;
				public setLenient(): com.google.gson.GsonBuilder;
				public addReflectionAccessFilter(filter: com.google.gson.ReflectionAccessFilter): com.google.gson.GsonBuilder;
				public constructor();
				public addDeserializationExclusionStrategy(strategy: com.google.gson.ExclusionStrategy): com.google.gson.GsonBuilder;
				public setExclusionStrategies(...strategies: com.google.gson.ExclusionStrategy[]): com.google.gson.GsonBuilder;
				public generateNonExecutableJson(): com.google.gson.GsonBuilder;
				public excludeFieldsWithoutExposeAnnotation(): com.google.gson.GsonBuilder;
				public setDateFormat(style: number): com.google.gson.GsonBuilder;
				public setDateFormat(pattern: string): com.google.gson.GsonBuilder;
				public registerTypeAdapterFactory(factory: com.google.gson.TypeAdapterFactory): com.google.gson.GsonBuilder;
				public registerTypeHierarchyAdapter(baseType: java.lang.Class<any>, typeAdapter: any): com.google.gson.GsonBuilder;
				public setVersion(version: number): com.google.gson.GsonBuilder;
				public serializeNulls(): com.google.gson.GsonBuilder;
				public serializeSpecialFloatingPointValues(): com.google.gson.GsonBuilder;
				public excludeFieldsWithModifiers(...modifiers: number[]): com.google.gson.GsonBuilder;
				public setDateFormat(dateStyle: number, timeStyle: number): com.google.gson.GsonBuilder;
				public registerTypeAdapter(type: java.lang.reflect.Type, typeAdapter: any): com.google.gson.GsonBuilder;
				public setObjectToNumberStrategy(objectToNumberStrategy: com.google.gson.ToNumberStrategy): com.google.gson.GsonBuilder;
				public enableComplexMapKeySerialization(): com.google.gson.GsonBuilder;
				public create(): com.google.gson.Gson;
				public setFieldNamingPolicy(namingConvention: com.google.gson.FieldNamingPolicy): com.google.gson.GsonBuilder;
				public disableInnerClassSerialization(): com.google.gson.GsonBuilder;
				public disableHtmlEscaping(): com.google.gson.GsonBuilder;
				public setLongSerializationPolicy(serializationPolicy: com.google.gson.LongSerializationPolicy): com.google.gson.GsonBuilder;
				public addSerializationExclusionStrategy(strategy: com.google.gson.ExclusionStrategy): com.google.gson.GsonBuilder;
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
				public getAsLong(): number;
				public deepCopy(): com.google.gson.JsonArray;
				public getAsShort(): number;
				public set(index: number, element: com.google.gson.JsonElement): com.google.gson.JsonElement;
				public getAsBigDecimal(): java.math.BigDecimal;
				public asList(): java.util.List<com.google.gson.JsonElement>;
				public constructor();
				public add(string: string): void;
				public getAsInt(): number;
				public getAsBoolean(): boolean;
				public hashCode(): number;
				public remove(index: number): com.google.gson.JsonElement;
				/** @deprecated */
				public getAsCharacter(): string;
				public getAsDouble(): number;
				public equals(o: any): boolean;
				public addAll(array: com.google.gson.JsonArray): void;
				public isEmpty(): boolean;
				public iterator(): java.util.Iterator<com.google.gson.JsonElement>;
				public getAsString(): string;
				public remove(element: com.google.gson.JsonElement): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public constructor(capacity: number);
				public add(bool: java.lang.Boolean): void;
				public add(number: java.lang.Number): void;
				public get(i: number): com.google.gson.JsonElement;
				public iterator(): java.util.Iterator<any>;
				public forEach(action: any /* any*/): void;
				public size(): number;
				public deepCopy(): com.google.gson.JsonElement;
				public getAsBigInteger(): java.math.BigInteger;
				public getAsByte(): number;
				/** @deprecated */
				public constructor();
				public equals(obj: any): boolean;
				public add(element: com.google.gson.JsonElement): void;
				public add(character: java.lang.Character): void;
				public contains(element: com.google.gson.JsonElement): boolean;
				public getAsFloat(): number;
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
				public getAsJsonNull(): com.google.gson.JsonNull;
				public deepCopy(): com.google.gson.JsonElement;
				public getAsByte(): number;
				public getAsBigInteger(): java.math.BigInteger;
				public getAsBoolean(): boolean;
				public getAsInt(): number;
				/** @deprecated */
				public constructor();
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
				public constructor(msg: string, cause: java.lang.Throwable);
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(msg: string);
				public constructor();
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
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public hashCode(): number;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonObject extends com.google.gson.JsonElement {
				public static class: java.lang.Class<com.google.gson.JsonObject>;
				public remove(property: string): com.google.gson.JsonElement;
				public getAsJsonArray(memberName: string): com.google.gson.JsonArray;
				public getAsJsonPrimitive(): com.google.gson.JsonPrimitive;
				public keySet(): java.util.Set<string>;
				public addProperty(property: string, value: java.lang.Number): void;
				public getAsJsonObject(memberName: string): com.google.gson.JsonObject;
				public constructor();
				public deepCopy(): com.google.gson.JsonObject;
				public addProperty(property: string, value: java.lang.Character): void;
				public hashCode(): number;
				public getAsJsonObject(): com.google.gson.JsonObject;
				public equals(o: any): boolean;
				public getAsJsonPrimitive(memberName: string): com.google.gson.JsonPrimitive;
				public has(memberName: string): boolean;
				public getAsJsonArray(): com.google.gson.JsonArray;
				public entrySet(): java.util.Set<java.util.Map.Entry<string,com.google.gson.JsonElement>>;
				public asMap(): java.util.Map<string,com.google.gson.JsonElement>;
				public addProperty(property: string, value: string): void;
				public size(): number;
				public deepCopy(): com.google.gson.JsonElement;
				public get(memberName: string): com.google.gson.JsonElement;
				/** @deprecated */
				public constructor();
				public equals(obj: any): boolean;
				public addProperty(property: string, value: java.lang.Boolean): void;
				public add(property: string, value: com.google.gson.JsonElement): void;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonParseException extends java.lang.RuntimeException {
				public static class: java.lang.Class<com.google.gson.JsonParseException>;
				public constructor(msg: string, cause: java.lang.Throwable);
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(msg: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonParser extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.JsonParser>;
				public static parseReader(reader: com.google.gson.stream.JsonReader): com.google.gson.JsonElement;
				/** @deprecated */
				public constructor();
				public static parseString(json: string): com.google.gson.JsonElement;
				/** @deprecated */
				public parse(json: com.google.gson.stream.JsonReader): com.google.gson.JsonElement;
				public static parseReader(reader: java.io.Reader): com.google.gson.JsonElement;
				/** @deprecated */
				public parse(json: string): com.google.gson.JsonElement;
				/** @deprecated */
				public parse(json: java.io.Reader): com.google.gson.JsonElement;
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonPrimitive extends com.google.gson.JsonElement {
				public static class: java.lang.Class<com.google.gson.JsonPrimitive>;
				public deepCopy(): com.google.gson.JsonPrimitive;
				public getAsLong(): number;
				public isNumber(): boolean;
				public getAsShort(): number;
				public constructor(bool: java.lang.Boolean);
				public getAsBigDecimal(): java.math.BigDecimal;
				public constructor(c: java.lang.Character);
				public deepCopy(): com.google.gson.JsonElement;
				public getAsBigInteger(): java.math.BigInteger;
				public getAsByte(): number;
				public constructor(number: java.lang.Number);
				public getAsBoolean(): boolean;
				public getAsInt(): number;
				/** @deprecated */
				public constructor();
				public equals(obj: any): boolean;
				public constructor(string: string);
				public hashCode(): number;
				public isString(): boolean;
				/** @deprecated */
				public getAsCharacter(): string;
				public getAsDouble(): number;
				public getAsFloat(): number;
				public isBoolean(): boolean;
				public getAsString(): string;
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
				public constructor(reader: java.io.Reader);
				public next(): com.google.gson.JsonElement;
				public constructor(json: string);
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class JsonSyntaxException extends com.google.gson.JsonParseException {
				public static class: java.lang.Class<com.google.gson.JsonSyntaxException>;
				public constructor(msg: string, cause: java.lang.Throwable);
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(msg: string);
				public constructor();
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
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public serialize(param0: java.lang.Long): com.google.gson.JsonElement;
				public static valueOf(name: string): com.google.gson.LongSerializationPolicy;
				public static values(): com.google.gson.LongSerializationPolicy[];
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class ReflectionAccessFilter extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.ReflectionAccessFilter>;
				/**
				 * Constructs a new instance of the com.google.gson.ReflectionAccessFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					check(param0: java.lang.Class<any>): com.google.gson.ReflectionAccessFilter.FilterResult;
					"<clinit>"(): void;
				});
				public constructor();
				public static BLOCK_ALL_ANDROID: com.google.gson.ReflectionAccessFilter;
				public static BLOCK_INACCESSIBLE_JAVA: com.google.gson.ReflectionAccessFilter;
				public static BLOCK_ALL_JAVA: com.google.gson.ReflectionAccessFilter;
				public static BLOCK_ALL_PLATFORM: com.google.gson.ReflectionAccessFilter;
				public check(param0: java.lang.Class<any>): com.google.gson.ReflectionAccessFilter.FilterResult;
			}
			export module ReflectionAccessFilter {
				export class FilterResult {
					public static class: java.lang.Class<com.google.gson.ReflectionAccessFilter.FilterResult>;
					public static ALLOW: com.google.gson.ReflectionAccessFilter.FilterResult;
					public static INDECISIVE: com.google.gson.ReflectionAccessFilter.FilterResult;
					public static BLOCK_INACCESSIBLE: com.google.gson.ReflectionAccessFilter.FilterResult;
					public static BLOCK_ALL: com.google.gson.ReflectionAccessFilter.FilterResult;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): com.google.gson.ReflectionAccessFilter.FilterResult;
					public static values(): com.google.gson.ReflectionAccessFilter.FilterResult[];
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export abstract class ToNumberPolicy extends com.google.gson.ToNumberStrategy {
				public static class: java.lang.Class<com.google.gson.ToNumberPolicy>;
				public static DOUBLE: com.google.gson.ToNumberPolicy;
				public static LAZILY_PARSED_NUMBER: com.google.gson.ToNumberPolicy;
				public static LONG_OR_DOUBLE: com.google.gson.ToNumberPolicy;
				public static BIG_DECIMAL: com.google.gson.ToNumberPolicy;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.google.gson.ToNumberPolicy;
				public readNumber(param0: com.google.gson.stream.JsonReader): java.lang.Number;
				public static values(): com.google.gson.ToNumberPolicy[];
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class ToNumberStrategy extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.ToNumberStrategy>;
				/**
				 * Constructs a new instance of the com.google.gson.ToNumberStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					readNumber(param0: com.google.gson.stream.JsonReader): java.lang.Number;
				});
				public constructor();
				public readNumber(param0: com.google.gson.stream.JsonReader): java.lang.Number;
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
				public fromJson(in: java.io.Reader): T;
				public toJson(out: java.io.Writer, value: T): void;
				public nullSafe(): com.google.gson.TypeAdapter<T>;
				public toJsonTree(value: T): com.google.gson.JsonElement;
				public fromJson(json: string): T;
				public read(param0: com.google.gson.stream.JsonReader): T;
				public fromJsonTree(jsonTree: com.google.gson.JsonElement): T;
				public constructor();
				public toJson(value: T): string;
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
					public equals(obj: any): boolean;
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
					public equals(obj: any): boolean;
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
					public equals(obj: any): boolean;
					public toString(): string;
					public alternate(): string[];
					public annotationType(): java.lang.Class<any>;
					public value(): string;
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
					public equals(obj: any): boolean;
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
					public equals(obj: any): boolean;
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
			export module internal {
				export module  {
					export module Gson {
export module  {
						export class Preconditions extends java.lang.Object {
							public static class: java.lang.Class<com.google.gson.internal..Gson.Preconditions>;
							/** @deprecated */
							public static checkNotNull(obj: any): any;
							public static checkArgument(condition: boolean): void;
						}
						export class Types extends java.lang.Object {
							public static class: java.lang.Class<com.google.gson.internal..Gson.Types>;
							public static getArrayComponentType(array: java.lang.reflect.Type): java.lang.reflect.Type;
							public static equals(a: java.lang.reflect.Type, b: java.lang.reflect.Type): boolean;
							public equals(obj: any): boolean;
							public static newParameterizedTypeWithOwner(ownerType: java.lang.reflect.Type, rawType: java.lang.reflect.Type, ...typeArguments: java.lang.reflect.Type[]): java.lang.reflect.ParameterizedType;
							public static getRawType(type: java.lang.reflect.Type): java.lang.Class<any>;
							public static getCollectionElementType(context: java.lang.reflect.Type, contextRawType: java.lang.Class<any>): java.lang.reflect.Type;
							public static getMapKeyAndValueTypes(context: java.lang.reflect.Type, contextRawType: java.lang.Class<any>): java.lang.reflect.Type[];
							public static canonicalize(type: java.lang.reflect.Type): java.lang.reflect.Type;
							public static typeToString(type: java.lang.reflect.Type): string;
							public static supertypeOf(bound: java.lang.reflect.Type): java.lang.reflect.WildcardType;
							public static arrayOf(componentType: java.lang.reflect.Type): java.lang.reflect.GenericArrayType;
							public static subtypeOf(bound: java.lang.reflect.Type): java.lang.reflect.WildcardType;
							public static resolve(context: java.lang.reflect.Type, contextRawType: java.lang.Class<any>, toResolve: java.lang.reflect.Type): java.lang.reflect.Type;
						}
						export module Types {
							export class GenericArrayTypeImpl extends java.lang.Object implements java.lang.reflect.GenericArrayType, java.io.Serializable {
								public static class: java.lang.Class<com.google.gson.internal..Gson.Types.GenericArrayTypeImpl>;
								public toString(): string;
								public equals(obj: any): boolean;
								public equals(o: any): boolean;
								public hashCode(): number;
								public getGenericComponentType(): java.lang.reflect.Type;
								public constructor(componentType: java.lang.reflect.Type);
							}
							export class ParameterizedTypeImpl extends java.lang.Object implements java.lang.reflect.ParameterizedType, java.io.Serializable {
								public static class: java.lang.Class<com.google.gson.internal..Gson.Types.ParameterizedTypeImpl>;
								public toString(): string;
								public equals(obj: any): boolean;
								public getActualTypeArguments(): java.lang.reflect.Type[];
								public constructor(ownerType: java.lang.reflect.Type, rawType: java.lang.reflect.Type, ...typeArguments: java.lang.reflect.Type[]);
								public getRawType(): java.lang.reflect.Type;
								public getOwnerType(): java.lang.reflect.Type;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
							export class WildcardTypeImpl extends java.lang.Object implements java.lang.reflect.WildcardType, java.io.Serializable {
								public static class: java.lang.Class<com.google.gson.internal..Gson.Types.WildcardTypeImpl>;
								public getUpperBounds(): java.lang.reflect.Type[];
								public toString(): string;
								public getLowerBounds(): java.lang.reflect.Type[];
								public equals(obj: any): boolean;
								public constructor(upperBounds: java.lang.reflect.Type[], lowerBounds: java.lang.reflect.Type[]);
								public hashCode(): number;
								public equals(other: any): boolean;
							}
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
					public constructor(instanceCreators: java.util.Map<java.lang.reflect.Type,com.google.gson.InstanceCreator<any>>, useJdkUnsafe: boolean, reflectionFilters: java.util.List<com.google.gson.ReflectionAccessFilter>);
					public toString(): string;
					public get(typeToken: com.google.gson.reflect.TypeToken<any>): com.google.gson.internal.ObjectConstructor<any>;
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
					public create(gson: com.google.gson.Gson, type: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
					public clone(): com.google.gson.internal.Excluder;
					public clone(): any;
					public constructor();
					public excludeField(field: java.lang.reflect.Field, serialize: boolean): boolean;
					public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
					public withVersion(ignoreVersionsAfter: number): com.google.gson.internal.Excluder;
					public withModifiers(...modifiers: number[]): com.google.gson.internal.Excluder;
					public withExclusionStrategy(exclusionStrategy: com.google.gson.ExclusionStrategy, serialization: boolean, deserialization: boolean): com.google.gson.internal.Excluder;
					public excludeFieldsWithoutExposeAnnotation(): com.google.gson.internal.Excluder;
					public excludeClass(clazz: java.lang.Class<any>, serialize: boolean): boolean;
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
					public intValue(): number;
					public toString(): string;
					public equals(obj: any): boolean;
					public constructor();
					public doubleValue(): number;
					public floatValue(): number;
					public longValue(): number;
					public constructor(value: string);
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
				export class LinkedTreeMap<K, V>  extends java.util.AbstractMap<any,any> implements java.io.Serializable  {
					public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap<any,any>>;
					public containsKey(key: any): boolean;
					public get(key: any): any;
					public isEmpty(): boolean;
					public constructor(allowNullValues: boolean);
					public forEach(action: any /* any<any,any>*/): void;
					public size(): number;
					public constructor(comparator: java.util.Comparator<any>, allowNullValues: boolean);
					public equals(o: any): boolean;
					public put(param0: any, param1: any): any;
					public remove(key: any, value: any): boolean;
					public putAll(param0: java.util.Map<any,any>): void;
					public containsValue(param0: any): boolean;
					public remove(param0: any): any;
					public getOrDefault(key: any, defaultValue: any): any;
					public putIfAbsent(key: any, value: any): any;
					public constructor();
					public keySet(): java.util.Set<any>;
					public clear(): void;
					public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
					public hashCode(): number;
					public replace(key: any, oldValue: any, newValue: any): boolean;
					public replaceAll(function: any /* any<any,any,any>*/): void;
					public remove(key: any): any;
					public values(): java.util.Collection<any>;
					public containsValue(value: any): boolean;
					public replace(key: any, value: any): any;
					public equals(param0: any): boolean;
					public containsKey(param0: any): boolean;
					public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
					public put(key: any, value: any): any;
					public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
					public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
					public putAll(m: java.util.Map<any,any>): void;
					public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
					public get(param0: any): any;
				}
				export module LinkedTreeMap {
					export class EntrySet extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap.EntrySet>;
						public retainAll(c: java.util.Collection<any>): boolean;
						public iterator(): java.util.Iterator<any>;
						public add(param0: any): boolean;
						public stream(): java.util.stream.Stream<any>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public removeIf(filter: any /* any*/): boolean;
						public contains(o: any): boolean;
						public removeAll(c: java.util.Collection<any>): boolean;
						public addAll(param0: java.util.Collection<any>): boolean;
						public retainAll(param0: java.util.Collection<any>): boolean;
						public spliterator(): java.util.Spliterator<any>;
						public isEmpty(): boolean;
						public containsAll(c: java.util.Collection<any>): boolean;
						public equals(o: any): boolean;
						public size(): number;
						public toArray(a: any[]): any[];
						public removeAll(param0: java.util.Collection<any>): boolean;
						public addAll(c: java.util.Collection<any>): boolean;
						public toArray(): any[];
						public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
						public add(e: any): boolean;
						public contains(param0: any): boolean;
						public remove(o: any): boolean;
						public parallelStream(): java.util.stream.Stream<any>;
						public remove(param0: any): boolean;
						public clear(): void;
						public toArray(param0: any[]): any[];
						public containsAll(param0: java.util.Collection<any>): boolean;
					}
					export class KeySet extends java.util.AbstractSet<any> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap.KeySet>;
						public retainAll(c: java.util.Collection<any>): boolean;
						public iterator(): java.util.Iterator<any>;
						public add(param0: any): boolean;
						public stream(): java.util.stream.Stream<any>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public removeIf(filter: any /* any*/): boolean;
						public contains(o: any): boolean;
						public removeAll(c: java.util.Collection<any>): boolean;
						public addAll(param0: java.util.Collection<any>): boolean;
						public retainAll(param0: java.util.Collection<any>): boolean;
						public spliterator(): java.util.Spliterator<any>;
						public isEmpty(): boolean;
						public containsAll(c: java.util.Collection<any>): boolean;
						public equals(o: any): boolean;
						public size(): number;
						public toArray(a: any[]): any[];
						public removeAll(param0: java.util.Collection<any>): boolean;
						public remove(key: any): boolean;
						public addAll(c: java.util.Collection<any>): boolean;
						public toArray(): any[];
						public add(e: any): boolean;
						public contains(param0: any): boolean;
						public remove(o: any): boolean;
						public parallelStream(): java.util.stream.Stream<any>;
						public remove(param0: any): boolean;
						public clear(): void;
						public toArray(param0: any[]): any[];
						public containsAll(param0: java.util.Collection<any>): boolean;
					}
					export abstract class LinkedTreeMapIterator<T>  extends java.util.Iterator<any> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap.LinkedTreeMapIterator<any>>;
						public hasNext(): boolean;
						public remove(): void;
					}
					export class Node<K, V>  extends java.util.Map.Entry<any,any> {
						public static class: java.lang.Class<com.google.gson.internal.LinkedTreeMap.Node<any,any>>;
						public equals(obj: any): boolean;
						public setValue(param0: any): any;
						public static comparingByValue(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
						public getValue(): any;
						public setValue(value: any): any;
						public getKey(): any;
						public static comparingByValue(): java.util.Comparator<any>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public first(): com.google.gson.internal.LinkedTreeMap.Node<any,any>;
						public toString(): string;
						public last(): com.google.gson.internal.LinkedTreeMap.Node<any,any>;
						public static comparingByKey(): java.util.Comparator<any>;
						public equals(o: any): boolean;
						public static comparingByKey(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
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
				export class NonNullElementWrapperList<E>  extends java.util.AbstractList<any> implements java.util.RandomAccess  {
					public static class: java.lang.Class<com.google.gson.internal.NonNullElementWrapperList<any>>;
					public isEmpty(): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public lastIndexOf(o: any): number;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public toArray(param0: any[]): any[];
					public get(param0: number): any;
					public remove(o: any): boolean;
					public listIterator(index: number): java.util.ListIterator<any>;
					public toArray(a: any[]): any[];
					public toArray(): any[];
					public add(param0: number, param1: any): void;
					public sort(c: java.util.Comparator<any>): void;
					public add(index: number, element: any): void;
					public set(param0: number, param1: any): any;
					public replaceAll(operator: any /* any*/): void;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public subList(fromIndex: number, toIndex: number): java.util.List<any>;
					public get(index: number): any;
					public addAll(c: java.util.Collection<any>): boolean;
					public set(index: number, element: any): any;
					public remove(index: number): any;
					public contains(o: any): boolean;
					public remove(param0: number): any;
					public removeAll(c: java.util.Collection<any>): boolean;
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public containsAll(c: java.util.Collection<any>): boolean;
					public constructor(delegate: java.util.ArrayList<any>);
					public hashCode(): number;
					public contains(param0: any): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public parallelStream(): java.util.stream.Stream<any>;
					public add(e: any): boolean;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public retainAll(c: java.util.Collection<any>): boolean;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public indexOf(o: any): number;
					public indexOf(param0: any): number;
					public equals(param0: any): boolean;
					public removeIf(filter: any /* any*/): boolean;
					public addAll(index: number, c: java.util.Collection<any>): boolean;
					public listIterator(): java.util.ListIterator<any>;
					public stream(): java.util.stream.Stream<any>;
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
					public static getUSDateFormat(style: number): java.text.DateFormat;
					public constructor();
					public static getUSDateTimeFormat(dateStyle: number, timeStyle: number): java.text.DateFormat;
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
					public static wrap(type: java.lang.Class<any>): java.lang.Class<any>;
					public static isPrimitive(type: java.lang.reflect.Type): boolean;
					public static unwrap(type: java.lang.Class<any>): java.lang.Class<any>;
					public static isWrapperType(type: java.lang.reflect.Type): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export module internal {
				export class ReflectionAccessFilterHelper extends java.lang.Object {
					public static class: java.lang.Class<com.google.gson.internal.ReflectionAccessFilterHelper>;
					public static isJavaType(c: java.lang.Class<any>): boolean;
					public static getFilterResult(reflectionFilters: java.util.List<com.google.gson.ReflectionAccessFilter>, c: java.lang.Class<any>): com.google.gson.ReflectionAccessFilter.FilterResult;
					public static canAccess(accessibleObject: java.lang.reflect.AccessibleObject, object: any): boolean;
					public static isAnyPlatformType(c: java.lang.Class<any>): boolean;
					public static isAndroidType(c: java.lang.Class<any>): boolean;
				}
				export module ReflectionAccessFilterHelper {
					export abstract class AccessChecker extends java.lang.Object {
						public static class: java.lang.Class<com.google.gson.internal.ReflectionAccessFilterHelper.AccessChecker>;
						public static INSTANCE: com.google.gson.internal.ReflectionAccessFilterHelper.AccessChecker;
						public canAccess(param0: java.lang.reflect.AccessibleObject, param1: any): boolean;
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
				export class Streams extends java.lang.Object {
					public static class: java.lang.Class<com.google.gson.internal.Streams>;
					public static write(element: com.google.gson.JsonElement, writer: com.google.gson.stream.JsonWriter): void;
					public static parse(reader: com.google.gson.stream.JsonReader): com.google.gson.JsonElement;
					public static writerForAppendable(appendable: java.lang.Appendable): java.io.Writer;
				}
				export module Streams {
					export class AppendableWriter extends java.io.Writer {
						public static class: java.lang.Class<com.google.gson.internal.Streams.AppendableWriter>;
						public write(c: number): void;
						public write(cbuf: string[]): void;
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public write(str: string): void;
						public flush(): void;
						public append(csq: string): java.io.Writer;
						public write(chars: string[], offset: number, length: number): void;
						public write(param0: string[], param1: number, param2: number): void;
						public append(c: string): java.io.Writer;
						public write(i: number): void;
						public append(csq: string, start: number, end: number): java.io.Writer;
						public write(str: string, off: number, len: number): void;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					}
					export module AppendableWriter {
						export class CurrentWrite extends java.lang.Object implements java.lang.CharSequence {
							public static class: java.lang.Class<com.google.gson.internal.Streams.AppendableWriter.CurrentWrite>;
							public charAt(param0: number): string;
							public codePoints(): java.util.stream.IntStream;
							public charAt(i: number): string;
							public chars(): java.util.stream.IntStream;
							public subSequence(start: number, end: number): string;
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
					public static INSTANCE: com.google.gson.internal.UnsafeAllocator;
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
						public write(out: com.google.gson.stream.JsonWriter, array: any): void;
						public constructor(context: com.google.gson.Gson, componentTypeAdapter: com.google.gson.TypeAdapter<any>, componentType: java.lang.Class<any>);
						public read(param0: com.google.gson.stream.JsonReader): any;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
						public read(in: com.google.gson.stream.JsonReader): any;
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
						public create(gson: com.google.gson.Gson, typeToken: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
						public constructor(constructorConstructor: com.google.gson.internal.ConstructorConstructor);
						public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
					}
					export module CollectionTypeAdapterFactory {
						export class Adapter<E>  extends com.google.gson.TypeAdapter<java.util.Collection<any>> {
							public static class: java.lang.Class<com.google.gson.internal.bind.CollectionTypeAdapterFactory.Adapter<any>>;
							public constructor();
							public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
							public write(out: com.google.gson.stream.JsonWriter, collection: java.util.Collection<any>): void;
							public constructor(context: com.google.gson.Gson, elementType: java.lang.reflect.Type, elementTypeAdapter: com.google.gson.TypeAdapter<any>, constructor: com.google.gson.internal.ObjectConstructor<any>);
							public read(param0: com.google.gson.stream.JsonReader): any;
							public read(in: com.google.gson.stream.JsonReader): java.util.Collection<any>;
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
						public read(in: com.google.gson.stream.JsonReader): java.util.Date;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
						public write(out: com.google.gson.stream.JsonWriter, value: java.util.Date): void;
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
					export class DefaultDateTypeAdapter<T>  extends com.google.gson.TypeAdapter<any> {
						public static class: java.lang.Class<com.google.gson.internal.bind.DefaultDateTypeAdapter<any>>;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
						public toString(): string;
						public write(out: com.google.gson.stream.JsonWriter, value: java.util.Date): void;
						public read(in: com.google.gson.stream.JsonReader): any;
					}
					export module DefaultDateTypeAdapter {
						export abstract class DateType<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.gson.internal.bind.DefaultDateTypeAdapter.DateType<any>>;
							public static DATE: com.google.gson.internal.bind.DefaultDateTypeAdapter.DateType<java.util.Date>;
							public createDefaultsAdapterFactory(): com.google.gson.TypeAdapterFactory;
							public createAdapterFactory(datePattern: string): com.google.gson.TypeAdapterFactory;
							public deserialize(param0: java.util.Date): T;
							public createAdapterFactory(dateStyle: number, timeStyle: number): com.google.gson.TypeAdapterFactory;
							public createAdapterFactory(style: number): com.google.gson.TypeAdapterFactory;
							public constructor(dateClass: java.lang.Class<T>);
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
					export class JsonAdapterAnnotationTypeAdapterFactory extends java.lang.Object implements com.google.gson.TypeAdapterFactory {
						public static class: java.lang.Class<com.google.gson.internal.bind.JsonAdapterAnnotationTypeAdapterFactory>;
						public constructor(constructorConstructor: com.google.gson.internal.ConstructorConstructor);
						public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
						public create(gson: com.google.gson.Gson, targetType: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
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
						public constructor(element: com.google.gson.JsonElement);
						public close(): void;
						public getPreviousPath(): string;
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
						public hasNext(): boolean;
						public constructor(in: java.io.Reader);
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
						public value(value: boolean): com.google.gson.stream.JsonWriter;
						public nullValue(): com.google.gson.stream.JsonWriter;
						public constructor();
						public close(): void;
						public value(value: java.lang.Boolean): com.google.gson.stream.JsonWriter;
						public flush(): void;
						public endObject(): com.google.gson.stream.JsonWriter;
						public name(name: string): com.google.gson.stream.JsonWriter;
						public value(value: java.lang.Number): com.google.gson.stream.JsonWriter;
						public beginArray(): com.google.gson.stream.JsonWriter;
						public value(value: string): com.google.gson.stream.JsonWriter;
						public endArray(): com.google.gson.stream.JsonWriter;
						public value(value: number): com.google.gson.stream.JsonWriter;
						public jsonValue(value: string): com.google.gson.stream.JsonWriter;
						public beginObject(): com.google.gson.stream.JsonWriter;
						public get(): com.google.gson.JsonElement;
						public constructor(out: java.io.Writer);
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
						public constructor(constructorConstructor: com.google.gson.internal.ConstructorConstructor, complexMapKeySerialization: boolean);
						public create(gson: com.google.gson.Gson, typeToken: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
						public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
					}
					export module MapTypeAdapterFactory {
						export class Adapter<K, V>  extends com.google.gson.TypeAdapter<java.util.Map<any,any>> {
							public static class: java.lang.Class<com.google.gson.internal.bind.MapTypeAdapterFactory.Adapter<any,any>>;
							public constructor();
							public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
							public read(in: com.google.gson.stream.JsonReader): java.util.Map<any,any>;
							public constructor(param0: com.google.gson.Gson, context: java.lang.reflect.Type, keyType: com.google.gson.TypeAdapter<any>, keyTypeAdapter: java.lang.reflect.Type, valueType: com.google.gson.TypeAdapter<any>, valueTypeAdapter: com.google.gson.internal.ObjectConstructor<any>);
							public read(param0: com.google.gson.stream.JsonReader): any;
							public write(out: com.google.gson.stream.JsonWriter, map: java.util.Map<any,any>): void;
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
					export class NumberTypeAdapter extends com.google.gson.TypeAdapter<java.lang.Number> {
						public static class: java.lang.Class<com.google.gson.internal.bind.NumberTypeAdapter>;
						public read(in: com.google.gson.stream.JsonReader): java.lang.Number;
						public write(out: com.google.gson.stream.JsonWriter, value: java.lang.Number): void;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public static getFactory(toNumberStrategy: com.google.gson.ToNumberStrategy): com.google.gson.TypeAdapterFactory;
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
					export class ObjectTypeAdapter extends com.google.gson.TypeAdapter<any> {
						public static class: java.lang.Class<com.google.gson.internal.bind.ObjectTypeAdapter>;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public static getFactory(toNumberStrategy: com.google.gson.ToNumberStrategy): com.google.gson.TypeAdapterFactory;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
						public write(out: com.google.gson.stream.JsonWriter, value: any): void;
						public read(in: com.google.gson.stream.JsonReader): any;
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
						public constructor(constructorConstructor: com.google.gson.internal.ConstructorConstructor, fieldNamingPolicy: com.google.gson.FieldNamingStrategy, excluder: com.google.gson.internal.Excluder, jsonAdapterFactory: com.google.gson.internal.bind.JsonAdapterAnnotationTypeAdapterFactory, reflectionFilters: java.util.List<com.google.gson.ReflectionAccessFilter>);
						public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
						public create(gson: com.google.gson.Gson, type: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
					}
					export module ReflectiveTypeAdapterFactory {
						export abstract class Adapter<T, A>  extends com.google.gson.TypeAdapter<any> {
							public static class: java.lang.Class<com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.Adapter<any,any>>;
							public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
							public write(out: com.google.gson.stream.JsonWriter, value: any): void;
							public read(param0: com.google.gson.stream.JsonReader): any;
							public read(in: com.google.gson.stream.JsonReader): any;
						}
						export abstract class BoundField extends java.lang.Object {
							public static class: java.lang.Class<com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.BoundField>;
							public constructor(name: string, fieldName: string, serialized: boolean, deserialized: boolean);
						}
						export class FieldReflectionAdapter<T>  extends com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.Adapter<any,any> {
							public static class: java.lang.Class<com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.FieldReflectionAdapter<any>>;
						}
						export class RecordAdapter<T>  extends com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.Adapter<any,any[]> {
							public static class: java.lang.Class<com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.RecordAdapter<any>>;
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
					export abstract class SerializationDelegatingTypeAdapter<T>  extends com.google.gson.TypeAdapter<any> {
						public static class: java.lang.Class<com.google.gson.internal.bind.SerializationDelegatingTypeAdapter<any>>;
						public constructor();
						public getSerializationDelegate(): com.google.gson.TypeAdapter<any>;
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
					export class TreeTypeAdapter<T>  extends com.google.gson.internal.bind.SerializationDelegatingTypeAdapter<any> {
						public static class: java.lang.Class<com.google.gson.internal.bind.TreeTypeAdapter<any>>;
						public static newTypeHierarchyFactory(hierarchyType: java.lang.Class<any>, typeAdapter: any): com.google.gson.TypeAdapterFactory;
						public constructor();
						public static newFactory(exactType: com.google.gson.reflect.TypeToken<any>, typeAdapter: any): com.google.gson.TypeAdapterFactory;
						public getSerializationDelegate(): com.google.gson.TypeAdapter<any>;
						public constructor(serializer: com.google.gson.JsonSerializer<any>, deserializer: com.google.gson.JsonDeserializer<any>, gson: com.google.gson.Gson, typeToken: com.google.gson.reflect.TypeToken<any>, skipPast: com.google.gson.TypeAdapterFactory, nullSafe: boolean);
						public read(param0: com.google.gson.stream.JsonReader): any;
						public static newFactoryWithMatchRawType(exactType: com.google.gson.reflect.TypeToken<any>, typeAdapter: any): com.google.gson.TypeAdapterFactory;
						public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
						public write(out: com.google.gson.stream.JsonWriter, value: any): void;
						public constructor(serializer: com.google.gson.JsonSerializer<any>, deserializer: com.google.gson.JsonDeserializer<any>, gson: com.google.gson.Gson, typeToken: com.google.gson.reflect.TypeToken<any>, skipPast: com.google.gson.TypeAdapterFactory);
						public read(in: com.google.gson.stream.JsonReader): any;
					}
					export module TreeTypeAdapter {
						export class GsonContextImpl extends java.lang.Object implements com.google.gson.JsonSerializationContext, com.google.gson.JsonDeserializationContext {
							public static class: java.lang.Class<com.google.gson.internal.bind.TreeTypeAdapter.GsonContextImpl>;
							public serialize(param0: any): com.google.gson.JsonElement;
							public serialize(src: any): com.google.gson.JsonElement;
							public serialize(param0: any, param1: java.lang.reflect.Type): com.google.gson.JsonElement;
							public deserialize(json: com.google.gson.JsonElement, typeOfT: java.lang.reflect.Type): any;
							public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type): any;
							public serialize(src: any, typeOfSrc: java.lang.reflect.Type): com.google.gson.JsonElement;
						}
						export class SingleTypeFactory extends java.lang.Object implements com.google.gson.TypeAdapterFactory {
							public static class: java.lang.Class<com.google.gson.internal.bind.TreeTypeAdapter.SingleTypeFactory>;
							public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
							public create(gson: com.google.gson.Gson, type: com.google.gson.reflect.TypeToken<any>): com.google.gson.TypeAdapter<any>;
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
						public write(out: com.google.gson.stream.JsonWriter, value: any): void;
						public read(in: com.google.gson.stream.JsonReader): any;
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
						public static CHARACTER: com.google.gson.TypeAdapter<java.lang.Character>;
						public static CHARACTER_FACTORY: com.google.gson.TypeAdapterFactory;
						public static STRING: com.google.gson.TypeAdapter<string>;
						public static BIG_DECIMAL: com.google.gson.TypeAdapter<java.math.BigDecimal>;
						public static BIG_INTEGER: com.google.gson.TypeAdapter<java.math.BigInteger>;
						public static LAZILY_PARSED_NUMBER: com.google.gson.TypeAdapter<com.google.gson.internal.LazilyParsedNumber>;
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
						public static CALENDAR: com.google.gson.TypeAdapter<java.util.Calendar>;
						public static CALENDAR_FACTORY: com.google.gson.TypeAdapterFactory;
						public static LOCALE: com.google.gson.TypeAdapter<java.util.Locale>;
						public static LOCALE_FACTORY: com.google.gson.TypeAdapterFactory;
						public static JSON_ELEMENT: com.google.gson.TypeAdapter<com.google.gson.JsonElement>;
						public static JSON_ELEMENT_FACTORY: com.google.gson.TypeAdapterFactory;
						public static ENUM_FACTORY: com.google.gson.TypeAdapterFactory;
						public static newFactoryForMultipleTypes(base: java.lang.Class<any>, sub: java.lang.Class<any>, typeAdapter: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
						public static newFactory(type: java.lang.Class<any>, typeAdapter: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
						public static newFactory(unboxed: java.lang.Class<any>, boxed: java.lang.Class<any>, typeAdapter: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
						public static newFactory(type: com.google.gson.reflect.TypeToken<any>, typeAdapter: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
						public static newTypeHierarchyFactory(clazz: java.lang.Class<any>, typeAdapter: com.google.gson.TypeAdapter<any>): com.google.gson.TypeAdapterFactory;
					}
					export module TypeAdapters {
						export class EnumTypeAdapter<T>  extends com.google.gson.TypeAdapter<any> {
							public static class: java.lang.Class<com.google.gson.internal.bind.TypeAdapters.EnumTypeAdapter<any>>;
							public constructor();
							public write(param0: com.google.gson.stream.JsonWriter, param1: any): void;
							public write(out: com.google.gson.stream.JsonWriter, value: any): void;
							public constructor(classOfT: java.lang.Class<any>);
							public read(param0: com.google.gson.stream.JsonReader): any;
							public read(in: com.google.gson.stream.JsonReader): any;
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
							public static format(date: java.util.Date, millis: boolean, tz: java.util.TimeZone): string;
							public static parse(date: string, pos: java.text.ParsePosition): java.util.Date;
							public static format(date: java.util.Date): string;
							public static format(date: java.util.Date, millis: boolean): string;
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
					export class ReflectionHelper extends java.lang.Object {
						public static class: java.lang.Class<com.google.gson.internal.reflect.ReflectionHelper>;
						public static constructorToString(constructor: java.lang.reflect.Constructor<any>): string;
						public static getCanonicalRecordConstructor(raw: java.lang.Class<any>): java.lang.reflect.Constructor<any>;
						public static getRecordComponentNames(raw: java.lang.Class<any>): string[];
						public static tryMakeAccessible(constructor: java.lang.reflect.Constructor<any>): string;
						public static createExceptionForUnexpectedIllegalAccess(exception: java.lang.IllegalAccessException): java.lang.RuntimeException;
						public static getAccessibleObjectDescription(object: java.lang.reflect.AccessibleObject, uppercaseFirstLetter: boolean): string;
						public static getAccessor(raw: java.lang.Class<any>, field: java.lang.reflect.Field): java.lang.reflect.Method;
						public static isRecord(raw: java.lang.Class<any>): boolean;
						public static makeAccessible(object: java.lang.reflect.AccessibleObject): void;
					}
					export module ReflectionHelper {
						export abstract class RecordHelper extends java.lang.Object {
							public static class: java.lang.Class<com.google.gson.internal.reflect.ReflectionHelper.RecordHelper>;
							public getAccessor(param0: java.lang.Class<any>, param1: java.lang.reflect.Field): java.lang.reflect.Method;
						}
						export class RecordNotSupportedHelper extends com.google.gson.internal.reflect.ReflectionHelper.RecordHelper {
							public static class: java.lang.Class<com.google.gson.internal.reflect.ReflectionHelper.RecordNotSupportedHelper>;
							public getAccessor(raw: java.lang.Class<any>, field: java.lang.reflect.Field): java.lang.reflect.Method;
							public getAccessor(param0: java.lang.Class<any>, param1: java.lang.reflect.Field): java.lang.reflect.Method;
						}
						export class RecordSupportedHelper extends com.google.gson.internal.reflect.ReflectionHelper.RecordHelper {
							public static class: java.lang.Class<com.google.gson.internal.reflect.ReflectionHelper.RecordSupportedHelper>;
							public getAccessor(raw: java.lang.Class<any>, field: java.lang.reflect.Field): java.lang.reflect.Method;
							public getAccessor(param0: java.lang.Class<any>, param1: java.lang.reflect.Field): java.lang.reflect.Method;
							public getCanonicalRecordConstructor(raw: java.lang.Class<any>): java.lang.reflect.Constructor<any>;
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
				export module sql {
					export class SqlDateTypeAdapter extends com.google.gson.TypeAdapter<java.sql.Date> {
						public static class: java.lang.Class<com.google.gson.internal.sql.SqlDateTypeAdapter>;
						public read(in: com.google.gson.stream.JsonReader): java.sql.Date;
						public write(out: com.google.gson.stream.JsonWriter, value: java.sql.Date): void;
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
				export module sql {
					export class SqlTimeTypeAdapter extends com.google.gson.TypeAdapter<java.sql.Time> {
						public static class: java.lang.Class<com.google.gson.internal.sql.SqlTimeTypeAdapter>;
						public write(out: com.google.gson.stream.JsonWriter, value: java.sql.Time): void;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public read(in: com.google.gson.stream.JsonReader): java.sql.Time;
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
				export module sql {
					export class SqlTimestampTypeAdapter extends com.google.gson.TypeAdapter<java.sql.Timestamp> {
						public static class: java.lang.Class<com.google.gson.internal.sql.SqlTimestampTypeAdapter>;
						public write(out: com.google.gson.stream.JsonWriter, value: java.sql.Timestamp): void;
						public read(param0: com.google.gson.stream.JsonReader): any;
						public read(in: com.google.gson.stream.JsonReader): java.sql.Timestamp;
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
				export module sql {
					export class SqlTypesSupport extends java.lang.Object {
						public static class: java.lang.Class<com.google.gson.internal.sql.SqlTypesSupport>;
						public static SUPPORTS_SQL_TYPES: boolean;
						public static DATE_DATE_TYPE: com.google.gson.internal.bind.DefaultDateTypeAdapter.DateType<any>;
						public static TIMESTAMP_DATE_TYPE: com.google.gson.internal.bind.DefaultDateTypeAdapter.DateType<any>;
						public static DATE_FACTORY: com.google.gson.TypeAdapterFactory;
						public static TIME_FACTORY: com.google.gson.TypeAdapterFactory;
						public static TIMESTAMP_FACTORY: com.google.gson.TypeAdapterFactory;
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
					public equals(obj: any): boolean;
					public getType(): java.lang.reflect.Type;
					public static get(type: java.lang.Class<any>): com.google.gson.reflect.TypeToken<any>;
					/** @deprecated */
					public isAssignableFrom(cls: java.lang.Class<any>): boolean;
					public equals(o: any): boolean;
					/** @deprecated */
					public isAssignableFrom(token: com.google.gson.reflect.TypeToken<any>): boolean;
					public toString(): string;
					public static get(type: java.lang.reflect.Type): com.google.gson.reflect.TypeToken<any>;
					public constructor();
					public static getArray(componentType: java.lang.reflect.Type): com.google.gson.reflect.TypeToken<any>;
					public static getParameterized(rawType: java.lang.reflect.Type, ...typeArguments: java.lang.reflect.Type[]): com.google.gson.reflect.TypeToken<any>;
					public hashCode(): number;
					public getRawType(): java.lang.Class<any>;
					/** @deprecated */
					public isAssignableFrom(from: java.lang.reflect.Type): boolean;
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
					public nextString(): string;
					public nextDouble(): number;
					public nextLong(): number;
					public constructor(in: java.io.Reader);
					public hasNext(): boolean;
					public beginObject(): void;
					public getPath(): string;
					public peek(): com.google.gson.stream.JsonToken;
					public toString(): string;
					public endObject(): void;
					public nextInt(): number;
					public setLenient(lenient: boolean): void;
					public close(): void;
					public endArray(): void;
					public getPreviousPath(): string;
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
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): com.google.gson.stream.JsonToken;
					public static values(): com.google.gson.stream.JsonToken[];
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
					public constructor(out: java.io.Writer);
					public value(value: java.lang.Number): com.google.gson.stream.JsonWriter;
					public isHtmlSafe(): boolean;
					public beginArray(): com.google.gson.stream.JsonWriter;
					public isLenient(): boolean;
					public setHtmlSafe(htmlSafe: boolean): void;
					public flush(): void;
					public beginObject(): com.google.gson.stream.JsonWriter;
					public value(value: java.lang.Boolean): com.google.gson.stream.JsonWriter;
					public jsonValue(value: string): com.google.gson.stream.JsonWriter;
					public getSerializeNulls(): boolean;
					public endArray(): com.google.gson.stream.JsonWriter;
					public nullValue(): com.google.gson.stream.JsonWriter;
					public setLenient(lenient: boolean): void;
					public value(value: string): com.google.gson.stream.JsonWriter;
					public close(): void;
					public setSerializeNulls(serializeNulls: boolean): void;
					public endObject(): com.google.gson.stream.JsonWriter;
					public name(name: string): com.google.gson.stream.JsonWriter;
					public setIndent(indent: string): void;
					public value(value: number): com.google.gson.stream.JsonWriter;
					public value(value: boolean): com.google.gson.stream.JsonWriter;
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
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor(throwable: java.lang.Throwable);
					public constructor(msg: string, throwable: java.lang.Throwable);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(msg: string);
					public constructor(message: string, cause: java.lang.Throwable);
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
//com.google.gson.internal.LinkedTreeMap:2
//com.google.gson.internal.LinkedTreeMap.LinkedTreeMapIterator:1
//com.google.gson.internal.LinkedTreeMap.Node:2
//com.google.gson.internal.NonNullElementWrapperList:1
//com.google.gson.internal.ObjectConstructor:1
//com.google.gson.internal.bind.ArrayTypeAdapter:1
//com.google.gson.internal.bind.CollectionTypeAdapterFactory.Adapter:1
//com.google.gson.internal.bind.DefaultDateTypeAdapter:1
//com.google.gson.internal.bind.DefaultDateTypeAdapter.DateType:1
//com.google.gson.internal.bind.MapTypeAdapterFactory.Adapter:2
//com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.Adapter:2
//com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.FieldReflectionAdapter:1
//com.google.gson.internal.bind.ReflectiveTypeAdapterFactory.RecordAdapter:1
//com.google.gson.internal.bind.SerializationDelegatingTypeAdapter:1
//com.google.gson.internal.bind.TreeTypeAdapter:1
//com.google.gson.internal.bind.TypeAdapterRuntimeTypeWrapper:1
//com.google.gson.internal.bind.TypeAdapters.EnumTypeAdapter:1
//com.google.gson.reflect.TypeToken:1


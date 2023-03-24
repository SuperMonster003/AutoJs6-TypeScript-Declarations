declare module androidx {
	export module arch {
		export module core {
			export module internal {
				export class FastSafeIterableMap<K, V>  extends androidx.arch.core.internal.SafeIterableMap<any,any> {
					public static class: java.lang.Class<androidx.arch.core.internal.FastSafeIterableMap<any,any>>;
					public remove(key: any): any;
					public iterator(): java.util.Iterator<any>;
					public contains(key: any): boolean;
					public constructor();
					public spliterator(): java.util.Spliterator<any>;
					public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
					public get(k: any): androidx.arch.core.internal.SafeIterableMap.Entry<any,any>;
					public ceil(k: any): java.util.Map.Entry<any,any>;
					public putIfAbsent(key: any, v: any): any;
					public forEach(action: any /* any*/): void;
				}
			}
		}
	}
}

declare module androidx {
	export module arch {
		export module core {
			export module internal {
				export class SafeIterableMap<K, V>  extends java.lang.Iterable<java.util.Map.Entry<any,any>> {
					public static class: java.lang.Class<androidx.arch.core.internal.SafeIterableMap<any,any>>;
					public put(key: any, v: any): androidx.arch.core.internal.SafeIterableMap.Entry<any,any>;
					public remove(key: any): any;
					public descendingIterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
					public equals(obj: any): boolean;
					public eldest(): java.util.Map.Entry<any,any>;
					public spliterator(): java.util.Spliterator<any>;
					public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
					public get(k: any): androidx.arch.core.internal.SafeIterableMap.Entry<any,any>;
					public size(): number;
					public putIfAbsent(key: any, v: any): any;
					public iteratorWithAdditions(): androidx.arch.core.internal.SafeIterableMap.IteratorWithAdditions;
					public toString(): string;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public newest(): java.util.Map.Entry<any,any>;
					public hashCode(): number;
					public forEach(action: any /* any*/): void;
				}
				export module SafeIterableMap {
					export class AscendingIterator<K, V>  extends androidx.arch.core.internal.SafeIterableMap.ListIterator<any,any> {
						public static class: java.lang.Class<androidx.arch.core.internal.SafeIterableMap.AscendingIterator<any,any>>;
						public supportRemove(param0: androidx.arch.core.internal.SafeIterableMap.Entry<any,any>): void;
						public supportRemove(entry: androidx.arch.core.internal.SafeIterableMap.Entry<any,any>): void;
					}
					export class DescendingIterator<K, V>  extends androidx.arch.core.internal.SafeIterableMap.ListIterator<any,any> {
						public static class: java.lang.Class<androidx.arch.core.internal.SafeIterableMap.DescendingIterator<any,any>>;
						public supportRemove(param0: androidx.arch.core.internal.SafeIterableMap.Entry<any,any>): void;
						public supportRemove(entry: androidx.arch.core.internal.SafeIterableMap.Entry<any,any>): void;
					}
					export class Entry<K, V>  extends java.util.Map.Entry<any,any> {
						public static class: java.lang.Class<androidx.arch.core.internal.SafeIterableMap.Entry<any,any>>;
						public equals(obj: any): boolean;
						public setValue(param0: any): any;
						public static comparingByValue(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
						public getValue(): any;
						public setValue(value: any): any;
						public getKey(): any;
						public static comparingByValue(): java.util.Comparator<any>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public static comparingByKey(): java.util.Comparator<any>;
						public static comparingByKey(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
						public toString(): string;
					}
					export class IteratorWithAdditions extends java.lang.Object {
						public static class: java.lang.Class<androidx.arch.core.internal.SafeIterableMap.IteratorWithAdditions>;
						public next(): java.util.Map.Entry<any,any>;
						public supportRemove(param0: androidx.arch.core.internal.SafeIterableMap.Entry<any,any>): void;
						public hasNext(): boolean;
						public supportRemove(entry: androidx.arch.core.internal.SafeIterableMap.Entry<any,any>): void;
					}
					export abstract class ListIterator<K, V>  extends java.lang.Object {
						public static class: java.lang.Class<androidx.arch.core.internal.SafeIterableMap.ListIterator<any,any>>;
						public supportRemove(entry: androidx.arch.core.internal.SafeIterableMap.Entry<K,V>): void;
						public next(): java.util.Map.Entry<K,V>;
						public hasNext(): boolean;
						public supportRemove(param0: androidx.arch.core.internal.SafeIterableMap.Entry<K,V>): void;
					}
					export class SupportRemove<K, V>  extends java.lang.Object {
						public static class: java.lang.Class<androidx.arch.core.internal.SafeIterableMap.SupportRemove<any,any>>;
						/**
						 * Constructs a new instance of the androidx.arch.core.internal.SafeIterableMap$SupportRemove interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							supportRemove(param0: androidx.arch.core.internal.SafeIterableMap.Entry<K,V>): void;
						});
						public constructor();
						public supportRemove(param0: androidx.arch.core.internal.SafeIterableMap.Entry<K,V>): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module arch {
		export module core {
			export module util {
				export class Function<I, O>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.arch.core.util.Function<any,any>>;
					/**
					 * Constructs a new instance of the androidx.arch.core.util.Function<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: I): O;
					});
					public constructor();
					public apply(param0: I): O;
				}
			}
		}
	}
}

//Generics information:
//androidx.arch.core.internal.FastSafeIterableMap:2
//androidx.arch.core.internal.SafeIterableMap:2
//androidx.arch.core.internal.SafeIterableMap.AscendingIterator:2
//androidx.arch.core.internal.SafeIterableMap.DescendingIterator:2
//androidx.arch.core.internal.SafeIterableMap.Entry:2
//androidx.arch.core.internal.SafeIterableMap.ListIterator:2
//androidx.arch.core.internal.SafeIterableMap.SupportRemove:2
//androidx.arch.core.util.Function:2


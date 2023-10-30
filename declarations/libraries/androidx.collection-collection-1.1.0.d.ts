declare module androidx {
	export module collection {
		export class ArrayMap<K, V>  extends java.util.Map<any,any> {
			public static class: java.lang.Class<androidx.collection.ArrayMap<any,any>>;
			public replace(key: any, oldValue: any, newValue: any): boolean;
			public equals(param0: any): boolean;
			public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public containsValue(param0: any): boolean;
			public constructor(map: androidx.collection.SimpleArrayMap<any,any>);
			public replace(key: any, value: any): any;
			public putAll(array: androidx.collection.SimpleArrayMap<any,any>): void;
			public get(param0: any): any;
			public putAll(map: java.util.Map<any,any>): void;
			public containsKey(key: any): boolean;
			public remove(key: any): any;
			public constructor(map: androidx.collection.SimpleArrayMap<any,any>);
			public containsValue(value: any): boolean;
			public forEach(action: any /* any<any,any>*/): void;
			public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public putIfAbsent(key: any, value: any): any;
			public remove(param0: any): any;
			public putAll(param0: java.util.Map<any,any>): void;
			public retainAll(collection: java.util.Collection<any>): boolean;
			public replaceAll(_function_: any /* any<any,any,any>*/): void;
			public values(): java.util.Collection<any>;
			public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
			public clear(): void;
			public get(key: any): any;
			public equals(object: any): boolean;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public keySet(): java.util.Set<any>;
			public size(): number;
			public isEmpty(): boolean;
			public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
			public constructor();
			public put(param0: any, param1: any): any;
			public constructor(capacity: number);
			public getOrDefault(key: any, defaultValue: any): any;
			public containsAll(collection: java.util.Collection<any>): boolean;
			public removeAll(collection: java.util.Collection<any>): boolean;
			public put(key: any, value: any): any;
			public containsKey(param0: any): boolean;
			public remove(key: any, value: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module collection {
		export class ArraySet<E>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.collection.ArraySet<any>>;
			public equals(param0: any): boolean;
			public iterator(): java.util.Iterator<E>;
			public removeAt(index: number): E;
			public toArray(param0: any[]): any[];
			public spliterator(): java.util.Spliterator<E>;
			public toArray(array: any[]): any[];
			public contains(param0: any): boolean;
			public add(value: E): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public stream(): java.util.stream.Stream<E>;
			public retainAll(collection: java.util.Collection<any>): boolean;
			public toArray(): any[];
			public iterator(): java.util.Iterator<any>;
			public removeAll(array: androidx.collection.ArraySet<any>): boolean;
			public clear(): void;
			public addAll(array: androidx.collection.ArraySet<any>): void;
			public equals(object: any): boolean;
			public isEmpty(): boolean;
			public size(): number;
			public valueAt(index: number): E;
			public parallelStream(): java.util.stream.Stream<E>;
			public add(param0: E): boolean;
			public constructor();
			public constructor(set: androidx.collection.ArraySet<E>);
			public forEach(action: any /* any*/): void;
			public contains(key: any): boolean;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(object: any): boolean;
			public remove(param0: any): boolean;
			public constructor(capacity: number);
			public addAll(collection: java.util.Collection<any>): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public indexOf(key: any): number;
			public toString(): string;
			public containsAll(collection: java.util.Collection<any>): boolean;
			public removeAll(collection: java.util.Collection<any>): boolean;
			public equals(obj: any): boolean;
			public constructor(set: java.util.Collection<E>);
			public ensureCapacity(minimumCapacity: number): void;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module collection {
		export class CircularArray<E>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.collection.CircularArray<any>>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public constructor(minCapacity: number);
			public constructor();
			public get(n: number): E;
			public removeFromEnd(numOfElements: number): void;
			public addLast(e: E): void;
			public getLast(): E;
			public popLast(): E;
			public removeFromStart(numOfElements: number): void;
			public getFirst(): E;
			public popFirst(): E;
			public addFirst(e: E): void;
		}
	}
}

declare module androidx {
	export module collection {
		export class CircularIntArray extends java.lang.Object {
			public static class: java.lang.Class<androidx.collection.CircularIntArray>;
			public clear(): void;
			public popLast(): number;
			public size(): number;
			public isEmpty(): boolean;
			public getFirst(): number;
			public constructor(minCapacity: number);
			public constructor();
			public removeFromEnd(numOfElements: number): void;
			public popFirst(): number;
			public removeFromStart(numOfElements: number): void;
			public get(n: number): number;
			public addLast(e: number): void;
			public getLast(): number;
			public addFirst(e: number): void;
		}
	}
}

declare module androidx {
	export module collection {
		export class ContainerHelpers extends java.lang.Object {
			public static class: java.lang.Class<androidx.collection.ContainerHelpers>;
			public static idealLongArraySize(need: number): number;
			public static idealByteArraySize(need: number): number;
			public static equal(a: any, b: any): boolean;
			public static idealIntArraySize(need: number): number;
		}
	}
}

declare module androidx {
	export module collection {
		export class LongSparseArray<E>  extends java.lang.Cloneable {
			public static class: java.lang.Class<androidx.collection.LongSparseArray<any>>;
			public replace(key: number, param1: any): any;
			public constructor(initialCapacity: number);
			/** @deprecated */
			public delete(key: number): void;
			public replace(key: number, param1: any, oldValue: any): boolean;
			public containsValue(value: any): boolean;
			public remove(key: number): void;
			public get(key: number, param1: any): any;
			public clone(): androidx.collection.LongSparseArray<any>;
			public remove(key: number, param1: any): boolean;
			public putIfAbsent(key: number, param1: any): any;
			public indexOfValue(value: any): number;
			public indexOfKey(key: number): number;
			public clear(): void;
			public append(key: number, param1: any): void;
			public size(): number;
			public isEmpty(): boolean;
			public removeAt(index: number): void;
			public valueAt(index: number): any;
			public constructor();
			public setValueAt(index: number, value: any): void;
			public keyAt(index: number): number;
			public clone(): any;
			public toString(): string;
			public putAll(other: androidx.collection.LongSparseArray<any>): void;
			public get(key: number): any;
			public put(key: number, param1: any): void;
			public containsKey(key: number): boolean;
		}
	}
}

declare module androidx {
	export module collection {
		export class LruCache<K, V>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.collection.LruCache<any,any>>;
			public sizeOf(key: K, value: V): number;
			public create(key: K): V;
			public size(): number;
			public putCount(): number;
			public createCount(): number;
			public evictAll(): void;
			public resize(maxSize: number): void;
			public entryRemoved(evicted: boolean, key: K, oldValue: V, newValue: V): void;
			public maxSize(): number;
			public put(key: K, value: V): V;
			public hitCount(): number;
			public remove(key: K): V;
			public snapshot(): java.util.Map<K,V>;
			public toString(): string;
			public get(key: K): V;
			public trimToSize(maxSize: number): void;
			public evictionCount(): number;
			public constructor(maxSize: number);
			public missCount(): number;
		}
	}
}

declare module androidx {
	export module collection {
		export abstract class MapCollections<K, V>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.collection.MapCollections<any,any>>;
			public getEntrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
			public colGetEntry(param0: number, param1: number): any;
			public getKeySet(): java.util.Set<K>;
			public colIndexOfValue(param0: any): number;
			public toArrayHelper(array: any[], offset: number): any[];
			public colClear(): void;
			public getValues(): java.util.Collection<V>;
			public colGetMap(): java.util.Map<K,V>;
			public colPut(param0: K, param1: V): void;
			public static containsAllHelper(map: java.util.Map<any,any>, collection: java.util.Collection<any>): boolean;
			public static equalsSetHelper(set: java.util.Set<any>, object: any): boolean;
			public colRemoveAt(param0: number): void;
			public static removeAllHelper(map: java.util.Map<any,any>, collection: java.util.Collection<any>): boolean;
			public colSetValue(param0: number, param1: V): V;
			public static retainAllHelper(map: java.util.Map<any,any>, collection: java.util.Collection<any>): boolean;
			public colGetSize(): number;
			public toArrayHelper(offset: number): any[];
			public colIndexOfKey(param0: any): number;
		}
		export module MapCollections {
			export class ArrayIterator<T>  extends java.util.Iterator<any> {
				public static class: java.lang.Class<androidx.collection.MapCollections.ArrayIterator<any>>;
				public remove(): void;
				public next(): any;
				public hasNext(): boolean;
			}
			export class EntrySet extends java.util.Set<java.util.Map.Entry<any,any>> {
				public static class: java.lang.Class<androidx.collection.MapCollections.EntrySet>;
				public parallelStream(): java.util.stream.Stream<any>;
				public removeAll(collection: java.util.Collection<any>): boolean;
				public addAll(param0: java.util.Collection<any>): boolean;
				public containsAll(collection: java.util.Collection<any>): boolean;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public hashCode(): number;
				public clear(): void;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public remove(param0: any): boolean;
				public contains(o: any): boolean;
				public remove(object: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public stream(): java.util.stream.Stream<any>;
				public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
				public addAll(collection: java.util.Collection<any>): boolean;
				public iterator(): java.util.Iterator<any>;
				public forEach(action: any /* any*/): void;
				public toArray(): any[];
				public retainAll(param0: java.util.Collection<any>): boolean;
				public equals(object: any): boolean;
				public size(): number;
				public toArray(param0: any[]): any[];
				public removeIf(filter: any /* any*/): boolean;
				public equals(obj: any): boolean;
				public add(object: java.util.Map.Entry<any,any>): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public toArray(array: any[]): any[];
				public retainAll(collection: java.util.Collection<any>): boolean;
			}
			export class KeySet extends java.util.Set<any> {
				public static class: java.lang.Class<androidx.collection.MapCollections.KeySet>;
				public parallelStream(): java.util.stream.Stream<any>;
				public removeAll(collection: java.util.Collection<any>): boolean;
				public addAll(param0: java.util.Collection<any>): boolean;
				public containsAll(collection: java.util.Collection<any>): boolean;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public hashCode(): number;
				public clear(): void;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public contains(object: any): boolean;
				public remove(param0: any): boolean;
				public remove(object: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public stream(): java.util.stream.Stream<any>;
				public addAll(collection: java.util.Collection<any>): boolean;
				public iterator(): java.util.Iterator<any>;
				public forEach(action: any /* any*/): void;
				public toArray(): any[];
				public retainAll(param0: java.util.Collection<any>): boolean;
				public equals(object: any): boolean;
				public size(): number;
				public toArray(param0: any[]): any[];
				public removeIf(filter: any /* any*/): boolean;
				public equals(obj: any): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public toArray(array: any[]): any[];
				public add(object: any): boolean;
				public retainAll(collection: java.util.Collection<any>): boolean;
			}
			export class MapIterator extends java.lang.Object {
				public static class: java.lang.Class<androidx.collection.MapCollections.MapIterator>;
				public remove(): void;
				public static comparingByValue(): java.util.Comparator<any>;
				public setValue(object: any): any;
				public getKey(): any;
				public static comparingByKey(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
				public next(): java.util.Map.Entry<any,any>;
				public getValue(): any;
				public toString(): string;
				public static comparingByValue(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
				public static comparingByKey(): java.util.Comparator<any>;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public hasNext(): boolean;
				public equals(param0: any): boolean;
				public equals(o: any): boolean;
				public setValue(param0: any): any;
			}
			export class ValuesCollection extends java.util.Collection<any> {
				public static class: java.lang.Class<androidx.collection.MapCollections.ValuesCollection>;
				public parallelStream(): java.util.stream.Stream<any>;
				public removeAll(collection: java.util.Collection<any>): boolean;
				public addAll(param0: java.util.Collection<any>): boolean;
				public containsAll(collection: java.util.Collection<any>): boolean;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public hashCode(): number;
				public clear(): void;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public contains(object: any): boolean;
				public remove(param0: any): boolean;
				public remove(object: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public stream(): java.util.stream.Stream<any>;
				public addAll(collection: java.util.Collection<any>): boolean;
				public iterator(): java.util.Iterator<any>;
				public forEach(action: any /* any*/): void;
				public toArray(): any[];
				public retainAll(param0: java.util.Collection<any>): boolean;
				public size(): number;
				public toArray(param0: any[]): any[];
				public removeIf(filter: any /* any*/): boolean;
				public equals(obj: any): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public toArray(array: any[]): any[];
				public add(object: any): boolean;
				public retainAll(collection: java.util.Collection<any>): boolean;
			}
		}
	}
}

declare module androidx {
	export module collection {
		export class SimpleArrayMap<K, V>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.collection.SimpleArrayMap<any,any>>;
			public constructor(map: androidx.collection.SimpleArrayMap<K,V>);
			public setValueAt(index: number, value: V): V;
			public replace(key: K, value: V): V;
			public putAll(array: androidx.collection.SimpleArrayMap<any,any>): void;
			public containsKey(key: any): boolean;
			public containsValue(value: any): boolean;
			public valueAt(index: number): V;
			public removeAt(index: number): V;
			public keyAt(index: number): K;
			public get(key: any): V;
			public clear(): void;
			public remove(key: any): V;
			public replace(key: K, oldValue: V, newValue: V): boolean;
			public getOrDefault(key: any, defaultValue: V): V;
			public equals(object: any): boolean;
			public isEmpty(): boolean;
			public size(): number;
			public putIfAbsent(key: K, value: V): V;
			public constructor();
			public indexOfKey(key: any): number;
			public put(key: K, value: V): V;
			public constructor(capacity: number);
			public toString(): string;
			public equals(obj: any): boolean;
			public ensureCapacity(minimumCapacity: number): void;
			public remove(key: any, value: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module collection {
		export class SparseArrayCompat<E>  extends java.lang.Cloneable {
			public static class: java.lang.Class<androidx.collection.SparseArrayCompat<any>>;
			public constructor(initialCapacity: number);
			/** @deprecated */
			public delete(key: number): void;
			public append(key: number, value: any): void;
			public putAll(other: androidx.collection.SparseArrayCompat<any>): void;
			public containsValue(value: any): boolean;
			public get(key: number, valueIfKeyNotFound: any): any;
			public remove(key: number): void;
			public clone(): androidx.collection.SparseArrayCompat<any>;
			public put(key: number, value: any): void;
			public indexOfValue(value: any): number;
			public replace(key: number, value: any): any;
			public indexOfKey(key: number): number;
			public clear(): void;
			public putIfAbsent(key: number, value: any): any;
			public size(): number;
			public isEmpty(): boolean;
			public removeAt(index: number): void;
			public valueAt(index: number): any;
			public constructor();
			public removeAtRange(index: number, size: number): void;
			public setValueAt(index: number, value: any): void;
			public keyAt(index: number): number;
			public clone(): any;
			public toString(): string;
			public get(key: number): any;
			public containsKey(key: number): boolean;
			public replace(key: number, oldValue: any, newValue: any): boolean;
			public remove(key: number, value: any): boolean;
		}
	}
}

//Generics information:
//androidx.collection.ArrayMap:2
//androidx.collection.ArraySet:1
//androidx.collection.CircularArray:1
//androidx.collection.LongSparseArray:1
//androidx.collection.LruCache:2
//androidx.collection.MapCollections:2
//androidx.collection.MapCollections.ArrayIterator:1
//androidx.collection.SimpleArrayMap:2
//androidx.collection.SparseArrayCompat:1


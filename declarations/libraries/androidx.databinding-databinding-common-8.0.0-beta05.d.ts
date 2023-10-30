declare module androidx {
	export module databinding {
		export class Bindable extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.databinding.Bindable>;
			/**
			 * Constructs a new instance of the androidx.databinding.Bindable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string[];
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public value(): string[];
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module databinding {
		export class BindingAdapter extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.databinding.BindingAdapter>;
			/**
			 * Constructs a new instance of the androidx.databinding.BindingAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string[];
				requireAll(): boolean;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public requireAll(): boolean;
			public value(): string[];
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module databinding {
		export class BindingBuildInfo extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.databinding.BindingBuildInfo>;
			/**
			 * Constructs a new instance of the androidx.databinding.BindingBuildInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module databinding {
		export class BindingConversion extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.databinding.BindingConversion>;
			/**
			 * Constructs a new instance of the androidx.databinding.BindingConversion interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module databinding {
		export class BindingMethod extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.databinding.BindingMethod>;
			/**
			 * Constructs a new instance of the androidx.databinding.BindingMethod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				type(): java.lang.Class<any>;
				attribute(): string;
				method(): string;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public type(): java.lang.Class<any>;
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public attribute(): string;
			public method(): string;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module databinding {
		export class BindingMethods extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.databinding.BindingMethods>;
			/**
			 * Constructs a new instance of the androidx.databinding.BindingMethods interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): androidx.databinding.BindingMethod[];
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public value(): androidx.databinding.BindingMethod[];
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module databinding {
		export class CallbackRegistry<C, T, A>  extends java.lang.Cloneable {
			public static class: java.lang.Class<androidx.databinding.CallbackRegistry<any,any,any>>;
			public notifyCallbacks(sender: any, arg: number, arg2: any): void;
			public copyCallbacks(): java.util.ArrayList<any>;
			public clear(): void;
			public add(callback: any): void;
			public remove(callback: any): void;
			public clone(): any;
			public copyCallbacks(callbacks: java.util.List<any>): void;
			public isEmpty(): boolean;
			public clone(): androidx.databinding.CallbackRegistry<any,any,any>;
			public constructor(notifier: androidx.databinding.CallbackRegistry.NotifierCallback<any,any,any>);
		}
		export module CallbackRegistry {
			export abstract class NotifierCallback<C, T, A>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.databinding.CallbackRegistry.NotifierCallback<any,any,any>>;
				public onNotifyCallback(param0: C, param1: T, param2: number, param3: A): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module databinding {
		export class InverseBindingAdapter extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.databinding.InverseBindingAdapter>;
			/**
			 * Constructs a new instance of the androidx.databinding.InverseBindingAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				attribute(): string;
				event(): string;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public attribute(): string;
			public event(): string;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module databinding {
		export class InverseBindingListener extends java.lang.Object {
			public static class: java.lang.Class<androidx.databinding.InverseBindingListener>;
			/**
			 * Constructs a new instance of the androidx.databinding.InverseBindingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onChange(): void;
			});
			public constructor();
			public onChange(): void;
		}
	}
}

declare module androidx {
	export module databinding {
		export class InverseBindingMethod extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.databinding.InverseBindingMethod>;
			/**
			 * Constructs a new instance of the androidx.databinding.InverseBindingMethod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				type(): java.lang.Class<any>;
				attribute(): string;
				event(): string;
				method(): string;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public type(): java.lang.Class<any>;
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public attribute(): string;
			public event(): string;
			public method(): string;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module databinding {
		export class InverseBindingMethods extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.databinding.InverseBindingMethods>;
			/**
			 * Constructs a new instance of the androidx.databinding.InverseBindingMethods interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): androidx.databinding.InverseBindingMethod[];
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public value(): androidx.databinding.InverseBindingMethod[];
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module databinding {
		export class InverseMethod extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.databinding.InverseMethod>;
			/**
			 * Constructs a new instance of the androidx.databinding.InverseMethod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public value(): string;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module databinding {
		export class Observable extends java.lang.Object {
			public static class: java.lang.Class<androidx.databinding.Observable>;
			/**
			 * Constructs a new instance of the androidx.databinding.Observable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				addOnPropertyChangedCallback(param0: androidx.databinding.Observable.OnPropertyChangedCallback): void;
				removeOnPropertyChangedCallback(param0: androidx.databinding.Observable.OnPropertyChangedCallback): void;
			});
			public constructor();
			public removeOnPropertyChangedCallback(param0: androidx.databinding.Observable.OnPropertyChangedCallback): void;
			public addOnPropertyChangedCallback(param0: androidx.databinding.Observable.OnPropertyChangedCallback): void;
		}
		export module Observable {
			export abstract class OnPropertyChangedCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.databinding.Observable.OnPropertyChangedCallback>;
				public constructor();
				public onPropertyChanged(param0: androidx.databinding.Observable, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module databinding {
		export class ObservableList<T>  extends java.util.List<any> {
			public static class: java.lang.Class<androidx.databinding.ObservableList<any>>;
			/**
			 * Constructs a new instance of the androidx.databinding.ObservableList<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				addOnListChangedCallback(param0: androidx.databinding.ObservableList.OnListChangedCallback<any>): void;
				removeOnListChangedCallback(param0: androidx.databinding.ObservableList.OnListChangedCallback<any>): void;
				size(): number;
				isEmpty(): boolean;
				contains(param0: any): boolean;
				iterator(): java.util.Iterator<any>;
				toArray(): any[];
				toArray(param0: any[]): any[];
				add(param0: any): boolean;
				remove(param0: any): boolean;
				containsAll(param0: java.util.Collection<any>): boolean;
				addAll(param0: java.util.Collection<any>): boolean;
				addAll(param0: number, param1: java.util.Collection<any>): boolean;
				removeAll(param0: java.util.Collection<any>): boolean;
				retainAll(param0: java.util.Collection<any>): boolean;
				clear(): void;
				equals(param0: any): boolean;
				hashCode(): number;
				get(param0: number): any;
				set(param0: number, param1: any): any;
				add(param0: number, param1: any): void;
				remove(param0: number): any;
				indexOf(param0: any): number;
				lastIndexOf(param0: any): number;
				listIterator(): java.util.ListIterator<any>;
				listIterator(param0: number): java.util.ListIterator<any>;
				subList(param0: number, param1: number): java.util.List<any>;
				spliterator(): java.util.Spliterator<any>;
				replaceAll(operator: any /* any*/): void;
				sort(c: java.util.Comparator<any>): void;
				size(): number;
				isEmpty(): boolean;
				contains(param0: any): boolean;
				iterator(): java.util.Iterator<any>;
				toArray(): any[];
				toArray(param0: any[]): any[];
				add(param0: any): boolean;
				remove(param0: any): boolean;
				containsAll(param0: java.util.Collection<any>): boolean;
				addAll(param0: java.util.Collection<any>): boolean;
				removeAll(param0: java.util.Collection<any>): boolean;
				removeIf(filter: any /* any*/): boolean;
				retainAll(param0: java.util.Collection<any>): boolean;
				clear(): void;
				equals(param0: any): boolean;
				hashCode(): number;
				spliterator(): java.util.Spliterator<any>;
				stream(): java.util.stream.Stream<any>;
				parallelStream(): java.util.stream.Stream<any>;
				iterator(): java.util.Iterator<any>;
				forEach(action: any /* any*/): void;
				spliterator(): java.util.Spliterator<any>;
			});
			public constructor();
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public equals(param0: any): boolean;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public toArray(param0: any[]): any[];
			public replaceAll(operator: any /* any*/): void;
			public removeOnListChangedCallback(param0: androidx.databinding.ObservableList.OnListChangedCallback<any>): void;
			public addOnListChangedCallback(param0: androidx.databinding.ObservableList.OnListChangedCallback<any>): void;
			public contains(param0: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public get(param0: number): any;
			public sort(c: java.util.Comparator<any>): void;
			public toArray(): any[];
			public add(param0: number, param1: any): void;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public subList(param0: number, param1: number): java.util.List<any>;
			public forEach(action: any /* any*/): void;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public equals(obj: any): boolean;
			public add(param0: any): boolean;
			public listIterator(): java.util.ListIterator<any>;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public spliterator(): java.util.Spliterator<any>;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
		export module ObservableList {
			export abstract class OnListChangedCallback<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.databinding.ObservableList.OnListChangedCallback<any>>;
				public onItemRangeChanged(param0: T, param1: number, param2: number): void;
				public onChanged(param0: T): void;
				public onItemRangeRemoved(param0: T, param1: number, param2: number): void;
				public onItemRangeInserted(param0: T, param1: number, param2: number): void;
				public onItemRangeMoved(param0: T, param1: number, param2: number, param3: number): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module databinding {
		export class ObservableMap<K, V>  extends java.util.Map<any,any> {
			public static class: java.lang.Class<androidx.databinding.ObservableMap<any,any>>;
			/**
			 * Constructs a new instance of the androidx.databinding.ObservableMap<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				addOnMapChangedCallback(param0: androidx.databinding.ObservableMap.OnMapChangedCallback<any,any,any>): void;
				removeOnMapChangedCallback(param0: androidx.databinding.ObservableMap.OnMapChangedCallback<any,any,any>): void;
				size(): number;
				isEmpty(): boolean;
				containsKey(param0: any): boolean;
				containsValue(param0: any): boolean;
				get(param0: any): any;
				put(param0: any, param1: any): any;
				remove(param0: any): any;
				putAll(param0: java.util.Map<any,any>): void;
				clear(): void;
				keySet(): java.util.Set<any>;
				values(): java.util.Collection<any>;
				entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
				equals(param0: any): boolean;
				hashCode(): number;
				getOrDefault(key: any, defaultValue: any): any;
				forEach(action: any /* any<any,any>*/): void;
				replaceAll(_function_: any /* any<any,any,any>*/): void;
				putIfAbsent(key: any, value: any): any;
				remove(key: any, value: any): boolean;
				replace(key: any, oldValue: any, newValue: any): boolean;
				replace(key: any, value: any): any;
				computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
				computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
				compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
				merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
			});
			public constructor();
			public replace(key: any, oldValue: any, newValue: any): boolean;
			public equals(param0: any): boolean;
			public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public containsValue(param0: any): boolean;
			public replace(key: any, value: any): any;
			public get(param0: any): any;
			public removeOnMapChangedCallback(param0: androidx.databinding.ObservableMap.OnMapChangedCallback<any,any,any>): void;
			public forEach(action: any /* any<any,any>*/): void;
			public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public putIfAbsent(key: any, value: any): any;
			public remove(param0: any): any;
			public putAll(param0: java.util.Map<any,any>): void;
			public replaceAll(_function_: any /* any<any,any,any>*/): void;
			public values(): java.util.Collection<any>;
			public addOnMapChangedCallback(param0: androidx.databinding.ObservableMap.OnMapChangedCallback<any,any,any>): void;
			public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public keySet(): java.util.Set<any>;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
			public put(param0: any, param1: any): any;
			public getOrDefault(key: any, defaultValue: any): any;
			public equals(obj: any): boolean;
			public containsKey(param0: any): boolean;
			public remove(key: any, value: any): boolean;
			public hashCode(): number;
		}
		export module ObservableMap {
			export abstract class OnMapChangedCallback<T, K, V>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.databinding.ObservableMap.OnMapChangedCallback<any,any,any>>;
				public onMapChanged(param0: T, param1: K): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module databinding {
		export class Untaggable extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.databinding.Untaggable>;
			/**
			 * Constructs a new instance of the androidx.databinding.Untaggable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string[];
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public value(): string[];
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

//Generics information:
//androidx.databinding.CallbackRegistry:3
//androidx.databinding.CallbackRegistry.NotifierCallback:3
//androidx.databinding.ObservableList:1
//androidx.databinding.ObservableList.OnListChangedCallback:1
//androidx.databinding.ObservableMap:2
//androidx.databinding.ObservableMap.OnMapChangedCallback:3


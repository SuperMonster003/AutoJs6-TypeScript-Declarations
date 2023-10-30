declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class AnnotationUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.AnnotationUtils>;
					public equals(obj: any): boolean;
					public toString(): string;
					public constructor();
					public static hashCode(a: java.lang.annotation.Annotation): number;
					public static toString(a: java.lang.annotation.Annotation): string;
					public static equals(a1: java.lang.annotation.Annotation, a2: java.lang.annotation.Annotation): boolean;
					public static isValidAnnotationMemberType(type: java.lang.Class<any>): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class ArchUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.ArchUtils>;
					public constructor();
					public static getProcessor(): org.apache.commons.lang3.arch.Processor;
					public static getProcessor(value: string): org.apache.commons.lang3.arch.Processor;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class ArraySorter extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.ArraySorter>;
					public constructor();
					public static sort(array: any[]): any[];
					public static sort(array: any[], comparator: java.util.Comparator<any>): any[];
					public static sort(array: number[]): number[];
					public static sort(array: string[]): string[];
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class ArrayUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.ArrayUtils>;
					public static EMPTY_BOOLEAN_ARRAY: boolean[];
					public static EMPTY_BOOLEAN_OBJECT_ARRAY: java.lang.Boolean[];
					public static EMPTY_BYTE_ARRAY: number[];
					public static EMPTY_BYTE_OBJECT_ARRAY: java.lang.Byte[];
					public static EMPTY_CHAR_ARRAY: string[];
					public static EMPTY_CHARACTER_OBJECT_ARRAY: java.lang.Character[];
					public static EMPTY_CLASS_ARRAY: java.lang.Class<any>[];
					public static EMPTY_DOUBLE_ARRAY: number[];
					public static EMPTY_DOUBLE_OBJECT_ARRAY: java.lang.Double[];
					public static EMPTY_FIELD_ARRAY: java.lang.reflect.Field[];
					public static EMPTY_FLOAT_ARRAY: number[];
					public static EMPTY_FLOAT_OBJECT_ARRAY: java.lang.Float[];
					public static EMPTY_INT_ARRAY: number[];
					public static EMPTY_INTEGER_OBJECT_ARRAY: java.lang.Integer[];
					public static EMPTY_LONG_ARRAY: number[];
					public static EMPTY_LONG_OBJECT_ARRAY: java.lang.Long[];
					public static EMPTY_METHOD_ARRAY: java.lang.reflect.Method[];
					public static EMPTY_OBJECT_ARRAY: any[];
					public static EMPTY_SHORT_ARRAY: number[];
					public static EMPTY_SHORT_OBJECT_ARRAY: java.lang.Short[];
					public static EMPTY_STRING_ARRAY: string[];
					public static EMPTY_THROWABLE_ARRAY: java.lang.Throwable[];
					public static EMPTY_TYPE_ARRAY: java.lang.reflect.Type[];
					public static INDEX_NOT_FOUND: number;
					public static shuffle(array: string[]): void;
					public static toPrimitive(array: java.lang.Double[]): number[];
					public static toPrimitive(array: java.lang.Short[], valueForNull: number): number[];
					public static toPrimitive(array: java.lang.Float[], valueForNull: number): number[];
					public static toStringArray(array: any[]): string[];
					public constructor();
					public static shift(array: any[], startIndexInclusive: number, endIndexExclusive: number, offset: number): void;
					public static swap(array: any[], offset1: number, offset2: number, len: number): void;
					public static shift(array: number[], startIndexInclusive: number, endIndexExclusive: number, offset: number): void;
					public static nullToEmpty(array: java.lang.Byte[]): java.lang.Byte[];
					public static get(array: any[], index: number): any;
					public static indexesOf(array: string[], valueToFind: string, startIndex: number): java.util.BitSet;
					public static nullToEmpty(array: java.lang.Long[]): java.lang.Long[];
					public static toPrimitive(array: any): any;
					public static getComponentType(array: any[]): java.lang.Class<any>;
					public static indexOf(array: number[], valueToFind: number, param2: number): number;
					public static toPrimitive(array: java.lang.Character[]): string[];
					public static insert(index: number, array: string[], ...values: string[]): string[];
					public static indexOf(array: any[], objectToFind: any): number;
					public static lastIndexOf(array: number[], valueToFind: number): number;
					public static remove(array: string[], index: number): string[];
					public static toObject(array: number[]): java.lang.Double[];
					public static swap(array: string[], offset1: number, offset2: number, len: number): void;
					public static clone(array: number[]): number[];
					public static isArrayIndexValid(array: any[], index: number): boolean;
					public static nullToEmpty(array: java.lang.Float[]): java.lang.Float[];
					public static isSorted(array: java.lang.Comparable<any>[]): boolean;
					public hashCode(): number;
					public static lastIndexOf(array: number[], valueToFind: number, param2: number): number;
					/** @deprecated */
					public static add(array: boolean[], index: number, element: boolean): boolean[];
					public static toMap(array: any[]): java.util.Map<any,any>;
					public static removeElement(array: any[], element: any): any[];
					public static lastIndexOf(array: string[], valueToFind: string): number;
					public static nullToEmpty(array: java.lang.Character[]): java.lang.Character[];
					public static remove(array: number[], index: number): number[];
					public static indexOf(array: string[], valueToFind: string, startIndex: number): number;
					public static indexOf(array: any[], objectToFind: any, startIndex: number): number;
					public static toString(array: any, stringIfNull: string): string;
					public static indexesOf(array: string[], valueToFind: string): java.util.BitSet;
					public static lastIndexOf(array: boolean[], valueToFind: boolean): number;
					public static removeElement(array: number[], element: number): number[];
					public static removeElement(array: string[], element: string): string[];
					public static toPrimitive(array: java.lang.Short[]): number[];
					public static nullToEmpty(array: any[], type: java.lang.Class<any>): any[];
					public static getLength(array: any): number;
					public static toPrimitive(array: java.lang.Long[]): number[];
					/** @deprecated */
					public static removeAllOccurences(array: number[], element: number): number[];
					public static remove(array: any[], index: number): any[];
					public static indexesOf(array: number[], valueToFind: number, param2: number, startIndex: number): java.util.BitSet;
					public static toPrimitive(array: java.lang.Float[]): number[];
					public static isNotEmpty(array: any[]): boolean;
					public static indexesOf(array: boolean[], valueToFind: boolean): java.util.BitSet;
					public static indexesOf(array: number[], valueToFind: number, startIndex: number): java.util.BitSet;
					public static shift(array: number[], offset: number): void;
					public static removeElements(array: boolean[], ...values: boolean[]): boolean[];
					public static add(array: number[], element: number): number[];
					public static toPrimitive(array: java.lang.Integer[]): number[];
					public static swap(array: any[], offset1: number, offset2: number): void;
					public static isEmpty(array: number[]): boolean;
					public static toPrimitive(array: java.lang.Integer[], valueForNull: number): number[];
					public static add(array: any[], element: any): any[];
					public static isNotEmpty(array: string[]): boolean;
					public static indexOf(array: number[], valueToFind: number): number;
					public static toObject(array: number[]): java.lang.Short[];
					public static isNotEmpty(array: number[]): boolean;
					public static isSorted(array: boolean[]): boolean;
					/** @deprecated */
					public static add(array: string[], index: number, element: string): string[];
					public static nullToEmpty(array: java.lang.Double[]): java.lang.Double[];
					public static isSameLength(array1: number[], array2: number[]): boolean;
					public static remove(array: boolean[], index: number): boolean[];
					public static hashCode(array: any): number;
					public static contains(array: number[], valueToFind: number): boolean;
					/** @deprecated */
					public static isEquals(array1: any, array2: any): boolean;
					public static toPrimitive(array: java.lang.Long[], valueForNull: number): number[];
					public static reverse(array: string[], startIndexInclusive: number, endIndexExclusive: number): void;
					public static shuffle(array: boolean[]): void;
					public static shuffle(array: boolean[], random: java.util.Random): void;
					public static setAll(array: any[], generator: any /* any*/): any[];
					public static toObject(array: number[]): java.lang.Byte[];
					public static get(array: any[], index: number, defaultValue: any): any;
					public static removeElements(array: any[], ...values: any[]): any[];
					public static isEmpty(array: string[]): boolean;
					public static shift(array: string[], offset: number): void;
					public static toPrimitive(array: java.lang.Byte[]): number[];
					public static indexesOf(array: number[], valueToFind: number): java.util.BitSet;
					public static lastIndexOf(array: string[], valueToFind: string, startIndex: number): number;
					public static shuffle(array: number[], random: java.util.Random): void;
					public static nullToEmpty(array: number[]): number[];
					public static indexOf(array: number[], valueToFind: number, startIndex: number): number;
					public static isEmpty(array: boolean[]): boolean;
					public static nullToEmpty(array: any[]): any[];
					public static toPrimitive(array: java.lang.Byte[], valueForNull: number): number[];
					public static reverse(array: number[]): void;
					public static setAll(array: any[], generator: any /* any*/): any[];
					public static containsAny(array: any[], ...objectsToFind: any[]): boolean;
					public static isEmpty(array: any[]): boolean;
					public static insert(index: number, array: number[], ...values: number[]): number[];
					/** @deprecated */
					public static removeAllOccurences(array: string[], element: string): string[];
					public static indexOf(array: number[], valueToFind: number, param2: number, startIndex: number): number;
					public static shuffle(array: any[]): void;
					public static reverse(array: boolean[]): void;
					public static addAll(array1: string[], ...array2: string[]): string[];
					public static removeAll(array: boolean[], ...indices: number[]): boolean[];
					public static addAll(array1: any[], ...array2: any[]): any[];
					public static lastIndexOf(array: boolean[], valueToFind: boolean, startIndex: number): number;
					public static toPrimitive(array: java.lang.Boolean[]): boolean[];
					public static shift(array: any[], offset: number): void;
					public static contains(array: any[], objectToFind: any): boolean;
					public clone(): any;
					public static isSameLength(array1: boolean[], array2: boolean[]): boolean;
					public static reverse(array: boolean[], startIndexInclusive: number, endIndexExclusive: number): void;
					public static contains(array: number[], valueToFind: number, param2: number): boolean;
					public static indexOf(array: string[], valueToFind: string): number;
					public static insert(index: number, array: any[], ...values: any[]): any[];
					public static clone(array: boolean[]): boolean[];
					public static shift(array: boolean[], offset: number): void;
					public static subarray(array: string[], startIndexInclusive: number, endIndexExclusive: number): string[];
					public static toObject(array: number[]): java.lang.Long[];
					/** @deprecated */
					public static add(array: any[], index: number, element: any): any[];
					public static addFirst(array: any[], element: any): any[];
					public static isSorted(array: any[], comparator: java.util.Comparator<any>): boolean;
					/** @deprecated */
					public static removeAllOccurences(array: any[], element: any): any[];
					public static toObject(array: boolean[]): java.lang.Boolean[];
					/** @deprecated */
					public static add(array: number[], index: number, element: number): number[];
					public static toPrimitive(array: java.lang.Boolean[], valueForNull: boolean): boolean[];
					public static shuffle(array: any[], random: java.util.Random): void;
					public static indexOf(array: boolean[], valueToFind: boolean): number;
					public static addAll(array1: boolean[], ...array2: boolean[]): boolean[];
					public static contains(array: boolean[], valueToFind: boolean): boolean;
					public static toArray(...items: any[]): any[];
					public static indexesOf(array: number[], valueToFind: number, param2: number): java.util.BitSet;
					public static nullToEmpty(array: java.lang.Short[]): java.lang.Short[];
					public static removeAll(array: string[], ...indices: number[]): string[];
					public static swap(array: string[], offset1: number, offset2: number): void;
					public static lastIndexOf(array: number[], valueToFind: number, param2: number, startIndex: number): number;
					public static removeAllOccurrences(array: boolean[], element: boolean): boolean[];
					public static removeAll(array: number[], ...indices: number[]): number[];
					public static shuffle(array: string[], random: java.util.Random): void;
					public static isSameLength(array1: any[], array2: any[]): boolean;
					public static nullToEmpty(array: boolean[]): boolean[];
					public static toObject(array: string[]): java.lang.Character[];
					public static lastIndexOf(array: any[], objectToFind: any): number;
					public static removeAll(array: any[], ...indices: number[]): any[];
					public static swap(array: number[], offset1: number, offset2: number): void;
					public static lastIndexOf(array: number[], valueToFind: number, startIndex: number): number;
					public static clone(array: string[]): string[];
					public static toObject(array: number[]): java.lang.Float[];
					public static isSorted(array: string[]): boolean;
					public static removeAllOccurrences(array: string[], element: string): string[];
					public static shuffle(array: number[]): void;
					public static isSorted(array: number[]): boolean;
					public static removeAllOccurrences(array: number[], element: number): number[];
					public static reverse(array: number[], startIndexInclusive: number, endIndexExclusive: number): void;
					public static toStringArray(array: any[], valueForNullElements: string): string[];
					public static indexesOf(array: boolean[], valueToFind: boolean, startIndex: number): java.util.BitSet;
					public static reverse(array: string[]): void;
					public static lastIndexOf(array: any[], objectToFind: any, startIndex: number): number;
					public static addFirst(array: string[], element: string): string[];
					public static reverse(array: any[], startIndexInclusive: number, endIndexExclusive: number): void;
					public static indexOf(array: boolean[], valueToFind: boolean, startIndex: number): number;
					public static shift(array: string[], startIndexInclusive: number, endIndexExclusive: number, offset: number): void;
					public static add(array: string[], element: string): string[];
					public static nullToEmpty(array: java.lang.Boolean[]): java.lang.Boolean[];
					public static removeElement(array: boolean[], element: boolean): boolean[];
					public static toPrimitive(array: java.lang.Character[], valueForNull: string): string[];
					public static swap(array: boolean[], offset1: number, offset2: number): void;
					public static subarray(array: number[], startIndexInclusive: number, endIndexExclusive: number): number[];
					public static subarray(array: boolean[], startIndexInclusive: number, endIndexExclusive: number): boolean[];
					public static newInstance(componentType: java.lang.Class<any>, length: number): any[];
					public static nullToEmpty(array: java.lang.Class<any>[]): java.lang.Class<any>[];
					public static isSameLength(array1: any, array2: any): boolean;
					public static swap(array: boolean[], offset1: number, offset2: number, len: number): void;
					public static insert(index: number, array: boolean[], ...values: boolean[]): boolean[];
					public static toPrimitive(array: java.lang.Double[], valueForNull: number): number[];
					public static addAll(array1: number[], ...array2: number[]): number[];
					public toString(): string;
					public static removeElements(array: number[], ...values: number[]): number[];
					/** @deprecated */
					public static removeAllOccurences(array: boolean[], element: boolean): boolean[];
					public static add(array: boolean[], element: boolean): boolean[];
					public static isNotEmpty(array: boolean[]): boolean;
					public static indexesOf(array: any[], objectToFind: any, startIndex: number): java.util.BitSet;
					public static nullToEmpty(array: java.lang.Integer[]): java.lang.Integer[];
					public static subarray(array: any[], startIndexInclusive: number, endIndexExclusive: number): any[];
					public static toString(array: any): string;
					public static removeAllOccurrences(array: any[], element: any): any[];
					public static addFirst(array: number[], element: number): number[];
					public static isSameLength(array1: string[], array2: string[]): boolean;
					public static removeElements(array: string[], ...values: string[]): string[];
					public static indexesOf(array: any[], objectToFind: any): java.util.BitSet;
					public static toObject(array: number[]): java.lang.Integer[];
					public static shift(array: boolean[], startIndexInclusive: number, endIndexExclusive: number, offset: number): void;
					public static swap(array: number[], offset1: number, offset2: number, len: number): void;
					public static addFirst(array: boolean[], element: boolean): boolean[];
					public static clone(array: any[]): any[];
					public static contains(array: string[], valueToFind: string): boolean;
					public static isSameType(array1: any, array2: any): boolean;
					public static nullToEmpty(array: string[]): string[];
					public static reverse(array: any[]): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class BitField extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.BitField>;
					public isSet(holder: number): boolean;
					public setValue(holder: number, value: number): number;
					public setShort(holder: number): number;
					public getValue(holder: number): number;
					public isAllSet(holder: number): boolean;
					public clearByte(holder: number): number;
					public set(holder: number): number;
					public constructor(mask: number);
					public getShortValue(holder: number): number;
					public setShortValue(holder: number, value: number): number;
					public clearShort(holder: number): number;
					public clear(holder: number): number;
					public setByte(holder: number): number;
					public setByteBoolean(holder: number, flag: boolean): number;
					public getRawValue(holder: number): number;
					public setShortBoolean(holder: number, flag: boolean): number;
					public getShortRawValue(holder: number): number;
					public setBoolean(holder: number, flag: boolean): number;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class BooleanUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.BooleanUtils>;
					public static FALSE: string;
					public static NO: string;
					public static OFF: string;
					public static ON: string;
					public static TRUE: string;
					public static YES: string;
					public static forEach(action: any /* any*/): void;
					public static negate(bool: java.lang.Boolean): java.lang.Boolean;
					public static toStringYesNo(bool: java.lang.Boolean): string;
					public static toBooleanObject(str: string, trueString: string, falseString: string, nullString: string): java.lang.Boolean;
					public static toIntegerObject(bool: boolean, trueValue: java.lang.Integer, falseValue: java.lang.Integer): java.lang.Integer;
					public static toInteger(bool: boolean, trueValue: number, falseValue: number): number;
					public static or(...array: java.lang.Boolean[]): java.lang.Boolean;
					public static toBoolean(value: number, trueValue: number, falseValue: number): boolean;
					public static xor(...array: java.lang.Boolean[]): java.lang.Boolean;
					public static toIntegerObject(bool: java.lang.Boolean): java.lang.Integer;
					public static toInteger(bool: boolean): number;
					public static toBooleanObject(value: java.lang.Integer, trueValue: java.lang.Integer, falseValue: java.lang.Integer, nullValue: java.lang.Integer): java.lang.Boolean;
					public static or(...array: boolean[]): boolean;
					public static toString(bool: java.lang.Boolean, trueString: string, falseString: string, nullString: string): string;
					public static isNotTrue(bool: java.lang.Boolean): boolean;
					public toString(): string;
					public constructor();
					public static toBooleanDefaultIfNull(bool: java.lang.Boolean, valueIfNull: boolean): boolean;
					public static toIntegerObject(bool: boolean): java.lang.Integer;
					public static toBooleanObject(value: java.lang.Integer): java.lang.Boolean;
					public static toInteger(bool: java.lang.Boolean, trueValue: number, falseValue: number, nullValue: number): number;
					public static toBooleanObject(value: number, trueValue: number, falseValue: number, nullValue: number): java.lang.Boolean;
					public static isFalse(bool: java.lang.Boolean): boolean;
					public static toBooleanObject(str: string): java.lang.Boolean;
					public static toBoolean(value: number): boolean;
					public static values(): java.util.List<java.lang.Boolean>;
					public static toIntegerObject(bool: java.lang.Boolean, trueValue: java.lang.Integer, falseValue: java.lang.Integer, nullValue: java.lang.Integer): java.lang.Integer;
					public static toBoolean(str: string): boolean;
					public static toBoolean(value: java.lang.Integer, trueValue: java.lang.Integer, falseValue: java.lang.Integer): boolean;
					public static xor(...array: boolean[]): boolean;
					public static compare(x: boolean, y: boolean): number;
					public static isTrue(bool: java.lang.Boolean): boolean;
					public static primitiveValues(): boolean[];
					public static toStringTrueFalse(bool: boolean): string;
					public static oneHot(...array: boolean[]): boolean;
					public static toStringTrueFalse(bool: java.lang.Boolean): string;
					public static oneHot(...array: java.lang.Boolean[]): java.lang.Boolean;
					public static toBoolean(bool: java.lang.Boolean): boolean;
					public static toString(bool: boolean, trueString: string, falseString: string): string;
					public static toStringOnOff(bool: boolean): string;
					public static toStringYesNo(bool: boolean): string;
					public static toBooleanObject(value: number): java.lang.Boolean;
					public static toStringOnOff(bool: java.lang.Boolean): string;
					public static booleanValues(): java.lang.Boolean[];
					public static toBoolean(str: string, trueString: string, falseString: string): boolean;
					public static isNotFalse(bool: java.lang.Boolean): boolean;
					public static and(...array: boolean[]): boolean;
					public static and(...array: java.lang.Boolean[]): java.lang.Boolean;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class CharEncoding extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.CharEncoding>;
					public static ISO_8859_1: string;
					public static US_ASCII: string;
					public static UTF_16: string;
					public static UTF_16BE: string;
					public static UTF_16LE: string;
					public static UTF_8: string;
					/** @deprecated */
					public static isSupported(name: string): boolean;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class CharRange extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.CharRange>;
					public static isNot(ch: string): org.apache.commons.lang3.CharRange;
					public getEnd(): string;
					public equals(obj: any): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public static isNotIn(start: string, end: string): org.apache.commons.lang3.CharRange;
					public toString(): string;
					public iterator(): java.util.Iterator<any>;
					public contains(ch: string): boolean;
					public static is(ch: string): org.apache.commons.lang3.CharRange;
					public hashCode(): number;
					public static isIn(start: string, end: string): org.apache.commons.lang3.CharRange;
					public getStart(): string;
					public isNegated(): boolean;
					public contains(range: org.apache.commons.lang3.CharRange): boolean;
					public iterator(): java.util.Iterator<java.lang.Character>;
					public forEach(action: any /* any*/): void;
				}
				export module CharRange {
					export class CharacterIterator extends java.util.Iterator<java.lang.Character> {
						public static class: java.lang.Class<org.apache.commons.lang3.CharRange.CharacterIterator>;
						public next(): java.lang.Character;
						public hasNext(): boolean;
						public remove(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class CharSequenceUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.CharSequenceUtils>;
					public static toCharArray(source: string): string[];
					public constructor();
					public static subSequence(cs: string, start: number): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class CharSet extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.apache.commons.lang3.CharSet>;
					public static EMPTY: org.apache.commons.lang3.CharSet;
					public static ASCII_ALPHA: org.apache.commons.lang3.CharSet;
					public static ASCII_ALPHA_LOWER: org.apache.commons.lang3.CharSet;
					public static ASCII_ALPHA_UPPER: org.apache.commons.lang3.CharSet;
					public static ASCII_NUMERIC: org.apache.commons.lang3.CharSet;
					public static COMMON: java.util.Map<string,org.apache.commons.lang3.CharSet>;
					public add(str: string): void;
					public equals(obj: any): boolean;
					public toString(): string;
					public static getInstance(...setStrs: string[]): org.apache.commons.lang3.CharSet;
					public contains(ch: string): boolean;
					public constructor(...set: string[]);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class CharSetUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.CharSetUtils>;
					public constructor();
					public static keep(str: string, ...set: string[]): string;
					public static squeeze(str: string, ...set: string[]): string;
					public static containsAny(str: string, ...set: string[]): boolean;
					public static count(str: string, ...set: string[]): number;
					public static delete(str: string, ...set: string[]): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class CharUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.CharUtils>;
					public static LF: string;
					public static CR: string;
					public static NUL: string;
					public static toString(ch: string): string;
					public static toCharacterObject(str: string): java.lang.Character;
					public static isAsciiAlphaLower(ch: string): boolean;
					public static unicodeEscaped(ch: string): string;
					public static isAsciiAlphaUpper(ch: string): boolean;
					public static toChar(str: string): string;
					public static compare(x: string, y: string): number;
					public static unicodeEscaped(ch: java.lang.Character): string;
					public static toIntValue(ch: java.lang.Character, defaultValue: number): number;
					public toString(): string;
					public static isAscii(ch: string): boolean;
					public constructor();
					public static toIntValue(ch: java.lang.Character): number;
					public static toIntValue(ch: string, defaultValue: number): number;
					public static isAsciiAlphanumeric(ch: string): boolean;
					public static isAsciiControl(ch: string): boolean;
					public static isAsciiPrintable(ch: string): boolean;
					public static toChar(ch: java.lang.Character, defaultValue: string): string;
					public static toIntValue(ch: string): number;
					public static toString(ch: java.lang.Character): string;
					/** @deprecated */
					public static toCharacterObject(ch: string): java.lang.Character;
					public static isAsciiAlpha(ch: string): boolean;
					public static toChar(ch: java.lang.Character): string;
					public static isAsciiNumeric(ch: string): boolean;
					public static toChar(str: string, defaultValue: string): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class Charsets extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.Charsets>;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class ClassLoaderUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.ClassLoaderUtils>;
					public toString(): string;
					public constructor();
					public static toString(classLoader: java.net.URLClassLoader): string;
					public static getThreadURLs(): java.net.URL[];
					public static getSystemURLs(): java.net.URL[];
					public static toString(classLoader: java.lang.ClassLoader): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class ClassPathUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.ClassPathUtils>;
					public static toFullyQualifiedPath(context: java.lang.Package, resourceName: string): string;
					public static toFullyQualifiedName(context: java.lang.Package, resourceName: string): string;
					public constructor();
					public static pathToPackage(path: string): string;
					public static packageToPath(path: string): string;
					public static toFullyQualifiedPath(context: java.lang.Class<any>, resourceName: string): string;
					public static toFullyQualifiedName(context: java.lang.Class<any>, resourceName: string): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class ClassUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.ClassUtils>;
					public static PACKAGE_SEPARATOR_CHAR: string;
					public static PACKAGE_SEPARATOR: string;
					public static INNER_CLASS_SEPARATOR_CHAR: string;
					public static INNER_CLASS_SEPARATOR: string;
					public static getShortCanonicalName(object: any, valueIfNull: string): string;
					public static getPackageName(object: any, valueIfNull: string): string;
					public static getShortCanonicalName(cls: java.lang.Class<any>): string;
					public static hierarchy(type: java.lang.Class<any>, interfacesBehavior: org.apache.commons.lang3.ClassUtils.Interfaces): java.lang.Iterable<java.lang.Class<any>>;
					public static isAssignable(cls: java.lang.Class<any>, toClass: java.lang.Class<any>): boolean;
					public static getSimpleName(object: any): string;
					public static convertClassNamesToClasses(classNames: java.util.List<string>): java.util.List<java.lang.Class<any>>;
					public constructor();
					public static getClass(classLoader: java.lang.ClassLoader, className: string, initialize: boolean): java.lang.Class<any>;
					public static getAllSuperclasses(cls: java.lang.Class<any>): java.util.List<java.lang.Class<any>>;
					public static getSimpleName(cls: java.lang.Class<any>, valueIfNull: string): string;
					public static getAllInterfaces(cls: java.lang.Class<any>): java.util.List<java.lang.Class<any>>;
					public static getCanonicalName(object: any, valueIfNull: string): string;
					public static isAssignable(cls: java.lang.Class<any>, toClass: java.lang.Class<any>, autoboxing: boolean): boolean;
					public static comparator(): java.util.Comparator<java.lang.Class<any>>;
					public static isPrimitiveOrWrapper(type: java.lang.Class<any>): boolean;
					public static getComponentType(cls: java.lang.Class<any>): java.lang.Class<any>;
					public static toClass(...array: any[]): java.lang.Class<any>[];
					public static convertClassesToClassNames(classes: java.util.List<java.lang.Class<any>>): java.util.List<string>;
					public static getClass(className: string, initialize: boolean): java.lang.Class<any>;
					public static getName(cls: java.lang.Class<any>, valueIfNull: string): string;
					public static isAssignable(classArray: java.lang.Class<any>[], ...toClassArray: java.lang.Class<any>[]): boolean;
					public static hierarchy(type: java.lang.Class<any>): java.lang.Iterable<java.lang.Class<any>>;
					public static getSimpleName(cls: java.lang.Class<any>): string;
					public static getPackageName(cls: java.lang.Class<any>): string;
					public static primitiveToWrapper(cls: java.lang.Class<any>): java.lang.Class<any>;
					public static wrapperToPrimitive(cls: java.lang.Class<any>): java.lang.Class<any>;
					public static primitivesToWrappers(...classes: java.lang.Class<any>[]): java.lang.Class<any>[];
					public static isPrimitiveWrapper(type: java.lang.Class<any>): boolean;
					public static getPackageName(className: string): string;
					public static isInnerClass(cls: java.lang.Class<any>): boolean;
					public static getShortClassName(className: string): string;
					public static getSimpleName(object: any, valueIfNull: string): string;
					public static getClass(className: string): java.lang.Class<any>;
					public static getShortClassName(cls: java.lang.Class<any>): string;
					public static getShortClassName(object: any, valueIfNull: string): string;
					public static getCanonicalName(object: any): string;
					public static getShortCanonicalName(canonicalName: string): string;
					public static getCanonicalName(cls: java.lang.Class<any>): string;
					public static getPublicMethod(cls: java.lang.Class<any>, methodName: string, ...parameterTypes: java.lang.Class<any>[]): java.lang.reflect.Method;
					public getClass(): java.lang.Class<any>;
					public static getName(object: any): string;
					public static getAbbreviatedName(cls: java.lang.Class<any>, lengthHint: number): string;
					public static getAbbreviatedName(className: string, lengthHint: number): string;
					public static isAssignable(classArray: java.lang.Class<any>[], toClassArray: java.lang.Class<any>[], autoboxing: boolean): boolean;
					public static getPackageCanonicalName(name: string): string;
					public static isPublic(cls: java.lang.Class<any>): boolean;
					public static getName(cls: java.lang.Class<any>): string;
					public static getCanonicalName(cls: java.lang.Class<any>, valueIfNull: string): string;
					public static wrappersToPrimitives(...classes: java.lang.Class<any>[]): java.lang.Class<any>[];
					public static getPackageCanonicalName(object: any, valueIfNull: string): string;
					public static getClass(classLoader: java.lang.ClassLoader, className: string): java.lang.Class<any>;
					public static getName(object: any, valueIfNull: string): string;
					public static getPackageCanonicalName(cls: java.lang.Class<any>): string;
				}
				export module ClassUtils {
					export class Interfaces {
						public static class: java.lang.Class<org.apache.commons.lang3.ClassUtils.Interfaces>;
						public static INCLUDE: org.apache.commons.lang3.ClassUtils.Interfaces;
						public static EXCLUDE: org.apache.commons.lang3.ClassUtils.Interfaces;
						public static valueOf(name: string): org.apache.commons.lang3.ClassUtils.Interfaces;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): org.apache.commons.lang3.ClassUtils.Interfaces[];
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class Conversion extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.Conversion>;
					public static longToShortArray(src: number, param1: number, srcPos: number[], dst: number, dstPos: number): number[];
					public static binaryBeMsb0ToHexDigit(src: boolean[], srcPos: number): string;
					public static byteArrayToShort(src: number[], srcPos: number, dstInit: number, dstPos: number, nBytes: number): number;
					public static uuidToByteArray(src: java.util.UUID, dst: number[], dstPos: number, nBytes: number): number[];
					public static byteArrayToInt(src: number[], srcPos: number, dstInit: number, dstPos: number, nBytes: number): number;
					public static longToByteArray(src: number, param1: number, srcPos: number[], dst: number, dstPos: number): number[];
					public static byteToBinary(src: number, srcPos: number, dst: boolean[], dstPos: number, nBools: number): boolean[];
					public static intArrayToLong(src: number[], srcPos: number, dstInit: number, param3: number, dstPos: number): number;
					public static shortToHex(src: number, srcPos: number, dstInit: string, dstPos: number, nHexs: number): string;
					public static binaryToHexDigit(src: boolean[], srcPos: number): string;
					public static binaryToByte(src: boolean[], srcPos: number, dstInit: number, dstPos: number, nBools: number): number;
					public static intToBinary(src: number, srcPos: number, dst: boolean[], dstPos: number, nBools: number): boolean[];
					public static hexDigitMsb0ToBinary(hexDigit: string): boolean[];
					public static intToByteArray(src: number, srcPos: number, dst: number[], dstPos: number, nBytes: number): number[];
					public static intToShortArray(src: number, srcPos: number, dst: number[], dstPos: number, nShorts: number): number[];
					public constructor();
					public static intToHex(src: number, srcPos: number, dstInit: string, dstPos: number, nHexs: number): string;
					public static longToBinary(src: number, param1: number, srcPos: boolean[], dst: number, dstPos: number): boolean[];
					public static hexDigitToBinary(hexDigit: string): boolean[];
					public static shortArrayToInt(src: number[], srcPos: number, dstInit: number, dstPos: number, nShorts: number): number;
					public static byteArrayToLong(src: number[], srcPos: number, dstInit: number, param3: number, dstPos: number): number;
					public static hexToInt(src: string, srcPos: number, dstInit: number, dstPos: number, nHex: number): number;
					public static binaryToHexDigit(src: boolean[]): string;
					public static binaryBeMsb0ToHexDigit(src: boolean[]): string;
					public static shortArrayToLong(src: number[], srcPos: number, dstInit: number, param3: number, dstPos: number): number;
					public static binaryToLong(src: boolean[], srcPos: number, dstInit: number, param3: number, dstPos: number): number;
					public static shortToBinary(src: number, srcPos: number, dst: boolean[], dstPos: number, nBools: number): boolean[];
					public static longToHex(src: number, param1: number, srcPos: string, dstInit: number, dstPos: number): string;
					public static hexToByte(src: string, srcPos: number, dstInit: number, dstPos: number, nHex: number): number;
					public static hexToShort(src: string, srcPos: number, dstInit: number, dstPos: number, nHex: number): number;
					public static binaryToInt(src: boolean[], srcPos: number, dstInit: number, dstPos: number, nBools: number): number;
					public static hexDigitToInt(hexDigit: string): number;
					public static intToHexDigit(nibble: number): string;
					public static binaryToHexDigitMsb0_4bits(src: boolean[], srcPos: number): string;
					public static shortToByteArray(src: number, srcPos: number, dst: number[], dstPos: number, nBytes: number): number[];
					public static binaryToHexDigitMsb0_4bits(src: boolean[]): string;
					public static hexToLong(src: string, srcPos: number, dstInit: number, param3: number, dstPos: number): number;
					public static binaryToShort(src: boolean[], srcPos: number, dstInit: number, dstPos: number, nBools: number): number;
					public static intToHexDigitMsb0(nibble: number): string;
					public static longToIntArray(src: number, param1: number, srcPos: number[], dst: number, dstPos: number): number[];
					public static hexDigitMsb0ToInt(hexDigit: string): number;
					public static byteToHex(src: number, srcPos: number, dstInit: string, dstPos: number, nHexs: number): string;
					public static byteArrayToUuid(src: number[], srcPos: number): java.util.UUID;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class DoubleRange extends org.apache.commons.lang3.NumberRange<java.lang.Double> {
					public static class: java.lang.Class<org.apache.commons.lang3.DoubleRange>;
					public static of(fromInclusive: number, param1: number): org.apache.commons.lang3.DoubleRange;
					public static of(fromInclusive: java.lang.Double, toInclusive: java.lang.Double): org.apache.commons.lang3.DoubleRange;
					public static of(fromInclusive: java.lang.Comparable<any>, toInclusive: java.lang.Comparable<any>): org.apache.commons.lang3.Range<any>;
					public static of(fromInclusive: any, toInclusive: any, comparator: java.util.Comparator<any>): org.apache.commons.lang3.Range<any>;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class EnumUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.EnumUtils>;
					public static getEnum(enumClass: java.lang.Class<any>, enumName: string, defaultEnum: java.lang.Enum<any>): java.lang.Enum<any>;
					public static getEnumMap(enumClass: java.lang.Class<any>): java.util.Map<any,any>;
					public static processBitVectors(enumClass: java.lang.Class<any>, ...values: number[]): java.util.EnumSet<any>;
					public static generateBitVector(enumClass: java.lang.Class<any>, values: java.lang.Iterable<any>): number;
					public static getEnumIgnoreCase(enumClass: java.lang.Class<any>, enumName: string): java.lang.Enum<any>;
					public static getEnum(enumClass: java.lang.Class<any>, enumName: string): java.lang.Enum<any>;
					public static getEnumIgnoreCase(enumClass: java.lang.Class<any>, enumName: string, defaultEnum: java.lang.Enum<any>): java.lang.Enum<any>;
					public static generateBitVectors(enumClass: java.lang.Class<any>, ...values: java.lang.Enum<any>[]): number[];
					public static getEnumSystemProperty(enumClass: java.lang.Class<any>, propName: string, defaultEnum: java.lang.Enum<any>): java.lang.Enum<any>;
					public static isValidEnum(enumClass: java.lang.Class<any>, enumName: string): boolean;
					public static getEnumList(enumClass: java.lang.Class<any>): java.util.List<any>;
					public constructor();
					public static generateBitVector(enumClass: java.lang.Class<any>, ...values: java.lang.Enum<any>[]): number;
					public static isValidEnumIgnoreCase(enumClass: java.lang.Class<any>, enumName: string): boolean;
					public static processBitVector(enumClass: java.lang.Class<any>, value: number): java.util.EnumSet<any>;
					public static getEnumMap(enumClass: java.lang.Class<any>, keyFunction: any /* any*/): java.util.Map<any,any>;
					public static getFirstEnumIgnoreCase(enumClass: java.lang.Class<any>, enumName: string, stringFunction: any /* any*/, defaultEnum: java.lang.Enum<any>): java.lang.Enum<any>;
					public static generateBitVectors(enumClass: java.lang.Class<any>, values: java.lang.Iterable<any>): number[];
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class Functions extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.Functions>;
					public static asFunction(_function_: org.apache.commons.lang3.Functions.FailableFunction<any,any,any>): any /* any*/;
					public static rethrow(throwable: java.lang.Throwable): java.lang.RuntimeException;
					public static asConsumer(consumer: org.apache.commons.lang3.Functions.FailableConsumer<any,any>): any /* any*/;
					public static get(supplier: org.apache.commons.lang3.Functions.FailableSupplier<any,any>): any;
					public static asBiFunction(_function_: org.apache.commons.lang3.Functions.FailableBiFunction<any,any,any,any>): any /* any*/;
					public static asRunnable(runnable: org.apache.commons.lang3.Functions.FailableRunnable<any>): java.lang.Runnable;
					public static tryWithResources(action: org.apache.commons.lang3.Functions.FailableRunnable<any>, ...resources: org.apache.commons.lang3.Functions.FailableRunnable<any>[]): void;
					public static asSupplier(supplier: org.apache.commons.lang3.Functions.FailableSupplier<any,any>): any /* any*/;
					public static stream(stream: java.util.stream.Stream): org.apache.commons.lang3.Streams.FailableStream<any>;
					public static asBiPredicate(predicate: org.apache.commons.lang3.Functions.FailableBiPredicate<any,any,any>): any /* any*/;
					public static call(callable: org.apache.commons.lang3.Functions.FailableCallable<any,any>): any;
					public static accept(consumer: org.apache.commons.lang3.Functions.FailableConsumer<any,any>, object: any): void;
					public static asPredicate(predicate: org.apache.commons.lang3.Functions.FailablePredicate<any,any>): any /* any*/;
					public static asCallable(callable: org.apache.commons.lang3.Functions.FailableCallable<any,any>): java.util.concurrent.Callable<any>;
					public static accept(consumer: org.apache.commons.lang3.Functions.FailableBiConsumer<any,any,any>, object1: any, object2: any): void;
					public static asBiConsumer(consumer: org.apache.commons.lang3.Functions.FailableBiConsumer<any,any,any>): any /* any*/;
					public static stream(collection: java.util.Collection<any>): org.apache.commons.lang3.Streams.FailableStream<any>;
					public constructor();
					public static tryWithResources(action: org.apache.commons.lang3.Functions.FailableRunnable<any>, errorHandler: org.apache.commons.lang3.Functions.FailableConsumer<java.lang.Throwable,any>, ...resources: org.apache.commons.lang3.Functions.FailableRunnable<any>[]): void;
					public static run(runnable: org.apache.commons.lang3.Functions.FailableRunnable<any>): void;
					public static apply(_function_: org.apache.commons.lang3.Functions.FailableFunction<any,any,any>, input: any): any;
					public static test(predicate: org.apache.commons.lang3.Functions.FailablePredicate<any,any>, object: any): boolean;
					public static apply(_function_: org.apache.commons.lang3.Functions.FailableBiFunction<any,any,any,any>, input1: any, input2: any): any;
					public static test(predicate: org.apache.commons.lang3.Functions.FailableBiPredicate<any,any,any>, object1: any, object2: any): boolean;
				}
				export module Functions {
					export class FailableBiConsumer<O1, O2, T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.Functions.FailableBiConsumer<any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.Functions$FailableBiConsumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							accept(param0: O1, param1: O2): void;
						});
						public constructor();
						public accept(param0: O1, param1: O2): void;
					}
					export class FailableBiFunction<O1, O2, R, T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.Functions.FailableBiFunction<any,any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.Functions$FailableBiFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							apply(param0: O1, param1: O2): R;
						});
						public constructor();
						public apply(param0: O1, param1: O2): R;
					}
					export class FailableBiPredicate<O1, O2, T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.Functions.FailableBiPredicate<any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.Functions$FailableBiPredicate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							test(param0: O1, param1: O2): boolean;
						});
						public constructor();
						public test(param0: O1, param1: O2): boolean;
					}
					export class FailableCallable<R, T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.Functions.FailableCallable<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.Functions$FailableCallable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							call(): R;
						});
						public constructor();
						public call(): R;
					}
					export class FailableConsumer<O, T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.Functions.FailableConsumer<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.Functions$FailableConsumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							accept(param0: O): void;
						});
						public constructor();
						public accept(param0: O): void;
					}
					export class FailableFunction<I, R, T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.Functions.FailableFunction<any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.Functions$FailableFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							apply(param0: I): R;
						});
						public constructor();
						public apply(param0: I): R;
					}
					export class FailablePredicate<I, T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.Functions.FailablePredicate<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.Functions$FailablePredicate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							test(param0: I): boolean;
						});
						public constructor();
						public test(param0: I): boolean;
					}
					export class FailableRunnable<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.Functions.FailableRunnable<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.Functions$FailableRunnable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							run(): void;
						});
						public constructor();
						public run(): void;
					}
					export class FailableSupplier<R, T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.Functions.FailableSupplier<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.Functions$FailableSupplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(): R;
						});
						public constructor();
						public get(): R;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class IntegerRange extends org.apache.commons.lang3.NumberRange<java.lang.Integer> {
					public static class: java.lang.Class<org.apache.commons.lang3.IntegerRange>;
					public static of(fromInclusive: java.lang.Integer, toInclusive: java.lang.Integer): org.apache.commons.lang3.IntegerRange;
					public static of(fromInclusive: number, toInclusive: number): org.apache.commons.lang3.IntegerRange;
					public static of(fromInclusive: java.lang.Comparable<any>, toInclusive: java.lang.Comparable<any>): org.apache.commons.lang3.Range<any>;
					public static of(fromInclusive: any, toInclusive: any, comparator: java.util.Comparator<any>): org.apache.commons.lang3.Range<any>;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class JavaVersion {
					public static class: java.lang.Class<org.apache.commons.lang3.JavaVersion>;
					public static JAVA_0_9: org.apache.commons.lang3.JavaVersion;
					public static JAVA_1_1: org.apache.commons.lang3.JavaVersion;
					public static JAVA_1_2: org.apache.commons.lang3.JavaVersion;
					public static JAVA_1_3: org.apache.commons.lang3.JavaVersion;
					public static JAVA_1_4: org.apache.commons.lang3.JavaVersion;
					public static JAVA_1_5: org.apache.commons.lang3.JavaVersion;
					public static JAVA_1_6: org.apache.commons.lang3.JavaVersion;
					public static JAVA_1_7: org.apache.commons.lang3.JavaVersion;
					public static JAVA_1_8: org.apache.commons.lang3.JavaVersion;
					public static JAVA_1_9: org.apache.commons.lang3.JavaVersion;
					public static JAVA_9: org.apache.commons.lang3.JavaVersion;
					public static JAVA_10: org.apache.commons.lang3.JavaVersion;
					public static JAVA_11: org.apache.commons.lang3.JavaVersion;
					public static JAVA_12: org.apache.commons.lang3.JavaVersion;
					public static JAVA_13: org.apache.commons.lang3.JavaVersion;
					public static JAVA_14: org.apache.commons.lang3.JavaVersion;
					public static JAVA_15: org.apache.commons.lang3.JavaVersion;
					public static JAVA_16: org.apache.commons.lang3.JavaVersion;
					public static JAVA_17: org.apache.commons.lang3.JavaVersion;
					public static JAVA_18: org.apache.commons.lang3.JavaVersion;
					public static JAVA_19: org.apache.commons.lang3.JavaVersion;
					public static JAVA_20: org.apache.commons.lang3.JavaVersion;
					public static JAVA_21: org.apache.commons.lang3.JavaVersion;
					public static JAVA_RECENT: org.apache.commons.lang3.JavaVersion;
					public static valueOf(name: string): org.apache.commons.lang3.JavaVersion;
					public toString(): string;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public atLeast(requiredVersion: org.apache.commons.lang3.JavaVersion): boolean;
					public static values(): org.apache.commons.lang3.JavaVersion[];
					public atMost(requiredVersion: org.apache.commons.lang3.JavaVersion): boolean;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class LocaleUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.LocaleUtils>;
					public static countriesByLanguage(languageCode: string): java.util.List<java.util.Locale>;
					public static languagesByCountry(countryCode: string): java.util.List<java.util.Locale>;
					public static availableLocaleList(): java.util.List<java.util.Locale>;
					public static localeLookupList(locale: java.util.Locale, defaultLocale: java.util.Locale): java.util.List<java.util.Locale>;
					public static isAvailableLocale(locale: java.util.Locale): boolean;
					public static toLocale(locale: java.util.Locale): java.util.Locale;
					public static toLocale(str: string): java.util.Locale;
					public constructor();
					public static availableLocaleSet(): java.util.Set<java.util.Locale>;
					public static localeLookupList(locale: java.util.Locale): java.util.List<java.util.Locale>;
				}
				export module LocaleUtils {
					export class SyncAvoid extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.LocaleUtils.SyncAvoid>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class LongRange extends org.apache.commons.lang3.NumberRange<java.lang.Long> {
					public static class: java.lang.Class<org.apache.commons.lang3.LongRange>;
					public static of(fromInclusive: number, param1: number): org.apache.commons.lang3.LongRange;
					public static of(fromInclusive: java.lang.Comparable<any>, toInclusive: java.lang.Comparable<any>): org.apache.commons.lang3.Range<any>;
					public static of(fromInclusive: any, toInclusive: any, comparator: java.util.Comparator<any>): org.apache.commons.lang3.Range<any>;
					public static of(fromInclusive: java.lang.Long, toInclusive: java.lang.Long): org.apache.commons.lang3.LongRange;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class NotImplementedException extends java.lang.UnsupportedOperationException {
					public static class: java.lang.Class<org.apache.commons.lang3.NotImplementedException>;
					public constructor(message: string);
					public constructor(cause: java.lang.Throwable, code: string);
					public constructor(message: string, cause: java.lang.Throwable, code: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public getCode(): string;
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, code: string);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class NumberRange<N>  extends org.apache.commons.lang3.Range<any> {
					public static class: java.lang.Class<org.apache.commons.lang3.NumberRange<any>>;
					public constructor(number1: any, number2: any, comp: java.util.Comparator<any>);
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class ObjectUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.ObjectUtils>;
					public static NULL: org.apache.commons.lang3.ObjectUtils.Null;
					public static compare(c1: java.lang.Comparable<any>, c2: java.lang.Comparable<any>): number;
					public static median(...items: java.lang.Comparable<any>[]): java.lang.Comparable<any>;
					public static isEmpty(object: any): boolean;
					public static isArray(object: any): boolean;
					public static identityToString(builder: java.lang.StringBuilder, object: any): void;
					public static allNotNull(...values: any[]): boolean;
					public static max(...values: java.lang.Comparable<any>[]): java.lang.Comparable<any>;
					public static CONST(v: string): string;
					public static identityToString(appendable: java.lang.Appendable, object: any): void;
					/** @deprecated */
					public static toString(obj: any, nullStr: string): string;
					public static min(...values: java.lang.Comparable<any>[]): java.lang.Comparable<any>;
					public clone(): any;
					public static CONST(v: any): any;
					/** @deprecated */
					public static equals(object1: any, object2: any): boolean;
					public constructor();
					/** @deprecated */
					public static hashCode(obj: any): number;
					public static identityToString(object: any): string;
					public static cloneIfPossible(obj: any): any;
					public static getFirstNonNull(...suppliers: any /* any[]*/): any;
					public static median(comparator: java.util.Comparator<any>, ...items: any[]): any;
					public wait(param0: number, param1: number): void;
					public static compare(c1: java.lang.Comparable<any>, c2: java.lang.Comparable<any>, nullGreater: boolean): number;
					public static requireNonEmpty(obj: any, message: string): any;
					public static anyNotNull(...values: any[]): boolean;
					public static allNull(...values: any[]): boolean;
					public wait(): void;
					public static CONST(v: number): number;
					public static anyNull(...values: any[]): boolean;
					public static CONST_SHORT(v: number): number;
					public equals(obj: any): boolean;
					public static notEqual(object1: any, object2: any): boolean;
					public static hashCodeHex(object: any): string;
					public static identityHashCodeHex(object: any): string;
					public static defaultIfNull(object: any, defaultValue: any): any;
					public toString(): string;
					public static getClass(object: any): java.lang.Class<any>;
					/** @deprecated */
					public static hashCodeMulti(...objects: any[]): number;
					public wait(millis: number): void;
					public hashCode(): number;
					public static toString(obj: any, supplier: any /* any*/): string;
					public getClass(): java.lang.Class<any>;
					public static getIfNull(object: any, defaultSupplier: any /* any*/): any;
					public static requireNonEmpty(obj: any): any;
					public static firstNonNull(...values: any[]): any;
					public static clone(obj: any): any;
					public static wait(obj: any, duration: java.time.Duration): void;
					public static CONST_BYTE(v: number): number;
					public static mode(...items: any[]): any;
					/** @deprecated */
					public static toString(obj: any): string;
					public static isNotEmpty(object: any): boolean;
					public static identityToString(buffer: java.lang.StringBuffer, object: any): void;
					public static CONST(v: boolean): boolean;
					/** @deprecated */
					public static identityToString(builder: org.apache.commons.lang3.text.StrBuilder, object: any): void;
				}
				export module ObjectUtils {
					export class Null extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.lang3.ObjectUtils.Null>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class RandomStringUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.RandomStringUtils>;
					public static randomGraph(count: number): string;
					public static randomAlphanumeric(count: number): string;
					public static randomAlphabetic(count: number): string;
					public static randomNumeric(minLengthInclusive: number, maxLengthExclusive: number): string;
					public static random(count: number, start: number, end: number, letters: boolean, numbers: boolean, ...chars: string[]): string;
					public static randomGraph(minLengthInclusive: number, maxLengthExclusive: number): string;
					public static random(count: number, ...chars: string[]): string;
					public static random(count: number, start: number, end: number, letters: boolean, numbers: boolean): string;
					public static randomPrint(minLengthInclusive: number, maxLengthExclusive: number): string;
					public static random(count: number, chars: string): string;
					public static random(count: number, start: number, end: number, letters: boolean, numbers: boolean, chars: string[], random: java.util.Random): string;
					public static randomAscii(count: number): string;
					public static randomAlphabetic(minLengthInclusive: number, maxLengthExclusive: number): string;
					public static randomAscii(minLengthInclusive: number, maxLengthExclusive: number): string;
					public static randomNumeric(count: number): string;
					public static random(count: number, letters: boolean, numbers: boolean): string;
					public constructor();
					public static random(count: number): string;
					public static randomPrint(count: number): string;
					public static randomAlphanumeric(minLengthInclusive: number, maxLengthExclusive: number): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class RandomUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.RandomUtils>;
					public static nextBoolean(): boolean;
					public static nextDouble(startInclusive: number, param1: number): number;
					public static nextDouble(): number;
					public static nextLong(): number;
					public constructor();
					public static nextBytes(count: number): number[];
					public static nextFloat(): number;
					public static nextInt(): number;
					public static nextLong(startInclusive: number, param1: number): number;
					public static nextFloat(startInclusive: number, endExclusive: number): number;
					public static nextInt(startInclusive: number, endExclusive: number): number;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class Range<T>  extends java.io.Serializable {
					public static class: java.lang.Class<org.apache.commons.lang3.Range<any>>;
					public equals(obj: any): boolean;
					public toString(format: string): string;
					/** @deprecated */
					public static between(fromInclusive: java.lang.Comparable<any>, toInclusive: java.lang.Comparable<any>): org.apache.commons.lang3.Range<any>;
					public intersectionWith(other: org.apache.commons.lang3.Range<any>): org.apache.commons.lang3.Range<any>;
					public isAfterRange(otherRange: org.apache.commons.lang3.Range<any>): boolean;
					public isOverlappedBy(otherRange: org.apache.commons.lang3.Range<any>): boolean;
					public isNaturalOrdering(): boolean;
					public static of(fromInclusive: java.lang.Comparable<any>, toInclusive: java.lang.Comparable<any>): org.apache.commons.lang3.Range<any>;
					public getMaximum(): any;
					public toString(): string;
					public fit(element: any): any;
					public isBeforeRange(otherRange: org.apache.commons.lang3.Range<any>): boolean;
					public elementCompareTo(element: any): number;
					public contains(element: any): boolean;
					public hashCode(): number;
					public containsRange(otherRange: org.apache.commons.lang3.Range<any>): boolean;
					public isEndedBy(element: any): boolean;
					public getComparator(): java.util.Comparator<any>;
					public isStartedBy(element: any): boolean;
					public isBefore(element: any): boolean;
					public static of(fromInclusive: any, toInclusive: any, comparator: java.util.Comparator<any>): org.apache.commons.lang3.Range<any>;
					public getMinimum(): any;
					/** @deprecated */
					public static between(fromInclusive: any, toInclusive: any, comparator: java.util.Comparator<any>): org.apache.commons.lang3.Range<any>;
					public static is(element: any, comparator: java.util.Comparator<any>): org.apache.commons.lang3.Range<any>;
					public isAfter(element: any): boolean;
					public static is(element: java.lang.Comparable<any>): org.apache.commons.lang3.Range<any>;
				}
				export module Range {
					export class ComparableComparator extends java.util.Comparator<any> {
						public static class: java.lang.Class<org.apache.commons.lang3.Range.ComparableComparator>;
						public static INSTANCE: org.apache.commons.lang3.Range.ComparableComparator;
						public equals(other: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public equals(param0: any): boolean;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public reversed(): java.util.Comparator<any>;
						public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static valueOf(name: string): org.apache.commons.lang3.Range.ComparableComparator;
						public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static values(): org.apache.commons.lang3.Range.ComparableComparator[];
						public static naturalOrder(): java.util.Comparator<any>;
						public compare(param0: any, param1: any): number;
						public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
						public compare(obj1: any, obj2: any): number;
						public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class RegExUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.RegExUtils>;
					public static removeFirst(text: string, regex: java.util.regex.Pattern): string;
					public static replaceAll(text: string, regex: string, replacement: string): string;
					public static replaceFirst(text: string, regex: java.util.regex.Pattern, replacement: string): string;
					public static removePattern(text: string, regex: string): string;
					public static replacePattern(text: string, regex: string, replacement: string): string;
					public static dotAll(regex: string): java.util.regex.Pattern;
					public static removeAll(text: string, regex: string): string;
					public constructor();
					public static dotAllMatcher(regex: string, text: string): java.util.regex.Matcher;
					public static replaceAll(text: string, regex: java.util.regex.Pattern, replacement: string): string;
					public static removeAll(text: string, regex: java.util.regex.Pattern): string;
					public static removeFirst(text: string, regex: string): string;
					public static replaceFirst(text: string, regex: string, replacement: string): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class SerializationException extends java.lang.RuntimeException {
					public static class: java.lang.Class<org.apache.commons.lang3.SerializationException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(msg: string);
					public constructor(message: string, cause: java.lang.Throwable);
					public constructor(msg: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class SerializationUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.SerializationUtils>;
					public clone(): any;
					public static serialize(obj: java.io.Serializable, outputStream: java.io.OutputStream): void;
					public constructor();
					public static serialize(obj: java.io.Serializable): number[];
					public static roundtrip(obj: java.io.Serializable): java.io.Serializable;
					public static deserialize(objectData: number[]): any;
					public static deserialize(inputStream: java.io.InputStream): any;
					public static clone(object: java.io.Serializable): java.io.Serializable;
				}
				export module SerializationUtils {
					export class ClassLoaderAwareObjectInputStream extends java.io.ObjectInputStream {
						public static class: java.lang.Class<org.apache.commons.lang3.SerializationUtils.ClassLoaderAwareObjectInputStream>;
						public resolveClass(desc: java.io.ObjectStreamClass): java.lang.Class<any>;
						public read(): number;
						public skip(param0: number): number;
						public read(buf: number[], off: number, len: number): number;
						public close(): void;
						public read(param0: number[], param1: number, param2: number): number;
						public read(b: number[]): number;
						public readObject(): any;
						public read(param0: number[]): number;
						public skip(n: number): number;
						public available(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class Streams extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.Streams>;
					public static toArray(pElementType: java.lang.Class<any>): java.util.stream.Collector;
					public constructor();
					public static stream(stream: java.util.stream.Stream): org.apache.commons.lang3.Streams.FailableStream<any>;
					public static stream(stream: java.util.Collection<any>): org.apache.commons.lang3.Streams.FailableStream<any>;
				}
				export module Streams {
					export class ArrayCollector<O>  extends java.util.stream.Collector<any,java.util.List<any>,any[]> {
						public static class: java.lang.Class<org.apache.commons.lang3.Streams.ArrayCollector<any>>;
						public accumulator(): any /* any,any>*/;
						public static of(supplier: any /* any*/, accumulator: any /* any*/, combiner: any /* any*/, ...characteristics: java.util.stream.Collector.Characteristics[]): java.util.stream.Collector;
						public combiner(): any /* any*/;
						public finisher(): any /* any,any[]>*/;
						public constructor(elementType: java.lang.Class<any>);
						public combiner(): any /* any*/;
						public accumulator(): any /* any<any,any>*/;
						public supplier(): any /* any*/;
						public characteristics(): java.util.Set<java.util.stream.Collector.Characteristics>;
						public finisher(): any /* any<any,any>*/;
						public static of(supplier: any /* any*/, accumulator: any /* any*/, combiner: any /* any*/, finisher: any /* any*/, ...characteristics: java.util.stream.Collector.Characteristics[]): java.util.stream.Collector;
						public supplier(): any /* any*/;
					}
					export class FailableStream<O>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.Streams.FailableStream<any>>;
						public collect(supplier: any /* any*/, accumulator: any /* any*/, combiner: any /* any*/): any;
						public forEach(action: org.apache.commons.lang3.Functions.FailableConsumer<O,any>): void;
						public map(mapper: org.apache.commons.lang3.Functions.FailableFunction<any,any,any>): org.apache.commons.lang3.Streams.FailableStream<any>;
						public reduce(identity: O, accumulator: any /* any*/): O;
						public allMatch(predicate: org.apache.commons.lang3.Functions.FailablePredicate<O,any>): boolean;
						public filter(predicate: org.apache.commons.lang3.Functions.FailablePredicate<O,any>): org.apache.commons.lang3.Streams.FailableStream<O>;
						public collect(collector: java.util.stream.Collector): any;
						public stream(): java.util.stream.Stream<O>;
						public constructor(stream: java.util.stream.Stream<O>);
						public makeTerminated(): void;
						public anyMatch(predicate: org.apache.commons.lang3.Functions.FailablePredicate<O,any>): boolean;
						public assertNotTerminated(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class StringEscapeUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.StringEscapeUtils>;
					public static ESCAPE_JAVA: org.apache.commons.lang3.text.translate.CharSequenceTranslator;
					public static ESCAPE_ECMASCRIPT: org.apache.commons.lang3.text.translate.CharSequenceTranslator;
					public static ESCAPE_JSON: org.apache.commons.lang3.text.translate.CharSequenceTranslator;
					public static ESCAPE_XML: org.apache.commons.lang3.text.translate.CharSequenceTranslator;
					public static ESCAPE_XML10: org.apache.commons.lang3.text.translate.CharSequenceTranslator;
					public static ESCAPE_XML11: org.apache.commons.lang3.text.translate.CharSequenceTranslator;
					public static ESCAPE_HTML3: org.apache.commons.lang3.text.translate.CharSequenceTranslator;
					public static ESCAPE_HTML4: org.apache.commons.lang3.text.translate.CharSequenceTranslator;
					public static ESCAPE_CSV: org.apache.commons.lang3.text.translate.CharSequenceTranslator;
					public static UNESCAPE_JAVA: org.apache.commons.lang3.text.translate.CharSequenceTranslator;
					public static UNESCAPE_ECMASCRIPT: org.apache.commons.lang3.text.translate.CharSequenceTranslator;
					public static UNESCAPE_JSON: org.apache.commons.lang3.text.translate.CharSequenceTranslator;
					public static UNESCAPE_HTML3: org.apache.commons.lang3.text.translate.CharSequenceTranslator;
					public static UNESCAPE_HTML4: org.apache.commons.lang3.text.translate.CharSequenceTranslator;
					public static UNESCAPE_XML: org.apache.commons.lang3.text.translate.CharSequenceTranslator;
					public static UNESCAPE_CSV: org.apache.commons.lang3.text.translate.CharSequenceTranslator;
					public static unescapeXml(input: string): string;
					public static unescapeJson(input: string): string;
					public static escapeXml11(input: string): string;
					public static escapeEcmaScript(input: string): string;
					/** @deprecated */
					public static escapeXml(input: string): string;
					public static escapeHtml4(input: string): string;
					public static escapeXml10(input: string): string;
					public static unescapeHtml3(input: string): string;
					public static escapeCsv(input: string): string;
					public constructor();
					public static escapeHtml3(input: string): string;
					public static escapeJava(input: string): string;
					public static escapeJson(input: string): string;
					public static unescapeHtml4(input: string): string;
					public static unescapeJava(input: string): string;
					public static unescapeCsv(input: string): string;
					public static unescapeEcmaScript(input: string): string;
				}
				export module StringEscapeUtils {
					export class CsvEscaper extends org.apache.commons.lang3.text.translate.CharSequenceTranslator {
						public static class: java.lang.Class<org.apache.commons.lang3.StringEscapeUtils.CsvEscaper>;
						public translate(input: string, index: number, out: java.io.Writer): number;
						public translate(input: string): string;
						public translate(param0: string, param1: number, param2: java.io.Writer): number;
						public translate(input: string, writer: java.io.Writer): void;
					}
					export class CsvUnescaper extends org.apache.commons.lang3.text.translate.CharSequenceTranslator {
						public static class: java.lang.Class<org.apache.commons.lang3.StringEscapeUtils.CsvUnescaper>;
						public translate(input: string, index: number, out: java.io.Writer): number;
						public translate(input: string): string;
						public translate(param0: string, param1: number, param2: java.io.Writer): number;
						public translate(input: string, writer: java.io.Writer): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class StringUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.StringUtils>;
					public static SPACE: string;
					public static EMPTY: string;
					public static LF: string;
					public static CR: string;
					public static INDEX_NOT_FOUND: number;
					public static stripStart(str: string, stripChars: string): string;
					public static containsNone(cs: string, invalidChars: string): boolean;
					public static splitByCharacterTypeCamelCase(str: string): string[];
					public static containsNone(cs: string, ...searchChars: string[]): boolean;
					public static strip(str: string): string;
					public static prependIfMissing(str: string, prefix: string, ...prefixes: string[]): string;
					public static replaceOnceIgnoreCase(text: string, searchString: string, replacement: string): string;
					public static defaultIfEmpty(str: string, defaultStr: string): string;
					public static toCodePoints(cs: string): number[];
					public static removeStart(str: string, remove: string): string;
					public constructor();
					public static leftPad(str: string, size: number, padChar: string): string;
					public static getIfBlank(str: string, defaultSupplier: any /* any*/): string;
					public static join(array: any[], delimiter: string, startIndex: number, endIndex: number): string;
					public static appendIfMissingIgnoreCase(str: string, suffix: string, ...suffixes: string[]): string;
					public static repeat(str: string, separator: string, repeat: number): string;
					public static stripAll(...strs: string[]): string[];
					public static chop(str: string): string;
					public static lastIndexOf(seq: string, searchSeq: string): number;
					public static join(array: boolean[], delimiter: string): string;
					public static replace(text: string, searchString: string, replacement: string, max: number): string;
					public static getIfEmpty(str: string, defaultSupplier: any /* any*/): string;
					public static rotate(str: string, shift: number): string;
					public static compareIgnoreCase(str1: string, str2: string, nullIsLess: boolean): number;
					public static join(array: boolean[], delimiter: string, startIndex: number, endIndex: number): string;
					public static replaceEach(text: string, searchList: string[], replacementList: string[]): string;
					public static defaultIfBlank(str: string, defaultStr: string): string;
					public static join(array: number[], delimiter: string, startIndex: number, endIndex: number): string;
					public static mid(str: string, pos: number, len: number): string;
					public static isNumericSpace(cs: string): boolean;
					public static normalizeSpace(str: string): string;
					public static join(array: string[], delimiter: string, startIndex: number, endIndex: number): string;
					public static lastIndexOf(seq: string, searchChar: number): number;
					public static getDigits(str: string): string;
					public static substringBetween(str: string, open: string, close: string): string;
					public static lastIndexOfIgnoreCase(str: string, searchStr: string, startPos: number): number;
					/** @deprecated */
					public static removeAll(text: string, regex: string): string;
					public static repeat(ch: string, repeat: number): string;
					public static splitByWholeSeparator(str: string, separator: string): string[];
					public static join(array: number[], delimiter: string): string;
					public static containsAny(cs: string, searchChars: string): boolean;
					public static lowerCase(str: string, locale: java.util.Locale): string;
					public static remove(str: string, remove: string): string;
					public static join(array: number[], separator: string): string;
					public static firstNonEmpty(...values: string[]): string;
					public static splitByWholeSeparatorPreserveAllTokens(str: string, separator: string, max: number): string[];
					public static containsAny(cs: string, ...searchChars: string[]): boolean;
					public static appendIfMissing(str: string, suffix: string, ...suffixes: string[]): string;
					public static trim(str: string): string;
					public static isEmpty(cs: string): boolean;
					public static swapCase(str: string): string;
					public static stripToNull(str: string): string;
					public static stripToEmpty(str: string): string;
					public static upperCase(str: string): string;
					public static truncate(str: string, maxWidth: number): string;
					/** @deprecated */
					public static toString(bytes: number[], charsetName: string): string;
					public static stripAll(strs: string[], stripChars: string): string[];
					public static abbreviateMiddle(str: string, middle: string, length: number): string;
					public static equalsAny(string: string, ...searchStrings: string[]): boolean;
					public static replace(text: string, searchString: string, replacement: string): string;
					public static startsWithAny(sequence: string, ...searchStrings: string[]): boolean;
					public static center(str: string, size: number): string;
					public static indexOfAnyBut(seq: string, searchChars: string): number;
					public static indexOfDifference(cs1: string, cs2: string): number;
					public static lastIndexOfAny(str: string, ...searchStrs: string[]): number;
					public static indexOfAnyBut(cs: string, ...searchChars: string[]): number;
					/** @deprecated */
					public static defaultString(str: string, nullDefault: string): string;
					public static indexOf(seq: string, searchChar: number): number;
					public static isMixedCase(cs: string): boolean;
					public static isNoneBlank(...css: string[]): boolean;
					public static lastIndexOf(seq: string, searchSeq: string, startPos: number): number;
					public static toRootUpperCase(source: string): string;
					public static indexOfAny(cs: string, searchChars: string): number;
					public static isAlphanumeric(cs: string): boolean;
					public static difference(str1: string, str2: string): string;
					public static endsWithAny(sequence: string, ...searchStrings: string[]): boolean;
					public static startsWithIgnoreCase(str: string, prefix: string): boolean;
					public equals(obj: any): boolean;
					public static join(...elements: any[]): string;
					public static capitalize(str: string): string;
					public static lowerCase(str: string): string;
					public static getBytes(string: string, charset: string): number[];
					public static center(str: string, size: number, padStr: string): string;
					public static trimToNull(str: string): string;
					public static unwrap(str: string, wrapChar: string): string;
					public static substring(str: string, start: number): string;
					public static right(str: string, len: number): string;
					public static firstNonBlank(...values: string[]): string;
					public static lastIndexOfIgnoreCase(str: string, searchStr: string): number;
					public static rightPad(str: string, size: number, padStr: string): string;
					public static removeEndIgnoreCase(str: string, remove: string): string;
					public static substringAfter(str: string, separator: number): string;
					public static indexOfAny(str: string, ...searchStrs: string[]): number;
					public static replaceOnce(text: string, searchString: string, replacement: string): string;
					public static splitPreserveAllTokens(str: string, separatorChars: string): string[];
					public static lastOrdinalIndexOf(str: string, searchStr: string, ordinal: number): number;
					public static substringsBetween(str: string, open: string, close: string): string[];
					public static isNotEmpty(cs: string): boolean;
					public static splitByWholeSeparatorPreserveAllTokens(str: string, separator: string): string[];
					/** @deprecated */
					public static getLevenshteinDistance(s: string, t: string, threshold: number): number;
					public static chomp(str: string): string;
					public static replaceChars(str: string, searchChar: string, replaceChar: string): string;
					public static containsAnyIgnoreCase(cs: string, ...searchCharSequences: string[]): boolean;
					public static isWhitespace(cs: string): boolean;
					public static repeat(str: string, repeat: number): string;
					public static isAsciiPrintable(cs: string): boolean;
					public static overlay(str: string, overlay: string, start: number, end: number): string;
					public static containsAny(cs: string, ...searchCharSequences: string[]): boolean;
					/** @deprecated */
					public static replacePattern(source: string, regex: string, replacement: string): string;
					public static join(iterator: java.util.Iterator<any>, separator: string): string;
					public static countMatches(str: string, sub: string): number;
					public static split(str: string, separatorChars: string): string[];
					public static replaceEachRepeatedly(text: string, searchList: string[], replacementList: string[]): string;
					public static compare(str1: string, str2: string): number;
					public static substringBeforeLast(str: string, separator: string): string;
					public static replaceIgnoreCase(text: string, searchString: string, replacement: string, max: number): string;
					public static toRootLowerCase(source: string): string;
					public static contains(seq: string, searchChar: number): boolean;
					public static wrap(str: string, wrapWith: string): string;
					public static split(str: string): string[];
					public static length(cs: string): number;
					public static valueOf(value: string[]): string;
					public static equals(cs1: string, cs2: string): boolean;
					public static containsOnly(cs: string, ...valid: string[]): boolean;
					public static left(str: string, len: number): string;
					public static substringAfterLast(str: string, separator: string): string;
					public static upperCase(str: string, locale: java.util.Locale): string;
					public static isAllUpperCase(cs: string): boolean;
					public static trimToEmpty(str: string): string;
					public static contains(seq: string, searchSeq: string): boolean;
					public static defaultString(str: string): string;
					public static isAllEmpty(...css: string[]): boolean;
					public static equalsIgnoreCase(cs1: string, cs2: string): boolean;
					public static join(list: java.util.List<any>, separator: string, startIndex: number, endIndex: number): string;
					public static rightPad(str: string, size: number, padChar: string): string;
					public static endsWith(str: string, suffix: string): boolean;
					public static isAlpha(cs: string): boolean;
					public static unwrap(str: string, wrapToken: string): string;
					public static indexOfIgnoreCase(str: string, searchStr: string, startPos: number): number;
					/** @deprecated */
					public static replaceFirst(text: string, regex: string, replacement: string): string;
					public static substringBefore(str: string, separator: string): string;
					public static isNotBlank(cs: string): boolean;
					public static join(array: string[], delimiter: string): string;
					public static isNumeric(cs: string): boolean;
					public static isAlphanumericSpace(cs: string): boolean;
					public static isAnyBlank(...css: string[]): boolean;
					public static isNoneEmpty(...css: string[]): boolean;
					public static abbreviate(str: string, offset: number, maxWidth: number): string;
					public static split(str: string, separatorChars: string, max: number): string[];
					public static getBytes(string: string, charset: java.nio.charset.Charset): number[];
					public static substringBefore(str: string, separator: number): string;
					public static containsIgnoreCase(str: string, searchStr: string): boolean;
					public static removeEnd(str: string, remove: string): string;
					public static splitPreserveAllTokens(str: string): string[];
					/** @deprecated */
					public static removePattern(source: string, regex: string): string;
					public static substringAfterLast(str: string, separator: number): string;
					public static countMatches(str: string, ch: string): number;
					public static abbreviate(str: string, maxWidth: number): string;
					public static indexOfIgnoreCase(str: string, searchStr: string): number;
					public static deleteWhitespace(str: string): string;
					public static removeIgnoreCase(str: string, remove: string): string;
					public static stripAccents(input: string): string;
					public static indexOf(seq: string, searchSeq: string, startPos: number): number;
					public static isAnyEmpty(...css: string[]): boolean;
					public static indexOf(seq: string, searchChar: number, startPos: number): number;
					public static containsOnly(cs: string, validChars: string): boolean;
					public static lastIndexOf(seq: string, searchChar: number, startPos: number): number;
					public static splitByWholeSeparator(str: string, separator: string, max: number): string[];
					public static substringAfter(str: string, separator: string): string;
					public static containsWhitespace(seq: string): boolean;
					public static isAlphaSpace(cs: string): boolean;
					public static replaceIgnoreCase(text: string, searchString: string, replacement: string): string;
					public static leftPad(str: string, size: number, padStr: string): string;
					public static startsWith(str: string, prefix: string): boolean;
					public static reverse(str: string): string;
					public static splitPreserveAllTokens(str: string, separatorChars: string, max: number): string[];
					public static isBlank(cs: string): boolean;
					public static reverseDelimited(str: string, separatorChar: string): string;
					public static uncapitalize(str: string): string;
					/** @deprecated */
					public static chomp(str: string, separator: string): string;
					public static substring(str: string, start: number, end: number): string;
					public static splitPreserveAllTokens(str: string, separatorChar: string): string[];
					public static abbreviate(str: string, abbrevMarker: string, maxWidth: number): string;
					/** @deprecated */
					public static getLevenshteinDistance(s: string, t: string): number;
					public static center(str: string, size: number, padChar: string): string;
					public static indexOfAny(cs: string, ...searchChars: string[]): number;
					/** @deprecated */
					public static getJaroWinklerDistance(first: string, second: string): number;
					public static ordinalIndexOf(str: string, searchStr: string, ordinal: number): number;
					public static split(str: string, separatorChar: string): string[];
					public static isAllLowerCase(cs: string): boolean;
					public static compare(str1: string, str2: string, nullIsLess: boolean): number;
					public static splitByCharacterType(str: string): string[];
					public static wrapIfMissing(str: string, wrapWith: string): string;
					public static indexOfDifference(...css: string[]): number;
					public toString(): string;
					public static join(iterable: java.lang.Iterable<any>, separator: string): string;
					public static replaceChars(str: string, searchChars: string, replaceChars: string): string;
					public static strip(str: string, stripChars: string): string;
					public static stripEnd(str: string, stripChars: string): string;
					public static getCommonPrefix(...strs: string[]): string;
					public static toEncodedString(bytes: number[], charset: java.nio.charset.Charset): string;
					/** @deprecated */
					public static removeFirst(text: string, regex: string): string;
					public static substringBetween(str: string, tag: string): string;
					public static endsWithIgnoreCase(str: string, suffix: string): boolean;
					/** @deprecated */
					public static replaceAll(text: string, regex: string, replacement: string): string;
					public static join(array: any[], delimiter: string): string;
					public static isAllBlank(...css: string[]): boolean;
					/** @deprecated */
					public static getFuzzyDistance(term: string, query: string, locale: java.util.Locale): number;
					public static leftPad(str: string, size: number): string;
					public static indexOf(seq: string, searchSeq: string): number;
					public static joinWith(delimiter: string, ...array: any[]): string;
					public static truncate(str: string, offset: number, maxWidth: number): string;
					public static rightPad(str: string, size: number): string;
					public static prependIfMissingIgnoreCase(str: string, prefix: string, ...prefixes: string[]): string;
					public static compareIgnoreCase(str1: string, str2: string): number;
					public static removeStartIgnoreCase(str: string, remove: string): string;
					public static abbreviate(str: string, abbrevMarker: string, offset: number, maxWidth: number): string;
					public static equalsAnyIgnoreCase(string: string, ...searchStrings: string[]): boolean;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class SystemProperties extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.SystemProperties>;
					public static AWT_TOOLKIT: string;
					public static FILE_ENCODING: string;
					public static FILE_SEPARATOR: string;
					public static JAVA_AWT_FONTS: string;
					public static JAVA_AWT_GRAPHICSENV: string;
					public static JAVA_AWT_HEADLESS: string;
					public static JAVA_AWT_PRINTERJOB: string;
					public static JAVA_CLASS_PATH: string;
					public static JAVA_CLASS_VERSION: string;
					public static JAVA_COMPILER: string;
					public static JAVA_ENDORSED_DIRS: string;
					public static JAVA_EXT_DIRS: string;
					public static JAVA_HOME: string;
					public static JAVA_IO_TMPDIR: string;
					public static JAVA_LIBRARY_PATH: string;
					public static JAVA_LOCALE_PROVIDERS: string;
					public static JAVA_RUNTIME_NAME: string;
					public static JAVA_RUNTIME_VERSION: string;
					public static JAVA_SPECIFICATION_NAME: string;
					public static JAVA_SPECIFICATION_VENDOR: string;
					public static JAVA_SPECIFICATION_VERSION: string;
					public static JAVA_UTIL_PREFS_PREFERENCES_FACTORY: string;
					public static JAVA_VENDOR: string;
					public static JAVA_VENDOR_URL: string;
					public static JAVA_VERSION: string;
					public static JAVA_VM_INFO: string;
					public static JAVA_VM_NAME: string;
					public static JAVA_VM_SPECIFICATION_NAME: string;
					public static JAVA_VM_SPECIFICATION_VENDOR: string;
					public static JAVA_VM_SPECIFICATION_VERSION: string;
					public static JAVA_VM_VENDOR: string;
					public static JAVA_VM_VERSION: string;
					public static LINE_SEPARATOR: string;
					public static OS_ARCH: string;
					public static OS_NAME: string;
					public static OS_VERSION: string;
					public static PATH_SEPARATOR: string;
					public static USER_COUNTRY: string;
					public static USER_DIR: string;
					public static USER_HOME: string;
					public static USER_LANGUAGE: string;
					public static USER_NAME: string;
					public static USER_REGION: string;
					public static USER_TIMEZONE: string;
					public static getJavaAwtFonts(): string;
					public static getOsArch(): string;
					public static getUserHome(): string;
					public static getJavaVendor(): string;
					public static getJavaClassPath(): string;
					public static getUserLanguage(): string;
					public static getJavaExtDirs(): string;
					public static getJavaVendorUrl(): string;
					public static getBoolean(key: string, defaultIfAbsent: any /* any*/): boolean;
					public static getOsName(): string;
					public static getJavaVersion(): string;
					public static getFileEncoding(): string;
					public static getJavaClassVersion(): string;
					public static getJavaVmVersion(): string;
					public static getUserDir(): string;
					public static getUserName(): string;
					public static getJavaVmName(): string;
					public static getPathSeparator(): string;
					public static getUserTimezone(): string;
					public constructor();
					public static getJavaLocaleProviders(): string;
					public static getJavaSpecificationName(): string;
					public static getInt(key: string, defaultIfAbsent: any /* any*/): number;
					public static getJavaHome(): string;
					public static getProperty(property: string): string;
					public static getOsVersion(): string;
					public static getUserCountry(): string;
					public static getJavaVmSpecificationVendor(): string;
					public static getJavaRuntimeName(): string;
					public static getJavaRuntimeVersion(): string;
					public static getJavaAwtGraphicsenv(): string;
					public static getJavaAwtPrinterjob(): string;
					public static getFileSeparator(): string;
					public static getJavaCompiler(): string;
					public static getJavaVmSpecificationVersion(): string;
					public static getJavaAwtHeadless(): string;
					public static getJavaSpecificationVersion(): string;
					public static getAwtToolkit(): string;
					public static getJavaLibraryPath(): string;
					public static getLong(key: string, defaultIfAbsent: any /* any*/): number;
					public static getJavaSpecificationVendor(): string;
					public static getJavaVmSpecificationName(): string;
					public static getJavaUtilPrefsPreferencesFactory(): string;
					public static getJavaEndorsedDirs(): string;
					public static getJavaVmInfo(): string;
					public static getJavaIoTmpdir(): string;
					public static getJavaVmVendor(): string;
					public static getLineSeparator(): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class SystemUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.SystemUtils>;
					public static FILE_ENCODING: string;
					public static FILE_SEPARATOR: string;
					public static JAVA_AWT_FONTS: string;
					public static JAVA_AWT_GRAPHICSENV: string;
					public static JAVA_AWT_HEADLESS: string;
					public static JAVA_AWT_PRINTERJOB: string;
					public static JAVA_CLASS_PATH: string;
					public static JAVA_CLASS_VERSION: string;
					public static JAVA_COMPILER: string;
					public static JAVA_ENDORSED_DIRS: string;
					public static JAVA_EXT_DIRS: string;
					public static JAVA_HOME: string;
					public static JAVA_IO_TMPDIR: string;
					public static JAVA_LIBRARY_PATH: string;
					public static JAVA_RUNTIME_NAME: string;
					public static JAVA_RUNTIME_VERSION: string;
					public static JAVA_SPECIFICATION_NAME: string;
					public static JAVA_SPECIFICATION_VENDOR: string;
					public static JAVA_SPECIFICATION_VERSION: string;
					public static JAVA_UTIL_PREFS_PREFERENCES_FACTORY: string;
					public static JAVA_VENDOR: string;
					public static JAVA_VENDOR_URL: string;
					public static JAVA_VERSION: string;
					public static JAVA_VM_INFO: string;
					public static JAVA_VM_NAME: string;
					public static JAVA_VM_SPECIFICATION_NAME: string;
					public static JAVA_VM_SPECIFICATION_VENDOR: string;
					public static JAVA_VM_SPECIFICATION_VERSION: string;
					public static JAVA_VM_VENDOR: string;
					public static JAVA_VM_VERSION: string;
					public static LINE_SEPARATOR: string;
					public static OS_ARCH: string;
					public static OS_NAME: string;
					public static OS_VERSION: string;
					public static PATH_SEPARATOR: string;
					public static USER_COUNTRY: string;
					public static USER_DIR: string;
					public static USER_HOME: string;
					public static USER_LANGUAGE: string;
					public static USER_NAME: string;
					public static USER_TIMEZONE: string;
					public static IS_JAVA_1_1: boolean;
					public static IS_JAVA_1_2: boolean;
					public static IS_JAVA_1_3: boolean;
					public static IS_JAVA_1_4: boolean;
					public static IS_JAVA_1_5: boolean;
					public static IS_JAVA_1_6: boolean;
					public static IS_JAVA_1_7: boolean;
					public static IS_JAVA_1_8: boolean;
					public static IS_JAVA_1_9: boolean;
					public static IS_JAVA_9: boolean;
					public static IS_JAVA_10: boolean;
					public static IS_JAVA_11: boolean;
					public static IS_JAVA_12: boolean;
					public static IS_JAVA_13: boolean;
					public static IS_JAVA_14: boolean;
					public static IS_JAVA_15: boolean;
					public static IS_JAVA_16: boolean;
					public static IS_JAVA_17: boolean;
					public static IS_JAVA_18: boolean;
					public static IS_JAVA_19: boolean;
					public static IS_JAVA_20: boolean;
					public static IS_JAVA_21: boolean;
					public static IS_OS_AIX: boolean;
					public static IS_OS_HP_UX: boolean;
					public static IS_OS_400: boolean;
					public static IS_OS_IRIX: boolean;
					public static IS_OS_LINUX: boolean;
					public static IS_OS_MAC: boolean;
					public static IS_OS_MAC_OSX: boolean;
					public static IS_OS_MAC_OSX_CHEETAH: boolean;
					public static IS_OS_MAC_OSX_PUMA: boolean;
					public static IS_OS_MAC_OSX_JAGUAR: boolean;
					public static IS_OS_MAC_OSX_PANTHER: boolean;
					public static IS_OS_MAC_OSX_TIGER: boolean;
					public static IS_OS_MAC_OSX_LEOPARD: boolean;
					public static IS_OS_MAC_OSX_SNOW_LEOPARD: boolean;
					public static IS_OS_MAC_OSX_LION: boolean;
					public static IS_OS_MAC_OSX_MOUNTAIN_LION: boolean;
					public static IS_OS_MAC_OSX_MAVERICKS: boolean;
					public static IS_OS_MAC_OSX_YOSEMITE: boolean;
					public static IS_OS_MAC_OSX_EL_CAPITAN: boolean;
					public static IS_OS_MAC_OSX_SIERRA: boolean;
					public static IS_OS_MAC_OSX_HIGH_SIERRA: boolean;
					public static IS_OS_MAC_OSX_MOJAVE: boolean;
					public static IS_OS_MAC_OSX_CATALINA: boolean;
					public static IS_OS_MAC_OSX_BIG_SUR: boolean;
					public static IS_OS_MAC_OSX_MONTEREY: boolean;
					public static IS_OS_MAC_OSX_VENTURA: boolean;
					public static IS_OS_FREE_BSD: boolean;
					public static IS_OS_OPEN_BSD: boolean;
					public static IS_OS_NET_BSD: boolean;
					public static IS_OS_OS2: boolean;
					public static IS_OS_SOLARIS: boolean;
					public static IS_OS_SUN_OS: boolean;
					public static IS_OS_UNIX: boolean;
					public static IS_OS_WINDOWS: boolean;
					public static IS_OS_WINDOWS_2000: boolean;
					public static IS_OS_WINDOWS_2003: boolean;
					public static IS_OS_WINDOWS_2008: boolean;
					public static IS_OS_WINDOWS_2012: boolean;
					public static IS_OS_WINDOWS_95: boolean;
					public static IS_OS_WINDOWS_98: boolean;
					public static IS_OS_WINDOWS_ME: boolean;
					public static IS_OS_WINDOWS_NT: boolean;
					public static IS_OS_WINDOWS_XP: boolean;
					public static IS_OS_WINDOWS_VISTA: boolean;
					public static IS_OS_WINDOWS_7: boolean;
					public static IS_OS_WINDOWS_8: boolean;
					public static IS_OS_WINDOWS_10: boolean;
					public static IS_OS_WINDOWS_11: boolean;
					public static IS_OS_ZOS: boolean;
					public static USER_HOME_KEY: string;
					public static USER_NAME_KEY: string;
					public static USER_DIR_KEY: string;
					public static JAVA_IO_TMPDIR_KEY: string;
					public static JAVA_HOME_KEY: string;
					public static AWT_TOOLKIT: string;
					public static isJavaVersionAtLeast(requiredVersion: org.apache.commons.lang3.JavaVersion): boolean;
					/** @deprecated */
					public static getUserName(): string;
					public static getUserDir(): java.io.File;
					public static isJavaAwtHeadless(): boolean;
					public static getUserName(defaultValue: string): string;
					public constructor();
					public static getHostName(): string;
					public static getUserHome(): java.io.File;
					public static isJavaVersionAtMost(requiredVersion: org.apache.commons.lang3.JavaVersion): boolean;
					public static getJavaHome(): java.io.File;
					public static getJavaIoTmpDir(): java.io.File;
					public static getEnvironmentVariable(name: string, defaultValue: string): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class ThreadUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.ThreadUtils>;
					public static ALWAYS_TRUE_PREDICATE: org.apache.commons.lang3.ThreadUtils.AlwaysTruePredicate;
					public static sleep(duration: java.time.Duration): void;
					public static getAllThreads(): java.util.Collection<java.lang.Thread>;
					public static getSystemThreadGroup(): java.lang.ThreadGroup;
					public static findThreadsByName(threadName: string, threadGroup: java.lang.ThreadGroup): java.util.Collection<java.lang.Thread>;
					public static findThreadGroups(threadGroup: java.lang.ThreadGroup, recurse: boolean, predicate: any /* any*/): java.util.Collection<java.lang.ThreadGroup>;
					/** @deprecated */
					public static findThreadGroups(predicate: org.apache.commons.lang3.ThreadUtils.ThreadGroupPredicate): java.util.Collection<java.lang.ThreadGroup>;
					/** @deprecated */
					public static findThreads(predicate: org.apache.commons.lang3.ThreadUtils.ThreadPredicate): java.util.Collection<java.lang.Thread>;
					public static findThreadById(threadId: number): java.lang.Thread;
					public static findThreadGroups(predicate: any /* any*/): java.util.Collection<java.lang.ThreadGroup>;
					public static findThreads(threadGroup: java.lang.ThreadGroup, recurse: boolean, predicate: any /* any*/): java.util.Collection<java.lang.Thread>;
					public static findThreadsByName(threadName: string, threadGroupName: string): java.util.Collection<java.lang.Thread>;
					public static sleepQuietly(duration: java.time.Duration): void;
					/** @deprecated */
					public static findThreadGroups(threadGroup: java.lang.ThreadGroup, recurse: boolean, predicate: org.apache.commons.lang3.ThreadUtils.ThreadGroupPredicate): java.util.Collection<java.lang.ThreadGroup>;
					public static findThreadsByName(threadName: string): java.util.Collection<java.lang.Thread>;
					public static findThreadById(threadId: number, param1: string): java.lang.Thread;
					public static findThreads(predicate: any /* any*/): java.util.Collection<java.lang.Thread>;
					public constructor();
					/** @deprecated */
					public static findThreads(threadGroup: java.lang.ThreadGroup, recurse: boolean, predicate: org.apache.commons.lang3.ThreadUtils.ThreadPredicate): java.util.Collection<java.lang.Thread>;
					public static join(thread: java.lang.Thread, duration: java.time.Duration): void;
					public static findThreadById(threadId: number, param1: java.lang.ThreadGroup): java.lang.Thread;
					public static getAllThreadGroups(): java.util.Collection<java.lang.ThreadGroup>;
					public static findThreadGroupsByName(threadGroupName: string): java.util.Collection<java.lang.ThreadGroup>;
				}
				export module ThreadUtils {
					export class AlwaysTruePredicate extends java.lang.Object implements org.apache.commons.lang3.ThreadUtils.ThreadPredicate, org.apache.commons.lang3.ThreadUtils.ThreadGroupPredicate {
						public static class: java.lang.Class<org.apache.commons.lang3.ThreadUtils.AlwaysTruePredicate>;
						public test(param0: java.lang.ThreadGroup): boolean;
						public test(threadGroup: java.lang.ThreadGroup): boolean;
						public test(thread: java.lang.Thread): boolean;
						public test(param0: java.lang.Thread): boolean;
					}
					export class NamePredicate extends java.lang.Object implements org.apache.commons.lang3.ThreadUtils.ThreadPredicate, org.apache.commons.lang3.ThreadUtils.ThreadGroupPredicate {
						public static class: java.lang.Class<org.apache.commons.lang3.ThreadUtils.NamePredicate>;
						public test(param0: java.lang.ThreadGroup): boolean;
						public constructor(name: string);
						public test(threadGroup: java.lang.ThreadGroup): boolean;
						public test(thread: java.lang.Thread): boolean;
						public test(param0: java.lang.Thread): boolean;
					}
					export class ThreadGroupPredicate extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.ThreadUtils.ThreadGroupPredicate>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.ThreadUtils$ThreadGroupPredicate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							test(param0: java.lang.ThreadGroup): boolean;
						});
						public constructor();
						public test(param0: java.lang.ThreadGroup): boolean;
					}
					export class ThreadIdPredicate extends java.lang.Object implements org.apache.commons.lang3.ThreadUtils.ThreadPredicate {
						public static class: java.lang.Class<org.apache.commons.lang3.ThreadUtils.ThreadIdPredicate>;
						public test(thread: java.lang.Thread): boolean;
						public constructor(threadId: number);
						public test(param0: java.lang.Thread): boolean;
					}
					export class ThreadPredicate extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.ThreadUtils.ThreadPredicate>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.ThreadUtils$ThreadPredicate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							test(param0: java.lang.Thread): boolean;
						});
						public constructor();
						public test(param0: java.lang.Thread): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export class Validate extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.lang3.Validate>;
					public static validIndex(array: any[], index: number): any[];
					public static notEmpty(collection: java.util.Collection<any>, message: string, ...values: any[]): java.util.Collection<any>;
					public static finite(value: number, param1: string, ...message: any[]): void;
					public static inclusiveBetween(start: any, end: any, value: java.lang.Comparable<any>): void;
					public static validIndex(array: any[], index: number, message: string, ...values: any[]): any[];
					public static isTrue(expression: boolean, message: string, value: number): void;
					public static matchesPattern(input: string, pattern: string, message: string, ...values: any[]): void;
					public static isAssignableFrom(superType: java.lang.Class<any>, type: java.lang.Class<any>, message: string, ...values: any[]): void;
					public static notEmpty(chars: string): string;
					public static validIndex(chars: string, index: number, message: string, ...values: any[]): string;
					/** @deprecated */
					public static notNull(object: any): any;
					public static notEmpty(chars: string, message: string, ...values: any[]): string;
					public static inclusiveBetween(start: any, end: any, value: java.lang.Comparable<any>, message: string, ...values: any[]): void;
					public static isInstanceOf(type: java.lang.Class<any>, obj: any, message: string, ...values: any[]): void;
					public constructor();
					public static matchesPattern(input: string, pattern: string): void;
					public static notBlank(chars: string, message: string, ...values: any[]): string;
					public static exclusiveBetween(start: number, param1: number, end: number): void;
					public static noNullElements(array: any[], message: string, ...values: any[]): any[];
					public static notNaN(value: number, param1: string, ...message: any[]): void;
					public static notBlank(chars: string): string;
					public static noNullElements(array: any[]): any[];
					public static validIndex(chars: string, index: number): string;
					public static exclusiveBetween(start: any, end: any, value: java.lang.Comparable<any>): void;
					public static notEmpty(map: java.util.Map<any,any>): java.util.Map<any,any>;
					public static finite(value: number): void;
					public static exclusiveBetween(start: any, end: any, value: java.lang.Comparable<any>, message: string, ...values: any[]): void;
					public static isInstanceOf(type: java.lang.Class<any>, obj: any): void;
					public static notNull(object: any, message: string, ...values: any[]): any;
					public static notEmpty(array: any[]): any[];
					public static inclusiveBetween(start: number, param1: number, end: number): void;
					public static notEmpty(map: java.util.Map<any,any>, message: string, ...values: any[]): java.util.Map<any,any>;
					public static validState(expression: boolean, message: string, ...values: any[]): void;
					public static isAssignableFrom(superType: java.lang.Class<any>, type: java.lang.Class<any>): void;
					public static isTrue(expression: boolean, message: string, ...values: any[]): void;
					public static notEmpty(collection: java.util.Collection<any>): java.util.Collection<any>;
					public static validIndex(collection: java.util.Collection<any>, index: number, message: string, ...values: any[]): java.util.Collection<any>;
					public static inclusiveBetween(start: number, param1: number, end: number, param3: string): void;
					public static exclusiveBetween(start: number, param1: number, end: number, param3: string): void;
					public static isTrue(expression: boolean): void;
					public static noNullElements(iterable: java.lang.Iterable<any>, message: string, ...values: any[]): java.lang.Iterable<any>;
					public static validState(expression: boolean): void;
					public static notNaN(value: number): void;
					public static notEmpty(array: any[], message: string, ...values: any[]): any[];
					public static noNullElements(iterable: java.lang.Iterable<any>): java.lang.Iterable<any>;
					public static validIndex(collection: java.util.Collection<any>, index: number): java.util.Collection<any>;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module arch {
					export class Processor extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.arch.Processor>;
						public getArch(): org.apache.commons.lang3.arch.Processor.Arch;
						public isIA64(): boolean;
						public is64Bit(): boolean;
						public isX86(): boolean;
						public constructor(arch: org.apache.commons.lang3.arch.Processor.Arch, type: org.apache.commons.lang3.arch.Processor.Type);
						public getType(): org.apache.commons.lang3.arch.Processor.Type;
						public isAarch64(): boolean;
						public is32Bit(): boolean;
						public isPPC(): boolean;
						public toString(): string;
					}
					export module Processor {
						export class Arch {
							public static class: java.lang.Class<org.apache.commons.lang3.arch.Processor.Arch>;
							public static BIT_32: org.apache.commons.lang3.arch.Processor.Arch;
							public static BIT_64: org.apache.commons.lang3.arch.Processor.Arch;
							public static UNKNOWN: org.apache.commons.lang3.arch.Processor.Arch;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public getLabel(): string;
							public static valueOf(name: string): org.apache.commons.lang3.arch.Processor.Arch;
							public static values(): org.apache.commons.lang3.arch.Processor.Arch[];
						}
						export class Type {
							public static class: java.lang.Class<org.apache.commons.lang3.arch.Processor.Type>;
							public static AARCH_64: org.apache.commons.lang3.arch.Processor.Type;
							public static X86: org.apache.commons.lang3.arch.Processor.Type;
							public static IA_64: org.apache.commons.lang3.arch.Processor.Type;
							public static PPC: org.apache.commons.lang3.arch.Processor.Type;
							public static UNKNOWN: org.apache.commons.lang3.arch.Processor.Type;
							public static values(): org.apache.commons.lang3.arch.Processor.Type[];
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public getLabel(): string;
							public static valueOf(name: string): org.apache.commons.lang3.arch.Processor.Type;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class Builder<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.Builder<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.builder.Builder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							build(): T;
						});
						public constructor();
						public build(): T;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class CompareToBuilder extends org.apache.commons.lang3.builder.Builder<java.lang.Integer> {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.CompareToBuilder>;
						public append(lhs: boolean, rhs: boolean): org.apache.commons.lang3.builder.CompareToBuilder;
						public static reflectionCompare(lhs: any, rhs: any, compareTransients: boolean): number;
						public constructor();
						public append(lhs: any[], rhs: any[], comparator: java.util.Comparator<any>): org.apache.commons.lang3.builder.CompareToBuilder;
						public append(lhs: number[], rhs: number[]): org.apache.commons.lang3.builder.CompareToBuilder;
						public append(lhs: string[], rhs: string[]): org.apache.commons.lang3.builder.CompareToBuilder;
						public append(lhs: any, rhs: any): org.apache.commons.lang3.builder.CompareToBuilder;
						public static reflectionCompare(lhs: any, rhs: any, ...excludeFields: string[]): number;
						public toComparison(): number;
						public append(lhs: number, param1: number): org.apache.commons.lang3.builder.CompareToBuilder;
						public static reflectionCompare(lhs: any, rhs: any): number;
						public build(): any;
						public static reflectionCompare(lhs: any, rhs: any, compareTransients: boolean, reflectUpToClass: java.lang.Class<any>, ...excludeFields: string[]): number;
						public append(lhs: any, rhs: any, comparator: java.util.Comparator<any>): org.apache.commons.lang3.builder.CompareToBuilder;
						public appendSuper(superCompareTo: number): org.apache.commons.lang3.builder.CompareToBuilder;
						public append(lhs: number, rhs: number): org.apache.commons.lang3.builder.CompareToBuilder;
						public append(lhs: any[], rhs: any[]): org.apache.commons.lang3.builder.CompareToBuilder;
						public static reflectionCompare(lhs: any, rhs: any, excludeFields: java.util.Collection<string>): number;
						public append(lhs: boolean[], rhs: boolean[]): org.apache.commons.lang3.builder.CompareToBuilder;
						public append(lhs: string, rhs: string): org.apache.commons.lang3.builder.CompareToBuilder;
						public build(): java.lang.Integer;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export abstract class Diff<T>  extends org.apache.commons.lang3.tuple.Pair<any,any> {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.Diff<any>>;
						public constructor(fieldName: string);
						public getType(): java.lang.reflect.Type;
						public constructor();
						public equals(obj: any): boolean;
						public setValue(param0: any): any;
						public static comparingByValue(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
						public setValue(value: any): any;
						public getValue(): any;
						public toString(format: string): string;
						public getKey(): any;
						public static comparingByValue(): java.util.Comparator<any>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getFieldName(): string;
						public toString(): string;
						public static comparingByKey(): java.util.Comparator<any>;
						public static comparingByKey(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class DiffBuilder<T>  extends org.apache.commons.lang3.builder.Builder<org.apache.commons.lang3.builder.DiffResult<any>> {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.DiffBuilder<any>>;
						public append(fieldName: string, lhs: string[], rhs: string[]): org.apache.commons.lang3.builder.DiffBuilder<any>;
						public append(fieldName: string, lhs: boolean[], rhs: boolean[]): org.apache.commons.lang3.builder.DiffBuilder<any>;
						public constructor(lhs: any, rhs: any, style: org.apache.commons.lang3.builder.ToStringStyle, testTriviallyEqual: boolean);
						public append(fieldName: string, diffResult: org.apache.commons.lang3.builder.DiffResult<any>): org.apache.commons.lang3.builder.DiffBuilder<any>;
						public build(): any;
						public append(fieldName: string, lhs: any[], rhs: any[]): org.apache.commons.lang3.builder.DiffBuilder<any>;
						public append(fieldName: string, lhs: number, rhs: number): org.apache.commons.lang3.builder.DiffBuilder<any>;
						public append(fieldName: string, lhs: number, param2: number): org.apache.commons.lang3.builder.DiffBuilder<any>;
						public append(fieldName: string, lhs: string, rhs: string): org.apache.commons.lang3.builder.DiffBuilder<any>;
						public build(): org.apache.commons.lang3.builder.DiffResult<any>;
						public append(fieldName: string, lhs: any, rhs: any): org.apache.commons.lang3.builder.DiffBuilder<any>;
						public constructor(lhs: any, rhs: any, style: org.apache.commons.lang3.builder.ToStringStyle);
						public append(fieldName: string, lhs: boolean, rhs: boolean): org.apache.commons.lang3.builder.DiffBuilder<any>;
						public append(fieldName: string, lhs: number[], rhs: number[]): org.apache.commons.lang3.builder.DiffBuilder<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class DiffExclude extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.DiffExclude>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.builder.DiffExclude interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class DiffResult<T>  extends java.lang.Iterable<org.apache.commons.lang3.builder.Diff<any>> {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.DiffResult<any>>;
						public static OBJECTS_SAME_STRING: string;
						public iterator(): java.util.Iterator<org.apache.commons.lang3.builder.Diff<any>>;
						public toString(style: org.apache.commons.lang3.builder.ToStringStyle): string;
						public iterator(): java.util.Iterator<any>;
						public spliterator(): java.util.Spliterator<any>;
						public getNumberOfDiffs(): number;
						public getToStringStyle(): org.apache.commons.lang3.builder.ToStringStyle;
						public forEach(action: any /* any*/): void;
						public getRight(): any;
						public getDiffs(): java.util.List<org.apache.commons.lang3.builder.Diff<any>>;
						public toString(): string;
						public getLeft(): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class Diffable<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.Diffable<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.builder.Diffable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							diff(param0: T): org.apache.commons.lang3.builder.DiffResult<T>;
						});
						public constructor();
						public diff(param0: T): org.apache.commons.lang3.builder.DiffResult<T>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class EqualsBuilder extends org.apache.commons.lang3.builder.Builder<java.lang.Boolean> {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.EqualsBuilder>;
						public setReflectUpToClass(reflectUpToClass: java.lang.Class<any>): org.apache.commons.lang3.builder.EqualsBuilder;
						public append(lhs: string, rhs: string): org.apache.commons.lang3.builder.EqualsBuilder;
						public build(): java.lang.Boolean;
						public append(lhs: string[], rhs: string[]): org.apache.commons.lang3.builder.EqualsBuilder;
						public append(lhs: boolean, rhs: boolean): org.apache.commons.lang3.builder.EqualsBuilder;
						public setExcludeFields(...excludeFields: string[]): org.apache.commons.lang3.builder.EqualsBuilder;
						public append(lhs: number, rhs: number): org.apache.commons.lang3.builder.EqualsBuilder;
						public setEquals(isEquals: boolean): void;
						public append(lhs: any, rhs: any): org.apache.commons.lang3.builder.EqualsBuilder;
						public static reflectionEquals(lhs: any, rhs: any, ...excludeFields: string[]): boolean;
						public appendSuper(superEquals: boolean): org.apache.commons.lang3.builder.EqualsBuilder;
						public isEquals(): boolean;
						public static reflectionEquals(lhs: any, rhs: any, excludeFields: java.util.Collection<string>): boolean;
						public static reflectionEquals(lhs: any, rhs: any, testTransients: boolean): boolean;
						public setTestTransients(testTransients: boolean): org.apache.commons.lang3.builder.EqualsBuilder;
						public append(lhs: boolean[], rhs: boolean[]): org.apache.commons.lang3.builder.EqualsBuilder;
						public constructor();
						public append(lhs: any[], rhs: any[]): org.apache.commons.lang3.builder.EqualsBuilder;
						public append(lhs: number, param1: number): org.apache.commons.lang3.builder.EqualsBuilder;
						public static reflectionEquals(lhs: any, rhs: any, testTransients: boolean, reflectUpToClass: java.lang.Class<any>, ...excludeFields: string[]): boolean;
						public setBypassReflectionClasses(bypassReflectionClasses: java.util.List<java.lang.Class<any>>): org.apache.commons.lang3.builder.EqualsBuilder;
						public reflectionAppend(lhs: any, rhs: any): org.apache.commons.lang3.builder.EqualsBuilder;
						public setTestRecursive(testRecursive: boolean): org.apache.commons.lang3.builder.EqualsBuilder;
						public build(): any;
						public static reflectionEquals(lhs: any, rhs: any, testTransients: boolean, reflectUpToClass: java.lang.Class<any>, testRecursive: boolean, ...excludeFields: string[]): boolean;
						public append(lhs: number[], rhs: number[]): org.apache.commons.lang3.builder.EqualsBuilder;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class EqualsExclude extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.EqualsExclude>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.builder.EqualsExclude interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class HashCodeBuilder extends org.apache.commons.lang3.builder.Builder<java.lang.Integer> {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.HashCodeBuilder>;
						public static reflectionHashCode(object: any, excludeFields: java.util.Collection<string>): number;
						public append(array: number[]): org.apache.commons.lang3.builder.HashCodeBuilder;
						public constructor();
						public equals(obj: any): boolean;
						public appendSuper(superHashCode: number): org.apache.commons.lang3.builder.HashCodeBuilder;
						public static reflectionHashCode(initialNonZeroOddNumber: number, multiplierNonZeroOddNumber: number, object: any): number;
						public append(value: boolean): org.apache.commons.lang3.builder.HashCodeBuilder;
						public hashCode(): number;
						public toHashCode(): number;
						public append(value: number): org.apache.commons.lang3.builder.HashCodeBuilder;
						public build(): any;
						public append(value: string): org.apache.commons.lang3.builder.HashCodeBuilder;
						public append(array: string[]): org.apache.commons.lang3.builder.HashCodeBuilder;
						public static reflectionHashCode(initialNonZeroOddNumber: number, multiplierNonZeroOddNumber: number, object: any, testTransients: boolean): number;
						public constructor(initialOddNumber: number, multiplierOddNumber: number);
						public build(): java.lang.Integer;
						public static reflectionHashCode(object: any, ...excludeFields: string[]): number;
						public static reflectionHashCode(initialNonZeroOddNumber: number, multiplierNonZeroOddNumber: number, object: any, testTransients: boolean, reflectUpToClass: java.lang.Class<any>, ...excludeFields: string[]): number;
						public static reflectionHashCode(object: any, testTransients: boolean): number;
						public append(array: boolean[]): org.apache.commons.lang3.builder.HashCodeBuilder;
						public append(object: any): org.apache.commons.lang3.builder.HashCodeBuilder;
						public append(array: any[]): org.apache.commons.lang3.builder.HashCodeBuilder;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class HashCodeExclude extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.HashCodeExclude>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.builder.HashCodeExclude interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class IDKey extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.IDKey>;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class MultilineRecursiveToStringStyle extends org.apache.commons.lang3.builder.RecursiveToStringStyle {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.MultilineRecursiveToStringStyle>;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, coll: java.util.Collection<any>): void;
						public constructor();
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, value: number): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, value: string): void;
						public reflectionAppendArrayDetail(buffer: java.lang.StringBuffer, fieldName: string, array: any): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, array: any[]): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, array: boolean[]): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, value: boolean): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, value: any): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, i: number, item: any): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, array: number[]): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, map: java.util.Map<any,any>): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, array: string[]): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class RecursiveToStringStyle extends org.apache.commons.lang3.builder.ToStringStyle {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.RecursiveToStringStyle>;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, coll: java.util.Collection<any>): void;
						public constructor();
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, value: number): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, value: string): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, array: any[]): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, array: boolean[]): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, value: boolean): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, value: any): void;
						public accept(clazz: java.lang.Class<any>): boolean;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, i: number, item: any): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, array: number[]): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, map: java.util.Map<any,any>): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, array: string[]): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class Reflection extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.Reflection>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class ReflectionDiffBuilder<T>  extends org.apache.commons.lang3.builder.Builder<org.apache.commons.lang3.builder.DiffResult<any>> {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.ReflectionDiffBuilder<any>>;
						public setExcludeFieldNames(...excludeFieldNamesParam: string[]): org.apache.commons.lang3.builder.ReflectionDiffBuilder<any>;
						public build(): org.apache.commons.lang3.builder.DiffResult<any>;
						public constructor(lhs: any, rhs: any, style: org.apache.commons.lang3.builder.ToStringStyle);
						public getExcludeFieldNames(): string[];
						public build(): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class ReflectionToStringBuilder extends org.apache.commons.lang3.builder.ToStringBuilder {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.ReflectionToStringBuilder>;
						public excludeFieldNames: string[];
						public includeFieldNames: string[];
						public static toString(object: any, style: org.apache.commons.lang3.builder.ToStringStyle, outputTransients: boolean, outputStatics: boolean, reflectUpToClass: java.lang.Class<any>): string;
						public accept(field: java.lang.reflect.Field): boolean;
						public constructor(object: any, style: org.apache.commons.lang3.builder.ToStringStyle);
						public constructor(object: any, style: org.apache.commons.lang3.builder.ToStringStyle, buffer: java.lang.StringBuffer);
						public static toString(object: any): string;
						public setAppendTransients(appendTransients: boolean): void;
						public getExcludeFieldNames(): string[];
						public setAppendStatics(appendStatics: boolean): void;
						public static toString(object: any, style: org.apache.commons.lang3.builder.ToStringStyle, outputTransients: boolean, outputStatics: boolean): string;
						public constructor(object: any, style: org.apache.commons.lang3.builder.ToStringStyle, buffer: java.lang.StringBuffer, reflectUpToClass: java.lang.Class<any>, outputTransients: boolean, outputStatics: boolean);
						public setUpToClass(clazz: java.lang.Class<any>): void;
						public setExcludeFieldNames(...excludeFieldNamesParam: string[]): org.apache.commons.lang3.builder.ReflectionToStringBuilder;
						public constructor(object: any, style: org.apache.commons.lang3.builder.ToStringStyle, buffer: java.lang.StringBuffer, reflectUpToClass: java.lang.Class<any>, outputTransients: boolean, outputStatics: boolean, excludeNullValues: boolean);
						public static toString(object: any, style: org.apache.commons.lang3.builder.ToStringStyle, outputTransients: boolean, outputStatics: boolean, excludeNullValues: boolean, reflectUpToClass: java.lang.Class<any>): string;
						public setExcludeNullValues(excludeNullValues: boolean): void;
						public reflectionAppendArray(array: any): org.apache.commons.lang3.builder.ReflectionToStringBuilder;
						public build(): string;
						public getUpToClass(): java.lang.Class<any>;
						public static toString(object: any, style: org.apache.commons.lang3.builder.ToStringStyle, outputTransients: boolean): string;
						public getIncludeFieldNames(): string[];
						public getValue(field: java.lang.reflect.Field): any;
						public static toString(object: any, style: org.apache.commons.lang3.builder.ToStringStyle): string;
						public static toStringExclude(object: any, excludeFieldNames: java.util.Collection<string>): string;
						public isAppendStatics(): boolean;
						public isExcludeNullValues(): boolean;
						public toString(): string;
						public build(): any;
						public static toStringInclude(object: any, includeFieldNames: java.util.Collection<string>): string;
						public appendFieldsIn(clazz: java.lang.Class<any>): void;
						public static toStringInclude(object: any, ...includeFieldNames: string[]): string;
						public isAppendTransients(): boolean;
						public setIncludeFieldNames(...includeFieldNamesParam: string[]): org.apache.commons.lang3.builder.ReflectionToStringBuilder;
						public constructor(object: any);
						public static toStringExclude(object: any, ...excludeFieldNames: string[]): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class StandardToStringStyle extends org.apache.commons.lang3.builder.ToStringStyle {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.StandardToStringStyle>;
						public setArrayContentDetail(arrayContentDetail: boolean): void;
						public isDefaultFullDetail(): boolean;
						public setDefaultFullDetail(defaultFullDetail: boolean): void;
						public getContentEnd(): string;
						public getSummaryObjectStartText(): string;
						public isUseFieldNames(): boolean;
						public setFieldSeparatorAtEnd(fieldSeparatorAtEnd: boolean): void;
						public setArrayEnd(arrayEnd: string): void;
						public isArrayContentDetail(): boolean;
						public setArrayStart(arrayStart: string): void;
						public getArraySeparator(): string;
						public setFieldSeparator(fieldSeparator: string): void;
						public getFieldSeparator(): string;
						public getSummaryObjectEndText(): string;
						public setUseIdentityHashCode(useIdentityHashCode: boolean): void;
						public setSizeEndText(sizeEndText: string): void;
						public isUseShortClassName(): boolean;
						public getSizeEndText(): string;
						public setUseShortClassName(useShortClassName: boolean): void;
						public setFieldNameValueSeparator(fieldNameValueSeparator: string): void;
						public setArraySeparator(arraySeparator: string): void;
						public getContentStart(): string;
						public constructor();
						public getArrayEnd(): string;
						public setSizeStartText(sizeStartText: string): void;
						public setContentEnd(contentEnd: string): void;
						public getFieldNameValueSeparator(): string;
						public isFieldSeparatorAtStart(): boolean;
						public getArrayStart(): string;
						public setUseClassName(useClassName: boolean): void;
						public setNullText(nullText: string): void;
						public setUseFieldNames(useFieldNames: boolean): void;
						public getNullText(): string;
						public setFieldSeparatorAtStart(fieldSeparatorAtStart: boolean): void;
						public setSummaryObjectStartText(summaryObjectStartText: string): void;
						public isUseClassName(): boolean;
						public setContentStart(contentStart: string): void;
						public isFieldSeparatorAtEnd(): boolean;
						public getSizeStartText(): string;
						public isUseIdentityHashCode(): boolean;
						public setSummaryObjectEndText(summaryObjectEndText: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class ToStringBuilder extends org.apache.commons.lang3.builder.Builder<string> {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.ToStringBuilder>;
						public append(fieldName: string, array: number[], fullDetail: boolean): org.apache.commons.lang3.builder.ToStringBuilder;
						public append(array: any[]): org.apache.commons.lang3.builder.ToStringBuilder;
						public append(array: string[]): org.apache.commons.lang3.builder.ToStringBuilder;
						public append(fieldName: string, array: boolean[], fullDetail: boolean): org.apache.commons.lang3.builder.ToStringBuilder;
						public getObject(): any;
						public static reflectionToString(object: any, style: org.apache.commons.lang3.builder.ToStringStyle): string;
						public append(array: number[]): org.apache.commons.lang3.builder.ToStringBuilder;
						public static reflectionToString(object: any, style: org.apache.commons.lang3.builder.ToStringStyle, outputTransients: boolean): string;
						public constructor(object: any, style: org.apache.commons.lang3.builder.ToStringStyle);
						public constructor(object: any, style: org.apache.commons.lang3.builder.ToStringStyle, buffer: java.lang.StringBuffer);
						public append(value: string): org.apache.commons.lang3.builder.ToStringBuilder;
						public append(fieldName: string, obj: any, fullDetail: boolean): org.apache.commons.lang3.builder.ToStringBuilder;
						public static reflectionToString(object: any, style: org.apache.commons.lang3.builder.ToStringStyle, outputTransients: boolean, reflectUpToClass: java.lang.Class<any>): string;
						public append(obj: any): org.apache.commons.lang3.builder.ToStringBuilder;
						public append(value: boolean): org.apache.commons.lang3.builder.ToStringBuilder;
						public append(value: number): org.apache.commons.lang3.builder.ToStringBuilder;
						public append(fieldName: string, array: any[], fullDetail: boolean): org.apache.commons.lang3.builder.ToStringBuilder;
						public append(fieldName: string, array: number[]): org.apache.commons.lang3.builder.ToStringBuilder;
						public static reflectionToString(object: any): string;
						public append(fieldName: string, obj: any): org.apache.commons.lang3.builder.ToStringBuilder;
						public append(fieldName: string, value: string): org.apache.commons.lang3.builder.ToStringBuilder;
						public append(fieldName: string, array: boolean[]): org.apache.commons.lang3.builder.ToStringBuilder;
						public appendSuper(superToString: string): org.apache.commons.lang3.builder.ToStringBuilder;
						public build(): string;
						public append(fieldName: string, array: string[], fullDetail: boolean): org.apache.commons.lang3.builder.ToStringBuilder;
						public getStringBuffer(): java.lang.StringBuffer;
						public append(fieldName: string, value: boolean): org.apache.commons.lang3.builder.ToStringBuilder;
						public appendAsObjectToString(srcObject: any): org.apache.commons.lang3.builder.ToStringBuilder;
						public appendToString(toString: string): org.apache.commons.lang3.builder.ToStringBuilder;
						public append(fieldName: string, array: any[]): org.apache.commons.lang3.builder.ToStringBuilder;
						public toString(): string;
						public build(): any;
						public static getDefaultStyle(): org.apache.commons.lang3.builder.ToStringStyle;
						public getStyle(): org.apache.commons.lang3.builder.ToStringStyle;
						public append(array: boolean[]): org.apache.commons.lang3.builder.ToStringBuilder;
						public static setDefaultStyle(style: org.apache.commons.lang3.builder.ToStringStyle): void;
						public constructor(object: any);
						public append(fieldName: string, array: string[]): org.apache.commons.lang3.builder.ToStringBuilder;
						public append(fieldName: string, value: number): org.apache.commons.lang3.builder.ToStringBuilder;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class ToStringExclude extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.ToStringExclude>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.builder.ToStringExclude interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export abstract class ToStringStyle extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.ToStringStyle>;
						public static DEFAULT_STYLE: org.apache.commons.lang3.builder.ToStringStyle;
						public static MULTI_LINE_STYLE: org.apache.commons.lang3.builder.ToStringStyle;
						public static NO_FIELD_NAMES_STYLE: org.apache.commons.lang3.builder.ToStringStyle;
						public static SHORT_PREFIX_STYLE: org.apache.commons.lang3.builder.ToStringStyle;
						public static SIMPLE_STYLE: org.apache.commons.lang3.builder.ToStringStyle;
						public static NO_CLASS_NAME_STYLE: org.apache.commons.lang3.builder.ToStringStyle;
						public static JSON_STYLE: org.apache.commons.lang3.builder.ToStringStyle;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, coll: java.util.Collection<any>): void;
						public setArrayContentDetail(arrayContentDetail: boolean): void;
						public isDefaultFullDetail(): boolean;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, value: number): void;
						public getContentEnd(): string;
						public append(buffer: java.lang.StringBuffer, fieldName: string, value: boolean): void;
						public isUseFieldNames(): boolean;
						public setFieldSeparatorAtEnd(fieldSeparatorAtEnd: boolean): void;
						public append(buffer: java.lang.StringBuffer, fieldName: string, array: boolean[], fullDetail: java.lang.Boolean): void;
						public setArrayEnd(arrayEnd: string): void;
						public appendContentStart(buffer: java.lang.StringBuffer): void;
						public setArrayStart(arrayStart: string): void;
						public getArraySeparator(): string;
						public getFieldSeparator(): string;
						public appendEnd(buffer: java.lang.StringBuffer, object: any): void;
						public append(buffer: java.lang.StringBuffer, fieldName: string, array: string[], fullDetail: java.lang.Boolean): void;
						public getSummaryObjectEndText(): string;
						public appendSummary(buffer: java.lang.StringBuffer, fieldName: string, value: any): void;
						public setUseIdentityHashCode(useIdentityHashCode: boolean): void;
						public appendSummary(buffer: java.lang.StringBuffer, fieldName: string, array: boolean[]): void;
						public getSizeEndText(): string;
						public setUseShortClassName(useShortClassName: boolean): void;
						public append(buffer: java.lang.StringBuffer, fieldName: string, value: any, fullDetail: java.lang.Boolean): void;
						public setFieldNameValueSeparator(fieldNameValueSeparator: string): void;
						public appendToString(buffer: java.lang.StringBuffer, toString: string): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, array: string[]): void;
						public setArraySeparator(arraySeparator: string): void;
						public constructor();
						public removeLastFieldSeparator(buffer: java.lang.StringBuffer): void;
						public appendCyclicObject(buffer: java.lang.StringBuffer, fieldName: string, value: any): void;
						public setSizeStartText(sizeStartText: string): void;
						public setContentEnd(contentEnd: string): void;
						public isFieldSeparatorAtStart(): boolean;
						public append(buffer: java.lang.StringBuffer, fieldName: string, array: number[], fullDetail: java.lang.Boolean): void;
						public reflectionAppendArrayDetail(buffer: java.lang.StringBuffer, fieldName: string, array: any): void;
						public getArrayStart(): string;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, array: any[]): void;
						public setUseFieldNames(useFieldNames: boolean): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, value: boolean): void;
						public isUseClassName(): boolean;
						public isFieldSeparatorAtEnd(): boolean;
						public getSizeStartText(): string;
						public setSummaryObjectEndText(summaryObjectEndText: string): void;
						public appendSuper(buffer: java.lang.StringBuffer, superToString: string): void;
						public appendSummary(buffer: java.lang.StringBuffer, fieldName: string, array: string[]): void;
						public appendSummarySize(buffer: java.lang.StringBuffer, fieldName: string, size: number): void;
						public setDefaultFullDetail(defaultFullDetail: boolean): void;
						public append(buffer: java.lang.StringBuffer, fieldName: string, value: number): void;
						public append(buffer: java.lang.StringBuffer, fieldName: string, array: any[], fullDetail: java.lang.Boolean): void;
						public getSummaryObjectStartText(): string;
						public appendFieldStart(buffer: java.lang.StringBuffer, fieldName: string): void;
						public isFullDetail(fullDetailRequest: java.lang.Boolean): boolean;
						public isArrayContentDetail(): boolean;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, array: boolean[]): void;
						public setFieldSeparator(fieldSeparator: string): void;
						public appendClassName(buffer: java.lang.StringBuffer, object: any): void;
						public appendInternal(buffer: java.lang.StringBuffer, fieldName: string, value: any, detail: boolean): void;
						public setSizeEndText(sizeEndText: string): void;
						public isUseShortClassName(): boolean;
						public getShortClassName(cls: java.lang.Class<any>): string;
						public appendNullText(buffer: java.lang.StringBuffer, fieldName: string): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, i: number, item: any): void;
						public appendContentEnd(buffer: java.lang.StringBuffer): void;
						public static getRegistry(): java.util.Map<any,any>;
						public appendIdentityHashCode(buffer: java.lang.StringBuffer, object: any): void;
						public appendStart(buffer: java.lang.StringBuffer, object: any): void;
						public getContentStart(): string;
						public getArrayEnd(): string;
						public appendFieldSeparator(buffer: java.lang.StringBuffer): void;
						public appendFieldEnd(buffer: java.lang.StringBuffer, fieldName: string): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, value: string): void;
						public getFieldNameValueSeparator(): string;
						public appendSummary(buffer: java.lang.StringBuffer, fieldName: string, array: any[]): void;
						public append(buffer: java.lang.StringBuffer, fieldName: string, value: string): void;
						public setUseClassName(useClassName: boolean): void;
						public setNullText(nullText: string): void;
						public getNullText(): string;
						public setFieldSeparatorAtStart(fieldSeparatorAtStart: boolean): void;
						public setSummaryObjectStartText(summaryObjectStartText: string): void;
						public setContentStart(contentStart: string): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, value: any): void;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, array: number[]): void;
						public isUseIdentityHashCode(): boolean;
						public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, map: java.util.Map<any,any>): void;
						public appendSummary(buffer: java.lang.StringBuffer, fieldName: string, array: number[]): void;
					}
					export module ToStringStyle {
						export class DefaultToStringStyle extends org.apache.commons.lang3.builder.ToStringStyle {
							public static class: java.lang.Class<org.apache.commons.lang3.builder.ToStringStyle.DefaultToStringStyle>;
						}
						export class JsonToStringStyle extends org.apache.commons.lang3.builder.ToStringStyle {
							public static class: java.lang.Class<org.apache.commons.lang3.builder.ToStringStyle.JsonToStringStyle>;
							public append(buffer: java.lang.StringBuffer, fieldName: string, array: any[], fullDetail: java.lang.Boolean): void;
							public append(buffer: java.lang.StringBuffer, fieldName: string, value: number): void;
							public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, i: number, item: any): void;
							public append(buffer: java.lang.StringBuffer, fieldName: string, array: number[], fullDetail: java.lang.Boolean): void;
							public append(buffer: java.lang.StringBuffer, fieldName: string, value: any, fullDetail: java.lang.Boolean): void;
							public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, value: number): void;
							public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, array: any[]): void;
							public append(buffer: java.lang.StringBuffer, fieldName: string, array: boolean[], fullDetail: java.lang.Boolean): void;
							public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, array: string[]): void;
							public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, value: any): void;
							public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, value: boolean): void;
							public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, array: number[]): void;
							public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, array: boolean[]): void;
							public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, map: java.util.Map<any,any>): void;
							public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, value: string): void;
							public append(buffer: java.lang.StringBuffer, fieldName: string, array: string[], fullDetail: java.lang.Boolean): void;
							public appendFieldStart(buffer: java.lang.StringBuffer, fieldName: string): void;
							public append(buffer: java.lang.StringBuffer, fieldName: string, value: string): void;
							public append(buffer: java.lang.StringBuffer, fieldName: string, value: boolean): void;
							public appendDetail(buffer: java.lang.StringBuffer, fieldName: string, coll: java.util.Collection<any>): void;
						}
						export class MultiLineToStringStyle extends org.apache.commons.lang3.builder.ToStringStyle {
							public static class: java.lang.Class<org.apache.commons.lang3.builder.ToStringStyle.MultiLineToStringStyle>;
						}
						export class NoClassNameToStringStyle extends org.apache.commons.lang3.builder.ToStringStyle {
							public static class: java.lang.Class<org.apache.commons.lang3.builder.ToStringStyle.NoClassNameToStringStyle>;
						}
						export class NoFieldNameToStringStyle extends org.apache.commons.lang3.builder.ToStringStyle {
							public static class: java.lang.Class<org.apache.commons.lang3.builder.ToStringStyle.NoFieldNameToStringStyle>;
						}
						export class ShortPrefixToStringStyle extends org.apache.commons.lang3.builder.ToStringStyle {
							public static class: java.lang.Class<org.apache.commons.lang3.builder.ToStringStyle.ShortPrefixToStringStyle>;
						}
						export class SimpleToStringStyle extends org.apache.commons.lang3.builder.ToStringStyle {
							public static class: java.lang.Class<org.apache.commons.lang3.builder.ToStringStyle.SimpleToStringStyle>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module builder {
					export class ToStringSummary extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.apache.commons.lang3.builder.ToStringSummary>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.builder.ToStringSummary interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module compare {
					export class ComparableUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.compare.ComparableUtils>;
						public static between(b: java.lang.Comparable<any>, c: java.lang.Comparable<any>): any /* any*/;
						public static max(comparable1: java.lang.Comparable<any>, comparable2: java.lang.Comparable<any>): java.lang.Comparable<any>;
						public static betweenExclusive(b: java.lang.Comparable<any>, c: java.lang.Comparable<any>): any /* any*/;
						public static le(b: java.lang.Comparable<any>): any /* any*/;
						public static ge(b: java.lang.Comparable<any>): any /* any*/;
						public static min(comparable1: java.lang.Comparable<any>, comparable2: java.lang.Comparable<any>): java.lang.Comparable<any>;
						public static gt(b: java.lang.Comparable<any>): any /* any*/;
						public static lt(b: java.lang.Comparable<any>): any /* any*/;
						public static is(a: java.lang.Comparable<any>): org.apache.commons.lang3.compare.ComparableUtils.ComparableCheckBuilder<any>;
					}
					export module ComparableUtils {
						export class ComparableCheckBuilder<A>  extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.lang3.compare.ComparableUtils.ComparableCheckBuilder<any>>;
							public greaterThanOrEqualTo(b: A): boolean;
							public lessThan(b: A): boolean;
							public lessThanOrEqualTo(b: A): boolean;
							public greaterThan(b: A): boolean;
							public betweenExclusive(b: A, c: A): boolean;
							public equalTo(b: A): boolean;
							public between(b: A, c: A): boolean;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module compare {
					export class ObjectToStringComparator extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.compare.ObjectToStringComparator>;
						public static INSTANCE: org.apache.commons.lang3.compare.ObjectToStringComparator;
						public compare(o1: any, o2: any): number;
						public constructor();
						public equals(obj: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public equals(param0: any): boolean;
						public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public reversed(): java.util.Comparator<any>;
						public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static naturalOrder(): java.util.Comparator<any>;
						public compare(param0: any, param1: any): number;
						public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export abstract class AbstractCircuitBreaker<T>  extends org.apache.commons.lang3.concurrent.CircuitBreaker<any> {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.AbstractCircuitBreaker<any>>;
						public static PROPERTY_NAME: string;
						public state: java.util.concurrent.atomic.AtomicReference<org.apache.commons.lang3.concurrent.AbstractCircuitBreaker.State>;
						public isClosed(): boolean;
						public addChangeListener(listener: java.beans.PropertyChangeListener): void;
						public constructor();
						public close(): void;
						public checkState(): boolean;
						public changeState(newState: org.apache.commons.lang3.concurrent.AbstractCircuitBreaker.State): void;
						public open(): void;
						public isOpen(): boolean;
						public removeChangeListener(listener: java.beans.PropertyChangeListener): void;
						public incrementAndCheckState(param0: any): boolean;
						public static isOpen(state: org.apache.commons.lang3.concurrent.AbstractCircuitBreaker.State): boolean;
					}
					export module AbstractCircuitBreaker {
						export abstract class State {
							public static class: java.lang.Class<org.apache.commons.lang3.concurrent.AbstractCircuitBreaker.State>;
							public static CLOSED: org.apache.commons.lang3.concurrent.AbstractCircuitBreaker.State;
							public static OPEN: org.apache.commons.lang3.concurrent.AbstractCircuitBreaker.State;
							public static values(): org.apache.commons.lang3.concurrent.AbstractCircuitBreaker.State[];
							public static valueOf(name: string): org.apache.commons.lang3.concurrent.AbstractCircuitBreaker.State;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public oppositeState(): org.apache.commons.lang3.concurrent.AbstractCircuitBreaker.State;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export abstract class AbstractFutureProxy<V>  extends java.util.concurrent.Future<any> {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.AbstractFutureProxy<any>>;
						public constructor(future: java.util.concurrent.Future<any>);
						public cancel(mayInterruptIfRunning: boolean): boolean;
						public isDone(): boolean;
						public getFuture(): java.util.concurrent.Future<any>;
						public isCancelled(): boolean;
						public cancel(param0: boolean): boolean;
						public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
						public get(): any;
						public get(timeout: number, param1: java.util.concurrent.TimeUnit): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export abstract class AtomicInitializer<T>  extends org.apache.commons.lang3.concurrent.ConcurrentInitializer<any> {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.AtomicInitializer<any>>;
						public initialize(): any;
						public constructor();
						public get(): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export abstract class AtomicSafeInitializer<T>  extends org.apache.commons.lang3.concurrent.ConcurrentInitializer<any> {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.AtomicSafeInitializer<any>>;
						public initialize(): any;
						public constructor();
						public get(): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export abstract class BackgroundInitializer<T>  extends org.apache.commons.lang3.concurrent.ConcurrentInitializer<any> {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.BackgroundInitializer<any>>;
						public initialize(): any;
						public constructor();
						public getActiveExecutor(): java.util.concurrent.ExecutorService;
						public constructor(exec: java.util.concurrent.ExecutorService);
						public start(): boolean;
						public getFuture(): java.util.concurrent.Future<any>;
						public isStarted(): boolean;
						public setExternalExecutor(externalExecutor: java.util.concurrent.ExecutorService): void;
						public getExternalExecutor(): java.util.concurrent.ExecutorService;
						public get(): any;
						public getTaskCount(): number;
					}
					export module BackgroundInitializer {
						export class InitializationTask extends java.util.concurrent.Callable<any> {
							public static class: java.lang.Class<org.apache.commons.lang3.concurrent.BackgroundInitializer.InitializationTask>;
							public call(): any;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class BasicThreadFactory extends java.lang.Object implements java.util.concurrent.ThreadFactory {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.BasicThreadFactory>;
						public getWrappedFactory(): java.util.concurrent.ThreadFactory;
						public getDaemonFlag(): java.lang.Boolean;
						public getNamingPattern(): string;
						public getUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
						public getPriority(): java.lang.Integer;
						public newThread(runnable: java.lang.Runnable): java.lang.Thread;
						public getThreadCount(): number;
						public newThread(param0: java.lang.Runnable): java.lang.Thread;
					}
					export module BasicThreadFactory {
						export class Builder extends org.apache.commons.lang3.builder.Builder<org.apache.commons.lang3.concurrent.BasicThreadFactory> {
							public static class: java.lang.Class<org.apache.commons.lang3.concurrent.BasicThreadFactory.Builder>;
							public constructor();
							public daemon(daemon: boolean): org.apache.commons.lang3.concurrent.BasicThreadFactory.Builder;
							public namingPattern(pattern: string): org.apache.commons.lang3.concurrent.BasicThreadFactory.Builder;
							public uncaughtExceptionHandler(handler: java.lang.Thread.UncaughtExceptionHandler): org.apache.commons.lang3.concurrent.BasicThreadFactory.Builder;
							public build(): org.apache.commons.lang3.concurrent.BasicThreadFactory;
							public build(): any;
							public priority(priority: number): org.apache.commons.lang3.concurrent.BasicThreadFactory.Builder;
							public wrappedFactory(factory: java.util.concurrent.ThreadFactory): org.apache.commons.lang3.concurrent.BasicThreadFactory.Builder;
							public reset(): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class CallableBackgroundInitializer<T>  extends org.apache.commons.lang3.concurrent.BackgroundInitializer<any> {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.CallableBackgroundInitializer<any>>;
						public constructor(call: java.util.concurrent.Callable<any>);
						public initialize(): any;
						public constructor();
						public constructor(exec: java.util.concurrent.ExecutorService);
						public constructor(call: java.util.concurrent.Callable<any>, exec: java.util.concurrent.ExecutorService);
						public get(): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class CircuitBreaker<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.CircuitBreaker<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.concurrent.CircuitBreaker<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isOpen(): boolean;
							isClosed(): boolean;
							checkState(): boolean;
							close(): void;
							open(): void;
							incrementAndCheckState(param0: T): boolean;
						});
						public constructor();
						public isClosed(): boolean;
						public close(): void;
						public checkState(): boolean;
						public open(): void;
						public isOpen(): boolean;
						public incrementAndCheckState(param0: T): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class CircuitBreakingException extends java.lang.RuntimeException {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.CircuitBreakingException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class Computable<I, O>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.Computable<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.concurrent.Computable<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							compute(param0: I): O;
						});
						public constructor();
						public compute(param0: I): O;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class ConcurrentException extends java.lang.Exception {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.ConcurrentException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
						public constructor(msg: string, cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class ConcurrentInitializer<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.ConcurrentInitializer<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.concurrent.ConcurrentInitializer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(): T;
						});
						public constructor();
						public get(): T;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class ConcurrentRuntimeException extends java.lang.RuntimeException {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.ConcurrentRuntimeException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
						public constructor(msg: string, cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class ConcurrentUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.ConcurrentUtils>;
						public static initialize(initializer: org.apache.commons.lang3.concurrent.ConcurrentInitializer<any>): any;
						public static initializeUnchecked(initializer: org.apache.commons.lang3.concurrent.ConcurrentInitializer<any>): any;
						public static createIfAbsent(map: java.util.concurrent.ConcurrentMap<any,any>, key: any, init: org.apache.commons.lang3.concurrent.ConcurrentInitializer<any>): any;
						public static extractCause(ex: java.util.concurrent.ExecutionException): org.apache.commons.lang3.concurrent.ConcurrentException;
						public static handleCauseUnchecked(ex: java.util.concurrent.ExecutionException): void;
						public static createIfAbsentUnchecked(map: java.util.concurrent.ConcurrentMap<any,any>, key: any, init: org.apache.commons.lang3.concurrent.ConcurrentInitializer<any>): any;
						public static putIfAbsent(map: java.util.concurrent.ConcurrentMap<any,any>, key: any, value: any): any;
						public static extractCauseUnchecked(ex: java.util.concurrent.ExecutionException): org.apache.commons.lang3.concurrent.ConcurrentRuntimeException;
						public static constantFuture(value: any): java.util.concurrent.Future<any>;
						public static handleCause(ex: java.util.concurrent.ExecutionException): void;
					}
					export module ConcurrentUtils {
						export class ConstantFuture<T>  extends java.util.concurrent.Future<any> {
							public static class: java.lang.Class<org.apache.commons.lang3.concurrent.ConcurrentUtils.ConstantFuture<any>>;
							public get(): any;
							public get(timeout: number, param1: java.util.concurrent.TimeUnit): any;
							public cancel(param0: boolean): boolean;
							public isDone(): boolean;
							public isCancelled(): boolean;
							public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
							public cancel(mayInterruptIfRunning: boolean): boolean;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class ConstantInitializer<T>  extends org.apache.commons.lang3.concurrent.ConcurrentInitializer<any> {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.ConstantInitializer<any>>;
						public constructor(obj: any);
						public equals(obj: any): boolean;
						public getObject(): any;
						public hashCode(): number;
						public get(): any;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class EventCountCircuitBreaker extends org.apache.commons.lang3.concurrent.AbstractCircuitBreaker<java.lang.Integer> {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.EventCountCircuitBreaker>;
						public constructor();
						public constructor(openingThreshold: number, openingInterval: number, param2: java.util.concurrent.TimeUnit, openingUnit: number, closingThreshold: number, closingInterval: java.util.concurrent.TimeUnit);
						public close(): void;
						public getClosingInterval(): number;
						public open(): void;
						public constructor(threshold: number, checkInterval: number, param2: java.util.concurrent.TimeUnit);
						public getOpeningInterval(): number;
						public incrementAndCheckState(param0: any): boolean;
						public getClosingThreshold(): number;
						public static isOpen(state: org.apache.commons.lang3.concurrent.AbstractCircuitBreaker.State): boolean;
						public incrementAndCheckState(): boolean;
						public isClosed(): boolean;
						public checkState(): boolean;
						public incrementAndCheckState(increment: java.lang.Integer): boolean;
						public getOpeningThreshold(): number;
						public constructor(openingThreshold: number, checkInterval: number, param2: java.util.concurrent.TimeUnit, checkUnit: number);
						public isOpen(): boolean;
					}
					export module EventCountCircuitBreaker {
						export class CheckIntervalData extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.CheckIntervalData>;
							public getCheckIntervalStart(): number;
							public getEventCount(): number;
							public increment(delta: number): org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.CheckIntervalData;
						}
						export abstract class StateStrategy extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.StateStrategy>;
							public fetchCheckInterval(param0: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker): number;
							public isCheckIntervalFinished(breaker: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker, currentData: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.CheckIntervalData, now: number): boolean;
							public isStateTransition(param0: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker, param1: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.CheckIntervalData, param2: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.CheckIntervalData): boolean;
						}
						export class StateStrategyClosed extends org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.StateStrategy {
							public static class: java.lang.Class<org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.StateStrategyClosed>;
							public fetchCheckInterval(param0: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker): number;
							public isStateTransition(breaker: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker, currentData: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.CheckIntervalData, nextData: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.CheckIntervalData): boolean;
							public fetchCheckInterval(breaker: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker): number;
							public isStateTransition(param0: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker, param1: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.CheckIntervalData, param2: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.CheckIntervalData): boolean;
						}
						export class StateStrategyOpen extends org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.StateStrategy {
							public static class: java.lang.Class<org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.StateStrategyOpen>;
							public fetchCheckInterval(param0: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker): number;
							public isStateTransition(breaker: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker, currentData: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.CheckIntervalData, nextData: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.CheckIntervalData): boolean;
							public fetchCheckInterval(breaker: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker): number;
							public isStateTransition(param0: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker, param1: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.CheckIntervalData, param2: org.apache.commons.lang3.concurrent.EventCountCircuitBreaker.CheckIntervalData): boolean;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class FutureTasks extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.FutureTasks>;
						public static run(callable: java.util.concurrent.Callable<any>): java.util.concurrent.FutureTask<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export abstract class LazyInitializer<T>  extends org.apache.commons.lang3.concurrent.ConcurrentInitializer<any> {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.LazyInitializer<any>>;
						public initialize(): any;
						public constructor();
						public get(): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class Memoizer<I, O>  extends org.apache.commons.lang3.concurrent.Computable<any,any> {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.Memoizer<any,any>>;
						public constructor(computable: org.apache.commons.lang3.concurrent.Computable<any,any>, recalculate: boolean);
						public constructor(_function_: any /* any<any,any>*/);
						public compute(arg: any): any;
						public constructor(computable: org.apache.commons.lang3.concurrent.Computable<any,any>);
						public compute(param0: any): any;
						public constructor(_function_: any /* any<any,any>*/, recalculate: boolean);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class MultiBackgroundInitializer extends org.apache.commons.lang3.concurrent.BackgroundInitializer<org.apache.commons.lang3.concurrent.MultiBackgroundInitializer.MultiBackgroundInitializerResults> {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.MultiBackgroundInitializer>;
						public initialize(): any;
						public constructor();
						public constructor(exec: java.util.concurrent.ExecutorService);
						public addInitializer(name: string, backgroundInitializer: org.apache.commons.lang3.concurrent.BackgroundInitializer<any>): void;
						public initialize(): org.apache.commons.lang3.concurrent.MultiBackgroundInitializer.MultiBackgroundInitializerResults;
						public get(): any;
						public getTaskCount(): number;
					}
					export module MultiBackgroundInitializer {
						export class MultiBackgroundInitializerResults extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.lang3.concurrent.MultiBackgroundInitializer.MultiBackgroundInitializerResults>;
							public getResultObject(name: string): any;
							public isSuccessful(): boolean;
							public isException(name: string): boolean;
							public getException(name: string): org.apache.commons.lang3.concurrent.ConcurrentException;
							public getInitializer(name: string): org.apache.commons.lang3.concurrent.BackgroundInitializer<any>;
							public initializerNames(): java.util.Set<string>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class ThresholdCircuitBreaker extends org.apache.commons.lang3.concurrent.AbstractCircuitBreaker<java.lang.Long> {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.ThresholdCircuitBreaker>;
						public isClosed(): boolean;
						public constructor();
						public constructor(threshold: number);
						public close(): void;
						public checkState(): boolean;
						public open(): void;
						public incrementAndCheckState(increment: java.lang.Long): boolean;
						public isOpen(): boolean;
						public incrementAndCheckState(param0: any): boolean;
						public getThreshold(): number;
						public static isOpen(state: org.apache.commons.lang3.concurrent.AbstractCircuitBreaker.State): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class TimedSemaphore extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.TimedSemaphore>;
						public static NO_LIMIT: number;
						public getPeriod(): number;
						public acquire(): void;
						public constructor(service: java.util.concurrent.ScheduledExecutorService, timePeriod: number, param2: java.util.concurrent.TimeUnit, timeUnit: number);
						public getExecutorService(): java.util.concurrent.ScheduledExecutorService;
						public getUnit(): java.util.concurrent.TimeUnit;
						public shutdown(): void;
						public startTimer(): java.util.concurrent.ScheduledFuture<any>;
						public getAverageCallsPerPeriod(): number;
						public isShutdown(): boolean;
						public constructor(timePeriod: number, param1: java.util.concurrent.TimeUnit, timeUnit: number);
						public setLimit(limit: number): void;
						public getAcquireCount(): number;
						public tryAcquire(): boolean;
						public getLastAcquiresPerPeriod(): number;
						public getAvailablePermits(): number;
						public getLimit(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class UncheckedExecutionException extends org.apache.commons.lang3.exception.UncheckedException {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.UncheckedExecutionException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class UncheckedFuture<V>  extends java.util.concurrent.Future<any> {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.UncheckedFuture<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.concurrent.UncheckedFuture<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							map(futures: java.util.Collection<any>): java.util.stream.Stream;
							on(futures: java.util.Collection<any>): java.util.Collection<any>;
							on(future: java.util.concurrent.Future<any>): org.apache.commons.lang3.concurrent.UncheckedFuture<any>;
							get(): any;
							get(param0: number, param1: java.util.concurrent.TimeUnit): any;
							cancel(param0: boolean): boolean;
							isCancelled(): boolean;
							isDone(): boolean;
							get(): any;
							get(param0: number, param1: java.util.concurrent.TimeUnit): any;
						});
						public constructor();
						public isDone(): boolean;
						public isCancelled(): boolean;
						public cancel(param0: boolean): boolean;
						public static on(futures: java.util.Collection<any>): java.util.Collection<any>;
						public static map(futures: java.util.Collection<any>): java.util.stream.Stream;
						public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
						public static on(future: java.util.concurrent.Future<any>): org.apache.commons.lang3.concurrent.UncheckedFuture<any>;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class UncheckedFutureImpl<V>  extends org.apache.commons.lang3.concurrent.AbstractFutureProxy<any> implements org.apache.commons.lang3.concurrent.UncheckedFuture<any>  {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.UncheckedFutureImpl<any>>;
						public cancel(mayInterruptIfRunning: boolean): boolean;
						public isDone(): boolean;
						public isCancelled(): boolean;
						public cancel(param0: boolean): boolean;
						public static on(futures: java.util.Collection<any>): java.util.Collection<any>;
						public static map(futures: java.util.Collection<any>): java.util.stream.Stream;
						public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
						public static on(future: java.util.concurrent.Future<any>): org.apache.commons.lang3.concurrent.UncheckedFuture<any>;
						public get(): any;
						public get(timeout: number, param1: java.util.concurrent.TimeUnit): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export class UncheckedTimeoutException extends org.apache.commons.lang3.exception.UncheckedException {
						public static class: java.lang.Class<org.apache.commons.lang3.concurrent.UncheckedTimeoutException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module concurrent {
					export module locks {
						export class LockingVisitors extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.lang3.concurrent.locks.LockingVisitors>;
							public constructor();
							public static create(object: any, readWriteLock: java.util.concurrent.locks.ReadWriteLock): org.apache.commons.lang3.concurrent.locks.LockingVisitors.ReadWriteLockVisitor<any>;
							public static stampedLockVisitor(object: any): org.apache.commons.lang3.concurrent.locks.LockingVisitors.StampedLockVisitor<any>;
							public static reentrantReadWriteLockVisitor(object: any): org.apache.commons.lang3.concurrent.locks.LockingVisitors.ReadWriteLockVisitor<any>;
						}
						export module LockingVisitors {
							export class LockVisitor<O, L>  extends java.lang.Object {
								public static class: java.lang.Class<org.apache.commons.lang3.concurrent.locks.LockingVisitors.LockVisitor<any,any>>;
								public lockApplyUnlock(lockSupplier: any /* any*/, _function_: org.apache.commons.lang3.function.FailableFunction<any,any,any>): any;
								public acceptReadLocked(consumer: org.apache.commons.lang3.function.FailableConsumer<O,any>): void;
								public getLock(): L;
								public constructor(object: O, lock: L, readLockSupplier: any /* any*/, writeLockSupplier: any /* any*/);
								public acceptWriteLocked(consumer: org.apache.commons.lang3.function.FailableConsumer<O,any>): void;
								public lockAcceptUnlock(lockSupplier: any /* any*/, consumer: org.apache.commons.lang3.function.FailableConsumer<O,any>): void;
								public getObject(): O;
								public applyReadLocked(_function_: org.apache.commons.lang3.function.FailableFunction<any,any,any>): any;
								public applyWriteLocked(_function_: org.apache.commons.lang3.function.FailableFunction<any,any,any>): any;
							}
							export class ReadWriteLockVisitor<O>  extends org.apache.commons.lang3.concurrent.locks.LockingVisitors.LockVisitor<any,java.util.concurrent.locks.ReadWriteLock> {
								public static class: java.lang.Class<org.apache.commons.lang3.concurrent.locks.LockingVisitors.ReadWriteLockVisitor<any>>;
								public constructor(object: any, readWriteLock: java.util.concurrent.locks.ReadWriteLock);
								public constructor(object: any, lock: any, readLockSupplier: any /* any*/, writeLockSupplier: any /* any*/);
							}
							export class StampedLockVisitor<O>  extends org.apache.commons.lang3.concurrent.locks.LockingVisitors.LockVisitor<any,java.util.concurrent.locks.StampedLock> {
								public static class: java.lang.Class<org.apache.commons.lang3.concurrent.locks.LockingVisitors.StampedLockVisitor<any>>;
								public constructor(object: any, lock: any, readLockSupplier: any /* any*/, writeLockSupplier: any /* any*/);
								public constructor(object: any, stampedLock: java.util.concurrent.locks.StampedLock);
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module event {
					export class EventListenerSupport<L>  extends java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.lang3.event.EventListenerSupport<any>>;
						public removeListener(listener: any): void;
						public constructor(listenerInterface: java.lang.Class<any>, classLoader: java.lang.ClassLoader);
						public createInvocationHandler(): java.lang.reflect.InvocationHandler;
						public fire(): any;
						public addListener(listener: any, allowDuplicate: boolean): void;
						public constructor(listenerInterface: java.lang.Class<any>);
						public getListeners(): any[];
						public addListener(listener: any): void;
						public static create(listenerInterface: java.lang.Class<any>): org.apache.commons.lang3.event.EventListenerSupport<any>;
					}
					export module EventListenerSupport {
						export class ProxyInvocationHandler extends java.lang.Object implements java.lang.reflect.InvocationHandler {
							public static class: java.lang.Class<org.apache.commons.lang3.event.EventListenerSupport.ProxyInvocationHandler>;
							public constructor(this$0: org.apache.commons.lang3.event.EventListenerSupport<any>);
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: any[]): any;
							public invoke(unusedProxy: any, method: java.lang.reflect.Method, args: any[]): any;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module event {
					export class EventUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.event.EventUtils>;
						public static bindEventsToMethod(target: any, methodName: string, eventSource: any, listenerType: java.lang.Class<any>, ...eventTypes: string[]): void;
						public constructor();
						public static addEventListener(eventSource: any, listenerType: java.lang.Class<any>, listener: any): void;
					}
					export module EventUtils {
						export class EventBindingInvocationHandler extends java.lang.Object implements java.lang.reflect.InvocationHandler {
							public static class: java.lang.Class<org.apache.commons.lang3.event.EventUtils.EventBindingInvocationHandler>;
							public invoke(param0: any, param1: java.lang.reflect.Method, param2: any[]): any;
							public invoke(proxy: any, method: java.lang.reflect.Method, parameters: any[]): any;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module exception {
					export class CloneFailedException extends java.lang.RuntimeException {
						public static class: java.lang.Class<org.apache.commons.lang3.exception.CloneFailedException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module exception {
					export class ContextedException extends java.lang.Exception implements org.apache.commons.lang3.exception.ExceptionContext {
						public static class: java.lang.Class<org.apache.commons.lang3.exception.ContextedException>;
						public getMessage(): string;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public getFirstContextValue(label: string): any;
						public getContextEntries(): java.util.List<org.apache.commons.lang3.tuple.Pair<string,any>>;
						public getContextValues(param0: string): java.util.List<any>;
						public setContextValue(param0: string, param1: any): org.apache.commons.lang3.exception.ExceptionContext;
						public setContextValue(label: string, value: any): org.apache.commons.lang3.exception.ContextedException;
						public addContextValue(label: string, value: any): org.apache.commons.lang3.exception.ContextedException;
						public addContextValue(param0: string, param1: any): org.apache.commons.lang3.exception.ExceptionContext;
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string, cause: java.lang.Throwable, context: org.apache.commons.lang3.exception.ExceptionContext);
						public getContextValues(label: string): java.util.List<any>;
						public constructor(message: string);
						public getContextLabels(): java.util.Set<string>;
						public getFirstContextValue(param0: string): any;
						public getRawMessage(): string;
						public getFormattedExceptionMessage(baseMessage: string): string;
						public getFormattedExceptionMessage(param0: string): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module exception {
					export class ContextedRuntimeException extends java.lang.RuntimeException implements org.apache.commons.lang3.exception.ExceptionContext {
						public static class: java.lang.Class<org.apache.commons.lang3.exception.ContextedRuntimeException>;
						public getMessage(): string;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public getFirstContextValue(label: string): any;
						public getContextEntries(): java.util.List<org.apache.commons.lang3.tuple.Pair<string,any>>;
						public getContextValues(param0: string): java.util.List<any>;
						public setContextValue(param0: string, param1: any): org.apache.commons.lang3.exception.ExceptionContext;
						public setContextValue(label: string, value: any): org.apache.commons.lang3.exception.ContextedRuntimeException;
						public addContextValue(param0: string, param1: any): org.apache.commons.lang3.exception.ExceptionContext;
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string, cause: java.lang.Throwable, context: org.apache.commons.lang3.exception.ExceptionContext);
						public getContextValues(label: string): java.util.List<any>;
						public constructor(message: string);
						public getContextLabels(): java.util.Set<string>;
						public getFirstContextValue(param0: string): any;
						public getRawMessage(): string;
						public addContextValue(label: string, value: any): org.apache.commons.lang3.exception.ContextedRuntimeException;
						public getFormattedExceptionMessage(baseMessage: string): string;
						public getFormattedExceptionMessage(param0: string): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module exception {
					export class DefaultExceptionContext extends java.lang.Object implements org.apache.commons.lang3.exception.ExceptionContext, java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.lang3.exception.DefaultExceptionContext>;
						public constructor();
						public getFirstContextValue(label: string): any;
						public setContextValue(label: string, value: any): org.apache.commons.lang3.exception.DefaultExceptionContext;
						public getContextEntries(): java.util.List<org.apache.commons.lang3.tuple.Pair<string,any>>;
						public getContextValues(param0: string): java.util.List<any>;
						public setContextValue(param0: string, param1: any): org.apache.commons.lang3.exception.ExceptionContext;
						public addContextValue(param0: string, param1: any): org.apache.commons.lang3.exception.ExceptionContext;
						public getContextValues(label: string): java.util.List<any>;
						public getContextLabels(): java.util.Set<string>;
						public getFirstContextValue(param0: string): any;
						public addContextValue(label: string, value: any): org.apache.commons.lang3.exception.DefaultExceptionContext;
						public getFormattedExceptionMessage(baseMessage: string): string;
						public getFormattedExceptionMessage(param0: string): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module exception {
					export class ExceptionContext extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.exception.ExceptionContext>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.exception.ExceptionContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addContextValue(param0: string, param1: any): org.apache.commons.lang3.exception.ExceptionContext;
							getContextEntries(): java.util.List<org.apache.commons.lang3.tuple.Pair<string,any>>;
							getContextLabels(): java.util.Set<string>;
							getContextValues(param0: string): java.util.List<any>;
							getFirstContextValue(param0: string): any;
							getFormattedExceptionMessage(param0: string): string;
							setContextValue(param0: string, param1: any): org.apache.commons.lang3.exception.ExceptionContext;
						});
						public constructor();
						public addContextValue(param0: string, param1: any): org.apache.commons.lang3.exception.ExceptionContext;
						public getContextLabels(): java.util.Set<string>;
						public getFirstContextValue(param0: string): any;
						public getFormattedExceptionMessage(param0: string): string;
						public getContextEntries(): java.util.List<org.apache.commons.lang3.tuple.Pair<string,any>>;
						public getContextValues(param0: string): java.util.List<any>;
						public setContextValue(param0: string, param1: any): org.apache.commons.lang3.exception.ExceptionContext;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module exception {
					export class ExceptionUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.exception.ExceptionUtils>;
						public static indexOfType(throwable: java.lang.Throwable, type: java.lang.Class<any>, fromIndex: number): number;
						public static isUnchecked(throwable: java.lang.Throwable): boolean;
						public static stream(throwable: java.lang.Throwable): java.util.stream.Stream<java.lang.Throwable>;
						public static getThrowableList(throwable: java.lang.Throwable): java.util.List<java.lang.Throwable>;
						public static hasCause(chain: java.lang.Throwable, type: java.lang.Class<any>): boolean;
						public static removeCommonFrames(causeFrames: java.util.List<string>, wrapperFrames: java.util.List<string>): void;
						public static throwUnchecked(throwable: any): any;
						/** @deprecated */
						public constructor();
						public static indexOfThrowable(throwable: java.lang.Throwable, clazz: java.lang.Class<any>): number;
						public static getRootCause(throwable: java.lang.Throwable): java.lang.Throwable;
						public static wrapAndThrow(throwable: java.lang.Throwable): any;
						public static rethrow(throwable: java.lang.Throwable): any;
						public static forEach(throwable: java.lang.Throwable, consumer: any /* any*/): void;
						public static getStackTrace(throwable: java.lang.Throwable): string;
						public static throwableOfType(throwable: java.lang.Throwable, type: java.lang.Class<any>): java.lang.Throwable;
						/** @deprecated */
						public static getCause(throwable: java.lang.Throwable): java.lang.Throwable;
						public static getRootCauseStackTraceList(throwable: java.lang.Throwable): java.util.List<string>;
						public static throwableOfType(throwable: java.lang.Throwable, type: java.lang.Class<any>, fromIndex: number): java.lang.Throwable;
						public static printRootCauseStackTrace(throwable: java.lang.Throwable, printStream: java.io.PrintStream): void;
						public static indexOfType(throwable: java.lang.Throwable, type: java.lang.Class<any>): number;
						public static getThrowables(throwable: java.lang.Throwable): java.lang.Throwable[];
						/** @deprecated */
						public static getCause(throwable: java.lang.Throwable, methodNames: string[]): java.lang.Throwable;
						/** @deprecated */
						public static getDefaultCauseMethodNames(): string[];
						public static isChecked(throwable: java.lang.Throwable): boolean;
						public static getMessage(th: java.lang.Throwable): string;
						public static getStackFrames(throwable: java.lang.Throwable): string[];
						public static indexOfThrowable(throwable: java.lang.Throwable, clazz: java.lang.Class<any>, fromIndex: number): number;
						public static printRootCauseStackTrace(throwable: java.lang.Throwable): void;
						public static getThrowableCount(throwable: java.lang.Throwable): number;
						public static throwableOfThrowable(throwable: java.lang.Throwable, clazz: java.lang.Class<any>, fromIndex: number): java.lang.Throwable;
						public static getRootCauseStackTrace(throwable: java.lang.Throwable): string[];
						public static throwableOfThrowable(throwable: java.lang.Throwable, clazz: java.lang.Class<any>): java.lang.Throwable;
						public static getRootCauseMessage(throwable: java.lang.Throwable): string;
						public static printRootCauseStackTrace(throwable: java.lang.Throwable, printWriter: java.io.PrintWriter): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module exception {
					export class UncheckedException extends java.lang.RuntimeException {
						public static class: java.lang.Class<org.apache.commons.lang3.exception.UncheckedException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module exception {
					export class UncheckedIllegalAccessException extends org.apache.commons.lang3.exception.UncheckedReflectiveOperationException {
						public static class: java.lang.Class<org.apache.commons.lang3.exception.UncheckedIllegalAccessException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module exception {
					export class UncheckedInterruptedException extends org.apache.commons.lang3.exception.UncheckedException {
						public static class: java.lang.Class<org.apache.commons.lang3.exception.UncheckedInterruptedException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module exception {
					export class UncheckedReflectiveOperationException extends org.apache.commons.lang3.exception.UncheckedException {
						public static class: java.lang.Class<org.apache.commons.lang3.exception.UncheckedReflectiveOperationException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class BooleanConsumer extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.BooleanConsumer>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.BooleanConsumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.BooleanConsumer;
							accept(param0: boolean): void;
							andThen(after: org.apache.commons.lang3.function.BooleanConsumer): org.apache.commons.lang3.function.BooleanConsumer;
							lambda$andThen$1(after: org.apache.commons.lang3.function.BooleanConsumer, t: boolean): void;
							lambda$static$0(t: boolean): void;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.BooleanConsumer;
						public static nop(): org.apache.commons.lang3.function.BooleanConsumer;
						public accept(param0: boolean): void;
						public andThen(after: org.apache.commons.lang3.function.BooleanConsumer): org.apache.commons.lang3.function.BooleanConsumer;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class Consumers extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.Consumers>;
						public static nop(): any /* any*/;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class Failable extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.Failable>;
						public static asSupplier(supplier: org.apache.commons.lang3.function.FailableSupplier<any,any>): any /* any*/;
						public static stream(stream: java.util.stream.Stream): org.apache.commons.lang3.stream.Streams.FailableStream<any>;
						public static rethrow(throwable: java.lang.Throwable): java.lang.RuntimeException;
						public static asBiFunction(_function_: org.apache.commons.lang3.function.FailableBiFunction<any,any,any,any>): any /* any*/;
						public static test(predicate: org.apache.commons.lang3.function.FailablePredicate<any,any>, object: any): boolean;
						public static apply(_function_: org.apache.commons.lang3.function.FailableBiFunction<any,any,any,any>, input1: any, input2: any): any;
						public static getAsShort(supplier: org.apache.commons.lang3.function.FailableShortSupplier<any>): number;
						public static asBiPredicate(predicate: org.apache.commons.lang3.function.FailableBiPredicate<any,any,any>): any /* any*/;
						public static asFunction(_function_: org.apache.commons.lang3.function.FailableFunction<any,any,any>): any /* any*/;
						public static get(supplier: org.apache.commons.lang3.function.FailableSupplier<any,any>): any;
						public static accept(consumer: org.apache.commons.lang3.function.FailableIntConsumer<any>, value: number): void;
						public static getAsBoolean(supplier: org.apache.commons.lang3.function.FailableBooleanSupplier<any>): boolean;
						public static tryWithResources(action: org.apache.commons.lang3.function.FailableRunnable<any>, ...resources: org.apache.commons.lang3.function.FailableRunnable<any>[]): void;
						public static accept(consumer: org.apache.commons.lang3.function.FailableConsumer<any,any>, object: any): void;
						public static asCallable(callable: org.apache.commons.lang3.function.FailableCallable<any,any>): java.util.concurrent.Callable<any>;
						public static stream(collection: java.util.Collection<any>): org.apache.commons.lang3.stream.Streams.FailableStream<any>;
						public static applyAsDouble(_function_: org.apache.commons.lang3.function.FailableDoubleBinaryOperator<any>, left: number, param2: number): number;
						public static tryWithResources(action: org.apache.commons.lang3.function.FailableRunnable<any>, errorHandler: org.apache.commons.lang3.function.FailableConsumer<java.lang.Throwable,any>, ...resources: org.apache.commons.lang3.function.FailableRunnable<any>[]): void;
						public static getAsLong(supplier: org.apache.commons.lang3.function.FailableLongSupplier<any>): number;
						public static apply(_function_: org.apache.commons.lang3.function.FailableFunction<any,any,any>, input: any): any;
						public static call(callable: org.apache.commons.lang3.function.FailableCallable<any,any>): any;
						public static asRunnable(runnable: org.apache.commons.lang3.function.FailableRunnable<any>): java.lang.Runnable;
						public static run(runnable: org.apache.commons.lang3.function.FailableRunnable<any>): void;
						public static accept(consumer: org.apache.commons.lang3.function.FailableBiConsumer<any,any,any>, object1: any, object2: any): void;
						public static asBiConsumer(consumer: org.apache.commons.lang3.function.FailableBiConsumer<any,any,any>): any /* any*/;
						public static asPredicate(predicate: org.apache.commons.lang3.function.FailablePredicate<any,any>): any /* any*/;
						public static accept(consumer: org.apache.commons.lang3.function.FailableLongConsumer<any>, value: number): void;
						public static accept(consumer: org.apache.commons.lang3.function.FailableDoubleConsumer<any>, value: number): void;
						public static asConsumer(consumer: org.apache.commons.lang3.function.FailableConsumer<any,any>): any /* any*/;
						public static getAsInt(supplier: org.apache.commons.lang3.function.FailableIntSupplier<any>): number;
						public static getAsDouble(supplier: org.apache.commons.lang3.function.FailableDoubleSupplier<any>): number;
						public static test(predicate: org.apache.commons.lang3.function.FailableBiPredicate<any,any,any>, object1: any, object2: any): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableBiConsumer<T, U, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableBiConsumer<any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableBiConsumer<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableBiConsumer<any,any,any>;
							accept(param0: T, param1: U): void;
							andThen(after: org.apache.commons.lang3.function.FailableBiConsumer<any,any,E>): org.apache.commons.lang3.function.FailableBiConsumer<T,U,E>;
							lambda$andThen$1(after: org.apache.commons.lang3.function.FailableBiConsumer<any,any,any>, t: any, u: any): void;
							lambda$static$0(t: any, u: any): void;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableBiConsumer<any,any,any>;
						public static nop(): org.apache.commons.lang3.function.FailableBiConsumer<any,any,any>;
						public accept(param0: T, param1: U): void;
						public andThen(after: org.apache.commons.lang3.function.FailableBiConsumer<any,any,E>): org.apache.commons.lang3.function.FailableBiConsumer<T,U,E>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableBiFunction<T, U, R, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableBiFunction<any,any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableBiFunction<any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableBiFunction<any,any,any,any>;
							andThen(after: org.apache.commons.lang3.function.FailableFunction<any,any,any>): org.apache.commons.lang3.function.FailableBiFunction<any,any,any,any>;
							apply(param0: T, param1: U): R;
							lambda$andThen$1(after: org.apache.commons.lang3.function.FailableFunction<any,any,any>, t: any, u: any): any;
							lambda$static$0(t: any, u: any): any;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableBiFunction<any,any,any,any>;
						public andThen(after: org.apache.commons.lang3.function.FailableFunction<any,any,any>): org.apache.commons.lang3.function.FailableBiFunction<any,any,any,any>;
						public apply(param0: T, param1: U): R;
						public static nop(): org.apache.commons.lang3.function.FailableBiFunction<any,any,any,any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableBiPredicate<T, U, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableBiPredicate<any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableBiPredicate<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							falsePredicate(): org.apache.commons.lang3.function.FailableBiPredicate<any,any,any>;
							truePredicate(): org.apache.commons.lang3.function.FailableBiPredicate<any,any,any>;
							and(other: org.apache.commons.lang3.function.FailableBiPredicate<any,any,E>): org.apache.commons.lang3.function.FailableBiPredicate<T,U,E>;
							negate(): org.apache.commons.lang3.function.FailableBiPredicate<T,U,E>;
							or(other: org.apache.commons.lang3.function.FailableBiPredicate<any,any,E>): org.apache.commons.lang3.function.FailableBiPredicate<T,U,E>;
							test(param0: T, param1: U): boolean;
							lambda$or$4(other: org.apache.commons.lang3.function.FailableBiPredicate<any,any,any>, t: any, u: any): boolean;
							lambda$negate$3(t: any, u: any): boolean;
							lambda$and$2(other: org.apache.commons.lang3.function.FailableBiPredicate<any,any,any>, t: any, u: any): boolean;
							lambda$static$1(t: any, u: any): boolean;
							lambda$static$0(t: any, u: any): boolean;
							"<clinit>"(): void;
						});
						public constructor();
						public static FALSE: org.apache.commons.lang3.function.FailableBiPredicate<any,any,any>;
						public static TRUE: org.apache.commons.lang3.function.FailableBiPredicate<any,any,any>;
						public static falsePredicate(): org.apache.commons.lang3.function.FailableBiPredicate<any,any,any>;
						public static truePredicate(): org.apache.commons.lang3.function.FailableBiPredicate<any,any,any>;
						public and(other: org.apache.commons.lang3.function.FailableBiPredicate<any,any,E>): org.apache.commons.lang3.function.FailableBiPredicate<T,U,E>;
						public test(param0: T, param1: U): boolean;
						public negate(): org.apache.commons.lang3.function.FailableBiPredicate<T,U,E>;
						public or(other: org.apache.commons.lang3.function.FailableBiPredicate<any,any,E>): org.apache.commons.lang3.function.FailableBiPredicate<T,U,E>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableBooleanSupplier<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableBooleanSupplier<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableBooleanSupplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAsBoolean(): boolean;
						});
						public constructor();
						public getAsBoolean(): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableCallable<R, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableCallable<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableCallable<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							call(): R;
						});
						public constructor();
						public call(): R;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableConsumer<T, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableConsumer<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableConsumer<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableConsumer<any,any>;
							accept(param0: T): void;
							andThen(after: org.apache.commons.lang3.function.FailableConsumer<any,E>): org.apache.commons.lang3.function.FailableConsumer<T,E>;
							lambda$andThen$0(after: org.apache.commons.lang3.function.FailableConsumer<any,any>, t: any): void;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableConsumer<any,any>;
						public accept(param0: T): void;
						public static nop(): org.apache.commons.lang3.function.FailableConsumer<any,any>;
						public andThen(after: org.apache.commons.lang3.function.FailableConsumer<any,E>): org.apache.commons.lang3.function.FailableConsumer<T,E>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableDoubleBinaryOperator<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableDoubleBinaryOperator<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableDoubleBinaryOperator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							applyAsDouble(param0: number, param1: number): number;
						});
						public constructor();
						public applyAsDouble(param0: number, param1: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableDoubleConsumer<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableDoubleConsumer<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableDoubleConsumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableDoubleConsumer<any>;
							accept(param0: number): void;
							andThen(after: org.apache.commons.lang3.function.FailableDoubleConsumer<E>): org.apache.commons.lang3.function.FailableDoubleConsumer<E>;
							lambda$andThen$1(after: org.apache.commons.lang3.function.FailableDoubleConsumer<any>, t: number): void;
							lambda$static$0(t: number): void;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableDoubleConsumer<any>;
						public andThen(after: org.apache.commons.lang3.function.FailableDoubleConsumer<E>): org.apache.commons.lang3.function.FailableDoubleConsumer<E>;
						public static nop(): org.apache.commons.lang3.function.FailableDoubleConsumer<any>;
						public accept(param0: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableDoubleFunction<R, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableDoubleFunction<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableDoubleFunction<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableDoubleFunction<any,any>;
							apply(param0: number): R;
							lambda$static$0(t: number): any;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableDoubleFunction<any,any>;
						public apply(param0: number): R;
						public static nop(): org.apache.commons.lang3.function.FailableDoubleFunction<any,any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableDoublePredicate<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableDoublePredicate<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableDoublePredicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							falsePredicate(): org.apache.commons.lang3.function.FailableDoublePredicate<any>;
							truePredicate(): org.apache.commons.lang3.function.FailableDoublePredicate<any>;
							and(other: org.apache.commons.lang3.function.FailableDoublePredicate<E>): org.apache.commons.lang3.function.FailableDoublePredicate<E>;
							negate(): org.apache.commons.lang3.function.FailableDoublePredicate<E>;
							or(other: org.apache.commons.lang3.function.FailableDoublePredicate<E>): org.apache.commons.lang3.function.FailableDoublePredicate<E>;
							test(param0: number): boolean;
							lambda$or$4(other: org.apache.commons.lang3.function.FailableDoublePredicate<any>, t: number): boolean;
							lambda$negate$3(t: number): boolean;
							lambda$and$2(other: org.apache.commons.lang3.function.FailableDoublePredicate<any>, t: number): boolean;
							lambda$static$1(t: number): boolean;
							lambda$static$0(t: number): boolean;
							"<clinit>"(): void;
						});
						public constructor();
						public static TRUE: org.apache.commons.lang3.function.FailableDoublePredicate<any>;
						public static FALSE: org.apache.commons.lang3.function.FailableDoublePredicate<any>;
						public static truePredicate(): org.apache.commons.lang3.function.FailableDoublePredicate<any>;
						public and(other: org.apache.commons.lang3.function.FailableDoublePredicate<E>): org.apache.commons.lang3.function.FailableDoublePredicate<E>;
						public static falsePredicate(): org.apache.commons.lang3.function.FailableDoublePredicate<any>;
						public test(param0: number): boolean;
						public negate(): org.apache.commons.lang3.function.FailableDoublePredicate<E>;
						public or(other: org.apache.commons.lang3.function.FailableDoublePredicate<E>): org.apache.commons.lang3.function.FailableDoublePredicate<E>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableDoubleSupplier<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableDoubleSupplier<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableDoubleSupplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAsDouble(): number;
						});
						public constructor();
						public getAsDouble(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableDoubleToIntFunction<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableDoubleToIntFunction<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableDoubleToIntFunction<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableDoubleToIntFunction<any>;
							applyAsInt(param0: number): number;
							lambda$static$0(t: number): number;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableDoubleToIntFunction<any>;
						public static nop(): org.apache.commons.lang3.function.FailableDoubleToIntFunction<any>;
						public applyAsInt(param0: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableDoubleToLongFunction<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableDoubleToLongFunction<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableDoubleToLongFunction<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableDoubleToLongFunction<any>;
							applyAsLong(param0: number): number;
							lambda$static$0(t: number): number;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableDoubleToLongFunction<any>;
						public static nop(): org.apache.commons.lang3.function.FailableDoubleToLongFunction<any>;
						public applyAsLong(param0: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableDoubleUnaryOperator<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableDoubleUnaryOperator<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableDoubleUnaryOperator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							identity(): org.apache.commons.lang3.function.FailableDoubleUnaryOperator<any>;
							nop(): org.apache.commons.lang3.function.FailableDoubleUnaryOperator<any>;
							andThen(after: org.apache.commons.lang3.function.FailableDoubleUnaryOperator<E>): org.apache.commons.lang3.function.FailableDoubleUnaryOperator<E>;
							applyAsDouble(param0: number): number;
							compose(before: org.apache.commons.lang3.function.FailableDoubleUnaryOperator<E>): org.apache.commons.lang3.function.FailableDoubleUnaryOperator<E>;
							lambda$compose$3(before: org.apache.commons.lang3.function.FailableDoubleUnaryOperator<any>, v: number): number;
							lambda$andThen$2(after: org.apache.commons.lang3.function.FailableDoubleUnaryOperator<any>, t: number): number;
							lambda$identity$1(t: number): number;
							lambda$static$0(t: number): number;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableDoubleUnaryOperator<any>;
						public compose(before: org.apache.commons.lang3.function.FailableDoubleUnaryOperator<E>): org.apache.commons.lang3.function.FailableDoubleUnaryOperator<E>;
						public static identity(): org.apache.commons.lang3.function.FailableDoubleUnaryOperator<any>;
						public andThen(after: org.apache.commons.lang3.function.FailableDoubleUnaryOperator<E>): org.apache.commons.lang3.function.FailableDoubleUnaryOperator<E>;
						public applyAsDouble(param0: number): number;
						public static nop(): org.apache.commons.lang3.function.FailableDoubleUnaryOperator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableFunction<T, R, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableFunction<any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableFunction<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							identity(): org.apache.commons.lang3.function.FailableFunction<any,any,any>;
							nop(): org.apache.commons.lang3.function.FailableFunction<any,any,any>;
							andThen(after: org.apache.commons.lang3.function.FailableFunction<any,any,any>): org.apache.commons.lang3.function.FailableFunction<any,any,any>;
							apply(param0: T): R;
							compose(before: org.apache.commons.lang3.function.FailableFunction<any,any,any>): org.apache.commons.lang3.function.FailableFunction<any,any,any>;
							lambda$compose$3(before: org.apache.commons.lang3.function.FailableFunction<any,any,any>, v: any): any;
							lambda$andThen$2(after: org.apache.commons.lang3.function.FailableFunction<any,any,any>, t: any): any;
							lambda$identity$1(t: any): any;
							lambda$static$0(t: any): any;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableFunction<any,any,any>;
						public static identity(): org.apache.commons.lang3.function.FailableFunction<any,any,any>;
						public apply(param0: T): R;
						public compose(before: org.apache.commons.lang3.function.FailableFunction<any,any,any>): org.apache.commons.lang3.function.FailableFunction<any,any,any>;
						public static nop(): org.apache.commons.lang3.function.FailableFunction<any,any,any>;
						public andThen(after: org.apache.commons.lang3.function.FailableFunction<any,any,any>): org.apache.commons.lang3.function.FailableFunction<any,any,any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableIntBinaryOperator<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableIntBinaryOperator<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableIntBinaryOperator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							applyAsInt(param0: number, param1: number): number;
						});
						public constructor();
						public applyAsInt(param0: number, param1: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableIntConsumer<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableIntConsumer<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableIntConsumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableIntConsumer<any>;
							accept(param0: number): void;
							andThen(after: org.apache.commons.lang3.function.FailableIntConsumer<E>): org.apache.commons.lang3.function.FailableIntConsumer<E>;
							lambda$andThen$1(after: org.apache.commons.lang3.function.FailableIntConsumer<any>, t: number): void;
							lambda$static$0(t: number): void;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableIntConsumer<any>;
						public accept(param0: number): void;
						public andThen(after: org.apache.commons.lang3.function.FailableIntConsumer<E>): org.apache.commons.lang3.function.FailableIntConsumer<E>;
						public static nop(): org.apache.commons.lang3.function.FailableIntConsumer<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableIntFunction<R, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableIntFunction<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableIntFunction<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableIntFunction<any,any>;
							apply(param0: number): R;
							lambda$static$0(t: number): any;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableIntFunction<any,any>;
						public static nop(): org.apache.commons.lang3.function.FailableIntFunction<any,any>;
						public apply(param0: number): R;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableIntPredicate<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableIntPredicate<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableIntPredicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							falsePredicate(): org.apache.commons.lang3.function.FailableIntPredicate<any>;
							truePredicate(): org.apache.commons.lang3.function.FailableIntPredicate<any>;
							and(other: org.apache.commons.lang3.function.FailableIntPredicate<E>): org.apache.commons.lang3.function.FailableIntPredicate<E>;
							negate(): org.apache.commons.lang3.function.FailableIntPredicate<E>;
							or(other: org.apache.commons.lang3.function.FailableIntPredicate<E>): org.apache.commons.lang3.function.FailableIntPredicate<E>;
							test(param0: number): boolean;
							lambda$or$4(other: org.apache.commons.lang3.function.FailableIntPredicate<any>, t: number): boolean;
							lambda$negate$3(t: number): boolean;
							lambda$and$2(other: org.apache.commons.lang3.function.FailableIntPredicate<any>, t: number): boolean;
							lambda$static$1(t: number): boolean;
							lambda$static$0(t: number): boolean;
							"<clinit>"(): void;
						});
						public constructor();
						public static FALSE: org.apache.commons.lang3.function.FailableIntPredicate<any>;
						public static TRUE: org.apache.commons.lang3.function.FailableIntPredicate<any>;
						public or(other: org.apache.commons.lang3.function.FailableIntPredicate<E>): org.apache.commons.lang3.function.FailableIntPredicate<E>;
						public static truePredicate(): org.apache.commons.lang3.function.FailableIntPredicate<any>;
						public static falsePredicate(): org.apache.commons.lang3.function.FailableIntPredicate<any>;
						public and(other: org.apache.commons.lang3.function.FailableIntPredicate<E>): org.apache.commons.lang3.function.FailableIntPredicate<E>;
						public test(param0: number): boolean;
						public negate(): org.apache.commons.lang3.function.FailableIntPredicate<E>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableIntSupplier<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableIntSupplier<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableIntSupplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAsInt(): number;
						});
						public constructor();
						public getAsInt(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableIntToDoubleFunction<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableIntToDoubleFunction<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableIntToDoubleFunction<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableIntToDoubleFunction<any>;
							applyAsDouble(param0: number): number;
							lambda$static$0(t: number): number;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableIntToDoubleFunction<any>;
						public static nop(): org.apache.commons.lang3.function.FailableIntToDoubleFunction<any>;
						public applyAsDouble(param0: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableIntToLongFunction<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableIntToLongFunction<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableIntToLongFunction<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableIntToLongFunction<any>;
							applyAsLong(param0: number): number;
							lambda$static$0(t: number): number;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableIntToLongFunction<any>;
						public static nop(): org.apache.commons.lang3.function.FailableIntToLongFunction<any>;
						public applyAsLong(param0: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableIntUnaryOperator<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableIntUnaryOperator<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableIntUnaryOperator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							identity(): org.apache.commons.lang3.function.FailableIntUnaryOperator<any>;
							nop(): org.apache.commons.lang3.function.FailableIntUnaryOperator<any>;
							andThen(after: org.apache.commons.lang3.function.FailableIntUnaryOperator<E>): org.apache.commons.lang3.function.FailableIntUnaryOperator<E>;
							applyAsInt(param0: number): number;
							compose(before: org.apache.commons.lang3.function.FailableIntUnaryOperator<E>): org.apache.commons.lang3.function.FailableIntUnaryOperator<E>;
							lambda$compose$3(before: org.apache.commons.lang3.function.FailableIntUnaryOperator<any>, v: number): number;
							lambda$andThen$2(after: org.apache.commons.lang3.function.FailableIntUnaryOperator<any>, t: number): number;
							lambda$identity$1(t: number): number;
							lambda$static$0(t: number): number;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableIntUnaryOperator<any>;
						public static nop(): org.apache.commons.lang3.function.FailableIntUnaryOperator<any>;
						public compose(before: org.apache.commons.lang3.function.FailableIntUnaryOperator<E>): org.apache.commons.lang3.function.FailableIntUnaryOperator<E>;
						public andThen(after: org.apache.commons.lang3.function.FailableIntUnaryOperator<E>): org.apache.commons.lang3.function.FailableIntUnaryOperator<E>;
						public applyAsInt(param0: number): number;
						public static identity(): org.apache.commons.lang3.function.FailableIntUnaryOperator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableLongBinaryOperator<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableLongBinaryOperator<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableLongBinaryOperator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							applyAsLong(param0: number, param1: number): number;
						});
						public constructor();
						public applyAsLong(param0: number, param1: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableLongConsumer<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableLongConsumer<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableLongConsumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableLongConsumer<any>;
							accept(param0: number): void;
							andThen(after: org.apache.commons.lang3.function.FailableLongConsumer<E>): org.apache.commons.lang3.function.FailableLongConsumer<E>;
							lambda$andThen$1(after: org.apache.commons.lang3.function.FailableLongConsumer<any>, t: number): void;
							lambda$static$0(t: number): void;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableLongConsumer<any>;
						public static nop(): org.apache.commons.lang3.function.FailableLongConsumer<any>;
						public andThen(after: org.apache.commons.lang3.function.FailableLongConsumer<E>): org.apache.commons.lang3.function.FailableLongConsumer<E>;
						public accept(param0: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableLongFunction<R, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableLongFunction<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableLongFunction<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableLongFunction<any,any>;
							apply(param0: number): R;
							lambda$static$0(t: number): any;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableLongFunction<any,any>;
						public apply(param0: number): R;
						public static nop(): org.apache.commons.lang3.function.FailableLongFunction<any,any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableLongPredicate<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableLongPredicate<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableLongPredicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							falsePredicate(): org.apache.commons.lang3.function.FailableLongPredicate<any>;
							truePredicate(): org.apache.commons.lang3.function.FailableLongPredicate<any>;
							and(other: org.apache.commons.lang3.function.FailableLongPredicate<E>): org.apache.commons.lang3.function.FailableLongPredicate<E>;
							negate(): org.apache.commons.lang3.function.FailableLongPredicate<E>;
							or(other: org.apache.commons.lang3.function.FailableLongPredicate<E>): org.apache.commons.lang3.function.FailableLongPredicate<E>;
							test(param0: number): boolean;
							lambda$or$4(other: org.apache.commons.lang3.function.FailableLongPredicate<any>, t: number): boolean;
							lambda$negate$3(t: number): boolean;
							lambda$and$2(other: org.apache.commons.lang3.function.FailableLongPredicate<any>, t: number): boolean;
							lambda$static$1(t: number): boolean;
							lambda$static$0(t: number): boolean;
							"<clinit>"(): void;
						});
						public constructor();
						public static FALSE: org.apache.commons.lang3.function.FailableLongPredicate<any>;
						public static TRUE: org.apache.commons.lang3.function.FailableLongPredicate<any>;
						public and(other: org.apache.commons.lang3.function.FailableLongPredicate<E>): org.apache.commons.lang3.function.FailableLongPredicate<E>;
						public negate(): org.apache.commons.lang3.function.FailableLongPredicate<E>;
						public static falsePredicate(): org.apache.commons.lang3.function.FailableLongPredicate<any>;
						public static truePredicate(): org.apache.commons.lang3.function.FailableLongPredicate<any>;
						public test(param0: number): boolean;
						public or(other: org.apache.commons.lang3.function.FailableLongPredicate<E>): org.apache.commons.lang3.function.FailableLongPredicate<E>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableLongSupplier<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableLongSupplier<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableLongSupplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAsLong(): number;
						});
						public constructor();
						public getAsLong(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableLongToDoubleFunction<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableLongToDoubleFunction<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableLongToDoubleFunction<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableLongToDoubleFunction<any>;
							applyAsDouble(param0: number): number;
							lambda$static$0(t: number): number;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableLongToDoubleFunction<any>;
						public applyAsDouble(param0: number): number;
						public static nop(): org.apache.commons.lang3.function.FailableLongToDoubleFunction<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableLongToIntFunction<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableLongToIntFunction<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableLongToIntFunction<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableLongToIntFunction<any>;
							applyAsInt(param0: number): number;
							lambda$static$0(t: number): number;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableLongToIntFunction<any>;
						public static nop(): org.apache.commons.lang3.function.FailableLongToIntFunction<any>;
						public applyAsInt(param0: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableLongUnaryOperator<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableLongUnaryOperator<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableLongUnaryOperator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							identity(): org.apache.commons.lang3.function.FailableLongUnaryOperator<any>;
							nop(): org.apache.commons.lang3.function.FailableLongUnaryOperator<any>;
							andThen(after: org.apache.commons.lang3.function.FailableLongUnaryOperator<E>): org.apache.commons.lang3.function.FailableLongUnaryOperator<E>;
							applyAsLong(param0: number): number;
							compose(before: org.apache.commons.lang3.function.FailableLongUnaryOperator<E>): org.apache.commons.lang3.function.FailableLongUnaryOperator<E>;
							lambda$compose$3(before: org.apache.commons.lang3.function.FailableLongUnaryOperator<any>, v: number): number;
							lambda$andThen$2(after: org.apache.commons.lang3.function.FailableLongUnaryOperator<any>, t: number): number;
							lambda$identity$1(t: number): number;
							lambda$static$0(t: number): number;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableLongUnaryOperator<any>;
						public applyAsLong(param0: number): number;
						public static identity(): org.apache.commons.lang3.function.FailableLongUnaryOperator<any>;
						public compose(before: org.apache.commons.lang3.function.FailableLongUnaryOperator<E>): org.apache.commons.lang3.function.FailableLongUnaryOperator<E>;
						public andThen(after: org.apache.commons.lang3.function.FailableLongUnaryOperator<E>): org.apache.commons.lang3.function.FailableLongUnaryOperator<E>;
						public static nop(): org.apache.commons.lang3.function.FailableLongUnaryOperator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableObjDoubleConsumer<T, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableObjDoubleConsumer<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableObjDoubleConsumer<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableObjDoubleConsumer<any,any>;
							accept(param0: T, param1: number): void;
							lambda$static$0(t: any, u: number): void;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableObjDoubleConsumer<any,any>;
						public static nop(): org.apache.commons.lang3.function.FailableObjDoubleConsumer<any,any>;
						public accept(param0: T, param1: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableObjIntConsumer<T, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableObjIntConsumer<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableObjIntConsumer<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableObjIntConsumer<any,any>;
							accept(param0: T, param1: number): void;
							lambda$static$0(t: any, u: number): void;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableObjIntConsumer<any,any>;
						public static nop(): org.apache.commons.lang3.function.FailableObjIntConsumer<any,any>;
						public accept(param0: T, param1: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableObjLongConsumer<T, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableObjLongConsumer<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableObjLongConsumer<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableObjLongConsumer<any,any>;
							accept(param0: T, param1: number): void;
							lambda$static$0(t: any, u: number): void;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableObjLongConsumer<any,any>;
						public static nop(): org.apache.commons.lang3.function.FailableObjLongConsumer<any,any>;
						public accept(param0: T, param1: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailablePredicate<T, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailablePredicate<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailablePredicate<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							falsePredicate(): org.apache.commons.lang3.function.FailablePredicate<any,any>;
							truePredicate(): org.apache.commons.lang3.function.FailablePredicate<any,any>;
							and(other: org.apache.commons.lang3.function.FailablePredicate<any,E>): org.apache.commons.lang3.function.FailablePredicate<T,E>;
							negate(): org.apache.commons.lang3.function.FailablePredicate<T,E>;
							or(other: org.apache.commons.lang3.function.FailablePredicate<any,E>): org.apache.commons.lang3.function.FailablePredicate<T,E>;
							test(param0: T): boolean;
							lambda$or$4(other: org.apache.commons.lang3.function.FailablePredicate<any,any>, t: any): boolean;
							lambda$negate$3(t: any): boolean;
							lambda$and$2(other: org.apache.commons.lang3.function.FailablePredicate<any,any>, t: any): boolean;
							lambda$static$1(t: any): boolean;
							lambda$static$0(t: any): boolean;
							"<clinit>"(): void;
						});
						public constructor();
						public static TRUE: org.apache.commons.lang3.function.FailablePredicate<any,any>;
						public static FALSE: org.apache.commons.lang3.function.FailablePredicate<any,any>;
						public or(other: org.apache.commons.lang3.function.FailablePredicate<any,E>): org.apache.commons.lang3.function.FailablePredicate<T,E>;
						public negate(): org.apache.commons.lang3.function.FailablePredicate<T,E>;
						public test(param0: T): boolean;
						public and(other: org.apache.commons.lang3.function.FailablePredicate<any,E>): org.apache.commons.lang3.function.FailablePredicate<T,E>;
						public static falsePredicate(): org.apache.commons.lang3.function.FailablePredicate<any,any>;
						public static truePredicate(): org.apache.commons.lang3.function.FailablePredicate<any,any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableRunnable<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableRunnable<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableRunnable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							run(): void;
						});
						public constructor();
						public run(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableShortSupplier<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableShortSupplier<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableShortSupplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAsShort(): number;
						});
						public constructor();
						public getAsShort(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableSupplier<R, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableSupplier<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableSupplier<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(): R;
						});
						public constructor();
						public get(): R;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableToDoubleBiFunction<T, U, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableToDoubleBiFunction<any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableToDoubleBiFunction<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableToDoubleBiFunction<any,any,any>;
							applyAsDouble(param0: T, param1: U): number;
							lambda$static$0(t: any, u: any): number;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableToDoubleBiFunction<any,any,any>;
						public applyAsDouble(param0: T, param1: U): number;
						public static nop(): org.apache.commons.lang3.function.FailableToDoubleBiFunction<any,any,any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableToDoubleFunction<T, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableToDoubleFunction<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableToDoubleFunction<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableToDoubleFunction<any,any>;
							applyAsDouble(param0: T): number;
							lambda$static$0(t: any): number;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableToDoubleFunction<any,any>;
						public static nop(): org.apache.commons.lang3.function.FailableToDoubleFunction<any,any>;
						public applyAsDouble(param0: T): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableToIntBiFunction<T, U, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableToIntBiFunction<any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableToIntBiFunction<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableToIntBiFunction<any,any,any>;
							applyAsInt(param0: T, param1: U): number;
							lambda$static$0(t: any, u: any): number;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableToIntBiFunction<any,any,any>;
						public applyAsInt(param0: T, param1: U): number;
						public static nop(): org.apache.commons.lang3.function.FailableToIntBiFunction<any,any,any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableToIntFunction<T, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableToIntFunction<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableToIntFunction<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableToIntFunction<any,any>;
							applyAsInt(param0: T): number;
							lambda$static$0(t: any): number;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableToIntFunction<any,any>;
						public applyAsInt(param0: T): number;
						public static nop(): org.apache.commons.lang3.function.FailableToIntFunction<any,any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableToLongBiFunction<T, U, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableToLongBiFunction<any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableToLongBiFunction<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableToLongBiFunction<any,any,any>;
							applyAsLong(param0: T, param1: U): number;
							lambda$static$0(t: any, u: any): number;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableToLongBiFunction<any,any,any>;
						public static nop(): org.apache.commons.lang3.function.FailableToLongBiFunction<any,any,any>;
						public applyAsLong(param0: T, param1: U): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class FailableToLongFunction<T, E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.FailableToLongFunction<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.FailableToLongFunction<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							nop(): org.apache.commons.lang3.function.FailableToLongFunction<any,any>;
							applyAsLong(param0: T): number;
							lambda$static$0(t: any): number;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOP: org.apache.commons.lang3.function.FailableToLongFunction<any,any>;
						public applyAsLong(param0: T): number;
						public static nop(): org.apache.commons.lang3.function.FailableToLongFunction<any,any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class IntToCharFunction extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.IntToCharFunction>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.IntToCharFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							applyAsChar(param0: number): string;
						});
						public constructor();
						public applyAsChar(param0: number): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class MethodInvokers extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.MethodInvokers>;
						public static asBiConsumer(method: java.lang.reflect.Method): any /* any*/;
						public static asFailableBiConsumer(method: java.lang.reflect.Method): org.apache.commons.lang3.function.FailableBiConsumer<any,any,any>;
						public static asFailableFunction(method: java.lang.reflect.Method): org.apache.commons.lang3.function.FailableFunction<any,any,any>;
						public static asFailableSupplier(method: java.lang.reflect.Method): org.apache.commons.lang3.function.FailableSupplier<any,any>;
						public static asBiFunction(method: java.lang.reflect.Method): any /* any*/;
						public static asSupplier(method: java.lang.reflect.Method): any /* any*/;
						public static asFailableBiFunction(method: java.lang.reflect.Method): org.apache.commons.lang3.function.FailableBiFunction<any,any,any,any>;
						public static asFunction(method: java.lang.reflect.Method): any /* any*/;
						public static asInterfaceInstance(interfaceClass: java.lang.Class<any>, method: java.lang.reflect.Method): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class Suppliers extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.Suppliers>;
						public constructor();
						public static get(supplier: any /* any*/): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class ToBooleanBiFunction<T, U>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.ToBooleanBiFunction<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.ToBooleanBiFunction<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							applyAsBoolean(param0: T, param1: U): boolean;
						});
						public constructor();
						public applyAsBoolean(param0: T, param1: U): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class TriConsumer<T, U, V>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.TriConsumer<any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.TriConsumer<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							accept(param0: T, param1: U, param2: V): void;
							andThen(after: org.apache.commons.lang3.function.TriConsumer<any,any,any>): org.apache.commons.lang3.function.TriConsumer<T,U,V>;
							lambda$andThen$0(after: org.apache.commons.lang3.function.TriConsumer<any,any,any>, t: any, u: any, v: any): void;
						});
						public constructor();
						public accept(param0: T, param1: U, param2: V): void;
						public andThen(after: org.apache.commons.lang3.function.TriConsumer<any,any,any>): org.apache.commons.lang3.function.TriConsumer<T,U,V>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module function {
					export class TriFunction<T, U, V, R>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.function.TriFunction<any,any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.function.TriFunction<any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							apply(param0: T, param1: U, param2: V): R;
							andThen(after: any /* any*/): org.apache.commons.lang3.function.TriFunction<any,any,any,any>;
							lambda$andThen$0(after: any /* any*/, t: any, u: any, v: any): any;
						});
						public constructor();
						public apply(param0: T, param1: U, param2: V): R;
						public andThen(after: any /* any*/): org.apache.commons.lang3.function.TriFunction<any,any,any,any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module math {
					export class Fraction extends java.lang.Number implements java.lang.Comparable<org.apache.commons.lang3.math.Fraction>  {
						public static class: java.lang.Class<org.apache.commons.lang3.math.Fraction>;
						public static ZERO: org.apache.commons.lang3.math.Fraction;
						public static ONE: org.apache.commons.lang3.math.Fraction;
						public static ONE_HALF: org.apache.commons.lang3.math.Fraction;
						public static ONE_THIRD: org.apache.commons.lang3.math.Fraction;
						public static TWO_THIRDS: org.apache.commons.lang3.math.Fraction;
						public static ONE_QUARTER: org.apache.commons.lang3.math.Fraction;
						public static TWO_QUARTERS: org.apache.commons.lang3.math.Fraction;
						public static THREE_QUARTERS: org.apache.commons.lang3.math.Fraction;
						public static ONE_FIFTH: org.apache.commons.lang3.math.Fraction;
						public static TWO_FIFTHS: org.apache.commons.lang3.math.Fraction;
						public static THREE_FIFTHS: org.apache.commons.lang3.math.Fraction;
						public static FOUR_FIFTHS: org.apache.commons.lang3.math.Fraction;
						public equals(obj: any): boolean;
						public static getFraction(str: string): org.apache.commons.lang3.math.Fraction;
						public hashCode(): number;
						public intValue(): number;
						public divideBy(fraction: org.apache.commons.lang3.math.Fraction): org.apache.commons.lang3.math.Fraction;
						public reduce(): org.apache.commons.lang3.math.Fraction;
						public static getFraction(whole: number, numerator: number, denominator: number): org.apache.commons.lang3.math.Fraction;
						public pow(power: number): org.apache.commons.lang3.math.Fraction;
						public invert(): org.apache.commons.lang3.math.Fraction;
						public doubleValue(): number;
						public abs(): org.apache.commons.lang3.math.Fraction;
						public negate(): org.apache.commons.lang3.math.Fraction;
						public subtract(fraction: org.apache.commons.lang3.math.Fraction): org.apache.commons.lang3.math.Fraction;
						public static getFraction(numerator: number, denominator: number): org.apache.commons.lang3.math.Fraction;
						public longValue(): number;
						public getProperWhole(): number;
						public floatValue(): number;
						public multiplyBy(fraction: org.apache.commons.lang3.math.Fraction): org.apache.commons.lang3.math.Fraction;
						public static getFraction(value: number): org.apache.commons.lang3.math.Fraction;
						public getDenominator(): number;
						public toString(): string;
						public getProperNumerator(): number;
						public getNumerator(): number;
						public compareTo(other: org.apache.commons.lang3.math.Fraction): number;
						public add(fraction: org.apache.commons.lang3.math.Fraction): org.apache.commons.lang3.math.Fraction;
						public static getReducedFraction(numerator: number, denominator: number): org.apache.commons.lang3.math.Fraction;
						public toProperString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module math {
					export class IEEE754rUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.math.IEEE754rUtils>;
						public static max(a: number, param1: number): number;
						public constructor();
						public static min(a: number, param1: number, b: number): number;
						public static max(a: number, b: number): number;
						public static max(a: number, b: number, c: number): number;
						public static min(a: number, b: number, c: number): number;
						public static min(a: number, b: number): number;
						public static max(...array: number[]): number;
						public static min(a: number, param1: number): number;
						public static min(...array: number[]): number;
						public static max(a: number, param1: number, b: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module math {
					export class NumberUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.math.NumberUtils>;
						public static LONG_ZERO: java.lang.Long;
						public static LONG_ONE: java.lang.Long;
						public static LONG_MINUS_ONE: java.lang.Long;
						public static INTEGER_ZERO: java.lang.Integer;
						public static INTEGER_ONE: java.lang.Integer;
						public static INTEGER_TWO: java.lang.Integer;
						public static INTEGER_MINUS_ONE: java.lang.Integer;
						public static SHORT_ZERO: java.lang.Short;
						public static SHORT_ONE: java.lang.Short;
						public static SHORT_MINUS_ONE: java.lang.Short;
						public static BYTE_ZERO: java.lang.Byte;
						public static BYTE_ONE: java.lang.Byte;
						public static BYTE_MINUS_ONE: java.lang.Byte;
						public static DOUBLE_ZERO: java.lang.Double;
						public static DOUBLE_ONE: java.lang.Double;
						public static DOUBLE_MINUS_ONE: java.lang.Double;
						public static FLOAT_ZERO: java.lang.Float;
						public static FLOAT_ONE: java.lang.Float;
						public static FLOAT_MINUS_ONE: java.lang.Float;
						public static LONG_INT_MAX_VALUE: java.lang.Long;
						public static LONG_INT_MIN_VALUE: java.lang.Long;
						public static createNumber(str: string): java.lang.Number;
						public static toLong(str: string, defaultValue: number): number;
						public static toDouble(str: string): number;
						public static toScaledBigDecimal(value: java.math.BigDecimal, scale: number, roundingMode: java.math.RoundingMode): java.math.BigDecimal;
						public static compare(x: number, y: number): number;
						public static toScaledBigDecimal(value: java.lang.Double): java.math.BigDecimal;
						public static createBigDecimal(str: string): java.math.BigDecimal;
						public static compare(x: number, param1: number): number;
						public static min(...array: number[]): number;
						public static toInt(str: string, defaultValue: number): number;
						public static max(a: number, param1: number, b: number): number;
						public static isCreatable(str: string): boolean;
						public static toFloat(str: string, defaultValue: number): number;
						public static max(a: number, b: number, c: number): number;
						public static min(a: number, b: number, c: number): number;
						public static toScaledBigDecimal(value: string, scale: number, roundingMode: java.math.RoundingMode): java.math.BigDecimal;
						public static createBigInteger(str: string): java.math.BigInteger;
						public static toLong(str: string): number;
						public static toScaledBigDecimal(value: java.lang.Float, scale: number, roundingMode: java.math.RoundingMode): java.math.BigDecimal;
						public static isParsable(str: string): boolean;
						public static toInt(str: string): number;
						public static toShort(str: string): number;
						public static toByte(str: string, defaultValue: number): number;
						public constructor();
						public static createFloat(str: string): java.lang.Float;
						public static createLong(str: string): java.lang.Long;
						public static max(...array: number[]): number;
						public static toFloat(str: string): number;
						public static toScaledBigDecimal(value: string): java.math.BigDecimal;
						/** @deprecated */
						public static isNumber(str: string): boolean;
						public static toScaledBigDecimal(value: java.math.BigDecimal): java.math.BigDecimal;
						public static createInteger(str: string): java.lang.Integer;
						public static isDigits(str: string): boolean;
						public static createDouble(str: string): java.lang.Double;
						public static min(a: number, param1: number, b: number): number;
						public static toShort(str: string, defaultValue: number): number;
						public static toByte(str: string): number;
						public static toScaledBigDecimal(value: java.lang.Double, scale: number, roundingMode: java.math.RoundingMode): java.math.BigDecimal;
						public static toDouble(str: string, defaultValue: number): number;
						public static toDouble(value: java.math.BigDecimal, defaultValue: number): number;
						public static toDouble(value: java.math.BigDecimal): number;
						public static toScaledBigDecimal(value: java.lang.Float): java.math.BigDecimal;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module mutable {
					export class Mutable<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.mutable.Mutable<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.mutable.Mutable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getValue(): T;
							setValue(param0: T): void;
						});
						public constructor();
						public setValue(param0: T): void;
						public getValue(): T;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module mutable {
					export class MutableBoolean extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.mutable.MutableBoolean>;
						public constructor();
						public equals(obj: any): boolean;
						public getValue(): any;
						public hashCode(): number;
						public compareTo(other: org.apache.commons.lang3.mutable.MutableBoolean): number;
						public toString(): string;
						public setValue(param0: any): void;
						public toBoolean(): java.lang.Boolean;
						public setValue(value: boolean): void;
						public isFalse(): boolean;
						public booleanValue(): boolean;
						public getValue(): java.lang.Boolean;
						public setFalse(): void;
						public isTrue(): boolean;
						public setTrue(): void;
						public setValue(value: java.lang.Boolean): void;
						public constructor(value: java.lang.Boolean);
						public constructor(value: boolean);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module mutable {
					export class MutableByte extends java.lang.Number {
						public static class: java.lang.Class<org.apache.commons.lang3.mutable.MutableByte>;
						public getAndAdd(operand: java.lang.Number): number;
						public equals(obj: any): boolean;
						public add(operand: number): void;
						public getValue(): any;
						public setValue(value: number): void;
						public hashCode(): number;
						public intValue(): number;
						public addAndGet(operand: java.lang.Number): number;
						public setValue(param0: any): void;
						public increment(): void;
						public toByte(): java.lang.Byte;
						public subtract(operand: java.lang.Number): void;
						public doubleValue(): number;
						public incrementAndGet(): number;
						public constructor(value: number);
						public addAndGet(operand: number): number;
						public longValue(): number;
						public getValue(): java.lang.Byte;
						public floatValue(): number;
						public constructor();
						public subtract(operand: number): void;
						public compareTo(other: org.apache.commons.lang3.mutable.MutableByte): number;
						public byteValue(): number;
						public constructor(value: java.lang.Number);
						public constructor(value: string);
						public setValue(value: java.lang.Number): void;
						public decrement(): void;
						public decrementAndGet(): number;
						public add(operand: java.lang.Number): void;
						public toString(): string;
						public getAndDecrement(): number;
						public getAndAdd(operand: number): number;
						public getAndIncrement(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module mutable {
					export class MutableDouble extends java.lang.Number {
						public static class: java.lang.Class<org.apache.commons.lang3.mutable.MutableDouble>;
						public getAndAdd(operand: java.lang.Number): number;
						public equals(obj: any): boolean;
						public add(operand: number): void;
						public getValue(): any;
						public setValue(value: number): void;
						public toDouble(): java.lang.Double;
						public hashCode(): number;
						public intValue(): number;
						public addAndGet(operand: java.lang.Number): number;
						public setValue(param0: any): void;
						public getValue(): java.lang.Double;
						public increment(): void;
						public subtract(operand: java.lang.Number): void;
						public doubleValue(): number;
						public incrementAndGet(): number;
						public constructor(value: number);
						public addAndGet(operand: number): number;
						public isInfinite(): boolean;
						public longValue(): number;
						public floatValue(): number;
						public constructor();
						public subtract(operand: number): void;
						public constructor(value: java.lang.Number);
						public constructor(value: string);
						public setValue(value: java.lang.Number): void;
						public decrement(): void;
						public decrementAndGet(): number;
						public add(operand: java.lang.Number): void;
						public toString(): string;
						public getAndDecrement(): number;
						public isNaN(): boolean;
						public getAndAdd(operand: number): number;
						public getAndIncrement(): number;
						public compareTo(other: org.apache.commons.lang3.mutable.MutableDouble): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module mutable {
					export class MutableFloat extends java.lang.Number {
						public static class: java.lang.Class<org.apache.commons.lang3.mutable.MutableFloat>;
						public getAndAdd(operand: java.lang.Number): number;
						public equals(obj: any): boolean;
						public add(operand: number): void;
						public compareTo(other: org.apache.commons.lang3.mutable.MutableFloat): number;
						public getValue(): any;
						public setValue(value: number): void;
						public hashCode(): number;
						public getValue(): java.lang.Float;
						public intValue(): number;
						public addAndGet(operand: java.lang.Number): number;
						public setValue(param0: any): void;
						public increment(): void;
						public subtract(operand: java.lang.Number): void;
						public doubleValue(): number;
						public incrementAndGet(): number;
						public constructor(value: number);
						public addAndGet(operand: number): number;
						public isInfinite(): boolean;
						public longValue(): number;
						public floatValue(): number;
						public constructor();
						public subtract(operand: number): void;
						public constructor(value: java.lang.Number);
						public constructor(value: string);
						public setValue(value: java.lang.Number): void;
						public decrement(): void;
						public decrementAndGet(): number;
						public toFloat(): java.lang.Float;
						public add(operand: java.lang.Number): void;
						public toString(): string;
						public getAndDecrement(): number;
						public isNaN(): boolean;
						public getAndAdd(operand: number): number;
						public getAndIncrement(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module mutable {
					export class MutableInt extends java.lang.Number {
						public static class: java.lang.Class<org.apache.commons.lang3.mutable.MutableInt>;
						public getAndAdd(operand: java.lang.Number): number;
						public equals(obj: any): boolean;
						public add(operand: number): void;
						public getValue(): any;
						public setValue(value: number): void;
						public hashCode(): number;
						public intValue(): number;
						public addAndGet(operand: java.lang.Number): number;
						public setValue(param0: any): void;
						public increment(): void;
						public getValue(): java.lang.Integer;
						public subtract(operand: java.lang.Number): void;
						public doubleValue(): number;
						public incrementAndGet(): number;
						public constructor(value: number);
						public addAndGet(operand: number): number;
						public longValue(): number;
						public floatValue(): number;
						public constructor();
						public subtract(operand: number): void;
						public constructor(value: java.lang.Number);
						public toInteger(): java.lang.Integer;
						public compareTo(other: org.apache.commons.lang3.mutable.MutableInt): number;
						public constructor(value: string);
						public setValue(value: java.lang.Number): void;
						public decrement(): void;
						public decrementAndGet(): number;
						public add(operand: java.lang.Number): void;
						public toString(): string;
						public getAndDecrement(): number;
						public getAndAdd(operand: number): number;
						public getAndIncrement(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module mutable {
					export class MutableLong extends java.lang.Number {
						public static class: java.lang.Class<org.apache.commons.lang3.mutable.MutableLong>;
						public toLong(): java.lang.Long;
						public getAndAdd(operand: java.lang.Number): number;
						public equals(obj: any): boolean;
						public add(operand: number): void;
						public getValue(): any;
						public setValue(value: number): void;
						public hashCode(): number;
						public intValue(): number;
						public addAndGet(operand: java.lang.Number): number;
						public setValue(param0: any): void;
						public increment(): void;
						public subtract(operand: java.lang.Number): void;
						public doubleValue(): number;
						public incrementAndGet(): number;
						public constructor(value: number);
						public addAndGet(operand: number): number;
						public longValue(): number;
						public floatValue(): number;
						public constructor();
						public subtract(operand: number): void;
						public constructor(value: java.lang.Number);
						public constructor(value: string);
						public compareTo(other: org.apache.commons.lang3.mutable.MutableLong): number;
						public setValue(value: java.lang.Number): void;
						public decrement(): void;
						public decrementAndGet(): number;
						public add(operand: java.lang.Number): void;
						public toString(): string;
						public getAndDecrement(): number;
						public getAndAdd(operand: number): number;
						public getAndIncrement(): number;
						public getValue(): java.lang.Long;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module mutable {
					export class MutableObject<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.mutable.MutableObject<any>>;
						public setValue(param0: T): void;
						public constructor();
						public equals(obj: any): boolean;
						public setValue(value: T): void;
						public hashCode(): number;
						public getValue(): T;
						public constructor(value: T);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module mutable {
					export class MutableShort extends java.lang.Number {
						public static class: java.lang.Class<org.apache.commons.lang3.mutable.MutableShort>;
						public getAndAdd(operand: java.lang.Number): number;
						public equals(obj: any): boolean;
						public add(operand: number): void;
						public getValue(): any;
						public setValue(value: number): void;
						public hashCode(): number;
						public intValue(): number;
						public addAndGet(operand: java.lang.Number): number;
						public setValue(param0: any): void;
						public increment(): void;
						public shortValue(): number;
						public getValue(): java.lang.Short;
						public subtract(operand: java.lang.Number): void;
						public doubleValue(): number;
						public incrementAndGet(): number;
						public constructor(value: number);
						public addAndGet(operand: number): number;
						public longValue(): number;
						public floatValue(): number;
						public constructor();
						public subtract(operand: number): void;
						public constructor(value: java.lang.Number);
						public constructor(value: string);
						public toShort(): java.lang.Short;
						public compareTo(other: org.apache.commons.lang3.mutable.MutableShort): number;
						public setValue(value: java.lang.Number): void;
						public decrement(): void;
						public decrementAndGet(): number;
						public add(operand: java.lang.Number): void;
						public toString(): string;
						public getAndDecrement(): number;
						public getAndAdd(operand: number): number;
						public getAndIncrement(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module reflect {
					export class ConstructorUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.reflect.ConstructorUtils>;
						public static invokeExactConstructor(cls: java.lang.Class<any>, args: any[], parameterTypes: java.lang.Class<any>[]): any;
						public static getMatchingAccessibleConstructor(cls: java.lang.Class<any>, ...parameterTypes: java.lang.Class<any>[]): java.lang.reflect.Constructor<any>;
						public constructor();
						public static invokeConstructor(cls: java.lang.Class<any>, ...args: any[]): any;
						public static getAccessibleConstructor(ctor: java.lang.reflect.Constructor<any>): java.lang.reflect.Constructor<any>;
						public static invokeExactConstructor(cls: java.lang.Class<any>, ...args: any[]): any;
						public static getAccessibleConstructor(cls: java.lang.Class<any>, ...parameterTypes: java.lang.Class<any>[]): java.lang.reflect.Constructor<any>;
						public static invokeConstructor(cls: java.lang.Class<any>, args: any[], parameterTypes: java.lang.Class<any>[]): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module reflect {
					export class FieldUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.reflect.FieldUtils>;
						public static writeDeclaredStaticField(cls: java.lang.Class<any>, fieldName: string, value: any, forceAccess: boolean): void;
						public static readField(target: any, fieldName: string): any;
						public static writeField(target: any, fieldName: string, value: any, forceAccess: boolean): void;
						public static readDeclaredStaticField(cls: java.lang.Class<any>, fieldName: string, forceAccess: boolean): any;
						public static writeDeclaredField(target: any, fieldName: string, value: any): void;
						public static readStaticField(cls: java.lang.Class<any>, fieldName: string, forceAccess: boolean): any;
						/** @deprecated */
						public static removeFinalModifier(field: java.lang.reflect.Field, forceAccess: boolean): void;
						public static writeStaticField(field: java.lang.reflect.Field, value: any): void;
						public static writeDeclaredField(target: any, fieldName: string, value: any, forceAccess: boolean): void;
						public static readField(field: java.lang.reflect.Field, target: any): any;
						public static getFieldsWithAnnotation(cls: java.lang.Class<any>, annotationCls: java.lang.Class<any>): java.lang.reflect.Field[];
						public static getDeclaredField(cls: java.lang.Class<any>, fieldName: string): java.lang.reflect.Field;
						public static writeStaticField(field: java.lang.reflect.Field, value: any, forceAccess: boolean): void;
						public static writeStaticField(cls: java.lang.Class<any>, fieldName: string, value: any): void;
						public static getField(cls: java.lang.Class<any>, fieldName: string, forceAccess: boolean): java.lang.reflect.Field;
						public static readStaticField(field: java.lang.reflect.Field): any;
						public static getField(cls: java.lang.Class<any>, fieldName: string): java.lang.reflect.Field;
						public static getAllFieldsList(cls: java.lang.Class<any>): java.util.List<java.lang.reflect.Field>;
						public static removeFinalModifier(field: java.lang.reflect.Field): void;
						public constructor();
						public static writeDeclaredStaticField(cls: java.lang.Class<any>, fieldName: string, value: any): void;
						public static readField(target: any, fieldName: string, forceAccess: boolean): any;
						public static writeStaticField(cls: java.lang.Class<any>, fieldName: string, value: any, forceAccess: boolean): void;
						public static readField(field: java.lang.reflect.Field, target: any, forceAccess: boolean): any;
						public static getDeclaredField(cls: java.lang.Class<any>, fieldName: string, forceAccess: boolean): java.lang.reflect.Field;
						public static readStaticField(field: java.lang.reflect.Field, forceAccess: boolean): any;
						public static getAllFields(cls: java.lang.Class<any>): java.lang.reflect.Field[];
						public static readDeclaredStaticField(cls: java.lang.Class<any>, fieldName: string): any;
						public static readStaticField(cls: java.lang.Class<any>, fieldName: string): any;
						public static readDeclaredField(target: any, fieldName: string, forceAccess: boolean): any;
						public static writeField(field: java.lang.reflect.Field, target: any, value: any): void;
						public static writeField(target: any, fieldName: string, value: any): void;
						public static readDeclaredField(target: any, fieldName: string): any;
						public static writeField(field: java.lang.reflect.Field, target: any, value: any, forceAccess: boolean): void;
						public static getFieldsListWithAnnotation(cls: java.lang.Class<any>, annotationCls: java.lang.Class<any>): java.util.List<java.lang.reflect.Field>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module reflect {
					export class InheritanceUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.reflect.InheritanceUtils>;
						public constructor();
						public static distance(child: java.lang.Class<any>, parent: java.lang.Class<any>): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module reflect {
					export class MemberUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.reflect.MemberUtils>;
					}
					export module MemberUtils {
						export class Executable extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.lang3.reflect.MemberUtils.Executable>;
							public isVarArgs(): boolean;
							public getParameterTypes(): java.lang.Class<any>[];
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module reflect {
					export class MethodUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.reflect.MethodUtils>;
						public static getAccessibleMethod(cls: java.lang.Class<any>, methodName: string, ...parameterTypes: java.lang.Class<any>[]): java.lang.reflect.Method;
						public constructor();
						public static invokeStaticMethod(cls: java.lang.Class<any>, methodName: string, args: any[], parameterTypes: java.lang.Class<any>[]): any;
						public static getMethodsListWithAnnotation(cls: java.lang.Class<any>, annotationCls: java.lang.Class<any>): java.util.List<java.lang.reflect.Method>;
						public static getMethodsWithAnnotation(cls: java.lang.Class<any>, annotationCls: java.lang.Class<any>, searchSupers: boolean, ignoreAccess: boolean): java.lang.reflect.Method[];
						public static invokeMethod(object: any, forceAccess: boolean, methodName: string, args: any[], parameterTypes: java.lang.Class<any>[]): any;
						public static invokeExactMethod(object: any, methodName: string, ...args: any[]): any;
						public static getMatchingAccessibleMethod(cls: java.lang.Class<any>, methodName: string, ...parameterTypes: java.lang.Class<any>[]): java.lang.reflect.Method;
						public static getMethodsWithAnnotation(cls: java.lang.Class<any>, annotationCls: java.lang.Class<any>): java.lang.reflect.Method[];
						public static getMethodsListWithAnnotation(cls: java.lang.Class<any>, annotationCls: java.lang.Class<any>, searchSupers: boolean, ignoreAccess: boolean): java.util.List<java.lang.reflect.Method>;
						public static invokeMethod(object: any, methodName: string): any;
						public static getMatchingMethod(cls: java.lang.Class<any>, methodName: string, ...parameterTypes: java.lang.Class<any>[]): java.lang.reflect.Method;
						public static invokeExactMethod(object: any, methodName: string, args: any[], parameterTypes: java.lang.Class<any>[]): any;
						public static invokeStaticMethod(cls: java.lang.Class<any>, methodName: string, ...args: any[]): any;
						public static getOverrideHierarchy(method: java.lang.reflect.Method, interfacesBehavior: org.apache.commons.lang3.ClassUtils.Interfaces): java.util.Set<java.lang.reflect.Method>;
						public static getAccessibleMethod(method: java.lang.reflect.Method): java.lang.reflect.Method;
						public static invokeExactStaticMethod(cls: java.lang.Class<any>, methodName: string, ...args: any[]): any;
						public static invokeMethod(object: any, forceAccess: boolean, methodName: string, ...args: any[]): any;
						public static invokeMethod(object: any, forceAccess: boolean, methodName: string): any;
						public static invokeExactMethod(object: any, methodName: string): any;
						public static getAnnotation(method: java.lang.reflect.Method, annotationCls: java.lang.Class<any>, searchSupers: boolean, ignoreAccess: boolean): java.lang.annotation.Annotation;
						public static invokeExactStaticMethod(cls: java.lang.Class<any>, methodName: string, args: any[], parameterTypes: java.lang.Class<any>[]): any;
						public static invokeMethod(object: any, methodName: string, args: any[], parameterTypes: java.lang.Class<any>[]): any;
						public static invokeMethod(object: any, methodName: string, ...args: any[]): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module reflect {
					export abstract class TypeLiteral<T>  extends org.apache.commons.lang3.reflect.Typed<any> {
						public static class: java.lang.Class<org.apache.commons.lang3.reflect.TypeLiteral<any>>;
						public value: java.lang.reflect.Type;
						public getType(): java.lang.reflect.Type;
						public constructor();
						public equals(obj: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module reflect {
					export class TypeUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.reflect.TypeUtils>;
						public static WILDCARD_ALL: java.lang.reflect.WildcardType;
						public static parameterize(rawClass: java.lang.Class<any>, ...typeArguments: java.lang.reflect.Type[]): java.lang.reflect.ParameterizedType;
						public static wrap(type: java.lang.Class<any>): org.apache.commons.lang3.reflect.Typed<any>;
						public equals(obj: any): boolean;
						public static getImplicitLowerBounds(wildcardType: java.lang.reflect.WildcardType): java.lang.reflect.Type[];
						public static parameterizeWithOwner(owner: java.lang.reflect.Type, rawClass: java.lang.Class<any>, typeVariableMap: java.util.Map<java.lang.reflect.TypeVariable<any>,java.lang.reflect.Type>): java.lang.reflect.ParameterizedType;
						public static toLongString(typeVariable: java.lang.reflect.TypeVariable<any>): string;
						public static determineTypeArguments(cls: java.lang.Class<any>, superParameterizedType: java.lang.reflect.ParameterizedType): java.util.Map<java.lang.reflect.TypeVariable<any>,java.lang.reflect.Type>;
						public static parameterize(rawClass: java.lang.Class<any>, typeVariableMap: java.util.Map<java.lang.reflect.TypeVariable<any>,java.lang.reflect.Type>): java.lang.reflect.ParameterizedType;
						public static containsTypeVariables(type: java.lang.reflect.Type): boolean;
						public static isArrayType(type: java.lang.reflect.Type): boolean;
						public static isInstance(value: any, type: java.lang.reflect.Type): boolean;
						public static equals(type1: java.lang.reflect.Type, type2: java.lang.reflect.Type): boolean;
						public static getTypeArguments(type: java.lang.reflect.ParameterizedType): java.util.Map<java.lang.reflect.TypeVariable<any>,java.lang.reflect.Type>;
						public static unrollVariables(typeArguments: java.util.Map<java.lang.reflect.TypeVariable<any>,java.lang.reflect.Type>, type: java.lang.reflect.Type): java.lang.reflect.Type;
						public static getImplicitBounds(typeVariable: java.lang.reflect.TypeVariable<any>): java.lang.reflect.Type[];
						public static getImplicitUpperBounds(wildcardType: java.lang.reflect.WildcardType): java.lang.reflect.Type[];
						public static genericArrayType(componentType: java.lang.reflect.Type): java.lang.reflect.GenericArrayType;
						public static wrap(type: java.lang.reflect.Type): org.apache.commons.lang3.reflect.Typed<any>;
						public constructor();
						public static getRawType(type: java.lang.reflect.Type, assigningType: java.lang.reflect.Type): java.lang.Class<any>;
						public static parameterizeWithOwner(owner: java.lang.reflect.Type, rawClass: java.lang.Class<any>, ...typeArguments: java.lang.reflect.Type[]): java.lang.reflect.ParameterizedType;
						public static isAssignable(type: java.lang.reflect.Type, toType: java.lang.reflect.Type): boolean;
						public static typesSatisfyVariables(typeVariableMap: java.util.Map<java.lang.reflect.TypeVariable<any>,java.lang.reflect.Type>): boolean;
						public static normalizeUpperBounds(bounds: java.lang.reflect.Type[]): java.lang.reflect.Type[];
						public toString(): string;
						public static getArrayComponentType(type: java.lang.reflect.Type): java.lang.reflect.Type;
						public static getTypeArguments(type: java.lang.reflect.Type, toClass: java.lang.Class<any>): java.util.Map<java.lang.reflect.TypeVariable<any>,java.lang.reflect.Type>;
						public static toString(type: java.lang.reflect.Type): string;
						public static wildcardType(): org.apache.commons.lang3.reflect.TypeUtils.WildcardTypeBuilder;
					}
					export module TypeUtils {
						export class GenericArrayTypeImpl extends java.lang.Object implements java.lang.reflect.GenericArrayType {
							public static class: java.lang.Class<org.apache.commons.lang3.reflect.TypeUtils.GenericArrayTypeImpl>;
							public getGenericComponentType(): java.lang.reflect.Type;
							public hashCode(): number;
							public equals(obj: any): boolean;
							public toString(): string;
						}
						export class ParameterizedTypeImpl extends java.lang.Object implements java.lang.reflect.ParameterizedType {
							public static class: java.lang.Class<org.apache.commons.lang3.reflect.TypeUtils.ParameterizedTypeImpl>;
							public hashCode(): number;
							public getOwnerType(): java.lang.reflect.Type;
							public getRawType(): java.lang.reflect.Type;
							public equals(obj: any): boolean;
							public getActualTypeArguments(): java.lang.reflect.Type[];
							public toString(): string;
						}
						export class WildcardTypeBuilder extends org.apache.commons.lang3.builder.Builder<java.lang.reflect.WildcardType> {
							public static class: java.lang.Class<org.apache.commons.lang3.reflect.TypeUtils.WildcardTypeBuilder>;
							public withUpperBounds(...bounds: java.lang.reflect.Type[]): org.apache.commons.lang3.reflect.TypeUtils.WildcardTypeBuilder;
							public withLowerBounds(...bounds: java.lang.reflect.Type[]): org.apache.commons.lang3.reflect.TypeUtils.WildcardTypeBuilder;
							public build(): any;
							public build(): java.lang.reflect.WildcardType;
						}
						export class WildcardTypeImpl extends java.lang.Object implements java.lang.reflect.WildcardType {
							public static class: java.lang.Class<org.apache.commons.lang3.reflect.TypeUtils.WildcardTypeImpl>;
							public getUpperBounds(): java.lang.reflect.Type[];
							public hashCode(): number;
							public equals(obj: any): boolean;
							public toString(): string;
							public getLowerBounds(): java.lang.reflect.Type[];
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module reflect {
					export class Typed<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.reflect.Typed<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.reflect.Typed<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getType(): java.lang.reflect.Type;
						});
						public constructor();
						public getType(): java.lang.reflect.Type;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module stream {
					export class IntStreams extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.stream.IntStreams>;
						public constructor();
						public static range(endExclusive: number): java.util.stream.IntStream;
						public static rangeClosed(endInclusive: number): java.util.stream.IntStream;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module stream {
					export class LangCollectors extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.stream.LangCollectors>;
						public static joining(delimiter: string, prefix: string, suffix: string): java.util.stream.Collector<any,any,string>;
						public static joining(): java.util.stream.Collector<any,any,string>;
						public static joining(delimiter: string): java.util.stream.Collector<any,any,string>;
						public static joining(delimiter: string, prefix: string, suffix: string, toString: any /* any<any,string>*/): java.util.stream.Collector<any,any,string>;
					}
					export module LangCollectors {
						export class SimpleCollector<T, A, R>  extends java.util.stream.Collector<any,any,any> {
							public static class: java.lang.Class<org.apache.commons.lang3.stream.LangCollectors.SimpleCollector<any,any,any>>;
							public combiner(): any /* any*/;
							public supplier(): any /* any*/;
							public characteristics(): java.util.Set<java.util.stream.Collector.Characteristics>;
							public accumulator(): any /* any<any,any>*/;
							public finisher(): any /* any<any,any>*/;
							public static of(supplier: any /* any*/, accumulator: any /* any*/, combiner: any /* any*/, ...characteristics: java.util.stream.Collector.Characteristics[]): java.util.stream.Collector;
							public static of(supplier: any /* any*/, accumulator: any /* any*/, combiner: any /* any*/, finisher: any /* any*/, ...characteristics: java.util.stream.Collector.Characteristics[]): java.util.stream.Collector;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module stream {
					export class Streams extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.stream.Streams>;
						public constructor();
						public static toArray(pElementType: java.lang.Class<any>): java.util.stream.Collector;
						public static of(iterable: java.lang.Iterable<any>): java.util.stream.Stream;
						public static nonNull(collection: java.util.Collection<any>): java.util.stream.Stream;
						public static nonNull(...array: any[]): java.util.stream.Stream;
						public static instancesOf(clazz: java.lang.Class<any>, collection: java.util.Collection<any>): java.util.stream.Stream;
						public static of(iterator: java.util.Iterator<any>): java.util.stream.Stream;
						public static failableStream(stream: java.util.stream.Stream): org.apache.commons.lang3.stream.Streams.FailableStream<any>;
						/** @deprecated */
						public static stream(stream: java.util.stream.Stream): org.apache.commons.lang3.stream.Streams.FailableStream<any>;
						public static nonNull(stream: java.util.stream.Stream): java.util.stream.Stream;
						public static of(collection: java.util.Collection<any>): java.util.stream.Stream;
						/** @deprecated */
						public static stream(collection: java.util.Collection<any>): org.apache.commons.lang3.stream.Streams.FailableStream<any>;
						public static of(enumeration: java.util.Enumeration<any>): java.util.stream.Stream;
						public static of(...values: any[]): java.util.stream.Stream;
						public static failableStream(stream: java.util.Collection<any>): org.apache.commons.lang3.stream.Streams.FailableStream<any>;
					}
					export module Streams {
						export class ArrayCollector<E>  extends java.util.stream.Collector<any,java.util.List<any>,any[]> {
							public static class: java.lang.Class<org.apache.commons.lang3.stream.Streams.ArrayCollector<any>>;
							public supplier(): any /* any*/;
							public combiner(): any /* any*/;
							public constructor(elementType: java.lang.Class<any>);
							public characteristics(): java.util.Set<java.util.stream.Collector.Characteristics>;
							public accumulator(): any /* any<any,any>*/;
							public finisher(): any /* any<any,any>*/;
							public accumulator(): any /* any,any>*/;
							public finisher(): any /* any,any[]>*/;
							public combiner(): any /* any*/;
							public supplier(): any /* any*/;
							public static of(supplier: any /* any*/, accumulator: any /* any*/, combiner: any /* any*/, ...characteristics: java.util.stream.Collector.Characteristics[]): java.util.stream.Collector;
							public static of(supplier: any /* any*/, accumulator: any /* any*/, combiner: any /* any*/, finisher: any /* any*/, ...characteristics: java.util.stream.Collector.Characteristics[]): java.util.stream.Collector;
						}
						export class EnumerationSpliterator<T>  extends java.util.Spliterators.AbstractSpliterator<any> {
							public static class: java.lang.Class<org.apache.commons.lang3.stream.Streams.EnumerationSpliterator<any>>;
							public characteristics(): number;
							public forEachRemaining(action: any /* any*/): void;
							public hasCharacteristics(characteristics: number): boolean;
							public getComparator(): java.util.Comparator<any>;
							public estimateSize(): number;
							public constructor(est: number, param1: number);
							public getExactSizeIfKnown(): number;
							public tryAdvance(action: any /* any*/): boolean;
							public tryAdvance(param0: any /* any*/): boolean;
							public constructor(estimatedSize: number, param1: number, additionalCharacteristics: java.util.Enumeration<any>);
							public trySplit(): java.util.Spliterator<any>;
						}
						export class FailableStream<T>  extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.lang3.stream.Streams.FailableStream<any>>;
							public assertNotTerminated(): void;
							public stream(): java.util.stream.Stream<T>;
							public collect(supplier: any /* any*/, accumulator: any /* any*/, combiner: any /* any*/): any;
							public forEach(action: org.apache.commons.lang3.function.FailableConsumer<T,any>): void;
							public makeTerminated(): void;
							public constructor(stream: java.util.stream.Stream<T>);
							public filter(predicate: org.apache.commons.lang3.function.FailablePredicate<T,any>): org.apache.commons.lang3.stream.Streams.FailableStream<T>;
							public map(mapper: org.apache.commons.lang3.function.FailableFunction<any,any,any>): org.apache.commons.lang3.stream.Streams.FailableStream<any>;
							public collect(collector: java.util.stream.Collector): any;
							public allMatch(predicate: org.apache.commons.lang3.function.FailablePredicate<T,any>): boolean;
							public anyMatch(predicate: org.apache.commons.lang3.function.FailablePredicate<T,any>): boolean;
							public reduce(identity: T, accumulator: any /* any*/): T;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export class CompositeFormat extends java.text.Format {
						public static class: java.lang.Class<org.apache.commons.lang3.text.CompositeFormat>;
						public parseObject(source: string): any;
						public getFormatter(): java.text.Format;
						public constructor();
						public constructor(parser: java.text.Format, formatter: java.text.Format);
						public reformat(input: string): string;
						public format(obj: any): string;
						public getParser(): java.text.Format;
						public format(param0: any, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
						public parseObject(param0: string, param1: java.text.ParsePosition): any;
						public parseObject(source: string, pos: java.text.ParsePosition): any;
						public format(obj: any, toAppendTo: java.lang.StringBuffer, pos: java.text.FieldPosition): java.lang.StringBuffer;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export class ExtendedMessageFormat extends java.text.MessageFormat {
						public static class: java.lang.Class<org.apache.commons.lang3.text.ExtendedMessageFormat>;
						public constructor();
						public toPattern(): string;
						public equals(obj: any): boolean;
						public setFormat(formatElementIndex: number, newFormat: java.text.Format): void;
						public hashCode(): number;
						public applyPattern(pattern: string): void;
						public setFormats(newFormats: java.text.Format[]): void;
						public constructor(pattern: string);
						public constructor(pattern: string, locale: java.util.Locale);
						public setFormatByArgumentIndex(argumentIndex: number, newFormat: java.text.Format): void;
						public setFormatsByArgumentIndex(newFormats: java.text.Format[]): void;
						public constructor(pattern: string, registry: java.util.Map<string,any>);
						public constructor(pattern: string, locale: java.util.Locale, registry: java.util.Map<string,any>);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export class FormatFactory extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.text.FormatFactory>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.text.FormatFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFormat(param0: string, param1: string, param2: java.util.Locale): java.text.Format;
						});
						public constructor();
						public getFormat(param0: string, param1: string, param2: java.util.Locale): java.text.Format;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export class FormattableUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.text.FormattableUtils>;
						public static toString(formattable: java.util.Formattable): string;
						public constructor();
						public static append(seq: string, formatter: java.util.Formatter, flags: number, width: number, precision: number, padChar: string): java.util.Formatter;
						public static append(seq: string, formatter: java.util.Formatter, flags: number, width: number, precision: number, padChar: string, ellipsis: string): java.util.Formatter;
						public static append(seq: string, formatter: java.util.Formatter, flags: number, width: number, precision: number, ellipsis: string): java.util.Formatter;
						public static append(seq: string, formatter: java.util.Formatter, flags: number, width: number, precision: number): java.util.Formatter;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export class StrBuilder extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.text.StrBuilder>;
						public buffer: string[];
						public getChars(destination: string[]): string[];
						public deleteAll(matcher: org.apache.commons.lang3.text.StrMatcher): org.apache.commons.lang3.text.StrBuilder;
						public replace(startIndex: number, endIndex: number, replaceStr: string): org.apache.commons.lang3.text.StrBuilder;
						public replaceFirst(search: string, replace: string): org.apache.commons.lang3.text.StrBuilder;
						public equals(obj: any): boolean;
						public charAt(param0: number): string;
						public indexOf(str: string): number;
						public append(param0: string): java.lang.Appendable;
						public append(seq: string, startIndex: number, length: number): org.apache.commons.lang3.text.StrBuilder;
						public appendln(str: string, startIndex: number, length: number): org.apache.commons.lang3.text.StrBuilder;
						public insert(index: number, value: boolean): org.apache.commons.lang3.text.StrBuilder;
						public asReader(): java.io.Reader;
						public appendln(str: org.apache.commons.lang3.text.StrBuilder): org.apache.commons.lang3.text.StrBuilder;
						public appendln(str: org.apache.commons.lang3.text.StrBuilder, startIndex: number, length: number): org.apache.commons.lang3.text.StrBuilder;
						public endsWith(str: string): boolean;
						public leftString(length: number): string;
						public appendFixedWidthPadLeft(value: number, width: number, padChar: string): org.apache.commons.lang3.text.StrBuilder;
						public append(chars: string[]): org.apache.commons.lang3.text.StrBuilder;
						public append(str: org.apache.commons.lang3.text.StrBuilder, startIndex: number, length: number): org.apache.commons.lang3.text.StrBuilder;
						public appendSeparator(separator: string): org.apache.commons.lang3.text.StrBuilder;
						public indexOf(str: string, startIndex: number): number;
						public size(): number;
						public appendln(chars: string[]): org.apache.commons.lang3.text.StrBuilder;
						public appendWithSeparators(iterable: java.lang.Iterable<any>, separator: string): org.apache.commons.lang3.text.StrBuilder;
						public trim(): org.apache.commons.lang3.text.StrBuilder;
						public equalsIgnoreCase(other: org.apache.commons.lang3.text.StrBuilder): boolean;
						public appendln(str: string): org.apache.commons.lang3.text.StrBuilder;
						public constructor();
						public appendAll(iterable: java.lang.Iterable<any>): org.apache.commons.lang3.text.StrBuilder;
						public insert(index: number, value: string): org.apache.commons.lang3.text.StrBuilder;
						public insert(index: number, chars: string[]): org.apache.commons.lang3.text.StrBuilder;
						public codePoints(): java.util.stream.IntStream;
						public length(): number;
						public append(str: org.apache.commons.lang3.text.StrBuilder): org.apache.commons.lang3.text.StrBuilder;
						public append(str: java.lang.StringBuilder): org.apache.commons.lang3.text.StrBuilder;
						public lastIndexOf(str: string, startIndex: number): number;
						public midString(index: number, length: number): string;
						public contains(ch: string): boolean;
						public toString(): string;
						public build(): any;
						public replace(matcher: org.apache.commons.lang3.text.StrMatcher, replaceStr: string, startIndex: number, endIndex: number, replaceCount: number): org.apache.commons.lang3.text.StrBuilder;
						public validateIndex(index: number): void;
						public append(format: string, ...objs: any[]): org.apache.commons.lang3.text.StrBuilder;
						public subSequence(param0: number, param1: number): string;
						public appendSeparator(standard: string, defaultIfEmpty: string): org.apache.commons.lang3.text.StrBuilder;
						public deleteFirst(ch: string): org.apache.commons.lang3.text.StrBuilder;
						public appendFixedWidthPadLeft(obj: any, width: number, padChar: string): org.apache.commons.lang3.text.StrBuilder;
						public appendFixedWidthPadRight(value: number, width: number, padChar: string): org.apache.commons.lang3.text.StrBuilder;
						public replaceFirst(searchStr: string, replaceStr: string): org.apache.commons.lang3.text.StrBuilder;
						public appendTo(appendable: java.lang.Appendable): void;
						public delete(startIndex: number, endIndex: number): org.apache.commons.lang3.text.StrBuilder;
						public appendNull(): org.apache.commons.lang3.text.StrBuilder;
						public substring(start: number): string;
						public replaceAll(searchStr: string, replaceStr: string): org.apache.commons.lang3.text.StrBuilder;
						public lastIndexOf(ch: string): number;
						public appendln(str: java.lang.StringBuilder, startIndex: number, length: number): org.apache.commons.lang3.text.StrBuilder;
						public constructor(initialCapacity: number);
						public getNewLineText(): string;
						public isEmpty(): boolean;
						public minimizeCapacity(): org.apache.commons.lang3.text.StrBuilder;
						public appendln(str: java.lang.StringBuffer): org.apache.commons.lang3.text.StrBuilder;
						public insert(index: number, value: number): org.apache.commons.lang3.text.StrBuilder;
						public lastIndexOf(ch: string, startIndex: number): number;
						public appendWithSeparators(array: any[], separator: string): org.apache.commons.lang3.text.StrBuilder;
						public replaceAll(matcher: org.apache.commons.lang3.text.StrMatcher, replaceStr: string): org.apache.commons.lang3.text.StrBuilder;
						public indexOf(ch: string, startIndex: number): number;
						public indexOf(matcher: org.apache.commons.lang3.text.StrMatcher, startIndex: number): number;
						public readFrom(readable: java.lang.Readable): number;
						public append(buf: java.nio.CharBuffer, startIndex: number, length: number): org.apache.commons.lang3.text.StrBuilder;
						public append(value: number): org.apache.commons.lang3.text.StrBuilder;
						public appendln(obj: any): org.apache.commons.lang3.text.StrBuilder;
						public deleteCharAt(index: number): org.apache.commons.lang3.text.StrBuilder;
						public contains(matcher: org.apache.commons.lang3.text.StrMatcher): boolean;
						public append(value: boolean): org.apache.commons.lang3.text.StrBuilder;
						public setNewLineText(newLine: string): org.apache.commons.lang3.text.StrBuilder;
						public insert(index: number, obj: any): org.apache.commons.lang3.text.StrBuilder;
						public deleteAll(ch: string): org.apache.commons.lang3.text.StrBuilder;
						public contains(str: string): boolean;
						public asWriter(): java.io.Writer;
						public getNullText(): string;
						public ensureCapacity(capacity: number): org.apache.commons.lang3.text.StrBuilder;
						public appendSeparator(separator: string, loopIndex: number): org.apache.commons.lang3.text.StrBuilder;
						public appendln(chars: string[], startIndex: number, length: number): org.apache.commons.lang3.text.StrBuilder;
						public append(seq: string): org.apache.commons.lang3.text.StrBuilder;
						public lastIndexOf(matcher: org.apache.commons.lang3.text.StrMatcher): number;
						public appendWithSeparators(it: java.util.Iterator<any>, separator: string): org.apache.commons.lang3.text.StrBuilder;
						public deleteAll(str: string): org.apache.commons.lang3.text.StrBuilder;
						public appendNewLine(): org.apache.commons.lang3.text.StrBuilder;
						public appendln(str: java.lang.StringBuffer, startIndex: number, length: number): org.apache.commons.lang3.text.StrBuilder;
						public subSequence(startIndex: number, endIndex: number): string;
						public reverse(): org.apache.commons.lang3.text.StrBuilder;
						public constructor(str: string);
						public appendFixedWidthPadRight(obj: any, width: number, padChar: string): org.apache.commons.lang3.text.StrBuilder;
						public getChars(startIndex: number, endIndex: number, destination: string[], destinationIndex: number): void;
						public insert(index: number, chars: string[], offset: number, length: number): org.apache.commons.lang3.text.StrBuilder;
						public setCharAt(index: number, ch: string): org.apache.commons.lang3.text.StrBuilder;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
						public charAt(index: number): string;
						public appendln(format: string, ...objs: any[]): org.apache.commons.lang3.text.StrBuilder;
						public build(): string;
						public lastIndexOf(matcher: org.apache.commons.lang3.text.StrMatcher, startIndex: number): number;
						public equals(other: org.apache.commons.lang3.text.StrBuilder): boolean;
						public indexOf(ch: string): number;
						public appendln(ch: string): org.apache.commons.lang3.text.StrBuilder;
						public replaceFirst(matcher: org.apache.commons.lang3.text.StrMatcher, replaceStr: string): org.apache.commons.lang3.text.StrBuilder;
						public append(ch: string): org.apache.commons.lang3.text.StrBuilder;
						public deleteFirst(str: string): org.apache.commons.lang3.text.StrBuilder;
						public chars(): java.util.stream.IntStream;
						public clear(): org.apache.commons.lang3.text.StrBuilder;
						public toCharArray(startIndex: number, endIndex: number): string[];
						public lastIndexOf(str: string): number;
						public append(str: string, startIndex: number, length: number): org.apache.commons.lang3.text.StrBuilder;
						public toCharArray(): string[];
						public append(str: java.lang.StringBuffer, startIndex: number, length: number): org.apache.commons.lang3.text.StrBuilder;
						public validateRange(startIndex: number, endIndex: number): number;
						public appendPadding(length: number, padChar: string): org.apache.commons.lang3.text.StrBuilder;
						public appendAll(...array: any[]): org.apache.commons.lang3.text.StrBuilder;
						public append(str: string): org.apache.commons.lang3.text.StrBuilder;
						public append(str: java.lang.StringBuilder, startIndex: number, length: number): org.apache.commons.lang3.text.StrBuilder;
						public append(chars: string[], startIndex: number, length: number): org.apache.commons.lang3.text.StrBuilder;
						public appendln(str: java.lang.StringBuilder): org.apache.commons.lang3.text.StrBuilder;
						public indexOf(matcher: org.apache.commons.lang3.text.StrMatcher): number;
						public substring(startIndex: number, endIndex: number): string;
						public hashCode(): number;
						public asTokenizer(): org.apache.commons.lang3.text.StrTokenizer;
						public appendAll(it: java.util.Iterator<any>): org.apache.commons.lang3.text.StrBuilder;
						public isNotEmpty(): boolean;
						public setLength(length: number): org.apache.commons.lang3.text.StrBuilder;
						public capacity(): number;
						public append(str: java.lang.StringBuffer): org.apache.commons.lang3.text.StrBuilder;
						public setNullText(nullText: string): org.apache.commons.lang3.text.StrBuilder;
						public insert(index: number, str: string): org.apache.commons.lang3.text.StrBuilder;
						public appendln(value: boolean): org.apache.commons.lang3.text.StrBuilder;
						public append(obj: any): org.apache.commons.lang3.text.StrBuilder;
						public replaceAll(search: string, replace: string): org.apache.commons.lang3.text.StrBuilder;
						public appendln(value: number): org.apache.commons.lang3.text.StrBuilder;
						public rightString(length: number): string;
						public toStringBuffer(): java.lang.StringBuffer;
						public toStringBuilder(): java.lang.StringBuilder;
						public append(buf: java.nio.CharBuffer): org.apache.commons.lang3.text.StrBuilder;
						public startsWith(str: string): boolean;
						public deleteFirst(matcher: org.apache.commons.lang3.text.StrMatcher): org.apache.commons.lang3.text.StrBuilder;
					}
					export module StrBuilder {
						export class StrBuilderReader extends java.io.Reader {
							public static class: java.lang.Class<org.apache.commons.lang3.text.StrBuilder.StrBuilderReader>;
							public markSupported(): boolean;
							public close(): void;
							public read(target: java.nio.CharBuffer): number;
							public mark(readAheadLimit: number): void;
							public ready(): boolean;
							public read(): number;
							public read(param0: string[], param1: number, param2: number): number;
							public read(cbuf: string[]): number;
							public skip(n: number): number;
							public read(param0: java.nio.CharBuffer): number;
							public read(b: string[], off: number, len: number): number;
							public reset(): void;
						}
						export class StrBuilderTokenizer extends org.apache.commons.lang3.text.StrTokenizer {
							public static class: java.lang.Class<org.apache.commons.lang3.text.StrBuilder.StrBuilderTokenizer>;
							public set(obj: string): void;
							public add(param0: any): void;
							public previous(): any;
							public hasNext(): boolean;
							public remove(): void;
							public tokenize(chars: string[], offset: number, count: number): java.util.List<string>;
							public tokenize(srcChars: string[], offset: number, count: number): java.util.List<string>;
							public add(obj: string): void;
							public set(param0: any): void;
							public getContent(): string;
							public previousIndex(): number;
							public previous(): string;
							public nextIndex(): number;
							public next(): string;
							public hasPrevious(): boolean;
							public next(): any;
						}
						export class StrBuilderWriter extends java.io.Writer {
							public static class: java.lang.Class<org.apache.commons.lang3.text.StrBuilder.StrBuilderWriter>;
							public close(): void;
							public write(c: number): void;
							public append(c: string): java.io.Writer;
							public append(param0: string): java.lang.Appendable;
							public write(cbuf: string[], off: number, len: number): void;
							public append(csq: string, start: number, end: number): java.io.Writer;
							public write(cbuf: string[]): void;
							public write(param0: string[], param1: number, param2: number): void;
							public flush(): void;
							public append(csq: string): java.io.Writer;
							public write(str: string, off: number, len: number): void;
							public append(param0: string, param1: number, param2: number): java.lang.Appendable;
							public write(str: string): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export abstract class StrLookup<V>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.text.StrLookup<any>>;
						public lookup(param0: string): string;
						public constructor();
						public static noneLookup(): org.apache.commons.lang3.text.StrLookup<any>;
						public static mapLookup(map: java.util.Map<any,any>): org.apache.commons.lang3.text.StrLookup<any>;
						public static systemPropertiesLookup(): org.apache.commons.lang3.text.StrLookup<string>;
					}
					export module StrLookup {
						export class MapStrLookup<V>  extends org.apache.commons.lang3.text.StrLookup<any> {
							public static class: java.lang.Class<org.apache.commons.lang3.text.StrLookup.MapStrLookup<any>>;
							public lookup(param0: string): string;
							public lookup(key: string): string;
						}
						export class SystemPropertiesStrLookup extends org.apache.commons.lang3.text.StrLookup<string> {
							public static class: java.lang.Class<org.apache.commons.lang3.text.StrLookup.SystemPropertiesStrLookup>;
							public lookup(param0: string): string;
							public lookup(key: string): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export abstract class StrMatcher extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.text.StrMatcher>;
						public constructor();
						public isMatch(param0: string[], param1: number, param2: number, param3: number): number;
						public static charMatcher(ch: string): org.apache.commons.lang3.text.StrMatcher;
						public static quoteMatcher(): org.apache.commons.lang3.text.StrMatcher;
						public static stringMatcher(str: string): org.apache.commons.lang3.text.StrMatcher;
						public isMatch(buffer: string[], pos: number): number;
						public static tabMatcher(): org.apache.commons.lang3.text.StrMatcher;
						public static commaMatcher(): org.apache.commons.lang3.text.StrMatcher;
						public static singleQuoteMatcher(): org.apache.commons.lang3.text.StrMatcher;
						public static charSetMatcher(chars: string): org.apache.commons.lang3.text.StrMatcher;
						public static doubleQuoteMatcher(): org.apache.commons.lang3.text.StrMatcher;
						public static noneMatcher(): org.apache.commons.lang3.text.StrMatcher;
						public static spaceMatcher(): org.apache.commons.lang3.text.StrMatcher;
						public static trimMatcher(): org.apache.commons.lang3.text.StrMatcher;
						public static splitMatcher(): org.apache.commons.lang3.text.StrMatcher;
						public static charSetMatcher(...chars: string[]): org.apache.commons.lang3.text.StrMatcher;
					}
					export module StrMatcher {
						export class CharMatcher extends org.apache.commons.lang3.text.StrMatcher {
							public static class: java.lang.Class<org.apache.commons.lang3.text.StrMatcher.CharMatcher>;
							public isMatch(buffer: string[], pos: number): number;
							public isMatch(buffer: string[], pos: number, bufferStart: number, bufferEnd: number): number;
							public isMatch(param0: string[], param1: number, param2: number, param3: number): number;
						}
						export class CharSetMatcher extends org.apache.commons.lang3.text.StrMatcher {
							public static class: java.lang.Class<org.apache.commons.lang3.text.StrMatcher.CharSetMatcher>;
							public isMatch(buffer: string[], pos: number): number;
							public isMatch(buffer: string[], pos: number, bufferStart: number, bufferEnd: number): number;
							public isMatch(param0: string[], param1: number, param2: number, param3: number): number;
						}
						export class NoMatcher extends org.apache.commons.lang3.text.StrMatcher {
							public static class: java.lang.Class<org.apache.commons.lang3.text.StrMatcher.NoMatcher>;
							public isMatch(buffer: string[], pos: number): number;
							public isMatch(buffer: string[], pos: number, bufferStart: number, bufferEnd: number): number;
							public isMatch(param0: string[], param1: number, param2: number, param3: number): number;
						}
						export class StringMatcher extends org.apache.commons.lang3.text.StrMatcher {
							public static class: java.lang.Class<org.apache.commons.lang3.text.StrMatcher.StringMatcher>;
							public isMatch(buffer: string[], pos: number): number;
							public isMatch(buffer: string[], pos: number, bufferStart: number, bufferEnd: number): number;
							public isMatch(param0: string[], param1: number, param2: number, param3: number): number;
							public toString(): string;
						}
						export class TrimMatcher extends org.apache.commons.lang3.text.StrMatcher {
							public static class: java.lang.Class<org.apache.commons.lang3.text.StrMatcher.TrimMatcher>;
							public isMatch(buffer: string[], pos: number): number;
							public isMatch(buffer: string[], pos: number, bufferStart: number, bufferEnd: number): number;
							public isMatch(param0: string[], param1: number, param2: number, param3: number): number;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export class StrSubstitutor extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.text.StrSubstitutor>;
						public static DEFAULT_ESCAPE: string;
						public static DEFAULT_PREFIX: org.apache.commons.lang3.text.StrMatcher;
						public static DEFAULT_SUFFIX: org.apache.commons.lang3.text.StrMatcher;
						public static DEFAULT_VALUE_DELIMITER: org.apache.commons.lang3.text.StrMatcher;
						public setVariableSuffixMatcher(suffixMatcher: org.apache.commons.lang3.text.StrMatcher): org.apache.commons.lang3.text.StrSubstitutor;
						public static replaceSystemProperties(source: any): string;
						public static replace(source: any, valueMap: java.util.Map<any,any>, prefix: string, suffix: string): string;
						public constructor(variableResolver: org.apache.commons.lang3.text.StrLookup<any>);
						public replaceIn(source: java.lang.StringBuffer): boolean;
						public resolveVariable(variableName: string, buf: org.apache.commons.lang3.text.StrBuilder, startPos: number, endPos: number): string;
						public setEscapeChar(escapeCharacter: string): void;
						public setVariablePrefix(prefix: string): org.apache.commons.lang3.text.StrSubstitutor;
						public setVariableSuffix(suffix: string): org.apache.commons.lang3.text.StrSubstitutor;
						public setPreserveEscapes(preserveEscapes: boolean): void;
						public replaceIn(source: java.lang.StringBuffer, offset: number, length: number): boolean;
						public getValueDelimiterMatcher(): org.apache.commons.lang3.text.StrMatcher;
						public replace(source: string): string;
						public constructor(variableResolver: org.apache.commons.lang3.text.StrLookup<any>, prefixMatcher: org.apache.commons.lang3.text.StrMatcher, suffixMatcher: org.apache.commons.lang3.text.StrMatcher, escape: string);
						public constructor(valueMap: java.util.Map<any,any>, prefix: string, suffix: string);
						public constructor(valueMap: java.util.Map<any,any>, prefix: string, suffix: string, escape: string, valueDelimiter: string);
						public replaceIn(source: org.apache.commons.lang3.text.StrBuilder): boolean;
						public setVariableResolver(variableResolver: org.apache.commons.lang3.text.StrLookup<any>): void;
						public constructor(variableResolver: org.apache.commons.lang3.text.StrLookup<any>, prefix: string, suffix: string, escape: string, valueDelimiter: string);
						public replaceIn(source: java.lang.StringBuilder, offset: number, length: number): boolean;
						public setValueDelimiterMatcher(valueDelimiterMatcher: org.apache.commons.lang3.text.StrMatcher): org.apache.commons.lang3.text.StrSubstitutor;
						public constructor();
						public static replace(source: any, valueProperties: java.util.Properties): string;
						public replace(source: org.apache.commons.lang3.text.StrBuilder): string;
						public constructor(variableResolver: org.apache.commons.lang3.text.StrLookup<any>, prefixMatcher: org.apache.commons.lang3.text.StrMatcher, suffixMatcher: org.apache.commons.lang3.text.StrMatcher, escape: string, valueDelimiterMatcher: org.apache.commons.lang3.text.StrMatcher);
						public constructor(variableResolver: org.apache.commons.lang3.text.StrLookup<any>, prefix: string, suffix: string, escape: string);
						public replace(source: java.lang.StringBuffer): string;
						public getVariableSuffixMatcher(): org.apache.commons.lang3.text.StrMatcher;
						public setValueDelimiter(valueDelimiter: string): org.apache.commons.lang3.text.StrSubstitutor;
						public getVariablePrefixMatcher(): org.apache.commons.lang3.text.StrMatcher;
						public getEscapeChar(): string;
						public setVariablePrefixMatcher(prefixMatcher: org.apache.commons.lang3.text.StrMatcher): org.apache.commons.lang3.text.StrSubstitutor;
						public getVariableResolver(): org.apache.commons.lang3.text.StrLookup<any>;
						public constructor(valueMap: java.util.Map<any,any>, prefix: string, suffix: string, escape: string);
						public substitute(buf: org.apache.commons.lang3.text.StrBuilder, offset: number, length: number): boolean;
						public setEnableSubstitutionInVariables(enableSubstitutionInVariables: boolean): void;
						public isPreserveEscapes(): boolean;
						public replace(source: string[]): string;
						public replaceIn(source: java.lang.StringBuilder): boolean;
						public replaceIn(source: org.apache.commons.lang3.text.StrBuilder, offset: number, length: number): boolean;
						public isEnableSubstitutionInVariables(): boolean;
						public replace(source: java.lang.StringBuffer, offset: number, length: number): string;
						public replace(source: org.apache.commons.lang3.text.StrBuilder, offset: number, length: number): string;
						public replace(source: any): string;
						public static replace(source: any, valueMap: java.util.Map<any,any>): string;
						public constructor(valueMap: java.util.Map<any,any>);
						public replace(source: string, offset: number, length: number): string;
						public replace(source: string[], offset: number, length: number): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export class StrTokenizer extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.text.StrTokenizer>;
						public previousToken(): string;
						public setDelimiterMatcher(delim: org.apache.commons.lang3.text.StrMatcher): org.apache.commons.lang3.text.StrTokenizer;
						public constructor(input: string[], delim: org.apache.commons.lang3.text.StrMatcher, quote: org.apache.commons.lang3.text.StrMatcher);
						public setIgnoredChar(ignored: string): org.apache.commons.lang3.text.StrTokenizer;
						public next(): any;
						public constructor(input: string, delim: string, quote: string);
						public nextIndex(): number;
						public setDelimiterString(delim: string): org.apache.commons.lang3.text.StrTokenizer;
						public reset(input: string[]): org.apache.commons.lang3.text.StrTokenizer;
						public setIgnoreEmptyTokens(ignoreEmptyTokens: boolean): org.apache.commons.lang3.text.StrTokenizer;
						public getQuoteMatcher(): org.apache.commons.lang3.text.StrMatcher;
						public constructor(input: string, delim: org.apache.commons.lang3.text.StrMatcher);
						public setQuoteChar(quote: string): org.apache.commons.lang3.text.StrTokenizer;
						public setQuoteMatcher(quote: org.apache.commons.lang3.text.StrMatcher): org.apache.commons.lang3.text.StrTokenizer;
						public size(): number;
						public getTokenArray(): string[];
						public add(obj: string): void;
						public previous(): string;
						public constructor();
						public getContent(): string;
						public constructor(input: string, delim: org.apache.commons.lang3.text.StrMatcher, quote: org.apache.commons.lang3.text.StrMatcher);
						public reset(): org.apache.commons.lang3.text.StrTokenizer;
						public static getTSVInstance(input: string): org.apache.commons.lang3.text.StrTokenizer;
						public toString(): string;
						public constructor(input: string[], delim: string, quote: string);
						public tokenize(srcChars: string[], offset: number, count: number): java.util.List<string>;
						public static getCSVInstance(input: string[]): org.apache.commons.lang3.text.StrTokenizer;
						public hasPrevious(): boolean;
						public getIgnoredMatcher(): org.apache.commons.lang3.text.StrMatcher;
						public setEmptyTokenAsNull(emptyAsNull: boolean): org.apache.commons.lang3.text.StrTokenizer;
						public constructor(input: string);
						public remove(): void;
						public isIgnoreEmptyTokens(): boolean;
						public add(param0: any): void;
						public getTokenList(): java.util.List<string>;
						public constructor(input: string[], delim: string);
						public static getCSVInstance(input: string): org.apache.commons.lang3.text.StrTokenizer;
						public setIgnoredMatcher(ignored: org.apache.commons.lang3.text.StrMatcher): org.apache.commons.lang3.text.StrTokenizer;
						public getDelimiterMatcher(): org.apache.commons.lang3.text.StrMatcher;
						public nextToken(): string;
						public setTrimmerMatcher(trimmer: org.apache.commons.lang3.text.StrMatcher): org.apache.commons.lang3.text.StrTokenizer;
						public setDelimiterChar(delim: string): org.apache.commons.lang3.text.StrTokenizer;
						public static getTSVInstance(): org.apache.commons.lang3.text.StrTokenizer;
						public constructor(input: string, delim: string);
						public next(): string;
						public getTrimmerMatcher(): org.apache.commons.lang3.text.StrMatcher;
						public isEmptyTokenAsNull(): boolean;
						public set(obj: string): void;
						public previousIndex(): number;
						public reset(input: string): org.apache.commons.lang3.text.StrTokenizer;
						public clone(): any;
						public previous(): any;
						public static getTSVInstance(input: string[]): org.apache.commons.lang3.text.StrTokenizer;
						public static getCSVInstance(): org.apache.commons.lang3.text.StrTokenizer;
						public set(param0: any): void;
						public constructor(input: string[]);
						public constructor(input: string[], delim: org.apache.commons.lang3.text.StrMatcher);
						public hasNext(): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export class WordUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.text.WordUtils>;
						public static wrap(str: string, wrapLength: number, newLineStr: string, wrapLongWords: boolean, wrapOn: string): string;
						public static initials(str: string, ...delimiters: string[]): string;
						public constructor();
						public static swapCase(str: string): string;
						public static initials(str: string): string;
						public static wrap(str: string, wrapLength: number, newLineStr: string, wrapLongWords: boolean): string;
						public static capitalizeFully(str: string, ...delimiters: string[]): string;
						public static wrap(str: string, wrapLength: number): string;
						public static uncapitalize(str: string): string;
						public static uncapitalize(str: string, ...delimiters: string[]): string;
						public static containsAllWords(word: string, ...words: string[]): boolean;
						public static capitalize(str: string, ...delimiters: string[]): string;
						public static capitalizeFully(str: string): string;
						public static capitalize(str: string): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export module translate {
						export class AggregateTranslator extends org.apache.commons.lang3.text.translate.CharSequenceTranslator {
							public static class: java.lang.Class<org.apache.commons.lang3.text.translate.AggregateTranslator>;
							public constructor();
							public translate(input: string, index: number, out: java.io.Writer): number;
							public constructor(...translators: org.apache.commons.lang3.text.translate.CharSequenceTranslator[]);
							public translate(input: string): string;
							public translate(param0: string, param1: number, param2: java.io.Writer): number;
							public translate(input: string, writer: java.io.Writer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export module translate {
						export abstract class CharSequenceTranslator extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.lang3.text.translate.CharSequenceTranslator>;
							public constructor();
							public with(...translators: org.apache.commons.lang3.text.translate.CharSequenceTranslator[]): org.apache.commons.lang3.text.translate.CharSequenceTranslator;
							public translate(input: string): string;
							public static hex(codePoint: number): string;
							public translate(param0: string, param1: number, param2: java.io.Writer): number;
							public translate(input: string, writer: java.io.Writer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export module translate {
						export abstract class CodePointTranslator extends org.apache.commons.lang3.text.translate.CharSequenceTranslator {
							public static class: java.lang.Class<org.apache.commons.lang3.text.translate.CodePointTranslator>;
							public constructor();
							public translate(input: string, index: number, out: java.io.Writer): number;
							public translate(param0: number, param1: java.io.Writer): boolean;
							public translate(input: string): string;
							public translate(param0: string, param1: number, param2: java.io.Writer): number;
							public translate(input: string, writer: java.io.Writer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export module translate {
						export class EntityArrays extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.lang3.text.translate.EntityArrays>;
							public constructor();
							public static HTML40_EXTENDED_UNESCAPE(): string[][];
							public static JAVA_CTRL_CHARS_UNESCAPE(): string[][];
							public static APOS_UNESCAPE(): string[][];
							public static ISO8859_1_ESCAPE(): string[][];
							public static HTML40_EXTENDED_ESCAPE(): string[][];
							public static APOS_ESCAPE(): string[][];
							public static BASIC_ESCAPE(): string[][];
							public static BASIC_UNESCAPE(): string[][];
							public static ISO8859_1_UNESCAPE(): string[][];
							public static JAVA_CTRL_CHARS_ESCAPE(): string[][];
							public static invert(array: string[][]): string[][];
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export module translate {
						export class JavaUnicodeEscaper extends org.apache.commons.lang3.text.translate.UnicodeEscaper {
							public static class: java.lang.Class<org.apache.commons.lang3.text.translate.JavaUnicodeEscaper>;
							public constructor();
							public static between(codePointLow: number, codePointHigh: number): org.apache.commons.lang3.text.translate.UnicodeEscaper;
							public constructor(below: number, above: number, between: boolean);
							public static above(codePoint: number): org.apache.commons.lang3.text.translate.UnicodeEscaper;
							public static below(codePoint: number): org.apache.commons.lang3.text.translate.UnicodeEscaper;
							public static below(codePoint: number): org.apache.commons.lang3.text.translate.JavaUnicodeEscaper;
							public static outsideOf(codePointLow: number, codePointHigh: number): org.apache.commons.lang3.text.translate.JavaUnicodeEscaper;
							public toUtf16Escape(codePoint: number): string;
							public static outsideOf(codePointLow: number, codePointHigh: number): org.apache.commons.lang3.text.translate.UnicodeEscaper;
							public static above(codePoint: number): org.apache.commons.lang3.text.translate.JavaUnicodeEscaper;
							public static between(codePointLow: number, codePointHigh: number): org.apache.commons.lang3.text.translate.JavaUnicodeEscaper;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export module translate {
						export class LookupTranslator extends org.apache.commons.lang3.text.translate.CharSequenceTranslator {
							public static class: java.lang.Class<org.apache.commons.lang3.text.translate.LookupTranslator>;
							public constructor();
							public translate(input: string, index: number, out: java.io.Writer): number;
							public translate(input: string): string;
							public constructor(...lookup: string[][]);
							public translate(param0: string, param1: number, param2: java.io.Writer): number;
							public translate(input: string, writer: java.io.Writer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export module translate {
						export class NumericEntityEscaper extends org.apache.commons.lang3.text.translate.CodePointTranslator {
							public static class: java.lang.Class<org.apache.commons.lang3.text.translate.NumericEntityEscaper>;
							public constructor();
							public translate(input: string, index: number, out: java.io.Writer): number;
							public static above(codePoint: number): org.apache.commons.lang3.text.translate.NumericEntityEscaper;
							public translate(param0: number, param1: java.io.Writer): boolean;
							public static below(codePoint: number): org.apache.commons.lang3.text.translate.NumericEntityEscaper;
							public static between(codePointLow: number, codePointHigh: number): org.apache.commons.lang3.text.translate.NumericEntityEscaper;
							public translate(input: string): string;
							public static outsideOf(codePointLow: number, codePointHigh: number): org.apache.commons.lang3.text.translate.NumericEntityEscaper;
							public translate(input: string, writer: java.io.Writer): void;
							public translate(codePoint: number, out: java.io.Writer): boolean;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export module translate {
						export class NumericEntityUnescaper extends org.apache.commons.lang3.text.translate.CharSequenceTranslator {
							public static class: java.lang.Class<org.apache.commons.lang3.text.translate.NumericEntityUnescaper>;
							public constructor();
							public isSet(option: org.apache.commons.lang3.text.translate.NumericEntityUnescaper.OPTION): boolean;
							public translate(input: string, index: number, out: java.io.Writer): number;
							public translate(input: string): string;
							public translate(param0: string, param1: number, param2: java.io.Writer): number;
							public translate(input: string, writer: java.io.Writer): void;
							public constructor(...options: org.apache.commons.lang3.text.translate.NumericEntityUnescaper.OPTION[]);
						}
						export module NumericEntityUnescaper {
							export class OPTION {
								public static class: java.lang.Class<org.apache.commons.lang3.text.translate.NumericEntityUnescaper.OPTION>;
								public static semiColonRequired: org.apache.commons.lang3.text.translate.NumericEntityUnescaper.OPTION;
								public static semiColonOptional: org.apache.commons.lang3.text.translate.NumericEntityUnescaper.OPTION;
								public static errorIfNoSemiColon: org.apache.commons.lang3.text.translate.NumericEntityUnescaper.OPTION;
								public static valueOf(name: string): org.apache.commons.lang3.text.translate.NumericEntityUnescaper.OPTION;
								public static values(): org.apache.commons.lang3.text.translate.NumericEntityUnescaper.OPTION[];
								public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export module translate {
						export class OctalUnescaper extends org.apache.commons.lang3.text.translate.CharSequenceTranslator {
							public static class: java.lang.Class<org.apache.commons.lang3.text.translate.OctalUnescaper>;
							public constructor();
							public translate(input: string, index: number, out: java.io.Writer): number;
							public translate(input: string): string;
							public translate(param0: string, param1: number, param2: java.io.Writer): number;
							public translate(input: string, writer: java.io.Writer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export module translate {
						export class UnicodeEscaper extends org.apache.commons.lang3.text.translate.CodePointTranslator {
							public static class: java.lang.Class<org.apache.commons.lang3.text.translate.UnicodeEscaper>;
							public constructor();
							public translate(input: string, index: number, out: java.io.Writer): number;
							public constructor(below: number, above: number, between: boolean);
							public static between(codePointLow: number, codePointHigh: number): org.apache.commons.lang3.text.translate.UnicodeEscaper;
							public static below(codePoint: number): org.apache.commons.lang3.text.translate.UnicodeEscaper;
							public static above(codePoint: number): org.apache.commons.lang3.text.translate.UnicodeEscaper;
							public translate(param0: number, param1: java.io.Writer): boolean;
							public translate(input: string): string;
							public translate(input: string, writer: java.io.Writer): void;
							public toUtf16Escape(codePoint: number): string;
							public static outsideOf(codePointLow: number, codePointHigh: number): org.apache.commons.lang3.text.translate.UnicodeEscaper;
							public translate(codePoint: number, out: java.io.Writer): boolean;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export module translate {
						export class UnicodeUnescaper extends org.apache.commons.lang3.text.translate.CharSequenceTranslator {
							public static class: java.lang.Class<org.apache.commons.lang3.text.translate.UnicodeUnescaper>;
							public constructor();
							public translate(input: string, index: number, out: java.io.Writer): number;
							public translate(input: string): string;
							public translate(param0: string, param1: number, param2: java.io.Writer): number;
							public translate(input: string, writer: java.io.Writer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module text {
					export module translate {
						export class UnicodeUnpairedSurrogateRemover extends org.apache.commons.lang3.text.translate.CodePointTranslator {
							public static class: java.lang.Class<org.apache.commons.lang3.text.translate.UnicodeUnpairedSurrogateRemover>;
							public constructor();
							public translate(input: string, index: number, out: java.io.Writer): number;
							public translate(param0: number, param1: java.io.Writer): boolean;
							public translate(input: string): string;
							public translate(input: string, writer: java.io.Writer): void;
							public translate(codePoint: number, out: java.io.Writer): boolean;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module time {
					export class CalendarUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.time.CalendarUtils>;
						public static INSTANCE: org.apache.commons.lang3.time.CalendarUtils;
						public getDayOfMonth(): number;
						public getMonth(): number;
						public getYear(): number;
						public constructor(calendar: java.util.Calendar);
						public getDayOfYear(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module time {
					export class DateFormatUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.time.DateFormatUtils>;
						public static ISO_8601_EXTENDED_DATETIME_FORMAT: org.apache.commons.lang3.time.FastDateFormat;
						public static ISO_DATETIME_FORMAT: org.apache.commons.lang3.time.FastDateFormat;
						public static ISO_8601_EXTENDED_DATETIME_TIME_ZONE_FORMAT: org.apache.commons.lang3.time.FastDateFormat;
						public static ISO_DATETIME_TIME_ZONE_FORMAT: org.apache.commons.lang3.time.FastDateFormat;
						public static ISO_8601_EXTENDED_DATE_FORMAT: org.apache.commons.lang3.time.FastDateFormat;
						public static ISO_DATE_FORMAT: org.apache.commons.lang3.time.FastDateFormat;
						public static ISO_DATE_TIME_ZONE_FORMAT: org.apache.commons.lang3.time.FastDateFormat;
						public static ISO_TIME_FORMAT: org.apache.commons.lang3.time.FastDateFormat;
						public static ISO_TIME_TIME_ZONE_FORMAT: org.apache.commons.lang3.time.FastDateFormat;
						public static ISO_8601_EXTENDED_TIME_FORMAT: org.apache.commons.lang3.time.FastDateFormat;
						public static ISO_TIME_NO_T_FORMAT: org.apache.commons.lang3.time.FastDateFormat;
						public static ISO_8601_EXTENDED_TIME_TIME_ZONE_FORMAT: org.apache.commons.lang3.time.FastDateFormat;
						public static ISO_TIME_NO_T_TIME_ZONE_FORMAT: org.apache.commons.lang3.time.FastDateFormat;
						public static SMTP_DATETIME_FORMAT: org.apache.commons.lang3.time.FastDateFormat;
						public static format(millis: number, param1: string): string;
						public constructor();
						public static format(millis: number, param1: string, pattern: java.util.TimeZone, timeZone: java.util.Locale): string;
						public static format(date: java.util.Date, pattern: string, locale: java.util.Locale): string;
						public static format(calendar: java.util.Calendar, pattern: string, locale: java.util.Locale): string;
						public static format(date: java.util.Date, pattern: string, timeZone: java.util.TimeZone): string;
						public static formatUTC(date: java.util.Date, pattern: string): string;
						public static formatUTC(date: java.util.Date, pattern: string, locale: java.util.Locale): string;
						public static format(date: java.util.Date, pattern: string): string;
						public static format(calendar: java.util.Calendar, pattern: string): string;
						public static format(date: java.util.Date, pattern: string, timeZone: java.util.TimeZone, locale: java.util.Locale): string;
						public static format(calendar: java.util.Calendar, pattern: string, timeZone: java.util.TimeZone, locale: java.util.Locale): string;
						public static format(millis: number, param1: string, pattern: java.util.TimeZone): string;
						public static format(calendar: java.util.Calendar, pattern: string, timeZone: java.util.TimeZone): string;
						public static format(millis: number, param1: string, pattern: java.util.Locale): string;
						public static formatUTC(millis: number, param1: string): string;
						public static formatUTC(millis: number, param1: string, pattern: java.util.Locale): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module time {
					export class DateParser extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.time.DateParser>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.time.DateParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							parse(param0: string): java.util.Date;
							parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
							parse(param0: string, param1: java.text.ParsePosition, param2: java.util.Calendar): boolean;
							getPattern(): string;
							getTimeZone(): java.util.TimeZone;
							getLocale(): java.util.Locale;
							parseObject(param0: string): any;
							parseObject(param0: string, param1: java.text.ParsePosition): any;
						});
						public constructor();
						public parse(param0: string): java.util.Date;
						public parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
						public getTimeZone(): java.util.TimeZone;
						public getLocale(): java.util.Locale;
						public parse(param0: string, param1: java.text.ParsePosition, param2: java.util.Calendar): boolean;
						public parseObject(param0: string, param1: java.text.ParsePosition): any;
						public parseObject(param0: string): any;
						public getPattern(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module time {
					export class DatePrinter extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.time.DatePrinter>;
						/**
						 * Constructs a new instance of the org.apache.commons.lang3.time.DatePrinter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							format(param0: number): string;
							format(param0: java.util.Date): string;
							format(param0: java.util.Calendar): string;
							format(param0: number, param1: java.lang.StringBuffer): java.lang.StringBuffer;
							format(param0: java.util.Date, param1: java.lang.StringBuffer): java.lang.StringBuffer;
							format(param0: java.util.Calendar, param1: java.lang.StringBuffer): java.lang.StringBuffer;
							format(param0: number, param1: java.lang.Appendable): java.lang.Appendable;
							format(param0: java.util.Date, param1: java.lang.Appendable): java.lang.Appendable;
							format(param0: java.util.Calendar, param1: java.lang.Appendable): java.lang.Appendable;
							getPattern(): string;
							getTimeZone(): java.util.TimeZone;
							getLocale(): java.util.Locale;
							format(param0: any, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
						});
						public constructor();
						public format(param0: number): string;
						public format(param0: java.util.Calendar): string;
						public format(param0: java.util.Calendar, param1: java.lang.Appendable): java.lang.Appendable;
						public getLocale(): java.util.Locale;
						public format(param0: number, param1: java.lang.Appendable): java.lang.Appendable;
						/** @deprecated */
						public format(param0: number, param1: java.lang.StringBuffer): java.lang.StringBuffer;
						public format(param0: java.util.Date): string;
						public getTimeZone(): java.util.TimeZone;
						public format(param0: any, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
						/** @deprecated */
						public format(param0: java.util.Date, param1: java.lang.StringBuffer): java.lang.StringBuffer;
						/** @deprecated */
						public format(param0: java.util.Calendar, param1: java.lang.StringBuffer): java.lang.StringBuffer;
						public format(param0: java.util.Date, param1: java.lang.Appendable): java.lang.Appendable;
						public getPattern(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module time {
					export class DateUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.time.DateUtils>;
						public static MILLIS_PER_SECOND: number;
						public static MILLIS_PER_MINUTE: number;
						public static MILLIS_PER_HOUR: number;
						public static MILLIS_PER_DAY: number;
						public static SEMI_MONTH: number;
						public static RANGE_WEEK_SUNDAY: number;
						public static RANGE_WEEK_MONDAY: number;
						public static RANGE_WEEK_RELATIVE: number;
						public static RANGE_WEEK_CENTER: number;
						public static RANGE_MONTH_SUNDAY: number;
						public static RANGE_MONTH_MONDAY: number;
						public static setMonths(date: java.util.Date, amount: number): java.util.Date;
						public static truncate(date: java.util.Calendar, field: number): java.util.Calendar;
						public static round(date: any, field: number): java.util.Date;
						public static ceiling(calendar: java.util.Calendar, field: number): java.util.Calendar;
						public static getFragmentInMilliseconds(date: java.util.Date, fragment: number): number;
						public static getFragmentInSeconds(calendar: java.util.Calendar, fragment: number): number;
						public static truncatedEquals(cal1: java.util.Calendar, cal2: java.util.Calendar, field: number): boolean;
						public static isSameLocalTime(cal1: java.util.Calendar, cal2: java.util.Calendar): boolean;
						public static isSameInstant(cal1: java.util.Calendar, cal2: java.util.Calendar): boolean;
						public static parseDate(str: string, locale: java.util.Locale, ...parsePatterns: string[]): java.util.Date;
						public static iterator(calendar: java.util.Calendar, rangeStyle: number): java.util.Iterator<java.util.Calendar>;
						public static setMilliseconds(date: java.util.Date, amount: number): java.util.Date;
						public static addHours(date: java.util.Date, amount: number): java.util.Date;
						public static iterator(focus: java.util.Date, rangeStyle: number): java.util.Iterator<java.util.Calendar>;
						public static truncatedCompareTo(date1: java.util.Date, date2: java.util.Date, field: number): number;
						public static parseDate(str: string, ...parsePatterns: string[]): java.util.Date;
						public constructor();
						public static getFragmentInMinutes(calendar: java.util.Calendar, fragment: number): number;
						public static truncate(date: any, field: number): java.util.Date;
						public static toCalendar(date: java.util.Date, tz: java.util.TimeZone): java.util.Calendar;
						public static truncate(date: java.util.Date, field: number): java.util.Date;
						public static addMinutes(date: java.util.Date, amount: number): java.util.Date;
						public static round(date: java.util.Date, field: number): java.util.Date;
						public static getFragmentInSeconds(date: java.util.Date, fragment: number): number;
						public static parseDateStrictly(str: string, ...parsePatterns: string[]): java.util.Date;
						public static isSameDay(cal1: java.util.Calendar, cal2: java.util.Calendar): boolean;
						public static iterator(calendar: any, rangeStyle: number): java.util.Iterator<any>;
						public static getFragmentInDays(date: java.util.Date, fragment: number): number;
						public static getFragmentInMinutes(date: java.util.Date, fragment: number): number;
						public static setDays(date: java.util.Date, amount: number): java.util.Date;
						public static addYears(date: java.util.Date, amount: number): java.util.Date;
						public static getFragmentInDays(calendar: java.util.Calendar, fragment: number): number;
						public static ceiling(date: any, field: number): java.util.Date;
						public static addDays(date: java.util.Date, amount: number): java.util.Date;
						public static getFragmentInMilliseconds(calendar: java.util.Calendar, fragment: number): number;
						public static truncatedEquals(date1: java.util.Date, date2: java.util.Date, field: number): boolean;
						public static isSameDay(date1: java.util.Date, date2: java.util.Date): boolean;
						public static addSeconds(date: java.util.Date, amount: number): java.util.Date;
						public static ceiling(date: java.util.Date, field: number): java.util.Date;
						public static round(calendar: java.util.Calendar, field: number): java.util.Calendar;
						public static isSameInstant(date1: java.util.Date, date2: java.util.Date): boolean;
						public static getFragmentInHours(calendar: java.util.Calendar, fragment: number): number;
						public static setYears(date: java.util.Date, amount: number): java.util.Date;
						public static setHours(date: java.util.Date, amount: number): java.util.Date;
						public static addMonths(date: java.util.Date, amount: number): java.util.Date;
						public static toCalendar(date: java.util.Date): java.util.Calendar;
						public static addWeeks(date: java.util.Date, amount: number): java.util.Date;
						public static setSeconds(date: java.util.Date, amount: number): java.util.Date;
						public static addMilliseconds(date: java.util.Date, amount: number): java.util.Date;
						public static truncatedCompareTo(cal1: java.util.Calendar, cal2: java.util.Calendar, field: number): number;
						public static getFragmentInHours(date: java.util.Date, fragment: number): number;
						public static setMinutes(date: java.util.Date, amount: number): java.util.Date;
						public static parseDateStrictly(str: string, locale: java.util.Locale, ...parsePatterns: string[]): java.util.Date;
					}
					export module DateUtils {
						export class DateIterator extends java.util.Iterator<java.util.Calendar> {
							public static class: java.lang.Class<org.apache.commons.lang3.time.DateUtils.DateIterator>;
							public next(): java.util.Calendar;
							public hasNext(): boolean;
							public remove(): void;
						}
						export class ModifyType {
							public static class: java.lang.Class<org.apache.commons.lang3.time.DateUtils.ModifyType>;
							public static TRUNCATE: org.apache.commons.lang3.time.DateUtils.ModifyType;
							public static ROUND: org.apache.commons.lang3.time.DateUtils.ModifyType;
							public static CEILING: org.apache.commons.lang3.time.DateUtils.ModifyType;
							public static valueOf(name: string): org.apache.commons.lang3.time.DateUtils.ModifyType;
							public static values(): org.apache.commons.lang3.time.DateUtils.ModifyType[];
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module time {
					export class DurationFormatUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.time.DurationFormatUtils>;
						public static ISO_EXTENDED_FORMAT_PATTERN: string;
						public constructor();
						public static formatPeriodISO(startMillis: number, param1: number): string;
						public static formatDurationISO(durationMillis: number): string;
						public static formatPeriod(startMillis: number, param1: number, endMillis: string): string;
						public static formatDurationWords(durationMillis: number, param1: boolean, suppressLeadingZeroElements: boolean): string;
						public static formatPeriod(startMillis: number, param1: number, endMillis: string, param3: boolean, format: java.util.TimeZone): string;
						public static formatDuration(durationMillis: number, param1: string): string;
						public static formatDuration(durationMillis: number, param1: string, format: boolean): string;
						public static formatDurationHMS(durationMillis: number): string;
					}
					export module DurationFormatUtils {
						export class Token extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.lang3.time.DurationFormatUtils.Token>;
							public equals(obj2: any): boolean;
							public hashCode(): number;
							public equals(obj: any): boolean;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module time {
					export class DurationUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.time.DurationUtils>;
						public constructor();
						/** @deprecated */
						public static getNanosOfMiili(duration: java.time.Duration): number;
						public static zeroIfNull(duration: java.time.Duration): java.time.Duration;
						public static getNanosOfMilli(duration: java.time.Duration): number;
						public static toMillisInt(duration: java.time.Duration): number;
						public static of(consumer: org.apache.commons.lang3.function.FailableConsumer<any,any>): java.time.Duration;
						public static accept(consumer: org.apache.commons.lang3.function.FailableBiConsumer<any,any,any>, duration: java.time.Duration): void;
						public static since(startInclusive: java.time.temporal.Temporal): java.time.Duration;
						public static of(runnable: org.apache.commons.lang3.function.FailableRunnable<any>): java.time.Duration;
						public static isPositive(duration: java.time.Duration): boolean;
						public static toDuration(amount: number, param1: java.util.concurrent.TimeUnit): java.time.Duration;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module time {
					export class FastDateFormat extends java.text.Format implements org.apache.commons.lang3.time.DateParser, org.apache.commons.lang3.time.DatePrinter {
						public static class: java.lang.Class<org.apache.commons.lang3.time.FastDateFormat>;
						public static FULL: number;
						public static LONG: number;
						public static MEDIUM: number;
						public static SHORT: number;
						public equals(obj: any): boolean;
						public format(param0: number, param1: java.lang.Appendable): java.lang.Appendable;
						public parseObject(source: string): any;
						public static getTimeInstance(style: number, timeZone: java.util.TimeZone): org.apache.commons.lang3.time.FastDateFormat;
						public static getDateTimeInstance(dateStyle: number, timeStyle: number, locale: java.util.Locale): org.apache.commons.lang3.time.FastDateFormat;
						public parse(param0: string, param1: java.text.ParsePosition, param2: java.util.Calendar): boolean;
						public static getDateInstance(style: number, locale: java.util.Locale): org.apache.commons.lang3.time.FastDateFormat;
						public static getDateInstance(style: number, timeZone: java.util.TimeZone): org.apache.commons.lang3.time.FastDateFormat;
						public format(param0: java.util.Date, param1: java.lang.Appendable): java.lang.Appendable;
						public parse(source: string, pos: java.text.ParsePosition, calendar: java.util.Calendar): boolean;
						public static getDateTimeInstance(dateStyle: number, timeStyle: number, timeZone: java.util.TimeZone, locale: java.util.Locale): org.apache.commons.lang3.time.FastDateFormat;
						public format(calendar: java.util.Calendar): string;
						public getPattern(): string;
						public format(date: java.util.Date): string;
						public constructor();
						public format(millis: number): string;
						public static getTimeInstance(style: number, locale: java.util.Locale): org.apache.commons.lang3.time.FastDateFormat;
						public format(date: java.util.Date, buf: java.lang.Appendable): java.lang.Appendable;
						public parse(source: string, pos: java.text.ParsePosition): java.util.Date;
						public parseObject(source: string, pos: java.text.ParsePosition): any;
						public static getInstance(pattern: string): org.apache.commons.lang3.time.FastDateFormat;
						public toString(): string;
						public parse(source: string): java.util.Date;
						public parse(param0: string): java.util.Date;
						public parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
						/** @deprecated */
						public format(param0: number, param1: java.lang.StringBuffer): java.lang.StringBuffer;
						public static getTimeInstance(style: number): org.apache.commons.lang3.time.FastDateFormat;
						/** @deprecated */
						public applyRules(calendar: java.util.Calendar, buf: java.lang.StringBuffer): java.lang.StringBuffer;
						/** @deprecated */
						public format(millis: number, param1: java.lang.StringBuffer): java.lang.StringBuffer;
						public getTimeZone(): java.util.TimeZone;
						public format(param0: java.util.Date): string;
						public parseObject(param0: string, param1: java.text.ParsePosition): any;
						/** @deprecated */
						public format(param0: java.util.Date, param1: java.lang.StringBuffer): java.lang.StringBuffer;
						public format(obj: any, toAppendTo: java.lang.StringBuffer, pos: java.text.FieldPosition): java.lang.StringBuffer;
						public static getTimeInstance(style: number, timeZone: java.util.TimeZone, locale: java.util.Locale): org.apache.commons.lang3.time.FastDateFormat;
						public getLocale(): java.util.Locale;
						public format(param0: java.util.Calendar, param1: java.lang.Appendable): java.lang.Appendable;
						public static getInstance(pattern: string, timeZone: java.util.TimeZone): org.apache.commons.lang3.time.FastDateFormat;
						public static getDateInstance(style: number, timeZone: java.util.TimeZone, locale: java.util.Locale): org.apache.commons.lang3.time.FastDateFormat;
						public hashCode(): number;
						public format(millis: number, param1: java.lang.Appendable): java.lang.Appendable;
						public static getInstance(pattern: string, timeZone: java.util.TimeZone, locale: java.util.Locale): org.apache.commons.lang3.time.FastDateFormat;
						public constructor(pattern: string, timeZone: java.util.TimeZone, locale: java.util.Locale);
						public static getInstance(pattern: string, locale: java.util.Locale): org.apache.commons.lang3.time.FastDateFormat;
						/** @deprecated */
						public format(param0: java.util.Calendar, param1: java.lang.StringBuffer): java.lang.StringBuffer;
						public parseObject(param0: string): any;
						/** @deprecated */
						public format(calendar: java.util.Calendar, buf: java.lang.StringBuffer): java.lang.StringBuffer;
						public format(param0: number): string;
						public format(param0: java.util.Calendar): string;
						public format(calendar: java.util.Calendar, buf: java.lang.Appendable): java.lang.Appendable;
						public static getDateTimeInstance(dateStyle: number, timeStyle: number): org.apache.commons.lang3.time.FastDateFormat;
						public constructor(pattern: string, timeZone: java.util.TimeZone, locale: java.util.Locale, centuryStart: java.util.Date);
						/** @deprecated */
						public format(date: java.util.Date, buf: java.lang.StringBuffer): java.lang.StringBuffer;
						public static getInstance(): org.apache.commons.lang3.time.FastDateFormat;
						public static getDateInstance(style: number): org.apache.commons.lang3.time.FastDateFormat;
						public format(obj: any): string;
						public format(param0: any, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
						public static getDateTimeInstance(dateStyle: number, timeStyle: number, timeZone: java.util.TimeZone): org.apache.commons.lang3.time.FastDateFormat;
						public getMaxLengthEstimate(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module time {
					export class FastDateParser extends java.lang.Object implements org.apache.commons.lang3.time.DateParser, java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.lang3.time.FastDateParser>;
						public equals(obj: any): boolean;
						public getLocale(): java.util.Locale;
						public hashCode(): number;
						public parse(source: string, pos: java.text.ParsePosition): java.util.Date;
						public constructor(pattern: string, timeZone: java.util.TimeZone, locale: java.util.Locale, centuryStart: java.util.Date);
						public parseObject(source: string, pos: java.text.ParsePosition): any;
						public toString(): string;
						public toStringAll(): string;
						public parse(source: string): java.util.Date;
						public parseObject(source: string): any;
						public parse(param0: string): java.util.Date;
						public parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
						public getTimeZone(): java.util.TimeZone;
						public constructor(pattern: string, timeZone: java.util.TimeZone, locale: java.util.Locale);
						public parse(param0: string, param1: java.text.ParsePosition, param2: java.util.Calendar): boolean;
						public parseObject(param0: string, param1: java.text.ParsePosition): any;
						public parse(source: string, pos: java.text.ParsePosition, calendar: java.util.Calendar): boolean;
						public parseObject(param0: string): any;
						public getPattern(): string;
					}
					export module FastDateParser {
						export class CaseInsensitiveTextStrategy extends org.apache.commons.lang3.time.FastDateParser.PatternStrategy {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDateParser.CaseInsensitiveTextStrategy>;
							public toString(): string;
						}
						export class CopyQuotedStrategy extends org.apache.commons.lang3.time.FastDateParser.Strategy {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDateParser.CopyQuotedStrategy>;
							public toString(): string;
						}
						export class ISO8601TimeZoneStrategy extends org.apache.commons.lang3.time.FastDateParser.PatternStrategy {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDateParser.ISO8601TimeZoneStrategy>;
						}
						export class NumberStrategy extends org.apache.commons.lang3.time.FastDateParser.Strategy {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDateParser.NumberStrategy>;
							public toString(): string;
						}
						export abstract class PatternStrategy extends org.apache.commons.lang3.time.FastDateParser.Strategy {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDateParser.PatternStrategy>;
							public toString(): string;
						}
						export abstract class Strategy extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDateParser.Strategy>;
						}
						export class StrategyAndWidth extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDateParser.StrategyAndWidth>;
							public toString(): string;
						}
						export class StrategyParser extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDateParser.StrategyParser>;
						}
						export class TimeZoneStrategy extends org.apache.commons.lang3.time.FastDateParser.PatternStrategy {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDateParser.TimeZoneStrategy>;
							public toString(): string;
						}
						export module TimeZoneStrategy {
							export class TzInfo extends java.lang.Object {
								public static class: java.lang.Class<org.apache.commons.lang3.time.FastDateParser.TimeZoneStrategy.TzInfo>;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module time {
					export class FastDatePrinter extends java.lang.Object implements org.apache.commons.lang3.time.DatePrinter, java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter>;
						public static FULL: number;
						public static LONG: number;
						public static MEDIUM: number;
						public static SHORT: number;
						public selectNumberRule(field: number, padding: number): org.apache.commons.lang3.time.FastDatePrinter.NumberRule;
						public equals(obj: any): boolean;
						public getLocale(): java.util.Locale;
						public format(param0: java.util.Calendar, param1: java.lang.Appendable): java.lang.Appendable;
						public parseToken(pattern: string, indexRef: number[]): string;
						public hashCode(): number;
						public format(param0: number, param1: java.lang.Appendable): java.lang.Appendable;
						public format(millis: number, param1: java.lang.Appendable): java.lang.Appendable;
						public format(millis: number, param1: java.lang.StringBuffer): java.lang.StringBuffer;
						public constructor(pattern: string, timeZone: java.util.TimeZone, locale: java.util.Locale);
						public format(date: java.util.Date, buf: java.lang.StringBuffer): java.lang.StringBuffer;
						public format(calendar: java.util.Calendar, buf: java.lang.StringBuffer): java.lang.StringBuffer;
						/** @deprecated */
						public format(param0: java.util.Calendar, param1: java.lang.StringBuffer): java.lang.StringBuffer;
						public format(param0: java.util.Date, param1: java.lang.Appendable): java.lang.Appendable;
						public format(calendar: java.util.Calendar): string;
						public getPattern(): string;
						public format(date: java.util.Date): string;
						/** @deprecated */
						public format(obj: any, toAppendTo: java.lang.StringBuffer, pos: java.text.FieldPosition): java.lang.StringBuffer;
						public format(param0: number): string;
						public format(millis: number): string;
						public format(param0: java.util.Calendar): string;
						public format(date: java.util.Date, buf: java.lang.Appendable): java.lang.Appendable;
						public format(calendar: java.util.Calendar, buf: java.lang.Appendable): java.lang.Appendable;
						public toString(): string;
						/** @deprecated */
						public format(param0: number, param1: java.lang.StringBuffer): java.lang.StringBuffer;
						/** @deprecated */
						public applyRules(calendar: java.util.Calendar, buf: java.lang.StringBuffer): java.lang.StringBuffer;
						public parsePattern(): java.util.List<org.apache.commons.lang3.time.FastDatePrinter.Rule>;
						public getTimeZone(): java.util.TimeZone;
						public format(param0: java.util.Date): string;
						public format(param0: any, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
						public getMaxLengthEstimate(): number;
						/** @deprecated */
						public format(param0: java.util.Date, param1: java.lang.StringBuffer): java.lang.StringBuffer;
					}
					export module FastDatePrinter {
						export class CharacterLiteral extends java.lang.Object implements org.apache.commons.lang3.time.FastDatePrinter.Rule {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.CharacterLiteral>;
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
							public appendTo(buffer: java.lang.Appendable, calendar: java.util.Calendar): void;
						}
						export class DayInWeekField extends java.lang.Object implements org.apache.commons.lang3.time.FastDatePrinter.NumberRule {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.DayInWeekField>;
							public appendTo(buffer: java.lang.Appendable, value: number): void;
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
							public appendTo(param0: java.lang.Appendable, param1: number): void;
							public appendTo(buffer: java.lang.Appendable, calendar: java.util.Calendar): void;
						}
						export class Iso8601_Rule extends java.lang.Object implements org.apache.commons.lang3.time.FastDatePrinter.Rule {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.Iso8601_Rule>;
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
							public appendTo(buffer: java.lang.Appendable, calendar: java.util.Calendar): void;
						}
						export class NumberRule extends java.lang.Object implements org.apache.commons.lang3.time.FastDatePrinter.Rule {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.NumberRule>;
							/**
							 * Constructs a new instance of the org.apache.commons.lang3.time.FastDatePrinter$NumberRule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								appendTo(param0: java.lang.Appendable, param1: number): void;
								estimateLength(): number;
								appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							});
							public constructor();
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
							public appendTo(param0: java.lang.Appendable, param1: number): void;
						}
						export class PaddedNumberField extends java.lang.Object implements org.apache.commons.lang3.time.FastDatePrinter.NumberRule {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.PaddedNumberField>;
							public appendTo(buffer: java.lang.Appendable, value: number): void;
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
							public appendTo(param0: java.lang.Appendable, param1: number): void;
							public appendTo(buffer: java.lang.Appendable, calendar: java.util.Calendar): void;
						}
						export class Rule extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.Rule>;
							/**
							 * Constructs a new instance of the org.apache.commons.lang3.time.FastDatePrinter$Rule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								estimateLength(): number;
								appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							});
							public constructor();
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
						}
						export class StringLiteral extends java.lang.Object implements org.apache.commons.lang3.time.FastDatePrinter.Rule {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.StringLiteral>;
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
							public appendTo(buffer: java.lang.Appendable, calendar: java.util.Calendar): void;
						}
						export class TextField extends java.lang.Object implements org.apache.commons.lang3.time.FastDatePrinter.Rule {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.TextField>;
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
							public appendTo(buffer: java.lang.Appendable, calendar: java.util.Calendar): void;
						}
						export class TimeZoneDisplayKey extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.TimeZoneDisplayKey>;
							public hashCode(): number;
							public equals(obj: any): boolean;
						}
						export class TimeZoneNameRule extends java.lang.Object implements org.apache.commons.lang3.time.FastDatePrinter.Rule {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.TimeZoneNameRule>;
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
							public appendTo(buffer: java.lang.Appendable, calendar: java.util.Calendar): void;
						}
						export class TimeZoneNumberRule extends java.lang.Object implements org.apache.commons.lang3.time.FastDatePrinter.Rule {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.TimeZoneNumberRule>;
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
							public appendTo(buffer: java.lang.Appendable, calendar: java.util.Calendar): void;
						}
						export class TwelveHourField extends java.lang.Object implements org.apache.commons.lang3.time.FastDatePrinter.NumberRule {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.TwelveHourField>;
							public appendTo(buffer: java.lang.Appendable, value: number): void;
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
							public appendTo(param0: java.lang.Appendable, param1: number): void;
							public appendTo(buffer: java.lang.Appendable, calendar: java.util.Calendar): void;
						}
						export class TwentyFourHourField extends java.lang.Object implements org.apache.commons.lang3.time.FastDatePrinter.NumberRule {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.TwentyFourHourField>;
							public appendTo(buffer: java.lang.Appendable, value: number): void;
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
							public appendTo(param0: java.lang.Appendable, param1: number): void;
							public appendTo(buffer: java.lang.Appendable, calendar: java.util.Calendar): void;
						}
						export class TwoDigitMonthField extends java.lang.Object implements org.apache.commons.lang3.time.FastDatePrinter.NumberRule {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.TwoDigitMonthField>;
							public appendTo(buffer: java.lang.Appendable, value: number): void;
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
							public appendTo(param0: java.lang.Appendable, param1: number): void;
							public appendTo(buffer: java.lang.Appendable, calendar: java.util.Calendar): void;
						}
						export class TwoDigitNumberField extends java.lang.Object implements org.apache.commons.lang3.time.FastDatePrinter.NumberRule {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.TwoDigitNumberField>;
							public appendTo(buffer: java.lang.Appendable, value: number): void;
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
							public appendTo(param0: java.lang.Appendable, param1: number): void;
							public appendTo(buffer: java.lang.Appendable, calendar: java.util.Calendar): void;
						}
						export class TwoDigitYearField extends java.lang.Object implements org.apache.commons.lang3.time.FastDatePrinter.NumberRule {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.TwoDigitYearField>;
							public appendTo(buffer: java.lang.Appendable, value: number): void;
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
							public appendTo(param0: java.lang.Appendable, param1: number): void;
							public appendTo(buffer: java.lang.Appendable, calendar: java.util.Calendar): void;
						}
						export class UnpaddedMonthField extends java.lang.Object implements org.apache.commons.lang3.time.FastDatePrinter.NumberRule {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.UnpaddedMonthField>;
							public appendTo(buffer: java.lang.Appendable, value: number): void;
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
							public appendTo(param0: java.lang.Appendable, param1: number): void;
							public appendTo(buffer: java.lang.Appendable, calendar: java.util.Calendar): void;
						}
						export class UnpaddedNumberField extends java.lang.Object implements org.apache.commons.lang3.time.FastDatePrinter.NumberRule {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.UnpaddedNumberField>;
							public appendTo(buffer: java.lang.Appendable, value: number): void;
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
							public appendTo(param0: java.lang.Appendable, param1: number): void;
							public appendTo(buffer: java.lang.Appendable, calendar: java.util.Calendar): void;
						}
						export class WeekYear extends java.lang.Object implements org.apache.commons.lang3.time.FastDatePrinter.NumberRule {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FastDatePrinter.WeekYear>;
							public appendTo(buffer: java.lang.Appendable, value: number): void;
							public appendTo(param0: java.lang.Appendable, param1: java.util.Calendar): void;
							public estimateLength(): number;
							public appendTo(param0: java.lang.Appendable, param1: number): void;
							public appendTo(buffer: java.lang.Appendable, calendar: java.util.Calendar): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module time {
					export class FastTimeZone extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.time.FastTimeZone>;
						public static getGmtTimeZone(pattern: string): java.util.TimeZone;
						public static getGmtTimeZone(): java.util.TimeZone;
						public static getTimeZone(id: string): java.util.TimeZone;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module time {
					export abstract class FormatCache<F>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.time.FormatCache<any>>;
						public getInstance(pattern: string, timeZone: java.util.TimeZone, locale: java.util.Locale): F;
						public createInstance(param0: string, param1: java.util.TimeZone, param2: java.util.Locale): F;
						public getInstance(): F;
					}
					export module FormatCache {
						export class ArrayKey extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.lang3.time.FormatCache.ArrayKey>;
							public hashCode(): number;
							public equals(obj: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module time {
					export class GmtTimeZone extends java.util.TimeZone {
						public static class: java.lang.Class<org.apache.commons.lang3.time.GmtTimeZone>;
						public equals(obj: any): boolean;
						public setRawOffset(param0: number): void;
						public getOffset(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
						public hashCode(): number;
						public useDaylightTime(): boolean;
						public inDaylightTime(param0: java.util.Date): boolean;
						public getRawOffset(): number;
						public toString(): string;
						public setRawOffset(offsetMillis: number): void;
						public getID(): string;
						public getOffset(date: number): number;
						public getOffset(era: number, year: number, month: number, day: number, dayOfWeek: number, milliseconds: number): number;
						public inDaylightTime(date: java.util.Date): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module time {
					export class StopWatch extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.time.StopWatch>;
						public suspend(): void;
						public getMessage(): string;
						public isStopped(): boolean;
						public getTime(): number;
						public static createStarted(): org.apache.commons.lang3.time.StopWatch;
						public formatSplitTime(): string;
						public getSplitTime(): number;
						public getStartTime(): number;
						public resume(): void;
						public static create(): org.apache.commons.lang3.time.StopWatch;
						public getStopTime(): number;
						public getTime(timeUnit: java.util.concurrent.TimeUnit): number;
						public constructor();
						public stop(): void;
						public unsplit(): void;
						public toString(): string;
						public split(): void;
						public toSplitString(): string;
						public getSplitNanoTime(): number;
						public start(): void;
						public getNanoTime(): number;
						public isStarted(): boolean;
						public constructor(message: string);
						public formatTime(): string;
						public isSuspended(): boolean;
						public reset(): void;
					}
					export module StopWatch {
						export class SplitState {
							public static class: java.lang.Class<org.apache.commons.lang3.time.StopWatch.SplitState>;
							public static SPLIT: org.apache.commons.lang3.time.StopWatch.SplitState;
							public static UNSPLIT: org.apache.commons.lang3.time.StopWatch.SplitState;
							public static values(): org.apache.commons.lang3.time.StopWatch.SplitState[];
							public static valueOf(name: string): org.apache.commons.lang3.time.StopWatch.SplitState;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						}
						export abstract class State {
							public static class: java.lang.Class<org.apache.commons.lang3.time.StopWatch.State>;
							public static RUNNING: org.apache.commons.lang3.time.StopWatch.State;
							public static STOPPED: org.apache.commons.lang3.time.StopWatch.State;
							public static SUSPENDED: org.apache.commons.lang3.time.StopWatch.State;
							public static UNSTARTED: org.apache.commons.lang3.time.StopWatch.State;
							public static values(): org.apache.commons.lang3.time.StopWatch.State[];
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static valueOf(name: string): org.apache.commons.lang3.time.StopWatch.State;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module time {
					export class TimeZones extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.time.TimeZones>;
						public static GMT_ID: string;
						public static GMT: java.util.TimeZone;
						public static toTimeZone(timeZone: java.util.TimeZone): java.util.TimeZone;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module tuple {
					export class ImmutablePair<L, R>  extends org.apache.commons.lang3.tuple.Pair<any,any> {
						public static class: java.lang.Class<org.apache.commons.lang3.tuple.ImmutablePair<any,any>>;
						public static EMPTY_ARRAY: org.apache.commons.lang3.tuple.ImmutablePair<any,any>[];
						public static of(pair: java.util.Map.Entry<any,any>): org.apache.commons.lang3.tuple.Pair<any,any>;
						public static of(pair: java.util.Map.Entry<any,any>): org.apache.commons.lang3.tuple.ImmutablePair<any,any>;
						public equals(obj: any): boolean;
						public getValue(): any;
						public getKey(): any;
						public static ofNonNull(left: any, right: any): org.apache.commons.lang3.tuple.Pair<any,any>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static emptyArray(): org.apache.commons.lang3.tuple.ImmutablePair<any,any>[];
						public constructor(left: any, right: any);
						public static nullPair(): org.apache.commons.lang3.tuple.ImmutablePair<any,any>;
						public static ofNonNull(left: any, right: any): org.apache.commons.lang3.tuple.ImmutablePair<any,any>;
						public static emptyArray(): org.apache.commons.lang3.tuple.Pair<any,any>[];
						public constructor();
						public setValue(param0: any): any;
						public static comparingByValue(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
						public setValue(value: any): any;
						public static comparingByValue(): java.util.Comparator<any>;
						public static right(right: any): org.apache.commons.lang3.tuple.Pair<any,any>;
						public static of(left: any, right: any): org.apache.commons.lang3.tuple.ImmutablePair<any,any>;
						public getRight(): any;
						public getLeft(): any;
						public static of(left: any, right: any): org.apache.commons.lang3.tuple.Pair<any,any>;
						public static comparingByKey(): java.util.Comparator<any>;
						public static left(left: any): org.apache.commons.lang3.tuple.Pair<any,any>;
						public static comparingByKey(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module tuple {
					export class ImmutableTriple<L, M, R>  extends org.apache.commons.lang3.tuple.Triple<any,any,any> {
						public static class: java.lang.Class<org.apache.commons.lang3.tuple.ImmutableTriple<any,any,any>>;
						public static EMPTY_ARRAY: org.apache.commons.lang3.tuple.ImmutableTriple<any,any,any>[];
						public left: any;
						public middle: any;
						public right: any;
						public static ofNonNull(left: any, middle: any, right: any): org.apache.commons.lang3.tuple.ImmutableTriple<any,any,any>;
						public constructor();
						public static ofNonNull(left: any, middle: any, right: any): org.apache.commons.lang3.tuple.Triple<any,any,any>;
						public static nullTriple(): org.apache.commons.lang3.tuple.ImmutableTriple<any,any,any>;
						public static emptyArray(): org.apache.commons.lang3.tuple.ImmutableTriple<any,any,any>[];
						public static of(left: any, middle: any, right: any): org.apache.commons.lang3.tuple.ImmutableTriple<any,any,any>;
						public static emptyArray(): org.apache.commons.lang3.tuple.Triple<any,any,any>[];
						public getMiddle(): any;
						public constructor(left: any, middle: any, right: any);
						public static of(left: any, middle: any, right: any): org.apache.commons.lang3.tuple.Triple<any,any,any>;
						public getRight(): any;
						public getLeft(): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module tuple {
					export class MutablePair<L, R>  extends org.apache.commons.lang3.tuple.Pair<any,any> {
						public static class: java.lang.Class<org.apache.commons.lang3.tuple.MutablePair<any,any>>;
						public static EMPTY_ARRAY: org.apache.commons.lang3.tuple.MutablePair<any,any>[];
						public left: any;
						public right: any;
						public static of(pair: java.util.Map.Entry<any,any>): org.apache.commons.lang3.tuple.Pair<any,any>;
						public equals(obj: any): boolean;
						public getValue(): any;
						public getKey(): any;
						public static ofNonNull(left: any, right: any): org.apache.commons.lang3.tuple.Pair<any,any>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(left: any, right: any);
						public setRight(right: any): void;
						public static emptyArray(): org.apache.commons.lang3.tuple.Pair<any,any>[];
						public constructor();
						public static of(left: any, right: any): org.apache.commons.lang3.tuple.MutablePair<any,any>;
						public setValue(param0: any): any;
						public static comparingByValue(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
						public setValue(value: any): any;
						public static comparingByValue(): java.util.Comparator<any>;
						public static of(pair: java.util.Map.Entry<any,any>): org.apache.commons.lang3.tuple.MutablePair<any,any>;
						public static emptyArray(): org.apache.commons.lang3.tuple.MutablePair<any,any>[];
						public getRight(): any;
						public getLeft(): any;
						public setLeft(left: any): void;
						public static of(left: any, right: any): org.apache.commons.lang3.tuple.Pair<any,any>;
						public static comparingByKey(): java.util.Comparator<any>;
						public static ofNonNull(left: any, right: any): org.apache.commons.lang3.tuple.MutablePair<any,any>;
						public static comparingByKey(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module tuple {
					export class MutableTriple<L, M, R>  extends org.apache.commons.lang3.tuple.Triple<any,any,any> {
						public static class: java.lang.Class<org.apache.commons.lang3.tuple.MutableTriple<any,any,any>>;
						public static EMPTY_ARRAY: org.apache.commons.lang3.tuple.MutableTriple<any,any,any>[];
						public left: any;
						public middle: any;
						public right: any;
						public setRight(right: any): void;
						public constructor();
						public static of(left: any, middle: any, right: any): org.apache.commons.lang3.tuple.MutableTriple<any,any,any>;
						public static emptyArray(): org.apache.commons.lang3.tuple.Triple<any,any,any>[];
						public static emptyArray(): org.apache.commons.lang3.tuple.MutableTriple<any,any,any>[];
						public getRight(): any;
						public static ofNonNull(left: any, middle: any, right: any): org.apache.commons.lang3.tuple.MutableTriple<any,any,any>;
						public getLeft(): any;
						public setMiddle(middle: any): void;
						public setLeft(left: any): void;
						public static ofNonNull(left: any, middle: any, right: any): org.apache.commons.lang3.tuple.Triple<any,any,any>;
						public getMiddle(): any;
						public constructor(left: any, middle: any, right: any);
						public static of(left: any, middle: any, right: any): org.apache.commons.lang3.tuple.Triple<any,any,any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module tuple {
					export abstract class Pair<L, R>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.tuple.Pair<any,any>>;
						public static EMPTY_ARRAY: org.apache.commons.lang3.tuple.Pair<any,any>[];
						public static of(pair: java.util.Map.Entry<any,any>): org.apache.commons.lang3.tuple.Pair<any,any>;
						public static emptyArray(): org.apache.commons.lang3.tuple.Pair<any,any>[];
						public constructor();
						public equals(obj: any): boolean;
						public setValue(param0: any): any;
						public static comparingByValue(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
						public getValue(): any;
						public toString(format: string): string;
						public getKey(): any;
						public static comparingByValue(): java.util.Comparator<any>;
						public static ofNonNull(left: any, right: any): org.apache.commons.lang3.tuple.Pair<any,any>;
						public getKey(): L;
						public getValue(): R;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public accept(consumer: org.apache.commons.lang3.function.FailableBiConsumer<any,any,any>): void;
						public apply(_function_: org.apache.commons.lang3.function.FailableBiFunction<any,any,any,any>): any;
						public getLeft(): L;
						public toString(): string;
						public compareTo(other: org.apache.commons.lang3.tuple.Pair<L,R>): number;
						public getRight(): R;
						public static of(left: any, right: any): org.apache.commons.lang3.tuple.Pair<any,any>;
						public static comparingByKey(): java.util.Comparator<any>;
						public static comparingByKey(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module tuple {
					export abstract class Triple<L, M, R>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.lang3.tuple.Triple<any,any,any>>;
						public static EMPTY_ARRAY: org.apache.commons.lang3.tuple.Triple<any,any,any>[];
						public getMiddle(): M;
						public constructor();
						public equals(obj: any): boolean;
						public static ofNonNull(left: any, middle: any, right: any): org.apache.commons.lang3.tuple.Triple<any,any,any>;
						public compareTo(other: org.apache.commons.lang3.tuple.Triple<L,M,R>): number;
						public getRight(): R;
						public toString(format: string): string;
						public hashCode(): number;
						public static emptyArray(): org.apache.commons.lang3.tuple.Triple<any,any,any>[];
						public static of(left: any, middle: any, right: any): org.apache.commons.lang3.tuple.Triple<any,any,any>;
						public getLeft(): L;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module lang3 {
				export module util {
					export class FluentBitSet extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.lang3.util.FluentBitSet>;
						public equals(obj: any): boolean;
						public get(bitIndex: number): boolean;
						public previousClearBit(fromIndex: number): number;
						public hashCode(): number;
						public intersects(set: org.apache.commons.lang3.util.FluentBitSet): boolean;
						public nextSetBit(fromIndex: number): number;
						public constructor(nbits: number);
						public or(set: org.apache.commons.lang3.util.FluentBitSet): org.apache.commons.lang3.util.FluentBitSet;
						public stream(): java.util.stream.IntStream;
						public constructor(set: java.util.BitSet);
						public toByteArray(): number[];
						public or(set: java.util.BitSet): org.apache.commons.lang3.util.FluentBitSet;
						public setInclusive(fromIndex: number, toIndex: number): org.apache.commons.lang3.util.FluentBitSet;
						public and(set: org.apache.commons.lang3.util.FluentBitSet): org.apache.commons.lang3.util.FluentBitSet;
						public clear(): org.apache.commons.lang3.util.FluentBitSet;
						public intersects(set: java.util.BitSet): boolean;
						public clear(bitIndex: number): org.apache.commons.lang3.util.FluentBitSet;
						public isEmpty(): boolean;
						public or(...set: org.apache.commons.lang3.util.FluentBitSet[]): org.apache.commons.lang3.util.FluentBitSet;
						public size(): number;
						public constructor();
						public length(): number;
						public clone(): any;
						public set(fromIndex: number, toIndex: number): org.apache.commons.lang3.util.FluentBitSet;
						public xor(set: java.util.BitSet): org.apache.commons.lang3.util.FluentBitSet;
						public clear(...bitIndexArray: number[]): org.apache.commons.lang3.util.FluentBitSet;
						public get(fromIndex: number, toIndex: number): org.apache.commons.lang3.util.FluentBitSet;
						public andNot(set: java.util.BitSet): org.apache.commons.lang3.util.FluentBitSet;
						public flip(bitIndex: number): org.apache.commons.lang3.util.FluentBitSet;
						public flip(fromIndex: number, toIndex: number): org.apache.commons.lang3.util.FluentBitSet;
						public and(set: java.util.BitSet): org.apache.commons.lang3.util.FluentBitSet;
						public toString(): string;
						public toLongArray(): number[];
						public set(fromIndex: number, toIndex: number, value: boolean): org.apache.commons.lang3.util.FluentBitSet;
						public set(bitIndex: number): org.apache.commons.lang3.util.FluentBitSet;
						public clear(fromIndex: number, toIndex: number): org.apache.commons.lang3.util.FluentBitSet;
						public andNot(set: org.apache.commons.lang3.util.FluentBitSet): org.apache.commons.lang3.util.FluentBitSet;
						public cardinality(): number;
						public set(...bitIndexArray: number[]): org.apache.commons.lang3.util.FluentBitSet;
						public previousSetBit(fromIndex: number): number;
						public nextClearBit(fromIndex: number): number;
						public set(bitIndex: number, value: boolean): org.apache.commons.lang3.util.FluentBitSet;
						public xor(set: org.apache.commons.lang3.util.FluentBitSet): org.apache.commons.lang3.util.FluentBitSet;
						public bitSet(): java.util.BitSet;
					}
				}
			}
		}
	}
}

//Generics information:
//org.apache.commons.lang3.Functions.FailableBiConsumer:3
//org.apache.commons.lang3.Functions.FailableBiFunction:4
//org.apache.commons.lang3.Functions.FailableBiPredicate:3
//org.apache.commons.lang3.Functions.FailableCallable:2
//org.apache.commons.lang3.Functions.FailableConsumer:2
//org.apache.commons.lang3.Functions.FailableFunction:3
//org.apache.commons.lang3.Functions.FailablePredicate:2
//org.apache.commons.lang3.Functions.FailableRunnable:1
//org.apache.commons.lang3.Functions.FailableSupplier:2
//org.apache.commons.lang3.NumberRange:1
//org.apache.commons.lang3.Range:1
//org.apache.commons.lang3.Streams.ArrayCollector:1
//org.apache.commons.lang3.Streams.FailableStream:1
//org.apache.commons.lang3.builder.Builder:1
//org.apache.commons.lang3.builder.Diff:1
//org.apache.commons.lang3.builder.DiffBuilder:1
//org.apache.commons.lang3.builder.DiffResult:1
//org.apache.commons.lang3.builder.Diffable:1
//org.apache.commons.lang3.builder.ReflectionDiffBuilder:1
//org.apache.commons.lang3.compare.ComparableUtils.ComparableCheckBuilder:1
//org.apache.commons.lang3.concurrent.AbstractCircuitBreaker:1
//org.apache.commons.lang3.concurrent.AbstractFutureProxy:1
//org.apache.commons.lang3.concurrent.AtomicInitializer:1
//org.apache.commons.lang3.concurrent.AtomicSafeInitializer:1
//org.apache.commons.lang3.concurrent.BackgroundInitializer:1
//org.apache.commons.lang3.concurrent.CallableBackgroundInitializer:1
//org.apache.commons.lang3.concurrent.CircuitBreaker:1
//org.apache.commons.lang3.concurrent.Computable:2
//org.apache.commons.lang3.concurrent.ConcurrentInitializer:1
//org.apache.commons.lang3.concurrent.ConcurrentUtils.ConstantFuture:1
//org.apache.commons.lang3.concurrent.ConstantInitializer:1
//org.apache.commons.lang3.concurrent.LazyInitializer:1
//org.apache.commons.lang3.concurrent.Memoizer:2
//org.apache.commons.lang3.concurrent.UncheckedFuture:1
//org.apache.commons.lang3.concurrent.UncheckedFutureImpl:1
//org.apache.commons.lang3.concurrent.locks.LockingVisitors.LockVisitor:2
//org.apache.commons.lang3.concurrent.locks.LockingVisitors.ReadWriteLockVisitor:1
//org.apache.commons.lang3.concurrent.locks.LockingVisitors.StampedLockVisitor:1
//org.apache.commons.lang3.event.EventListenerSupport:1
//org.apache.commons.lang3.function.FailableBiConsumer:3
//org.apache.commons.lang3.function.FailableBiFunction:4
//org.apache.commons.lang3.function.FailableBiPredicate:3
//org.apache.commons.lang3.function.FailableBooleanSupplier:1
//org.apache.commons.lang3.function.FailableCallable:2
//org.apache.commons.lang3.function.FailableConsumer:2
//org.apache.commons.lang3.function.FailableDoubleBinaryOperator:1
//org.apache.commons.lang3.function.FailableDoubleConsumer:1
//org.apache.commons.lang3.function.FailableDoubleFunction:2
//org.apache.commons.lang3.function.FailableDoublePredicate:1
//org.apache.commons.lang3.function.FailableDoubleSupplier:1
//org.apache.commons.lang3.function.FailableDoubleToIntFunction:1
//org.apache.commons.lang3.function.FailableDoubleToLongFunction:1
//org.apache.commons.lang3.function.FailableDoubleUnaryOperator:1
//org.apache.commons.lang3.function.FailableFunction:3
//org.apache.commons.lang3.function.FailableIntBinaryOperator:1
//org.apache.commons.lang3.function.FailableIntConsumer:1
//org.apache.commons.lang3.function.FailableIntFunction:2
//org.apache.commons.lang3.function.FailableIntPredicate:1
//org.apache.commons.lang3.function.FailableIntSupplier:1
//org.apache.commons.lang3.function.FailableIntToDoubleFunction:1
//org.apache.commons.lang3.function.FailableIntToLongFunction:1
//org.apache.commons.lang3.function.FailableIntUnaryOperator:1
//org.apache.commons.lang3.function.FailableLongBinaryOperator:1
//org.apache.commons.lang3.function.FailableLongConsumer:1
//org.apache.commons.lang3.function.FailableLongFunction:2
//org.apache.commons.lang3.function.FailableLongPredicate:1
//org.apache.commons.lang3.function.FailableLongSupplier:1
//org.apache.commons.lang3.function.FailableLongToDoubleFunction:1
//org.apache.commons.lang3.function.FailableLongToIntFunction:1
//org.apache.commons.lang3.function.FailableLongUnaryOperator:1
//org.apache.commons.lang3.function.FailableObjDoubleConsumer:2
//org.apache.commons.lang3.function.FailableObjIntConsumer:2
//org.apache.commons.lang3.function.FailableObjLongConsumer:2
//org.apache.commons.lang3.function.FailablePredicate:2
//org.apache.commons.lang3.function.FailableRunnable:1
//org.apache.commons.lang3.function.FailableShortSupplier:1
//org.apache.commons.lang3.function.FailableSupplier:2
//org.apache.commons.lang3.function.FailableToDoubleBiFunction:3
//org.apache.commons.lang3.function.FailableToDoubleFunction:2
//org.apache.commons.lang3.function.FailableToIntBiFunction:3
//org.apache.commons.lang3.function.FailableToIntFunction:2
//org.apache.commons.lang3.function.FailableToLongBiFunction:3
//org.apache.commons.lang3.function.FailableToLongFunction:2
//org.apache.commons.lang3.function.ToBooleanBiFunction:2
//org.apache.commons.lang3.function.TriConsumer:3
//org.apache.commons.lang3.function.TriFunction:4
//org.apache.commons.lang3.mutable.Mutable:1
//org.apache.commons.lang3.mutable.MutableObject:1
//org.apache.commons.lang3.reflect.TypeLiteral:1
//org.apache.commons.lang3.reflect.Typed:1
//org.apache.commons.lang3.stream.LangCollectors.SimpleCollector:3
//org.apache.commons.lang3.stream.Streams.ArrayCollector:1
//org.apache.commons.lang3.stream.Streams.EnumerationSpliterator:1
//org.apache.commons.lang3.stream.Streams.FailableStream:1
//org.apache.commons.lang3.text.StrLookup:1
//org.apache.commons.lang3.text.StrLookup.MapStrLookup:1
//org.apache.commons.lang3.time.FormatCache:1
//org.apache.commons.lang3.tuple.ImmutablePair:2
//org.apache.commons.lang3.tuple.ImmutableTriple:3
//org.apache.commons.lang3.tuple.MutablePair:2
//org.apache.commons.lang3.tuple.MutableTriple:3
//org.apache.commons.lang3.tuple.Pair:2
//org.apache.commons.lang3.tuple.Triple:3


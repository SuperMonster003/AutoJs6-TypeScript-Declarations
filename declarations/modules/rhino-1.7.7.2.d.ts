/// <reference path="../android.d.ts" />

declare module org {
	export module mozilla {
		export module classfile {
			export class ByteCode extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.classfile.ByteCode>;
				public static NOP: number;
				public static ACONST_NULL: number;
				public static ICONST_M1: number;
				public static ICONST_0: number;
				public static ICONST_1: number;
				public static ICONST_2: number;
				public static ICONST_3: number;
				public static ICONST_4: number;
				public static ICONST_5: number;
				public static LCONST_0: number;
				public static LCONST_1: number;
				public static FCONST_0: number;
				public static FCONST_1: number;
				public static FCONST_2: number;
				public static DCONST_0: number;
				public static DCONST_1: number;
				public static BIPUSH: number;
				public static SIPUSH: number;
				public static LDC: number;
				public static LDC_W: number;
				public static LDC2_W: number;
				public static ILOAD: number;
				public static LLOAD: number;
				public static FLOAD: number;
				public static DLOAD: number;
				public static ALOAD: number;
				public static ILOAD_0: number;
				public static ILOAD_1: number;
				public static ILOAD_2: number;
				public static ILOAD_3: number;
				public static LLOAD_0: number;
				public static LLOAD_1: number;
				public static LLOAD_2: number;
				public static LLOAD_3: number;
				public static FLOAD_0: number;
				public static FLOAD_1: number;
				public static FLOAD_2: number;
				public static FLOAD_3: number;
				public static DLOAD_0: number;
				public static DLOAD_1: number;
				public static DLOAD_2: number;
				public static DLOAD_3: number;
				public static ALOAD_0: number;
				public static ALOAD_1: number;
				public static ALOAD_2: number;
				public static ALOAD_3: number;
				public static IALOAD: number;
				public static LALOAD: number;
				public static FALOAD: number;
				public static DALOAD: number;
				public static AALOAD: number;
				public static BALOAD: number;
				public static CALOAD: number;
				public static SALOAD: number;
				public static ISTORE: number;
				public static LSTORE: number;
				public static FSTORE: number;
				public static DSTORE: number;
				public static ASTORE: number;
				public static ISTORE_0: number;
				public static ISTORE_1: number;
				public static ISTORE_2: number;
				public static ISTORE_3: number;
				public static LSTORE_0: number;
				public static LSTORE_1: number;
				public static LSTORE_2: number;
				public static LSTORE_3: number;
				public static FSTORE_0: number;
				public static FSTORE_1: number;
				public static FSTORE_2: number;
				public static FSTORE_3: number;
				public static DSTORE_0: number;
				public static DSTORE_1: number;
				public static DSTORE_2: number;
				public static DSTORE_3: number;
				public static ASTORE_0: number;
				public static ASTORE_1: number;
				public static ASTORE_2: number;
				public static ASTORE_3: number;
				public static IASTORE: number;
				public static LASTORE: number;
				public static FASTORE: number;
				public static DASTORE: number;
				public static AASTORE: number;
				public static BASTORE: number;
				public static CASTORE: number;
				public static SASTORE: number;
				public static POP: number;
				public static POP2: number;
				public static DUP: number;
				public static DUP_X1: number;
				public static DUP_X2: number;
				public static DUP2: number;
				public static DUP2_X1: number;
				public static DUP2_X2: number;
				public static SWAP: number;
				public static IADD: number;
				public static LADD: number;
				public static FADD: number;
				public static DADD: number;
				public static ISUB: number;
				public static LSUB: number;
				public static FSUB: number;
				public static DSUB: number;
				public static IMUL: number;
				public static LMUL: number;
				public static FMUL: number;
				public static DMUL: number;
				public static IDIV: number;
				public static LDIV: number;
				public static FDIV: number;
				public static DDIV: number;
				public static IREM: number;
				public static LREM: number;
				public static FREM: number;
				public static DREM: number;
				public static INEG: number;
				public static LNEG: number;
				public static FNEG: number;
				public static DNEG: number;
				public static ISHL: number;
				public static LSHL: number;
				public static ISHR: number;
				public static LSHR: number;
				public static IUSHR: number;
				public static LUSHR: number;
				public static IAND: number;
				public static LAND: number;
				public static IOR: number;
				public static LOR: number;
				public static IXOR: number;
				public static LXOR: number;
				public static IINC: number;
				public static I2L: number;
				public static I2F: number;
				public static I2D: number;
				public static L2I: number;
				public static L2F: number;
				public static L2D: number;
				public static F2I: number;
				public static F2L: number;
				public static F2D: number;
				public static D2I: number;
				public static D2L: number;
				public static D2F: number;
				public static I2B: number;
				public static I2C: number;
				public static I2S: number;
				public static LCMP: number;
				public static FCMPL: number;
				public static FCMPG: number;
				public static DCMPL: number;
				public static DCMPG: number;
				public static IFEQ: number;
				public static IFNE: number;
				public static IFLT: number;
				public static IFGE: number;
				public static IFGT: number;
				public static IFLE: number;
				public static IF_ICMPEQ: number;
				public static IF_ICMPNE: number;
				public static IF_ICMPLT: number;
				public static IF_ICMPGE: number;
				public static IF_ICMPGT: number;
				public static IF_ICMPLE: number;
				public static IF_ACMPEQ: number;
				public static IF_ACMPNE: number;
				public static GOTO: number;
				public static JSR: number;
				public static RET: number;
				public static TABLESWITCH: number;
				public static LOOKUPSWITCH: number;
				public static IRETURN: number;
				public static LRETURN: number;
				public static FRETURN: number;
				public static DRETURN: number;
				public static ARETURN: number;
				public static RETURN: number;
				public static GETSTATIC: number;
				public static PUTSTATIC: number;
				public static GETFIELD: number;
				public static PUTFIELD: number;
				public static INVOKEVIRTUAL: number;
				public static INVOKESPECIAL: number;
				public static INVOKESTATIC: number;
				public static INVOKEINTERFACE: number;
				public static NEW: number;
				public static NEWARRAY: number;
				public static ANEWARRAY: number;
				public static ARRAYLENGTH: number;
				public static ATHROW: number;
				public static CHECKCAST: number;
				public static INSTANCEOF: number;
				public static MONITORENTER: number;
				public static MONITOREXIT: number;
				public static WIDE: number;
				public static MULTIANEWARRAY: number;
				public static IFNULL: number;
				public static IFNONNULL: number;
				public static GOTO_W: number;
				public static JSR_W: number;
				public static BREAKPOINT: number;
				public static IMPDEP1: number;
				public static IMPDEP2: number;
				public static T_BOOLEAN: number;
				public static T_CHAR: number;
				public static T_FLOAT: number;
				public static T_DOUBLE: number;
				public static T_BYTE: number;
				public static T_SHORT: number;
				public static T_INT: number;
				public static T_LONG: number;
				public constructor();
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module classfile {
			export class ClassFileField extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.classfile.ClassFileField>;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module classfile {
			export class ClassFileMethod extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.classfile.ClassFileMethod>;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module classfile {
			export class ClassFileWriter extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.classfile.ClassFileWriter>;
				public static ACC_PUBLIC: number;
				public static ACC_PRIVATE: number;
				public static ACC_PROTECTED: number;
				public static ACC_STATIC: number;
				public static ACC_FINAL: number;
				public static ACC_SUPER: number;
				public static ACC_SYNCHRONIZED: number;
				public static ACC_VOLATILE: number;
				public static ACC_TRANSIENT: number;
				public static ACC_NATIVE: number;
				public static ACC_ABSTRACT: number;
				public startMethod(param0: string, param1: string, param2: number): void;
				public getClassName(): string;
				public addFStore(param0: number): void;
				public constructor(param0: string, param1: string, param2: string);
				public addField(param0: string, param1: string, param2: number, param3: number): void;
				public addDLoad(param0: number): void;
				public addPush(param0: string): void;
				public add(param0: number): void;
				public addPush(param0: number): void;
				public toByteArray(): number[];
				public addVariableDescriptor(param0: string, param1: string, param2: number, param3: number): void;
				public write(param0: java.io.OutputStream): void;
				public getLabelPC(param0: number): number;
				public addFLoad(param0: number): void;
				public setStackTop(param0: number): void;
				public markTableSwitchDefault(param0: number): void;
				public static classNameToSignature(param0: string): string;
				public addLoadConstant(param0: number): void;
				public markLabel(param0: number, param1: number): void;
				public add(param0: number, param1: string, param2: string, param3: string): void;
				public addExceptionHandler(param0: number, param1: number, param2: number, param3: string): void;
				public addInterface(param0: string): void;
				public addLoadConstant(param0: string): void;
				public getCurrentCodeOffset(): number;
				public addILoad(param0: number): void;
				public getStackTop(): number;
				public adjustStackTop(param0: number): void;
				public addInvoke(param0: number, param1: string, param2: string, param3: string): void;
				public markLabel(param0: number): void;
				public setTableSwitchJump(param0: number, param1: number, param2: number): void;
				public stopMethod(param0: number): void;
				public markTableSwitchCase(param0: number, param1: number): void;
				public acquireLabel(): number;
				public addField(param0: string, param1: string, param2: number): void;
				public addALoad(param0: number): void;
				public add(param0: number, param1: number): void;
				public markTableSwitchCase(param0: number, param1: number, param2: number): void;
				public markHandler(param0: number): void;
				public addTableSwitch(param0: number, param1: number): number;
				public addLineNumberEntry(param0: number): void;
				public add(param0: number, param1: string): void;
				public addPush(param0: boolean): void;
				public add(param0: number, param1: number, param2: number): void;
				public addDStore(param0: number): void;
				public addIStore(param0: number): void;
				public addLLoad(param0: number): void;
				public setFlags(param0: number): void;
				public addAStore(param0: number): void;
				public addLStore(param0: number): void;
				public addLoadThis(): void;
				public isUnderStringSizeLimit(param0: string): boolean;
			}
			export module ClassFileWriter {
				export class ClassFileFormatException extends java.lang.RuntimeException {
					public static class: java.lang.Class<org.mozilla.classfile.ClassFileWriter.ClassFileFormatException>;
				}
				export class StackMapTable extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.classfile.ClassFileWriter.StackMapTable>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module classfile {
			export class ConstantPool extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.classfile.ConstantPool>;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module classfile {
			export class ExceptionTableEntry extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.classfile.ExceptionTableEntry>;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module classfile {
			export class FieldOrMethodRef extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.classfile.FieldOrMethodRef>;
				public getType(): string;
				public getClassName(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getName(): string;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module classfile {
			export class SuperBlock extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.classfile.SuperBlock>;
				public toString(): string;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module classfile {
			export class TypeInfo extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.classfile.TypeInfo>;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Arguments extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.Arguments>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public getMaxInstanceId(): number;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getInstanceIdName(param0: number): string;
				public findInstanceIdInfo(param0: org.mozilla.javascript.Symbol): number;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public getOwnPropertyDescriptor(param0: org.mozilla.javascript.Context, param1: any): org.mozilla.javascript.ScriptableObject;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public defineOwnProperty(param0: org.mozilla.javascript.Context, param1: any, param2: org.mozilla.javascript.ScriptableObject): void;
				public setInstanceIdAttributes(param0: number, param1: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getInstanceIdValue(param0: number): any;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public findInstanceIdInfo(param0: string): number;
				public defineOwnProperty(param0: org.mozilla.javascript.Context, param1: any, param2: org.mozilla.javascript.ScriptableObject, param3: boolean): void;
				public getIds(): any[];
				public constructor(param0: org.mozilla.javascript.NativeCall);
				public delete(param0: number): void;
				public setInstanceIdValue(param0: number, param1: any): void;
			}
			export module Arguments {
				export class ThrowTypeError extends org.mozilla.javascript.BaseFunction {
					public static class: java.lang.Class<org.mozilla.javascript.Arguments.ThrowTypeError>;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public delete(param0: number): void;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getAllIds(): any[];
					public delete(param0: string): void;
					public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ArrowFunction extends org.mozilla.javascript.BaseFunction {
				public static class: java.lang.Class<org.mozilla.javascript.ArrowFunction>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public constructor(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Callable, param3: org.mozilla.javascript.Scriptable);
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getLength(): number;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class BaseFunction extends org.mozilla.javascript.IdScriptableObject implements org.mozilla.javascript.Function {
				public static class: java.lang.Class<org.mozilla.javascript.BaseFunction>;
				public getMaxInstanceId(): number;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public setImmunePrototypeProperty(param0: any): void;
				public findPrototypeId(param0: string): number;
				public getFunctionName(): string;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public hasPrototypeProperty(): boolean;
				public createObject(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getClassPrototype(): org.mozilla.javascript.Scriptable;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getInstanceIdValue(param0: number): any;
				public static getClassPrototype(param0: org.mozilla.javascript.Scriptable, param1: string): org.mozilla.javascript.Scriptable;
				public getIds(): any[];
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public fillConstructorProperties(param0: org.mozilla.javascript.IdFunctionObject): void;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public getArity(): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public getTypeOf(): string;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getAllIds(): any[];
				public getInstanceIdName(param0: number): string;
				public findInstanceIdInfo(param0: org.mozilla.javascript.Symbol): number;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setInstanceIdAttributes(param0: number, param1: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public getLength(): number;
				public getPrototypeProperty(): any;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public findInstanceIdInfo(param0: string): number;
				public delete(param0: number): void;
				public setInstanceIdValue(param0: number, param1: any): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class BeanProperty extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.BeanProperty>;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class BoundFunction extends org.mozilla.javascript.BaseFunction {
				public static class: java.lang.Class<org.mozilla.javascript.BoundFunction>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public constructor(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Callable, param3: org.mozilla.javascript.Scriptable, param4: any[]);
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getLength(): number;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Callable extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.Callable>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.Callable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				});
				public constructor();
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ClassCache extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.ClassCache>;
				/** @deprecated */
				public setInvokerOptimizationEnabled(param0: boolean): void;
				public clearCaches(): void;
				/** @deprecated */
				public isInvokerOptimizationEnabled(): boolean;
				public associate(param0: org.mozilla.javascript.ScriptableObject): boolean;
				public setCachingEnabled(param0: boolean): void;
				public static get(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.ClassCache;
				public newClassSerialNumber(): number;
				public isCachingEnabled(): boolean;
				public constructor();
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ClassShutter extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.ClassShutter>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.ClassShutter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					visibleToScripts(param0: string): boolean;
				});
				public constructor();
				public visibleToScripts(param0: string): boolean;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class CodeGenerator extends org.mozilla.javascript.Icode {
				public static class: java.lang.Class<org.mozilla.javascript.CodeGenerator>;
				public compile(param0: org.mozilla.javascript.CompilerEnvirons, param1: org.mozilla.javascript.ast.ScriptNode, param2: string, param3: boolean): org.mozilla.javascript.InterpreterData;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class CompilerEnvirons extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.CompilerEnvirons>;
				public reportWarningAsError(): boolean;
				public isXmlAvailable(): boolean;
				public setActivationNames(param0: java.util.Set<string>): void;
				public recoverFromErrors(): boolean;
				public setGenerateDebugInfo(param0: boolean): void;
				public isIdeMode(): boolean;
				public setGenerateObserverCount(param0: boolean): void;
				public isGeneratingSource(): boolean;
				public setReservedKeywordAsIdentifier(param0: boolean): void;
				public constructor();
				public setErrorReporter(param0: org.mozilla.javascript.ErrorReporter): void;
				public getLanguageVersion(): number;
				public isAllowMemberExprAsFunctionName(): boolean;
				public getOptimizationLevel(): number;
				public isRecordingComments(): boolean;
				public setLanguageVersion(param0: number): void;
				public setIdeMode(param0: boolean): void;
				public setGeneratingSource(param0: boolean): void;
				public isGenerateDebugInfo(): boolean;
				public setWarnTrailingComma(param0: boolean): void;
				public setAllowSharpComments(param0: boolean): void;
				public getErrorReporter(): org.mozilla.javascript.ErrorReporter;
				public setAllowMemberExprAsFunctionName(param0: boolean): void;
				public getAllowSharpComments(): boolean;
				public isReservedKeywordAsIdentifier(): boolean;
				public setRecordingLocalJsDocComments(param0: boolean): void;
				public isStrictMode(): boolean;
				public static ideEnvirons(): org.mozilla.javascript.CompilerEnvirons;
				public isRecordingLocalJsDocComments(): boolean;
				public getActivationNames(): java.util.Set<string>;
				public isGenerateObserverCount(): boolean;
				public setRecoverFromErrors(param0: boolean): void;
				public initFromContext(param0: org.mozilla.javascript.Context): void;
				public getWarnTrailingComma(): boolean;
				public setXmlAvailable(param0: boolean): void;
				public setOptimizationLevel(param0: number): void;
				public setStrictMode(param0: boolean): void;
				public setRecordingComments(param0: boolean): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ConsString extends java.lang.Object implements java.lang.CharSequence, java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.ConsString>;
				public subSequence(param0: number, param1: number): string;
				public length(): number;
				public chars(): java.util.stream.IntStream;
				public codePoints(): java.util.stream.IntStream;
				public toString(): string;
				public constructor(param0: string, param1: string);
				public charAt(param0: number): string;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ConstProperties extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.ConstProperties>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.ConstProperties interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					isConst(param0: string): boolean;
				});
				public constructor();
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Context extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.Context>;
				public static VERSION_UNKNOWN: number;
				public static VERSION_DEFAULT: number;
				public static VERSION_1_0: number;
				public static VERSION_1_1: number;
				public static VERSION_1_2: number;
				public static VERSION_1_3: number;
				public static VERSION_1_4: number;
				public static VERSION_1_5: number;
				public static VERSION_1_6: number;
				public static VERSION_1_7: number;
				public static VERSION_1_8: number;
				public static VERSION_ES6: number;
				public static FEATURE_NON_ECMA_GET_YEAR: number;
				public static FEATURE_MEMBER_EXPR_AS_FUNCTION_NAME: number;
				public static FEATURE_RESERVED_KEYWORD_AS_IDENTIFIER: number;
				public static FEATURE_TO_STRING_AS_SOURCE: number;
				public static FEATURE_PARENT_PROTO_PROPERTIES: number;
				public static FEATURE_PARENT_PROTO_PROPRTIES: number;
				public static FEATURE_E4X: number;
				public static FEATURE_DYNAMIC_SCOPE: number;
				public static FEATURE_STRICT_VARS: number;
				public static FEATURE_STRICT_EVAL: number;
				public static FEATURE_LOCATION_INFORMATION_IN_ERROR: number;
				public static FEATURE_STRICT_MODE: number;
				public static FEATURE_WARNING_AS_ERROR: number;
				public static FEATURE_ENHANCED_JAVA_ACCESS: number;
				public static FEATURE_V8_EXTENSIONS: number;
				public static FEATURE_OLD_UNDEF_NULL_THIS: number;
				public static FEATURE_ENUMERATE_IDS_FIRST: number;
				public static languageVersionProperty: string;
				public static errorReporterProperty: string;
				public static emptyArgs: any[];
				public generateObserverCount: boolean;
				public removeActivationName(param0: string): void;
				public getE4xImplementationFactory(): org.mozilla.javascript.xml.XMLLib.Factory;
				public setInstructionObserverThreshold(param0: number): void;
				public setGenerateObserverCount(param0: boolean): void;
				public getImplementationVersion(): string;
				public getMaximumInterpreterStackDepth(): number;
				/** @deprecated */
				public compileReader(param0: org.mozilla.javascript.Scriptable, param1: java.io.Reader, param2: string, param3: number, param4: any): org.mozilla.javascript.Script;
				/** @deprecated */
				public static toObject(param0: any, param1: org.mozilla.javascript.Scriptable, param2: java.lang.Class<any>): org.mozilla.javascript.Scriptable;
				public static javaToJS(param0: any, param1: org.mozilla.javascript.Scriptable): any;
				public newObject(param0: org.mozilla.javascript.Scriptable, param1: string, param2: any[]): org.mozilla.javascript.Scriptable;
				public setClassShutter(param0: org.mozilla.javascript.ClassShutter): void;
				public evaluateReader(param0: org.mozilla.javascript.Scriptable, param1: java.io.Reader, param2: string, param3: number, param4: any): any;
				public newArray(param0: org.mozilla.javascript.Scriptable, param1: any[]): org.mozilla.javascript.Scriptable;
				public initStandardObjects(): org.mozilla.javascript.ScriptableObject;
				public setApplicationClassLoader(param0: java.lang.ClassLoader): void;
				public getErrorReporter(): org.mozilla.javascript.ErrorReporter;
				public setSecurityController(param0: org.mozilla.javascript.SecurityController): void;
				public removeThreadLocal(param0: any): void;
				public addPropertyChangeListener(param0: java.beans.PropertyChangeListener): void;
				public static reportError(param0: string): void;
				public newArray(param0: org.mozilla.javascript.Scriptable, param1: number): org.mozilla.javascript.Scriptable;
				public isStrictMode(): boolean;
				public decompileFunction(param0: org.mozilla.javascript.Function, param1: number): string;
				public newObject(param0: org.mozilla.javascript.Scriptable, param1: string): org.mozilla.javascript.Scriptable;
				/** @deprecated */
				public constructor();
				public hasFeature(param0: number): boolean;
				public static getCurrentContext(): org.mozilla.javascript.Context;
				public getElements(param0: org.mozilla.javascript.Scriptable): any[];
				public putThreadLocal(param0: any, param1: any): void;
				public static toString(param0: any): string;
				public constructor(param0: org.mozilla.javascript.ContextFactory);
				public static jsToJava(param0: any, param1: java.lang.Class<any>): any;
				public setWrapFactory(param0: org.mozilla.javascript.WrapFactory): void;
				public setDebugger(param0: org.mozilla.javascript.debug.Debugger, param1: any): void;
				public static reportRuntimeError(param0: string): org.mozilla.javascript.EvaluatorException;
				public getLocale(): java.util.Locale;
				public isGeneratingSource(): boolean;
				public static toObject(param0: any, param1: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public decompileFunctionBody(param0: org.mozilla.javascript.Function, param1: number): string;
				public static checkOptimizationLevel(param0: number): void;
				public captureContinuation(): org.mozilla.javascript.ContinuationPending;
				public decompileScript(param0: org.mozilla.javascript.Script, param1: number): string;
				public setMaximumInterpreterStackDepth(param0: number): void;
				public static reportWarning(param0: string, param1: java.lang.Throwable): void;
				public static throwAsScriptRuntimeEx(param0: java.lang.Throwable): java.lang.RuntimeException;
				public getLanguageVersion(): number;
				public isSealed(): boolean;
				public setLanguageVersion(param0: number): void;
				public setLocale(param0: java.util.Locale): java.util.Locale;
				public seal(param0: any): void;
				public newObject(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public compileFunction(param0: org.mozilla.javascript.Scriptable, param1: string, param2: string, param3: number, param4: any): org.mozilla.javascript.Function;
				/** @deprecated */
				public static call(param0: org.mozilla.javascript.ContextAction): any;
				public unseal(param0: any): void;
				public stringIsCompilableUnit(param0: string): boolean;
				/** @deprecated */
				public static enter(param0: org.mozilla.javascript.Context): org.mozilla.javascript.Context;
				public evaluateString(param0: org.mozilla.javascript.Scriptable, param1: string, param2: string, param3: number, param4: any): any;
				public isActivationNeeded(param0: string): boolean;
				public initStandardObjects(param0: org.mozilla.javascript.ScriptableObject, param1: boolean): org.mozilla.javascript.ScriptableObject;
				public setOptimizationLevel(param0: number): void;
				/** @deprecated */
				public static toType(param0: any, param1: java.lang.Class<any>): any;
				public static exit(): void;
				public static getUndefinedValue(): any;
				public getApplicationClassLoader(): java.lang.ClassLoader;
				public getFactory(): org.mozilla.javascript.ContextFactory;
				public static toNumber(param0: any): number;
				/** @deprecated */
				public static setCachingEnabled(param0: boolean): void;
				public static reportError(param0: string, param1: string, param2: number, param3: string, param4: number): void;
				public isGeneratingDebug(): boolean;
				public compileReader(param0: java.io.Reader, param1: string, param2: number, param3: any): org.mozilla.javascript.Script;
				public setErrorReporter(param0: org.mozilla.javascript.ErrorReporter): org.mozilla.javascript.ErrorReporter;
				public compileString(param0: string, param1: string, param2: number, param3: any): org.mozilla.javascript.Script;
				public getOptimizationLevel(): number;
				public setGeneratingDebug(param0: boolean): void;
				public static checkLanguageVersion(param0: number): void;
				public initSafeStandardObjects(param0: org.mozilla.javascript.ScriptableObject, param1: boolean): org.mozilla.javascript.ScriptableObject;
				public setGeneratingSource(param0: boolean): void;
				public static enter(): org.mozilla.javascript.Context;
				public initSafeStandardObjects(): org.mozilla.javascript.ScriptableObject;
				public getDebuggerContextData(): any;
				public toString(): string;
				public executeScriptWithContinuations(param0: org.mozilla.javascript.Script, param1: org.mozilla.javascript.Scriptable): any;
				public static getDebuggableView(param0: org.mozilla.javascript.Script): org.mozilla.javascript.debug.DebuggableScript;
				public getDebugger(): org.mozilla.javascript.debug.Debugger;
				public getWrapFactory(): org.mozilla.javascript.WrapFactory;
				public getClassShutterSetter(): org.mozilla.javascript.Context.ClassShutterSetter;
				public isGeneratingDebugChanged(): boolean;
				public removePropertyChangeListener(param0: java.beans.PropertyChangeListener): void;
				public addActivationName(param0: string): void;
				public static call(param0: org.mozilla.javascript.ContextFactory, param1: org.mozilla.javascript.Callable, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public static reportWarning(param0: string): void;
				public createClassLoader(param0: java.lang.ClassLoader): org.mozilla.javascript.GeneratedClassLoader;
				public static isValidOptimizationLevel(param0: number): boolean;
				public observeInstructionCount(param0: number): void;
				public static reportWarning(param0: string, param1: string, param2: number, param3: string, param4: number): void;
				public callFunctionWithContinuations(param0: org.mozilla.javascript.Callable, param1: org.mozilla.javascript.Scriptable, param2: any[]): any;
				public resumeContinuation(param0: any, param1: org.mozilla.javascript.Scriptable, param2: any): any;
				public static isValidLanguageVersion(param0: number): boolean;
				public static reportRuntimeError(param0: string, param1: string, param2: number, param3: string, param4: number): org.mozilla.javascript.EvaluatorException;
				public getThreadLocal(param0: any): any;
				public initStandardObjects(param0: org.mozilla.javascript.ScriptableObject): org.mozilla.javascript.Scriptable;
				public static toBoolean(param0: any): boolean;
				/** @deprecated */
				public static addContextListener(param0: org.mozilla.javascript.ContextListener): void;
				public initSafeStandardObjects(param0: org.mozilla.javascript.ScriptableObject): org.mozilla.javascript.Scriptable;
				/** @deprecated */
				public static removeContextListener(param0: org.mozilla.javascript.ContextListener): void;
				public getInstructionObserverThreshold(): number;
			}
			export module Context {
				export class ClassShutterSetter extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.Context.ClassShutterSetter>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.Context$ClassShutterSetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setClassShutter(param0: org.mozilla.javascript.ClassShutter): void;
						getClassShutter(): org.mozilla.javascript.ClassShutter;
					});
					public constructor();
					public setClassShutter(param0: org.mozilla.javascript.ClassShutter): void;
					public getClassShutter(): org.mozilla.javascript.ClassShutter;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ContextAction extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.ContextAction>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.ContextAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					run(param0: org.mozilla.javascript.Context): any;
				});
				public constructor();
				public run(param0: org.mozilla.javascript.Context): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ContextFactory extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.ContextFactory>;
				public static initGlobal(param0: org.mozilla.javascript.ContextFactory): void;
				public getE4xImplementationFactory(): org.mozilla.javascript.xml.XMLLib.Factory;
				public call(param0: org.mozilla.javascript.ContextAction): any;
				public static getGlobal(): org.mozilla.javascript.ContextFactory;
				public enterContext(param0: org.mozilla.javascript.Context): org.mozilla.javascript.Context;
				public onContextReleased(param0: org.mozilla.javascript.Context): void;
				public makeContext(): org.mozilla.javascript.Context;
				public seal(): void;
				/** @deprecated */
				public enter(): org.mozilla.javascript.Context;
				public initApplicationClassLoader(param0: java.lang.ClassLoader): void;
				public constructor();
				/** @deprecated */
				public exit(): void;
				public hasFeature(param0: org.mozilla.javascript.Context, param1: number): boolean;
				public doTopCall(param0: org.mozilla.javascript.Callable, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public createClassLoader(param0: java.lang.ClassLoader): org.mozilla.javascript.GeneratedClassLoader;
				public addListener(param0: org.mozilla.javascript.ContextFactory.Listener): void;
				public isSealed(): boolean;
				public static getGlobalSetter(): org.mozilla.javascript.ContextFactory.GlobalSetter;
				public onContextCreated(param0: org.mozilla.javascript.Context): void;
				public static hasExplicitGlobal(): boolean;
				public observeInstructionCount(param0: org.mozilla.javascript.Context, param1: number): void;
				public enterContext(): org.mozilla.javascript.Context;
				public removeListener(param0: org.mozilla.javascript.ContextFactory.Listener): void;
				public checkNotSealed(): void;
				public getApplicationClassLoader(): java.lang.ClassLoader;
			}
			export module ContextFactory {
				export class GlobalSetter extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.ContextFactory.GlobalSetter>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.ContextFactory$GlobalSetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setContextFactoryGlobal(param0: org.mozilla.javascript.ContextFactory): void;
						getContextFactoryGlobal(): org.mozilla.javascript.ContextFactory;
					});
					public constructor();
					public setContextFactoryGlobal(param0: org.mozilla.javascript.ContextFactory): void;
					public getContextFactoryGlobal(): org.mozilla.javascript.ContextFactory;
				}
				export class Listener extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.ContextFactory.Listener>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.ContextFactory$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						contextCreated(param0: org.mozilla.javascript.Context): void;
						contextReleased(param0: org.mozilla.javascript.Context): void;
					});
					public constructor();
					public contextCreated(param0: org.mozilla.javascript.Context): void;
					public contextReleased(param0: org.mozilla.javascript.Context): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ContextListener extends java.lang.Object implements org.mozilla.javascript.ContextFactory.Listener {
				public static class: java.lang.Class<org.mozilla.javascript.ContextListener>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.ContextListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					contextEntered(param0: org.mozilla.javascript.Context): void;
					contextExited(param0: org.mozilla.javascript.Context): void;
					contextCreated(param0: org.mozilla.javascript.Context): void;
					contextReleased(param0: org.mozilla.javascript.Context): void;
				});
				public constructor();
				/** @deprecated */
				public contextExited(param0: org.mozilla.javascript.Context): void;
				public contextCreated(param0: org.mozilla.javascript.Context): void;
				public contextReleased(param0: org.mozilla.javascript.Context): void;
				/** @deprecated */
				public contextEntered(param0: org.mozilla.javascript.Context): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ContinuationPending extends java.lang.RuntimeException {
				public static class: java.lang.Class<org.mozilla.javascript.ContinuationPending>;
				public setContinuation(param0: org.mozilla.javascript.NativeContinuation): void;
				public getApplicationState(): any;
				public constructor(param0: org.mozilla.javascript.NativeContinuation);
				public getContinuation(): any;
				public setApplicationState(param0: any): void;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class DToA extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.DToA>;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Decompiler extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.Decompiler>;
				public static ONLY_BODY_FLAG: number;
				public static TO_SOURCE_FLAG: number;
				public static INITIAL_INDENT_PROP: number;
				public static INDENT_GAP_PROP: number;
				public static CASE_GAP_PROP: number;
				public constructor();
				public static decompile(param0: string, param1: number, param2: org.mozilla.javascript.UintMap): string;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class DefaultErrorReporter extends java.lang.Object implements org.mozilla.javascript.ErrorReporter {
				public static class: java.lang.Class<org.mozilla.javascript.DefaultErrorReporter>;
				public warning(param0: string, param1: string, param2: number, param3: string, param4: number): void;
				public runtimeError(param0: string, param1: string, param2: number, param3: string, param4: number): org.mozilla.javascript.EvaluatorException;
				public error(param0: string, param1: string, param2: number, param3: string, param4: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class DefiningClassLoader extends java.lang.ClassLoader implements org.mozilla.javascript.GeneratedClassLoader {
				public static class: java.lang.Class<org.mozilla.javascript.DefiningClassLoader>;
				public linkClass(param0: java.lang.Class<any>): void;
				public defineClass(param0: string, param1: number[], param2: number, param3: number): java.lang.Class<any>;
				public defineClass(param0: string, param1: number[]): java.lang.Class<any>;
				public defineClass(param0: string, param1: number[], param2: number, param3: number, param4: java.security.ProtectionDomain): java.lang.Class<any>;
				/** @deprecated */
				public defineClass(param0: number[], param1: number, param2: number): java.lang.Class<any>;
				public defineClass(param0: string, param1: java.nio.ByteBuffer, param2: java.security.ProtectionDomain): java.lang.Class<any>;
				public loadClass(param0: string): java.lang.Class<any>;
				public loadClass(param0: string, param1: boolean): java.lang.Class<any>;
				public constructor(param0: java.lang.ClassLoader);
				public constructor();
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Delegator extends java.lang.Object implements org.mozilla.javascript.Function {
				public static class: java.lang.Class<org.mozilla.javascript.Delegator>;
				public obj: org.mozilla.javascript.Scriptable;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public getClassName(): string;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public setDelegee(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: string): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getDelegee(): org.mozilla.javascript.Scriptable;
				public constructor();
				public constructor(param0: org.mozilla.javascript.Scriptable);
				public newInstance(): org.mozilla.javascript.Delegator;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public getIds(): any[];
				public delete(param0: number): void;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export abstract class ES6Iterator extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.ES6Iterator>;
				public exhausted: boolean;
				public static NEXT_METHOD: string;
				public static DONE_PROPERTY: string;
				public static VALUE_PROPERTY: string;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public findPrototypeId(param0: string): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isDone(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): boolean;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public next(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): any;
				public getTag(): string;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public nextValue(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class EcmaError extends org.mozilla.javascript.RhinoException {
				public static class: java.lang.Class<org.mozilla.javascript.EcmaError>;
				/** @deprecated */
				public getErrorObject(): org.mozilla.javascript.Scriptable;
				public getName(): string;
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public details(): string;
				public getErrorMessage(): string;
				/** @deprecated */
				public getSourceName(): string;
				/** @deprecated */
				public getLineSource(): string;
				/** @deprecated */
				public getColumnNumber(): number;
				public constructor(param0: string, param1: java.lang.Throwable);
				/** @deprecated */
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: string, param2: number, param3: number, param4: string);
				/** @deprecated */
				public getLineNumber(): number;
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ErrorReporter extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.ErrorReporter>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.ErrorReporter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					warning(param0: string, param1: string, param2: number, param3: string, param4: number): void;
					error(param0: string, param1: string, param2: number, param3: string, param4: number): void;
					runtimeError(param0: string, param1: string, param2: number, param3: string, param4: number): org.mozilla.javascript.EvaluatorException;
				});
				public constructor();
				public warning(param0: string, param1: string, param2: number, param3: string, param4: number): void;
				public runtimeError(param0: string, param1: string, param2: number, param3: string, param4: number): org.mozilla.javascript.EvaluatorException;
				public error(param0: string, param1: string, param2: number, param3: string, param4: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Evaluator extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.Evaluator>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.Evaluator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					compile(param0: org.mozilla.javascript.CompilerEnvirons, param1: org.mozilla.javascript.ast.ScriptNode, param2: string, param3: boolean): any;
					createFunctionObject(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any, param3: any): org.mozilla.javascript.Function;
					createScriptObject(param0: any, param1: any): org.mozilla.javascript.Script;
					captureStackInfo(param0: org.mozilla.javascript.RhinoException): void;
					getSourcePositionFromStack(param0: org.mozilla.javascript.Context, param1: number[]): string;
					getPatchedStack(param0: org.mozilla.javascript.RhinoException, param1: string): string;
					getScriptStack(param0: org.mozilla.javascript.RhinoException): java.util.List<string>;
					setEvalScriptFlag(param0: org.mozilla.javascript.Script): void;
				});
				public constructor();
				public createScriptObject(param0: any, param1: any): org.mozilla.javascript.Script;
				public captureStackInfo(param0: org.mozilla.javascript.RhinoException): void;
				public compile(param0: org.mozilla.javascript.CompilerEnvirons, param1: org.mozilla.javascript.ast.ScriptNode, param2: string, param3: boolean): any;
				public getScriptStack(param0: org.mozilla.javascript.RhinoException): java.util.List<string>;
				public createFunctionObject(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any, param3: any): org.mozilla.javascript.Function;
				public setEvalScriptFlag(param0: org.mozilla.javascript.Script): void;
				public getSourcePositionFromStack(param0: org.mozilla.javascript.Context, param1: number[]): string;
				public getPatchedStack(param0: org.mozilla.javascript.RhinoException, param1: string): string;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class EvaluatorException extends org.mozilla.javascript.RhinoException {
				public static class: java.lang.Class<org.mozilla.javascript.EvaluatorException>;
				/** @deprecated */
				public getSourceName(): string;
				public constructor(param0: string, param1: string, param2: number);
				/** @deprecated */
				public getLineSource(): string;
				public constructor(param0: string, param1: string, param2: number, param3: string, param4: number);
				/** @deprecated */
				public getColumnNumber(): number;
				public constructor(param0: string, param1: java.lang.Throwable);
				/** @deprecated */
				public getLineNumber(): number;
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ExternalArrayData extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.ExternalArrayData>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.ExternalArrayData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getArrayElement(param0: number): any;
					setArrayElement(param0: number, param1: any): void;
					getArrayLength(): number;
				});
				public constructor();
				public setArrayElement(param0: number, param1: any): void;
				public getArrayElement(param0: number): any;
				public getArrayLength(): number;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class FieldAndMethods extends org.mozilla.javascript.NativeJavaMethod {
				public static class: java.lang.Class<org.mozilla.javascript.FieldAndMethods>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getAllIds(): any[];
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Function extends java.lang.Object implements org.mozilla.javascript.Scriptable, org.mozilla.javascript.Callable {
				public static class: java.lang.Class<org.mozilla.javascript.Function>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.Function interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
					construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
					getClassName(): string;
					get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					delete(param0: string): void;
					delete(param0: number): void;
					getPrototype(): org.mozilla.javascript.Scriptable;
					setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					getParentScope(): org.mozilla.javascript.Scriptable;
					setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					getIds(): any[];
					getDefaultValue(param0: java.lang.Class<any>): any;
					hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					<clinit>(): void;
					call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				});
				public constructor();
				public static NOT_FOUND: any;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public getClassName(): string;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public delete(param0: string): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public getIds(): any[];
				public delete(param0: number): void;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class FunctionObject extends org.mozilla.javascript.BaseFunction {
				public static class: java.lang.Class<org.mozilla.javascript.FunctionObject>;
				public static JAVA_UNSUPPORTED_TYPE: number;
				public static JAVA_STRING_TYPE: number;
				public static JAVA_INT_TYPE: number;
				public static JAVA_BOOLEAN_TYPE: number;
				public static JAVA_DOUBLE_TYPE: number;
				public static JAVA_SCRIPTABLE_TYPE: number;
				public static JAVA_OBJECT_TYPE: number;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public getArity(): number;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public getFunctionName(): string;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getAllIds(): any[];
				public constructor();
				public createObject(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public addAsConstructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public getMethodOrConstructor(): java.lang.reflect.Member;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public static convertArg(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any, param3: number): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public static getTypeTag(param0: java.lang.Class<any>): number;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getLength(): number;
				public constructor(param0: string, param1: java.lang.reflect.Member, param2: org.mozilla.javascript.Scriptable);
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				/** @deprecated */
				public static convertArg(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any, param3: java.lang.Class<any>): any;
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class GeneratedClassLoader extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.GeneratedClassLoader>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.GeneratedClassLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					defineClass(param0: string, param1: number[]): java.lang.Class<any>;
					linkClass(param0: java.lang.Class<any>): void;
				});
				public constructor();
				public linkClass(param0: java.lang.Class<any>): void;
				public defineClass(param0: string, param1: number[]): java.lang.Class<any>;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class IRFactory extends org.mozilla.javascript.Parser {
				public static class: java.lang.Class<org.mozilla.javascript.IRFactory>;
				public constructor(param0: org.mozilla.javascript.CompilerEnvirons);
				public constructor(param0: org.mozilla.javascript.CompilerEnvirons, param1: org.mozilla.javascript.ErrorReporter);
				public transformTree(param0: org.mozilla.javascript.ast.AstRoot): org.mozilla.javascript.ast.ScriptNode;
				public transform(param0: org.mozilla.javascript.ast.AstNode): org.mozilla.javascript.Node;
				public constructor();
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export abstract class Icode extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.Icode>;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class IdFunctionCall extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.IdFunctionCall>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.IdFunctionCall interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				});
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class IdFunctionObject extends org.mozilla.javascript.BaseFunction {
				public static class: java.lang.Class<org.mozilla.javascript.IdFunctionObject>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public hasTag(param0: any): boolean;
				public getArity(): number;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public getFunctionName(): string;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getAllIds(): any[];
				public constructor();
				public createObject(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public constructor(param0: org.mozilla.javascript.IdFunctionCall, param1: any, param2: number, param3: string, param4: number, param5: org.mozilla.javascript.Scriptable);
				public constructor(param0: org.mozilla.javascript.IdFunctionCall, param1: any, param2: number, param3: number);
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public exportAsScopeProperty(): void;
				public getTag(): any;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public markAsConstructor(param0: org.mozilla.javascript.Scriptable): void;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public initFunction(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getLength(): number;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public addAsProperty(param0: org.mozilla.javascript.Scriptable): void;
				public unknown(): java.lang.RuntimeException;
				public methodId(): number;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class IdFunctionObjectES6 extends org.mozilla.javascript.IdFunctionObject {
				public static class: java.lang.Class<org.mozilla.javascript.IdFunctionObjectES6>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getAllIds(): any[];
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public constructor(param0: org.mozilla.javascript.IdFunctionCall, param1: any, param2: number, param3: string, param4: number, param5: org.mozilla.javascript.Scriptable);
				public constructor(param0: org.mozilla.javascript.IdFunctionCall, param1: any, param2: number, param3: number);
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public findInstanceIdInfo(param0: org.mozilla.javascript.Symbol): number;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getInstanceIdValue(param0: number): any;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public findInstanceIdInfo(param0: string): number;
				public getIds(): any[];
				public delete(param0: number): void;
				public setInstanceIdValue(param0: number, param1: any): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export abstract class IdScriptableObject extends org.mozilla.javascript.ScriptableObject implements org.mozilla.javascript.IdFunctionCall {
				public static class: java.lang.Class<org.mozilla.javascript.IdScriptableObject>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public getMaxInstanceId(): number;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public defaultPut(param0: string, param1: any): void;
				public getClassName(): string;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public initPrototypeMethod(param0: any, param1: number, param2: org.mozilla.javascript.Symbol, param3: string, param4: number): org.mozilla.javascript.IdFunctionObject;
				public findPrototypeId(param0: string): number;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public defaultGet(param0: string): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				/** @deprecated */
				public setAttributes(param0: number, param1: org.mozilla.javascript.Scriptable, param2: number): void;
				public initPrototypeConstructor(param0: org.mozilla.javascript.IdFunctionObject): void;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getAttributes(param0: org.mozilla.javascript.Symbol): number;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public getAttributes(param0: string): number;
				public hasPrototypeMap(): boolean;
				public static instanceIdInfo(param0: number, param1: number): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public addIdFunctionProperty(param0: org.mozilla.javascript.Scriptable, param1: any, param2: number, param3: string, param4: number): void;
				public getInstanceIdValue(param0: number): any;
				/** @deprecated */
				public setAttributes(param0: string, param1: org.mozilla.javascript.Scriptable, param2: number): void;
				public initPrototypeMethod(param0: any, param1: number, param2: string, param3: string, param4: number): org.mozilla.javascript.IdFunctionObject;
				public defineOwnProperty(param0: org.mozilla.javascript.Context, param1: any, param2: org.mozilla.javascript.ScriptableObject, param3: boolean): void;
				public getIds(): any[];
				public setAttributes(param0: string, param1: number): void;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public static incompatibleCallError(param0: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.EcmaError;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				/** @deprecated */
				public getAttributes(param0: string, param1: org.mozilla.javascript.Scriptable): number;
				public fillConstructorProperties(param0: org.mozilla.javascript.IdFunctionObject): void;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public getAllIds(): any[];
				public initPrototypeMethod(param0: any, param1: number, param2: string, param3: number): org.mozilla.javascript.IdFunctionObject;
				public getInstanceIdName(param0: number): string;
				public findInstanceIdInfo(param0: org.mozilla.javascript.Symbol): number;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public getAttributes(param0: number): number;
				public getOwnPropertyDescriptor(param0: org.mozilla.javascript.Context, param1: any): org.mozilla.javascript.ScriptableObject;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public setAttributes(param0: number, param1: number): void;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public exportAsJSClass(param0: number, param1: org.mozilla.javascript.Scriptable, param2: boolean): org.mozilla.javascript.IdFunctionObject;
				public defineOwnProperty(param0: org.mozilla.javascript.Context, param1: any, param2: org.mozilla.javascript.ScriptableObject): void;
				public activatePrototypeMap(param0: number): void;
				public setInstanceIdAttributes(param0: number, param1: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public setAttributes(param0: org.mozilla.javascript.Symbol, param1: number): void;
				public initPrototypeValue(param0: number, param1: org.mozilla.javascript.Symbol, param2: any, param3: number): void;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				/** @deprecated */
				public getAttributes(param0: number, param1: org.mozilla.javascript.Scriptable): number;
				public findInstanceIdInfo(param0: string): number;
				public initPrototypeValue(param0: number, param1: string, param2: any, param3: number): void;
				public defaultHas(param0: string): boolean;
				public delete(param0: number): void;
				public setInstanceIdValue(param0: number, param1: any): void;
			}
			export module IdScriptableObject {
				export class PrototypeValues extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.mozilla.javascript.IdScriptableObject.PrototypeValues>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ImporterTopLevel extends org.mozilla.javascript.TopLevel {
				public static class: java.lang.Class<org.mozilla.javascript.ImporterTopLevel>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(param0: string): number;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				/** @deprecated */
				public importPackage(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): void;
				public getAllIds(): any[];
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public initStandardObjects(param0: org.mozilla.javascript.Context, param1: boolean): void;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public constructor(param0: org.mozilla.javascript.Context);
				public getIds(): any[];
				public constructor(param0: org.mozilla.javascript.Context, param1: boolean);
				public delete(param0: number): void;
				public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class InterfaceAdapter extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.InterfaceAdapter>;
				public invoke(param0: org.mozilla.javascript.ContextFactory, param1: any, param2: org.mozilla.javascript.Scriptable, param3: any, param4: java.lang.reflect.Method, param5: any[]): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class InterpretedFunction extends org.mozilla.javascript.NativeFunction implements org.mozilla.javascript.Script {
				public static class: java.lang.Class<org.mozilla.javascript.InterpretedFunction>;
				public getParamOrVarConst(param0: number): boolean;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getParamAndVarCount(): number;
				public getClassName(): string;
				public get(param0: any): any;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public isScript(): boolean;
				public resumeGenerator(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: number, param3: any, param4: any): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public getFunctionName(): string;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getParamCount(): number;
				public getAllIds(): any[];
				public exec(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getLanguageVersion(): number;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public getDebuggableView(): org.mozilla.javascript.debug.DebuggableScript;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getEncodedSource(): string;
				public getParamOrVarName(param0: number): string;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Interpreter extends org.mozilla.javascript.Icode implements org.mozilla.javascript.Evaluator {
				public static class: java.lang.Class<org.mozilla.javascript.Interpreter>;
				public createScriptObject(param0: any, param1: any): org.mozilla.javascript.Script;
				public captureStackInfo(param0: org.mozilla.javascript.RhinoException): void;
				public compile(param0: org.mozilla.javascript.CompilerEnvirons, param1: org.mozilla.javascript.ast.ScriptNode, param2: string, param3: boolean): any;
				public getScriptStackElements(param0: org.mozilla.javascript.RhinoException): Array<Array<org.mozilla.javascript.ScriptStackElement>>;
				public createFunctionObject(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any, param3: any): org.mozilla.javascript.Function;
				public getSourcePositionFromStack(param0: org.mozilla.javascript.Context, param1: number[]): string;
				public static captureContinuation(param0: org.mozilla.javascript.Context): org.mozilla.javascript.NativeContinuation;
				public constructor();
				public static restartContinuation(param0: org.mozilla.javascript.NativeContinuation, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public getScriptStack(param0: org.mozilla.javascript.RhinoException): java.util.List<string>;
				public setEvalScriptFlag(param0: org.mozilla.javascript.Script): void;
				public static resumeGenerator(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: number, param3: any, param4: any): any;
				public getPatchedStack(param0: org.mozilla.javascript.RhinoException, param1: string): string;
			}
			export module Interpreter {
				export class CallFrame extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable {
					public static class: java.lang.Class<org.mozilla.javascript.Interpreter.CallFrame>;
				}
				export class ContinuationJump extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.mozilla.javascript.Interpreter.ContinuationJump>;
				}
				export class GeneratorState extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.Interpreter.GeneratorState>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class InterpreterData extends java.lang.Object implements java.io.Serializable, org.mozilla.javascript.debug.DebuggableScript {
				public static class: java.lang.Class<org.mozilla.javascript.InterpreterData>;
				public getParamOrVarConst(param0: number): boolean;
				public getParamAndVarCount(): number;
				public getFunctionCount(): number;
				public isTopLevel(): boolean;
				public getFunctionName(): string;
				public isFunction(): boolean;
				public getParamCount(): number;
				public getParamOrVarName(param0: number): string;
				public getFunction(param0: number): org.mozilla.javascript.debug.DebuggableScript;
				public isGeneratedScript(): boolean;
				public getParent(): org.mozilla.javascript.debug.DebuggableScript;
				public getSourceName(): string;
				public getLineNumbers(): number[];
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class JavaAdapter extends java.lang.Object implements org.mozilla.javascript.IdFunctionCall {
				public static class: java.lang.Class<org.mozilla.javascript.JavaAdapter>;
				public static runScript(param0: org.mozilla.javascript.Script): org.mozilla.javascript.Scriptable;
				public static writeAdapterObject(param0: any, param1: java.io.ObjectOutputStream): void;
				public static convertResult(param0: any, param1: java.lang.Class<any>): any;
				public static createAdapterWrapper(param0: org.mozilla.javascript.Scriptable, param1: any): org.mozilla.javascript.Scriptable;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public static createAdapterCode(param0: org.mozilla.javascript.ObjToIntMap, param1: string, param2: java.lang.Class<any>, param3: Array<java.lang.Class<any>>, param4: string): number[];
				public static getFunction(param0: org.mozilla.javascript.Scriptable, param1: string): org.mozilla.javascript.Function;
				public static readAdapterObject(param0: org.mozilla.javascript.Scriptable, param1: java.io.ObjectInputStream): any;
				public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
				public static getAdapterSelf(param0: java.lang.Class<any>, param1: any): any;
				public constructor();
				public static callMethod(param0: org.mozilla.javascript.ContextFactory, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Function, param3: any[], param4: number): any;
			}
			export module JavaAdapter {
				export class JavaAdapterSignature extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.JavaAdapter.JavaAdapterSignature>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class JavaMembers extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.JavaMembers>;
			}
			export module JavaMembers {
				export class MethodSignature extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.JavaMembers.MethodSignature>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class JavaScriptException extends org.mozilla.javascript.RhinoException {
				public static class: java.lang.Class<org.mozilla.javascript.JavaScriptException>;
				public details(): string;
				/** @deprecated */
				public getSourceName(): string;
				public constructor(param0: string, param1: java.lang.Throwable);
				/** @deprecated */
				public getLineNumber(): number;
				public getValue(): any;
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: any, param1: string, param2: number);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				/** @deprecated */
				public constructor(param0: any);
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Kit extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.Kit>;
				public static codeBug(param0: string): java.lang.RuntimeException;
				public static xDigitToInt(param0: number, param1: number): number;
				public static addListener(param0: any, param1: any): any;
				public static readReader(param0: java.io.Reader): string;
				public static codeBug(): java.lang.RuntimeException;
				public static classOrNull(param0: string): java.lang.Class<any>;
				public static readStream(param0: java.io.InputStream, param1: number): number[];
				public static initCause(param0: java.lang.RuntimeException, param1: java.lang.Throwable): java.lang.RuntimeException;
				public constructor();
				public static classOrNull(param0: java.lang.ClassLoader, param1: string): java.lang.Class<any>;
				public static makeHashKeyFromPair(param0: any, param1: any): any;
				public static getListener(param0: any, param1: number): any;
				public static removeListener(param0: any, param1: any): any;
			}
			export module Kit {
				export class ComplexKey extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.Kit.ComplexKey>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class LazilyLoadedCtor extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.LazilyLoadedCtor>;
				public constructor(param0: org.mozilla.javascript.ScriptableObject, param1: string, param2: string, param3: boolean);
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class MemberBox extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.MemberBox>;
				public toString(): string;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeArray extends org.mozilla.javascript.IdScriptableObject implements java.util.List<any> {
				public static class: java.lang.Class<org.mozilla.javascript.NativeArray>;
				public getMaxInstanceId(): number;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public indexOf(param0: any): number;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public remove(param0: number): any;
				public addAll(param0: java.util.Collection<any>): boolean;
				public addAll(param0: number, param1: java.util.Collection<any>): boolean;
				public findPrototypeId(param0: string): number;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public removeIf(param0: any /* any*/): boolean;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public add(param0: number, param1: any): void;
				public constructor();
				public toArray(): any[];
				public set(param0: number, param1: any): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public add(param0: any): boolean;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public addAll(param0: number, param1: java.util.Collection<any>): boolean;
				public isEmpty(): boolean;
				public lastIndexOf(param0: any): number;
				public sort(param0: java.util.Comparator<any>): void;
				public listIterator(param0: number): java.util.ListIterator<any>;
				public constructor(param0: any[]);
				public listIterator(): java.util.ListIterator<any>;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public getAttributes(param0: org.mozilla.javascript.Symbol): number;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getAttributes(param0: string): number;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public stream(): java.util.stream.Stream<any>;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public iterator(): java.util.Iterator<any>;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getInstanceIdValue(param0: number): any;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public size(): number;
				public getIndexIds(): Array<java.lang.Integer>;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public defineOwnProperty(param0: org.mozilla.javascript.Context, param1: any, param2: org.mozilla.javascript.ScriptableObject, param3: boolean): void;
				public replaceAll(param0: any /* any*/): void;
				public getIds(): any[];
				public subList(param0: number, param1: number): java.util.List<any>;
				public parallelStream(): java.util.stream.Stream<any>;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public fillConstructorProperties(param0: org.mozilla.javascript.IdFunctionObject): void;
				/** @deprecated */
				public getAttributes(param0: string, param1: org.mozilla.javascript.Scriptable): number;
				public listIterator(): java.util.ListIterator<any>;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public listIterator(param0: number): java.util.ListIterator<any>;
				public getAllIds(): any[];
				public containsAll(param0: java.util.Collection<any>): boolean;
				public getInstanceIdName(param0: number): string;
				public clear(): void;
				public findInstanceIdInfo(param0: org.mozilla.javascript.Symbol): number;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public getAttributes(param0: number): number;
				public getOwnPropertyDescriptor(param0: org.mozilla.javascript.Context, param1: any): org.mozilla.javascript.ScriptableObject;
				public getIds(param0: boolean, param1: boolean): any[];
				public remove(param0: any): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public iterator(): java.util.Iterator<any>;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public defineOwnProperty(param0: org.mozilla.javascript.Context, param1: any, param2: org.mozilla.javascript.ScriptableObject): void;
				public subList(param0: number, param1: number): java.util.List<any>;
				public setInstanceIdAttributes(param0: number, param1: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public toArray(param0: any[]): any[];
				/** @deprecated */
				public jsGet_length(): number;
				public getLength(): number;
				public get(param0: number): any;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public addAll(param0: java.util.Collection<any>): boolean;
				public findInstanceIdInfo(param0: string): number;
				/** @deprecated */
				public getAttributes(param0: number, param1: org.mozilla.javascript.Scriptable): number;
				public forEach(param0: any /* any*/): void;
				public constructor(param0: number);
				public delete(param0: number): void;
				public setInstanceIdValue(param0: number, param1: any): void;
				public containsAll(param0: java.util.Collection<any>): boolean;
			}
			export module NativeArray {
				export class ElementComparator extends java.util.Comparator<any> {
					public static class: java.lang.Class<org.mozilla.javascript.NativeArray.ElementComparator>;
					public compare(param0: any, param1: any): number;
					public static comparing(param0: any /* any*/): java.util.Comparator<any>;
					public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
					public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
					public constructor(param0: java.util.Comparator<any>);
					public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
					public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
					public equals(param0: any): boolean;
					public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
					public constructor();
					public reversed(): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
					public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
				}
				export class StringLikeComparator extends java.util.Comparator<any> {
					public static class: java.lang.Class<org.mozilla.javascript.NativeArray.StringLikeComparator>;
					public compare(param0: any, param1: any): number;
					public static comparing(param0: any /* any*/): java.util.Comparator<any>;
					public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
					public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
					public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
					public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
					public equals(param0: any): boolean;
					public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
					public constructor();
					public reversed(): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
					public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeArrayIterator extends org.mozilla.javascript.ES6Iterator {
				public static class: java.lang.Class<org.mozilla.javascript.NativeArrayIterator>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isDone(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): boolean;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public getTag(): string;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public nextValue(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeBoolean extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeBoolean>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public findPrototypeId(param0: string): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeCall extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeCall>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public delete(param0: string): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public initPrototypeId(param0: number): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public findPrototypeId(param0: string): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public defineAttributesForArguments(): void;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeCallSite extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeCallSite>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public findPrototypeId(param0: string): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeContinuation extends org.mozilla.javascript.IdScriptableObject implements org.mozilla.javascript.Function {
				public static class: java.lang.Class<org.mozilla.javascript.NativeContinuation>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public getImplementation(): any;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public findPrototypeId(param0: string): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static isContinuationConstructor(param0: org.mozilla.javascript.IdFunctionObject): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public initImplementation(param0: any): void;
				public getIds(): any[];
				public delete(param0: number): void;
				public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeDate extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeDate>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public fillConstructorProperties(param0: org.mozilla.javascript.IdFunctionObject): void;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public findPrototypeId(param0: string): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeError extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeError>;
				public static DEFAULT_STACK_LIMIT: number;
				public setStackProvider(param0: org.mozilla.javascript.RhinoException): void;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public getStackDelegated(param0: org.mozilla.javascript.Scriptable): any;
				public setStackDelegated(param0: org.mozilla.javascript.Scriptable, param1: any): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public fillConstructorProperties(param0: org.mozilla.javascript.IdFunctionObject): void;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public findPrototypeId(param0: string): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
			export module NativeError {
				export class ProtoProps extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.mozilla.javascript.NativeError.ProtoProps>;
					public getPrepareStackTrace(param0: org.mozilla.javascript.Scriptable): any;
					public getPrepareStackTrace(): org.mozilla.javascript.Function;
					public setPrepareStackTrace(param0: org.mozilla.javascript.Scriptable, param1: any): void;
					public getStackTraceLimit(param0: org.mozilla.javascript.Scriptable): any;
					public setStackTraceLimit(param0: org.mozilla.javascript.Scriptable, param1: any): void;
					public getStackTraceLimit(): number;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export abstract class NativeFunction extends org.mozilla.javascript.BaseFunction {
				public static class: java.lang.Class<org.mozilla.javascript.NativeFunction>;
				public getParamOrVarConst(param0: number): boolean;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getParamAndVarCount(): number;
				public getClassName(): string;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public getArity(): number;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public resumeGenerator(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: number, param3: any, param4: any): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getParamCount(): number;
				public getAllIds(): any[];
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				/** @deprecated */
				public jsGet_name(): string;
				public getLanguageVersion(): number;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public getDebuggableView(): org.mozilla.javascript.debug.DebuggableScript;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getEncodedSource(): string;
				public getLength(): number;
				public getParamOrVarName(param0: number): string;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
				public initScriptFunction(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeGenerator extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeGenerator>;
				public static GENERATOR_SEND: number;
				public static GENERATOR_THROW: number;
				public static GENERATOR_CLOSE: number;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.NativeFunction, param2: any);
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public findPrototypeId(param0: string): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
			export module NativeGenerator {
				export class GeneratorClosedException extends java.lang.RuntimeException {
					public static class: java.lang.Class<org.mozilla.javascript.NativeGenerator.GeneratorClosedException>;
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

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeGlobal extends java.lang.Object implements java.io.Serializable, org.mozilla.javascript.IdFunctionCall {
				public static class: java.lang.Class<org.mozilla.javascript.NativeGlobal>;
				/** @deprecated */
				public static constructError(param0: org.mozilla.javascript.Context, param1: string, param2: string, param3: org.mozilla.javascript.Scriptable): org.mozilla.javascript.EcmaError;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				/** @deprecated */
				public static constructError(param0: org.mozilla.javascript.Context, param1: string, param2: string, param3: org.mozilla.javascript.Scriptable, param4: string, param5: number, param6: number, param7: string): org.mozilla.javascript.EcmaError;
				public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeIterator extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeIterator>;
				public static ITERATOR_PROPERTY_NAME: string;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public findPrototypeId(param0: string): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static getStopIterationObject(param0: org.mozilla.javascript.Scriptable): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
			export module NativeIterator {
				export class StopIteration extends org.mozilla.javascript.NativeObject {
					public static class: java.lang.Class<org.mozilla.javascript.NativeIterator.StopIteration>;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public isEmpty(): boolean;
					public putAll(param0: java.util.Map<any, any>): void;
					public forEach(param0: any /* any<any,any>*/): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public size(): number;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public put(param0: any, param1: any): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public remove(param0: any): any;
					public keySet(): java.util.Set<any>;
					public delete(param0: number): void;
					public putIfAbsent(param0: any, param1: any): any;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public containsKey(param0: any): boolean;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public replace(param0: any, param1: any): any;
					public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public merge(param0: any, param1: any, param2: any /* any<any,any,any>*/): any;
					public getOrDefault(param0: any, param1: any): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public putAll(param0: java.util.Map<any,any>): void;
					public replace(param0: any, param1: any, param2: any): boolean;
					public containsValue(param0: any): boolean;
					public getClassName(): string;
					public clear(): void;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getAllIds(): any[];
					public delete(param0: string): void;
					public hashCode(): number;
					public remove(param0: any, param1: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public computeIfAbsent(param0: any, param1: any /* any<any,any>*/): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public values(): java.util.Collection<any>;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public equals(param0: any): boolean;
					public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public compute(param0: any, param1: any /* any<any,any,any>*/): any;
					public replaceAll(param0: any /* any<any,any,any>*/): void;
					public get(param0: any): any;
				}
				export class WrappedJavaIterator extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.NativeIterator.WrappedJavaIterator>;
					public next(): any;
					public __iterator__(param0: boolean): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeJSON extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeJSON>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public findPrototypeId(param0: string): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static stringify(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any, param3: any, param4: any): any;
				public static parse(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string, param3: org.mozilla.javascript.Callable): any;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
			export module NativeJSON {
				export class StringifyState extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.NativeJSON.StringifyState>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeJavaArray extends org.mozilla.javascript.NativeJavaObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeJavaArray>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getClassName(): string;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public delete(param0: string): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: any);
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: any, param2: java.lang.Class<any>, param3: boolean);
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				/** @deprecated */
				public static wrap(param0: org.mozilla.javascript.Scriptable, param1: any, param2: java.lang.Class<any>): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: any, param2: java.lang.Class<any>);
				public getIds(): any[];
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static wrap(param0: org.mozilla.javascript.Scriptable, param1: any): org.mozilla.javascript.NativeJavaArray;
				public delete(param0: number): void;
				public unwrap(): any;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeJavaClass extends org.mozilla.javascript.NativeJavaObject implements org.mozilla.javascript.Function {
				public static class: java.lang.Class<org.mozilla.javascript.NativeJavaClass>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public getClassName(): string;
				public delete(param0: string): void;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getClassObject(): java.lang.Class<any>;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: any, param2: java.lang.Class<any>);
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>);
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>, param2: boolean);
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public unwrap(): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: any, param2: java.lang.Class<any>, param3: boolean);
				public initMembers(): void;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeJavaConstructor extends org.mozilla.javascript.BaseFunction {
				public static class: java.lang.Class<org.mozilla.javascript.NativeJavaConstructor>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public getFunctionName(): string;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getAllIds(): any[];
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public constructor(param0: org.mozilla.javascript.MemberBox);
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeJavaMethod extends org.mozilla.javascript.BaseFunction {
				public static class: java.lang.Class<org.mozilla.javascript.NativeJavaMethod>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public getFunctionName(): string;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getAllIds(): any[];
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public constructor(param0: java.lang.reflect.Method, param1: string);
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeJavaObject extends java.lang.Object implements org.mozilla.javascript.Scriptable, org.mozilla.javascript.Wrapper, java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.NativeJavaObject>;
				public prototype: org.mozilla.javascript.Scriptable;
				public parent: org.mozilla.javascript.Scriptable;
				public javaObject: any;
				public staticType: java.lang.Class<any>;
				public members: org.mozilla.javascript.JavaMembers;
				public isAdapter: boolean;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public getClassName(): string;
				public static createInterfaceAdapter(param0: java.lang.Class<any>, param1: org.mozilla.javascript.ScriptableObject): any;
				public delete(param0: string): void;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public static canConvert(param0: any, param1: java.lang.Class<any>): boolean;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: any, param2: java.lang.Class<any>);
				/** @deprecated */
				public static coerceType(param0: java.lang.Class<any>, param1: any): any;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public unwrap(): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: any, param2: java.lang.Class<any>, param3: boolean);
				public initMembers(): void;
				/** @deprecated */
				public static wrap(param0: org.mozilla.javascript.Scriptable, param1: any, param2: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeJavaPackage extends org.mozilla.javascript.ScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeJavaPackage>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				/** @deprecated */
				public constructor(param0: string);
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
				/** @deprecated */
				public constructor(param0: string, param1: java.lang.ClassLoader);
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeJavaTopPackage extends org.mozilla.javascript.NativeJavaPackage implements org.mozilla.javascript.Function, org.mozilla.javascript.IdFunctionCall {
				public static class: java.lang.Class<org.mozilla.javascript.NativeJavaTopPackage>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
				public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeMath extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeMath>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public findPrototypeId(param0: string): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeNumber extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeNumber>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public fillConstructorProperties(param0: org.mozilla.javascript.IdFunctionObject): void;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public findPrototypeId(param0: string): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeObject extends org.mozilla.javascript.IdScriptableObject implements java.util.Map<any, any> {
				public static class: java.lang.Class<org.mozilla.javascript.NativeObject>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public putAll(param0: java.util.Map<any,any>): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public merge(param0: any, param1: any, param2: any /* any<any,any,any>*/): any;
				public findPrototypeId(param0: string): number;
				public computeIfAbsent(param0: any, param1: any /* any<any,any>*/): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public replaceAll(param0: any /* any<any,any,any>*/): void;
				public constructor();
				public remove(param0: any, param1: any): boolean;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putIfAbsent(param0: any, param1: any): any;
				public remove(param0: any): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public hashCode(): number;
				public compute(param0: any, param1: any /* any<any,any,any>*/): any;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public containsValue(param0: any): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public replace(param0: any, param1: any): any;
				public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public keySet(): java.util.Set<any>;
				public size(): number;
				public put(param0: any, param1: any): any;
				public getIds(): any[];
				public forEach(param0: any /* any<any,any>*/): void;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public fillConstructorProperties(param0: org.mozilla.javascript.IdFunctionObject): void;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public putAll(param0: java.util.Map<any, any>): void;
				public getOrDefault(param0: any, param1: any): any;
				public containsKey(param0: any): boolean;
				public getAllIds(): any[];
				public clear(): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
				public replace(param0: any, param1: any, param2: any): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public values(): java.util.Collection<any>;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public delete(param0: number): void;
			}
			export module NativeObject {
				export class EntrySet extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
					public static class: java.lang.Class<org.mozilla.javascript.NativeObject.EntrySet>;
					public addAll(param0: java.util.Collection<any>): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public isEmpty(): boolean;
					public add(param0: any): boolean;
					public parallelStream(): java.util.stream.Stream<any>;
					public spliterator(): java.util.Spliterator<any>;
					public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public size(): number;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public equals(param0: any): boolean;
					public iterator(): java.util.Iterator<any>;
					public toArray(param0: any[]): any[];
					public toArray(): any[];
					public clear(): void;
					public stream(): java.util.stream.Stream<any>;
					public hashCode(): number;
					public contains(param0: any): boolean;
					public removeIf(param0: any /* any*/): boolean;
				}
				export class KeySet extends java.util.AbstractSet<any> {
					public static class: java.lang.Class<org.mozilla.javascript.NativeObject.KeySet>;
					public addAll(param0: java.util.Collection<any>): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public isEmpty(): boolean;
					public add(param0: any): boolean;
					public parallelStream(): java.util.stream.Stream<any>;
					public spliterator(): java.util.Spliterator<any>;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public size(): number;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public equals(param0: any): boolean;
					public iterator(): java.util.Iterator<any>;
					public toArray(param0: any[]): any[];
					public toArray(): any[];
					public clear(): void;
					public stream(): java.util.stream.Stream<any>;
					public hashCode(): number;
					public contains(param0: any): boolean;
					public removeIf(param0: any /* any*/): boolean;
				}
				export class ValueCollection extends java.util.AbstractCollection<any> {
					public static class: java.lang.Class<org.mozilla.javascript.NativeObject.ValueCollection>;
					public addAll(param0: java.util.Collection<any>): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public isEmpty(): boolean;
					public add(param0: any): boolean;
					public parallelStream(): java.util.stream.Stream<any>;
					public spliterator(): java.util.Spliterator<any>;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public size(): number;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public equals(param0: any): boolean;
					public iterator(): java.util.Iterator<any>;
					public toArray(param0: any[]): any[];
					public toArray(): any[];
					public clear(): void;
					public stream(): java.util.stream.Stream<any>;
					public hashCode(): number;
					public contains(param0: any): boolean;
					public removeIf(param0: any /* any*/): boolean;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeScript extends org.mozilla.javascript.BaseFunction {
				public static class: java.lang.Class<org.mozilla.javascript.NativeScript>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public getArity(): number;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public findPrototypeId(param0: string): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getLength(): number;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeString extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeString>;
				public getMaxInstanceId(): number;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public delete(param0: string): void;
				public initPrototypeId(param0: number): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public fillConstructorProperties(param0: org.mozilla.javascript.IdFunctionObject): void;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(param0: string): number;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getInstanceIdName(param0: number): string;
				public findInstanceIdInfo(param0: org.mozilla.javascript.Symbol): number;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public getIds(param0: boolean, param1: boolean): any[];
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getInstanceIdValue(param0: number): any;
				public toString(): string;
				public toCharSequence(): string;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public findInstanceIdInfo(param0: string): number;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeStringIterator extends org.mozilla.javascript.ES6Iterator {
				public static class: java.lang.Class<org.mozilla.javascript.NativeStringIterator>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isDone(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): boolean;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public getTag(): string;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public nextValue(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeSymbol extends org.mozilla.javascript.IdScriptableObject implements org.mozilla.javascript.Symbol {
				public static class: java.lang.Class<org.mozilla.javascript.NativeSymbol>;
				public static CLASS_NAME: string;
				public static TYPE_NAME: string;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
				public initPrototypeId(param0: number): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public fillConstructorProperties(param0: org.mozilla.javascript.IdFunctionObject): void;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public findPrototypeId(param0: string): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public isSymbol(): boolean;
				public getTypeOf(): string;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: org.mozilla.javascript.NativeSymbol);
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public delete(param0: number): void;
				public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
				public static construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.NativeSymbol;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeWith extends java.lang.Object implements org.mozilla.javascript.Scriptable, org.mozilla.javascript.IdFunctionCall, java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.NativeWith>;
				public prototype: org.mozilla.javascript.Scriptable;
				public parent: org.mozilla.javascript.Scriptable;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public updateDotQuery(param0: boolean): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public getClassName(): string;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public getIds(): any[];
				public delete(param0: number): void;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Node extends java.lang.Iterable<org.mozilla.javascript.Node> {
				public static class: java.lang.Class<org.mozilla.javascript.Node>;
				public static FUNCTION_PROP: number;
				public static LOCAL_PROP: number;
				public static LOCAL_BLOCK_PROP: number;
				public static REGEXP_PROP: number;
				public static CASEARRAY_PROP: number;
				public static TARGETBLOCK_PROP: number;
				public static VARIABLE_PROP: number;
				public static ISNUMBER_PROP: number;
				public static DIRECTCALL_PROP: number;
				public static SPECIALCALL_PROP: number;
				public static SKIP_INDEXES_PROP: number;
				public static OBJECT_IDS_PROP: number;
				public static INCRDECR_PROP: number;
				public static CATCH_SCOPE_PROP: number;
				public static LABEL_ID_PROP: number;
				public static MEMBER_TYPE_PROP: number;
				public static NAME_PROP: number;
				public static CONTROL_BLOCK_PROP: number;
				public static PARENTHESIZED_PROP: number;
				public static GENERATOR_END_PROP: number;
				public static DESTRUCTURING_ARRAY_LENGTH: number;
				public static DESTRUCTURING_NAMES: number;
				public static DESTRUCTURING_PARAMS: number;
				public static JSDOC_PROP: number;
				public static EXPRESSION_CLOSURE_PROP: number;
				public static DESTRUCTURING_SHORTHAND: number;
				public static ARROW_FUNCTION_PROP: number;
				public static LAST_PROP: number;
				public static BOTH: number;
				public static LEFT: number;
				public static RIGHT: number;
				public static NON_SPECIALCALL: number;
				public static SPECIALCALL_EVAL: number;
				public static SPECIALCALL_WITH: number;
				public static DECR_FLAG: number;
				public static POST_FLAG: number;
				public static PROPERTY_FLAG: number;
				public static ATTRIBUTE_FLAG: number;
				public static DESCENDANTS_FLAG: number;
				public static END_UNREACHED: number;
				public static END_DROPS_OFF: number;
				public static END_RETURNS: number;
				public static END_RETURNS_VALUE: number;
				public static END_YIELDS: number;
				public type: number;
				public next: org.mozilla.javascript.Node;
				public first: org.mozilla.javascript.Node;
				public last: org.mozilla.javascript.Node;
				public lineno: number;
				public propListHead: org.mozilla.javascript.Node.PropListItem;
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
				public static newString(param0: string): org.mozilla.javascript.Node;
				public getType(): number;
				public setType(param0: number): org.mozilla.javascript.Node;
				public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
				public getIntProp(param0: number, param1: number): number;
				public addChildToFront(param0: org.mozilla.javascript.Node): void;
				public removeProp(param0: number): void;
				public getFirstChild(): org.mozilla.javascript.Node;
				public getChildBefore(param0: org.mozilla.javascript.Node): org.mozilla.javascript.Node;
				public hasConsistentReturnUsage(): boolean;
				public labelId(): number;
				public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
				public putProp(param0: number, param1: any): void;
				public getString(): string;
				public spliterator(): java.util.Spliterator<any>;
				public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
				public getNext(): org.mozilla.javascript.Node;
				public setString(param0: string): void;
				public getScope(): org.mozilla.javascript.ast.Scope;
				public hasChildren(): boolean;
				public static newString(param0: number, param1: string): org.mozilla.javascript.Node;
				public removeChild(param0: org.mozilla.javascript.Node): void;
				public iterator(): java.util.Iterator<any>;
				public toString(): string;
				public getExistingIntProp(param0: number): number;
				public replaceChildAfter(param0: org.mozilla.javascript.Node, param1: org.mozilla.javascript.Node): void;
				public static newNumber(param0: number): org.mozilla.javascript.Node;
				public static newTarget(): org.mozilla.javascript.Node;
				public getJsDoc(): string;
				public addChildAfter(param0: org.mozilla.javascript.Node, param1: org.mozilla.javascript.Node): void;
				public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
				public getJsDocNode(): org.mozilla.javascript.ast.Comment;
				public setJsDocNode(param0: org.mozilla.javascript.ast.Comment): void;
				public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				public labelId(param0: number): void;
				public setScope(param0: org.mozilla.javascript.ast.Scope): void;
				public constructor(param0: number, param1: org.mozilla.javascript.Node);
				public addChildToBack(param0: org.mozilla.javascript.Node): void;
				public removeChildren(): void;
				public putIntProp(param0: number, param1: number): void;
				public getLastSibling(): org.mozilla.javascript.Node;
				public resetTargets(): void;
				public addChildrenToBack(param0: org.mozilla.javascript.Node): void;
				public getProp(param0: number): any;
				public toStringTree(param0: org.mozilla.javascript.ast.ScriptNode): string;
				public getLineno(): number;
				public addChildBefore(param0: org.mozilla.javascript.Node, param1: org.mozilla.javascript.Node): void;
				public getDouble(): number;
				public setLineno(param0: number): void;
				public hasSideEffects(): boolean;
				public addChildrenToFront(param0: org.mozilla.javascript.Node): void;
				public setDouble(param0: number): void;
				public replaceChild(param0: org.mozilla.javascript.Node, param1: org.mozilla.javascript.Node): void;
				public forEach(param0: any /* any*/): void;
				public getLastChild(): org.mozilla.javascript.Node;
				public constructor(param0: number);
			}
			export module Node {
				export class NodeIterator extends java.util.Iterator<org.mozilla.javascript.Node> {
					public static class: java.lang.Class<org.mozilla.javascript.Node.NodeIterator>;
					public constructor(param0: org.mozilla.javascript.Node);
					public next(): org.mozilla.javascript.Node;
					public hasNext(): boolean;
					public remove(): void;
				}
				export class PropListItem extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.Node.PropListItem>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NodeTransformer extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.NodeTransformer>;
				public transform(param0: org.mozilla.javascript.ast.ScriptNode): void;
				public transform(param0: org.mozilla.javascript.ast.ScriptNode, param1: boolean): void;
				public visitCall(param0: org.mozilla.javascript.Node, param1: org.mozilla.javascript.ast.ScriptNode): void;
				public visitNew(param0: org.mozilla.javascript.Node, param1: org.mozilla.javascript.ast.ScriptNode): void;
				public visitLet(param0: boolean, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node): org.mozilla.javascript.Node;
				public constructor();
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ObjArray extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.ObjArray>;
				public indexOf(param0: any): number;
				public peek(): any;
				public seal(): void;
				public setSize(param0: number): void;
				public remove(param0: number): void;
				public toArray(param0: any[], param1: number): void;
				public get(param0: number): any;
				public set(param0: number, param1: any): void;
				public add(param0: number, param1: any): void;
				public toArray(param0: any[]): void;
				public constructor();
				public size(): number;
				public toArray(): any[];
				public push(param0: any): void;
				public pop(): any;
				public clear(): void;
				public isSealed(): boolean;
				public add(param0: any): void;
				public isEmpty(): boolean;
				public lastIndexOf(param0: any): number;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ObjToIntMap extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.ObjToIntMap>;
				public getKeys(): any[];
				public has(param0: any): boolean;
				public newIterator(): org.mozilla.javascript.ObjToIntMap.Iterator;
				public get(param0: any, param1: number): number;
				public constructor();
				public size(): number;
				public remove(param0: any): void;
				public getExisting(param0: any): number;
				public put(param0: any, param1: number): void;
				public clear(): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
				public getKeys(param0: any[], param1: number): void;
				public intern(param0: any): any;
			}
			export module ObjToIntMap {
				export class Iterator extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.ObjToIntMap.Iterator>;
					public getValue(): number;
					public setValue(param0: number): void;
					public getKey(): any;
					public start(): void;
					public done(): boolean;
					public next(): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Parser extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.Parser>;
				public static ARGC_LIMIT: number;
				public nestingOfFunction: number;
				public constructor(param0: org.mozilla.javascript.CompilerEnvirons, param1: org.mozilla.javascript.ErrorReporter);
				public eof(): boolean;
				public parse(param0: java.io.Reader, param1: string, param2: number): org.mozilla.javascript.ast.AstRoot;
				public parse(param0: string, param1: string, param2: number): org.mozilla.javascript.ast.AstRoot;
				public setRequiresActivation(): void;
				public createName(param0: string): org.mozilla.javascript.Node;
				public createName(param0: number, param1: string, param2: org.mozilla.javascript.Node): org.mozilla.javascript.Node;
				public constructor();
				public inUseStrictDirective(): boolean;
				public constructor(param0: org.mozilla.javascript.CompilerEnvirons);
				public simpleAssignment(param0: org.mozilla.javascript.Node, param1: org.mozilla.javascript.Node): org.mozilla.javascript.Node;
				public createNumber(param0: number): org.mozilla.javascript.Node;
				public setDefaultUseStrictDirective(param0: boolean): void;
				public checkActivationName(param0: string, param1: number): void;
				public setIsGenerator(): void;
				public checkMutableReference(param0: org.mozilla.javascript.Node): void;
				public removeParens(param0: org.mozilla.javascript.ast.AstNode): org.mozilla.javascript.ast.AstNode;
				public createScopeNode(param0: number, param1: number): org.mozilla.javascript.ast.Scope;
			}
			export module Parser {
				export class ConditionData extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.Parser.ConditionData>;
				}
				export class ParserException extends java.lang.RuntimeException {
					public static class: java.lang.Class<org.mozilla.javascript.Parser.ParserException>;
				}
				export class PerFunctionVariables extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.Parser.PerFunctionVariables>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class PolicySecurityController extends org.mozilla.javascript.SecurityController {
				public static class: java.lang.Class<org.mozilla.javascript.PolicySecurityController>;
				public callWithDomain(param0: any, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Callable, param3: org.mozilla.javascript.Scriptable, param4: org.mozilla.javascript.Scriptable, param5: any[]): any;
				public createClassLoader(param0: java.lang.ClassLoader, param1: any): org.mozilla.javascript.GeneratedClassLoader;
				public getStaticSecurityDomainClassInternal(): java.lang.Class<any>;
				public constructor();
				public getDynamicSecurityDomain(param0: any): any;
			}
			export module PolicySecurityController {
				export class Loader extends java.security.SecureClassLoader implements org.mozilla.javascript.GeneratedClassLoader {
					public static class: java.lang.Class<org.mozilla.javascript.PolicySecurityController.Loader>;
					public defineClass(param0: string, param1: number[], param2: number, param3: number): java.lang.Class<any>;
					public defineClass(param0: string, param1: number[]): java.lang.Class<any>;
					public linkClass(param0: java.lang.Class<any>): void;
					/** @deprecated */
					public defineClass(param0: number[], param1: number, param2: number): java.lang.Class<any>;
					public defineClass(param0: string, param1: java.nio.ByteBuffer, param2: java.security.CodeSource): java.lang.Class<any>;
					public defineClass(param0: string, param1: number[], param2: number, param3: number, param4: java.security.ProtectionDomain): java.lang.Class<any>;
					public defineClass(param0: string, param1: number[], param2: number, param3: number, param4: java.security.CodeSource): java.lang.Class<any>;
					public defineClass(param0: string, param1: java.nio.ByteBuffer, param2: java.security.ProtectionDomain): java.lang.Class<any>;
				}
				export abstract class SecureCaller extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.PolicySecurityController.SecureCaller>;
					public constructor();
					public call(param0: org.mozilla.javascript.Callable, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export abstract class Ref extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.Ref>;
				public get(param0: org.mozilla.javascript.Context): any;
				/** @deprecated */
				public set(param0: org.mozilla.javascript.Context, param1: any): any;
				public delete(param0: org.mozilla.javascript.Context): boolean;
				public set(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any): any;
				public has(param0: org.mozilla.javascript.Context): boolean;
				public constructor();
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class RefCallable extends java.lang.Object implements org.mozilla.javascript.Callable {
				public static class: java.lang.Class<org.mozilla.javascript.RefCallable>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.RefCallable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					refCall(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Ref;
					call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				});
				public constructor();
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public refCall(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Ref;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class RegExpProxy extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.RegExpProxy>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.RegExpProxy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isRegExp(param0: org.mozilla.javascript.Scriptable): boolean;
					compileRegExp(param0: org.mozilla.javascript.Context, param1: string, param2: string): any;
					wrapRegExp(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any): org.mozilla.javascript.Scriptable;
					action(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[], param4: number): any;
					find_split(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string, param3: string, param4: org.mozilla.javascript.Scriptable, param5: number[], param6: number[], param7: boolean[], param8: Array<string[]>): number;
					js_split(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string, param3: any[]): any;
				});
				public constructor();
				public static RA_MATCH: number;
				public static RA_REPLACE: number;
				public static RA_SEARCH: number;
				public compileRegExp(param0: org.mozilla.javascript.Context, param1: string, param2: string): any;
				public wrapRegExp(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any): org.mozilla.javascript.Scriptable;
				public action(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[], param4: number): any;
				public isRegExp(param0: org.mozilla.javascript.Scriptable): boolean;
				public js_split(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string, param3: any[]): any;
				public find_split(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string, param3: string, param4: org.mozilla.javascript.Scriptable, param5: number[], param6: number[], param7: boolean[], param8: Array<string[]>): number;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ResolvedOverload extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.ResolvedOverload>;
				public hashCode(): number;
				public equals(param0: any): boolean;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export abstract class RhinoException extends java.lang.RuntimeException {
				public static class: java.lang.Class<org.mozilla.javascript.RhinoException>;
				public initLineSource(param0: string): void;
				public getScriptStack(param0: number, param1: string): Array<org.mozilla.javascript.ScriptStackElement>;
				public columnNumber(): number;
				public lineNumber(): number;
				public static setStackStyle(param0: org.mozilla.javascript.StackStyle): void;
				public initLineNumber(param0: number): void;
				public getScriptStackTrace(param0: number, param1: string): string;
				public initColumnNumber(param0: number): void;
				public details(): string;
				public initSourceName(param0: string): void;
				/** @deprecated */
				public getScriptStackTrace(param0: java.io.FilenameFilter): string;
				public sourceName(): string;
				public getScriptStackTrace(): string;
				public printStackTrace(param0: java.io.PrintWriter): void;
				public static useMozillaStackStyle(param0: boolean): void;
				public static usesMozillaStackStyle(): boolean;
				public lineSource(): string;
				public getMessage(): string;
				public printStackTrace(param0: java.io.PrintStream): void;
				public getScriptStack(): Array<org.mozilla.javascript.ScriptStackElement>;
				public static getStackStyle(): org.mozilla.javascript.StackStyle;
				public printStackTrace(): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class RhinoSecurityManager extends java.lang.SecurityManager {
				public static class: java.lang.Class<org.mozilla.javascript.RhinoSecurityManager>;
				public getCurrentScriptClass(): java.lang.Class<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Script extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.Script>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.Script interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					exec(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): any;
				});
				public constructor();
				public exec(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ScriptRuntime extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.ScriptRuntime>;
				public static BooleanClass: java.lang.Class<any>;
				public static ByteClass: java.lang.Class<any>;
				public static CharacterClass: java.lang.Class<any>;
				public static ClassClass: java.lang.Class<any>;
				public static DoubleClass: java.lang.Class<any>;
				public static FloatClass: java.lang.Class<any>;
				public static IntegerClass: java.lang.Class<any>;
				public static LongClass: java.lang.Class<any>;
				public static NumberClass: java.lang.Class<any>;
				public static ObjectClass: java.lang.Class<any>;
				public static ShortClass: java.lang.Class<any>;
				public static StringClass: java.lang.Class<any>;
				public static DateClass: java.lang.Class<any>;
				public static ContextClass: java.lang.Class<any>;
				public static ContextFactoryClass: java.lang.Class<any>;
				public static FunctionClass: java.lang.Class<any>;
				public static ScriptableObjectClass: java.lang.Class<any>;
				public static ScriptableClass: java.lang.Class<org.mozilla.javascript.Scriptable>;
				public static ROOT_LOCALE: java.util.Locale;
				public static NaN: number;
				public static negativeZero: number;
				public static NaNobj: java.lang.Double;
				public static ENUMERATE_KEYS: number;
				public static ENUMERATE_VALUES: number;
				public static ENUMERATE_ARRAY: number;
				public static ENUMERATE_KEYS_NO_ITERATOR: number;
				public static ENUMERATE_VALUES_NO_ITERATOR: number;
				public static ENUMERATE_ARRAY_NO_ITERATOR: number;
				public static ENUMERATE_VALUES_IN_ORDER: number;
				public static messageProvider: org.mozilla.javascript.ScriptRuntime.MessageProvider;
				public static emptyArgs: any[];
				public static emptyStrings: string[];
				public static initScript(param0: org.mozilla.javascript.NativeFunction, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable, param4: boolean): void;
				public static exitActivationFunction(param0: org.mozilla.javascript.Context): void;
				public static toInt32(param0: number): number;
				public static newBuiltinObject(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.TopLevel.Builtins, param3: any[]): org.mozilla.javascript.Scriptable;
				public static getObjectPropNoWarn(param0: any, param1: string, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable): any;
				public static enumInit(param0: any, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: number): any;
				public static wrapBoolean(param0: boolean): java.lang.Boolean;
				public static typeof(param0: any): string;
				public static getMessage3(param0: string, param1: any, param2: any, param3: any): string;
				public static nameRef(param0: any, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: number): org.mozilla.javascript.Ref;
				public static checkRegExpProxy(param0: org.mozilla.javascript.Context): org.mozilla.javascript.RegExpProxy;
				public static constructError(param0: string, param1: string, param2: string, param3: number, param4: string, param5: number): org.mozilla.javascript.EcmaError;
				public static typeError3(param0: string, param1: string, param2: string, param3: string): org.mozilla.javascript.EcmaError;
				public static add(param0: string, param1: any): string;
				public static constructError(param0: string, param1: string): org.mozilla.javascript.EcmaError;
				public static setFunctionProtoAndParent(param0: org.mozilla.javascript.BaseFunction, param1: org.mozilla.javascript.Scriptable): void;
				public static memberRef(param0: any, param1: any, param2: any, param3: org.mozilla.javascript.Context, param4: number): org.mozilla.javascript.Ref;
				public static toString(param0: any): string;
				public static enterActivationFunction(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): void;
				public static add(param0: any, param1: any, param2: org.mozilla.javascript.Context): any;
				public static enumId(param0: any, param1: org.mozilla.javascript.Context): any;
				public static undefCallError(param0: any, param1: any): java.lang.RuntimeException;
				public static getMessage2(param0: string, param1: any, param2: any): string;
				/** @deprecated */
				public static setObjectIndex(param0: any, param1: number, param2: any, param3: org.mozilla.javascript.Context): any;
				public static notFunctionError(param0: any, param1: any, param2: string): java.lang.RuntimeException;
				public static enterDotQuery(param0: any, param1: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static setEnumNumbers(param0: any, param1: boolean): void;
				public static isRhinoRuntimeType(param0: java.lang.Class<any>): boolean;
				public static throwError(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string): org.mozilla.javascript.JavaScriptException;
				public static padArguments(param0: any[], param1: number): any[];
				public static lastUint32Result(param0: org.mozilla.javascript.Context): number;
				public static testUint32String(param0: string): number;
				public static getNameFunctionAndThis(param0: string, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Callable;
				public static instanceOf(param0: any, param1: any, param2: org.mozilla.javascript.Context): boolean;
				public static getGlobal(param0: org.mozilla.javascript.Context): org.mozilla.javascript.ScriptableObject;
				public static setObjectProp(param0: org.mozilla.javascript.Scriptable, param1: string, param2: any, param3: org.mozilla.javascript.Context): any;
				public static typeError(param0: string): org.mozilla.javascript.EcmaError;
				public static isArrayObject(param0: any): boolean;
				public static doTopCall(param0: org.mozilla.javascript.Callable, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[], param5: boolean): any;
				/** @deprecated */
				public static getObjectElem(param0: any, param1: any, param2: org.mozilla.javascript.Context): any;
				public static hasTopCall(param0: org.mozilla.javascript.Context): boolean;
				public static jsDelegatesTo(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable): boolean;
				public static getMessage1(param0: string, param1: any): string;
				public static toObject(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any): org.mozilla.javascript.Scriptable;
				public static memberRef(param0: any, param1: any, param2: org.mozilla.javascript.Context, param3: number): org.mozilla.javascript.Ref;
				public static setBuiltinProtoAndParent(param0: org.mozilla.javascript.ScriptableObject, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.TopLevel.Builtins): void;
				public static isNaN(param0: any): boolean;
				public static toNumber(param0: any): number;
				public static throwCustomError(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string, param3: string): org.mozilla.javascript.JavaScriptException;
				public static nameIncrDecr(param0: org.mozilla.javascript.Scriptable, param1: string, param2: org.mozilla.javascript.Context, param3: number): any;
				/** @deprecated */
				public static getObjectPropNoWarn(param0: any, param1: string, param2: org.mozilla.javascript.Context): any;
				public static setObjectElem(param0: org.mozilla.javascript.Scriptable, param1: any, param2: any, param3: org.mozilla.javascript.Context): any;
				public static toNumber(param0: any[], param1: number): number;
				/** @deprecated */
				public static delete(param0: any, param1: any, param2: org.mozilla.javascript.Context): any;
				public static in(param0: any, param1: any, param2: org.mozilla.javascript.Context): boolean;
				public static isJSWhitespaceOrLineTerminator(param0: number): boolean;
				/** @deprecated */
				public static doTopCall(param0: org.mozilla.javascript.Callable, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public static nameRef(param0: any, param1: any, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable, param4: number): org.mozilla.javascript.Ref;
				public static delete(param0: any, param1: any, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable, param4: boolean): any;
				public static newObject(param0: any, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: any[]): org.mozilla.javascript.Scriptable;
				public static searchDefaultNamespace(param0: org.mozilla.javascript.Context): any;
				public static newObject(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string, param3: any[]): org.mozilla.javascript.Scriptable;
				public static name(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string): any;
				/** @deprecated */
				public static getPropFunctionAndThis(param0: any, param1: string, param2: org.mozilla.javascript.Context): org.mozilla.javascript.Callable;
				public static toIterator(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: boolean): org.mozilla.javascript.Scriptable;
				public static getMessage4(param0: string, param1: any, param2: any, param3: any, param4: any): string;
				public static initStandardObjects(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.ScriptableObject, param2: boolean): org.mozilla.javascript.ScriptableObject;
				public static indexFromString(param0: string): number;
				public static getTopLevelProp(param0: org.mozilla.javascript.Scriptable, param1: string): any;
				public static toString(param0: number): string;
				public static toString(param0: any[], param1: number): string;
				public static setObjectProtoAndParent(param0: org.mozilla.javascript.ScriptableObject, param1: org.mozilla.javascript.Scriptable): void;
				public static initSafeStandardObjects(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.ScriptableObject, param2: boolean): org.mozilla.javascript.ScriptableObject;
				/** @deprecated */
				public static delete(param0: any, param1: any, param2: org.mozilla.javascript.Context, param3: boolean): any;
				public static typeErrorThrower(param0: org.mozilla.javascript.Context): org.mozilla.javascript.BaseFunction;
				public static getValueFunctionAndThis(param0: any, param1: org.mozilla.javascript.Context): org.mozilla.javascript.Callable;
				public static typeError0(param0: string): org.mozilla.javascript.EcmaError;
				public static enumNext(param0: any): java.lang.Boolean;
				/** @deprecated */
				public static propIncrDecr(param0: any, param1: string, param2: org.mozilla.javascript.Context, param3: number): any;
				/** @deprecated */
				public static specialRef(param0: any, param1: string, param2: org.mozilla.javascript.Context): org.mozilla.javascript.Ref;
				public static wrapRegExp(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any): org.mozilla.javascript.Scriptable;
				public static add(param0: any, param1: string): string;
				public static refSet(param0: org.mozilla.javascript.Ref, param1: any, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable): any;
				public static applyOrCall(param0: boolean, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				/** @deprecated */
				public static elemIncrDecr(param0: any, param1: any, param2: org.mozilla.javascript.Context, param3: number): any;
				/** @deprecated */
				public static setObjectElem(param0: any, param1: any, param2: any, param3: org.mozilla.javascript.Context): any;
				public static getObjectProp(param0: any, param1: string, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable): any;
				public static leaveDotQuery(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static getArrayElements(param0: org.mozilla.javascript.Scriptable): any[];
				public static leaveWith(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static getObjectElem(param0: any, param1: any, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable): any;
				public static getRegExpProxy(param0: org.mozilla.javascript.Context): org.mozilla.javascript.RegExpProxy;
				public static getLibraryScopeOrNull(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.ScriptableObject;
				public static getObjectElem(param0: org.mozilla.javascript.Scriptable, param1: any, param2: org.mozilla.javascript.Context): any;
				public static toUint32(param0: any): number;
				public static specialRef(param0: any, param1: string, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Ref;
				public static wrapNumber(param0: number): java.lang.Number;
				public static toNumber(param0: string): number;
				public static toInt32(param0: any): number;
				public static cmp_LE(param0: any, param1: any): boolean;
				public static createArrowFunctionActivation(param0: org.mozilla.javascript.NativeFunction, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: boolean): org.mozilla.javascript.Scriptable;
				public static numberToString(param0: number, param1: number): string;
				public static enterWith(param0: any, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static toObject(param0: org.mozilla.javascript.Scriptable, param1: any): org.mozilla.javascript.Scriptable;
				public static toPrimitive(param0: any): any;
				public static wrapException(param0: java.lang.Throwable, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Context): org.mozilla.javascript.Scriptable;
				/** @deprecated */
				public static newObjectLiteral(param0: any[], param1: any[], param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				/** @deprecated */
				public static getElemFunctionAndThis(param0: any, param1: any, param2: org.mozilla.javascript.Context): org.mozilla.javascript.Callable;
				public static initFunction(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.NativeFunction, param3: number, param4: boolean): void;
				/** @deprecated */
				public static enumInit(param0: any, param1: org.mozilla.javascript.Context, param2: boolean): any;
				public static evalSpecial(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any, param3: any[], param4: string, param5: number): any;
				public static escapeAttributeValue(param0: any, param1: org.mozilla.javascript.Context): string;
				/** @deprecated */
				public static toObjectOrNull(param0: org.mozilla.javascript.Context, param1: any): org.mozilla.javascript.Scriptable;
				public static setName(param0: org.mozilla.javascript.Scriptable, param1: any, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable, param4: string): any;
				public static getPropFunctionAndThis(param0: any, param1: string, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Callable;
				public static deleteObjectElem(param0: org.mozilla.javascript.Scriptable, param1: any, param2: org.mozilla.javascript.Context): boolean;
				public static enumValue(param0: any, param1: org.mozilla.javascript.Context): any;
				/** @deprecated */
				public static refIncrDecr(param0: org.mozilla.javascript.Ref, param1: org.mozilla.javascript.Context, param2: number): any;
				public static eq(param0: any, param1: any): boolean;
				/** @deprecated */
				public static createFunctionActivation(param0: org.mozilla.javascript.NativeFunction, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public static getMessage0(param0: string): string;
				public static wrapInt(param0: number): java.lang.Integer;
				/** @deprecated */
				public static typeErrorThrower(): org.mozilla.javascript.BaseFunction;
				public static setObjectProp(param0: any, param1: string, param2: any, param3: org.mozilla.javascript.Context, param4: org.mozilla.javascript.Scriptable): any;
				public static newObjectLiteral(param0: any[], param1: any[], param2: number[], param3: org.mozilla.javascript.Context, param4: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static undefWriteError(param0: any, param1: any, param2: any): java.lang.RuntimeException;
				public static shallowEq(param0: any, param1: any): boolean;
				public static toUint16(param0: any): string;
				public static setDefaultNamespace(param0: any, param1: org.mozilla.javascript.Context): any;
				public static elemIncrDecr(param0: any, param1: any, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable, param4: number): any;
				public static typeofName(param0: org.mozilla.javascript.Scriptable, param1: string): string;
				public static escapeString(param0: string, param1: string): string;
				public static addInstructionCount(param0: org.mozilla.javascript.Context, param1: number): void;
				public static toObjectOrNull(param0: org.mozilla.javascript.Context, param1: any, param2: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static toCharSequence(param0: any): string;
				public static escapeString(param0: string): string;
				public static isPrimitive(param0: any): boolean;
				public static undefReadError(param0: any, param1: any): java.lang.RuntimeException;
				public static newSpecial(param0: org.mozilla.javascript.Context, param1: any, param2: any[], param3: org.mozilla.javascript.Scriptable, param4: number): any;
				public static toInteger(param0: any): number;
				public static newArrayLiteral(param0: any[], param1: number[], param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static typeError2(param0: string, param1: any, param2: any): org.mozilla.javascript.EcmaError;
				public static getObjectIndex(param0: org.mozilla.javascript.Scriptable, param1: number, param2: org.mozilla.javascript.Context): any;
				public static toInt32(param0: any[], param1: number): number;
				public static createFunctionActivation(param0: org.mozilla.javascript.NativeFunction, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: boolean): org.mozilla.javascript.Scriptable;
				public static storeUint32Result(param0: org.mozilla.javascript.Context, param1: number): void;
				/** @deprecated */
				public static toObject(param0: org.mozilla.javascript.Scriptable, param1: any, param2: java.lang.Class<any>): org.mozilla.javascript.Scriptable;
				public static setRegExpProxy(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.RegExpProxy): void;
				public static hasObjectElem(param0: org.mozilla.javascript.Scriptable, param1: any, param2: org.mozilla.javascript.Context): boolean;
				public static toPrimitive(param0: any, param1: java.lang.Class<any>): any;
				public constructor();
				public static same(param0: any, param1: any): boolean;
				/** @deprecated */
				public static getObjectProp(param0: any, param1: string, param2: org.mozilla.javascript.Context): any;
				public static bind(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string): org.mozilla.javascript.Scriptable;
				/** @deprecated */
				public static toObject(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any, param3: java.lang.Class<any>): org.mozilla.javascript.Scriptable;
				public static constructError(param0: string, param1: string, param2: number): org.mozilla.javascript.EcmaError;
				public static refGet(param0: org.mozilla.javascript.Ref, param1: org.mozilla.javascript.Context): any;
				public static refIncrDecr(param0: org.mozilla.javascript.Ref, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: number): any;
				public static isJSLineTerminator(param0: number): boolean;
				public static notFoundError(param0: org.mozilla.javascript.Scriptable, param1: string): java.lang.RuntimeException;
				public static getElemFunctionAndThis(param0: any, param1: any, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Callable;
				public toString(): string;
				public static toUint32(param0: number): number;
				public static updateDotQuery(param0: boolean, param1: org.mozilla.javascript.Scriptable): any;
				public static getObjectProp(param0: org.mozilla.javascript.Scriptable, param1: string, param2: org.mozilla.javascript.Context): any;
				public static setConst(param0: org.mozilla.javascript.Scriptable, param1: any, param2: org.mozilla.javascript.Context, param3: string): any;
				public static getTopCallScope(param0: org.mozilla.javascript.Context): org.mozilla.javascript.Scriptable;
				/** @deprecated */
				public static call(param0: org.mozilla.javascript.Context, param1: any, param2: any, param3: any[], param4: org.mozilla.javascript.Scriptable): any;
				public static toInteger(param0: any[], param1: number): number;
				public static strictSetName(param0: org.mozilla.javascript.Scriptable, param1: any, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable, param4: string): any;
				public static rangeError(param0: string): org.mozilla.javascript.EcmaError;
				public static propIncrDecr(param0: any, param1: string, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable, param4: number): any;
				public static refDel(param0: org.mozilla.javascript.Ref, param1: org.mozilla.javascript.Context): any;
				public static escapeTextValue(param0: any, param1: org.mozilla.javascript.Context): string;
				public static newCatchScope(param0: java.lang.Throwable, param1: org.mozilla.javascript.Scriptable, param2: string, param3: org.mozilla.javascript.Context, param4: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static setObjectIndex(param0: any, param1: number, param2: any, param3: org.mozilla.javascript.Context, param4: org.mozilla.javascript.Scriptable): any;
				public static lastStoredScriptable(param0: org.mozilla.javascript.Context): org.mozilla.javascript.Scriptable;
				public static callRef(param0: org.mozilla.javascript.Callable, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Context): org.mozilla.javascript.Ref;
				public static getObjectIndex(param0: any, param1: number, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable): any;
				public static notFunctionError(param0: any, param1: any): java.lang.RuntimeException;
				/** @deprecated */
				public static enumInit(param0: any, param1: org.mozilla.javascript.Context, param2: number): any;
				public static notFunctionError(param0: any): java.lang.RuntimeException;
				/** @deprecated */
				public static nameIncrDecr(param0: org.mozilla.javascript.Scriptable, param1: string, param2: number): any;
				public static typeError1(param0: string, param1: any): org.mozilla.javascript.EcmaError;
				public static setObjectElem(param0: any, param1: any, param2: any, param3: org.mozilla.javascript.Context, param4: org.mozilla.javascript.Scriptable): any;
				/** @deprecated */
				public static refSet(param0: org.mozilla.javascript.Ref, param1: any, param2: org.mozilla.javascript.Context): any;
				public static getMessage(param0: string, param1: any[]): string;
				/** @deprecated */
				public static setObjectProp(param0: any, param1: string, param2: any, param3: org.mozilla.javascript.Context): any;
				public static toInteger(param0: number): number;
				public static toBoolean(param0: any): boolean;
				/** @deprecated */
				public static getObjectIndex(param0: any, param1: number, param2: org.mozilla.javascript.Context): any;
				public static callSpecial(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Callable, param2: org.mozilla.javascript.Scriptable, param3: any[], param4: org.mozilla.javascript.Scriptable, param5: org.mozilla.javascript.Scriptable, param6: number, param7: string, param8: number): any;
				public static cmp_LT(param0: any, param1: any): boolean;
				public static setObjectIndex(param0: org.mozilla.javascript.Scriptable, param1: number, param2: any, param3: org.mozilla.javascript.Context): any;
			}
			export module ScriptRuntime {
				export class DefaultMessageProvider extends java.lang.Object implements org.mozilla.javascript.ScriptRuntime.MessageProvider {
					public static class: java.lang.Class<org.mozilla.javascript.ScriptRuntime.DefaultMessageProvider>;
					public getMessage(param0: string, param1: any[]): string;
				}
				export class IdEnumeration extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.mozilla.javascript.ScriptRuntime.IdEnumeration>;
				}
				export class MessageProvider extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.ScriptRuntime.MessageProvider>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.ScriptRuntime$MessageProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getMessage(param0: string, param1: any[]): string;
					});
					public constructor();
					public getMessage(param0: string, param1: any[]): string;
				}
				export class NoSuchMethodShim extends java.lang.Object implements org.mozilla.javascript.Callable {
					public static class: java.lang.Class<org.mozilla.javascript.ScriptRuntime.NoSuchMethodShim>;
					public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ScriptRuntimeES6 extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.ScriptRuntimeES6>;
				public static requireObjectCoercible(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.Scriptable;
				public constructor();
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ScriptStackElement extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.ScriptStackElement>;
				public fileName: string;
				public functionName: string;
				public lineNumber: number;
				public constructor(param0: string, param1: string, param2: number);
				public renderJavaStyle(param0: java.lang.StringBuilder): void;
				public renderMozillaStyle(param0: java.lang.StringBuilder): void;
				public renderV8Style(param0: java.lang.StringBuilder): void;
				public toString(): string;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Scriptable extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.Scriptable>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.Scriptable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getClassName(): string;
					get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					delete(param0: string): void;
					delete(param0: number): void;
					getPrototype(): org.mozilla.javascript.Scriptable;
					setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					getParentScope(): org.mozilla.javascript.Scriptable;
					setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					getIds(): any[];
					getDefaultValue(param0: java.lang.Class<any>): any;
					hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					<clinit>(): void;
				});
				public constructor();
				public static NOT_FOUND: any;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public getClassName(): string;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public delete(param0: string): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public getIds(): any[];
				public delete(param0: number): void;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export abstract class ScriptableObject extends java.lang.Object implements org.mozilla.javascript.Scriptable, org.mozilla.javascript.SymbolScriptable, java.io.Serializable, org.mozilla.javascript.debug.DebuggableObject, org.mozilla.javascript.ConstProperties {
				public static class: java.lang.Class<org.mozilla.javascript.ScriptableObject>;
				public static EMPTY: number;
				public static READONLY: number;
				public static DONTENUM: number;
				public static PERMANENT: number;
				public static UNINITIALIZED_CONST: number;
				public static CONST: number;
				public defineOwnProperties(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.ScriptableObject): void;
				public static getProperty(param0: org.mozilla.javascript.Scriptable, param1: string): any;
				public avoidObjectDetection(): boolean;
				public static isFalse(param0: any): boolean;
				public getSlot(param0: org.mozilla.javascript.Context, param1: any, param2: number): org.mozilla.javascript.ScriptableObject.Slot;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public static hasProperty(param0: org.mozilla.javascript.Scriptable, param1: string): boolean;
				public isGetterOrSetter(param0: string, param1: number, param2: boolean): boolean;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static defineClass(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>, param2: boolean): void;
				public isEmpty(): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getAttributes(param0: org.mozilla.javascript.Symbol): number;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isGenericDescriptor(param0: org.mozilla.javascript.ScriptableObject): boolean;
				public getExternalArrayLength(): any;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public size(): number;
				public preventExtensions(): void;
				public static putProperty(param0: org.mozilla.javascript.Scriptable, param1: number, param2: any): void;
				public static putConstProperty(param0: org.mozilla.javascript.Scriptable, param1: string, param2: any): void;
				public static getClassPrototype(param0: org.mozilla.javascript.Scriptable, param1: string): org.mozilla.javascript.Scriptable;
				public getIds(): any[];
				public static ensureSymbolScriptable(param0: any): org.mozilla.javascript.SymbolScriptable;
				public setAttributes(param0: string, param1: number): void;
				public sameValue(param0: any, param1: any): boolean;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public static getTypedProperty(param0: org.mozilla.javascript.Scriptable, param1: number, param2: java.lang.Class<any>): any;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				/** @deprecated */
				public getAttributes(param0: string, param1: org.mozilla.javascript.Scriptable): number;
				public static callMethod(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string, param3: any[]): any;
				public checkPropertyDefinition(param0: org.mozilla.javascript.ScriptableObject): void;
				public checkPropertyChange(param0: any, param1: org.mozilla.javascript.ScriptableObject, param2: org.mozilla.javascript.ScriptableObject): void;
				public static getTopLevelScope(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static hasProperty(param0: org.mozilla.javascript.Scriptable, param1: number): boolean;
				public static getProperty(param0: org.mozilla.javascript.Scriptable, param1: number): any;
				public setGetterOrSetter(param0: string, param1: number, param2: org.mozilla.javascript.Callable, param3: boolean): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static defineClass(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>, param2: boolean, param3: boolean): string;
				public equivalentValues(param0: any): any;
				public isSealed(): boolean;
				public getOwnPropertyDescriptor(param0: org.mozilla.javascript.Context, param1: any): org.mozilla.javascript.ScriptableObject;
				public isAccessorDescriptor(param0: org.mozilla.javascript.ScriptableObject): boolean;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public static ensureScriptableObject(param0: any): org.mozilla.javascript.ScriptableObject;
				public defineOwnProperty(param0: org.mozilla.javascript.Context, param1: any, param2: org.mozilla.javascript.ScriptableObject): void;
				public static redefineProperty(param0: org.mozilla.javascript.Scriptable, param1: string, param2: boolean): void;
				public setAttributes(param0: org.mozilla.javascript.Symbol, param1: number): void;
				public static defineConstProperty(param0: org.mozilla.javascript.Scriptable, param1: string): void;
				public sealObject(): void;
				public static putProperty(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Symbol, param2: any): void;
				public static defineProperty(param0: org.mozilla.javascript.Scriptable, param1: string, param2: any, param3: number): void;
				public defineFunctionProperties(param0: string[], param1: java.lang.Class<any>, param2: number): void;
				/** @deprecated */
				public getAttributes(param0: number, param1: org.mozilla.javascript.Scriptable): number;
				public static deleteProperty(param0: org.mozilla.javascript.Scriptable, param1: string): boolean;
				public delete(param0: number): void;
				public static ensureScriptable(param0: any): org.mozilla.javascript.Scriptable;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public isExtensible(): boolean;
				public static hasProperty(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Symbol): boolean;
				public static deleteProperty(param0: org.mozilla.javascript.Scriptable, param1: number): boolean;
				public static callMethod(param0: org.mozilla.javascript.Scriptable, param1: string, param2: any[]): any;
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static getTypedProperty(param0: org.mozilla.javascript.Scriptable, param1: string, param2: java.lang.Class<any>): any;
				/** @deprecated */
				public setAttributes(param0: number, param1: org.mozilla.javascript.Scriptable, param2: number): void;
				public associateValue(param0: any, param1: any): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getAttributes(param0: string): number;
				public isDataDescriptor(param0: org.mozilla.javascript.ScriptableObject): boolean;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public defineProperty(param0: string, param1: any, param2: number): void;
				/** @deprecated */
				public setAttributes(param0: string, param1: org.mozilla.javascript.Scriptable, param2: number): void;
				public static putProperty(param0: org.mozilla.javascript.Scriptable, param1: string, param2: any): void;
				public setExternalArrayData(param0: org.mozilla.javascript.ExternalArrayData): void;
				public static buildDataDescriptor(param0: org.mozilla.javascript.Scriptable, param1: any, param2: number): org.mozilla.javascript.ScriptableObject;
				public defineProperty(param0: org.mozilla.javascript.Symbol, param1: any, param2: number): void;
				public defineOwnProperty(param0: org.mozilla.javascript.Context, param1: any, param2: org.mozilla.javascript.ScriptableObject, param3: boolean): void;
				public getAssociatedValue(param0: any): any;
				public static getTopScopeValue(param0: org.mozilla.javascript.Scriptable, param1: any): any;
				public static getProperty(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Symbol): any;
				public getGetterOrSetter(param0: string, param1: number, param2: boolean): any;
				public get(param0: any): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public static getObjectPrototype(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static isTrue(param0: any): boolean;
				public getTypeOf(): string;
				public getAllIds(): any[];
				public static getPropertyIds(param0: org.mozilla.javascript.Scriptable): any[];
				public static getArrayPrototype(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static defineClass(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): void;
				public getAttributes(param0: number): number;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public setAttributes(param0: number, param1: number): void;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public applyDescriptorToAttributeBitset(param0: number, param1: org.mozilla.javascript.ScriptableObject): number;
				public defineProperty(param0: string, param1: java.lang.Class<any>, param2: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineProperty(param0: string, param1: any, param2: java.lang.reflect.Method, param3: java.lang.reflect.Method, param4: number): void;
				public getExternalArrayData(): org.mozilla.javascript.ExternalArrayData;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public static getFunctionPrototype(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
			}
			export module ScriptableObject {
				export class GetterSlot extends org.mozilla.javascript.ScriptableObject.Slot {
					public static class: java.lang.Class<org.mozilla.javascript.ScriptableObject.GetterSlot>;
				}
				export class KeyComparator extends java.util.Comparator<any> {
					public static class: java.lang.Class<org.mozilla.javascript.ScriptableObject.KeyComparator>;
					public compare(param0: any, param1: any): number;
					public static comparing(param0: any /* any*/): java.util.Comparator<any>;
					public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
					public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
					public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
					public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
					public equals(param0: any): boolean;
					public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
					public constructor();
					public reversed(): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
					public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
				}
				export class RelinkedSlot extends org.mozilla.javascript.ScriptableObject.Slot {
					public static class: java.lang.Class<org.mozilla.javascript.ScriptableObject.RelinkedSlot>;
				}
				export class Slot extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.mozilla.javascript.ScriptableObject.Slot>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export abstract class SecureCaller extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.SecureCaller>;
				public call(param0: org.mozilla.javascript.Callable, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public constructor();
			}
			export module SecureCaller {
				export class SecureClassLoaderImpl extends java.security.SecureClassLoader {
					public static class: java.lang.Class<org.mozilla.javascript.SecureCaller.SecureClassLoaderImpl>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export abstract class SecurityController extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.SecurityController>;
				public static initGlobal(param0: org.mozilla.javascript.SecurityController): void;
				public callWithDomain(param0: any, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Callable, param3: org.mozilla.javascript.Scriptable, param4: org.mozilla.javascript.Scriptable, param5: any[]): any;
				public static hasGlobal(): boolean;
				public static createLoader(param0: java.lang.ClassLoader, param1: any): org.mozilla.javascript.GeneratedClassLoader;
				public createClassLoader(param0: java.lang.ClassLoader, param1: any): org.mozilla.javascript.GeneratedClassLoader;
				public getStaticSecurityDomainClassInternal(): java.lang.Class<any>;
				public static getStaticSecurityDomainClass(): java.lang.Class<any>;
				public constructor();
				public getDynamicSecurityDomain(param0: any): any;
				/** @deprecated */
				public execWithDomain(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Script, param3: any): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class SecurityUtilities extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.SecurityUtilities>;
				public static getProtectionDomain(param0: java.lang.Class<any>): java.security.ProtectionDomain;
				public static getScriptProtectionDomain(): java.security.ProtectionDomain;
				public static getSystemProperty(param0: string): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Sorting extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.Sorting>;
				public static insertionSort(param0: any[], param1: java.util.Comparator<any>): void;
				public static insertionSort(param0: any[], param1: number, param2: number, param3: java.util.Comparator<any>): void;
				public static hybridSort(param0: any[], param1: java.util.Comparator<any>): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class SpecialRef extends org.mozilla.javascript.Ref {
				public static class: java.lang.Class<org.mozilla.javascript.SpecialRef>;
				public get(param0: org.mozilla.javascript.Context): any;
				/** @deprecated */
				public set(param0: org.mozilla.javascript.Context, param1: any): any;
				public delete(param0: org.mozilla.javascript.Context): boolean;
				public set(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any): any;
				public has(param0: org.mozilla.javascript.Context): boolean;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class StackStyle {
				public static class: java.lang.Class<org.mozilla.javascript.StackStyle>;
				public static RHINO: org.mozilla.javascript.StackStyle;
				public static MOZILLA: org.mozilla.javascript.StackStyle;
				public static V8: org.mozilla.javascript.StackStyle;
				public static values(): Array<org.mozilla.javascript.StackStyle>;
				public static valueOf(param0: string): org.mozilla.javascript.StackStyle;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Symbol extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.Symbol>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.Symbol interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class SymbolKey extends java.lang.Object implements org.mozilla.javascript.Symbol, java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.SymbolKey>;
				public static ITERATOR: org.mozilla.javascript.SymbolKey;
				public static TO_STRING_TAG: org.mozilla.javascript.SymbolKey;
				public static SPECIES: org.mozilla.javascript.SymbolKey;
				public static HAS_INSTANCE: org.mozilla.javascript.SymbolKey;
				public static IS_CONCAT_SPREADABLE: org.mozilla.javascript.SymbolKey;
				public static IS_REGEXP: org.mozilla.javascript.SymbolKey;
				public static TO_PRIMITIVE: org.mozilla.javascript.SymbolKey;
				public static MATCH: org.mozilla.javascript.SymbolKey;
				public static REPLACE: org.mozilla.javascript.SymbolKey;
				public static SEARCH: org.mozilla.javascript.SymbolKey;
				public static SPLIT: org.mozilla.javascript.SymbolKey;
				public static UNSCOPABLES: org.mozilla.javascript.SymbolKey;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getName(): string;
				public toString(): string;
				public constructor(param0: string);
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class SymbolScriptable extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.SymbolScriptable>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.SymbolScriptable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					delete(param0: org.mozilla.javascript.Symbol): void;
				});
				public constructor();
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Synchronizer extends org.mozilla.javascript.Delegator {
				public static class: java.lang.Class<org.mozilla.javascript.Synchronizer>;
                public constructor(obj?: org.mozilla.javascript.Scriptable, syncObject?: any);
                public call(context: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
                public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Token extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.Token>;
				public static printTrees: boolean;
				public static ERROR: number;
				public static EOF: number;
				public static EOL: number;
				public static FIRST_BYTECODE_TOKEN: number;
				public static ENTERWITH: number;
				public static LEAVEWITH: number;
				public static RETURN: number;
				public static GOTO: number;
				public static IFEQ: number;
				public static IFNE: number;
				public static SETNAME: number;
				public static BITOR: number;
				public static BITXOR: number;
				public static BITAND: number;
				public static EQ: number;
				public static NE: number;
				public static LT: number;
				public static LE: number;
				public static GT: number;
				public static GE: number;
				public static LSH: number;
				public static RSH: number;
				public static URSH: number;
				public static ADD: number;
				public static SUB: number;
				public static MUL: number;
				public static DIV: number;
				public static MOD: number;
				public static NOT: number;
				public static BITNOT: number;
				public static POS: number;
				public static NEG: number;
				public static NEW: number;
				public static DELPROP: number;
				public static TYPEOF: number;
				public static GETPROP: number;
				public static GETPROPNOWARN: number;
				public static SETPROP: number;
				public static GETELEM: number;
				public static SETELEM: number;
				public static CALL: number;
				public static NAME: number;
				public static NUMBER: number;
				public static STRING: number;
				public static NULL: number;
				public static THIS: number;
				public static FALSE: number;
				public static TRUE: number;
				public static SHEQ: number;
				public static SHNE: number;
				public static REGEXP: number;
				public static BINDNAME: number;
				public static THROW: number;
				public static RETHROW: number;
				public static IN: number;
				public static INSTANCEOF: number;
				public static LOCAL_LOAD: number;
				public static GETVAR: number;
				public static SETVAR: number;
				public static CATCH_SCOPE: number;
				public static ENUM_INIT_KEYS: number;
				public static ENUM_INIT_VALUES: number;
				public static ENUM_INIT_ARRAY: number;
				public static ENUM_INIT_VALUES_IN_ORDER: number;
				public static ENUM_NEXT: number;
				public static ENUM_ID: number;
				public static THISFN: number;
				public static RETURN_RESULT: number;
				public static ARRAYLIT: number;
				public static OBJECTLIT: number;
				public static GET_REF: number;
				public static SET_REF: number;
				public static DEL_REF: number;
				public static REF_CALL: number;
				public static REF_SPECIAL: number;
				public static YIELD: number;
				public static STRICT_SETNAME: number;
				public static DEFAULTNAMESPACE: number;
				public static ESCXMLATTR: number;
				public static ESCXMLTEXT: number;
				public static REF_MEMBER: number;
				public static REF_NS_MEMBER: number;
				public static REF_NAME: number;
				public static REF_NS_NAME: number;
				public static LAST_BYTECODE_TOKEN: number;
				public static TRY: number;
				public static SEMI: number;
				public static LB: number;
				public static RB: number;
				public static LC: number;
				public static RC: number;
				public static LP: number;
				public static RP: number;
				public static COMMA: number;
				public static ASSIGN: number;
				public static ASSIGN_BITOR: number;
				public static ASSIGN_BITXOR: number;
				public static ASSIGN_BITAND: number;
				public static ASSIGN_LSH: number;
				public static ASSIGN_RSH: number;
				public static ASSIGN_URSH: number;
				public static ASSIGN_ADD: number;
				public static ASSIGN_SUB: number;
				public static ASSIGN_MUL: number;
				public static ASSIGN_DIV: number;
				public static ASSIGN_MOD: number;
				public static FIRST_ASSIGN: number;
				public static LAST_ASSIGN: number;
				public static HOOK: number;
				public static COLON: number;
				public static OR: number;
				public static AND: number;
				public static INC: number;
				public static DEC: number;
				public static DOT: number;
				public static FUNCTION: number;
				public static EXPORT: number;
				public static IMPORT: number;
				public static IF: number;
				public static ELSE: number;
				public static SWITCH: number;
				public static CASE: number;
				public static DEFAULT: number;
				public static WHILE: number;
				public static DO: number;
				public static FOR: number;
				public static BREAK: number;
				public static CONTINUE: number;
				public static VAR: number;
				public static WITH: number;
				public static CATCH: number;
				public static FINALLY: number;
				public static VOID: number;
				public static RESERVED: number;
				public static EMPTY: number;
				public static BLOCK: number;
				public static LABEL: number;
				public static TARGET: number;
				public static LOOP: number;
				public static EXPR_VOID: number;
				public static EXPR_RESULT: number;
				public static JSR: number;
				public static SCRIPT: number;
				public static TYPEOFNAME: number;
				public static USE_STACK: number;
				public static SETPROP_OP: number;
				public static SETELEM_OP: number;
				public static LOCAL_BLOCK: number;
				public static SET_REF_OP: number;
				public static DOTDOT: number;
				public static COLONCOLON: number;
				public static XML: number;
				public static DOTQUERY: number;
				public static XMLATTR: number;
				public static XMLEND: number;
				public static TO_OBJECT: number;
				public static TO_DOUBLE: number;
				public static GET: number;
				public static SET: number;
				public static LET: number;
				public static CONST: number;
				public static SETCONST: number;
				public static SETCONSTVAR: number;
				public static ARRAYCOMP: number;
				public static LETEXPR: number;
				public static WITHEXPR: number;
				public static DEBUGGER: number;
				public static COMMENT: number;
				public static GENEXPR: number;
				public static METHOD: number;
				public static ARROW: number;
				public static LAST_TOKEN: number;
				public static keywordToName(param0: number): string;
				public static isValidToken(param0: number): boolean;
				public static name(param0: number): string;
				public static typeToName(param0: number): string;
				public constructor();
			}
			export module Token {
				export class CommentType {
					public static class: java.lang.Class<org.mozilla.javascript.Token.CommentType>;
					public static LINE: org.mozilla.javascript.Token.CommentType;
					public static BLOCK_COMMENT: org.mozilla.javascript.Token.CommentType;
					public static JSDOC: org.mozilla.javascript.Token.CommentType;
					public static HTML: org.mozilla.javascript.Token.CommentType;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
					public static valueOf(param0: string): org.mozilla.javascript.Token.CommentType;
					public static values(): Array<org.mozilla.javascript.Token.CommentType>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class TokenStream extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.TokenStream>;
				public getCommentType(): org.mozilla.javascript.Token.CommentType;
				public getTokenLength(): number;
				public getTokenBeg(): number;
				public getCursor(): number;
				public getTokenEnd(): number;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class TopLevel extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.TopLevel>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public get(param0: any): any;
				public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
				public delete(param0: string): void;
				public getBuiltinCtor(param0: org.mozilla.javascript.TopLevel.Builtins): org.mozilla.javascript.BaseFunction;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public static getBuiltinPrototype(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.TopLevel.Builtins): org.mozilla.javascript.Scriptable;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getAllIds(): any[];
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static getBuiltinCtor(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.TopLevel.Builtins): org.mozilla.javascript.Function;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getBuiltinPrototype(param0: org.mozilla.javascript.TopLevel.Builtins): org.mozilla.javascript.Scriptable;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
				public getIds(): any[];
				public cacheBuiltins(): void;
				public delete(param0: number): void;
			}
			export module TopLevel {
				export class Builtins {
					public static class: java.lang.Class<org.mozilla.javascript.TopLevel.Builtins>;
					public static Object: org.mozilla.javascript.TopLevel.Builtins;
					public static Array: org.mozilla.javascript.TopLevel.Builtins;
					public static Function: org.mozilla.javascript.TopLevel.Builtins;
					public static String: org.mozilla.javascript.TopLevel.Builtins;
					public static Number: org.mozilla.javascript.TopLevel.Builtins;
					public static Boolean: org.mozilla.javascript.TopLevel.Builtins;
					public static RegExp: org.mozilla.javascript.TopLevel.Builtins;
					public static Error: org.mozilla.javascript.TopLevel.Builtins;
					public static Symbol: org.mozilla.javascript.TopLevel.Builtins;
					public static values(): Array<org.mozilla.javascript.TopLevel.Builtins>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
					public static valueOf(param0: string): org.mozilla.javascript.TopLevel.Builtins;
				}
				export class NativeErrors {
					public static class: java.lang.Class<org.mozilla.javascript.TopLevel.NativeErrors>;
					public static Error: org.mozilla.javascript.TopLevel.NativeErrors;
					public static EvalError: org.mozilla.javascript.TopLevel.NativeErrors;
					public static RangeError: org.mozilla.javascript.TopLevel.NativeErrors;
					public static ReferenceError: org.mozilla.javascript.TopLevel.NativeErrors;
					public static SyntaxError: org.mozilla.javascript.TopLevel.NativeErrors;
					public static TypeError: org.mozilla.javascript.TopLevel.NativeErrors;
					public static URIError: org.mozilla.javascript.TopLevel.NativeErrors;
					public static InternalError: org.mozilla.javascript.TopLevel.NativeErrors;
					public static JavaException: org.mozilla.javascript.TopLevel.NativeErrors;
					public static valueOf(param0: string): org.mozilla.javascript.TopLevel.NativeErrors;
					public static values(): Array<org.mozilla.javascript.TopLevel.NativeErrors>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class UintMap extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.UintMap>;
				public put(param0: number, param1: any): void;
				public has(param0: number): boolean;
				public getExistingInt(param0: number): number;
				public put(param0: number, param1: number): void;
				public remove(param0: number): void;
				public constructor();
				public size(): number;
				public getObject(param0: number): any;
				public getInt(param0: number, param1: number): number;
				public getKeys(): number[];
				public clear(): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Undefined extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.Undefined>;
				public static instance: any;
				public static SCRIPTABLE_UNDEFINED: org.mozilla.javascript.Scriptable;
				public static isUndefined(param0: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public readResolve(): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class UniqueTag extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.UniqueTag>;
				public static NOT_FOUND: org.mozilla.javascript.UniqueTag;
				public static NULL_VALUE: org.mozilla.javascript.UniqueTag;
				public static DOUBLE_MARK: org.mozilla.javascript.UniqueTag;
				public toString(): string;
				public readResolve(): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export abstract class VMBridge extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.VMBridge>;
				public setContext(param0: any, param1: org.mozilla.javascript.Context): void;
				public tryToMakeAccessible(param0: any): boolean;
				public getContext(param0: any): org.mozilla.javascript.Context;
				public isVarArgs(param0: java.lang.reflect.Member): boolean;
				public getJavaIterator(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any): java.util.Iterator<any>;
				public getThreadContextHelper(): any;
				public getInterfaceProxyHelper(param0: org.mozilla.javascript.ContextFactory, param1: Array<java.lang.Class<any>>): any;
				public constructor();
				public getCurrentThreadClassLoader(): java.lang.ClassLoader;
				public newInterfaceProxy(param0: any, param1: org.mozilla.javascript.ContextFactory, param2: org.mozilla.javascript.InterfaceAdapter, param3: any, param4: org.mozilla.javascript.Scriptable): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class VMBridge_custom extends org.mozilla.javascript.jdk15.VMBridge_jdk15 {
				public static class: java.lang.Class<org.mozilla.javascript.VMBridge_custom>;
				public castReturnValue(param0: java.lang.reflect.Method, param1: any): any;
				public defaultValue(param0: java.lang.Class<any>): any;
				public constructor();
				public newInterfaceProxy(param0: any, param1: org.mozilla.javascript.ContextFactory, param2: org.mozilla.javascript.InterfaceAdapter, param3: any, param4: org.mozilla.javascript.Scriptable): any;
			}
			export module VMBridge_custom {
				export class InterfaceAdapterWrapper extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.VMBridge_custom.InterfaceAdapterWrapper>;
					public invoke(cf: org.mozilla.javascript.ContextFactory, target: any, topScope: org.mozilla.javascript.Scriptable, thisObject: any, method: java.lang.reflect.Method, args: any[]): any;
					public invokeImpl(cx: org.mozilla.javascript.Context, target: any, topScope: org.mozilla.javascript.Scriptable, param3: any, method: java.lang.reflect.Method, args: any[]): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class WrapFactory extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.WrapFactory>;
				public setJavaPrimitiveWrap(param0: boolean): void;
				public wrapAsJavaObject(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any, param3: java.lang.Class<any>): org.mozilla.javascript.Scriptable;
				public isJavaPrimitiveWrap(): boolean;
				public wrapJavaClass(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: java.lang.Class<any>): org.mozilla.javascript.Scriptable;
				public wrapNewObject(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any): org.mozilla.javascript.Scriptable;
				public constructor();
				public wrap(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any, param3: java.lang.Class<any>): any;
			}
		}
	}
}



declare module org {
	export module mozilla {
		export module javascript {
			export class WrappedException extends org.mozilla.javascript.EvaluatorException {
				public static class: java.lang.Class<org.mozilla.javascript.WrappedException>;
				/** @deprecated */
				public unwrap(): any;
				public constructor(param0: string, param1: string, param2: number);
				public getWrappedException(): java.lang.Throwable;
				public constructor(param0: string, param1: string, param2: number, param3: string, param4: number);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Wrapper extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.Wrapper>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.Wrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					unwrap(): any;
				});
				public constructor();
				public unwrap(): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module annotations {
				export class JSConstructor extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.mozilla.javascript.annotations.JSConstructor>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.annotations.JSConstructor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module annotations {
				export class JSFunction extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.mozilla.javascript.annotations.JSFunction>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.annotations.JSFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					public annotationType(): java.lang.Class<any>;
					public value(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module annotations {
				export class JSGetter extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.mozilla.javascript.annotations.JSGetter>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.annotations.JSGetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					public annotationType(): java.lang.Class<any>;
					public value(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module annotations {
				export class JSSetter extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.mozilla.javascript.annotations.JSSetter>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.annotations.JSSetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					public annotationType(): java.lang.Class<any>;
					public value(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module annotations {
				export class JSStaticFunction extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.mozilla.javascript.annotations.JSStaticFunction>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.annotations.JSStaticFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					public annotationType(): java.lang.Class<any>;
					public value(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ArrayComprehension extends org.mozilla.javascript.ast.Scope {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ArrayComprehension>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public setFilterLp(param0: number): void;
					public getIfPosition(): number;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public getResult(): org.mozilla.javascript.ast.AstNode;
					public setResult(param0: org.mozilla.javascript.ast.AstNode): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public getFilterLp(): number;
					public setLoops(param0: java.util.List<org.mozilla.javascript.ast.ArrayComprehensionLoop>): void;
					public setFilter(param0: org.mozilla.javascript.ast.AstNode): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public getFilterRp(): number;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setFilterRp(param0: number): void;
					public toSource(param0: number): string;
					public getFilter(): org.mozilla.javascript.ast.AstNode;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public setIfPosition(param0: number): void;
					public forEach(param0: any /* any*/): void;
					public addLoop(param0: org.mozilla.javascript.ast.ArrayComprehensionLoop): void;
					public getLoops(): java.util.List<org.mozilla.javascript.ast.ArrayComprehensionLoop>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ArrayComprehensionLoop extends org.mozilla.javascript.ast.ForInLoop {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ArrayComprehensionLoop>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public getBody(): org.mozilla.javascript.ast.AstNode;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public setBody(param0: org.mozilla.javascript.ast.AstNode): void;
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ArrayLiteral extends org.mozilla.javascript.ast.AstNode implements org.mozilla.javascript.ast.DestructuringForm {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ArrayLiteral>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public getDestructuringLength(): number;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public setDestructuringLength(param0: number): void;
					public getSize(): number;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public setElements(param0: java.util.List<org.mozilla.javascript.ast.AstNode>): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public isDestructuring(): boolean;
					public getElement(param0: number): org.mozilla.javascript.ast.AstNode;
					public addElement(param0: org.mozilla.javascript.ast.AstNode): void;
					public setIsDestructuring(param0: boolean): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getSkipCount(): number;
					public setSkipCount(param0: number): void;
					public getElements(): java.util.List<org.mozilla.javascript.ast.AstNode>;
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class Assignment extends org.mozilla.javascript.ast.InfixExpression {
					public static class: java.lang.Class<org.mozilla.javascript.ast.Assignment>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public constructor(param0: number, param1: org.mozilla.javascript.ast.AstNode, param2: org.mozilla.javascript.ast.AstNode, param3: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public constructor(param0: number, param1: number, param2: org.mozilla.javascript.ast.AstNode, param3: org.mozilla.javascript.ast.AstNode);
					public constructor(param0: org.mozilla.javascript.ast.AstNode, param1: org.mozilla.javascript.ast.AstNode);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export abstract class AstNode extends org.mozilla.javascript.Node implements java.lang.Comparable<org.mozilla.javascript.ast.AstNode>  {
					public static class: java.lang.Class<org.mozilla.javascript.ast.AstNode>;
					public position: number;
					public length: number;
					public parent: org.mozilla.javascript.ast.AstNode;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public hasSideEffects(): boolean;
					public setBounds(param0: number, param1: number): void;
					public getLineno(): number;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public getAbsolutePosition(): number;
					public addChild(param0: org.mozilla.javascript.ast.AstNode): void;
					public makeIndent(param0: number): string;
					public spliterator(): java.util.Spliterator<any>;
					public getLength(): number;
					public shortName(): string;
					public static codeBug(): java.lang.RuntimeException;
					public setPosition(param0: number): void;
					public iterator(): java.util.Iterator<any>;
					public static operatorToString(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public compareTo(param0: org.mozilla.javascript.ast.AstNode): number;
					public setParent(param0: org.mozilla.javascript.ast.AstNode): void;
					public depth(): number;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public getParent(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public printList(param0: java.util.List<any>, param1: java.lang.StringBuilder): void;
					public setRelative(param0: number): void;
					public assertNotNull(param0: any): void;
					public setLength(param0: number): void;
					public debugPrint(): string;
					public toSource(param0: number): string;
					public getEnclosingFunction(): org.mozilla.javascript.ast.FunctionNode;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getAstRoot(): org.mozilla.javascript.ast.AstRoot;
					public getEnclosingScope(): org.mozilla.javascript.ast.Scope;
					public forEach(param0: any /* any*/): void;
					public getPosition(): number;
				}
				export module AstNode {
					export class DebugPrintVisitor extends java.lang.Object implements org.mozilla.javascript.ast.NodeVisitor {
						public static class: java.lang.Class<org.mozilla.javascript.ast.AstNode.DebugPrintVisitor>;
						public constructor(param0: java.lang.StringBuilder);
						public visit(param0: org.mozilla.javascript.ast.AstNode): boolean;
						public toString(): string;
					}
					export class PositionComparator extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.ast.AstNode.PositionComparator>;
						public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
						public constructor();
						public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
						public equals(param0: any): boolean;
						public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public static comparing(param0: any /* any*/): java.util.Comparator<any>;
						public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
						public reversed(): java.util.Comparator<any>;
						public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public compare(param0: org.mozilla.javascript.ast.AstNode, param1: org.mozilla.javascript.ast.AstNode): number;
						public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
						public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
						public static naturalOrder(): java.util.Comparator<any>;
						public compare(param0: any, param1: any): number;
						public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class AstRoot extends org.mozilla.javascript.ast.ScriptNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.AstRoot>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public spliterator(): java.util.Spliterator<any>;
					public debugPrint(): string;
					public visitComments(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public addComment(param0: org.mozilla.javascript.ast.Comment): void;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public setComments(param0: java.util.SortedSet<org.mozilla.javascript.ast.Comment>): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public getComments(): java.util.SortedSet<org.mozilla.javascript.ast.Comment>;
					public visitAll(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public checkParentLinks(): void;
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class Block extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.Block>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public addStatement(param0: org.mozilla.javascript.ast.AstNode): void;
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class BreakStatement extends org.mozilla.javascript.ast.Jump {
					public static class: java.lang.Class<org.mozilla.javascript.ast.BreakStatement>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public setBreakLabel(param0: org.mozilla.javascript.ast.Name): void;
					public setBreakTarget(param0: org.mozilla.javascript.ast.Jump): void;
					public getBreakLabel(): org.mozilla.javascript.ast.Name;
					public getBreakTarget(): org.mozilla.javascript.ast.AstNode;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class CatchClause extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.CatchClause>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public setParens(param0: number, param1: number): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public setRp(param0: number): void;
					public setCatchCondition(param0: org.mozilla.javascript.ast.AstNode): void;
					public getIfPosition(): number;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public setBody(param0: org.mozilla.javascript.ast.Block): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public getRp(): number;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setLp(param0: number): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public getCatchCondition(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public getBody(): org.mozilla.javascript.ast.Block;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getLp(): number;
					public getVarName(): org.mozilla.javascript.ast.Name;
					public setVarName(param0: org.mozilla.javascript.ast.Name): void;
					public setIfPosition(param0: number): void;
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class Comment extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.Comment>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(param0: number, param1: number, param2: org.mozilla.javascript.Token.CommentType, param3: string);
					public toSource(param0: number): string;
					public getCommentType(): org.mozilla.javascript.Token.CommentType;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getValue(): string;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public setCommentType(param0: org.mozilla.javascript.Token.CommentType): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ConditionalExpression extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ConditionalExpression>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public hasSideEffects(): boolean;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public getTrueExpression(): org.mozilla.javascript.ast.AstNode;
					public setTestExpression(param0: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public constructor(param0: number);
					public getColonPosition(): number;
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setTrueExpression(param0: org.mozilla.javascript.ast.AstNode): void;
					public getTestExpression(): org.mozilla.javascript.ast.AstNode;
					public setFalseExpression(param0: org.mozilla.javascript.ast.AstNode): void;
					public getFalseExpression(): org.mozilla.javascript.ast.AstNode;
					public getQuestionMarkPosition(): number;
					public toSource(param0: number): string;
					public setColonPosition(param0: number): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public setQuestionMarkPosition(param0: number): void;
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ContinueStatement extends org.mozilla.javascript.ast.Jump {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ContinueStatement>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public getLabel(): org.mozilla.javascript.ast.Name;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public constructor(param0: number, param1: org.mozilla.javascript.ast.Name);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public setTarget(param0: org.mozilla.javascript.ast.Loop): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(param0: number, param1: number, param2: org.mozilla.javascript.ast.Name);
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public setLabel(param0: org.mozilla.javascript.ast.Name): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public constructor(param0: org.mozilla.javascript.ast.Name);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public getTarget(): org.mozilla.javascript.ast.Loop;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class DestructuringForm extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.ast.DestructuringForm>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.ast.DestructuringForm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setIsDestructuring(param0: boolean): void;
						isDestructuring(): boolean;
					});
					public constructor();
					public isDestructuring(): boolean;
					public setIsDestructuring(param0: boolean): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class DoLoop extends org.mozilla.javascript.ast.Loop {
					public static class: java.lang.Class<org.mozilla.javascript.ast.DoLoop>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public getCondition(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public getWhilePosition(): number;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public setWhilePosition(param0: number): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setCondition(param0: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ElementGet extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ElementGet>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public setParens(param0: number, param1: number): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public setLb(param0: number): void;
					public setTarget(param0: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public getLb(): number;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public getElement(): org.mozilla.javascript.ast.AstNode;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(param0: number): string;
					public getTarget(): org.mozilla.javascript.ast.AstNode;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getRb(): number;
					public setElement(param0: org.mozilla.javascript.ast.AstNode): void;
					public constructor(param0: org.mozilla.javascript.ast.AstNode, param1: org.mozilla.javascript.ast.AstNode);
					public forEach(param0: any /* any*/): void;
					public setRb(param0: number): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class EmptyExpression extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.EmptyExpression>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class EmptyStatement extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.EmptyStatement>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ErrorCollector extends java.lang.Object implements org.mozilla.javascript.ast.IdeErrorReporter {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ErrorCollector>;
					public getErrors(): java.util.List<org.mozilla.javascript.ast.ParseProblem>;
					public toString(): string;
					public warning(param0: string, param1: string, param2: number, param3: number): void;
					public error(param0: string, param1: string, param2: number, param3: number): void;
					public constructor();
					public error(param0: string, param1: string, param2: number, param3: string, param4: number): void;
					public warning(param0: string, param1: string, param2: number, param3: string, param4: number): void;
					public runtimeError(param0: string, param1: string, param2: number, param3: string, param4: number): org.mozilla.javascript.EvaluatorException;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ErrorNode extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ErrorNode>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public setMessage(param0: string): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public getMessage(): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ExpressionStatement extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ExpressionStatement>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: org.mozilla.javascript.ast.AstNode, param1: boolean);
					public hasSideEffects(): boolean;
					public constructor(param0: number, param1: number, param2: org.mozilla.javascript.ast.AstNode);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public constructor(param0: org.mozilla.javascript.ast.AstNode);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public setHasResult(): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getExpression(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setExpression(param0: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ForInLoop extends org.mozilla.javascript.ast.Loop {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ForInLoop>;
					public iterator: org.mozilla.javascript.ast.AstNode;
					public iteratedObject: org.mozilla.javascript.ast.AstNode;
					public inPosition: number;
					public eachPosition: number;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public getIterator(): org.mozilla.javascript.ast.AstNode;
					public isForOf(): boolean;
					public setEachPosition(param0: number): void;
					public getInPosition(): number;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public isForEach(): boolean;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public setIsForOf(param0: boolean): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public setIsForEach(param0: boolean): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public getEachPosition(): number;
					public getIteratedObject(): org.mozilla.javascript.ast.AstNode;
					public setIteratedObject(param0: org.mozilla.javascript.ast.AstNode): void;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setIterator(param0: org.mozilla.javascript.ast.AstNode): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public setInPosition(param0: number): void;
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ForLoop extends org.mozilla.javascript.ast.Loop {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ForLoop>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public getInitializer(): org.mozilla.javascript.ast.AstNode;
					public setInitializer(param0: org.mozilla.javascript.ast.AstNode): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public getCondition(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public setIncrement(param0: org.mozilla.javascript.ast.AstNode): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public getIncrement(): org.mozilla.javascript.ast.AstNode;
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setCondition(param0: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class FunctionCall extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.FunctionCall>;
					public static NO_ARGS: java.util.List<org.mozilla.javascript.ast.AstNode>;
					public target: org.mozilla.javascript.ast.AstNode;
					public arguments: java.util.List<org.mozilla.javascript.ast.AstNode>;
					public lp: number;
					public rp: number;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public setParens(param0: number, param1: number): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public setRp(param0: number): void;
					public getArguments(): java.util.List<org.mozilla.javascript.ast.AstNode>;
					public setTarget(param0: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public setArguments(param0: java.util.List<org.mozilla.javascript.ast.AstNode>): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public getRp(): number;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setLp(param0: number): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public addArgument(param0: org.mozilla.javascript.ast.AstNode): void;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(param0: number): string;
					public getTarget(): org.mozilla.javascript.ast.AstNode;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getLp(): number;
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class FunctionNode extends org.mozilla.javascript.ast.ScriptNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.FunctionNode>;
					public static FUNCTION_STATEMENT: number;
					public static FUNCTION_EXPRESSION: number;
					public static FUNCTION_EXPRESSION_STATEMENT: number;
					public static ARROW_FUNCTION: number;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public setParens(param0: number, param1: number): void;
					public getResumptionPoints(): java.util.List<org.mozilla.javascript.Node>;
					public setRequiresActivation(): void;
					public addResumptionPoint(param0: org.mozilla.javascript.Node): void;
					public isGetterMethod(): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public getFunctionType(): number;
					public isExpressionClosure(): boolean;
					public setFunctionType(param0: number): void;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public getRp(): number;
					public setIsExpressionClosure(param0: boolean): void;
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public addFunction(param0: org.mozilla.javascript.ast.FunctionNode): number;
					public toSource(): string;
					public getParams(): java.util.List<org.mozilla.javascript.ast.AstNode>;
					public setBody(param0: org.mozilla.javascript.ast.AstNode): void;
					public forEach(param0: any /* any*/): void;
					public setParams(param0: java.util.List<org.mozilla.javascript.ast.AstNode>): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public constructor(param0: number, param1: org.mozilla.javascript.ast.Name);
					public isParam(param0: org.mozilla.javascript.ast.AstNode): boolean;
					public setRp(param0: number): void;
					public setFunctionIsGetterMethod(): void;
					public setMemberExprNode(param0: org.mozilla.javascript.ast.AstNode): void;
					public requiresActivation(): boolean;
					public getFunctionName(): org.mozilla.javascript.ast.Name;
					public addParam(param0: org.mozilla.javascript.ast.AstNode): void;
					public getMemberExprNode(): org.mozilla.javascript.ast.AstNode;
					public isMethod(): boolean;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number);
					public setLp(param0: number): void;
					public addLiveLocals(param0: org.mozilla.javascript.Node, param1: number[]): void;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public isGenerator(): boolean;
					public getBody(): org.mozilla.javascript.ast.AstNode;
					public isNormalMethod(): boolean;
					public setFunctionIsSetterMethod(): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getLp(): number;
					public getLiveLocals(): java.util.Map<org.mozilla.javascript.Node,number[]>;
					public getName(): string;
					public setIsGenerator(): void;
					public setFunctionIsNormalMethod(): void;
					public isSetterMethod(): boolean;
					public setFunctionName(param0: org.mozilla.javascript.ast.Name): void;
				}
				export module FunctionNode {
					export class Form {
						public static class: java.lang.Class<org.mozilla.javascript.ast.FunctionNode.Form>;
						public static FUNCTION: org.mozilla.javascript.ast.FunctionNode.Form;
						public static GETTER: org.mozilla.javascript.ast.FunctionNode.Form;
						public static SETTER: org.mozilla.javascript.ast.FunctionNode.Form;
						public static METHOD: org.mozilla.javascript.ast.FunctionNode.Form;
						public static values(): Array<org.mozilla.javascript.ast.FunctionNode.Form>;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): org.mozilla.javascript.ast.FunctionNode.Form;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class GeneratorExpression extends org.mozilla.javascript.ast.Scope {
					public static class: java.lang.Class<org.mozilla.javascript.ast.GeneratorExpression>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public setLoops(param0: java.util.List<org.mozilla.javascript.ast.GeneratorExpressionLoop>): void;
					public spliterator(): java.util.Spliterator<any>;
					public setFilterLp(param0: number): void;
					public getLoops(): java.util.List<org.mozilla.javascript.ast.GeneratorExpressionLoop>;
					public getIfPosition(): number;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public getResult(): org.mozilla.javascript.ast.AstNode;
					public setResult(param0: org.mozilla.javascript.ast.AstNode): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public getFilterLp(): number;
					public setFilter(param0: org.mozilla.javascript.ast.AstNode): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public getFilterRp(): number;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setFilterRp(param0: number): void;
					public toSource(param0: number): string;
					public getFilter(): org.mozilla.javascript.ast.AstNode;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public addLoop(param0: org.mozilla.javascript.ast.GeneratorExpressionLoop): void;
					public setIfPosition(param0: number): void;
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class GeneratorExpressionLoop extends org.mozilla.javascript.ast.ForInLoop {
					public static class: java.lang.Class<org.mozilla.javascript.ast.GeneratorExpressionLoop>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public isForEach(): boolean;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public setIsForEach(param0: boolean): void;
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class IdeErrorReporter extends java.lang.Object implements org.mozilla.javascript.ErrorReporter {
					public static class: java.lang.Class<org.mozilla.javascript.ast.IdeErrorReporter>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.ast.IdeErrorReporter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						warning(param0: string, param1: string, param2: number, param3: number): void;
						error(param0: string, param1: string, param2: number, param3: number): void;
						warning(param0: string, param1: string, param2: number, param3: string, param4: number): void;
						error(param0: string, param1: string, param2: number, param3: string, param4: number): void;
						runtimeError(param0: string, param1: string, param2: number, param3: string, param4: number): org.mozilla.javascript.EvaluatorException;
					});
					public constructor();
					public warning(param0: string, param1: string, param2: number, param3: number): void;
					public error(param0: string, param1: string, param2: number, param3: number): void;
					public error(param0: string, param1: string, param2: number, param3: string, param4: number): void;
					public warning(param0: string, param1: string, param2: number, param3: string, param4: number): void;
					public runtimeError(param0: string, param1: string, param2: number, param3: string, param4: number): org.mozilla.javascript.EvaluatorException;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class IfStatement extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.IfStatement>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public setParens(param0: number, param1: number): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public getElsePosition(): number;
					public spliterator(): java.util.Spliterator<any>;
					public setRp(param0: number): void;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public getThenPart(): org.mozilla.javascript.ast.AstNode;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public setElsePart(param0: org.mozilla.javascript.ast.AstNode): void;
					public getRp(): number;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setCondition(param0: org.mozilla.javascript.ast.AstNode): void;
					public setLp(param0: number): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public getCondition(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public setThenPart(param0: org.mozilla.javascript.ast.AstNode): void;
					public getLp(): number;
					public getElsePart(): org.mozilla.javascript.ast.AstNode;
					public setElsePosition(param0: number): void;
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class InfixExpression extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.InfixExpression>;
					public left: org.mozilla.javascript.ast.AstNode;
					public right: org.mozilla.javascript.ast.AstNode;
					public operatorPosition: number;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public hasSideEffects(): boolean;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public constructor(param0: number, param1: org.mozilla.javascript.ast.AstNode, param2: org.mozilla.javascript.ast.AstNode, param3: number);
					public setOperatorPosition(param0: number): void;
					public setOperator(param0: number): void;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public getOperator(): number;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public setRight(param0: org.mozilla.javascript.ast.AstNode): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public getLeft(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public getRight(): org.mozilla.javascript.ast.AstNode;
					public setLeft(param0: org.mozilla.javascript.ast.AstNode): void;
					public toSource(param0: number): string;
					public getOperatorPosition(): number;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public setLeftAndRight(param0: org.mozilla.javascript.ast.AstNode, param1: org.mozilla.javascript.ast.AstNode): void;
					public constructor(param0: number, param1: number, param2: org.mozilla.javascript.ast.AstNode, param3: org.mozilla.javascript.ast.AstNode);
					public constructor(param0: org.mozilla.javascript.ast.AstNode, param1: org.mozilla.javascript.ast.AstNode);
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class Jump extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.Jump>;
					public target: org.mozilla.javascript.Node;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public getJumpStatement(): org.mozilla.javascript.ast.Jump;
					public setDefault(param0: org.mozilla.javascript.Node): void;
					public setLoop(param0: org.mozilla.javascript.ast.Jump): void;
					public getDefault(): org.mozilla.javascript.Node;
					public getLoop(): org.mozilla.javascript.ast.Jump;
					public setContinue(param0: org.mozilla.javascript.Node): void;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public getContinue(): org.mozilla.javascript.Node;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setJumpStatement(param0: org.mozilla.javascript.ast.Jump): void;
					public getFinally(): org.mozilla.javascript.Node;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public setFinally(param0: org.mozilla.javascript.Node): void;
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class KeywordLiteral extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.KeywordLiteral>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public isBooleanLiteral(): boolean;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public setType(param0: number): org.mozilla.javascript.Node;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: number, param2: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public setType(param0: number): org.mozilla.javascript.ast.KeywordLiteral;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class Label extends org.mozilla.javascript.ast.Jump {
					public static class: java.lang.Class<org.mozilla.javascript.ast.Label>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public setName(param0: string): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public getName(): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public constructor(param0: number, param1: number, param2: string);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class LabeledStatement extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.LabeledStatement>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public hasSideEffects(): boolean;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public getStatement(): org.mozilla.javascript.ast.AstNode;
					public spliterator(): java.util.Spliterator<any>;
					public addLabel(param0: org.mozilla.javascript.ast.Label): void;
					public setStatement(param0: org.mozilla.javascript.ast.AstNode): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public getLabels(): java.util.List<org.mozilla.javascript.ast.Label>;
					public getFirstLabel(): org.mozilla.javascript.ast.Label;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public setLabels(param0: java.util.List<org.mozilla.javascript.ast.Label>): void;
					public constructor(param0: number);
					public getLabelByName(param0: string): org.mozilla.javascript.ast.Label;
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class LetNode extends org.mozilla.javascript.ast.Scope {
					public static class: java.lang.Class<org.mozilla.javascript.ast.LetNode>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public setParens(param0: number, param1: number): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public setRp(param0: number): void;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public getRp(): number;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setLp(param0: number): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public setVariables(param0: org.mozilla.javascript.ast.VariableDeclaration): void;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public getBody(): org.mozilla.javascript.ast.AstNode;
					public toSource(param0: number): string;
					public getVariables(): org.mozilla.javascript.ast.VariableDeclaration;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getLp(): number;
					public setBody(param0: org.mozilla.javascript.ast.AstNode): void;
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export abstract class Loop extends org.mozilla.javascript.ast.Scope {
					public static class: java.lang.Class<org.mozilla.javascript.ast.Loop>;
					public body: org.mozilla.javascript.ast.AstNode;
					public lp: number;
					public rp: number;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public setParens(param0: number, param1: number): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public setRp(param0: number): void;
					public getBody(): org.mozilla.javascript.ast.AstNode;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public getLp(): number;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public getRp(): number;
					public setBody(param0: org.mozilla.javascript.ast.AstNode): void;
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setLp(param0: number): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class Name extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.Name>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public constructor(param0: number, param1: string);
					public iterator(): java.util.Iterator<any>;
					public getDefiningScope(): org.mozilla.javascript.ast.Scope;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public setIdentifier(param0: string): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public constructor(param0: number, param1: number, param2: string);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public getIdentifier(): string;
					public length(): number;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getScope(): org.mozilla.javascript.ast.Scope;
					public isLocalName(): boolean;
					public forEach(param0: any /* any*/): void;
					public setScope(param0: org.mozilla.javascript.ast.Scope): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class NewExpression extends org.mozilla.javascript.ast.FunctionCall {
					public static class: java.lang.Class<org.mozilla.javascript.ast.NewExpression>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public getInitializer(): org.mozilla.javascript.ast.ObjectLiteral;
					public setInitializer(param0: org.mozilla.javascript.ast.ObjectLiteral): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class NodeVisitor extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.ast.NodeVisitor>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.ast.NodeVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						visit(param0: org.mozilla.javascript.ast.AstNode): boolean;
					});
					public constructor();
					public visit(param0: org.mozilla.javascript.ast.AstNode): boolean;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class NumberLiteral extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.NumberLiteral>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public getNumber(): number;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public setNumber(param0: number): void;
					public constructor(param0: number, param1: string);
					public setValue(param0: string): void;
					public constructor(param0: number, param1: string, param2: number);
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getValue(): string;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ObjectLiteral extends org.mozilla.javascript.ast.AstNode implements org.mozilla.javascript.ast.DestructuringForm {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ObjectLiteral>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public isDestructuring(): boolean;
					public setElements(param0: java.util.List<org.mozilla.javascript.ast.ObjectProperty>): void;
					public setIsDestructuring(param0: boolean): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public addElement(param0: org.mozilla.javascript.ast.ObjectProperty): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public getElements(): java.util.List<org.mozilla.javascript.ast.ObjectProperty>;
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ObjectProperty extends org.mozilla.javascript.ast.InfixExpression {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ObjectProperty>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public isGetterMethod(): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(param0: number, param1: org.mozilla.javascript.ast.AstNode, param2: org.mozilla.javascript.ast.AstNode, param3: number);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public setIsSetterMethod(): void;
					public isMethod(): boolean;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public setIsNormalMethod(): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setIsGetterMethod(): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public toSource(): string;
					public setNodeType(param0: number): void;
					public isNormalMethod(): boolean;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: number, param2: org.mozilla.javascript.ast.AstNode, param3: org.mozilla.javascript.ast.AstNode);
					public constructor(param0: org.mozilla.javascript.ast.AstNode, param1: org.mozilla.javascript.ast.AstNode);
					public isSetterMethod(): boolean;
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ParenthesizedExpression extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ParenthesizedExpression>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: number, param2: org.mozilla.javascript.ast.AstNode);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public constructor(param0: org.mozilla.javascript.ast.AstNode);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getExpression(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setExpression(param0: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ParseProblem extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ParseProblem>;
					public setType(param0: org.mozilla.javascript.ast.ParseProblem.Type): void;
					public toString(): string;
					public getFileOffset(): number;
					public getType(): org.mozilla.javascript.ast.ParseProblem.Type;
					public setSourceName(param0: string): void;
					public getLength(): number;
					public constructor(param0: org.mozilla.javascript.ast.ParseProblem.Type, param1: string, param2: string, param3: number, param4: number);
					public getMessage(): string;
					public setFileOffset(param0: number): void;
					public setMessage(param0: string): void;
					public getSourceName(): string;
					public setLength(param0: number): void;
				}
				export module ParseProblem {
					export class Type {
						public static class: java.lang.Class<org.mozilla.javascript.ast.ParseProblem.Type>;
						public static Error: org.mozilla.javascript.ast.ParseProblem.Type;
						public static Warning: org.mozilla.javascript.ast.ParseProblem.Type;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): org.mozilla.javascript.ast.ParseProblem.Type;
						public static values(): Array<org.mozilla.javascript.ast.ParseProblem.Type>;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class PropertyGet extends org.mozilla.javascript.ast.InfixExpression {
					public static class: java.lang.Class<org.mozilla.javascript.ast.PropertyGet>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public constructor(param0: number, param1: org.mozilla.javascript.ast.AstNode, param2: org.mozilla.javascript.ast.AstNode, param3: number);
					public setTarget(param0: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<any>;
					public setProperty(param0: org.mozilla.javascript.ast.Name): void;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: org.mozilla.javascript.ast.AstNode, param1: org.mozilla.javascript.ast.Name);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public constructor(param0: org.mozilla.javascript.ast.AstNode, param1: org.mozilla.javascript.ast.Name, param2: number);
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public getProperty(): org.mozilla.javascript.ast.Name;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: number, param2: org.mozilla.javascript.ast.AstNode, param3: org.mozilla.javascript.ast.Name);
					public getTarget(): org.mozilla.javascript.ast.AstNode;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: number, param2: org.mozilla.javascript.ast.AstNode, param3: org.mozilla.javascript.ast.AstNode);
					public constructor(param0: org.mozilla.javascript.ast.AstNode, param1: org.mozilla.javascript.ast.AstNode);
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class RegExpLiteral extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.RegExpLiteral>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public setValue(param0: string): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getValue(): string;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public getFlags(): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setFlags(param0: string): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ReturnStatement extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ReturnStatement>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: number, param2: org.mozilla.javascript.ast.AstNode);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public getReturnValue(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setReturnValue(param0: org.mozilla.javascript.ast.AstNode): void;
					public spliterator(): java.util.Spliterator<any>;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class Scope extends org.mozilla.javascript.ast.Jump {
					public static class: java.lang.Class<org.mozilla.javascript.ast.Scope>;
					public symbolTable: java.util.Map<string,org.mozilla.javascript.ast.Symbol>;
					public parentScope: org.mozilla.javascript.ast.Scope;
					public top: org.mozilla.javascript.ast.ScriptNode;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public getSymbol(param0: string): org.mozilla.javascript.ast.Symbol;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public replaceWith(param0: org.mozilla.javascript.ast.Scope): void;
					public spliterator(): java.util.Spliterator<any>;
					public static splitScope(param0: org.mozilla.javascript.ast.Scope): org.mozilla.javascript.ast.Scope;
					public getDefiningScope(param0: string): org.mozilla.javascript.ast.Scope;
					public iterator(): java.util.Iterator<any>;
					public clearParentScope(): void;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public setTop(param0: org.mozilla.javascript.ast.ScriptNode): void;
					public constructor(param0: number);
					public addChildScope(param0: org.mozilla.javascript.ast.Scope): void;
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public getStatements(): java.util.List<org.mozilla.javascript.ast.AstNode>;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public static joinScopes(param0: org.mozilla.javascript.ast.Scope, param1: org.mozilla.javascript.ast.Scope): void;
					public putSymbol(param0: org.mozilla.javascript.ast.Symbol): void;
					public getParentScope(): org.mozilla.javascript.ast.Scope;
					public setParentScope(param0: org.mozilla.javascript.ast.Scope): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getTop(): org.mozilla.javascript.ast.ScriptNode;
					public setSymbolTable(param0: java.util.Map<string,org.mozilla.javascript.ast.Symbol>): void;
					public getSymbolTable(): java.util.Map<string,org.mozilla.javascript.ast.Symbol>;
					public getChildScopes(): java.util.List<org.mozilla.javascript.ast.Scope>;
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ScriptNode extends org.mozilla.javascript.ast.Scope {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ScriptNode>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public spliterator(): java.util.Spliterator<any>;
					public addRegExp(param0: org.mozilla.javascript.ast.RegExpLiteral): void;
					public setSymbols(param0: java.util.List<org.mozilla.javascript.ast.Symbol>): void;
					public iterator(): java.util.Iterator<any>;
					public setEncodedSourceStart(param0: number): void;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public getCompilerData(): any;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public getEncodedSourceStart(): number;
					public getParamCount(): number;
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public addFunction(param0: org.mozilla.javascript.ast.FunctionNode): number;
					public getEncodedSourceEnd(): number;
					public getRegexpFlags(param0: number): string;
					public setEncodedSourceEnd(param0: number): void;
					public getParamOrVarName(param0: number): string;
					public getNextTempName(): string;
					public setEndLineno(param0: number): void;
					public getRegexpString(param0: number): string;
					public getEndLineno(): number;
					public isInStrictMode(): boolean;
					public forEach(param0: any /* any*/): void;
					public flattenSymbolTable(param0: boolean): void;
					public getFunctions(): java.util.List<org.mozilla.javascript.ast.FunctionNode>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public getParamAndVarNames(): string[];
					public getIndexForNameNode(param0: org.mozilla.javascript.Node): number;
					public getSourceName(): string;
					public getRegexpCount(): number;
					public setEncodedSourceBounds(param0: number, param1: number): void;
					public getParamAndVarCount(): number;
					public setSourceName(param0: string): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public setEncodedSource(param0: string): void;
					public getEncodedSource(): string;
					public constructor(param0: number);
					public getBaseLineno(): number;
					public setCompilerData(param0: any): void;
					public setBaseLineno(param0: number): void;
					public getFunctionCount(): number;
					public setInStrictMode(param0: boolean): void;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public getFunctionNode(param0: number): org.mozilla.javascript.ast.FunctionNode;
					public getSymbols(): java.util.List<org.mozilla.javascript.ast.Symbol>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getParamAndVarConst(): boolean[];
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class StringLiteral extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.StringLiteral>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public getValue(param0: boolean): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public getQuoteCharacter(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public setQuoteCharacter(param0: string): void;
					public setValue(param0: string): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getValue(): string;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class SwitchCase extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.SwitchCase>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public getStatements(): java.util.List<org.mozilla.javascript.ast.AstNode>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public isDefault(): boolean;
					public setStatements(param0: java.util.List<org.mozilla.javascript.ast.AstNode>): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getExpression(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public addStatement(param0: org.mozilla.javascript.ast.AstNode): void;
					public constructor(param0: number, param1: number);
					public setExpression(param0: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class SwitchStatement extends org.mozilla.javascript.ast.Jump {
					public static class: java.lang.Class<org.mozilla.javascript.ast.SwitchStatement>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public setParens(param0: number, param1: number): void;
					public getCases(): java.util.List<org.mozilla.javascript.ast.SwitchCase>;
					public addCase(param0: org.mozilla.javascript.ast.SwitchCase): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public setRp(param0: number): void;
					public getExpression(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public getRp(): number;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setExpression(param0: org.mozilla.javascript.ast.AstNode): void;
					public setLp(param0: number): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getLp(): number;
					public forEach(param0: any /* any*/): void;
					public setCases(param0: java.util.List<org.mozilla.javascript.ast.SwitchCase>): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class Symbol extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.ast.Symbol>;
					public getIndex(): number;
					public setDeclType(param0: number): void;
					public setContainingTable(param0: org.mozilla.javascript.ast.Scope): void;
					public getDeclTypeName(): string;
					public setIndex(param0: number): void;
					public constructor(param0: number, param1: string);
					public getNode(): org.mozilla.javascript.Node;
					public setNode(param0: org.mozilla.javascript.Node): void;
					public setName(param0: string): void;
					public toString(): string;
					public constructor();
					public getName(): string;
					public getDeclType(): number;
					public getContainingTable(): org.mozilla.javascript.ast.Scope;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class ThrowStatement extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.ThrowStatement>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: number, param2: org.mozilla.javascript.ast.AstNode);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public constructor(param0: org.mozilla.javascript.ast.AstNode);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getExpression(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.ast.AstNode);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setExpression(param0: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class TryStatement extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.TryStatement>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public setCatchClauses(param0: java.util.List<org.mozilla.javascript.ast.CatchClause>): void;
					public setTryBlock(param0: org.mozilla.javascript.ast.AstNode): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public addCatchClause(param0: org.mozilla.javascript.ast.CatchClause): void;
					public setFinallyPosition(param0: number): void;
					public iterator(): java.util.Iterator<any>;
					public getFinallyBlock(): org.mozilla.javascript.ast.AstNode;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public getFinallyPosition(): number;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public constructor(param0: number);
					public getCatchClauses(): java.util.List<org.mozilla.javascript.ast.CatchClause>;
					public constructor(param0: number, param1: number);
					public getTryBlock(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setFinallyBlock(param0: org.mozilla.javascript.ast.AstNode): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class UnaryExpression extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.UnaryExpression>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public isPostfix(): boolean;
					public getOperand(): org.mozilla.javascript.ast.AstNode;
					public setOperator(param0: number): void;
					public iterator(): java.util.Iterator<any>;
					public constructor(param0: number, param1: number, param2: org.mozilla.javascript.ast.AstNode, param3: boolean);
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public getOperator(): number;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public setIsPostfix(param0: boolean): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public constructor(param0: number, param1: number, param2: org.mozilla.javascript.ast.AstNode);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public isPrefix(): boolean;
					public setOperand(param0: org.mozilla.javascript.ast.AstNode): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class VariableDeclaration extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.VariableDeclaration>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public addVariable(param0: org.mozilla.javascript.ast.VariableInitializer): void;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public setIsStatement(param0: boolean): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public setVariables(param0: java.util.List<org.mozilla.javascript.ast.VariableInitializer>): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public isLet(): boolean;
					public getVariables(): java.util.List<org.mozilla.javascript.ast.VariableInitializer>;
					public isConst(): boolean;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setType(param0: number): org.mozilla.javascript.Node;
					public toSource(param0: number): string;
					public isStatement(): boolean;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public isVar(): boolean;
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class VariableInitializer extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.VariableInitializer>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public getInitializer(): org.mozilla.javascript.ast.AstNode;
					public setInitializer(param0: org.mozilla.javascript.ast.AstNode): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public isDestructuring(): boolean;
					public setNodeType(param0: number): void;
					public setTarget(param0: org.mozilla.javascript.ast.AstNode): void;
					public toSource(param0: number): string;
					public getTarget(): org.mozilla.javascript.ast.AstNode;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class WhileLoop extends org.mozilla.javascript.ast.Loop {
					public static class: java.lang.Class<org.mozilla.javascript.ast.WhileLoop>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public getCondition(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setCondition(param0: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class WithStatement extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.WithStatement>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public setParens(param0: number, param1: number): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public getStatement(): org.mozilla.javascript.ast.AstNode;
					public spliterator(): java.util.Spliterator<any>;
					public setRp(param0: number): void;
					public setStatement(param0: org.mozilla.javascript.ast.AstNode): void;
					public getExpression(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public getRp(): number;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setExpression(param0: org.mozilla.javascript.ast.AstNode): void;
					public setLp(param0: number): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getLp(): number;
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class XmlDotQuery extends org.mozilla.javascript.ast.InfixExpression {
					public static class: java.lang.Class<org.mozilla.javascript.ast.XmlDotQuery>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public spliterator(): java.util.Spliterator<any>;
					public setRp(param0: number): void;
					public constructor(param0: number, param1: org.mozilla.javascript.ast.AstNode, param2: org.mozilla.javascript.ast.AstNode, param3: number);
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public constructor(param0: number, param1: number, param2: org.mozilla.javascript.ast.AstNode, param3: org.mozilla.javascript.ast.AstNode);
					public constructor(param0: org.mozilla.javascript.ast.AstNode, param1: org.mozilla.javascript.ast.AstNode);
					public getRp(): number;
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class XmlElemRef extends org.mozilla.javascript.ast.XmlRef {
					public static class: java.lang.Class<org.mozilla.javascript.ast.XmlElemRef>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public setLb(param0: number): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getExpression(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<any>;
					public getRb(): number;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public getLb(): number;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public setBrackets(param0: number, param1: number): void;
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setExpression(param0: org.mozilla.javascript.ast.AstNode): void;
					public setRb(param0: number): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class XmlExpression extends org.mozilla.javascript.ast.XmlFragment {
					public static class: java.lang.Class<org.mozilla.javascript.ast.XmlExpression>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public getExpression(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<any>;
					public isXmlAttribute(): boolean;
					public setIsXmlAttribute(param0: boolean): void;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.ast.AstNode);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public setExpression(param0: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export abstract class XmlFragment extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.XmlFragment>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public spliterator(): java.util.Spliterator<any>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class XmlLiteral extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.XmlLiteral>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public getFragments(): java.util.List<org.mozilla.javascript.ast.XmlFragment>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public setFragments(param0: java.util.List<org.mozilla.javascript.ast.XmlFragment>): void;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public addFragment(param0: org.mozilla.javascript.ast.XmlFragment): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class XmlMemberGet extends org.mozilla.javascript.ast.InfixExpression {
					public static class: java.lang.Class<org.mozilla.javascript.ast.XmlMemberGet>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public getMemberRef(): org.mozilla.javascript.ast.XmlRef;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(param0: number, param1: org.mozilla.javascript.ast.AstNode, param2: org.mozilla.javascript.ast.AstNode, param3: number);
					public setTarget(param0: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: org.mozilla.javascript.ast.AstNode, param1: org.mozilla.javascript.ast.XmlRef);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public constructor(param0: number, param1: number, param2: org.mozilla.javascript.ast.AstNode, param3: org.mozilla.javascript.ast.XmlRef);
					public toSource(): string;
					public setProperty(param0: org.mozilla.javascript.ast.XmlRef): void;
					public constructor(param0: org.mozilla.javascript.ast.AstNode, param1: org.mozilla.javascript.ast.XmlRef, param2: number);
					public toSource(param0: number): string;
					public getTarget(): org.mozilla.javascript.ast.AstNode;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: number, param2: org.mozilla.javascript.ast.AstNode, param3: org.mozilla.javascript.ast.AstNode);
					public constructor(param0: org.mozilla.javascript.ast.AstNode, param1: org.mozilla.javascript.ast.AstNode);
					public forEach(param0: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class XmlPropRef extends org.mozilla.javascript.ast.XmlRef {
					public static class: java.lang.Class<org.mozilla.javascript.ast.XmlPropRef>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public setPropName(param0: org.mozilla.javascript.ast.Name): void;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public getPropName(): org.mozilla.javascript.ast.Name;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export abstract class XmlRef extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.XmlRef>;
					public namespace: org.mozilla.javascript.ast.Name;
					public atPos: number;
					public colonPos: number;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public getNamespace(): org.mozilla.javascript.ast.Name;
					public spliterator(): java.util.Spliterator<any>;
					public setNamespace(param0: org.mozilla.javascript.ast.Name): void;
					public setColonPos(param0: number): void;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public setAtPos(param0: number): void;
					public isAttributeAccess(): boolean;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public getAtPos(): number;
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public getColonPos(): number;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class XmlString extends org.mozilla.javascript.ast.XmlFragment {
					public static class: java.lang.Class<org.mozilla.javascript.ast.XmlString>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public getXml(): string;
					public constructor(param0: number, param1: string);
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public setXml(param0: string): void;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class Yield extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.Yield>;
					public constructor(param0: number, param1: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: number, param2: org.mozilla.javascript.ast.AstNode);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: number);
					public toSource(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public getValue(): org.mozilla.javascript.ast.AstNode;
					public setValue(param0: org.mozilla.javascript.ast.AstNode): void;
					public toSource(param0: number): string;
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: org.mozilla.javascript.Node, param3: org.mozilla.javascript.Node, param4: number);
					public constructor(param0: number, param1: org.mozilla.javascript.Node, param2: number);
					public forEach(param0: any /* any*/): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module commonjs {
				export module module {
					export class ModuleScope extends org.mozilla.javascript.TopLevel {
						public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.ModuleScope>;
						public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
						public getPrototype(): org.mozilla.javascript.Scriptable;
						public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
						public getIds(): any[];
						public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
						public getClassName(): string;
						public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
						public constructor(param0: org.mozilla.javascript.Scriptable, param1: java.net.URI, param2: java.net.URI);
						public getUri(): java.net.URI;
						public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
						public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
						public getParentScope(): org.mozilla.javascript.Scriptable;
						public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
						public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
						public getDefaultValue(param0: java.lang.Class<any>): any;
						public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
						public constructor();
						public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public get(param0: any): any;
						public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
						public delete(param0: number): void;
						public getAllIds(): any[];
						public delete(param0: string): void;
						public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
						public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public getBase(): java.net.URI;
						public delete(param0: org.mozilla.javascript.Symbol): void;
						public isConst(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module commonjs {
				export module module {
					export class ModuleScript extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.ModuleScript>;
						public constructor(param0: org.mozilla.javascript.Script, param1: java.net.URI, param2: java.net.URI);
						public getBase(): java.net.URI;
						public getScript(): org.mozilla.javascript.Script;
						public isSandboxed(): boolean;
						public getUri(): java.net.URI;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module commonjs {
				export module module {
					export class ModuleScriptProvider extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.ModuleScriptProvider>;
						/**
						 * Constructs a new instance of the org.mozilla.javascript.commonjs.module.ModuleScriptProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getModuleScript(param0: org.mozilla.javascript.Context, param1: string, param2: java.net.URI, param3: java.net.URI, param4: org.mozilla.javascript.Scriptable): org.mozilla.javascript.commonjs.module.ModuleScript;
						});
						public constructor();
						public getModuleScript(param0: org.mozilla.javascript.Context, param1: string, param2: java.net.URI, param3: java.net.URI, param4: org.mozilla.javascript.Scriptable): org.mozilla.javascript.commonjs.module.ModuleScript;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module commonjs {
				export module module {
					export class Require extends org.mozilla.javascript.BaseFunction {
						public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.Require>;
						public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
						public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
						public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
						public getPrototype(): org.mozilla.javascript.Scriptable;
						public requireMain(param0: org.mozilla.javascript.Context, param1: string): org.mozilla.javascript.Scriptable;
						public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public getLength(): number;
						public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
						public getIds(): any[];
						public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
						public getArity(): number;
						public getClassName(): string;
						public install(param0: org.mozilla.javascript.Scriptable): void;
						public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
						public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
						public getParentScope(): org.mozilla.javascript.Scriptable;
						public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
						public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
						public getDefaultValue(param0: java.lang.Class<any>): any;
						public getFunctionName(): string;
						public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
						public constructor();
						public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public get(param0: any): any;
						public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
						public delete(param0: number): void;
						public getAllIds(): any[];
						public delete(param0: string): void;
						public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
						public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public constructor(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.commonjs.module.ModuleScriptProvider, param3: org.mozilla.javascript.Script, param4: org.mozilla.javascript.Script, param5: boolean);
						public delete(param0: org.mozilla.javascript.Symbol): void;
						public isConst(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module commonjs {
				export module module {
					export class RequireBuilder extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.RequireBuilder>;
						public constructor();
						public setSandboxed(param0: boolean): org.mozilla.javascript.commonjs.module.RequireBuilder;
						public setModuleScriptProvider(param0: org.mozilla.javascript.commonjs.module.ModuleScriptProvider): org.mozilla.javascript.commonjs.module.RequireBuilder;
						public setPreExec(param0: org.mozilla.javascript.Script): org.mozilla.javascript.commonjs.module.RequireBuilder;
						public createRequire(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): org.mozilla.javascript.commonjs.module.Require;
						public setPostExec(param0: org.mozilla.javascript.Script): org.mozilla.javascript.commonjs.module.RequireBuilder;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module commonjs {
				export module module {
					export module provider {
						export abstract class CachingModuleScriptProviderBase extends java.lang.Object implements org.mozilla.javascript.commonjs.module.ModuleScriptProvider, java.io.Serializable {
							public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.CachingModuleScriptProviderBase>;
							public constructor(param0: org.mozilla.javascript.commonjs.module.provider.ModuleSourceProvider);
							public putLoadedModule(param0: string, param1: org.mozilla.javascript.commonjs.module.ModuleScript, param2: any): void;
							public getLoadedModule(param0: string): org.mozilla.javascript.commonjs.module.provider.CachingModuleScriptProviderBase.CachedModuleScript;
							public getModuleScript(param0: org.mozilla.javascript.Context, param1: string, param2: java.net.URI, param3: java.net.URI, param4: org.mozilla.javascript.Scriptable): org.mozilla.javascript.commonjs.module.ModuleScript;
							public static getConcurrencyLevel(): number;
						}
						export module CachingModuleScriptProviderBase {
							export class CachedModuleScript extends java.lang.Object {
								public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.CachingModuleScriptProviderBase.CachedModuleScript>;
								public constructor(param0: org.mozilla.javascript.commonjs.module.ModuleScript, param1: any);
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module commonjs {
				export module module {
					export module provider {
						export class DefaultUrlConnectionExpiryCalculator extends java.lang.Object implements org.mozilla.javascript.commonjs.module.provider.UrlConnectionExpiryCalculator, java.io.Serializable {
							public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.DefaultUrlConnectionExpiryCalculator>;
							public constructor();
							public calculateExpiry(param0: java.net.URLConnection): number;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module commonjs {
				export module module {
					export module provider {
						export class ModuleSource extends java.lang.Object implements java.io.Serializable {
							public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.ModuleSource>;
							public getSecurityDomain(): any;
							public getValidator(): any;
							public getBase(): java.net.URI;
							public getReader(): java.io.Reader;
							public constructor(param0: java.io.Reader, param1: any, param2: java.net.URI, param3: java.net.URI, param4: any);
							public getUri(): java.net.URI;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module commonjs {
				export module module {
					export module provider {
						export class ModuleSourceProvider extends java.lang.Object {
							public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.ModuleSourceProvider>;
							/**
							 * Constructs a new instance of the org.mozilla.javascript.commonjs.module.provider.ModuleSourceProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								loadSource(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
								loadSource(param0: java.net.URI, param1: java.net.URI, param2: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
								<clinit>(): void;
							});
							public constructor();
							public static NOT_MODIFIED: org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public loadSource(param0: java.net.URI, param1: java.net.URI, param2: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public loadSource(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module commonjs {
				export module module {
					export module provider {
						export abstract class ModuleSourceProviderBase extends java.lang.Object implements org.mozilla.javascript.commonjs.module.provider.ModuleSourceProvider, java.io.Serializable {
							public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.ModuleSourceProviderBase>;
							public constructor();
							public loadSource(param0: java.net.URI, param1: java.net.URI, param2: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public loadFromFallbackLocations(param0: string, param1: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public entityNeedsRevalidation(param0: any): boolean;
							public loadFromUri(param0: java.net.URI, param1: java.net.URI, param2: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public loadSource(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public loadFromPrivilegedLocations(param0: string, param1: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module commonjs {
				export module module {
					export module provider {
						export class MultiModuleScriptProvider extends java.lang.Object implements org.mozilla.javascript.commonjs.module.ModuleScriptProvider {
							public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.MultiModuleScriptProvider>;
							public constructor(param0: java.lang.Iterable<any>);
							public getModuleScript(param0: org.mozilla.javascript.Context, param1: string, param2: java.net.URI, param3: java.net.URI, param4: org.mozilla.javascript.Scriptable): org.mozilla.javascript.commonjs.module.ModuleScript;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module commonjs {
				export module module {
					export module provider {
						export class ParsedContentType extends java.lang.Object implements java.io.Serializable {
							public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.ParsedContentType>;
							public constructor(param0: string);
							public getContentType(): string;
							public getEncoding(): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module commonjs {
				export module module {
					export module provider {
						export class SoftCachingModuleScriptProvider extends org.mozilla.javascript.commonjs.module.provider.CachingModuleScriptProviderBase {
							public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.SoftCachingModuleScriptProvider>;
							public constructor(param0: org.mozilla.javascript.commonjs.module.provider.ModuleSourceProvider);
							public getLoadedModule(param0: string): org.mozilla.javascript.commonjs.module.provider.CachingModuleScriptProviderBase.CachedModuleScript;
							public putLoadedModule(param0: string, param1: org.mozilla.javascript.commonjs.module.ModuleScript, param2: any): void;
							public getModuleScript(param0: org.mozilla.javascript.Context, param1: string, param2: java.net.URI, param3: java.net.URI, param4: org.mozilla.javascript.Scriptable): org.mozilla.javascript.commonjs.module.ModuleScript;
						}
						export module SoftCachingModuleScriptProvider {
							export class ScriptReference extends java.lang.ref.SoftReference<org.mozilla.javascript.Script> {
								public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.SoftCachingModuleScriptProvider.ScriptReference>;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module commonjs {
				export module module {
					export module provider {
						export class StrongCachingModuleScriptProvider extends org.mozilla.javascript.commonjs.module.provider.CachingModuleScriptProviderBase {
							public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.StrongCachingModuleScriptProvider>;
							public constructor(param0: org.mozilla.javascript.commonjs.module.provider.ModuleSourceProvider);
							public getLoadedModule(param0: string): org.mozilla.javascript.commonjs.module.provider.CachingModuleScriptProviderBase.CachedModuleScript;
							public putLoadedModule(param0: string, param1: org.mozilla.javascript.commonjs.module.ModuleScript, param2: any): void;
							public getModuleScript(param0: org.mozilla.javascript.Context, param1: string, param2: java.net.URI, param3: java.net.URI, param4: org.mozilla.javascript.Scriptable): org.mozilla.javascript.commonjs.module.ModuleScript;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module commonjs {
				export module module {
					export module provider {
						export class UrlConnectionExpiryCalculator extends java.lang.Object {
							public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.UrlConnectionExpiryCalculator>;
							/**
							 * Constructs a new instance of the org.mozilla.javascript.commonjs.module.provider.UrlConnectionExpiryCalculator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								calculateExpiry(param0: java.net.URLConnection): number;
							});
							public constructor();
							public calculateExpiry(param0: java.net.URLConnection): number;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module commonjs {
				export module module {
					export module provider {
						export class UrlConnectionSecurityDomainProvider extends java.lang.Object {
							public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.UrlConnectionSecurityDomainProvider>;
							/**
							 * Constructs a new instance of the org.mozilla.javascript.commonjs.module.provider.UrlConnectionSecurityDomainProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getSecurityDomain(param0: java.net.URLConnection): any;
							});
							public constructor();
							public getSecurityDomain(param0: java.net.URLConnection): any;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module commonjs {
				export module module {
					export module provider {
						export class UrlModuleSourceProvider extends org.mozilla.javascript.commonjs.module.provider.ModuleSourceProviderBase {
							public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.UrlModuleSourceProvider>;
							public constructor();
							public loadFromFallbackLocations(param0: string, param1: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public loadSource(param0: java.net.URI, param1: java.net.URI, param2: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public entityNeedsRevalidation(param0: any): boolean;
							public constructor(param0: java.lang.Iterable<java.net.URI>, param1: java.lang.Iterable<java.net.URI>);
							public loadFromUri(param0: java.net.URI, param1: java.net.URI, param2: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public onFailedClosingUrlConnection(param0: java.net.URLConnection, param1: java.io.IOException): void;
							public constructor(param0: java.lang.Iterable<java.net.URI>, param1: java.lang.Iterable<java.net.URI>, param2: org.mozilla.javascript.commonjs.module.provider.UrlConnectionExpiryCalculator, param3: org.mozilla.javascript.commonjs.module.provider.UrlConnectionSecurityDomainProvider);
							public loadSource(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public loadFromPrivilegedLocations(param0: string, param1: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public openUrlConnection(param0: java.net.URL): java.net.URLConnection;
							public loadFromActualUri(param0: java.net.URI, param1: java.net.URI, param2: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
						}
						export module UrlModuleSourceProvider {
							export class URLValidator extends java.lang.Object implements java.io.Serializable {
								public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.UrlModuleSourceProvider.URLValidator>;
								public constructor(param0: java.net.URI, param1: java.net.URLConnection, param2: number, param3: org.mozilla.javascript.commonjs.module.provider.UrlConnectionExpiryCalculator);
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module debug {
				export class DebugFrame extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.debug.DebugFrame>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.debug.DebugFrame interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onEnter(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): void;
						onLineChange(param0: org.mozilla.javascript.Context, param1: number): void;
						onExceptionThrown(param0: org.mozilla.javascript.Context, param1: java.lang.Throwable): void;
						onExit(param0: org.mozilla.javascript.Context, param1: boolean, param2: any): void;
						onDebuggerStatement(param0: org.mozilla.javascript.Context): void;
					});
					public constructor();
					public onExceptionThrown(param0: org.mozilla.javascript.Context, param1: java.lang.Throwable): void;
					public onDebuggerStatement(param0: org.mozilla.javascript.Context): void;
					public onEnter(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): void;
					public onLineChange(param0: org.mozilla.javascript.Context, param1: number): void;
					public onExit(param0: org.mozilla.javascript.Context, param1: boolean, param2: any): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module debug {
				export class DebuggableObject extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.debug.DebuggableObject>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.debug.DebuggableObject interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAllIds(): any[];
					});
					public constructor();
					public getAllIds(): any[];
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module debug {
				export class DebuggableScript extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.debug.DebuggableScript>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.debug.DebuggableScript interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isTopLevel(): boolean;
						isFunction(): boolean;
						getFunctionName(): string;
						getParamCount(): number;
						getParamAndVarCount(): number;
						getParamOrVarName(param0: number): string;
						getSourceName(): string;
						isGeneratedScript(): boolean;
						getLineNumbers(): number[];
						getFunctionCount(): number;
						getFunction(param0: number): org.mozilla.javascript.debug.DebuggableScript;
						getParent(): org.mozilla.javascript.debug.DebuggableScript;
					});
					public constructor();
					public getParamOrVarName(param0: number): string;
					public isFunction(): boolean;
					public getFunctionCount(): number;
					public isGeneratedScript(): boolean;
					public getParamAndVarCount(): number;
					public getParent(): org.mozilla.javascript.debug.DebuggableScript;
					public getLineNumbers(): number[];
					public getFunction(param0: number): org.mozilla.javascript.debug.DebuggableScript;
					public getFunctionName(): string;
					public getParamCount(): number;
					public getSourceName(): string;
					public isTopLevel(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module debug {
				export class Debugger extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.debug.Debugger>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.debug.Debugger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						handleCompilationDone(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.debug.DebuggableScript, param2: string): void;
						getFrame(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.debug.DebuggableScript): org.mozilla.javascript.debug.DebugFrame;
					});
					public constructor();
					public getFrame(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.debug.DebuggableScript): org.mozilla.javascript.debug.DebugFrame;
					public handleCompilationDone(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.debug.DebuggableScript, param2: string): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module jdk13 {
				export class VMBridge_jdk13 extends org.mozilla.javascript.VMBridge {
					public static class: java.lang.Class<org.mozilla.javascript.jdk13.VMBridge_jdk13>;
					public tryToMakeAccessible(param0: any): boolean;
					public newInterfaceProxy(param0: any, param1: org.mozilla.javascript.ContextFactory, param2: org.mozilla.javascript.InterfaceAdapter, param3: any, param4: org.mozilla.javascript.Scriptable): any;
					public getThreadContextHelper(): any;
					public isVarArgs(param0: java.lang.reflect.Member): boolean;
					public getCurrentThreadClassLoader(): java.lang.ClassLoader;
					public constructor();
					public getContext(param0: any): org.mozilla.javascript.Context;
					public setContext(param0: any, param1: org.mozilla.javascript.Context): void;
					public getInterfaceProxyHelper(param0: org.mozilla.javascript.ContextFactory, param1: Array<java.lang.Class<any>>): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module jdk15 {
				export class VMBridge_jdk15 extends org.mozilla.javascript.jdk13.VMBridge_jdk13 {
					public static class: java.lang.Class<org.mozilla.javascript.jdk15.VMBridge_jdk15>;
					public isVarArgs(param0: java.lang.reflect.Member): boolean;
					public getJavaIterator(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any): java.util.Iterator<any>;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module json {
				export class JsonParser extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.json.JsonParser>;
					public constructor(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable);
					public parseValue(param0: string): any;
				}
				export module JsonParser {
					export class ParseException extends java.lang.Exception {
						public static class: java.lang.Class<org.mozilla.javascript.json.JsonParser.ParseException>;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module optimizer {
				export class Block extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.optimizer.Block>;
				}
				export module Block {
					export class FatBlock extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.optimizer.Block.FatBlock>;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module optimizer {
				export class BodyCodegen extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.optimizer.BodyCodegen>;
					public scriptOrFnIndex: number;
				}
				export module BodyCodegen {
					export class ExceptionManager extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.optimizer.BodyCodegen.ExceptionManager>;
					}
					export module ExceptionManager {
						export class ExceptionInfo extends java.lang.Object {
							public static class: java.lang.Class<org.mozilla.javascript.optimizer.BodyCodegen.ExceptionManager.ExceptionInfo>;
						}
					}
					export class FinallyReturnPoint extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.optimizer.BodyCodegen.FinallyReturnPoint>;
						public jsrPoints: java.util.List<java.lang.Integer>;
						public tableLabel: number;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module optimizer {
				export class ClassCompiler extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.optimizer.ClassCompiler>;
					public constructor(param0: org.mozilla.javascript.CompilerEnvirons);
					public setMainMethodClass(param0: string): void;
					public getMainMethodClass(): string;
					public getTargetImplements(): Array<java.lang.Class<any>>;
					public setTargetExtends(param0: java.lang.Class<any>): void;
					public getTargetExtends(): java.lang.Class<any>;
					public makeAuxiliaryClassName(param0: string, param1: string): string;
					public compileToClassFiles(param0: string, param1: string, param2: number, param3: string): any[];
					public setTargetImplements(param0: Array<java.lang.Class<any>>): void;
					public getCompilerEnv(): org.mozilla.javascript.CompilerEnvirons;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module optimizer {
				export class Codegen extends java.lang.Object implements org.mozilla.javascript.Evaluator {
					public static class: java.lang.Class<org.mozilla.javascript.optimizer.Codegen>;
					public compileToClassFile(param0: org.mozilla.javascript.CompilerEnvirons, param1: string, param2: org.mozilla.javascript.ast.ScriptNode, param3: string, param4: boolean): number[];
					public setEvalScriptFlag(param0: org.mozilla.javascript.Script): void;
					public setMainMethodClass(param0: string): void;
					public getSourcePositionFromStack(param0: org.mozilla.javascript.Context, param1: number[]): string;
					public createScriptObject(param0: any, param1: any): org.mozilla.javascript.Script;
					public constructor();
					public getScriptStack(param0: org.mozilla.javascript.RhinoException): java.util.List<string>;
					public captureStackInfo(param0: org.mozilla.javascript.RhinoException): void;
					public getPatchedStack(param0: org.mozilla.javascript.RhinoException, param1: string): string;
					public compile(param0: org.mozilla.javascript.CompilerEnvirons, param1: org.mozilla.javascript.ast.ScriptNode, param2: string, param3: boolean): any;
					public createFunctionObject(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any, param3: any): org.mozilla.javascript.Function;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module optimizer {
				export class OptFunctionNode extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.optimizer.OptFunctionNode>;
					public fnode: org.mozilla.javascript.ast.FunctionNode;
					public getParameterNumberContext(): boolean;
					public isTargetOfDirectCall(): boolean;
					public getVarIndex(param0: org.mozilla.javascript.Node): number;
					public static get(param0: org.mozilla.javascript.ast.ScriptNode, param1: number): org.mozilla.javascript.optimizer.OptFunctionNode;
					public getVarCount(): number;
					public isNumberVar(param0: number): boolean;
					public static get(param0: org.mozilla.javascript.ast.ScriptNode): org.mozilla.javascript.optimizer.OptFunctionNode;
					public getDirectTargetIndex(): number;
					public isParameter(param0: number): boolean;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module optimizer {
				export class OptRuntime extends org.mozilla.javascript.ScriptRuntime {
					public static class: java.lang.Class<org.mozilla.javascript.optimizer.OptRuntime>;
					public static zeroObj: java.lang.Double;
					public static oneObj: java.lang.Double;
					public static minusOneObj: java.lang.Double;
					public static initFunction(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.NativeFunction, param3: number, param4: boolean): void;
					public static callName0(param0: string, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable): any;
					public static callN(param0: org.mozilla.javascript.Callable, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Context, param4: org.mozilla.javascript.Scriptable): any;
					public static callName(param0: any[], param1: string, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable): any;
					public static initFunction(param0: org.mozilla.javascript.NativeFunction, param1: number, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Context): void;
					public static call2(param0: org.mozilla.javascript.Callable, param1: org.mozilla.javascript.Scriptable, param2: any, param3: any, param4: org.mozilla.javascript.Context, param5: org.mozilla.javascript.Scriptable): any;
					/** @deprecated */
					public static elemIncrDecr(param0: any, param1: any, param2: org.mozilla.javascript.Context, param3: number): any;
					/** @deprecated */
					public static elemIncrDecr(param0: any, param1: number, param2: org.mozilla.javascript.Context, param3: number): any;
					public static throwStopIteration(param0: any): void;
					public constructor();
					public static add(param0: any, param1: any, param2: org.mozilla.javascript.Context): any;
					public static elemIncrDecr(param0: any, param1: number, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable, param4: number): any;
					public static newArrayLiteral(param0: any[], param1: string, param2: number, param3: org.mozilla.javascript.Context, param4: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
					public static add(param0: number, param1: any): any;
					public static elemIncrDecr(param0: any, param1: any, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable, param4: number): any;
					public static getGeneratorStackState(param0: any): any[];
					public static callSpecial(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Callable, param2: org.mozilla.javascript.Scriptable, param3: any[], param4: org.mozilla.javascript.Scriptable, param5: org.mozilla.javascript.Scriptable, param6: number, param7: string, param8: number): any;
					public static getGeneratorLocalsState(param0: any): any[];
					public static add(param0: string, param1: any): string;
					public static add(param0: any, param1: string): string;
					public static call1(param0: org.mozilla.javascript.Callable, param1: org.mozilla.javascript.Scriptable, param2: any, param3: org.mozilla.javascript.Context, param4: org.mozilla.javascript.Scriptable): any;
					public static add(param0: any, param1: number): any;
					public static callProp0(param0: any, param1: string, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable): any;
					public static newArrayLiteral(param0: any[], param1: number[], param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
					public static newObjectSpecial(param0: org.mozilla.javascript.Context, param1: any, param2: any[], param3: org.mozilla.javascript.Scriptable, param4: org.mozilla.javascript.Scriptable, param5: number): any;
					public static wrapDouble(param0: number): java.lang.Double;
					public static bindThis(param0: org.mozilla.javascript.NativeFunction, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Function;
					public static main(param0: org.mozilla.javascript.Script, param1: string[]): void;
					public static padStart(param0: any[], param1: number): any[];
					public static createNativeGenerator(param0: org.mozilla.javascript.NativeFunction, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: number, param4: number): org.mozilla.javascript.Scriptable;
					public static call0(param0: org.mozilla.javascript.Callable, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Context, param3: org.mozilla.javascript.Scriptable): any;
				}
				export module OptRuntime {
					export class GeneratorState extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.optimizer.OptRuntime.GeneratorState>;
						public resumptionPoint: number;
						public thisObj: org.mozilla.javascript.Scriptable;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module optimizer {
				export class OptTransformer extends org.mozilla.javascript.NodeTransformer {
					public static class: java.lang.Class<org.mozilla.javascript.optimizer.OptTransformer>;
					public visitNew(param0: org.mozilla.javascript.Node, param1: org.mozilla.javascript.ast.ScriptNode): void;
					public visitCall(param0: org.mozilla.javascript.Node, param1: org.mozilla.javascript.ast.ScriptNode): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module optimizer {
				export class Optimizer extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.optimizer.Optimizer>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module regexp {
				export class CompilerState extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.regexp.CompilerState>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module regexp {
				export class GlobData extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.regexp.GlobData>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module regexp {
				export class NativeRegExp extends org.mozilla.javascript.IdScriptableObject implements org.mozilla.javascript.Function {
					public static class: java.lang.Class<org.mozilla.javascript.regexp.NativeRegExp>;
					public static JSREG_GLOB: number;
					public static JSREG_FOLD: number;
					public static JSREG_MULTILINE: number;
					public static TEST: number;
					public static MATCH: number;
					public static PREFIX: number;
					public getMaxInstanceId(): number;
					public findPrototypeId(param0: string): number;
					public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public setInstanceIdAttributes(param0: number, param1: number): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public getInstanceIdName(param0: number): string;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public toString(): string;
					public getClassName(): string;
					public delete(param0: number): void;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getInstanceIdValue(param0: number): any;
					public getAllIds(): any[];
					public delete(param0: string): void;
					public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
					public getTypeOf(): string;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public initPrototypeId(param0: number): void;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
					public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public setInstanceIdValue(param0: number, param1: any): void;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public findInstanceIdInfo(param0: string): number;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public findInstanceIdInfo(param0: org.mozilla.javascript.Symbol): number;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module regexp {
				export class NativeRegExpCtor extends org.mozilla.javascript.BaseFunction {
					public static class: java.lang.Class<org.mozilla.javascript.regexp.NativeRegExpCtor>;
					public getMaxInstanceId(): number;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public getLength(): number;
					public setInstanceIdAttributes(param0: number, param1: number): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public getInstanceIdName(param0: number): string;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public delete(param0: number): void;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getInstanceIdValue(param0: number): any;
					public getAllIds(): any[];
					public delete(param0: string): void;
					public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public isConst(param0: string): boolean;
					public getArity(): number;
					public getIds(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
					public getFunctionName(): string;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public setInstanceIdValue(param0: number, param1: any): void;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public findInstanceIdInfo(param0: string): number;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public findInstanceIdInfo(param0: org.mozilla.javascript.Symbol): number;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module regexp {
				export class REBackTrackData extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.regexp.REBackTrackData>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module regexp {
				export class RECharSet extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.mozilla.javascript.regexp.RECharSet>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module regexp {
				export class RECompiled extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.mozilla.javascript.regexp.RECompiled>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module regexp {
				export class REGlobalData extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.regexp.REGlobalData>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module regexp {
				export class RENode extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.regexp.RENode>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module regexp {
				export class REProgState extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.regexp.REProgState>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module regexp {
				export class RegExpImpl extends java.lang.Object implements org.mozilla.javascript.RegExpProxy {
					public static class: java.lang.Class<org.mozilla.javascript.regexp.RegExpImpl>;
					public input: string;
					public multiline: boolean;
					public parens: Array<org.mozilla.javascript.regexp.SubString>;
					public lastMatch: org.mozilla.javascript.regexp.SubString;
					public lastParen: org.mozilla.javascript.regexp.SubString;
					public leftContext: org.mozilla.javascript.regexp.SubString;
					public rightContext: org.mozilla.javascript.regexp.SubString;
					public wrapRegExp(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any): org.mozilla.javascript.Scriptable;
					public js_split(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string, param3: any[]): any;
					public constructor();
					public find_split(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string, param3: string, param4: org.mozilla.javascript.Scriptable, param5: number[], param6: number[], param7: boolean[], param8: Array<string[]>): number;
					public isRegExp(param0: org.mozilla.javascript.Scriptable): boolean;
					public compileRegExp(param0: org.mozilla.javascript.Context, param1: string, param2: string): any;
					public action(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[], param4: number): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module regexp {
				export class SubString extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.regexp.SubString>;
					public static emptySubString: org.mozilla.javascript.regexp.SubString;
					public toString(): string;
					public constructor(param0: string);
					public constructor();
					public constructor(param0: string, param1: number, param2: number);
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module serialize {
				export class ScriptableInputStream extends java.io.ObjectInputStream {
					public static class: java.lang.Class<org.mozilla.javascript.serialize.ScriptableInputStream>;
					public resolveObject(param0: any): any;
					public available(): number;
					public constructor(param0: java.io.InputStream, param1: org.mozilla.javascript.Scriptable);
					public read(): number;
					public read(param0: number[], param1: number, param2: number): number;
					public constructor(param0: java.io.InputStream);
					public constructor();
					public readObject(): any;
					public read(param0: number[]): number;
					public close(): void;
					public skip(param0: number): number;
					public resolveClass(param0: java.io.ObjectStreamClass): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module serialize {
				export class ScriptableOutputStream extends java.io.ObjectOutputStream {
					public static class: java.lang.Class<org.mozilla.javascript.serialize.ScriptableOutputStream>;
					public constructor(param0: java.io.OutputStream);
					public hasExcludedName(param0: string): boolean;
					public write(param0: number[]): void;
					public writeObject(param0: any): void;
					public write(param0: number): void;
					public flush(): void;
					public replaceObject(param0: any): any;
					public addExcludedName(param0: string): void;
					public write(param0: number[], param1: number, param2: number): void;
					public constructor();
					public excludeAllIds(param0: any[]): void;
					public close(): void;
					public addOptionalExcludedName(param0: string): void;
					public removeExcludedName(param0: string): void;
					public constructor(param0: java.io.OutputStream, param1: org.mozilla.javascript.Scriptable);
					public excludeStandardObjectNames(): void;
				}
				export module ScriptableOutputStream {
					export class PendingLookup extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<org.mozilla.javascript.serialize.ScriptableOutputStream.PendingLookup>;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export class SourceReader extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.tools.SourceReader>;
					public constructor();
					public static readFileOrUrl(param0: string, param1: boolean, param2: string): any;
					public static toUrl(param0: string): java.net.URL;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export class ToolErrorReporter extends java.lang.Object implements org.mozilla.javascript.ErrorReporter {
					public static class: java.lang.Class<org.mozilla.javascript.tools.ToolErrorReporter>;
					public isReportingWarnings(): boolean;
					public static getMessage(param0: string, param1: any[]): string;
					public static getMessage(param0: string, param1: string): string;
					public error(param0: string, param1: string, param2: number, param3: string, param4: number): void;
					public static getMessage(param0: string, param1: any, param2: any): string;
					public warning(param0: string, param1: string, param2: number, param3: string, param4: number): void;
					public static getMessage(param0: string): string;
					public hasReportedError(): boolean;
					public constructor(param0: boolean, param1: java.io.PrintStream);
					public reportException(param0: org.mozilla.javascript.RhinoException): void;
					public constructor(param0: boolean);
					public setIsReportingWarnings(param0: boolean): void;
					public static reportException(param0: org.mozilla.javascript.ErrorReporter, param1: org.mozilla.javascript.RhinoException): void;
					public runtimeError(param0: string, param1: string, param2: number, param3: string, param4: number): org.mozilla.javascript.EvaluatorException;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module idswitch {
					export class CodePrinter extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.tools.idswitch.CodePrinter>;
						public p(param0: string[], param1: number, param2: number): void;
						public p(param0: string[]): void;
						public getLineTerminator(): string;
						public getLastChar(): number;
						public qstring(param0: string): void;
						public getIndentStep(): number;
						public line(param0: number, param1: string): void;
						public erase(param0: number, param1: number): void;
						public qchar(param0: number): void;
						public toString(): string;
						public getIndentTabSize(): number;
						public setIndentStep(param0: number): void;
						public setIndentTabSize(param0: number): void;
						public getOffset(): number;
						public nl(): void;
						public setLineTerminator(param0: string): void;
						public p(param0: number): void;
						public clear(): void;
						public p(param0: string): void;
						public indent(param0: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module idswitch {
					export class FileBody extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.tools.idswitch.FileBody>;
						public getBuffer(): string[];
						public constructor();
						public writeData(param0: java.io.Writer): void;
						public startLineLoop(): void;
						public getLineNumber(): number;
						public nextLine(): boolean;
						public getLineBegin(): number;
						public getLineEnd(): number;
						public setReplacement(param0: number, param1: number, param2: string): boolean;
						public readData(param0: java.io.Reader): void;
						public writeInitialData(param0: java.io.Writer): void;
						public wasModified(): boolean;
					}
					export module FileBody {
						export class ReplaceItem extends java.lang.Object {
							public static class: java.lang.Class<org.mozilla.javascript.tools.idswitch.FileBody.ReplaceItem>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module idswitch {
					export class IdValuePair extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.tools.idswitch.IdValuePair>;
						public idLength: number;
						public id: string;
						public value: string;
						public getLineNumber(): number;
						public setLineNumber(param0: number): void;
						public constructor(param0: string, param1: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module idswitch {
					export class Main extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.tools.idswitch.Main>;
						public constructor();
						public static main(param0: string[]): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module idswitch {
					export class SwitchGenerator extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.tools.idswitch.SwitchGenerator>;
						public constructor();
						public getCodePrinter(): org.mozilla.javascript.tools.idswitch.CodePrinter;
						public generateSwitch(param0: Array<org.mozilla.javascript.tools.idswitch.IdValuePair>, param1: string): void;
						public setReporter(param0: org.mozilla.javascript.tools.ToolErrorReporter): void;
						public setSourceFileName(param0: string): void;
						public getSourceFileName(): string;
						public setCodePrinter(param0: org.mozilla.javascript.tools.idswitch.CodePrinter): void;
						public getReporter(): org.mozilla.javascript.tools.ToolErrorReporter;
						public generateSwitch(param0: string[], param1: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module jsc {
					export class Main extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.tools.jsc.Main>;
						public constructor();
						public processOptions(param0: string[]): string[];
						public processSource(param0: string[]): void;
						public static main(param0: string[]): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module shell {
					export class ConsoleTextArea extends javax.swing.JTextArea implements java.awt.event.KeyListener, javax.swing.event.DocumentListener {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.ConsoleTextArea>;
						public keyTyped(param0: java.awt.event.KeyEvent): void;
						public keyReleased(param0: java.awt.event.KeyEvent): void;
						public constructor(param0: javax.swing.text.Document, param1: string, param2: number, param3: number);
						public changedUpdate(param0: javax.swing.event.DocumentEvent): void;
						public eval(param0: string): void;
						public imageUpdate(param0: java.awt.Image, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
						public getScrollableTracksViewportHeight(): boolean;
						public constructor(param0: javax.swing.text.Document);
						public getPreferredScrollableViewportSize(): java.awt.Dimension;
						public insertUpdate(param0: javax.swing.event.DocumentEvent): void;
						public getIn(): java.io.InputStream;
						public constructor(param0: string, param1: number, param2: number);
						public getAccessibleContext(): javax.accessibility.AccessibleContext;
						public getErr(): java.io.PrintStream;
						public constructor(param0: number, param1: number);
						public remove(param0: number): void;
						public postUpdateUI(): void;
						public select(param0: number, param1: number): void;
						public constructor();
						public getScrollableUnitIncrement(param0: java.awt.Rectangle, param1: number, param2: number): number;
						public getOut(): java.io.PrintStream;
						public getScrollableTracksViewportWidth(): boolean;
						public constructor(param0: string[]);
						public keyPressed(param0: java.awt.event.KeyEvent): void;
						public write(param0: string): void;
						public getScrollableBlockIncrement(param0: java.awt.Rectangle, param1: number, param2: number): number;
						public remove(param0: java.awt.Component): void;
						/** @deprecated */
						public postEvent(param0: java.awt.Event): boolean;
						public remove(param0: java.awt.MenuComponent): void;
						public write(param0: java.io.Writer): void;
						public getFont(): java.awt.Font;
						public getTransferHandler(): javax.swing.TransferHandler;
						public removeUpdate(param0: javax.swing.event.DocumentEvent): void;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module shell {
					export class ConsoleWrite extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.ConsoleWrite>;
						public constructor(param0: org.mozilla.javascript.tools.shell.ConsoleTextArea, param1: string);
						public run(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module shell {
					export class ConsoleWriter extends java.io.OutputStream {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.ConsoleWriter>;
						public constructor();
						public close(): void;
						public write(param0: number): void;
						public write(param0: number[], param1: number, param2: number): void;
						public flush(): void;
						public write(param0: number[]): void;
						public constructor(param0: org.mozilla.javascript.tools.shell.ConsoleTextArea);
						public write(param0: string[], param1: number, param2: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module shell {
					export class Environment extends org.mozilla.javascript.ScriptableObject {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.Environment>;
						public static defineClass(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): void;
						public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public getPrototype(): org.mozilla.javascript.Scriptable;
						public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
						public static defineClass(param0: org.mozilla.javascript.ScriptableObject): void;
						public getIds(): any[];
						public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
						public getClassName(): string;
						public static defineClass(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>, param2: boolean, param3: boolean): string;
						public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
						public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
						public getParentScope(): org.mozilla.javascript.Scriptable;
						public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
						public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
						public getDefaultValue(param0: java.lang.Class<any>): any;
						public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
						public constructor();
						public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public get(param0: any): any;
						public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
						public static defineClass(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>, param2: boolean): void;
						public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
						public delete(param0: number): void;
						public getAllIds(): any[];
						public delete(param0: string): void;
						public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
						public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public delete(param0: org.mozilla.javascript.Symbol): void;
						public constructor(param0: org.mozilla.javascript.ScriptableObject);
						public isConst(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module shell {
					export class FlexibleCompletor extends java.lang.Object implements java.lang.reflect.InvocationHandler {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.FlexibleCompletor>;
						public complete(param0: string, param1: number, param2: java.util.List<string>): number;
						public invoke(param0: any, param1: java.lang.reflect.Method, param2: any[]): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module shell {
					export class Global extends org.mozilla.javascript.ImporterTopLevel {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.Global>;
						public installRequire(param0: org.mozilla.javascript.Context, param1: java.util.List<string>, param2: boolean): org.mozilla.javascript.commonjs.module.Require;
						public static doctest(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): any;
						public getPrototype(): org.mozilla.javascript.Scriptable;
						public static spawn(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): any;
						public getIds(): any[];
						public static gc(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): void;
						public setErr(param0: java.io.PrintStream): void;
						public static seal(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): void;
						public isInitialized(): boolean;
						public static readUrl(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): any;
						public setOut(param0: java.io.PrintStream): void;
						public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
						public getParentScope(): org.mozilla.javascript.Scriptable;
						public getIn(): java.io.InputStream;
						public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
						public static runCommand(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): any;
						public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
						public constructor();
						public getOut(): java.io.PrintStream;
						public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
						public delete(param0: number): void;
						public init(param0: org.mozilla.javascript.Context): void;
						public static write(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): any;
						public delete(param0: string): void;
						public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
						public static quit(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): void;
						public static load(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): void;
						public setSealedStdLib(param0: boolean): void;
						public runDoctest(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string, param3: string, param4: number): number;
						public delete(param0: org.mozilla.javascript.Symbol): void;
						public static defineClass(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): void;
						public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public static print(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): any;
						public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
						public static sync(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): any;
						public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
						public static toint32(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): any;
						public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
						public getClassName(): string;
						public static defineClass(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>, param2: boolean, param3: boolean): string;
						public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
						public init(param0: org.mozilla.javascript.ContextFactory): void;
						public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
						public static readFile(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): any;
						public static readline(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): any;
						public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
						public initQuitAction(param0: org.mozilla.javascript.tools.shell.QuitAction): void;
						public getDefaultValue(param0: java.lang.Class<any>): any;
						public getErr(): java.io.PrintStream;
						public constructor(param0: org.mozilla.javascript.Context, param1: boolean);
						public getPrompts(param0: org.mozilla.javascript.Context): string[];
						public setIn(param0: java.io.InputStream): void;
						public static help(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): void;
						public static version(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): number;
						public get(param0: any): any;
						public static defineClass(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>, param2: boolean): void;
						public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
						public constructor(param0: org.mozilla.javascript.Context);
						public getAllIds(): any[];
						public static serialize(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): void;
						public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public static loadClass(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): void;
						public static deserialize(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): any;
						public isConst(param0: string): boolean;
						public getConsole(param0: java.nio.charset.Charset): org.mozilla.javascript.tools.shell.ShellConsole;
						public static defineClass(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[], param3: org.mozilla.javascript.Function): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module shell {
					export class JSConsole extends javax.swing.JFrame implements java.awt.event.ActionListener {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.JSConsole>;
						public constructor(param0: java.awt.Frame);
						public actionPerformed(param0: java.awt.event.ActionEvent): void;
						public constructor(param0: string, param1: java.awt.GraphicsConfiguration);
						public imageUpdate(param0: java.awt.Image, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
						public constructor(param0: java.awt.Window);
						public getAccessibleContext(): javax.accessibility.AccessibleContext;
						public constructor(param0: java.awt.Window, param1: java.awt.GraphicsConfiguration);
						public chooseFile(): string;
						public remove(param0: number): void;
						public static main(param0: string[]): void;
						public getGlassPane(): java.awt.Component;
						public getContentPane(): java.awt.Container;
						public constructor();
						public setLayeredPane(param0: javax.swing.JLayeredPane): void;
						public getLayeredPane(): javax.swing.JLayeredPane;
						public constructor(param0: string[]);
						public setGlassPane(param0: java.awt.Component): void;
						public constructor(param0: java.awt.GraphicsConfiguration);
						public createFileChooser(): void;
						public remove(param0: java.awt.Component): void;
						/** @deprecated */
						public postEvent(param0: java.awt.Event): boolean;
						public getRootPane(): javax.swing.JRootPane;
						public remove(param0: java.awt.MenuComponent): void;
						public setContentPane(param0: java.awt.Container): void;
						public getFont(): java.awt.Font;
						public getTransferHandler(): javax.swing.TransferHandler;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module shell {
					export class JavaPolicySecurity extends org.mozilla.javascript.tools.shell.SecurityProxy {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.JavaPolicySecurity>;
						public createClassLoader(param0: java.lang.ClassLoader, param1: any): org.mozilla.javascript.GeneratedClassLoader;
						public callWithDomain(param0: any, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Callable, param3: org.mozilla.javascript.Scriptable, param4: org.mozilla.javascript.Scriptable, param5: any[]): any;
						public constructor();
						public callProcessFileSecure(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string): void;
						public getStaticSecurityDomainClassInternal(): java.lang.Class<any>;
						public getDynamicSecurityDomain(param0: any): any;
					}
					export module JavaPolicySecurity {
						export class ContextPermissions extends java.security.PermissionCollection {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.JavaPolicySecurity.ContextPermissions>;
							public add(param0: java.security.Permission): void;
							public elements(): java.util.Enumeration<java.security.Permission>;
							public implies(param0: java.security.Permission): boolean;
							public toString(): string;
						}
						export class Loader extends java.lang.ClassLoader implements org.mozilla.javascript.GeneratedClassLoader {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.JavaPolicySecurity.Loader>;
							public defineClass(param0: string, param1: java.nio.ByteBuffer, param2: java.security.ProtectionDomain): java.lang.Class<any>;
							/** @deprecated */
							public defineClass(param0: number[], param1: number, param2: number): java.lang.Class<any>;
							public defineClass(param0: string, param1: number[], param2: number, param3: number): java.lang.Class<any>;
							public defineClass(param0: string, param1: number[]): java.lang.Class<any>;
							public defineClass(param0: string, param1: number[], param2: number, param3: number, param4: java.security.ProtectionDomain): java.lang.Class<any>;
							public linkClass(param0: java.lang.Class<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module shell {
					export class Main extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.Main>;
						public static shellContextFactory: org.mozilla.javascript.tools.shell.ShellContextFactory;
						public static global: org.mozilla.javascript.tools.shell.Global;
						public static errorReporter: org.mozilla.javascript.tools.ToolErrorReporter;
						public static exitCode: number;
						public static processFileNoThrow(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string): void;
						public static setOut(param0: java.io.PrintStream): void;
						public constructor();
						public static processFile(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string): void;
						public static exec(param0: string[]): number;
						public static getGlobal(): org.mozilla.javascript.tools.shell.Global;
						public static processOptions(param0: string[]): string[];
						public static getErr(): java.io.PrintStream;
						public static getIn(): java.io.InputStream;
						public static processSource(param0: org.mozilla.javascript.Context, param1: string): void;
						public static setErr(param0: java.io.PrintStream): void;
						public static setIn(param0: java.io.InputStream): void;
						public static getOut(): java.io.PrintStream;
						public static main(param0: string[]): void;
					}
					export module Main {
						export class IProxy extends java.lang.Object implements org.mozilla.javascript.ContextAction, org.mozilla.javascript.tools.shell.QuitAction {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.Main.IProxy>;
							public quit(param0: org.mozilla.javascript.Context, param1: number): void;
							public run(param0: org.mozilla.javascript.Context): any;
						}
						export class ScriptCache extends java.util.LinkedHashMap<string,org.mozilla.javascript.tools.shell.Main.ScriptReference> {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.Main.ScriptCache>;
							public get(param0: any): any;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): any;
							public replace(param0: any, param1: any): any;
							public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
							public values(): java.util.Collection<any>;
							public merge(param0: any, param1: any, param2: any /* any<any,any,any>*/): any;
							public put(param0: any, param1: any): any;
							public remove(param0: any, param1: any): boolean;
							public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
							public putIfAbsent(param0: any, param1: any): any;
							public removeEldestEntry(param0: java.util.Map.Entry<any,any>): boolean;
							public containsKey(param0: any): boolean;
							public clear(): void;
							public keySet(): java.util.Set<any>;
							public computeIfAbsent(param0: any, param1: any /* any<any,any>*/): any;
							public forEach(param0: any /* any<any,any>*/): void;
							public compute(param0: any, param1: any /* any<any,any,any>*/): any;
							public removeEldestEntry(param0: java.util.Map.Entry<string,org.mozilla.javascript.tools.shell.Main.ScriptReference>): boolean;
							public replace(param0: any, param1: any, param2: any): boolean;
							public getOrDefault(param0: any, param1: any): any;
							public replaceAll(param0: any /* any<any,any,any>*/): void;
							public isEmpty(): boolean;
							public equals(param0: any): boolean;
							public containsValue(param0: any): boolean;
							public putAll(param0: java.util.Map<any,any>): void;
						}
						export class ScriptReference extends java.lang.ref.SoftReference<org.mozilla.javascript.Script> {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.Main.ScriptReference>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module shell {
					export class PipeThread extends java.lang.Thread {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.PipeThread>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module shell {
					export class QuitAction extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.QuitAction>;
						/**
						 * Constructs a new instance of the org.mozilla.javascript.tools.shell.QuitAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							quit(param0: org.mozilla.javascript.Context, param1: number): void;
						});
						public constructor();
						public quit(param0: org.mozilla.javascript.Context, param1: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module shell {
					export class Runner extends java.lang.Object implements java.lang.Runnable, org.mozilla.javascript.ContextAction {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.Runner>;
						public run(): void;
						public run(param0: org.mozilla.javascript.Context): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module shell {
					export abstract class SecurityProxy extends org.mozilla.javascript.SecurityController {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.SecurityProxy>;
						public constructor();
						public callProcessFileSecure(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module shell {
					export abstract class ShellConsole extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.ShellConsole>;
						public constructor();
						public getIn(): java.io.InputStream;
						public readLine(param0: string): string;
						public static getConsole(param0: java.io.InputStream, param1: java.io.PrintStream, param2: java.nio.charset.Charset): org.mozilla.javascript.tools.shell.ShellConsole;
						public flush(): void;
						public println(): void;
						public static getConsole(param0: org.mozilla.javascript.Scriptable, param1: java.nio.charset.Charset): org.mozilla.javascript.tools.shell.ShellConsole;
						public println(param0: string): void;
						public print(param0: string): void;
						public readLine(): string;
					}
					export module ShellConsole {
						export class ConsoleInputStream extends java.io.InputStream {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.ShellConsole.ConsoleInputStream>;
							public constructor();
							public read(param0: number[]): number;
							public close(): void;
							public read(): number;
							public constructor(param0: org.mozilla.javascript.tools.shell.ShellConsole, param1: java.nio.charset.Charset);
							public read(param0: number[], param1: number, param2: number): number;
						}
						export class JLineShellConsoleV1 extends org.mozilla.javascript.tools.shell.ShellConsole {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.ShellConsole.JLineShellConsoleV1>;
							public readLine(param0: string): string;
							public print(param0: string): void;
							public println(param0: string): void;
							public readLine(): string;
							public flush(): void;
							public getIn(): java.io.InputStream;
							public println(): void;
						}
						export class JLineShellConsoleV2 extends org.mozilla.javascript.tools.shell.ShellConsole {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.ShellConsole.JLineShellConsoleV2>;
							public readLine(param0: string): string;
							public print(param0: string): void;
							public println(param0: string): void;
							public readLine(): string;
							public flush(): void;
							public getIn(): java.io.InputStream;
							public println(): void;
						}
						export class SimpleShellConsole extends org.mozilla.javascript.tools.shell.ShellConsole {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.ShellConsole.SimpleShellConsole>;
							public readLine(param0: string): string;
							public print(param0: string): void;
							public println(param0: string): void;
							public readLine(): string;
							public flush(): void;
							public getIn(): java.io.InputStream;
							public println(): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module shell {
					export class ShellContextFactory extends org.mozilla.javascript.ContextFactory {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.ShellContextFactory>;
						public setLanguageVersion(param0: number): void;
						public constructor();
						public onContextCreated(param0: org.mozilla.javascript.Context): void;
						public setWarningAsError(param0: boolean): void;
						public setGeneratingDebug(param0: boolean): void;
						public setOptimizationLevel(param0: number): void;
						public hasFeature(param0: org.mozilla.javascript.Context, param1: number): boolean;
						public setAllowReservedKeywords(param0: boolean): void;
						public setStrictMode(param0: boolean): void;
						public getCharacterEncoding(): string;
						public setErrorReporter(param0: org.mozilla.javascript.ErrorReporter): void;
						public setCharacterEncoding(param0: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module tools {
				export module shell {
					export class ShellLine extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.ShellLine>;
						public constructor();
						/** @deprecated */
						public static getStream(param0: org.mozilla.javascript.Scriptable): java.io.InputStream;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module typedarrays {
				export class ByteIo extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.typedarrays.ByteIo>;
					public static readInt8(param0: number[], param1: number): any;
					public static readUint32Primitive(param0: number[], param1: number, param2: boolean): number;
					public static writeInt32(param0: number[], param1: number, param2: number, param3: boolean): void;
					public static writeUint64(param0: number[], param1: number, param2: number, param3: boolean): void;
					public static readInt16(param0: number[], param1: number, param2: boolean): any;
					public static writeInt8(param0: number[], param1: number, param2: number): void;
					public static readInt32(param0: number[], param1: number, param2: boolean): any;
					public static readUint64Primitive(param0: number[], param1: number, param2: boolean): number;
					public constructor();
					public static readFloat32(param0: number[], param1: number, param2: boolean): any;
					public static writeUint8(param0: number[], param1: number, param2: number): void;
					public static writeUint16(param0: number[], param1: number, param2: number, param3: boolean): void;
					public static writeUint32(param0: number[], param1: number, param2: number, param3: boolean): void;
					public static writeFloat32(param0: number[], param1: number, param2: number, param3: boolean): void;
					public static writeInt16(param0: number[], param1: number, param2: number, param3: boolean): void;
					public static writeFloat64(param0: number[], param1: number, param2: number, param3: boolean): void;
					public static readUint8(param0: number[], param1: number): any;
					public static readFloat64(param0: number[], param1: number, param2: boolean): any;
					public static readUint16(param0: number[], param1: number, param2: boolean): any;
					public static readUint32(param0: number[], param1: number, param2: boolean): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module typedarrays {
				export class Conversions extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.typedarrays.Conversions>;
					public static EIGHT_BIT: number;
					public static SIXTEEN_BIT: number;
					public static THIRTYTWO_BIT: number;
					public static toUint16(param0: any): number;
					public static toInt8(param0: any): number;
					public constructor();
					public static toUint8Clamp(param0: any): number;
					public static toInt32(param0: any): number;
					public static toUint32(param0: any): number;
					public static toInt16(param0: any): number;
					public static toUint8(param0: any): number;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module typedarrays {
				export class NativeArrayBuffer extends org.mozilla.javascript.IdScriptableObject {
					public static class: java.lang.Class<org.mozilla.javascript.typedarrays.NativeArrayBuffer>;
					public static CLASS_NAME: string;
					public static EMPTY_BUFFER: org.mozilla.javascript.typedarrays.NativeArrayBuffer;
					public findPrototypeId(param0: string): number;
					public getMaxInstanceId(): number;
					public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public fillConstructorProperties(param0: org.mozilla.javascript.IdFunctionObject): void;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public getLength(): number;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public getInstanceIdName(param0: number): string;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public constructor();
					public delete(param0: number): void;
					public getBuffer(): number[];
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getInstanceIdValue(param0: number): any;
					public getAllIds(): any[];
					public delete(param0: string): void;
					public constructor(param0: number);
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public initPrototypeId(param0: number): void;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public slice(param0: number, param1: number): org.mozilla.javascript.typedarrays.NativeArrayBuffer;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public findInstanceIdInfo(param0: string): number;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public findInstanceIdInfo(param0: org.mozilla.javascript.Symbol): number;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module typedarrays {
				export abstract class NativeArrayBufferView extends org.mozilla.javascript.IdScriptableObject {
					public static class: java.lang.Class<org.mozilla.javascript.typedarrays.NativeArrayBufferView>;
					public arrayBuffer: org.mozilla.javascript.typedarrays.NativeArrayBuffer;
					public offset: number;
					public byteLength: number;
					public getMaxInstanceId(): number;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public getInstanceIdName(param0: number): string;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public constructor();
					public delete(param0: number): void;
					public static isArg(param0: any[], param1: number): boolean;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getInstanceIdValue(param0: number): any;
					public getAllIds(): any[];
					public delete(param0: string): void;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public getBuffer(): org.mozilla.javascript.typedarrays.NativeArrayBuffer;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public getByteOffset(): number;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getByteLength(): number;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public findInstanceIdInfo(param0: string): number;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number);
					public findInstanceIdInfo(param0: org.mozilla.javascript.Symbol): number;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module typedarrays {
				export class NativeDataView extends org.mozilla.javascript.typedarrays.NativeArrayBufferView {
					public static class: java.lang.Class<org.mozilla.javascript.typedarrays.NativeDataView>;
					public static CLASS_NAME: string;
					public findPrototypeId(param0: string): number;
					public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public constructor();
					public delete(param0: number): void;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getAllIds(): any[];
					public delete(param0: string): void;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public initPrototypeId(param0: number): void;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number);
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module typedarrays {
				export class NativeFloat32Array extends org.mozilla.javascript.typedarrays.NativeTypedArrayView<java.lang.Float> {
					public static class: java.lang.Class<org.mozilla.javascript.typedarrays.NativeFloat32Array>;
					public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public spliterator(): java.util.Spliterator<any>;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getArrayLength(): number;
					public get(param0: number): java.lang.Float;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public toArray(): any[];
					public getArrayElement(param0: number): any;
					public delete(param0: number): void;
					public get(param0: number): any;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public add(param0: number, param1: any): void;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public setArrayElement(param0: number, param1: any): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public set(param0: number, param1: java.lang.Float): java.lang.Float;
					public js_set(param0: number, param1: any): any;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public sort(param0: java.util.Comparator<any>): void;
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public replaceAll(param0: any /* any*/): void;
					public getClassName(): string;
					public toArray(param0: any[]): any[];
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getAllIds(): any[];
					public hashCode(): number;
					public delete(param0: string): void;
					public constructor(param0: number);
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number, param3: number);
					public retainAll(param0: java.util.Collection<any>): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public indexOf(param0: any): number;
					public equals(param0: any): boolean;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public listIterator(): java.util.ListIterator<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number);
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module typedarrays {
				export class NativeFloat64Array extends org.mozilla.javascript.typedarrays.NativeTypedArrayView<java.lang.Double> {
					public static class: java.lang.Class<org.mozilla.javascript.typedarrays.NativeFloat64Array>;
					public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public set(param0: number, param1: java.lang.Double): java.lang.Double;
					public spliterator(): java.util.Spliterator<any>;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getArrayLength(): number;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public toArray(): any[];
					public getArrayElement(param0: number): any;
					public delete(param0: number): void;
					public get(param0: number): java.lang.Double;
					public get(param0: number): any;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public add(param0: number, param1: any): void;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public setArrayElement(param0: number, param1: any): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public js_set(param0: number, param1: any): any;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public sort(param0: java.util.Comparator<any>): void;
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public replaceAll(param0: any /* any*/): void;
					public getClassName(): string;
					public toArray(param0: any[]): any[];
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getAllIds(): any[];
					public hashCode(): number;
					public delete(param0: string): void;
					public constructor(param0: number);
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number, param3: number);
					public retainAll(param0: java.util.Collection<any>): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public indexOf(param0: any): number;
					public equals(param0: any): boolean;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public listIterator(): java.util.ListIterator<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number);
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module typedarrays {
				export class NativeInt16Array extends org.mozilla.javascript.typedarrays.NativeTypedArrayView<java.lang.Short> {
					public static class: java.lang.Class<org.mozilla.javascript.typedarrays.NativeInt16Array>;
					public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public spliterator(): java.util.Spliterator<any>;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public get(param0: number): java.lang.Short;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
					public set(param0: number, param1: java.lang.Short): java.lang.Short;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getArrayLength(): number;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public toArray(): any[];
					public getArrayElement(param0: number): any;
					public delete(param0: number): void;
					public get(param0: number): any;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public add(param0: number, param1: any): void;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public setArrayElement(param0: number, param1: any): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public js_set(param0: number, param1: any): any;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public sort(param0: java.util.Comparator<any>): void;
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public replaceAll(param0: any /* any*/): void;
					public getClassName(): string;
					public toArray(param0: any[]): any[];
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getAllIds(): any[];
					public hashCode(): number;
					public delete(param0: string): void;
					public constructor(param0: number);
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number, param3: number);
					public retainAll(param0: java.util.Collection<any>): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public indexOf(param0: any): number;
					public equals(param0: any): boolean;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public listIterator(): java.util.ListIterator<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number);
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module typedarrays {
				export class NativeInt32Array extends org.mozilla.javascript.typedarrays.NativeTypedArrayView<java.lang.Integer> {
					public static class: java.lang.Class<org.mozilla.javascript.typedarrays.NativeInt32Array>;
					public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public spliterator(): java.util.Spliterator<any>;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getArrayLength(): number;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public toArray(): any[];
					public getArrayElement(param0: number): any;
					public delete(param0: number): void;
					public get(param0: number): any;
					public get(param0: number): java.lang.Integer;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public add(param0: number, param1: any): void;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public setArrayElement(param0: number, param1: any): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public js_set(param0: number, param1: any): any;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public sort(param0: java.util.Comparator<any>): void;
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public set(param0: number, param1: java.lang.Integer): java.lang.Integer;
					public replaceAll(param0: any /* any*/): void;
					public getClassName(): string;
					public toArray(param0: any[]): any[];
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getAllIds(): any[];
					public hashCode(): number;
					public delete(param0: string): void;
					public constructor(param0: number);
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number, param3: number);
					public retainAll(param0: java.util.Collection<any>): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public indexOf(param0: any): number;
					public equals(param0: any): boolean;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public listIterator(): java.util.ListIterator<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number);
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module typedarrays {
				export class NativeInt8Array extends org.mozilla.javascript.typedarrays.NativeTypedArrayView<java.lang.Byte> {
					public static class: java.lang.Class<org.mozilla.javascript.typedarrays.NativeInt8Array>;
					public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public spliterator(): java.util.Spliterator<any>;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getArrayLength(): number;
					public iterator(): java.util.Iterator<any>;
					public get(param0: number): java.lang.Byte;
					public constructor();
					public toArray(): any[];
					public getArrayElement(param0: number): any;
					public delete(param0: number): void;
					public get(param0: number): any;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public add(param0: number, param1: any): void;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public setArrayElement(param0: number, param1: any): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public js_set(param0: number, param1: any): any;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public sort(param0: java.util.Comparator<any>): void;
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public set(param0: number, param1: java.lang.Byte): java.lang.Byte;
					public replaceAll(param0: any /* any*/): void;
					public getClassName(): string;
					public toArray(param0: any[]): any[];
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getAllIds(): any[];
					public hashCode(): number;
					public delete(param0: string): void;
					public constructor(param0: number);
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number, param3: number);
					public retainAll(param0: java.util.Collection<any>): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public indexOf(param0: any): number;
					public equals(param0: any): boolean;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public listIterator(): java.util.ListIterator<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number);
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module typedarrays {
				export class NativeTypedArrayIterator<T>  extends java.util.ListIterator<any> {
					public static class: java.lang.Class<org.mozilla.javascript.typedarrays.NativeTypedArrayIterator<any>>;
					public set(param0: any): void;
					public previousIndex(): number;
					public nextIndex(): number;
					public next(): any;
					public add(param0: any): void;
					public hasPrevious(): boolean;
					public previous(): any;
					public hasNext(): boolean;
					public remove(): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module typedarrays {
				export abstract class NativeTypedArrayView<T>  extends org.mozilla.javascript.typedarrays.NativeArrayBufferView {
					public static class: java.lang.Class<org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>>;
					public length: number;
					public static MAX_PROTOTYPE_ID: number;
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public spliterator(): java.util.Spliterator<any>;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public getInstanceIdName(param0: number): string;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getArrayLength(): number;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public toArray(): any[];
					public getArrayElement(param0: number): any;
					public delete(param0: number): void;
					public get(param0: number): any;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public add(param0: number, param1: any): void;
					public js_get(param0: number): any;
					public setArrayElement(param0: number, param1: any): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public checkIndex(param0: number): boolean;
					public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public findInstanceIdInfo(param0: string): number;
					public forEach(param0: any /* any*/): void;
					public js_set(param0: number, param1: any): any;
					public findPrototypeId(param0: string): number;
					public getMaxInstanceId(): number;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public fillConstructorProperties(param0: org.mozilla.javascript.IdFunctionObject): void;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public sort(param0: java.util.Comparator<any>): void;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: number): any;
					public replaceAll(param0: any /* any*/): void;
					public toArray(param0: any[]): any[];
					public getClassName(): string;
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getInstanceIdValue(param0: number): any;
					public getAllIds(): any[];
					public delete(param0: string): void;
					public hashCode(): number;
					public contains(param0: any): boolean;
					public removeIf(param0: any /* any*/): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public initPrototypeId(param0: number): void;
					public parallelStream(): java.util.stream.Stream<any>;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number, param3: number);
					public retainAll(param0: java.util.Collection<any>): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public indexOf(param0: any): number;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public equals(param0: any): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public listIterator(): java.util.ListIterator<any>;
					public stream(): java.util.stream.Stream<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number);
					public findInstanceIdInfo(param0: org.mozilla.javascript.Symbol): number;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module typedarrays {
				export class NativeUint16Array extends org.mozilla.javascript.typedarrays.NativeTypedArrayView<java.lang.Integer> {
					public static class: java.lang.Class<org.mozilla.javascript.typedarrays.NativeUint16Array>;
					public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public spliterator(): java.util.Spliterator<any>;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getArrayLength(): number;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public toArray(): any[];
					public getArrayElement(param0: number): any;
					public delete(param0: number): void;
					public get(param0: number): any;
					public get(param0: number): java.lang.Integer;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public add(param0: number, param1: any): void;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public setArrayElement(param0: number, param1: any): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public js_set(param0: number, param1: any): any;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public sort(param0: java.util.Comparator<any>): void;
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public set(param0: number, param1: java.lang.Integer): java.lang.Integer;
					public replaceAll(param0: any /* any*/): void;
					public getClassName(): string;
					public toArray(param0: any[]): any[];
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getAllIds(): any[];
					public hashCode(): number;
					public delete(param0: string): void;
					public constructor(param0: number);
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number, param3: number);
					public retainAll(param0: java.util.Collection<any>): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public indexOf(param0: any): number;
					public equals(param0: any): boolean;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public listIterator(): java.util.ListIterator<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number);
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module typedarrays {
				export class NativeUint32Array extends org.mozilla.javascript.typedarrays.NativeTypedArrayView<java.lang.Long> {
					public static class: java.lang.Class<org.mozilla.javascript.typedarrays.NativeUint32Array>;
					public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
					public set(param0: number, param1: java.lang.Long): java.lang.Long;
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public spliterator(): java.util.Spliterator<any>;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getArrayLength(): number;
					public get(param0: number): java.lang.Long;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public toArray(): any[];
					public getArrayElement(param0: number): any;
					public delete(param0: number): void;
					public get(param0: number): any;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public add(param0: number, param1: any): void;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public setArrayElement(param0: number, param1: any): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public js_set(param0: number, param1: any): any;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public sort(param0: java.util.Comparator<any>): void;
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public replaceAll(param0: any /* any*/): void;
					public getClassName(): string;
					public toArray(param0: any[]): any[];
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getAllIds(): any[];
					public hashCode(): number;
					public delete(param0: string): void;
					public constructor(param0: number);
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number, param3: number);
					public retainAll(param0: java.util.Collection<any>): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public indexOf(param0: any): number;
					public equals(param0: any): boolean;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public listIterator(): java.util.ListIterator<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number);
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module typedarrays {
				export class NativeUint8Array extends org.mozilla.javascript.typedarrays.NativeTypedArrayView<java.lang.Integer> {
					public static class: java.lang.Class<org.mozilla.javascript.typedarrays.NativeUint8Array>;
					public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public spliterator(): java.util.Spliterator<any>;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getArrayLength(): number;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public toArray(): any[];
					public getArrayElement(param0: number): any;
					public delete(param0: number): void;
					public get(param0: number): any;
					public get(param0: number): java.lang.Integer;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public add(param0: number, param1: any): void;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public setArrayElement(param0: number, param1: any): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public js_set(param0: number, param1: any): any;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public sort(param0: java.util.Comparator<any>): void;
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public set(param0: number, param1: java.lang.Integer): java.lang.Integer;
					public replaceAll(param0: any /* any*/): void;
					public getClassName(): string;
					public toArray(param0: any[]): any[];
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getAllIds(): any[];
					public hashCode(): number;
					public delete(param0: string): void;
					public constructor(param0: number);
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number, param3: number);
					public retainAll(param0: java.util.Collection<any>): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public indexOf(param0: any): number;
					public equals(param0: any): boolean;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public listIterator(): java.util.ListIterator<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number);
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module typedarrays {
				export class NativeUint8ClampedArray extends org.mozilla.javascript.typedarrays.NativeTypedArrayView<java.lang.Integer> {
					public static class: java.lang.Class<org.mozilla.javascript.typedarrays.NativeUint8ClampedArray>;
					public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public spliterator(): java.util.Spliterator<any>;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getArrayLength(): number;
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public toArray(): any[];
					public getArrayElement(param0: number): any;
					public delete(param0: number): void;
					public get(param0: number): any;
					public get(param0: number): java.lang.Integer;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public add(param0: number, param1: any): void;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public setArrayElement(param0: number, param1: any): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public js_set(param0: number, param1: any): any;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public sort(param0: java.util.Comparator<any>): void;
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public set(param0: number, param1: java.lang.Integer): java.lang.Integer;
					public replaceAll(param0: any /* any*/): void;
					public getClassName(): string;
					public toArray(param0: any[]): any[];
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getAllIds(): any[];
					public hashCode(): number;
					public delete(param0: string): void;
					public constructor(param0: number);
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number, param3: number);
					public retainAll(param0: java.util.Collection<any>): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public indexOf(param0: any): number;
					public equals(param0: any): boolean;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public listIterator(): java.util.ListIterator<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public constructor(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number);
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module v8dtoa {
				export class CachedPowers extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.v8dtoa.CachedPowers>;
					public constructor();
				}
				export module CachedPowers {
					export class CachedPower extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.v8dtoa.CachedPowers.CachedPower>;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module v8dtoa {
				export class DiyFp extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.v8dtoa.DiyFp>;
					public toString(): string;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module v8dtoa {
				export class DoubleConversion extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.v8dtoa.DoubleConversion>;
					public static doubleToInt32(param0: number): number;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module v8dtoa {
				export class DoubleHelper extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.v8dtoa.DoubleHelper>;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module v8dtoa {
				export class FastDtoa extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.v8dtoa.FastDtoa>;
					public static numberToString(param0: number): string;
					public static dtoa(param0: number, param1: org.mozilla.javascript.v8dtoa.FastDtoaBuilder): boolean;
					public constructor();
					public static numberToString(param0: number, param1: org.mozilla.javascript.v8dtoa.FastDtoaBuilder): boolean;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module v8dtoa {
				export class FastDtoaBuilder extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.v8dtoa.FastDtoaBuilder>;
					public format(): string;
					public reset(): void;
					public toString(): string;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module xml {
				export abstract class XMLLib extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.xml.XMLLib>;
					public setIgnoreProcessingInstructions(param0: boolean): void;
					public getPrettyIndent(): number;
					public toDefaultXmlNamespace(param0: org.mozilla.javascript.Context, param1: any): any;
					public isPrettyPrinting(): boolean;
					public nameRef(param0: org.mozilla.javascript.Context, param1: any, param2: org.mozilla.javascript.Scriptable, param3: number): org.mozilla.javascript.Ref;
					public setPrettyIndent(param0: number): void;
					public nameRef(param0: org.mozilla.javascript.Context, param1: any, param2: any, param3: org.mozilla.javascript.Scriptable, param4: number): org.mozilla.javascript.Ref;
					public escapeTextValue(param0: any): string;
					public setPrettyPrinting(param0: boolean): void;
					public bindToScope(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.xml.XMLLib;
					public constructor();
					public static extractFromScope(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.xml.XMLLib;
					public setIgnoreComments(param0: boolean): void;
					public isIgnoreProcessingInstructions(): boolean;
					public isIgnoreWhitespace(): boolean;
					public setIgnoreWhitespace(param0: boolean): void;
					public static extractFromScopeOrNull(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.xml.XMLLib;
					public isXMLName(param0: org.mozilla.javascript.Context, param1: any): boolean;
					public escapeAttributeValue(param0: any): string;
					public isIgnoreComments(): boolean;
				}
				export module XMLLib {
					export abstract class Factory extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.xml.XMLLib.Factory>;
						public constructor();
						public static create(param0: string): org.mozilla.javascript.xml.XMLLib.Factory;
						public getImplementationClassName(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module xml {
				export abstract class XMLObject extends org.mozilla.javascript.IdScriptableObject {
					public static class: java.lang.Class<org.mozilla.javascript.xml.XMLObject>;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getFunctionProperty(param0: org.mozilla.javascript.Context, param1: string): any;
					public put(param0: org.mozilla.javascript.Context, param1: any, param2: any): void;
					public getClassName(): string;
					public constructor();
					public addValues(param0: org.mozilla.javascript.Context, param1: boolean, param2: any): any;
					public delete(param0: number): void;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getAllIds(): any[];
					public delete(param0: string): void;
					public getFunctionProperty(param0: org.mozilla.javascript.Context, param1: number): any;
					public enterDotQuery(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.NativeWith;
					public getTypeOf(): string;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public isConst(param0: string): boolean;
					public enterWith(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.NativeWith;
					public getIds(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public memberRef(param0: org.mozilla.javascript.Context, param1: any, param2: any, param3: number): org.mozilla.javascript.Ref;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getExtraMethodSource(param0: org.mozilla.javascript.Context): org.mozilla.javascript.Scriptable;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public memberRef(param0: org.mozilla.javascript.Context, param1: any, param2: number): org.mozilla.javascript.Ref;
					public delete(param0: org.mozilla.javascript.Context, param1: any): boolean;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public has(param0: org.mozilla.javascript.Context, param1: any): boolean;
					public get(param0: org.mozilla.javascript.Context, param1: any): any;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module xmlimpl {
				export class Namespace extends org.mozilla.javascript.IdScriptableObject {
					public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.Namespace>;
					public getMaxInstanceId(): number;
					public findPrototypeId(param0: string): number;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public getInstanceIdName(param0: number): string;
					public uri(): string;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public toString(): string;
					public exportAsJSClass(param0: boolean): void;
					public getClassName(): string;
					public delete(param0: number): void;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getInstanceIdValue(param0: number): any;
					public getAllIds(): any[];
					public hashCode(): number;
					public delete(param0: string): void;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public prefix(): string;
					public initPrototypeId(param0: number): void;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public toLocaleString(): string;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public equivalentValues(param0: any): any;
					public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
					public exportAsJSClass(param0: number, param1: org.mozilla.javascript.Scriptable, param2: boolean): org.mozilla.javascript.IdFunctionObject;
					public equals(param0: any): boolean;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public findInstanceIdInfo(param0: string): number;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public findInstanceIdInfo(param0: org.mozilla.javascript.Symbol): number;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module xmlimpl {
				export class QName extends org.mozilla.javascript.IdScriptableObject {
					public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.QName>;
					public getMaxInstanceId(): number;
					public findPrototypeId(param0: string): number;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public getInstanceIdName(param0: number): string;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public toString(): string;
					public getClassName(): string;
					public delete(param0: number): void;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getInstanceIdValue(param0: number): any;
					public getAllIds(): any[];
					public hashCode(): number;
					public delete(param0: string): void;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public initPrototypeId(param0: number): void;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public localName(): string;
					public equivalentValues(param0: any): any;
					public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
					public equals(param0: any): boolean;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public findInstanceIdInfo(param0: string): number;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public findInstanceIdInfo(param0: org.mozilla.javascript.Symbol): number;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module xmlimpl {
				export class XML extends org.mozilla.javascript.xmlimpl.XMLObjectImpl {
					public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.XML>;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public jsConstructor(param0: org.mozilla.javascript.Context, param1: boolean, param2: any[]): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public toString(): string;
					public put(param0: org.mozilla.javascript.Context, param1: any, param2: any): void;
					public getClassName(): string;
					public delete(param0: number): void;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getAllIds(): any[];
					public delete(param0: string): void;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getExtraMethodSource(param0: org.mozilla.javascript.Context): org.mozilla.javascript.Scriptable;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public delete(param0: org.mozilla.javascript.Context, param1: any): boolean;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public has(param0: org.mozilla.javascript.Context, param1: any): boolean;
					public get(param0: org.mozilla.javascript.Context, param1: any): any;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module xmlimpl {
				export class XMLCtor extends org.mozilla.javascript.IdFunctionObject {
					public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.XMLCtor>;
					public getMaxInstanceId(): number;
					public findPrototypeId(param0: string): number;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public getInstanceIdName(param0: number): string;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public delete(param0: number): void;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getInstanceIdValue(param0: number): any;
					public getAllIds(): any[];
					public delete(param0: string): void;
					public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public initPrototypeId(param0: number): void;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
					public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public setInstanceIdValue(param0: number, param1: any): void;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public findInstanceIdInfo(param0: string): number;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public findInstanceIdInfo(param0: org.mozilla.javascript.Symbol): number;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module xmlimpl {
				export class XMLLibImpl extends org.mozilla.javascript.xml.XMLLib implements java.io.Serializable {
					public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.XMLLibImpl>;
					public setIgnoreProcessingInstructions(param0: boolean): void;
					public static toDomNode(param0: any): org.w3c.dom.Node;
					public getPrettyIndent(): number;
					public static init(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: boolean): void;
					public toDefaultXmlNamespace(param0: org.mozilla.javascript.Context, param1: any): any;
					public isPrettyPrinting(): boolean;
					public nameRef(param0: org.mozilla.javascript.Context, param1: any, param2: org.mozilla.javascript.Scriptable, param3: number): org.mozilla.javascript.Ref;
					public setPrettyIndent(param0: number): void;
					public escapeTextValue(param0: any): string;
					public nameRef(param0: org.mozilla.javascript.Context, param1: any, param2: any, param3: org.mozilla.javascript.Scriptable, param4: number): org.mozilla.javascript.Ref;
					public setPrettyPrinting(param0: boolean): void;
					public setIgnoreComments(param0: boolean): void;
					public isIgnoreProcessingInstructions(): boolean;
					public isIgnoreWhitespace(): boolean;
					public setIgnoreWhitespace(param0: boolean): void;
					public isXMLName(param0: org.mozilla.javascript.Context, param1: any): boolean;
					public escapeAttributeValue(param0: any): string;
					public isIgnoreComments(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module xmlimpl {
				export class XMLList extends org.mozilla.javascript.xmlimpl.XMLObjectImpl implements org.mozilla.javascript.Function {
					public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.XMLList>;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public jsConstructor(param0: org.mozilla.javascript.Context, param1: boolean, param2: any[]): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public toString(): string;
					public getClassName(): string;
					public put(param0: org.mozilla.javascript.Context, param1: any, param2: any): void;
					public delete(param0: number): void;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getIdsForDebug(): any[];
					public getAllIds(): any[];
					public delete(param0: string): void;
					public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public isConst(param0: string): boolean;
					public getIds(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getExtraMethodSource(param0: org.mozilla.javascript.Context): org.mozilla.javascript.Scriptable;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public delete(param0: org.mozilla.javascript.Context, param1: any): boolean;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public has(param0: org.mozilla.javascript.Context, param1: any): boolean;
					public get(param0: org.mozilla.javascript.Context, param1: any): any;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module xmlimpl {
				export class XMLName extends org.mozilla.javascript.Ref {
					public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.XMLName>;
					public set(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any): any;
					public toString(): string;
					public get(param0: org.mozilla.javascript.Context): any;
					public delete(param0: org.mozilla.javascript.Context): boolean;
					/** @deprecated */
					public set(param0: org.mozilla.javascript.Context, param1: any): any;
					public has(param0: org.mozilla.javascript.Context): boolean;
					public set(param0: org.mozilla.javascript.Context, param1: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module xmlimpl {
				export abstract class XMLObjectImpl extends org.mozilla.javascript.xml.XMLObject {
					public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.XMLObjectImpl>;
					public findPrototypeId(param0: string): number;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public jsConstructor(param0: org.mozilla.javascript.Context, param1: boolean, param2: any[]): any;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public static getDefaultValue(param0: org.mozilla.javascript.Scriptable, param1: java.lang.Class<any>): any;
					public constructor(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.Scriptable);
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getFunctionProperty(param0: org.mozilla.javascript.Context, param1: string): any;
					public toString(): string;
					public put(param0: org.mozilla.javascript.Context, param1: any, param2: any): void;
					public getClassName(): string;
					public constructor();
					public addValues(param0: org.mozilla.javascript.Context, param1: boolean, param2: any): any;
					public delete(param0: number): void;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public getAllIds(): any[];
					public delete(param0: string): void;
					public getFunctionProperty(param0: org.mozilla.javascript.Context, param1: number): any;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public enterDotQuery(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.NativeWith;
					public isConst(param0: string): boolean;
					public enterWith(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.NativeWith;
					public getIds(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public initPrototypeId(param0: number): void;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public memberRef(param0: org.mozilla.javascript.Context, param1: any, param2: any, param3: number): org.mozilla.javascript.Ref;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public equivalentValues(param0: any): any;
					public findPrototypeId(param0: org.mozilla.javascript.Symbol): number;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public memberRef(param0: org.mozilla.javascript.Context, param1: any, param2: number): org.mozilla.javascript.Ref;
					public constructor(param0: org.mozilla.javascript.xmlimpl.XMLLibImpl, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.xml.XMLObject);
					public delete(param0: org.mozilla.javascript.Context, param1: any): boolean;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public has(param0: org.mozilla.javascript.Context, param1: any): boolean;
					public get(param0: org.mozilla.javascript.Context, param1: any): any;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module xmlimpl {
				export class XMLWithScope extends org.mozilla.javascript.NativeWith {
					public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.XMLWithScope>;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public getIds(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public updateDotQuery(param0: boolean): any;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getClassName(): string;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: number): void;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: string): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module xmlimpl {
				export class XmlNode extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.XmlNode>;
					public toString(): string;
				}
				export module XmlNode {
					export abstract class Filter extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.XmlNode.Filter>;
					}
					export class InternalList extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.XmlNode.InternalList>;
					}
					export class Namespace extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.XmlNode.Namespace>;
						public toString(): string;
					}
					export class Namespaces extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.XmlNode.Namespaces>;
					}
					export class QName extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.XmlNode.QName>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
					export class XmlNodeUserDataHandler extends java.lang.Object implements org.w3c.dom.UserDataHandler, java.io.Serializable {
						public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.XmlNode.XmlNodeUserDataHandler>;
						public handle(param0: number, param1: string, param2: any, param3: org.w3c.dom.Node, param4: org.w3c.dom.Node): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module xmlimpl {
				export class XmlProcessor extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.XmlProcessor>;
				}
				export module XmlProcessor {
					export class RhinoSAXErrorHandler extends java.lang.Object implements org.xml.sax.ErrorHandler, java.io.Serializable {
						public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.XmlProcessor.RhinoSAXErrorHandler>;
						public error(param0: org.xml.sax.SAXParseException): void;
						public warning(param0: org.xml.sax.SAXParseException): void;
						public fatalError(param0: org.xml.sax.SAXParseException): void;
					}
				}
			}
		}
	}
}

//Generics information:
//org.mozilla.javascript.typedarrays.NativeTypedArrayIterator:1
//org.mozilla.javascript.typedarrays.NativeTypedArrayView:1


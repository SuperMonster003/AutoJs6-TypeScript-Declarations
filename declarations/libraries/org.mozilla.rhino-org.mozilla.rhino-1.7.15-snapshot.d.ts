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
				public static INVOKEDYNAMIC: number;
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
				public static MH_GETFIELD: number;
				public static MH_GETSTATIC: number;
				public static MH_PUTFIELD: number;
				public static MH_PUTSTATIC: number;
				public static MH_INVOKEVIRTUAL: number;
				public static MH_INVOKESTATIC: number;
				public static MH_INVOKESPECIAL: number;
				public static MH_NEWINVOKESPECIAL: number;
				public static MH_INVOKEINTERFACE: number;
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
				public static classNameToSignature(name: string): string;
				public add(theOpCode: number, className: string, fieldName: string, fieldType: string): void;
				public addIStore(local: number): void;
				public getClassName(): string;
				public addDLoad(local: number): void;
				public addLLoad(local: number): void;
				public addLineNumberEntry(lineNumber: number): void;
				public addAStore(local: number): void;
				public addPush(k: number): void;
				public markLabel(label: number): void;
				public add(theOpCode: number, className: string): void;
				public markLabel(label: number, stackTop: number): void;
				public addPush(k: string): void;
				public markTableSwitchCase(switchStart: number, caseIndex: number, stackTop: number): void;
				public write(oStream: java.io.OutputStream): void;
				public addFLoad(local: number): void;
				public addVariableDescriptor(name: string, type: string, startPC: number, register: number): void;
				public add(theOpCode: number): void;
				public addField(fieldName: string, type: string, flags: number, value: number): void;
				public setStackTop(n: number): void;
				public add(theOpCode: number, theOperand1: number, theOperand2: number): void;
				public addTableSwitch(low: number, high: number): number;
				public markHandler(theLabel: number): void;
				public addFStore(local: number): void;
				public setTableSwitchJump(switchStart: number, caseIndex: number, jumpTarget: number): void;
				public addInterface(interfaceName: string): void;
				public getCurrentCodeOffset(): number;
				public addLoadConstant(k: string): void;
				public getStackTop(): number;
				public toByteArray(): number[];
				public add(theOpCode: number, theOperand: number): void;
				public addInvokeDynamic(methodName: string, methodType: string, bsm: org.mozilla.classfile.ClassFileWriter.MHandle, ...bsmArgs: any[]): void;
				public setFlags(flags: number): void;
				public addDStore(local: number): void;
				public acquireLabel(): number;
				public addALoad(local: number): void;
				public markTableSwitchDefault(switchStart: number): void;
				public addField(fieldName: string, type: string, flags: number): void;
				public isUnderStringSizeLimit(k: string): boolean;
				public addInvoke(theOpCode: number, className: string, methodName: string, methodType: string): void;
				public addLoadConstant(k: number): void;
				public addLStore(local: number): void;
				public stopMethod(maxLocals: number): void;
				public addILoad(local: number): void;
				public addPush(k: boolean): void;
				public adjustStackTop(delta: number): void;
				public getLabelPC(label: number): number;
				public addLoadThis(): void;
				public constructor(className: string, superClassName: string, sourceFileName: string);
				public startMethod(methodName: string, type: string, flags: number): void;
				public addExceptionHandler(startLabel: number, endLabel: number, handlerLabel: number, catchClassName: string): void;
				public markTableSwitchCase(switchStart: number, caseIndex: number): void;
			}
			export module ClassFileWriter {
				export class BootstrapEntry extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.classfile.ClassFileWriter.BootstrapEntry>;
					public equals(obj: any): boolean;
					public hashCode(): number;
				}
				export class ClassFileFormatException extends java.lang.RuntimeException {
					public static class: java.lang.Class<org.mozilla.classfile.ClassFileWriter.ClassFileFormatException>;
				}
				export class MHandle extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.classfile.ClassFileWriter.MHandle>;
					public equals(obj: any): boolean;
					public toString(): string;
					public constructor(tag: number, owner: string, name: string, desc: string);
					public hashCode(): number;
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
			export class ConstantEntry extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.classfile.ConstantEntry>;
				public equals(obj: any): boolean;
				public hashCode(): number;
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
				public equals(obj: any): boolean;
				public hashCode(): number;
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
			export class AbstractEcmaObjectOperations extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.AbstractEcmaObjectOperations>;
			}
			export module AbstractEcmaObjectOperations {
				export class INTEGRITY_LEVEL {
					public static class: java.lang.Class<org.mozilla.javascript.AbstractEcmaObjectOperations.INTEGRITY_LEVEL>;
					public static FROZEN: org.mozilla.javascript.AbstractEcmaObjectOperations.INTEGRITY_LEVEL;
					public static SEALED: org.mozilla.javascript.AbstractEcmaObjectOperations.INTEGRITY_LEVEL;
					public static values(): org.mozilla.javascript.AbstractEcmaObjectOperations.INTEGRITY_LEVEL[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.mozilla.javascript.AbstractEcmaObjectOperations.INTEGRITY_LEVEL;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class AccessorSlot extends org.mozilla.javascript.Slot {
				public static class: java.lang.Class<org.mozilla.javascript.AccessorSlot>;
				public setValue(value: any, owner: org.mozilla.javascript.Scriptable, start: org.mozilla.javascript.Scriptable): boolean;
				public getValue(start: org.mozilla.javascript.Scriptable): any;
				public setValue(value: any, owner: org.mozilla.javascript.Scriptable, start: org.mozilla.javascript.Scriptable, isThrow: boolean): boolean;
			}
			export module AccessorSlot {
				export class FunctionGetter extends java.lang.Object implements org.mozilla.javascript.AccessorSlot.Getter {
					public static class: java.lang.Class<org.mozilla.javascript.AccessorSlot.FunctionGetter>;
					public getValue(start: org.mozilla.javascript.Scriptable): any;
					public asGetterFunction(name: string, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Function;
					public asGetterFunction(param0: string, param1: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Function;
					public getValue(param0: org.mozilla.javascript.Scriptable): any;
				}
				export class FunctionSetter extends java.lang.Object implements org.mozilla.javascript.AccessorSlot.Setter {
					public static class: java.lang.Class<org.mozilla.javascript.AccessorSlot.FunctionSetter>;
					public asSetterFunction(param0: string, param1: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Function;
					public asSetterFunction(name: string, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Function;
					public setValue(value: any, owner: org.mozilla.javascript.Scriptable, start: org.mozilla.javascript.Scriptable): boolean;
					public setValue(param0: any, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable): boolean;
				}
				export class Getter extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.AccessorSlot.Getter>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.AccessorSlot$Getter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getValue(param0: org.mozilla.javascript.Scriptable): any;
						asGetterFunction(param0: string, param1: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Function;
					});
					public constructor();
					public asGetterFunction(param0: string, param1: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Function;
					public getValue(param0: org.mozilla.javascript.Scriptable): any;
				}
				export class MemberBoxGetter extends java.lang.Object implements org.mozilla.javascript.AccessorSlot.Getter {
					public static class: java.lang.Class<org.mozilla.javascript.AccessorSlot.MemberBoxGetter>;
					public getValue(start: org.mozilla.javascript.Scriptable): any;
					public asGetterFunction(name: string, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Function;
					public asGetterFunction(param0: string, param1: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Function;
					public getValue(param0: org.mozilla.javascript.Scriptable): any;
				}
				export class MemberBoxSetter extends java.lang.Object implements org.mozilla.javascript.AccessorSlot.Setter {
					public static class: java.lang.Class<org.mozilla.javascript.AccessorSlot.MemberBoxSetter>;
					public asSetterFunction(param0: string, param1: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Function;
					public asSetterFunction(name: string, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Function;
					public setValue(value: any, owner: org.mozilla.javascript.Scriptable, start: org.mozilla.javascript.Scriptable): boolean;
					public setValue(param0: any, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable): boolean;
				}
				export class Setter extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.AccessorSlot.Setter>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.AccessorSlot$Setter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setValue(param0: any, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable): boolean;
						asSetterFunction(param0: string, param1: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Function;
					});
					public constructor();
					public asSetterFunction(param0: string, param1: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Function;
					public setValue(param0: any, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable): boolean;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Arguments extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.Arguments>;
				public getMaxInstanceId(): number;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public defineOwnProperty(cx: org.mozilla.javascript.Context, id: any, desc: org.mozilla.javascript.ScriptableObject): void;
				public setInstanceIdValue(id: number, value: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public findInstanceIdInfo(name: string): number;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findInstanceIdInfo(s: string): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public constructor(activation: org.mozilla.javascript.NativeCall);
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public findInstanceIdInfo(key: org.mozilla.javascript.Symbol): number;
				public delete(param0: string): void;
				public getInstanceIdValue(id: number): any;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public getInstanceIdName(id: number): string;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public defineOwnProperty(cx: org.mozilla.javascript.Context, key: any, desc: org.mozilla.javascript.ScriptableObject, checkValid: boolean): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public setInstanceIdAttributes(id: number, attr: number): void;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public defineOwnProperty(cx: org.mozilla.javascript.Context, id: any, desc: org.mozilla.javascript.ScriptableObject, checkValid: boolean): void;
				public delete(param0: number): void;
				public getOwnPropertyDescriptor(cx: org.mozilla.javascript.Context, id: any): org.mozilla.javascript.ScriptableObject;
			}
			export module Arguments {
				export class ThrowTypeError extends org.mozilla.javascript.BaseFunction {
					public static class: java.lang.Class<org.mozilla.javascript.Arguments.ThrowTypeError>;
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(name: string): void;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: number): void;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public isConst(param0: string): boolean;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public getAllIds(): any[];
					public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public isConst(name: string): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public delete(index: number): void;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				public constructor(isGenerator: boolean);
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public getArity(): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public constructor(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, targetFunction: org.mozilla.javascript.Callable, boundThis: org.mozilla.javascript.Scriptable);
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public getLength(): number;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getFunctionName(): string;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public hasPrototypeProperty(): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public setInstanceIdValue(id: number, value: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public isGeneratorFunction(): boolean;
				public findInstanceIdInfo(name: string): number;
				public getClassPrototype(): org.mozilla.javascript.Scriptable;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public fillConstructorProperties(ctor: org.mozilla.javascript.IdFunctionObject): void;
				public isConst(name: string): boolean;
				public setPrototypePropertyAttributes(attributes: number): void;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public findInstanceIdInfo(s: string): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				public createObject(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public constructor(isGenerator: boolean);
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public findInstanceIdInfo(key: org.mozilla.javascript.Symbol): number;
				public setImmunePrototypeProperty(value: any): void;
				public delete(param0: string): void;
				public getInstanceIdValue(id: number): any;
				public setPrototypeProperty(prototype: any): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public getArity(): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public getTypeOf(): string;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public static getClassPrototype(scope: org.mozilla.javascript.Scriptable, className: string): org.mozilla.javascript.Scriptable;
				public getInstanceIdName(id: number): string;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public setInstanceIdAttributes(id: number, attr: number): void;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public setStandardPropertyAttributes(attributes: number): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public getLength(): number;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public setupDefaultPrototype(): any;
				public getPrototypeProperty(): any;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
				public delete(param0: number): void;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getFunctionName(): string;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public constructor(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, targetFunction: org.mozilla.javascript.Callable, boundThis: org.mozilla.javascript.Scriptable, boundArgs: any[]);
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				public constructor(isGenerator: boolean);
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, extraArgs: any[]): org.mozilla.javascript.Scriptable;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, extraArgs: any[]): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public getLength(): number;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
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
				public clearCaches(): void;
				/** @deprecated */
				public setInvokerOptimizationEnabled(enabled: boolean): void;
				public setCachingEnabled(enabled: boolean): void;
				/** @deprecated */
				public isInvokerOptimizationEnabled(): boolean;
				public static get(scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.ClassCache;
				public associate(topScope: org.mozilla.javascript.ScriptableObject): boolean;
				public newClassSerialNumber(): number;
				public isCachingEnabled(): boolean;
				public constructor();
			}
			export module ClassCache {
				export class CacheKey extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.ClassCache.CacheKey>;
					public equals(obj: any): boolean;
					public constructor(cls: java.lang.Class<any>, securityContext: any);
					public hashCode(): number;
				}
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
				public compile(compilerEnv: org.mozilla.javascript.CompilerEnvirons, tree: org.mozilla.javascript.ast.ScriptNode, encodedSource: string, returnFunction: boolean): org.mozilla.javascript.InterpreterData;
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
				public setActivationNames(activationNames: java.util.Set<string>): void;
				public isXmlAvailable(): boolean;
				public recoverFromErrors(): boolean;
				public setReservedKeywordAsIdentifier(flag: boolean): void;
				public isIdeMode(): boolean;
				public isGeneratingSource(): boolean;
				public setRecordingLocalJsDocComments(record: boolean): void;
				public constructor();
				public initFromContext(cx: org.mozilla.javascript.Context): void;
				public getLanguageVersion(): number;
				public isAllowMemberExprAsFunctionName(): boolean;
				public getOptimizationLevel(): number;
				public isRecordingComments(): boolean;
				public setWarnTrailingComma(warn: boolean): void;
				public setGenerateObserverCount(generateObserverCount: boolean): void;
				public isGenerateDebugInfo(): boolean;
				public setStrictMode(strict: boolean): void;
				public getErrorReporter(): org.mozilla.javascript.ErrorReporter;
				public setAllowMemberExprAsFunctionName(flag: boolean): void;
				public setXmlAvailable(flag: boolean): void;
				public getAllowSharpComments(): boolean;
				public isReservedKeywordAsIdentifier(): boolean;
				public setAllowSharpComments(allow: boolean): void;
				public isStrictMode(): boolean;
				public static ideEnvirons(): org.mozilla.javascript.CompilerEnvirons;
				public isRecordingLocalJsDocComments(): boolean;
				public getActivationNames(): java.util.Set<string>;
				public isGenerateObserverCount(): boolean;
				public setErrorReporter(errorReporter: org.mozilla.javascript.ErrorReporter): void;
				public setRecordingComments(record: boolean): void;
				public setIdeMode(ide: boolean): void;
				public setOptimizationLevel(level: number): void;
				public getWarnTrailingComma(): boolean;
				public setLanguageVersion(languageVersion: number): void;
				public setRecoverFromErrors(recover: boolean): void;
				public setGenerateDebugInfo(flag: boolean): void;
				public setGeneratingSource(generatingSource: boolean): void;
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
				public constructor(str1: string, str2: string);
				public length(): number;
				public subSequence(start: number, end: number): string;
				public charAt(index: number): string;
				public chars(): java.util.stream.IntStream;
				public codePoints(): java.util.stream.IntStream;
				public toString(): string;
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
			export class Constructable extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.Constructable>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.Constructable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				});
				public constructor();
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Context extends java.lang.Object implements java.io.Closeable {
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
				public static FEATURE_THREAD_SAFE_OBJECTS: number;
				public static FEATURE_INTEGER_WITHOUT_DECIMAL_PLACE: number;
				public static FEATURE_LITTLE_ENDIAN: number;
				public static FEATURE_ENABLE_XML_SECURE_PARSING: number;
				public static FEATURE_ENABLE_JAVA_MAP_ACCESS: number;
				public static FEATURE_INTL_402: number;
				public static languageVersionProperty: string;
				public static errorReporterProperty: string;
				public static emptyArgs: any[];
				public generateObserverCount: boolean;
				public getE4xImplementationFactory(): org.mozilla.javascript.xml.XMLLib.Factory;
				public static toNumber(value: any): number;
				/** @deprecated */
				public compileReader(scope: org.mozilla.javascript.Scriptable, _in_: java.io.Reader, sourceName: string, lineno: number, securityDomain: any): org.mozilla.javascript.Script;
				public static isCurrentContextStrict(): boolean;
				public getImplementationVersion(): string;
				public compileFunction(scope: org.mozilla.javascript.Scriptable, source: string, sourceName: string, lineno: number, securityDomain: any): org.mozilla.javascript.Function;
				public unseal(sealKey: any): void;
				public getMaximumInterpreterStackDepth(): number;
				public isActivationNeeded(name: string): boolean;
				public setInstructionObserverThreshold(threshold: number): void;
				/** @deprecated */
				public static enter(cx: org.mozilla.javascript.Context): org.mozilla.javascript.Context;
				public getThreadLocal(key: any): any;
				/** @deprecated */
				public static removeContextListener(listener: org.mozilla.javascript.ContextListener): void;
				public initStandardObjects(): org.mozilla.javascript.ScriptableObject;
				public getErrorReporter(): org.mozilla.javascript.ErrorReporter;
				public static toBoolean(value: any): boolean;
				/** @deprecated */
				public static setCachingEnabled(cachingEnabled: boolean): void;
				public isStrictMode(): boolean;
				/** @deprecated */
				public static toType(value: any, desiredType: java.lang.Class<any>): any;
				public removeThreadLocal(key: any): void;
				public static getDebuggableView(script: org.mozilla.javascript.Script): org.mozilla.javascript.debug.DebuggableScript;
				/** @deprecated */
				public constructor();
				public static getCurrentContext(): org.mozilla.javascript.Context;
				public observeInstructionCount(instructionCount: number): void;
				/** @deprecated */
				public static addContextListener(listener: org.mozilla.javascript.ContextListener): void;
				public stringIsCompilableUnit(source: string): boolean;
				public callFunctionWithContinuations(_function_: org.mozilla.javascript.Callable, scope: org.mozilla.javascript.Scriptable, args: any[]): any;
				public newObject(scope: org.mozilla.javascript.Scriptable, constructorName: string, args: any[]): org.mozilla.javascript.Scriptable;
				public static checkLanguageVersion(version: number): void;
				public executeScriptWithContinuations(script: org.mozilla.javascript.Script, scope: org.mozilla.javascript.Scriptable): any;
				public setErrorReporter(reporter: org.mozilla.javascript.ErrorReporter): org.mozilla.javascript.ErrorReporter;
				public processMicrotasks(): void;
				public static isValidLanguageVersion(version: number): boolean;
				public getLocale(): java.util.Locale;
				public static reportWarning(message: string, t: java.lang.Throwable): void;
				public setJavaToJSONConverter(javaToJSONConverter: any /* any*/): void;
				public isGeneratingSource(): boolean;
				public setOptimizationLevel(optimizationLevel: number): void;
				public seal(sealKey: any): void;
				public initSafeStandardObjects(scope: org.mozilla.javascript.ScriptableObject, sealed: boolean): org.mozilla.javascript.ScriptableObject;
				public captureContinuation(): org.mozilla.javascript.ContinuationPending;
				public static reportRuntimeError(message: string): org.mozilla.javascript.EvaluatorException;
				public compileReader(_in_: java.io.Reader, sourceName: string, lineno: number, securityDomain: any): org.mozilla.javascript.Script;
				public getLanguageVersion(): number;
				public isSealed(): boolean;
				public removePropertyChangeListener(l: java.beans.PropertyChangeListener): void;
				public getJavaToJSONConverter(): any /* any*/;
				public addActivationName(name: string): void;
				public newObject(scope: org.mozilla.javascript.Scriptable, constructorName: string): org.mozilla.javascript.Scriptable;
				public setMaximumInterpreterStackDepth(max: number): void;
				public addPropertyChangeListener(l: java.beans.PropertyChangeListener): void;
				public newArray(scope: org.mozilla.javascript.Scriptable, length: number): org.mozilla.javascript.Scriptable;
				public static throwAsScriptRuntimeEx(e: java.lang.Throwable): java.lang.RuntimeException;
				public static reportError(message: string): void;
				public decompileScript(script: org.mozilla.javascript.Script, indent: number): string;
				public setDebugger(debugger: org.mozilla.javascript.debug.Debugger, contextData: any): void;
				public static exit(): void;
				public setLocale(loc: java.util.Locale): java.util.Locale;
				public static getUndefinedValue(): any;
				public decompileFunctionBody(fun: org.mozilla.javascript.Function, indent: number): string;
				public getApplicationClassLoader(): java.lang.ClassLoader;
				public setLanguageVersion(version: number): void;
				public static call(factory: org.mozilla.javascript.ContextFactory, callable: org.mozilla.javascript.Callable, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public evaluateReader(scope: org.mozilla.javascript.Scriptable, _in_: java.io.Reader, sourceName: string, lineno: number, securityDomain: any): any;
				public static javaToJS(value: any, scope: org.mozilla.javascript.Scriptable, cx: org.mozilla.javascript.Context): any;
				public static javaToJS(value: any, scope: org.mozilla.javascript.Scriptable): any;
				public getFactory(): org.mozilla.javascript.ContextFactory;
				public initStandardObjects(scope: org.mozilla.javascript.ScriptableObject, sealed: boolean): org.mozilla.javascript.ScriptableObject;
				public getTimeZone(): java.util.TimeZone;
				public isGeneratingDebug(): boolean;
				public getOptimizationLevel(): number;
				public putThreadLocal(key: any, value: any): void;
				public enqueueMicrotask(task: java.lang.Runnable): void;
				public static reportRuntimeError(message: string, sourceName: string, lineno: number, lineSource: string, lineOffset: number): org.mozilla.javascript.EvaluatorException;
				public static enter(): org.mozilla.javascript.Context;
				public close(): void;
				public initStandardObjects(scope: org.mozilla.javascript.ScriptableObject): org.mozilla.javascript.Scriptable;
				public static isValidOptimizationLevel(optimizationLevel: number): boolean;
				public setWrapFactory(wrapFactory: org.mozilla.javascript.WrapFactory): void;
				public initSafeStandardObjects(): org.mozilla.javascript.ScriptableObject;
				public compileString(source: string, sourceName: string, lineno: number, securityDomain: any): org.mozilla.javascript.Script;
				public newArray(scope: org.mozilla.javascript.Scriptable, elements: any[]): org.mozilla.javascript.Scriptable;
				public getDebuggerContextData(): any;
				public toString(): string;
				public static reportError(message: string, sourceName: string, lineno: number, lineSource: string, lineOffset: number): void;
				public initSafeStandardObjects(scope: org.mozilla.javascript.ScriptableObject): org.mozilla.javascript.Scriptable;
				public removeActivationName(name: string): void;
				public setGeneratingDebug(generatingDebug: boolean): void;
				public constructor(factory: org.mozilla.javascript.ContextFactory);
				public resumeContinuation(continuation: any, scope: org.mozilla.javascript.Scriptable, functionResult: any): any;
				public getDebugger(): org.mozilla.javascript.debug.Debugger;
				public static toObject(value: any, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public getWrapFactory(): org.mozilla.javascript.WrapFactory;
				public hasFeature(featureIndex: number): boolean;
				public static toString(value: any): string;
				public getClassShutterSetter(): org.mozilla.javascript.Context.ClassShutterSetter;
				public getUnhandledPromiseTracker(): org.mozilla.javascript.UnhandledRejectionTracker;
				public isGeneratingDebugChanged(): boolean;
				public static reportWarning(message: string, sourceName: string, lineno: number, lineSource: string, lineOffset: number): void;
				/** @deprecated */
				public static call(action: org.mozilla.javascript.ContextAction<any>): any;
				public getElements(object: org.mozilla.javascript.Scriptable): any[];
				public setApplicationClassLoader(loader: java.lang.ClassLoader): void;
				public compileImpl(scope: org.mozilla.javascript.Scriptable, sourceString: string, sourceName: string, lineno: number, securityDomain: any, returnFunction: boolean, compiler: org.mozilla.javascript.Evaluator, compilationErrorReporter: org.mozilla.javascript.ErrorReporter): any;
				public evaluateString(scope: org.mozilla.javascript.Scriptable, source: string, sourceName: string, lineno: number, securityDomain: any): any;
				public setSecurityController(controller: org.mozilla.javascript.SecurityController): void;
				/** @deprecated */
				public static toObject(value: any, scope: org.mozilla.javascript.Scriptable, staticType: java.lang.Class<any>): org.mozilla.javascript.Scriptable;
				public decompileFunction(fun: org.mozilla.javascript.Function, indent: number): string;
				public createClassLoader(parent: java.lang.ClassLoader): org.mozilla.javascript.GeneratedClassLoader;
				public setGenerateObserverCount(generateObserverCount: boolean): void;
				public static jsToJava(value: any, desiredType: java.lang.Class<any>): any;
				public static reportWarning(message: string): void;
				public newObject(scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public setTrackUnhandledPromiseRejections(track: boolean): void;
				public static checkOptimizationLevel(optimizationLevel: number): void;
				public setTimeZone(tz: java.util.TimeZone): java.util.TimeZone;
				public setGeneratingSource(generatingSource: boolean): void;
				public setClassShutter(shutter: org.mozilla.javascript.ClassShutter): void;
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
			export class ContextAction<T>  extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.ContextAction<any>>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.ContextAction<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					run(param0: org.mozilla.javascript.Context): T;
				});
				public constructor();
				public run(param0: org.mozilla.javascript.Context): T;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ContextFactory extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.ContextFactory>;
				public removeListener(listener: org.mozilla.javascript.ContextFactory.Listener): void;
				public getE4xImplementationFactory(): org.mozilla.javascript.xml.XMLLib.Factory;
				public static getGlobal(): org.mozilla.javascript.ContextFactory;
				public makeContext(): org.mozilla.javascript.Context;
				public seal(): void;
				/** @deprecated */
				public enter(): org.mozilla.javascript.Context;
				public call(action: org.mozilla.javascript.ContextAction<any>): any;
				public constructor();
				public observeInstructionCount(cx: org.mozilla.javascript.Context, instructionCount: number): void;
				/** @deprecated */
				public exit(): void;
				public onContextCreated(cx: org.mozilla.javascript.Context): void;
				public hasFeature(cx: org.mozilla.javascript.Context, featureIndex: number): boolean;
				public isSealed(): boolean;
				public createClassLoader(parent: java.lang.ClassLoader): org.mozilla.javascript.GeneratedClassLoader;
				public onContextReleased(cx: org.mozilla.javascript.Context): void;
				public initApplicationClassLoader(loader: java.lang.ClassLoader): void;
				public static getGlobalSetter(): org.mozilla.javascript.ContextFactory.GlobalSetter;
				public addListener(listener: org.mozilla.javascript.ContextFactory.Listener): void;
				public static hasExplicitGlobal(): boolean;
				public enterContext(): org.mozilla.javascript.Context;
				public checkNotSealed(): void;
				public doTopCall(callable: org.mozilla.javascript.Callable, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public static initGlobal(factory: org.mozilla.javascript.ContextFactory): void;
				public enterContext(cx: org.mozilla.javascript.Context): org.mozilla.javascript.Context;
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
				public constructor(cause: java.lang.Throwable);
				public getApplicationState(): any;
				public constructor(message: string, cause: java.lang.Throwable);
				public getContinuation(): any;
				public setApplicationState(applicationState: any): void;
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(continuationState: org.mozilla.javascript.NativeContinuation);
				public setContinuation(continuation: org.mozilla.javascript.NativeContinuation): void;
				public constructor();
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
				public static decompile(source: string, flags: number, properties: org.mozilla.javascript.UintMap): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class DefaultErrorReporter extends java.lang.Object implements org.mozilla.javascript.ErrorReporter {
				public static class: java.lang.Class<org.mozilla.javascript.DefaultErrorReporter>;
				public warning(message: string, sourceURI: string, line: number, lineText: string, lineOffset: number): void;
				public warning(param0: string, param1: string, param2: number, param3: string, param4: number): void;
				public runtimeError(param0: string, param1: string, param2: number, param3: string, param4: number): org.mozilla.javascript.EvaluatorException;
				public error(message: string, sourceURI: string, line: number, lineText: string, lineOffset: number): void;
				public runtimeError(message: string, sourceURI: string, line: number, lineText: string, lineOffset: number): org.mozilla.javascript.EvaluatorException;
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
				public constructor(parentLoader: java.lang.ClassLoader);
				public linkClass(param0: java.lang.Class<any>): void;
				public loadClass(name: string, resolve: boolean): java.lang.Class<any>;
				public constructor(parent: java.lang.ClassLoader);
				public constructor();
				/** @deprecated */
				public defineClass(b: number[], off: number, len: number): java.lang.Class<any>;
				public defineClass(name: string, b: number[], off: number, len: number): java.lang.Class<any>;
				public defineClass(name: string, b: java.nio.ByteBuffer, protectionDomain: java.security.ProtectionDomain): java.lang.Class<any>;
				public defineClass(name: string, data: number[]): java.lang.Class<any>;
				public defineClass(name: string, b: number[], off: number, len: number, protectionDomain: java.security.ProtectionDomain): java.lang.Class<any>;
				public loadClass(name: string): java.lang.Class<any>;
				public linkClass(cl: java.lang.Class<any>): void;
				public defineClass(param0: string, param1: number[]): java.lang.Class<any>;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Delegator extends java.lang.Object implements org.mozilla.javascript.Function, org.mozilla.javascript.SymbolScriptable {
				public static class: java.lang.Class<org.mozilla.javascript.Delegator>;
				public obj: org.mozilla.javascript.Scriptable;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public delete(param0: string): void;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public getDelegee(): org.mozilla.javascript.Scriptable;
				public constructor();
				public newInstance(): org.mozilla.javascript.Delegator;
				public delete(name: string): void;
				public put(symbol: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public setParentScope(parent: org.mozilla.javascript.Scriptable): void;
				public constructor(obj: org.mozilla.javascript.Scriptable);
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(hint: java.lang.Class<any>): any;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getIds(): any[];
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public setDelegee(obj: org.mozilla.javascript.Scriptable): void;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public setPrototype(prototype: org.mozilla.javascript.Scriptable): void;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public delete(param0: number): void;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ES6Generator extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.ES6Generator>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(k: org.mozilla.javascript.Symbol): number;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public constructor(scope: org.mozilla.javascript.Scriptable, _function_: org.mozilla.javascript.NativeFunction, savedState: any);
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
				public delete(param0: number): void;
			}
			export module ES6Generator {
				export class State {
					public static class: java.lang.Class<org.mozilla.javascript.ES6Generator.State>;
					public static SUSPENDED_START: org.mozilla.javascript.ES6Generator.State;
					public static SUSPENDED_YIELD: org.mozilla.javascript.ES6Generator.State;
					public static EXECUTING: org.mozilla.javascript.ES6Generator.State;
					public static COMPLETED: org.mozilla.javascript.ES6Generator.State;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): org.mozilla.javascript.ES6Generator.State[];
					public static valueOf(name: string): org.mozilla.javascript.ES6Generator.State;
				}
				export class YieldStarResult extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.ES6Generator.YieldStarResult>;
					public constructor(result: any);
				}
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
				public static RETURN_PROPERTY: string;
				public static VALUE_PROPERTY: string;
				public static RETURN_METHOD: string;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public constructor(scope: org.mozilla.javascript.Scriptable, tag: string);
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public next(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public getTag(): string;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public nextValue(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public static init(scope: org.mozilla.javascript.ScriptableObject, sealed: boolean, prototype: org.mozilla.javascript.IdScriptableObject, tag: string): void;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(k: org.mozilla.javascript.Symbol): number;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public isDone(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): boolean;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
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
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				/** @deprecated */
				public getErrorObject(): org.mozilla.javascript.Scriptable;
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public getName(): string;
				public constructor();
				public details(): string;
				public getErrorMessage(): string;
				/** @deprecated */
				public getSourceName(): string;
				/** @deprecated */
				public getLineSource(): string;
				/** @deprecated */
				public getColumnNumber(): number;
				/** @deprecated */
				public getLineNumber(): number;
				/** @deprecated */
				public constructor(nativeError: org.mozilla.javascript.Scriptable, sourceName: string, lineNumber: number, columnNumber: number, lineSource: string);
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class EmbeddedSlotMap extends java.lang.Object implements org.mozilla.javascript.SlotMap {
				public static class: java.lang.Class<org.mozilla.javascript.EmbeddedSlotMap>;
				public add(newSlot: org.mozilla.javascript.Slot): void;
				public spliterator(): java.util.Spliterator<any>;
				public modify(key: any, index: number, attributes: number): org.mozilla.javascript.Slot;
				public query(param0: any, param1: number): org.mozilla.javascript.Slot;
				public iterator(): java.util.Iterator<org.mozilla.javascript.Slot>;
				public replace(oldSlot: org.mozilla.javascript.Slot, newSlot: org.mozilla.javascript.Slot): void;
				public iterator(): java.util.Iterator<any>;
				public query(key: any, index: number): org.mozilla.javascript.Slot;
				public forEach(action: any /* any*/): void;
				public modify(param0: any, param1: number, param2: number): org.mozilla.javascript.Slot;
				public constructor();
				public size(): number;
				public remove(key: any, index: number): void;
				public add(param0: org.mozilla.javascript.Slot): void;
				public remove(param0: any, param1: number): void;
				public isEmpty(): boolean;
				public replace(param0: org.mozilla.javascript.Slot, param1: org.mozilla.javascript.Slot): void;
			}
			export module EmbeddedSlotMap {
				export class Iter extends java.util.Iterator<org.mozilla.javascript.Slot> {
					public static class: java.lang.Class<org.mozilla.javascript.EmbeddedSlotMap.Iter>;
					public next(): org.mozilla.javascript.Slot;
					public hasNext(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class EqualObjectGraphs extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.EqualObjectGraphs>;
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
				public getSourcePositionFromStack(param0: org.mozilla.javascript.Context, param1: number[]): string;
				public compile(param0: org.mozilla.javascript.CompilerEnvirons, param1: org.mozilla.javascript.ast.ScriptNode, param2: string, param3: boolean): any;
				public getScriptStack(param0: org.mozilla.javascript.RhinoException): java.util.List<string>;
				public createFunctionObject(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any, param3: any): org.mozilla.javascript.Function;
				public setEvalScriptFlag(param0: org.mozilla.javascript.Script): void;
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
				public constructor(cause: java.lang.Throwable);
				/** @deprecated */
				public getSourceName(): string;
				public constructor(detail: string, sourceName: string, lineNumber: number);
				/** @deprecated */
				public getLineSource(): string;
				public constructor(detail: string, sourceName: string, lineNumber: number, lineSource: string, columnNumber: number);
				public constructor(message: string, cause: java.lang.Throwable);
				/** @deprecated */
				public getColumnNumber(): number;
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(detail: string);
				/** @deprecated */
				public getLineNumber(): number;
				public constructor();
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public getDefaultValue(hint: java.lang.Class<any>): any;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Function extends java.lang.Object implements org.mozilla.javascript.Scriptable, org.mozilla.javascript.Callable, org.mozilla.javascript.Constructable {
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
					"<clinit>"(): void;
					call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
					construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
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
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public delete(param0: number): void;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public constructor(name: string, methodOrConstructor: java.lang.reflect.Member, scope: org.mozilla.javascript.Scriptable);
				/** @deprecated */
				public static convertArg(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, arg: any, desired: java.lang.Class<any>): any;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getFunctionName(): string;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static getTypeTag(type: java.lang.Class<any>): number;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public createObject(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				public constructor(isGenerator: boolean);
				public addAsConstructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable, attributes: number): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public getArity(): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public addAsConstructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public getMethodOrConstructor(): java.lang.reflect.Member;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public static convertArg(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, arg: any, typeTag: number): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public getLength(): number;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
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
			export class HashSlotMap extends java.lang.Object implements org.mozilla.javascript.SlotMap {
				public static class: java.lang.Class<org.mozilla.javascript.HashSlotMap>;
				public add(newSlot: org.mozilla.javascript.Slot): void;
				public spliterator(): java.util.Spliterator<any>;
				public modify(key: any, index: number, attributes: number): org.mozilla.javascript.Slot;
				public query(param0: any, param1: number): org.mozilla.javascript.Slot;
				public iterator(): java.util.Iterator<org.mozilla.javascript.Slot>;
				public replace(oldSlot: org.mozilla.javascript.Slot, newSlot: org.mozilla.javascript.Slot): void;
				public iterator(): java.util.Iterator<any>;
				public query(key: any, index: number): org.mozilla.javascript.Slot;
				public forEach(action: any /* any*/): void;
				public modify(param0: any, param1: number, param2: number): org.mozilla.javascript.Slot;
				public constructor();
				public size(): number;
				public remove(key: any, index: number): void;
				public add(param0: org.mozilla.javascript.Slot): void;
				public remove(param0: any, param1: number): void;
				public isEmpty(): boolean;
				public replace(param0: org.mozilla.javascript.Slot, param1: org.mozilla.javascript.Slot): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Hashtable extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.Hashtable>;
				public spliterator(): java.util.Spliterator<any>;
				public iterator(): java.util.Iterator<any>;
				public iterator(): java.util.Iterator<org.mozilla.javascript.Hashtable.Entry>;
				public forEach(action: any /* any*/): void;
				/** @deprecated */
				public get(key: any): any;
				public constructor();
				public size(): number;
				public put(key: any, value: any): void;
				public clear(): void;
				public deleteEntry(key: any): boolean;
				public getEntry(key: any): org.mozilla.javascript.Hashtable.Entry;
				/** @deprecated */
				public delete(key: any): any;
				public has(key: any): boolean;
			}
			export module Hashtable {
				export class Entry extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.mozilla.javascript.Hashtable.Entry>;
					public deleted: boolean;
					public next: org.mozilla.javascript.Hashtable.Entry;
					public prev: org.mozilla.javascript.Hashtable.Entry;
					public key(): any;
					public equals(obj: any): boolean;
					public value(): any;
					public hashCode(): number;
					public equals(o: any): boolean;
				}
				export class Iter extends java.util.Iterator<org.mozilla.javascript.Hashtable.Entry> {
					public static class: java.lang.Class<org.mozilla.javascript.Hashtable.Iter>;
					public next(): org.mozilla.javascript.Hashtable.Entry;
					public hasNext(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class IRFactory extends org.mozilla.javascript.Parser {
				public static class: java.lang.Class<org.mozilla.javascript.IRFactory>;
				public transformTree(root: org.mozilla.javascript.ast.AstRoot): org.mozilla.javascript.ast.ScriptNode;
				public constructor(env: org.mozilla.javascript.CompilerEnvirons);
				public constructor(compilerEnv: org.mozilla.javascript.CompilerEnvirons, errorReporter: org.mozilla.javascript.ErrorReporter);
				public constructor(env: org.mozilla.javascript.CompilerEnvirons, errorReporter: org.mozilla.javascript.ErrorReporter);
				public constructor(compilerEnv: org.mozilla.javascript.CompilerEnvirons);
				public transform(node: org.mozilla.javascript.ast.AstNode): org.mozilla.javascript.Node;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getFunctionName(): string;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public addAsProperty(target: org.mozilla.javascript.Scriptable): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public exportAsScopeProperty(): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public constructor(idcall: org.mozilla.javascript.IdFunctionCall, tag: any, id: number, arity: number);
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public initFunction(name: string, scope: org.mozilla.javascript.Scriptable): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public unknown(): java.lang.RuntimeException;
				public methodId(): number;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public createObject(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				public constructor(isGenerator: boolean);
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public getArity(): number;
				public hasTag(tag: any): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public constructor(idcall: org.mozilla.javascript.IdFunctionCall, tag: any, id: number, name: string, arity: number, scope: org.mozilla.javascript.Scriptable);
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getTag(): any;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public getLength(): number;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public markAsConstructor(prototypeProperty: org.mozilla.javascript.Scriptable): void;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public setInstanceIdValue(id: number, value: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public constructor(idcall: org.mozilla.javascript.IdFunctionCall, tag: any, id: number, arity: number);
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findInstanceIdInfo(s: string): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				public constructor(isGenerator: boolean);
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public findInstanceIdInfo(key: org.mozilla.javascript.Symbol): number;
				public delete(param0: string): void;
				public getInstanceIdValue(id: number): any;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public constructor(idcall: org.mozilla.javascript.IdFunctionCall, tag: any, id: number, name: string, arity: number, scope: org.mozilla.javascript.Scriptable);
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export abstract class IdScriptableObject extends org.mozilla.javascript.ScriptableObject implements org.mozilla.javascript.IdFunctionCall {
				public static class: java.lang.Class<org.mozilla.javascript.IdScriptableObject>;
				public getMaxInstanceId(): number;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getClassName(): string;
				/** @deprecated */
				public setAttributes(index: number, start: org.mozilla.javascript.Scriptable, attributes: number): void;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public addIdFunctionProperty(obj: org.mozilla.javascript.Scriptable, tag: any, id: number, name: string, arity: number): void;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public defaultGet(name: string): any;
				public defineOwnProperty(cx: org.mozilla.javascript.Context, id: any, desc: org.mozilla.javascript.ScriptableObject): void;
				public getAttributes(sym: org.mozilla.javascript.Symbol): number;
				public static instanceIdInfo(attributes: number, id: number): number;
				public setInstanceIdValue(id: number, value: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public exportAsJSClass(maxPrototypeId: number, scope: org.mozilla.javascript.Scriptable, sealed: boolean): org.mozilla.javascript.IdFunctionObject;
				public findInstanceIdInfo(name: string): number;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getAttributes(name: string): number;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public hasPrototypeMap(): boolean;
				public fillConstructorProperties(ctor: org.mozilla.javascript.IdFunctionObject): void;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				/** @deprecated */
				public getAttributes(index: number, start: org.mozilla.javascript.Scriptable): number;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public setAttributes(index: number, attributes: number): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public defaultPut(name: string, value: any): void;
				public initPrototypeValue(id: number, name: string, value: any, attributes: number): void;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public findInstanceIdInfo(key: org.mozilla.javascript.Symbol): number;
				public static ensureType(obj: any, clazz: java.lang.Class<any>, f: org.mozilla.javascript.IdFunctionObject): any;
				public delete(param0: string): void;
				public getInstanceIdValue(id: number): any;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public initPrototypeMethod(tag: any, id: number, propertyName: string, functionName: string, arity: number): org.mozilla.javascript.IdFunctionObject;
				public getAttributes(key: org.mozilla.javascript.Symbol): number;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public getInstanceIdName(id: number): string;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public defineOwnProperty(cx: org.mozilla.javascript.Context, key: any, desc: org.mozilla.javascript.ScriptableObject, checkValid: boolean): void;
				public setAttributes(key: org.mozilla.javascript.Symbol, attributes: number): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				/** @deprecated */
				public getAttributes(name: string, start: org.mozilla.javascript.Scriptable): number;
				public setInstanceIdAttributes(id: number, attr: number): void;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setAttributes(name: string, attributes: number): void;
				public initPrototypeConstructor(f: org.mozilla.javascript.IdFunctionObject): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public activatePrototypeMap(maxPrototypeId: number): void;
				public initPrototypeValue(id: number, key: org.mozilla.javascript.Symbol, value: any, attributes: number): void;
				public initPrototypeMethod(tag: any, id: number, name: string, arity: number): org.mozilla.javascript.IdFunctionObject;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public getAttributes(index: number): number;
				public initPrototypeMethod(tag: any, id: number, key: org.mozilla.javascript.Symbol, functionName: string, arity: number): org.mozilla.javascript.IdFunctionObject;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				/** @deprecated */
				public setAttributes(name: string, start: org.mozilla.javascript.Scriptable, attributes: number): void;
				public findPrototypeId(name: string): number;
				public defineOwnProperty(cx: org.mozilla.javascript.Context, id: any, desc: org.mozilla.javascript.ScriptableObject, checkValid: boolean): void;
				public delete(param0: number): void;
				public getOwnPropertyDescriptor(cx: org.mozilla.javascript.Context, id: any): org.mozilla.javascript.ScriptableObject;
				public defaultHas(name: string): boolean;
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
			export class ImplementationVersion extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.ImplementationVersion>;
				public static get(): string;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				/** @deprecated */
				public importPackage(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): void;
				public constructor(cx: org.mozilla.javascript.Context);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public initStandardObjects(cx: org.mozilla.javascript.Context, sealed: boolean): void;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
				public findPrototypeId(name: string): number;
				public delete(param0: number): void;
				public constructor(cx: org.mozilla.javascript.Context, sealed: boolean);
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class InterfaceAdapter extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.InterfaceAdapter>;
				public invoke(cf: org.mozilla.javascript.ContextFactory, target: any, topScope: org.mozilla.javascript.Scriptable, thisObject: any, method: java.lang.reflect.Method, args: any[]): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class InterpretedFunction extends org.mozilla.javascript.NativeFunction implements org.mozilla.javascript.Script {
				public static class: java.lang.Class<org.mozilla.javascript.InterpretedFunction>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public exec(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getFunctionName(): string;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public getDebuggableView(): org.mozilla.javascript.debug.DebuggableScript;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getEncodedSource(): string;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParamOrVarName(index: number): string;
				public getParamOrVarName(param0: number): string;
				public getParamOrVarConst(index: number): boolean;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public getParamAndVarCount(): number;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public resumeGenerator(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, operation: number, state: any, value: any): any;
				public isScript(): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public getParamCount(): number;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public exec(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): any;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getLanguageVersion(): number;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
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
				public compile(compilerEnv: org.mozilla.javascript.CompilerEnvirons, tree: org.mozilla.javascript.ast.ScriptNode, encodedSource: string, returnFunction: boolean): any;
				public createScriptObject(bytecode: any, staticSecurityDomain: any): org.mozilla.javascript.Script;
				public createScriptObject(param0: any, param1: any): org.mozilla.javascript.Script;
				public captureStackInfo(param0: org.mozilla.javascript.RhinoException): void;
				public compile(param0: org.mozilla.javascript.CompilerEnvirons, param1: org.mozilla.javascript.ast.ScriptNode, param2: string, param3: boolean): any;
				public createFunctionObject(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any, param3: any): org.mozilla.javascript.Function;
				public setEvalScriptFlag(script: org.mozilla.javascript.Script): void;
				public getPatchedStack(ex: org.mozilla.javascript.RhinoException, nativeStackTrace: string): string;
				public constructor();
				public getSourcePositionFromStack(param0: org.mozilla.javascript.Context, param1: number[]): string;
				public static resumeGenerator(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, operation: number, savedState: any, value: any): any;
				public getScriptStack(ex: org.mozilla.javascript.RhinoException): java.util.List<string>;
				public static restartContinuation(c: org.mozilla.javascript.NativeContinuation, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): any;
				public createFunctionObject(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, bytecode: any, staticSecurityDomain: any): org.mozilla.javascript.Function;
				public getScriptStack(param0: org.mozilla.javascript.RhinoException): java.util.List<string>;
				public getSourcePositionFromStack(cx: org.mozilla.javascript.Context, linep: number[]): string;
				public setEvalScriptFlag(param0: org.mozilla.javascript.Script): void;
				public static captureContinuation(cx: org.mozilla.javascript.Context): org.mozilla.javascript.NativeContinuation;
				public getPatchedStack(param0: org.mozilla.javascript.RhinoException, param1: string): string;
				public captureStackInfo(ex: org.mozilla.javascript.RhinoException): void;
				public getScriptStackElements(ex: org.mozilla.javascript.RhinoException): org.mozilla.javascript.ScriptStackElement[][];
			}
			export module Interpreter {
				export class CallFrame extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable {
					public static class: java.lang.Class<org.mozilla.javascript.Interpreter.CallFrame>;
					public equals(obj: any): boolean;
					public equals(other: any): boolean;
					public hashCode(): number;
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
				public getParamAndVarCount(): number;
				public getFunctionCount(): number;
				public isTopLevel(): boolean;
				public getFunctionName(): string;
				public getLineNumbers(): number[];
				public isFunction(): boolean;
				public getParamCount(): number;
				public getParamOrVarName(index: number): string;
				public getFunction(index: number): org.mozilla.javascript.debug.DebuggableScript;
				public getParamOrVarConst(index: number): boolean;
				public getParamOrVarName(param0: number): string;
				public getFunction(param0: number): org.mozilla.javascript.debug.DebuggableScript;
				public isGeneratedScript(): boolean;
				public getParent(): org.mozilla.javascript.debug.DebuggableScript;
				public getSourceName(): string;
				public icodeHashCode(): number;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class IteratorLikeIterable extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.IteratorLikeIterable>;
				public close(): void;
				public spliterator(): java.util.Spliterator<any>;
				public iterator(): org.mozilla.javascript.IteratorLikeIterable.Itr;
				public iterator(): java.util.Iterator<any>;
				public constructor(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, target: any);
				public forEach(action: any /* any*/): void;
			}
			export module IteratorLikeIterable {
				export class Itr extends java.util.Iterator<any> {
					public static class: java.lang.Class<org.mozilla.javascript.IteratorLikeIterable.Itr>;
					public setDone(done: boolean): void;
					public next(): any;
					public isDone(): boolean;
					public constructor(this$0: org.mozilla.javascript.IteratorLikeIterable);
					public hasNext(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class JavaAdapter extends java.lang.Object implements org.mozilla.javascript.IdFunctionCall {
				public static class: java.lang.Class<org.mozilla.javascript.JavaAdapter>;
				public static convertResult(result: any, c: java.lang.Class<any>): any;
				public static createAdapterWrapper(obj: org.mozilla.javascript.Scriptable, adapter: any): org.mozilla.javascript.Scriptable;
				public static runScript(script: org.mozilla.javascript.Script): org.mozilla.javascript.Scriptable;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public static callMethod(factory: org.mozilla.javascript.ContextFactory, thisObj: org.mozilla.javascript.Scriptable, f: org.mozilla.javascript.Function, args: any[], argsToWrap: number): any;
				public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
				public static getAdapterSelf(adapterClass: java.lang.Class<any>, adapter: any): any;
				public static writeAdapterObject(javaObject: any, out: java.io.ObjectOutputStream): void;
				public static readAdapterObject(self: org.mozilla.javascript.Scriptable, _in_: java.io.ObjectInputStream): any;
				public static createAdapterCode(functionNames: org.mozilla.javascript.ObjToIntMap, adapterName: string, superClass: java.lang.Class<any>, interfaces: java.lang.Class<any>[], scriptClassName: string): number[];
				public static getFunction(obj: org.mozilla.javascript.Scriptable, functionName: string): org.mozilla.javascript.Function;
			}
			export module JavaAdapter {
				export class JavaAdapterSignature extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.JavaAdapter.JavaAdapterSignature>;
					public equals(obj: any): boolean;
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
					public equals(obj: any): boolean;
					public equals(o: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class JavaMembers_jdk11 extends org.mozilla.javascript.JavaMembers {
				public static class: java.lang.Class<org.mozilla.javascript.JavaMembers_jdk11>;
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
				public constructor(cause: java.lang.Throwable);
				/** @deprecated */
				public getSourceName(): string;
				public constructor(value: any, sourceName: string, lineNumber: number);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				/** @deprecated */
				public getLineNumber(): number;
				public getValue(): any;
				public getDetails(): string;
				public constructor();
				/** @deprecated */
				public constructor(value: any);
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class JavaToJSONConverters extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.JavaToJSONConverters>;
				public static STRING: any /* any*/;
				public static UNDEFINED: any /* any*/;
				public static EMPTY_OBJECT: any /* any*/;
				public static THROW_TYPE_ERROR: any /* any*/;
				public static BEAN: any /* any*/;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Kit extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.Kit>;
				public static addListener(bag: any, listener: any): any;
				public static getListener(bag: any, index: number): any;
				public static codeBug(): java.lang.RuntimeException;
				public static xDigitToInt(c: number, accumulator: number): number;
				public static readReader(reader: java.io.Reader): string;
				public static codeBug(msg: string): java.lang.RuntimeException;
				public static classOrNull(loader: java.lang.ClassLoader, className: string): java.lang.Class<any>;
				public static removeListener(bag: any, listener: any): any;
				public static makeHashKeyFromPair(key1: any, key2: any): any;
				public constructor();
				public static classOrNull(className: string): java.lang.Class<any>;
				public static readStream(is: java.io.InputStream, initialBufferCapacity: number): number[];
			}
			export module Kit {
				export class ComplexKey extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.Kit.ComplexKey>;
					public equals(obj: any): boolean;
					public equals(anotherObj: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class LambdaConstructor extends org.mozilla.javascript.LambdaFunction {
				public static class: java.lang.Class<org.mozilla.javascript.LambdaConstructor>;
				public static CONSTRUCTOR_FUNCTION: number;
				public static CONSTRUCTOR_NEW: number;
				public static CONSTRUCTOR_DEFAULT: number;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public defineConstructorMethod(scope: org.mozilla.javascript.Scriptable, key: org.mozilla.javascript.Symbol, name: string, length: number, target: org.mozilla.javascript.Callable, attributes: number): void;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public definePrototypeProperty(name: string, value: any, attributes: number): void;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public constructor(scope: org.mozilla.javascript.Scriptable, length: number, target: org.mozilla.javascript.Callable);
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public static convertThisObject(thisObj: org.mozilla.javascript.Scriptable, targetClass: java.lang.Class<any>): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				public constructor(isGenerator: boolean);
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public definePrototypeMethod(scope: org.mozilla.javascript.Scriptable, name: string, length: number, target: org.mozilla.javascript.Callable): void;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public defineConstructorMethod(scope: org.mozilla.javascript.Scriptable, name: string, length: number, target: org.mozilla.javascript.Callable, attributes: number, propertyAttributes: number): void;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public definePrototypeProperty(key: org.mozilla.javascript.Symbol, value: any, attributes: number): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public definePrototypeMethod(scope: org.mozilla.javascript.Scriptable, name: string, length: number, target: org.mozilla.javascript.Callable, attributes: number, propertyAttributes: number): void;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, name: string, length: number, flags: number, target: org.mozilla.javascript.Constructable);
				public defineConstructorMethod(scope: org.mozilla.javascript.Scriptable, name: string, length: number, target: org.mozilla.javascript.Callable, attributes: number): void;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, name: string, length: number, target: org.mozilla.javascript.Callable);
				public constructor(scope: org.mozilla.javascript.Scriptable, name: string, length: number, target: org.mozilla.javascript.Constructable);
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class LambdaFunction extends org.mozilla.javascript.BaseFunction {
				public static class: java.lang.Class<org.mozilla.javascript.LambdaFunction>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getFunctionName(): string;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public constructor(scope: org.mozilla.javascript.Scriptable, length: number, target: org.mozilla.javascript.Callable);
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				public constructor(isGenerator: boolean);
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public getArity(): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public getLength(): number;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, name: string, length: number, target: org.mozilla.javascript.Callable);
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class LambdaSlot extends org.mozilla.javascript.Slot {
				public static class: java.lang.Class<org.mozilla.javascript.LambdaSlot>;
				public setValue(value: any, owner: org.mozilla.javascript.Scriptable, start: org.mozilla.javascript.Scriptable): boolean;
				public getValue(start: org.mozilla.javascript.Scriptable): any;
				public setValue(value: any, owner: org.mozilla.javascript.Scriptable, start: org.mozilla.javascript.Scriptable, isThrow: boolean): boolean;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class LazilyLoadedCtor extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.LazilyLoadedCtor>;
				public constructor(scope: org.mozilla.javascript.ScriptableObject, propertyName: string, className: string, sealed: boolean);
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class LazyLoadSlot extends org.mozilla.javascript.Slot {
				public static class: java.lang.Class<org.mozilla.javascript.LazyLoadSlot>;
				public getValue(start: org.mozilla.javascript.Scriptable): any;
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
				public listIterator(start: number): java.util.ListIterator<any>;
				public addAll(param0: java.util.Collection<any>): boolean;
				public toArray(a: any[]): any[];
				public findPrototypeId(s: string): number;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public set(param0: number, param1: any): any;
				public getIndexIds(): java.util.List<java.lang.Integer>;
				public defineOwnProperty(cx: org.mozilla.javascript.Context, id: any, desc: org.mozilla.javascript.ScriptableObject): void;
				public add(param0: any): boolean;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public addAll(param0: number, param1: java.util.Collection<any>): boolean;
				public isEmpty(): boolean;
				public findInstanceIdInfo(name: string): number;
				public getDefaultValue(hint: java.lang.Class<any>): any;
				public listIterator(): java.util.ListIterator<any>;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public remove(index: number): any;
				public replaceAll(operator: any /* any*/): void;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public fillConstructorProperties(ctor: org.mozilla.javascript.IdFunctionObject): void;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				/** @deprecated */
				public getAttributes(index: number, start: org.mozilla.javascript.Scriptable): number;
				public spliterator(): java.util.Spliterator<any>;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public contains(param0: any): boolean;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public forEach(action: any /* any*/): void;
				public toArray(): any[];
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public size(): number;
				public removeIf(filter: any /* any*/): boolean;
				public parallelStream(): java.util.stream.Stream<any>;
				public delete(param0: string): void;
				public getInstanceIdValue(id: number): any;
				public lastIndexOf(o: any): number;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public listIterator(): java.util.ListIterator<any>;
				public getAttributes(key: org.mozilla.javascript.Symbol): number;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public clear(): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public remove(param0: any): boolean;
				public getIds(): any[];
				/** @deprecated */
				public getAttributes(name: string, start: org.mozilla.javascript.Scriptable): number;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public constructor(array: any[]);
				public delete(index: number): void;
				public subList(param0: number, param1: number): java.util.List<any>;
				public initPrototypeId(id: number): void;
				public remove(o: any): boolean;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public toArray(param0: any[]): any[];
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public equals(obj: any): boolean;
				public addAll(index: number, c: java.util.Collection<any>): boolean;
				public findPrototypeId(name: string): number;
				public defineOwnProperty(cx: org.mozilla.javascript.Context, id: any, desc: org.mozilla.javascript.ScriptableObject, checkValid: boolean): void;
				public add(o: any): boolean;
				public delete(param0: number): void;
				public constructor(lengthArg: number);
				public getMaxInstanceId(): number;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public indexOf(o: any): number;
				public indexOf(param0: any): number;
				public remove(param0: number): any;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public containsAll(c: java.util.Collection<any>): boolean;
				public addAll(c: java.util.Collection<any>): boolean;
				public add(param0: number, param1: any): void;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public setInstanceIdValue(id: number, value: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public hashCode(): number;
				public set(index: number, element: any): any;
				public equals(param0: any): boolean;
				public lastIndexOf(param0: any): number;
				public listIterator(param0: number): java.util.ListIterator<any>;
				public getAttributes(name: string): number;
				public removeAll(c: java.util.Collection<any>): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public findInstanceIdInfo(s: string): number;
				public get(index: number): any;
				public stream(): java.util.stream.Stream<any>;
				public iterator(): java.util.Iterator<any>;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(id: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public findInstanceIdInfo(key: org.mozilla.javascript.Symbol): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public getInstanceIdName(id: number): string;
				public getIds(nonEnumerable: boolean, getSymbols: boolean): any[];
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(k: org.mozilla.javascript.Symbol): number;
				public defineOwnProperty(cx: org.mozilla.javascript.Context, key: any, desc: org.mozilla.javascript.ScriptableObject, checkValid: boolean): void;
				public subList(fromIndex: number, toIndex: number): java.util.List<any>;
				public retainAll(c: java.util.Collection<any>): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public setInstanceIdAttributes(id: number, attr: number): void;
				public contains(o: any): boolean;
				public iterator(): java.util.Iterator<any>;
				public sort(c: java.util.Comparator<any>): void;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				/** @deprecated */
				public jsGet_length(): number;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public getAttributes(index: number): number;
				public getLength(): number;
				public get(param0: number): any;
				public add(index: number, element: any): void;
				public getOwnPropertyDescriptor(cx: org.mozilla.javascript.Context, id: any): org.mozilla.javascript.ScriptableObject;
			}
			export module NativeArray {
				export class ElementComparator extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.NativeArray.ElementComparator>;
					public compare(param0: any, param1: any): number;
					public equals(obj: any): boolean;
					public constructor(c: java.util.Comparator<any>);
					public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public compare(x: any, y: any): number;
					public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public equals(param0: any): boolean;
					public constructor();
					public reversed(): java.util.Comparator<any>;
					public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
				}
				export class StringLikeComparator extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.NativeArray.StringLikeComparator>;
					public compare(param0: any, param1: any): number;
					public equals(obj: any): boolean;
					public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public compare(x: any, y: any): number;
					public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public equals(param0: any): boolean;
					public constructor();
					public reversed(): java.util.Comparator<any>;
					public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public constructor(scope: org.mozilla.javascript.Scriptable, tag: string);
				public isDone(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public getTag(): string;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public nextValue(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
				public nextValue(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public isDone(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): boolean;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public delete(param0: number): void;
				public constructor(scope: org.mozilla.javascript.Scriptable, arrayLike: org.mozilla.javascript.Scriptable, type: org.mozilla.javascript.NativeArrayIterator.ARRAY_ITERATOR_TYPE);
			}
			export module NativeArrayIterator {
				export class ARRAY_ITERATOR_TYPE {
					public static class: java.lang.Class<org.mozilla.javascript.NativeArrayIterator.ARRAY_ITERATOR_TYPE>;
					public static ENTRIES: org.mozilla.javascript.NativeArrayIterator.ARRAY_ITERATOR_TYPE;
					public static KEYS: org.mozilla.javascript.NativeArrayIterator.ARRAY_ITERATOR_TYPE;
					public static VALUES: org.mozilla.javascript.NativeArrayIterator.ARRAY_ITERATOR_TYPE;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): org.mozilla.javascript.NativeArrayIterator.ARRAY_ITERATOR_TYPE[];
					public static valueOf(name: string): org.mozilla.javascript.NativeArrayIterator.ARRAY_ITERATOR_TYPE;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeBigInt extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeBigInt>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public fillConstructorProperties(ctor: org.mozilla.javascript.IdFunctionObject): void;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(k: org.mozilla.javascript.Symbol): number;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public defineAttributesForArguments(): void;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeCollectionIterator extends org.mozilla.javascript.ES6Iterator {
				public static class: java.lang.Class<org.mozilla.javascript.NativeCollectionIterator>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public constructor(scope: org.mozilla.javascript.Scriptable, tag: string);
				public isDone(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public constructor(tag: string);
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public nextValue(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
				public nextValue(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public isDone(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): boolean;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public delete(param0: number): void;
				public constructor(scope: org.mozilla.javascript.Scriptable, className: string, type: org.mozilla.javascript.NativeCollectionIterator.Type, iterator: java.util.Iterator<org.mozilla.javascript.Hashtable.Entry>);
			}
			export module NativeCollectionIterator {
				export class Type {
					public static class: java.lang.Class<org.mozilla.javascript.NativeCollectionIterator.Type>;
					public static KEYS: org.mozilla.javascript.NativeCollectionIterator.Type;
					public static VALUES: org.mozilla.javascript.NativeCollectionIterator.Type;
					public static BOTH: org.mozilla.javascript.NativeCollectionIterator.Type;
					public static values(): org.mozilla.javascript.NativeCollectionIterator.Type[];
					public static valueOf(name: string): org.mozilla.javascript.NativeCollectionIterator.Type;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeConsole extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeConsole>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public static format(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): string;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
				public delete(param0: number): void;
				public static init(scope: org.mozilla.javascript.Scriptable, sealed: boolean, printer: org.mozilla.javascript.NativeConsole.ConsolePrinter): void;
			}
			export module NativeConsole {
				export class ConsolePrinter extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.mozilla.javascript.NativeConsole.ConsolePrinter>;
					/**
					 * Constructs a new instance of the org.mozilla.javascript.NativeConsole$ConsolePrinter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						print(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.NativeConsole.Level, param3: any[], param4: org.mozilla.javascript.ScriptStackElement[]): void;
					});
					public constructor();
					public print(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.NativeConsole.Level, param3: any[], param4: org.mozilla.javascript.ScriptStackElement[]): void;
				}
				export class Level {
					public static class: java.lang.Class<org.mozilla.javascript.NativeConsole.Level>;
					public static TRACE: org.mozilla.javascript.NativeConsole.Level;
					public static DEBUG: org.mozilla.javascript.NativeConsole.Level;
					public static INFO: org.mozilla.javascript.NativeConsole.Level;
					public static WARN: org.mozilla.javascript.NativeConsole.Level;
					public static ERROR: org.mozilla.javascript.NativeConsole.Level;
					public static valueOf(name: string): org.mozilla.javascript.NativeConsole.Level;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): org.mozilla.javascript.NativeConsole.Level[];
				}
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public initImplementation(implementation: any): void;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public static isContinuationConstructor(f: org.mozilla.javascript.IdFunctionObject): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public static equalImplementations(c1: org.mozilla.javascript.NativeContinuation, c2: org.mozilla.javascript.NativeContinuation): boolean;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public getImplementation(): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
				public findPrototypeId(name: string): number;
				public delete(param0: number): void;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public fillConstructorProperties(ctor: org.mozilla.javascript.IdFunctionObject): void;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
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
				public setStackDelegated(value: any): void;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public fillConstructorProperties(ctor: org.mozilla.javascript.IdFunctionObject): void;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public getStackDelegated(): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
				public delete(param0: number): void;
				public setStackProvider(re: org.mozilla.javascript.RhinoException): void;
			}
			export module NativeError {
				export class ProtoProps extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.mozilla.javascript.NativeError.ProtoProps>;
					public getPrepareStackTrace(): any;
					public setPrepareStackTrace(value: any): void;
					public getStackTraceLimit(): any;
					public setStackTraceLimit(value: any): void;
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
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public getDebuggableView(): org.mozilla.javascript.debug.DebuggableScript;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getEncodedSource(): string;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParamOrVarName(param0: number): string;
				public getParamOrVarConst(index: number): boolean;
				public initScriptFunction(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, es6GeneratorFunction: boolean): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				public constructor(isGenerator: boolean);
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public getParamAndVarCount(): number;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public resumeGenerator(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, operation: number, state: any, value: any): any;
				public getArity(): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public getParamCount(): number;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				/** @deprecated */
				public jsGet_name(): string;
				public getLanguageVersion(): number;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public getLength(): number;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public initScriptFunction(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): void;
				public delete(param0: number): void;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public constructor(scope: org.mozilla.javascript.Scriptable, _function_: org.mozilla.javascript.NativeFunction, savedState: any);
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
				public delete(param0: number): void;
			}
			export module NativeGenerator {
				export class GeneratorClosedException extends java.lang.RuntimeException {
					public static class: java.lang.Class<org.mozilla.javascript.NativeGenerator.GeneratorClosedException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
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
				public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				/** @deprecated */
				public static constructError(cx: org.mozilla.javascript.Context, error: string, message: string, scope: org.mozilla.javascript.Scriptable, sourceName: string, lineNumber: number, columnNumber: number, lineSource: string): org.mozilla.javascript.EcmaError;
				public constructor();
				/** @deprecated */
				public static constructError(cx: org.mozilla.javascript.Context, error: string, message: string, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.EcmaError;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public static getStopIterationObject(scope: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
				public delete(param0: number): void;
			}
			export module NativeIterator {
				export class StopIteration extends org.mozilla.javascript.NativeObject {
					public static class: java.lang.Class<org.mozilla.javascript.NativeIterator.StopIteration>;
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public getValue(): any;
					public get(key: any): any;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public isEmpty(): boolean;
					public forEach(action: any /* any<any,any>*/): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public size(): number;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public put(param0: any, param1: any): any;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(name: string): void;
					public remove(param0: any): any;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public constructor();
					public keySet(): java.util.Set<any>;
					public delete(param0: number): void;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public replace(key: any, oldValue: any, newValue: any): boolean;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public isConst(param0: string): boolean;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public replace(key: any, value: any): any;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public containsKey(param0: any): boolean;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
					public putAll(m: java.util.Map<any,any>): void;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public containsKey(key: any): boolean;
					public equals(obj: any): boolean;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public constructor(val: any);
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public remove(key: any, value: any): boolean;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public putAll(param0: java.util.Map<any,any>): void;
					public containsValue(param0: any): boolean;
					public getClassName(): string;
					public getOrDefault(key: any, defaultValue: any): any;
					public putIfAbsent(key: any, value: any): any;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public clear(): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public getAllIds(): any[];
					public hashCode(): number;
					public replaceAll(_function_: any /* any<any,any,any>*/): void;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(key: any): any;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public isConst(name: string): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public values(): java.util.Collection<any>;
					public delete(index: number): void;
					public containsValue(value: any): boolean;
					public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public equals(param0: any): boolean;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public put(key: any, value: any): any;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
					public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
					public get(param0: any): any;
				}
				export class WrappedJavaIterator extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.NativeIterator.WrappedJavaIterator>;
					public next(): any;
					public __iterator__(b: boolean): any;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public static parse(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, jtext: string, reviver: org.mozilla.javascript.Callable): any;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public static stringify(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, value: any, replacer: any, space: any): any;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
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
			export class NativeJavaArray extends org.mozilla.javascript.NativeJavaObject implements org.mozilla.javascript.SymbolScriptable {
				public static class: java.lang.Class<org.mozilla.javascript.NativeJavaArray>;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public delete(param0: string): void;
				public static wrap(scope: org.mozilla.javascript.Scriptable, array: any): org.mozilla.javascript.NativeJavaArray;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(symbol: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public get(id: string, start: org.mozilla.javascript.Scriptable): any;
				public getDefaultValue(hint: java.lang.Class<any>): any;
				/** @deprecated */
				public static wrap(scope: org.mozilla.javascript.Scriptable, obj: any, staticType: java.lang.Class<any>): any;
				public unwrap(): any;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getIds(): any[];
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public constructor(scope: org.mozilla.javascript.Scriptable, array: any);
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, javaObject: any, staticType: java.lang.Class<any>, isAdapter: boolean);
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public put(id: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public constructor(scope: org.mozilla.javascript.Scriptable, javaObject: any, staticType: java.lang.Class<any>);
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public delete(param0: number): void;
				public has(id: string, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(value: org.mozilla.javascript.Scriptable): boolean;
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
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public constructor(scope: org.mozilla.javascript.Scriptable, cl: java.lang.Class<any>);
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public put(symbol: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public constructor(scope: org.mozilla.javascript.Scriptable, cl: java.lang.Class<any>, isAdapter: boolean);
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public getDefaultValue(hint: java.lang.Class<any>): any;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, javaObject: any, staticType: java.lang.Class<any>, isAdapter: boolean);
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public constructor(scope: org.mozilla.javascript.Scriptable, javaObject: any, staticType: java.lang.Class<any>);
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public getClassObject(): java.lang.Class<any>;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public unwrap(): any;
				public getIds(): any[];
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public initMembers(): void;
				public delete(param0: number): void;
				public hasInstance(value: org.mozilla.javascript.Scriptable): boolean;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getFunctionName(): string;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor(ctor: org.mozilla.javascript.MemberBox);
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				public constructor(isGenerator: boolean);
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeJavaList extends org.mozilla.javascript.NativeJavaObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeJavaList>;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public delete(param0: string): void;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(symbol: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(hint: java.lang.Class<any>): any;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public unwrap(): any;
				public getIds(): any[];
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, javaObject: any, staticType: java.lang.Class<any>, isAdapter: boolean);
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public constructor(scope: org.mozilla.javascript.Scriptable, javaObject: any, staticType: java.lang.Class<any>);
				public constructor(scope: org.mozilla.javascript.Scriptable, list: any);
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public delete(param0: number): void;
				public hasInstance(value: org.mozilla.javascript.Scriptable): boolean;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeJavaMap extends org.mozilla.javascript.NativeJavaObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeJavaMap>;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public delete(param0: string): void;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(symbol: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(hint: java.lang.Class<any>): any;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public unwrap(): any;
				public getIds(): any[];
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public constructor(scope: org.mozilla.javascript.Scriptable, map: any);
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, javaObject: any, staticType: java.lang.Class<any>, isAdapter: boolean);
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public constructor(scope: org.mozilla.javascript.Scriptable, javaObject: any, staticType: java.lang.Class<any>);
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public delete(param0: number): void;
				public hasInstance(value: org.mozilla.javascript.Scriptable): boolean;
			}
			export module NativeJavaMap {
				export class NativeJavaMapIterator extends org.mozilla.javascript.ES6Iterator {
					public static class: java.lang.Class<org.mozilla.javascript.NativeJavaMap.NativeJavaMapIterator>;
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(name: string): void;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: number): void;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public isConst(param0: string): boolean;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public isDone(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): boolean;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public nextValue(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): any;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public isDone(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): boolean;
					public getIds(): any[];
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public getAllIds(): any[];
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public isConst(name: string): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public delete(index: number): void;
					public getTag(): string;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public nextValue(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
				}
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public getFunctionName(): string;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				public constructor(isGenerator: boolean);
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public constructor(method: java.lang.reflect.Method, name: string);
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeJavaObject extends java.lang.Object implements org.mozilla.javascript.Scriptable, org.mozilla.javascript.SymbolScriptable, org.mozilla.javascript.Wrapper, java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.NativeJavaObject>;
				public prototype: org.mozilla.javascript.Scriptable;
				public parent: org.mozilla.javascript.Scriptable;
				public javaObject: any;
				public staticType: java.lang.Class<any>;
				public members: org.mozilla.javascript.JavaMembers;
				public isAdapter: boolean;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getClassName(): string;
				public delete(param0: string): void;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public static createInterfaceAdapter(type: java.lang.Class<any>, so: org.mozilla.javascript.ScriptableObject): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(symbol: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(hint: java.lang.Class<any>): any;
				/** @deprecated */
				public static wrap(scope: org.mozilla.javascript.Scriptable, obj: any, staticType: java.lang.Class<any>): any;
				public unwrap(): any;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getIds(): any[];
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, javaObject: any, staticType: java.lang.Class<any>, isAdapter: boolean);
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public constructor(scope: org.mozilla.javascript.Scriptable, javaObject: any, staticType: java.lang.Class<any>);
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public initMembers(): void;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public static canConvert(fromObj: any, to: java.lang.Class<any>): boolean;
				public delete(param0: number): void;
				public hasInstance(value: org.mozilla.javascript.Scriptable): boolean;
				/** @deprecated */
				public static coerceType(type: java.lang.Class<any>, value: any): any;
			}
			export module NativeJavaObject {
				export class JavaIterableIterator extends org.mozilla.javascript.ES6Iterator {
					public static class: java.lang.Class<org.mozilla.javascript.NativeJavaObject.JavaIterableIterator>;
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(name: string): void;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: number): void;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public isConst(param0: string): boolean;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public isDone(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): boolean;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public nextValue(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): any;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public isDone(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): boolean;
					public getIds(): any[];
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public getAllIds(): any[];
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public isConst(name: string): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public delete(index: number): void;
					public getTag(): string;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public nextValue(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
				}
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public hashCode(): number;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public get(id: string, start: org.mozilla.javascript.Scriptable): any;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public put(id: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public getDefaultValue(ignored: java.lang.Class<any>): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(id: string, start: org.mozilla.javascript.Scriptable): boolean;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				/** @deprecated */
				public constructor(packageName: string, classLoader: java.lang.ClassLoader);
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				/** @deprecated */
				public constructor(packageName: string);
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public equals(obj: any): boolean;
				public delete(param0: number): void;
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
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public get(id: string, start: org.mozilla.javascript.Scriptable): any;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(id: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public getDefaultValue(ignored: java.lang.Class<any>): any;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				public has(id: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeMap extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeMap>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(k: org.mozilla.javascript.Symbol): number;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
				public delete(param0: number): void;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
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
				public static MAX_SAFE_INTEGER: number;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public fillConstructorProperties(ctor: org.mozilla.javascript.IdFunctionObject): void;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeObject extends org.mozilla.javascript.IdScriptableObject implements java.util.Map<any,any> {
				public static class: java.lang.Class<org.mozilla.javascript.NativeObject>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public putAll(param0: java.util.Map<any,any>): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public getOrDefault(key: any, defaultValue: any): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public forEach(action: any /* any<any,any>*/): void;
				public remove(param0: any): any;
				public hashCode(): number;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public equals(param0: any): boolean;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public isEmpty(): boolean;
				public replace(key: any, value: any): any;
				public containsValue(param0: any): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public fillConstructorProperties(ctor: org.mozilla.javascript.IdFunctionObject): void;
				public isConst(name: string): boolean;
				public replaceAll(_function_: any /* any<any,any,any>*/): void;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public remove(key: any): any;
				public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
				public putAll(m: java.util.Map<any,any>): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public keySet(): java.util.Set<any>;
				public size(): number;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public put(param0: any, param1: any): any;
				public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: any): any;
				public containsKey(key: any): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public replace(key: any, oldValue: any, newValue: any): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public containsKey(param0: any): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public clear(): void;
				public remove(key: any, value: any): boolean;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public containsValue(value: any): boolean;
				public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public put(key: any, value: any): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public values(): java.util.Collection<any>;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
				public putIfAbsent(key: any, value: any): any;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public equals(obj: any): boolean;
				public findPrototypeId(name: string): number;
				public delete(param0: number): void;
				public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
			}
			export module NativeObject {
				export class EntrySet extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
					public static class: java.lang.Class<org.mozilla.javascript.NativeObject.EntrySet>;
					public addAll(param0: java.util.Collection<any>): boolean;
					public isEmpty(): boolean;
					public add(param0: any): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public addAll(c: java.util.Collection<any>): boolean;
					public size(): number;
					public equals(o: any): boolean;
					public contains(o: any): boolean;
					public iterator(): java.util.Iterator<any>;
					public removeAll(c: java.util.Collection<any>): boolean;
					public toArray(param0: any[]): any[];
					public clear(): void;
					public remove(o: any): boolean;
					public containsAll(c: java.util.Collection<any>): boolean;
					public hashCode(): number;
					public contains(param0: any): boolean;
					public toArray(a: any[]): any[];
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public toArray(): any[];
					public parallelStream(): java.util.stream.Stream<any>;
					public add(e: any): boolean;
					public retainAll(c: java.util.Collection<any>): boolean;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public equals(param0: any): boolean;
					public removeIf(filter: any /* any*/): boolean;
					public stream(): java.util.stream.Stream<any>;
				}
				export class KeySet extends java.util.AbstractSet<any> {
					public static class: java.lang.Class<org.mozilla.javascript.NativeObject.KeySet>;
					public addAll(param0: java.util.Collection<any>): boolean;
					public isEmpty(): boolean;
					public add(param0: any): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public addAll(c: java.util.Collection<any>): boolean;
					public size(): number;
					public equals(o: any): boolean;
					public contains(o: any): boolean;
					public iterator(): java.util.Iterator<any>;
					public removeAll(c: java.util.Collection<any>): boolean;
					public toArray(param0: any[]): any[];
					public clear(): void;
					public remove(o: any): boolean;
					public containsAll(c: java.util.Collection<any>): boolean;
					public hashCode(): number;
					public contains(param0: any): boolean;
					public toArray(a: any[]): any[];
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public toArray(): any[];
					public contains(key: any): boolean;
					public parallelStream(): java.util.stream.Stream<any>;
					public add(e: any): boolean;
					public retainAll(c: java.util.Collection<any>): boolean;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public equals(param0: any): boolean;
					public removeIf(filter: any /* any*/): boolean;
					public stream(): java.util.stream.Stream<any>;
				}
				export class ValueCollection extends java.util.AbstractCollection<any> {
					public static class: java.lang.Class<org.mozilla.javascript.NativeObject.ValueCollection>;
					public addAll(param0: java.util.Collection<any>): boolean;
					public equals(obj: any): boolean;
					public isEmpty(): boolean;
					public add(param0: any): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public addAll(c: java.util.Collection<any>): boolean;
					public size(): number;
					public contains(o: any): boolean;
					public iterator(): java.util.Iterator<any>;
					public removeAll(c: java.util.Collection<any>): boolean;
					public toArray(param0: any[]): any[];
					public clear(): void;
					public remove(o: any): boolean;
					public containsAll(c: java.util.Collection<any>): boolean;
					public hashCode(): number;
					public contains(param0: any): boolean;
					public toArray(a: any[]): any[];
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public toArray(): any[];
					public parallelStream(): java.util.stream.Stream<any>;
					public add(e: any): boolean;
					public retainAll(c: java.util.Collection<any>): boolean;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public equals(param0: any): boolean;
					public removeIf(filter: any /* any*/): boolean;
					public stream(): java.util.stream.Stream<any>;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativePromise extends org.mozilla.javascript.ScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativePromise>;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public isConst(name: string): boolean;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public delete(param0: number): void;
			}
			export module NativePromise {
				export class Capability extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.NativePromise.Capability>;
				}
				export class PromiseAllResolver extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.NativePromise.PromiseAllResolver>;
				}
				export class PromiseElementResolver extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.NativePromise.PromiseElementResolver>;
				}
				export class Reaction extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.NativePromise.Reaction>;
				}
				export class ReactionType {
					public static class: java.lang.Class<org.mozilla.javascript.NativePromise.ReactionType>;
					public static FULFILL: org.mozilla.javascript.NativePromise.ReactionType;
					public static REJECT: org.mozilla.javascript.NativePromise.ReactionType;
					public static values(): org.mozilla.javascript.NativePromise.ReactionType[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.mozilla.javascript.NativePromise.ReactionType;
				}
				export class ResolvingFunctions extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.NativePromise.ResolvingFunctions>;
				}
				export class State {
					public static class: java.lang.Class<org.mozilla.javascript.NativePromise.State>;
					public static PENDING: org.mozilla.javascript.NativePromise.State;
					public static FULFILLED: org.mozilla.javascript.NativePromise.State;
					public static REJECTED: org.mozilla.javascript.NativePromise.State;
					public static values(): org.mozilla.javascript.NativePromise.State[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.mozilla.javascript.NativePromise.State;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public getArity(): number;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public getLength(): number;
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeSet extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeSet>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(k: org.mozilla.javascript.Symbol): number;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public findInstanceIdInfo(name: string): number;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getAttributes(name: string): number;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public fillConstructorProperties(ctor: org.mozilla.javascript.IdFunctionObject): void;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				/** @deprecated */
				public getAttributes(index: number, start: org.mozilla.javascript.Scriptable): number;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public findInstanceIdInfo(s: string): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public toCharSequence(): string;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public findInstanceIdInfo(key: org.mozilla.javascript.Symbol): number;
				public delete(param0: string): void;
				public getInstanceIdValue(id: number): any;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public getAttributes(key: org.mozilla.javascript.Symbol): number;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public getInstanceIdName(id: number): string;
				public getIds(nonEnumerable: boolean, getSymbols: boolean): any[];
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(k: org.mozilla.javascript.Symbol): number;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public getIds(): any[];
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				/** @deprecated */
				public getAttributes(name: string, start: org.mozilla.javascript.Scriptable): number;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public getAttributes(index: number): number;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
				public delete(param0: number): void;
				public getOwnPropertyDescriptor(cx: org.mozilla.javascript.Context, id: any): org.mozilla.javascript.ScriptableObject;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public isDone(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public getTag(): string;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public nextValue(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
				public nextValue(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): any;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public isDone(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable): boolean;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public hashCode(): number;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public equals(x: any): boolean;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public static construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.NativeSymbol;
				public fillConstructorProperties(ctor: org.mozilla.javascript.IdFunctionObject): void;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public toString(): string;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public constructor(s: org.mozilla.javascript.NativeSymbol);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public isSymbol(): boolean;
				public getTypeOf(): string;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public equals(obj: any): boolean;
				public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
				public findPrototypeId(name: string): number;
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeWeakMap extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeWeakMap>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(k: org.mozilla.javascript.Symbol): number;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeWeakSet extends org.mozilla.javascript.IdScriptableObject {
				public static class: java.lang.Class<org.mozilla.javascript.NativeWeakSet>;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(s: string): number;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public findPrototypeId(k: org.mozilla.javascript.Symbol): number;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public initPrototypeId(id: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public findPrototypeId(name: string): number;
				public delete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class NativeWith extends java.lang.Object implements org.mozilla.javascript.Scriptable, org.mozilla.javascript.SymbolScriptable, org.mozilla.javascript.IdFunctionCall, java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.NativeWith>;
				public prototype: org.mozilla.javascript.Scriptable;
				public parent: org.mozilla.javascript.Scriptable;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public delete(param0: string): void;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(id: string): void;
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(symbol: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public setParentScope(parent: org.mozilla.javascript.Scriptable): void;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public get(id: string, start: org.mozilla.javascript.Scriptable): any;
				public constructor(parent: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getIds(): any[];
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public updateDotQuery(value: boolean): any;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public put(id: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public setPrototype(prototype: org.mozilla.javascript.Scriptable): void;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public delete(param0: number): void;
				public has(id: string, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(value: org.mozilla.javascript.Scriptable): boolean;
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
				public static SHORTHAND_PROPERTY_NAME: number;
				public static ARROW_FUNCTION_PROP: number;
				public static TEMPLATE_LITERAL_PROP: number;
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
				public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
				public getType(): number;
				public addChildBefore(newChild: org.mozilla.javascript.Node, node: org.mozilla.javascript.Node): void;
				public getFirstChild(): org.mozilla.javascript.Node;
				public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
				public removeChild(child: org.mozilla.javascript.Node): void;
				public hasConsistentReturnUsage(): boolean;
				public setLineno(lineno: number): void;
				public addChildrenToBack(children: org.mozilla.javascript.Node): void;
				public putIntProp(propType: number, prop: number): void;
				public getExistingIntProp(propType: number): number;
				public constructor(nodeType: number, line: number);
				public labelId(): number;
				public getString(): string;
				public setJsDocNode(jsdocNode: org.mozilla.javascript.ast.Comment): void;
				public removeProp(propType: number): void;
				public spliterator(): java.util.Spliterator<any>;
				public getNext(): org.mozilla.javascript.Node;
				public getScope(): org.mozilla.javascript.ast.Scope;
				public hasChildren(): boolean;
				public getBigInt(): java.math.BigInteger;
				public iterator(): java.util.Iterator<any>;
				public forEach(action: any /* any*/): void;
				public toString(): string;
				public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
				public constructor(nodeType: number, child: org.mozilla.javascript.Node);
				public getProp(propType: number): any;
				public replaceChild(child: org.mozilla.javascript.Node, newChild: org.mozilla.javascript.Node): void;
				public static newTarget(): org.mozilla.javascript.Node;
				public getJsDoc(): string;
				public getJsDocNode(): org.mozilla.javascript.ast.Comment;
				public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
				public addChildToBack(child: org.mozilla.javascript.Node): void;
				public removeChildren(): void;
				public addChildrenToFront(children: org.mozilla.javascript.Node): void;
				public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
				public getLastSibling(): org.mozilla.javascript.Node;
				public addChildToFront(child: org.mozilla.javascript.Node): void;
				public addChildAfter(newChild: org.mozilla.javascript.Node, node: org.mozilla.javascript.Node): void;
				public setDouble(number: number): void;
				public resetTargets(): void;
				public getIntProp(propType: number, defaultValue: number): number;
				public setBigInt(bigInt: java.math.BigInteger): void;
				public putProp(propType: number, prop: any): void;
				public static newString(str: string): org.mozilla.javascript.Node;
				public replaceChildAfter(prevChild: org.mozilla.javascript.Node, newChild: org.mozilla.javascript.Node): void;
				public toStringTree(treeTop: org.mozilla.javascript.ast.ScriptNode): string;
				public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
				public setType(type: number): org.mozilla.javascript.Node;
				public setScope(s: org.mozilla.javascript.ast.Scope): void;
				public getLineno(): number;
				public getDouble(): number;
				public hasSideEffects(): boolean;
				public static newNumber(number: number): org.mozilla.javascript.Node;
				public static newString(type: number, str: string): org.mozilla.javascript.Node;
				public constructor(nodeType: number);
				public getLastChild(): org.mozilla.javascript.Node;
				public labelId(labelId: number): void;
				public setString(s: string): void;
				public getChildBefore(child: org.mozilla.javascript.Node): org.mozilla.javascript.Node;
			}
			export module Node {
				export class NodeIterator extends java.util.Iterator<org.mozilla.javascript.Node> {
					public static class: java.lang.Class<org.mozilla.javascript.Node.NodeIterator>;
					public next(): org.mozilla.javascript.Node;
					public constructor(this$0: org.mozilla.javascript.Node);
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
				public visitLet(createWith: boolean, parent: org.mozilla.javascript.Node, previous: org.mozilla.javascript.Node, scopeNode: org.mozilla.javascript.Node): org.mozilla.javascript.Node;
				public visitCall(node: org.mozilla.javascript.Node, tree: org.mozilla.javascript.ast.ScriptNode): void;
				public transform(tree: org.mozilla.javascript.ast.ScriptNode, env: org.mozilla.javascript.CompilerEnvirons): void;
				public visitNew(node: org.mozilla.javascript.Node, tree: org.mozilla.javascript.ast.ScriptNode): void;
				public transform(tree: org.mozilla.javascript.ast.ScriptNode, inStrictMode: boolean, env: org.mozilla.javascript.CompilerEnvirons): void;
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
				public setSize(newSize: number): void;
				public indexOf(obj: any): number;
				public set(index: number, value: any): void;
				public peek(): any;
				public get(index: number): any;
				public add(value: any): void;
				public seal(): void;
				public remove(index: number): void;
				public add(index: number, value: any): void;
				public toArray(): any[];
				public constructor();
				public size(): number;
				public push(value: any): void;
				public lastIndexOf(obj: any): number;
				public toArray(array: any[], offset: number): void;
				public pop(): any;
				public clear(): void;
				public isSealed(): boolean;
				public isEmpty(): boolean;
				public toArray(array: any[]): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ObjToIntMap extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.ObjToIntMap>;
				public newIterator(): org.mozilla.javascript.ObjToIntMap.Iterator;
				public get(key: any, defaultValue: number): number;
				public getExisting(key: any): number;
				public intern(keyArg: any): any;
				public constructor();
				public size(): number;
				public remove(key: any): void;
				public put(key: any, value: number): void;
				public getKeys(): any[];
				public getKeys(array: any[], offset: number): void;
				public clear(): void;
				public constructor(keyCountHint: number);
				public isEmpty(): boolean;
				public has(key: any): boolean;
			}
			export module ObjToIntMap {
				export class Iterator extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.ObjToIntMap.Iterator>;
					public getValue(): number;
					public setValue(value: number): void;
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
				public removeParens(node: org.mozilla.javascript.ast.AstNode): org.mozilla.javascript.ast.AstNode;
				public createName(type: number, name: string, child: org.mozilla.javascript.Node): org.mozilla.javascript.Node;
				public constructor(compilerEnv: org.mozilla.javascript.CompilerEnvirons, errorReporter: org.mozilla.javascript.ErrorReporter);
				public eof(): boolean;
				/** @deprecated */
				public parse(sourceReader: java.io.Reader, sourceURI: string, lineno: number): org.mozilla.javascript.ast.AstRoot;
				public setDefaultUseStrictDirective(useStrict: boolean): void;
				public createName(name: string): org.mozilla.javascript.Node;
				public setRequiresActivation(): void;
				public constructor();
				public inUseStrictDirective(): boolean;
				public checkActivationName(name: string, token: number): void;
				public constructor(compilerEnv: org.mozilla.javascript.CompilerEnvirons);
				public createScopeNode(token: number, lineno: number): org.mozilla.javascript.ast.Scope;
				public simpleAssignment(left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node): org.mozilla.javascript.Node;
				public checkMutableReference(n: org.mozilla.javascript.Node): void;
				public parse(sourceString: string, sourceURI: string, lineno: number): org.mozilla.javascript.ast.AstRoot;
				public setIsGenerator(): void;
				public createNumber(number: number): org.mozilla.javascript.Node;
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
				public callWithDomain(securityDomain: any, cx: org.mozilla.javascript.Context, callable: org.mozilla.javascript.Callable, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public createClassLoader(param0: java.lang.ClassLoader, param1: any): org.mozilla.javascript.GeneratedClassLoader;
				public getStaticSecurityDomainClassInternal(): java.lang.Class<any>;
				public createClassLoader(parent: java.lang.ClassLoader, securityDomain: any): org.mozilla.javascript.GeneratedClassLoader;
				public getDynamicSecurityDomain(securityDomain: any): any;
				public constructor();
				public getDynamicSecurityDomain(param0: any): any;
			}
			export module PolicySecurityController {
				export class Loader extends java.security.SecureClassLoader implements org.mozilla.javascript.GeneratedClassLoader {
					public static class: java.lang.Class<org.mozilla.javascript.PolicySecurityController.Loader>;
					public defineClass(name: string, b: number[], off: number, len: number, cs: java.security.CodeSource): java.lang.Class<any>;
					public linkClass(param0: java.lang.Class<any>): void;
					public defineClass(name: string, b: java.nio.ByteBuffer, cs: java.security.CodeSource): java.lang.Class<any>;
					public defineClass(param0: string, param1: number[]): java.lang.Class<any>;
					public defineClass(name: string, b: number[], off: number, len: number): java.lang.Class<any>;
					/** @deprecated */
					public defineClass(b: number[], off: number, len: number): java.lang.Class<any>;
					public defineClass(name: string, data: number[]): java.lang.Class<any>;
					public defineClass(name: string, b: number[], off: number, len: number, protectionDomain: java.security.ProtectionDomain): java.lang.Class<any>;
					public linkClass(cl: java.lang.Class<any>): void;
					public defineClass(name: string, b: java.nio.ByteBuffer, protectionDomain: java.security.ProtectionDomain): java.lang.Class<any>;
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
				public has(cx: org.mozilla.javascript.Context): boolean;
				public delete(cx: org.mozilla.javascript.Context): boolean;
				public constructor();
				public set(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, value: any): any;
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
				public refCall(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Ref;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
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
					find_split(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string, param3: string, param4: org.mozilla.javascript.Scriptable, param5: number[], param6: number[], param7: boolean[], param8: string[][]): number;
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
				public find_split(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string, param3: string, param4: org.mozilla.javascript.Scriptable, param5: number[], param6: number[], param7: boolean[], param8: string[][]): number;
				public js_split(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string, param3: any[]): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ResolvedOverload extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.ResolvedOverload>;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public hashCode(): number;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export abstract class RhinoException extends java.lang.RuntimeException {
				public static class: java.lang.Class<org.mozilla.javascript.RhinoException>;
				public initLineNumber(lineNumber: number): void;
				public getScriptStack(): org.mozilla.javascript.ScriptStackElement[];
				public columnNumber(): number;
				public getScriptStack(limit: number, hideFunction: string): org.mozilla.javascript.ScriptStackElement[];
				public lineNumber(): number;
				public initLineSource(lineSource: string): void;
				public printStackTrace(s: java.io.PrintWriter): void;
				public getScriptStackTrace(limit: number, functionName: string): string;
				public initSourceName(sourceName: string): void;
				public details(): string;
				public static useMozillaStackStyle(flag: boolean): void;
				public sourceName(): string;
				public getScriptStackTrace(): string;
				public initColumnNumber(columnNumber: number): void;
				public static usesMozillaStackStyle(): boolean;
				/** @deprecated */
				public getScriptStackTrace(filter: java.io.FilenameFilter): string;
				public lineSource(): string;
				public getMessage(): string;
				public printStackTrace(s: java.io.PrintStream): void;
				public static setStackStyle(style: org.mozilla.javascript.StackStyle): void;
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
				public static BigIntegerClass: java.lang.Class<any>;
				public static ContextClass: java.lang.Class<any>;
				public static ContextFactoryClass: java.lang.Class<any>;
				public static FunctionClass: java.lang.Class<any>;
				public static ScriptableObjectClass: java.lang.Class<any>;
				public static ScriptableClass: java.lang.Class<org.mozilla.javascript.Scriptable>;
				public static NaN: number;
				public static NaNobj: java.lang.Double;
				public static negativeZero: number;
				public static zeroObj: java.lang.Double;
				public static negativeZeroObj: java.lang.Double;
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
				public static undefCallError(object: any, id: any): java.lang.RuntimeException;
				public static in(a: any, b: any, cx: org.mozilla.javascript.Context): boolean;
				public static newSpecial(cx: org.mozilla.javascript.Context, fun: any, args: any[], scope: org.mozilla.javascript.Scriptable, callType: number): any;
				public static remainder(val1: java.lang.Number, val2: java.lang.Number): java.lang.Number;
				public static typeError(message: string): org.mozilla.javascript.EcmaError;
				public static notFunctionError(obj: any, value: any, propertyName: string): java.lang.RuntimeException;
				public static storeUint32Result(cx: org.mozilla.javascript.Context, value: number): void;
				public static bind(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, id: string): org.mozilla.javascript.Scriptable;
				public static escapeTextValue(value: any, cx: org.mozilla.javascript.Context): string;
				public static exitActivationFunction(cx: org.mozilla.javascript.Context): void;
				public static enterWith(obj: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static initSafeStandardObjects(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.ScriptableObject, sealed: boolean): org.mozilla.javascript.ScriptableObject;
				public static toUint16(val: any): string;
				/** @deprecated */
				public static getMessage1(messageId: string, arg1: any): string;
				public static setObjectElem(obj: any, elem: any, value: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
				public static toNumber(s: string): number;
				public static delete(obj: any, id: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, isName: boolean): any;
				public static enterActivationFunction(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): void;
				public static loadFromIterable(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, arg1: any, setter: any /* any<any,any>*/): boolean;
				public static isPrimitive(obj: any): boolean;
				public static toNumber(args: any[], index: number): number;
				public static leaveWith(scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static rangeErrorById(messageId: string, ...args: any[]): org.mozilla.javascript.EcmaError;
				public static newArrayLiteral(objects: any[], skipIndices: number[], cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static deleteObjectElem(target: org.mozilla.javascript.Scriptable, elem: any, cx: org.mozilla.javascript.Context): boolean;
				/** @deprecated */
				public static refSet(ref: org.mozilla.javascript.Ref, value: any, cx: org.mozilla.javascript.Context): any;
				public static wrapException(t: java.lang.Throwable, scope: org.mozilla.javascript.Scriptable, cx: org.mozilla.javascript.Context): org.mozilla.javascript.Scriptable;
				/** @deprecated */
				public static setFunctionProtoAndParent(fn: org.mozilla.javascript.BaseFunction, scope: org.mozilla.javascript.Scriptable): void;
				/** @deprecated */
				public static getElemFunctionAndThis(obj: any, elem: any, cx: org.mozilla.javascript.Context): org.mozilla.javascript.Callable;
				public static toBoolean(val: any): boolean;
				/** @deprecated */
				public static delete(obj: any, id: any, cx: org.mozilla.javascript.Context, isName: boolean): any;
				public static setFunctionProtoAndParent(fn: org.mozilla.javascript.BaseFunction, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): void;
				public static strictSetName(bound: org.mozilla.javascript.Scriptable, value: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, id: string): any;
				public static toUint32(val: any): number;
				public static propIncrDecr(obj: any, id: string, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, incrDecrMask: number): any;
				public static wrapInt(i: number): java.lang.Integer;
				public static hasTopCall(cx: org.mozilla.javascript.Context): boolean;
				/** @deprecated */
				public static toObject(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, val: any, staticClass: java.lang.Class<any>): org.mozilla.javascript.Scriptable;
				public static toInteger(val: any): number;
				public static initFunction(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, _function_: org.mozilla.javascript.NativeFunction, type: number, fromEvalCode: boolean): void;
				public static toObject(scope: org.mozilla.javascript.Scriptable, val: any): org.mozilla.javascript.Scriptable;
				public static typeErrorThrower(cx: org.mozilla.javascript.Context): org.mozilla.javascript.BaseFunction;
				public static checkRegExpProxy(cx: org.mozilla.javascript.Context): org.mozilla.javascript.RegExpProxy;
				/** @deprecated */
				public static call(cx: org.mozilla.javascript.Context, fun: any, thisArg: any, args: any[], scope: org.mozilla.javascript.Scriptable): any;
				public static getObjectPropNoWarn(obj: any, property: string, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
				public static createFunctionActivation(funObj: org.mozilla.javascript.NativeFunction, scope: org.mozilla.javascript.Scriptable, args: any[], isStrict: boolean): org.mozilla.javascript.Scriptable;
				public static toIterator(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, obj: org.mozilla.javascript.Scriptable, keyOnly: boolean): org.mozilla.javascript.Scriptable;
				public static newCatchScope(t: java.lang.Throwable, lastCatchScope: org.mozilla.javascript.Scriptable, exceptionName: string, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static lastUint32Result(cx: org.mozilla.javascript.Context): number;
				public static memberRef(obj: any, elem: any, cx: org.mozilla.javascript.Context, memberTypeFlags: number): org.mozilla.javascript.Ref;
				/** @deprecated */
				public static typeError1(messageId: string, arg1: any): org.mozilla.javascript.EcmaError;
				public static syntaxError(message: string): org.mozilla.javascript.EcmaError;
				public static getObjectIndex(obj: org.mozilla.javascript.Scriptable, index: number, cx: org.mozilla.javascript.Context): any;
				public static getTemplateLiteralCallSite(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, strings: any[], index: number): org.mozilla.javascript.Scriptable;
				public static nameRef(namespace: any, name: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, memberTypeFlags: number): org.mozilla.javascript.Ref;
				/** @deprecated */
				public static enumNext(enumObj: any): java.lang.Boolean;
				/** @deprecated */
				public static add(val1: string, val2: any): string;
				public static multiply(val1: java.lang.Number, val2: java.lang.Number): java.lang.Number;
				public static toBigInt(val: any): java.math.BigInteger;
				/** @deprecated */
				public static getObjectPropNoWarn(obj: any, property: string, cx: org.mozilla.javascript.Context): any;
				public static toPrimitive(val: any): any;
				public static setName(bound: org.mozilla.javascript.Scriptable, value: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, id: string): any;
				public static isRhinoRuntimeType(cl: java.lang.Class<any>): boolean;
				public static toInteger(args: any[], index: number): number;
				public static subtract(val1: java.lang.Number, val2: java.lang.Number): java.lang.Number;
				public static divide(val1: java.lang.Number, val2: java.lang.Number): java.lang.Number;
				public static setFunctionProtoAndParent(fn: org.mozilla.javascript.BaseFunction, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, es6GeneratorFunction: boolean): void;
				public static signedRightShift(val1: java.lang.Number, val2: java.lang.Number): java.lang.Number;
				public static leaveDotQuery(scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static enumValue(enumObj: any, cx: org.mozilla.javascript.Context): any;
				public static specialRef(obj: any, specialProperty: string, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Ref;
				/** @deprecated */
				public static toObject(scope: org.mozilla.javascript.Scriptable, val: any, staticClass: java.lang.Class<any>): org.mozilla.javascript.Scriptable;
				/** @deprecated */
				public static getObjectElem(obj: any, elem: any, cx: org.mozilla.javascript.Context): any;
				public static sameZero(x: any, y: any): boolean;
				/** @deprecated */
				public static setObjectProp(obj: any, property: string, value: any, cx: org.mozilla.javascript.Context): any;
				public static newObjectLiteral(propertyIds: any[], propertyValues: any[], getterSetters: number[], cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				/** @deprecated */
				public static propIncrDecr(obj: any, id: string, cx: org.mozilla.javascript.Context, incrDecrMask: number): any;
				public static bitwiseAND(val1: java.lang.Number, val2: java.lang.Number): java.lang.Number;
				public static getRegExpProxy(cx: org.mozilla.javascript.Context): org.mozilla.javascript.RegExpProxy;
				public static toObject(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, val: any): org.mozilla.javascript.Scriptable;
				public static getMessageById(messageId: string, ...args: any[]): string;
				public static callIterator(obj: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
				/** @deprecated */
				public static newObjectLiteral(propertyIds: any[], propertyValues: any[], cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static elemIncrDecr(obj: any, index: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, incrDecrMask: number): any;
				public static toInt32(val: any): number;
				/** @deprecated */
				public static enumInit(value: any, cx: org.mozilla.javascript.Context, enumType: number): any;
				public static wrapRegExp(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, compiled: any): org.mozilla.javascript.Scriptable;
				/** @deprecated */
				public static doTopCall(callable: org.mozilla.javascript.Callable, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public static initScript(funObj: org.mozilla.javascript.NativeFunction, thisObj: org.mozilla.javascript.Scriptable, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, evalScript: boolean): void;
				public static createArrowFunctionActivation(funObj: org.mozilla.javascript.NativeFunction, scope: org.mozilla.javascript.Scriptable, args: any[], isStrict: boolean): org.mozilla.javascript.Scriptable;
				public static throwCustomError(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, constructorName: string, message: string): org.mozilla.javascript.JavaScriptException;
				public static compare(val1: java.lang.Number, val2: java.lang.Number, op: number): boolean;
				/** @deprecated */
				public static getMessage(messageId: string, arguments: any[]): string;
				public static testUint32String(str: string): number;
				public static notFoundError(object: org.mozilla.javascript.Scriptable, property: string): java.lang.RuntimeException;
				/** @deprecated */
				public static getMessage4(messageId: string, arg1: any, arg2: any, arg3: any, arg4: any): string;
				public static toLength(args: any[], index: number): number;
				public static leftShift(val1: java.lang.Number, val2: java.lang.Number): java.lang.Number;
				public static applyOrCall(isApply: boolean, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				/** @deprecated */
				public static setFunctionProtoAndParent(fn: org.mozilla.javascript.BaseFunction, scope: org.mozilla.javascript.Scriptable, es6GeneratorFunction: boolean): void;
				public static enumId(enumObj: any, cx: org.mozilla.javascript.Context): any;
				public static setBuiltinProtoAndParent(object: org.mozilla.javascript.ScriptableObject, scope: org.mozilla.javascript.Scriptable, type: org.mozilla.javascript.TopLevel.Builtins): void;
				/** @deprecated */
				public static specialRef(obj: any, specialProperty: string, cx: org.mozilla.javascript.Context): org.mozilla.javascript.Ref;
				/** @deprecated */
				public static typeError3(messageId: string, arg1: string, arg2: string, arg3: string): org.mozilla.javascript.EcmaError;
				public static setObjectElem(obj: org.mozilla.javascript.Scriptable, elem: any, value: any, cx: org.mozilla.javascript.Context): any;
				public static getObjectProp(obj: any, property: string, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
				public static callRef(_function_: org.mozilla.javascript.Callable, thisObj: org.mozilla.javascript.Scriptable, args: any[], cx: org.mozilla.javascript.Context): org.mozilla.javascript.Ref;
				public static wrapNumber(x: number): java.lang.Number;
				/** @deprecated */
				public static enumInit(value: any, cx: org.mozilla.javascript.Context, enumValues: boolean): any;
				public static getPropFunctionAndThis(obj: any, property: string, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Callable;
				public static setObjectProtoAndParent(object: org.mozilla.javascript.ScriptableObject, scope: org.mozilla.javascript.Scriptable): void;
				public static escapeAttributeValue(value: any, cx: org.mozilla.javascript.Context): string;
				public static instanceOf(a: any, b: any, cx: org.mozilla.javascript.Context): boolean;
				/** @deprecated */
				public static getPropFunctionAndThis(obj: any, property: string, cx: org.mozilla.javascript.Context): org.mozilla.javascript.Callable;
				public static getElemFunctionAndThis(obj: any, elem: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Callable;
				/** @deprecated */
				public static refIncrDecr(ref: org.mozilla.javascript.Ref, cx: org.mozilla.javascript.Context, incrDecrMask: number): any;
				/** @deprecated */
				public static typeError2(messageId: string, arg1: any, arg2: any): org.mozilla.javascript.EcmaError;
				public static lastStoredScriptable(cx: org.mozilla.javascript.Context): org.mozilla.javascript.Scriptable;
				public static addInstructionCount(cx: org.mozilla.javascript.Context, instructionsToAdd: number): void;
				public static notFunctionError(value: any, messageHelper: any): java.lang.RuntimeException;
				public static getTopCallScope(cx: org.mozilla.javascript.Context): org.mozilla.javascript.Scriptable;
				public static toNumber(val: any): number;
				public static compare(val1: any, val2: any, op: number): boolean;
				public static initStandardObjects(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.ScriptableObject, sealed: boolean): org.mozilla.javascript.ScriptableObject;
				public static setDefaultNamespace(namespace: any, cx: org.mozilla.javascript.Context): any;
				public static getObjectElem(obj: org.mozilla.javascript.Scriptable, elem: any, cx: org.mozilla.javascript.Context): any;
				public static setRegExpProxy(cx: org.mozilla.javascript.Context, proxy: org.mozilla.javascript.RegExpProxy): void;
				public static escapeString(s: string): string;
				public static nameIncrDecr(scopeChain: org.mozilla.javascript.Scriptable, id: string, cx: org.mozilla.javascript.Context, incrDecrMask: number): any;
				public static toString(args: any[], index: number): string;
				public static typeof(value: any): string;
				/** @deprecated */
				public static getMessage3(messageId: string, arg1: any, arg2: any, arg3: any): string;
				public static toUint32(d: number): number;
				public static isNaN(n: any): boolean;
				public static hasObjectElem(target: org.mozilla.javascript.Scriptable, elem: any, cx: org.mozilla.javascript.Context): boolean;
				public static refDel(ref: org.mozilla.javascript.Ref, cx: org.mozilla.javascript.Context): any;
				public static bitwiseXOR(val1: java.lang.Number, val2: java.lang.Number): java.lang.Number;
				public static getValueFunctionAndThis(value: any, cx: org.mozilla.javascript.Context): org.mozilla.javascript.Callable;
				public static getTopLevelProp(scope: org.mozilla.javascript.Scriptable, id: string): any;
				/** @deprecated */
				public static setObjectIndex(obj: any, dblIndex: number, param2: any, value: org.mozilla.javascript.Context): any;
				public static getObjectIndex(obj: any, dblIndex: number, param2: org.mozilla.javascript.Context, cx: org.mozilla.javascript.Scriptable): any;
				public static setEnumNumbers(enumObj: any, enumNumbers: boolean): void;
				public static newBuiltinObject(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, type: org.mozilla.javascript.TopLevel.Builtins, args: any[]): org.mozilla.javascript.Scriptable;
				public static add(val1: any, val2: any, cx: org.mozilla.javascript.Context): any;
				public static isIteratorDone(cx: org.mozilla.javascript.Context, result: any): boolean;
				public static refIncrDecr(ref: org.mozilla.javascript.Ref, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, incrDecrMask: number): any;
				public static typeofName(scope: org.mozilla.javascript.Scriptable, id: string): string;
				public static searchDefaultNamespace(cx: org.mozilla.javascript.Context): any;
				public static shallowEq(x: any, y: any): boolean;
				public static isObject(value: any): boolean;
				/** @deprecated */
				public static getObjectIndex(obj: any, dblIndex: number, param2: org.mozilla.javascript.Context): any;
				public static setObjectIndex(obj: org.mozilla.javascript.Scriptable, index: number, value: any, cx: org.mozilla.javascript.Context): any;
				public static throwError(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, message: string): org.mozilla.javascript.JavaScriptException;
				public static setObjectProp(obj: org.mozilla.javascript.Scriptable, property: string, value: any, cx: org.mozilla.javascript.Context): any;
				public static refGet(ref: org.mozilla.javascript.Ref, cx: org.mozilla.javascript.Context): any;
				public static nameRef(name: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, memberTypeFlags: number): org.mozilla.javascript.Ref;
				public static memberRef(obj: any, namespace: any, elem: any, cx: org.mozilla.javascript.Context, memberTypeFlags: number): org.mozilla.javascript.Ref;
				public static toBigInt(s: string): java.math.BigInteger;
				public static isJSWhitespaceOrLineTerminator(c: number): boolean;
				public static wrapBoolean(b: boolean): java.lang.Boolean;
				public static getArrayElements(object: org.mozilla.javascript.Scriptable): any[];
				public static toPrimitive(val: any, typeHint: java.lang.Class<any>): any;
				public static notFunctionError(value: any): java.lang.RuntimeException;
				public static toCharSequence(val: any): string;
				/** @deprecated */
				public static typeErrorThrower(): org.mozilla.javascript.BaseFunction;
				public static isArrayObject(obj: any): boolean;
				public static negate(val: java.lang.Number): java.lang.Number;
				/** @deprecated */
				public static typeError0(messageId: string): org.mozilla.javascript.EcmaError;
				public static refSet(ref: org.mozilla.javascript.Ref, value: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
				/** @deprecated */
				public static createFunctionActivation(funObj: org.mozilla.javascript.NativeFunction, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				/** @deprecated */
				public static getMessage0(messageId: string): string;
				public static name(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, name: string): any;
				/** @deprecated */
				public static toObjectOrNull(cx: org.mozilla.javascript.Context, obj: any): org.mozilla.javascript.Scriptable;
				/** @deprecated */
				public static delete(obj: any, id: any, cx: org.mozilla.javascript.Context): any;
				public static padArguments(args: any[], count: number): any[];
				public static toString(val: any): string;
				public static rangeError(message: string): org.mozilla.javascript.EcmaError;
				public static undefReadError(object: any, id: any): java.lang.RuntimeException;
				public static setConst(bound: org.mozilla.javascript.Scriptable, value: any, cx: org.mozilla.javascript.Context, id: string): any;
				/** @deprecated */
				public static add(val1: any, val2: string): string;
				public static callSpecial(cx: org.mozilla.javascript.Context, fun: org.mozilla.javascript.Callable, thisObj: org.mozilla.javascript.Scriptable, args: any[], scope: org.mozilla.javascript.Scriptable, callerThis: org.mozilla.javascript.Scriptable, callType: number, filename: string, lineNumber: number): any;
				public static toString(val: number): string;
				public static same(x: any, y: any): boolean;
				/** @deprecated */
				public static getMessage2(messageId: string, arg1: any, arg2: any): string;
				public static bitwiseOR(val1: java.lang.Number, val2: java.lang.Number): java.lang.Number;
				public constructor();
				public static bigIntToString(n: java.math.BigInteger, base: number): string;
				public static newObject(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, constructorName: string, args: any[]): org.mozilla.javascript.Scriptable;
				/** @deprecated */
				public static nameIncrDecr(scopeChain: org.mozilla.javascript.Scriptable, id: string, incrDecrMask: number): any;
				public static updateDotQuery(value: boolean, scope: org.mozilla.javascript.Scriptable): any;
				public static getObjectElem(obj: any, elem: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
				public static doTopCall(callable: org.mozilla.javascript.Callable, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[], isTopLevelStrict: boolean): any;
				public static setObjectIndex(obj: any, dblIndex: number, param2: any, value: org.mozilla.javascript.Context, cx: org.mozilla.javascript.Scriptable): any;
				public static enterDotQuery(value: any, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public toString(): string;
				public static isJSLineTerminator(c: number): boolean;
				public static enumNext(enumObj: any, cx: org.mozilla.javascript.Context): java.lang.Boolean;
				public static getLibraryScopeOrNull(scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.ScriptableObject;
				public static evalSpecial(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisArg: any, args: any[], filename: string, lineNumber: number): any;
				public static toInt32(args: any[], index: number): number;
				public static bitwiseNOT(val: java.lang.Number): java.lang.Number;
				public static constructError(error: string, message: string, lineNumberDelta: number): org.mozilla.javascript.EcmaError;
				public static constructError(error: string, message: string): org.mozilla.javascript.EcmaError;
				public static newObject(fun: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
				/** @deprecated */
				public static setObjectElem(obj: any, elem: any, value: any, cx: org.mozilla.javascript.Context): any;
				public static numberToString(d: number, param1: number): string;
				public static getObjectProp(obj: org.mozilla.javascript.Scriptable, property: string, cx: org.mozilla.javascript.Context): any;
				public static setObjectProp(obj: any, property: string, value: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
				/** @deprecated */
				public static elemIncrDecr(obj: any, index: any, cx: org.mozilla.javascript.Context, incrDecrMask: number): any;
				/** @deprecated */
				public static getObjectProp(obj: any, property: string, cx: org.mozilla.javascript.Context): any;
				public static jsDelegatesTo(lhs: org.mozilla.javascript.Scriptable, rhs: org.mozilla.javascript.Scriptable): boolean;
				public static toNumeric(val: any): java.lang.Number;
				public static escapeString(s: string, escapeQuote: string): string;
				public static toIndex(val: any): number;
				public static syntaxErrorById(messageId: string, ...args: any[]): org.mozilla.javascript.EcmaError;
				public static toObjectOrNull(cx: org.mozilla.javascript.Context, obj: any, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static indexFromString(str: string): number;
				public static getGlobal(cx: org.mozilla.javascript.Context): org.mozilla.javascript.ScriptableObject;
				public static undefWriteError(object: any, id: any, value: any): java.lang.RuntimeException;
				public static getNameFunctionAndThis(name: string, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Callable;
				public static exponentiate(val1: java.lang.Number, val2: java.lang.Number): java.lang.Number;
				public static toInteger(d: number): number;
				public static eq(x: any, y: any): boolean;
				public static constructError(error: string, message: string, sourceName: string, lineNumber: number, lineSource: string, columnNumber: number): org.mozilla.javascript.EcmaError;
				public static typeErrorById(messageId: string, ...args: any[]): org.mozilla.javascript.EcmaError;
				public static toInt32(d: number): number;
				public static enumInit(value: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, enumType: number): any;
			}
			export module ScriptRuntime {
				export class DefaultMessageProvider extends java.lang.Object implements org.mozilla.javascript.ScriptRuntime.MessageProvider {
					public static class: java.lang.Class<org.mozilla.javascript.ScriptRuntime.DefaultMessageProvider>;
					public getMessage(messageId: string, arguments: any[]): string;
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
					public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				}
				export class StringIdOrIndex extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.ScriptRuntime.StringIdOrIndex>;
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
				public constructor();
				public static requireObjectCoercible(cx: org.mozilla.javascript.Context, val: any, idFuncObj: org.mozilla.javascript.IdFunctionObject): any;
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
				public constructor(fileName: string, functionName: string, lineNumber: number);
				public renderMozillaStyle(sb: java.lang.StringBuilder): void;
				public renderV8Style(sb: java.lang.StringBuilder): void;
				public toString(): string;
				public renderJavaStyle(sb: java.lang.StringBuilder): void;
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
					"<clinit>"(): void;
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
				public delete(param0: number): void;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
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
				public defineProperty(key: org.mozilla.javascript.Symbol, value: any, attributes: number): void;
				public static isAccessorDescriptor(desc: org.mozilla.javascript.ScriptableObject): boolean;
				/** @deprecated */
				public setAttributes(index: number, start: org.mozilla.javascript.Scriptable, attributes: number): void;
				public avoidObjectDetection(): boolean;
				public defineOwnProperties(cx: org.mozilla.javascript.Context, props: org.mozilla.javascript.ScriptableObject): void;
				public setCommonDescriptorProperties(attributes: number, defineWritable: boolean): void;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public defineProperty(propertyName: string, delegateTo: any, getter: java.lang.reflect.Method, setter: java.lang.reflect.Method, attributes: number): void;
				public defineOwnProperty(cx: org.mozilla.javascript.Context, id: any, desc: org.mozilla.javascript.ScriptableObject): void;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getAssociatedValue(key: any): any;
				public static callMethod(obj: org.mozilla.javascript.Scriptable, methodName: string, args: any[]): any;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public isEmpty(): boolean;
				public static buildDataDescriptor(scope: org.mozilla.javascript.Scriptable, value: any, attributes: number): org.mozilla.javascript.ScriptableObject;
				public querySlot(cx: org.mozilla.javascript.Context, id: any): org.mozilla.javascript.Slot;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public defineFunctionProperties(names: string[], clazz: java.lang.Class<any>, attributes: number): void;
				/** @deprecated */
				public getAttributes(index: number, start: org.mozilla.javascript.Scriptable): number;
				public checkPropertyDefinition(desc: org.mozilla.javascript.ScriptableObject): void;
				public static ensureScriptableObject(arg: any): org.mozilla.javascript.ScriptableObject;
				public getExternalArrayLength(): any;
				public static hasProperty(obj: org.mozilla.javascript.Scriptable, index: number): boolean;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public static isTrue(value: any): boolean;
				public static putProperty(obj: org.mozilla.javascript.Scriptable, name: string, value: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public size(): number;
				public preventExtensions(): void;
				public static getObjectPrototype(scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static getTopLevelScope(obj: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public static getProperty(obj: org.mozilla.javascript.Scriptable, index: number): any;
				public static defineProperty(destination: org.mozilla.javascript.Scriptable, propertyName: string, value: any, attributes: number): void;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public defineProperty(propertyName: string, clazz: java.lang.Class<any>, attributes: number): void;
				public static getTopScopeValue(scope: org.mozilla.javascript.Scriptable, key: any): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public sameValue(newValue: any, currentValue: any): boolean;
				public static ensureScriptable(arg: any): org.mozilla.javascript.Scriptable;
				public static getClassPrototype(scope: org.mozilla.javascript.Scriptable, className: string): org.mozilla.javascript.Scriptable;
				public delete(name: string): void;
				public applyDescriptorToAttributeBitset(attributes: number, desc: org.mozilla.javascript.ScriptableObject): number;
				public static deleteProperty(obj: org.mozilla.javascript.Scriptable, name: string): boolean;
				public static isFalse(value: any): boolean;
				/** @deprecated */
				public getGetterOrSetter(name: string, index: number, isSetter: boolean): any;
				public static getArrayPrototype(scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public setAttributes(key: org.mozilla.javascript.Symbol, attributes: number): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public isSealed(): boolean;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public static defineClass(scope: org.mozilla.javascript.Scriptable, clazz: java.lang.Class<any>, sealed: boolean): void;
				public getIds(): any[];
				/** @deprecated */
				public getAttributes(name: string, start: org.mozilla.javascript.Scriptable): number;
				public getGetterOrSetter(name: string, index: number, scope: org.mozilla.javascript.Scriptable, isSetter: boolean): any;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public delete(index: number): void;
				public static defineClass(scope: org.mozilla.javascript.Scriptable, clazz: java.lang.Class<any>): void;
				public equivalentValues(value: any): any;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public defineProperty(name: string, getter: any /* any*/, setter: any /* any*/, attributes: number): void;
				public sealObject(): void;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				/** @deprecated */
				public setAttributes(name: string, start: org.mozilla.javascript.Scriptable, attributes: number): void;
				public static getProperty(obj: org.mozilla.javascript.Scriptable, name: string): any;
				public defineOwnProperty(cx: org.mozilla.javascript.Context, id: any, desc: org.mozilla.javascript.ScriptableObject, checkValid: boolean): void;
				public static ensureSymbolScriptable(arg: any): org.mozilla.javascript.SymbolScriptable;
				public delete(param0: number): void;
				public static getPropertyIds(obj: org.mozilla.javascript.Scriptable): any[];
				public static isDataDescriptor(desc: org.mozilla.javascript.ScriptableObject): boolean;
				public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
				public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public getClassName(): string;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public isExtensible(): boolean;
				public constructor();
				public checkPropertyChange(id: any, current: org.mozilla.javascript.ScriptableObject, desc: org.mozilla.javascript.ScriptableObject): void;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static callMethod(cx: org.mozilla.javascript.Context, obj: org.mozilla.javascript.Scriptable, methodName: string, args: any[]): any;
				public getAttributes(sym: org.mozilla.javascript.Symbol): number;
				public static defineClass(scope: org.mozilla.javascript.Scriptable, clazz: java.lang.Class<any>, sealed: boolean, mapInheritance: boolean): string;
				public static getProperty(obj: org.mozilla.javascript.Scriptable, key: org.mozilla.javascript.Symbol): any;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public setGetterOrSetter(name: string, index: number, getterOrSetter: org.mozilla.javascript.Callable, isSetter: boolean): void;
				public static putProperty(obj: org.mozilla.javascript.Scriptable, key: org.mozilla.javascript.Symbol, value: any): void;
				public getAttributes(name: string): number;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public defineProperty(propertyName: string, value: any, attributes: number): void;
				public setAttributes(index: number, attributes: number): void;
				public static getTypedProperty(s: org.mozilla.javascript.Scriptable, index: number, type: java.lang.Class<any>): any;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public static getGeneratorFunctionPrototype(scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public static getTypedProperty(s: org.mozilla.javascript.Scriptable, name: string, type: java.lang.Class<any>): any;
				public isGenericDescriptor(desc: org.mozilla.javascript.ScriptableObject): boolean;
				public isGetterOrSetter(name: string, index: number, setter: boolean): boolean;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public static hasProperty(obj: org.mozilla.javascript.Scriptable, name: string): boolean;
				public static hasProperty(obj: org.mozilla.javascript.Scriptable, key: org.mozilla.javascript.Symbol): boolean;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public static deleteProperty(obj: org.mozilla.javascript.Scriptable, index: number): boolean;
				public static redefineProperty(obj: org.mozilla.javascript.Scriptable, name: string, isConst: boolean): void;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public static defineConstProperty(destination: org.mozilla.javascript.Scriptable, propertyName: string): void;
				public getTypeOf(): string;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public static getFunctionPrototype(scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public setAttributes(name: string, attributes: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public getAttributes(index: number): number;
				public getExternalArrayData(): org.mozilla.javascript.ExternalArrayData;
				public static putProperty(obj: org.mozilla.javascript.Scriptable, index: number, value: any): void;
				public static putConstProperty(obj: org.mozilla.javascript.Scriptable, name: string, value: any): void;
				public setExternalArrayData(array: org.mozilla.javascript.ExternalArrayData): void;
				public getOwnPropertyDescriptor(cx: org.mozilla.javascript.Context, id: any): org.mozilla.javascript.ScriptableObject;
				public associateValue(key: any, value: any): any;
			}
			export module ScriptableObject {
				export class KeyComparator extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.ScriptableObject.KeyComparator>;
					public compare(o1: any, o2: any): number;
					public compare(param0: any, param1: any): number;
					public equals(obj: any): boolean;
					public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public equals(param0: any): boolean;
					public constructor();
					public reversed(): java.util.Comparator<any>;
					public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
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
				public static createLoader(parent: java.lang.ClassLoader, staticDomain: any): org.mozilla.javascript.GeneratedClassLoader;
				public static hasGlobal(): boolean;
				/** @deprecated */
				public execWithDomain(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, script: org.mozilla.javascript.Script, securityDomain: any): any;
				public callWithDomain(securityDomain: any, cx: org.mozilla.javascript.Context, callable: org.mozilla.javascript.Callable, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public static initGlobal(controller: org.mozilla.javascript.SecurityController): void;
				public createClassLoader(param0: java.lang.ClassLoader, param1: any): org.mozilla.javascript.GeneratedClassLoader;
				public getStaticSecurityDomainClassInternal(): java.lang.Class<any>;
				public static getStaticSecurityDomainClass(): java.lang.Class<any>;
				public constructor();
				public getDynamicSecurityDomain(param0: any): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class SecurityUtilities extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.SecurityUtilities>;
				public static getSystemProperty(name: string): string;
				public static getProtectionDomain(clazz: java.lang.Class<any>): java.security.ProtectionDomain;
				public static getScriptProtectionDomain(): java.security.ProtectionDomain;
				public constructor();
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Slot extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.mozilla.javascript.Slot>;
				public setValue(value: any, owner: org.mozilla.javascript.Scriptable, start: org.mozilla.javascript.Scriptable): boolean;
				public getValue(start: org.mozilla.javascript.Scriptable): any;
				public throwNoSetterException(start: org.mozilla.javascript.Scriptable, newValue: any): void;
				public constructor(oldSlot: org.mozilla.javascript.Slot);
				public setValue(value: any, owner: org.mozilla.javascript.Scriptable, start: org.mozilla.javascript.Scriptable, isThrow: boolean): boolean;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class SlotMap extends java.lang.Iterable<org.mozilla.javascript.Slot> {
				public static class: java.lang.Class<org.mozilla.javascript.SlotMap>;
				/**
				 * Constructs a new instance of the org.mozilla.javascript.SlotMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					size(): number;
					isEmpty(): boolean;
					modify(param0: any, param1: number, param2: number): org.mozilla.javascript.Slot;
					query(param0: any, param1: number): org.mozilla.javascript.Slot;
					replace(param0: org.mozilla.javascript.Slot, param1: org.mozilla.javascript.Slot): void;
					add(param0: org.mozilla.javascript.Slot): void;
					remove(param0: any, param1: number): void;
					iterator(): java.util.Iterator<any>;
					forEach(action: any /* any*/): void;
					spliterator(): java.util.Spliterator<any>;
				});
				public constructor();
				public spliterator(): java.util.Spliterator<any>;
				public query(param0: any, param1: number): org.mozilla.javascript.Slot;
				public add(param0: org.mozilla.javascript.Slot): void;
				public remove(param0: any, param1: number): void;
				public iterator(): java.util.Iterator<any>;
				public isEmpty(): boolean;
				public forEach(action: any /* any*/): void;
				public modify(param0: any, param1: number, param2: number): org.mozilla.javascript.Slot;
				public replace(param0: org.mozilla.javascript.Slot, param1: org.mozilla.javascript.Slot): void;
				public size(): number;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class SlotMapContainer extends java.lang.Object implements org.mozilla.javascript.SlotMap {
				public static class: java.lang.Class<org.mozilla.javascript.SlotMapContainer>;
				public map: org.mozilla.javascript.SlotMap;
				public add(newSlot: org.mozilla.javascript.Slot): void;
				public dirtySize(): number;
				public spliterator(): java.util.Spliterator<any>;
				public modify(key: any, index: number, attributes: number): org.mozilla.javascript.Slot;
				public query(param0: any, param1: number): org.mozilla.javascript.Slot;
				public iterator(): java.util.Iterator<org.mozilla.javascript.Slot>;
				public unlockRead(stamp: number): void;
				public replace(oldSlot: org.mozilla.javascript.Slot, newSlot: org.mozilla.javascript.Slot): void;
				public iterator(): java.util.Iterator<any>;
				public query(key: any, index: number): org.mozilla.javascript.Slot;
				public forEach(action: any /* any*/): void;
				public checkMapSize(): void;
				public modify(param0: any, param1: number, param2: number): org.mozilla.javascript.Slot;
				public size(): number;
				public remove(key: any, index: number): void;
				public readLock(): number;
				public add(param0: org.mozilla.javascript.Slot): void;
				public remove(param0: any, param1: number): void;
				public isEmpty(): boolean;
				public replace(param0: org.mozilla.javascript.Slot, param1: org.mozilla.javascript.Slot): void;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class Sorting extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.Sorting>;
				public hybridSort(a: any[], cmp: java.util.Comparator<any>): void;
				public insertionSort(a: any[], cmp: java.util.Comparator<any>): void;
				public static get(): org.mozilla.javascript.Sorting;
				public median(a: any[], start: number, end: number, cmp: java.util.Comparator<any>): number;
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
				public get(cx: org.mozilla.javascript.Context): any;
				public has(cx: org.mozilla.javascript.Context): boolean;
				/** @deprecated */
				public set(cx: org.mozilla.javascript.Context, value: any): any;
				public delete(cx: org.mozilla.javascript.Context): boolean;
				public set(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, value: any): any;
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
				public static MOZILLA_LF: org.mozilla.javascript.StackStyle;
				public static V8: org.mozilla.javascript.StackStyle;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): org.mozilla.javascript.StackStyle[];
				public static valueOf(name: string): org.mozilla.javascript.StackStyle;
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
				public constructor(name: string);
				public equals(obj: any): boolean;
				public hashCode(): number;
				public getName(): string;
				public equals(o: any): boolean;
				public toString(): string;
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
				public constructor(obj: org.mozilla.javascript.Scriptable, syncObject: any);
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: org.mozilla.javascript.Symbol): void;
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public delete(name: string): void;
				public put(symbol: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(obj: org.mozilla.javascript.Scriptable);
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(key: org.mozilla.javascript.Symbol): void;
				public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
				public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class ThreadSafeSlotMapContainer extends org.mozilla.javascript.SlotMapContainer {
				public static class: java.lang.Class<org.mozilla.javascript.ThreadSafeSlotMapContainer>;
				public add(newSlot: org.mozilla.javascript.Slot): void;
				public dirtySize(): number;
				public modify(key: any, index: number, attributes: number): org.mozilla.javascript.Slot;
				public query(param0: any, param1: number): org.mozilla.javascript.Slot;
				public unlockRead(stamp: number): void;
				public iterator(): java.util.Iterator<org.mozilla.javascript.Slot>;
				public replace(oldSlot: org.mozilla.javascript.Slot, newSlot: org.mozilla.javascript.Slot): void;
				public query(key: any, index: number): org.mozilla.javascript.Slot;
				public checkMapSize(): void;
				public modify(param0: any, param1: number, param2: number): org.mozilla.javascript.Slot;
				public size(): number;
				public remove(key: any, index: number): void;
				public readLock(): number;
				public add(param0: org.mozilla.javascript.Slot): void;
				public remove(param0: any, param1: number): void;
				public isEmpty(): boolean;
				public replace(param0: org.mozilla.javascript.Slot, param1: org.mozilla.javascript.Slot): void;
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
				public static EXP: number;
				public static DEFAULTNAMESPACE: number;
				public static ESCXMLATTR: number;
				public static ESCXMLTEXT: number;
				public static REF_MEMBER: number;
				public static REF_NS_MEMBER: number;
				public static REF_NAME: number;
				public static REF_NS_NAME: number;
				public static BIGINT: number;
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
				public static ASSIGN_EXP: number;
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
				public static YIELD_STAR: number;
				public static TEMPLATE_LITERAL: number;
				public static TEMPLATE_CHARS: number;
				public static TEMPLATE_LITERAL_SUBST: number;
				public static TAGGED_TEMPLATE_LITERAL: number;
				public static LAST_TOKEN: number;
				public static name(token: number): string;
				public static keywordToName(token: number): string;
				public static isValidToken(code: number): boolean;
				public static typeToName(token: number): string;
				public constructor();
			}
			export module Token {
				export class CommentType {
					public static class: java.lang.Class<org.mozilla.javascript.Token.CommentType>;
					public static LINE: org.mozilla.javascript.Token.CommentType;
					public static BLOCK_COMMENT: org.mozilla.javascript.Token.CommentType;
					public static JSDOC: org.mozilla.javascript.Token.CommentType;
					public static HTML: org.mozilla.javascript.Token.CommentType;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): org.mozilla.javascript.Token.CommentType[];
					public static valueOf(name: string): org.mozilla.javascript.Token.CommentType;
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
				public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getBuiltinCtor(type: org.mozilla.javascript.TopLevel.Builtins): org.mozilla.javascript.BaseFunction;
				public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
				public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
				public constructor();
				public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
				public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public getBuiltinPrototype(type: org.mozilla.javascript.TopLevel.Builtins): org.mozilla.javascript.Scriptable;
				public getDefaultValue(typeHint: java.lang.Class<any>): any;
				public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
				public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
				public getPrototype(): org.mozilla.javascript.Scriptable;
				public getDefaultValue(param0: java.lang.Class<any>): any;
				public isConst(name: string): boolean;
				public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
				public cacheBuiltins(scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
				public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
				public getAllIds(): any[];
				public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
				public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
				public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
				public delete(key: org.mozilla.javascript.Symbol): void;
				public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
				public delete(param0: string): void;
				public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
				public isConst(param0: string): boolean;
				public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
				public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
				public delete(name: string): void;
				public setParentScope(m: org.mozilla.javascript.Scriptable): void;
				public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
				public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
				public getParentScope(): org.mozilla.javascript.Scriptable;
				public static getBuiltinPrototype(scope: org.mozilla.javascript.Scriptable, type: org.mozilla.javascript.TopLevel.Builtins): org.mozilla.javascript.Scriptable;
				public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
				public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
				public getIds(): any[];
				public static getBuiltinCtor(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, type: org.mozilla.javascript.TopLevel.Builtins): org.mozilla.javascript.Function;
				public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
				public delete(index: number): void;
				public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
				public get(index: number, start: org.mozilla.javascript.Scriptable): any;
				public get(key: any): any;
				public setPrototype(m: org.mozilla.javascript.Scriptable): void;
				public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
				public get(name: string, start: org.mozilla.javascript.Scriptable): any;
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
					public static GeneratorFunction: org.mozilla.javascript.TopLevel.Builtins;
					public static BigInt: org.mozilla.javascript.TopLevel.Builtins;
					public static values(): org.mozilla.javascript.TopLevel.Builtins[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.mozilla.javascript.TopLevel.Builtins;
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
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): org.mozilla.javascript.TopLevel.NativeErrors[];
					public static valueOf(name: string): org.mozilla.javascript.TopLevel.NativeErrors;
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
				public put(key: number, value: number): void;
				public getExistingInt(key: number): number;
				public getObject(key: number): any;
				public getInt(key: number, defaultValue: number): number;
				public constructor();
				public size(): number;
				public put(key: number, value: any): void;
				public getKeys(): number[];
				public clear(): void;
				public constructor(initialCapacity: number);
				public isEmpty(): boolean;
				public remove(key: number): void;
				public has(key: number): boolean;
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
				public equals(obj: any): boolean;
				public hashCode(): number;
				public static isUndefined(obj: any): boolean;
				public readResolve(): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class UnhandledRejectionTracker extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.UnhandledRejectionTracker>;
				public enumerate(): java.util.List<any>;
				public process(handler: any /* any*/): void;
				public constructor();
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
				public getContext(param0: any): org.mozilla.javascript.Context;
				public tryToMakeAccessible(param0: java.lang.reflect.AccessibleObject): boolean;
				public getInterfaceProxyHelper(param0: org.mozilla.javascript.ContextFactory, param1: java.lang.Class<any>[]): any;
				public getThreadContextHelper(): any;
				public constructor();
				public newInterfaceProxy(param0: any, param1: org.mozilla.javascript.ContextFactory, param2: org.mozilla.javascript.InterfaceAdapter, param3: any, param4: org.mozilla.javascript.Scriptable): any;
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class WrapFactory extends java.lang.Object {
				public static class: java.lang.Class<org.mozilla.javascript.WrapFactory>;
				public wrapAsJavaObject(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, javaObject: any, staticType: java.lang.Class<any>): org.mozilla.javascript.Scriptable;
				public wrapJavaClass(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, javaClass: java.lang.Class<any>): org.mozilla.javascript.Scriptable;
				public setJavaPrimitiveWrap(value: boolean): void;
				public wrap(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, obj: any, staticType: java.lang.Class<any>): any;
				public wrapNewObject(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, obj: any): org.mozilla.javascript.Scriptable;
				public isJavaPrimitiveWrap(): boolean;
				public constructor();
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export class WrappedException extends org.mozilla.javascript.EvaluatorException {
				public static class: java.lang.Class<org.mozilla.javascript.WrappedException>;
				public constructor(cause: java.lang.Throwable);
				/** @deprecated */
				public unwrap(): any;
				public constructor(detail: string, sourceName: string, lineNumber: number);
				public getWrappedException(): java.lang.Throwable;
				public constructor(detail: string, sourceName: string, lineNumber: number, lineSource: string, columnNumber: number);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(exception: java.lang.Throwable);
				public constructor(detail: string);
				public constructor();
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
					public equals(obj: any): boolean;
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
					public equals(obj: any): boolean;
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
					public equals(obj: any): boolean;
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
					public equals(obj: any): boolean;
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
					public equals(obj: any): boolean;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setIfPosition(ifPosition: number): void;
					public getIfPosition(): number;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setFilterRp(rp: number): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setFilterLp(lp: number): void;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public getResult(): org.mozilla.javascript.ast.AstNode;
					public getFilterLp(): number;
					public addLoop(acl: org.mozilla.javascript.ast.ArrayComprehensionLoop): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public getFilterRp(): number;
					public toSource(): string;
					public setFilter(filter: org.mozilla.javascript.ast.AstNode): void;
					public setResult(result: org.mozilla.javascript.ast.AstNode): void;
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public getFilter(): org.mozilla.javascript.ast.AstNode;
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getLoops(): java.util.List<org.mozilla.javascript.ast.ArrayComprehensionLoop>;
					public setLoops(loops: java.util.List<org.mozilla.javascript.ast.ArrayComprehensionLoop>): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public getBody(): org.mozilla.javascript.ast.AstNode;
					public setBody(body: org.mozilla.javascript.ast.AstNode): void;
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public getDestructuringLength(): number;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setDestructuringLength(destructuringLength: number): void;
					public getSize(): number;
					public addElement(element: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setElements(elements: java.util.List<org.mozilla.javascript.ast.AstNode>): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public getElement(index: number): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public isDestructuring(): boolean;
					public setIsDestructuring(param0: boolean): void;
					public toSource(param0: number): string;
					public setSkipCount(count: number): void;
					public setIsDestructuring(destructuring: boolean): void;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public getSkipCount(): number;
					public getElements(): java.util.List<org.mozilla.javascript.ast.AstNode>;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
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
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public spliterator(): java.util.Spliterator<any>;
					public constructor(operator: number, left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode, operatorPos: number);
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public constructor(pos: number, len: number, left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode);
					public constructor(left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public inlineComment: org.mozilla.javascript.ast.AstNode;
					public hasSideEffects(): boolean;
					public getLineno(): number;
					public printList(items: java.util.List<any>, sb: java.lang.StringBuilder): void;
					public getAbsolutePosition(): number;
					public spliterator(): java.util.Spliterator<any>;
					public getLength(): number;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public shortName(): string;
					public static codeBug(): java.lang.RuntimeException;
					public setPosition(position: number): void;
					public makeIndent(indent: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public constructor();
					public setParent(parent: org.mozilla.javascript.ast.AstNode): void;
					public static operatorToString(op: number): string;
					public constructor(nodeType: number, line: number);
					public depth(): number;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public getParent(): org.mozilla.javascript.ast.AstNode;
					public setRelative(parentPosition: number): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public setLength(length: number): void;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public compareTo(other: org.mozilla.javascript.ast.AstNode): number;
					public assertNotNull(arg: any): void;
					public debugPrint(): string;
					public toSource(param0: number): string;
					public getEnclosingFunction(): org.mozilla.javascript.ast.FunctionNode;
					public setBounds(position: number, end: number): void;
					public setInlineComment(inlineComment: org.mozilla.javascript.ast.AstNode): void;
					public getInlineComment(): org.mozilla.javascript.ast.AstNode;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public getAstRoot(): org.mozilla.javascript.ast.AstRoot;
					public getEnclosingScope(): org.mozilla.javascript.ast.Scope;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getPosition(): number;
					public addChild(kid: org.mozilla.javascript.ast.AstNode): void;
				}
				export module AstNode {
					export class DebugPrintVisitor extends java.lang.Object implements org.mozilla.javascript.ast.NodeVisitor {
						public static class: java.lang.Class<org.mozilla.javascript.ast.AstNode.DebugPrintVisitor>;
						public constructor(buf: java.lang.StringBuilder);
						public visit(param0: org.mozilla.javascript.ast.AstNode): boolean;
						public toString(): string;
						public visit(node: org.mozilla.javascript.ast.AstNode): boolean;
					}
					export class PositionComparator extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.ast.AstNode.PositionComparator>;
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
						public compare(n1: org.mozilla.javascript.ast.AstNode, n2: org.mozilla.javascript.ast.AstNode): number;
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
	export module mozilla {
		export module javascript {
			export module ast {
				export class AstRoot extends org.mozilla.javascript.ast.ScriptNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.AstRoot>;
					public visitAll(visitor: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public debugPrint(): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setComments(comments: java.util.SortedSet<org.mozilla.javascript.ast.Comment>): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public visitComments(visitor: org.mozilla.javascript.ast.NodeVisitor): void;
					public addComment(comment: org.mozilla.javascript.ast.Comment): void;
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public getComments(): java.util.SortedSet<org.mozilla.javascript.ast.Comment>;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public checkParentLinks(): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class BigIntLiteral extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.BigIntLiteral>;
					public setBigInt(value: java.math.BigInteger): void;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setBigInt(bigInt: java.math.BigInteger): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getValue(): string;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public constructor(pos: number, value: string);
					public constructor(pos: number, value: string, bigInt: java.math.BigInteger);
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setValue(value: string): void;
					public toSource(param0: number): string;
					public getBigInt(): java.math.BigInteger;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public addStatement(statement: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public visit(visitor: org.mozilla.javascript.ast.NodeVisitor): void;
					public getBreakLabel(): org.mozilla.javascript.ast.Name;
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public setBreakLabel(label: org.mozilla.javascript.ast.Name): void;
					public getBreakTarget(): org.mozilla.javascript.ast.AstNode;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setBreakTarget(target: org.mozilla.javascript.ast.Jump): void;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public constructor(type: number, lineno: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public setLp(lp: number): void;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public setRp(rp: number): void;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setIfPosition(ifPosition: number): void;
					public getIfPosition(): number;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public getRp(): number;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public getCatchCondition(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setCatchCondition(catchCondition: org.mozilla.javascript.ast.AstNode): void;
					public getBody(): org.mozilla.javascript.ast.Scope;
					public setVarName(varName: org.mozilla.javascript.ast.Name): void;
					public setParens(lp: number, rp: number): void;
					public toSource(param0: number): string;
					public getLp(): number;
					public getVarName(): org.mozilla.javascript.ast.Name;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setBody(body: org.mozilla.javascript.ast.Scope): void;
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
					public setValue(commentString: string): void;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public getCommentType(): org.mozilla.javascript.Token.CommentType;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getValue(): string;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public setCommentType(type: org.mozilla.javascript.Token.CommentType): void;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public constructor(pos: number, len: number, type: org.mozilla.javascript.Token.CommentType, value: string);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public hasSideEffects(): boolean;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public setTrueExpression(trueExpression: org.mozilla.javascript.ast.AstNode): void;
					public constructor(pos: number);
					public setTestExpression(testExpression: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public getTrueExpression(): org.mozilla.javascript.ast.AstNode;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setColonPosition(colonPosition: number): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setQuestionMarkPosition(questionMarkPosition: number): void;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public getColonPosition(): number;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public getTestExpression(): org.mozilla.javascript.ast.AstNode;
					public getFalseExpression(): org.mozilla.javascript.ast.AstNode;
					public getQuestionMarkPosition(): number;
					public toSource(param0: number): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setFalseExpression(falseExpression: org.mozilla.javascript.ast.AstNode): void;
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
					public getLabel(): org.mozilla.javascript.ast.Name;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public visit(visitor: org.mozilla.javascript.ast.NodeVisitor): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public setTarget(target: org.mozilla.javascript.ast.Loop): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public toSource(): string;
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public setLabel(label: org.mozilla.javascript.ast.Name): void;
					public constructor(label: org.mozilla.javascript.ast.Name);
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public constructor(pos: number, len: number, label: org.mozilla.javascript.ast.Name);
					public constructor(type: number, lineno: number);
					public constructor(pos: number, label: org.mozilla.javascript.ast.Name);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getTarget(): org.mozilla.javascript.ast.Loop;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public getCondition(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setWhilePosition(whilePosition: number): void;
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public setCondition(condition: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public getWhilePosition(): number;
					public toSource(depth: number): string;
					public constructor();
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(target: org.mozilla.javascript.ast.AstNode, element: org.mozilla.javascript.ast.AstNode);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public setElement(element: org.mozilla.javascript.ast.AstNode): void;
					public toSource(depth: number): string;
					public constructor();
					public setTarget(target: org.mozilla.javascript.ast.AstNode): void;
					public getLb(): number;
					public getElement(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public setRb(rb: number): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setLb(lb: number): void;
					public setParens(lb: number, rb: number): void;
					public toSource(param0: number): string;
					public getTarget(): org.mozilla.javascript.ast.AstNode;
					public getRb(): number;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public runtimeError(message: string, sourceName: string, line: number, lineSource: string, lineOffset: number): org.mozilla.javascript.EvaluatorException;
					public warning(param0: string, param1: string, param2: number, param3: number): void;
					public error(param0: string, param1: string, param2: number, param3: string, param4: number): void;
					public warning(param0: string, param1: string, param2: number, param3: string, param4: number): void;
					public error(message: string, sourceName: string, line: number, lineSource: string, lineOffset: number): void;
					public getErrors(): java.util.List<org.mozilla.javascript.ast.ParseProblem>;
					public toString(): string;
					public error(param0: string, param1: string, param2: number, param3: number): void;
					public constructor();
					public warning(message: string, sourceName: string, offset: number, length: number): void;
					public runtimeError(param0: string, param1: string, param2: number, param3: string, param4: number): org.mozilla.javascript.EvaluatorException;
					public warning(message: string, sourceName: string, line: number, lineSource: string, lineOffset: number): void;
					public error(message: string, sourceName: string, fileOffset: number, length: number): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public setMessage(message: string): void;
					public getMessage(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public hasSideEffects(): boolean;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setHasResult(): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getExpression(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public constructor(expr: org.mozilla.javascript.ast.AstNode);
					public constructor(pos: number, len: number, expr: org.mozilla.javascript.ast.AstNode);
					public toSource(param0: number): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(expr: org.mozilla.javascript.ast.AstNode, hasResult: boolean);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setExpression(expression: org.mozilla.javascript.ast.AstNode): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public getIterator(): org.mozilla.javascript.ast.AstNode;
					public isForOf(): boolean;
					public getInPosition(): number;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public setInPosition(inPosition: number): void;
					public toSource(depth: number): string;
					public constructor();
					public isForEach(): boolean;
					public setEachPosition(eachPosition: number): void;
					public setIterator(iterator: org.mozilla.javascript.ast.AstNode): void;
					public setIsForOf(isForOf: boolean): void;
					public setIsForEach(isForEach: boolean): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public getEachPosition(): number;
					public getIteratedObject(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public setIteratedObject(object: org.mozilla.javascript.ast.AstNode): void;
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public getInitializer(): org.mozilla.javascript.ast.AstNode;
					public getCondition(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setInitializer(initializer: org.mozilla.javascript.ast.AstNode): void;
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public setCondition(condition: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public setIncrement(increment: org.mozilla.javascript.ast.AstNode): void;
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getIncrement(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public setLp(lp: number): void;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public setArguments(arguments: java.util.List<org.mozilla.javascript.ast.AstNode>): void;
					public spliterator(): java.util.Spliterator<any>;
					public setRp(rp: number): void;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public getArguments(): java.util.List<org.mozilla.javascript.ast.AstNode>;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public setTarget(target: org.mozilla.javascript.ast.AstNode): void;
					public getRp(): number;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setParens(lp: number, rp: number): void;
					public toSource(param0: number): string;
					public getTarget(): org.mozilla.javascript.ast.AstNode;
					public getLp(): number;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public addArgument(arg: org.mozilla.javascript.ast.AstNode): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public getResumptionPoints(): java.util.List<org.mozilla.javascript.Node>;
					public setRequiresActivation(): void;
					public isES6Generator(): boolean;
					public isGetterMethod(): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public setRp(rp: number): void;
					public constructor(pos: number);
					public getFunctionType(): number;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setFunctionName(name: org.mozilla.javascript.ast.Name): void;
					public setBody(body: org.mozilla.javascript.ast.AstNode): void;
					public isExpressionClosure(): boolean;
					public setIsES6Generator(): void;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public constructor();
					public constructor(pos: number, name: org.mozilla.javascript.ast.Name);
					public getRp(): number;
					public isParam(node: org.mozilla.javascript.ast.AstNode): boolean;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public addParam(param: org.mozilla.javascript.ast.AstNode): void;
					public toSource(): string;
					public setParens(lp: number, rp: number): void;
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public getParams(): java.util.List<org.mozilla.javascript.ast.AstNode>;
					public addFunction(fnNode: org.mozilla.javascript.ast.FunctionNode): number;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setLp(lp: number): void;
					public setFunctionIsGetterMethod(): void;
					public requiresActivation(): boolean;
					public setParams(params: java.util.List<org.mozilla.javascript.ast.AstNode>): void;
					public getFunctionName(): org.mozilla.javascript.ast.Name;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setIsExpressionClosure(isExpressionClosure: boolean): void;
					public setFunctionType(type: number): void;
					public getMemberExprNode(): org.mozilla.javascript.ast.AstNode;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public toSource(depth: number): string;
					public isMethod(): boolean;
					public forEach(action: any /* any*/): void;
					public addLiveLocals(node: org.mozilla.javascript.Node, locals: number[]): void;
					public isGenerator(): boolean;
					public getBody(): org.mozilla.javascript.ast.AstNode;
					public isNormalMethod(): boolean;
					public setFunctionIsSetterMethod(): void;
					public getLp(): number;
					public getName(): string;
					public getLiveLocals(): java.util.Map<org.mozilla.javascript.Node,number[]>;
					public setIsGenerator(): void;
					public setFunctionIsNormalMethod(): void;
					public setMemberExprNode(node: org.mozilla.javascript.ast.AstNode): void;
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public isSetterMethod(): boolean;
					public addResumptionPoint(target: org.mozilla.javascript.Node): void;
				}
				export module FunctionNode {
					export class Form {
						public static class: java.lang.Class<org.mozilla.javascript.ast.FunctionNode.Form>;
						public static FUNCTION: org.mozilla.javascript.ast.FunctionNode.Form;
						public static GETTER: org.mozilla.javascript.ast.FunctionNode.Form;
						public static SETTER: org.mozilla.javascript.ast.FunctionNode.Form;
						public static METHOD: org.mozilla.javascript.ast.FunctionNode.Form;
						public static values(): org.mozilla.javascript.ast.FunctionNode.Form[];
						public static valueOf(name: string): org.mozilla.javascript.ast.FunctionNode.Form;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setIfPosition(ifPosition: number): void;
					public setLoops(loops: java.util.List<org.mozilla.javascript.ast.GeneratorExpressionLoop>): void;
					public getLoops(): java.util.List<org.mozilla.javascript.ast.GeneratorExpressionLoop>;
					public getIfPosition(): number;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setFilterRp(rp: number): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setFilterLp(lp: number): void;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public addLoop(acl: org.mozilla.javascript.ast.GeneratorExpressionLoop): void;
					public toSource(depth: number): string;
					public constructor();
					public getResult(): org.mozilla.javascript.ast.AstNode;
					public getFilterLp(): number;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public getFilterRp(): number;
					public toSource(): string;
					public setFilter(filter: org.mozilla.javascript.ast.AstNode): void;
					public setResult(result: org.mozilla.javascript.ast.AstNode): void;
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public getFilter(): org.mozilla.javascript.ast.AstNode;
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public isForEach(): boolean;
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setIsForEach(isForEach: boolean): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public setThenPart(thenPart: org.mozilla.javascript.ast.AstNode): void;
					public setLp(lp: number): void;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public getElsePosition(): number;
					public spliterator(): java.util.Spliterator<any>;
					public setRp(rp: number): void;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setElseKeyWordInlineComment(elseKeyWordInlineComment: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setElsePart(elsePart: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public getThenPart(): org.mozilla.javascript.ast.AstNode;
					public getRp(): number;
					public getElseKeyWordInlineComment(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public getCondition(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setParens(lp: number, rp: number): void;
					public setCondition(condition: org.mozilla.javascript.ast.AstNode): void;
					public toSource(param0: number): string;
					public getLp(): number;
					public setElsePosition(elsePosition: number): void;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public getElsePart(): org.mozilla.javascript.ast.AstNode;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
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
					public hasSideEffects(): boolean;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setOperator(operator: number): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public setLeft(left: org.mozilla.javascript.ast.AstNode): void;
					public toSource(depth: number): string;
					public constructor();
					public getOperator(): number;
					public constructor(pos: number, len: number, left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public getLeft(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public constructor(operator: number, left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode, operatorPos: number);
					public getRight(): org.mozilla.javascript.ast.AstNode;
					public setLeftAndRight(left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode): void;
					public setRight(right: org.mozilla.javascript.ast.AstNode): void;
					public toSource(param0: number): string;
					public getOperatorPosition(): number;
					public setOperatorPosition(operatorPosition: number): void;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public constructor(left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode);
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
					public spliterator(): java.util.Spliterator<any>;
					public getJumpStatement(): org.mozilla.javascript.ast.Jump;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public visit(visitor: org.mozilla.javascript.ast.NodeVisitor): void;
					public getDefault(): org.mozilla.javascript.Node;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public getLoop(): org.mozilla.javascript.ast.Jump;
					public constructor(nodeType: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public setFinally(finallyTarget: org.mozilla.javascript.Node): void;
					public setJumpStatement(jumpStatement: org.mozilla.javascript.ast.Jump): void;
					public getContinue(): org.mozilla.javascript.Node;
					public setContinue(continueTarget: org.mozilla.javascript.Node): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setLoop(loop: org.mozilla.javascript.ast.Jump): void;
					public getFinally(): org.mozilla.javascript.Node;
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public toSource(param0: number): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public constructor(type: number, lineno: number);
					public setDefault(defaultTarget: org.mozilla.javascript.Node): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
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
					public isBooleanLiteral(): boolean;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number, len: number, nodeType: number);
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public setType(nodeType: number): org.mozilla.javascript.ast.KeywordLiteral;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setType(type: number): org.mozilla.javascript.Node;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public visit(visitor: org.mozilla.javascript.ast.NodeVisitor): void;
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setName(name: string): void;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public getName(): string;
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public constructor(type: number, lineno: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public constructor(pos: number, len: number, name: string);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public hasSideEffects(): boolean;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public getStatement(): org.mozilla.javascript.ast.AstNode;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setStatement(statement: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public getLabels(): java.util.List<org.mozilla.javascript.ast.Label>;
					public getFirstLabel(): org.mozilla.javascript.ast.Label;
					public toSource(depth: number): string;
					public constructor();
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public getLabelByName(name: string): org.mozilla.javascript.ast.Label;
					public toSource(param0: number): string;
					public setLabels(labels: java.util.List<org.mozilla.javascript.ast.Label>): void;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public addLabel(label: org.mozilla.javascript.ast.Label): void;
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
					public setLp(lp: number): void;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public setRp(rp: number): void;
					public constructor(pos: number);
					public setVariables(variables: org.mozilla.javascript.ast.VariableDeclaration): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setBody(body: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public getRp(): number;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public toSource(): string;
					public getBody(): org.mozilla.javascript.ast.AstNode;
					public setParens(lp: number, rp: number): void;
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public getVariables(): org.mozilla.javascript.ast.VariableDeclaration;
					public getLp(): number;
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
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
					public setLp(lp: number): void;
					public spliterator(): java.util.Spliterator<any>;
					public setRp(rp: number): void;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public getBody(): org.mozilla.javascript.ast.AstNode;
					public setBody(body: org.mozilla.javascript.ast.AstNode): void;
					public setParens(lp: number, rp: number): void;
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public getLp(): number;
					public constructor();
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public getRp(): number;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setScope(s: org.mozilla.javascript.ast.Scope): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public getDefiningScope(): org.mozilla.javascript.ast.Scope;
					public toSource(depth: number): string;
					public constructor();
					public constructor(pos: number, len: number, name: string);
					public setIdentifier(identifier: string): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public getIdentifier(): string;
					public length(): number;
					public toSource(param0: number): string;
					public constructor(pos: number, name: string);
					public getScope(): org.mozilla.javascript.ast.Scope;
					public isLocalName(): boolean;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public setInitializer(initializer: org.mozilla.javascript.ast.ObjectLiteral): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getInitializer(): org.mozilla.javascript.ast.ObjectLiteral;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public getNumber(): number;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setNumber(value: number): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getValue(): string;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public constructor(pos: number, value: string);
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setValue(value: string): void;
					public constructor(pos: number, value: string, number: number);
					public toSource(param0: number): string;
					public constructor(number: number);
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
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
					public setElements(elements: java.util.List<org.mozilla.javascript.ast.ObjectProperty>): void;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public isDestructuring(): boolean;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public addElement(element: org.mozilla.javascript.ast.ObjectProperty): void;
					public setIsDestructuring(param0: boolean): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public setIsDestructuring(destructuring: boolean): void;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getElements(): java.util.List<org.mozilla.javascript.ast.ObjectProperty>;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public isGetterMethod(): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public setIsSetterMethod(): void;
					public isMethod(): boolean;
					public setIsNormalMethod(): void;
					public constructor(pos: number, len: number, left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode);
					public setIsGetterMethod(): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public constructor(operator: number, left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode, operatorPos: number);
					public setNodeType(nodeType: number): void;
					public isNormalMethod(): boolean;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public isSetterMethod(): boolean;
					public constructor(left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode);
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(expr: org.mozilla.javascript.ast.AstNode);
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(pos: number, len: number, expr: org.mozilla.javascript.ast.AstNode);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getExpression(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setExpression(expression: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public setMessage(msg: string): void;
					public setSourceName(name: string): void;
					public toString(): string;
					public getFileOffset(): number;
					public setLength(length: number): void;
					public getType(): org.mozilla.javascript.ast.ParseProblem.Type;
					public getLength(): number;
					public getMessage(): string;
					public constructor(type: org.mozilla.javascript.ast.ParseProblem.Type, message: string, sourceName: string, offset: number, length: number);
					public setType(type: org.mozilla.javascript.ast.ParseProblem.Type): void;
					public getSourceName(): string;
					public setFileOffset(offset: number): void;
				}
				export module ParseProblem {
					export class Type {
						public static class: java.lang.Class<org.mozilla.javascript.ast.ParseProblem.Type>;
						public static Error: org.mozilla.javascript.ast.ParseProblem.Type;
						public static Warning: org.mozilla.javascript.ast.ParseProblem.Type;
						public static valueOf(name: string): org.mozilla.javascript.ast.ParseProblem.Type;
						public static values(): org.mozilla.javascript.ast.ParseProblem.Type[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public setTarget(target: org.mozilla.javascript.ast.AstNode): void;
					public constructor(target: org.mozilla.javascript.ast.AstNode, property: org.mozilla.javascript.ast.Name);
					public constructor(pos: number, len: number, left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public getProperty(): org.mozilla.javascript.ast.Name;
					public constructor(pos: number, len: number, target: org.mozilla.javascript.ast.AstNode, property: org.mozilla.javascript.ast.Name);
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public constructor(operator: number, left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode, operatorPos: number);
					public getTarget(): org.mozilla.javascript.ast.AstNode;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public setProperty(property: org.mozilla.javascript.ast.Name): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public constructor(target: org.mozilla.javascript.ast.AstNode, property: org.mozilla.javascript.ast.Name, dotPosition: number);
					public constructor(left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode);
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public setValue(value: string): void;
					public constructor(pos: number);
					public setFlags(flags: string): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getValue(): string;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public getFlags(): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public getReturnValue(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(pos: number, len: number, returnValue: org.mozilla.javascript.ast.AstNode);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setReturnValue(returnValue: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public setParentScope(parentScope: org.mozilla.javascript.ast.Scope): void;
					public addChildScope(child: org.mozilla.javascript.ast.Scope): void;
					public setTop(top: org.mozilla.javascript.ast.ScriptNode): void;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public visit(visitor: org.mozilla.javascript.ast.NodeVisitor): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number);
					public static joinScopes(source: org.mozilla.javascript.ast.Scope, dest: org.mozilla.javascript.ast.Scope): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public replaceWith(newScope: org.mozilla.javascript.ast.Scope): void;
					public clearParentScope(): void;
					public toSource(depth: number): string;
					public constructor();
					public getSymbol(name: string): org.mozilla.javascript.ast.Symbol;
					public setSymbolTable(table: java.util.Map<string,org.mozilla.javascript.ast.Symbol>): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public getStatements(): java.util.List<org.mozilla.javascript.ast.AstNode>;
					public toSource(): string;
					public getDefiningScope(name: string): org.mozilla.javascript.ast.Scope;
					public static splitScope(scope: org.mozilla.javascript.ast.Scope): org.mozilla.javascript.ast.Scope;
					public getParentScope(): org.mozilla.javascript.ast.Scope;
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public getTop(): org.mozilla.javascript.ast.ScriptNode;
					public getSymbolTable(): java.util.Map<string,org.mozilla.javascript.ast.Symbol>;
					public putSymbol(symbol: org.mozilla.javascript.ast.Symbol): void;
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public getChildScopes(): java.util.List<org.mozilla.javascript.ast.Scope>;
					public constructor(type: number, lineno: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public setEncodedSource(encodedSource: string): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public getRegexpFlags(index: number): string;
					public addTemplateLiteral(templateLiteral: org.mozilla.javascript.ast.TemplateLiteral): void;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public setSymbols(symbols: java.util.List<org.mozilla.javascript.ast.Symbol>): void;
					public constructor();
					public getCompilerData(): any;
					public getEncodedSourceStart(): number;
					public getTemplateLiteralCount(): number;
					public getParamCount(): number;
					public setEndLineno(lineno: number): void;
					public getTemplateLiteralStrings(index: number): java.util.List<org.mozilla.javascript.ast.TemplateCharacters>;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public setBaseLineno(lineno: number): void;
					public getEncodedSourceEnd(): number;
					public setCompilerData(data: any): void;
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public getNextTempName(): string;
					public addRegExp(re: org.mozilla.javascript.ast.RegExpLiteral): void;
					public setInStrictMode(inStrictMode: boolean): void;
					public addFunction(fnNode: org.mozilla.javascript.ast.FunctionNode): number;
					public getEndLineno(): number;
					public isInStrictMode(): boolean;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setSourceName(sourceName: string): void;
					public setEncodedSourceEnd(end: number): void;
					public getFunctions(): java.util.List<org.mozilla.javascript.ast.FunctionNode>;
					public getIndexForNameNode(nameNode: org.mozilla.javascript.Node): number;
					public getRegexpString(index: number): string;
					public getSourceName(): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public getRegexpCount(): number;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getParamOrVarName(index: number): string;
					public getParamAndVarCount(): number;
					public flattenSymbolTable(flattenAllTables: boolean): void;
					public getEncodedSource(): string;
					public getBaseLineno(): number;
					public forEach(action: any /* any*/): void;
					public setEncodedSourceStart(start: number): void;
					public getFunctionCount(): number;
					public getFunctionNode(i: number): org.mozilla.javascript.ast.FunctionNode;
					public getParamAndVarNames(): string[];
					public getSymbols(): java.util.List<org.mozilla.javascript.ast.Symbol>;
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public setEncodedSourceBounds(start: number, end: number): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public getQuoteCharacter(): string;
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setQuoteCharacter(c: string): void;
					public spliterator(): java.util.Spliterator<any>;
					public setValue(value: string): void;
					public constructor(pos: number);
					public getValue(includeQuotes: boolean): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getValue(): string;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public getStatements(): java.util.List<org.mozilla.javascript.ast.AstNode>;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public isDefault(): boolean;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public addStatement(statement: org.mozilla.javascript.ast.AstNode): void;
					public setStatements(statements: java.util.List<org.mozilla.javascript.ast.AstNode>): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getExpression(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setExpression(expression: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public setLp(lp: number): void;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public getCases(): java.util.List<org.mozilla.javascript.ast.SwitchCase>;
					public spliterator(): java.util.Spliterator<any>;
					public setRp(rp: number): void;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public visit(visitor: org.mozilla.javascript.ast.NodeVisitor): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getExpression(): org.mozilla.javascript.ast.AstNode;
					public addCase(switchCase: org.mozilla.javascript.ast.SwitchCase): void;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public getRp(): number;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public setCases(cases: java.util.List<org.mozilla.javascript.ast.SwitchCase>): void;
					public toSource(): string;
					public setParens(lp: number, rp: number): void;
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public getLp(): number;
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public constructor(type: number, lineno: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setExpression(expression: org.mozilla.javascript.ast.AstNode): void;
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
					public constructor(declType: number, name: string);
					public getDeclTypeName(): string;
					public setDeclType(declType: number): void;
					public getNode(): org.mozilla.javascript.Node;
					public setIndex(index: number): void;
					public setNode(node: org.mozilla.javascript.Node): void;
					public setName(name: string): void;
					public toString(): string;
					public setContainingTable(containingTable: org.mozilla.javascript.ast.Scope): void;
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
				export class TaggedTemplateLiteral extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.TaggedTemplateLiteral>;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public setTemplateLiteral(templateLiteral: org.mozilla.javascript.ast.AstNode): void;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public getTemplateLiteral(): org.mozilla.javascript.ast.AstNode;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public getTarget(): org.mozilla.javascript.ast.AstNode;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public setTarget(target: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class TemplateCharacters extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.TemplateCharacters>;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public setValue(value: string): void;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getValue(): string;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setRawValue(rawValue: string): void;
					public getRawValue(): string;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class TemplateLiteral extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.TemplateLiteral>;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public getSize(): number;
					public addElement(element: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setElements(elements: java.util.List<org.mozilla.javascript.ast.AstNode>): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public getTemplateStrings(): java.util.List<org.mozilla.javascript.ast.TemplateCharacters>;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public getElement(index: number): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(param0: number): string;
					public getSubstitutions(): java.util.List<org.mozilla.javascript.ast.AstNode>;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public getElements(): java.util.List<org.mozilla.javascript.ast.AstNode>;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
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
					public constructor(pos: number, expr: org.mozilla.javascript.ast.AstNode);
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(expr: org.mozilla.javascript.ast.AstNode);
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(pos: number, len: number, expr: org.mozilla.javascript.ast.AstNode);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getExpression(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setExpression(expression: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public getFinallyBlock(): org.mozilla.javascript.ast.AstNode;
					public toSource(depth: number): string;
					public constructor();
					public getFinallyPosition(): number;
					public getCatchClauses(): java.util.List<org.mozilla.javascript.ast.CatchClause>;
					public getTryBlock(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public addCatchClause(clause: org.mozilla.javascript.ast.CatchClause): void;
					public toSource(param0: number): string;
					public setTryBlock(tryBlock: org.mozilla.javascript.ast.AstNode): void;
					public setCatchClauses(catchClauses: java.util.List<org.mozilla.javascript.ast.CatchClause>): void;
					public setFinallyBlock(finallyBlock: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setFinallyPosition(finallyPosition: number): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public constructor(operator: number, operatorPosition: number, operand: org.mozilla.javascript.ast.AstNode);
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public getOperand(): org.mozilla.javascript.ast.AstNode;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public setOperator(operator: number): void;
					public setOperand(operand: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public getOperator(): number;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module ast {
				export class UpdateExpression extends org.mozilla.javascript.ast.AstNode {
					public static class: java.lang.Class<org.mozilla.javascript.ast.UpdateExpression>;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public isPostfix(): boolean;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public getOperand(): org.mozilla.javascript.ast.AstNode;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setOperator(operator: number): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public getOperator(): number;
					public constructor(operator: number, operatorPosition: number, operand: org.mozilla.javascript.ast.AstNode, postFix: boolean);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public constructor(operator: number, operatorPosition: number, operand: org.mozilla.javascript.ast.AstNode);
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public isPrefix(): boolean;
					public toSource(param0: number): string;
					public setOperand(operand: org.mozilla.javascript.ast.AstNode): void;
					public setIsPostfix(isPostfix: boolean): void;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public addVariable(v: org.mozilla.javascript.ast.VariableInitializer): void;
					public isLet(): boolean;
					public getVariables(): java.util.List<org.mozilla.javascript.ast.VariableInitializer>;
					public setVariables(variables: java.util.List<org.mozilla.javascript.ast.VariableInitializer>): void;
					public isConst(): boolean;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setIsStatement(isStatement: boolean): void;
					public toSource(param0: number): string;
					public isStatement(): boolean;
					public isVar(): boolean;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setType(type: number): org.mozilla.javascript.Node;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public getInitializer(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public isDestructuring(): boolean;
					public setNodeType(nodeType: number): void;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setInitializer(initializer: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public getTarget(): org.mozilla.javascript.ast.AstNode;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public setTarget(target: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public getCondition(): org.mozilla.javascript.ast.AstNode;
					public toSource(): string;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(type: number, child: org.mozilla.javascript.Node);
					public setCondition(condition: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(type: number, child: org.mozilla.javascript.Node, lineno: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public setLp(lp: number): void;
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public getStatement(): org.mozilla.javascript.ast.AstNode;
					public spliterator(): java.util.Spliterator<any>;
					public setRp(rp: number): void;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setStatement(statement: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getExpression(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public getRp(): number;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setParens(lp: number, rp: number): void;
					public toSource(param0: number): string;
					public getLp(): number;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setExpression(expression: org.mozilla.javascript.ast.AstNode): void;
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
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public spliterator(): java.util.Spliterator<any>;
					public constructor(operator: number, left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode, operatorPos: number);
					public setRp(rp: number): void;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public getRp(): number;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public constructor(pos: number, len: number, left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode);
					public constructor(left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public setBrackets(lb: number, rb: number): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setExpression(expr: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getExpression(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public getLb(): number;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public setRb(rb: number): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public setLb(lb: number): void;
					public toSource(param0: number): string;
					public getRb(): number;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
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
					public constructor(pos: number, expr: org.mozilla.javascript.ast.AstNode);
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public setIsXmlAttribute(isXmlAttribute: boolean): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getExpression(): org.mozilla.javascript.ast.AstNode;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public isXmlAttribute(): boolean;
					public toSource(depth: number): string;
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setExpression(expression: org.mozilla.javascript.ast.AstNode): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public getFragments(): java.util.List<org.mozilla.javascript.ast.XmlFragment>;
					public setFragments(fragments: java.util.List<org.mozilla.javascript.ast.XmlFragment>): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public addFragment(fragment: org.mozilla.javascript.ast.XmlFragment): void;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public getMemberRef(): org.mozilla.javascript.ast.XmlRef;
					public spliterator(): java.util.Spliterator<any>;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(pos: number, len: number, target: org.mozilla.javascript.ast.AstNode, ref: org.mozilla.javascript.ast.XmlRef);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public constructor(target: org.mozilla.javascript.ast.AstNode, ref: org.mozilla.javascript.ast.XmlRef, opPos: number);
					public toSource(depth: number): string;
					public constructor();
					public setTarget(target: org.mozilla.javascript.ast.AstNode): void;
					public constructor(target: org.mozilla.javascript.ast.AstNode, ref: org.mozilla.javascript.ast.XmlRef);
					public constructor(pos: number, len: number, left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
					public setProperty(ref: org.mozilla.javascript.ast.XmlRef): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public constructor(operator: number, left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode, operatorPos: number);
					public getTarget(): org.mozilla.javascript.ast.AstNode;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public constructor(left: org.mozilla.javascript.ast.AstNode, right: org.mozilla.javascript.ast.AstNode);
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public getPropName(): org.mozilla.javascript.ast.Name;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public setPropName(propName: org.mozilla.javascript.ast.Name): void;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public getNamespace(): org.mozilla.javascript.ast.Name;
					public spliterator(): java.util.Spliterator<any>;
					public setColonPos(colonPos: number): void;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public constructor();
					public isAttributeAccess(): boolean;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public setNamespace(namespace: org.mozilla.javascript.ast.Name): void;
					public getAtPos(): number;
					public setAtPos(atPos: number): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public getColonPos(): number;
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public getXml(): string;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public constructor(pos: number, s: string);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public setXml(s: string): void;
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
					public constructor(pos: number, len: number, value: org.mozilla.javascript.ast.AstNode, isStar: boolean);
					public visit(v: org.mozilla.javascript.ast.NodeVisitor): void;
					public toSource(): string;
					public constructor(nodeType: number, child: org.mozilla.javascript.Node);
					public visit(param0: org.mozilla.javascript.ast.NodeVisitor): void;
					public spliterator(): java.util.Spliterator<any>;
					public getValue(): org.mozilla.javascript.ast.AstNode;
					public constructor(pos: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public setValue(expr: org.mozilla.javascript.ast.AstNode): void;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node, line: number);
					public toSource(param0: number): string;
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, mid: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<any>;
					public constructor(pos: number, len: number);
					public toSource(depth: number): string;
					public constructor();
					public constructor(nodeType: number, child: org.mozilla.javascript.Node, line: number);
					public constructor(nodeType: number, left: org.mozilla.javascript.Node, right: org.mozilla.javascript.Node);
					public iterator(): java.util.Iterator<org.mozilla.javascript.Node>;
					public forEach(action: any /* any*/): void;
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
						public getPrototype(): org.mozilla.javascript.Scriptable;
						public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
						public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
						public get(index: number, start: org.mozilla.javascript.Scriptable): any;
						public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
						public getParentScope(): org.mozilla.javascript.Scriptable;
						public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
						public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
						public getIds(): any[];
						public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
						public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
						public constructor();
						public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public getAllIds(): any[];
						public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
						public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
						public delete(param0: number): void;
						public delete(key: org.mozilla.javascript.Symbol): void;
						public delete(param0: string): void;
						public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
						public constructor(prototype: org.mozilla.javascript.Scriptable, uri: java.net.URI, base: java.net.URI);
						public getBase(): java.net.URI;
						public delete(param0: org.mozilla.javascript.Symbol): void;
						public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public setParentScope(m: org.mozilla.javascript.Scriptable): void;
						public delete(name: string): void;
						public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
						public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
						public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
						public getClassName(): string;
						public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
						public getUri(): java.net.URI;
						public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
						public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
						public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
						public delete(index: number): void;
						public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
						public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
						public getDefaultValue(param0: java.lang.Class<any>): any;
						public getDefaultValue(typeHint: java.lang.Class<any>): any;
						public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
						public get(name: string, start: org.mozilla.javascript.Scriptable): any;
						public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
						public get(key: any): any;
						public isConst(name: string): boolean;
						public setPrototype(m: org.mozilla.javascript.Scriptable): void;
						public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
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
						public constructor(script: org.mozilla.javascript.Script, uri: java.net.URI, base: java.net.URI);
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
						public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
						public getPrototype(): org.mozilla.javascript.Scriptable;
						public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
						public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
						public getArity(): number;
						public get(index: number, start: org.mozilla.javascript.Scriptable): any;
						public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
						public getParentScope(): org.mozilla.javascript.Scriptable;
						public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
						public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
						public getIds(): any[];
						public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
						public getFunctionName(): string;
						public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
						public requireMain(cx: org.mozilla.javascript.Context, mainModuleId: string): org.mozilla.javascript.Scriptable;
						public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
						public constructor();
						public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public install(scope: org.mozilla.javascript.Scriptable): void;
						public getAllIds(): any[];
						public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
						public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
						public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
						public delete(param0: number): void;
						public delete(key: org.mozilla.javascript.Symbol): void;
						public delete(param0: string): void;
						public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
						public delete(param0: org.mozilla.javascript.Symbol): void;
						public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public setParentScope(m: org.mozilla.javascript.Scriptable): void;
						public delete(name: string): void;
						public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public getLength(): number;
						public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
						public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
						public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
						public getClassName(): string;
						public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
						public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
						public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
						public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
						public delete(index: number): void;
						public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
						public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
						public getDefaultValue(param0: java.lang.Class<any>): any;
						public getDefaultValue(typeHint: java.lang.Class<any>): any;
						public constructor(isGenerator: boolean);
						public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
						public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
						public get(name: string, start: org.mozilla.javascript.Scriptable): any;
						public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
						public get(key: any): any;
						public isConst(name: string): boolean;
						public setPrototype(m: org.mozilla.javascript.Scriptable): void;
						public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public isConst(param0: string): boolean;
						public constructor(cx: org.mozilla.javascript.Context, nativeScope: org.mozilla.javascript.Scriptable, moduleScriptProvider: org.mozilla.javascript.commonjs.module.ModuleScriptProvider, preExec: org.mozilla.javascript.Script, postExec: org.mozilla.javascript.Script, sandboxed: boolean);
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
						public setModuleScriptProvider(moduleScriptProvider: org.mozilla.javascript.commonjs.module.ModuleScriptProvider): org.mozilla.javascript.commonjs.module.RequireBuilder;
						public setPreExec(preExec: org.mozilla.javascript.Script): org.mozilla.javascript.commonjs.module.RequireBuilder;
						public setSandboxed(sandboxed: boolean): org.mozilla.javascript.commonjs.module.RequireBuilder;
						public createRequire(cx: org.mozilla.javascript.Context, globalScope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.commonjs.module.Require;
						public setPostExec(postExec: org.mozilla.javascript.Script): org.mozilla.javascript.commonjs.module.RequireBuilder;
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
							public constructor(moduleSourceProvider: org.mozilla.javascript.commonjs.module.provider.ModuleSourceProvider);
							public putLoadedModule(param0: string, param1: org.mozilla.javascript.commonjs.module.ModuleScript, param2: any): void;
							public getLoadedModule(param0: string): org.mozilla.javascript.commonjs.module.provider.CachingModuleScriptProviderBase.CachedModuleScript;
							public getModuleScript(cx: org.mozilla.javascript.Context, moduleId: string, moduleUri: java.net.URI, baseUri: java.net.URI, paths: org.mozilla.javascript.Scriptable): org.mozilla.javascript.commonjs.module.ModuleScript;
							public getModuleScript(param0: org.mozilla.javascript.Context, param1: string, param2: java.net.URI, param3: java.net.URI, param4: org.mozilla.javascript.Scriptable): org.mozilla.javascript.commonjs.module.ModuleScript;
							public static getConcurrencyLevel(): number;
						}
						export module CachingModuleScriptProviderBase {
							export class CachedModuleScript extends java.lang.Object {
								public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.CachingModuleScriptProviderBase.CachedModuleScript>;
								public constructor(moduleScript: org.mozilla.javascript.commonjs.module.ModuleScript, validator: any);
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
							public calculateExpiry(urlConnection: java.net.URLConnection): number;
							public constructor(relativeExpiry: number);
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
						export class ModuleSource extends java.lang.Object implements java.io.Serializable {
							public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.ModuleSource>;
							public getSecurityDomain(): any;
							public getValidator(): any;
							public getBase(): java.net.URI;
							public getReader(): java.io.Reader;
							public constructor(reader: java.io.Reader, securityDomain: any, uri: java.net.URI, base: java.net.URI, validator: any);
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
								"<clinit>"(): void;
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
							public entityNeedsRevalidation(validator: any): boolean;
							public loadFromUri(param0: java.net.URI, param1: java.net.URI, param2: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public loadSource(uri: java.net.URI, base: java.net.URI, validator: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public loadSource(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public loadFromFallbackLocations(moduleId: string, validator: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public loadFromPrivilegedLocations(moduleId: string, validator: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public loadSource(moduleId: string, paths: org.mozilla.javascript.Scriptable, validator: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
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
							public getModuleScript(cx: org.mozilla.javascript.Context, moduleId: string, uri: java.net.URI, base: java.net.URI, paths: org.mozilla.javascript.Scriptable): org.mozilla.javascript.commonjs.module.ModuleScript;
							public getModuleScript(param0: org.mozilla.javascript.Context, param1: string, param2: java.net.URI, param3: java.net.URI, param4: org.mozilla.javascript.Scriptable): org.mozilla.javascript.commonjs.module.ModuleScript;
							public constructor(providers: java.lang.Iterable<any>);
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
							public getContentType(): string;
							public constructor(mimeType: string);
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
							public putLoadedModule(moduleId: string, moduleScript: org.mozilla.javascript.commonjs.module.ModuleScript, validator: any): void;
							public getModuleScript(cx: org.mozilla.javascript.Context, moduleId: string, uri: java.net.URI, base: java.net.URI, paths: org.mozilla.javascript.Scriptable): org.mozilla.javascript.commonjs.module.ModuleScript;
							public constructor(moduleSourceProvider: org.mozilla.javascript.commonjs.module.provider.ModuleSourceProvider);
							public getLoadedModule(moduleId: string): org.mozilla.javascript.commonjs.module.provider.CachingModuleScriptProviderBase.CachedModuleScript;
							public getLoadedModule(param0: string): org.mozilla.javascript.commonjs.module.provider.CachingModuleScriptProviderBase.CachedModuleScript;
							public putLoadedModule(param0: string, param1: org.mozilla.javascript.commonjs.module.ModuleScript, param2: any): void;
							public getModuleScript(cx: org.mozilla.javascript.Context, moduleId: string, moduleUri: java.net.URI, baseUri: java.net.URI, paths: org.mozilla.javascript.Scriptable): org.mozilla.javascript.commonjs.module.ModuleScript;
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
							public putLoadedModule(moduleId: string, moduleScript: org.mozilla.javascript.commonjs.module.ModuleScript, validator: any): void;
							public constructor(moduleSourceProvider: org.mozilla.javascript.commonjs.module.provider.ModuleSourceProvider);
							public getLoadedModule(moduleId: string): org.mozilla.javascript.commonjs.module.provider.CachingModuleScriptProviderBase.CachedModuleScript;
							public getLoadedModule(param0: string): org.mozilla.javascript.commonjs.module.provider.CachingModuleScriptProviderBase.CachedModuleScript;
							public putLoadedModule(param0: string, param1: org.mozilla.javascript.commonjs.module.ModuleScript, param2: any): void;
							public getModuleScript(cx: org.mozilla.javascript.Context, moduleId: string, moduleUri: java.net.URI, baseUri: java.net.URI, paths: org.mozilla.javascript.Scriptable): org.mozilla.javascript.commonjs.module.ModuleScript;
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
							public loadSource(param0: java.net.URI, param1: java.net.URI, param2: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public loadFromUri(param0: java.net.URI, param1: java.net.URI, param2: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public getCharacterEncoding(urlConnection: java.net.URLConnection): string;
							public loadFromFallbackLocations(moduleId: string, validator: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public constructor(privilegedUris: java.lang.Iterable<java.net.URI>, fallbackUris: java.lang.Iterable<java.net.URI>, urlConnectionExpiryCalculator: org.mozilla.javascript.commonjs.module.provider.UrlConnectionExpiryCalculator, urlConnectionSecurityDomainProvider: org.mozilla.javascript.commonjs.module.provider.UrlConnectionSecurityDomainProvider);
							public constructor(privilegedUris: java.lang.Iterable<java.net.URI>, fallbackUris: java.lang.Iterable<java.net.URI>);
							public loadFromActualUri(uri: java.net.URI, base: java.net.URI, validator: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public entityNeedsRevalidation(validator: any): boolean;
							public openUrlConnection(url: java.net.URL): java.net.URLConnection;
							public loadSource(uri: java.net.URI, base: java.net.URI, validator: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public loadSource(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public loadFromUri(uri: java.net.URI, base: java.net.URI, validator: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public loadFromPrivilegedLocations(moduleId: string, validator: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
							public onFailedClosingUrlConnection(urlConnection: java.net.URLConnection, cause: java.io.IOException): void;
							public loadSource(moduleId: string, paths: org.mozilla.javascript.Scriptable, validator: any): org.mozilla.javascript.commonjs.module.provider.ModuleSource;
						}
						export module UrlModuleSourceProvider {
							export class URLValidator extends java.lang.Object implements java.io.Serializable {
								public static class: java.lang.Class<org.mozilla.javascript.commonjs.module.provider.UrlModuleSourceProvider.URLValidator>;
								public constructor(uri: java.net.URI, urlConnection: java.net.URLConnection, request_time: number, param3: org.mozilla.javascript.commonjs.module.provider.UrlConnectionExpiryCalculator);
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
					public onEnter(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): void;
					public onDebuggerStatement(param0: org.mozilla.javascript.Context): void;
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
					public getFunction(param0: number): org.mozilla.javascript.debug.DebuggableScript;
					public getFunctionName(): string;
					public getParamCount(): number;
					public getSourceName(): string;
					public getLineNumbers(): number[];
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
			export module jdk18 {
				export class VMBridge_jdk18 extends org.mozilla.javascript.VMBridge {
					public static class: java.lang.Class<org.mozilla.javascript.jdk18.VMBridge_jdk18>;
					public newInterfaceProxy(param0: any, param1: org.mozilla.javascript.ContextFactory, param2: org.mozilla.javascript.InterfaceAdapter, param3: any, param4: org.mozilla.javascript.Scriptable): any;
					public getThreadContextHelper(): any;
					public getContext(contextHelper: any): org.mozilla.javascript.Context;
					public newInterfaceProxy(proxyHelper: any, cf: org.mozilla.javascript.ContextFactory, adapter: org.mozilla.javascript.InterfaceAdapter, target: any, topScope: org.mozilla.javascript.Scriptable): any;
					public tryToMakeAccessible(accessible: java.lang.reflect.AccessibleObject): boolean;
					public constructor();
					public setContext(contextHelper: any, cx: org.mozilla.javascript.Context): void;
					public getContext(param0: any): org.mozilla.javascript.Context;
					public setContext(param0: any, param1: org.mozilla.javascript.Context): void;
					public tryToMakeAccessible(param0: java.lang.reflect.AccessibleObject): boolean;
					public getInterfaceProxyHelper(param0: org.mozilla.javascript.ContextFactory, param1: java.lang.Class<any>[]): any;
					public getInterfaceProxyHelper(cf: org.mozilla.javascript.ContextFactory, interfaces: java.lang.Class<any>[]): any;
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
					public constructor(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable);
					public parseValue(json: string): any;
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
					public getTargetImplements(): java.lang.Class<any>[];
					public setMainMethodClass(className: string): void;
					public getMainMethodClass(): string;
					public compileToClassFiles(source: string, sourceLocation: string, lineno: number, mainClassName: string): any[];
					public getTargetExtends(): java.lang.Class<any>;
					public setTargetExtends(extendsClass: java.lang.Class<any>): void;
					public setTargetImplements(implementsClasses: java.lang.Class<any>[]): void;
					public makeAuxiliaryClassName(mainClassName: string, auxMarker: string): string;
					public constructor(compilerEnv: org.mozilla.javascript.CompilerEnvirons);
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
					public setMainMethodClass(className: string): void;
					public setEvalScriptFlag(param0: org.mozilla.javascript.Script): void;
					public setEvalScriptFlag(script: org.mozilla.javascript.Script): void;
					public createScriptObject(param0: any, param1: any): org.mozilla.javascript.Script;
					public compile(compilerEnv: org.mozilla.javascript.CompilerEnvirons, tree: org.mozilla.javascript.ast.ScriptNode, encodedSource: string, returnFunction: boolean): any;
					public getScriptStack(param0: org.mozilla.javascript.RhinoException): java.util.List<string>;
					public getPatchedStack(param0: org.mozilla.javascript.RhinoException, param1: string): string;
					public getSourcePositionFromStack(cx: org.mozilla.javascript.Context, linep: number[]): string;
					public createScriptObject(bytecode: any, staticSecurityDomain: any): org.mozilla.javascript.Script;
					public captureStackInfo(ex: org.mozilla.javascript.RhinoException): void;
					public createFunctionObject(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, bytecode: any, staticSecurityDomain: any): org.mozilla.javascript.Function;
					public getPatchedStack(ex: org.mozilla.javascript.RhinoException, nativeStackTrace: string): string;
					public constructor();
					public captureStackInfo(param0: org.mozilla.javascript.RhinoException): void;
					public getScriptStack(ex: org.mozilla.javascript.RhinoException): java.util.List<string>;
					public compile(param0: org.mozilla.javascript.CompilerEnvirons, param1: org.mozilla.javascript.ast.ScriptNode, param2: string, param3: boolean): any;
					public getSourcePositionFromStack(param0: org.mozilla.javascript.Context, param1: number[]): string;
					public createFunctionObject(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any, param3: any): org.mozilla.javascript.Function;
					public compileToClassFile(compilerEnv: org.mozilla.javascript.CompilerEnvirons, mainClassName: string, scriptOrFn: org.mozilla.javascript.ast.ScriptNode, encodedSource: string, returnFunction: boolean): number[];
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
					public isParameter(varIndex: number): boolean;
					public static get(scriptOrFn: org.mozilla.javascript.ast.ScriptNode, i: number): org.mozilla.javascript.optimizer.OptFunctionNode;
					public getParameterNumberContext(): boolean;
					public isTargetOfDirectCall(): boolean;
					public getVarCount(): number;
					public isNumberVar(varIndex: number): boolean;
					public getVarIndex(n: org.mozilla.javascript.Node): number;
					public static get(scriptOrFn: org.mozilla.javascript.ast.ScriptNode): org.mozilla.javascript.optimizer.OptFunctionNode;
					public getDirectTargetIndex(): number;
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
					public static oneObj: java.lang.Double;
					public static minusOneObj: java.lang.Double;
					public static createNativeGenerator(funObj: org.mozilla.javascript.NativeFunction, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, maxLocals: number, maxStack: number): org.mozilla.javascript.Scriptable;
					public static call2(fun: org.mozilla.javascript.Callable, thisObj: org.mozilla.javascript.Scriptable, arg0: any, arg1: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
					public static initFunction(fn: org.mozilla.javascript.NativeFunction, functionType: number, scope: org.mozilla.javascript.Scriptable, cx: org.mozilla.javascript.Context): void;
					public static newObjectSpecial(cx: org.mozilla.javascript.Context, fun: any, args: any[], scope: org.mozilla.javascript.Scriptable, callerThis: org.mozilla.javascript.Scriptable, callType: number): any;
					public static elemIncrDecr(obj: any, index: number, param2: org.mozilla.javascript.Context, cx: org.mozilla.javascript.Scriptable, scope: number): any;
					public static padStart(currentArgs: any[], count: number): any[];
					public static getGeneratorReturnValue(obj: any): any;
					public static getGeneratorStackState(obj: any): any[];
					public static throwStopIteration(scope: any, genState: any): void;
					public constructor();
					public static add(val1: any, val2: number, param2: org.mozilla.javascript.Context): any;
					/** @deprecated */
					public static elemIncrDecr(obj: any, index: any, cx: org.mozilla.javascript.Context, incrDecrMask: number): any;
					public static callSpecial(cx: org.mozilla.javascript.Context, fun: org.mozilla.javascript.Callable, thisObj: org.mozilla.javascript.Scriptable, args: any[], scope: org.mozilla.javascript.Scriptable, callerThis: org.mozilla.javascript.Scriptable, callType: number, filename: string, lineNumber: number): any;
					public static callName0(name: string, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
					public static callSpecial(cx: org.mozilla.javascript.Context, fun: org.mozilla.javascript.Callable, thisObj: org.mozilla.javascript.Scriptable, args: any[], scope: org.mozilla.javascript.Scriptable, callerThis: org.mozilla.javascript.Scriptable, callType: number, fileName: string, lineNumber: number): any;
					public static setGeneratorReturnValue(obj: any, val: any): void;
					public static callProp0(value: any, property: string, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
					public static bindThis(fn: org.mozilla.javascript.NativeFunction, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Function;
					/** @deprecated */
					public static add(val1: any, val2: string): string;
					public static newArrayLiteral(objects: any[], encodedInts: string, skipCount: number, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
					public static add(val1: any, val2: any, cx: org.mozilla.javascript.Context): any;
					public static elemIncrDecr(obj: any, index: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, incrDecrMask: number): any;
					public static initFunction(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, _function_: org.mozilla.javascript.NativeFunction, type: number, fromEvalCode: boolean): void;
					/** @deprecated */
					public static elemIncrDecr(obj: any, index: number, param2: org.mozilla.javascript.Context, cx: number): any;
					public static callN(fun: org.mozilla.javascript.Callable, thisObj: org.mozilla.javascript.Scriptable, args: any[], cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
					/** @deprecated */
					public static add(val1: string, val2: any): string;
					public static callName(args: any[], name: string, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
					public static call1(fun: org.mozilla.javascript.Callable, thisObj: org.mozilla.javascript.Scriptable, arg0: any, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
					public static wrapDouble(num: number): java.lang.Double;
					public static newArrayLiteral(objects: any[], skipIndices: number[], cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.Scriptable;
					public static add(val1: number, param1: any, val2: org.mozilla.javascript.Context): any;
					public static getGeneratorLocalsState(obj: any): any[];
					public static call0(fun: org.mozilla.javascript.Callable, thisObj: org.mozilla.javascript.Scriptable, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): any;
					public static main(script: org.mozilla.javascript.Script, args: string[]): void;
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
					public visitCall(node: org.mozilla.javascript.Node, tree: org.mozilla.javascript.ast.ScriptNode): void;
					public visitNew(node: org.mozilla.javascript.Node, tree: org.mozilla.javascript.ast.ScriptNode): void;
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
				export class NativeRegExp extends org.mozilla.javascript.IdScriptableObject {
					public static class: java.lang.Class<org.mozilla.javascript.regexp.NativeRegExp>;
					public static JSREG_GLOB: number;
					public static JSREG_FOLD: number;
					public static JSREG_MULTILINE: number;
					public static JSREG_STICKY: number;
					public static TEST: number;
					public static MATCH: number;
					public static PREFIX: number;
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public findPrototypeId(k: org.mozilla.javascript.Symbol): number;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public setInstanceIdValue(id: number, value: any): void;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getInstanceIdValue(id: number): any;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(name: string): void;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: number): void;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public isConst(param0: string): boolean;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setInstanceIdAttributes(id: number, attr: number): void;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public findPrototypeId(s: string): number;
					public getMaxInstanceId(): number;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public findInstanceIdInfo(s: string): number;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public toString(): string;
					public getClassName(): string;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public initPrototypeId(id: number): void;
					public delete(param0: string): void;
					public getAllIds(): any[];
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public getTypeOf(): string;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
					public isConst(name: string): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public delete(index: number): void;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public findPrototypeId(name: string): number;
					public getInstanceIdName(id: number): string;
					public findInstanceIdInfo(key: org.mozilla.javascript.Symbol): number;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public findInstanceIdInfo(name: string): number;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module regexp {
				export class NativeRegExpCallable extends org.mozilla.javascript.regexp.NativeRegExp implements org.mozilla.javascript.Function {
					public static class: java.lang.Class<org.mozilla.javascript.regexp.NativeRegExpCallable>;
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(name: string): void;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: number): void;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public isConst(param0: string): boolean;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public delete(param0: string): void;
					public getAllIds(): any[];
					public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public isConst(name: string): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public delete(index: number): void;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
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
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public setInstanceIdValue(id: number, value: any): void;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getInstanceIdValue(id: number): any;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(name: string): void;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: number): void;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public isConst(param0: string): boolean;
					public getArity(): number;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setInstanceIdAttributes(id: number, attr: number): void;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
					public getMaxInstanceId(): number;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public findInstanceIdInfo(s: string): number;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public getLength(): number;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public getAllIds(): any[];
					public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public isConst(name: string): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public getFunctionName(): string;
					public delete(index: number): void;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public getInstanceIdName(id: number): string;
					public findInstanceIdInfo(key: org.mozilla.javascript.Symbol): number;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
				}
			}
		}
	}
}

declare module org {
	export module mozilla {
		export module javascript {
			export module regexp {
				export class NativeRegExpInstantiator extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.regexp.NativeRegExpInstantiator>;
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
					public parens: org.mozilla.javascript.regexp.SubString[];
					public lastMatch: org.mozilla.javascript.regexp.SubString;
					public lastParen: org.mozilla.javascript.regexp.SubString;
					public leftContext: org.mozilla.javascript.regexp.SubString;
					public rightContext: org.mozilla.javascript.regexp.SubString;
					public js_split(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, target: string, args: any[]): any;
					public compileRegExp(cx: org.mozilla.javascript.Context, source: string, flags: string): any;
					public action(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[], param4: number): any;
					public wrapRegExp(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, compiled: any): org.mozilla.javascript.Scriptable;
					public find_split(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, target: string, separator: string, reObj: org.mozilla.javascript.Scriptable, ip: number[], matchlen: number[], matched: boolean[], parensp: string[][]): number;
					public action(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[], actionType: number): any;
					public isRegExp(param0: org.mozilla.javascript.Scriptable): boolean;
					public isRegExp(obj: org.mozilla.javascript.Scriptable): boolean;
					public find_split(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string, param3: string, param4: org.mozilla.javascript.Scriptable, param5: number[], param6: number[], param7: boolean[], param8: string[][]): number;
					public js_split(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string, param3: any[]): any;
					public wrapRegExp(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any): org.mozilla.javascript.Scriptable;
					public constructor();
					public compileRegExp(param0: org.mozilla.javascript.Context, param1: string, param2: string): any;
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
					public constructor(str: string);
					public toString(): string;
					public constructor();
					public constructor(source: string, start: number, len: number);
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
					public read(): number;
					public resolveClass(desc: java.io.ObjectStreamClass): java.lang.Class<any>;
					public constructor(_in_: java.io.InputStream, scope: org.mozilla.javascript.Scriptable);
					public skip(param0: number): number;
					public read(buf: number[], off: number, len: number): number;
					public read(param0: number[], param1: number, param2: number): number;
					public available(): number;
					public constructor(_in_: java.io.InputStream);
					public constructor();
					public read(b: number[]): number;
					public readObject(): any;
					public read(param0: number[]): number;
					public close(): void;
					public resolveObject(obj: any): any;
					public skip(n: number): number;
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
					public addOptionalExcludedName(name: string): void;
					public replaceObject(obj: any): any;
					public write(buf: number[], off: number, len: number): void;
					public writeObject(param0: any): void;
					public write(buf: number[]): void;
					public write(param0: number): void;
					public flush(): void;
					public write(param0: number[]): void;
					public write(param0: number[], param1: number, param2: number): void;
					public writeObject(obj: any): void;
					public write(val: number): void;
					public hasExcludedName(name: string): boolean;
					public constructor();
					public close(): void;
					public addExcludedName(name: string): void;
					public removeExcludedName(name: string): void;
					public constructor(out: java.io.OutputStream, scope: org.mozilla.javascript.Scriptable);
					public constructor(out: java.io.OutputStream);
					public excludeAllIds(ids: any[]): void;
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
					public static toUrl(path: string): java.net.URL;
					public constructor();
					public static readFileOrUrl(path: string, convertToString: boolean, defaultEncoding: string): any;
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
					public setIsReportingWarnings(reportWarnings: boolean): void;
					public static getMessage(messageId: string, args: any[]): string;
					public runtimeError(message: string, sourceName: string, line: number, lineSource: string, lineOffset: number): org.mozilla.javascript.EvaluatorException;
					public reportException(ex: org.mozilla.javascript.RhinoException): void;
					public error(param0: string, param1: string, param2: number, param3: string, param4: number): void;
					public static getMessage(messageId: string): string;
					public constructor(reportWarnings: boolean, err: java.io.PrintStream);
					public warning(param0: string, param1: string, param2: number, param3: string, param4: number): void;
					public constructor(reportWarnings: boolean);
					public static getMessage(messageId: string, argument: string): string;
					public hasReportedError(): boolean;
					public error(message: string, sourceName: string, line: number, lineSource: string, lineOffset: number): void;
					public static getMessage(messageId: string, arg1: any, arg2: any): string;
					public static reportException(er: org.mozilla.javascript.ErrorReporter, ex: org.mozilla.javascript.RhinoException): void;
					public runtimeError(param0: string, param1: string, param2: number, param3: string, param4: number): org.mozilla.javascript.EvaluatorException;
					public warning(message: string, sourceName: string, line: number, lineSource: string, lineOffset: number): void;
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
						public processSource(filenames: string[]): void;
						public constructor();
						public processOptions(args: string[]): string[];
						public static main(args: string[]): void;
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
					export class ConsoleTextArea {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.ConsoleTextArea>;
						public getOut(): java.io.PrintStream;
						public keyReleased(e: java.awt.event.KeyEvent): void;
						public select(start: number, end: number): void;
						public write(str: string): void;
						public eval(str: string): void;
						public insertUpdate(e: javax.swing.event.DocumentEvent): void;
						public keyPressed(e: java.awt.event.KeyEvent): void;
						public removeUpdate(e: javax.swing.event.DocumentEvent): void;
						public changedUpdate(e: javax.swing.event.DocumentEvent): void;
						public keyTyped(e: java.awt.event.KeyEvent): void;
						public getIn(): java.io.InputStream;
						public getErr(): java.io.PrintStream;
						public constructor(argv: string[]);
						public postUpdateUI(): void;
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
						public run(): void;
						public constructor(textArea: org.mozilla.javascript.tools.shell.ConsoleTextArea, str: string);
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
						public write(b: number[]): void;
						public constructor();
						public write(ch: number): void;
						public write(data: string[], off: number, len: number): void;
						public close(): void;
						public write(param0: number): void;
						public flush(): void;
						public constructor(textArea: org.mozilla.javascript.tools.shell.ConsoleTextArea);
						public write(b: number[], off: number, len: number): void;
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
						public getPrototype(): org.mozilla.javascript.Scriptable;
						public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
						public get(index: number, start: org.mozilla.javascript.Scriptable): any;
						public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
						public getParentScope(): org.mozilla.javascript.Scriptable;
						public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
						public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
						public getIds(): any[];
						public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
						public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
						public constructor();
						public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public getAllIds(): any[];
						public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
						public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
						public delete(param0: number): void;
						public delete(key: org.mozilla.javascript.Symbol): void;
						public delete(param0: string): void;
						public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
						public static defineClass(scope: org.mozilla.javascript.ScriptableObject): void;
						public delete(param0: org.mozilla.javascript.Symbol): void;
						public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public setParentScope(m: org.mozilla.javascript.Scriptable): void;
						public delete(name: string): void;
						public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
						public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
						public getClassName(): string;
						public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
						public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
						public static defineClass(scope: org.mozilla.javascript.Scriptable, clazz: java.lang.Class<any>): void;
						public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
						public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
						public static defineClass(scope: org.mozilla.javascript.Scriptable, clazz: java.lang.Class<any>, sealed: boolean): void;
						public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
						public delete(index: number): void;
						public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
						public getDefaultValue(param0: java.lang.Class<any>): any;
						public getDefaultValue(typeHint: java.lang.Class<any>): any;
						public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
						public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
						public get(name: string, start: org.mozilla.javascript.Scriptable): any;
						public get(key: any): any;
						public isConst(name: string): boolean;
						public setPrototype(m: org.mozilla.javascript.Scriptable): void;
						public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public static defineClass(scope: org.mozilla.javascript.Scriptable, clazz: java.lang.Class<any>, sealed: boolean, mapInheritance: boolean): string;
						public isConst(param0: string): boolean;
						public constructor(scope: org.mozilla.javascript.ScriptableObject);
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
						public complete(buffer: string, cursor: number, candidates: java.util.List<string>): number;
						public invoke(proxy: any, method: java.lang.reflect.Method, args: any[]): any;
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
						public initQuitAction(quitAction: org.mozilla.javascript.tools.shell.QuitAction): void;
						public static readFile(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): any;
						public runDoctest(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, session: string, sourceName: string, lineNumber: number): number;
						public getPrototype(): org.mozilla.javascript.Scriptable;
						public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
						public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
						public static serialize(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): void;
						public setSealedStdLib(value: boolean): void;
						public get(index: number, start: org.mozilla.javascript.Scriptable): any;
						public static deserialize(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): any;
						public static runCommand(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): any;
						public isInitialized(): boolean;
						public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
						public getParentScope(): org.mozilla.javascript.Scriptable;
						public getIn(): java.io.InputStream;
						public static readline(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): any;
						public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
						public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
						public getIds(): any[];
						public static gc(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): void;
						public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
						public static toint32(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): any;
						public static help(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): void;
						public installRequire(cx: org.mozilla.javascript.Context, modulePath: java.util.List<string>, sandboxed: boolean): org.mozilla.javascript.commonjs.module.Require;
						public static doctest(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): any;
						public static write(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): any;
						public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
						public constructor();
						public getOut(): java.io.PrintStream;
						public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public init(cx: org.mozilla.javascript.Context): void;
						public getAllIds(): any[];
						public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
						public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
						public static loadClass(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): void;
						public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
						public static spawn(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): any;
						public delete(param0: number): void;
						public static defineClass(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): void;
						public delete(key: org.mozilla.javascript.Symbol): void;
						public delete(param0: string): void;
						public static version(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): number;
						public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
						public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
						public static load(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): void;
						public delete(param0: org.mozilla.javascript.Symbol): void;
						public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public setParentScope(m: org.mozilla.javascript.Scriptable): void;
						public delete(name: string): void;
						public static print(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): any;
						public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
						public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
						public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
						public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
						public getClassName(): string;
						public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
						public static defineClass(scope: org.mozilla.javascript.Scriptable, clazz: java.lang.Class<any>): void;
						public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
						public constructor(cx: org.mozilla.javascript.Context);
						public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
						public constructor(cx: org.mozilla.javascript.Context, sealed: boolean);
						public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
						public static seal(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): void;
						public static defineClass(scope: org.mozilla.javascript.Scriptable, clazz: java.lang.Class<any>, sealed: boolean): void;
						public static readUrl(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): any;
						public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
						public delete(index: number): void;
						public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
						public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
						public getDefaultValue(param0: java.lang.Class<any>): any;
						public getErr(): java.io.PrintStream;
						public getDefaultValue(typeHint: java.lang.Class<any>): any;
						public static quit(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): void;
						public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
						public setOut(out: java.io.PrintStream): void;
						public get(name: string, start: org.mozilla.javascript.Scriptable): any;
						public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
						public init(factory: org.mozilla.javascript.ContextFactory): void;
						public get(key: any): any;
						public setIn(_in_: java.io.InputStream): void;
						public setErr(err: java.io.PrintStream): void;
						public getConsole(cs: java.nio.charset.Charset): org.mozilla.javascript.tools.shell.ShellConsole;
						public isConst(name: string): boolean;
						public setPrototype(m: org.mozilla.javascript.Scriptable): void;
						public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
						public getPrompts(cx: org.mozilla.javascript.Context): string[];
						public static defineClass(scope: org.mozilla.javascript.Scriptable, clazz: java.lang.Class<any>, sealed: boolean, mapInheritance: boolean): string;
						public isConst(param0: string): boolean;
						public static sync(cx: org.mozilla.javascript.Context, thisObj: org.mozilla.javascript.Scriptable, args: any[], funObj: org.mozilla.javascript.Function): any;
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
					export class JSConsole {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.JSConsole>;
						public createFileChooser(): void;
						public actionPerformed(e: java.awt.event.ActionEvent): void;
						public static main(args: string[]): void;
						public constructor(args: string[]);
						public chooseFile(): string;
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
						public getDynamicSecurityDomain(securityDomain: any): any;
						public constructor();
						public callProcessFileSecure(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: string): void;
						public getStaticSecurityDomainClassInternal(): java.lang.Class<any>;
						public callProcessFileSecure(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, filename: string): void;
						public callWithDomain(securityDomain: any, cx: org.mozilla.javascript.Context, callable: org.mozilla.javascript.Callable, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
						public createClassLoader(parentLoader: java.lang.ClassLoader, securityDomain: any): org.mozilla.javascript.GeneratedClassLoader;
						public getDynamicSecurityDomain(param0: any): any;
					}
					export module JavaPolicySecurity {
						export class ContextPermissions extends java.security.PermissionCollection {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.JavaPolicySecurity.ContextPermissions>;
							public implies(permission: java.security.Permission): boolean;
							public add(param0: java.security.Permission): void;
							public elements(): java.util.Enumeration<java.security.Permission>;
							public implies(param0: java.security.Permission): boolean;
							public toString(): string;
							public add(permission: java.security.Permission): void;
						}
						export class Loader extends java.lang.ClassLoader implements org.mozilla.javascript.GeneratedClassLoader {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.JavaPolicySecurity.Loader>;
							public defineClass(param0: string, param1: number[]): java.lang.Class<any>;
							public defineClass(name: string, b: number[], off: number, len: number): java.lang.Class<any>;
							/** @deprecated */
							public defineClass(b: number[], off: number, len: number): java.lang.Class<any>;
							public defineClass(name: string, data: number[]): java.lang.Class<any>;
							public linkClass(cl: java.lang.Class<any>): void;
							public linkClass(param0: java.lang.Class<any>): void;
							public defineClass(name: string, b: number[], off: number, len: number, protectionDomain: java.security.ProtectionDomain): java.lang.Class<any>;
							public defineClass(name: string, b: java.nio.ByteBuffer, protectionDomain: java.security.ProtectionDomain): java.lang.Class<any>;
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
						public static processOptions(args: string[]): string[];
						public constructor();
						public static main(args: string[]): void;
						public static setErr(err: java.io.PrintStream): void;
						public static setOut(out: java.io.PrintStream): void;
						public static getGlobal(): org.mozilla.javascript.tools.shell.Global;
						public static exec(origArgs: string[]): number;
						public static processFile(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, filename: string): void;
						public static processSource(cx: org.mozilla.javascript.Context, filename: string): void;
						public static setIn(_in_: java.io.InputStream): void;
						public static processFileNoThrow(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, filename: string): void;
						public static getErr(): java.io.PrintStream;
						public static getIn(): java.io.InputStream;
						public static getOut(): java.io.PrintStream;
					}
					export module Main {
						export class IProxy extends java.lang.Object {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.Main.IProxy>;
							public quit(param0: org.mozilla.javascript.Context, param1: number): void;
							public quit(cx: org.mozilla.javascript.Context, exitCode: number): void;
							public run(param0: org.mozilla.javascript.Context): any;
							public run(cx: org.mozilla.javascript.Context): any;
						}
						export class ScriptCache extends java.util.LinkedHashMap<string,org.mozilla.javascript.tools.shell.Main.ScriptReference> {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.Main.ScriptCache>;
							public get(param0: any): any;
							public put(key: any, value: any): any;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): any;
							public putAll(m: java.util.Map<any,any>): void;
							public removeEldestEntry(eldest: java.util.Map.Entry<string,org.mozilla.javascript.tools.shell.Main.ScriptReference>): boolean;
							public putIfAbsent(key: any, value: any): any;
							public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
							public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
							public values(): java.util.Collection<any>;
							public containsKey(key: any): boolean;
							public remove(key: any): any;
							public equals(o: any): boolean;
							public put(param0: any, param1: any): any;
							public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
							public removeEldestEntry(eldest: java.util.Map.Entry<any,any>): boolean;
							public containsKey(param0: any): boolean;
							public clear(): void;
							public get(key: any): any;
							public keySet(): java.util.Set<any>;
							public remove(key: any, value: any): boolean;
							public replace(key: any, oldValue: any, newValue: any): boolean;
							public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
							public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
							public forEach(action: any /* any<any,any>*/): void;
							public getOrDefault(key: any, defaultValue: any): any;
							public containsValue(value: any): boolean;
							public replaceAll(_function_: any /* any<any,any,any>*/): void;
							public replace(key: any, value: any): any;
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
					export class Runner extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.Runner>;
						public run(cx: org.mozilla.javascript.Context): any;
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
						public static getConsole(scope: org.mozilla.javascript.Scriptable, cs: java.nio.charset.Charset): org.mozilla.javascript.tools.shell.ShellConsole;
						public getIn(): java.io.InputStream;
						public readLine(param0: string): string;
						public flush(): void;
						public println(): void;
						public println(param0: string): void;
						public static getConsole(_in_: java.io.InputStream, ps: java.io.PrintStream, cs: java.nio.charset.Charset): org.mozilla.javascript.tools.shell.ShellConsole;
						public print(param0: string): void;
						public readLine(): string;
					}
					export module ShellConsole {
						export class ConsoleInputStream extends java.io.InputStream {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.ShellConsole.ConsoleInputStream>;
							public constructor();
							public close(): void;
							public constructor(console: org.mozilla.javascript.tools.shell.ShellConsole, cs: java.nio.charset.Charset);
							public read(): number;
							public read(b: number[], off: number, len: number): number;
							public read(b: number[]): number;
						}
						export class JLineShellConsoleV1 extends org.mozilla.javascript.tools.shell.ShellConsole {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.ShellConsole.JLineShellConsoleV1>;
							public readLine(param0: string): string;
							public print(param0: string): void;
							public println(s: string): void;
							public readLine(prompt: string): string;
							public println(param0: string): void;
							public readLine(): string;
							public flush(): void;
							public print(s: string): void;
							public getIn(): java.io.InputStream;
							public println(): void;
						}
						export class JLineShellConsoleV2 extends org.mozilla.javascript.tools.shell.ShellConsole {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.ShellConsole.JLineShellConsoleV2>;
							public readLine(param0: string): string;
							public print(param0: string): void;
							public println(s: string): void;
							public readLine(prompt: string): string;
							public println(param0: string): void;
							public readLine(): string;
							public flush(): void;
							public print(s: string): void;
							public getIn(): java.io.InputStream;
							public println(): void;
						}
						export class SimpleShellConsole extends org.mozilla.javascript.tools.shell.ShellConsole {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.ShellConsole.SimpleShellConsole>;
							public readLine(param0: string): string;
							public print(param0: string): void;
							public println(s: string): void;
							public readLine(prompt: string): string;
							public println(param0: string): void;
							public readLine(): string;
							public flush(): void;
							public print(s: string): void;
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
					export class ShellConsolePrinter extends java.lang.Object implements org.mozilla.javascript.NativeConsole.ConsolePrinter {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.ShellConsolePrinter>;
						public print(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, level: org.mozilla.javascript.NativeConsole.Level, args: any[], stack: org.mozilla.javascript.ScriptStackElement[]): void;
						public print(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.NativeConsole.Level, param3: any[], param4: org.mozilla.javascript.ScriptStackElement[]): void;
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
						public hasFeature(cx: org.mozilla.javascript.Context, featureIndex: number): boolean;
						public constructor();
						public setOptimizationLevel(optimizationLevel: number): void;
						public setStrictMode(flag: boolean): void;
						public setLanguageVersion(version: number): void;
						public setGeneratingDebug(generatingDebug: boolean): void;
						public setAllowReservedKeywords(allowReservedKeywords: boolean): void;
						public setWarningAsError(flag: boolean): void;
						public setErrorReporter(errorReporter: org.mozilla.javascript.ErrorReporter): void;
						public onContextCreated(cx: org.mozilla.javascript.Context): void;
						public getCharacterEncoding(): string;
						public setCharacterEncoding(characterEncoding: string): void;
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
						public static getStream(scope: org.mozilla.javascript.Scriptable): java.io.InputStream;
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
					export class Timers extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.tools.shell.Timers>;
						public constructor();
						public runAllTimers(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable): void;
						public install(scope: org.mozilla.javascript.Scriptable): void;
					}
					export module Timers {
						export class Timeout extends java.lang.Comparable<org.mozilla.javascript.tools.shell.Timers.Timeout> {
							public static class: java.lang.Class<org.mozilla.javascript.tools.shell.Timers.Timeout>;
							public hashCode(): number;
							public equals(obj: any): boolean;
							public compareTo(o: org.mozilla.javascript.tools.shell.Timers.Timeout): number;
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
			export module typedarrays {
				export class ByteIo extends java.lang.Object {
					public static class: java.lang.Class<org.mozilla.javascript.typedarrays.ByteIo>;
					public static writeUint64(buf: number[], offset: number, val: number, param3: boolean): void;
					public static readUint64Primitive(buf: number[], offset: number, littleEndian: boolean): number;
					public static readFloat32(buf: number[], offset: number, littleEndian: boolean): java.lang.Float;
					public static writeFloat64(buf: number[], offset: number, val: number, param3: boolean): void;
					public static readUint16(buf: number[], offset: number, littleEndian: boolean): java.lang.Integer;
					public static readFloat64(buf: number[], offset: number, littleEndian: boolean): java.lang.Double;
					public static writeUint32(buf: number[], offset: number, val: number, param3: boolean): void;
					public static writeFloat32(buf: number[], offset: number, val: number, param3: boolean): void;
					public static readUint8(buf: number[], offset: number): java.lang.Integer;
					public static readInt16(buf: number[], offset: number, littleEndian: boolean): java.lang.Short;
					public static writeInt16(buf: number[], offset: number, val: number, littleEndian: boolean): void;
					public static writeInt32(buf: number[], offset: number, val: number, littleEndian: boolean): void;
					public static readInt8(buf: number[], offset: number): java.lang.Byte;
					public constructor();
					public static readUint32Primitive(buf: number[], offset: number, littleEndian: boolean): number;
					public static writeUint8(buf: number[], offset: number, val: number): void;
					public static readInt32(buf: number[], offset: number, littleEndian: boolean): java.lang.Integer;
					public static writeUint16(buf: number[], offset: number, val: number, littleEndian: boolean): void;
					public static readUint32(buf: number[], offset: number, littleEndian: boolean): any;
					public static writeInt8(buf: number[], offset: number, val: number): void;
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
					public static toInt32(arg: any): number;
					public static toInt16(arg: any): number;
					public constructor();
					public static toUint8Clamp(arg: any): number;
					public static toUint8(arg: any): number;
					public static toUint32(arg: any): number;
					public static toUint16(arg: any): number;
					public static toInt8(arg: any): number;
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
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public constructor(len: number);
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getInstanceIdValue(id: number): any;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(name: string): void;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public constructor();
					public slice(s: number, param1: number): org.mozilla.javascript.typedarrays.NativeArrayBuffer;
					public delete(param0: number): void;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public isConst(param0: string): boolean;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public findPrototypeId(s: string): number;
					public getMaxInstanceId(): number;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public findInstanceIdInfo(s: string): number;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public getLength(): number;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public getBuffer(): number[];
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public initPrototypeId(id: number): void;
					public delete(param0: string): void;
					public getAllIds(): any[];
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
					public isConst(name: string): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public fillConstructorProperties(ctor: org.mozilla.javascript.IdFunctionObject): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public delete(index: number): void;
					public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public findPrototypeId(name: string): number;
					public getInstanceIdName(id: number): string;
					public findInstanceIdInfo(key: org.mozilla.javascript.Symbol): number;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public findInstanceIdInfo(name: string): number;
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
					public static MAX_INSTANCE_ID: number;
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getInstanceIdValue(id: number): any;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(name: string): void;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public constructor();
					public delete(param0: number): void;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public isConst(param0: string): boolean;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getByteOffset(): number;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public getByteLength(): number;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public static useLittleEndian(): boolean;
					public getMaxInstanceId(): number;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public findInstanceIdInfo(s: string): number;
					public static isArg(args: any[], i: number): boolean;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, offset: number, byteLength: number);
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public getAllIds(): any[];
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public getBuffer(): org.mozilla.javascript.typedarrays.NativeArrayBuffer;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public isConst(name: string): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public delete(index: number): void;
					public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public getInstanceIdName(id: number): string;
					public findInstanceIdInfo(key: org.mozilla.javascript.Symbol): number;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public findInstanceIdInfo(name: string): number;
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
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(name: string): void;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public constructor();
					public delete(param0: number): void;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public isConst(param0: string): boolean;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public findPrototypeId(s: string): number;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, offset: number, byteLength: number);
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public initPrototypeId(id: number): void;
					public delete(param0: string): void;
					public getAllIds(): any[];
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
					public isConst(name: string): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public delete(index: number): void;
					public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, offset: number, length: number);
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public findPrototypeId(name: string): number;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
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
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public constructor(len: number);
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public setArrayElement(index: number, value: any): void;
					public size(): number;
					public getArrayLength(): number;
					public delete(name: string): void;
					public iterator(): java.util.Iterator<any>;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public constructor();
					public getArrayElement(param0: number): any;
					public toArray(param0: any[]): any[];
					public delete(param0: number): void;
					public remove(o: any): boolean;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public toArray(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public set(i: number, aByte: java.lang.Float): java.lang.Float;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public js_set(param0: number, param1: any): any;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public put(index: number, start: org.mozilla.javascript.Scriptable, val: any): void;
					public containsAll(objects: java.util.Collection<any>): boolean;
					public listIterator(start: number): java.util.ListIterator<any>;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public construct(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number): org.mozilla.javascript.typedarrays.NativeFloat32Array;
					public getIds(): any[];
					public contains(o: any): boolean;
					public get(i: number): java.lang.Float;
					public addAll(i: number, bytes: java.util.Collection<any>): boolean;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number);
					public hashCode(): number;
					public getAllIds(): any[];
					public add(aByte: any): boolean;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public js_get(index: number): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
					public toArray(ts: any[]): any[];
					public indexOf(param0: any): number;
					public delete(index: number): void;
					public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public realThis(thisObj: org.mozilla.javascript.Scriptable, f: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeFloat32Array;
					public addAll(bytes: java.util.Collection<any>): boolean;
					public retainAll(objects: java.util.Collection<any>): boolean;
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public spliterator(): java.util.Spliterator<any>;
					public add(i: number, aByte: any): void;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public lastIndexOf(o: any): number;
					public subList(i: number, i2: number): java.util.List<any>;
					public get(param0: number): any;
					public removeAll(objects: java.util.Collection<any>): boolean;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public isConst(param0: string): boolean;
					public add(param0: number, param1: any): void;
					public setArrayElement(param0: number, param1: any): void;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public sort(c: java.util.Comparator<any>): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public getArrayElement(index: number): any;
					public replaceAll(operator: any /* any*/): void;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number, byteLen: number);
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, offset: number, byteLength: number);
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public isConst(name: string): boolean;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public indexOf(o: any): number;
					public remove(i: number): any;
					public equals(param0: any): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public js_set(index: number, c: any): any;
					public listIterator(): java.util.ListIterator<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
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
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public constructor(len: number);
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public setArrayElement(index: number, value: any): void;
					public size(): number;
					public getArrayLength(): number;
					public delete(name: string): void;
					public iterator(): java.util.Iterator<any>;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public constructor();
					public getArrayElement(param0: number): any;
					public toArray(param0: any[]): any[];
					public delete(param0: number): void;
					public remove(o: any): boolean;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public toArray(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public js_set(param0: number, param1: any): any;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public get(i: number): java.lang.Double;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public put(index: number, start: org.mozilla.javascript.Scriptable, val: any): void;
					public containsAll(objects: java.util.Collection<any>): boolean;
					public listIterator(start: number): java.util.ListIterator<any>;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public contains(o: any): boolean;
					public addAll(i: number, bytes: java.util.Collection<any>): boolean;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number);
					public hashCode(): number;
					public getAllIds(): any[];
					public add(aByte: any): boolean;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public set(i: number, aByte: java.lang.Double): java.lang.Double;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public js_get(index: number): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
					public toArray(ts: any[]): any[];
					public indexOf(param0: any): number;
					public delete(index: number): void;
					public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public addAll(bytes: java.util.Collection<any>): boolean;
					public retainAll(objects: java.util.Collection<any>): boolean;
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public spliterator(): java.util.Spliterator<any>;
					public add(i: number, aByte: any): void;
					public realThis(thisObj: org.mozilla.javascript.Scriptable, f: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeFloat64Array;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public lastIndexOf(o: any): number;
					public subList(i: number, i2: number): java.util.List<any>;
					public get(param0: number): any;
					public removeAll(objects: java.util.Collection<any>): boolean;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public construct(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number): org.mozilla.javascript.typedarrays.NativeFloat64Array;
					public isConst(param0: string): boolean;
					public add(param0: number, param1: any): void;
					public setArrayElement(param0: number, param1: any): void;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public sort(c: java.util.Comparator<any>): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public getArrayElement(index: number): any;
					public replaceAll(operator: any /* any*/): void;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number, byteLen: number);
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, offset: number, byteLength: number);
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public isConst(name: string): boolean;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public indexOf(o: any): number;
					public remove(i: number): any;
					public equals(param0: any): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public js_set(index: number, c: any): any;
					public listIterator(): java.util.ListIterator<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
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
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public constructor(len: number);
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public setArrayElement(index: number, value: any): void;
					public size(): number;
					public getArrayLength(): number;
					public delete(name: string): void;
					public iterator(): java.util.Iterator<any>;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public constructor();
					public getArrayElement(param0: number): any;
					public toArray(param0: any[]): any[];
					public delete(param0: number): void;
					public remove(o: any): boolean;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public toArray(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public construct(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number): org.mozilla.javascript.typedarrays.NativeInt16Array;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public js_set(param0: number, param1: any): any;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public put(index: number, start: org.mozilla.javascript.Scriptable, val: any): void;
					public containsAll(objects: java.util.Collection<any>): boolean;
					public listIterator(start: number): java.util.ListIterator<any>;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public contains(o: any): boolean;
					public addAll(i: number, bytes: java.util.Collection<any>): boolean;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number);
					public hashCode(): number;
					public getAllIds(): any[];
					public add(aByte: any): boolean;
					public set(i: number, aByte: java.lang.Short): java.lang.Short;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public js_get(index: number): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
					public toArray(ts: any[]): any[];
					public indexOf(param0: any): number;
					public delete(index: number): void;
					public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public realThis(thisObj: org.mozilla.javascript.Scriptable, f: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeInt16Array;
					public addAll(bytes: java.util.Collection<any>): boolean;
					public get(i: number): java.lang.Short;
					public retainAll(objects: java.util.Collection<any>): boolean;
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public spliterator(): java.util.Spliterator<any>;
					public add(i: number, aByte: any): void;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public lastIndexOf(o: any): number;
					public subList(i: number, i2: number): java.util.List<any>;
					public get(param0: number): any;
					public removeAll(objects: java.util.Collection<any>): boolean;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public isConst(param0: string): boolean;
					public add(param0: number, param1: any): void;
					public setArrayElement(param0: number, param1: any): void;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public sort(c: java.util.Comparator<any>): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public getArrayElement(index: number): any;
					public replaceAll(operator: any /* any*/): void;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number, byteLen: number);
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, offset: number, byteLength: number);
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public isConst(name: string): boolean;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public indexOf(o: any): number;
					public remove(i: number): any;
					public equals(param0: any): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public js_set(index: number, c: any): any;
					public listIterator(): java.util.ListIterator<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
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
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public constructor(len: number);
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public setArrayElement(index: number, value: any): void;
					public size(): number;
					public getArrayLength(): number;
					public delete(name: string): void;
					public iterator(): java.util.Iterator<any>;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public constructor();
					public getArrayElement(param0: number): any;
					public toArray(param0: any[]): any[];
					public delete(param0: number): void;
					public remove(o: any): boolean;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public toArray(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public js_set(param0: number, param1: any): any;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public put(index: number, start: org.mozilla.javascript.Scriptable, val: any): void;
					public containsAll(objects: java.util.Collection<any>): boolean;
					public listIterator(start: number): java.util.ListIterator<any>;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public contains(o: any): boolean;
					public addAll(i: number, bytes: java.util.Collection<any>): boolean;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number);
					public hashCode(): number;
					public getAllIds(): any[];
					public add(aByte: any): boolean;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public js_get(index: number): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
					public toArray(ts: any[]): any[];
					public construct(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number): org.mozilla.javascript.typedarrays.NativeInt32Array;
					public indexOf(param0: any): number;
					public delete(index: number): void;
					public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public get(i: number): java.lang.Integer;
					public addAll(bytes: java.util.Collection<any>): boolean;
					public retainAll(objects: java.util.Collection<any>): boolean;
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public spliterator(): java.util.Spliterator<any>;
					public add(i: number, aByte: any): void;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public realThis(thisObj: org.mozilla.javascript.Scriptable, f: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeInt32Array;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public lastIndexOf(o: any): number;
					public subList(i: number, i2: number): java.util.List<any>;
					public get(param0: number): any;
					public removeAll(objects: java.util.Collection<any>): boolean;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public isConst(param0: string): boolean;
					public add(param0: number, param1: any): void;
					public setArrayElement(param0: number, param1: any): void;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public sort(c: java.util.Comparator<any>): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public set(i: number, aByte: java.lang.Integer): java.lang.Integer;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public getArrayElement(index: number): any;
					public replaceAll(operator: any /* any*/): void;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number, byteLen: number);
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, offset: number, byteLength: number);
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public isConst(name: string): boolean;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public indexOf(o: any): number;
					public remove(i: number): any;
					public equals(param0: any): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public js_set(index: number, c: any): any;
					public listIterator(): java.util.ListIterator<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
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
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public constructor(len: number);
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public setArrayElement(index: number, value: any): void;
					public size(): number;
					public getArrayLength(): number;
					public delete(name: string): void;
					public iterator(): java.util.Iterator<any>;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public constructor();
					public getArrayElement(param0: number): any;
					public toArray(param0: any[]): any[];
					public delete(param0: number): void;
					public remove(o: any): boolean;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public toArray(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public set(i: number, aByte: java.lang.Byte): java.lang.Byte;
					public js_set(param0: number, param1: any): any;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public put(index: number, start: org.mozilla.javascript.Scriptable, val: any): void;
					public containsAll(objects: java.util.Collection<any>): boolean;
					public listIterator(start: number): java.util.ListIterator<any>;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public contains(o: any): boolean;
					public addAll(i: number, bytes: java.util.Collection<any>): boolean;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number);
					public hashCode(): number;
					public getAllIds(): any[];
					public add(aByte: any): boolean;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public js_get(index: number): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
					public realThis(thisObj: org.mozilla.javascript.Scriptable, f: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeInt8Array;
					public toArray(ts: any[]): any[];
					public indexOf(param0: any): number;
					public delete(index: number): void;
					public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public addAll(bytes: java.util.Collection<any>): boolean;
					public retainAll(objects: java.util.Collection<any>): boolean;
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public spliterator(): java.util.Spliterator<any>;
					public add(i: number, aByte: any): void;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public lastIndexOf(o: any): number;
					public subList(i: number, i2: number): java.util.List<any>;
					public get(param0: number): any;
					public removeAll(objects: java.util.Collection<any>): boolean;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public isConst(param0: string): boolean;
					public add(param0: number, param1: any): void;
					public setArrayElement(param0: number, param1: any): void;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public sort(c: java.util.Comparator<any>): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public getArrayElement(index: number): any;
					public replaceAll(operator: any /* any*/): void;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number, byteLen: number);
					public construct(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number): org.mozilla.javascript.typedarrays.NativeInt8Array;
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, offset: number, byteLength: number);
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public isConst(name: string): boolean;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public indexOf(o: any): number;
					public remove(i: number): any;
					public equals(param0: any): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public js_set(index: number, c: any): any;
					public listIterator(): java.util.ListIterator<any>;
					public get(i: number): java.lang.Byte;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
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
					public set(t: any): void;
					public set(param0: any): void;
					public previousIndex(): number;
					public nextIndex(): number;
					public next(): any;
					public add(param0: any): void;
					public hasPrevious(): boolean;
					public previous(): any;
					public add(t: any): void;
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
					public setArrayElement(index: number, value: any): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public size(): number;
					public getInstanceIdValue(id: number): any;
					public getArrayLength(): number;
					public delete(name: string): void;
					public iterator(): java.util.Iterator<any>;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public constructor();
					public getArrayElement(param0: number): any;
					public toArray(param0: any[]): any[];
					public delete(param0: number): void;
					public remove(o: any): boolean;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public toArray(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public findPrototypeId(s: string): number;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public js_set(param0: number, param1: any): any;
					public findInstanceIdInfo(s: string): number;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public put(index: number, start: org.mozilla.javascript.Scriptable, val: any): void;
					public containsAll(objects: java.util.Collection<any>): boolean;
					public listIterator(start: number): java.util.ListIterator<any>;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public checkIndex(index: number): boolean;
					public getIds(): any[];
					public contains(o: any): boolean;
					public addAll(i: number, bytes: java.util.Collection<any>): boolean;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public initPrototypeId(id: number): void;
					public hashCode(): number;
					public getAllIds(): any[];
					public add(aByte: any): boolean;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public forEach(action: any /* any*/): void;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public parallelStream(): java.util.stream.Stream<any>;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public fillConstructorProperties(ctor: org.mozilla.javascript.IdFunctionObject): void;
					public toArray(ts: any[]): any[];
					public indexOf(param0: any): number;
					public delete(index: number): void;
					public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public findPrototypeId(name: string): number;
					public addAll(bytes: java.util.Collection<any>): boolean;
					public stream(): java.util.stream.Stream<any>;
					public retainAll(objects: java.util.Collection<any>): boolean;
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public findPrototypeId(k: org.mozilla.javascript.Symbol): number;
					public spliterator(): java.util.Spliterator<any>;
					public add(i: number, aByte: any): void;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public lastIndexOf(o: any): number;
					public subList(i: number, i2: number): java.util.List<any>;
					public get(param0: number): any;
					public removeAll(objects: java.util.Collection<any>): boolean;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public isConst(param0: string): boolean;
					public add(param0: number, param1: any): void;
					public setArrayElement(param0: number, param1: any): void;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public sort(c: java.util.Comparator<any>): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public getArrayElement(index: number): any;
					public replaceAll(operator: any /* any*/): void;
					public getMaxInstanceId(): number;
					public addAll(param0: java.util.Collection<any>): boolean;
					public equals(obj: any): boolean;
					public add(param0: any): boolean;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number, byteLen: number);
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, offset: number, byteLength: number);
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public isConst(name: string): boolean;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public indexOf(o: any): number;
					public remove(i: number): any;
					public equals(param0: any): boolean;
					public removeIf(filter: any /* any*/): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public listIterator(): java.util.ListIterator<any>;
					public getInstanceIdName(id: number): string;
					public findInstanceIdInfo(key: org.mozilla.javascript.Symbol): number;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
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
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public realThis(thisObj: org.mozilla.javascript.Scriptable, f: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeUint16Array;
					public constructor(len: number);
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public setArrayElement(index: number, value: any): void;
					public size(): number;
					public getArrayLength(): number;
					public delete(name: string): void;
					public iterator(): java.util.Iterator<any>;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public constructor();
					public getArrayElement(param0: number): any;
					public toArray(param0: any[]): any[];
					public delete(param0: number): void;
					public remove(o: any): boolean;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public toArray(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public js_set(param0: number, param1: any): any;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public put(index: number, start: org.mozilla.javascript.Scriptable, val: any): void;
					public containsAll(objects: java.util.Collection<any>): boolean;
					public listIterator(start: number): java.util.ListIterator<any>;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public contains(o: any): boolean;
					public addAll(i: number, bytes: java.util.Collection<any>): boolean;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number);
					public hashCode(): number;
					public getAllIds(): any[];
					public add(aByte: any): boolean;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public js_get(index: number): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
					public toArray(ts: any[]): any[];
					public indexOf(param0: any): number;
					public delete(index: number): void;
					public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public get(i: number): java.lang.Integer;
					public addAll(bytes: java.util.Collection<any>): boolean;
					public retainAll(objects: java.util.Collection<any>): boolean;
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public spliterator(): java.util.Spliterator<any>;
					public add(i: number, aByte: any): void;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public lastIndexOf(o: any): number;
					public subList(i: number, i2: number): java.util.List<any>;
					public get(param0: number): any;
					public removeAll(objects: java.util.Collection<any>): boolean;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public isConst(param0: string): boolean;
					public add(param0: number, param1: any): void;
					public setArrayElement(param0: number, param1: any): void;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public sort(c: java.util.Comparator<any>): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public set(i: number, aByte: java.lang.Integer): java.lang.Integer;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public getArrayElement(index: number): any;
					public replaceAll(operator: any /* any*/): void;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number, byteLen: number);
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, offset: number, byteLength: number);
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public construct(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number): org.mozilla.javascript.typedarrays.NativeUint16Array;
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public isConst(name: string): boolean;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public indexOf(o: any): number;
					public remove(i: number): any;
					public equals(param0: any): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public js_set(index: number, c: any): any;
					public listIterator(): java.util.ListIterator<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
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
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public constructor(len: number);
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public setArrayElement(index: number, value: any): void;
					public size(): number;
					public getArrayLength(): number;
					public delete(name: string): void;
					public iterator(): java.util.Iterator<any>;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public constructor();
					public getArrayElement(param0: number): any;
					public toArray(param0: any[]): any[];
					public delete(param0: number): void;
					public remove(o: any): boolean;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public toArray(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public js_set(param0: number, param1: any): any;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public put(index: number, start: org.mozilla.javascript.Scriptable, val: any): void;
					public set(i: number, aByte: java.lang.Long): java.lang.Long;
					public containsAll(objects: java.util.Collection<any>): boolean;
					public listIterator(start: number): java.util.ListIterator<any>;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public contains(o: any): boolean;
					public addAll(i: number, bytes: java.util.Collection<any>): boolean;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number);
					public hashCode(): number;
					public getAllIds(): any[];
					public add(aByte: any): boolean;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public js_get(index: number): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
					public toArray(ts: any[]): any[];
					public indexOf(param0: any): number;
					public get(i: number): java.lang.Long;
					public delete(index: number): void;
					public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public addAll(bytes: java.util.Collection<any>): boolean;
					public retainAll(objects: java.util.Collection<any>): boolean;
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public spliterator(): java.util.Spliterator<any>;
					public add(i: number, aByte: any): void;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public lastIndexOf(o: any): number;
					public subList(i: number, i2: number): java.util.List<any>;
					public realThis(thisObj: org.mozilla.javascript.Scriptable, f: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeUint32Array;
					public get(param0: number): any;
					public removeAll(objects: java.util.Collection<any>): boolean;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public isConst(param0: string): boolean;
					public add(param0: number, param1: any): void;
					public setArrayElement(param0: number, param1: any): void;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public sort(c: java.util.Comparator<any>): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public getArrayElement(index: number): any;
					public replaceAll(operator: any /* any*/): void;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number, byteLen: number);
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, offset: number, byteLength: number);
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public construct(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number): org.mozilla.javascript.typedarrays.NativeUint32Array;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public isConst(name: string): boolean;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public indexOf(o: any): number;
					public remove(i: number): any;
					public equals(param0: any): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public js_set(index: number, c: any): any;
					public listIterator(): java.util.ListIterator<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
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
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public constructor(len: number);
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public setArrayElement(index: number, value: any): void;
					public size(): number;
					public getArrayLength(): number;
					public delete(name: string): void;
					public iterator(): java.util.Iterator<any>;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public constructor();
					public getArrayElement(param0: number): any;
					public toArray(param0: any[]): any[];
					public delete(param0: number): void;
					public remove(o: any): boolean;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public construct(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number): org.mozilla.javascript.typedarrays.NativeUint8Array;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public toArray(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public realThis(thisObj: org.mozilla.javascript.Scriptable, f: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeUint8Array;
					public js_set(param0: number, param1: any): any;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public put(index: number, start: org.mozilla.javascript.Scriptable, val: any): void;
					public containsAll(objects: java.util.Collection<any>): boolean;
					public listIterator(start: number): java.util.ListIterator<any>;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public contains(o: any): boolean;
					public addAll(i: number, bytes: java.util.Collection<any>): boolean;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number);
					public hashCode(): number;
					public getAllIds(): any[];
					public add(aByte: any): boolean;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public js_get(index: number): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
					public toArray(ts: any[]): any[];
					public indexOf(param0: any): number;
					public delete(index: number): void;
					public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public get(i: number): java.lang.Integer;
					public addAll(bytes: java.util.Collection<any>): boolean;
					public retainAll(objects: java.util.Collection<any>): boolean;
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public spliterator(): java.util.Spliterator<any>;
					public add(i: number, aByte: any): void;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public lastIndexOf(o: any): number;
					public subList(i: number, i2: number): java.util.List<any>;
					public get(param0: number): any;
					public removeAll(objects: java.util.Collection<any>): boolean;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public isConst(param0: string): boolean;
					public add(param0: number, param1: any): void;
					public setArrayElement(param0: number, param1: any): void;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public sort(c: java.util.Comparator<any>): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public set(i: number, aByte: java.lang.Integer): java.lang.Integer;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public getArrayElement(index: number): any;
					public replaceAll(operator: any /* any*/): void;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number, byteLen: number);
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, offset: number, byteLength: number);
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public isConst(name: string): boolean;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public indexOf(o: any): number;
					public remove(i: number): any;
					public equals(param0: any): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public js_set(index: number, c: any): any;
					public listIterator(): java.util.ListIterator<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
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
					public isEmpty(): boolean;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public constructor(len: number);
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public setArrayElement(index: number, value: any): void;
					public size(): number;
					public getArrayLength(): number;
					public delete(name: string): void;
					public iterator(): java.util.Iterator<any>;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public constructor();
					public getArrayElement(param0: number): any;
					public toArray(param0: any[]): any[];
					public delete(param0: number): void;
					public remove(o: any): boolean;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public toArray(): any[];
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public js_get(param0: number): any;
					public set(param0: number, param1: any): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public js_set(param0: number, param1: any): any;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public put(index: number, start: org.mozilla.javascript.Scriptable, val: any): void;
					public containsAll(objects: java.util.Collection<any>): boolean;
					public listIterator(start: number): java.util.ListIterator<any>;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public contains(o: any): boolean;
					public addAll(i: number, bytes: java.util.Collection<any>): boolean;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number);
					public hashCode(): number;
					public getAllIds(): any[];
					public add(aByte: any): boolean;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public js_get(index: number): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
					public toArray(ts: any[]): any[];
					public indexOf(param0: any): number;
					public delete(index: number): void;
					public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public get(i: number): java.lang.Integer;
					public addAll(bytes: java.util.Collection<any>): boolean;
					public retainAll(objects: java.util.Collection<any>): boolean;
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public spliterator(): java.util.Spliterator<any>;
					public add(i: number, aByte: any): void;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public construct(param0: org.mozilla.javascript.typedarrays.NativeArrayBuffer, param1: number, param2: number): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public lastIndexOf(o: any): number;
					public subList(i: number, i2: number): java.util.List<any>;
					public get(param0: number): any;
					public removeAll(objects: java.util.Collection<any>): boolean;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public isConst(param0: string): boolean;
					public add(param0: number, param1: any): void;
					public setArrayElement(param0: number, param1: any): void;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public sort(c: java.util.Comparator<any>): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public set(i: number, aByte: java.lang.Integer): java.lang.Integer;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public construct(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number): org.mozilla.javascript.typedarrays.NativeUint8ClampedArray;
					public getArrayElement(index: number): any;
					public replaceAll(operator: any /* any*/): void;
					public realThis(thisObj: org.mozilla.javascript.Scriptable, f: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeUint8ClampedArray;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, off: number, len: number, byteLen: number);
					public remove(param0: number): any;
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public constructor(ab: org.mozilla.javascript.typedarrays.NativeArrayBuffer, offset: number, byteLength: number);
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public contains(param0: any): boolean;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public getBytesPerElement(): number;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public isConst(name: string): boolean;
					public realThis(param0: org.mozilla.javascript.Scriptable, param1: org.mozilla.javascript.IdFunctionObject): org.mozilla.javascript.typedarrays.NativeTypedArrayView<any>;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public indexOf(o: any): number;
					public remove(i: number): any;
					public equals(param0: any): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public js_set(index: number, c: any): any;
					public listIterator(): java.util.ListIterator<any>;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
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
					public static doubleToInt32(x: number): number;
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
					public constructor();
					public static numberToString(v: number, param1: org.mozilla.javascript.v8dtoa.FastDtoaBuilder): boolean;
					public static dtoa(v: number, param1: org.mozilla.javascript.v8dtoa.FastDtoaBuilder): boolean;
					public static numberToString(v: number): string;
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
					public setPrettyIndent(i: number): void;
					public getPrettyIndent(): number;
					public toDefaultXmlNamespace(param0: org.mozilla.javascript.Context, param1: any): any;
					public isPrettyPrinting(): boolean;
					public nameRef(param0: org.mozilla.javascript.Context, param1: any, param2: org.mozilla.javascript.Scriptable, param3: number): org.mozilla.javascript.Ref;
					public nameRef(param0: org.mozilla.javascript.Context, param1: any, param2: any, param3: org.mozilla.javascript.Scriptable, param4: number): org.mozilla.javascript.Ref;
					public escapeTextValue(param0: any): string;
					public bindToScope(scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.xml.XMLLib;
					public constructor();
					public setIgnoreWhitespace(b: boolean): void;
					public isIgnoreProcessingInstructions(): boolean;
					public static extractFromScopeOrNull(scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.xml.XMLLib;
					public isIgnoreWhitespace(): boolean;
					public static extractFromScope(scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.xml.XMLLib;
					public isXMLName(param0: org.mozilla.javascript.Context, param1: any): boolean;
					public escapeAttributeValue(param0: any): string;
					public setIgnoreProcessingInstructions(b: boolean): void;
					public setIgnoreComments(b: boolean): void;
					public setPrettyPrinting(b: boolean): void;
					public isIgnoreComments(): boolean;
				}
				export module XMLLib {
					export abstract class Factory extends java.lang.Object {
						public static class: java.lang.Class<org.mozilla.javascript.xml.XMLLib.Factory>;
						public constructor();
						public static create(className: string): org.mozilla.javascript.xml.XMLLib.Factory;
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
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public getFunctionProperty(param0: org.mozilla.javascript.Context, param1: string): any;
					public delete(name: string): void;
					public put(param0: org.mozilla.javascript.Context, param1: any, param2: any): void;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public constructor();
					public delete(param0: number): void;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getFunctionProperty(param0: org.mozilla.javascript.Context, param1: number): any;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public isConst(param0: string): boolean;
					public enterWith(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.NativeWith;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public getExtraMethodSource(param0: org.mozilla.javascript.Context): org.mozilla.javascript.Scriptable;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: org.mozilla.javascript.Context, param1: any): boolean;
					public has(param0: org.mozilla.javascript.Context, param1: any): boolean;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public addValues(cx: org.mozilla.javascript.Context, thisIsLeft: boolean, value: any): any;
					public getIds(): any[];
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public getAllIds(): any[];
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public enterDotQuery(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.NativeWith;
					public getTypeOf(): string;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public memberRef(param0: org.mozilla.javascript.Context, param1: any, param2: any, param3: number): org.mozilla.javascript.Ref;
					public isConst(name: string): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public delete(index: number): void;
					public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public memberRef(param0: org.mozilla.javascript.Context, param1: any, param2: number): org.mozilla.javascript.Ref;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public get(param0: org.mozilla.javascript.Context, param1: any): any;
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
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public uri(): string;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getInstanceIdValue(id: number): any;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(name: string): void;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: number): void;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public isConst(param0: string): boolean;
					public prefix(): string;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public toLocaleString(): string;
					public exportAsJSClass(maxPrototypeId: number, scope: org.mozilla.javascript.Scriptable, sealed: boolean): org.mozilla.javascript.IdFunctionObject;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public equivalentValues(value: any): any;
					public findPrototypeId(s: string): number;
					public getMaxInstanceId(): number;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public findInstanceIdInfo(s: string): number;
					public equals(obj: any): boolean;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public exportAsJSClass(sealed: boolean): void;
					public getIds(): any[];
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public toString(): string;
					public getClassName(): string;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public initPrototypeId(id: number): void;
					public hashCode(): number;
					public delete(param0: string): void;
					public getAllIds(): any[];
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(hint: java.lang.Class<any>): any;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public isConst(name: string): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public delete(index: number): void;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public findPrototypeId(name: string): number;
					public getInstanceIdName(id: number): string;
					public findInstanceIdInfo(key: org.mozilla.javascript.Symbol): number;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public findInstanceIdInfo(name: string): number;
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
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getInstanceIdValue(id: number): any;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(name: string): void;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: number): void;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public isConst(param0: string): boolean;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public equivalentValues(value: any): any;
					public findPrototypeId(s: string): number;
					public getMaxInstanceId(): number;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public findInstanceIdInfo(s: string): number;
					public equals(obj: any): boolean;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public toString(): string;
					public getClassName(): string;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public initPrototypeId(id: number): void;
					public hashCode(): number;
					public delete(param0: string): void;
					public getAllIds(): any[];
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(hint: java.lang.Class<any>): any;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public isConst(name: string): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public localName(): string;
					public delete(index: number): void;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public findPrototypeId(name: string): number;
					public getInstanceIdName(id: number): string;
					public findInstanceIdInfo(key: org.mozilla.javascript.Symbol): number;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public findInstanceIdInfo(name: string): number;
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
					public get(key: any): any;
					public setPrototype(prototype: org.mozilla.javascript.Scriptable): void;
					public getExtraMethodSource(cx: org.mozilla.javascript.Context): org.mozilla.javascript.Scriptable;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(name: string): void;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(cx: org.mozilla.javascript.Context, id: any): boolean;
					public delete(param0: number): void;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public put(cx: org.mozilla.javascript.Context, id: any, value: any): void;
					public isConst(param0: string): boolean;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public get(cx: org.mozilla.javascript.Context, id: any): any;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public jsConstructor(param0: org.mozilla.javascript.Context, param1: boolean, param2: any[]): any;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public getExtraMethodSource(param0: org.mozilla.javascript.Context): org.mozilla.javascript.Scriptable;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public hasInstance(scriptable: org.mozilla.javascript.Scriptable): boolean;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public jsConstructor(cx: org.mozilla.javascript.Context, inNewExpr: boolean, args: any[]): any;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public toString(): string;
					public getClassName(): string;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public getAllIds(): any[];
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(hint: java.lang.Class<any>): any;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public isConst(name: string): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public has(cx: org.mozilla.javascript.Context, id: any): boolean;
					public setParentScope(parent: org.mozilla.javascript.Scriptable): void;
					public delete(index: number): void;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
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
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public setInstanceIdValue(id: number, value: any): void;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getInstanceIdValue(id: number): any;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(name: string): void;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: number): void;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public isConst(param0: string): boolean;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
					public findPrototypeId(s: string): number;
					public getMaxInstanceId(): number;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public findInstanceIdInfo(s: string): number;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public initPrototypeId(id: number): void;
					public delete(param0: string): void;
					public getAllIds(): any[];
					public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public isConst(name: string): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public delete(index: number): void;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public getInstanceIdName(id: number): string;
					public findInstanceIdInfo(key: org.mozilla.javascript.Symbol): number;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
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
					public setPrettyIndent(i: number): void;
					public getPrettyIndent(): number;
					public toDefaultXmlNamespace(param0: org.mozilla.javascript.Context, param1: any): any;
					public isPrettyPrinting(): boolean;
					public static init(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, sealed: boolean): void;
					public escapeTextValue(o: any): string;
					public nameRef(param0: org.mozilla.javascript.Context, param1: any, param2: org.mozilla.javascript.Scriptable, param3: number): org.mozilla.javascript.Ref;
					public toDefaultXmlNamespace(cx: org.mozilla.javascript.Context, uriValue: any): any;
					public escapeTextValue(param0: any): string;
					public nameRef(param0: org.mozilla.javascript.Context, param1: any, param2: any, param3: org.mozilla.javascript.Scriptable, param4: number): org.mozilla.javascript.Ref;
					public nameRef(cx: org.mozilla.javascript.Context, name: any, scope: org.mozilla.javascript.Scriptable, memberTypeFlags: number): org.mozilla.javascript.Ref;
					public static toDomNode(xmlObject: any): org.w3c.dom.Node;
					public nameRef(cx: org.mozilla.javascript.Context, namespace: any, name: any, scope: org.mozilla.javascript.Scriptable, memberTypeFlags: number): org.mozilla.javascript.Ref;
					public isXMLName(_cx: org.mozilla.javascript.Context, nameObj: any): boolean;
					public setIgnoreWhitespace(b: boolean): void;
					public isIgnoreProcessingInstructions(): boolean;
					public escapeAttributeValue(o: any): string;
					public isIgnoreWhitespace(): boolean;
					public setIgnoreProcessingInstructions(b: boolean): void;
					public isXMLName(param0: org.mozilla.javascript.Context, param1: any): boolean;
					public escapeAttributeValue(param0: any): string;
					public setIgnoreComments(b: boolean): void;
					public setPrettyPrinting(b: boolean): void;
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
					public get(key: any): any;
					public setPrototype(prototype: org.mozilla.javascript.Scriptable): void;
					public getExtraMethodSource(cx: org.mozilla.javascript.Context): org.mozilla.javascript.Scriptable;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(name: string): void;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(cx: org.mozilla.javascript.Context, id: any): boolean;
					public delete(param0: number): void;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIdsForDebug(): any[];
					public put(cx: org.mozilla.javascript.Context, id: any, value: any): void;
					public isConst(param0: string): boolean;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public get(cx: org.mozilla.javascript.Context, id: any): any;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public jsConstructor(param0: org.mozilla.javascript.Context, param1: boolean, param2: any[]): any;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public getExtraMethodSource(param0: org.mozilla.javascript.Context): org.mozilla.javascript.Scriptable;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public hasInstance(scriptable: org.mozilla.javascript.Scriptable): boolean;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public call(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: org.mozilla.javascript.Scriptable, param3: any[]): any;
					public jsConstructor(cx: org.mozilla.javascript.Context, inNewExpr: boolean, args: any[]): any;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getIds(): any[];
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public toString(): string;
					public getClassName(): string;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public delete(param0: string): void;
					public getAllIds(): any[];
					public construct(param0: org.mozilla.javascript.Context, param1: org.mozilla.javascript.Scriptable, param2: any[]): org.mozilla.javascript.Scriptable;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public construct(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, args: any[]): org.mozilla.javascript.Scriptable;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(hint: java.lang.Class<any>): any;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public isConst(name: string): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public call(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public has(cx: org.mozilla.javascript.Context, id: any): boolean;
					public setParentScope(parent: org.mozilla.javascript.Scriptable): void;
					public delete(index: number): void;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
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
					public get(cx: org.mozilla.javascript.Context): any;
					public toString(): string;
					public get(param0: org.mozilla.javascript.Context): any;
					public set(cx: org.mozilla.javascript.Context, value: any): any;
					/** @deprecated */
					public set(param0: org.mozilla.javascript.Context, param1: any): any;
					public set(cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, value: any): any;
					public delete(cx: org.mozilla.javascript.Context): boolean;
					public has(cx: org.mozilla.javascript.Context): boolean;
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
					public setPrototype(m: org.mozilla.javascript.Scriptable): void;
					public setPrototype(prototype: org.mozilla.javascript.Scriptable): void;
					public get(key: any): any;
					public putConst(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(name: string, start: org.mozilla.javascript.Scriptable): boolean;
					public getFunctionProperty(param0: org.mozilla.javascript.Context, param1: string): any;
					public delete(name: string): void;
					public getFunctionProperty(cx: org.mozilla.javascript.Context, id: number): any;
					public memberRef(cx: org.mozilla.javascript.Context, elem: any, memberTypeFlags: number): org.mozilla.javascript.Ref;
					public put(param0: org.mozilla.javascript.Context, param1: any, param2: any): void;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public constructor();
					public delete(cx: org.mozilla.javascript.Context, id: any): boolean;
					public delete(param0: number): void;
					public setParentScope(m: org.mozilla.javascript.Scriptable): void;
					public put(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getFunctionProperty(param0: org.mozilla.javascript.Context, param1: number): any;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public put(cx: org.mozilla.javascript.Context, id: any, value: any): void;
					public isConst(param0: string): boolean;
					public enterWith(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.NativeWith;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public get(cx: org.mozilla.javascript.Context, id: any): any;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public jsConstructor(param0: org.mozilla.javascript.Context, param1: boolean, param2: any[]): any;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public get(name: string, start: org.mozilla.javascript.Scriptable): any;
					public findPrototypeId(key: org.mozilla.javascript.Symbol): number;
					public enterDotQuery(scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.NativeWith;
					public hasInstance(scriptable: org.mozilla.javascript.Scriptable): boolean;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: org.mozilla.javascript.Context, param1: any): boolean;
					public equivalentValues(value: any): any;
					public memberRef(cx: org.mozilla.javascript.Context, namespace: any, elem: any, memberTypeFlags: number): org.mozilla.javascript.Ref;
					public has(param0: org.mozilla.javascript.Context, param1: any): boolean;
					public findPrototypeId(s: string): number;
					public delete(key: org.mozilla.javascript.Symbol): void;
					public static getDefaultValue(object: org.mozilla.javascript.Scriptable, typeHint: java.lang.Class<any>): any;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public putConst(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public addValues(cx: org.mozilla.javascript.Context, thisIsLeft: boolean, value: any): any;
					public getIds(): any[];
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public toString(): string;
					public getClassName(): string;
					public defineConst(name: string, start: org.mozilla.javascript.Scriptable): void;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public constructor(lib: org.mozilla.javascript.xmlimpl.XMLLibImpl, scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.xml.XMLObject);
					public initPrototypeId(id: number): void;
					public delete(param0: string): void;
					public getAllIds(): any[];
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public enterDotQuery(param0: org.mozilla.javascript.Scriptable): org.mozilla.javascript.NativeWith;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(hint: java.lang.Class<any>): any;
					public put(name: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public defineConst(param0: string, param1: org.mozilla.javascript.Scriptable): void;
					public memberRef(param0: org.mozilla.javascript.Context, param1: any, param2: any, param3: number): org.mozilla.javascript.Ref;
					public isConst(name: string): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public hasInstance(instance: org.mozilla.javascript.Scriptable): boolean;
					public setParentScope(parent: org.mozilla.javascript.Scriptable): void;
					public has(cx: org.mozilla.javascript.Context, id: any): boolean;
					public delete(index: number): void;
					public constructor(scope: org.mozilla.javascript.Scriptable, prototype: org.mozilla.javascript.Scriptable);
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public getFunctionProperty(cx: org.mozilla.javascript.Context, name: string): any;
					public enterWith(scope: org.mozilla.javascript.Scriptable): org.mozilla.javascript.NativeWith;
					public memberRef(param0: org.mozilla.javascript.Context, param1: any, param2: number): org.mozilla.javascript.Ref;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public findPrototypeId(name: string): number;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
					public get(param0: org.mozilla.javascript.Context, param1: any): any;
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
					public delete(key: org.mozilla.javascript.Symbol): void;
					public hasInstance(value: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(prototype: org.mozilla.javascript.Scriptable): void;
					public get(id: string, start: org.mozilla.javascript.Scriptable): any;
					public put(param0: string, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getPrototype(): org.mozilla.javascript.Scriptable;
					public get(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): any;
					public put(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public getIds(): any[];
					public has(param0: string, param1: org.mozilla.javascript.Scriptable): boolean;
					public getClassName(): string;
					public has(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): boolean;
					public put(symbol: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable, value: any): void;
					public delete(param0: number): void;
					public updateDotQuery(value: boolean): any;
					public execIdCall(param0: org.mozilla.javascript.IdFunctionObject, param1: org.mozilla.javascript.Context, param2: org.mozilla.javascript.Scriptable, param3: org.mozilla.javascript.Scriptable, param4: any[]): any;
					public getParentScope(): org.mozilla.javascript.Scriptable;
					public delete(param0: string): void;
					public delete(id: string): void;
					public execIdCall(f: org.mozilla.javascript.IdFunctionObject, cx: org.mozilla.javascript.Context, scope: org.mozilla.javascript.Scriptable, thisObj: org.mozilla.javascript.Scriptable, args: any[]): any;
					public get(key: org.mozilla.javascript.Symbol, start: org.mozilla.javascript.Scriptable): any;
					public getDefaultValue(typeHint: java.lang.Class<any>): any;
					public hasInstance(param0: org.mozilla.javascript.Scriptable): boolean;
					public has(param0: number, param1: org.mozilla.javascript.Scriptable): boolean;
					public getDefaultValue(param0: java.lang.Class<any>): any;
					public has(id: string, start: org.mozilla.javascript.Scriptable): boolean;
					public setPrototype(param0: org.mozilla.javascript.Scriptable): void;
					public has(param0: org.mozilla.javascript.Symbol, param1: org.mozilla.javascript.Scriptable): boolean;
					public setParentScope(param0: org.mozilla.javascript.Scriptable): void;
					public setParentScope(parent: org.mozilla.javascript.Scriptable): void;
					public put(index: number, start: org.mozilla.javascript.Scriptable, value: any): void;
					public delete(index: number): void;
					public put(id: string, start: org.mozilla.javascript.Scriptable, value: any): void;
					public put(param0: number, param1: org.mozilla.javascript.Scriptable, param2: any): void;
					public has(index: number, start: org.mozilla.javascript.Scriptable): boolean;
					public get(index: number, start: org.mozilla.javascript.Scriptable): any;
					public get(param0: string, param1: org.mozilla.javascript.Scriptable): any;
					public delete(param0: org.mozilla.javascript.Symbol): void;
					public get(param0: number, param1: org.mozilla.javascript.Scriptable): any;
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
						public equals(obj: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
					export class XmlNodeUserDataHandler extends java.lang.Object implements org.w3c.dom.UserDataHandler, java.io.Serializable {
						public static class: java.lang.Class<org.mozilla.javascript.xmlimpl.XmlNode.XmlNodeUserDataHandler>;
						public handle(param0: number, param1: string, param2: any, param3: org.w3c.dom.Node, param4: org.w3c.dom.Node): void;
						public handle(operation: number, key: string, data: any, src: org.w3c.dom.Node, dest: org.w3c.dom.Node): void;
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
						public warning(e: org.xml.sax.SAXParseException): void;
						public error(e: org.xml.sax.SAXParseException): void;
						public error(param0: org.xml.sax.SAXParseException): void;
						public fatalError(e: org.xml.sax.SAXParseException): void;
						public warning(param0: org.xml.sax.SAXParseException): void;
						public fatalError(param0: org.xml.sax.SAXParseException): void;
					}
				}
			}
		}
	}
}

//Generics information:
//org.mozilla.javascript.ContextAction:1
//org.mozilla.javascript.typedarrays.NativeTypedArrayIterator:1
//org.mozilla.javascript.typedarrays.NativeTypedArrayView:1


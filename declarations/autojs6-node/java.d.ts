/** Public Java/Android object interop in the host process, also available in Node Workers. */
declare module "java" {
  namespace java {
    interface CallOptions extends AutoJs6Node.BridgeCallOptions {
      /** Exact JVM parameter names, e.g. ["int", "java.lang.String", "byte[]"]. Varargs use an explicit array. */
      parameterTypes?: readonly string[];
      /** Use main for Android Views and other APIs requiring the main Looper. */
      thread?: "default" | "main";
    }
    type Argument = null | undefined | string | number | boolean | bigint | HandleSnapshot | TypedValue | readonly Argument[] | ArrayBufferView;
    interface TypedValue { readonly __autojs6JavaType: string; readonly value: Argument; }
    interface HandleSnapshot {
      readonly __autojs6JavaHandle: string;
      readonly className: string;
      /** Creation-time field snapshot. Read live values using getField. */
      readonly value?: Readonly<Record<string, unknown>>;
    }
    type Target = string | HandleSnapshot;
    interface ObjectHandle extends HandleSnapshot {
      call<T = unknown>(method: string, args?: readonly Argument[], options?: CallOptions): Promise<T>;
      callInstance<T = unknown>(method: string, args?: readonly Argument[], options?: CallOptions): Promise<T>;
      getField<T = unknown>(field: string, options?: CallOptions): Promise<T>;
      setField(field: string, value: Argument, options?: CallOptions): Promise<boolean>;
      getClassName(options?: CallOptions): Promise<string>;
      instanceOf(className: string | ClassDescriptor, options?: CallOptions): Promise<boolean>;
      arrayLength(options?: CallOptions): Promise<number>;
      getArrayItem<T = unknown>(index: number, options?: CallOptions): Promise<T>;
      setArrayItem(index: number, value: Argument, options?: CallOptions): Promise<boolean>;
      toArray<T = unknown>(options?: CallOptions): Promise<readonly T[]>;
      /** Drops this reference only; call close/recycle explicitly for native resources. */
      release(options?: CallOptions): Promise<boolean>;
      dispose(options?: CallOptions): Promise<boolean>;
      toJSON(): HandleSnapshot;
    }
    interface ClassSpec {
      readonly className: string;
      readonly explicit: boolean;
      readonly constructable: boolean;
      readonly staticMethods: readonly string[];
      readonly instanceMethods: readonly string[];
      readonly staticFields: readonly string[];
      readonly instanceFields: readonly string[];
      readonly fields: readonly string[];
      readonly constructors?: readonly string[];
      readonly methods?: readonly string[];
    }
    interface Policy {
      readonly enabled: boolean;
      readonly limitsEnforcedBy: "host_provider";
      readonly published: boolean;
      /** Current hosts use public members; old hosts can still publish an allowlist. */
      readonly access?: "public";
      readonly allowedClasses: readonly string[];
      readonly deniedClassPrefixes: readonly string[];
      readonly classes: Readonly<Record<string, ClassSpec>>;
    }
    interface ClassDescriptor {
      readonly className: string;
      readonly name: string;
      callStatic<T = unknown>(method: string, args?: readonly Argument[], options?: CallOptions): Promise<T>;
      "new"(args?: readonly Argument[], options?: CallOptions): Promise<ObjectHandle>;
      create(args?: readonly Argument[], options?: CallOptions): Promise<ObjectHandle>;
      getStatic<T = unknown>(field: string, options?: CallOptions): Promise<T>;
      setStatic(field: string, value: Argument, options?: CallOptions): Promise<boolean>;
      describe(options?: CallOptions): Promise<ClassSpec>;
    }
    interface API {
      readonly policy: Policy;
      /** Local descriptor; describe performs class lookup in the host. */
      type(className: string): ClassDescriptor;
      findClass(className: string): ClassDescriptor;
      cast(type: string | ClassDescriptor, value: Argument): TypedValue;
      callStatic<T = unknown>(type: string | ClassDescriptor, method: string, args?: readonly Argument[], options?: CallOptions): Promise<T>;
      "new"(type: string | ClassDescriptor, args?: readonly Argument[], options?: CallOptions): Promise<ObjectHandle>;
      create(type: string | ClassDescriptor, args?: readonly Argument[], options?: CallOptions): Promise<ObjectHandle>;
      call<T = unknown>(target: Target, method: string, args?: readonly Argument[], options?: CallOptions): Promise<T>;
      callInstance<T = unknown>(target: Target, method: string, args?: readonly Argument[], options?: CallOptions): Promise<T>;
      getField<T = unknown>(target: Target, field: string, options?: CallOptions): Promise<T>;
      setField(target: Target, field: string, value: Argument, options?: CallOptions): Promise<boolean>;
      getStatic<T = unknown>(type: string | ClassDescriptor, field: string, options?: CallOptions): Promise<T>;
      setStatic(type: string | ClassDescriptor, field: string, value: Argument, options?: CallOptions): Promise<boolean>;
      describe(type: string | ClassDescriptor, options?: CallOptions): Promise<ClassSpec>;
      /** The application Context of the host or generated app, never an Activity. Release after use. */
      getContext(options?: CallOptions): Promise<ObjectHandle>;
      newArray(componentType: string | ClassDescriptor, lengthOrValues: number | readonly Argument[] | ArrayBufferView, options?: CallOptions): Promise<ObjectHandle>;
      arrayLength(target: Target, options?: CallOptions): Promise<number>;
      getArrayItem<T = unknown>(target: Target, index: number, options?: CallOptions): Promise<T>;
      setArrayItem(target: Target, index: number, value: Argument, options?: CallOptions): Promise<boolean>;
      toArray<T = unknown>(target: Target, options?: CallOptions): Promise<readonly T[]>;
      getClassName(target: Target, options?: CallOptions): Promise<string>;
      instanceOf(target: Target, type: string | ClassDescriptor, options?: CallOptions): Promise<boolean>;
      release(target: Target, options?: CallOptions): Promise<boolean>;
      dispose(target: Target, options?: CallOptions): Promise<boolean>;
      defineClass(descriptor?: unknown, options?: CallOptions): never;
    }
  }
  const java: java.API;
  export = java;
}
declare module "autojs6:java" { import java = require("java"); export = java; }

declare module "species" {
  namespace species {
    /**
     * The species of a value as the AutoJs6 species module (Rhino) names it: "Null", "Undefined", "Boolean", "String",
     * "Number", "BigInt", "Symbol", or the class of an object ("Array", "Object", "Date", "JavaObject" for a Java handle,
     * "JavaClass" for a java.type() descriptor ...). Each function takes exactly one argument (TypeError otherwise).
     */
    export interface SpeciesModule {
      (o: unknown): string;
      isArray(o: unknown): boolean;
      isArrayBuffer(o: unknown): boolean;
      isBigInt(o: unknown): boolean;
      isBoolean(o: unknown): boolean;
      isContinuation(o: unknown): boolean;
      isDataView(o: unknown): boolean;
      isDate(o: unknown): boolean;
      isError(o: unknown): boolean;
      isFloat32Array(o: unknown): boolean;
      isFloat64Array(o: unknown): boolean;
      isFunction(o: unknown): boolean;
      isHTMLDocument(o: unknown): boolean;
      isInt16Array(o: unknown): boolean;
      isInt32Array(o: unknown): boolean;
      isInt8Array(o: unknown): boolean;
      isJavaClass(o: unknown): boolean;
      isJavaObject(o: unknown): boolean;
      isJavaPackage(o: unknown): boolean;
      isMap(o: unknown): boolean;
      isNamespace(o: unknown): boolean;
      isNull(o: unknown): boolean;
      isNumber(o: unknown): boolean;
      isObject(o: unknown): boolean;
      isQName(o: unknown): boolean;
      isRegExp(o: unknown): boolean;
      isSet(o: unknown): boolean;
      isString(o: unknown): boolean;
      isUint16Array(o: unknown): boolean;
      isUint32Array(o: unknown): boolean;
      isUint8Array(o: unknown): boolean;
      isUint8ClampedArray(o: unknown): boolean;
      isUndefined(o: unknown): boolean;
      isWeakMap(o: unknown): boolean;
      isWeakSet(o: unknown): boolean;
      isWindow(o: unknown): boolean;
      isXML(o: unknown): boolean;
      isXMLList(o: unknown): boolean;
    }
  }

  const species: species.SpeciesModule;
  export = species;
}

declare module "autojs6:species" {
  import species = require("species");
  export = species;
}

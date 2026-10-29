declare module "autojs6:global" {
  namespace global {
    /**
     * The global data functions of AutoJs6 Rhino scripts as a module (a Node script has no Rhino global object). Same
     * argument counts, conversions and errors as Rhino; randomInt / randomFloat are jsox.mathx's.
     */
    export interface GlobalModule {
      /** A random number in [0, 1), or in [min, max] (NaN when only one bound is given). */
      random(min?: number | null, max?: number | null): number;
      randomInt(...values: readonly unknown[]): number;
      randomFloat(...values: readonly unknown[]): number;
      isInteger(o: unknown): boolean;
      isPrimitive(o: unknown): boolean;
      /** species.isObject: a plain script object (not an array, function or Java handle). */
      isObject(o: unknown): boolean;
      isReference(o: unknown): boolean;
      isBigInt(o: unknown): o is bigint;
      isEmptyObject(o: unknown): boolean;
      /** typeof o is "object" and o is not null. */
      isObjectSpecies(o: unknown): boolean;
      /** Main thread only: the axios module of this runtime (no Worker entry yet, api-coverage Q61). */
      readonly axios: typeof import("axios");
    }
  }

  const global: global.GlobalModule;
  export = global;
}

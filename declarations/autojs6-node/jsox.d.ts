declare module "jsox" {
  namespace jsox {
    export type ModuleName =
      | "Mathx"
      | "mathx"
      | "Math"
      | "Arrayx"
      | "arrayx"
      | "Array"
      | "Numberx"
      | "numberx"
      | "Number";
    export type ModuleNameInput = ModuleName | readonly ModuleNameInput[];

    export interface PointLike {
      readonly x: number;
      readonly y: number;
    }

    export type PointInput = readonly [number, number] | PointLike;

    export interface MathxModule {
      randInt(...values: readonly unknown[]): number;
      randomInt(...values: readonly unknown[]): number;
      randFloat(...values: readonly unknown[]): number;
      randomFloat(...values: readonly unknown[]): number;
      random(...values: readonly unknown[]): number;
      sum(...values: readonly unknown[]): number;
      mean(...values: readonly unknown[]): number;
      avg(...values: readonly unknown[]): number;
      median(...values: readonly unknown[]): number;
      "var"(...values: readonly unknown[]): number;
      std(...values: readonly unknown[]): number;
      cv(...values: readonly unknown[]): number;
      mode(...values: readonly unknown[]): number;
      dist(a: PointInput, b: PointInput, fraction?: number): number;
      logMn(base: number, antilogarithm: number, fraction?: number): number;
      floorLog(base: number, antilogarithm: number): number;
      ceilLog(base: number, antilogarithm: number): number;
      roundLog(base: number, antilogarithm: number): number;
      floorPow(base: number, antilogarithm: number): number;
      ceilPow(base: number, antilogarithm: number): number;
      roundPow(base: number, antilogarithm: number): number;
      max(...values: readonly unknown[]): number;
      min(...values: readonly unknown[]): number;
    }

    export interface ArrayxModule {
      ensureArray(...values: readonly unknown[]): void;
      distinct<T>(arr: readonly T[]): T[];
      distinctBy<T>(arr: readonly T[], selector: (value: T) => unknown): T[];
      union<T>(...arrays: readonly (readonly T[])[]): T[];
      intersect<T>(...arrays: readonly (readonly T[])[]): T[];
      subtract<T>(left: readonly T[], right: readonly T[]): T[];
      differ<T>(left: readonly T[], right: readonly T[]): T[];
      sortBy<T>(arr: T[], selector: (value: T) => unknown): T[];
      sortByDescending<T>(arr: T[], selector: (value: T) => unknown): T[];
      sortDescending<T>(arr: T[]): T[];
      sorted<T>(arr: readonly T[]): T[];
      sortedBy<T>(arr: readonly T[], selector: (value: T) => unknown): T[];
      sortedByDescending<T>(arr: readonly T[], selector: (value: T) => unknown): T[];
      sortedDescending<T>(arr: readonly T[]): T[];
      shuffle<T>(arr: T[]): T[];
    }

    export interface NumberxModule {
      readonly ICU: 996;
      ensureNumber(...values: readonly unknown[]): void;
      ensureNumberLike(value: unknown, allowNaN?: boolean): number;
      ensureNumbersLike(values: readonly unknown[], allowNaN?: boolean, containsNaN?: boolean): number[];
      check(...values: readonly unknown[]): boolean;
      clamp(num: unknown, ...clamps: readonly unknown[]): number;
      clampTo(num: unknown, range: readonly unknown[], cycle?: unknown): number;
      toFixedNum(num: unknown, fraction?: unknown): number;
      padStart(num: unknown, targetLength: unknown, pad?: unknown): string;
      padEnd(num: unknown, targetLength: unknown, pad?: unknown): string;
      parseFloat(value: unknown, radix?: unknown): number;
      parsePercent(value: unknown): number;
      parseRatio(value: unknown): number;
      parseAny(value: unknown): number;
    }

    export interface JsoxModule {
      /** Same as extend. */
      (...modules: readonly ModuleNameInput[]): void;
      readonly mathx: MathxModule;
      readonly Mathx: MathxModule;
      readonly arrayx: ArrayxModule;
      readonly Arrayx: ArrayxModule;
      readonly numberx: NumberxModule;
      readonly Numberx: NumberxModule;
      /**
       * Installs the members of the named modules (Mathx when none is given) on this thread's Math, Array.prototype,
       * Number.prototype and Number, as in Rhino (api-coverage Q59); an unknown name is a RangeError.
       */
      extend(...modules: readonly ModuleNameInput[]): void;
      /** extend("Mathx", "Numberx", "Arrayx"). */
      extendAll(): void;
    }
  }

  const jsox: jsox.JsoxModule;
  export = jsox;
}

declare module "jsox.mathx" {
  import jsox = require("jsox");

  const mathx: jsox.MathxModule;
  export = mathx;
}

declare module "jsox.arrayx" {
  import jsox = require("jsox");

  const arrayx: jsox.ArrayxModule;
  export = arrayx;
}

declare module "jsox.numberx" {
  import jsox = require("jsox");

  const numberx: jsox.NumberxModule;
  export = numberx;
}

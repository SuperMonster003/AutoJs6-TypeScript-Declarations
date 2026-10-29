declare module "s13n" {
  namespace s13n {
    type JavaHandle = import("java").ObjectHandle;
    export type TimeUnitName = string;

    /** AutoJs6 s13n (Rhino): the same argument counts, conversions and errors; point / throwable need java_interop. */
    export interface S13nModule {
      /** An integer byte count from a number or a string with a unit (the loose mode of cvt.bytes). */
      bytes(source: number | string, fromUnit?: string): number;
      /** A signed 32-bit color int from #RGB / #ARGB / #RRGGBB / #AARRGGBB, a color name or a number. */
      color(o: string | number): number;
      /** An android.graphics.Point handle from [x, y], { x, y }, a number (y defaults to it), an OpenCV Point or a Point handle. */
      point(source: readonly [number, number] | { readonly x: number; readonly y: number } | number | JavaHandle, y?: number | null): Promise<JavaHandle>;
      /** A java.lang.Throwable handle from a Throwable handle, a message or an Error. */
      throwable(o: string | Error | JavaHandle): Promise<JavaHandle>;
      /** A time converted from fromUnit to toUnit (milliseconds by default); a text with six numbers is a local date-time. */
      time(source: number | string | Date, fromUnit?: TimeUnitName | { readonly fromUnit?: TimeUnitName; readonly toUnit?: TimeUnitName } | null, toUnit?: TimeUnitName | null): number;
    }
  }

  const s13n: s13n.S13nModule;
  export = s13n;
}

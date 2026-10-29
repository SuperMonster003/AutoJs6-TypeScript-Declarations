declare module "colors" {
  namespace colors {
    export type ColorInput =
      | number
      | bigint
      | string
      | {
          readonly color?: number;
          readonly colorPrimary?: number;
          readonly a?: number;
          readonly r?: number;
          readonly g?: number;
          readonly b?: number;
        };
    export type ColorArgument = ColorInput | Color;
    export type JavaHandle = import("java").ObjectHandle;
    export type DistanceAlgorithm = "diff" | "rgb" | "rgb+" | "hs" | "h" | "equal" | "oklab";
    export type HarmonyKind = "complementary" | "analogous" | "triadic" | "tetradic" | "split-complementary" | "square" | string;
    export type Deficiency = "protanopia" | "deuteranopia" | "tritanopia" | "achromatopsia" | string;

    export interface ComponentOptions {
      readonly max?: 1 | 255;
    }

    export interface AlphaStringOptions {
      readonly keepTrailingZeroForFullAlpha?: boolean;
    }

    /**
     * Rhino's Color (the global Color(...) / new Color(...), autojs6:global): a color with the colors functions as
     * members (the color first) and setters that change it and return the Color. Members that need a Java object
     * return Promises.
     */
    export interface Color {
      toInt(): number;
      toHex(alphaOrLength?: boolean | number | string | null): string;
      toFullHex(): string;
      toString(alphaOrLength?: boolean | number | string | null): string;
      alpha(options?: ComponentOptions | null): number;
      getAlpha(options?: ComponentOptions | null): number;
      alphaDouble(): number;
      getAlphaDouble(): number;
      red(options?: ComponentOptions | null): number;
      getRed(options?: ComponentOptions | null): number;
      redDouble(): number;
      getRedDouble(): number;
      green(options?: ComponentOptions | null): number;
      getGreen(options?: ComponentOptions | null): number;
      greenDouble(): number;
      getGreenDouble(): number;
      blue(options?: ComponentOptions | null): number;
      getBlue(options?: ComponentOptions | null): number;
      blueDouble(): number;
      getBlueDouble(): number;
      toRgb(): number[];
      toRgba(options?: ComponentOptions | null): number[];
      toArgb(options?: ComponentOptions | null): number[];
      /** With a float[] handle (java.newArray("float", n)) the result is a Promise of it. */
      toHsv(...args: unknown[]): number[] | Promise<JavaHandle>;
      toHsva(...args: unknown[]): number[] | Promise<JavaHandle>;
      toHsl(...args: unknown[]): number[] | Promise<JavaHandle>;
      toHsla(...args: unknown[]): number[];
      argb(options?: ComponentOptions | null): number[];
      rgb(): number[];
      rgba(options?: ComponentOptions | null): number[];
      hsv(...args: unknown[]): number[] | Promise<JavaHandle>;
      hsva(...args: unknown[]): number[] | Promise<JavaHandle>;
      hsl(...args: unknown[]): number[] | Promise<JavaHandle>;
      hsla(...args: unknown[]): number[];
      isSimilar(other: ColorArgument, threshold?: number | null, algorithm?: DistanceAlgorithm | null): boolean;
      isEqual(other: ColorArgument, alphaMatters?: boolean | null): boolean;
      distance(other: ColorArgument, algorithm?: DistanceAlgorithm | null): number;
      invert(): number;
      blend(other: ColorArgument, ratio?: number | null): number;
      contrast(other: ColorArgument): number;
      toColorStateList(...colors: readonly ColorArgument[]): Promise<JavaHandle>;
      luminance(): number;
      build(...components: number[]): Color;
      summary(): string;
      toOklab(): number[];
      oklab(...components: unknown[]): number;
      toOklch(): number[];
      oklch(...components: unknown[]): number;
      ensureContrast(background: ColorArgument, ratio?: number | null): number;
      harmony(kind: HarmonyKind): number[];
      tones(count?: number | null): number[];
      derive(): { readonly primary: number; readonly accent: number; readonly dark: number };
      nightVariant(): number;
      simulate(deficiency: Deficiency): number;
      /** Throws as in Rhino (the color is taken as the image). */
      extract(...args: unknown[]): never;
      toRgbString(): string;
      toRgbaString(options?: AlphaStringOptions | null): string;
      toArgbString(options?: AlphaStringOptions | null): string;
      toHsvString(): string;
      toHsvaString(): string;
      toHslString(): string;
      toHslaString(): string;
      setAlpha(alpha: number): Color;
      setAlphaRelative(percentage: number): Color;
      removeAlpha(): Color;
      setRed(red: number): Color;
      setRedRelative(percentage: number): Color;
      removeRed(): Color;
      setGreen(green: number): Color;
      setGreenRelative(percentage: number): Color;
      removeGreen(): Color;
      setBlue(blue: number): Color;
      setBlueRelative(percentage: number): Color;
      removeBlue(): Color;
      setRgb(...components: unknown[]): Color;
      setRgba(...components: unknown[]): Color;
      setArgb(...components: unknown[]): Color;
      setHsv(...components: unknown[]): Color;
      setHsva(hue: number, saturation: number, value: number, alpha: number): Color;
      setHsl(...components: unknown[]): Color;
      setHsla(hue: number, saturation: number, lightness: number, alpha: number): Color;
      /** Sets the color of a Java android.graphics.Paint handle (or an earlier Node paint object). */
      setPaintColor(paint: JavaHandle | import("autojs6:android").PaintHandle): Promise<Color>;
      equals(other: unknown): boolean;
      toStringReadable(): string;
    }
    export interface ColorConstructor {
      (...components: unknown[]): Color;
      new (...components: unknown[]): Color;
      readonly [constant: string]: unknown;
    }

    /**
     * Rhino's colors module (ColorsModule, the color tables, android.graphics.Color.parseColor and the HSV helpers):
     * same argument counts, conversions and errors. Java objects are facade handles; the calls that need one return
     * Promises. colors.theme is not available yet (api-coverage Q80).
     */
    export interface ColorsModule {
      /** Every table constant by name (not enumerable). */
      readonly all: Readonly<Record<string, number>>;
      readonly android: Readonly<Record<string, number>>;
      readonly css: Readonly<Record<string, number>>;
      readonly web: Readonly<Record<string, number>>;
      readonly material: Readonly<Record<string, number>>;
      /** A Promise of the host's ThemeColor (a Java handle). */
      readonly themeColor: Promise<JavaHandle>;
      readonly [constant: string]: unknown;
      toInt(color: ColorArgument): number;
      toHex(color: ColorArgument, alphaOrLength?: boolean | number | string | null): string;
      toFullHex(color: ColorArgument): string;
      toString(color?: ColorArgument, alphaOrLength?: boolean | number | string | null): string;
      alpha(color: ColorArgument, options?: ComponentOptions | null): number;
      getAlpha(color: ColorArgument, options?: ComponentOptions | null): number;
      alphaDouble(color: ColorArgument, options?: ComponentOptions | null): number;
      getAlphaDouble(color: ColorArgument, options?: ComponentOptions | null): number;
      setAlpha(color: ColorArgument, alpha: number): number;
      setAlphaRelative(color: ColorArgument, percentage: number): number;
      removeAlpha(color: ColorArgument): number;
      red(color: ColorArgument, options?: ComponentOptions | null): number;
      getRed(color: ColorArgument, options?: ComponentOptions | null): number;
      redDouble(color: ColorArgument, options?: ComponentOptions | null): number;
      getRedDouble(color: ColorArgument, options?: ComponentOptions | null): number;
      setRed(color: ColorArgument, red: number): number;
      setRedRelative(color: ColorArgument, percentage: number): number;
      removeRed(color: ColorArgument): number;
      green(color: ColorArgument, options?: ComponentOptions | null): number;
      getGreen(color: ColorArgument, options?: ComponentOptions | null): number;
      greenDouble(color: ColorArgument, options?: ComponentOptions | null): number;
      getGreenDouble(color: ColorArgument, options?: ComponentOptions | null): number;
      setGreen(color: ColorArgument, green: number): number;
      setGreenRelative(color: ColorArgument, percentage: number): number;
      removeGreen(color: ColorArgument): number;
      blue(color: ColorArgument, options?: ComponentOptions | null): number;
      getBlue(color: ColorArgument, options?: ComponentOptions | null): number;
      blueDouble(color: ColorArgument, options?: ComponentOptions | null): number;
      getBlueDouble(color: ColorArgument, options?: ComponentOptions | null): number;
      setBlue(color: ColorArgument, blue: number): number;
      setBlueRelative(color: ColorArgument, percentage: number): number;
      removeBlue(color: ColorArgument): number;
      rgb(...components: unknown[]): number;
      argb(...components: unknown[]): number;
      rgba(...components: unknown[]): number;
      hsv(...components: unknown[]): number;
      hsva(...components: unknown[]): number;
      hsl(...components: unknown[]): number;
      hsla(...components: unknown[]): number;
      toRgb(...args: unknown[]): number[];
      toRgba(color: ColorArgument, options?: ComponentOptions | null): number[];
      toArgb(color: ColorArgument, options?: ComponentOptions | null): number[];
      /** With a float[] handle (java.newArray("float", n)) as the last argument the result is a Promise of it. */
      toHsv(...args: unknown[]): number[] | Promise<JavaHandle>;
      toHsva(...args: unknown[]): number[] | Promise<JavaHandle>;
      toHsl(...args: unknown[]): number[] | Promise<JavaHandle>;
      toHsla(...args: unknown[]): number[];
      toRgbString(...args: unknown[]): string;
      toRgbaString(color: ColorArgument, options?: AlphaStringOptions | null): string;
      toArgbString(color: ColorArgument, options?: AlphaStringOptions | null): string;
      toHsvString(...args: unknown[]): string;
      toHsvaString(color: ColorArgument, options?: AlphaStringOptions | null): string;
      toHslString(...args: unknown[]): string;
      toHslaString(color: ColorArgument, options?: AlphaStringOptions | null): string;
      isSimilar(left: ColorArgument, right: ColorArgument, threshold?: number | null, algorithm?: DistanceAlgorithm | null): boolean;
      isEqual(left: ColorArgument, right: ColorArgument, alphaMatters?: boolean | null): boolean;
      distance(left: ColorArgument, right: ColorArgument, algorithm?: DistanceAlgorithm | null): number;
      invert(color: ColorArgument): number;
      blend(left: ColorArgument, right: ColorArgument, ratio?: number | null): number;
      contrast(left: ColorArgument, right: ColorArgument): number;
      luminance(color: ColorArgument): number;
      build(...components: unknown[]): Color;
      summary(color: ColorArgument): string;
      toOklab(color: ColorArgument): number[];
      toOklch(color: ColorArgument): number[];
      oklab(...components: unknown[]): number;
      oklch(...components: unknown[]): number;
      ensureContrast(color: ColorArgument, background: ColorArgument, ratio?: number | null): number;
      harmony(color: ColorArgument, kind: HarmonyKind): number[];
      tones(color: ColorArgument, count?: number | null): number[];
      derive(color: ColorArgument): { readonly primary: number; readonly accent: number; readonly dark: number };
      nightVariant(color: ColorArgument): number;
      simulate(color: ColorArgument, deficiency: Deficiency): number;
      /**
       * The dominant colors of an image: an ImageWrapper or android.graphics.Bitmap handle, or pixels as images.readPixels
       * gives them (Node scripts have no ImageWrapper); the region is [x, y, w, h]. Needs java_interop (the host's
       * ColorQuantizer).
       */
      extract(image: JavaHandle | { readonly data: readonly number[]; readonly width: number; readonly height: number },
        options?: { readonly count?: number; readonly region?: readonly number[]; readonly step?: number } | null): Promise<number[]>;
      toColorStateList(color: ColorArgument, ...colors: readonly ColorArgument[]): Promise<JavaHandle>;
      setPaintColor(paint: JavaHandle | import("autojs6:android").PaintHandle, color: ColorArgument): Promise<void>;
      /** android.graphics.Color.parseColor. */
      parseColor(colorString: string): number;
      RGBToHSV(red: number, green: number, blue: number, hsv: JavaHandle | readonly number[]): void | Promise<void>;
      colorToHSV(color: number, hsv: JavaHandle | readonly number[]): void | Promise<void>;
      HSVToColor(...args: unknown[]): number;
      /** Members of the earlier Node module (not enumerable). */
      createColorStateList(descriptor: import("autojs6:android").ColorStateListOptions, options?: AutoJs6Node.BridgeCallOptions): Promise<import("autojs6:android").ColorStateListHandle>;
      createPaint(options?: import("autojs6:android").PaintOptions, control?: AutoJs6Node.BridgeCallOptions): Promise<import("autojs6:android").PaintHandle>;
      getThemeColor(options?: AutoJs6Node.BridgeCallOptions): Promise<import("autojs6:android").ThemeColor>;
    }
  }

  const colors: colors.ColorsModule;
  export = colors;
}

declare module "autojs6:colors" { import colors = require("colors"); export = colors; }

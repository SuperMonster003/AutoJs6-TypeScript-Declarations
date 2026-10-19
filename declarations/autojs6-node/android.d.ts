declare module "autojs6:android" {
  namespace android {
    export type ColorInput = import("colors").ColorInput;
    export type StateName = "enabled" | "pressed" | "focused" | "checked" | "selected" | "activated" | "window_focused";
    export type State = number | StateName | `!${StateName}`;
    export interface PaintOptions { color?: ColorInput; antiAlias?: boolean; strokeWidth?: number; textSize?: number; style?: "fill" | "stroke" | "fill_and_stroke"; }
    export interface PaintInfo { readonly id: string; readonly __autojs6AndroidObject: "paint"; readonly color: number; readonly antiAlias: boolean; readonly strokeWidth: number; readonly textSize: number; readonly style: "fill" | "stroke" | "fill_and_stroke"; }
    export interface PaintHandle extends PaintInfo {
      toJSON(): PaintInfo;
      getInfo(options?: AutoJs6Node.BridgeCallOptions): Promise<PaintInfo>;
      setColor(color: ColorInput, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      measureText(text: string, options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      close(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
    }
    export interface ColorStateListOptions { readonly states: readonly (readonly State[])[]; readonly colors: readonly ColorInput[]; }
    /** JSON state/color data can be passed as a native TextView textColor. Methods require a live execution. */
    export interface ColorStateListSnapshot {
      readonly id: string;
      readonly __autojs6AndroidObject: "colorStateList";
      readonly states: readonly (readonly State[])[];
      readonly colors: readonly number[];
      readonly defaultColor: number;
      readonly stateful: boolean;
    }
    export interface ColorStateListHandle extends ColorStateListSnapshot {
      toJSON(): ColorStateListSnapshot;
      getColorForState(states?: readonly State[], fallback?: ColorInput, options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      close(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
    }
    export interface ThemeColor { readonly colorPrimary: number; readonly colorPrimaryDark: number; readonly colorAccent: number; }
    export interface UriSnapshot {
      readonly schema: "autojs6-node-app-uri-descriptor-v1";
      readonly value: string; readonly scheme: string | null; readonly authority: string | null; readonly host: string | null;
      readonly port: number; readonly path: string | null; readonly query: string | null; readonly fragment: string | null;
    }
    export interface AndroidModule {
      createPaint(options?: PaintOptions, control?: AutoJs6Node.BridgeCallOptions): Promise<PaintHandle>;
      createColorStateList(descriptor: ColorStateListOptions, options?: AutoJs6Node.BridgeCallOptions): Promise<ColorStateListHandle>;
      setPaintColor(paint: PaintHandle, color: ColorInput, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      getThemeColor(options?: AutoJs6Node.BridgeCallOptions): Promise<ThemeColor>;
      getUriForFile(path: string, options?: AutoJs6Node.BridgeCallOptions): Promise<UriSnapshot>;
      parseUri(uri: string | null | undefined, options?: AutoJs6Node.BridgeCallOptions): Promise<UriSnapshot | null>;
    }
  }
  const android: android.AndroidModule;
  export = android;
}
declare module "android" { import android = require("autojs6:android"); export = android; }

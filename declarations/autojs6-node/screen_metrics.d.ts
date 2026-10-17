declare module "screen_metrics" {
  namespace screenMetrics {
    export type RatioMode = boolean | "auto";
    export interface ScaleBases {
      readonly x: number;
      readonly y: number;
    }

    export interface ScreenInfo {
      readonly width: number;
      readonly height: number;
      readonly rotation: number;
      readonly baseX: number;
      readonly baseY: number;
    }

    export interface ScreenMetricsModule {
      /** Query the current display on every call. Requires the device capability. */
      getInfo(): Promise<ScreenInfo>;
      getScaleBases(): Promise<ScaleBases>;
      getScaleBaseX(): Promise<number>;
      getScaleBaseY(): Promise<number>;
      /** Each base can be set once per execution, matching Rhino's scale state. */
      setScaleBases(baseX: number, baseY: number): Promise<void>;
      setScaleBaseX(base: number): Promise<void>;
      setScaleBaseY(base: number): Promise<void>;
      cX(): Promise<number>;
      cX(value: number | string, baseOrMode?: number | RatioMode | null, ratioMode?: RatioMode): Promise<number>;
      cY(): Promise<number>;
      cY(value: number | string, baseOrMode?: number | RatioMode | null, ratioMode?: RatioMode): Promise<number>;
      cXy(value: number | string, baseOrMode?: number | string | boolean | null, ratioMode?: RatioMode): Promise<number>;
      cYx(value: number | string, baseOrMode?: number | string | boolean | null, ratioMode?: RatioMode): Promise<number>;
    }
  }

  const screenMetrics: screenMetrics.ScreenMetricsModule;
  export = screenMetrics;
}

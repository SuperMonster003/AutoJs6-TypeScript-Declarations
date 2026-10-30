/**
 * Rhino's floaty module (api-coverage P3.3, Q168 (a)). window opens the resizable frame window, rawWindow the plain one;
 * layout is XML (custom widgets and {{expressions}} as ui.layout) or an execution-owned View handle. The Promise settles
 * when the window shows and its XML ids resolve: Rhino's `w.<id>` view properties and findView answer synchronously.
 * Capabilities: ui and ui.overlay (rawWindow also floaty.raw, RawWindow.setTouchable floaty.touch); the permission
 * functions ui.overlay.permission; getClip clipboard. The windows close when the execution ends.
 */
declare module "autojs6:floaty" {
  namespace floaty {
    type NativeViewHandle = import("ui").NativeViewHandle;
    type NativeViewToken = import("ui").NativeViewToken;
    export interface WindowOptions extends AutoJs6Node.BridgeCallOptions {}
    interface WindowBase {
      readonly id: string;
      readonly rootView: NativeViewHandle | null;
      readonly closed: boolean;
      findView(id: string): NativeViewHandle | null;
      /** Pixels; each read queries the host (a new Promise). */
      readonly x: Promise<number>;
      readonly y: Promise<number>;
      readonly width: Promise<number>;
      readonly height: Promise<number>;
      setPosition(x: number, y: number): Promise<void>;
      setSize(width: number, height: number): Promise<void>;
      requestFocus(): Promise<void>;
      disableFocus(): Promise<void>;
      /** Ends the execution when the window closes (the user's close button or close()). */
      exitOnClose(): void;
      close(): Promise<void>;
      readonly [id: string]: unknown;
    }
    export interface FloatyWindow extends WindowBase {
      isAdjustEnabled(): Promise<boolean>;
      setAdjustEnabled(enabled?: boolean): Promise<void>;
    }
    export interface RawWindow extends WindowBase {
      setTouchable(touchable?: boolean): Promise<void>;
    }
    export interface FloatyModule {
      window(layout: string | NativeViewToken, options?: WindowOptions): Promise<FloatyWindow>;
      rawWindow(layout: string | NativeViewToken, options?: WindowOptions): Promise<RawWindow>;
      /** Closes this execution's floaty windows; resolves with their count. */
      closeAll(): Promise<number>;
      hasPermission(): Promise<boolean>;
      checkPermission(): Promise<boolean>;
      /** Opens the system settings page; the user grants the permission there. */
      requestPermission(): Promise<void>;
      /** Resolves when granted, else opens the settings page and rejects (code ERR_AUTOJS6_FLOATY_PERMISSION). */
      ensurePermission(): Promise<void>;
      getClip(maxDelayAfterWindowReady?: number): Promise<string>;
    }
  }

  const floaty: floaty.FloatyModule;
  export = floaty;
}

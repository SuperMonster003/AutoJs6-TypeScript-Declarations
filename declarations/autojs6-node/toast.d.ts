declare module "toast" {
  namespace toast {
    export interface ToastOptions extends AutoJs6Node.BridgeCallOptions {
      duration?: "short" | "long" | number;
      log?: boolean;
    }

    export interface ToastModule {
      showToast(message: string, options?: ToastOptions): Promise<void>;
      toast(message: string, options?: ToastOptions): Promise<void>;
      /** Cancels the toasts this execution showed (api-coverage P3.3). */
      dismissAll(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      // Rhino's leveled toasts: the toast plus the text printed at that console level; isLong may be Rhino's boolean.
      toastLog(text: unknown, isLong?: boolean | ToastOptions): Promise<void>;
      toastInfo(text: unknown, isLong?: boolean | ToastOptions): Promise<void>;
      toastWarn(text: unknown, isLong?: boolean | ToastOptions): Promise<void>;
      toastError(text: unknown, isLong?: boolean | ToastOptions): Promise<void>;
      toastVerbose(text: unknown, isLong?: boolean | ToastOptions): Promise<void>;
    }
  }

  const toast: toast.ToastModule;
  export = toast;
}

// Rhino's leveled toast globals and their lowercase aliases (installed on globalThis in main and Workers).
declare const toastLog: import("toast").ToastModule["toastLog"];
declare const toastInfo: import("toast").ToastModule["toastInfo"];
declare const toastWarn: import("toast").ToastModule["toastWarn"];
declare const toastError: import("toast").ToastModule["toastError"];
declare const toastVerbose: import("toast").ToastModule["toastVerbose"];
declare const toastlog: import("toast").ToastModule["toastLog"];
declare const toastinfo: import("toast").ToastModule["toastInfo"];
declare const toastwarn: import("toast").ToastModule["toastWarn"];
declare const toasterror: import("toast").ToastModule["toastError"];
declare const toastverbose: import("toast").ToastModule["toastVerbose"];

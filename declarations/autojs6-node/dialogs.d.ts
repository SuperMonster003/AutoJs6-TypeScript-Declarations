declare module "dialogs" {
  namespace dialogs {
    export interface DialogOptions extends AutoJs6Node.BridgeCallOptions {
      positive?: string;
      negative?: string;
      neutral?: string;
    }

    export type SelectItem = string | number | boolean;

    export interface ProgressOptions {
      readonly title?: string;
      readonly message?: string;
      readonly max?: number;
      readonly value?: number;
      readonly indeterminate?: boolean;
    }
    export interface ProgressState extends ProgressOptions {
      readonly id: string;
      readonly shown: boolean;
      readonly max: number;
      readonly value: number;
      readonly indeterminate: boolean;
    }
    export interface ProgressHandle extends ProgressState {
      update(patch: ProgressOptions, options?: AutoJs6Node.BridgeCallOptions): Promise<ProgressState>;
      dismiss(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
    }

    export interface DialogsModule {
      alert(title: string, message?: string, options?: DialogOptions): Promise<void>;
      confirm(title: string, message?: string, options?: DialogOptions): Promise<boolean>;
      input(title: string, prefill?: string, options?: DialogOptions): Promise<string | null>;
      prompt(title: string, prefill?: string, options?: DialogOptions): Promise<string | null>;
      select(title: string, items: readonly SelectItem[], options?: DialogOptions): Promise<number>;
      /** Returns entered text, with no JavaScript evaluation; cancellation returns null. */
      rawInput(title: string, prefill?: string, options?: DialogOptions): Promise<string | null>;
      singleChoice(title: string, items: readonly SelectItem[], selected?: number, options?: DialogOptions): Promise<number>;
      multiChoice(title: string, items: readonly SelectItem[], selected?: readonly number[], options?: DialogOptions): Promise<readonly number[]>;
      readonly progress: {
        show(descriptor?: ProgressOptions, options?: AutoJs6Node.BridgeCallOptions): Promise<ProgressHandle>;
        update(id: string, patch: ProgressOptions, options?: AutoJs6Node.BridgeCallOptions): Promise<ProgressState>;
        dismiss(id: string, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      };
    }
  }

  const dialogs: dialogs.DialogsModule;
  export = dialogs;
}

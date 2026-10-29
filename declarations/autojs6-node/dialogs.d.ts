declare module "dialogs" {
  namespace dialogs {
    export interface DialogOptions extends AutoJs6Node.BridgeCallOptions {
      positive?: string;
      negative?: string;
      /** A neutral button returns the same value as cancellation. */
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

    export interface BuildProperties {
      title?: string;
      content?: string;
      positive?: string;
      negative?: string;
      neutral?: string;
      items?: readonly SelectItem[];
      itemsSelectMode?: "select" | "single" | "multi";
      itemsSelectedIndex?: number | readonly number[];
      inputHint?: string;
      inputPrefill?: string;
      [key: string]: unknown;
    }

    export type BuiltDialogEvent = "show" | "positive" | "negative" | "input" | "item_select" | "single_choice" | "multi_choice" | "cancel" | "dismiss";

    export interface BuiltDialog {
      on(event: BuiltDialogEvent, listener: (...args: any[]) => void): this;
      once(event: BuiltDialogEvent, listener: (...args: any[]) => void): this;
      off(event: BuiltDialogEvent, listener: (...args: any[]) => void): this;
      addListener(event: BuiltDialogEvent, listener: (...args: any[]) => void): this;
      removeListener(event: BuiltDialogEvent, listener: (...args: any[]) => void): this;
      emit(event: BuiltDialogEvent, ...args: unknown[]): boolean;
      show(options?: DialogOptions): Promise<unknown>;
    }

    export interface DialogsModule {
      alert(title: string, message?: string, options?: DialogOptions): Promise<void>;
      alert(title: string, options?: DialogOptions): Promise<void>;
      confirm(title: string, message?: string, options?: DialogOptions): Promise<boolean>;
      confirm(title: string, options?: DialogOptions): Promise<boolean>;
      input(title: string, prefill?: string, options?: DialogOptions): Promise<string | null>;
      input(title: string, options?: DialogOptions): Promise<string | null>;
      prompt(title: string, prefill?: string, options?: DialogOptions): Promise<string | null>;
      prompt(title: string, options?: DialogOptions): Promise<string | null>;
      select(title: string, items: readonly SelectItem[], options?: DialogOptions): Promise<number>;
      /** Returns entered text, with no JavaScript evaluation; cancellation returns null. */
      rawInput(title: string, prefill?: string, options?: DialogOptions): Promise<string | null>;
      rawInput(title: string, options?: DialogOptions): Promise<string | null>;
      singleChoice(title: string, items: readonly SelectItem[], selected?: number, options?: DialogOptions): Promise<number>;
      multiChoice(title: string, items: readonly SelectItem[], selected?: readonly number[], options?: DialogOptions): Promise<readonly number[]>;
      /**
       * Rhino's dialogs.build: show() takes the route from the properties (items -> select / singleChoice / multiChoice
       * by itemsSelectMode, inputHint / inputPrefill -> input, negative -> confirm, else alert) and resolves with its result.
       */
      build(properties: BuildProperties): BuiltDialog;
      /** Activity-backed dialogs; timeout, abort and Worker/execution exit dismiss owned windows. */
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

declare module "autojs6:dialogs" { import dialogs = require("dialogs"); export = dialogs; }

/** Available in main, CJS/ESM Workers and nested Workers. Android operations share the parent execution. */
declare module "pinyin4j" {
  namespace pinyin4j {
    export interface Pinyin4jOptions {
      readonly separator?: string;
      readonly sep?: string;
      readonly case?: "LOWERCASE" | "LOW" | "L" | "0" | "UPPERCASE" | "UP" | "U" | "1";
      readonly caseType?: Pinyin4jOptions["case"];
      readonly tone?:
        | "WITH_TONE_NUMBER"
        | "WITH_NUMBER"
        | "NUMBER"
        | "NUM"
        | "WITHOUT_TONE"
        | "NO_TONE"
        | "NO"
        | "FALSE"
        | "0"
        | "WITH_TONE_MARK"
        | "WITH_MARK"
        | "MARK"
        | "TRUE"
        | "1";
      readonly toneType?: Pinyin4jOptions["tone"];
      readonly v?: string;
      readonly vChar?: string;
      readonly vCharType?: string;
    }

    export interface ReadingsOptions extends Pinyin4jOptions {
      readonly romanization?: string;
      readonly system?: string;
    }

    export interface Pinyin4jModule {
      (value: unknown, options?: Pinyin4jOptions | string | null): Promise<string>;
      of(value: unknown, options?: Pinyin4jOptions | string | null): Promise<string>;
      as(value: unknown): Promise<string>;
      readings(value: unknown, options?: ReadingsOptions | null): Promise<string[][]>;
    }
  }

  const pinyin4j: pinyin4j.Pinyin4jModule;
  export = pinyin4j;
}

declare module "autojs6:pinyin4j" {
  import api = require("pinyin4j");
  export = api;
}

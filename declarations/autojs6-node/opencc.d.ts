declare module "opencc" {
  namespace opencc {
    export type TextInput = NonNullable<unknown>;

    export type ConversionType =
      | "hk2s"
      | "hk2t"
      | "jp2t"
      | "s2hk"
      | "s2t"
      | "s2tw"
      | "s2twp"
      | "t2hk"
      | "t2s"
      | "t2tw"
      | "t2jp"
      | "tw2s"
      | "tw2t"
      | "tw2sp"
      | "s2twi"
      | "twi2s"
      | "s2jp"
      | "t2twi"
      | "hk2tw"
      | "hk2twi"
      | "hk2jp"
      | "tw2hk"
      | "tw2twi"
      | "tw2jp"
      | "twi2t"
      | "twi2hk"
      | "twi2tw"
      | "twi2jp"
      | "jp2s"
      | "jp2hk"
      | "jp2tw"
      | "jp2twi";

    export interface OpenccModule {
      (value: TextInput, type: ConversionType | string): Promise<string>;
      convert(value: TextInput, type: ConversionType | string): Promise<string>;
      hk2s(value: TextInput): Promise<string>;
      hk2t(value: TextInput): Promise<string>;
      jp2t(value: TextInput): Promise<string>;
      s2hk(value: TextInput): Promise<string>;
      s2t(value: TextInput): Promise<string>;
      s2tw(value: TextInput): Promise<string>;
      s2twp(value: TextInput): Promise<string>;
      t2hk(value: TextInput): Promise<string>;
      t2s(value: TextInput): Promise<string>;
      t2tw(value: TextInput): Promise<string>;
      t2jp(value: TextInput): Promise<string>;
      tw2s(value: TextInput): Promise<string>;
      tw2t(value: TextInput): Promise<string>;
      tw2sp(value: TextInput): Promise<string>;
      s2twi(value: TextInput): Promise<string>;
      twi2s(value: TextInput): Promise<string>;
      s2jp(value: TextInput): Promise<string>;
      t2twi(value: TextInput): Promise<string>;
      hk2tw(value: TextInput): Promise<string>;
      hk2twi(value: TextInput): Promise<string>;
      hk2jp(value: TextInput): Promise<string>;
      tw2hk(value: TextInput): Promise<string>;
      tw2twi(value: TextInput): Promise<string>;
      tw2jp(value: TextInput): Promise<string>;
      twi2t(value: TextInput): Promise<string>;
      twi2hk(value: TextInput): Promise<string>;
      twi2tw(value: TextInput): Promise<string>;
      twi2jp(value: TextInput): Promise<string>;
      jp2s(value: TextInput): Promise<string>;
      jp2hk(value: TextInput): Promise<string>;
      jp2tw(value: TextInput): Promise<string>;
      jp2twi(value: TextInput): Promise<string>;
    }
  }

  const opencc: opencc.OpenccModule;
  export = opencc;
}

declare module "autojs6:opencc" {
  import opencc = require("opencc");
  export = opencc;
}

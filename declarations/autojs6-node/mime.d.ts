declare module "mime" {
  namespace mime {
    export interface JsMime {
      readonly raw: string;
      readonly type: string;
      readonly subtype: string;
      readonly mimeType: string;
      readonly mimeTypeRefined: string;
      readonly parameters: Record<string, string>;
      toString(): string;
      toStringReadable(): string;
    }

    /** okhttp3.MediaType as a script object (charset() gives the charset name). */
    export interface MediaType {
      type(): string;
      subtype(): string;
      charset(defaultValue?: unknown): string | null | unknown;
      parameter(name: string): string | null;
      equals(other: unknown): boolean;
      hashCode(): number;
      toString(): string;
    }

    /**
     * Rhino's mime(mimeString) and the members of its Mime prototype: same argument counts, conversions and errors
     * (a Java exception is an Error named after its class). fromFile maps the extension with Android's MimeTypeMap
     * table of this API level and does not read the file. The MIME type constants (TEXT_PLAIN, IMAGE_PNG, ...) are
     * not enumerable, as in Rhino.
     */
    export interface MimeModule {
      (mimeString: string): JsMime;
      getMediaType(mediaType: string): MediaType;
      parseMediaType(mediaType: string): MediaType | null;
      fromFile(path: string): string | null;
      fromFileOr(path: string, defaultType: string | null): string;
      fromFileOrWildcard(path: string): string;
      getType(mimeType: string): string;
      getSubtype(mimeType: string): string;
      readonly WILDCARD: "*/*";
      readonly TEXT_PLAIN: "text/plain";
      readonly APPLICATION_JSON: "application/json";
      readonly APPLICATION_OCTET_STREAM: "application/octet-stream";
      readonly IMAGE_PNG: "image/png";
      readonly [constant: string]: unknown;
      /** The earlier Node name of mime(...) (not enumerable). */
      parse(mimeString: string): JsMime;
    }
  }

  const mime: mime.MimeModule;
  export = mime;
}

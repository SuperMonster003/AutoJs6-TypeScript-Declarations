/** @remarks Requires media + media.library; insert/update/delete also require media.library.mutate. */
declare module "media_store" {
  namespace mediaStore {
    /** downloads is available on Android 10+ only. */
    export type Collection = "audio" | "images" | "video" | "downloads";

    export type ColumnName =
      | "id"
      | "displayName"
      | "title"
      | "mimeType"
      | "size"
      | "dateAdded"
      | "dateModified"
      | "durationMs"
      | "album"
      | "artist"
      | "width"
      | "height"
      | "bucketDisplayName"
      | "relativePath"
      | "ownerPackageName"
      | "isPending"
      | "path";

    export interface FilterOperators {
      readonly eq?: string | number | boolean;
      readonly ne?: string | number | boolean;
      readonly gt?: number | string;
      readonly gte?: number | string;
      readonly lt?: number | string;
      readonly lte?: number | string;
      /** Raw SQL LIKE pattern (% and _ wildcards). */
      readonly like?: string;
      readonly contains?: string;
      readonly startsWith?: string;
      readonly endsWith?: string;
      readonly in?: ReadonlyArray<string | number>;
      readonly isNull?: boolean;
    }

    export type FilterValue =
      | string
      | number
      | boolean
      | null
      | ReadonlyArray<string | number>
      | FilterOperators;

    /** Column keys map to whitelisted MediaStore columns; the host compiles them into a parameterised selection. */
    export interface Filter {
      readonly [column: string]: FilterValue | undefined;
      /** Android 10+: only items created by AutoJs6; ignored below Android 10. */
      readonly ownedOnly?: boolean;
    }

    export interface QueryOptions extends AutoJs6Node.BridgeCallOptions {
      readonly filter?: Filter;
      /** Column keys, optionally prefixed with "-" or followed by " desc"; default "id". */
      readonly sort?: string | ReadonlyArray<string>;
      /** 1..1000, default 100. */
      readonly limit?: number;
      readonly offset?: number;
      /** Subset of columns to return; "id" is always included. */
      readonly columns?: ReadonlyArray<ColumnName>;
    }

    export interface Item {
      readonly schema: "autojs6-node-media-store-item-v1";
      readonly collection: Collection;
      readonly id: number;
      /** content:// URI string of the item (no Uri object crosses the bridge). */
      readonly uri: string;
      readonly displayName?: string | null;
      readonly title?: string | null;
      readonly mimeType?: string | null;
      readonly size?: number | null;
      /** Seconds since the epoch, as stored by MediaStore. */
      readonly dateAdded?: number | null;
      readonly dateModified?: number | null;
      readonly durationMs?: number | null;
      readonly album?: string | null;
      readonly artist?: string | null;
      readonly width?: number | null;
      readonly height?: number | null;
      readonly bucketDisplayName?: string | null;
      readonly relativePath?: string | null;
      readonly ownerPackageName?: string | null;
      readonly isPending?: boolean | null;
      readonly path?: string | null;
    }

    export interface QueryResult {
      readonly schema: "autojs6-node-media-store-query-v1";
      readonly collection: Collection;
      readonly count: number;
      readonly limit: number;
      readonly offset: number;
      readonly items: ReadonlyArray<Item>;
    }

    export interface Capabilities {
      readonly schema: "autojs6-node-media-store-capabilities-v1";
      readonly sdkInt: number;
      readonly scopedStorage: boolean;
      readonly collections: ReadonlyArray<Collection>;
      readonly columns: Readonly<Record<string, ReadonlyArray<ColumnName>>>;
      readonly readPermissions: Readonly<Record<string, boolean>>;
      readonly legacyWritePermissionGranted: boolean;
      readonly allFilesAccess: boolean;
      readonly queryPolicy: string;
      readonly mutatePolicy: "app_owned_items_only" | "write_external_storage_permission";
      readonly filterPolicy: "structured_json_filters_only";
      readonly itemSchema: "autojs6-node-media-store-item-v1";
      readonly defaultLimit: number;
      readonly maxLimit: number;
    }

    export interface InsertOptions extends AutoJs6Node.BridgeCallOptions {
      /** Plain file name without directory separators. */
      readonly displayName: string;
      readonly mimeType: string;
      /** Host-readable file whose bytes become the new item (absolute or relative to the working directory). */
      readonly source: string;
      /** Relative directory such as "Music/AutoJs6/"; defaults to the collection's standard directory. */
      readonly relativePath?: string;
    }

    /** Only the file name and directory are writable; MediaProvider derives title and the other metadata columns. */
    export interface UpdateValues {
      readonly displayName?: string;
      /** Android 10+ only. */
      readonly relativePath?: string;
    }

    export interface ScanOptions extends AutoJs6Node.BridgeCallOptions {
      readonly mimeType?: string;
    }

    export interface ScanResult {
      readonly schema: "autojs6-node-media-store-scan-v1";
      readonly path: string;
      readonly uri: string | null;
      /** False when Android did not index the file (for example app-private paths). */
      readonly scanned: boolean;
    }

    export interface ExportResult {
      readonly schema: "autojs6-node-media-store-export-v1";
      readonly collection: Collection;
      readonly id: number;
      readonly path: string;
      readonly sizeBytes: number;
    }

    export interface DeleteResult {
      readonly schema: "autojs6-node-media-store-delete-v1";
      readonly collection: Collection;
      readonly id: number;
      readonly deleted: boolean;
    }

    export type ItemRef = number | string | Item;

    export interface MediaStoreModule {
      capabilities(options?: AutoJs6Node.BridgeCallOptions): Promise<Capabilities>;
      query(collection: Collection, options?: QueryOptions): Promise<QueryResult>;
      get(collection: Collection, id: ItemRef, options?: AutoJs6Node.BridgeCallOptions): Promise<Item | null>;
      /** Copies a host-readable file into a new MediaStore item (media.library.mutate). */
      insert(collection: Collection, options: InsertOptions): Promise<Item>;
      /** Android 10+ only modifies items AutoJs6 created; other items fail with a permission error. */
      update(collection: Collection, id: ItemRef, values: UpdateValues, options?: AutoJs6Node.BridgeCallOptions): Promise<Item>;
      delete(collection: Collection, id: ItemRef, options?: AutoJs6Node.BridgeCallOptions): Promise<DeleteResult>;
      remove(collection: Collection, id: ItemRef, options?: AutoJs6Node.BridgeCallOptions): Promise<DeleteResult>;
      scanFile(path: string, options?: ScanOptions): Promise<ScanResult>;
      /** Copies an item's bytes to a host-writable file path. */
      exportFile(collection: Collection, id: ItemRef, destination: string, options?: AutoJs6Node.BridgeCallOptions): Promise<ExportResult>;
    }
  }

  const mediaStore: mediaStore.MediaStoreModule;
  export = mediaStore;
}

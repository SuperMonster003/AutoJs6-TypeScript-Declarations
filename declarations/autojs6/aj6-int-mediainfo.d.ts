// Type definitions for AutoJs6 internal module mediainfo
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Sep 1, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/mediainfo/Mediainfo.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/mediainfo/MediainfoNativeObject.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/core/plugin/mediainfo/MediainfoPluginHost.kt
 */

declare namespace Internal {

    interface Mediainfo {
        (path: string): Mediainfo.Result;

        readonly SNAPSHOT_SCHEMA_V1: 'autojs6-plugin-mediainfo-snapshot-v1';
        readonly SNAPSHOT_SCHEMA_V2: 'autojs6-plugin-mediainfo-snapshot-v2';

        read(path: string): Mediainfo.Result;

        snapshot(path: string, options: Mediainfo.SnapshotOptions & { readonly schema: 'autojs6-plugin-mediainfo-snapshot-v1' }): Mediainfo.SnapshotV1;
        snapshot(path: string, options: Mediainfo.SnapshotOptions & { readonly schema: 'autojs6-plugin-mediainfo-snapshot-v2' }): Mediainfo.SnapshotV2;
        snapshot(path: string, options?: Mediainfo.DefaultSnapshotOptions): Mediainfo.SnapshotV1;
        snapshot(path: string, options: Mediainfo.SnapshotOptions): Mediainfo.Snapshot;

        capabilities(): Mediainfo.Capabilities;
    }

}

declare namespace Mediainfo {

    type StreamKind = 'general' | 'video' | 'audio' | 'text' | 'other' | 'image' | 'menu' | 'max';

    type SnapshotSchema =
        | 'autojs6-plugin-mediainfo-snapshot-v1'
        | 'autojs6-plugin-mediainfo-snapshot-v2';

    type SnapshotJsonPrimitive = string | number | boolean | null;
    type SnapshotJsonValue = SnapshotJsonPrimitive | SnapshotJsonValue[] | { [key: string]: SnapshotJsonValue };

    interface SnapshotOptions {
        readonly includeInform?: boolean;
        readonly includeSections?: boolean;
        readonly schema?: SnapshotSchema;
    }

    interface DefaultSnapshotOptions extends SnapshotOptions {
        readonly schema?: undefined;
    }

    interface SnapshotV1 {
        readonly schema: 'autojs6-plugin-mediainfo-snapshot-v1';
        readonly fileName: string;
        readonly sizeBytes: number;
        readonly inform: string;
        readonly sections: Record<string, Array<Record<string, string>>>;
    }

    interface SnapshotV2Track {
        readonly fields: Record<string, SnapshotJsonValue>;
        readonly attributes?: Record<string, SnapshotJsonValue>;
        readonly extra?: Record<string, SnapshotJsonValue>;
    }

    interface SnapshotV2 {
        readonly schema: 'autojs6-plugin-mediainfo-snapshot-v2';
        readonly file: {
            readonly name: string;
            readonly sizeBytes: number;
        };
        readonly engine: {
            readonly name: string;
            readonly version: string;
            readonly url?: string;
        };
        readonly inform: string;
        readonly tracks: Record<string, SnapshotV2Track[]>;
    }

    type Snapshot = SnapshotV1 | SnapshotV2;

    interface Capabilities {
        readonly snapshotSchemas: SnapshotSchema[];
        readonly defaultSnapshotSchema: SnapshotSchema;
        readonly engineVersion?: string;
    }

    interface StreamAccessor {
        (parameter?: string): string;

        [property: string]: string | ((parameter?: string) => string);
    }

    interface Result {
        readonly path: string;
        readonly inform: string;

        readonly general: StreamAccessor;
        readonly video: StreamAccessor;
        readonly audio: StreamAccessor;
        readonly text: StreamAccessor;
        readonly other: StreamAccessor;
        readonly image: StreamAccessor;
        readonly menu: StreamAccessor;
        readonly max: StreamAccessor;

        toString(): string;

        [section: string]: any;
    }

}

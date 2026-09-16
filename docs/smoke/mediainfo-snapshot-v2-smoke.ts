declare const mediainfoApi: Internal.Mediainfo;

const legacyResult: Mediainfo.Result = mediainfoApi('./sample.mp4');
const defaultSnapshot: Mediainfo.SnapshotV1 = mediainfoApi.snapshot('./sample.mp4');
const snapshotV1: Mediainfo.SnapshotV1 = mediainfoApi.snapshot('./sample.mp4', {
    schema: mediainfoApi.SNAPSHOT_SCHEMA_V1,
    includeSections: true,
});
const snapshotV2: Mediainfo.SnapshotV2 = mediainfoApi.snapshot('./sample.mp4', {
    schema: mediainfoApi.SNAPSHOT_SCHEMA_V2,
    includeInform: false,
});
const capabilities: Mediainfo.Capabilities = mediainfoApi.capabilities();

void [legacyResult, defaultSnapshot, snapshotV1, snapshotV2, capabilities];

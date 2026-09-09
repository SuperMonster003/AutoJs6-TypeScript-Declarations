/// <reference path="../../declarations/autojs6/index.d.ts" />

// Public query signatures, including the existing stream accessor.
let mediaPath = '/sdcard/Movies/two-audio.mka';
let audioCount: number = mediainfo.countGet(mediaPath, 'audio');
let samplingRate: string = mediainfo.get(mediaPath, 'audio', 'SamplingRate', { streamNumber: 1 });
let samplingUnit: string = mediainfo.get(mediaPath, 'audio', 'SamplingRate', {
    streamNumber: 1,
    infoKind: 'measure',
});
let accessorRate: string = mediainfo(mediaPath).audio('SamplingRate', { streamNumber: 1 });
let queryKinds: Mediainfo.InfoKind[] = mediainfo.capabilities().infoKinds;

// @ts-expect-error Stream numbers do not coerce numeric strings.
mediainfo.get(mediaPath, 'audio', 'Format', { streamNumber: '1' });
// @ts-expect-error MAX is an enum sentinel, not a field information kind.
mediainfo.get(mediaPath, 'audio', 'Format', { infoKind: 'MAX' });
// @ts-expect-error Stream counting accepts concrete stream kinds.
mediainfo.countGet(mediaPath, 'max');

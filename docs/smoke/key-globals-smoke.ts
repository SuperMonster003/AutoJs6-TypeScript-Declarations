// Type-only smoke sample for key AutoJs6 globals.
// Compile with the ROADMAP Phase 7 command; this file is not a runtime script.

const colorInt: number = colors.rgb(255, 128, 0);
const colorHex: string = colors.toHex(colorInt, 8);
const builtColor: Internal.Color = Color(colorHex).setAlpha(128);

const canvasCtor: typeof Canvas = Canvas;
const canvas = new Canvas(100, 100);

const zipHandle: Zip.ZipFileHandle = zip.open('/sdcard/Download/sample.zip', {
    password: 'secret',
});
const zipIsValid: boolean = zipHandle.isValidZipFile();

const systemModel: string | null = sysprops('ro.product.model');
const roProps: SysProps.Properties = sysprops.getAll({ key: /^ro\./ });
const sdk: number | null = sysprops.getInt('ro.build.version.sdk', 0);

const idDefault: string = nanoid();
const idSized: string = nanoid(16);

const pinyinText: string = pinyin4j.of('AutoJs6', {
    separator: ' ',
    tone: 'WITHOUT_TONE',
});
const pinyinAlias: string = pinyin4j.as('AutoJs6');
const pinyinReadings: Pinyin4j.Matrix = pinyin4j.readings('重A𠀀', {
    system: 'HANYU',
    tone: 'WITH_TONE_NUMBER',
});

const mediaInfoLegacy: Mediainfo.Result = mediainfo.read('./media/sample.wav');
const mediaInfoV1: Mediainfo.SnapshotV1 = mediainfo.snapshot('./media/sample.wav', {
    includeInform: false,
});
const mediaInfoV2: Mediainfo.SnapshotV2 = mediainfo.snapshot('./media/sample.wav', {
    schema: mediainfo.SNAPSHOT_SCHEMA_V2,
    includeInform: false,
});
const mediaInfoCapabilities: Mediainfo.Capabilities = mediainfo.capabilities();
const mediaInfoFormat: Mediainfo.SnapshotJsonValue | undefined = mediaInfoV2.tracks.audio?.[0]?.fields.Format;

const byteCount: Converter.BytesResult = cvt.bytes('1 MiB', 'MiB', 'B');
const strictByteCount: Converter.BytesResult = cvt.bytes.strict('1024', {
    fromUnit: 'B',
    toUnit: 'KiB',
});
const byteLabel: string = fmt.bytes(1024, {
    toUnit: 'KiB',
    fractionDigits: 2,
});

jsox.extend('Mathx', ['Numberx', 'Arrayx']);
jsox.extendAll();

void builtColor;
void canvasCtor;
void canvas;
void zipIsValid;
void systemModel;
void roProps;
void sdk;
void idDefault;
void idSized;
void pinyinText;
void pinyinAlias;
void pinyinReadings;
void mediaInfoLegacy;
void mediaInfoV1;
void mediaInfoV2;
void mediaInfoCapabilities;
void mediaInfoFormat;
void byteCount;
void strictByteCount;
void byteLabel;

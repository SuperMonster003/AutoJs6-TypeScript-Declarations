/// <reference path="../../declarations/autojs6/index.d.ts" />

// Compile only. No Android API or external service is executed.
type CoverageIsAny<T> = 0 extends 1 & T ? true : false;
const modeIsNotAny: CoverageIsAny<typeof pinyin.MODE_NORMAL> = false;
const styleIsNotAny: CoverageIsAny<Internal.Pinyin.ConvertOptions['style']> = false;
const optionsModeIsNotAny: CoverageIsAny<Internal.Pinyin.ConvertOptions['mode']> = false;
const disposableIsNotAny: CoverageIsAny<ReturnType<typeof threads.disposable>> = false;
const pinyinModeValue: Internal.Pinyin.ModeValue = pinyin.MODE_NORMAL.value;
const pinyinStyleValue: Internal.Pinyin.StyleValue = pinyin.STYLE_TONE.getValue();
const pinyinEnumName: string = pinyin.MODE_NORMAL.name();
const pinyinEnumOrdinal: number = pinyin.STYLE_TONE.ordinal();
// @ts-expect-error The enum's nominal marker is not a script-visible string property.
pinyin.MODE_NORMAL.__pinyinMode;
// @ts-expect-error The enum's nominal marker is not a script-visible string property.
pinyin.STYLE_TONE.__pinyinStyle;
// @ts-expect-error A plain object with enum-like fields is not a runtime enum constant.
const counterfeitPinyinMode: Internal.PinyinMode = { value: 0, getValue: () => 0, name: () => 'NORMAL', ordinal: () => 0 };

const difference: number[] = Arrayx.subtract([1, 2], [2]);
const symmetricDifference: (number | string)[] = Arrayx.differ([1, 2], ['x']);
const union: number[] = Arrayx.union([1, 2], 3, [4]);
const sorted: number[] = Arrayx.sortedBy([1, 2], n => n * -1);
const randoms: number[] = [Mathx.mean([1, 2]), Mathx.mode([1, 2, 2]), Mathx.randFloat(),
    Mathx.random(0, 1), Mathx.randomFloat([0, 1]), Mathx.randomInt(10), randomFloat(), randomInt(1, 3)];
const parsed: number = Numberx.ensureNumberLike('50%');
const parsedList: number[] = Numberx.ensureNumbersLike(['1', 2], true, false);
const engineSet = engines.getEngines();
const engineSetIsNotAny: CoverageIsAny<typeof engineSet> = false;
const matched: boolean = util.checkStringArgument('abc', '[a-z]+');
const dimensions: number[] = [util.dpToPx(1), util.spToPx(1), util.pxToDp(1), util.pxToSp(1)];
const versions: Util.VersionCodes.Info[] = util.versionCodes.searchAll('Android');
const versionSummary: string = util.versionCodes.summary(true);
verbose('coverage', parsed);

const colorAliases: number[][] = [Color('#123456').rgb(), Color('#123456').rgba(), Color('#123456').argb(),
    Color('#123456').hsv(), Color('#123456').hsva(), Color('#123456').hsl(), Color('#123456').hsla()];
const rgb: number[] = colors.toRgb(0, 127, 255);
declare const colorOutput: Colors.FloatArray;
colors.toHsv('#123456', colorOutput);
colors.toHsv(0, 127, 255, colorOutput);
colors.toHsl('#123456', colorOutput);
colors.toHsl(0, 127, 255, colorOutput);
colors.toHsva('#123456', colorOutput);
colors.toHsva(0, 127, 255, 1, colorOutput);
console.build();
console.setContentTextColor(['red', 'green']);
console.setContentTextColors({ log: 'green', error: 'red' });
console.setContentTextColors('red', 'green');
console.setContentTextColors(['red', 'green']);
const emptyFlow: Flow<null> = flow.of();
auto.waitFor(1_000);
newInjectableWebView(context, 'https://example.com');
web.newInjectableWebView(context, 'https://example.com');
const ra = new RootAutomator(1_000);
ra.setScreenMetrics(1080, 1920);
ra.touchX(10); ra.touchY(20); ra.sendSync(); ra.sendMtSync();
ra.sendEvent(3, 53, 10); ra.touch(10, 20); ra.getDefaultId(); ra.setDefaultId(1); ra.exit();

const scalarCoordinates: number[] = [cX(), cY(), cX(.5, 'auto'), cY(.5, false), cX(10, 1080, null), cY(10, undefined, true)];
const crossCoordinates: number[] = [cXy(.5, '16:9'), cYx(.5, '16:9', 'auto'), cYx(10, 1080, false), cXy(.5, null, true)];
const nullableShortcutModes: number[] = [cX(.5, false, null), cY(.5, true, undefined),
    cXy(.5, 'auto', null), cYx(.5, false, undefined)];
// @ts-expect-error Ratio strings cannot request absolute mode.
cXy(.5, '16:9', false);
// @ts-expect-error The shortcut mode cannot also have a third non-null mode.
cYx(.5, true, false);

pinyin('汉字', { mode: pinyin.MODE_NORMAL, style: 'tone' });
// @ts-expect-error Mode must be an enum, supported number, or name.
pinyin('汉字', { mode: { invalid: true } });
// @ts-expect-error Invalid style names must not disappear into an unresolved alias.
pinyin('汉字', { style: 'not-a-style' });
const mailbox = threads.disposable<number>();
mailbox.setAndNotify(42);
const answer: number | null = mailbox.blockedGet(100);
// @ts-expect-error Disposable exposes named synchronization methods only.
mailbox.thisMethodDoesNotExist();
// @ts-expect-error Generic payload type must be preserved.
mailbox.setAndNotify('wrong');
threads.pool({ corePoolSize: 1, keepAliveTime: 1_000 });
// @ts-expect-error Pool options must resolve through the correct namespace.
threads.pool({ thisOptionDoesNotExist: true });

const sensorResult = sensors.register('rotation_vector' as string);
const sensorIsNotAny: CoverageIsAny<typeof sensorResult> = false;
sensorResult?.on('change', (event, ...values) => void values).unregister();
sensors.register('light')?.once('change', (event, lux) => { const value: number = lux; }).unregister();
sensors.register('light')?.on('change', (event, lux) => {
    // @ts-expect-error A known event's callback value is a number, not any.
    const invalidLightValue: string = lux;
});
// @ts-expect-error Generic sensors still reject nonexistent members.
sensorResult?.thisMethodDoesNotExist();
floaty.rawWindow('<frame/>');
declare const runtimeXml: XML;
floaty.window(runtimeXml);
// @ts-expect-error The script wrapper accepts XML or XML strings, not arbitrary objects.
floaty.rawWindow({ thisIsNotALayout: true });
const databaseRow = sqlite.open('/sdcard/compile-only.db').rawQuery('SELECT 1').next();
const rowIsNotAny: CoverageIsAny<typeof databaseRow> = false;
// @ts-expect-error Row fields are unknown until narrowed, not implicit any.
databaseRow?.unknownField.nonexistentMethod();

const axiosIsNotAny: CoverageIsAny<typeof axios> = false;
const dayjsIsNotAny: CoverageIsAny<typeof dayjs> = false;
const cheerioIsNotAny: CoverageIsAny<typeof cheerio> = false;
axios.get<{ name: string }>('https://example.com').then(response => response.data.name.toUpperCase());
const formatted: string = dayjs().add(1, 'day').format('YYYY-MM-DD');
const htmlText: string = cheerio.load('<p>Hello</p>')('p').text();
// @ts-expect-error Unknown third-party members must not pass through a blanket any.
axios.thisMethodDoesNotExist();
// @ts-expect-error Optional Dayjs plugins are not assumed to be loaded.
dayjs().utc();
// @ts-expect-error Cheerio query results expose their real methods.
cheerio.load('<p/>')('p').thisMethodDoesNotExist();

// Ordinary scripts do not automatically have conditional JSOX extensions.
// @ts-expect-error Requires the Array extension declaration and runtime enablement.
[1, 2].distinct();
// @ts-expect-error Requires the Math extension declaration and runtime enablement.
Math.random(1, 2);
// @ts-expect-error Requires the Number extension declaration and runtime enablement.
Number.parseFloat('ff', 16);

// The gallery module of the 3-Maple Image plugin.
const pickedImages: { path: string; dateTaken: number }[] | null = gallery.pick({ multiple: true, maxCount: 3, mimeTypes: ['image/png'] });
const convertedWidth: number = gallery.convert('a.png', { format: 'jpg', longEdge: 1080, background: '#ffffff' }).width;
const viewSession = $gallery.view(['a.png', 'b.png'], { index: 1 })
    .on('page', page => page.index + page.path.length)
    .on('close', event => event.reason);
viewSession.close({ finish: false });
const editedPath: Promise<string | null> = gallery.editAsync('a.png', { overwrite: true, keepExif: true });
const isGalleryError: boolean = new gallery.GalleryError('x', 'IO') instanceof gallery.GalleryError;
// @ts-expect-error Unknown size modes are rejected.
gallery.convert('a.png', { sizeMode: 'fit' });

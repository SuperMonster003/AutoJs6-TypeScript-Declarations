// Type-only smoke sample for the latest AutoJs6 augment APIs.

let aiText: Promise<string> = ai('Summarize this text.');
let localAiPlugin: Internal.Ai.PluginSelection = {
    component: {
        packageName: 'io.github.supermonster003.autojs6.plugin.ai.text',
        className: 'io.github.supermonster003.autojs6.plugin.ai.text.provider.AiTextProviderService',
    },
    providerId: 'autojs6.local.text',
    modelId: 'litertlm.0123456789abcdef0123456789abcdef',
};
let localAiText: Promise<string> = ai('Reply with OK', {
    plugin: localAiPlugin,
    timeout: 30_000,
});
let localAiAskText: Promise<string> = $ai.ask('Reply with OK', {
    plugin: localAiPlugin,
});
let localAiStream: Internal.Ai.PluginStream = $ai.stream('Reply with OK', {
    plugin: localAiPlugin,
});
localAiStream.on('open', metadata => {
    let route: 'plugin' = metadata.route;
    let provider: string = metadata.provider;
    let model: string = metadata.model;
    void route;
    void provider;
    void model;
});
localAiStream.on('chunk', chunk => {
    let text: string = chunk.text;
    let reasoning: '' = chunk.reasoning;
    let toolCalls: [] = chunk.toolCalls;
    let usage: null = chunk.usage;
    let finishReason: null = chunk.finishReason;
    let done: false = chunk.done;
    let raw: null = chunk.raw;
    void text;
    void reasoning;
    void toolCalls;
    void usage;
    void finishReason;
    void done;
    void raw;
});
localAiStream.on('delta', (text, chunk) => {
    let delta: string = text;
    let chunkText: string = chunk.text;
    void delta;
    void chunkText;
});
localAiStream.on('done', response => {
    let text: string = response.text;
    let reasoning: '' = response.reasoning;
    let toolCalls: [] = response.toolCalls;
    let usage: null = response.usage;
    let route: 'plugin' = response.route;
    let profile: null = response.profile;
    let finishReason: null = response.finishReason;
    let message: null = response.message;
    let error: null = response.error;
    let raw: null = response.raw;
    let provider: string = response.provider;
    let model: string = response.model;
    void text;
    void reasoning;
    void toolCalls;
    void usage;
    void route;
    void profile;
    void finishReason;
    void message;
    void error;
    void raw;
    void provider;
    void model;
});
localAiStream.on('error', error => {
    let route: 'plugin' = error.route;
    let code: string = error.code;
    void route;
    void code;
});
// @ts-expect-error Local plugin selection is not supported by chat.
$ai.chat('Reply with OK', { plugin: localAiPlugin });
// @ts-expect-error Local plugin selection cannot be mixed with cloud controls.
$ai.ask('Reply with OK', { plugin: localAiPlugin, provider: 'openai' });
// @ts-expect-error Local plugin stream selection cannot be mixed with cloud controls.
$ai.stream('Reply with OK', { plugin: localAiPlugin, provider: 'openai' });
let aiReply: Promise<Internal.Ai.Response> = $ai.chat({
    role: 'user',
    content: 'Hello',
}, {
    provider: 'openai',
    model: 'gpt-4.1-mini',
});
let aiStream: Internal.Ai.Stream = ai.stream([
    { role: 'user', content: 'Hello' },
]);
let aiReplyWithoutContent: Promise<Internal.Ai.Response> = ai.chat([
    { role: 'assistant' },
], {
    model: null,
});
let aiRequestReply: Promise<Internal.Ai.Response> = ai.chat({
    messages: [{ role: 'assistant' }],
    timeout: null,
});
aiStream.on('delta', (text, chunk) => {
    let complete: boolean = chunk.done;
    void text;
    void complete;
});
void localAiText;
void localAiAskText;
void localAiStream;

let speech: Promise<Internal.Tts.Result> = tts('Hello');
let utterance: Internal.Tts.Utterance = $tts.speakTask('Hello', {
    queue: 'add',
    rate: 1.2,
});
utterance.on('done', result => {
    let duration: number = result.duration;
    void duration;
});
utterance.on('error', error => {
    let code: string = error.code;
    let platformCode: number | null = error.errorCode;
    void code;
    void platformCode;
});
tts.configure({
    usage: null,
    parameters: null,
});

let batteryOptimizationIgnored: boolean = powerManager.isIgnoringBatteryOptimizations();
$power_manager.requestIgnoreBatteryOptimizations(false);

let stableMode: boolean = settings.isEnabled('stable_mode');
$settings.setEnabled('foreground_service', true);

let workTasks: TimedTask$[] = workManager.queryTimedTasks();
let sameWorkTasks: TimedTask$[] = $work_manager.queryTimedTasks();
let generalTaskOptions: Tasks.TimedTask.General = {
    path: './main.js',
    repeatMode: 'ONE-TIME',
    endMode: 'until date',
};

plugins.extend('Array', ['Numberx', 'Math']);
plugins.extend.exclude('Number');
let plugin: any = plugins('com.example.plugin');

let ocrText: string[] = ocr.mlkit({
    engineId: 'default',
    imageQuality: 90,
});

let resized: ImageWrapper = images.resize('/sdcard/image.png', [720, 1280], 'INTER_LINEAR');
let square: ImageWrapper = images.resize(resized, [512], 'nearest-exact');
let flipped: ImageWrapper = images.flip(square, 'horizontal');
let barcodeTexts: string[] = barcode.recognizeText('/sdcard/image.png', {}, true);
let qrCodeTexts: string[] = qrcode.recognizeText(true);
let colorPoint: OpenCV.Point | null = images.findPointByColor('/sdcard/image.png', '#FF7043', {
    region: [0, 0, 100, 100],
});
let imagePoint: OpenCV.Point | null = findImage(
    '/sdcard/image.png',
    '/sdcard/template.png',
    0,
    0,
    100,
    100,
    0.9,
);
let region: org.opencv.core.Rect | null = images.__buildRegion([0, 0, 100, 100], 1080, 1920);

startActivity('https://example.com');
startService(new android.content.Intent());
sendBroadcast(new android.content.Intent());
sendEmail(null);
let parsedUri: android.net.Uri | null = app.parseUri(android.net.Uri.parse('https://example.com'));
let presetApp: App.Preset | null = app.getAppByAlias('wechat');
if (presetApp) {
    app.launch(presetApp);
    launch(presetApp);
}
let mixedCaseConversion: string = opencc('AutoJs6', 'S2t');
let rotation: number = autojs.rotation;
let orientation: number = autojs.orientation;
let appNameResource: number = R.string.app_name;
let multiChoiceResult: number[] | null = dialogs.multiChoice(
    'Title',
    ['A', 'B'],
    undefined,
    indices => void indices,
);

let color: Internal.Color = new Color('#FF7043');
let nullish: boolean = isNullish(null);

void aiText;
void aiReply;
void aiReplyWithoutContent;
void aiRequestReply;
void speech;
void batteryOptimizationIgnored;
void stableMode;
void workTasks;
void sameWorkTasks;
void generalTaskOptions;
void plugin;
void ocrText;
void square;
void flipped;
void barcodeTexts;
void qrCodeTexts;
void colorPoint;
void imagePoint;
void region;
void parsedUri;
void presetApp;
void mixedCaseConversion;
void rotation;
void orientation;
void appNameResource;
void multiChoiceResult;
void color;
void nullish;

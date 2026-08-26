// Type-only smoke sample for the latest AutoJs6 augment APIs.

let aiText: Promise<string> = ai('Summarize this text.');
let threeStoneAiPlugin: Internal.Ai.PluginSelection = {
    component: {
        packageName: 'io.github.supermonster003.autojs6.plugin.threestoneai',
        className: 'io.github.supermonster003.autojs6.plugin.threestoneai.provider.ThreeStoneAiProviderService',
    },
    providerId: 'autojs6.three-stone-ai',
};
let officialAiPlugin: Internal.Ai.PluginSelector = true;
let localTarget: Internal.Ai.TargetId = 'local:litertlm.0123456789abcdef0123456789abcdef';
let pluginTargetResult: Promise<string> = ai('Reply with OK', {
    plugin: threeStoneAiPlugin,
    target: localTarget,
    timeout: 30_000,
});
let pluginAskText: Promise<string> = $ai.ask([
    { role: 'system', content: 'Answer briefly.' },
    { role: 'assistant', content: 'Understood.' },
    { role: 'user', content: 'Reply with OK.' },
], {
    target: localTarget,
    maxTokens: 16,
});
let pluginChat: Promise<Internal.Ai.Response> = $ai.chat('Reply with OK', {
    plugin: officialAiPlugin,
    target: localTarget,
    temperature: 0.7,
    topK: 40,
    topP: 0.9,
    reasoning: true,
    responseSchema: {
        type: 'object',
        properties: {
            answer: { type: 'string' },
            ok: { type: 'boolean' },
        },
        required: ['answer', 'ok'],
    },
});
pluginChat.then(response => {
    let route: 'plugin' = response.route;
    let inputTokens: number | null = response.usage.inputTokens;
    let durationMillis: number | null = response.usage.durationMillis;
    let target: Internal.Ai.Target = response.target;
    let finishReason: Internal.Ai.FinishReason = response.finishReason;
    void route;
    void inputTokens;
    void durationMillis;
    void target;
    void finishReason;
});
let targetCatalog: Promise<Internal.Ai.TargetCatalog> = ai.catalog();
let selectedTargetCatalog: Promise<Internal.Ai.TargetCatalog> = $ai.catalog({
    plugin: threeStoneAiPlugin,
    timeout: 30_000,
});
targetCatalog.then(catalog => {
    let defaultTarget: Internal.Ai.TargetId | null = catalog.defaultTarget;
    let firstTarget: Internal.Ai.Target | undefined = catalog.targets[0];
    let provider: string = catalog.plugin.provider;
    void defaultTarget;
    void firstTarget;
    void provider;
});
let pluginStream: Internal.Ai.Stream = ai.stream('Count from 1 to 3', {
    target: localTarget,
});
let pluginSession: Promise<Internal.Ai.Session> = ai.session({
    plugin: officialAiPlugin,
    target: localTarget,
    system: 'Remember the first answer.',
    maxTokens: 64,
    structuredJson: true,
    responseSchema: {
        type: 'object',
        properties: { answer: { type: 'string' } },
        required: ['answer'],
    },
});
pluginSession.then(session => {
    let provider: string = session.provider;
    let model: string = session.model;
    let target: Internal.Ai.TargetId = session.target;
    let profile: string | null = session.profile;
    let backend: Internal.Ai.Backend | null = session.backend;
    let state: 'ready' | 'closed' = session.state;
    let isClosed: boolean = session.isClosed;
    let firstTurn: Promise<string> = session.ask('Call this value alpha.');
    let secondTurn: Promise<Internal.Ai.Response> = session.chat('What was the value?');
    let streamedTurn: Internal.Ai.Stream = session.stream('Repeat it once.');
    streamedTurn.on('done', response => console.log(response.text));
    void provider;
    void model;
    void target;
    void profile;
    void backend;
    void state;
    void isClosed;
    void firstTurn;
    void secondTurn;
    session.close();
});
pluginStream.on('open', metadata => {
    let route: 'plugin' = metadata.route;
    let selectedModel: string = metadata.model;
    let selectedTarget: Internal.Ai.Target = metadata.target;
    void route;
    void selectedModel;
    void selectedTarget;
});
pluginStream.on('usage', usage => {
    let outputTokens: number | null = usage.outputTokens;
    void outputTokens;
});
pluginStream.on('done', response => {
    let generatedText: string = response.text;
    let usage: Internal.Ai.Usage = response.usage;
    void generatedText;
    void usage;
});
// @ts-expect-error Raw provider selection is not part of the plugin-target surface.
$ai.ask('Reply with OK', { plugin: threeStoneAiPlugin, provider: 'openai' });
// @ts-expect-error An explicit third-party component also requires providerId.
$ai.ask('Reply with OK', { plugin: { component: threeStoneAiPlugin.component } });
// @ts-expect-error Catalog listing does not accept generation controls.
$ai.catalog({ plugin: true, temperature: 0.7 });
// @ts-expect-error Catalog listing does not accept a target selector.
$ai.catalog({ target: localTarget });
// @ts-expect-error A response schema must be a JSON object, not an array.
$ai.ask('Reply with JSON', { plugin: true, responseSchema: [] });
// @ts-expect-error Persistent sessions accept one new prompt string per turn, not message history.
pluginSession.then(session => session.ask([{ role: 'user', content: 'No history arrays' }]));
let aiReply: Promise<Internal.Ai.Response> = $ai.chat({
    role: 'user',
    content: 'Hello',
}, {
    target: localTarget,
});
let aiStream: Internal.Ai.Stream = ai.stream([
    { role: 'user', content: 'Hello' },
]);
let aiReplyWithHistory: Promise<Internal.Ai.Response> = ai.chat([
    { role: 'assistant', content: 'Ready.' },
    { role: 'user', content: 'Continue.' },
], {
    target: null,
});
let aiRequestReply: Promise<Internal.Ai.Response> = ai.chat({
    messages: [
        { role: 'assistant', content: 'Ready.' },
        { role: 'user', content: 'Continue.' },
    ],
    timeout: null,
});
aiStream.on('delta', (text, chunk) => {
    let complete: boolean = chunk.done;
    void text;
    void complete;
});
void pluginTargetResult;
void pluginAskText;
void pluginChat;
void targetCatalog;
void selectedTargetCatalog;
void pluginStream;
void pluginSession;

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
let yoloDetector: Internal.Yolo.Detector = yolo.load('/sdcard/models/yolo11n', {
    component: 'io.github.supermonster003.autojs6.plugin.yolo.ncnn/.provider.YoloProviderService',
    device: 'cpu',
    threads: 4,
    decoderId: 'ultralytics-detect',
    timeoutMillis: 120_000,
});
let yoloDetections: Internal.Yolo.Detection[] = yoloDetector.detect(resized, {
    confidence: 0.25,
    iouThreshold: 0.45,
    maxDetections: 100,
    timeoutMillis: 30_000,
});
let yoloBounds: android.graphics.RectF | undefined = yoloDetections[0]?.bounds;
let yoloAlias: Internal.Yolo = $yolo;
// @ts-expect-error An exact provider component is required.
yolo.load('/sdcard/models/yolo11n', {});
// @ts-expect-error The Preview contract only supports the CPU device.
$yolo.load('/sdcard/models/yolo11n', { component: 'example/.Provider', device: 'gpu' });
yoloDetector.close();
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
void aiReplyWithHistory;
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
void yoloDetections;
void yoloBounds;
void yoloAlias;
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

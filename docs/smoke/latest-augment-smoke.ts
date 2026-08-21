// Type-only smoke sample for the latest AutoJs6 augment APIs.

let aiText: Promise<string> = ai('Summarize this text.');
let localAiPlugin: Internal.Ai.PluginSelection = {
    component: {
        packageName: 'io.github.supermonster003.autojs6.plugin.ondeviceai',
        className: 'io.github.supermonster003.autojs6.plugin.ondeviceai.provider.OnDeviceAiProviderService',
    },
    providerId: 'autojs6.on-device-ai',
    modelId: 'litertlm.0123456789abcdef0123456789abcdef',
};
let officialAiPlugin: Internal.Ai.PluginSelector = {
    modelId: 'litertlm.0123456789abcdef0123456789abcdef',
};
let localOnDeviceResult: Promise<string> = ai('Reply with OK', {
    plugin: localAiPlugin,
    timeout: 30_000,
});
let localAiAskText: Promise<string> = $ai.ask([
    { role: 'system', content: 'Answer briefly.' },
    { role: 'assistant', content: 'Understood.' },
    { role: 'user', content: 'Reply with OK.' },
], {
    plugin: true,
    maxTokens: 16,
});
let localAiChat: Promise<Internal.Ai.PluginChatResponse> = $ai.chat('Reply with OK', {
    plugin: officialAiPlugin,
    temperature: 0.7,
    topK: 40,
    topP: 0.9,
});
localAiChat.then(response => {
    let route: 'plugin' = response.route;
    let inputTokens: number | null = response.usage.inputTokens;
    let durationMillis: number | undefined = response.usage.raw?.durationMillis;
    void route;
    void inputTokens;
    void durationMillis;
});
let localAiModels: Promise<Internal.Ai.PluginModel[]> = ai.models();
let selectedLocalAiModels: Promise<Internal.Ai.PluginModel[]> = $ai.models({
    plugin: localAiPlugin,
    timeoutMillis: 30_000,
});
let localAiStream: Internal.Ai.PluginStream = ai.stream('Count from 1 to 3', {
    plugin: true,
});
let localAiSession: Promise<Internal.Ai.Session> = ai.session({
    plugin: officialAiPlugin,
    system: 'Remember the first answer.',
    maxTokens: 64,
});
localAiSession.then(session => {
    let provider: string = session.provider;
    let model: string = session.model;
    let state: 'ready' | 'closed' = session.state;
    let isClosed: boolean = session.isClosed;
    let firstTurn: Promise<string> = session.ask('Call this value alpha.');
    let secondTurn: Promise<Internal.Ai.PluginChatResponse> = session.chat('What was the value?');
    let streamedTurn: Internal.Ai.PluginStream = session.stream('Repeat it once.');
    streamedTurn.on('done', response => console.log(response.text));
    void provider;
    void model;
    void state;
    void isClosed;
    void firstTurn;
    void secondTurn;
    session.close();
});
localAiStream.on('open', metadata => {
    let route: 'plugin' = metadata.route;
    let selectedModel: string | null = metadata.model;
    void route;
    void selectedModel;
});
localAiStream.on('usage', usage => {
    let outputTokens: number | null = usage.outputTokens;
    void outputTokens;
});
localAiStream.on('done', response => {
    let generatedText: string = response.text;
    let usage: Internal.Ai.PluginUsage = response.usage;
    void generatedText;
    void usage;
});
// @ts-expect-error Local plugin selection cannot be mixed with cloud controls.
$ai.ask('Reply with OK', { plugin: localAiPlugin, provider: 'openai' });
// @ts-expect-error An explicit third-party component also requires providerId.
$ai.ask('Reply with OK', { plugin: { component: localAiPlugin.component } });
// @ts-expect-error Model listing does not accept generation controls.
$ai.models({ temperature: 0.7 });
// @ts-expect-error Persistent sessions accept one new prompt string per turn, not message history.
localAiSession.then(session => session.ask([{ role: 'user', content: 'No history arrays' }]));
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
void localOnDeviceResult;
void localAiAskText;
void localAiChat;
void localAiModels;
void selectedLocalAiModels;
void localAiStream;
void localAiSession;

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

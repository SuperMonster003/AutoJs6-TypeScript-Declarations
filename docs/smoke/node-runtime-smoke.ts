import pinyin = require('pinyin');
import pinyin4j = require('pinyin4j');
import screen = require('screen_metrics');
import console = require('console');
import accessibility = require('accessibility');
import observer = require('input_observer');
import compat = require('autojs6:compat');
import fetch = require('fetch');
import axios = require('axios');

const text: Promise<string> = pinyin.simple('北京上海');
const reading: Promise<string[][]> = pinyin4j.readings('重庆');
const horizontal: Promise<number> = screen.cX(360, 720);
const vertical: Promise<number> = screen.cY(0.5, true);
const crossX: Promise<number> = screen.cXy(360, '16:9', false);
const crossY: Promise<number> = screen.cYx(0.5, true);
const stringRatio: Promise<number> = screen.cX('0.5', undefined, true);
const windowChange: Promise<void> = console.setTitle('Runtime API');
const windowVisible: Promise<void> = console.show();
accessibility.swipe;
accessibility.gesture;
observer.observeKeys;
compat.cX;
compat.cYx;
fetch.request('https://example.invalid');
const error: Error = new axios.AxiosError('example');
const inspector: boolean = $autojs.profile.inspector;
const processPermission: AutoJs6Node.ProcessPermissionSnapshot = $autojs.profile.processPermission;

// @ts-expect-error Host conversion is asynchronous.
const synchronousPinyin: string = pinyin.simple('北京');
// @ts-expect-error No argument is supported; explicitly passing undefined is not.
screen.cX(undefined);
// @ts-expect-error No argument is supported; explicitly passing undefined is not.
screen.cY(undefined);
// @ts-expect-error Runtime APIs do not install Rhino globals automatically.
selector();
// @ts-expect-error Runtime declarations do not enable Rhino JSOX prototype extensions.
Math.sum(1, 2);

import recording = require('autojs6:screen_recorder');
import projection = require('autojs6:media_projection');
import audioRecorder = require('autojs6:recorder');
async function recordingTypes(path: string) {
    const capture = await projection.requestScreenCapture();
    const active: recording.ActiveRecording = await recording.start(path, { audio: 'mixed', width: 720, height: 1280 });
    const image: AutoJs6Node.ImageHandle = await capture.nextImage();
    const movie: recording.RecordingResult | null = await recording.stop({ id: active.id });
    if (movie) {
        const source: recording.AudioSource = movie.audioSource;
        const rate: 48000 | null = movie.audioSampleRate;
        void [source, rate];
    }
    const cancelled: boolean = await recording.cancel({ id: active.id });
    const status: recording.Status = await recording.getStatus();
    await capture.stop();
    audioRecorder.start({ path: 'audio.m4a' });
    // @ts-expect-error The source must be explicit; true is not a supported audio source.
    recording.start(path, { audio: true });
    // @ts-expect-error null must not cancel an arbitrary active recording.
    recording.cancel({ id: null });
    void [image, cancelled, status];
}
void recordingTypes;

import images = require('autojs6:images');
async function advancedImageTypes(input: AutoJs6Node.ImageHandle) {
    const mat: images.MatHandle = await images.imread('fixture.png');
    const size: images.ImageSize = images.getSize(mat);
    const converted = await images.matToImage(mat);
    const features: images.ImageFeaturesHandle = await images.detectAndComputeFeatures(converted, { method: 'ORB', maxFeatures: 700 });
    const frame: images.ObjectFrame | null = await images.matchFeatures(features, input);
    if (frame) { const point: AutoJs6Node.Point = frame.center; const summary: string = frame.summary(); void [point, summary]; }
    const quant: images.QuantizationResult = await images.quantize(input, { maxColors: 16 });
    const bytes: Uint8Array = quant.bytes;
    const geometry = new images.ObjectFrame({x:0,y:0},{x:8,y:0},{x:0,y:6},{x:8,y:6});
    await images.recycle([mat, features, converted]);
    // @ts-expect-error A Mat must be converted before using image pixel APIs.
    images.pixel(mat, 0, 0);
    // @ts-expect-error A feature descriptor is not a bitmap image.
    images.cvtColor(features, 'RGB2GRAY');
    // @ts-expect-error A feature detector name must be supported.
    images.detectAndComputeFeatures(input, { method: 'unknown' });
    void [size, bytes, geometry];
}
void advancedImageTypes;

import composeApi = require('autojs6:compose');
import uiApi = require('autojs6:ui');
async function portableUiComposeSmoke() {
  const state = composeApi.state(0);
  const ref = composeApi.ref();
  const session = await composeApi.mount(() => composeApi.Column({padding:16},
    composeApi.Text({text:String(state.value), ref}),
    composeApi.Button({onClick(event) { state.value++; void event.type; }}, composeApi.Text({text:'Add'}))));
  await session.flush(); await session.setTheme({dark:true});
  await session.showSnackbar('Saved', {actionLabel:'Undo', onAction() { state.value=0; }});
  const floating = await composeApi.floaty(composeApi.Text({text:'Floating'}));
  await floating.setPosition(10, 20); const x: number = await floating.getX(); void x;
  await floating.close(); await session.close();
  const model = uiApi.state({text:'hello'});
  const window = await uiApi.showLayout({type:'Text', id:'label', text:uiApi.bind(model,'text')});
  const closed: boolean=window.closed; void closed; await window.close();
  // @ts-expect-error Only execution-owned View tokens may be borrowed.
  composeApi.AndroidView({view:{}});
  // @ts-expect-error Component property types remain specific.
  composeApi.Text({fontSize:false});
}

async function nativeInteropSmoke() {
  const context = await uiApi.context();
  const root = await context.inflate('<vertical><compose id="content"/></vertical>');
  const native = await context.createView('TextView', {text:'Native'});
  const window = await uiApi.showLayout(root);
  const container = await window.findView('content');
  if (!container) throw Error('Missing container');
  const session = await composeApi.attach(container, composeApi.AndroidView({view:native}));
  const token = {__autojs6ViewHandle:native.__autojs6ViewHandle};
  const alias = uiApi.view(token);
  const snapshot = await alias.get();
  const text: string | undefined = await alias.get('text');
  await alias.set({text:'After'}); alias.on('click', function(event) { void this.context; void event.type; });
  await session.close();
  const factory = await composeApi.attach(container, composeApi.AndroidView({view:async context => context.createView('Button', {text:'Factory'})}));
  await factory.close(); await native.dispose(); await window.close(); await root.dispose();
  // @ts-expect-error Java Context methods are not exposed by a context token.
  context.getApplicationContext();
  // @ts-expect-error Factories must return a View token.
  composeApi.AndroidView({view:async () => 'text'});
  // @ts-expect-error Native View attributes are read asynchronously by name.
  alias.get('getContext');
  void [snapshot, text];
}

async function nativePropertiesSmoke() {
  const view=await uiApi.createView('Spinner',{items:['One','Two'],selectedIndex:0});
  view.items=['Alpha','Beta'];view.selectedIndex=1;await view.flush();
  const selected:number=await view.selectedIndex;
  view.text='Queued text';const text:Promise<string>=view.text;
  view.width='80dp';view.margin=[2,4];view.visibility='gone';
  view.checkedId=null;view.src='@android:drawable/ic_menu_info_details';
  const xmlId:string|null=await view.xmlId;
  await view.set({progress:20,max:100,textStyle:'bold'});
  // @ts-expect-error A native property getter is asynchronous.
  const sync:string=view.text;
  // @ts-expect-error Text assignment expects a string, not a Promise.
  view.text=Promise.resolve('bad');
  // @ts-expect-error Native read-only geometry cannot be assigned.
  view.layoutWidth=3;
  // @ts-expect-error Visibility accepts the three declared states.
  view.visibility='hidden';
  // @ts-expect-error Native patches reject misspelled properties.
  await view.set({selectedIndxe:1});
  view.on('change',event=>{const user:boolean|undefined=event.fromUser;const progress:number|undefined=event.progress;void [user,progress];});
  await view.dispose();void [selected,text,xmlId,sync];
}

async function complexNativeViewsSmoke() {
  const jsonPager=await uiApi.createView('ViewPager',{children:[{type:'Text',text:'First'}]});
  await jsonPager.dispose();
  // @ts-expect-error Child replacement belongs to creation, not scalar property mutation.
  await jsonPager.set({children:[]});
  const web=await uiApi.createView('WebView',{javaScriptEnabled:true,html:'<title>Local</title>'});
  await web.loadHtml('<p>Portable</p>');const value=await web.evaluateJavascript('({answer:42})');
  const title:string|null=await web.title;const back:boolean=await web.canGoBack;
  await web.goBack();await web.goForward();await web.reload();await web.stopLoading();
  const toolbar=await uiApi.createView('Toolbar',{title:'Title',menu:[{id:'save',title:'Save',showAsAction:'always'}]});
  toolbar.navigationIcon='@android:drawable/ic_menu_more';await toolbar.showOverflowMenu();await toolbar.hideOverflowMenu();
  const drawer=await uiApi.inflate('<drawer><vertical/><vertical layout_gravity="start"/></drawer>');
  await drawer.openDrawer('start',false);const opened:boolean=await drawer.drawerOpenStart;await drawer.closeDrawer();
  const pager=await uiApi.inflate('<viewpager><text/><text/></viewpager>');await pager.setCurrentItem(1,false);pager.currentItem=0;
  const pages:number=await pager.pageCount;
  // @ts-expect-error Page count is read-only.
  pager.pageCount=3;
  // @ts-expect-error Drawer side is start or end.
  await drawer.openDrawer('left');
  // @ts-expect-error Toolbar menu requires an id and title.
  toolbar.menu=[{text:'invalid'}];
  await web.dispose();await toolbar.dispose();await drawer.dispose();await pager.dispose();void [value,title,back,opened,pages];
}

async function webCallbacksSmoke() {
  const web=await uiApi.createView('WebView',{javaScriptEnabled:true});
  await web.setWebViewClient({
    onPageFinished(event){const url:string|null=event.url;void url;},
    onReceivedHttpAuthRequest(){return {username:'fixture',password:'fixture'};},
    onReceivedSslError(){return 'cancel';},
    shouldInterceptRequest(event){const intercepted:boolean=event.intercepted;void intercepted;}
  },{navigationRules:[{urlPrefix:'https://example.invalid/blocked',action:'block'}],resourceRules:[{url:'https://example.invalid/local',response:{body:'local',mimeType:'text/plain'}}]});
  await web.setWebChromeClient({onJsConfirm:async()=>true,onJsPrompt:()=> 'text',
    onShowFileChooser(event){return this.chooseFiles(event);},onPermissionRequest:()=>null,getVisitedHistory:()=>['https://example.invalid/']});
  await web.setDownloadListener(event=>web.download({url:event.url,fileName:event.suggestedFileName}));
  const files:readonly string[]|null=await web.chooseFiles({acceptTypes:['text/plain'],multiple:true});
  await web.cancelFileChooser();await web.exitFullscreen();
  const download=await web.download({url:'https://example.invalid/file',includeCookies:false});
  const state=await web.getDownload(download.id),bytes:Uint8Array=await web.readDownload(download.id,0,1024);await web.cancelDownload(download.id);
  // @ts-expect-error A navigation callback observes a precomputed decision.
  await web.setWebViewClient({shouldOverrideUrlLoading:()=>true});
  // @ts-expect-error Prompt results are strings or cancellation.
  await web.setWebChromeClient({onJsPrompt:()=>42});
  // @ts-expect-error Camera permission decisions use resource arrays.
  await web.setWebChromeClient({onPermissionRequest:()=>true});
  await web.dispose();void [files,state,bytes];
}

async function webFileTransfers(web: import("ui").NativeViewHandle) {
  const sharing=await web.enableDisplayCapture({origin:'https://example.invalid',maxWidth:640,maxHeight:480,frameRate:5});
  await web.disableDisplayCapture(sharing.id);
  await web.setWebChromeClient({onPermissionRequest:e=>({resources:e.resources,requestAndroidPermissions:true,backgroundCapture:true})});
  const camera=await web.startBackgroundRecording({audio:true,facing:'back',width:640,height:480});
  const movie=await web.stopBackgroundRecording();const bytes:Uint8Array=await web.readDocument(movie.uri);
  await web.cancelBackgroundRecording(camera.id);await web.stopMediaCapture();
  // @ts-expect-error An explicit trusted origin is required.
  await web.enableDisplayCapture({frameRate:5});
  // @ts-expect-error Native camera facing is explicit.
  await web.startBackgroundRecording({facing:'screen'});
  await web.evaluateJavascriptAsync('Promise.resolve(42)',{timeoutMs:180000});
  await web.setWebChromeClient({onPermissionRequest:e=>({resources:e.resources,requestAndroidPermissions:true})});
  // @ts-expect-error Android permission requests require a boolean.
  await web.setWebChromeClient({onPermissionRequest:e=>({resources:e.resources,requestAndroidPermissions:'yes'})});
  // @ts-expect-error Page source is a string, not an arbitrary callback.
  await web.evaluateJavascriptAsync(()=>42);
  const photo=await web.chooseFiles({captureEnabled:true,acceptTypes:['image/*']});
  await web.chooseFiles({captureEnabled:true,captureKind:'video',acceptTypes:['video/*'],videoQuality:1,durationLimitSeconds:30,sizeLimitBytes:10485760,timeoutMs:180000});
  await web.chooseFiles({captureEnabled:true,captureKind:'audio',acceptTypes:['audio/*'],durationLimitSeconds:15});
  await web.setWebChromeClient({onShowFileChooser(e){return this.chooseFiles(e);}},{callbackTimeoutMs:180000});
  // @ts-expect-error Capture kinds are not arbitrary media names.
  await web.chooseFiles({captureEnabled:true,captureKind:'screen'});
  // @ts-expect-error Camera quality is a documented Android level.
  await web.chooseFiles({captureEnabled:true,videoQuality:2});
  const saved=await web.chooseFiles({mode:'save',fileName:'result.txt',acceptTypes:['text/plain']});
  const tree=await web.chooseFiles({mode:'directory',writable:true});
  if(saved){const job=await web.download({url:'data:text/plain,hello',destinationUri:saved[0]});await web.getDownload(job.id);}
  if(tree)await web.download({url:'blob:https://example.invalid/id',directoryUri:tree[0],fileName:'result.bin',timeoutMs:120000});
  if(photo){const bytes:Uint8Array=await web.readDocument(photo[0],0,1024);void bytes;}
  // @ts-expect-error Chooser mode names are explicit.
  await web.chooseFiles({mode:'folder'});
}
import workerDatabase = require('autojs6:database');
import workerSqlite = require('autojs6:sqlite');
const workerDatabaseHandle: Promise<import('database').DatabaseHandle> = workerDatabase.open({name:'owned',timeoutMs:5000});
const workerSqliteHandle: Promise<import('database').DatabaseHandle> = workerSqlite({name:'owned'});
// @ts-expect-error A database name is required in the object overload.
workerDatabase.open({timeoutMs:1000});

import workerSensors = require('autojs6:sensors');
async function checkWorkerSensors(){
  const sample:import('sensors').SensorEvent=await workerSensors.once('gyroscope',{timeoutMs:5000});
  const sub:import('sensors').SensorSubscription=workerSensors.subscribe('accelerometer',event=>{const value:number=event.values[0];});
  await sub.ready;sub.once('accuracy',event=>{});await sub.close();
  // @ts-expect-error Unsupported sensor type.
  await workerSensors.once('pressure');
}

import hostShell = require('autojs6:shell');
declare const hostShellSignal:AutoJs6Node.AbortSignalLike;
import hostShizuku = require('autojs6:shizuku');
import hostEvents = require('autojs6:events');
import hostNotifications = require('autojs6:notifications');
async function checkHostEvents() {
  const subscription:hostEvents.Subscription=await hostEvents.observeNotification({drainIntervalMs:250,signal:hostShellSignal});
  subscription.on('notification',event=>{const packageName:string=event.packageName;const title:string=event.title;});
  subscription.once('overflow',event=>{const dropped:number=event.dropped;});
  const events:readonly hostEvents.Event[]=await subscription.drainEvents();
  const closed:boolean=await subscription.close();
  const id:number=await hostNotifications.notify({title:'owned',priority:'low'});
  const enabled:boolean=(await hostNotifications.getPermissionStatus()).notificationsEnabled;
  await hostNotifications.cancel(id);
  // @ts-expect-error Notification IDs are numeric.
  hostNotifications.cancel('id');
  // @ts-expect-error Event snapshots are readonly.
  subscription.on('key',event=>{event.keyCode=138;});
}
async function checkHostShell() {
  const r:import('shell').ShellResult=await hostShizuku.exec('id -u');
  const live:import('shell').ShellAccessState=await hostShell.getAccess();
  const granted:boolean=await hostShizuku.requestPermission();
  const child=hostShell.spawn('cat',{shizuku:true,signal:hostShellSignal});
  await child.ready;const bytes:AsyncIterable<import('shell').OutputChunk>=child.stdout;
  child.stdout.setEncoding('utf8').on('data',text=>{const value:string=text;});
  child.on('output',line=>{const value:string=line;});child.on('exit',code=>{const value:number|null=code;});
  const line:string|null=await child.readLine();const code:number|null=await child.waitFor(100);
  await child.write(new Uint8Array([0,255]));await child.closeInput();await child.close();
  // @ts-expect-error Host environment values must be strings.
  hostShell.spawn('echo',{env:{COUNT:3}});
  // @ts-expect-error Status properties are readonly.
  child.pid=42;
  // The Rhino stream accessors (api-coverage Q31) return the same Node streams.
  const stdout:import('shell').OutputStream=child.getInputStream();const alive:boolean=child.isAlive();
}

import hostDevice = require('autojs6:device');
import hostDialogs = require('autojs6:dialogs');
async function checkDeviceDialogs(){
  const full:hostDevice.DeviceInfo=await hostDevice.getInfo();const width:number=await hostDevice.getWidth();
  await hostDevice.keepScreenOn(1000,{signal:hostShellSignal});await hostDevice.cancelKeepingAwake();
  const value:string|null=await hostDialogs.input('Input',{positive:'Go',signal:hostShellSignal});
  const selected:readonly number[]=await hostDialogs.multiChoice('Pick',['a','b'],[0]);
  const progress:hostDialogs.ProgressHandle=await hostDialogs.progress.show({max:5,value:1});
  const next:hostDialogs.ProgressState=await progress.update({value:4});const closed:boolean=await progress.dismiss();
  // @ts-expect-error Progress values are read only.
  progress.value=3;
  // @ts-expect-error Brightness modes are Android's 0 and 1.
  hostDevice.setBrightnessMode(2);
}

import androidObjects = require('autojs6:android');
import calendarTasks = require('autojs6:tasks');
import androidColors = require('autojs6:colors');
import androidUi = require('ui');
async function checkAndroidAndCalendarTasks(){
  const paint:androidObjects.PaintHandle=await androidObjects.createPaint({color:'#f00',textSize:24,style:'stroke'});
  const width:number=await paint.measureText('owned');await androidColors.setPaintColor(paint,'#00ff00');
  const state=await androidColors.createColorStateList({states:[['!enabled'],[]],colors:['red','blue']});
  const snapshot:androidObjects.ColorStateListSnapshot=state.toJSON();const view=await androidUi.createView('Text',{textColor:snapshot});
  const theme:androidObjects.ThemeColor=await androidColors.getThemeColor();const uri:androidObjects.UriSnapshot=await androidObjects.getUriForFile('owned.txt');
  const daily:calendarTasks.TimedTask=await calendarTasks.addDailyTask({path:'child.cjs',time:'09:00',endMode:'count',times:2});
  const updated:calendarTasks.TimedTask|null=await calendarTasks.updateTask(daily,{time:'10:00'});
  const intent:calendarTasks.IntentTask=await calendarTasks.addIntentTask({path:'child.cjs',action:'owned',category:null,dataType:'text/plain'});
  await calendarTasks.updateTask(intent,{dataType:null});await calendarTasks.sendLocalBroadcastSync({action:'owned',extras:{value:3}});
  const received:number|undefined=intent.lastIntent?.receivedAt;
  await calendarTasks.removeTask(intent);await calendarTasks.removeTask(daily);await paint.close();await state.close();await view.dispose();
  // @ts-expect-error Native Paint snapshots are readonly.
  paint.color=1;
  // @ts-expect-error Calendar weekdays are limited to the documented values.
  calendarTasks.addWeeklyTask({path:'child.cjs',time:'09:00',daysOfWeek:[8]});
}

import javaInterop = require("autojs6:java");
async function javaInteropSmoke() {
  const context: javaInterop.ObjectHandle = await javaInterop.getContext();
  const ownPackage: string = await context.call<string>("getPackageName");
  const view = await javaInterop.new("android.widget.TextView", [context], {thread:"main", parameterTypes:["android.content.Context"]});
  const exact: bigint = await javaInterop.getStatic<bigint>("java.lang.Long","MAX_VALUE");
  const array = await javaInterop.newArray("long", [exact, javaInterop.cast("long","9223372036854775807")]);
  const values: readonly bigint[] = await array.toArray<bigint>();
  await array.setArrayItem(0,exact);await view.setField("id",1);await context.release();
  // @ts-expect-error Java thread choices are explicit.
  await javaInterop.getContext({thread:"background"});
  return {ownPackage,values};
}

declare const legacyTypedJavaHandle: AutoJs6Node.AutoJsJavaObjectHandle<{left: number}>;
const preservedJavaFieldType: number | undefined = legacyTypedJavaHandle.value?.left;

async function javaCallbacksSmoke() {
  const loader = await javaInterop.loadJar(["first.jar", "second.jar"]);
  const loaded: javaInterop.ObjectHandle = await loader.type("owned.Base").new();
  const proxy = await javaInterop.proxy("java.util.concurrent.Callable", async function () {
    const method: string = this.method;
    const receiver: javaInterop.ObjectHandle = this.receiver;
    return method + await receiver.call<string>("toString");
  }, {callbackTimeoutMs: 3000, onError(error) { console.error(error); }});
  const cls = await javaInterop.defineClass({extends: "java.lang.Object", methods: {
    toString: async function () { return "wrapped:" + await this.callSuper<string>(); }
  }});
  const instance: javaInterop.ObjectHandle = await cls.new([], {thread:"main"});
  await javaInterop.retain(instance);await javaInterop.loadDex("classes.dex");await javaInterop.closeCallbacks();
  await proxy.dispose();await loaded.release();await loader.release();await cls.release();
  // @ts-expect-error Callback results must be representable Java values.
  await javaInterop.wrap(() => ({plain: true}));
}

import tts = require("autojs6:tts");
import speech = require("autojs6:speech");
async function speechSmoke() {
  const result: speech.Recognition = await speech.recognize(new Int16Array(16000), {sampleRate: 16000});
  const session: speech.Session = await speech.listen({source: "external"});
  session.on("final", event => { const text: string = event.text; const index: number = event.segmentIndex; void text; void index; });
  await session.feed(new Uint8Array(32)); await session.stop();
  const model: speech.ModelInfo = await speech.models.install("model", {onProgress: (done, total) => { const value: number = done + total; void value; }});
  const missing: speech.ModelInfo | null = await speech.models.getDefault("asr");
  // @ts-expect-error Ordinary numeric arrays are not PCM buffers.
  await speech.recognize([1, 2]);
  // @ts-expect-error Runtime listen is asynchronous.
  const immediate: speech.Session = speech.listen();
  // @ts-expect-error The progress callback is a function.
  await speech.models.install("model", {onProgress: true});
  await speech.close(); return {result, model, missing};
}
async function ttsSmoke() {
  const ready: tts.ReadyInfo = await tts.ready();
  const task: tts.Utterance = await tts.synthesis("hello", "out.wav", {audioEvents: true, volume: 0});
  task.on("audio", event => { const bytes: Uint8Array = event.data; void bytes; });
  const result: tts.Result = await task.result;
  await task.stop(); await tts.configure({queue: tts.QUEUE_ADD}); await tts.close();
  // @ts-expect-error Observable tasks are asynchronous in runtime clients.
  const immediate: tts.Utterance = tts.utterance("hello");
  // @ts-expect-error Speech rate is numeric.
  await tts.speak("hello", {rate: "fast"});
  return {ready, result};
}

import ai = require("autojs6:ai");
async function aiCoreSmoke(signal: AutoJs6Node.AbortSignalLike) {
  const catalog: ai.TargetCatalog = await ai.catalog();
  const stream = ai.stream("hello", {maxTokens: 8}, {signal});
  stream.on("delta", (text, chunk) => { const content: string = text + chunk.reasoning; void content; });
  const result: ai.Response = await stream.result;
  const session: ai.Session = await ai.session({system: "brief", backend: "cpu"});
  const answer: string = await session.ask("hello");
  const metadataCapability: ai.TargetCapability = "vision";
  await session.close(); await ai.close();
  // @ts-expect-error A session turn is a prompt string.
  session.chat({messages: []});
  return {catalog, result, answer, metadataCapability};
}

async function aiAgentSmoke(signal: AutoJs6Node.AbortSignalLike) {
  const assistant = ai.agent.create({tools: ['user'], budget: {maxSteps: 4}, interaction: 'script'});
  const run: ai.AgentRun = await assistant.run('Ask a name.', {}, {signal});
  run.on('input', event => { const question: string = event.question; void run.respond(event.requestId, question); });
  run.once('confirmation', event => { void run.confirm(event.requestId, false); });
  const result: ai.AgentResult = await run.join(1000);
  const history: ai.AgentRun | null = await ai.agent.get(run.id);
  const context: ai.AgentExecutionContext | null = await ai.agent.context();
  const reported: boolean = await ai.agent.result({ok: true});
  const granted: boolean = await ai.agent.requestAccess();
  await run.cancel(); await ai.agent.close();
  // @ts-expect-error Portable Agent waiting is asynchronous.
  const immediate: ai.AgentResult = run.join();
  // @ts-expect-error Plan answers contain strings.
  run.respond('request', [1, 2]);
  // @ts-expect-error Tool names are not tool-group names.
  ai.agent.run('goal', {tools: ['script_run']});
  // @ts-expect-error Metadata is immutable.
  run.id = 'changed';
  return {result, history, context, reported, granted};
}

// worker_threads: Node exports plus the root-script WorkerPool (AutoJs6 api-coverage P5.2b).
import workerThreads = require('worker_threads');
import nodeWorkerThreads = require('node:worker_threads');

async function workerPoolTasks() {
  const pool = new workerThreads.WorkerPool('./square.cjs', { maxWorkers: 2, queueLimit: null, taskTimeoutMs: 0 });
  const task = pool.run<number>(21, { timeoutMs: 1000 });
  const cancelled: boolean = task.cancel();
  const answer: number = await task;
  const counts: workerThreads.WorkerPoolDiagnostics = pool.diagnostics();
  const shutdown: Promise<void> = pool.shutdown();
  await pool.close();
  const withoutNew: nodeWorkerThreads.WorkerPool = nodeWorkerThreads.WorkerPool('./square.cjs');
  const defaultWorkers: number = workerThreads.policy.workerPool.maxWorkers;
  const queueRejected: number = workerThreads.diagnostics().workerPoolQueueRejectedCount;
  const nativeWorkers: boolean = workerThreads.nativeAvailable;
  // @ts-expect-error idleTimeoutMs is a number of milliseconds.
  workerThreads.WorkerPool('./square.cjs', { idleTimeoutMs: '1s' });
  const port = workerThreads.parentPort;
  if (!workerThreads.isMainThread && port) {
    port.on('message', (message: workerThreads.WorkerPoolTaskMessage<number>) => {
      const reply: workerThreads.WorkerPoolReplyMessage<number> = { __autojs6PoolTaskId: message.__autojs6PoolTaskId, value: message.value * message.value };
      port.postMessage(reply);
    });
  }
  const worker = new workerThreads.Worker('./square.cjs', { workerData: 1, resourceLimits: { maxOldGenerationSizeMb: 64 } });
  worker.on('exit', (exitCode: number) => exitCode);
  const exited: Promise<number> = worker.terminate();
  const { port1, port2 } = new workerThreads.MessageChannel();
  port1.postMessage({ ready: true });
  const received: { readonly message: any } | undefined = workerThreads.receiveMessageOnPort(port2);
  return [cancelled, answer, counts, shutdown, withoutNew, defaultWorkers, queueRejected, nativeWorkers, exited, received];
}

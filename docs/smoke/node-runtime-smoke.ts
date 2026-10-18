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

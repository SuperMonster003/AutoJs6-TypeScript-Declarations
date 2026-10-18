import type { HostClient, HostCapability } from 'autojs6:bun-host';

declare const host: HostClient;
const capability: HostCapability = 'screen.metrics';
host.hasCapability(capability);
const text: Promise<string> = host.pinyin.simple('北京上海');
const readings: Promise<string[][]> = host.pinyin4j.readings('重庆');
const horizontal: Promise<number> = host.coordinates.cX(360, 720);
const vertical: Promise<number> = host.coordinates.cY(0.5, true);
const cross: Promise<number> = host.coordinates.cXy(360, '16:9', false);
const stringRatio: Promise<number> = host.coordinates.cY('0.5', undefined, true);
const visible: Promise<void> = host.console.show();

// @ts-expect-error Host calls are asynchronous.
const synchronousPinyin: string = host.pinyin.simple('北京');
// @ts-expect-error Explicit undefined is not the zero-argument overload.
host.coordinates.cX(undefined);
// @ts-expect-error Explicit undefined is not the zero-argument overload.
host.coordinates.cY(undefined);
// @ts-expect-error Bun does not inject Rhino's selector global.
selector();
// @ts-expect-error Bun does not inject Node's AutoJs6 bridge global.
$autojs;
// @ts-expect-error Bun does not activate Rhino's JSOX prototype extensions.
Math.sum(1, 2);

async function advancedImages(input: import('autojs6:bun-host').ImageHandle) {
    const mat = await host.images.imread('fixture.png');
    const size = host.images.getSize(mat);
    const image = await host.images.matToImage(mat);
    const features = await host.images.detectAndComputeFeatures(image, { method: 'ORB' });
    const frame = await host.images.matchFeatures(features, input);
    if (frame) { const summary: string = frame.summary(); const count: number = frame.inliers; void [summary, count]; }
    const quant = await host.images.quantize(input, { maxColors: 16 });
    const bytes: Uint8Array = quant.bytes;
    await host.images.recycle([mat, features, image]);
    // @ts-expect-error Mat handles require explicit conversion to image handles.
    host.images.pixel(mat, 0, 0);
    // @ts-expect-error Feature descriptors are not pixel sources.
    host.images.cvtColor(features, 'RGB2GRAY');
    void [size, bytes];
}
void advancedImages;

const composeApi=host.compose, uiApi=host.ui;
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

async function webFileTransfers(web: Awaited<ReturnType<HostClient["ui"]["createView"]>>) {
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

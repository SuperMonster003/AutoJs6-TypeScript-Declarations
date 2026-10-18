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

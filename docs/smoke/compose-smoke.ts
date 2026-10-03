/// <reference path="../../declarations/autojs6/index.d.ts" />

// tsc --noEmit --strict --skipLibCheck --target ES2020 --lib ES2020 docs/smoke/compose-smoke.ts
export {};

const moduleAlias: Internal.Compose = $compose;
const available: boolean = compose.isAvailable();
const version: string | undefined = compose.version?.plugin;
const count = compose.state(0);
const ref = compose.ref<Internal.Compose.Node<'Text'>>();
const label = compose.Text({ref, text: 'Count 0', fontSize: '18sp', style: {fontWeight: 600}, color: '#123456'});
label.text = 'Changed';
label.color = colors.RED;
label.color = Color('blue');
label.padding = [8, '4dp'];
label.fontSize = 20;
const actualText: string = label.text;
const actualColor: number | null | undefined = label.color;
const actualFontSize: number | undefined = label.get('fontSize');
// The absent namespace emulates a disabled native declaration group, not ordinary any.
// @ts-expect-error This native namespace is deliberately absent from every declaration graph.
type MissingNativeObject = Internal.ComposeExternalObject<{value: __ComposeNativeGroupNotLoaded.Bitmap}>;
declare const opaqueNative: MissingNativeObject;
const opaqueObject: object = opaqueNative;
// @ts-expect-error Unresolved native declarations must not admit primitive input values.
const missingNativeNumber: MissingNativeObject = 1;
// @ts-expect-error Unresolved native declarations must not make native reads assignable to primitives.
const missingNativeRead: number = opaqueNative;
const live: Internal.Compose.Node<'Text'> | null = ref.current;
const key: string | null = label.key;
const id: number = label.nodeId;

const modifier = compose.modifier().padding(8).padding(8, 4).padding(1, 2, 3, 4)
    .size(10).size(20, 30).width('100dp').height(40).fillMaxWidth().fillMaxHeight(0.5).fillMaxSize()
    .background('red', {shape: 'rounded', radius: '8dp'}).border(1, '#FFFFFF').clip('circle')
    .alpha(0.8).clickable(function () { this.focus(); }, true).verticalScroll().horizontalScroll(false)
    .offset(-2, '1dp').aspectRatio(1.5).testTag('compose-types').semantics(null);
const column = compose.Column({padding: [1, 2, 3, 4]}, label, ['nested', false, null, undefined]);
column.append(compose.Row({verticalAlignment: 'center'}, 'A', 'B')).insert(0, 'First').remove(0);
column.replace([label]).clear().slot('content', ['Slot']);
label.modifier = modifier;
label.modifier = null;

const field = compose.TextField({value: '', singleLine: true, label: 'Name',
    onValueChange(text, selection, editSeq) {
        const actual: string = text;
        const index: number = selection.start;
        const sequence: number = editSeq;
        this.edit({text: actual, selection: {start: index, end: index}});
    },
});
field.value = 'value alias';
field.set(null).set(undefined);
field.edit({selection: [0, 2]}).edit({text: 'new'}).focus().blur();
field.on('onValueChange', function (text, selection, editSeq) {
    const payload: [string, number, number] = [text, selection.end, editSeq];
}).off('valueChange');
const slider = compose.Slider({value: 0.5, range: [0, 1], onValueChange(value) {
    const scalar: number = value;
    this.value = scalar;
}, onValueChangeFinished() {}});
const toggle = compose.Switch({checked: false, onCheckedChange(checked) { this.checked = checked; }});
toggle.on('checkedChange', function (checked) { const state: boolean = checked; }).off('onCheckedChange');
compose.Column({onScroll(index, offset) {
    const row: number | null = index;
    const px: number = offset;
}, modifier: compose.modifier().verticalScroll()}).scrollTo({offset: 32});
compose.LazyColumn({contentPadding: [1, 2], reverseLayout: true},
    [compose.Text({key: 1, text: 'one'})]).scrollTo(0).scrollTo({index: 0, offset: -3});

declare const bitmap: android.graphics.Bitmap;
declare const image: ImageWrapper;
declare const themeColor: org.autojs.autojs.theme.ThemeColor;
compose.Text({color: themeColor});
const images = [compose.Image({src: image}), compose.Image({src: bitmap}), compose.Image({src: '@drawable/ic_launcher'})];
const savedBitmap: android.graphics.Bitmap | null = images[0].src;
const icon = compose.Icon({name: 'AutoMirrored.Filled.ArrowBack', tint: null});
compose.Box({contentAlignment: 'bottomEnd'}, compose.Spacer({modifier: compose.modifier().align('center')}));
compose.Card({}, 'Card');
compose.Surface({tonalElevation: 2}, 'Surface');
compose.TopAppBar({title: 'Title', navigationIcon: icon, actions: compose.Row({}, 'Action')});
compose.OutlinedTextField({text: '', placeholder: 'Hint', supportingText: 'Help', leadingIcon: icon, trailingIcon: 'X'});
compose.RadioButton({selected: true});
compose.Checkbox({checked: true});
compose.HorizontalDivider({thickness: 1});
compose.CircularProgressIndicator({progress: null});
compose.LinearProgressIndicator({progress: 0.5});
compose.LazyRow({}, [label]);
compose.Button({}, 'Button');
compose.ElevatedButton({}, 'Elevated');
compose.FilledTonalButton({}, 'Tonal');
compose.OutlinedButton({}, 'Outlined');
compose.TextButton({}, 'Text');
compose.IconButton({}, icon);
const dialog = compose.AlertDialog({open: true, title: 'Confirm', confirm: compose.Button({}, 'OK'), onDismissRequest() { this.open = false; }});
compose.AlertDialog({slots: {confirm: compose.Button({}, 'OK')}});
const scaffold = compose.Scaffold({topBar: compose.TopAppBar({title: 'Header'})}, column);
const created = compose.createElement('Text', {text: 'factory', overflow: 'ellipsis'});
const createdImage = compose.createElement('Image', {src: image});
compose.Text(undefined);
compose.mount(compose.Text(), undefined);
compose.mount(compose.Text(), {theme: undefined});
compose.floaty(compose.Text(), undefined);

const session = compose.mount(() => compose.Column({}, compose.Text({text: String(count.value)})));
const mountAlias: Internal.Compose.Session = compose(scaffold, {theme: {dark: 'system'}});
const updateResult: number = session.update(() => { count.value++; return count.value; });
const batchResult: string = compose.batch(() => { field.text = 'batched'; return 'done'; });
compose.post(() => { count.value++; }, 10);
session.post(() => { slider.value = 0.2; });
session.showSnackbar('Saved', {actionLabel: 'Undo', duration: 'long', onAction() {}, onDismiss() {}})
    .on('close', function () { const closed: boolean = this.isClosed(); });
session.showSnackbar('Default duration', {duration: null, actionLabel: undefined, onAction: undefined, onDismiss: undefined});
session.showSnackbar('No options', undefined);
session.showSnackbar('Session receiver', {
    onAction: function () { this.close(); },
    onDismiss: function () { const closed: boolean = this.isClosed(); },
});
const overlay = compose.floaty(scaffold, {raw: true, x: -10, y: 20, width: -1, height: -2,
    focusable: true, touchable: true, theme: {seed: '#0088FF'}});
overlay.setPosition(1, 2).setSize(240, 120).requestFocus().disableFocus().setTouchable(false);
const width: number = overlay.getWidth();
const overlaySession: Internal.Compose.Session = overlay.on('close', function () {});
const snackbarSession: Internal.Compose.Session = overlay.showSnackbar('Floating');
overlay.close();
session.close();

const initialTheme: Internal.Compose.ThemeSnapshot = compose.theme();
compose.theme(null);
compose.theme(undefined);
const normalizedTheme = compose.theme({seed: 'blue', dark: null, dynamicColor: true, colors: {primary: '#336699'}, typography: {fontFamily: 'monospace', scale: 1.2}});
const seed: number | null | undefined = normalizedTheme.seed;
const error = new ComposeError('Unavailable', 'PLUGIN_UNAVAILABLE', null, null, new Error('cause'));
const sameError: Internal.Compose.Error = compose.ComposeError('Bad property', 'UNKNOWN_PROP', 1, 'text');
const retryable: boolean = error.retryable;
if (error instanceof ComposeError) { const code: string = error.code; }

// @ts-expect-error Text has no checked property.
compose.Text({checked: true});
// @ts-expect-error Text is a leaf, not a shorthand string factory.
compose.Text('wrong child');
// @ts-expect-error Children do not stringify numbers.
compose.Column({}, 42);
// @ts-expect-error Only false is ignored; true is invalid.
compose.Row({}, true);
// @ts-expect-error Wrong unit for dp.
compose.Spacer({w: '10sp'});
// @ts-expect-error Three-value padding is not supported.
compose.Column({padding: [1, 2, 3]});
// @ts-expect-error Lazy contentPadding also accepts only one, two or four dimensions.
compose.LazyColumn({contentPadding: [1, 2, 3]});
// @ts-expect-error Modifier is an immutable chain, not an object-options builder.
compose.modifier().padding({all: 4});
// @ts-expect-error Width is not a named node shortcut.
compose.Text({width: 100});
// @ts-expect-error Required image source.
compose.Image({});
// @ts-expect-error Required icon name.
compose.Icon();
// @ts-expect-error Required dialog confirm slot.
compose.AlertDialog({open: true});
// @ts-expect-error Wrong field callback payload.
compose.TextField({onValueChange(value: number) {}});
// @ts-expect-error Slider callbacks carry numbers, not field selections.
compose.Slider({onValueChange(text: string, selection: Internal.Compose.Selection) {}});
// @ts-expect-error Toggle event only.
toggle.on('valueChange', () => {});
// @ts-expect-error edit has no caller-supplied editSeq.
field.edit({text: 'x', editSeq: 1});
// @ts-expect-error edit must include text or selection.
field.edit({});
// @ts-expect-error A scroll command requires an index or pixel offset.
compose.LazyColumn().scrollTo({});
// @ts-expect-error Node identity is readonly.
label.nodeId = 100;
// @ts-expect-error Ref publication is renderer-owned.
ref.current = label;
// @ts-expect-error Session exposes only the close event.
session.on('error', () => {});
// @ts-expect-error Snackbar is a session command, not a node factory.
compose.Snackbar({message: 'wrong'});
// @ts-expect-error Snackbar is not createElement input.
compose.createElement('Snackbar', {message: 'wrong'});
// @ts-expect-error Generic factory preserves required Image props.
compose.createElement('Image', {});
// @ts-expect-error A native image or local path is required, not a number.
compose.Image({src: 123});
// @ts-expect-error Missing native declarations must not widen image objects to booleans.
compose.Image({src: false});
// @ts-expect-error Bitmap getters stay object-or-null, never numeric, in a minimal declaration graph.
const primitiveBitmap: number = compose.Image({src: '/tmp/image.png'}).src;
// @ts-expect-error A missing ThemeColor declaration must not widen colors to booleans.
compose.Text({color: true});
// @ts-expect-error set accepts an explicit nullish argument, not zero arguments.
field.set();
// @ts-expect-error State preserves its initial value type.
count.value = 'one';
// @ts-expect-error Snackbar duration is the catalog enum.
session.showSnackbar('wrong', {duration: 'forever'});
// @ts-expect-error mount source must return a node, not a Promise.
compose.mount(async () => label);
// @ts-expect-error Floats use integer physical pixels, not dp strings.
compose.floaty(label, {width: '20dp'});
// @ts-expect-error Forwarded on returns Session, not floating geometry controls.
overlay.on('close', () => {}).setPosition(1, 2);
// @ts-expect-error Unsupported color role.
compose.theme({colors: {madeUpColor: 'blue'}});
// @ts-expect-error Invalid enum.
compose.Text({overflow: 'truncate'});

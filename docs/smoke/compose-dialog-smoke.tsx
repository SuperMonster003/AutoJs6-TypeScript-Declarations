/// <reference path="../../declarations/autojs6/index.d.ts" />
/** @jsx __autojs6Tsx */
/** @jsxFrag __autojs6TsxFragment */

// Compile-only F3 corpus. Negative directives are intentional; do not execute.
export {};

const count = compose.state(0);
const ref = compose.ref<Internal.Compose.Node<'Text'>>();
const alert: Internal.Compose.Session = compose.dialog(compose.Text({text: 'Alert'}));
const sheetOptions: Internal.Compose.DialogOptions = {type: 'bottomSheet', cancelable: false, theme: {seed: '#336699'}};
const sheet = compose.dialog(() => compose.Scaffold({},
    compose.Column({}, compose.Text({ref, key: 'count', text: String(count.value)}))), sheetOptions);
const dialogKind: Internal.Compose.DialogType = 'alert';
compose.dialog(compose.Text({text: 'Empty options'}), null);
compose.dialog(compose.Text({text: 'Default options'}), undefined);
compose.dialog(compose.Text({text: 'Inherited theme'}), {theme: null});
compose.dialog(compose.Text({text: 'Empty theme'}), {theme: undefined});
const updateResult: number = sheet.update(() => { count.value += 1; return count.value; });
sheet.post(() => { if (!sheet.isClosed()) count.value += 1; }, 10);
sheet.on('close', function () { const sameSession: Internal.Compose.Session = this; });
sheet.showSnackbar('Saved', {onAction: function () { this.close(); }});
sheet.close();
alert.close();

const jsx = compose.dialog(<><compose.Column><compose:Text text="TSX"/></compose.Column></>, {type: dialogKind});
const reactiveJsx = compose.dialog(() => <compose.Text text={String(count.value)}/>, {type: 'bottomSheet'});
declare const existingView: Internal.Compose.NativeView;
compose.dialog(compose.AndroidView({view: existingView}));
compose.dialog(<compose.AndroidView view={context => ui.inflate(<button text="Native"/>)}/>);

// @ts-expect-error A root is required.
compose.dialog();
// @ts-expect-error An arbitrary native View is not a Compose root.
compose.dialog(existingView);
// @ts-expect-error String content must be inside a Compose node.
compose.dialog('Alert');
// @ts-expect-error Null is not a root.
compose.dialog(null);
// @ts-expect-error Roots cannot be a plain array.
compose.dialog([compose.Text({text: 'A'})]);
// @ts-expect-error Render functions must synchronously return a Compose root.
compose.dialog(async () => compose.Text({text: 'Async'}));
// @ts-expect-error A render function returning a primitive is invalid.
compose.dialog(() => 'Alert');
// @ts-expect-error Dialog type names are case-sensitive.
compose.dialog(compose.Text({text: 'x'}), {type: 'bottomsheet'});
// @ts-expect-error ModalBottomSheet is an implementation class name, not an option value.
compose.dialog(compose.Text({text: 'x'}), {type: 'ModalBottomSheet'});
// @ts-expect-error Explicit null is not a dialog type.
compose.dialog(compose.Text({text: 'x'}), {type: null});
// @ts-expect-error Cancelable is a strict boolean.
compose.dialog(compose.Text({text: 'x'}), {cancelable: 'false'});
// @ts-expect-error Explicit null is not a boolean.
compose.dialog(compose.Text({text: 'x'}), {cancelable: null});
// @ts-expect-error Window tokens are not public options.
compose.dialog(compose.Text({text: 'x'}), {token: {}});
// @ts-expect-error Window types are not public options.
compose.dialog(compose.Text({text: 'x'}), {windowType: 2038});
// @ts-expect-error Floaty-only flags are not dialog options.
compose.dialog(compose.Text({text: 'x'}), {raw: true});
// @ts-expect-error Theme shape stays precise.
compose.dialog(compose.Text({text: 'x'}), {theme: {dark: 1}});
// @ts-expect-error Dialog returns an existing Session, not a Promise.
const promise: Promise<Internal.Compose.Session> = compose.dialog(compose.Text({text: 'x'}));
// @ts-expect-error A dialog Session is not a floating-window control object.
compose.dialog(compose.Text({text: 'x'})).setPosition(0, 0);
// @ts-expect-error Close listeners use the existing event name.
sheet.on('dismiss', function () {});
// @ts-expect-error Dialog roots retain AndroidView's synchronous factory requirement.
compose.dialog(<compose.AndroidView view={async () => existingView}/>);

// exactOptionalPropertyTypes records the runtime distinction between absent and undefined members.
// @ts-expect-error Only omitted type selects the default.
compose.dialog(compose.Text({text: 'x'}), {type: undefined});
// @ts-expect-error Only omitted cancelable selects true.
compose.dialog(compose.Text({text: 'x'}), {cancelable: undefined});

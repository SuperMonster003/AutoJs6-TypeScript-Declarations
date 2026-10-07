/// <reference path="../../declarations/autojs6/index.d.ts" />
/** @jsx __autojs6Tsx */
/** @jsxFrag __autojs6TsxFragment */

// Compile-only corpus for the matching F2 host and AndroidView interop feature.
// Negative examples are intentional; do not execute this file.
export {};

declare const existingView: android.view.View;
const container = ui.findById('slot');
const nativeNode = compose.AndroidView({view: existingView, testTag: 'native'});
const viewResult: android.view.View = nativeNode.view;
const readResult: Internal.Compose.NativeView = nativeNode.get('view');
nativeNode.set({view: existingView});
nativeNode.view = function (context) {
    const androidContext: android.content.Context = context;
    return new android.widget.TextView(androidContext);
};

const factory: Internal.Compose.ViewFactory = function (context) {
    const androidContext: android.content.Context = context;
    return new android.widget.Button(androidContext);
};
const factoryNode = compose.createElement('AndroidView', {view: factory});
const preciseRef = compose.ref<Internal.Compose.Node<'AndroidView'>>();
const withRef = compose.AndroidView({view: factory, ref: preciseRef, onClick: function () {
    const actualView: Internal.Compose.NativeView = this.view;
}});
const session: Internal.Compose.Session = compose.attach(container, factoryNode);
compose.attach(container, () => compose.Column({}, compose.AndroidView({view: factory})), {
    theme: {colors: {primary: '#336699'}},
});
compose.attach(container, nativeNode, null);

const xml = <vertical><compose id="slot" w="*" h="120"/></vertical>;
ui.layout(xml);
const valueTag = <compose.AndroidView view={existingView} w={120}/>;
const namespaceTag = <compose:AndroidView view={(context) => new android.widget.TextView(context)} testTag="native"/>;
const AndroidViewAlias = compose.AndroidView;
const aliasTag = <AndroidViewAlias view={factory}/>;
const inflatedTag = <compose.AndroidView view={(context) => ui.inflate(
    <button text="Native" onClick={function (view) {
        const emitter: EventEmitter$ = this;
        view.setText('Clicked');
    }}/>
)}/>;
compose.attach(container, <><compose.Column>{valueTag}{namespaceTag}{aliasTag}</compose.Column></>);

// Latest declarations stay present while Compose is synchronized into the editor.
const oklab: number[] = colors.toOklab('#336699');
const contrasting: ColorInt = colors.ensureContrast('#336699', 'white');
const activeTheme: Colors.Theme = colors.theme;
const terminalModule: Internal.Terminal = terminal;
const terminalAlias: Internal.Terminal = $terminal;

// @ts-expect-error AndroidView requires a view property.
compose.AndroidView();
// @ts-expect-error An empty props object does not supply a view.
compose.AndroidView({});
// @ts-expect-error A string is not a native View.
compose.AndroidView({view: '<text text="XML"/>'});
// @ts-expect-error A wire lease number is not a script View.
compose.AndroidView({view: 1});
// @ts-expect-error Boolean primitives are not View objects.
compose.AndroidView({view: false});
// @ts-expect-error The required View may not be null.
compose.AndroidView({view: null});
// @ts-expect-error Factories are synchronous, not Promise-returning.
compose.AndroidView({view: async () => existingView});
// @ts-expect-error A Promise itself is not a native View.
compose.AndroidView({view: Promise.resolve(existingView)});
// @ts-expect-error A factory must return a native View, not text.
compose.AndroidView({view: () => 'not a View'});
// @ts-expect-error A void factory cannot create a View.
compose.AndroidView({view: () => {}});
// @ts-expect-error The Context argument is not a numeric lease identifier.
compose.AndroidView({view: (context: number) => existingView});
// @ts-expect-error A View factory is not bound to a Compose node.
compose.AndroidView({view: function () { this.set({view: existingView}); return existingView; }});
// @ts-expect-error There is no script update callback property.
compose.AndroidView({view: existingView, update: () => {}});
// @ts-expect-error There is no script onRelease callback property.
compose.AndroidView({view: existingView, onRelease: () => {}});
// @ts-expect-error AndroidView has no ordinary children.
compose.AndroidView({view: existingView}, compose.Text({text: 'child'}));
// @ts-expect-error AndroidView has no content slot.
compose.AndroidView({view: existingView, content: compose.Text({text: 'slot'})});
// @ts-expect-error Node updates retain the exact View input type.
nativeNode.set({view: Promise.resolve(existingView)});
// @ts-expect-error The normalized getter is a View, never the original factory.
const factoryReadback: Internal.Compose.ViewFactory = nativeNode.view;
// @ts-expect-error A Compose node is not an Android View when native types are available.
compose.AndroidView({view: compose.Text({text: 'node'})});
// @ts-expect-error Attach needs a native container, not an ID string.
compose.attach('slot', nativeNode);
// @ts-expect-error Promises are not containers.
compose.attach(Promise.resolve(existingView), nativeNode);
// @ts-expect-error A factory is not a container argument.
compose.attach(() => existingView, nativeNode);
// @ts-expect-error Attach options only expose theme.
compose.attach(container, nativeNode, {raw: true});
// @ts-expect-error Attach render callbacks must return a Compose root.
compose.attach(container, () => existingView);
// @ts-expect-error The namespaced JSX View prop is mandatory.
const missingJsxView = <compose:AndroidView/>;
// @ts-expect-error JSX factories must synchronously return a native View.
const asyncJsxView = <compose.AndroidView view={async () => existingView}/>;
// @ts-expect-error AndroidView is a leaf.
const jsxLeafText = <compose:AndroidView view={existingView}>child</compose:AndroidView>;
// @ts-expect-error The empty XML container is populated with attach, not nested markup.
const xmlContainerChildren = <compose id="slot"><text text="child"/></compose>;
// @ts-expect-error Compose node properties are not XML container attributes.
const wrongXmlProps = <compose view={existingView}/>;
// @ts-expect-error XML TSX click listeners receive the actual clicked View.
const wrongXmlCallback = <button onClick={(view: number) => {}}/>;
// @ts-expect-error XML TSX listeners are functions, not an Android method-name string.
const xmlMethodName = <button onClick="onNativeClick"/>;

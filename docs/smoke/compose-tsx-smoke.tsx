/// <reference path="../../declarations/autojs6/index.d.ts" />
/** @jsx __autojs6Tsx */
/** @jsxFrag __autojs6TsxFragment */

// Compile-only positive/negative corpus for the matching F.1 host. Do not execute this file:
// Negative directives and explicitly documented global JSX expression limits are intentional.
export {};

const ColumnAlias = compose.Column;
const TextAlias = $compose.Text;
const enabled = compose.state(false);
const textRef = compose.ref<Internal.Compose.Node<'Text'>>();
const composeExpression = <compose.Column spacing={8} padding={[8, 12]}>
    <TextAlias key="title" text="Compose" ref={textRef} fontSize="18sp"/>
    <compose.Button onClick={function () { this.enabled = false; }}>Press</compose.Button>
    <compose.TextField text="" label={<compose.Text text="Name"/>}
        onValueChange={function (text, selection, editSeq) {
            const value: string = text;
            const start: number = selection.start;
            const seq: number = editSeq;
            this.edit({text: value, selection: [start, start]});
        }}/>
    <compose.Slider value={0.5} range={[0, 1]} onValueChange={function (value) {
        const scalar: number = value;
        this.value = scalar;
    }}/>
    <compose.Switch checked={enabled.value} onCheckedChange={function (checked) {
        const value: boolean = checked;
        this.checked = value;
    }}/>
    {false}
    {null}
    {undefined}
    {['One', ['Two', false]]}
</compose.Column>;

const namespaceExpression = <compose:Column spacing="8dp" modifier={compose.modifier().fillMaxWidth()}>
    <compose:Text text="Namespaced" textAlign="center"/>
    <compose:Button onClick={function () { this.enabled = false; }}>OK</compose:Button>
    <compose:TextField label="Name" onValueChange={function (text, selection, editSeq) {
        const tuple: [string, number, number] = [text, selection.end, editSeq];
        this.edit({text});
    }}/>
</compose:Column>;

const aliasExpression = <ColumnAlias spacing={4}><compose.Text text="Alias"/></ColumnAlias>;
const imageExpression = <compose.Image src="./photo.png" w={32} h={32}/>;
const iconExpression = <compose:Icon name="AutoMirrored.Filled.ArrowBack"/>;
const dialogExpression = <compose.AlertDialog open={false} confirm={<compose.Button>Confirm</compose.Button>}/>;
const slotExpression = <compose:TopAppBar title={<TextAlias text="Title"/>}
    actions={<compose.Row><compose.IconButton><compose.Icon name="MoreVert"/></compose.IconButton></compose.Row>}/>;
const singleRootFragment = <><compose.Column><compose.Text text="One root"/></compose.Column></>;
const nestedFragment = <compose.Column><><compose.Text text="A"/><compose.Text text="B"/></></compose.Column>;
compose.mount(composeExpression);
compose.mount(namespaceExpression);
compose.mount(() => singleRootFragment);

// All existing lower-case XML tags retain their original attribute types and child syntax.
const legacyExpression = <vertical w="*" h="*" padding="16">
    <text id="legacy_label" text="XML" textSize="18sp"/>
    <button id="legacy_button" text="Continue"/>
    <horizontal><text text="A"/><text text="B"/></horizontal>
    <><text text="Fragment"/></>
</vertical>;
ui.layout(legacyExpression);

// The shared global JSX.Element was never declared in the public package. Keep the historical
// any expression result rather than falsely labelling XML as ComposeNode. Runtime checks own
// the domain boundary and fragment root count. Leaf-child precision additionally depends on
// exactOptionalPropertyTypes, which the separate compiler probe records for both settings.
const documentedLegacyAny: Internal.ComposeNode = legacyExpression;
const documentedComposeAny: number = composeExpression;
const mixedDomainNeedsRuntime = <compose.Column><text text="XML child"/></compose.Column>;
const multiRootNeedsRuntime = <><compose.Text text="A"/><compose.Text text="B"/></>;
void mixedDomainNeedsRuntime; void multiRootNeedsRuntime;

// @ts-expect-error Unknown namespaced component is absent from the generated catalog.
const invalidName = <compose:NotAComponent/>;
// @ts-expect-error Snackbar is a command, never a JSX node tag.
const invalidSnackbar = <compose:Snackbar message="Not a node"/>;
// @ts-expect-error Text is a strict string property.
const invalidText = <compose.Text text={123}/>;
// @ts-expect-error Namespaced props are equally strict.
const invalidNamespaceText = <compose:Text text={123}/>;
// @ts-expect-error No arbitrary props index signature.
const invalidProperty = <compose.Text checked={true}/>;
// @ts-expect-error Exact enum values remain enforced.
const invalidEnum = <compose:Text textAlign="middle"/>;
// @ts-expect-error Scalar strings are not bare dp dimensions.
const invalidSpacing = <ColumnAlias spacing="8"/>;
// @ts-expect-error Font dimensions use sp, not dp.
const invalidFontUnit = <compose.Text fontSize="18dp"/>;
// @ts-expect-error Icon name is required.
const missingIconName = <compose.Icon/>;
// @ts-expect-error Image src is required.
const missingImageSource = <compose:Image/>;
// @ts-expect-error Dialog requires a confirmation slot.
const missingDialogConfirm = <compose.AlertDialog/>;
// @ts-expect-error Bitmap/image inputs never accept number primitives.
const invalidImage = <compose.Image src={12}/>;
// @ts-expect-error Color inputs do not accept booleans.
const invalidColor = <compose:Text color={true}/>;
// @ts-expect-error Text input event receives a string, not a scalar slider value.
const invalidFieldCallback = <compose.TextField onValueChange={(value: number) => {}}/>;
// @ts-expect-error Slider input event receives a number.
const invalidSliderCallback = <compose:Slider onValueChange={(value: string) => {}}/>;
// @ts-expect-error A TextField callback receiver has no Slider value of type number.
const invalidThis = <compose.TextField onValueChange={function () { const n: number = this.value; }}/>
// @ts-expect-error Plain numeric children require explicit String conversion.
const invalidNumericChild = <compose.Column>{123}</compose.Column>;
// @ts-expect-error true is not an ignored Compose child (false is).
const invalidBooleanChild = <compose:Column>{true}</compose:Column>;
// @ts-expect-error A Text leaf does not accept plain text children.
const invalidLeafText = <compose.Text>Use the text property</compose.Text>;
// @ts-expect-error The same leaf rule applies to namespaced syntax.
const invalidNamespaceLeafText = <compose:Text>Use the text property</compose:Text>;
// @ts-expect-error Surface has at most one child; wrap siblings in a layout.
const invalidSurfaceChildren = <compose.Surface><compose.Text text="A"/><compose.Text text="B"/></compose.Surface>;
// @ts-expect-error Legacy XML attrs are not weakened by Compose support.
const invalidLegacyProperty = <text composeOnlyOption={123}/>;
// @ts-expect-error Ordinary P6 calls retain precise props after JSX support.
compose.Text({text: 123});
// @ts-expect-error Ordinary P6 children have not been widened to any.
compose.Column({}, 123);
// @ts-expect-error Events still use props/set/on; not a mutable event accessor.
compose.Button().onClick = () => {};

/// <reference path="../../declarations/autojs6/index.d.ts" />

// tsc --noEmit --strict --exactOptionalPropertyTypes --skipLibCheck --target ES2020 --lib ES2020 docs/smoke/compose-nullish-exact-smoke.ts
// exactOptionalPropertyTypes distinguishes an absent optional key from an explicitly present undefined.
export {};

const node = compose.Text({text: 'nullish inputs'});
node.set(null);
node.set(undefined);
compose.theme(null);
compose.theme(undefined);
compose.Text(undefined);
compose.mount(node, undefined);
compose.mount(node, {theme: undefined});
compose.floaty(node, null);
compose.floaty(node, {theme: undefined});
declare const session: Internal.Compose.Session;
session.showSnackbar('short', {duration: null});
session.showSnackbar('short', {actionLabel: undefined, onAction: undefined, onDismiss: undefined});
session.showSnackbar('short', null);
session.showSnackbar('short', undefined);

// @ts-expect-error Unlike absent/null duration, an explicitly present undefined is rejected.
session.showSnackbar('invalid duration', {duration: undefined});
// @ts-expect-error The nullable setter still requires one argument.
node.set();

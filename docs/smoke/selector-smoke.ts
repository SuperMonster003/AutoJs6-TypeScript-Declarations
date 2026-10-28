// Selector P4.3 of AutoJs6 6.8.0: normalize / prefer, the result types of the node method registry, auto flags,
// auto.explain with a compass and a result type, auto.stats fastPath / refinds.
const normalized: Internal.Selector = text('OK').normalize().normalize(false).normalize({ trim: true, caseInsensitive: true });
const normalizedGlobal: Internal.Selector = normalize({ fullWidth: true, whitespace: true, nfkc: true }).text('OK');
const preferred: UiObject = text('OK').prefer('visible', 'clickable').findOne(3e3);
const preferredGlobal: Internal.Selector = prefer('area');
// @ts-expect-error unknown key of prefer
prefer('left');
// @ts-expect-error unknown option of normalize
normalize({ lowerCase: true });
pickup({ text: 'OK', normalize: true, prefer: ['visible', 'center'] }, 'k2', 'click');
pickup({ text: 'OK', normalize: { trim: true } }, '@');
pickup('OK', 'hintText');
pickup('OK', 'getHintText');
pickup('OK', 'isChecked');
pickup('OK', ['child', 0]);
pickup('OK', ['performAction', 16]);
pickup('OK', ['waitForStable', 500, 100]);
pickup('OK', '##');
pickup('OK', []);
pickup('OK', ['$']);
detect(pickup('OK'), 'p2', ['setSelection', 1, 3]);
// @ts-expect-error not a method of the node method registry (D11; a string second argument also reads as a compass)
pickup('OK', 'p', 'getChild');
// @ts-expect-error a setter of AccessibilityNodeInfoCompat is not callable
pickup('OK', ['setChecked', true]);
auto.setFlags(['!eventAssistedPolling', 'noFastPath', 'noRefreshOnHit']);
auto.clearFlags('eventAssistedPolling');
// @ts-expect-error clearFlags takes no "!" prefix
auto.clearFlags('!noFastPath');
const explained: Automator.ExplainResult = auto.explain(text('OK'), 'p2c0', ['setText', 'hi']);
const explainedWithRoot: Automator.ExplainResult = auto.explain({ text: 'OK' }, null, 'k2', 'click');
const hops: (UiObject | null)[] = explained.trail.map(hop => hop.node);
const kind: string | undefined = explained.result?.kind;
const flagsOn: boolean = explainedWithRoot.fastPathEnabled && explainedWithRoot.refreshOnHit && explainedWithRoot.refreshes !== false;
const fastPathWalks: number = auto.stats.fastPath.walks + auto.stats.queries.refinds;

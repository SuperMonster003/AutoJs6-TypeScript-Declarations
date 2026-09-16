// Type-only checks for optional steps, bounded loops and stable collections.
/// <reference path="../../declarations/autojs6/index.d.ts" />

let preserved: Flow<string> = flow.of('input').whenPresent('Optional dialog', node =>
    flow.of(node).sleep(10), { timeout: 400 });
let optionalRoot: Flow<null> = flow.whenPresent(() => 42, value => {
    let numberValue: number = value;
    return Promise.resolve(numberValue);
});
let repeatedNode: Flow<UiObject> = flow.repeatUntil(attempt =>
    flow.sleep(attempt * 10), 'Ready', {
    timeout: 1000,
    maxAttempts: 3,
    retryOn: (error, attempt) => error.code === 'ACTION_FAILED' && attempt < 3,
});
let repeatedValue: Flow<string> = preserved.repeatUntil(() => Promise.resolve(), () => 'ready');
let clicked: Flow<boolean> = preserved.clickIfExists('Dismiss', 400);
let candidate: Flow<Automator.FoundCandidate | null> = preserved.findAny(['Ready', 'Unavailable'], 1000);
let clickedCandidate: Flow<Automator.FoundCandidate | null> = preserved.clickAny(['Accept', 'Continue']);
let stableNodes: Flow<UiObject[]> = waitForStable(/Ready|Unavailable/, {
    timeout: 1000,
    stableFor: 100,
    resultType: '[]',
    snapshot: (nodes: UiObject[]) => nodes.map(node => ({ content: node.content() })),
});
stableNodes.then(nodes => nodes.map(node => node.content()));
flow.whenPresent('Ready', nodes => nodes.map(node => node.content()), { resultType: '[]' });
preserved.whenPresent('Ready', nodes => nodes.map(node => node.content()), { resultType: '[]' });
let repeatedNodes: Flow<UiObject[]> = flow.repeatUntil(() => undefined, 'Ready', { resultType: '[]' });

// @ts-expect-error repeatUntil conditions cannot be omitted.
flow.repeatUntil(() => flow.sleep(10));
// @ts-expect-error whenPresent requires a callable handler.
flow.whenPresent('Optional dialog', 42);
// @ts-expect-error retryOn must return a synchronous boolean.
flow.repeatUntil(() => undefined, 'Ready', { retryOn: () => Promise.resolve(true) });
// @ts-expect-error snapshot values must be structural data, not functions.
waitForStable('Ready', { snapshot: () => () => true });

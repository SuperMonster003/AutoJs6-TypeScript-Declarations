/// <reference path="../../declarations/autojs6/index.d.ts" />
// Compile-only API consumer examples of the perceptual colors functions and colors.theme, including deliberate invalid calls.
export {};

const lab: number[] = colors.toOklab('red');
const fromLab: Colors.ColorInt = colors.oklab(0.628, 0.2249, 0.1258);
const fromLabPercent: Colors.ColorInt = colors.oklab('50%', 0, 0, 0.5);
const fromLabArray: Colors.ColorInt = colors.oklab([0.5, 0, 0]);
const lch: number[] = colors.toOklch('#2196F3');
const fromLch: Colors.ColorInt = colors.oklch(0.7, 0.1, 200, 128);
const fromLchArray: Colors.ColorInt = colors.oklch([0.7, 0.1, 200]);
const readable: Colors.ColorInt = colors.ensureContrast('#FFC107', 'white', 3);
const harmony: Colors.ColorInt[] = colors.harmony('#2196F3', 'splitComplementary');
const tones: Colors.ColorInt[] = colors.tones('#2196F3', 5);
const derived: Colors.DerivedColors = colors.derive('#2196F3');
const night: Colors.ColorInt = colors.nightVariant(derived.primary);
const simulated: Colors.ColorInt = colors.simulate(derived.accent, 'deuteranopia');
const distance: number = colors.distance('orange', 'dark-orange', 'oklab');
const similar: boolean = colors.isSimilar('orange', 'dark-orange', {threshold: 16, algorithm: 'oklab'});
const image = images.read('./picture.png')!;
const extracted: Colors.ColorInt[] = colors.extract(image, {count: 3, region: [0, 0, 200, 200], step: 2});

colors.theme.set('#2196F3', {accent: '#FF9800'});
colors.theme.reset();
const primary: Colors.ColorInt = colors.theme.get();
const library: Colors.ThemeLibrary | undefined = colors.theme.libraries().find(lib => lib.intelligent);
if (library) colors.theme.activate(library.id, {group: 1});
const deactivated: boolean = colors.theme.deactivate();
const moved: boolean = colors.theme.next();
colors.theme.state('busy');
const current: Colors.ThemeCurrent = colors.theme.current();
const groupId: number | null = current.groupId;
const kind: 'preset' | 'created' | 'imported' | 'cloned' = colors.theme.libraries()[0].kind;

// @ts-expect-error harmony types are a closed set
colors.harmony('#2196F3', 'square');
// @ts-expect-error deficiencies are a closed set
colors.simulate('#2196F3', 'achromatopsia');
// @ts-expect-error unknown detection algorithm
colors.distance('red', 'blue', 'lab');
// @ts-expect-error extract accepts an ImageWrapper, not a path
colors.extract('./picture.png');
// @ts-expect-error extract options reject misspellings
colors.extract(image, {counts: 3});
// @ts-expect-error oklab needs three components
colors.oklab(0.5, 0);
// @ts-expect-error derive returns an object, not a color
const wrongDerived: Colors.ColorInt = colors.derive('#2196F3');
// @ts-expect-error activate needs a library id
colors.theme.activate('Material day and night');
// @ts-expect-error set options reject misspellings
colors.theme.set('#2196F3', {primaryDark: '#000000'});
// @ts-expect-error state needs a name
colors.theme.state();
// @ts-expect-error current libraryName may be null
const libraryName: string = current.libraryName;
// @ts-expect-error colors.theme has no toggle method
colors.theme.toggle();

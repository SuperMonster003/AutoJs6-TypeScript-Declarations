// The declarations of the global imgui (aj6-int-imgui.d.ts), from app/src/test/types/imgui-smoke.ts of AutoJs6-Plugin-ImGui.

const plugin: ImGui.Api = imgui;
const enabled = plugin.bool(true);
const count = plugin.int(3);
const title = plugin.ref("P6");
const backendCapabilities: ImGui.BackendCapabilities = plugin.GetBackendCapabilities();
const backendState: ImGui.BackendStatus = backendCapabilities.privileged.status;
const privilegedOptions: ImGui.WindowOptions = {
    mode: plugin.WindowMode.Privileged,
    backend: "auto",
    startupTimeout: 10_000,
    rotation: 0,
};

plugin.checkbox(title.value, enabled);
plugin.text(`${backendState}:${backendCapabilities.directInput.readerImplemented}`);
plugin.text(`${backendCapabilities.privileged.transport}:${privilegedOptions.backend}`);
plugin.sliderInt("Count", count, 0, 10);
plugin.SetTheme(plugin.Themes.ModernDark);
plugin.getForegroundDrawList().addCircleFilled([24, 24], 8, [0.2, 0.8, 1, 1]);

const session: ImGui.Session = plugin.createWindow((ui, windowSession) => {
    const typedUi: ImGui.Api = ui;
    const typedSession: ImGui.Session = windowSession;
    typedUi.begin("Typed ImGui");
    typedUi.text(`Limit: ${typedUi.Limits.InputTextMaxBytes}`);
    typedUi.end();
    typedSession.setMoreTouch(true);
}, {
    mode: plugin.WindowMode.Activity,
    theme: plugin.Themes.Dark,
    fps: 60,
    moreTouch: true,
    onMoreTouchChanged: event => plugin.text(event.type),
});

session.on("closed", event => plugin.text(event.type));
session.on("error", event => {
    const phase: "render" | "event" = event.phase;
    plugin.text(`${phase}:${event.frame}:${event.message}`);
});
session.setMoreTouch(true);
const debugSession: ImGui.Session = plugin.createWindow(ui => {
    ui.plotLines("Samples", [0, 1, 2, 3, 4, 5, 6, 7], {valuesOffset: 2, stride: 2});
}, {
    debug: true,
    onError: event => event.session.close(event.phase),
});
const debugMode: boolean = debugSession.debug;
plugin.text(`${debugMode}`);
let pixels: ImGui.Texture | null = null;
const idleSession: ImGui.Session = plugin.createWindow(ui => {
    pixels = pixels ?? ui.createTexture("images/red.png", {nearest: true});
    pixels.update("images/green.png");
    ui.listClipper(100_000, (start, end) => {
        for (let row = start; row < end; row++) ui.text(`Row ${row}`);
    });
    ui.ListClipper(100, {itemHeight: 24, includeItems: [42]}, (start, end) => ui.text(`${start}..${end}`));
}, {
    fps: 60,
    idleFps: 10,
    idleDelay: 3000,
    onIdle: event => plugin.text(`${event.fps}`),
    onActive: event => plugin.text(`${event.reason}`),
});
const stats: ImGui.StatsOverlay = idleSession.statsOverlay();
const workTime: number = stats.snapshot().workTime + stats.workTime;
idleSession.setFps(30).setIdleFps(0, 1000);
const idleState: string = `${idleSession.idle}:${idleSession.paused}:${idleSession.idleFps}:${idleSession.idleDelay}`;
plugin.text(`${idleState}:${idleSession.getFps()}:${workTime}`);
idleSession.close("type-smoke-complete");
const androidSession: ImGui.Session = plugin.createWindow(ui => {
    ui.text("龘");
}, {
    systemCjkFont: true,
    pinchZoom: true,
    onFontScaleChanged: event => plugin.text(`${event.scale}`),
});
androidSession.setFontScale(1.5);
const fontScale: number = androidSession.fontScale;
const captured: ImageWrapper = androidSession.capture({region: {x: 10, y: 10, width: 100, height: 40}});
plugin.text(`${fontScale}:${captured.getWidth()}x${captured.getHeight()}`);
captured.recycle();
androidSession.close("type-smoke-complete");
plugin.SetMoreTouch(false);
session.close("type-smoke-complete");

const privilegedSession: ImGui.Session = plugin.LaunchPrivileged(() => {
    plugin.begin("Typed privileged ImGui");
    plugin.text("Binder Surface");
    plugin.end();
}, privilegedOptions);
const activeBackend: ImGui.ActivePrivilegedBackend | null = privilegedSession.privilegedBackend;
plugin.text(`${activeBackend}:${privilegedSession.getBackendInfo()}`);
privilegedSession.close("type-smoke-complete");

plugin.isKeyPressed(plugin.Key.F1, false);
plugin.Shortcut(plugin.Mod.Ctrl | plugin.Key.S, plugin.InputFlags.RouteGlobal);
const clipboardText: string = plugin.getClipboardText();
plugin.setClipboardText(clipboardText);
plugin.addMousePosEvent(10, 20);
plugin.addMouseButtonEvent(plugin.MouseButton.Left, true);
plugin.withDragDropSource(plugin.DragDropFlags.SourceAllowNullID, () => {
    plugin.setDragDropPayload("ROW", {id: 1});
});
plugin.withDragDropSource(() => {
    plugin.setDragDropPayload("ROW", 1, plugin.Cond.Once);
});
plugin.withDragDropTarget(() => {
    const payload = plugin.acceptDragDropPayload<{ id: number }>("ROW");
    if (payload !== null && payload.delivery) {
        plugin.text(payload.data.id);
    }
});
plugin.getWindowDrawList()
    .pathClear()
    .pathArcTo([10, 10], 5, 0, 1)
    .pathStroke([1, 1, 1, 1], 2, plugin.DrawFlags.Closed)
    .pushClipRect([0, 0], [10, 10], true)
    .addNgon([5, 5], 4, 0xFFFFFFFF, 6)
    .popClipRect();
plugin.pushClipRect([0, 0], [10, 10]);
plugin.PopClipRect();

const selection: ImGui.SelectionStorage = plugin.selectionStorage();
const scope: ImGui.MultiSelectIO = plugin.beginMultiSelect(
    plugin.MultiSelectFlags.ClearOnEscape,
    selection.size,
    100_000,
);
selection.apply(scope);
plugin.listClipper(100_000, {includeItems: [scope.rangeSrcItem, scope.navIdItem]}, (start, end) => {
    for (let row = start; row < end; row += 1) {
        plugin.setNextItemSelectionUserData(row);
        plugin.selectable(`Row ${row}`, selection.has(row));
        const toggled: boolean = plugin.isItemToggledSelection();
        plugin.text(toggled);
    }
});
const ended = plugin.endMultiSelect();
ended.requests.forEach((request) => {
    if (request.type === "setRange") {
        plugin.text(`${request.selected} ${request.rangeFirstItem} ${request.rangeLastItem} ${request.rangeDirection}`);
    }
});
selection.apply(ended.requests, ended.itemsCount).setItemSelected(1, false);
const selectedIds: number[] = selection.clear().toArray();
plugin.text(selectedIds.length);
plugin.setNextWindowFocus();
plugin.setNextWindowCollapsed(true, plugin.Cond.Once);
plugin.SetNextWindowFocus();
plugin.SetNextWindowCollapsed(false);
plugin.withWindow("Focused", null, 0, () => plugin.text(plugin.isWindowFocused()));

const dialogs: ImGui.Session = plugin.launchFloaty(() => undefined);
const accepted: ImGui.DialogPromise<boolean> = dialogs.alert("Title", "Message", {okLabel: "Fine", width: 240});
accepted.then((ok: boolean) => plugin.text(ok));
plugin.confirm("Message only", {cancelLabel: "No"}).controller.cancel();
plugin.singleChoice("Pick", ["a", "b"], 1, {autoAccept: true}).then((index: number) => plugin.text(index));
plugin.singleChoice(["a", "b"], {selected: 1, onChoice: (index, item) => plugin.text(`${index}${item}`)});
plugin.multiChoice(["a", "b"], [true, false]).then((indices: number[] | null) => plugin.text(indices));
plugin.MultiChoice("Pick", [{label: "a"}], [0], {onChoice: (index, checked) => plugin.text(`${index}${checked}`)}).accept();

interface Task {
    id: number;
    name: string;
}

const tasks: ImGui.DataTable<Task> = dialogs.dataTable<Task>("tasks", [
    "Plain",
    {key: "id", label: "#", compare: (a, b) => Number(a) - Number(b)},
    {key: "name", weight: 2, render: (value, row, rowIndex, table) => plugin.text(`${value}${row.id}${rowIndex}${table.id}`)},
], [{id: 1, name: "One"}], {
    rowKey: "id",
    sortable: true,
    labels: {add: "New"},
    formatCell: (value, row) => (value === undefined ? row.id : value),
    renderCell: (value, row, header, rowIndex, columnIndex) => columnIndex === 2 && value === header.label && row.id === rowIndex,
    createRow: table => ({id: table.rows.length + 1, name: "New"}),
    onRowsChanged: (rows, action, row, index, table) => plugin.text(`${rows.length}${action}${row === null}${index}${table.id}`),
});
tasks.updateRow(0, {name: "First"});
tasks.updateRow(1, row => ({name: row.name + "!"}));
dialogs.dataTable("tasks by function", [{key: "id"}], [{id: 1}], {rowKey: row => row.id});
const log: ImGui.LogWindow = dialogs.logWindow("log", {
    entries: ["text", {level: "warn", text: 1}],
    onExport: (text, entries, component) => plugin.text(`${text}${entries.length}${component.id}`),
});
plugin.text(log.export());
dialogs.toast("Saved", {duration: 500, showLevel: true});
dialogs.on("moved", event => plugin.text(event.x + event.oldY));
dialogs.once("configurationChanged", event => plugin.text(event.orientation));
dialogs.off("idle");
plugin.runExample("multi-window", {autoCloseMs: 1000}).close();
plugin.setStyleProperties({windowRounding: 4, itemSpacing: [8, 4], colors: {text: "#fff", WindowBg: [0, 0, 0, 1]}});
plugin.pushStyleVar("Alpha", 0.5);
plugin.popStyleVar();
plugin.createWindow(() => undefined, {windowPadding: [4, 4], iniPath: true, onError: (event, source) => source.close(event.message)});

// A misspelled option or a key that is not in the row does not compile.
// @ts-expect-error
const misspelledWindow: ImGui.WindowOptions = {fpsMax: 60};
// @ts-expect-error
const misspelledStyle: ImGui.WindowOptions = {windowRouding: 4};
// @ts-expect-error
const misspelledLog: ImGui.LogWindowOptions = {maxEntry: 10};
// @ts-expect-error
const misspelledToast: ImGui.ToastOptions = {postion: "center"};
// @ts-expect-error
const misspelledStats: ImGui.StatsOverlayOptions = {warnMs: 10};
// @ts-expect-error
const misspelledTable: ImGui.DataTableOptions = {multiselect: true};
// @ts-expect-error
const misspelledDialog: ImGui.DialogOptions = {oKLabel: "OK"};
// @ts-expect-error
const wrongRowKey: ImGui.DataTableOptions<Task> = {rowKey: "identifier"};
// @ts-expect-error
const wrongHeaderKey: ImGui.DataTableHeader<Task> = {key: "title"};
// @ts-expect-error
dialogs.on("mooved", () => undefined);
plugin.text(`${misspelledWindow}${misspelledStyle}${misspelledLog}${misspelledToast}${misspelledStats}`);
plugin.text(`${misspelledTable}${misspelledDialog}${wrongRowKey}${wrongHeaderKey}`);

plugin.BeginMultiSelect();
plugin.SetNextItemSelectionUserData(1);
plugin.IsItemToggledSelection();
plugin.EndMultiSelect(true);
plugin.SelectionStorage();

// capture returns the host class, and every returned object resolves from its call expression.
const capturedWrapper: ImageWrapper = plugin.createWindow(() => {}).capture();
const dollarSession: ImGui.Session = $imgui.createWindow(() => {}).setFps(30);
const lateReady: ImGui.Session = dollarSession.on("ready", event => plugin.text(`${event.type}:${event.restored}`));
const drawList: ImGui.DrawList = plugin.getWindowDrawList().addLine([0, 0], [1, 1], "#fff");
const logged: ImGui.LogWindow = plugin.logWindow("hud");
const shown: ImGui.Toast = plugin.toast("hello");
const overlay: ImGui.StatsOverlay = plugin.statsOverlay("stats");
const table: ImGui.DataTable = plugin.dataTable("rows", ["a"], [{a: 1}]);
const button: ImGui.FloatingButton = plugin.addButtonEx("+", () => {});
const texture: ImGui.Texture = plugin.createTexture("a.png");
const storage: ImGui.SelectionStorage = plugin.selectionStorage();
const multiSelect: ImGui.MultiSelectIO = plugin.beginMultiSelect();
const dialog: ImGui.Dialog = plugin.alert("hello").controller;
void [capturedWrapper, lateReady, drawList, logged, shown, overlay, table, button, texture, storage, multiSelect, dialog];
// @ts-expect-error The internal slot of plugins.load is not declared.
void plugin.__pluginId;

export {};

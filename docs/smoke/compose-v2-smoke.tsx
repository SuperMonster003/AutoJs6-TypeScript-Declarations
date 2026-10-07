/// <reference path="../../declarations/autojs6/index.d.ts" />
/** @jsx __autojs6Tsx */
/** @jsxFrag __autojs6TsxFragment */

// Compile-only F4 corpus. Negative directives are intentional; do not execute.
export {};

const icon = () => compose.Icon({name: 'Home'});
const label = () => compose.Text({text: 'Home'});
const navItem = compose.NavigationBarItem({icon: icon(), label: label(), selected: true,
    onClick: function () { const same: Internal.Compose.Node<'NavigationBarItem'> = this; }});
const railItem = compose.NavigationRailItem({slots: {icon: icon()}, alwaysShowLabel: false});
const bar = compose.NavigationBar({containerColor: '#ffffff'}, navItem);
const rail = compose.NavigationRail({header: label()}, railItem);
const drawerItem = compose.NavigationDrawerItem({label: label(), badge: compose.Badge({text: '2'}), icon: icon()});
const drawer = compose.NavigationDrawer({drawerContent: drawerItem, open: true,
    onOpenChange: function (open) { const value: boolean = open; this.open = value; }}, compose.Text({text: 'Content'}));
const tabs = compose.TabRow({selectedIndex: 0, scrollable: true}, compose.Tab({text: label(), icon: icon()}));
const sheet = compose.ModalBottomSheet({open: true, cancelable: false, shape: 'rounded',
    onDismissRequest: function () { this.open = false; }}, label());
const menu = compose.DropdownMenu({anchor: compose.Button({}, 'Menu'), open: true},
    compose.DropdownMenuItem({text: label(), leadingIcon: icon(), trailingIcon: icon()}));
const date = compose.DatePicker({selectedDateMillis: null, yearStart: 2000, yearEnd: 2030,
    displayMode: 'input', showModeToggle: true,
    onDateChange: function (selectedDateMillis) { const value: number | null = selectedDateMillis; this.selectedDateMillis = value; },
    onDisplayModeChange: function (mode) { const value: 'picker' | 'input' = mode; this.displayMode = value; }});
const selectedDate: number | null = date.get('selectedDateMillis');
const time = compose.TimePicker({hour: 10, minute: 30, is24Hour: true, displayMode: 'input',
    onTimeChange: function (hour, minute) { const pair: [number, number] = [hour, minute]; this.set({hour: pair[0], minute: pair[1]}); }});
const pager = compose.HorizontalPager({page: 0, pageSpacing: '8dp', onPageChange: function (page) { this.page = page; }}, label());
pager.scrollTo({index: 0, offset: 10});
const grid = compose.LazyVerticalGrid({columns: 2, contentPadding: [4, '8dp'], spacing: 6,
    onScroll: function (index, offset) { const i: number | null = index; const px: number = offset; }}, label());
grid.contentPadding = 12;
const padding: number | number[] = grid.get('contentPadding');
const assist = compose.AssistChip({label: 'Assist', leadingIcon: icon()});
const filter = compose.FilterChip({slots: {label: 'Filter'}, selected: true,
    onSelectedChange: function (selected) { const value: boolean = selected; this.selected = value; }});
const input = compose.InputChip({label: 'Input', trailingIcon: icon(), onSelectedChange: function (selected) { this.selected = selected; }});
const badge = compose.Badge({text: '3', visible: true}, icon());
const segments = compose.SegmentedButton({mode: 'multi'}, compose.SegmentedButtonItem({label: 'One', icon: icon(),
    onSelectedChange: function (selected) { this.selected = selected; }}));
const fab = compose.FloatingActionButton({containerColor: '#336699', shape: 'circle'}, icon(), 'Add');
const search = compose.SearchBar({query: '', expanded: true, placeholder: 'Search', leadingIcon: icon(),
    onQueryChange: function (text) { this.query = text; },
    onSearch: function (text) { const query: string = text; this.expanded = false; },
    onExpandedChange: function (expanded) { this.expanded = expanded; }}, label());
const tooltip = compose.Tooltip({tooltip: 'Help', open: true, onOpenChange: function (open) { this.open = open; }}, label());
const refresh = compose.PullToRefresh({refreshing: false, onRefresh: function () { this.refreshing = true; }}, grid);
const ref = compose.ref<Internal.Compose.Node<'SearchBar'>>();
const factory = compose.createElement('FilterChip', {label: 'Filter', selected: false});
const jsx = <compose.Column>
    <compose.NavigationBar><compose.NavigationBarItem icon={<compose.Icon name="Home"/>} selected/></compose.NavigationBar>
    <compose:NavigationRail><compose:NavigationRailItem slots={{icon: <compose.Icon name="Home"/>}}/></compose:NavigationRail>
    <compose.NavigationDrawer drawerContent={<compose.NavigationDrawerItem label="Home"/>}><compose.Text/></compose.NavigationDrawer>
    <compose.TabRow><compose.Tab text="One"/></compose.TabRow>
    <compose.ModalBottomSheet open><compose.Text/></compose.ModalBottomSheet>
    <compose.DropdownMenu anchor={<compose.Button>Menu</compose.Button>}><compose.DropdownMenuItem text="Open"/></compose.DropdownMenu>
    <compose.DatePicker onDateChange={value => { const nullable: number | null = value; }}/>
    <compose:TimePicker hour={10} onTimeChange={(hour, minute) => { const n: number = hour + minute; }}/>
    <compose.HorizontalPager page={0}><compose.Text key="page"/></compose.HorizontalPager>
    <compose.LazyVerticalGrid columns={2} contentPadding={8}><compose.Text key="item"/></compose.LazyVerticalGrid>
    <compose.AssistChip label="Assist"/><compose.FilterChip label="Filter"/><compose.InputChip label="Input"/>
    <compose.Badge text="2"><compose.Icon name="Home"/></compose.Badge>
    <compose.SegmentedButton><compose.SegmentedButtonItem label="One"/></compose.SegmentedButton>
    <compose.FloatingActionButton><compose.Icon name="Add"/></compose.FloatingActionButton>
    <compose.SearchBar ref={ref} query="" onSearch={text => { const query: string = text; }}><compose.Text/></compose.SearchBar>
    <compose:Tooltip tooltip="Help"><compose.Text/></compose:Tooltip>
    <compose.PullToRefresh onRefresh={() => {}}><compose.Text/></compose.PullToRefresh>
</compose.Column>;
compose.mount(jsx);
const legacy = <vertical><text text="XML"/><compose id="host"/></vertical>;
ui.layout(legacy);

// @ts-expect-error A navigation item requires an icon slot.
compose.NavigationBarItem({label: 'Home'});
// @ts-expect-error The corresponding namespaced item has the same required slot.
const missingIcon = <compose:NavigationRailItem/>;
// @ts-expect-error Drawer items require a label.
compose.NavigationDrawerItem({});
// @ts-expect-error A drawer requires drawerContent.
compose.NavigationDrawer({}, label());
// @ts-expect-error A popup requires an anchor.
compose.DropdownMenu({open: true});
// @ts-expect-error Menu items require a text slot.
compose.DropdownMenuItem();
// @ts-expect-error A tooltip requires tooltip content.
compose.Tooltip({}, label());
// @ts-expect-error AssistChip requires a label.
compose.AssistChip();
// @ts-expect-error FilterChip requires a label.
const missingLabel = <compose.FilterChip/>;
// @ts-expect-error InputChip requires a label.
compose.InputChip({selected: true});
// @ts-expect-error SegmentedButtonItem requires a label.
compose.SegmentedButtonItem({});
// @ts-expect-error Required slots cannot be null.
compose.AssistChip({label: null});
// @ts-expect-error NavigationBar accepts matching items only.
compose.NavigationBar({}, compose.Text({text: 'Wrong'}));
// @ts-expect-error NavigationRail rejects NavigationBarItem.
compose.NavigationRail({}, navItem);
// @ts-expect-error TabRow accepts Tab children only.
compose.TabRow({children: [compose.Text()]});
// @ts-expect-error SegmentedButton accepts SegmentedButtonItem only.
compose.SegmentedButton({}, 'Wrong');
// @ts-expect-error Selection is boolean.
compose.FilterChip({label: 'Filter', selected: 'yes'});
// @ts-expect-error Modes are case sensitive.
compose.SegmentedButton({mode: 'singleChoice'});
// @ts-expect-error Date selection is a number or null, not a Date object.
compose.DatePicker({selectedDateMillis: new Date()});
// @ts-expect-error Date mode uses exact values.
compose.DatePicker({displayMode: 'calendar'});
// @ts-expect-error Time mode uses exact values.
compose.TimePicker({displayMode: 'clock'});
// @ts-expect-error The date callback must handle null.
compose.DatePicker({onDateChange: (millis: number) => {}});
// @ts-expect-error Date mode callbacks receive the validated enum.
compose.DatePicker({onDisplayModeChange: (mode: 'calendar') => {}});
// @ts-expect-error Time callback parameters are numbers.
compose.TimePicker({onTimeChange: (hour: string, minute: number) => {}});
// @ts-expect-error TimePicker has no valueChange callback.
compose.TimePicker({onValueChange: () => {}});
// @ts-expect-error Pager page is a numeric index.
compose.HorizontalPager({page: '1'}, label());
// @ts-expect-error Pager spacing uses dp, not sp.
compose.HorizontalPager({pageSpacing: '2sp'}, label());
// @ts-expect-error Grid columns is numeric.
compose.LazyVerticalGrid({columns: '2'});
// @ts-expect-error Padding accepts 1, 2 or 4 entries.
compose.LazyVerticalGrid({contentPadding: [1, 2, 3]});
// @ts-expect-error Search callback gets a string.
compose.SearchBar({onSearch: (text: number) => {}});
// @ts-expect-error Expand callback gets a boolean.
compose.SearchBar({onExpandedChange: (expanded: string) => {}});
// @ts-expect-error Refresh is a callback, not a flag.
compose.PullToRefresh({onRefresh: true}, label());
// @ts-expect-error Badge text uses text input.
compose.Badge({text: 3});
// @ts-expect-error DatePicker is a leaf component.
compose.DatePicker({}, label());
// @ts-expect-error Single-child components reject two ordinary children.
compose.Tooltip({tooltip: 'Help'}, label(), label());
// @ts-expect-error Unsupported slots remain errors.
compose.TimePicker({slots: {label: label()}});
// @ts-expect-error Only text fields have edit commands.
date.edit({text: 'x'});
// @ts-expect-error SearchBar does not support TextField's edit command.
search.edit({text: 'x'});
// @ts-expect-error Accessors preserve enum types.
date.displayMode = 'calendar';
// @ts-expect-error Date getters preserve nullable values.
const nonNullableDate: number = date.selectedDateMillis;
// @ts-expect-error Unknown namespaced components remain rejected.
const unknown = <compose:DateRangePicker/>;
// @ts-expect-error Native XML attributes are not Compose props.
const xmlProps = <compose.FloatingActionButton id="fab"/>;

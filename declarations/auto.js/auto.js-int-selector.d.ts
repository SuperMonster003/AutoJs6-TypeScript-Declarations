// Type definitions for Auto.js internal module selector
//
// Project: https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../auto.js.d.ts" />
/// <reference lib="es6" />

/**
 * @Source %autojs%/assets/modules/__selector__.js
 */

declare namespace Selector {
    type ClassName = Android.Widget.String | 'android.support.v4.view.ViewPager' | 'android.support.v4.widget.DrawerLayout' | 'android.support.v7.app.ActionBar$Tab' | 'android.support.v7.widget.LinearLayoutCompat' | 'android.support.v7.widget.RecyclerView' | 'android.view.View' | 'android.view.ViewGroup' | 'android.webkit.WebView' | 'androidx.appcompat.app.ActionBar$Tab' | 'androidx.appcompat.widget.LinearLayoutCompat' | 'androidx.drawerlayout.widget.DrawerLayout' | 'androidx.recyclerview.widget.RecyclerView' | 'androidx.viewpager.widget.ViewPager' | 'com.tencent.mm.ui.MMImageView' | 'com.tencent.mm.ui.mogic.WxViewPager' | 'com.uc.webkit.bc' | 'com.uc.webview.export.WebView';
    type ClassNameAbbr = Android.Widget.StringAbbr;
    type Keys = 'accessibilityFocus' | 'accessibilityFocused' | 'actionList' | 'actions' | 'addAction' | 'addChild' | 'bounds' | 'boundsInParent' | 'boundsInScreen' | 'canOpenPopup' | 'checkable' | 'checked' | 'child' | 'childCount' | 'children' | 'class' | 'className' | 'clearAccessibilityFocus' | 'clearFocus' | 'click' | 'clickable' | 'collapse' | 'collectionInfo' | 'collectionItemInfo' | 'column' | 'columnCount' | 'columnSpan' | 'contentDescription' | 'contentInvalid' | 'contextClick' | 'contextClickable' | 'copy' | 'cut' | 'depth' | 'desc' | 'dismiss' | 'dismissable' | 'drawingOrder' | 'editable' | 'enabled' | 'equals' | 'error' | 'expand' | 'extras' | 'find' | 'findAccessibilityNodeInfosByText' | 'findAccessibilityNodeInfosByViewId' | 'findByText' | 'findByViewId' | 'findFocus' | 'findOne' | 'focus' | 'focusable' | 'focused' | 'focusSearch' | 'getActionList' | 'getActions' | 'getBoundsInParent' | 'getBoundsInScreen' | 'getChild' | 'getChildCount' | 'getClass' | 'getClassName' | 'getCollectionInfo' | 'getCollectionItemInfo' | 'getContentDescription' | 'getDrawingOrder' | 'getError' | 'getExtras' | 'getHintText' | 'getInfo' | 'getInputType' | 'getLabeledBy' | 'getLabelFor' | 'getLiveRegion' | 'getMaxTextLength' | 'getMovementGranularities' | 'getPackageName' | 'getPaneTitle' | 'getParent' | 'getRangeInfo' | 'getRoleDescription' | 'getText' | 'getTextSelectionEnd' | 'getTextSelectionStart' | 'getTooltipText' | 'getTraversalAfter' | 'getTraversalBefore' | 'getViewIdResourceName' | 'getWindow' | 'getWindowId' | 'hashCode' | 'heading' | 'hierarchically' | 'hintText' | 'id' | 'importantForAccessibility' | 'indexInParent' | 'info' | 'inputType' | 'isAccessibilityFocused' | 'isCheckable' | 'isChecked' | 'isClickable' | 'isContentInvalid' | 'isContextClickable' | 'isDismissable' | 'isEditable' | 'isEnabled' | 'isFocusable' | 'isFocused' | 'isHeading' | 'isHierarchically' | 'isImportantForAccessibility' | 'isLongClickable' | 'isMultiLine' | 'isPassword' | 'isScreenReaderFocusable' | 'isScrollable' | 'isSelected' | 'isShowingHintText' | 'isVisibleToUser' | 'labeledBy' | 'labelFor' | 'liveRegion' | 'longClick' | 'longClickable' | 'maxTextLength' | 'movementGranularities' | 'mParentVirtualDescendantId' | 'multiLine' | 'notify' | 'notifyAll' | 'packageName' | 'paneTitle' | 'parent' | 'password' | 'paste' | 'performAction' | 'progress' | 'rangeInfo' | 'recycle' | 'refresh' | 'removeAction' | 'removeChild' | 'roleDescription' | 'row' | 'rowCount' | 'rowSpan' | 'screenReaderFocusable' | 'scrollable' | 'scrollBackward' | 'scrollDown' | 'scrollForward' | 'scrollLeft' | 'scrollRight' | 'scrollTo' | 'scrollUp' | 'select' | 'selected' | 'selection' | 'setAccessibilityFocused' | 'setBoundsInParent' | 'setBoundsInScreen' | 'setCanOpenPopup' | 'setCheckable' | 'setChecked' | 'setClassName' | 'setClickable' | 'setCollectionInfo' | 'setCollectionItemInfo' | 'setContentDescription' | 'setContentInvalid' | 'setContextClickable' | 'setDismissable' | 'setDrawingOrder' | 'setEditable' | 'setEnabled' | 'setError' | 'setFocusable' | 'setFocused' | 'setHeading' | 'setHintText' | 'setImportantForAccessibility' | 'setInputType' | 'setLabeledBy' | 'setLabelFor' | 'setLiveRegion' | 'setLongClickable' | 'setMaxTextLength' | 'setMovementGranularities' | 'setMultiLine' | 'setPackageName' | 'setPaneTitle' | 'setParent' | 'setPassword' | 'setProgress' | 'setRangeInfo' | 'setRoleDescription' | 'setScreenReaderFocusable' | 'setScrollable' | 'setSelected' | 'setSelection' | 'setShowingHintText' | 'setSource' | 'setText' | 'setTextSelection' | 'setTooltipText' | 'setTraversalAfter' | 'setTraversalBefore' | 'setViewIdResourceName' | 'setVisibleToUser' | 'show' | 'showingHintText' | 'source' | 'text' | 'textSelection' | 'textSelectionEnd' | 'textSelectionStart' | 'tooltipText' | 'toString' | 'traversalAfter' | 'traversalBefore' | 'unwrap' | 'viewIdResourceName' | 'visibleToUser' | 'wait' | 'window' | 'windowId';

    interface Locator {
        accessibilityFocused?: boolean;
        addFilter?: com.stardust.automator.filter.Filter;
        algorithm?: 'DFS' | 'BFS';
        bounds?: [Left, Top, Right, Bottom];
        boundsContains?: [Left, Top, Right, Bottom];
        boundsInside?: [Left, Top, Right, Bottom];
        checkable?: boolean;
        checked?: boolean;
        className?: Selector.ClassName | Selector.ClassNameAbbr | string;
        classNameContains?: string;
        classNameEndsWith?: string;
        classNameMatches?: string | RegExp;
        classNameStartsWith?: string;
        clickable?: boolean;
        column?: number;
        columnCount?: number;
        columnSpan?: number;
        contentInvalid?: boolean;
        contextClickable?: boolean;
        depth?: number;
        desc?: string;
        descContains?: string;
        descEndsWith?: string;
        descMatches?: string | RegExp;
        descStartsWith?: string;
        dismissable?: boolean;
        drawingOrder?: number;
        editable?: boolean;
        enabled?: boolean;
        filter?: com.stardust.automator.filter.BooleanFilter.BooleanSupplier | ((w: com.stardust.automator.UiObject) => boolean);
        find?: number;
        findAndReturnList?: [UiObject$, number];
        findOf?: [UiObject$, number];
        findOnce?: number;
        findOne?: number;
        findOneOf?: UiObject$;
        focusable?: boolean;
        focused?: boolean;
        id?: string;
        idContains?: string;
        idEndsWith?: string;
        idMatches?: string | RegExp;
        idStartsWith?: string;
        indexInParent?: number;
        longClickable?: boolean;
        multiLine?: boolean;
        packageName?: string;
        packageNameContains?: string;
        packageNameEndsWith?: string;
        packageNameMatches?: string | RegExp;
        packageNameStartsWith?: string;
        password?: boolean;
        row?: number;
        rowCount?: number;
        rowSpan?: number;
        scrollable?: boolean;
        scrollTo?: [X, Y];
        selected?: boolean;
        setProgress?: number;
        setSelection?: [X, Y];
        text?: string;
        textContains?: string;
        textEndsWith?: string;
        textMatches?: string | RegExp;
        textStartsWith?: string;
        visibleToUser?: boolean;
    }
}

declare function accessibilityFocus(): boolean;

declare function accessibilityFocused(b?: boolean): UiSelector$;

declare function addFilter(filter: com.stardust.automator.filter.Filter): UiSelector$;

declare function algorithm(algorithm: 'DFS' | 'BFS'): UiSelector$;

declare function bounds(l: number, t: number, r: number, b: number): UiSelector$;

declare function boundsContains(l: number, t: number, r: number, b: number): UiSelector$;

declare function boundsInside(l: number, t: number, r: number, b: number): UiSelector$;

declare function checkable(b?: boolean): UiSelector$;

declare function checked(b?: boolean): UiSelector$;

declare function className(className: Selector.ClassName | Selector.ClassNameAbbr | string): UiSelector$;

declare function classNameContains(str: string): UiSelector$;

declare function classNameEndsWith(suffix: string): UiSelector$;

declare function classNameMatches(regex: string | RegExp): UiSelector$;

declare function classNameStartsWith(prefix: string): UiSelector$;

declare function clearAccessibilityFocus(): boolean;

declare function clearFocus(): boolean;

declare function clickable(b?: boolean): UiSelector$;

declare function collapse(): boolean;

declare function column(d: number): UiSelector$;

declare function columnCount(d: number): UiSelector$;

declare function columnSpan(d: number): UiSelector$;

declare function contentInvalid(b?: boolean): UiSelector$;

declare function contextClick(): boolean;

declare function contextClickable(b?: boolean): UiSelector$;

declare function copy(): boolean;

declare function cut(): boolean;

declare function depth(d: number): UiSelector$;

declare function desc(desc: string): UiSelector$;

declare function descContains(str: string): UiSelector$;

declare function descEndsWith(suffix: string): UiSelector$;

declare function descMatches(regex: string | RegExp): UiSelector$;

declare function descStartsWith(prefix: string): UiSelector$;

declare function dismiss(): boolean;

declare function dismissable(b?: boolean): UiSelector$;

declare function drawingOrder(order: number): UiSelector$;

declare function editable(b?: boolean): UiSelector$;

declare function enabled(b?: boolean): UiSelector$;

declare function exists(): boolean;

declare function expand(): boolean;

declare function filter(filter: (w: com.stardust.automator.UiObject) => boolean): UiSelector$;

declare function filter(filter: com.stardust.automator.filter.BooleanFilter.BooleanSupplier): UiSelector$;

declare function find(max?: number): UiObjectCollection$;

declare function findAndReturnList(node: UiObject$, max: number): java.util.List<UiObject$>;

declare function findOf(node: UiObject$, max?: number): UiObjectCollection$;

declare function findOnce(index?: number): UiObject$;

declare function findOne(timeout?: number): UiObject$;

declare function findOneOf(node: UiObject$): UiObject$;

declare function focus(): boolean;

declare function focusable(b?: boolean): UiSelector$;

declare function focused(b?: boolean): UiSelector$;

declare function id(id: string): UiSelector$;

declare function idContains(str: string): UiSelector$;

declare function idEndsWith(suffix: string): UiSelector$;

declare function idMatches(regex: string | RegExp): UiSelector$;

declare function idStartsWith(prefix: string): UiSelector$;

declare function indexInParent(index: number): UiSelector$;

declare function longClickable(b?: boolean): UiSelector$;

declare function multiLine(b?: boolean): UiSelector$;

declare function packageName(packageName: string): UiSelector$;

declare function packageNameContains(str: string): UiSelector$;

declare function packageNameEndsWith(suffix: string): UiSelector$;

declare function packageNameMatches(regex: string | RegExp): UiSelector$;

declare function packageNameStartsWith(prefix: string): UiSelector$;

declare function password(b?: boolean): UiSelector$;

declare function paste(): boolean;

/**
 * @throws {TypeError} - Cannot call method "apply" of undefined
 */
declare function progress(): never;

declare function row(d: number): UiSelector$;

declare function rowCount(d: number): UiSelector$;

declare function rowSpan(d: number): UiSelector$;

/**
 * @throws {TypeError} - Cannot call method "apply" of undefined
 */
declare function selection(): never;

declare function scrollable(b?: boolean): UiSelector$;

declare function scrollBackward(): boolean;

declare function scrollForward(): boolean;

declare function scrollLeft(): boolean;

declare function scrollRight(): boolean;

declare function scrollTo(row: number, column: number): boolean;

declare function select(): boolean;

declare function selected(b?: boolean): UiSelector$;

declare function setProgress(value: number): boolean;

declare function setSelection(start: number, end: number): boolean;

declare function show(): boolean;

declare function text(text: string): UiSelector$;

declare function textContains(str: string): UiSelector$;

declare function textEndsWith(suffix: string): UiSelector$;

declare function textMatches(regex: string | RegExp): UiSelector$;

declare function textStartsWith(prefix: string): UiSelector$;

declare function untilFind(): UiObjectCollection$;

declare function untilFindOne(): UiObject$;

declare function visibleToUser(b?: boolean): UiSelector$;

declare function waitFor(): void;

declare type UiSelector$ = com.stardust.autojs.core.accessibility.UiSelector;

declare type UiObjectCollection$ = com.stardust.automator.UiObjectCollection;
declare module pl {
	export module openrnd {
		export module multilevellistview {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<pl.openrnd.multilevellistview.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module pl {
	export module openrnd {
		export module multilevellistview {
			export class ItemInfo extends java.lang.Object {
				public static class: java.lang.Class<pl.openrnd.multilevellistview.ItemInfo>;
				/**
				 * Constructs a new instance of the pl.openrnd.multilevellistview.ItemInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getLevel(): number;
					getLevelSize(): number;
					getIdxInLevel(): number;
					isExpanded(): boolean;
					isExpandable(): boolean;
				});
				public constructor();
				public getIdxInLevel(): number;
				public getLevel(): number;
				public isExpandable(): boolean;
				public getLevelSize(): number;
				public isExpanded(): boolean;
			}
		}
	}
}

declare module pl {
	export module openrnd {
		export module multilevellistview {
			export abstract class MultiLevelListAdapter extends java.lang.Object {
				public static class: java.lang.Class<pl.openrnd.multilevellistview.MultiLevelListAdapter>;
				public isExpandable(param0: any): boolean;
				public notifyDataSetChanged(): void;
				public getViewForObject(param0: any, param1: android.view.View, param2: pl.openrnd.multilevellistview.ItemInfo): android.view.View;
				public reloadData(): void;
				public setDataItems(dataItems: java.util.List<any>): void;
				public isInitiallyExpanded(object: any): boolean;
				public getSubObjects(param0: any): java.util.List<any>;
				public constructor();
			}
			export module MultiLevelListAdapter {
				export class ProxyAdapter extends android.widget.BaseAdapter {
					public static class: java.lang.Class<pl.openrnd.multilevellistview.MultiLevelListAdapter.ProxyAdapter>;
					public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					public getView(i: number, convertView: android.view.View, viewGroup: android.view.ViewGroup): android.view.View;
					public getCount(): number;
					public areAllItemsEnabled(): boolean;
					public isEnabled(position: number): boolean;
					public getItemId(i: number): number;
					public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
					public getItem(i: number): any;
					public isEnabled(param0: number): boolean;
				}
			}
		}
	}
}

declare module pl {
	export module openrnd {
		export module multilevellistview {
			export class MultiLevelListView extends android.widget.FrameLayout {
				public static class: java.lang.Class<pl.openrnd.multilevellistview.MultiLevelListView>;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public constructor(context: android.content.Context);
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public setAlwaysExpanded(alwaysExpanded: boolean): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public isAlwaysExpanded(): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public setAdapter(adapter: pl.openrnd.multilevellistview.MultiLevelListAdapter): void;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public getNestType(): pl.openrnd.multilevellistview.NestType;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public setOnItemClickListener(listener: pl.openrnd.multilevellistview.OnItemClickListener): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public setNestType(nestType: pl.openrnd.multilevellistview.NestType): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module MultiLevelListView {
				export class OnProxyItemClickListener extends java.lang.Object implements android.widget.AdapterView.OnItemClickListener {
					public static class: java.lang.Class<pl.openrnd.multilevellistview.MultiLevelListView.OnProxyItemClickListener>;
					public onItemClick(param0: android.widget.AdapterView<any>, param1: android.view.View, param2: number, param3: number): void;
					public onItemClick(adapterView: android.widget.AdapterView<any>, view: android.view.View, position: number, id: number): void;
				}
			}
		}
	}
}

declare module pl {
	export module openrnd {
		export module multilevellistview {
			export class NestType {
				public static class: java.lang.Class<pl.openrnd.multilevellistview.NestType>;
				public static SINGLE: pl.openrnd.multilevellistview.NestType;
				public static MULTIPLE: pl.openrnd.multilevellistview.NestType;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static fromValue(value: number): pl.openrnd.multilevellistview.NestType;
				public static valueOf(name: string): pl.openrnd.multilevellistview.NestType;
				public getValue(): number;
				public static values(): pl.openrnd.multilevellistview.NestType[];
			}
		}
	}
}

declare module pl {
	export module openrnd {
		export module multilevellistview {
			export class Node extends java.lang.Object {
				public static class: java.lang.Class<pl.openrnd.multilevellistview.Node>;
			}
		}
	}
}

declare module pl {
	export module openrnd {
		export module multilevellistview {
			export class NodeItemInfo extends java.lang.Object implements pl.openrnd.multilevellistview.ItemInfo {
				public static class: java.lang.Class<pl.openrnd.multilevellistview.NodeItemInfo>;
				public getIdxInLevel(): number;
				public constructor(node: pl.openrnd.multilevellistview.Node);
				public getLevel(): number;
				public isExpandable(): boolean;
				public getLevelSize(): number;
				public isExpanded(): boolean;
			}
		}
	}
}

declare module pl {
	export module openrnd {
		export module multilevellistview {
			export class OnItemClickListener extends java.lang.Object {
				public static class: java.lang.Class<pl.openrnd.multilevellistview.OnItemClickListener>;
				/**
				 * Constructs a new instance of the pl.openrnd.multilevellistview.OnItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onItemClicked(param0: pl.openrnd.multilevellistview.MultiLevelListView, param1: android.view.View, param2: any, param3: pl.openrnd.multilevellistview.ItemInfo): void;
					onGroupItemClicked(param0: pl.openrnd.multilevellistview.MultiLevelListView, param1: android.view.View, param2: any, param3: pl.openrnd.multilevellistview.ItemInfo): void;
				});
				public constructor();
				public onGroupItemClicked(param0: pl.openrnd.multilevellistview.MultiLevelListView, param1: android.view.View, param2: any, param3: pl.openrnd.multilevellistview.ItemInfo): void;
				public onItemClicked(param0: pl.openrnd.multilevellistview.MultiLevelListView, param1: android.view.View, param2: any, param3: pl.openrnd.multilevellistview.ItemInfo): void;
			}
		}
	}
}

//Generics information:


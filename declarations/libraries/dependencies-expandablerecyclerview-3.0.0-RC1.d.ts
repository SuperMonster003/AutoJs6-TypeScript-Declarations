/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module com {
	export module bignerdranch {
		export module expandablerecyclerview {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.bignerdranch.expandablerecyclerview.BuildConfig>;
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

declare module com {
	export module bignerdranch {
		export module expandablerecyclerview {
			export class ChildViewHolder<C>  extends android.support.v7.widget.RecyclerView.ViewHolder {
				public static class: java.lang.Class<com.bignerdranch.expandablerecyclerview.ChildViewHolder<any>>;
				public getParentAdapterPosition(): number;
				public constructor(itemView: android.view.View);
				public getChild(): any;
				public getChildAdapterPosition(): number;
			}
		}
	}
}

declare module com {
	export module bignerdranch {
		export module expandablerecyclerview {
			export abstract class ExpandableRecyclerAdapter<P, C, PVH, CVH>  extends android.support.v7.widget.RecyclerView.Adapter<android.support.v7.widget.RecyclerView.ViewHolder> {
				public static class: java.lang.Class<com.bignerdranch.expandablerecyclerview.ExpandableRecyclerAdapter<any,any,any,any>>;
				public static TYPE_PARENT: number;
				public static TYPE_CHILD: number;
				public static TYPE_FIRST_USER: number;
				public mFlatItemList: java.util.List<com.bignerdranch.expandablerecyclerview.model.ExpandableWrapper<any,any>>;
				public notifyChildInserted(parentPosition: number, childPosition: number): void;
				public expandAllParents(): void;
				public getParentList(): java.util.List<any>;
				public getChildViewType(parentPosition: number, childPosition: number): number;
				public notifyChildRangeChanged(parentPosition: number, childPositionStart: number, itemCount: number): void;
				public parentExpandedFromViewHolder(flatParentPosition: number): void;
				public collapseParent(parentPosition: number): void;
				public setParentList(parentList: java.util.List<any>, preserveExpansionState: boolean): void;
				public parentCollapsedFromViewHolder(flatParentPosition: number): void;
				public onCreateChildViewHolder(param0: android.view.ViewGroup, param1: number): any;
				public constructor(parentList: java.util.List<any>);
				public getItemCount(): number;
				public notifyChildRangeRemoved(parentPosition: number, childPositionStart: number, itemCount: number): void;
				public notifyParentMoved(fromParentPosition: number, toParentPosition: number): void;
				public getItemViewType(flatPosition: number): number;
				public collapseParent(parent: any): void;
				public expandParent(parentPosition: number): void;
				public notifyChildRemoved(parentPosition: number, childPosition: number): void;
				public notifyParentChanged(parentPosition: number): void;
				public expandParentRange(startParentPosition: number, parentCount: number): void;
				public notifyParentInserted(parentPosition: number): void;
				public notifyChildRangeInserted(parentPosition: number, childPositionStart: number, itemCount: number): void;
				public notifyParentRangeInserted(parentPositionStart: number, itemCount: number): void;
				public onDetachedFromRecyclerView(recyclerView: android.support.v7.widget.RecyclerView): void;
				public collapseAllParents(): void;
				public onCreateViewHolder(viewGroup: android.view.ViewGroup, viewType: number): android.support.v7.widget.RecyclerView.ViewHolder;
				public onBindViewHolder(holder: android.support.v7.widget.RecyclerView.ViewHolder, flatPosition: number): void;
				public notifyChildMoved(parentPosition: number, fromChildPosition: number, toChildPosition: number): void;
				public collapseParentRange(startParentPosition: number, parentCount: number): void;
				public notifyParentRangeRemoved(parentPositionStart: number, itemCount: number): void;
				public onCreateParentViewHolder(param0: android.view.ViewGroup, param1: number): any;
				public isParentViewType(viewType: number): boolean;
				public expandParent(parent: any): void;
				public notifyParentRangeChanged(parentPositionStart: number, itemCount: number): void;
				public getParentViewType(parentPosition: number): number;
				public onRestoreInstanceState(savedInstanceState: android.os.Bundle): void;
				public notifyChildChanged(parentPosition: number, childPosition: number): void;
				public onBindParentViewHolder(param0: any, param1: number, param2: any): void;
				public onSaveInstanceState(savedInstanceState: android.os.Bundle): void;
				public notifyParentRemoved(parentPosition: number): void;
				public onBindChildViewHolder(param0: any, param1: number, param2: number, param3: any): void;
				public onAttachedToRecyclerView(recyclerView: android.support.v7.widget.RecyclerView): void;
				public notifyParentDataSetChanged(preserveExpansionState: boolean): void;
				public setExpandCollapseListener(expandCollapseListener: com.bignerdranch.expandablerecyclerview.ExpandableRecyclerAdapter.ExpandCollapseListener): void;
			}
			export module ExpandableRecyclerAdapter {
				export class ExpandCollapseListener extends java.lang.Object {
					public static class: java.lang.Class<com.bignerdranch.expandablerecyclerview.ExpandableRecyclerAdapter.ExpandCollapseListener>;
					/**
					 * Constructs a new instance of the com.bignerdranch.expandablerecyclerview.ExpandableRecyclerAdapter$ExpandCollapseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onParentExpanded(param0: number): void;
						onParentCollapsed(param0: number): void;
					});
					public constructor();
					public onParentCollapsed(param0: number): void;
					public onParentExpanded(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module bignerdranch {
		export module expandablerecyclerview {
			export class ParentViewHolder<P, C>  extends android.support.v7.widget.RecyclerView.ViewHolder implements android.view.View.OnClickListener  {
				public static class: java.lang.Class<com.bignerdranch.expandablerecyclerview.ParentViewHolder<any,any>>;
				public shouldItemViewClickToggleExpansion(): boolean;
				public onClick(param0: android.view.View): void;
				public onClick(v: android.view.View): void;
				public collapseView(): void;
				public expandView(): void;
				public getParentAdapterPosition(): number;
				public constructor(itemView: android.view.View);
				public isExpanded(): boolean;
				public setExpanded(expanded: boolean): void;
				public getParent(): any;
				public setMainItemClickToExpand(): void;
				public onExpansionToggled(expanded: boolean): void;
			}
			export module ParentViewHolder {
				export class ParentViewHolderExpandCollapseListener extends java.lang.Object {
					public static class: java.lang.Class<com.bignerdranch.expandablerecyclerview.ParentViewHolder.ParentViewHolderExpandCollapseListener>;
					/**
					 * Constructs a new instance of the com.bignerdranch.expandablerecyclerview.ParentViewHolder$ParentViewHolderExpandCollapseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onParentExpanded(param0: number): void;
						onParentCollapsed(param0: number): void;
					});
					public constructor();
					public onParentCollapsed(param0: number): void;
					public onParentExpanded(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module bignerdranch {
		export module expandablerecyclerview {
			export module model {
				export class ExpandableWrapper<P, C>  extends java.lang.Object {
					public static class: java.lang.Class<com.bignerdranch.expandablerecyclerview.model.ExpandableWrapper<any,any>>;
					public equals(obj: any): boolean;
					public isExpanded(): boolean;
					public getChild(): C;
					public equals(o: any): boolean;
					public setExpanded(expanded: boolean): void;
					public getWrappedChildList(): java.util.List<com.bignerdranch.expandablerecyclerview.model.ExpandableWrapper<P,C>>;
					public getParent(): P;
					public isParent(): boolean;
					public constructor(parent: P);
					public setParent(parent: P): void;
					public constructor(child: C);
					public hashCode(): number;
					public isParentInitiallyExpanded(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bignerdranch {
		export module expandablerecyclerview {
			export module model {
				export class Parent<C>  extends java.lang.Object {
					public static class: java.lang.Class<com.bignerdranch.expandablerecyclerview.model.Parent<any>>;
					/**
					 * Constructs a new instance of the com.bignerdranch.expandablerecyclerview.model.Parent<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getChildList(): java.util.List<C>;
						isInitiallyExpanded(): boolean;
					});
					public constructor();
					public getChildList(): java.util.List<C>;
					public isInitiallyExpanded(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bignerdranch {
		export module expandablerecyclerview {
			export module model {
				export class SimpleParent<C>  extends com.bignerdranch.expandablerecyclerview.model.Parent<any> {
					public static class: java.lang.Class<com.bignerdranch.expandablerecyclerview.model.SimpleParent<any>>;
					public getChildList(): java.util.List<any>;
					public isInitiallyExpanded(): boolean;
					public setChildList(childList: java.util.List<any>): void;
					public constructor(childItemList: java.util.List<any>);
				}
			}
		}
	}
}

//Generics information:
//com.bignerdranch.expandablerecyclerview.ChildViewHolder:1
//com.bignerdranch.expandablerecyclerview.ExpandableRecyclerAdapter:4
//com.bignerdranch.expandablerecyclerview.ParentViewHolder:2
//com.bignerdranch.expandablerecyclerview.model.ExpandableWrapper:2
//com.bignerdranch.expandablerecyclerview.model.Parent:1
//com.bignerdranch.expandablerecyclerview.model.SimpleParent:1


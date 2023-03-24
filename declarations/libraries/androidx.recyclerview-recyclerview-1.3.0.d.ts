declare module androidx {
	export module recyclerview {
		export module widget {
			export class AdapterHelper extends java.lang.Object implements androidx.recyclerview.widget.OpReorderer.Callback {
				public static class: java.lang.Class<androidx.recyclerview.widget.AdapterHelper>;
				public obtainUpdateOp(cmd: number, positionStart: number, itemCount: number, payload: any): androidx.recyclerview.widget.AdapterHelper.UpdateOp;
				public applyPendingUpdatesToPosition(position: number): number;
				public recycleUpdateOp(op: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
				public recycleUpdateOp(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
				public obtainUpdateOp(param0: number, param1: number, param2: number, param3: any): androidx.recyclerview.widget.AdapterHelper.UpdateOp;
			}
			export module AdapterHelper {
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.AdapterHelper.Callback>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.AdapterHelper$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						findViewHolder(param0: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
						offsetPositionsForRemovingInvisible(param0: number, param1: number): void;
						offsetPositionsForRemovingLaidOutOrNewView(param0: number, param1: number): void;
						markViewHoldersUpdated(param0: number, param1: number, param2: any): void;
						onDispatchFirstPass(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
						onDispatchSecondPass(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
						offsetPositionsForAdd(param0: number, param1: number): void;
						offsetPositionsForMove(param0: number, param1: number): void;
					});
					public constructor();
					public offsetPositionsForAdd(param0: number, param1: number): void;
					public offsetPositionsForRemovingLaidOutOrNewView(param0: number, param1: number): void;
					public offsetPositionsForRemovingInvisible(param0: number, param1: number): void;
					public offsetPositionsForMove(param0: number, param1: number): void;
					public markViewHoldersUpdated(param0: number, param1: number, param2: any): void;
					public findViewHolder(param0: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public onDispatchSecondPass(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
					public onDispatchFirstPass(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
				}
				export class UpdateOp extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.AdapterHelper.UpdateOp>;
					public toString(): string;
					public equals(obj: any): boolean;
					public equals(o: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class AdapterListUpdateCallback extends java.lang.Object implements androidx.recyclerview.widget.ListUpdateCallback {
				public static class: java.lang.Class<androidx.recyclerview.widget.AdapterListUpdateCallback>;
				public onInserted(param0: number, param1: number): void;
				public constructor(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>);
				public onInserted(position: number, count: number): void;
				public onRemoved(position: number, count: number): void;
				public onChanged(position: number, count: number, payload: any): void;
				public onChanged(param0: number, param1: number, param2: any): void;
				public onMoved(param0: number, param1: number): void;
				public onRemoved(param0: number, param1: number): void;
				public onMoved(fromPosition: number, toPosition: number): void;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class AsyncDifferConfig<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.AsyncDifferConfig<any>>;
				public getDiffCallback(): androidx.recyclerview.widget.DiffUtil.ItemCallback<T>;
				public getBackgroundThreadExecutor(): java.util.concurrent.Executor;
				public getMainThreadExecutor(): java.util.concurrent.Executor;
			}
			export module AsyncDifferConfig {
				export class Builder<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.AsyncDifferConfig.Builder<any>>;
					public setBackgroundThreadExecutor(executor: java.util.concurrent.Executor): androidx.recyclerview.widget.AsyncDifferConfig.Builder<T>;
					public setMainThreadExecutor(executor: java.util.concurrent.Executor): androidx.recyclerview.widget.AsyncDifferConfig.Builder<T>;
					public build(): androidx.recyclerview.widget.AsyncDifferConfig<T>;
					public constructor(diffCallback: androidx.recyclerview.widget.DiffUtil.ItemCallback<T>);
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class AsyncListDiffer<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListDiffer<any>>;
				public constructor(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, diffCallback: androidx.recyclerview.widget.DiffUtil.ItemCallback<T>);
				public submitList(newList: java.util.List<T>, commitCallback: java.lang.Runnable): void;
				public getCurrentList(): java.util.List<T>;
				public constructor(listUpdateCallback: androidx.recyclerview.widget.ListUpdateCallback, config: androidx.recyclerview.widget.AsyncDifferConfig<T>);
				public addListListener(listener: androidx.recyclerview.widget.AsyncListDiffer.ListListener<T>): void;
				public removeListListener(listener: androidx.recyclerview.widget.AsyncListDiffer.ListListener<T>): void;
				public submitList(newList: java.util.List<T>): void;
			}
			export module AsyncListDiffer {
				export class ListListener<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListDiffer.ListListener<any>>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.AsyncListDiffer$ListListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCurrentListChanged(param0: java.util.List<T>, param1: java.util.List<T>): void;
					});
					public constructor();
					public onCurrentListChanged(param0: java.util.List<T>, param1: java.util.List<T>): void;
				}
				export class MainThreadExecutor extends java.lang.Object implements java.util.concurrent.Executor {
					public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListDiffer.MainThreadExecutor>;
					public execute(param0: java.lang.Runnable): void;
					public execute(command: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class AsyncListUtil<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListUtil<any>>;
				public constructor(klass: java.lang.Class<T>, tileSize: number, dataCallback: androidx.recyclerview.widget.AsyncListUtil.DataCallback<T>, viewCallback: androidx.recyclerview.widget.AsyncListUtil.ViewCallback);
				public onRangeChanged(): void;
				public refresh(): void;
				public getItem(position: number): T;
				public getItemCount(): number;
			}
			export module AsyncListUtil {
				export abstract class DataCallback<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListUtil.DataCallback<any>>;
					public recycleData(data: T[], itemCount: number): void;
					public refreshData(): number;
					public getMaxCachedTiles(): number;
					public constructor();
					public fillData(param0: T[], param1: number, param2: number): void;
				}
				export abstract class ViewCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.AsyncListUtil.ViewCallback>;
					public static HINT_SCROLL_NONE: number;
					public static HINT_SCROLL_DESC: number;
					public static HINT_SCROLL_ASC: number;
					public extendRangeInto(range: number[], outRange: number[], scrollHint: number): void;
					public constructor();
					public onItemLoaded(param0: number): void;
					public getItemRangeInto(param0: number[]): void;
					public onDataRefresh(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class BatchingListUpdateCallback extends java.lang.Object implements androidx.recyclerview.widget.ListUpdateCallback {
				public static class: java.lang.Class<androidx.recyclerview.widget.BatchingListUpdateCallback>;
				public onInserted(param0: number, param1: number): void;
				public onInserted(position: number, count: number): void;
				public onRemoved(position: number, count: number): void;
				public onChanged(position: number, count: number, payload: any): void;
				public onChanged(param0: number, param1: number, param2: any): void;
				public onMoved(param0: number, param1: number): void;
				public dispatchLastEvent(): void;
				public constructor(callback: androidx.recyclerview.widget.ListUpdateCallback);
				public onRemoved(param0: number, param1: number): void;
				public onMoved(fromPosition: number, toPosition: number): void;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ChildHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.ChildHelper>;
				public toString(): string;
			}
			export module ChildHelper {
				export class Bucket extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ChildHelper.Bucket>;
					public toString(): string;
				}
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ChildHelper.Callback>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.ChildHelper$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getChildCount(): number;
						addView(param0: android.view.View, param1: number): void;
						indexOfChild(param0: android.view.View): number;
						removeViewAt(param0: number): void;
						getChildAt(param0: number): android.view.View;
						removeAllViews(): void;
						getChildViewHolder(param0: android.view.View): androidx.recyclerview.widget.RecyclerView.ViewHolder;
						attachViewToParent(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
						detachViewFromParent(param0: number): void;
						onEnteredHiddenState(param0: android.view.View): void;
						onLeftHiddenState(param0: android.view.View): void;
					});
					public constructor();
					public removeViewAt(param0: number): void;
					public removeAllViews(): void;
					public indexOfChild(param0: android.view.View): number;
					public attachViewToParent(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
					public addView(param0: android.view.View, param1: number): void;
					public onEnteredHiddenState(param0: android.view.View): void;
					public getChildCount(): number;
					public detachViewFromParent(param0: number): void;
					public getChildAt(param0: number): android.view.View;
					public getChildViewHolder(param0: android.view.View): androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public onLeftHiddenState(param0: android.view.View): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ConcatAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
				public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapter>;
				public constructor(config: androidx.recyclerview.widget.ConcatAdapter.Config, adapters: java.util.List<any>);
				public onBindViewHolder(param0: any, param1: number): void;
				public getItemViewType(position: number): number;
				public onBindViewHolder(holder: any, position: number, payloads: java.util.List<any>): void;
				public constructor();
				public getItemCount(): number;
				public onBindViewHolder(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, position: number): void;
				public onViewRecycled(holder: any): void;
				public getWrappedAdapterAndPosition(globalPosition: number): android.util.Pair<androidx.recyclerview.widget.RecyclerView.Adapter<any>,java.lang.Integer>;
				public constructor(config: androidx.recyclerview.widget.ConcatAdapter.Config, ...adapters: androidx.recyclerview.widget.RecyclerView.Adapter<any>[]);
				public findRelativeAdapterPositionIn(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, localPosition: number): number;
				public onViewAttachedToWindow(holder: any): void;
				public onFailedToRecycleView(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public onAttachedToRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public onViewAttachedToWindow(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public removeAdapter(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): boolean;
				public onViewDetachedFromWindow(holder: any): void;
				public setStateRestorationPolicy(strategy: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy): void;
				public onDetachedFromRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public setHasStableIds(hasStableIds: boolean): void;
				public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): any;
				public addAdapter(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): boolean;
				public onViewDetachedFromWindow(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public constructor(adapters: java.util.List<any>);
				public addAdapter(index: number, adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): boolean;
				public getItemId(position: number): number;
				public onViewRecycled(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public onFailedToRecycleView(holder: any): boolean;
				public getAdapters(): java.util.List<any>;
				public constructor(...adapters: androidx.recyclerview.widget.RecyclerView.Adapter<any>[]);
			}
			export module ConcatAdapter {
				export class Config extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapter.Config>;
					public isolateViewTypes: boolean;
					public stableIdMode: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
					public static DEFAULT: androidx.recyclerview.widget.ConcatAdapter.Config;
				}
				export module Config {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapter.Config.Builder>;
						public setIsolateViewTypes(isolateViewTypes: boolean): androidx.recyclerview.widget.ConcatAdapter.Config.Builder;
						public constructor();
						public setStableIdMode(stableIdMode: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode): androidx.recyclerview.widget.ConcatAdapter.Config.Builder;
						public build(): androidx.recyclerview.widget.ConcatAdapter.Config;
					}
					export class StableIdMode {
						public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode>;
						public static NO_STABLE_IDS: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
						public static ISOLATED_STABLE_IDS: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
						public static SHARED_STABLE_IDS: androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
						public static values(): androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode[];
						public static valueOf(name: string): androidx.recyclerview.widget.ConcatAdapter.Config.StableIdMode;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ConcatAdapterController extends java.lang.Object implements androidx.recyclerview.widget.NestedAdapterWrapper.Callback {
				public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapterController>;
				public onChanged(wrapper: androidx.recyclerview.widget.NestedAdapterWrapper): void;
				public onItemRangeChanged(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper, positionStart: number, itemCount: number, payload: any): void;
				public onItemRangeMoved(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper, fromPosition: number, toPosition: number): void;
				public onItemRangeMoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
				public onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
				public getWrappedAdapterAndPosition(globalPosition: number): android.util.Pair<androidx.recyclerview.widget.RecyclerView.Adapter<any>,java.lang.Integer>;
				public getLocalAdapterPosition(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, globalPosition: number): number;
				public canRestoreState(): boolean;
				public onFailedToRecycleView(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public onItemRangeRemoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
				public onAttachedToRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public getItemId(globalPosition: number): number;
				public onViewAttachedToWindow(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public getBoundAdapter(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): androidx.recyclerview.widget.RecyclerView.Adapter<any>;
				public getItemViewType(globalPosition: number): number;
				public onDetachedFromRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public onItemRangeRemoved(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper, positionStart: number, itemCount: number): void;
				public onItemRangeInserted(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper, positionStart: number, itemCount: number): void;
				public getTotalCount(): number;
				public onViewDetachedFromWindow(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number, param3: any): void;
				public onStateRestorationPolicyChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
				public onStateRestorationPolicyChanged(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper): void;
				public hasStableIds(): boolean;
				public onViewRecycled(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public onChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
				public getCopyOfAdapters(): java.util.List<androidx.recyclerview.widget.RecyclerView.Adapter<any>>;
				public onCreateViewHolder(parent: android.view.ViewGroup, globalViewType: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public onItemRangeChanged(nestedAdapterWrapper: androidx.recyclerview.widget.NestedAdapterWrapper, positionStart: number, itemCount: number): void;
				public onItemRangeInserted(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
				public onBindViewHolder(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, globalPosition: number): void;
			}
			export module ConcatAdapterController {
				export class WrapperAndLocalPosition extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ConcatAdapterController.WrapperAndLocalPosition>;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class DefaultItemAnimator extends androidx.recyclerview.widget.SimpleItemAnimator {
				public static class: java.lang.Class<androidx.recyclerview.widget.DefaultItemAnimator>;
				public runPendingAnimations(): void;
				public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public animateRemove(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public animateAdd(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public endAnimations(): void;
				public isRunning(listener: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorFinishedListener): boolean;
				public animateChange(oldHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, newHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, preLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, postLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, payloads: java.util.List<any>): boolean;
				public animateRemove(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public animateMove(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, fromX: number, fromY: number, toX: number, toY: number): boolean;
				public endAnimation(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public constructor();
				public animateChange(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: number, param3: number, param4: number, param5: number): boolean;
				public isRunning(): boolean;
				public animateAdd(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public animateChange(oldHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, newHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, fromLeft: number, fromTop: number, toLeft: number, toTop: number): boolean;
				public animateMove(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number, param2: number, param3: number, param4: number): boolean;
				public endAnimation(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
			}
			export module DefaultItemAnimator {
				export class ChangeInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DefaultItemAnimator.ChangeInfo>;
					public oldHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public newHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public fromX: number;
					public fromY: number;
					public toX: number;
					public toY: number;
					public toString(): string;
				}
				export class MoveInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DefaultItemAnimator.MoveInfo>;
					public holder: androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public fromX: number;
					public fromY: number;
					public toX: number;
					public toY: number;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class DiffUtil extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil>;
				public static calculateDiff(cb: androidx.recyclerview.widget.DiffUtil.Callback): androidx.recyclerview.widget.DiffUtil.DiffResult;
				public static calculateDiff(cb: androidx.recyclerview.widget.DiffUtil.Callback, detectMoves: boolean): androidx.recyclerview.widget.DiffUtil.DiffResult;
			}
			export module DiffUtil {
				export abstract class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.Callback>;
					public getNewListSize(): number;
					public getChangePayload(oldItemPosition: number, newItemPosition: number): any;
					public areContentsTheSame(param0: number, param1: number): boolean;
					public constructor();
					public getOldListSize(): number;
					public areItemsTheSame(param0: number, param1: number): boolean;
				}
				export class CenteredArray extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.CenteredArray>;
					public fill(value: number): void;
				}
				export class Diagonal extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.Diagonal>;
					public x: number;
					public y: number;
					public size: number;
				}
				export class DiffResult extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.DiffResult>;
					public static NO_POSITION: number;
					public dispatchUpdatesTo(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
					public dispatchUpdatesTo(updateCallback: androidx.recyclerview.widget.ListUpdateCallback): void;
					public convertNewPositionToOld(newListPosition: number): number;
					public convertOldPositionToNew(oldListPosition: number): number;
				}
				export abstract class ItemCallback<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.ItemCallback<any>>;
					public areItemsTheSame(param0: T, param1: T): boolean;
					public constructor();
					public areContentsTheSame(param0: T, param1: T): boolean;
					public getChangePayload(oldItem: T, newItem: T): any;
				}
				export class PostponedUpdate extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.PostponedUpdate>;
				}
				export class Range extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.Range>;
					public constructor();
					public constructor(oldListStart: number, oldListEnd: number, newListStart: number, newListEnd: number);
				}
				export class Snake extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.DiffUtil.Snake>;
					public startX: number;
					public startY: number;
					public endX: number;
					public endY: number;
					public reverse: boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class DividerItemDecoration extends androidx.recyclerview.widget.RecyclerView.ItemDecoration {
				public static class: java.lang.Class<androidx.recyclerview.widget.DividerItemDecoration>;
				public static HORIZONTAL: number;
				public static VERTICAL: number;
				public getDrawable(): android.graphics.drawable.Drawable;
				public setOrientation(orientation: number): void;
				/** @deprecated */
				public onDraw(c: android.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
				public onDraw(c: android.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public setDrawable(drawable: android.graphics.drawable.Drawable): void;
				/** @deprecated */
				public getItemOffsets(outRect: android.graphics.Rect, itemPosition: number, parent: androidx.recyclerview.widget.RecyclerView): void;
				public getItemOffsets(outRect: android.graphics.Rect, view: android.view.View, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public constructor();
				public constructor(context: android.content.Context, orientation: number);
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class FastScroller extends androidx.recyclerview.widget.RecyclerView.ItemDecoration implements androidx.recyclerview.widget.RecyclerView.OnItemTouchListener {
				public static class: java.lang.Class<androidx.recyclerview.widget.FastScroller>;
				public onInterceptTouchEvent(recyclerView: androidx.recyclerview.widget.RecyclerView, ev: android.view.MotionEvent): boolean;
				public onInterceptTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: android.view.MotionEvent): boolean;
				public onTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: android.view.MotionEvent): void;
				public isDragging(): boolean;
				/** @deprecated */
				public onDrawOver(c: android.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
				public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
				public onTouchEvent(recyclerView: androidx.recyclerview.widget.RecyclerView, me: android.view.MotionEvent): void;
				public attachToRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public onDrawOver(c: android.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public onDrawOver(canvas: android.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public onRequestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public show(): void;
			}
			export module FastScroller {
				export class AnimatorListener extends android.animation.AnimatorListenerAdapter {
					public static class: java.lang.Class<androidx.recyclerview.widget.FastScroller.AnimatorListener>;
					public onAnimationPause(animation: android.animation.Animator): void;
					public onAnimationEnd(param0: android.animation.Animator): void;
					public onAnimationCancel(animation: android.animation.Animator): void;
					public onAnimationStart(animation: android.animation.Animator): void;
					public onAnimationCancel(param0: android.animation.Animator): void;
					public onAnimationRepeat(animation: android.animation.Animator): void;
					public onAnimationEnd(animation: android.animation.Animator): void;
					public onAnimationResume(param0: android.animation.Animator): void;
					public onAnimationResume(animation: android.animation.Animator): void;
					public onAnimationStart(param0: android.animation.Animator): void;
					public onAnimationRepeat(param0: android.animation.Animator): void;
					public onAnimationPause(param0: android.animation.Animator): void;
				}
				export class AnimatorUpdater extends java.lang.Object implements android.animation.ValueAnimator.AnimatorUpdateListener {
					public static class: java.lang.Class<androidx.recyclerview.widget.FastScroller.AnimatorUpdater>;
					public onAnimationUpdate(param0: android.animation.ValueAnimator): void;
					public onAnimationUpdate(valueAnimator: android.animation.ValueAnimator): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class GapWorker extends java.lang.Object implements java.lang.Runnable {
				public static class: java.lang.Class<androidx.recyclerview.widget.GapWorker>;
				public run(): void;
				public remove(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public add(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
			}
			export module GapWorker {
				export class LayoutPrefetchRegistryImpl extends java.lang.Object implements androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry {
					public static class: java.lang.Class<androidx.recyclerview.widget.GapWorker.LayoutPrefetchRegistryImpl>;
					public addPosition(layoutPosition: number, pixelDistance: number): void;
					public addPosition(param0: number, param1: number): void;
				}
				export class Task extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.GapWorker.Task>;
					public immediate: boolean;
					public viewVelocity: number;
					public distanceToItem: number;
					public view: androidx.recyclerview.widget.RecyclerView;
					public position: number;
					public clear(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class GridLayoutManager extends androidx.recyclerview.widget.LinearLayoutManager {
				public static class: java.lang.Class<androidx.recyclerview.widget.GridLayoutManager>;
				public static DEFAULT_SPAN_COUNT: number;
				public onLayoutCompleted(state: androidx.recyclerview.widget.RecyclerView.State): void;
				public constructor(context: android.content.Context, orientation: number, reverseLayout: boolean);
				public getRowCountForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public onItemsAdded(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
				public getSpanSizeLookup(): androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup;
				public getSpanCount(): number;
				public generateLayoutParams(lp: android.view.ViewGroup.LayoutParams): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public setSpanCount(spanCount: number): void;
				public setUsingSpansToEstimateScrollbarDimensions(useSpansToEstimateScrollBarDimensions: boolean): void;
				public onItemsMoved(recyclerView: androidx.recyclerview.widget.RecyclerView, from: number, to: number, itemCount: number): void;
				public constructor();
				public scrollVerticallyBy(dy: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public getColumnCountForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public onInitializeAccessibilityNodeInfo(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public constructor(context: android.content.Context, spanCount: number);
				public onInitializeAccessibilityNodeInfoForItem(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, host: android.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public computeVerticalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public computeVerticalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public computeScrollVectorForPosition(targetPosition: number): android.graphics.PointF;
				public onLayoutChildren(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public constructor(context: android.content.Context);
				public setSpanSizeLookup(spanSizeLookup: androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup): void;
				public scrollHorizontallyBy(dx: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public prepareForDrop(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;
				public onFocusSearchFailed(focused: android.view.View, direction: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): android.view.View;
				public supportsPredictiveItemAnimations(): boolean;
				public onItemsRemoved(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
				public setMeasuredDimension(childrenBounds: android.graphics.Rect, wSpec: number, hSpec: number): void;
				public computeHorizontalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public prepareForDrop(view: android.view.View, target: android.view.View, x: number, y: number): void;
				public isUsingSpansToEstimateScrollbarDimensions(): boolean;
				public onItemsChanged(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public generateLayoutParams(c: android.content.Context, attrs: android.util.AttributeSet): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public computeHorizontalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public constructor(context: android.content.Context, spanCount: number, orientation: number, reverseLayout: boolean);
				public computeScrollVectorForPosition(param0: number): android.graphics.PointF;
				public setStackFromEnd(stackFromEnd: boolean): void;
				public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number, payload: any): void;
				public checkLayoutParams(lp: androidx.recyclerview.widget.RecyclerView.LayoutParams): boolean;
				public setMeasuredDimension(widthSize: number, heightSize: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
			}
			export module GridLayoutManager {
				export class DefaultSpanSizeLookup extends androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup {
					public static class: java.lang.Class<androidx.recyclerview.widget.GridLayoutManager.DefaultSpanSizeLookup>;
					public constructor();
					public getSpanSize(param0: number): number;
					public getSpanSize(position: number): number;
					public getSpanIndex(position: number, spanCount: number): number;
				}
				export class LayoutParams extends androidx.recyclerview.widget.RecyclerView.LayoutParams {
					public static class: java.lang.Class<androidx.recyclerview.widget.GridLayoutManager.LayoutParams>;
					public static INVALID_SPAN_ID: number;
					public getSpanSize(): number;
					public constructor(source: android.view.ViewGroup.MarginLayoutParams);
					public constructor(c: android.content.Context, attrs: android.util.AttributeSet);
					public constructor(source: androidx.recyclerview.widget.RecyclerView.LayoutParams);
					public getSpanIndex(): number;
					public constructor(source: android.view.ViewGroup.LayoutParams);
					public constructor(width: number, height: number);
				}
				export abstract class SpanSizeLookup extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.GridLayoutManager.SpanSizeLookup>;
					public setSpanIndexCacheEnabled(cacheSpanIndices: boolean): void;
					public isSpanGroupIndexCacheEnabled(): boolean;
					public constructor();
					public setSpanGroupIndexCacheEnabled(cacheSpanGroupIndices: boolean): void;
					public getSpanSize(param0: number): number;
					public isSpanIndexCacheEnabled(): boolean;
					public getSpanGroupIndex(adapterPosition: number, spanCount: number): number;
					public invalidateSpanGroupIndexCache(): void;
					public getSpanIndex(position: number, spanCount: number): number;
					public invalidateSpanIndexCache(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ItemTouchHelper extends androidx.recyclerview.widget.RecyclerView.ItemDecoration implements androidx.recyclerview.widget.RecyclerView.OnChildAttachStateChangeListener {
				public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper>;
				public static UP: number;
				public static DOWN: number;
				public static LEFT: number;
				public static RIGHT: number;
				public static START: number;
				public static END: number;
				public static ACTION_STATE_IDLE: number;
				public static ACTION_STATE_SWIPE: number;
				public static ACTION_STATE_DRAG: number;
				public static ANIMATION_TYPE_SWIPE_SUCCESS: number;
				public static ANIMATION_TYPE_SWIPE_CANCEL: number;
				public static ANIMATION_TYPE_DRAG: number;
				public startSwipe(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public onChildViewDetachedFromWindow(param0: android.view.View): void;
				/** @deprecated */
				public getItemOffsets(outRect: android.graphics.Rect, itemPosition: number, parent: androidx.recyclerview.widget.RecyclerView): void;
				public constructor();
				public onChildViewAttachedToWindow(view: android.view.View): void;
				public onChildViewAttachedToWindow(param0: android.view.View): void;
				public startDrag(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				/** @deprecated */
				public onDrawOver(c: android.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
				/** @deprecated */
				public onDraw(c: android.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
				public onDraw(c: android.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public attachToRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public onDrawOver(c: android.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public onChildViewDetachedFromWindow(view: android.view.View): void;
				public getItemOffsets(outRect: android.graphics.Rect, view: android.view.View, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public constructor(callback: androidx.recyclerview.widget.ItemTouchHelper.Callback);
			}
			export module ItemTouchHelper {
				export abstract class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.Callback>;
					public static DEFAULT_DRAG_ANIMATION_DURATION: number;
					public static DEFAULT_SWIPE_ANIMATION_DURATION: number;
					public static getDefaultUIUtil(): androidx.recyclerview.widget.ItemTouchUIUtil;
					public getMovementFlags(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
					public isLongPressDragEnabled(): boolean;
					public static makeMovementFlags(dragFlags: number, swipeFlags: number): number;
					public canDropOver(recyclerView: androidx.recyclerview.widget.RecyclerView, current: androidx.recyclerview.widget.RecyclerView.ViewHolder, target: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
					public getAnimationDuration(recyclerView: androidx.recyclerview.widget.RecyclerView, animationType: number, animateDx: number, animateDy: number): number;
					public onChildDrawOver(c: android.graphics.Canvas, recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, dX: number, dY: number, actionState: number, isCurrentlyActive: boolean): void;
					public isItemViewSwipeEnabled(): boolean;
					public constructor();
					public static convertToRelativeDirection(flags: number, layoutDirection: number): number;
					public interpolateOutOfBoundsScroll(recyclerView: androidx.recyclerview.widget.RecyclerView, viewSize: number, viewSizeOutOfBounds: number, totalSize: number, msSinceStartScroll: number): number;
					public onChildDraw(c: android.graphics.Canvas, recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, dX: number, dY: number, actionState: number, isCurrentlyActive: boolean): void;
					public convertToAbsoluteDirection(flags: number, layoutDirection: number): number;
					public onSelectedChanged(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, actionState: number): void;
					public getSwipeEscapeVelocity(defaultValue: number): number;
					public getMoveThreshold(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
					public chooseDropTarget(selected: androidx.recyclerview.widget.RecyclerView.ViewHolder, dropTargets: java.util.List<androidx.recyclerview.widget.RecyclerView.ViewHolder>, curX: number, curY: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public getSwipeThreshold(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
					public onMove(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
					public onMoved(recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, fromPos: number, target: androidx.recyclerview.widget.RecyclerView.ViewHolder, toPos: number, x: number, y: number): void;
					public static makeFlag(actionState: number, directions: number): number;
					public getSwipeVelocityThreshold(defaultValue: number): number;
					public onSwiped(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
					public getBoundingBoxMargin(): number;
					public clearView(recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				}
				export class ItemTouchHelperGestureListener extends android.view.GestureDetector.SimpleOnGestureListener {
					public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.ItemTouchHelperGestureListener>;
					public onShowPress(e: android.view.MotionEvent): void;
					public onSingleTapConfirmed(e: android.view.MotionEvent): boolean;
					public onLongPress(e: android.view.MotionEvent): void;
					public onFling(e1: android.view.MotionEvent, e2: android.view.MotionEvent, velocityX: number, velocityY: number): boolean;
					public onDoubleTap(param0: android.view.MotionEvent): boolean;
					public onShowPress(param0: android.view.MotionEvent): void;
					public onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
					public onSingleTapConfirmed(param0: android.view.MotionEvent): boolean;
					public onDoubleTap(e: android.view.MotionEvent): boolean;
					public onContextClick(e: android.view.MotionEvent): boolean;
					public onScroll(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
					public onDown(param0: android.view.MotionEvent): boolean;
					public onDoubleTapEvent(param0: android.view.MotionEvent): boolean;
					public onSingleTapUp(e: android.view.MotionEvent): boolean;
					public onSingleTapUp(param0: android.view.MotionEvent): boolean;
					public onLongPress(param0: android.view.MotionEvent): void;
					public onContextClick(param0: android.view.MotionEvent): boolean;
					public onScroll(e1: android.view.MotionEvent, e2: android.view.MotionEvent, distanceX: number, distanceY: number): boolean;
					public onDown(e: android.view.MotionEvent): boolean;
					public onDoubleTapEvent(e: android.view.MotionEvent): boolean;
				}
				export class RecoverAnimation extends java.lang.Object implements android.animation.Animator.AnimatorListener {
					public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.RecoverAnimation>;
					public onAnimationCancel(animation: android.animation.Animator): void;
					public onAnimationCancel(param0: android.animation.Animator): void;
					public onAnimationEnd(animation: android.animation.Animator): void;
					public cancel(): void;
					public setFraction(fraction: number): void;
					public setDuration(duration: number): void;
					public start(): void;
					public onAnimationRepeat(param0: android.animation.Animator): void;
					public onAnimationEnd(param0: android.animation.Animator): void;
					public onAnimationStart(animation: android.animation.Animator): void;
					public onAnimationRepeat(animation: android.animation.Animator): void;
					public update(): void;
					public onAnimationStart(param0: android.animation.Animator): void;
				}
				export abstract class SimpleCallback extends androidx.recyclerview.widget.ItemTouchHelper.Callback {
					public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.SimpleCallback>;
					public getMovementFlags(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
					public constructor();
					public setDefaultDragDirs(defaultDragDirs: number): void;
					public setDefaultSwipeDirs(defaultSwipeDirs: number): void;
					public getSwipeDirs(recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
					public constructor(dragDirs: number, swipeDirs: number);
					public getMovementFlags(recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
					public getDragDirs(recyclerView: androidx.recyclerview.widget.RecyclerView, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): number;
				}
				export class ViewDropHandler extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchHelper.ViewDropHandler>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.ItemTouchHelper$ViewDropHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						prepareForDrop(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;
					});
					public constructor();
					public prepareForDrop(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ItemTouchUIUtil extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchUIUtil>;
				/**
				 * Constructs a new instance of the androidx.recyclerview.widget.ItemTouchUIUtil interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onDraw(param0: android.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: android.view.View, param3: number, param4: number, param5: number, param6: boolean): void;
					onDrawOver(param0: android.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: android.view.View, param3: number, param4: number, param5: number, param6: boolean): void;
					clearView(param0: android.view.View): void;
					onSelected(param0: android.view.View): void;
				});
				public constructor();
				public onDraw(param0: android.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: android.view.View, param3: number, param4: number, param5: number, param6: boolean): void;
				public clearView(param0: android.view.View): void;
				public onDrawOver(param0: android.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: android.view.View, param3: number, param4: number, param5: number, param6: boolean): void;
				public onSelected(param0: android.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ItemTouchUIUtilImpl extends java.lang.Object implements androidx.recyclerview.widget.ItemTouchUIUtil {
				public static class: java.lang.Class<androidx.recyclerview.widget.ItemTouchUIUtilImpl>;
				public onSelected(view: android.view.View): void;
				public onDraw(param0: android.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: android.view.View, param3: number, param4: number, param5: number, param6: boolean): void;
				public onDrawOver(c: android.graphics.Canvas, recyclerView: androidx.recyclerview.widget.RecyclerView, view: android.view.View, dX: number, dY: number, actionState: number, isCurrentlyActive: boolean): void;
				public clearView(view: android.view.View): void;
				public clearView(param0: android.view.View): void;
				public onDraw(c: android.graphics.Canvas, recyclerView: androidx.recyclerview.widget.RecyclerView, view: android.view.View, dX: number, dY: number, actionState: number, isCurrentlyActive: boolean): void;
				public onDrawOver(param0: android.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: android.view.View, param3: number, param4: number, param5: number, param6: boolean): void;
				public onSelected(param0: android.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class LayoutState extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.LayoutState>;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class LinearLayoutManager extends androidx.recyclerview.widget.RecyclerView.LayoutManager implements androidx.recyclerview.widget.ItemTouchHelper.ViewDropHandler, androidx.recyclerview.widget.RecyclerView.SmoothScroller.ScrollVectorProvider {
				public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager>;
				public static HORIZONTAL: number;
				public static VERTICAL: number;
				public static INVALID_OFFSET: number;
				public getReverseLayout(): boolean;
				public onInitializeAccessibilityEvent(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, event: android.view.accessibility.AccessibilityEvent): void;
				public assertNotInLayoutOrScroll(message: string): void;
				public constructor();
				public scrollVerticallyBy(dy: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public isSmoothScrollbarEnabled(): boolean;
				public canScrollHorizontally(): boolean;
				public isAutoMeasureEnabled(): boolean;
				public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public scrollToPositionWithOffset(position: number, offset: number): void;
				public computeVerticalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public computeScrollVectorForPosition(targetPosition: number): android.graphics.PointF;
				public canScrollVertically(): boolean;
				public onLayoutChildren(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public constructor(context: android.content.Context);
				public collectInitialPrefetchPositions(adapterItemCount: number, layoutPrefetchRegistry: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
				public computeHorizontalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public setRecycleChildrenOnDetach(recycleChildrenOnDetach: boolean): void;
				public collectAdjacentPrefetchPositions(dx: number, dy: number, state: androidx.recyclerview.widget.RecyclerView.State, layoutPrefetchRegistry: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
				public computeScrollVectorForPosition(param0: number): android.graphics.PointF;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onLayoutCompleted(state: androidx.recyclerview.widget.RecyclerView.State): void;
				public constructor(context: android.content.Context, orientation: number, reverseLayout: boolean);
				public scrollToPosition(position: number): void;
				public onRestoreInstanceState(state: android.os.Parcelable): void;
				public calculateExtraLayoutSpace(state: androidx.recyclerview.widget.RecyclerView.State, extraLayoutSpace: number[]): void;
				public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
				public findLastCompletelyVisibleItemPosition(): number;
				public getStackFromEnd(): boolean;
				public getOrientation(): number;
				/** @deprecated */
				public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView): void;
				public findLastVisibleItemPosition(): number;
				public setReverseLayout(reverseLayout: boolean): void;
				public setOrientation(orientation: number): void;
				public findViewByPosition(position: number): android.view.View;
				public setSmoothScrollbarEnabled(enabled: boolean): void;
				public getInitialPrefetchItemCount(): number;
				public computeVerticalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public smoothScrollToPosition(recyclerView: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State, position: number): void;
				public scrollHorizontallyBy(dx: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public computeHorizontalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public prepareForDrop(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;
				public computeVerticalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public onFocusSearchFailed(focused: android.view.View, direction: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): android.view.View;
				public supportsPredictiveItemAnimations(): boolean;
				public prepareForDrop(view: android.view.View, target: android.view.View, x: number, y: number): void;
				public findFirstVisibleItemPosition(): number;
				public computeHorizontalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
				/** @deprecated */
				public getExtraLayoutSpace(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public getRecycleChildrenOnDetach(): boolean;
				public findFirstCompletelyVisibleItemPosition(): number;
				public setStackFromEnd(stackFromEnd: boolean): void;
				public onSaveInstanceState(): android.os.Parcelable;
				public setInitialPrefetchItemCount(itemCount: number): void;
				public isLayoutRTL(): boolean;
				public onInitializeAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): void;
			}
			export module LinearLayoutManager {
				export class AnchorInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager.AnchorInfo>;
					public toString(): string;
					public assignFromViewAndKeepVisibleRect(child: android.view.View, position: number): void;
					public assignFromView(child: android.view.View, position: number): void;
				}
				export class LayoutChunkResult extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager.LayoutChunkResult>;
					public mConsumed: number;
					public mFinished: boolean;
					public mIgnoreConsumed: boolean;
					public mFocusable: boolean;
					public constructor();
				}
				export class LayoutState extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager.LayoutState>;
					public assignPositionFromScrapList(): void;
					public nextViewInLimitedList(ignore: android.view.View): android.view.View;
					public assignPositionFromScrapList(ignore: android.view.View): void;
				}
				export class SavedState extends java.lang.Object implements android.os.Parcelable {
					public static class: java.lang.Class<androidx.recyclerview.widget.LinearLayoutManager.SavedState>;
					public static CREATOR: android.os.Parcelable.Creator<androidx.recyclerview.widget.LinearLayoutManager.SavedState>;
					public constructor(other: androidx.recyclerview.widget.LinearLayoutManager.SavedState);
					public constructor();
					public describeContents(): number;
					public writeToParcel(dest: android.os.Parcel, flags: number): void;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class LinearSmoothScroller extends androidx.recyclerview.widget.RecyclerView.SmoothScroller {
				public static class: java.lang.Class<androidx.recyclerview.widget.LinearSmoothScroller>;
				public static SNAP_TO_START: number;
				public static SNAP_TO_END: number;
				public static SNAP_TO_ANY: number;
				public mLinearInterpolator: android.view.animation.LinearInterpolator;
				public mDecelerateInterpolator: android.view.animation.DecelerateInterpolator;
				public mTargetVector: android.graphics.PointF;
				public mInterimTargetDx: number;
				public mInterimTargetDy: number;
				public getHorizontalSnapPreference(): number;
				public calculateDyToMakeVisible(view: android.view.View, snapPreference: number): number;
				public constructor(context: android.content.Context);
				public getVerticalSnapPreference(): number;
				public onTargetFound(param0: android.view.View, param1: androidx.recyclerview.widget.RecyclerView.State, param2: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
				public calculateSpeedPerPixel(displayMetrics: android.util.DisplayMetrics): number;
				public calculateDxToMakeVisible(view: android.view.View, snapPreference: number): number;
				public constructor();
				public onSeekTargetStep(dx: number, dy: number, state: androidx.recyclerview.widget.RecyclerView.State, action: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
				public onStart(): void;
				public calculateTimeForDeceleration(dx: number): number;
				public onStop(): void;
				public onTargetFound(targetView: android.view.View, state: androidx.recyclerview.widget.RecyclerView.State, action: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
				public calculateTimeForScrolling(dx: number): number;
				public updateActionForInterimTarget(action: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
				public calculateDtToFit(viewStart: number, viewEnd: number, boxStart: number, boxEnd: number, snapPreference: number): number;
				public onSeekTargetStep(param0: number, param1: number, param2: androidx.recyclerview.widget.RecyclerView.State, param3: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class LinearSnapHelper extends androidx.recyclerview.widget.SnapHelper {
				public static class: java.lang.Class<androidx.recyclerview.widget.LinearSnapHelper>;
				public findSnapView(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager): android.view.View;
				public calculateDistanceToFinalSnap(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager, targetView: android.view.View): number[];
				public calculateDistanceToFinalSnap(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: android.view.View): number[];
				public findTargetSnapPosition(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: number, param2: number): number;
				public findSnapView(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): android.view.View;
				public constructor();
				public findTargetSnapPosition(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager, velocityX: number, velocityY: number): number;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export abstract class ListAdapter<T, VH>  extends androidx.recyclerview.widget.RecyclerView.Adapter<any> {
				public static class: java.lang.Class<androidx.recyclerview.widget.ListAdapter<any,any>>;
				public constructor(config: androidx.recyclerview.widget.AsyncDifferConfig<any>);
				public submitList(list: java.util.List<any>, commitCallback: java.lang.Runnable): void;
				public getCurrentList(): java.util.List<any>;
				public submitList(list: java.util.List<any>): void;
				public getItem(position: number): any;
				public onCurrentListChanged(previousList: java.util.List<any>, currentList: java.util.List<any>): void;
				public constructor(diffCallback: androidx.recyclerview.widget.DiffUtil.ItemCallback<any>);
				public constructor();
				public getItemCount(): number;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ListUpdateCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.ListUpdateCallback>;
				/**
				 * Constructs a new instance of the androidx.recyclerview.widget.ListUpdateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onInserted(param0: number, param1: number): void;
					onRemoved(param0: number, param1: number): void;
					onMoved(param0: number, param1: number): void;
					onChanged(param0: number, param1: number, param2: any): void;
				});
				public constructor();
				public onInserted(param0: number, param1: number): void;
				public onChanged(param0: number, param1: number, param2: any): void;
				public onMoved(param0: number, param1: number): void;
				public onRemoved(param0: number, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class MessageThreadUtil<T>  extends androidx.recyclerview.widget.ThreadUtil<any> {
				public static class: java.lang.Class<androidx.recyclerview.widget.MessageThreadUtil<any>>;
				public getBackgroundProxy(callback: androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<any>): androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<any>;
				public getMainThreadProxy(param0: androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<any>): androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<any>;
				public getMainThreadProxy(callback: androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<any>): androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<any>;
				public getBackgroundProxy(param0: androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<any>): androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<any>;
			}
			export module MessageThreadUtil {
				export class MessageQueue extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.MessageThreadUtil.MessageQueue>;
				}
				export class SyncQueueItem extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.MessageThreadUtil.SyncQueueItem>;
					public what: number;
					public arg1: number;
					public arg2: number;
					public arg3: number;
					public arg4: number;
					public arg5: number;
					public data: any;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class NestedAdapterWrapper extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.NestedAdapterWrapper>;
				public adapter: androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder>;
				public getItemId(localPosition: number): number;
			}
			export module NestedAdapterWrapper {
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.NestedAdapterWrapper.Callback>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.NestedAdapterWrapper$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
						onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
						onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number, param3: any): void;
						onItemRangeInserted(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
						onItemRangeRemoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
						onItemRangeMoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
						onStateRestorationPolicyChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
					});
					public constructor();
					public onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
					public onItemRangeRemoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
					public onItemRangeMoved(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
					public onStateRestorationPolicyChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
					public onItemRangeChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number, param3: any): void;
					public onChanged(param0: androidx.recyclerview.widget.NestedAdapterWrapper): void;
					public onItemRangeInserted(param0: androidx.recyclerview.widget.NestedAdapterWrapper, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class OpReorderer extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.OpReorderer>;
			}
			export module OpReorderer {
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.OpReorderer.Callback>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.OpReorderer$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						obtainUpdateOp(param0: number, param1: number, param2: number, param3: any): androidx.recyclerview.widget.AdapterHelper.UpdateOp;
						recycleUpdateOp(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
					});
					public constructor();
					public recycleUpdateOp(param0: androidx.recyclerview.widget.AdapterHelper.UpdateOp): void;
					public obtainUpdateOp(param0: number, param1: number, param2: number, param3: any): androidx.recyclerview.widget.AdapterHelper.UpdateOp;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export abstract class OrientationHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.OrientationHelper>;
				public mLayoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager;
				public static HORIZONTAL: number;
				public static VERTICAL: number;
				public getEnd(): number;
				public offsetChildren(param0: number): void;
				public getMode(): number;
				public static createOrientationHelper(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager, orientation: number): androidx.recyclerview.widget.OrientationHelper;
				public onLayoutComplete(): void;
				public getDecoratedMeasurementInOther(param0: android.view.View): number;
				public getTotalSpace(): number;
				public getTransformedEndWithDecoration(param0: android.view.View): number;
				public getDecoratedStart(param0: android.view.View): number;
				public getStartAfterPadding(): number;
				public offsetChild(param0: android.view.View, param1: number): void;
				public static createHorizontalHelper(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.OrientationHelper;
				public getLayoutManager(): androidx.recyclerview.widget.RecyclerView.LayoutManager;
				public static createVerticalHelper(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.OrientationHelper;
				public getEndPadding(): number;
				public getModeInOther(): number;
				public getDecoratedMeasurement(param0: android.view.View): number;
				public getEndAfterPadding(): number;
				public getDecoratedEnd(param0: android.view.View): number;
				public getTotalSpaceChange(): number;
				public getTransformedStartWithDecoration(param0: android.view.View): number;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class PagerSnapHelper extends androidx.recyclerview.widget.SnapHelper {
				public static class: java.lang.Class<androidx.recyclerview.widget.PagerSnapHelper>;
				public findSnapView(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager): android.view.View;
				public calculateDistanceToFinalSnap(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager, targetView: android.view.View): number[];
				public createScroller(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.RecyclerView.SmoothScroller;
				public calculateDistanceToFinalSnap(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: android.view.View): number[];
				public findSnapView(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): android.view.View;
				public findTargetSnapPosition(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: number, param2: number): number;
				public constructor();
				public findTargetSnapPosition(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager, velocityX: number, velocityY: number): number;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class RecyclerView extends android.view.ViewGroup implements androidx.core.view.ScrollingView, androidx.core.view.NestedScrollingChild2, androidx.core.view.NestedScrollingChild3 {
				public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView>;
				public static HORIZONTAL: number;
				public static VERTICAL: number;
				public static NO_POSITION: number;
				public static NO_ID: number;
				public static INVALID_TYPE: number;
				public static TOUCH_SLOP_DEFAULT: number;
				public static TOUCH_SLOP_PAGING: number;
				public static UNDEFINED_DURATION: number;
				public static SCROLL_STATE_IDLE: number;
				public static SCROLL_STATE_DRAGGING: number;
				public static SCROLL_STATE_SETTLING: number;
				public hasFixedSize(): boolean;
				public setHasFixedSize(hasFixedSize: boolean): void;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public setViewCacheExtension(extension: androidx.recyclerview.widget.RecyclerView.ViewCacheExtension): void;
				public getChildViewHolder(child: android.view.View): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public stopScroll(): void;
				public getChildAdapterPosition(child: android.view.View): number;
				/** @deprecated */
				public isLayoutFrozen(): boolean;
				public onTouchEvent(e: android.view.MotionEvent): boolean;
				public getPreserveFocusAfterLayout(): boolean;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public getCompatAccessibilityDelegate(): androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate;
				public dispatchRestoreInstanceState(container: android.util.SparseArray<android.os.Parcelable>): void;
				public getChildItemId(child: android.view.View): number;
				public stopNestedScroll(param0: number): void;
				public removeOnItemTouchListener(listener: androidx.recyclerview.widget.RecyclerView.OnItemTouchListener): void;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public generateLayoutParams(attrs: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
				public constructor(context: android.content.Context);
				public draw(c: android.graphics.Canvas): void;
				public getItemDecorationCount(): number;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: number[]): boolean;
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public addFocusables(views: java.util.ArrayList<android.view.View>, direction: number, focusableMode: number): void;
				public setLayoutManager(layout: androidx.recyclerview.widget.RecyclerView.LayoutManager): void;
				public drawChild(canvas: android.graphics.Canvas, child: android.view.View, drawingTime: number): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public smoothScrollBy(dx: number, dy: number, interpolator: android.view.animation.Interpolator): void;
				public isTextDirectionResolved(): boolean;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[]): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public setLayoutTransition(transition: android.animation.LayoutTransition): void;
				public draw(canvas: android.graphics.Canvas): void;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public scrollBy(x: number, y: number): void;
				public computeHorizontalScrollOffset(): number;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public getLayoutManager(): androidx.recyclerview.widget.RecyclerView.LayoutManager;
				public suppressLayout(suppress: boolean): void;
				public dispatchNestedPreFling(velocityX: number, velocityY: number): boolean;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[], param5: number, param6: number[]): void;
				public stopNestedScroll(type: number): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				public smoothScrollBy(dx: number, dy: number): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public dispatchNestedPreFling(param0: number, param1: number): boolean;
				public addView(child: android.view.View, index: number): void;
				public getChildLayoutPosition(child: android.view.View): number;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public findViewHolderForItemId(id: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public onStopNestedScroll(child: android.view.View): void;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
				public getDecoratedBoundsWithMargins(view: android.view.View, outBounds: android.graphics.Rect): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public setAccessibilityDelegateCompat(accessibilityDelegate: androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public scrollTo(x: number, y: number): void;
				public computeHorizontalScrollRange(): number;
				public requestFitSystemWindows(): void;
				public hasPendingAdapterUpdates(): boolean;
				public onScrolled(dx: number, dy: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public findViewHolderForAdapterPosition(position: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public getParent(): android.view.ViewParent;
				public removeItemDecoration(decor: androidx.recyclerview.widget.RecyclerView.ItemDecoration): void;
				public getRecycledViewPool(): androidx.recyclerview.widget.RecyclerView.RecycledViewPool;
				/** @deprecated */
				public setLayoutFrozen(frozen: boolean): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public getClipToPadding(): boolean;
				public nestedScrollBy(x: number, y: number): void;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public requestTransparentRegion(param0: android.view.View): void;
				public setAdapter(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
				public startNestedScroll(param0: number): boolean;
				public computeVerticalScrollExtent(): number;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onTouchEvent(event: android.view.MotionEvent): boolean;
				public getBaseline(): number;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public getItemDecorationAt(index: number): androidx.recyclerview.widget.RecyclerView.ItemDecoration;
				public focusableViewAvailable(v: android.view.View): void;
				public startNestedScroll(param0: number, param1: number): boolean;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public onRestoreInstanceState(state: android.os.Parcelable): void;
				public canResolveTextAlignment(): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public setNestedScrollingEnabled(param0: boolean): void;
				public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
				public addOnItemTouchListener(listener: androidx.recyclerview.widget.RecyclerView.OnItemTouchListener): void;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public generateLayoutParams(p: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
				public findContainingItemView(view: android.view.View): android.view.View;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public isAttachedToWindow(): boolean;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public addOnChildAttachStateChangeListener(listener: androidx.recyclerview.widget.RecyclerView.OnChildAttachStateChangeListener): void;
				public setPreserveFocusAfterLayout(preserveFocusAfterLayout: boolean): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public onChildAttachedToWindow(child: android.view.View): void;
				public getChildDrawingOrder(childCount: number, i: number): number;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public onRequestFocusInDescendants(direction: number, previouslyFocusedRect: android.graphics.Rect): boolean;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public isComputingLayout(): boolean;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public hasNestedScrollingParent(): boolean;
				public onSaveInstanceState(): android.os.Parcelable;
				public clearOnScrollListeners(): void;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: number[], type: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public setNestedScrollingEnabled(enabled: boolean): void;
				public smoothScrollToPosition(position: number): void;
				/** @deprecated */
				public findViewHolderForPosition(position: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[]): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public startNestedScroll(axes: number, type: number): boolean;
				public setChildDrawingOrderCallback(childDrawingOrderCallback: androidx.recyclerview.widget.RecyclerView.ChildDrawingOrderCallback): void;
				public getTextDirection(): number;
				public removeItemDecorationAt(index: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public swapAdapter(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, removeAndRecycleExistingViews: boolean): void;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public onInterceptTouchEvent(ev: android.view.MotionEvent): boolean;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public isLayoutSuppressed(): boolean;
				public setRecycledViewPool(pool: androidx.recyclerview.widget.RecyclerView.RecycledViewPool): void;
				public getScrollState(): number;
				public dispatchNestedPreScroll(dx: number, dy: number, consumed: number[], offsetInWindow: number[], type: number): boolean;
				public onDraw(canvas: android.graphics.Canvas): void;
				public getAdapter(): androidx.recyclerview.widget.RecyclerView.Adapter<any>;
				public addItemDecoration(decor: androidx.recyclerview.widget.RecyclerView.ItemDecoration): void;
				public dispatchNestedPreScroll(dx: number, dy: number, consumed: number[], offsetInWindow: number[]): boolean;
				public computeHorizontalScrollExtent(): number;
				public setClipToPadding(clipToPadding: boolean): void;
				/** @deprecated */
				public setRecyclerListener(listener: androidx.recyclerview.widget.RecyclerView.RecyclerListener): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: number[], type: number): boolean;
				public computeVerticalScrollRange(): number;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public dispatchNestedFling(velocityX: number, velocityY: number, consumed: boolean): boolean;
				public isLayoutDirectionResolved(): boolean;
				public findViewHolderForLayoutPosition(position: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public onInterceptTouchEvent(e: android.view.MotionEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				/** @deprecated */
				public setLayoutTransition(transition: android.animation.LayoutTransition): void;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[], param5: number): boolean;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public onDraw(c: android.graphics.Canvas): void;
				public hasNestedScrollingParent(type: number): boolean;
				public addFocusables(views: java.util.ArrayList<android.view.View>, direction: number): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public childDrawableStateChanged(child: android.view.View): void;
				public clearOnChildAttachStateChangeListeners(): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[], param4: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public setEdgeEffectFactory(edgeEffectFactory: androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory): void;
				public addView(child: android.view.View): void;
				public bringChildToFront(param0: android.view.View): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public findContainingViewHolder(view: android.view.View): androidx.recyclerview.widget.RecyclerView.ViewHolder;
				public removeDetachedView(child: android.view.View, animate: boolean): void;
				public startNestedScroll(axes: number): boolean;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public stopNestedScroll(): void;
				public setOnFlingListener(onFlingListener: androidx.recyclerview.widget.RecyclerView.OnFlingListener): void;
				public requestTransparentRegion(child: android.view.View): void;
				public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
				public onAttachedToWindow(): void;
				public isNestedScrollingEnabled(): boolean;
				public clearChildFocus(param0: android.view.View): void;
				public dispatchSaveInstanceState(container: android.util.SparseArray<android.os.Parcelable>): void;
				public computeVerticalScrollOffset(): number;
				public getItemAnimator(): androidx.recyclerview.widget.RecyclerView.ItemAnimator;
				public getMaxFlingVelocity(): number;
				public removeOnScrollListener(listener: androidx.recyclerview.widget.RecyclerView.OnScrollListener): void;
				public removeRecyclerListener(listener: androidx.recyclerview.widget.RecyclerView.RecyclerListener): void;
				public isAnimating(): boolean;
				public getOnFlingListener(): androidx.recyclerview.widget.RecyclerView.OnFlingListener;
				public checkLayoutParams(p: android.view.ViewGroup.LayoutParams): boolean;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public addRecyclerListener(listener: androidx.recyclerview.widget.RecyclerView.RecyclerListener): void;
				public addOnScrollListener(listener: androidx.recyclerview.widget.RecyclerView.OnScrollListener): void;
				public recomputeViewAttributes(child: android.view.View): void;
				public setScrollingTouchSlop(slopConstant: number): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public onChildDetachedFromWindow(child: android.view.View): void;
				public getTextAlignment(): number;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public smoothScrollBy(dx: number, dy: number, interpolator: android.view.animation.Interpolator, duration: number): void;
				public setItemViewCacheSize(size: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
				public onScrollStateChanged(state: number): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public onDetachedFromWindow(): void;
				public getMinFlingVelocity(): number;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public offsetChildrenHorizontal(dx: number): void;
				public fling(velocityX: number, velocityY: number): boolean;
				public scrollToPosition(position: number): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public onGenericMotionEvent(event: android.view.MotionEvent): boolean;
				public removeOnChildAttachStateChangeListener(listener: androidx.recyclerview.widget.RecyclerView.OnChildAttachStateChangeListener): void;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public childDrawableStateChanged(param0: android.view.View): void;
				public findChildViewUnder(x: number, y: number): android.view.View;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onMeasure(widthSpec: number, heightSpec: number): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public getAccessibilityClassName(): string;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public onStopNestedScroll(param0: android.view.View): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public invalidateItemDecorations(): void;
				public addItemDecoration(decor: androidx.recyclerview.widget.RecyclerView.ItemDecoration, index: number): void;
				public requestChildRectangleOnScreen(child: android.view.View, rect: android.graphics.Rect, immediate: boolean): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public hasNestedScrollingParent(param0: number): boolean;
				/** @deprecated */
				public setOnScrollListener(listener: androidx.recyclerview.widget.RecyclerView.OnScrollListener): void;
				public setItemAnimator(animator: androidx.recyclerview.widget.RecyclerView.ItemAnimator): void;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				/** @deprecated */
				public getChildPosition(child: android.view.View): number;
				public getEdgeEffectFactory(): androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory;
				public offsetChildrenVertical(dy: number): void;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module RecyclerView {
				export abstract class Adapter<VH>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.Adapter<any>>;
					public notifyItemRangeInserted(positionStart: number, itemCount: number): void;
					public createViewHolder(parent: android.view.ViewGroup, viewType: number): VH;
					public notifyItemChanged(position: number, payload: any): void;
					public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): VH;
					public bindViewHolder(holder: VH, position: number): void;
					public notifyDataSetChanged(): void;
					public findRelativeAdapterPositionIn(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, localPosition: number): number;
					public setHasStableIds(hasStableIds: boolean): void;
					public getStateRestorationPolicy(): androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
					public constructor();
					public onAttachedToRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
					public hasObservers(): boolean;
					public onBindViewHolder(holder: VH, position: number, payloads: java.util.List<any>): void;
					public notifyItemChanged(position: number): void;
					public onViewDetachedFromWindow(holder: VH): void;
					public onBindViewHolder(param0: VH, param1: number): void;
					public getItemViewType(position: number): number;
					public notifyItemRangeChanged(positionStart: number, itemCount: number): void;
					public notifyItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
					public notifyItemInserted(position: number): void;
					public onDetachedFromRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
					public notifyItemRangeRemoved(positionStart: number, itemCount: number): void;
					public getItemId(position: number): number;
					public notifyItemRemoved(position: number): void;
					public hasStableIds(): boolean;
					public onViewRecycled(holder: VH): void;
					public onViewAttachedToWindow(holder: VH): void;
					public setStateRestorationPolicy(strategy: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy): void;
					public unregisterAdapterDataObserver(observer: androidx.recyclerview.widget.RecyclerView.AdapterDataObserver): void;
					public getItemCount(): number;
					public onFailedToRecycleView(holder: VH): boolean;
					public notifyItemMoved(fromPosition: number, toPosition: number): void;
					public registerAdapterDataObserver(observer: androidx.recyclerview.widget.RecyclerView.AdapterDataObserver): void;
				}
				export module Adapter {
					export class StateRestorationPolicy {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy>;
						public static ALLOW: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
						public static PREVENT_WHEN_EMPTY: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
						public static PREVENT: androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
						public static values(): androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): androidx.recyclerview.widget.RecyclerView.Adapter.StateRestorationPolicy;
					}
				}
				export class AdapterDataObservable extends android.database.Observable<androidx.recyclerview.widget.RecyclerView.AdapterDataObserver> {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.AdapterDataObservable>;
					public notifyItemRangeInserted(positionStart: number, itemCount: number): void;
					public notifyStateRestorationPolicyChanged(): void;
					public notifyChanged(): void;
					public notifyItemRangeChanged(positionStart: number, itemCount: number): void;
					public notifyItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
					public notifyItemMoved(fromPosition: number, toPosition: number): void;
					public hasObservers(): boolean;
					public notifyItemRangeRemoved(positionStart: number, itemCount: number): void;
				}
				export abstract class AdapterDataObserver extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.AdapterDataObserver>;
					public onChanged(): void;
					public onItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
					public onItemRangeRemoved(positionStart: number, itemCount: number): void;
					public constructor();
					public onStateRestorationPolicyChanged(): void;
					public onItemRangeInserted(positionStart: number, itemCount: number): void;
					public onItemRangeChanged(positionStart: number, itemCount: number): void;
					public onItemRangeMoved(fromPosition: number, toPosition: number, itemCount: number): void;
				}
				export class ChildDrawingOrderCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ChildDrawingOrderCallback>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$ChildDrawingOrderCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onGetChildDrawingOrder(param0: number, param1: number): number;
					});
					public constructor();
					public onGetChildDrawingOrder(param0: number, param1: number): number;
				}
				export class EdgeEffectFactory extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory>;
					public static DIRECTION_LEFT: number;
					public static DIRECTION_TOP: number;
					public static DIRECTION_RIGHT: number;
					public static DIRECTION_BOTTOM: number;
					public constructor();
					public createEdgeEffect(view: androidx.recyclerview.widget.RecyclerView, direction: number): android.widget.EdgeEffect;
				}
				export module EdgeEffectFactory {
					export class EdgeDirection extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory.EdgeDirection>;
						/**
						 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$EdgeEffectFactory$EdgeDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
				export abstract class ItemAnimator extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator>;
					public static FLAG_CHANGED: number;
					public static FLAG_REMOVED: number;
					public static FLAG_INVALIDATED: number;
					public static FLAG_MOVED: number;
					public static FLAG_APPEARED_IN_PRE_LAYOUT: number;
					public recordPostLayoutInformation(state: androidx.recyclerview.widget.RecyclerView.State, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
					public endAnimation(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					public dispatchAnimationsFinished(): void;
					public animatePersistence(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
					public setRemoveDuration(removeDuration: number): void;
					public dispatchAnimationFinished(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					public getRemoveDuration(): number;
					public dispatchAnimationStarted(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, payloads: java.util.List<any>): boolean;
					public setChangeDuration(changeDuration: number): void;
					public constructor();
					public recordPreLayoutInformation(state: androidx.recyclerview.widget.RecyclerView.State, viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, changeFlags: number, payloads: java.util.List<any>): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
					public setMoveDuration(moveDuration: number): void;
					public obtainHolderInfo(): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
					public endAnimations(): void;
					public getAddDuration(): number;
					public runPendingAnimations(): void;
					public onAnimationStarted(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					public setAddDuration(addDuration: number): void;
					public onAnimationFinished(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					public animateDisappearance(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
					public isRunning(): boolean;
					public getChangeDuration(): number;
					public animateAppearance(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
					public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
					public isRunning(listener: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorFinishedListener): boolean;
					public getMoveDuration(): number;
					public animateChange(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param3: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				}
				export module ItemAnimator {
					export class AdapterChanges extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator.AdapterChanges>;
						/**
						 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$ItemAnimator$AdapterChanges interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
					export class ItemAnimatorFinishedListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorFinishedListener>;
						/**
						 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$ItemAnimator$ItemAnimatorFinishedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAnimationsFinished(): void;
						});
						public constructor();
						public onAnimationsFinished(): void;
					}
					export class ItemAnimatorListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorListener>;
						/**
						 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$ItemAnimator$ItemAnimatorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAnimationFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
						});
						public constructor();
						public onAnimationFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					}
					export class ItemHolderInfo extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo>;
						public left: number;
						public top: number;
						public right: number;
						public bottom: number;
						public changeFlags: number;
						public constructor();
						public setFrom(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
						public setFrom(holder: androidx.recyclerview.widget.RecyclerView.ViewHolder, flags: number): androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
					}
				}
				export class ItemAnimatorRestoreListener extends java.lang.Object implements androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemAnimatorListener {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemAnimatorRestoreListener>;
					public onAnimationFinished(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					public onAnimationFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				}
				export abstract class ItemDecoration extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ItemDecoration>;
					/** @deprecated */
					public onDraw(c: android.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
					/** @deprecated */
					public getItemOffsets(outRect: android.graphics.Rect, itemPosition: number, parent: androidx.recyclerview.widget.RecyclerView): void;
					public getItemOffsets(outRect: android.graphics.Rect, view: android.view.View, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
					public constructor();
					public onDraw(c: android.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
					/** @deprecated */
					public onDrawOver(c: android.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView): void;
					public onDrawOver(c: android.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				}
				export abstract class LayoutManager extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.LayoutManager>;
					public isAutoMeasureEnabled(): boolean;
					public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
					public onFocusSearchFailed(focused: android.view.View, direction: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): android.view.View;
					public getMinimumWidth(): number;
					public onItemsMoved(recyclerView: androidx.recyclerview.widget.RecyclerView, from: number, to: number, itemCount: number): void;
					public supportsPredictiveItemAnimations(): boolean;
					/** @deprecated */
					public onRequestChildFocus(parent: androidx.recyclerview.widget.RecyclerView, child: android.view.View, focused: android.view.View): boolean;
					public setItemPrefetchEnabled(enabled: boolean): void;
					public removeView(child: android.view.View): void;
					public addDisappearingView(child: android.view.View): void;
					public getDecoratedBoundsWithMargins(view: android.view.View, outBounds: android.graphics.Rect): void;
					public onAttachedToWindow(view: androidx.recyclerview.widget.RecyclerView): void;
					public offsetChildrenHorizontal(dx: number): void;
					public setMeasuredDimension(widthSize: number, heightSize: number): void;
					public constructor();
					public onMeasure(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, widthSpec: number, heightSpec: number): void;
					public getWidthMode(): number;
					public getTransformedBoundingBox(child: android.view.View, includeDecorInsets: boolean, out: android.graphics.Rect): void;
					public getMinimumHeight(): number;
					public detachAndScrapAttachedViews(recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
					public getPaddingTop(): number;
					public detachViewAt(index: number): void;
					public layoutDecorated(child: android.view.View, left: number, top: number, right: number, bottom: number): void;
					public performAccessibilityAction(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, action: number, args: android.os.Bundle): boolean;
					public findContainingItemView(view: android.view.View): android.view.View;
					public getHeightMode(): number;
					public canScrollVertically(): boolean;
					public addView(child: android.view.View, index: number): void;
					public getHeight(): number;
					public getLayoutDirection(): number;
					public getPaddingBottom(): number;
					public endAnimation(view: android.view.View): void;
					public computeHorizontalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public getRowCountForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
					public getFocusedChild(): android.view.View;
					public removeAndRecycleView(child: android.view.View, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
					public computeHorizontalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public setMeasuredDimension(childrenBounds: android.graphics.Rect, wSpec: number, hSpec: number): void;
					public scrollHorizontallyBy(dx: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
					public computeHorizontalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public detachAndScrapViewAt(index: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
					public computeVerticalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public onItemsRemoved(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
					public offsetChildrenVertical(dy: number): void;
					public ignoreView(view: android.view.View): void;
					public getDecoratedTop(child: android.view.View): number;
					public getTopDecorationHeight(child: android.view.View): number;
					public stopIgnoringView(view: android.view.View): void;
					public moveView(fromIndex: number, toIndex: number): void;
					public detachView(child: android.view.View): void;
					public findViewByPosition(position: number): android.view.View;
					public setMeasurementCacheEnabled(measurementCacheEnabled: boolean): void;
					public onInterceptFocusSearch(focused: android.view.View, direction: number): android.view.View;
					public getBottomDecorationHeight(child: android.view.View): number;
					public checkLayoutParams(lp: androidx.recyclerview.widget.RecyclerView.LayoutParams): boolean;
					public calculateItemDecorationsForChild(child: android.view.View, outRect: android.graphics.Rect): void;
					public requestLayout(): void;
					public startSmoothScroll(smoothScroller: androidx.recyclerview.widget.RecyclerView.SmoothScroller): void;
					public smoothScrollToPosition(recyclerView: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State, position: number): void;
					public getClipToPadding(): boolean;
					public requestSimpleAnimationsInNextLayout(): void;
					public requestChildRectangleOnScreen(parent: androidx.recyclerview.widget.RecyclerView, child: android.view.View, rect: android.graphics.Rect, immediate: boolean, focusedChildVisible: boolean): boolean;
					public getRightDecorationWidth(child: android.view.View): number;
					public getWidth(): number;
					public static getChildMeasureSpec(parentSize: number, parentMode: number, padding: number, childDimension: number, canScroll: boolean): number;
					public detachAndScrapView(child: android.view.View, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
					public measureChildWithMargins(child: android.view.View, widthUsed: number, heightUsed: number): void;
					public computeVerticalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public onInitializeAccessibilityEvent(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, event: android.view.accessibility.AccessibilityEvent): void;
					public generateLayoutParams(c: android.content.Context, attrs: android.util.AttributeSet): androidx.recyclerview.widget.RecyclerView.LayoutParams;
					public measureChild(child: android.view.View, widthUsed: number, heightUsed: number): void;
					public getChildCount(): number;
					public performAccessibilityActionForItem(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, view: android.view.View, action: number, args: android.os.Bundle): boolean;
					public collectInitialPrefetchPositions(adapterItemCount: number, layoutPrefetchRegistry: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
					public attachView(child: android.view.View, index: number): void;
					public scrollVerticallyBy(dy: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
					public isLayoutHierarchical(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): boolean;
					public onItemsChanged(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
					public isViewPartiallyVisible(child: android.view.View, completelyVisible: boolean, acceptEndPointInclusion: boolean): boolean;
					public addView(child: android.view.View): void;
					public postOnAnimation(action: java.lang.Runnable): void;
					public getPaddingLeft(): number;
					public getColumnCountForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
					public assertInLayoutOrScroll(message: string): void;
					public getLeftDecorationWidth(child: android.view.View): number;
					public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
					public getPaddingRight(): number;
					public removeViewAt(index: number): void;
					public onInitializeAccessibilityNodeInfo(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
					/** @deprecated */
					public setAutoMeasureEnabled(enabled: boolean): void;
					public removeAndRecycleAllViews(recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
					public canScrollHorizontally(): boolean;
					public collectAdjacentPrefetchPositions(dx: number, dy: number, state: androidx.recyclerview.widget.RecyclerView.State, layoutPrefetchRegistry: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
					public isMeasurementCacheEnabled(): boolean;
					public onScrollStateChanged(state: number): void;
					public getPaddingStart(): number;
					public getPaddingEnd(): number;
					public addDisappearingView(child: android.view.View, index: number): void;
					public getChildAt(index: number): android.view.View;
					public assertNotInLayoutOrScroll(message: string): void;
					public hasFocus(): boolean;
					public scrollToPosition(position: number): void;
					public onSaveInstanceState(): android.os.Parcelable;
					public isAttachedToWindow(): boolean;
					public getDecoratedMeasuredWidth(child: android.view.View): number;
					public getItemViewType(view: android.view.View): number;
					public getDecoratedLeft(child: android.view.View): number;
					public static getProperties(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number): androidx.recyclerview.widget.RecyclerView.LayoutManager.Properties;
					public onLayoutCompleted(state: androidx.recyclerview.widget.RecyclerView.State): void;
					public isFocused(): boolean;
					public isSmoothScrolling(): boolean;
					public getBaseline(): number;
					public static chooseSize(spec: number, desired: number, min: number): number;
					public getPosition(view: android.view.View): number;
					public attachView(child: android.view.View, index: number, lp: androidx.recyclerview.widget.RecyclerView.LayoutParams): void;
					public removeDetachedView(child: android.view.View): void;
					public onLayoutChildren(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): void;
					public removeAndRecycleViewAt(index: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
					public requestChildRectangleOnScreen(parent: androidx.recyclerview.widget.RecyclerView, child: android.view.View, rect: android.graphics.Rect, immediate: boolean): boolean;
					public onRequestChildFocus(parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State, child: android.view.View, focused: android.view.View): boolean;
					public onInitializeAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): void;
					/** @deprecated */
					public static getChildMeasureSpec(parentSize: number, padding: number, childDimension: number, canScroll: boolean): number;
					public onAddFocusables(recyclerView: androidx.recyclerview.widget.RecyclerView, views: java.util.ArrayList<android.view.View>, direction: number, focusableMode: number): boolean;
					public attachView(child: android.view.View): void;
					public getDecoratedRight(child: android.view.View): number;
					public getSelectionModeForAccessibility(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
					/** @deprecated */
					public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView): void;
					public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number, payload: any): void;
					public removeCallbacks(action: java.lang.Runnable): boolean;
					public removeAllViews(): void;
					public getDecoratedBottom(child: android.view.View): number;
					public computeVerticalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public getItemCount(): number;
					public onRestoreInstanceState(state: android.os.Parcelable): void;
					public isItemPrefetchEnabled(): boolean;
					public onItemsAdded(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
					public generateLayoutParams(lp: android.view.ViewGroup.LayoutParams): androidx.recyclerview.widget.RecyclerView.LayoutParams;
					public layoutDecoratedWithMargins(child: android.view.View, left: number, top: number, right: number, bottom: number): void;
					public onAdapterChanged(oldAdapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, newAdapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
					public onInitializeAccessibilityNodeInfoForItem(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, host: android.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public getDecoratedMeasuredHeight(child: android.view.View): number;
				}
				export module LayoutManager {
					export class LayoutPrefetchRegistry extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry>;
						/**
						 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$LayoutManager$LayoutPrefetchRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addPosition(param0: number, param1: number): void;
						});
						public constructor();
						public addPosition(param0: number, param1: number): void;
					}
					export class Properties extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.LayoutManager.Properties>;
						public orientation: number;
						public spanCount: number;
						public reverseLayout: boolean;
						public stackFromEnd: boolean;
						public constructor();
					}
				}
				export class LayoutParams extends android.view.ViewGroup.MarginLayoutParams {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.LayoutParams>;
					public isItemChanged(): boolean;
					public isItemRemoved(): boolean;
					public viewNeedsUpdate(): boolean;
					public getBindingAdapterPosition(): number;
					/** @deprecated */
					public getViewPosition(): number;
					public constructor(width: number, height: number);
					public getViewLayoutPosition(): number;
					public constructor(source: android.view.ViewGroup.MarginLayoutParams);
					public constructor(c: android.content.Context, attrs: android.util.AttributeSet);
					public constructor(source: androidx.recyclerview.widget.RecyclerView.LayoutParams);
					public getAbsoluteAdapterPosition(): number;
					public constructor(source: android.view.ViewGroup.LayoutParams);
					/** @deprecated */
					public getViewAdapterPosition(): number;
					public isViewInvalid(): boolean;
				}
				export class OnChildAttachStateChangeListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.OnChildAttachStateChangeListener>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$OnChildAttachStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onChildViewAttachedToWindow(param0: android.view.View): void;
						onChildViewDetachedFromWindow(param0: android.view.View): void;
					});
					public constructor();
					public onChildViewAttachedToWindow(param0: android.view.View): void;
					public onChildViewDetachedFromWindow(param0: android.view.View): void;
				}
				export abstract class OnFlingListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.OnFlingListener>;
					public constructor();
					public onFling(param0: number, param1: number): boolean;
				}
				export class OnItemTouchListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.OnItemTouchListener>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$OnItemTouchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInterceptTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: android.view.MotionEvent): boolean;
						onTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: android.view.MotionEvent): void;
						onRequestDisallowInterceptTouchEvent(param0: boolean): void;
					});
					public constructor();
					public onTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: android.view.MotionEvent): void;
					public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
					public onInterceptTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: android.view.MotionEvent): boolean;
				}
				export abstract class OnScrollListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.OnScrollListener>;
					public constructor();
					public onScrollStateChanged(recyclerView: androidx.recyclerview.widget.RecyclerView, newState: number): void;
					public onScrolled(recyclerView: androidx.recyclerview.widget.RecyclerView, dx: number, dy: number): void;
				}
				export class Orientation extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.Orientation>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$Orientation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class RecycledViewPool extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.RecycledViewPool>;
					public putRecycledView(scrap: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					public constructor();
					public clear(): void;
					public getRecycledViewCount(viewType: number): number;
					public getRecycledView(viewType: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
					public setMaxRecycledViews(viewType: number, max: number): void;
				}
				export module RecycledViewPool {
					export class ScrapData extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.RecycledViewPool.ScrapData>;
					}
				}
				export class Recycler extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.Recycler>;
					public getScrapList(): java.util.List<androidx.recyclerview.widget.RecyclerView.ViewHolder>;
					public getViewForPosition(position: number): android.view.View;
					public convertPreLayoutPositionToPostLayout(position: number): number;
					public bindViewToPosition(view: android.view.View, position: number): void;
					public clear(): void;
					public setViewCacheSize(viewCount: number): void;
					public recycleView(view: android.view.View): void;
					public constructor(this$0: androidx.recyclerview.widget.RecyclerView);
				}
				export class RecyclerListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.RecyclerListener>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$RecyclerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onViewRecycled(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					});
					public constructor();
					public onViewRecycled(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				}
				export class RecyclerViewDataObserver extends androidx.recyclerview.widget.RecyclerView.AdapterDataObserver {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.RecyclerViewDataObserver>;
					public onChanged(): void;
					public onItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
					public onItemRangeRemoved(positionStart: number, itemCount: number): void;
					public onStateRestorationPolicyChanged(): void;
					public onItemRangeInserted(positionStart: number, itemCount: number): void;
					public onItemRangeChanged(positionStart: number, itemCount: number): void;
					public onItemRangeMoved(fromPosition: number, toPosition: number, itemCount: number): void;
				}
				export class SavedState extends androidx.customview.view.AbsSavedState {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SavedState>;
					public static CREATOR: android.os.Parcelable.Creator<androidx.recyclerview.widget.RecyclerView.SavedState>;
					public describeContents(): number;
					public writeToParcel(dest: android.os.Parcel, flags: number): void;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
				export class SimpleOnItemTouchListener extends java.lang.Object implements androidx.recyclerview.widget.RecyclerView.OnItemTouchListener {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SimpleOnItemTouchListener>;
					public onTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: android.view.MotionEvent): void;
					public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
					public constructor();
					public onInterceptTouchEvent(rv: androidx.recyclerview.widget.RecyclerView, e: android.view.MotionEvent): boolean;
					public onTouchEvent(rv: androidx.recyclerview.widget.RecyclerView, e: android.view.MotionEvent): void;
					public onRequestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public onInterceptTouchEvent(param0: androidx.recyclerview.widget.RecyclerView, param1: android.view.MotionEvent): boolean;
				}
				export abstract class SmoothScroller extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SmoothScroller>;
					public onTargetFound(param0: android.view.View, param1: androidx.recyclerview.widget.RecyclerView.State, param2: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
					public getTargetPosition(): number;
					public normalize(scrollVector: android.graphics.PointF): void;
					public onSeekTargetStep(param0: number, param1: number, param2: androidx.recyclerview.widget.RecyclerView.State, param3: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
					public getChildCount(): number;
					/** @deprecated */
					public instantScrollToPosition(position: number): void;
					public setTargetPosition(targetPosition: number): void;
					public computeScrollVectorForPosition(targetPosition: number): android.graphics.PointF;
					public getChildPosition(view: android.view.View): number;
					public findViewByPosition(position: number): android.view.View;
					public onStart(): void;
					public getLayoutManager(): androidx.recyclerview.widget.RecyclerView.LayoutManager;
					public onChildAttachedToWindow(child: android.view.View): void;
					public constructor();
					public isPendingInitialRun(): boolean;
					public isRunning(): boolean;
					public stop(): void;
					public onStop(): void;
				}
				export module SmoothScroller {
					export class Action extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action>;
						public static UNDEFINED_DURATION: number;
						public getDuration(): number;
						public setDuration(duration: number): void;
						public getDx(): number;
						public setDx(dx: number): void;
						public jumpTo(targetPosition: number): void;
						public setDy(dy: number): void;
						public update(dx: number, dy: number, duration: number, interpolator: android.view.animation.Interpolator): void;
						public constructor(dx: number, dy: number, duration: number, interpolator: android.view.animation.Interpolator);
						public constructor(dx: number, dy: number, duration: number);
						public getDy(): number;
						public constructor(dx: number, dy: number);
						public setInterpolator(interpolator: android.view.animation.Interpolator): void;
						public getInterpolator(): android.view.animation.Interpolator;
					}
					export class ScrollVectorProvider extends java.lang.Object {
						public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.SmoothScroller.ScrollVectorProvider>;
						/**
						 * Constructs a new instance of the androidx.recyclerview.widget.RecyclerView$SmoothScroller$ScrollVectorProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							computeScrollVectorForPosition(param0: number): android.graphics.PointF;
						});
						public constructor();
						public computeScrollVectorForPosition(param0: number): android.graphics.PointF;
					}
				}
				export class State extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.State>;
					public getRemainingScrollHorizontal(): number;
					public isMeasuring(): boolean;
					public willRunSimpleAnimations(): boolean;
					public didStructureChange(): boolean;
					public remove(resourceId: number): void;
					public isPreLayout(): boolean;
					public willRunPredictiveAnimations(): boolean;
					public getRemainingScrollVertical(): number;
					public toString(): string;
					public constructor();
					public hasTargetScrollPosition(): boolean;
					public get(resourceId: number): any;
					public getTargetScrollPosition(): number;
					public getItemCount(): number;
					public put(resourceId: number, data: any): void;
				}
				export class StretchEdgeEffectFactory extends androidx.recyclerview.widget.RecyclerView.EdgeEffectFactory {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.StretchEdgeEffectFactory>;
					public createEdgeEffect(view: androidx.recyclerview.widget.RecyclerView, direction: number): android.widget.EdgeEffect;
				}
				export abstract class ViewCacheExtension extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ViewCacheExtension>;
					public constructor();
					public getViewForPositionAndType(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: number, param2: number): android.view.View;
				}
				export class ViewFlinger extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ViewFlinger>;
					public run(): void;
					public fling(velocityX: number, velocityY: number): void;
					public stop(): void;
					public smoothScrollBy(dx: number, dy: number, duration: number, interpolator: android.view.animation.Interpolator): void;
				}
				export abstract class ViewHolder extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerView.ViewHolder>;
					public itemView: android.view.View;
					public setIsRecyclable(recyclable: boolean): void;
					public getBindingAdapterPosition(): number;
					public getItemId(): number;
					/** @deprecated */
					public getAdapterPosition(): number;
					public getLayoutPosition(): number;
					public isRecyclable(): boolean;
					public getItemViewType(): number;
					public toString(): string;
					public constructor(itemView: android.view.View);
					/** @deprecated */
					public getPosition(): number;
					public getAbsoluteAdapterPosition(): number;
					public getBindingAdapter(): androidx.recyclerview.widget.RecyclerView.Adapter<any>;
					public getOldPosition(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class RecyclerViewAccessibilityDelegate extends androidx.core.view.AccessibilityDelegateCompat {
				public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate>;
				public onInitializeAccessibilityEvent(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): void;
				public getItemDelegate(): androidx.core.view.AccessibilityDelegateCompat;
				public performAccessibilityAction(host: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
				public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public performAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public constructor(param0: any);
				public onInitializeAccessibilityNodeInfo(host: android.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public constructor();
				public constructor(recyclerView: androidx.recyclerview.widget.RecyclerView);
			}
			export module RecyclerViewAccessibilityDelegate {
				export class ItemDelegate extends androidx.core.view.AccessibilityDelegateCompat {
					public static class: java.lang.Class<androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate.ItemDelegate>;
					public constructor(recyclerViewDelegate: androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate);
					public onInitializeAccessibilityNodeInfo(host: android.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public dispatchPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public performAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public sendAccessibilityEventUnchecked(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): void;
					public onPopulateAccessibilityEvent(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): void;
					public getAccessibilityNodeProvider(host: android.view.View): androidx.core.view.accessibility.AccessibilityNodeProviderCompat;
					public constructor(param0: any);
					public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
					public getAccessibilityNodeProvider(param0: android.view.View): androidx.core.view.accessibility.AccessibilityNodeProviderCompat;
					public performAccessibilityAction(host: android.view.View, action: number, args: android.os.Bundle): boolean;
					public sendAccessibilityEventUnchecked(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
					public onPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
					public sendAccessibilityEvent(host: android.view.View, eventType: number): void;
					public onInitializeAccessibilityEvent(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): void;
					public constructor();
					public dispatchPopulateAccessibilityEvent(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public onRequestSendAccessibilityEvent(host: android.view.ViewGroup, child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public sendAccessibilityEvent(param0: android.view.View, param1: number): void;
					public onRequestSendAccessibilityEvent(param0: android.view.ViewGroup, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ScrollbarHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.ScrollbarHelper>;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export abstract class SimpleItemAnimator extends androidx.recyclerview.widget.RecyclerView.ItemAnimator {
				public static class: java.lang.Class<androidx.recyclerview.widget.SimpleItemAnimator>;
				public onRemoveFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public dispatchRemoveFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public onMoveFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public animateAdd(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public onRemoveStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public animateChange(oldHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, newHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, preLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, postLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public setSupportsChangeAnimations(supportsChangeAnimations: boolean): void;
				public onMoveStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public animatePersistence(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, preLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, postLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public dispatchRemoveStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public animateAppearance(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, preLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, postLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public constructor();
				public animatePersistence(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public animateChange(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: number, param3: number, param4: number, param5: number): boolean;
				public dispatchMoveFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public dispatchAddFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public animateDisappearance(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, preLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, postLayoutInfo: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public dispatchChangeStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder, oldItem: boolean): void;
				public onAddFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public onChangeStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder, oldItem: boolean): void;
				public canReuseUpdatedViewHolder(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder, payloads: java.util.List<any>): boolean;
				public animateRemove(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
				public animateDisappearance(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public getSupportsChangeAnimations(): boolean;
				public animateChange(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ViewHolder, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param3: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public dispatchChangeFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder, oldItem: boolean): void;
				public dispatchMoveStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public dispatchAddStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				public onChangeFinished(item: androidx.recyclerview.widget.RecyclerView.ViewHolder, oldItem: boolean): void;
				public animateAppearance(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
				public animateMove(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number, param2: number, param3: number, param4: number): boolean;
				public onAddStarting(item: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export abstract class SnapHelper extends androidx.recyclerview.widget.RecyclerView.OnFlingListener {
				public static class: java.lang.Class<androidx.recyclerview.widget.SnapHelper>;
				public findSnapView(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager): android.view.View;
				/** @deprecated */
				public createSnapScroller(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.LinearSmoothScroller;
				public onFling(velocityX: number, velocityY: number): boolean;
				public attachToRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public createScroller(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): androidx.recyclerview.widget.RecyclerView.SmoothScroller;
				public calculateScrollDistance(velocityX: number, velocityY: number): number[];
				public onFling(param0: number, param1: number): boolean;
				public calculateDistanceToFinalSnap(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: android.view.View): number[];
				public findTargetSnapPosition(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: number, param2: number): number;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class SortedList<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.SortedList<any>>;
				public static INVALID_POSITION: number;
				public indexOf(item: T): number;
				public constructor(klass: java.lang.Class<T>, callback: androidx.recyclerview.widget.SortedList.Callback<T>);
				public replaceAll(items: T[], mayModifyInput: boolean): void;
				public replaceAll(items: java.util.Collection<T>): void;
				public recalculatePositionOfItemAt(index: number): void;
				public add(item: T): number;
				public updateItemAt(index: number, item: T): void;
				public get(index: number): T;
				public removeItemAt(index: number): T;
				public size(): number;
				public addAll(items: java.util.Collection<T>): void;
				public endBatchedUpdates(): void;
				public remove(item: T): boolean;
				public constructor(klass: java.lang.Class<T>, callback: androidx.recyclerview.widget.SortedList.Callback<T>, initialCapacity: number);
				public replaceAll(...items: T[]): void;
				public clear(): void;
				public addAll(items: T[], mayModifyInput: boolean): void;
				public addAll(...items: T[]): void;
				public beginBatchedUpdates(): void;
			}
			export module SortedList {
				export class BatchedCallback<T2>  extends androidx.recyclerview.widget.SortedList.Callback<any> {
					public static class: java.lang.Class<androidx.recyclerview.widget.SortedList.BatchedCallback<any>>;
					public onMoved(fromPosition: number, toPosition: number): void;
					public equals(obj: any): boolean;
					public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public constructor(wrappedCallback: androidx.recyclerview.widget.SortedList.Callback<any>);
					public onInserted(param0: number, param1: number): void;
					public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public onRemoved(position: number, count: number): void;
					public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public constructor();
					public reversed(): java.util.Comparator<any>;
					public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
					public getChangePayload(item1: any, item2: any): any;
					public onMoved(param0: number, param1: number): void;
					public onChanged(position: number, count: number, payload: any): void;
					public compare(param0: any, param1: any): number;
					public compare(o1: any, o2: any): number;
					public onChanged(param0: number, param1: number): void;
					public onChanged(position: number, count: number): void;
					public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public areItemsTheSame(param0: any, param1: any): boolean;
					public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public dispatchLastEvent(): void;
					public onChanged(param0: number, param1: number, param2: any): void;
					public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public equals(param0: any): boolean;
					public onInserted(position: number, count: number): void;
					public areContentsTheSame(oldItem: any, newItem: any): boolean;
					public onRemoved(param0: number, param1: number): void;
					public areContentsTheSame(param0: any, param1: any): boolean;
					public areItemsTheSame(item1: any, item2: any): boolean;
					public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
				}
				export abstract class Callback<T2>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.SortedList.Callback<any>>;
					public equals(obj: any): boolean;
					public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public onInserted(param0: number, param1: number): void;
					public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public compare(param0: T2, param1: T2): number;
					public areItemsTheSame(param0: T2, param1: T2): boolean;
					public constructor();
					public reversed(): java.util.Comparator<any>;
					public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
					public onMoved(param0: number, param1: number): void;
					public onChanged(position: number, count: number, payload: any): void;
					public compare(param0: any, param1: any): number;
					public onChanged(param0: number, param1: number): void;
					public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public onChanged(param0: number, param1: number, param2: any): void;
					public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public equals(param0: any): boolean;
					public areContentsTheSame(param0: T2, param1: T2): boolean;
					public onRemoved(param0: number, param1: number): void;
					public getChangePayload(item1: T2, item2: T2): any;
					public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export abstract class SortedListAdapterCallback<T2>  extends androidx.recyclerview.widget.SortedList.Callback<any> {
				public static class: java.lang.Class<androidx.recyclerview.widget.SortedListAdapterCallback<any>>;
				public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public onChanged(position: number, count: number): void;
				public static reverseOrder(): java.util.Comparator<any>;
				public onMoved(param0: number, param1: number): void;
				public constructor(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>);
				public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public compare(param0: any, param1: any): number;
				public constructor();
				public onMoved(fromPosition: number, toPosition: number): void;
				public reversed(): java.util.Comparator<any>;
				public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public equals(param0: any): boolean;
				public onChanged(position: number, count: number, payload: any): void;
				public static naturalOrder(): java.util.Comparator<any>;
				public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
				public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public onInserted(param0: number, param1: number): void;
				public equals(obj: any): boolean;
				public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public onInserted(position: number, count: number): void;
				public onChanged(param0: number, param1: number): void;
				public onRemoved(position: number, count: number): void;
				public onChanged(param0: number, param1: number, param2: any): void;
				public onRemoved(param0: number, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class StableIdStorage extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage>;
				/**
				 * Constructs a new instance of the androidx.recyclerview.widget.StableIdStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
				});
				public constructor();
				public createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
			}
			export module StableIdStorage {
				export class IsolatedStableIdStorage extends java.lang.Object implements androidx.recyclerview.widget.StableIdStorage {
					public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.IsolatedStableIdStorage>;
					public constructor();
					public createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
				}
				export module IsolatedStableIdStorage {
					export class WrapperStableIdLookup extends java.lang.Object implements androidx.recyclerview.widget.StableIdStorage.StableIdLookup {
						public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.IsolatedStableIdStorage.WrapperStableIdLookup>;
						public localToGlobal(localId: number): number;
						public localToGlobal(param0: number): number;
					}
				}
				export class NoStableIdStorage extends java.lang.Object implements androidx.recyclerview.widget.StableIdStorage {
					public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.NoStableIdStorage>;
					public constructor();
					public createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
				}
				export class SharedPoolStableIdStorage extends java.lang.Object implements androidx.recyclerview.widget.StableIdStorage {
					public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.SharedPoolStableIdStorage>;
					public constructor();
					public createStableIdLookup(): androidx.recyclerview.widget.StableIdStorage.StableIdLookup;
				}
				export class StableIdLookup extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.StableIdStorage.StableIdLookup>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.StableIdStorage$StableIdLookup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						localToGlobal(param0: number): number;
					});
					public constructor();
					public localToGlobal(param0: number): number;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class StaggeredGridLayoutManager extends androidx.recyclerview.widget.RecyclerView.LayoutManager implements androidx.recyclerview.widget.RecyclerView.SmoothScroller.ScrollVectorProvider {
				public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager>;
				public static HORIZONTAL: number;
				public static VERTICAL: number;
				public static GAP_HANDLING_NONE: number;
				public static GAP_HANDLING_LAZY: number;
				public static GAP_HANDLING_MOVE_ITEMS_BETWEEN_SPANS: number;
				public getReverseLayout(): boolean;
				public onInitializeAccessibilityEvent(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, event: android.view.accessibility.AccessibilityEvent): void;
				public onItemsMoved(recyclerView: androidx.recyclerview.widget.RecyclerView, from: number, to: number, itemCount: number): void;
				public assertNotInLayoutOrScroll(message: string): void;
				public constructor();
				public scrollVerticallyBy(dy: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public canScrollHorizontally(): boolean;
				public isAutoMeasureEnabled(): boolean;
				public scrollToPositionWithOffset(position: number, offset: number): void;
				public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public computeVerticalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public computeScrollVectorForPosition(targetPosition: number): android.graphics.PointF;
				public canScrollVertically(): boolean;
				public onLayoutChildren(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public invalidateSpanAssignments(): void;
				public setMeasuredDimension(childrenBounds: android.graphics.Rect, wSpec: number, hSpec: number): void;
				public computeHorizontalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public generateLayoutParams(c: android.content.Context, attrs: android.util.AttributeSet): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public onScrollStateChanged(state: number): void;
				public collectAdjacentPrefetchPositions(dx: number, dy: number, state: androidx.recyclerview.widget.RecyclerView.State, layoutPrefetchRegistry: androidx.recyclerview.widget.RecyclerView.LayoutManager.LayoutPrefetchRegistry): void;
				public computeScrollVectorForPosition(param0: number): android.graphics.PointF;
				public findLastCompletelyVisibleItemPositions(into: number[]): number[];
				public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number, payload: any): void;
				public setMeasuredDimension(widthSize: number, heightSize: number): void;
				public checkLayoutParams(lp: androidx.recyclerview.widget.RecyclerView.LayoutParams): boolean;
				public getGapStrategy(): number;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onLayoutCompleted(state: androidx.recyclerview.widget.RecyclerView.State): void;
				public offsetChildrenHorizontal(dx: number): void;
				public scrollToPosition(position: number): void;
				public onItemsAdded(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
				public getSpanCount(): number;
				public onRestoreInstanceState(state: android.os.Parcelable): void;
				public setSpanCount(spanCount: number): void;
				public generateLayoutParams(lp: android.view.ViewGroup.LayoutParams): androidx.recyclerview.widget.RecyclerView.LayoutParams;
				public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
				public getOrientation(): number;
				/** @deprecated */
				public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView): void;
				public setReverseLayout(reverseLayout: boolean): void;
				public setOrientation(orientation: number): void;
				public setGapStrategy(gapStrategy: number): void;
				public computeVerticalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public computeHorizontalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public scrollHorizontallyBy(dx: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
				public smoothScrollToPosition(recyclerView: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State, position: number): void;
				public onAdapterChanged(oldAdapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, newAdapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
				public findLastVisibleItemPositions(into: number[]): number[];
				public computeVerticalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public supportsPredictiveItemAnimations(): boolean;
				public findFirstCompletelyVisibleItemPositions(into: number[]): number[];
				public onFocusSearchFailed(focused: android.view.View, direction: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): android.view.View;
				public onItemsRemoved(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
				public onItemsChanged(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public computeHorizontalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
				public findFirstVisibleItemPositions(into: number[]): number[];
				public onSaveInstanceState(): android.os.Parcelable;
				public constructor(spanCount: number, orientation: number);
				public offsetChildrenVertical(dy: number): void;
				public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
				public onInitializeAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): void;
			}
			export module StaggeredGridLayoutManager {
				export class AnchorInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.AnchorInfo>;
				}
				export class LayoutParams extends androidx.recyclerview.widget.RecyclerView.LayoutParams {
					public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.LayoutParams>;
					public static INVALID_SPAN_ID: number;
					public constructor(source: android.view.ViewGroup.MarginLayoutParams);
					public constructor(c: android.content.Context, attrs: android.util.AttributeSet);
					public constructor(source: androidx.recyclerview.widget.RecyclerView.LayoutParams);
					public getSpanIndex(): number;
					public setFullSpan(fullSpan: boolean): void;
					public isFullSpan(): boolean;
					public constructor(source: android.view.ViewGroup.LayoutParams);
					public constructor(width: number, height: number);
				}
				export class LazySpanLookup extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup>;
					public getFirstFullSpanItemInRange(minPos: number, maxPos: number, gapDir: number, hasUnwantedGapAfter: boolean): androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem;
					public addFullSpanItem(fullSpanItem: androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem): void;
					public getFullSpanItem(position: number): androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem;
				}
				export module LazySpanLookup {
					export class FullSpanItem extends java.lang.Object implements android.os.Parcelable {
						public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem>;
						public static CREATOR: android.os.Parcelable.Creator<androidx.recyclerview.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem>;
						public writeToParcel(dest: android.os.Parcel, flags: number): void;
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public toString(): string;
					}
				}
				export class SavedState extends java.lang.Object implements android.os.Parcelable {
					public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.SavedState>;
					public static CREATOR: android.os.Parcelable.Creator<androidx.recyclerview.widget.StaggeredGridLayoutManager.SavedState>;
					public constructor();
					public describeContents(): number;
					public constructor(other: androidx.recyclerview.widget.StaggeredGridLayoutManager.SavedState);
					public writeToParcel(dest: android.os.Parcel, flags: number): void;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
				export class Span extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.StaggeredGridLayoutManager.Span>;
					public findFirstVisibleItemPosition(): number;
					public findLastPartiallyVisibleItemPosition(): number;
					public findLastVisibleItemPosition(): number;
					public getFocusableViewAfter(referenceChildPosition: number, layoutDir: number): android.view.View;
					public findFirstPartiallyVisibleItemPosition(): number;
					public findFirstCompletelyVisibleItemPosition(): number;
					public findLastCompletelyVisibleItemPosition(): number;
					public getDeletedSize(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ThreadUtil<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.ThreadUtil<any>>;
				/**
				 * Constructs a new instance of the androidx.recyclerview.widget.ThreadUtil<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getMainThreadProxy(param0: androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<T>): androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<T>;
					getBackgroundProxy(param0: androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<T>): androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<T>;
				});
				public constructor();
				public getBackgroundProxy(param0: androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<T>): androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<T>;
				public getMainThreadProxy(param0: androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<T>): androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<T>;
			}
			export module ThreadUtil {
				export class BackgroundCallback<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ThreadUtil.BackgroundCallback<any>>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.ThreadUtil$BackgroundCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						refresh(param0: number): void;
						updateRange(param0: number, param1: number, param2: number, param3: number, param4: number): void;
						loadTile(param0: number, param1: number): void;
						recycleTile(param0: androidx.recyclerview.widget.TileList.Tile<T>): void;
					});
					public constructor();
					public recycleTile(param0: androidx.recyclerview.widget.TileList.Tile<T>): void;
					public updateRange(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public refresh(param0: number): void;
					public loadTile(param0: number, param1: number): void;
				}
				export class MainThreadCallback<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ThreadUtil.MainThreadCallback<any>>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.ThreadUtil$MainThreadCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						updateItemCount(param0: number, param1: number): void;
						addTile(param0: number, param1: androidx.recyclerview.widget.TileList.Tile<T>): void;
						removeTile(param0: number, param1: number): void;
					});
					public constructor();
					public addTile(param0: number, param1: androidx.recyclerview.widget.TileList.Tile<T>): void;
					public removeTile(param0: number, param1: number): void;
					public updateItemCount(param0: number, param1: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class TileList<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.TileList<any>>;
				public getItemAt(pos: number): T;
				public removeAtPos(startPosition: number): androidx.recyclerview.widget.TileList.Tile<T>;
				public addOrReplace(newTile: androidx.recyclerview.widget.TileList.Tile<T>): androidx.recyclerview.widget.TileList.Tile<T>;
				public clear(): void;
				public constructor(tileSize: number);
				public size(): number;
				public getAtIndex(index: number): androidx.recyclerview.widget.TileList.Tile<T>;
			}
			export module TileList {
				export class Tile<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.TileList.Tile<any>>;
					public mItems: T[];
					public mStartPosition: number;
					public mItemCount: number;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ViewBoundsCheck extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.ViewBoundsCheck>;
			}
			export module ViewBoundsCheck {
				export class BoundFlags extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ViewBoundsCheck.BoundFlags>;
				}
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ViewBoundsCheck.Callback>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.ViewBoundsCheck$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getChildAt(param0: number): android.view.View;
						getParentStart(): number;
						getParentEnd(): number;
						getChildStart(param0: android.view.View): number;
						getChildEnd(param0: android.view.View): number;
					});
					public constructor();
					public getChildStart(param0: android.view.View): number;
					public getChildEnd(param0: android.view.View): number;
					public getParentEnd(): number;
					public getChildAt(param0: number): android.view.View;
					public getParentStart(): number;
				}
				export class ViewBounds extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.recyclerview.widget.ViewBoundsCheck.ViewBounds>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.ViewBoundsCheck$ViewBounds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ViewInfoStore extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.ViewInfoStore>;
				public onViewDetached(viewHolder: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
			}
			export module ViewInfoStore {
				export class InfoRecord extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ViewInfoStore.InfoRecord>;
				}
				export class ProcessCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ViewInfoStore.ProcessCallback>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.ViewInfoStore$ProcessCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						processDisappeared(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
						processAppeared(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
						processPersistent(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
						unused(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
					});
					public constructor();
					public processDisappeared(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
					public processAppeared(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
					public processPersistent(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: androidx.recyclerview.widget.RecyclerView.ItemAnimator.ItemHolderInfo): void;
					public unused(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
				}
			}
		}
	}
}

declare module androidx {
	export module recyclerview {
		export module widget {
			export class ViewTypeStorage extends java.lang.Object {
				public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage>;
				/**
				 * Constructs a new instance of the androidx.recyclerview.widget.ViewTypeStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getWrapperForGlobalType(param0: number): androidx.recyclerview.widget.NestedAdapterWrapper;
					createViewTypeWrapper(param0: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
				});
				public constructor();
				public createViewTypeWrapper(param0: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
				public getWrapperForGlobalType(param0: number): androidx.recyclerview.widget.NestedAdapterWrapper;
			}
			export module ViewTypeStorage {
				export class IsolatedViewTypeStorage extends java.lang.Object implements androidx.recyclerview.widget.ViewTypeStorage {
					public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.IsolatedViewTypeStorage>;
					public getWrapperForGlobalType(globalViewType: number): androidx.recyclerview.widget.NestedAdapterWrapper;
					public getWrapperForGlobalType(param0: number): androidx.recyclerview.widget.NestedAdapterWrapper;
					public constructor();
					public createViewTypeWrapper(wrapper: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
					public createViewTypeWrapper(param0: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
				}
				export module IsolatedViewTypeStorage {
					export class WrapperViewTypeLookup extends java.lang.Object implements androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup {
						public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.IsolatedViewTypeStorage.WrapperViewTypeLookup>;
						public globalToLocal(globalType: number): number;
						public globalToLocal(param0: number): number;
						public localToGlobal(param0: number): number;
						public localToGlobal(localType: number): number;
						public dispose(): void;
					}
				}
				export class SharedIdRangeViewTypeStorage extends java.lang.Object implements androidx.recyclerview.widget.ViewTypeStorage {
					public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.SharedIdRangeViewTypeStorage>;
					public getWrapperForGlobalType(globalViewType: number): androidx.recyclerview.widget.NestedAdapterWrapper;
					public getWrapperForGlobalType(param0: number): androidx.recyclerview.widget.NestedAdapterWrapper;
					public constructor();
					public createViewTypeWrapper(wrapper: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
					public createViewTypeWrapper(param0: androidx.recyclerview.widget.NestedAdapterWrapper): androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup;
				}
				export module SharedIdRangeViewTypeStorage {
					export class WrapperViewTypeLookup extends java.lang.Object implements androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup {
						public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.SharedIdRangeViewTypeStorage.WrapperViewTypeLookup>;
						public globalToLocal(globalType: number): number;
						public globalToLocal(param0: number): number;
						public localToGlobal(param0: number): number;
						public localToGlobal(localType: number): number;
						public dispose(): void;
					}
				}
				export class ViewTypeLookup extends java.lang.Object {
					public static class: java.lang.Class<androidx.recyclerview.widget.ViewTypeStorage.ViewTypeLookup>;
					/**
					 * Constructs a new instance of the androidx.recyclerview.widget.ViewTypeStorage$ViewTypeLookup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						localToGlobal(param0: number): number;
						globalToLocal(param0: number): number;
						dispose(): void;
					});
					public constructor();
					public dispose(): void;
					public localToGlobal(param0: number): number;
					public globalToLocal(param0: number): number;
				}
			}
		}
	}
}

//Generics information:
//androidx.recyclerview.widget.AsyncDifferConfig:1
//androidx.recyclerview.widget.AsyncDifferConfig.Builder:1
//androidx.recyclerview.widget.AsyncListDiffer:1
//androidx.recyclerview.widget.AsyncListDiffer.ListListener:1
//androidx.recyclerview.widget.AsyncListUtil:1
//androidx.recyclerview.widget.AsyncListUtil.DataCallback:1
//androidx.recyclerview.widget.DiffUtil.ItemCallback:1
//androidx.recyclerview.widget.ListAdapter:2
//androidx.recyclerview.widget.MessageThreadUtil:1
//androidx.recyclerview.widget.RecyclerView.Adapter:1
//androidx.recyclerview.widget.SortedList:1
//androidx.recyclerview.widget.SortedList.BatchedCallback:1
//androidx.recyclerview.widget.SortedList.Callback:1
//androidx.recyclerview.widget.SortedListAdapterCallback:1
//androidx.recyclerview.widget.ThreadUtil:1
//androidx.recyclerview.widget.ThreadUtil.BackgroundCallback:1
//androidx.recyclerview.widget.ThreadUtil.MainThreadCallback:1
//androidx.recyclerview.widget.TileList:1
//androidx.recyclerview.widget.TileList.Tile:1


declare module androidx {
	export module customview {
		export module poolingcontainer {
			export class PoolingContainer extends java.lang.Object {
				public static class: java.lang.Class<androidx.customview.poolingcontainer.PoolingContainer>;
				public static isPoolingContainer($this$isPoolingContainer: android.view.View): boolean;
				public static callPoolingContainerOnRelease($this$callPoolingContainerOnRelease: android.view.View): void;
				public static isWithinPoolingContainer($this$isWithinPoolingContainer: android.view.View): boolean;
				public static removePoolingContainerListener($this$removePoolingContainerListener: android.view.View, listener: androidx.customview.poolingcontainer.PoolingContainerListener): void;
				public static callPoolingContainerOnReleaseForChildren($this$callPoolingContainerOnReleaseForChildren: android.view.ViewGroup): void;
				public static addPoolingContainerListener($this$addPoolingContainerListener: android.view.View, listener: androidx.customview.poolingcontainer.PoolingContainerListener): void;
				public static setPoolingContainer($this$isPoolingContainer: android.view.View, value: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module customview {
		export module poolingcontainer {
			export class PoolingContainerListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.customview.poolingcontainer.PoolingContainerListener>;
				/**
				 * Constructs a new instance of the androidx.customview.poolingcontainer.PoolingContainerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRelease(): void;
				});
				public constructor();
				public onRelease(): void;
			}
		}
	}
}

declare module androidx {
	export module customview {
		export module poolingcontainer {
			export class PoolingContainerListenerHolder extends java.lang.Object {
				public static class: java.lang.Class<androidx.customview.poolingcontainer.PoolingContainerListenerHolder>;
				public onRelease(): void;
				public addListener(listener: androidx.customview.poolingcontainer.PoolingContainerListener): void;
				public removeListener(listener: androidx.customview.poolingcontainer.PoolingContainerListener): void;
				public constructor();
			}
		}
	}
}

//Generics information:


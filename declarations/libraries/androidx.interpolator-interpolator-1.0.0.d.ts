declare module androidx {
	export module interpolator {
		export module view {
			export module animation {
				export class FastOutLinearInInterpolator extends androidx.interpolator.view.animation.LookupTableInterpolator {
					public static class: java.lang.Class<androidx.interpolator.view.animation.FastOutLinearInInterpolator>;
					public constructor(values: number[]);
					public constructor();
				}
			}
		}
	}
}

declare module androidx {
	export module interpolator {
		export module view {
			export module animation {
				export class FastOutSlowInInterpolator extends androidx.interpolator.view.animation.LookupTableInterpolator {
					public static class: java.lang.Class<androidx.interpolator.view.animation.FastOutSlowInInterpolator>;
					public constructor(values: number[]);
					public constructor();
				}
			}
		}
	}
}

declare module androidx {
	export module interpolator {
		export module view {
			export module animation {
				export class LinearOutSlowInInterpolator extends androidx.interpolator.view.animation.LookupTableInterpolator {
					public static class: java.lang.Class<androidx.interpolator.view.animation.LinearOutSlowInInterpolator>;
					public constructor(values: number[]);
					public constructor();
				}
			}
		}
	}
}

declare module androidx {
	export module interpolator {
		export module view {
			export module animation {
				export abstract class LookupTableInterpolator extends java.lang.Object implements android.view.animation.Interpolator {
					public static class: java.lang.Class<androidx.interpolator.view.animation.LookupTableInterpolator>;
					public constructor(values: number[]);
					public getInterpolation(input: number): number;
					public getInterpolation(param0: number): number;
				}
			}
		}
	}
}

//Generics information:


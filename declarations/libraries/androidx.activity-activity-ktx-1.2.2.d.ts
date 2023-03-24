declare module androidx {
	export module activity {
		export module result {
			export class ActivityResultCallerLauncher<I, O>  extends androidx.activity.result.ActivityResultLauncher<kotlin.Unit> {
				public static class: java.lang.Class<androidx.activity.result.ActivityResultCallerLauncher<any,any>>;
				public unregister(): void;
				public getContract(): androidx.activity.result.contract.ActivityResultContract<kotlin.Unit,any>;
				public constructor(launcher: androidx.activity.result.ActivityResultLauncher<any>, callerContract: androidx.activity.result.contract.ActivityResultContract<any,any>, input: any);
				public getLauncher(): androidx.activity.result.ActivityResultLauncher<any>;
				public launch(param0: any): void;
				public launch(void: kotlin.Unit, options: androidx.core.app.ActivityOptionsCompat): void;
				public getContract(): androidx.activity.result.contract.ActivityResultContract<any,any>;
				public getInput(): any;
				public launch(param0: any, param1: androidx.core.app.ActivityOptionsCompat): void;
				public getCallerContract(): androidx.activity.result.contract.ActivityResultContract<any,any>;
				public getResultContract(): androidx.activity.result.contract.ActivityResultContract<kotlin.Unit,any>;
				public constructor();
			}
		}
	}
}

//Generics information:
//androidx.activity.result.ActivityResultCallerLauncher:2


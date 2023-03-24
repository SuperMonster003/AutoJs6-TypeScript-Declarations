declare module androidx {
	export module tracing {
		export class Trace extends java.lang.Object {
			public static class: java.lang.Class<androidx.tracing.Trace>;
			public static beginSection(label: string): void;
			public static beginAsyncSection(methodName: string, cookie: number): void;
			public static setCounter(counterName: string, counterValue: number): void;
			public static isEnabled(): boolean;
			public static endSection(): void;
			public static endAsyncSection(methodName: string, cookie: number): void;
		}
	}
}

declare module androidx {
	export module tracing {
		export class TraceApi18Impl extends java.lang.Object {
			public static class: java.lang.Class<androidx.tracing.TraceApi18Impl>;
			public static beginSection(label: string): void;
			public static endSection(): void;
		}
	}
}

declare module androidx {
	export module tracing {
		export class TraceApi29Impl extends java.lang.Object {
			public static class: java.lang.Class<androidx.tracing.TraceApi29Impl>;
			public static beginAsyncSection(methodName: string, cookie: number): void;
			public static setCounter(counterName: string, counterValue: number): void;
			public static endAsyncSection(methodName: string, cookie: number): void;
		}
	}
}

//Generics information:


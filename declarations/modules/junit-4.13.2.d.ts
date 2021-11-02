/// <reference path="../android.d.ts" />

declare module junit {
	export module extensions {
		export class ActiveTestSuite extends junit.framework.TestSuite {
			public static class: java.lang.Class<junit.extensions.ActiveTestSuite>;
			public constructor(param0: java.lang.Class<any>, param1: string);
			public constructor(param0: Array<java.lang.Class<any>>);
			public constructor(param0: Array<java.lang.Class<any>>, param1: string);
			public countTestCases(): number;
			public run(param0: junit.framework.TestResult): void;
			public runFinished(): void;
			public constructor(param0: java.lang.Class<any>);
			public constructor();
			public runTest(param0: junit.framework.Test, param1: junit.framework.TestResult): void;
			public constructor(param0: string);
		}
	}
}

declare module junit {
	export module extensions {
		export class RepeatedTest extends junit.extensions.TestDecorator {
			public static class: java.lang.Class<junit.extensions.RepeatedTest>;
			public countTestCases(): number;
			public toString(): string;
			public constructor(param0: junit.framework.Test, param1: number);
			public constructor(param0: junit.framework.Test);
			public run(param0: junit.framework.TestResult): void;
			public constructor();
		}
	}
}

declare module junit {
	export module extensions {
		export class TestDecorator extends junit.framework.Assert implements junit.framework.Test {
			public static class: java.lang.Class<junit.extensions.TestDecorator>;
			public fTest: junit.framework.Test;
			public countTestCases(): number;
			public toString(): string;
			public constructor(param0: junit.framework.Test);
			public run(param0: junit.framework.TestResult): void;
			public constructor();
			public basicRun(param0: junit.framework.TestResult): void;
			public getTest(): junit.framework.Test;
		}
	}
}

declare module junit {
	export module extensions {
		export class TestSetup extends junit.extensions.TestDecorator {
			public static class: java.lang.Class<junit.extensions.TestSetup>;
			public countTestCases(): number;
			public setUp(): void;
			public tearDown(): void;
			public constructor(param0: junit.framework.Test);
			public run(param0: junit.framework.TestResult): void;
			public constructor();
		}
	}
}

declare module junit {
	export module framework {
		export class Assert extends java.lang.Object {
			public static class: java.lang.Class<junit.framework.Assert>;
			public static failNotSame(param0: string, param1: any, param2: any): void;
			public static failNotEquals(param0: string, param1: any, param2: any): void;
			public static assertSame(param0: any, param1: any): void;
			public static assertSame(param0: string, param1: any, param2: any): void;
			public static fail(param0: string): void;
			public static assertNull(param0: any): void;
			public static assertNotNull(param0: string, param1: any): void;
			public static assertFalse(param0: boolean): void;
			public static assertEquals(param0: any, param1: any): void;
			public static assertFalse(param0: string, param1: boolean): void;
			public static assertTrue(param0: boolean): void;
			public static assertEquals(param0: string, param1: number, param2: number): void;
			public static failSame(param0: string): void;
			public static assertTrue(param0: string, param1: boolean): void;
			public static assertEquals(param0: number, param1: number): void;
			public static assertEquals(param0: boolean, param1: boolean): void;
			public static assertEquals(param0: string, param1: string, param2: string): void;
			public constructor();
			public static assertEquals(param0: number, param1: number, param2: number): void;
			public static assertEquals(param0: string, param1: boolean, param2: boolean): void;
			public static assertNotNull(param0: any): void;
			public static format(param0: string, param1: any, param2: any): string;
			public static assertNotSame(param0: any, param1: any): void;
			public static fail(): void;
			public static assertEquals(param0: string, param1: string): void;
			public static assertNull(param0: string, param1: any): void;
			public static assertEquals(param0: string, param1: any, param2: any): void;
			public static assertEquals(param0: string, param1: number, param2: number, param3: number): void;
			public static assertNotSame(param0: string, param1: any, param2: any): void;
		}
	}
}

declare module junit {
	export module framework {
		export class AssertionFailedError extends java.lang.AssertionError {
			public static class: java.lang.Class<junit.framework.AssertionFailedError>;
			public constructor(param0: boolean);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: number);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor();
			public constructor(param0: any);
			public constructor(param0: string);
		}
	}
}

declare module junit {
	export module framework {
		export class ComparisonCompactor extends java.lang.Object {
			public static class: java.lang.Class<junit.framework.ComparisonCompactor>;
			public constructor(param0: number, param1: string, param2: string);
			public compact(param0: string): string;
		}
	}
}

declare module junit {
	export module framework {
		export class ComparisonFailure extends junit.framework.AssertionFailedError {
			public static class: java.lang.Class<junit.framework.ComparisonFailure>;
			public getMessage(): string;
			public constructor(param0: boolean);
			public getActual(): string;
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: number);
			public constructor(param0: string, param1: string, param2: string);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor();
			public getExpected(): string;
			public constructor(param0: any);
			public constructor(param0: string);
		}
	}
}

declare module junit {
	export module framework {
		export class JUnit4TestAdapter extends java.lang.Object implements junit.framework.Test, org.junit.runner.manipulation.Filterable, org.junit.runner.manipulation.Orderable, org.junit.runner.Describable {
			public static class: java.lang.Class<junit.framework.JUnit4TestAdapter>;
			public getDescription(): org.junit.runner.Description;
			public countTestCases(): number;
			public toString(): string;
			public getTests(): java.util.List<junit.framework.Test>;
			public getTestClass(): java.lang.Class<any>;
			public filter(param0: org.junit.runner.manipulation.Filter): void;
			public run(param0: junit.framework.TestResult): void;
			public constructor(param0: java.lang.Class<any>);
			public sort(param0: org.junit.runner.manipulation.Sorter): void;
			public order(param0: org.junit.runner.manipulation.Orderer): void;
			public constructor(param0: java.lang.Class<any>, param1: junit.framework.JUnit4TestAdapterCache);
		}
	}
}

declare module junit {
	export module framework {
		export class JUnit4TestAdapterCache extends java.util.HashMap<org.junit.runner.Description,junit.framework.Test> {
			public static class: java.lang.Class<junit.framework.JUnit4TestAdapterCache>;
			public replaceAll(param0: any /* any<any,any,any>*/): void;
			public equals(param0: any): boolean;
			public replace(param0: any, param1: any): any;
			public compute(param0: any, param1: any /* any<any,any,any>*/): any;
			public containsValue(param0: any): boolean;
			public replace(param0: any, param1: any, param2: any): boolean;
			public get(param0: any): any;
			public forEach(param0: any /* any<any,any>*/): void;
			public getOrDefault(param0: any, param1: any): any;
			public static getDefault(): junit.framework.JUnit4TestAdapterCache;
			public getNotifier(param0: junit.framework.TestResult, param1: junit.framework.JUnit4TestAdapter): org.junit.runner.notification.RunNotifier;
			public putIfAbsent(param0: any, param1: any): any;
			public remove(param0: any): any;
			public putAll(param0: java.util.Map<any,any>): void;
			public asTest(param0: org.junit.runner.Description): junit.framework.Test;
			public values(): java.util.Collection<any>;
			public constructor(param0: number, param1: number);
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public keySet(): java.util.Set<any>;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
			public constructor(param0: number);
			public asTestList(param0: org.junit.runner.Description): java.util.List<junit.framework.Test>;
			public constructor(param0: java.util.Map<any,any>);
			public constructor();
			public computeIfAbsent(param0: any, param1: any /* any<any,any>*/): any;
			public put(param0: any, param1: any): any;
			public merge(param0: any, param1: any, param2: any /* any<any,any,any>*/): any;
			public remove(param0: any, param1: any): boolean;
			public containsKey(param0: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module junit {
	export module framework {
		export class JUnit4TestCaseFacade extends java.lang.Object implements junit.framework.Test, org.junit.runner.Describable {
			public static class: java.lang.Class<junit.framework.JUnit4TestCaseFacade>;
			public getDescription(): org.junit.runner.Description;
			public toString(): string;
			public countTestCases(): number;
			public run(param0: junit.framework.TestResult): void;
		}
	}
}

declare module junit {
	export module framework {
		export class Protectable extends java.lang.Object {
			public static class: java.lang.Class<junit.framework.Protectable>;
			/**
			 * Constructs a new instance of the junit.framework.Protectable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				protect(): void;
			});
			public constructor();
			public protect(): void;
		}
	}
}

declare module junit {
	export module framework {
		export class Test extends java.lang.Object {
			public static class: java.lang.Class<junit.framework.Test>;
			/**
			 * Constructs a new instance of the junit.framework.Test interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				countTestCases(): number;
				run(param0: junit.framework.TestResult): void;
			});
			public constructor();
			public countTestCases(): number;
			public run(param0: junit.framework.TestResult): void;
		}
	}
}

declare module junit {
	export module framework {
		export abstract class TestCase extends junit.framework.Assert implements junit.framework.Test {
			public static class: java.lang.Class<junit.framework.TestCase>;
			public static failNotSame(param0: string, param1: any, param2: any): void;
			public static failNotEquals(param0: string, param1: any, param2: any): void;
			public static assertSame(param0: any, param1: any): void;
			public run(): junit.framework.TestResult;
			public runBare(): void;
			public static assertSame(param0: string, param1: any, param2: any): void;
			public static fail(param0: string): void;
			public static assertNull(param0: any): void;
			public static assertNotNull(param0: string, param1: any): void;
			public createResult(): junit.framework.TestResult;
			public static assertFalse(param0: boolean): void;
			public static assertEquals(param0: any, param1: any): void;
			public static assertFalse(param0: string, param1: boolean): void;
			public static assertTrue(param0: boolean): void;
			public constructor(param0: string);
			public static assertEquals(param0: string, param1: number, param2: number): void;
			public static failSame(param0: string): void;
			public countTestCases(): number;
			public static assertTrue(param0: string, param1: boolean): void;
			public static assertEquals(param0: number, param1: number): void;
			public static assertEquals(param0: boolean, param1: boolean): void;
			public static assertEquals(param0: string, param1: string, param2: string): void;
			public constructor();
			public static assertEquals(param0: number, param1: number, param2: number): void;
			public static assertEquals(param0: string, param1: boolean, param2: boolean): void;
			public static assertNotNull(param0: any): void;
			public static format(param0: string, param1: any, param2: any): string;
			public static assertNotSame(param0: any, param1: any): void;
			public static fail(): void;
			public static assertEquals(param0: string, param1: string): void;
			public toString(): string;
			public setUp(): void;
			public tearDown(): void;
			public getName(): string;
			public static assertNull(param0: string, param1: any): void;
			public run(param0: junit.framework.TestResult): void;
			public static assertEquals(param0: string, param1: any, param2: any): void;
			public runTest(): void;
			public static assertEquals(param0: string, param1: number, param2: number, param3: number): void;
			public static assertNotSame(param0: string, param1: any, param2: any): void;
			public setName(param0: string): void;
		}
	}
}

declare module junit {
	export module framework {
		export class TestFailure extends java.lang.Object {
			public static class: java.lang.Class<junit.framework.TestFailure>;
			public fFailedTest: junit.framework.Test;
			public fThrownException: java.lang.Throwable;
			public thrownException(): java.lang.Throwable;
			public toString(): string;
			public trace(): string;
			public failedTest(): junit.framework.Test;
			public constructor(param0: junit.framework.Test, param1: java.lang.Throwable);
			public isFailure(): boolean;
			public exceptionMessage(): string;
		}
	}
}

declare module junit {
	export module framework {
		export class TestListener extends java.lang.Object {
			public static class: java.lang.Class<junit.framework.TestListener>;
			/**
			 * Constructs a new instance of the junit.framework.TestListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				addError(param0: junit.framework.Test, param1: java.lang.Throwable): void;
				addFailure(param0: junit.framework.Test, param1: junit.framework.AssertionFailedError): void;
				endTest(param0: junit.framework.Test): void;
				startTest(param0: junit.framework.Test): void;
			});
			public constructor();
			public endTest(param0: junit.framework.Test): void;
			public addError(param0: junit.framework.Test, param1: java.lang.Throwable): void;
			public startTest(param0: junit.framework.Test): void;
			public addFailure(param0: junit.framework.Test, param1: junit.framework.AssertionFailedError): void;
		}
	}
}

declare module junit {
	export module framework {
		export class TestResult extends java.lang.Object {
			public static class: java.lang.Class<junit.framework.TestResult>;
			public fFailures: java.util.List<junit.framework.TestFailure>;
			public fErrors: java.util.List<junit.framework.TestFailure>;
			public fListeners: java.util.List<junit.framework.TestListener>;
			public fRunTests: number;
			public endTest(param0: junit.framework.Test): void;
			public startTest(param0: junit.framework.Test): void;
			public addFailure(param0: junit.framework.Test, param1: junit.framework.AssertionFailedError): void;
			public wasSuccessful(): boolean;
			public removeListener(param0: junit.framework.TestListener): void;
			public errorCount(): number;
			public constructor();
			public runCount(): number;
			public run(param0: junit.framework.TestCase): void;
			public addError(param0: junit.framework.Test, param1: java.lang.Throwable): void;
			public errors(): java.util.Enumeration<junit.framework.TestFailure>;
			public failures(): java.util.Enumeration<junit.framework.TestFailure>;
			public failureCount(): number;
			public stop(): void;
			public shouldStop(): boolean;
			public addListener(param0: junit.framework.TestListener): void;
			public runProtected(param0: junit.framework.Test, param1: junit.framework.Protectable): void;
		}
	}
}

declare module junit {
	export module framework {
		export class TestSuite extends java.lang.Object implements junit.framework.Test {
			public static class: java.lang.Class<junit.framework.TestSuite>;
			public testAt(param0: number): junit.framework.Test;
			public constructor(param0: java.lang.Class<any>, param1: string);
			public constructor(param0: Array<java.lang.Class<any>>, param1: string);
			public addTestSuite(param0: java.lang.Class<any>): void;
			public countTestCases(): number;
			public static createTest(param0: java.lang.Class<any>, param1: string): junit.framework.Test;
			public addTest(param0: junit.framework.Test): void;
			public constructor();
			public runTest(param0: junit.framework.Test, param1: junit.framework.TestResult): void;
			public tests(): java.util.Enumeration<junit.framework.Test>;
			public static getTestConstructor(param0: java.lang.Class<any>): java.lang.reflect.Constructor<any>;
			public static warning(param0: string): junit.framework.Test;
			public constructor(param0: Array<java.lang.Class<any>>);
			public toString(): string;
			public getName(): string;
			public testCount(): number;
			public run(param0: junit.framework.TestResult): void;
			public constructor(param0: java.lang.Class<any>);
			public constructor(param0: string);
			public setName(param0: string): void;
		}
	}
}

declare module junit {
	export module runner {
		export abstract class BaseTestRunner extends java.lang.Object implements junit.framework.TestListener {
			public static class: java.lang.Class<junit.runner.BaseTestRunner>;
			public static SUITE_METHODNAME: string;
			public testFailed(param0: number, param1: junit.framework.Test, param2: java.lang.Throwable): void;
			public startTest(param0: junit.framework.Test): void;
			public static getFilteredTrace(param0: string): string;
			public runFailed(param0: string): void;
			public static getPreference(param0: string): string;
			public static showStackRaw(): boolean;
			public getTest(param0: string): junit.framework.Test;
			public processArguments(param0: string[]): string;
			public useReloadingTestSuiteLoader(): boolean;
			public static getPreference(param0: string, param1: number): number;
			public static savePreferences(): void;
			public testStarted(param0: string): void;
			public clearStatus(): void;
			public endTest(param0: junit.framework.Test): void;
			public testEnded(param0: string): void;
			public addFailure(param0: junit.framework.Test, param1: junit.framework.AssertionFailedError): void;
			public static setPreferences(param0: java.util.Properties): void;
			public elapsedTimeAsString(param0: number): string;
			public static truncate(param0: string): string;
			public extractClassName(param0: string): string;
			public constructor();
			public static getPreferences(): java.util.Properties;
			public static setPreference(param0: string, param1: string): void;
			public addError(param0: junit.framework.Test, param1: java.lang.Throwable): void;
			public static getFilteredTrace(param0: java.lang.Throwable): string;
			public loadSuiteClass(param0: string): java.lang.Class<any>;
			public setLoading(param0: boolean): void;
		}
	}
}

declare module junit {
	export module runner {
		export class TestRunListener extends java.lang.Object {
			public static class: java.lang.Class<junit.runner.TestRunListener>;
			/**
			 * Constructs a new instance of the junit.runner.TestRunListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				testRunStarted(param0: string, param1: number): void;
				testRunEnded(param0: number): void;
				testRunStopped(param0: number): void;
				testStarted(param0: string): void;
				testEnded(param0: string): void;
				testFailed(param0: number, param1: string, param2: string): void;
			});
			public constructor();
			public static STATUS_FAILURE: number;
			public static STATUS_ERROR: number;
			public testRunStarted(param0: string, param1: number): void;
			public testEnded(param0: string): void;
			public testStarted(param0: string): void;
			public testFailed(param0: number, param1: string, param2: string): void;
			public testRunStopped(param0: number): void;
			public testRunEnded(param0: number): void;
		}
	}
}

declare module junit {
	export module runner {
		export class Version extends java.lang.Object {
			public static class: java.lang.Class<junit.runner.Version>;
			public static id(): string;
			public static main(param0: string[]): void;
		}
	}
}

declare module junit {
	export module textui {
		export class ResultPrinter extends java.lang.Object implements junit.framework.TestListener {
			public static class: java.lang.Class<junit.textui.ResultPrinter>;
			public endTest(param0: junit.framework.Test): void;
			public startTest(param0: junit.framework.Test): void;
			public printDefect(param0: junit.framework.TestFailure, param1: number): void;
			public constructor(param0: java.io.PrintStream);
			public printDefectTrace(param0: junit.framework.TestFailure): void;
			public addFailure(param0: junit.framework.Test, param1: junit.framework.AssertionFailedError): void;
			public printErrors(param0: junit.framework.TestResult): void;
			public elapsedTimeAsString(param0: number): string;
			public printFailures(param0: junit.framework.TestResult): void;
			public getWriter(): java.io.PrintStream;
			public printDefectHeader(param0: junit.framework.TestFailure, param1: number): void;
			public addError(param0: junit.framework.Test, param1: java.lang.Throwable): void;
			public printDefects(param0: java.util.Enumeration<junit.framework.TestFailure>, param1: number, param2: string): void;
			public printFooter(param0: junit.framework.TestResult): void;
			public printHeader(param0: number): void;
		}
	}
}

declare module junit {
	export module textui {
		export class TestRunner extends junit.runner.BaseTestRunner {
			public static class: java.lang.Class<junit.textui.TestRunner>;
			public static SUCCESS_EXIT: number;
			public static FAILURE_EXIT: number;
			public static EXCEPTION_EXIT: number;
			public testFailed(param0: number, param1: junit.framework.Test, param2: java.lang.Throwable): void;
			public testEnded(param0: string): void;
			public endTest(param0: junit.framework.Test): void;
			public constructor(param0: junit.textui.ResultPrinter);
			public createTestResult(): junit.framework.TestResult;
			public pause(param0: boolean): void;
			public startTest(param0: junit.framework.Test): void;
			public constructor(param0: java.io.PrintStream);
			public runFailed(param0: string): void;
			public addFailure(param0: junit.framework.Test, param1: junit.framework.AssertionFailedError): void;
			public constructor();
			public doRun(param0: junit.framework.Test, param1: boolean): junit.framework.TestResult;
			public static run(param0: junit.framework.Test): junit.framework.TestResult;
			public runSingleMethod(param0: string, param1: string, param2: boolean): junit.framework.TestResult;
			public start(param0: string[]): junit.framework.TestResult;
			public static main(param0: string[]): void;
			public addError(param0: junit.framework.Test, param1: java.lang.Throwable): void;
			public doRun(param0: junit.framework.Test): junit.framework.TestResult;
			public static runAndWait(param0: junit.framework.Test): void;
			public testStarted(param0: string): void;
			public setPrinter(param0: junit.textui.ResultPrinter): void;
			public static run(param0: java.lang.Class<any>): void;
		}
	}
}

declare module org {
	export module junit {
		export class After extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<org.junit.After>;
			/**
			 * Constructs a new instance of the org.junit.After interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module junit {
		export class AfterClass extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<org.junit.AfterClass>;
			/**
			 * Constructs a new instance of the org.junit.AfterClass interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module junit {
		export class Assert extends java.lang.Object {
			public static class: java.lang.Class<org.junit.Assert>;
			/** @deprecated */
			public static assertThat(param0: any, param1: org.hamcrest.Matcher): void;
			public static assertArrayEquals(param0: number[], param1: number[], param2: number): void;
			public static assertSame(param0: any, param1: any): void;
			public static assertSame(param0: string, param1: any, param2: any): void;
			public static fail(param0: string): void;
			public static assertNull(param0: any): void;
			public static assertNotNull(param0: string, param1: any): void;
			public static assertFalse(param0: boolean): void;
			public static assertEquals(param0: any, param1: any): void;
			public static assertNotEquals(param0: any, param1: any): void;
			public static assertArrayEquals(param0: string, param1: boolean[], param2: boolean[]): void;
			public static assertFalse(param0: string, param1: boolean): void;
			public static assertNotEquals(param0: string, param1: number, param2: number, param3: number): void;
			public static assertArrayEquals(param0: string, param1: any[], param2: any[]): void;
			public static assertTrue(param0: boolean): void;
			public static assertNotEquals(param0: number, param1: number, param2: number): void;
			public static assertEquals(param0: string, param1: number, param2: number): void;
			public static assertTrue(param0: string, param1: boolean): void;
			public static assertArrayEquals(param0: boolean[], param1: boolean[]): void;
			/** @deprecated */
			public static assertEquals(param0: string, param1: number, param2: number): void;
			public static assertEquals(param0: number, param1: number): void;
			/** @deprecated */
			public static assertEquals(param0: number, param1: number): void;
			public constructor();
			public static assertEquals(param0: number, param1: number, param2: number): void;
			public static assertNotEquals(param0: string, param1: number, param2: number): void;
			public static assertArrayEquals(param0: any[], param1: any[]): void;
			public static assertArrayEquals(param0: string[], param1: string[]): void;
			public static assertThrows(param0: string, param1: java.lang.Class<any>, param2: org.junit.function.ThrowingRunnable): java.lang.Throwable;
			public static assertNotNull(param0: any): void;
			/** @deprecated */
			public static assertEquals(param0: string, param1: any[], param2: any[]): void;
			public static assertNotSame(param0: any, param1: any): void;
			public static assertArrayEquals(param0: number[], param1: number[]): void;
			public static fail(): void;
			public static assertArrayEquals(param0: string, param1: string[], param2: string[]): void;
			public static assertNotEquals(param0: string, param1: any, param2: any): void;
			public static assertArrayEquals(param0: string, param1: number[], param2: number[], param3: number): void;
			/** @deprecated */
			public static assertThat(param0: string, param1: any, param2: org.hamcrest.Matcher): void;
			public static assertArrayEquals(param0: string, param1: number[], param2: number[]): void;
			public static assertNull(param0: string, param1: any): void;
			public static assertEquals(param0: string, param1: any, param2: any): void;
			public static assertNotEquals(param0: number, param1: number): void;
			/** @deprecated */
			public static assertEquals(param0: any[], param1: any[]): void;
			public static assertThrows(param0: java.lang.Class<any>, param1: org.junit.function.ThrowingRunnable): java.lang.Throwable;
			public static assertEquals(param0: string, param1: number, param2: number, param3: number): void;
			public static assertNotSame(param0: string, param1: any, param2: any): void;
		}
	}
}

declare module org {
	export module junit {
		export class Assume extends java.lang.Object {
			public static class: java.lang.Class<org.junit.Assume>;
			public static assumeFalse(param0: string, param1: boolean): void;
			public static assumeTrue(param0: string, param1: boolean): void;
			/** @deprecated */
			public constructor();
			public static assumeFalse(param0: boolean): void;
			public static assumeThat(param0: any, param1: org.hamcrest.Matcher): void;
			public static assumeThat(param0: string, param1: any, param2: org.hamcrest.Matcher): void;
			public static assumeNotNull(param0: any[]): void;
			public static assumeNoException(param0: java.lang.Throwable): void;
			public static assumeTrue(param0: boolean): void;
			public static assumeNoException(param0: string, param1: java.lang.Throwable): void;
		}
	}
}

declare module org {
	export module junit {
		export class AssumptionViolatedException extends org.junit.internal.AssumptionViolatedException {
			public static class: java.lang.Class<org.junit.AssumptionViolatedException>;
			/** @deprecated */
			public constructor(param0: string, param1: boolean, param2: any, param3: org.hamcrest.Matcher<any>);
			/** @deprecated */
			public constructor(param0: any, param1: org.hamcrest.Matcher<any>);
			public constructor(param0: any, param1: org.hamcrest.Matcher);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			/** @deprecated */
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			/** @deprecated */
			public constructor(param0: string, param1: any, param2: org.hamcrest.Matcher<any>);
			public constructor(param0: string);
			/** @deprecated */
			public constructor(param0: string);
			public constructor(param0: string, param1: any, param2: org.hamcrest.Matcher);
		}
	}
}

declare module org {
	export module junit {
		export class Before extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<org.junit.Before>;
			/**
			 * Constructs a new instance of the org.junit.Before interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module junit {
		export class BeforeClass extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<org.junit.BeforeClass>;
			/**
			 * Constructs a new instance of the org.junit.BeforeClass interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module junit {
		export class ClassRule extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<org.junit.ClassRule>;
			/**
			 * Constructs a new instance of the org.junit.ClassRule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				order(): number;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public order(): number;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module junit {
		export class ComparisonFailure extends java.lang.AssertionError {
			public static class: java.lang.Class<org.junit.ComparisonFailure>;
			public getMessage(): string;
			public constructor(param0: boolean);
			public getActual(): string;
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: number);
			public constructor(param0: string, param1: string, param2: string);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor();
			public getExpected(): string;
			public constructor(param0: any);
			public constructor(param0: string);
		}
		export module ComparisonFailure {
			export class ComparisonCompactor extends java.lang.Object {
				public static class: java.lang.Class<org.junit.ComparisonFailure.ComparisonCompactor>;
				public compact(param0: string): string;
				public constructor(param0: number, param1: string, param2: string);
			}
			export module ComparisonCompactor {
				export class DiffExtractor extends java.lang.Object {
					public static class: java.lang.Class<org.junit.ComparisonFailure.ComparisonCompactor.DiffExtractor>;
					public expectedDiff(): string;
					public compactPrefix(): string;
					public compactSuffix(): string;
					public actualDiff(): string;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export class FixMethodOrder extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<org.junit.FixMethodOrder>;
			/**
			 * Constructs a new instance of the org.junit.FixMethodOrder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): org.junit.runners.MethodSorters;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public annotationType(): java.lang.Class<any>;
			public value(): org.junit.runners.MethodSorters;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module junit {
		export class Ignore extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<org.junit.Ignore>;
			/**
			 * Constructs a new instance of the org.junit.Ignore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public value(): string;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module junit {
		export class Rule extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<org.junit.Rule>;
			/**
			 * Constructs a new instance of the org.junit.Rule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				order(): number;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public static DEFAULT_ORDER: number;
			public equals(param0: any): boolean;
			public toString(): string;
			public order(): number;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module junit {
		export class Test extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<org.junit.Test>;
			/**
			 * Constructs a new instance of the org.junit.Test interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				expected(): java.lang.Class<any>;
				timeout(): number;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public timeout(): number;
			public toString(): string;
			public expected(): java.lang.Class<any>;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
		export module Test {
			export class None extends java.lang.Throwable {
				public static class: java.lang.Class<org.junit.Test.None>;
			}
		}
	}
}

declare module org {
	export module junit {
		export class TestCouldNotBeSkippedException extends java.lang.RuntimeException {
			public static class: java.lang.Class<org.junit.TestCouldNotBeSkippedException>;
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor(param0: org.junit.internal.AssumptionViolatedException);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export class ParallelComputer extends org.junit.runner.Computer {
				public static class: java.lang.Class<org.junit.experimental.ParallelComputer>;
				public constructor(param0: boolean, param1: boolean);
				public getSuite(param0: org.junit.runners.model.RunnerBuilder, param1: Array<java.lang.Class<any>>): org.junit.runner.Runner;
				public static methods(): org.junit.runner.Computer;
				public static classes(): org.junit.runner.Computer;
				public getRunner(param0: org.junit.runners.model.RunnerBuilder, param1: java.lang.Class<any>): org.junit.runner.Runner;
				public constructor();
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module categories {
				export class Categories extends org.junit.runners.Suite {
					public static class: java.lang.Class<org.junit.experimental.categories.Categories>;
					public constructor(param0: java.lang.Class<any>, param1: org.junit.runners.model.RunnerBuilder);
					public constructor(param0: java.lang.Class<any>);
					public constructor(param0: org.junit.runners.model.RunnerBuilder, param1: Array<java.lang.Class<any>>);
					public constructor(param0: java.lang.Class<any>, param1: java.util.List<org.junit.runner.Runner>);
					public constructor();
					public filter(param0: org.junit.runner.manipulation.Filter): void;
					public constructor(param0: java.lang.Class<any>, param1: Array<java.lang.Class<any>>);
					public getDescription(): org.junit.runner.Description;
					public constructor(param0: org.junit.runners.model.TestClass);
					public constructor(param0: org.junit.runners.model.RunnerBuilder, param1: java.lang.Class<any>, param2: Array<java.lang.Class<any>>);
					public order(param0: org.junit.runner.manipulation.Orderer): void;
				}
				export module Categories {
					export class CategoryFilter extends org.junit.runner.manipulation.Filter {
						public static class: java.lang.Class<org.junit.experimental.categories.Categories.CategoryFilter>;
						public constructor();
						public shouldRun(param0: org.junit.runner.Description): boolean;
						/** @deprecated */
						public constructor(param0: java.lang.Class<any>, param1: java.lang.Class<any>);
						public static include(param0: boolean, param1: Array<java.lang.Class<any>>): org.junit.experimental.categories.Categories.CategoryFilter;
						public static include(param0: Array<java.lang.Class<any>>): org.junit.experimental.categories.Categories.CategoryFilter;
						public static exclude(param0: Array<java.lang.Class<any>>): org.junit.experimental.categories.Categories.CategoryFilter;
						public constructor(param0: boolean, param1: java.util.Set<java.lang.Class<any>>, param2: boolean, param3: java.util.Set<java.lang.Class<any>>);
						public toString(): string;
						public static categoryFilter(param0: boolean, param1: java.util.Set<java.lang.Class<any>>, param2: boolean, param3: java.util.Set<java.lang.Class<any>>): org.junit.experimental.categories.Categories.CategoryFilter;
						public static exclude(param0: java.lang.Class<any>): org.junit.experimental.categories.Categories.CategoryFilter;
						public static include(param0: java.lang.Class<any>): org.junit.experimental.categories.Categories.CategoryFilter;
						public describe(): string;
						public static exclude(param0: boolean, param1: Array<java.lang.Class<any>>): org.junit.experimental.categories.Categories.CategoryFilter;
					}
					export class ExcludeCategory extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.junit.experimental.categories.Categories.ExcludeCategory>;
						/**
						 * Constructs a new instance of the org.junit.experimental.categories.Categories$ExcludeCategory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): Array<java.lang.Class<any>>;
							matchAny(): boolean;
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public matchAny(): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public value(): Array<java.lang.Class<any>>;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
					export class IncludeCategory extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.junit.experimental.categories.Categories.IncludeCategory>;
						/**
						 * Constructs a new instance of the org.junit.experimental.categories.Categories$IncludeCategory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): Array<java.lang.Class<any>>;
							matchAny(): boolean;
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public matchAny(): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public value(): Array<java.lang.Class<any>>;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module categories {
				export class Category extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.junit.experimental.categories.Category>;
					/**
					 * Constructs a new instance of the org.junit.experimental.categories.Category interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): Array<java.lang.Class<any>>;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
					public value(): Array<java.lang.Class<any>>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module categories {
				export abstract class CategoryFilterFactory extends java.lang.Object implements org.junit.runner.FilterFactory {
					public static class: java.lang.Class<org.junit.experimental.categories.CategoryFilterFactory>;
					public createFilter(param0: org.junit.runner.FilterFactoryParams): org.junit.runner.manipulation.Filter;
					public createFilter(param0: java.util.List<java.lang.Class<any>>): org.junit.runner.manipulation.Filter;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module categories {
				export class CategoryValidator extends org.junit.validator.AnnotationValidator {
					public static class: java.lang.Class<org.junit.experimental.categories.CategoryValidator>;
					public constructor();
					public validateAnnotatedMethod(param0: org.junit.runners.model.FrameworkMethod): java.util.List<java.lang.Exception>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module categories {
				export class ExcludeCategories extends org.junit.experimental.categories.CategoryFilterFactory {
					public static class: java.lang.Class<org.junit.experimental.categories.ExcludeCategories>;
					public createFilter(param0: org.junit.runner.FilterFactoryParams): org.junit.runner.manipulation.Filter;
					public constructor();
					public createFilter(param0: java.util.List<java.lang.Class<any>>): org.junit.runner.manipulation.Filter;
				}
				export module ExcludeCategories {
					export class ExcludesAny extends org.junit.experimental.categories.Categories.CategoryFilter {
						public static class: java.lang.Class<org.junit.experimental.categories.ExcludeCategories.ExcludesAny>;
						public constructor();
						public constructor(param0: java.util.List<java.lang.Class<any>>);
						/** @deprecated */
						public constructor(param0: java.lang.Class<any>, param1: java.lang.Class<any>);
						public describe(): string;
						public constructor(param0: boolean, param1: java.util.Set<java.lang.Class<any>>, param2: boolean, param3: java.util.Set<java.lang.Class<any>>);
						public constructor(param0: java.util.Set<java.lang.Class<any>>);
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module categories {
				export class IncludeCategories extends org.junit.experimental.categories.CategoryFilterFactory {
					public static class: java.lang.Class<org.junit.experimental.categories.IncludeCategories>;
					public createFilter(param0: org.junit.runner.FilterFactoryParams): org.junit.runner.manipulation.Filter;
					public constructor();
					public createFilter(param0: java.util.List<java.lang.Class<any>>): org.junit.runner.manipulation.Filter;
				}
				export module IncludeCategories {
					export class IncludesAny extends org.junit.experimental.categories.Categories.CategoryFilter {
						public static class: java.lang.Class<org.junit.experimental.categories.IncludeCategories.IncludesAny>;
						public constructor();
						public constructor(param0: java.util.List<java.lang.Class<any>>);
						/** @deprecated */
						public constructor(param0: java.lang.Class<any>, param1: java.lang.Class<any>);
						public describe(): string;
						public constructor(param0: boolean, param1: java.util.Set<java.lang.Class<any>>, param2: boolean, param3: java.util.Set<java.lang.Class<any>>);
						public constructor(param0: java.util.Set<java.lang.Class<any>>);
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module max {
				export class CouldNotReadCoreException extends java.lang.Exception {
					public static class: java.lang.Class<org.junit.experimental.max.CouldNotReadCoreException>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module max {
				export class MaxCore extends java.lang.Object {
					public static class: java.lang.Class<org.junit.experimental.max.MaxCore>;
					/** @deprecated */
					public static forFolder(param0: string): org.junit.experimental.max.MaxCore;
					public run(param0: org.junit.runner.Request, param1: org.junit.runner.JUnitCore): org.junit.runner.Result;
					public run(param0: java.lang.Class<any>): org.junit.runner.Result;
					public run(param0: org.junit.runner.Request): org.junit.runner.Result;
					public sortedLeavesForTest(param0: org.junit.runner.Request): java.util.List<org.junit.runner.Description>;
					public sortRequest(param0: org.junit.runner.Request): org.junit.runner.Request;
					public static storedLocally(param0: java.io.File): org.junit.experimental.max.MaxCore;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module max {
				export class MaxHistory extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.junit.experimental.max.MaxHistory>;
					public testComparator(): java.util.Comparator<org.junit.runner.Description>;
					public static forFolder(param0: java.io.File): org.junit.experimental.max.MaxHistory;
					public listener(): org.junit.runner.notification.RunListener;
				}
				export module MaxHistory {
					export class RememberingListener extends org.junit.runner.notification.RunListener {
						public static class: java.lang.Class<org.junit.experimental.max.MaxHistory.RememberingListener>;
						public testStarted(param0: org.junit.runner.Description): void;
						public testFailure(param0: org.junit.runner.notification.Failure): void;
						public testRunFinished(param0: org.junit.runner.Result): void;
						public testFinished(param0: org.junit.runner.Description): void;
					}
					export class TestComparator extends java.util.Comparator<org.junit.runner.Description> {
						public static class: java.lang.Class<org.junit.experimental.max.MaxHistory.TestComparator>;
						public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
						public compare(param0: org.junit.runner.Description, param1: org.junit.runner.Description): number;
						public equals(param0: any): boolean;
						public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public static comparing(param0: any /* any*/): java.util.Comparator<any>;
						public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
						public reversed(): java.util.Comparator<any>;
						public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
						public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
						public static naturalOrder(): java.util.Comparator<any>;
						public compare(param0: any, param1: any): number;
						public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module results {
				export class FailureList extends java.lang.Object {
					public static class: java.lang.Class<org.junit.experimental.results.FailureList>;
					public constructor(param0: java.util.List<org.junit.runner.notification.Failure>);
					public result(): org.junit.runner.Result;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module results {
				export class PrintableResult extends java.lang.Object {
					public static class: java.lang.Class<org.junit.experimental.results.PrintableResult>;
					public static testResult(param0: java.lang.Class<any>): org.junit.experimental.results.PrintableResult;
					public failureCount(): number;
					public toString(): string;
					public constructor(param0: java.util.List<org.junit.runner.notification.Failure>);
					public static testResult(param0: org.junit.runner.Request): org.junit.experimental.results.PrintableResult;
					public failures(): java.util.List<org.junit.runner.notification.Failure>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module results {
				export class ResultMatchers extends java.lang.Object {
					public static class: java.lang.Class<org.junit.experimental.results.ResultMatchers>;
					public static isSuccessful(): org.hamcrest.Matcher<org.junit.experimental.results.PrintableResult>;
					/** @deprecated */
					public constructor();
					public static hasFailureContaining(param0: string): org.hamcrest.Matcher<org.junit.experimental.results.PrintableResult>;
					public static hasSingleFailureMatching(param0: org.hamcrest.Matcher<java.lang.Throwable>): org.hamcrest.Matcher<org.junit.experimental.results.PrintableResult>;
					public static failureCountIs(param0: number): org.hamcrest.Matcher<org.junit.experimental.results.PrintableResult>;
					public static hasSingleFailureContaining(param0: string): org.hamcrest.Matcher<any>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module runners {
				export class Enclosed extends org.junit.runners.Suite {
					public static class: java.lang.Class<org.junit.experimental.runners.Enclosed>;
					public constructor(param0: java.lang.Class<any>, param1: org.junit.runners.model.RunnerBuilder);
					public constructor(param0: java.lang.Class<any>);
					public constructor(param0: org.junit.runners.model.RunnerBuilder, param1: Array<java.lang.Class<any>>);
					public constructor(param0: java.lang.Class<any>, param1: java.util.List<org.junit.runner.Runner>);
					public constructor();
					public filter(param0: org.junit.runner.manipulation.Filter): void;
					public constructor(param0: java.lang.Class<any>, param1: Array<java.lang.Class<any>>);
					public getDescription(): org.junit.runner.Description;
					public constructor(param0: org.junit.runners.model.TestClass);
					public constructor(param0: org.junit.runners.model.RunnerBuilder, param1: java.lang.Class<any>, param2: Array<java.lang.Class<any>>);
					public order(param0: org.junit.runner.manipulation.Orderer): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module theories {
				export class DataPoint extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.junit.experimental.theories.DataPoint>;
					/**
					 * Constructs a new instance of the org.junit.experimental.theories.DataPoint interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string[];
						ignoredExceptions(): Array<java.lang.Class<any>>;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public ignoredExceptions(): Array<java.lang.Class<any>>;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public value(): string[];
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module theories {
				export class DataPoints extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.junit.experimental.theories.DataPoints>;
					/**
					 * Constructs a new instance of the org.junit.experimental.theories.DataPoints interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string[];
						ignoredExceptions(): Array<java.lang.Class<any>>;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public ignoredExceptions(): Array<java.lang.Class<any>>;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public value(): string[];
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module theories {
				export class FromDataPoints extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.junit.experimental.theories.FromDataPoints>;
					/**
					 * Constructs a new instance of the org.junit.experimental.theories.FromDataPoints interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public value(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module theories {
				export class ParameterSignature extends java.lang.Object {
					public static class: java.lang.Class<org.junit.experimental.theories.ParameterSignature>;
					public canAcceptValue(param0: any): boolean;
					public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
					public getAnnotation(param0: java.lang.Class<any>): java.lang.annotation.Annotation;
					public canAcceptType(param0: java.lang.Class<any>): boolean;
					public findDeepAnnotation(param0: java.lang.Class<any>): java.lang.annotation.Annotation;
					public canPotentiallyAcceptType(param0: java.lang.Class<any>): boolean;
					public getType(): java.lang.Class<any>;
					public static signatures(param0: java.lang.reflect.Constructor<any>): java.util.List<org.junit.experimental.theories.ParameterSignature>;
					public hasAnnotation(param0: java.lang.Class<any>): boolean;
					public static signatures(param0: java.lang.reflect.Method): java.util.ArrayList<org.junit.experimental.theories.ParameterSignature>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module theories {
				export abstract class ParameterSupplier extends java.lang.Object {
					public static class: java.lang.Class<org.junit.experimental.theories.ParameterSupplier>;
					public constructor();
					public getValueSources(param0: org.junit.experimental.theories.ParameterSignature): java.util.List<org.junit.experimental.theories.PotentialAssignment>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module theories {
				export class ParametersSuppliedBy extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.junit.experimental.theories.ParametersSuppliedBy>;
					/**
					 * Constructs a new instance of the org.junit.experimental.theories.ParametersSuppliedBy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): java.lang.Class<any>;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public value(): java.lang.Class<any>;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module theories {
				export abstract class PotentialAssignment extends java.lang.Object {
					public static class: java.lang.Class<org.junit.experimental.theories.PotentialAssignment>;
					public getValue(): any;
					public constructor();
					public getDescription(): string;
					public static forValue(param0: string, param1: any): org.junit.experimental.theories.PotentialAssignment;
				}
				export module PotentialAssignment {
					export class CouldNotGenerateValueException extends java.lang.Exception {
						public static class: java.lang.Class<org.junit.experimental.theories.PotentialAssignment.CouldNotGenerateValueException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module theories {
				export class Theories extends org.junit.runners.BlockJUnit4ClassRunner {
					public static class: java.lang.Class<org.junit.experimental.theories.Theories>;
					public collectInitializationErrors(param0: java.util.List<java.lang.Throwable>): void;
					public constructor(param0: java.lang.Class<any>);
					public constructor();
					public filter(param0: org.junit.runner.manipulation.Filter): void;
					public validateTestMethods(param0: java.util.List<java.lang.Throwable>): void;
					public computeTestMethods(): java.util.List<org.junit.runners.model.FrameworkMethod>;
					public validateConstructor(param0: java.util.List<java.lang.Throwable>): void;
					public getDescription(): org.junit.runner.Description;
					public methodBlock(param0: org.junit.runners.model.FrameworkMethod): org.junit.runners.model.Statement;
					public constructor(param0: org.junit.runners.model.TestClass);
					public order(param0: org.junit.runner.manipulation.Orderer): void;
				}
				export module Theories {
					export class TheoryAnchor extends org.junit.runners.model.Statement {
						public static class: java.lang.Class<org.junit.experimental.theories.Theories.TheoryAnchor>;
						public constructor();
						public handleDataPointSuccess(): void;
						public reportParameterizedError(param0: java.lang.Throwable, param1: any[]): void;
						public constructor(param0: org.junit.runners.model.FrameworkMethod, param1: org.junit.runners.model.TestClass);
						public runWithAssignment(param0: org.junit.experimental.theories.internal.Assignments): void;
						public evaluate(): void;
						public runWithIncompleteAssignment(param0: org.junit.experimental.theories.internal.Assignments): void;
						public runWithCompleteAssignment(param0: org.junit.experimental.theories.internal.Assignments): void;
						public handleAssumptionViolation(param0: org.junit.internal.AssumptionViolatedException): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module theories {
				export class Theory extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.junit.experimental.theories.Theory>;
					/**
					 * Constructs a new instance of the org.junit.experimental.theories.Theory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						nullsAccepted(): boolean;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
					public nullsAccepted(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module theories {
				export module internal {
					export class AllMembersSupplier extends org.junit.experimental.theories.ParameterSupplier {
						public static class: java.lang.Class<org.junit.experimental.theories.internal.AllMembersSupplier>;
						public getSingleDataPointFields(param0: org.junit.experimental.theories.ParameterSignature): java.util.Collection<java.lang.reflect.Field>;
						public constructor();
						public constructor(param0: org.junit.runners.model.TestClass);
						public getSingleDataPointMethods(param0: org.junit.experimental.theories.ParameterSignature): java.util.Collection<org.junit.runners.model.FrameworkMethod>;
						public getValueSources(param0: org.junit.experimental.theories.ParameterSignature): java.util.List<org.junit.experimental.theories.PotentialAssignment>;
						public getDataPointsFields(param0: org.junit.experimental.theories.ParameterSignature): java.util.Collection<java.lang.reflect.Field>;
						public getDataPointsMethods(param0: org.junit.experimental.theories.ParameterSignature): java.util.Collection<org.junit.runners.model.FrameworkMethod>;
					}
					export module AllMembersSupplier {
						export class MethodParameterValue extends org.junit.experimental.theories.PotentialAssignment {
							public static class: java.lang.Class<org.junit.experimental.theories.internal.AllMembersSupplier.MethodParameterValue>;
							public getValue(): any;
							public getDescription(): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module theories {
				export module internal {
					export class Assignments extends java.lang.Object {
						public static class: java.lang.Class<org.junit.experimental.theories.internal.Assignments>;
						public getActualValues(param0: number, param1: number): any[];
						public getArgumentStrings(param0: boolean): any[];
						public isComplete(): boolean;
						public potentialsForNextUnassigned(): java.util.List<org.junit.experimental.theories.PotentialAssignment>;
						public static allUnassigned(param0: java.lang.reflect.Method, param1: org.junit.runners.model.TestClass): org.junit.experimental.theories.internal.Assignments;
						public getConstructorArguments(): any[];
						public getMethodArguments(): any[];
						public assignNext(param0: org.junit.experimental.theories.PotentialAssignment): org.junit.experimental.theories.internal.Assignments;
						public nextUnassigned(): org.junit.experimental.theories.ParameterSignature;
						public getAllArguments(): any[];
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module theories {
				export module internal {
					export class BooleanSupplier extends org.junit.experimental.theories.ParameterSupplier {
						public static class: java.lang.Class<org.junit.experimental.theories.internal.BooleanSupplier>;
						public constructor();
						public getValueSources(param0: org.junit.experimental.theories.ParameterSignature): java.util.List<org.junit.experimental.theories.PotentialAssignment>;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module theories {
				export module internal {
					export class EnumSupplier extends org.junit.experimental.theories.ParameterSupplier {
						public static class: java.lang.Class<org.junit.experimental.theories.internal.EnumSupplier>;
						public constructor();
						public constructor(param0: java.lang.Class<any>);
						public getValueSources(param0: org.junit.experimental.theories.ParameterSignature): java.util.List<org.junit.experimental.theories.PotentialAssignment>;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module theories {
				export module internal {
					export class ParameterizedAssertionError extends java.lang.AssertionError {
						public static class: java.lang.Class<org.junit.experimental.theories.internal.ParameterizedAssertionError>;
						public constructor();
						public constructor(param0: java.lang.Throwable, param1: string, param2: any[]);
						public static join(param0: string, param1: any[]): string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: any);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: number);
						public static join(param0: string, param1: java.util.Collection<any>): string;
						public constructor(param0: boolean);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module theories {
				export module internal {
					export class SpecificDataPointsSupplier extends org.junit.experimental.theories.internal.AllMembersSupplier {
						public static class: java.lang.Class<org.junit.experimental.theories.internal.SpecificDataPointsSupplier>;
						public getSingleDataPointFields(param0: org.junit.experimental.theories.ParameterSignature): java.util.Collection<java.lang.reflect.Field>;
						public constructor();
						public constructor(param0: org.junit.runners.model.TestClass);
						public getSingleDataPointMethods(param0: org.junit.experimental.theories.ParameterSignature): java.util.Collection<org.junit.runners.model.FrameworkMethod>;
						public getDataPointsFields(param0: org.junit.experimental.theories.ParameterSignature): java.util.Collection<java.lang.reflect.Field>;
						public getDataPointsMethods(param0: org.junit.experimental.theories.ParameterSignature): java.util.Collection<org.junit.runners.model.FrameworkMethod>;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module theories {
				export module suppliers {
					export class TestedOn extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.junit.experimental.theories.suppliers.TestedOn>;
						/**
						 * Constructs a new instance of the org.junit.experimental.theories.suppliers.TestedOn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							ints(): number[];
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
						public ints(): number[];
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module experimental {
			export module theories {
				export module suppliers {
					export class TestedOnSupplier extends org.junit.experimental.theories.ParameterSupplier {
						public static class: java.lang.Class<org.junit.experimental.theories.suppliers.TestedOnSupplier>;
						public constructor();
						public getValueSources(param0: org.junit.experimental.theories.ParameterSignature): java.util.List<org.junit.experimental.theories.PotentialAssignment>;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module "function" {
			export class ThrowingRunnable extends java.lang.Object {
				public static class: java.lang.Class<org.junit.function.ThrowingRunnable>;
				/**
				 * Constructs a new instance of the org.junit.function.ThrowingRunnable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					run(): void;
				});
				public constructor();
				public run(): void;
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export class ArrayComparisonFailure extends java.lang.AssertionError {
				public static class: java.lang.Class<org.junit.internal.ArrayComparisonFailure>;
				public constructor(param0: boolean);
				public getCause(): java.lang.Throwable;
				public toString(): string;
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.AssertionError, param2: number);
				public addDimension(param0: number): void;
				public constructor(param0: number);
				public constructor(param0: string, param1: java.lang.Throwable);
				public getMessage(): string;
				public constructor(param0: any);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export class AssumptionViolatedException extends java.lang.RuntimeException {
				public static class: java.lang.Class<org.junit.internal.AssumptionViolatedException>;
				/** @deprecated */
				public constructor(param0: string, param1: boolean, param2: any, param3: org.hamcrest.Matcher<any>);
				public describeTo(param0: org.hamcrest.Description): void;
				public constructor(param0: string, param1: java.lang.Throwable);
				/** @deprecated */
				public constructor(param0: string);
				public getMessage(): string;
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				/** @deprecated */
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				/** @deprecated */
				public constructor(param0: any, param1: org.hamcrest.Matcher<any>);
				/** @deprecated */
				public constructor(param0: string, param1: any, param2: org.hamcrest.Matcher<any>);
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export class Checks extends java.lang.Object {
				public static class: java.lang.Class<org.junit.internal.Checks>;
				public static notNull(param0: any): any;
				public static notNull(param0: any, param1: string): any;
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export class Classes extends java.lang.Object {
				public static class: java.lang.Class<org.junit.internal.Classes>;
				/** @deprecated */
				public constructor();
				public getClass(): java.lang.Class<any>;
				public static getClass(param0: string, param1: java.lang.Class<any>): java.lang.Class<any>;
				public static getClass(param0: string): java.lang.Class<any>;
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export abstract class ComparisonCriteria extends java.lang.Object {
				public static class: java.lang.Class<org.junit.internal.ComparisonCriteria>;
				public arrayEquals(param0: string, param1: any, param2: any): void;
				public constructor();
				public assertElementsEqual(param0: any, param1: any): void;
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export class ExactComparisonCriteria extends org.junit.internal.ComparisonCriteria {
				public static class: java.lang.Class<org.junit.internal.ExactComparisonCriteria>;
				public constructor();
				public assertElementsEqual(param0: any, param1: any): void;
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export class InexactComparisonCriteria extends org.junit.internal.ComparisonCriteria {
				public static class: java.lang.Class<org.junit.internal.InexactComparisonCriteria>;
				public fDelta: any;
				public constructor(param0: number);
				public constructor();
				public assertElementsEqual(param0: any, param1: any): void;
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export class JUnitSystem extends java.lang.Object {
				public static class: java.lang.Class<org.junit.internal.JUnitSystem>;
				/**
				 * Constructs a new instance of the org.junit.internal.JUnitSystem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					exit(param0: number): void;
					out(): java.io.PrintStream;
				});
				public constructor();
				public out(): java.io.PrintStream;
				/** @deprecated */
				public exit(param0: number): void;
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export class MethodSorter extends java.lang.Object {
				public static class: java.lang.Class<org.junit.internal.MethodSorter>;
				public static DEFAULT: java.util.Comparator<java.lang.reflect.Method>;
				public static NAME_ASCENDING: java.util.Comparator<java.lang.reflect.Method>;
				public static getDeclaredMethods(param0: java.lang.Class<any>): Array<java.lang.reflect.Method>;
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export class RealSystem extends java.lang.Object implements org.junit.internal.JUnitSystem {
				public static class: java.lang.Class<org.junit.internal.RealSystem>;
				public out(): java.io.PrintStream;
				/** @deprecated */
				public exit(param0: number): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export class SerializableMatcherDescription<T>  extends org.hamcrest.BaseMatcher<any> implements java.io.Serializable  {
				public static class: java.lang.Class<org.junit.internal.SerializableMatcherDescription<any>>;
				public describeTo(param0: org.hamcrest.Description): void;
				public matches(param0: any): boolean;
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export class SerializableValueDescription extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.junit.internal.SerializableValueDescription>;
				public toString(): string;
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export class TextListener extends org.junit.runner.notification.RunListener {
				public static class: java.lang.Class<org.junit.internal.TextListener>;
				public printHeader(param0: number): void;
				public printFailures(param0: org.junit.runner.Result): void;
				public constructor(param0: java.io.PrintStream);
				public testIgnored(param0: org.junit.runner.Description): void;
				public constructor(param0: org.junit.internal.JUnitSystem);
				public elapsedTimeAsString(param0: number): string;
				public printFailure(param0: org.junit.runner.notification.Failure, param1: string): void;
				public testRunFinished(param0: org.junit.runner.Result): void;
				public testFailure(param0: org.junit.runner.notification.Failure): void;
				public printFooter(param0: org.junit.runner.Result): void;
				public constructor();
				public testStarted(param0: org.junit.runner.Description): void;
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export class Throwables extends java.lang.Object {
				public static class: java.lang.Class<org.junit.internal.Throwables>;
				public static getStacktrace(param0: java.lang.Throwable): string;
				public static getTrimmedStackTrace(param0: java.lang.Throwable): string;
				public static rethrowAsException(param0: java.lang.Throwable): java.lang.Exception;
			}
			export module Throwables {
				export abstract class State {
					public static class: java.lang.Class<org.junit.internal.Throwables.State>;
					public static PROCESSING_OTHER_CODE: org.junit.internal.Throwables.State;
					public static PROCESSING_TEST_FRAMEWORK_CODE: org.junit.internal.Throwables.State;
					public static PROCESSING_REFLECTION_CODE: org.junit.internal.Throwables.State;
					public static DONE: org.junit.internal.Throwables.State;
					public static valueOf(param0: string): org.junit.internal.Throwables.State;
					public static values(): Array<org.junit.internal.Throwables.State>;
					public processStackTraceElement(param0: java.lang.StackTraceElement): org.junit.internal.Throwables.State;
					public processLine(param0: string): org.junit.internal.Throwables.State;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module builders {
				export class AllDefaultPossibilitiesBuilder extends org.junit.runners.model.RunnerBuilder {
					public static class: java.lang.Class<org.junit.internal.builders.AllDefaultPossibilitiesBuilder>;
					public runnerForClass(param0: java.lang.Class<any>): org.junit.runner.Runner;
					public ignoredBuilder(): org.junit.internal.builders.IgnoredBuilder;
					public constructor();
					public annotatedBuilder(): org.junit.internal.builders.AnnotatedBuilder;
					public junit4Builder(): org.junit.internal.builders.JUnit4Builder;
					public junit3Builder(): org.junit.internal.builders.JUnit3Builder;
					/** @deprecated */
					public constructor(param0: boolean);
					public suiteMethodBuilder(): org.junit.runners.model.RunnerBuilder;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module builders {
				export class AnnotatedBuilder extends org.junit.runners.model.RunnerBuilder {
					public static class: java.lang.Class<org.junit.internal.builders.AnnotatedBuilder>;
					public runnerForClass(param0: java.lang.Class<any>): org.junit.runner.Runner;
					public buildRunner(param0: java.lang.Class<any>, param1: java.lang.Class<any>): org.junit.runner.Runner;
					public constructor();
					public constructor(param0: org.junit.runners.model.RunnerBuilder);
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module builders {
				export class IgnoredBuilder extends org.junit.runners.model.RunnerBuilder {
					public static class: java.lang.Class<org.junit.internal.builders.IgnoredBuilder>;
					public runnerForClass(param0: java.lang.Class<any>): org.junit.runner.Runner;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module builders {
				export class IgnoredClassRunner extends org.junit.runner.Runner {
					public static class: java.lang.Class<org.junit.internal.builders.IgnoredClassRunner>;
					public constructor(param0: java.lang.Class<any>);
					public constructor();
					public run(param0: org.junit.runner.notification.RunNotifier): void;
					public getDescription(): org.junit.runner.Description;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module builders {
				export class JUnit3Builder extends org.junit.runners.model.RunnerBuilder {
					public static class: java.lang.Class<org.junit.internal.builders.JUnit3Builder>;
					public runnerForClass(param0: java.lang.Class<any>): org.junit.runner.Runner;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module builders {
				export class JUnit4Builder extends org.junit.runners.model.RunnerBuilder {
					public static class: java.lang.Class<org.junit.internal.builders.JUnit4Builder>;
					public runnerForClass(param0: java.lang.Class<any>): org.junit.runner.Runner;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module builders {
				export class NullBuilder extends org.junit.runners.model.RunnerBuilder {
					public static class: java.lang.Class<org.junit.internal.builders.NullBuilder>;
					public runnerForClass(param0: java.lang.Class<any>): org.junit.runner.Runner;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module builders {
				export class SuiteMethodBuilder extends org.junit.runners.model.RunnerBuilder {
					public static class: java.lang.Class<org.junit.internal.builders.SuiteMethodBuilder>;
					public runnerForClass(param0: java.lang.Class<any>): org.junit.runner.Runner;
					public hasSuiteMethod(param0: java.lang.Class<any>): boolean;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module management {
				export class FakeRuntimeMXBean extends java.lang.Object implements org.junit.internal.management.RuntimeMXBean {
					public static class: java.lang.Class<org.junit.internal.management.FakeRuntimeMXBean>;
					public getInputArguments(): java.util.List<string>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module management {
				export class FakeThreadMXBean extends java.lang.Object implements org.junit.internal.management.ThreadMXBean {
					public static class: java.lang.Class<org.junit.internal.management.FakeThreadMXBean>;
					public isThreadCpuTimeSupported(): boolean;
					public getThreadCpuTime(param0: number): number;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module management {
				export class ManagementFactory extends java.lang.Object {
					public static class: java.lang.Class<org.junit.internal.management.ManagementFactory>;
					public static getThreadMXBean(): org.junit.internal.management.ThreadMXBean;
					public constructor();
					public static getRuntimeMXBean(): org.junit.internal.management.RuntimeMXBean;
				}
				export module ManagementFactory {
					export class FactoryHolder extends java.lang.Object {
						public static class: java.lang.Class<org.junit.internal.management.ManagementFactory.FactoryHolder>;
					}
					export class RuntimeHolder extends java.lang.Object {
						public static class: java.lang.Class<org.junit.internal.management.ManagementFactory.RuntimeHolder>;
					}
					export class ThreadHolder extends java.lang.Object {
						public static class: java.lang.Class<org.junit.internal.management.ManagementFactory.ThreadHolder>;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module management {
				export class ReflectiveRuntimeMXBean extends java.lang.Object implements org.junit.internal.management.RuntimeMXBean {
					public static class: java.lang.Class<org.junit.internal.management.ReflectiveRuntimeMXBean>;
					public getInputArguments(): java.util.List<string>;
				}
				export module ReflectiveRuntimeMXBean {
					export class Holder extends java.lang.Object {
						public static class: java.lang.Class<org.junit.internal.management.ReflectiveRuntimeMXBean.Holder>;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module management {
				export class ReflectiveThreadMXBean extends java.lang.Object implements org.junit.internal.management.ThreadMXBean {
					public static class: java.lang.Class<org.junit.internal.management.ReflectiveThreadMXBean>;
					public isThreadCpuTimeSupported(): boolean;
					public getThreadCpuTime(param0: number): number;
				}
				export module ReflectiveThreadMXBean {
					export class Holder extends java.lang.Object {
						public static class: java.lang.Class<org.junit.internal.management.ReflectiveThreadMXBean.Holder>;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module management {
				export class RuntimeMXBean extends java.lang.Object {
					public static class: java.lang.Class<org.junit.internal.management.RuntimeMXBean>;
					/**
					 * Constructs a new instance of the org.junit.internal.management.RuntimeMXBean interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getInputArguments(): java.util.List<string>;
					});
					public constructor();
					public getInputArguments(): java.util.List<string>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module management {
				export class ThreadMXBean extends java.lang.Object {
					public static class: java.lang.Class<org.junit.internal.management.ThreadMXBean>;
					/**
					 * Constructs a new instance of the org.junit.internal.management.ThreadMXBean interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getThreadCpuTime(param0: number): number;
						isThreadCpuTimeSupported(): boolean;
					});
					public constructor();
					public isThreadCpuTimeSupported(): boolean;
					public getThreadCpuTime(param0: number): number;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module matchers {
				export class StacktracePrintingMatcher<T>  extends org.hamcrest.TypeSafeMatcher<any> {
					public static class: java.lang.Class<org.junit.internal.matchers.StacktracePrintingMatcher<any>>;
					public static isThrowable(param0: org.hamcrest.Matcher): org.hamcrest.Matcher;
					public constructor(param0: org.hamcrest.Matcher<any>);
					public describeMismatchSafely(param0: any, param1: org.hamcrest.Description): void;
					public static isException(param0: org.hamcrest.Matcher): org.hamcrest.Matcher;
					public describeTo(param0: org.hamcrest.Description): void;
					public matchesSafely(param0: any): boolean;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module matchers {
				export class ThrowableCauseMatcher<T>  extends org.hamcrest.TypeSafeMatcher<any> {
					public static class: java.lang.Class<org.junit.internal.matchers.ThrowableCauseMatcher<any>>;
					public static hasCause(param0: org.hamcrest.Matcher): org.hamcrest.Matcher;
					public constructor(param0: org.hamcrest.Matcher<any>);
					public describeMismatchSafely(param0: any, param1: org.hamcrest.Description): void;
					public describeTo(param0: org.hamcrest.Description): void;
					public matchesSafely(param0: any): boolean;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module matchers {
				export class ThrowableMessageMatcher<T>  extends org.hamcrest.TypeSafeMatcher<any> {
					public static class: java.lang.Class<org.junit.internal.matchers.ThrowableMessageMatcher<any>>;
					public constructor(param0: org.hamcrest.Matcher<string>);
					public describeMismatchSafely(param0: any, param1: org.hamcrest.Description): void;
					public static hasMessage(param0: org.hamcrest.Matcher): org.hamcrest.Matcher;
					public describeTo(param0: org.hamcrest.Description): void;
					public matchesSafely(param0: any): boolean;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module matchers {
				export abstract class TypeSafeMatcher<T>  extends org.hamcrest.BaseMatcher<any> {
					public static class: java.lang.Class<org.junit.internal.matchers.TypeSafeMatcher<any>>;
					public constructor(param0: java.lang.Class<any>);
					public constructor();
					public matchesSafely(param0: any): boolean;
					public matches(param0: any): boolean;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module requests {
				export class ClassRequest extends org.junit.internal.requests.MemoizingRequest {
					public static class: java.lang.Class<org.junit.internal.requests.ClassRequest>;
					public createRunner(): org.junit.runner.Runner;
					public constructor(param0: java.lang.Class<any>);
					public constructor();
					public constructor(param0: java.lang.Class<any>, param1: boolean);
				}
				export module ClassRequest {
					export class CustomAllDefaultPossibilitiesBuilder extends org.junit.internal.builders.AllDefaultPossibilitiesBuilder {
						public static class: java.lang.Class<org.junit.internal.requests.ClassRequest.CustomAllDefaultPossibilitiesBuilder>;
						public suiteMethodBuilder(): org.junit.runners.model.RunnerBuilder;
					}
					export class CustomSuiteMethodBuilder extends org.junit.internal.builders.SuiteMethodBuilder {
						public static class: java.lang.Class<org.junit.internal.requests.ClassRequest.CustomSuiteMethodBuilder>;
						public runnerForClass(param0: java.lang.Class<any>): org.junit.runner.Runner;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module requests {
				export class FilterRequest extends org.junit.runner.Request {
					public static class: java.lang.Class<org.junit.internal.requests.FilterRequest>;
					public constructor();
					public getRunner(): org.junit.runner.Runner;
					public constructor(param0: org.junit.runner.Request, param1: org.junit.runner.manipulation.Filter);
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module requests {
				export abstract class MemoizingRequest extends org.junit.runner.Request {
					public static class: java.lang.Class<org.junit.internal.requests.MemoizingRequest>;
					public createRunner(): org.junit.runner.Runner;
					public getRunner(): org.junit.runner.Runner;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module requests {
				export class OrderingRequest extends org.junit.internal.requests.MemoizingRequest {
					public static class: java.lang.Class<org.junit.internal.requests.OrderingRequest>;
					public createRunner(): org.junit.runner.Runner;
					public constructor();
					public constructor(param0: org.junit.runner.Request, param1: org.junit.runner.manipulation.Ordering);
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module requests {
				export class SortingRequest extends org.junit.runner.Request {
					public static class: java.lang.Class<org.junit.internal.requests.SortingRequest>;
					public constructor();
					public getRunner(): org.junit.runner.Runner;
					public constructor(param0: org.junit.runner.Request, param1: java.util.Comparator<org.junit.runner.Description>);
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export class ClassRoadie extends java.lang.Object {
					public static class: java.lang.Class<org.junit.internal.runners.ClassRoadie>;
					public runUnprotected(): void;
					public constructor(param0: org.junit.runner.notification.RunNotifier, param1: org.junit.internal.runners.TestClass, param2: org.junit.runner.Description, param3: java.lang.Runnable);
					public runProtected(): void;
					public addFailure(param0: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export class ErrorReportingRunner extends org.junit.runner.Runner {
					public static class: java.lang.Class<org.junit.internal.runners.ErrorReportingRunner>;
					public constructor(param0: java.lang.Class<any>, param1: java.lang.Throwable);
					public constructor();
					public constructor(param0: java.lang.Throwable, param1: Array<java.lang.Class<any>>);
					public run(param0: org.junit.runner.notification.RunNotifier): void;
					public getDescription(): org.junit.runner.Description;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export class FailedBefore extends java.lang.Exception {
					public static class: java.lang.Class<org.junit.internal.runners.FailedBefore>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export class InitializationError extends java.lang.Exception {
					public static class: java.lang.Class<org.junit.internal.runners.InitializationError>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
					public constructor(param0: Array<java.lang.Throwable>);
					public getCauses(): java.util.List<java.lang.Throwable>;
					public constructor(param0: java.util.List<java.lang.Throwable>);
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export class JUnit38ClassRunner extends org.junit.runner.Runner implements org.junit.runner.manipulation.Filterable, org.junit.runner.manipulation.Orderable {
					public static class: java.lang.Class<org.junit.internal.runners.JUnit38ClassRunner>;
					public sort(param0: org.junit.runner.manipulation.Sorter): void;
					public constructor(param0: junit.framework.Test);
					public constructor(param0: java.lang.Class<any>);
					public createAdaptingListener(param0: org.junit.runner.notification.RunNotifier): junit.framework.TestListener;
					public constructor();
					public filter(param0: org.junit.runner.manipulation.Filter): void;
					public run(param0: org.junit.runner.notification.RunNotifier): void;
					public getDescription(): org.junit.runner.Description;
					public order(param0: org.junit.runner.manipulation.Orderer): void;
				}
				export module JUnit38ClassRunner {
					export class OldTestClassAdaptingListener extends java.lang.Object implements junit.framework.TestListener {
						public static class: java.lang.Class<org.junit.internal.runners.JUnit38ClassRunner.OldTestClassAdaptingListener>;
						public endTest(param0: junit.framework.Test): void;
						public addError(param0: junit.framework.Test, param1: java.lang.Throwable): void;
						public startTest(param0: junit.framework.Test): void;
						public addFailure(param0: junit.framework.Test, param1: junit.framework.AssertionFailedError): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export class JUnit4ClassRunner extends org.junit.runner.Runner implements org.junit.runner.manipulation.Filterable, org.junit.runner.manipulation.Sortable {
					public static class: java.lang.Class<org.junit.internal.runners.JUnit4ClassRunner>;
					public methodDescription(param0: java.lang.reflect.Method): org.junit.runner.Description;
					public constructor(param0: java.lang.Class<any>);
					public run(param0: org.junit.runner.notification.RunNotifier): void;
					public classAnnotations(): Array<java.lang.annotation.Annotation>;
					public wrapMethod(param0: java.lang.reflect.Method): org.junit.internal.runners.TestMethod;
					public runMethods(param0: org.junit.runner.notification.RunNotifier): void;
					public getDescription(): org.junit.runner.Description;
					public validate(): void;
					public testAnnotations(param0: java.lang.reflect.Method): Array<java.lang.annotation.Annotation>;
					public sort(param0: org.junit.runner.manipulation.Sorter): void;
					public createTest(): any;
					public constructor();
					public getName(): string;
					public filter(param0: org.junit.runner.manipulation.Filter): void;
					public getTestClass(): org.junit.internal.runners.TestClass;
					public testName(param0: java.lang.reflect.Method): string;
					public invokeTestMethod(param0: java.lang.reflect.Method, param1: org.junit.runner.notification.RunNotifier): void;
					public getTestMethods(): java.util.List<java.lang.reflect.Method>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export class MethodRoadie extends java.lang.Object {
					public static class: java.lang.Class<org.junit.internal.runners.MethodRoadie>;
					public runTestMethod(): void;
					public run(): void;
					public constructor(param0: any, param1: org.junit.internal.runners.TestMethod, param2: org.junit.runner.notification.RunNotifier, param3: org.junit.runner.Description);
					public runBeforesThenTestThenAfters(param0: java.lang.Runnable): void;
					public addFailure(param0: java.lang.Throwable): void;
					public runTest(): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export class MethodValidator extends java.lang.Object {
					public static class: java.lang.Class<org.junit.internal.runners.MethodValidator>;
					public validateInstanceMethods(): void;
					public validateMethodsForDefaultRunner(): java.util.List<java.lang.Throwable>;
					public constructor(param0: org.junit.internal.runners.TestClass);
					public validateStaticMethods(): void;
					public validateNoArgConstructor(): void;
					public assertValid(): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export class SuiteMethod extends org.junit.internal.runners.JUnit38ClassRunner {
					public static class: java.lang.Class<org.junit.internal.runners.SuiteMethod>;
					public constructor(param0: junit.framework.Test);
					public constructor(param0: java.lang.Class<any>);
					public constructor();
					public static testFromSuiteMethod(param0: java.lang.Class<any>): junit.framework.Test;
					public filter(param0: org.junit.runner.manipulation.Filter): void;
					public getDescription(): org.junit.runner.Description;
					public order(param0: org.junit.runner.manipulation.Orderer): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export class TestClass extends java.lang.Object {
					public static class: java.lang.Class<org.junit.internal.runners.TestClass>;
					public getAnnotatedMethods(param0: java.lang.Class<any>): java.util.List<java.lang.reflect.Method>;
					public getJavaClass(): java.lang.Class<any>;
					public constructor(param0: java.lang.Class<any>);
					public getName(): string;
					public getConstructor(): java.lang.reflect.Constructor<any>;
					public getTestMethods(): java.util.List<java.lang.reflect.Method>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export class TestMethod extends java.lang.Object {
					public static class: java.lang.Class<org.junit.internal.runners.TestMethod>;
					public constructor(param0: java.lang.reflect.Method, param1: org.junit.internal.runners.TestClass);
					public getExpectedException(): java.lang.Class<any>;
					public getTimeout(): number;
					public isIgnored(): boolean;
					public invoke(param0: any): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export module model {
					export class EachTestNotifier extends java.lang.Object {
						public static class: java.lang.Class<org.junit.internal.runners.model.EachTestNotifier>;
						public fireTestSuiteStarted(): void;
						public fireTestStarted(): void;
						public fireTestIgnored(): void;
						public addFailure(param0: java.lang.Throwable): void;
						public addFailedAssumption(param0: org.junit.internal.AssumptionViolatedException): void;
						public constructor(param0: org.junit.runner.notification.RunNotifier, param1: org.junit.runner.Description);
						public fireTestSuiteFinished(): void;
						public fireTestFinished(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export module model {
					export class MultipleFailureException extends org.junit.runners.model.MultipleFailureException {
						public static class: java.lang.Class<org.junit.internal.runners.model.MultipleFailureException>;
						public constructor(param0: java.util.List<java.lang.Throwable>);
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export module model {
					export abstract class ReflectiveCallable extends java.lang.Object {
						public static class: java.lang.Class<org.junit.internal.runners.model.ReflectiveCallable>;
						public run(): any;
						public constructor();
						public runReflectiveCall(): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export module rules {
					export class RuleMemberValidator extends java.lang.Object {
						public static class: java.lang.Class<org.junit.internal.runners.rules.RuleMemberValidator>;
						public static CLASS_RULE_VALIDATOR: org.junit.internal.runners.rules.RuleMemberValidator;
						public static RULE_VALIDATOR: org.junit.internal.runners.rules.RuleMemberValidator;
						public static CLASS_RULE_METHOD_VALIDATOR: org.junit.internal.runners.rules.RuleMemberValidator;
						public static RULE_METHOD_VALIDATOR: org.junit.internal.runners.rules.RuleMemberValidator;
						public validate(param0: org.junit.runners.model.TestClass, param1: java.util.List<java.lang.Throwable>): void;
					}
					export module RuleMemberValidator {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<org.junit.internal.runners.rules.RuleMemberValidator.Builder>;
						}
						export class DeclaringClassMustBePublic extends java.lang.Object implements org.junit.internal.runners.rules.RuleMemberValidator.RuleValidator {
							public static class: java.lang.Class<org.junit.internal.runners.rules.RuleMemberValidator.DeclaringClassMustBePublic>;
							public validate(param0: org.junit.runners.model.FrameworkMember<any>, param1: java.lang.Class<any>, param2: java.util.List<java.lang.Throwable>): void;
						}
						export class FieldMustBeARule extends java.lang.Object implements org.junit.internal.runners.rules.RuleMemberValidator.RuleValidator {
							public static class: java.lang.Class<org.junit.internal.runners.rules.RuleMemberValidator.FieldMustBeARule>;
							public validate(param0: org.junit.runners.model.FrameworkMember<any>, param1: java.lang.Class<any>, param2: java.util.List<java.lang.Throwable>): void;
						}
						export class FieldMustBeATestRule extends java.lang.Object implements org.junit.internal.runners.rules.RuleMemberValidator.RuleValidator {
							public static class: java.lang.Class<org.junit.internal.runners.rules.RuleMemberValidator.FieldMustBeATestRule>;
							public validate(param0: org.junit.runners.model.FrameworkMember<any>, param1: java.lang.Class<any>, param2: java.util.List<java.lang.Throwable>): void;
						}
						export class MemberMustBeNonStaticOrAlsoClassRule extends java.lang.Object implements org.junit.internal.runners.rules.RuleMemberValidator.RuleValidator {
							public static class: java.lang.Class<org.junit.internal.runners.rules.RuleMemberValidator.MemberMustBeNonStaticOrAlsoClassRule>;
							public validate(param0: org.junit.runners.model.FrameworkMember<any>, param1: java.lang.Class<any>, param2: java.util.List<java.lang.Throwable>): void;
						}
						export class MemberMustBePublic extends java.lang.Object implements org.junit.internal.runners.rules.RuleMemberValidator.RuleValidator {
							public static class: java.lang.Class<org.junit.internal.runners.rules.RuleMemberValidator.MemberMustBePublic>;
							public validate(param0: org.junit.runners.model.FrameworkMember<any>, param1: java.lang.Class<any>, param2: java.util.List<java.lang.Throwable>): void;
						}
						export class MemberMustBeStatic extends java.lang.Object implements org.junit.internal.runners.rules.RuleMemberValidator.RuleValidator {
							public static class: java.lang.Class<org.junit.internal.runners.rules.RuleMemberValidator.MemberMustBeStatic>;
							public validate(param0: org.junit.runners.model.FrameworkMember<any>, param1: java.lang.Class<any>, param2: java.util.List<java.lang.Throwable>): void;
						}
						export class MethodMustBeARule extends java.lang.Object implements org.junit.internal.runners.rules.RuleMemberValidator.RuleValidator {
							public static class: java.lang.Class<org.junit.internal.runners.rules.RuleMemberValidator.MethodMustBeARule>;
							public validate(param0: org.junit.runners.model.FrameworkMember<any>, param1: java.lang.Class<any>, param2: java.util.List<java.lang.Throwable>): void;
						}
						export class MethodMustBeATestRule extends java.lang.Object implements org.junit.internal.runners.rules.RuleMemberValidator.RuleValidator {
							public static class: java.lang.Class<org.junit.internal.runners.rules.RuleMemberValidator.MethodMustBeATestRule>;
							public validate(param0: org.junit.runners.model.FrameworkMember<any>, param1: java.lang.Class<any>, param2: java.util.List<java.lang.Throwable>): void;
						}
						export class RuleValidator extends java.lang.Object {
							public static class: java.lang.Class<org.junit.internal.runners.rules.RuleMemberValidator.RuleValidator>;
							/**
							 * Constructs a new instance of the org.junit.internal.runners.rules.RuleMemberValidator$RuleValidator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								validate(param0: org.junit.runners.model.FrameworkMember<any>, param1: java.lang.Class<any>, param2: java.util.List<java.lang.Throwable>): void;
							});
							public constructor();
							public validate(param0: org.junit.runners.model.FrameworkMember<any>, param1: java.lang.Class<any>, param2: java.util.List<java.lang.Throwable>): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export module rules {
					export class ValidationError extends java.lang.Exception {
						public static class: java.lang.Class<org.junit.internal.runners.rules.ValidationError>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: org.junit.runners.model.FrameworkMember<any>, param1: java.lang.Class<any>, param2: string);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export module statements {
					export class ExpectException extends org.junit.runners.model.Statement {
						public static class: java.lang.Class<org.junit.internal.runners.statements.ExpectException>;
						public constructor();
						public constructor(param0: org.junit.runners.model.Statement, param1: java.lang.Class<any>);
						public evaluate(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export module statements {
					export class Fail extends org.junit.runners.model.Statement {
						public static class: java.lang.Class<org.junit.internal.runners.statements.Fail>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public evaluate(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export module statements {
					export class FailOnTimeout extends org.junit.runners.model.Statement {
						public static class: java.lang.Class<org.junit.internal.runners.statements.FailOnTimeout>;
						public constructor();
						public static builder(): org.junit.internal.runners.statements.FailOnTimeout.Builder;
						public evaluate(): void;
						/** @deprecated */
						public constructor(param0: org.junit.runners.model.Statement, param1: number);
					}
					export module FailOnTimeout {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<org.junit.internal.runners.statements.FailOnTimeout.Builder>;
							public withTimeout(param0: number, param1: java.util.concurrent.TimeUnit): org.junit.internal.runners.statements.FailOnTimeout.Builder;
							public build(param0: org.junit.runners.model.Statement): org.junit.internal.runners.statements.FailOnTimeout;
							public withLookingForStuckThread(param0: boolean): org.junit.internal.runners.statements.FailOnTimeout.Builder;
						}
						export class CallableStatement extends java.util.concurrent.Callable<java.lang.Throwable> {
							public static class: java.lang.Class<org.junit.internal.runners.statements.FailOnTimeout.CallableStatement>;
							public call(): any;
							public call(): java.lang.Throwable;
							public awaitStarted(): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export module statements {
					export class InvokeMethod extends org.junit.runners.model.Statement {
						public static class: java.lang.Class<org.junit.internal.runners.statements.InvokeMethod>;
						public constructor();
						public evaluate(): void;
						public constructor(param0: org.junit.runners.model.FrameworkMethod, param1: any);
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export module statements {
					export class RunAfters extends org.junit.runners.model.Statement {
						public static class: java.lang.Class<org.junit.internal.runners.statements.RunAfters>;
						public constructor();
						public evaluate(): void;
						public constructor(param0: org.junit.runners.model.Statement, param1: java.util.List<org.junit.runners.model.FrameworkMethod>, param2: any);
						public invokeMethod(param0: org.junit.runners.model.FrameworkMethod): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module internal {
			export module runners {
				export module statements {
					export class RunBefores extends org.junit.runners.model.Statement {
						public static class: java.lang.Class<org.junit.internal.runners.statements.RunBefores>;
						public constructor();
						public evaluate(): void;
						public constructor(param0: org.junit.runners.model.Statement, param1: java.util.List<org.junit.runners.model.FrameworkMethod>, param2: any);
						public invokeMethod(param0: org.junit.runners.model.FrameworkMethod): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module matchers {
			export class JUnitMatchers extends java.lang.Object {
				public static class: java.lang.Class<org.junit.matchers.JUnitMatchers>;
				/** @deprecated */
				public static both(param0: org.hamcrest.Matcher): org.hamcrest.core.CombinableMatcher.CombinableBothMatcher;
				/** @deprecated */
				public static hasItems(param0: any[]): org.hamcrest.Matcher;
				/** @deprecated */
				public static hasItems(param0: Array<org.hamcrest.Matcher>): org.hamcrest.Matcher;
				public static isException(param0: org.hamcrest.Matcher): org.hamcrest.Matcher;
				/** @deprecated */
				public static hasItem(param0: any): org.hamcrest.Matcher;
				public static isThrowable(param0: org.hamcrest.Matcher): org.hamcrest.Matcher;
				/** @deprecated */
				public static either(param0: org.hamcrest.Matcher): org.hamcrest.core.CombinableMatcher.CombinableEitherMatcher;
				/** @deprecated */
				public static containsString(param0: string): org.hamcrest.Matcher<string>;
				/** @deprecated */
				public static everyItem(param0: org.hamcrest.Matcher): org.hamcrest.Matcher;
				/** @deprecated */
				public static hasItem(param0: org.hamcrest.Matcher): org.hamcrest.Matcher;
				public constructor();
			}
		}
	}
}

declare module org {
	export module junit {
		export module rules {
			export class DisableOnDebug extends java.lang.Object implements org.junit.rules.TestRule {
				public static class: java.lang.Class<org.junit.rules.DisableOnDebug>;
				public apply(param0: org.junit.runners.model.Statement, param1: org.junit.runner.Description): org.junit.runners.model.Statement;
				public constructor(param0: org.junit.rules.TestRule);
				public isDebugging(): boolean;
			}
		}
	}
}

declare module org {
	export module junit {
		export module rules {
			export class ErrorCollector extends org.junit.rules.Verifier {
				public static class: java.lang.Class<org.junit.rules.ErrorCollector>;
				public checkThat(param0: any, param1: org.hamcrest.Matcher): void;
				public addError(param0: java.lang.Throwable): void;
				public apply(param0: org.junit.runners.model.Statement, param1: org.junit.runner.Description): org.junit.runners.model.Statement;
				public verify(): void;
				public checkThat(param0: string, param1: any, param2: org.hamcrest.Matcher): void;
				public constructor();
				public checkSucceeds(param0: java.util.concurrent.Callable): any;
				public checkThrows(param0: java.lang.Class<any>, param1: org.junit.function.ThrowingRunnable): void;
			}
		}
	}
}

declare module org {
	export module junit {
		export module rules {
			export class ExpectedException extends java.lang.Object implements org.junit.rules.TestRule {
				public static class: java.lang.Class<org.junit.rules.ExpectedException>;
				/** @deprecated */
				public handleAssertionErrors(): org.junit.rules.ExpectedException;
				public expect(param0: org.hamcrest.Matcher<any>): void;
				public expect(param0: java.lang.Class<any>): void;
				/** @deprecated */
				public static none(): org.junit.rules.ExpectedException;
				public expectMessage(param0: string): void;
				public expectMessage(param0: org.hamcrest.Matcher<string>): void;
				public expectCause(param0: org.hamcrest.Matcher<any>): void;
				public isAnyExceptionExpected(): boolean;
				public apply(param0: org.junit.runners.model.Statement, param1: org.junit.runner.Description): org.junit.runners.model.Statement;
				/** @deprecated */
				public handleAssumptionViolatedExceptions(): org.junit.rules.ExpectedException;
				public reportMissingExceptionWithMessage(param0: string): org.junit.rules.ExpectedException;
			}
			export module ExpectedException {
				export class ExpectedExceptionStatement extends org.junit.runners.model.Statement {
					public static class: java.lang.Class<org.junit.rules.ExpectedException.ExpectedExceptionStatement>;
					public constructor(param0: org.junit.rules.ExpectedException, param1: org.junit.runners.model.Statement);
					public constructor();
					public evaluate(): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module rules {
			export class ExpectedExceptionMatcherBuilder extends java.lang.Object {
				public static class: java.lang.Class<org.junit.rules.ExpectedExceptionMatcherBuilder>;
			}
		}
	}
}

declare module org {
	export module junit {
		export module rules {
			export abstract class ExternalResource extends java.lang.Object implements org.junit.rules.TestRule {
				public static class: java.lang.Class<org.junit.rules.ExternalResource>;
				public before(): void;
				public apply(param0: org.junit.runners.model.Statement, param1: org.junit.runner.Description): org.junit.runners.model.Statement;
				public after(): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module junit {
		export module rules {
			export class MethodRule extends java.lang.Object {
				public static class: java.lang.Class<org.junit.rules.MethodRule>;
				/**
				 * Constructs a new instance of the org.junit.rules.MethodRule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(param0: org.junit.runners.model.Statement, param1: org.junit.runners.model.FrameworkMethod, param2: any): org.junit.runners.model.Statement;
				});
				public constructor();
				public apply(param0: org.junit.runners.model.Statement, param1: org.junit.runners.model.FrameworkMethod, param2: any): org.junit.runners.model.Statement;
			}
		}
	}
}

declare module org {
	export module junit {
		export module rules {
			export class RuleChain extends java.lang.Object implements org.junit.rules.TestRule {
				public static class: java.lang.Class<org.junit.rules.RuleChain>;
				public static outerRule(param0: org.junit.rules.TestRule): org.junit.rules.RuleChain;
				public around(param0: org.junit.rules.TestRule): org.junit.rules.RuleChain;
				public apply(param0: org.junit.runners.model.Statement, param1: org.junit.runner.Description): org.junit.runners.model.Statement;
				public static emptyRuleChain(): org.junit.rules.RuleChain;
			}
		}
	}
}

declare module org {
	export module junit {
		export module rules {
			export class RunRules extends org.junit.runners.model.Statement {
				public static class: java.lang.Class<org.junit.rules.RunRules>;
				public constructor(param0: org.junit.runners.model.Statement, param1: java.lang.Iterable<org.junit.rules.TestRule>, param2: org.junit.runner.Description);
				public evaluate(): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module junit {
		export module rules {
			export class Stopwatch extends java.lang.Object implements org.junit.rules.TestRule {
				public static class: java.lang.Class<org.junit.rules.Stopwatch>;
				public succeeded(param0: number, param1: org.junit.runner.Description): void;
				public failed(param0: number, param1: java.lang.Throwable, param2: org.junit.runner.Description): void;
				public runtime(param0: java.util.concurrent.TimeUnit): number;
				public skipped(param0: number, param1: org.junit.AssumptionViolatedException, param2: org.junit.runner.Description): void;
				public apply(param0: org.junit.runners.model.Statement, param1: org.junit.runner.Description): org.junit.runners.model.Statement;
				public constructor();
				public finished(param0: number, param1: org.junit.runner.Description): void;
			}
			export module Stopwatch {
				export class Clock extends java.lang.Object {
					public static class: java.lang.Class<org.junit.rules.Stopwatch.Clock>;
					public nanoTime(): number;
				}
				export class InternalWatcher extends org.junit.rules.TestWatcher {
					public static class: java.lang.Class<org.junit.rules.Stopwatch.InternalWatcher>;
					public finished(param0: org.junit.runner.Description): void;
					public failed(param0: java.lang.Throwable, param1: org.junit.runner.Description): void;
					public apply(param0: org.junit.runners.model.Statement, param1: org.junit.runner.Description): org.junit.runners.model.Statement;
					public starting(param0: org.junit.runner.Description): void;
					public skipped(param0: org.junit.AssumptionViolatedException, param1: org.junit.runner.Description): void;
					public succeeded(param0: org.junit.runner.Description): void;
					/** @deprecated */
					public skipped(param0: org.junit.internal.AssumptionViolatedException, param1: org.junit.runner.Description): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module rules {
			export class TemporaryFolder extends org.junit.rules.ExternalResource {
				public static class: java.lang.Class<org.junit.rules.TemporaryFolder>;
				public getRoot(): java.io.File;
				public before(): void;
				public newFile(): java.io.File;
				public constructor(param0: java.io.File);
				public newFolder(param0: string[]): java.io.File;
				public newFolder(): java.io.File;
				public constructor();
				public newFolder(param0: string): java.io.File;
				public constructor(param0: org.junit.rules.TemporaryFolder.Builder);
				public delete(): void;
				public static builder(): org.junit.rules.TemporaryFolder.Builder;
				public newFile(param0: string): java.io.File;
				public create(): void;
				public apply(param0: org.junit.runners.model.Statement, param1: org.junit.runner.Description): org.junit.runners.model.Statement;
				public after(): void;
			}
			export module TemporaryFolder {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<org.junit.rules.TemporaryFolder.Builder>;
					public build(): org.junit.rules.TemporaryFolder;
					public constructor();
					public parentFolder(param0: java.io.File): org.junit.rules.TemporaryFolder.Builder;
					public assureDeletion(): org.junit.rules.TemporaryFolder.Builder;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module rules {
			export class TestName extends org.junit.rules.TestWatcher {
				public static class: java.lang.Class<org.junit.rules.TestName>;
				public starting(param0: org.junit.runner.Description): void;
				public getMethodName(): string;
				public apply(param0: org.junit.runners.model.Statement, param1: org.junit.runner.Description): org.junit.runners.model.Statement;
				public constructor();
			}
		}
	}
}

declare module org {
	export module junit {
		export module rules {
			export class TestRule extends java.lang.Object {
				public static class: java.lang.Class<org.junit.rules.TestRule>;
				/**
				 * Constructs a new instance of the org.junit.rules.TestRule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(param0: org.junit.runners.model.Statement, param1: org.junit.runner.Description): org.junit.runners.model.Statement;
				});
				public constructor();
				public apply(param0: org.junit.runners.model.Statement, param1: org.junit.runner.Description): org.junit.runners.model.Statement;
			}
		}
	}
}

declare module org {
	export module junit {
		export module rules {
			export abstract class TestWatcher extends java.lang.Object implements org.junit.rules.TestRule {
				public static class: java.lang.Class<org.junit.rules.TestWatcher>;
				public skipped(param0: org.junit.AssumptionViolatedException, param1: org.junit.runner.Description): void;
				public failed(param0: java.lang.Throwable, param1: org.junit.runner.Description): void;
				public starting(param0: org.junit.runner.Description): void;
				public apply(param0: org.junit.runners.model.Statement, param1: org.junit.runner.Description): org.junit.runners.model.Statement;
				public succeeded(param0: org.junit.runner.Description): void;
				public finished(param0: org.junit.runner.Description): void;
				public constructor();
				/** @deprecated */
				public skipped(param0: org.junit.internal.AssumptionViolatedException, param1: org.junit.runner.Description): void;
			}
		}
	}
}

declare module org {
	export module junit {
		export module rules {
			export class TestWatchman extends java.lang.Object implements org.junit.rules.MethodRule {
				public static class: java.lang.Class<org.junit.rules.TestWatchman>;
				public starting(param0: org.junit.runners.model.FrameworkMethod): void;
				public finished(param0: org.junit.runners.model.FrameworkMethod): void;
				public apply(param0: org.junit.runners.model.Statement, param1: org.junit.runners.model.FrameworkMethod, param2: any): org.junit.runners.model.Statement;
				public failed(param0: java.lang.Throwable, param1: org.junit.runners.model.FrameworkMethod): void;
				public succeeded(param0: org.junit.runners.model.FrameworkMethod): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module junit {
		export module rules {
			export class Timeout extends java.lang.Object implements org.junit.rules.TestRule {
				public static class: java.lang.Class<org.junit.rules.Timeout>;
				public constructor(param0: org.junit.rules.Timeout.Builder);
				public static millis(param0: number): org.junit.rules.Timeout;
				public getTimeout(param0: java.util.concurrent.TimeUnit): number;
				public static builder(): org.junit.rules.Timeout.Builder;
				public static seconds(param0: number): org.junit.rules.Timeout;
				/** @deprecated */
				public constructor(param0: number);
				public createFailOnTimeoutStatement(param0: org.junit.runners.model.Statement): org.junit.runners.model.Statement;
				public apply(param0: org.junit.runners.model.Statement, param1: org.junit.runner.Description): org.junit.runners.model.Statement;
				public getLookingForStuckThread(): boolean;
				public constructor(param0: number, param1: java.util.concurrent.TimeUnit);
			}
			export module Timeout {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<org.junit.rules.Timeout.Builder>;
					public getTimeout(): number;
					public constructor();
					public build(): org.junit.rules.Timeout;
					public withTimeout(param0: number, param1: java.util.concurrent.TimeUnit): org.junit.rules.Timeout.Builder;
					public getTimeUnit(): java.util.concurrent.TimeUnit;
					public getLookingForStuckThread(): boolean;
					public withLookingForStuckThread(param0: boolean): org.junit.rules.Timeout.Builder;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module rules {
			export abstract class Verifier extends java.lang.Object implements org.junit.rules.TestRule {
				public static class: java.lang.Class<org.junit.rules.Verifier>;
				public apply(param0: org.junit.runners.model.Statement, param1: org.junit.runner.Description): org.junit.runners.model.Statement;
				public verify(): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export class Computer extends java.lang.Object {
				public static class: java.lang.Class<org.junit.runner.Computer>;
				public getSuite(param0: org.junit.runners.model.RunnerBuilder, param1: Array<java.lang.Class<any>>): org.junit.runner.Runner;
				public static serial(): org.junit.runner.Computer;
				public getRunner(param0: org.junit.runners.model.RunnerBuilder, param1: java.lang.Class<any>): org.junit.runner.Runner;
				public constructor();
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export class Describable extends java.lang.Object {
				public static class: java.lang.Class<org.junit.runner.Describable>;
				/**
				 * Constructs a new instance of the org.junit.runner.Describable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getDescription(): org.junit.runner.Description;
				});
				public constructor();
				public getDescription(): org.junit.runner.Description;
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export class Description extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.junit.runner.Description>;
				public static EMPTY: org.junit.runner.Description;
				public static TEST_MECHANISM: org.junit.runner.Description;
				public getAnnotation(param0: java.lang.Class<any>): java.lang.annotation.Annotation;
				public getClassName(): string;
				public getMethodName(): string;
				public isSuite(): boolean;
				public getTestClass(): java.lang.Class<any>;
				public static createSuiteDescription(param0: string, param1: java.io.Serializable, param2: Array<java.lang.annotation.Annotation>): org.junit.runner.Description;
				public static createSuiteDescription(param0: string, param1: Array<java.lang.annotation.Annotation>): org.junit.runner.Description;
				public getDisplayName(): string;
				public toString(): string;
				public static createTestDescription(param0: string, param1: string, param2: Array<java.lang.annotation.Annotation>): org.junit.runner.Description;
				public isTest(): boolean;
				public testCount(): number;
				public hashCode(): number;
				public static createTestDescription(param0: java.lang.Class<any>, param1: string, param2: Array<java.lang.annotation.Annotation>): org.junit.runner.Description;
				public static createTestDescription(param0: java.lang.Class<any>, param1: string): org.junit.runner.Description;
				public getChildren(): java.util.ArrayList<org.junit.runner.Description>;
				public equals(param0: any): boolean;
				public static createSuiteDescription(param0: java.lang.Class<any>): org.junit.runner.Description;
				public childlessCopy(): org.junit.runner.Description;
				public isEmpty(): boolean;
				public getAnnotations(): java.util.Collection<java.lang.annotation.Annotation>;
				public static createTestDescription(param0: string, param1: string, param2: java.io.Serializable): org.junit.runner.Description;
				public static createSuiteDescription(param0: java.lang.Class<any>, param1: Array<java.lang.annotation.Annotation>): org.junit.runner.Description;
				public addChild(param0: org.junit.runner.Description): void;
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export class FilterFactories extends java.lang.Object {
				public static class: java.lang.Class<org.junit.runner.FilterFactories>;
				public static createFilter(param0: java.lang.Class<any>, param1: org.junit.runner.FilterFactoryParams): org.junit.runner.manipulation.Filter;
				public static createFilterFromFilterSpec(param0: org.junit.runner.Request, param1: string): org.junit.runner.manipulation.Filter;
				public static createFilter(param0: string, param1: org.junit.runner.FilterFactoryParams): org.junit.runner.manipulation.Filter;
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export class FilterFactory extends java.lang.Object {
				public static class: java.lang.Class<org.junit.runner.FilterFactory>;
				/**
				 * Constructs a new instance of the org.junit.runner.FilterFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createFilter(param0: org.junit.runner.FilterFactoryParams): org.junit.runner.manipulation.Filter;
				});
				public constructor();
				public createFilter(param0: org.junit.runner.FilterFactoryParams): org.junit.runner.manipulation.Filter;
			}
			export module FilterFactory {
				export class FilterNotCreatedException extends java.lang.Exception {
					public static class: java.lang.Class<org.junit.runner.FilterFactory.FilterNotCreatedException>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
					public constructor(param0: java.lang.Exception);
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export class FilterFactoryParams extends java.lang.Object {
				public static class: java.lang.Class<org.junit.runner.FilterFactoryParams>;
				public constructor(param0: org.junit.runner.Description, param1: string);
				public getArgs(): string;
				public getTopLevelDescription(): org.junit.runner.Description;
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export class JUnitCommandLineParseResult extends java.lang.Object {
				public static class: java.lang.Class<org.junit.runner.JUnitCommandLineParseResult>;
				public static parse(param0: string[]): org.junit.runner.JUnitCommandLineParseResult;
				public createRequest(param0: org.junit.runner.Computer): org.junit.runner.Request;
				public getFilterSpecs(): java.util.List<string>;
				public getClasses(): java.util.List<java.lang.Class<any>>;
			}
			export module JUnitCommandLineParseResult {
				export class CommandLineParserError extends java.lang.Exception {
					public static class: java.lang.Class<org.junit.runner.JUnitCommandLineParseResult.CommandLineParserError>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export class JUnitCore extends java.lang.Object {
				public static class: java.lang.Class<org.junit.runner.JUnitCore>;
				public static runClasses(param0: org.junit.runner.Computer, param1: Array<java.lang.Class<any>>): org.junit.runner.Result;
				public getVersion(): string;
				public run(param0: junit.framework.Test): org.junit.runner.Result;
				public run(param0: org.junit.runner.Runner): org.junit.runner.Result;
				public run(param0: org.junit.runner.Request): org.junit.runner.Result;
				public static runClasses(param0: Array<java.lang.Class<any>>): org.junit.runner.Result;
				public addListener(param0: org.junit.runner.notification.RunListener): void;
				public static main(param0: string[]): void;
				public removeListener(param0: org.junit.runner.notification.RunListener): void;
				public run(param0: org.junit.runner.Computer, param1: Array<java.lang.Class<any>>): org.junit.runner.Result;
				public constructor();
				public run(param0: Array<java.lang.Class<any>>): org.junit.runner.Result;
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export class OrderWith extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<org.junit.runner.OrderWith>;
				/**
				 * Constructs a new instance of the org.junit.runner.OrderWith interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					value(): java.lang.Class<any>;
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public value(): java.lang.Class<any>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export class OrderWithValidator extends org.junit.validator.AnnotationValidator {
				public static class: java.lang.Class<org.junit.runner.OrderWithValidator>;
				public validateAnnotatedClass(param0: org.junit.runners.model.TestClass): java.util.List<java.lang.Exception>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export abstract class Request extends java.lang.Object {
				public static class: java.lang.Class<org.junit.runner.Request>;
				public filterWith(param0: org.junit.runner.manipulation.Filter): org.junit.runner.Request;
				public orderWith(param0: org.junit.runner.manipulation.Ordering): org.junit.runner.Request;
				public static method(param0: java.lang.Class<any>, param1: string): org.junit.runner.Request;
				public static aClass(param0: java.lang.Class<any>): org.junit.runner.Request;
				public static classWithoutSuiteMethod(param0: java.lang.Class<any>): org.junit.runner.Request;
				public constructor();
				public sortWith(param0: java.util.Comparator<org.junit.runner.Description>): org.junit.runner.Request;
				public static errorReport(param0: java.lang.Class<any>, param1: java.lang.Throwable): org.junit.runner.Request;
				public static runner(param0: org.junit.runner.Runner): org.junit.runner.Request;
				public static classes(param0: org.junit.runner.Computer, param1: Array<java.lang.Class<any>>): org.junit.runner.Request;
				public getRunner(): org.junit.runner.Runner;
				public filterWith(param0: org.junit.runner.Description): org.junit.runner.Request;
				public static classes(param0: Array<java.lang.Class<any>>): org.junit.runner.Request;
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export class Result extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<org.junit.runner.Result>;
				public getFailures(): java.util.List<org.junit.runner.notification.Failure>;
				public wasSuccessful(): boolean;
				public createListener(): org.junit.runner.notification.RunListener;
				public getRunCount(): number;
				public getFailureCount(): number;
				public getRunTime(): number;
				public getAssumptionFailureCount(): number;
				public constructor();
				public getIgnoreCount(): number;
			}
			export module Result {
				export class Listener extends org.junit.runner.notification.RunListener {
					public static class: java.lang.Class<org.junit.runner.Result.Listener>;
					public testFailure(param0: org.junit.runner.notification.Failure): void;
					public testAssumptionFailure(param0: org.junit.runner.notification.Failure): void;
					public testIgnored(param0: org.junit.runner.Description): void;
					public testRunFinished(param0: org.junit.runner.Result): void;
					public testFinished(param0: org.junit.runner.Description): void;
					public testRunStarted(param0: org.junit.runner.Description): void;
				}
				export class SerializedForm extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.junit.runner.Result.SerializedForm>;
					public static deserialize(param0: java.io.ObjectInputStream): org.junit.runner.Result.SerializedForm;
					public constructor(param0: org.junit.runner.Result);
					public serialize(param0: java.io.ObjectOutputStream): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export class RunWith extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<org.junit.runner.RunWith>;
				/**
				 * Constructs a new instance of the org.junit.runner.RunWith interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					value(): java.lang.Class<any>;
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public value(): java.lang.Class<any>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export abstract class Runner extends java.lang.Object implements org.junit.runner.Describable {
				public static class: java.lang.Class<org.junit.runner.Runner>;
				public getDescription(): org.junit.runner.Description;
				public testCount(): number;
				public run(param0: org.junit.runner.notification.RunNotifier): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export module manipulation {
				export class Alphanumeric extends org.junit.runner.manipulation.Sorter implements org.junit.runner.manipulation.Ordering.Factory {
					public static class: java.lang.Class<org.junit.runner.manipulation.Alphanumeric>;
					public compare(param0: any, param1: any): number;
					public static comparing(param0: any /* any*/): java.util.Comparator<any>;
					public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
					public compare(param0: org.junit.runner.Description, param1: org.junit.runner.Description): number;
					public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
					public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
					public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
					public equals(param0: any): boolean;
					public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
					public constructor();
					public reversed(): java.util.Comparator<any>;
					public constructor(param0: java.util.Comparator<org.junit.runner.Description>);
					public create(param0: org.junit.runner.manipulation.Ordering.Context): org.junit.runner.manipulation.Ordering;
					public static naturalOrder(): java.util.Comparator<any>;
					public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export module manipulation {
				export abstract class Filter extends java.lang.Object {
					public static class: java.lang.Class<org.junit.runner.manipulation.Filter>;
					public static ALL: org.junit.runner.manipulation.Filter;
					public static matchMethodDescription(param0: org.junit.runner.Description): org.junit.runner.manipulation.Filter;
					public intersect(param0: org.junit.runner.manipulation.Filter): org.junit.runner.manipulation.Filter;
					public constructor();
					public shouldRun(param0: org.junit.runner.Description): boolean;
					public apply(param0: any): void;
					public describe(): string;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export module manipulation {
				export class Filterable extends java.lang.Object {
					public static class: java.lang.Class<org.junit.runner.manipulation.Filterable>;
					/**
					 * Constructs a new instance of the org.junit.runner.manipulation.Filterable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						filter(param0: org.junit.runner.manipulation.Filter): void;
					});
					public constructor();
					public filter(param0: org.junit.runner.manipulation.Filter): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export module manipulation {
				export class InvalidOrderingException extends java.lang.Exception {
					public static class: java.lang.Class<org.junit.runner.manipulation.InvalidOrderingException>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export module manipulation {
				export class NoTestsRemainException extends java.lang.Exception {
					public static class: java.lang.Class<org.junit.runner.manipulation.NoTestsRemainException>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export module manipulation {
				export class Orderable extends java.lang.Object implements org.junit.runner.manipulation.Sortable {
					public static class: java.lang.Class<org.junit.runner.manipulation.Orderable>;
					/**
					 * Constructs a new instance of the org.junit.runner.manipulation.Orderable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						order(param0: org.junit.runner.manipulation.Orderer): void;
						sort(param0: org.junit.runner.manipulation.Sorter): void;
					});
					public constructor();
					public sort(param0: org.junit.runner.manipulation.Sorter): void;
					public order(param0: org.junit.runner.manipulation.Orderer): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export module manipulation {
				export class Orderer extends java.lang.Object {
					public static class: java.lang.Class<org.junit.runner.manipulation.Orderer>;
					public apply(param0: any): void;
					public order(param0: java.util.Collection<org.junit.runner.Description>): java.util.List<org.junit.runner.Description>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export module manipulation {
				export abstract class Ordering extends java.lang.Object {
					public static class: java.lang.Class<org.junit.runner.manipulation.Ordering>;
					public orderItems(param0: java.util.Collection<org.junit.runner.Description>): java.util.List<org.junit.runner.Description>;
					public constructor();
					public static definedBy(param0: org.junit.runner.manipulation.Ordering.Factory, param1: org.junit.runner.Description): org.junit.runner.manipulation.Ordering;
					public apply(param0: any): void;
					public static definedBy(param0: java.lang.Class<any>, param1: org.junit.runner.Description): org.junit.runner.manipulation.Ordering;
					public static shuffledBy(param0: java.util.Random): org.junit.runner.manipulation.Ordering;
				}
				export module Ordering {
					export class Context extends java.lang.Object {
						public static class: java.lang.Class<org.junit.runner.manipulation.Ordering.Context>;
						public getTarget(): org.junit.runner.Description;
					}
					export class Factory extends java.lang.Object {
						public static class: java.lang.Class<org.junit.runner.manipulation.Ordering.Factory>;
						/**
						 * Constructs a new instance of the org.junit.runner.manipulation.Ordering$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							create(param0: org.junit.runner.manipulation.Ordering.Context): org.junit.runner.manipulation.Ordering;
						});
						public constructor();
						public create(param0: org.junit.runner.manipulation.Ordering.Context): org.junit.runner.manipulation.Ordering;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export module manipulation {
				export class Sortable extends java.lang.Object {
					public static class: java.lang.Class<org.junit.runner.manipulation.Sortable>;
					/**
					 * Constructs a new instance of the org.junit.runner.manipulation.Sortable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						sort(param0: org.junit.runner.manipulation.Sorter): void;
					});
					public constructor();
					public sort(param0: org.junit.runner.manipulation.Sorter): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export module manipulation {
				export class Sorter extends org.junit.runner.manipulation.Ordering implements java.util.Comparator<org.junit.runner.Description>  {
					public static class: java.lang.Class<org.junit.runner.manipulation.Sorter>;
					public static NULL: org.junit.runner.manipulation.Sorter;
					public compare(param0: any, param1: any): number;
					public static comparing(param0: any /* any*/): java.util.Comparator<any>;
					public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
					public compare(param0: org.junit.runner.Description, param1: org.junit.runner.Description): number;
					public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
					public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
					public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
					public equals(param0: any): boolean;
					public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
					public orderItems(param0: java.util.Collection<org.junit.runner.Description>): java.util.List<org.junit.runner.Description>;
					public constructor();
					public apply(param0: any): void;
					public reversed(): java.util.Comparator<any>;
					public constructor(param0: java.util.Comparator<org.junit.runner.Description>);
					public static naturalOrder(): java.util.Comparator<any>;
					public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export module notification {
				export class Failure extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.junit.runner.notification.Failure>;
					public toString(): string;
					public constructor(param0: org.junit.runner.Description, param1: java.lang.Throwable);
					public getTestHeader(): string;
					public getMessage(): string;
					public getDescription(): org.junit.runner.Description;
					public getException(): java.lang.Throwable;
					public getTrace(): string;
					public getTrimmedTrace(): string;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export module notification {
				export class RunListener extends java.lang.Object {
					public static class: java.lang.Class<org.junit.runner.notification.RunListener>;
					public testFailure(param0: org.junit.runner.notification.Failure): void;
					public testAssumptionFailure(param0: org.junit.runner.notification.Failure): void;
					public testStarted(param0: org.junit.runner.Description): void;
					public constructor();
					public testSuiteStarted(param0: org.junit.runner.Description): void;
					public testSuiteFinished(param0: org.junit.runner.Description): void;
					public testIgnored(param0: org.junit.runner.Description): void;
					public testRunFinished(param0: org.junit.runner.Result): void;
					public testFinished(param0: org.junit.runner.Description): void;
					public testRunStarted(param0: org.junit.runner.Description): void;
				}
				export module RunListener {
					export class ThreadSafe extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<org.junit.runner.notification.RunListener.ThreadSafe>;
						/**
						 * Constructs a new instance of the org.junit.runner.notification.RunListener$ThreadSafe interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export module notification {
				export class RunNotifier extends java.lang.Object {
					public static class: java.lang.Class<org.junit.runner.notification.RunNotifier>;
					public fireTestIgnored(param0: org.junit.runner.Description): void;
					public fireTestRunStarted(param0: org.junit.runner.Description): void;
					public fireTestSuiteFinished(param0: org.junit.runner.Description): void;
					public removeListener(param0: org.junit.runner.notification.RunListener): void;
					public addListener(param0: org.junit.runner.notification.RunListener): void;
					public fireTestAssumptionFailed(param0: org.junit.runner.notification.Failure): void;
					public fireTestSuiteStarted(param0: org.junit.runner.Description): void;
					public fireTestRunFinished(param0: org.junit.runner.Result): void;
					public addFirstListener(param0: org.junit.runner.notification.RunListener): void;
					public constructor();
					public fireTestStarted(param0: org.junit.runner.Description): void;
					public fireTestFailure(param0: org.junit.runner.notification.Failure): void;
					public pleaseStop(): void;
					public fireTestFinished(param0: org.junit.runner.Description): void;
				}
				export module RunNotifier {
					export abstract class SafeNotifier extends java.lang.Object {
						public static class: java.lang.Class<org.junit.runner.notification.RunNotifier.SafeNotifier>;
						public notifyListener(param0: org.junit.runner.notification.RunListener): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export module notification {
				export class StoppedByUserException extends java.lang.RuntimeException {
					public static class: java.lang.Class<org.junit.runner.notification.StoppedByUserException>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runner {
			export module notification {
				export class SynchronizedRunListener extends org.junit.runner.notification.RunListener {
					public static class: java.lang.Class<org.junit.runner.notification.SynchronizedRunListener>;
					public testFailure(param0: org.junit.runner.notification.Failure): void;
					public equals(param0: any): boolean;
					public testAssumptionFailure(param0: org.junit.runner.notification.Failure): void;
					public toString(): string;
					public testStarted(param0: org.junit.runner.Description): void;
					public testSuiteStarted(param0: org.junit.runner.Description): void;
					public testSuiteFinished(param0: org.junit.runner.Description): void;
					public testIgnored(param0: org.junit.runner.Description): void;
					public testRunFinished(param0: org.junit.runner.Result): void;
					public testFinished(param0: org.junit.runner.Description): void;
					public testRunStarted(param0: org.junit.runner.Description): void;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export class AllTests extends org.junit.internal.runners.SuiteMethod {
				public static class: java.lang.Class<org.junit.runners.AllTests>;
				public constructor(param0: java.lang.Class<any>);
				public constructor(param0: junit.framework.Test);
				public getDescription(): org.junit.runner.Description;
				public order(param0: org.junit.runner.manipulation.Orderer): void;
				public filter(param0: org.junit.runner.manipulation.Filter): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export class BlockJUnit4ClassRunner extends org.junit.runners.ParentRunner<org.junit.runners.model.FrameworkMethod> {
				public static class: java.lang.Class<org.junit.runners.BlockJUnit4ClassRunner>;
				public constructor(param0: java.lang.Class<any>);
				public validateTestMethods(param0: java.util.List<java.lang.Throwable>): void;
				public methodInvoker(param0: org.junit.runners.model.FrameworkMethod, param1: any): org.junit.runners.model.Statement;
				public validateFields(param0: java.util.List<java.lang.Throwable>): void;
				public constructor(param0: org.junit.runners.model.TestClass);
				public computeTestMethods(): java.util.List<org.junit.runners.model.FrameworkMethod>;
				public createTest(): any;
				public validateOnlyOneConstructor(param0: java.util.List<java.lang.Throwable>): void;
				public describeChild(param0: any): org.junit.runner.Description;
				public constructor();
				public validateZeroArgConstructor(param0: java.util.List<java.lang.Throwable>): void;
				/** @deprecated */
				public validateInstanceMethods(param0: java.util.List<java.lang.Throwable>): void;
				public createTest(param0: org.junit.runners.model.FrameworkMethod): any;
				public order(param0: org.junit.runner.manipulation.Orderer): void;
				public rules(param0: any): java.util.List<org.junit.rules.MethodRule>;
				public getChildren(): java.util.List<org.junit.runners.model.FrameworkMethod>;
				public validateNoNonStaticInnerClass(param0: java.util.List<java.lang.Throwable>): void;
				public getDescription(): org.junit.runner.Description;
				public withAfters(param0: org.junit.runners.model.FrameworkMethod, param1: any, param2: org.junit.runners.model.Statement): org.junit.runners.model.Statement;
				public runChild(param0: org.junit.runners.model.FrameworkMethod, param1: org.junit.runner.notification.RunNotifier): void;
				public describeChild(param0: org.junit.runners.model.FrameworkMethod): org.junit.runner.Description;
				/** @deprecated */
				public withPotentialTimeout(param0: org.junit.runners.model.FrameworkMethod, param1: any, param2: org.junit.runners.model.Statement): org.junit.runners.model.Statement;
				public possiblyExpectingExceptions(param0: org.junit.runners.model.FrameworkMethod, param1: any, param2: org.junit.runners.model.Statement): org.junit.runners.model.Statement;
				public isIgnored(param0: org.junit.runners.model.FrameworkMethod): boolean;
				public getTestRules(param0: any): java.util.List<org.junit.rules.TestRule>;
				public filter(param0: org.junit.runner.manipulation.Filter): void;
				public testName(param0: org.junit.runners.model.FrameworkMethod): string;
				public collectInitializationErrors(param0: java.util.List<java.lang.Throwable>): void;
				public withBefores(param0: org.junit.runners.model.FrameworkMethod, param1: any, param2: org.junit.runners.model.Statement): org.junit.runners.model.Statement;
				public runChild(param0: any, param1: org.junit.runner.notification.RunNotifier): void;
				public validateConstructor(param0: java.util.List<java.lang.Throwable>): void;
				public getChildren(): java.util.List<any>;
				public methodBlock(param0: org.junit.runners.model.FrameworkMethod): org.junit.runners.model.Statement;
				public isIgnored(param0: any): boolean;
			}
			export module BlockJUnit4ClassRunner {
				export class RuleCollector<T>  extends org.junit.runners.model.MemberValueConsumer<any> {
					public static class: java.lang.Class<org.junit.runners.BlockJUnit4ClassRunner.RuleCollector<any>>;
					public accept(param0: org.junit.runners.model.FrameworkMember<any>, param1: any): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export class JUnit4 extends org.junit.runners.BlockJUnit4ClassRunner {
				public static class: java.lang.Class<org.junit.runners.JUnit4>;
				public constructor(param0: java.lang.Class<any>);
				public getDescription(): org.junit.runner.Description;
				public order(param0: org.junit.runner.manipulation.Orderer): void;
				public constructor(param0: org.junit.runners.model.TestClass);
				public filter(param0: org.junit.runner.manipulation.Filter): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export class MethodSorters {
				public static class: java.lang.Class<org.junit.runners.MethodSorters>;
				public static NAME_ASCENDING: org.junit.runners.MethodSorters;
				public static JVM: org.junit.runners.MethodSorters;
				public static DEFAULT: org.junit.runners.MethodSorters;
				public static valueOf(param0: string): org.junit.runners.MethodSorters;
				public getComparator(): java.util.Comparator<java.lang.reflect.Method>;
				public static values(): Array<org.junit.runners.MethodSorters>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export class Parameterized extends org.junit.runners.Suite {
				public static class: java.lang.Class<org.junit.runners.Parameterized>;
				public constructor(param0: java.lang.Class<any>);
				public getDescription(): org.junit.runner.Description;
				public order(param0: org.junit.runner.manipulation.Orderer): void;
				public constructor(param0: org.junit.runners.model.RunnerBuilder, param1: java.lang.Class<any>, param2: Array<java.lang.Class<any>>);
				public constructor(param0: java.lang.Class<any>, param1: Array<java.lang.Class<any>>);
				public constructor(param0: org.junit.runners.model.TestClass);
				public constructor(param0: java.lang.Class<any>, param1: java.util.List<org.junit.runner.Runner>);
				public filter(param0: org.junit.runner.manipulation.Filter): void;
				public constructor(param0: java.lang.Class<any>, param1: org.junit.runners.model.RunnerBuilder);
				public constructor(param0: org.junit.runners.model.RunnerBuilder, param1: Array<java.lang.Class<any>>);
				public constructor();
			}
			export module Parameterized {
				export class AfterParam extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.junit.runners.Parameterized.AfterParam>;
					/**
					 * Constructs a new instance of the org.junit.runners.Parameterized$AfterParam interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class AssumptionViolationRunner extends org.junit.runner.Runner {
					public static class: java.lang.Class<org.junit.runners.Parameterized.AssumptionViolationRunner>;
					public run(param0: org.junit.runner.notification.RunNotifier): void;
					public getDescription(): org.junit.runner.Description;
				}
				export class BeforeParam extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.junit.runners.Parameterized.BeforeParam>;
					/**
					 * Constructs a new instance of the org.junit.runners.Parameterized$BeforeParam interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class Parameter extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.junit.runners.Parameterized.Parameter>;
					/**
					 * Constructs a new instance of the org.junit.runners.Parameterized$Parameter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): number;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
					public value(): number;
				}
				export class Parameters extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.junit.runners.Parameterized.Parameters>;
					/**
					 * Constructs a new instance of the org.junit.runners.Parameterized$Parameters interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						name(): string;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public name(): string;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class RunnersFactory extends java.lang.Object {
					public static class: java.lang.Class<org.junit.runners.Parameterized.RunnersFactory>;
				}
				export class UseParametersRunnerFactory extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.junit.runners.Parameterized.UseParametersRunnerFactory>;
					/**
					 * Constructs a new instance of the org.junit.runners.Parameterized$UseParametersRunnerFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): java.lang.Class<any>;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public value(): java.lang.Class<any>;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export abstract class ParentRunner<T>  extends org.junit.runner.Runner {
				public static class: java.lang.Class<org.junit.runners.ParentRunner<any>>;
				public constructor(param0: java.lang.Class<any>);
				public withInterruptIsolation(param0: org.junit.runners.model.Statement): org.junit.runners.model.Statement;
				public constructor(param0: org.junit.runners.model.TestClass);
				/** @deprecated */
				public createTestClass(param0: java.lang.Class<any>): org.junit.runners.model.TestClass;
				public runLeaf(param0: org.junit.runners.model.Statement, param1: org.junit.runner.Description, param2: org.junit.runner.notification.RunNotifier): void;
				public describeChild(param0: any): org.junit.runner.Description;
				public setScheduler(param0: org.junit.runners.model.RunnerScheduler): void;
				public withAfterClasses(param0: org.junit.runners.model.Statement): org.junit.runners.model.Statement;
				public getRunnerAnnotations(): Array<java.lang.annotation.Annotation>;
				public constructor();
				public order(param0: org.junit.runner.manipulation.Orderer): void;
				public withBeforeClasses(param0: org.junit.runners.model.Statement): org.junit.runners.model.Statement;
				public getTestClass(): org.junit.runners.model.TestClass;
				public getDescription(): org.junit.runner.Description;
				public validatePublicVoidNoArgMethods(param0: java.lang.Class<any>, param1: boolean, param2: java.util.List<java.lang.Throwable>): void;
				public run(param0: org.junit.runner.notification.RunNotifier): void;
				public getName(): string;
				public filter(param0: org.junit.runner.manipulation.Filter): void;
				public sort(param0: org.junit.runner.manipulation.Sorter): void;
				public classRules(): java.util.List<org.junit.rules.TestRule>;
				public classBlock(param0: org.junit.runner.notification.RunNotifier): org.junit.runners.model.Statement;
				public collectInitializationErrors(param0: java.util.List<java.lang.Throwable>): void;
				public runChild(param0: any, param1: org.junit.runner.notification.RunNotifier): void;
				public childrenInvoker(param0: org.junit.runner.notification.RunNotifier): org.junit.runners.model.Statement;
				public getChildren(): java.util.List<any>;
				public isIgnored(param0: any): boolean;
			}
			export module ParentRunner {
				export class ClassRuleCollector extends org.junit.runners.model.MemberValueConsumer<org.junit.rules.TestRule> {
					public static class: java.lang.Class<org.junit.runners.ParentRunner.ClassRuleCollector>;
					public getOrderedRules(): java.util.List<org.junit.rules.TestRule>;
					public accept(param0: org.junit.runners.model.FrameworkMember<any>, param1: org.junit.rules.TestRule): void;
					public accept(param0: org.junit.runners.model.FrameworkMember<any>, param1: any): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export class RuleContainer extends java.lang.Object {
				public static class: java.lang.Class<org.junit.runners.RuleContainer>;
				public add(param0: org.junit.rules.MethodRule): void;
				public add(param0: org.junit.rules.TestRule): void;
				public apply(param0: org.junit.runners.model.FrameworkMethod, param1: org.junit.runner.Description, param2: any, param3: org.junit.runners.model.Statement): org.junit.runners.model.Statement;
				public setOrder(param0: any, param1: number): void;
			}
			export module RuleContainer {
				export class RuleEntry extends java.lang.Object {
					public static class: java.lang.Class<org.junit.runners.RuleContainer.RuleEntry>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export class Suite extends org.junit.runners.ParentRunner<org.junit.runner.Runner> {
				public static class: java.lang.Class<org.junit.runners.Suite>;
				public constructor(param0: java.lang.Class<any>);
				public describeChild(param0: org.junit.runner.Runner): org.junit.runner.Description;
				public getDescription(): org.junit.runner.Description;
				public static emptySuite(): org.junit.runner.Runner;
				public constructor(param0: org.junit.runners.model.TestClass);
				public runChild(param0: org.junit.runner.Runner, param1: org.junit.runner.notification.RunNotifier): void;
				public getChildren(): java.util.List<org.junit.runner.Runner>;
				public constructor(param0: java.lang.Class<any>, param1: java.util.List<org.junit.runner.Runner>);
				public filter(param0: org.junit.runner.manipulation.Filter): void;
				public constructor(param0: org.junit.runners.model.RunnerBuilder, param1: Array<java.lang.Class<any>>);
				public describeChild(param0: any): org.junit.runner.Description;
				public constructor();
				public order(param0: org.junit.runner.manipulation.Orderer): void;
				public constructor(param0: org.junit.runners.model.RunnerBuilder, param1: java.lang.Class<any>, param2: Array<java.lang.Class<any>>);
				public constructor(param0: java.lang.Class<any>, param1: Array<java.lang.Class<any>>);
				public runChild(param0: any, param1: org.junit.runner.notification.RunNotifier): void;
				public getChildren(): java.util.List<any>;
				public constructor(param0: java.lang.Class<any>, param1: org.junit.runners.model.RunnerBuilder);
			}
			export module Suite {
				export class SuiteClasses extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.junit.runners.Suite.SuiteClasses>;
					/**
					 * Constructs a new instance of the org.junit.runners.Suite$SuiteClasses interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): Array<java.lang.Class<any>>;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
					public value(): Array<java.lang.Class<any>>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module model {
				export class Annotatable extends java.lang.Object {
					public static class: java.lang.Class<org.junit.runners.model.Annotatable>;
					/**
					 * Constructs a new instance of the org.junit.runners.model.Annotatable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAnnotations(): Array<java.lang.annotation.Annotation>;
						getAnnotation(param0: java.lang.Class<any>): java.lang.annotation.Annotation;
					});
					public constructor();
					public getAnnotation(param0: java.lang.Class<any>): java.lang.annotation.Annotation;
					public getAnnotations(): Array<java.lang.annotation.Annotation>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module model {
				export class FrameworkField extends org.junit.runners.model.FrameworkMember<org.junit.runners.model.FrameworkField> {
					public static class: java.lang.Class<org.junit.runners.model.FrameworkField>;
					public constructor(param0: java.lang.reflect.Field);
					public getAnnotation(param0: java.lang.Class<any>): java.lang.annotation.Annotation;
					public getModifiers(): number;
					public toString(): string;
					public constructor();
					public getName(): string;
					public getAnnotations(): Array<java.lang.annotation.Annotation>;
					public isShadowedBy(param0: org.junit.runners.model.FrameworkField): boolean;
					public getField(): java.lang.reflect.Field;
					public getType(): java.lang.Class<any>;
					public getDeclaringClass(): java.lang.Class<any>;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module model {
				export abstract class FrameworkMember<T>  extends org.junit.runners.model.Annotatable {
					public static class: java.lang.Class<org.junit.runners.model.FrameworkMember<any>>;
					public getAnnotation(param0: java.lang.Class<any>): java.lang.annotation.Annotation;
					public getModifiers(): number;
					public isStatic(): boolean;
					public constructor();
					public isPublic(): boolean;
					public getName(): string;
					public getAnnotations(): Array<java.lang.annotation.Annotation>;
					public getType(): java.lang.Class<any>;
					public getDeclaringClass(): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module model {
				export class FrameworkMethod extends org.junit.runners.model.FrameworkMember<org.junit.runners.model.FrameworkMethod> {
					public static class: java.lang.Class<org.junit.runners.model.FrameworkMethod>;
					public validateNoTypeParametersOnArgs(param0: java.util.List<java.lang.Throwable>): void;
					public getAnnotation(param0: java.lang.Class<any>): java.lang.annotation.Annotation;
					public validatePublicVoidNoArg(param0: boolean, param1: java.util.List<java.lang.Throwable>): void;
					/** @deprecated */
					public producesType(param0: java.lang.reflect.Type): boolean;
					public getAnnotations(): Array<java.lang.annotation.Annotation>;
					public isShadowedBy(param0: org.junit.runners.model.FrameworkMethod): boolean;
					public constructor(param0: java.lang.reflect.Method);
					public getDeclaringClass(): java.lang.Class<any>;
					public invokeExplosively(param0: any, param1: any[]): any;
					public equals(param0: any): boolean;
					public getModifiers(): number;
					public toString(): string;
					public constructor();
					public getMethod(): java.lang.reflect.Method;
					public getName(): string;
					public validatePublicVoid(param0: boolean, param1: java.util.List<java.lang.Throwable>): void;
					public getReturnType(): java.lang.Class<any>;
					public getType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module model {
				export class InitializationError extends java.lang.Exception {
					public static class: java.lang.Class<org.junit.runners.model.InitializationError>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
					public getCauses(): java.util.List<java.lang.Throwable>;
					public constructor(param0: java.util.List<java.lang.Throwable>);
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module model {
				export class InvalidTestClassError extends org.junit.runners.model.InitializationError {
					public static class: java.lang.Class<org.junit.runners.model.InvalidTestClassError>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: java.lang.Class<any>, param1: java.util.List<java.lang.Throwable>);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: java.lang.Throwable);
					public constructor(param0: string);
					public constructor();
					public getMessage(): string;
					public constructor(param0: java.util.List<java.lang.Throwable>);
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module model {
				export class MemberValueConsumer<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.junit.runners.model.MemberValueConsumer<any>>;
					/**
					 * Constructs a new instance of the org.junit.runners.model.MemberValueConsumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						accept(param0: org.junit.runners.model.FrameworkMember<any>, param1: T): void;
					});
					public constructor();
					public accept(param0: org.junit.runners.model.FrameworkMember<any>, param1: T): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module model {
				export class MultipleFailureException extends java.lang.Exception {
					public static class: java.lang.Class<org.junit.runners.model.MultipleFailureException>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public printStackTrace(param0: java.io.PrintWriter): void;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
					public printStackTrace(param0: java.io.PrintStream): void;
					public static assertEmpty(param0: java.util.List<java.lang.Throwable>): void;
					public getMessage(): string;
					public getFailures(): java.util.List<java.lang.Throwable>;
					public constructor(param0: java.util.List<java.lang.Throwable>);
					public printStackTrace(): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module model {
				export class NoGenericTypeParametersValidator extends java.lang.Object {
					public static class: java.lang.Class<org.junit.runners.model.NoGenericTypeParametersValidator>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module model {
				export abstract class RunnerBuilder extends java.lang.Object {
					public static class: java.lang.Class<org.junit.runners.model.RunnerBuilder>;
					public runnerForClass(param0: java.lang.Class<any>): org.junit.runner.Runner;
					public safeRunnerForClass(param0: java.lang.Class<any>): org.junit.runner.Runner;
					public runners(param0: java.lang.Class<any>, param1: java.util.List<java.lang.Class<any>>): java.util.List<org.junit.runner.Runner>;
					public runners(param0: java.lang.Class<any>, param1: Array<java.lang.Class<any>>): java.util.List<org.junit.runner.Runner>;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module model {
				export class RunnerScheduler extends java.lang.Object {
					public static class: java.lang.Class<org.junit.runners.model.RunnerScheduler>;
					/**
					 * Constructs a new instance of the org.junit.runners.model.RunnerScheduler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						schedule(param0: java.lang.Runnable): void;
						finished(): void;
					});
					public constructor();
					public schedule(param0: java.lang.Runnable): void;
					public finished(): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module model {
				export abstract class Statement extends java.lang.Object {
					public static class: java.lang.Class<org.junit.runners.model.Statement>;
					public constructor();
					public evaluate(): void;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module model {
				export class TestClass extends java.lang.Object implements org.junit.runners.model.Annotatable {
					public static class: java.lang.Class<org.junit.runners.model.TestClass>;
					public getAnnotation(param0: java.lang.Class<any>): java.lang.annotation.Annotation;
					public constructor(param0: java.lang.Class<any>);
					public getAnnotatedMethodValues(param0: any, param1: java.lang.Class<any>, param2: java.lang.Class<any>): java.util.List<any>;
					public getAnnotations(): Array<java.lang.annotation.Annotation>;
					public getAnnotatedMethods(param0: java.lang.Class<any>): java.util.List<org.junit.runners.model.FrameworkMethod>;
					public scanAnnotatedMembers(param0: java.util.Map<java.lang.Class<any>,java.util.List<org.junit.runners.model.FrameworkMethod>>, param1: java.util.Map<java.lang.Class<any>,java.util.List<org.junit.runners.model.FrameworkField>>): void;
					public getAnnotatedFields(param0: java.lang.Class<any>): java.util.List<org.junit.runners.model.FrameworkField>;
					public getAnnotatedFieldValues(param0: any, param1: java.lang.Class<any>, param2: java.lang.Class<any>): java.util.List<any>;
					public equals(param0: any): boolean;
					public getJavaClass(): java.lang.Class<any>;
					public isANonStaticInnerClass(): boolean;
					public getName(): string;
					public isPublic(): boolean;
					public getAnnotatedMethods(): java.util.List<org.junit.runners.model.FrameworkMethod>;
					public collectAnnotatedMethodValues(param0: any, param1: java.lang.Class<any>, param2: java.lang.Class<any>, param3: org.junit.runners.model.MemberValueConsumer<any>): void;
					public getOnlyConstructor(): java.lang.reflect.Constructor<any>;
					public static addToAnnotationLists(param0: org.junit.runners.model.FrameworkMember<any>, param1: java.util.Map<any,any>): void;
					public getAnnotatedFields(): java.util.List<org.junit.runners.model.FrameworkField>;
					public hashCode(): number;
					public collectAnnotatedFieldValues(param0: any, param1: java.lang.Class<any>, param2: java.lang.Class<any>, param3: org.junit.runners.model.MemberValueConsumer<any>): void;
				}
				export module TestClass {
					export class FieldComparator extends java.util.Comparator<java.lang.reflect.Field> {
						public static class: java.lang.Class<org.junit.runners.model.TestClass.FieldComparator>;
						public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
						public compare(param0: java.lang.reflect.Field, param1: java.lang.reflect.Field): number;
						public equals(param0: any): boolean;
						public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public static comparing(param0: any /* any*/): java.util.Comparator<any>;
						public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
						public reversed(): java.util.Comparator<any>;
						public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
						public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
						public static naturalOrder(): java.util.Comparator<any>;
						public compare(param0: any, param1: any): number;
						public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
					}
					export class MethodComparator extends java.util.Comparator<org.junit.runners.model.FrameworkMethod> {
						public static class: java.lang.Class<org.junit.runners.model.TestClass.MethodComparator>;
						public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
						public equals(param0: any): boolean;
						public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public static comparing(param0: any /* any*/): java.util.Comparator<any>;
						public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
						public reversed(): java.util.Comparator<any>;
						public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
						public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
						public static naturalOrder(): java.util.Comparator<any>;
						public compare(param0: org.junit.runners.model.FrameworkMethod, param1: org.junit.runners.model.FrameworkMethod): number;
						public compare(param0: any, param1: any): number;
						public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module model {
				export class TestTimedOutException extends java.lang.Exception {
					public static class: java.lang.Class<org.junit.runners.model.TestTimedOutException>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public getTimeout(): number;
					public constructor();
					public constructor(param0: number, param1: java.util.concurrent.TimeUnit);
					public getTimeUnit(): java.util.concurrent.TimeUnit;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module parameterized {
				export class BlockJUnit4ClassRunnerWithParameters extends org.junit.runners.BlockJUnit4ClassRunner {
					public static class: java.lang.Class<org.junit.runners.parameterized.BlockJUnit4ClassRunnerWithParameters>;
					public constructor(param0: java.lang.Class<any>);
					public getRunnerAnnotations(): Array<java.lang.annotation.Annotation>;
					public testName(param0: org.junit.runners.model.FrameworkMethod): string;
					public getDescription(): org.junit.runner.Description;
					public createTest(): any;
					public validateFields(param0: java.util.List<java.lang.Throwable>): void;
					public constructor();
					public getName(): string;
					public filter(param0: org.junit.runner.manipulation.Filter): void;
					public classBlock(param0: org.junit.runner.notification.RunNotifier): org.junit.runners.model.Statement;
					public createTest(param0: org.junit.runners.model.FrameworkMethod): any;
					public constructor(param0: org.junit.runners.parameterized.TestWithParameters);
					public validateConstructor(param0: java.util.List<java.lang.Throwable>): void;
					public constructor(param0: org.junit.runners.model.TestClass);
					public order(param0: org.junit.runner.manipulation.Orderer): void;
				}
				export module BlockJUnit4ClassRunnerWithParameters {
					export class InjectionType {
						public static class: java.lang.Class<org.junit.runners.parameterized.BlockJUnit4ClassRunnerWithParameters.InjectionType>;
						public static CONSTRUCTOR: org.junit.runners.parameterized.BlockJUnit4ClassRunnerWithParameters.InjectionType;
						public static FIELD: org.junit.runners.parameterized.BlockJUnit4ClassRunnerWithParameters.InjectionType;
						public static values(): Array<org.junit.runners.parameterized.BlockJUnit4ClassRunnerWithParameters.InjectionType>;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): org.junit.runners.parameterized.BlockJUnit4ClassRunnerWithParameters.InjectionType;
					}
					export class RunAfterParams extends org.junit.internal.runners.statements.RunAfters {
						public static class: java.lang.Class<org.junit.runners.parameterized.BlockJUnit4ClassRunnerWithParameters.RunAfterParams>;
						public invokeMethod(param0: org.junit.runners.model.FrameworkMethod): void;
					}
					export class RunBeforeParams extends org.junit.internal.runners.statements.RunBefores {
						public static class: java.lang.Class<org.junit.runners.parameterized.BlockJUnit4ClassRunnerWithParameters.RunBeforeParams>;
						public invokeMethod(param0: org.junit.runners.model.FrameworkMethod): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module parameterized {
				export class BlockJUnit4ClassRunnerWithParametersFactory extends java.lang.Object implements org.junit.runners.parameterized.ParametersRunnerFactory {
					public static class: java.lang.Class<org.junit.runners.parameterized.BlockJUnit4ClassRunnerWithParametersFactory>;
					public constructor();
					public createRunnerForTestWithParameters(param0: org.junit.runners.parameterized.TestWithParameters): org.junit.runner.Runner;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module parameterized {
				export class ParametersRunnerFactory extends java.lang.Object {
					public static class: java.lang.Class<org.junit.runners.parameterized.ParametersRunnerFactory>;
					/**
					 * Constructs a new instance of the org.junit.runners.parameterized.ParametersRunnerFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createRunnerForTestWithParameters(param0: org.junit.runners.parameterized.TestWithParameters): org.junit.runner.Runner;
					});
					public constructor();
					public createRunnerForTestWithParameters(param0: org.junit.runners.parameterized.TestWithParameters): org.junit.runner.Runner;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module runners {
			export module parameterized {
				export class TestWithParameters extends java.lang.Object {
					public static class: java.lang.Class<org.junit.runners.parameterized.TestWithParameters>;
					public equals(param0: any): boolean;
					public toString(): string;
					public getName(): string;
					public getParameters(): java.util.List<any>;
					public constructor(param0: string, param1: org.junit.runners.model.TestClass, param2: java.util.List<any>);
					public hashCode(): number;
					public getTestClass(): org.junit.runners.model.TestClass;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module validator {
			export abstract class AnnotationValidator extends java.lang.Object {
				public static class: java.lang.Class<org.junit.validator.AnnotationValidator>;
				public validateAnnotatedMethod(param0: org.junit.runners.model.FrameworkMethod): java.util.List<java.lang.Exception>;
				public validateAnnotatedClass(param0: org.junit.runners.model.TestClass): java.util.List<java.lang.Exception>;
				public validateAnnotatedField(param0: org.junit.runners.model.FrameworkField): java.util.List<java.lang.Exception>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module junit {
		export module validator {
			export class AnnotationValidatorFactory extends java.lang.Object {
				public static class: java.lang.Class<org.junit.validator.AnnotationValidatorFactory>;
				public createAnnotationValidator(param0: org.junit.validator.ValidateWith): org.junit.validator.AnnotationValidator;
				public constructor();
			}
		}
	}
}

declare module org {
	export module junit {
		export module validator {
			export class AnnotationsValidator extends java.lang.Object implements org.junit.validator.TestClassValidator {
				public static class: java.lang.Class<org.junit.validator.AnnotationsValidator>;
				public validateTestClass(param0: org.junit.runners.model.TestClass): java.util.List<java.lang.Exception>;
				public constructor();
			}
			export module AnnotationsValidator {
				export abstract class AnnotatableValidator<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.junit.validator.AnnotationsValidator.AnnotatableValidator<any>>;
					public validateTestClass(param0: org.junit.runners.model.TestClass): java.util.List<java.lang.Exception>;
				}
				export class ClassValidator extends org.junit.validator.AnnotationsValidator.AnnotatableValidator<org.junit.runners.model.TestClass> {
					public static class: java.lang.Class<org.junit.validator.AnnotationsValidator.ClassValidator>;
				}
				export class FieldValidator extends org.junit.validator.AnnotationsValidator.AnnotatableValidator<org.junit.runners.model.FrameworkField> {
					public static class: java.lang.Class<org.junit.validator.AnnotationsValidator.FieldValidator>;
				}
				export class MethodValidator extends org.junit.validator.AnnotationsValidator.AnnotatableValidator<org.junit.runners.model.FrameworkMethod> {
					public static class: java.lang.Class<org.junit.validator.AnnotationsValidator.MethodValidator>;
				}
			}
		}
	}
}

declare module org {
	export module junit {
		export module validator {
			export class PublicClassValidator extends java.lang.Object implements org.junit.validator.TestClassValidator {
				public static class: java.lang.Class<org.junit.validator.PublicClassValidator>;
				public validateTestClass(param0: org.junit.runners.model.TestClass): java.util.List<java.lang.Exception>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module junit {
		export module validator {
			export class TestClassValidator extends java.lang.Object {
				public static class: java.lang.Class<org.junit.validator.TestClassValidator>;
				/**
				 * Constructs a new instance of the org.junit.validator.TestClassValidator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					validateTestClass(param0: org.junit.runners.model.TestClass): java.util.List<java.lang.Exception>;
				});
				public constructor();
				public validateTestClass(param0: org.junit.runners.model.TestClass): java.util.List<java.lang.Exception>;
			}
		}
	}
}

declare module org {
	export module junit {
		export module validator {
			export class ValidateWith extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<org.junit.validator.ValidateWith>;
				/**
				 * Constructs a new instance of the org.junit.validator.ValidateWith interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					value(): java.lang.Class<any>;
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public value(): java.lang.Class<any>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

//Generics information:
//org.junit.internal.SerializableMatcherDescription:1
//org.junit.internal.matchers.StacktracePrintingMatcher:1
//org.junit.internal.matchers.ThrowableCauseMatcher:1
//org.junit.internal.matchers.ThrowableMessageMatcher:1
//org.junit.internal.matchers.TypeSafeMatcher:1
//org.junit.runners.BlockJUnit4ClassRunner.RuleCollector:1
//org.junit.runners.ParentRunner:1
//org.junit.runners.model.FrameworkMember:1
//org.junit.runners.model.MemberValueConsumer:1
//org.junit.validator.AnnotationsValidator.AnnotatableValidator:1


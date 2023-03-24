declare module androidx {
	export module constraintlayout {
		export module solver {
			export class ArrayLinkedVariables extends java.lang.Object implements androidx.constraintlayout.solver.ArrayRow.ArrayRowVariables {
				public static class: java.lang.Class<androidx.constraintlayout.solver.ArrayLinkedVariables>;
				public mCache: androidx.constraintlayout.solver.Cache;
				public get(v: androidx.constraintlayout.solver.SolverVariable): number;
				public getVariableValue(param0: number): number;
				public indexOf(param0: androidx.constraintlayout.solver.SolverVariable): number;
				public divideByAmount(amount: number): void;
				public getId(index: number): number;
				public getVariable(param0: number): androidx.constraintlayout.solver.SolverVariable;
				public invert(): void;
				public getValue(index: number): number;
				public getVariable(index: number): androidx.constraintlayout.solver.SolverVariable;
				public getCurrentSize(): number;
				public remove(param0: androidx.constraintlayout.solver.SolverVariable, param1: boolean): number;
				public display(): void;
				public clear(): void;
				public use(param0: androidx.constraintlayout.solver.ArrayRow, param1: boolean): number;
				public contains(param0: androidx.constraintlayout.solver.SolverVariable): boolean;
				public getNextIndice(index: number): number;
				public put(param0: androidx.constraintlayout.solver.SolverVariable, param1: number): void;
				public divideByAmount(param0: number): void;
				public toString(): string;
				public add(param0: androidx.constraintlayout.solver.SolverVariable, param1: number, param2: boolean): void;
				public sizeInBytes(): number;
				public getVariableValue(index: number): number;
				public getHead(): number;
				public add(variable: androidx.constraintlayout.solver.SolverVariable, value: number, removeFromDefinition: boolean): void;
				public remove(variable: androidx.constraintlayout.solver.SolverVariable, removeFromDefinition: boolean): number;
				public get(param0: androidx.constraintlayout.solver.SolverVariable): number;
				public use(definition: androidx.constraintlayout.solver.ArrayRow, removeFromDefinition: boolean): number;
				public indexOf(variable: androidx.constraintlayout.solver.SolverVariable): number;
				public put(variable: androidx.constraintlayout.solver.SolverVariable, value: number): void;
				public contains(variable: androidx.constraintlayout.solver.SolverVariable): boolean;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export class ArrayRow extends java.lang.Object implements androidx.constraintlayout.solver.LinearSystem.Row {
				public static class: java.lang.Class<androidx.constraintlayout.solver.ArrayRow>;
				public variables: androidx.constraintlayout.solver.ArrayRow.ArrayRowVariables;
				public addError(system: androidx.constraintlayout.solver.LinearSystem, strength: number): androidx.constraintlayout.solver.ArrayRow;
				public addError(error: androidx.constraintlayout.solver.SolverVariable): void;
				public initFromRow(param0: androidx.constraintlayout.solver.LinearSystem.Row): void;
				public addError(param0: androidx.constraintlayout.solver.SolverVariable): void;
				public createRowEquals(variable: androidx.constraintlayout.solver.SolverVariable, value: number): androidx.constraintlayout.solver.ArrayRow;
				public constructor();
				public createRowGreaterThan(a: androidx.constraintlayout.solver.SolverVariable, b: number, slack: androidx.constraintlayout.solver.SolverVariable): androidx.constraintlayout.solver.ArrayRow;
				public reset(): void;
				public getPivotCandidate(param0: androidx.constraintlayout.solver.LinearSystem, param1: boolean[]): androidx.constraintlayout.solver.SolverVariable;
				public updateFromFinalVariable(param0: androidx.constraintlayout.solver.LinearSystem, param1: androidx.constraintlayout.solver.SolverVariable, param2: boolean): void;
				public clear(): void;
				public isEmpty(): boolean;
				public constructor(cache: androidx.constraintlayout.solver.Cache);
				public updateFromSystem(param0: androidx.constraintlayout.solver.LinearSystem): void;
				public createRowDimensionRatio(variableA: androidx.constraintlayout.solver.SolverVariable, variableB: androidx.constraintlayout.solver.SolverVariable, variableC: androidx.constraintlayout.solver.SolverVariable, variableD: androidx.constraintlayout.solver.SolverVariable, ratio: number): androidx.constraintlayout.solver.ArrayRow;
				public initFromRow(row: androidx.constraintlayout.solver.LinearSystem.Row): void;
				public getKey(): androidx.constraintlayout.solver.SolverVariable;
				public updateFromSystem(system: androidx.constraintlayout.solver.LinearSystem): void;
				public getPivotCandidate(system: androidx.constraintlayout.solver.LinearSystem, avoid: boolean[]): androidx.constraintlayout.solver.SolverVariable;
				public toString(): string;
				public createRowEqualDimension(currentWeight: number, totalWeights: number, nextWeight: number, variableStartA: androidx.constraintlayout.solver.SolverVariable, marginStartA: number, variableEndA: androidx.constraintlayout.solver.SolverVariable, marginEndA: number, variableStartB: androidx.constraintlayout.solver.SolverVariable, marginStartB: number, variableEndB: androidx.constraintlayout.solver.SolverVariable, marginEndB: number): androidx.constraintlayout.solver.ArrayRow;
				public updateFromRow(param0: androidx.constraintlayout.solver.ArrayRow, param1: boolean): void;
				public createRowEquals(variableA: androidx.constraintlayout.solver.SolverVariable, variableB: androidx.constraintlayout.solver.SolverVariable, margin: number): androidx.constraintlayout.solver.ArrayRow;
				public updateFromFinalVariable(system: androidx.constraintlayout.solver.LinearSystem, variable: androidx.constraintlayout.solver.SolverVariable, removeFromDefinition: boolean): void;
				public createRowEqualMatchDimensions(currentWeight: number, totalWeights: number, nextWeight: number, variableStartA: androidx.constraintlayout.solver.SolverVariable, variableEndA: androidx.constraintlayout.solver.SolverVariable, variableStartB: androidx.constraintlayout.solver.SolverVariable, variableEndB: androidx.constraintlayout.solver.SolverVariable): androidx.constraintlayout.solver.ArrayRow;
				public updateFromRow(definition: androidx.constraintlayout.solver.ArrayRow, removeFromDefinition: boolean): void;
				public createRowGreaterThan(variableA: androidx.constraintlayout.solver.SolverVariable, variableB: androidx.constraintlayout.solver.SolverVariable, slack: androidx.constraintlayout.solver.SolverVariable, margin: number): androidx.constraintlayout.solver.ArrayRow;
				public createRowLowerThan(variableA: androidx.constraintlayout.solver.SolverVariable, variableB: androidx.constraintlayout.solver.SolverVariable, slack: androidx.constraintlayout.solver.SolverVariable, margin: number): androidx.constraintlayout.solver.ArrayRow;
				public createRowWithAngle(at: androidx.constraintlayout.solver.SolverVariable, ab: androidx.constraintlayout.solver.SolverVariable, bt: androidx.constraintlayout.solver.SolverVariable, bb: androidx.constraintlayout.solver.SolverVariable, angleComponent: number): androidx.constraintlayout.solver.ArrayRow;
				public pickPivot(exclude: androidx.constraintlayout.solver.SolverVariable): androidx.constraintlayout.solver.SolverVariable;
			}
			export module ArrayRow {
				export class ArrayRowVariables extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.solver.ArrayRow.ArrayRowVariables>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.solver.ArrayRow$ArrayRowVariables interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCurrentSize(): number;
						getVariable(param0: number): androidx.constraintlayout.solver.SolverVariable;
						getVariableValue(param0: number): number;
						get(param0: androidx.constraintlayout.solver.SolverVariable): number;
						indexOf(param0: androidx.constraintlayout.solver.SolverVariable): number;
						display(): void;
						clear(): void;
						contains(param0: androidx.constraintlayout.solver.SolverVariable): boolean;
						put(param0: androidx.constraintlayout.solver.SolverVariable, param1: number): void;
						sizeInBytes(): number;
						invert(): void;
						remove(param0: androidx.constraintlayout.solver.SolverVariable, param1: boolean): number;
						divideByAmount(param0: number): void;
						add(param0: androidx.constraintlayout.solver.SolverVariable, param1: number, param2: boolean): void;
						use(param0: androidx.constraintlayout.solver.ArrayRow, param1: boolean): number;
					});
					public constructor();
					public invert(): void;
					public use(param0: androidx.constraintlayout.solver.ArrayRow, param1: boolean): number;
					public get(param0: androidx.constraintlayout.solver.SolverVariable): number;
					public getVariableValue(param0: number): number;
					public indexOf(param0: androidx.constraintlayout.solver.SolverVariable): number;
					public contains(param0: androidx.constraintlayout.solver.SolverVariable): boolean;
					public divideByAmount(param0: number): void;
					public display(): void;
					public add(param0: androidx.constraintlayout.solver.SolverVariable, param1: number, param2: boolean): void;
					public getCurrentSize(): number;
					public put(param0: androidx.constraintlayout.solver.SolverVariable, param1: number): void;
					public clear(): void;
					public remove(param0: androidx.constraintlayout.solver.SolverVariable, param1: boolean): number;
					public getVariable(param0: number): androidx.constraintlayout.solver.SolverVariable;
					public sizeInBytes(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export class Cache extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.solver.Cache>;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export class GoalRow extends androidx.constraintlayout.solver.ArrayRow {
				public static class: java.lang.Class<androidx.constraintlayout.solver.GoalRow>;
				public addError(system: androidx.constraintlayout.solver.LinearSystem, strength: number): androidx.constraintlayout.solver.ArrayRow;
				public addError(error: androidx.constraintlayout.solver.SolverVariable): void;
				public initFromRow(param0: androidx.constraintlayout.solver.LinearSystem.Row): void;
				public updateFromSystem(param0: androidx.constraintlayout.solver.LinearSystem): void;
				public initFromRow(row: androidx.constraintlayout.solver.LinearSystem.Row): void;
				public addError(param0: androidx.constraintlayout.solver.SolverVariable): void;
				public getKey(): androidx.constraintlayout.solver.SolverVariable;
				public updateFromSystem(system: androidx.constraintlayout.solver.LinearSystem): void;
				public getPivotCandidate(system: androidx.constraintlayout.solver.LinearSystem, avoid: boolean[]): androidx.constraintlayout.solver.SolverVariable;
				public constructor();
				public updateFromRow(param0: androidx.constraintlayout.solver.ArrayRow, param1: boolean): void;
				public getPivotCandidate(param0: androidx.constraintlayout.solver.LinearSystem, param1: boolean[]): androidx.constraintlayout.solver.SolverVariable;
				public updateFromFinalVariable(param0: androidx.constraintlayout.solver.LinearSystem, param1: androidx.constraintlayout.solver.SolverVariable, param2: boolean): void;
				public clear(): void;
				public updateFromFinalVariable(system: androidx.constraintlayout.solver.LinearSystem, variable: androidx.constraintlayout.solver.SolverVariable, removeFromDefinition: boolean): void;
				public updateFromRow(definition: androidx.constraintlayout.solver.ArrayRow, removeFromDefinition: boolean): void;
				public isEmpty(): boolean;
				public constructor(cache: androidx.constraintlayout.solver.Cache);
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export class LinearSystem extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.solver.LinearSystem>;
				public static FULL_DEBUG: boolean;
				public static DEBUG: boolean;
				public static MEASURE: boolean;
				public graphOptimizer: boolean;
				public newgraphOptimizer: boolean;
				public static sMetrics: androidx.constraintlayout.solver.Metrics;
				public static OPTIMIZED_ENGINE: boolean;
				public static ARRAY_ROW_CREATION: number;
				public static OPTIMIZED_ARRAY_ROW_CREATION: number;
				public createExtraVariable(): androidx.constraintlayout.solver.SolverVariable;
				public addEquality(a: androidx.constraintlayout.solver.SolverVariable, b: androidx.constraintlayout.solver.SolverVariable, margin: number, strength: number): androidx.constraintlayout.solver.ArrayRow;
				public addCentering(a: androidx.constraintlayout.solver.SolverVariable, b: androidx.constraintlayout.solver.SolverVariable, m1: number, bias: number, c: androidx.constraintlayout.solver.SolverVariable, d: androidx.constraintlayout.solver.SolverVariable, m2: number, strength: number): void;
				public createObjectVariable(anchor: any): androidx.constraintlayout.solver.SolverVariable;
				public constructor();
				public reset(): void;
				public createRow(): androidx.constraintlayout.solver.ArrayRow;
				public minimize(): void;
				public addCenterPoint(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget, target: androidx.constraintlayout.solver.widgets.ConstraintWidget, angle: number, radius: number): void;
				public createSlackVariable(): androidx.constraintlayout.solver.SolverVariable;
				public removeRow(row: androidx.constraintlayout.solver.ArrayRow): void;
				public displayReadableRows(): void;
				public addEquality(a: androidx.constraintlayout.solver.SolverVariable, value: number): void;
				public addLowerBarrier(a: androidx.constraintlayout.solver.SolverVariable, b: androidx.constraintlayout.solver.SolverVariable, margin: number, hasMatchConstraintWidgets: boolean): void;
				public getNumVariables(): number;
				public fillMetrics(metrics: androidx.constraintlayout.solver.Metrics): void;
				public getNumEquations(): number;
				public static getMetrics(): androidx.constraintlayout.solver.Metrics;
				public addGreaterThan(a: androidx.constraintlayout.solver.SolverVariable, b: androidx.constraintlayout.solver.SolverVariable, margin: number, strength: number): void;
				public displayVariablesReadableRows(): void;
				public getMemoryUsed(): number;
				public addRatio(a: androidx.constraintlayout.solver.SolverVariable, b: androidx.constraintlayout.solver.SolverVariable, c: androidx.constraintlayout.solver.SolverVariable, d: androidx.constraintlayout.solver.SolverVariable, ratio: number, strength: number): void;
				public addLowerThan(a: androidx.constraintlayout.solver.SolverVariable, b: androidx.constraintlayout.solver.SolverVariable, margin: number, strength: number): void;
				public createErrorVariable(strength: number, prefix: string): androidx.constraintlayout.solver.SolverVariable;
				public getCache(): androidx.constraintlayout.solver.Cache;
				public addGreaterBarrier(a: androidx.constraintlayout.solver.SolverVariable, b: androidx.constraintlayout.solver.SolverVariable, margin: number, hasMatchConstraintWidgets: boolean): void;
				public getObjectVariableValue(anchor: any): number;
				public static createRowDimensionPercent(linearSystem: androidx.constraintlayout.solver.LinearSystem, variableA: androidx.constraintlayout.solver.SolverVariable, variableC: androidx.constraintlayout.solver.SolverVariable, percent: number): androidx.constraintlayout.solver.ArrayRow;
				public addConstraint(row: androidx.constraintlayout.solver.ArrayRow): void;
			}
			export module LinearSystem {
				export class Row extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.solver.LinearSystem.Row>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.solver.LinearSystem$Row interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getPivotCandidate(param0: androidx.constraintlayout.solver.LinearSystem, param1: boolean[]): androidx.constraintlayout.solver.SolverVariable;
						clear(): void;
						initFromRow(param0: androidx.constraintlayout.solver.LinearSystem.Row): void;
						addError(param0: androidx.constraintlayout.solver.SolverVariable): void;
						updateFromSystem(param0: androidx.constraintlayout.solver.LinearSystem): void;
						getKey(): androidx.constraintlayout.solver.SolverVariable;
						isEmpty(): boolean;
						updateFromRow(param0: androidx.constraintlayout.solver.ArrayRow, param1: boolean): void;
						updateFromFinalVariable(param0: androidx.constraintlayout.solver.LinearSystem, param1: androidx.constraintlayout.solver.SolverVariable, param2: boolean): void;
					});
					public constructor();
					public initFromRow(param0: androidx.constraintlayout.solver.LinearSystem.Row): void;
					public updateFromSystem(param0: androidx.constraintlayout.solver.LinearSystem): void;
					public isEmpty(): boolean;
					public addError(param0: androidx.constraintlayout.solver.SolverVariable): void;
					public getKey(): androidx.constraintlayout.solver.SolverVariable;
					public getPivotCandidate(param0: androidx.constraintlayout.solver.LinearSystem, param1: boolean[]): androidx.constraintlayout.solver.SolverVariable;
					public clear(): void;
					public updateFromFinalVariable(param0: androidx.constraintlayout.solver.LinearSystem, param1: androidx.constraintlayout.solver.SolverVariable, param2: boolean): void;
					public updateFromRow(param0: androidx.constraintlayout.solver.ArrayRow, param1: boolean): void;
				}
				export class ValuesRow extends androidx.constraintlayout.solver.ArrayRow {
					public static class: java.lang.Class<androidx.constraintlayout.solver.LinearSystem.ValuesRow>;
					public initFromRow(param0: androidx.constraintlayout.solver.LinearSystem.Row): void;
					public updateFromSystem(param0: androidx.constraintlayout.solver.LinearSystem): void;
					public isEmpty(): boolean;
					public addError(param0: androidx.constraintlayout.solver.SolverVariable): void;
					public getKey(): androidx.constraintlayout.solver.SolverVariable;
					public getPivotCandidate(param0: androidx.constraintlayout.solver.LinearSystem, param1: boolean[]): androidx.constraintlayout.solver.SolverVariable;
					public updateFromRow(definition: androidx.constraintlayout.solver.ArrayRow, removeFromDefinition: boolean): void;
					public initFromRow(row: androidx.constraintlayout.solver.LinearSystem.Row): void;
					public updateFromFinalVariable(param0: androidx.constraintlayout.solver.LinearSystem, param1: androidx.constraintlayout.solver.SolverVariable, param2: boolean): void;
					public constructor(this$0: androidx.constraintlayout.solver.LinearSystem, cache: androidx.constraintlayout.solver.Cache);
					public addError(system: androidx.constraintlayout.solver.LinearSystem, strength: number): androidx.constraintlayout.solver.ArrayRow;
					public constructor(cache: androidx.constraintlayout.solver.Cache);
					public updateFromRow(param0: androidx.constraintlayout.solver.ArrayRow, param1: boolean): void;
					public updateFromFinalVariable(system: androidx.constraintlayout.solver.LinearSystem, variable: androidx.constraintlayout.solver.SolverVariable, removeFromDefinition: boolean): void;
					public constructor();
					public clear(): void;
					public getPivotCandidate(system: androidx.constraintlayout.solver.LinearSystem, avoid: boolean[]): androidx.constraintlayout.solver.SolverVariable;
					public updateFromSystem(system: androidx.constraintlayout.solver.LinearSystem): void;
					public addError(error: androidx.constraintlayout.solver.SolverVariable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export class Metrics extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.solver.Metrics>;
				public measuresWidgetsDuration: number;
				public measuresLayoutDuration: number;
				public measuredWidgets: number;
				public measuredMatchWidgets: number;
				public measures: number;
				public additionalMeasures: number;
				public resolutions: number;
				public tableSizeIncrease: number;
				public minimize: number;
				public constraints: number;
				public simpleconstraints: number;
				public optimize: number;
				public iterations: number;
				public pivots: number;
				public bfs: number;
				public variables: number;
				public errors: number;
				public slackvariables: number;
				public extravariables: number;
				public maxTableSize: number;
				public fullySolved: number;
				public graphOptimizer: number;
				public graphSolved: number;
				public linearSolved: number;
				public resolvedWidgets: number;
				public minimizeGoal: number;
				public maxVariables: number;
				public maxRows: number;
				public centerConnectionResolved: number;
				public matchConnectionResolved: number;
				public chainConnectionResolved: number;
				public barrierConnectionResolved: number;
				public oldresolvedWidgets: number;
				public nonresolvedWidgets: number;
				public problematicLayouts: java.util.ArrayList<string>;
				public lastTableSize: number;
				public widgets: number;
				public measuresWrap: number;
				public measuresWrapInfeasible: number;
				public infeasibleDetermineGroups: number;
				public determineGroups: number;
				public reset(): void;
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export class Pools extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.solver.Pools>;
			}
			export module Pools {
				export class Pool<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.solver.Pools.Pool<any>>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.solver.Pools$Pool interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						acquire(): T;
						release(param0: T): boolean;
						releaseAll(param0: T[], param1: number): void;
					});
					public constructor();
					public acquire(): T;
					public releaseAll(param0: T[], param1: number): void;
					public release(param0: T): boolean;
				}
				export class SimplePool<T>  extends androidx.constraintlayout.solver.Pools.Pool<any> {
					public static class: java.lang.Class<androidx.constraintlayout.solver.Pools.SimplePool<any>>;
					public releaseAll(variables: any[], count: number): void;
					public releaseAll(param0: any[], param1: number): void;
					public acquire(): any;
					public release(instance: any): boolean;
					public release(param0: any): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export class PriorityGoalRow extends androidx.constraintlayout.solver.ArrayRow {
				public static class: java.lang.Class<androidx.constraintlayout.solver.PriorityGoalRow>;
				public addError(system: androidx.constraintlayout.solver.LinearSystem, strength: number): androidx.constraintlayout.solver.ArrayRow;
				public addError(error: androidx.constraintlayout.solver.SolverVariable): void;
				public initFromRow(param0: androidx.constraintlayout.solver.LinearSystem.Row): void;
				public updateFromSystem(param0: androidx.constraintlayout.solver.LinearSystem): void;
				public initFromRow(row: androidx.constraintlayout.solver.LinearSystem.Row): void;
				public addError(param0: androidx.constraintlayout.solver.SolverVariable): void;
				public getKey(): androidx.constraintlayout.solver.SolverVariable;
				public updateFromSystem(system: androidx.constraintlayout.solver.LinearSystem): void;
				public getPivotCandidate(system: androidx.constraintlayout.solver.LinearSystem, avoid: boolean[]): androidx.constraintlayout.solver.SolverVariable;
				public toString(): string;
				public constructor();
				public updateFromRow(param0: androidx.constraintlayout.solver.ArrayRow, param1: boolean): void;
				public getPivotCandidate(param0: androidx.constraintlayout.solver.LinearSystem, param1: boolean[]): androidx.constraintlayout.solver.SolverVariable;
				public updateFromFinalVariable(param0: androidx.constraintlayout.solver.LinearSystem, param1: androidx.constraintlayout.solver.SolverVariable, param2: boolean): void;
				public clear(): void;
				public updateFromFinalVariable(system: androidx.constraintlayout.solver.LinearSystem, variable: androidx.constraintlayout.solver.SolverVariable, removeFromDefinition: boolean): void;
				public updateFromRow(definition: androidx.constraintlayout.solver.ArrayRow, removeFromDefinition: boolean): void;
				public isEmpty(): boolean;
				public constructor(cache: androidx.constraintlayout.solver.Cache);
			}
			export module PriorityGoalRow {
				export class GoalVariableAccessor extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.solver.PriorityGoalRow.GoalVariableAccessor>;
					public constructor(this$0: androidx.constraintlayout.solver.PriorityGoalRow, row: androidx.constraintlayout.solver.PriorityGoalRow);
					public compareTo(o: any): number;
					public reset(): void;
					public toString(): string;
					public isSmallerThan(other: androidx.constraintlayout.solver.SolverVariable): boolean;
					public init(variable: androidx.constraintlayout.solver.SolverVariable): void;
					public addToGoal(other: androidx.constraintlayout.solver.SolverVariable, value: number): boolean;
					public add(other: androidx.constraintlayout.solver.SolverVariable): void;
					public isNull(): boolean;
					public isNegative(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export class SolverVariable extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.solver.SolverVariable>;
				public static STRENGTH_NONE: number;
				public static STRENGTH_LOW: number;
				public static STRENGTH_MEDIUM: number;
				public static STRENGTH_HIGH: number;
				public static STRENGTH_HIGHEST: number;
				public static STRENGTH_EQUALITY: number;
				public static STRENGTH_BARRIER: number;
				public static STRENGTH_CENTERING: number;
				public static STRENGTH_FIXED: number;
				public inGoal: boolean;
				public id: number;
				public strength: number;
				public computedValue: number;
				public isFinalValue: boolean;
				public usageInRowCount: number;
				public addToRow(row: androidx.constraintlayout.solver.ArrayRow): void;
				public setFinalValue(system: androidx.constraintlayout.solver.LinearSystem, value: number): void;
				public reset(): void;
				public updateReferencesWithNewDefinition(definition: androidx.constraintlayout.solver.ArrayRow): void;
				public constructor(type: androidx.constraintlayout.solver.SolverVariable.Type, prefix: string);
				public setName(name: string): void;
				public getName(): string;
				public toString(): string;
				public constructor(name: string, type: androidx.constraintlayout.solver.SolverVariable.Type);
				public setType(type: androidx.constraintlayout.solver.SolverVariable.Type, prefix: string): void;
				public removeFromRow(row: androidx.constraintlayout.solver.ArrayRow): void;
			}
			export module SolverVariable {
				export class Type {
					public static class: java.lang.Class<androidx.constraintlayout.solver.SolverVariable.Type>;
					public static UNRESTRICTED: androidx.constraintlayout.solver.SolverVariable.Type;
					public static CONSTANT: androidx.constraintlayout.solver.SolverVariable.Type;
					public static SLACK: androidx.constraintlayout.solver.SolverVariable.Type;
					public static ERROR: androidx.constraintlayout.solver.SolverVariable.Type;
					public static UNKNOWN: androidx.constraintlayout.solver.SolverVariable.Type;
					public static values(): androidx.constraintlayout.solver.SolverVariable.Type[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): androidx.constraintlayout.solver.SolverVariable.Type;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export class SolverVariableValues extends java.lang.Object implements androidx.constraintlayout.solver.ArrayRow.ArrayRowVariables {
				public static class: java.lang.Class<androidx.constraintlayout.solver.SolverVariableValues>;
				public mCache: androidx.constraintlayout.solver.Cache;
				public getVariableValue(param0: number): number;
				public indexOf(param0: androidx.constraintlayout.solver.SolverVariable): number;
				public get(variable: androidx.constraintlayout.solver.SolverVariable): number;
				public divideByAmount(amount: number): void;
				public add(v: androidx.constraintlayout.solver.SolverVariable, value: number, removeFromDefinition: boolean): void;
				public getVariable(param0: number): androidx.constraintlayout.solver.SolverVariable;
				public invert(): void;
				public getVariable(index: number): androidx.constraintlayout.solver.SolverVariable;
				public getCurrentSize(): number;
				public remove(param0: androidx.constraintlayout.solver.SolverVariable, param1: boolean): number;
				public display(): void;
				public clear(): void;
				public use(param0: androidx.constraintlayout.solver.ArrayRow, param1: boolean): number;
				public remove(v: androidx.constraintlayout.solver.SolverVariable, removeFromDefinition: boolean): number;
				public contains(param0: androidx.constraintlayout.solver.SolverVariable): boolean;
				public put(param0: androidx.constraintlayout.solver.SolverVariable, param1: number): void;
				public divideByAmount(param0: number): void;
				public toString(): string;
				public add(param0: androidx.constraintlayout.solver.SolverVariable, param1: number, param2: boolean): void;
				public sizeInBytes(): number;
				public use(def: androidx.constraintlayout.solver.ArrayRow, removeFromDefinition: boolean): number;
				public getVariableValue(index: number): number;
				public get(param0: androidx.constraintlayout.solver.SolverVariable): number;
				public indexOf(variable: androidx.constraintlayout.solver.SolverVariable): number;
				public contains(variable: androidx.constraintlayout.solver.SolverVariable): boolean;
				public put(variable: androidx.constraintlayout.solver.SolverVariable, value: number): void;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module state {
				export class ConstraintReference extends java.lang.Object implements androidx.constraintlayout.solver.state.Reference {
					public static class: java.lang.Class<androidx.constraintlayout.solver.state.ConstraintReference>;
					public margin(value: number): androidx.constraintlayout.solver.state.ConstraintReference;
					public getHorizontalChainStyle(): number;
					public top(): androidx.constraintlayout.solver.state.ConstraintReference;
					public setView(view: any): void;
					public startToEnd(reference: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public baselineToBaseline(reference: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public setConstraintWidget(param0: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
					public clear(): androidx.constraintlayout.solver.state.ConstraintReference;
					public getWidth(): androidx.constraintlayout.solver.state.Dimension;
					public width(dimension: androidx.constraintlayout.solver.state.Dimension): androidx.constraintlayout.solver.state.ConstraintReference;
					public centerHorizontally(reference: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public setKey(param0: any): void;
					public apply(): void;
					public rightToRight(reference: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public verticalBias(value: number): androidx.constraintlayout.solver.state.ConstraintReference;
					public clearHorizontal(): androidx.constraintlayout.solver.state.ConstraintReference;
					public setKey(key: any): void;
					public createConstraintWidget(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public bottomToBottom(reference: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public getHeight(): androidx.constraintlayout.solver.state.Dimension;
					public marginGone(value: number): androidx.constraintlayout.solver.state.ConstraintReference;
					public setWidth(dimension: androidx.constraintlayout.solver.state.Dimension): androidx.constraintlayout.solver.state.ConstraintReference;
					public margin(marginValue: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public getView(): any;
					public rightToLeft(reference: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public startToStart(reference: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public start(): androidx.constraintlayout.solver.state.ConstraintReference;
					public getVerticalChainStyle(chainStyle: number): number;
					public validate(): void;
					public setConstraintWidget(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
					public end(): androidx.constraintlayout.solver.state.ConstraintReference;
					public topToBottom(reference: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public height(dimension: androidx.constraintlayout.solver.state.Dimension): androidx.constraintlayout.solver.state.ConstraintReference;
					public endToStart(reference: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public endToEnd(reference: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public bottomToTop(reference: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public setVerticalChainStyle(chainStyle: number): void;
					public leftToLeft(reference: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public baseline(): androidx.constraintlayout.solver.state.ConstraintReference;
					public bias(value: number): androidx.constraintlayout.solver.state.ConstraintReference;
					public setHorizontalChainStyle(chainStyle: number): void;
					public horizontalBias(value: number): androidx.constraintlayout.solver.state.ConstraintReference;
					public setHeight(dimension: androidx.constraintlayout.solver.state.Dimension): androidx.constraintlayout.solver.state.ConstraintReference;
					public getConstraintWidget(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public topToTop(reference: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public bottom(): androidx.constraintlayout.solver.state.ConstraintReference;
					public constructor(state: androidx.constraintlayout.solver.state.State);
					public leftToRight(reference: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public getKey(): any;
					public centerVertically(reference: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public left(): androidx.constraintlayout.solver.state.ConstraintReference;
					public right(): androidx.constraintlayout.solver.state.ConstraintReference;
					public clearVertical(): androidx.constraintlayout.solver.state.ConstraintReference;
				}
				export module ConstraintReference {
					export class ConstraintReferenceFactory extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.solver.state.ConstraintReference.ConstraintReferenceFactory>;
						/**
						 * Constructs a new instance of the androidx.constraintlayout.solver.state.ConstraintReference$ConstraintReferenceFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							create(param0: androidx.constraintlayout.solver.state.State): androidx.constraintlayout.solver.state.ConstraintReference;
						});
						public constructor();
						public create(param0: androidx.constraintlayout.solver.state.State): androidx.constraintlayout.solver.state.ConstraintReference;
					}
					export class IncorrectConstraintException extends java.lang.Exception {
						public static class: java.lang.Class<androidx.constraintlayout.solver.state.ConstraintReference.IncorrectConstraintException>;
						public constructor();
						public getErrors(): java.util.ArrayList<string>;
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(this$0: java.util.ArrayList<string>);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module state {
				export class Dimension extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.solver.state.Dimension>;
					public static FIXED_DIMENSION: any;
					public static WRAP_DIMENSION: any;
					public static SPREAD_DIMENSION: any;
					public static PARENT_DIMENSION: any;
					public static PERCENT_DIMENSION: any;
					public static Fixed(value: any): androidx.constraintlayout.solver.state.Dimension;
					public min(value: number): androidx.constraintlayout.solver.state.Dimension;
					public min(value: any): androidx.constraintlayout.solver.state.Dimension;
					public static Fixed(value: number): androidx.constraintlayout.solver.state.Dimension;
					public static Parent(): androidx.constraintlayout.solver.state.Dimension;
					public static Spread(): androidx.constraintlayout.solver.state.Dimension;
					public fixed(value: number): androidx.constraintlayout.solver.state.Dimension;
					public apply(state: androidx.constraintlayout.solver.state.State, constraintWidget: androidx.constraintlayout.solver.widgets.ConstraintWidget, orientation: number): void;
					public static Percent(key: any, value: number): androidx.constraintlayout.solver.state.Dimension;
					public suggested(value: any): androidx.constraintlayout.solver.state.Dimension;
					public percent(key: any, value: number): androidx.constraintlayout.solver.state.Dimension;
					public max(value: number): androidx.constraintlayout.solver.state.Dimension;
					public ratio(ratio: number): androidx.constraintlayout.solver.state.Dimension;
					public static Suggested(startValue: any): androidx.constraintlayout.solver.state.Dimension;
					public suggested(value: number): androidx.constraintlayout.solver.state.Dimension;
					public fixed(value: any): androidx.constraintlayout.solver.state.Dimension;
					public max(value: any): androidx.constraintlayout.solver.state.Dimension;
					public static Wrap(): androidx.constraintlayout.solver.state.Dimension;
					public static Suggested(value: number): androidx.constraintlayout.solver.state.Dimension;
				}
				export module Dimension {
					export class Type {
						public static class: java.lang.Class<androidx.constraintlayout.solver.state.Dimension.Type>;
						public static FIXED: androidx.constraintlayout.solver.state.Dimension.Type;
						public static WRAP: androidx.constraintlayout.solver.state.Dimension.Type;
						public static MATCH_PARENT: androidx.constraintlayout.solver.state.Dimension.Type;
						public static MATCH_CONSTRAINT: androidx.constraintlayout.solver.state.Dimension.Type;
						public static values(): androidx.constraintlayout.solver.state.Dimension.Type[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): androidx.constraintlayout.solver.state.Dimension.Type;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module state {
				export class HelperReference extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.solver.state.HelperReference>;
					public mState: androidx.constraintlayout.solver.state.State;
					public mReferences: java.util.ArrayList<any>;
					public add(...objects: any[]): androidx.constraintlayout.solver.state.HelperReference;
					public setHelperWidget(helperWidget: androidx.constraintlayout.solver.widgets.HelperWidget): void;
					public getHelperWidget(): androidx.constraintlayout.solver.widgets.HelperWidget;
					public getType(): androidx.constraintlayout.solver.state.State.Helper;
					public constructor(state: androidx.constraintlayout.solver.state.State, type: androidx.constraintlayout.solver.state.State.Helper);
					public apply(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module state {
				export class Reference extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.solver.state.Reference>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.solver.state.Reference interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getConstraintWidget(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
						setConstraintWidget(param0: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
						setKey(param0: any): void;
						getKey(): any;
						apply(): void;
					});
					public constructor();
					public getConstraintWidget(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public setConstraintWidget(param0: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
					public getKey(): any;
					public setKey(param0: any): void;
					public apply(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module state {
				export class State extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.solver.state.State>;
					public mReferences: java.util.HashMap<any,androidx.constraintlayout.solver.state.Reference>;
					public mHelperReferences: java.util.HashMap<any,androidx.constraintlayout.solver.state.HelperReference>;
					public static PARENT: java.lang.Integer;
					public mParent: androidx.constraintlayout.solver.state.ConstraintReference;
					public setHeight(dimension: androidx.constraintlayout.solver.state.Dimension): androidx.constraintlayout.solver.state.State;
					public reset(): void;
					public map(key: any, view: any): void;
					public createConstraintReference(key: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public horizontalGuideline(key: any): androidx.constraintlayout.solver.state.helpers.GuidelineReference;
					public horizontalChain(...references: any[]): androidx.constraintlayout.solver.state.helpers.HorizontalChainReference;
					public directMapping(): void;
					public guideline(key: any, orientation: number): androidx.constraintlayout.solver.state.helpers.GuidelineReference;
					public apply(container: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer): void;
					public height(dimension: androidx.constraintlayout.solver.state.Dimension): androidx.constraintlayout.solver.state.State;
					public constraints(key: any): androidx.constraintlayout.solver.state.ConstraintReference;
					public convertDimension(value: any): number;
					public setWidth(dimension: androidx.constraintlayout.solver.state.Dimension): androidx.constraintlayout.solver.state.State;
					public centerHorizontally(...references: any[]): androidx.constraintlayout.solver.state.helpers.AlignHorizontallyReference;
					public constructor();
					public helper(key: any, type: androidx.constraintlayout.solver.state.State.Helper): androidx.constraintlayout.solver.state.HelperReference;
					public width(dimension: androidx.constraintlayout.solver.state.Dimension): androidx.constraintlayout.solver.state.State;
					public verticalGuideline(key: any): androidx.constraintlayout.solver.state.helpers.GuidelineReference;
					public barrier(key: any, direction: androidx.constraintlayout.solver.state.State.Direction): androidx.constraintlayout.solver.state.helpers.BarrierReference;
					public verticalChain(...references: any[]): androidx.constraintlayout.solver.state.helpers.VerticalChainReference;
					public centerVertically(...references: any[]): androidx.constraintlayout.solver.state.helpers.AlignVerticallyReference;
				}
				export module State {
					export class Chain {
						public static class: java.lang.Class<androidx.constraintlayout.solver.state.State.Chain>;
						public static SPREAD: androidx.constraintlayout.solver.state.State.Chain;
						public static SPREAD_INSIDE: androidx.constraintlayout.solver.state.State.Chain;
						public static PACKED: androidx.constraintlayout.solver.state.State.Chain;
						public static valueOf(name: string): androidx.constraintlayout.solver.state.State.Chain;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): androidx.constraintlayout.solver.state.State.Chain[];
					}
					export class Constraint {
						public static class: java.lang.Class<androidx.constraintlayout.solver.state.State.Constraint>;
						public static LEFT_TO_LEFT: androidx.constraintlayout.solver.state.State.Constraint;
						public static LEFT_TO_RIGHT: androidx.constraintlayout.solver.state.State.Constraint;
						public static RIGHT_TO_LEFT: androidx.constraintlayout.solver.state.State.Constraint;
						public static RIGHT_TO_RIGHT: androidx.constraintlayout.solver.state.State.Constraint;
						public static START_TO_START: androidx.constraintlayout.solver.state.State.Constraint;
						public static START_TO_END: androidx.constraintlayout.solver.state.State.Constraint;
						public static END_TO_START: androidx.constraintlayout.solver.state.State.Constraint;
						public static END_TO_END: androidx.constraintlayout.solver.state.State.Constraint;
						public static TOP_TO_TOP: androidx.constraintlayout.solver.state.State.Constraint;
						public static TOP_TO_BOTTOM: androidx.constraintlayout.solver.state.State.Constraint;
						public static BOTTOM_TO_TOP: androidx.constraintlayout.solver.state.State.Constraint;
						public static BOTTOM_TO_BOTTOM: androidx.constraintlayout.solver.state.State.Constraint;
						public static BASELINE_TO_BASELINE: androidx.constraintlayout.solver.state.State.Constraint;
						public static CENTER_HORIZONTALLY: androidx.constraintlayout.solver.state.State.Constraint;
						public static CENTER_VERTICALLY: androidx.constraintlayout.solver.state.State.Constraint;
						public static values(): androidx.constraintlayout.solver.state.State.Constraint[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): androidx.constraintlayout.solver.state.State.Constraint;
					}
					export class Direction {
						public static class: java.lang.Class<androidx.constraintlayout.solver.state.State.Direction>;
						public static LEFT: androidx.constraintlayout.solver.state.State.Direction;
						public static RIGHT: androidx.constraintlayout.solver.state.State.Direction;
						public static START: androidx.constraintlayout.solver.state.State.Direction;
						public static END: androidx.constraintlayout.solver.state.State.Direction;
						public static TOP: androidx.constraintlayout.solver.state.State.Direction;
						public static BOTTOM: androidx.constraintlayout.solver.state.State.Direction;
						public static valueOf(name: string): androidx.constraintlayout.solver.state.State.Direction;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): androidx.constraintlayout.solver.state.State.Direction[];
					}
					export class Helper {
						public static class: java.lang.Class<androidx.constraintlayout.solver.state.State.Helper>;
						public static HORIZONTAL_CHAIN: androidx.constraintlayout.solver.state.State.Helper;
						public static VERTICAL_CHAIN: androidx.constraintlayout.solver.state.State.Helper;
						public static ALIGN_HORIZONTALLY: androidx.constraintlayout.solver.state.State.Helper;
						public static ALIGN_VERTICALLY: androidx.constraintlayout.solver.state.State.Helper;
						public static BARRIER: androidx.constraintlayout.solver.state.State.Helper;
						public static LAYER: androidx.constraintlayout.solver.state.State.Helper;
						public static FLOW: androidx.constraintlayout.solver.state.State.Helper;
						public static values(): androidx.constraintlayout.solver.state.State.Helper[];
						public static valueOf(name: string): androidx.constraintlayout.solver.state.State.Helper;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module state {
				export module helpers {
					export class AlignHorizontallyReference extends androidx.constraintlayout.solver.state.HelperReference {
						public static class: java.lang.Class<androidx.constraintlayout.solver.state.helpers.AlignHorizontallyReference>;
						public constructor(state: androidx.constraintlayout.solver.state.State, type: androidx.constraintlayout.solver.state.State.Helper);
						public apply(): void;
						public bias(bias: number): void;
						public endToEnd(target: any): void;
						public constructor(state: androidx.constraintlayout.solver.state.State);
						public endToStart(target: any): void;
						public startToEnd(target: any): void;
						public startToStart(target: any): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module state {
				export module helpers {
					export class AlignVerticallyReference extends androidx.constraintlayout.solver.state.HelperReference {
						public static class: java.lang.Class<androidx.constraintlayout.solver.state.helpers.AlignVerticallyReference>;
						public constructor(state: androidx.constraintlayout.solver.state.State, type: androidx.constraintlayout.solver.state.State.Helper);
						public apply(): void;
						public bottomToBottom(target: any): void;
						public bias(bias: number): void;
						public bottomToTop(target: any): void;
						public constructor(state: androidx.constraintlayout.solver.state.State);
						public topToBottom(target: any): void;
						public topToTop(target: any): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module state {
				export module helpers {
					export class BarrierReference extends androidx.constraintlayout.solver.state.HelperReference {
						public static class: java.lang.Class<androidx.constraintlayout.solver.state.helpers.BarrierReference>;
						public margin(value: any): void;
						public constructor(state: androidx.constraintlayout.solver.state.State, type: androidx.constraintlayout.solver.state.State.Helper);
						public apply(): void;
						public constructor(state: androidx.constraintlayout.solver.state.State);
						public setBarrierDirection(barrierDirection: androidx.constraintlayout.solver.state.State.Direction): void;
						public margin(value: number): void;
						public getHelperWidget(): androidx.constraintlayout.solver.widgets.HelperWidget;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module state {
				export module helpers {
					export class ChainReference extends androidx.constraintlayout.solver.state.HelperReference {
						public static class: java.lang.Class<androidx.constraintlayout.solver.state.helpers.ChainReference>;
						public mBias: number;
						public mStyle: androidx.constraintlayout.solver.state.State.Chain;
						public constructor(state: androidx.constraintlayout.solver.state.State, type: androidx.constraintlayout.solver.state.State.Helper);
						public bias(bias: number): void;
						public getStyle(): androidx.constraintlayout.solver.state.State.Chain;
						public style(style: androidx.constraintlayout.solver.state.State.Chain): void;
						public getBias(): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module state {
				export module helpers {
					export class GuidelineReference extends java.lang.Object implements androidx.constraintlayout.solver.state.Reference {
						public static class: java.lang.Class<androidx.constraintlayout.solver.state.helpers.GuidelineReference>;
						public setConstraintWidget(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
						public setOrientation(orientation: number): void;
						public getKey(): any;
						public percent(percent: number): void;
						public getConstraintWidget(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
						public setKey(param0: any): void;
						public apply(): void;
						public setKey(key: any): void;
						public setConstraintWidget(param0: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
						public constructor(state: androidx.constraintlayout.solver.state.State);
						public start(margin: any): void;
						public end(margin: any): void;
						public getOrientation(): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module state {
				export module helpers {
					export class HorizontalChainReference extends androidx.constraintlayout.solver.state.helpers.ChainReference {
						public static class: java.lang.Class<androidx.constraintlayout.solver.state.helpers.HorizontalChainReference>;
						public constructor(state: androidx.constraintlayout.solver.state.State, type: androidx.constraintlayout.solver.state.State.Helper);
						public apply(): void;
						public endToEnd(target: any): void;
						public constructor(state: androidx.constraintlayout.solver.state.State);
						public endToStart(target: any): void;
						public startToEnd(target: any): void;
						public startToStart(target: any): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module state {
				export module helpers {
					export class VerticalChainReference extends androidx.constraintlayout.solver.state.helpers.ChainReference {
						public static class: java.lang.Class<androidx.constraintlayout.solver.state.helpers.VerticalChainReference>;
						public constructor(state: androidx.constraintlayout.solver.state.State, type: androidx.constraintlayout.solver.state.State.Helper);
						public apply(): void;
						public bottomToBottom(target: any): void;
						public bottomToTop(target: any): void;
						public constructor(state: androidx.constraintlayout.solver.state.State);
						public topToBottom(target: any): void;
						public topToTop(target: any): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export class Barrier extends androidx.constraintlayout.solver.widgets.HelperWidget {
					public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.Barrier>;
					public static LEFT: number;
					public static RIGHT: number;
					public static TOP: number;
					public static BOTTOM: number;
					public add(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
					public copy(src: androidx.constraintlayout.solver.widgets.ConstraintWidget, map: java.util.HashMap<androidx.constraintlayout.solver.widgets.ConstraintWidget,androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
					public updateConstraints(param0: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer): void;
					public removeAllIds(): void;
					public getMargin(): number;
					public setBarrierType(barrierType: number): void;
					public allowsGoneWidget(): boolean;
					public markWidgets(): void;
					public add(param0: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
					public constructor(width: number, height: number);
					public toString(): string;
					public allowedInBarrier(): boolean;
					public updateConstraints(container: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer): void;
					public constructor();
					public setAllowsGoneWidget(allowsGoneWidget: boolean): void;
					public getBarrierType(): number;
					public addToSolver(system: androidx.constraintlayout.solver.LinearSystem): void;
					public constructor(x: number, y: number, width: number, height: number);
					public setMargin(margin: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export class Chain extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.Chain>;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export class ChainHead extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.ChainHead>;
					public mFirst: androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public mFirstVisibleWidget: androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public mLast: androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public mLastVisibleWidget: androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public mHead: androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public mFirstMatchConstraintWidget: androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public mLastMatchConstraintWidget: androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public mWeightedMatchConstraintsWidgets: java.util.ArrayList<androidx.constraintlayout.solver.widgets.ConstraintWidget>;
					public mWidgetsCount: number;
					public mWidgetsMatchCount: number;
					public mTotalWeight: number;
					public mHasUndefinedWeights: boolean;
					public mHasDefinedWeights: boolean;
					public mHasComplexMatchWeights: boolean;
					public mHasRatio: boolean;
					public getLast(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public getFirst(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public getLastVisibleWidget(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public getFirstMatchConstraintWidget(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public getLastMatchConstraintWidget(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public constructor(first: androidx.constraintlayout.solver.widgets.ConstraintWidget, orientation: number, isRtl: boolean);
					public getFirstVisibleWidget(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public define(): void;
					public getTotalWeight(): number;
					public getHead(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export class ConstraintAnchor extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.ConstraintAnchor>;
					public mOwner: androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public mType: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type;
					public mTarget: androidx.constraintlayout.solver.widgets.ConstraintAnchor;
					public mMargin: number;
					public copyFrom(source: androidx.constraintlayout.solver.widgets.ConstraintAnchor, map: java.util.HashMap<androidx.constraintlayout.solver.widgets.ConstraintWidget,androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
					public reset(): void;
					public isConnected(): boolean;
					public getMargin(): number;
					public setGoneMargin(margin: number): void;
					public hasCenteredDependents(): boolean;
					public getSolverVariable(): androidx.constraintlayout.solver.SolverVariable;
					public getType(): androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type;
					public isVerticalAnchor(): boolean;
					public isConnectionAllowed(target: androidx.constraintlayout.solver.widgets.ConstraintWidget): boolean;
					public getOpposite(): androidx.constraintlayout.solver.widgets.ConstraintAnchor;
					public toString(): string;
					public isConnectionAllowed(target: androidx.constraintlayout.solver.widgets.ConstraintWidget, anchor: androidx.constraintlayout.solver.widgets.ConstraintAnchor): boolean;
					public isSimilarDimensionConnection(anchor: androidx.constraintlayout.solver.widgets.ConstraintAnchor): boolean;
					public connect(toAnchor: androidx.constraintlayout.solver.widgets.ConstraintAnchor, margin: number, goneMargin: number, forceConnection: boolean): boolean;
					public isSideAnchor(): boolean;
					public resetSolverVariable(cache: androidx.constraintlayout.solver.Cache): void;
					public connect(toAnchor: androidx.constraintlayout.solver.widgets.ConstraintAnchor, margin: number): boolean;
					public hasDependents(): boolean;
					public constructor(owner: androidx.constraintlayout.solver.widgets.ConstraintWidget, type: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type);
					public getOwner(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public isValidConnection(anchor: androidx.constraintlayout.solver.widgets.ConstraintAnchor): boolean;
					public getTarget(): androidx.constraintlayout.solver.widgets.ConstraintAnchor;
					public setMargin(margin: number): void;
				}
				export module ConstraintAnchor {
					export class Type {
						public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type>;
						public static NONE: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type;
						public static LEFT: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type;
						public static TOP: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type;
						public static RIGHT: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type;
						public static BOTTOM: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type;
						public static BASELINE: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type;
						public static CENTER: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type;
						public static CENTER_X: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type;
						public static CENTER_Y: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type;
						public static valueOf(name: string): androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type[];
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export class ConstraintWidget extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.ConstraintWidget>;
					public static SOLVER: number;
					public static DIRECT: number;
					public measured: boolean;
					public run: androidx.constraintlayout.solver.widgets.analyzer.WidgetRun[];
					public horizontalChainRun: androidx.constraintlayout.solver.widgets.analyzer.ChainRun;
					public verticalChainRun: androidx.constraintlayout.solver.widgets.analyzer.ChainRun;
					public horizontalRun: androidx.constraintlayout.solver.widgets.analyzer.HorizontalWidgetRun;
					public verticalRun: androidx.constraintlayout.solver.widgets.analyzer.VerticalWidgetRun;
					public isTerminalWidget: boolean[];
					public wrapMeasure: number[];
					public static MATCH_CONSTRAINT_SPREAD: number;
					public static MATCH_CONSTRAINT_WRAP: number;
					public static MATCH_CONSTRAINT_PERCENT: number;
					public static MATCH_CONSTRAINT_RATIO: number;
					public static MATCH_CONSTRAINT_RATIO_RESOLVED: number;
					public static UNKNOWN: number;
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static VISIBLE: number;
					public static INVISIBLE: number;
					public static GONE: number;
					public static CHAIN_SPREAD: number;
					public static CHAIN_SPREAD_INSIDE: number;
					public static CHAIN_PACKED: number;
					public mHorizontalResolution: number;
					public mVerticalResolution: number;
					public mMatchConstraintDefaultWidth: number;
					public mMatchConstraintDefaultHeight: number;
					public mResolvedMatchConstraintDefault: number[];
					public mMatchConstraintMinWidth: number;
					public mMatchConstraintMaxWidth: number;
					public mMatchConstraintPercentWidth: number;
					public mMatchConstraintMinHeight: number;
					public mMatchConstraintMaxHeight: number;
					public mMatchConstraintPercentHeight: number;
					public mIsWidthWrapContent: boolean;
					public mIsHeightWrapContent: boolean;
					public mLeft: androidx.constraintlayout.solver.widgets.ConstraintAnchor;
					public mTop: androidx.constraintlayout.solver.widgets.ConstraintAnchor;
					public mRight: androidx.constraintlayout.solver.widgets.ConstraintAnchor;
					public mBottom: androidx.constraintlayout.solver.widgets.ConstraintAnchor;
					public static ANCHOR_LEFT: number;
					public static ANCHOR_RIGHT: number;
					public static ANCHOR_TOP: number;
					public static ANCHOR_BOTTOM: number;
					public static ANCHOR_BASELINE: number;
					public mListAnchors: androidx.constraintlayout.solver.widgets.ConstraintAnchor[];
					public mAnchors: java.util.ArrayList<androidx.constraintlayout.solver.widgets.ConstraintAnchor>;
					public mListDimensionBehaviors: androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour[];
					public mParent: androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public mDimensionRatio: number;
					public mDimensionRatioSide: number;
					public mX: number;
					public mY: number;
					public mOffsetX: number;
					public mOffsetY: number;
					public mMinWidth: number;
					public mMinHeight: number;
					public static DEFAULT_BIAS: number;
					public mWeight: number[];
					public mListNextMatchConstraintsWidget: androidx.constraintlayout.solver.widgets.ConstraintWidget[];
					public mNextChainWidget: androidx.constraintlayout.solver.widgets.ConstraintWidget[];
					public getRootX(): number;
					public connect(constraintFrom: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type, target: androidx.constraintlayout.solver.widgets.ConstraintWidget, constraintTo: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type, margin: number): void;
					public getHorizontalChainStyle(): number;
					public getRun(orientation: number): androidx.constraintlayout.solver.widgets.analyzer.WidgetRun;
					public getBiasPercent(orientation: number): number;
					public setMinHeight(h: number): void;
					public setVerticalDimensionBehaviour(behaviour: androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour): void;
					public setVerticalChainStyle(verticalChainStyle: number): void;
					public constructor();
					public setMaxHeight(maxHeight: number): void;
					public getContainerItemSkip(): number;
					public setGoneMargin(type: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type, goneMargin: number): void;
					public setInPlaceholder(inPlaceholder: boolean): void;
					public setFrame(left: number, top: number, right: number, bottom: number): void;
					public resetAnchors(): void;
					public getVerticalChainControlWidget(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public getHeight(): number;
					public getVerticalChainStyle(): number;
					public resetAnchor(anchor: androidx.constraintlayout.solver.widgets.ConstraintAnchor): void;
					public getY(): number;
					public setInVirtualLayout(inVirtualLayout: boolean): void;
					public constructor(width: number, height: number);
					public setDebugName(name: string): void;
					public setDebugSolverName(system: androidx.constraintlayout.solver.LinearSystem, name: string): void;
					public getParent(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public getCompanionWidget(): any;
					public isInHorizontalChain(): boolean;
					public updateFromRuns(updateHorizontal: boolean, updateVertical: boolean): void;
					public getHorizontalBiasPercent(): number;
					public isInVerticalChain(): boolean;
					public addToSolver(system: androidx.constraintlayout.solver.LinearSystem): void;
					public getDimensionRatio(): number;
					public getHorizontalMargin(): number;
					public getMaxWidth(): number;
					public copy(src: androidx.constraintlayout.solver.widgets.ConstraintWidget, map: java.util.HashMap<androidx.constraintlayout.solver.widgets.ConstraintWidget,androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
					public setVerticalDimension(top: number, bottom: number): void;
					public setMinWidth(w: number): void;
					public getVerticalDimensionBehaviour(): androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour;
					public hasBaseline(): boolean;
					public setupDimensionRatio(hparentWrapContent: boolean, vparentWrapContent: boolean, horizontalDimensionFixed: boolean, verticalDimensionFixed: boolean): void;
					public isSpreadHeight(): boolean;
					public getVerticalMargin(): number;
					public getOptimizerWrapHeight(): number;
					public resetSolverVariables(cache: androidx.constraintlayout.solver.Cache): void;
					public setHeight(h: number): void;
					public isWidthWrapContent(): boolean;
					public getOptimizerWrapWidth(): number;
					public setHorizontalBiasPercent(horizontalBiasPercent: number): void;
					public connectCircularConstraint(target: androidx.constraintlayout.solver.widgets.ConstraintWidget, angle: number, radius: number): void;
					public getHasBaseline(): boolean;
					public reset(): void;
					public isHeightWrapContent(): boolean;
					public setVerticalBiasPercent(verticalBiasPercent: number): void;
					public getAnchor(anchorType: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type): androidx.constraintlayout.solver.widgets.ConstraintAnchor;
					public getWidth(): number;
					public isSpreadWidth(): boolean;
					public setFrame(start: number, end: number, orientation: number): void;
					public setWidth(w: number): void;
					public isInVirtualLayout(): boolean;
					public setLength(length: number, orientation: number): void;
					public getBottom(): number;
					public getX(): number;
					public immediateConnect(startType: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type, target: androidx.constraintlayout.solver.widgets.ConstraintWidget, endType: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type, margin: number, goneMargin: number): void;
					public setMaxWidth(maxWidth: number): void;
					public getHorizontalChainControlWidget(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public setHorizontalChainStyle(horizontalChainStyle: number): void;
					public isInPlaceholder(): boolean;
					public setHasBaseline(hasBaseline: boolean): void;
					public getVerticalBiasPercent(): number;
					public resetAllConstraints(): void;
					public getVisibility(): number;
					public setInBarrier(orientation: number, value: boolean): void;
					public setVerticalWeight(verticalWeight: number): void;
					public getRight(): number;
					public setHorizontalDimensionBehaviour(behaviour: androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour): void;
					public updateFromSolver(system: androidx.constraintlayout.solver.LinearSystem): void;
					public getDebugName(): string;
					public setCompanionWidget(companion: any): void;
					public setContainerItemSkip(skip: number): void;
					public getMinHeight(): number;
					public setVerticalMatchStyle(verticalMatchStyle: number, min: number, max: number, percent: number): void;
					public setWidthWrapContent(widthWrapContent: boolean): void;
					public setHorizontalDimension(left: number, right: number): void;
					public getRootY(): number;
					public getLeft(): number;
					public getBaselineDistance(): number;
					public setOffset(x: number, y: number): void;
					public createObjectVariables(system: androidx.constraintlayout.solver.LinearSystem): void;
					public constructor(x: number, y: number, width: number, height: number);
					public setY(y: number): void;
					public getMinWidth(): number;
					public getDimensionRatioSide(): number;
					public setOrigin(x: number, y: number): void;
					public getPreviousChainMember(orientation: number): androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public getHorizontalDimensionBehaviour(): androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour;
					public getLength(orientation: number): number;
					public isRoot(): boolean;
					public toString(): string;
					public setX(x: number): void;
					public allowedInBarrier(): boolean;
					public setHeightWrapContent(heightWrapContent: boolean): void;
					public getMaxHeight(): number;
					public getType(): string;
					public setVisibility(visibility: number): void;
					public getNextChainMember(orientation: number): androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public setParent(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
					public setType(type: string): void;
					public setHorizontalMatchStyle(horizontalMatchStyle: number, min: number, max: number, percent: number): void;
					public getAnchors(): java.util.ArrayList<androidx.constraintlayout.solver.widgets.ConstraintAnchor>;
					public setDimensionRatio(ratio: string): void;
					public connect(from: androidx.constraintlayout.solver.widgets.ConstraintAnchor, to: androidx.constraintlayout.solver.widgets.ConstraintAnchor, margin: number): void;
					public getTop(): number;
					public setDimension(w: number, h: number): void;
					public setDimensionRatio(ratio: number, dimensionRatioSide: number): void;
					public setBaselineDistance(baseline: number): void;
					public getDimensionBehaviour(orientation: number): androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour;
					public setHorizontalWeight(horizontalWeight: number): void;
					public connect(constraintFrom: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type, target: androidx.constraintlayout.solver.widgets.ConstraintWidget, constraintTo: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type): void;
				}
				export module ConstraintWidget {
					export class DimensionBehaviour {
						public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour>;
						public static FIXED: androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour;
						public static WRAP_CONTENT: androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour;
						public static MATCH_CONSTRAINT: androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour;
						public static MATCH_PARENT: androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour;
						public static values(): androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export class ConstraintWidgetContainer extends androidx.constraintlayout.solver.widgets.WidgetContainer {
					public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer>;
					public mDependencyGraph: androidx.constraintlayout.solver.widgets.analyzer.DependencyGraph;
					public mMeasurer: androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure.Measurer;
					public mMetrics: androidx.constraintlayout.solver.Metrics;
					public mSystem: androidx.constraintlayout.solver.LinearSystem;
					public mGroupsWrapOptimized: boolean;
					public mHorizontalWrapOptimized: boolean;
					public mVerticalWrapOptimized: boolean;
					public mWrapFixedWidth: number;
					public mWrapFixedHeight: number;
					public mSkipSolver: boolean;
					public invalidateGraph(): void;
					public handlesInternalConstraints(): boolean;
					public getHorizontalGuidelines(): java.util.ArrayList<androidx.constraintlayout.solver.widgets.Guideline>;
					public defineTerminalWidgets(): void;
					public updateHierarchy(): void;
					public directMeasure(optimizeWrap: boolean): boolean;
					public getOptimizationLevel(): number;
					public getVerticalGuidelines(): java.util.ArrayList<androidx.constraintlayout.solver.widgets.Guideline>;
					public getMeasurer(): androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure.Measurer;
					public setMeasurer(measurer: androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure.Measurer): void;
					public isHeightMeasuredTooSmall(): boolean;
					public directMeasureWithOrientation(optimizeWrap: boolean, orientation: number): boolean;
					public constructor();
					public isWidthMeasuredTooSmall(): boolean;
					public updateChildrenFromSolver(system: androidx.constraintlayout.solver.LinearSystem, flags: boolean[]): void;
					public layout(): void;
					public getType(): string;
					public reset(): void;
					public invalidateMeasures(): void;
					public setOptimizationLevel(value: number): void;
					public setPadding(left: number, top: number, right: number, bottom: number): void;
					public getSystem(): androidx.constraintlayout.solver.LinearSystem;
					public constructor(width: number, height: number);
					public updateFromRuns(updateHorizontal: boolean, updateVertical: boolean): void;
					public setRtl(isRtl: boolean): void;
					public directMeasureSetup(optimizeWrap: boolean): boolean;
					public addChildrenToSolver(system: androidx.constraintlayout.solver.LinearSystem): boolean;
					public fillMetrics(metrics: androidx.constraintlayout.solver.Metrics): void;
					public optimizeFor(feature: number): boolean;
					public measure(optimizationLevel: number, widthMode: number, widthSize: number, heightMode: number, heightSize: number, lastMeasureWidth: number, lastMeasureHeight: number, paddingX: number, paddingY: number): number;
					public constructor(x: number, y: number, width: number, height: number);
					public isRtl(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export class Flow extends androidx.constraintlayout.solver.widgets.VirtualLayout {
					public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.Flow>;
					public static HORIZONTAL_ALIGN_START: number;
					public static HORIZONTAL_ALIGN_END: number;
					public static HORIZONTAL_ALIGN_CENTER: number;
					public static VERTICAL_ALIGN_TOP: number;
					public static VERTICAL_ALIGN_BOTTOM: number;
					public static VERTICAL_ALIGN_CENTER: number;
					public static VERTICAL_ALIGN_BASELINE: number;
					public static WRAP_NONE: number;
					public static WRAP_CHAIN: number;
					public static WRAP_ALIGNED: number;
					public measure(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget, horizontalBehavior: androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour, horizontalDimension: number, verticalBehavior: androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour, verticalDimension: number): void;
					public add(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
					public copy(src: androidx.constraintlayout.solver.widgets.ConstraintWidget, map: java.util.HashMap<androidx.constraintlayout.solver.widgets.ConstraintWidget,androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
					public removeAllIds(): void;
					public setWrapMode(value: number): void;
					public setVerticalAlign(value: number): void;
					public setFirstVerticalBias(value: number): void;
					public setLastVerticalStyle(value: number): void;
					public setLastHorizontalBias(value: number): void;
					public setFirstHorizontalBias(value: number): void;
					public constructor();
					public setHorizontalAlign(value: number): void;
					public setFirstHorizontalStyle(value: number): void;
					public setVerticalGap(value: number): void;
					public setHorizontalStyle(value: number): void;
					public setLastHorizontalStyle(value: number): void;
					public setHorizontalGap(value: number): void;
					public setVerticalStyle(value: number): void;
					public updateConstraints(param0: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer): void;
					public setVerticalBias(value: number): void;
					public setMaxElementsWrap(value: number): void;
					public add(param0: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
					public constructor(width: number, height: number);
					public setHorizontalBias(value: number): void;
					public setLastVerticalBias(value: number): void;
					public updateConstraints(container: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer): void;
					public setOrientation(value: number): void;
					public measure(widthMode: number, widthSize: number, heightMode: number, heightSize: number): void;
					public addToSolver(system: androidx.constraintlayout.solver.LinearSystem): void;
					public constructor(x: number, y: number, width: number, height: number);
					public setFirstVerticalStyle(value: number): void;
				}
				export module Flow {
					export class WidgetsList extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.Flow.WidgetsList>;
						public add(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
						public getWidth(): number;
						public measureMatchConstraints(availableSpace: number): void;
						public createConstraints(isInRtl: boolean, chainIndex: number, isLastChain: boolean): void;
						public setup(orientation: number, left: androidx.constraintlayout.solver.widgets.ConstraintAnchor, top: androidx.constraintlayout.solver.widgets.ConstraintAnchor, right: androidx.constraintlayout.solver.widgets.ConstraintAnchor, bottom: androidx.constraintlayout.solver.widgets.ConstraintAnchor, paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number, max: number): void;
						public setStartIndex(value: number): void;
						public constructor(param0: androidx.constraintlayout.solver.widgets.Flow, orientation: number, left: androidx.constraintlayout.solver.widgets.ConstraintAnchor, top: androidx.constraintlayout.solver.widgets.ConstraintAnchor, right: androidx.constraintlayout.solver.widgets.ConstraintAnchor, bottom: androidx.constraintlayout.solver.widgets.ConstraintAnchor, max: number);
						public clear(): void;
						public getHeight(): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export class Guideline extends androidx.constraintlayout.solver.widgets.ConstraintWidget {
					public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.Guideline>;
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static RELATIVE_PERCENT: number;
					public static RELATIVE_BEGIN: number;
					public static RELATIVE_END: number;
					public static RELATIVE_UNKNWON: number;
					public mRelativePercent: number;
					public mRelativeBegin: number;
					public mRelativeEnd: number;
					public copy(src: androidx.constraintlayout.solver.widgets.ConstraintWidget, map: java.util.HashMap<androidx.constraintlayout.solver.widgets.ConstraintWidget,androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
					public setGuidePercent(value: number): void;
					public getAnchor(anchorType: androidx.constraintlayout.solver.widgets.ConstraintAnchor.Type): androidx.constraintlayout.solver.widgets.ConstraintAnchor;
					public isPercent(): boolean;
					public updateFromSolver(system: androidx.constraintlayout.solver.LinearSystem): void;
					public setGuideEnd(value: number): void;
					public getRelativeBegin(): number;
					public setGuideBegin(value: number): void;
					public constructor(width: number, height: number);
					public getAnchor(): androidx.constraintlayout.solver.widgets.ConstraintAnchor;
					public setMinimumPosition(minimum: number): void;
					public setOrientation(orientation: number): void;
					public getRelativePercent(): number;
					public allowedInBarrier(): boolean;
					public constructor();
					public cyclePosition(): void;
					public getRelativeEnd(): number;
					public addToSolver(system: androidx.constraintlayout.solver.LinearSystem): void;
					public getType(): string;
					public constructor(x: number, y: number, width: number, height: number);
					public getOrientation(): number;
					public getRelativeBehaviour(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export class Helper extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.Helper>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.solver.widgets.Helper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						updateConstraints(param0: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer): void;
						add(param0: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
						removeAllIds(): void;
					});
					public constructor();
					public updateConstraints(param0: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer): void;
					public removeAllIds(): void;
					public add(param0: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export class HelperWidget extends androidx.constraintlayout.solver.widgets.ConstraintWidget implements androidx.constraintlayout.solver.widgets.Helper {
					public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.HelperWidget>;
					public mWidgets: androidx.constraintlayout.solver.widgets.ConstraintWidget[];
					public mWidgetsCount: number;
					public add(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
					public copy(src: androidx.constraintlayout.solver.widgets.ConstraintWidget, map: java.util.HashMap<androidx.constraintlayout.solver.widgets.ConstraintWidget,androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
					public updateConstraints(container: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer): void;
					public constructor();
					public removeAllIds(): void;
					public updateConstraints(param0: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer): void;
					public constructor(x: number, y: number, width: number, height: number);
					public add(param0: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
					public constructor(width: number, height: number);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export class Optimizer extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.Optimizer>;
					public static OPTIMIZATION_NONE: number;
					public static OPTIMIZATION_DIRECT: number;
					public static OPTIMIZATION_BARRIER: number;
					public static OPTIMIZATION_CHAIN: number;
					public static OPTIMIZATION_DIMENSIONS: number;
					public static OPTIMIZATION_RATIO: number;
					public static OPTIMIZATION_GROUPS: number;
					public static OPTIMIZATION_GRAPH: number;
					public static OPTIMIZATION_GRAPH_WRAP: number;
					public static OPTIMIZATION_ENGINE: number;
					public static OPTIMIZATION_STANDARD: number;
					public constructor();
					public static enabled(optimizationLevel: number, optimization: number): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export class Rectangle extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.Rectangle>;
					public x: number;
					public y: number;
					public width: number;
					public height: number;
					public getCenterY(): number;
					public constructor();
					public getCenterX(): number;
					public setBounds(x: number, y: number, width: number, height: number): void;
					public contains(x: number, y: number): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export class VirtualLayout extends androidx.constraintlayout.solver.widgets.HelperWidget {
					public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.VirtualLayout>;
					public mMeasure: androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure.Measure;
					public setPaddingStart(value: number): void;
					public measure(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget, horizontalBehavior: androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour, horizontalDimension: number, verticalBehavior: androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour, verticalDimension: number): void;
					public add(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
					public captureWidgets(): void;
					public getMeasuredHeight(): number;
					public removeAllIds(): void;
					public setPadding(value: number): void;
					public setPaddingLeft(value: number): void;
					public setMeasure(width: number, height: number): void;
					public constructor();
					public setPaddingBottom(value: number): void;
					public applyRtl(isRtl: boolean): void;
					public getPaddingLeft(): number;
					public getPaddingTop(): number;
					public setPaddingEnd(value: number): void;
					public getPaddingRight(): number;
					public updateConstraints(param0: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer): void;
					public getPaddingBottom(): number;
					public add(param0: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
					public constructor(width: number, height: number);
					public setPaddingRight(value: number): void;
					public getMeasuredWidth(): number;
					public measureChildren(): boolean;
					public setPaddingTop(value: number): void;
					public updateConstraints(container: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer): void;
					public measure(widthMode: number, widthSize: number, heightMode: number, heightSize: number): void;
					public needSolverPass(): boolean;
					public constructor(x: number, y: number, width: number, height: number);
					public needsCallbackFromSolver(value: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export class WidgetContainer extends androidx.constraintlayout.solver.widgets.ConstraintWidget {
					public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.WidgetContainer>;
					public mChildren: java.util.ArrayList<androidx.constraintlayout.solver.widgets.ConstraintWidget>;
					public reset(): void;
					public add(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
					public getRootConstraintContainer(): androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer;
					public remove(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget): void;
					public removeAllChildren(): void;
					public getChildren(): java.util.ArrayList<androidx.constraintlayout.solver.widgets.ConstraintWidget>;
					public constructor(width: number, height: number);
					public constructor();
					public resetSolverVariables(cache: androidx.constraintlayout.solver.Cache): void;
					public layout(): void;
					public setOffset(x: number, y: number): void;
					public add(...widgets: androidx.constraintlayout.solver.widgets.ConstraintWidget[]): void;
					public constructor(x: number, y: number, width: number, height: number);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export module analyzer {
					export class BaselineDimensionDependency extends androidx.constraintlayout.solver.widgets.analyzer.DimensionDependency {
						public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.BaselineDimensionDependency>;
						public update(node: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public update(param0: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public update(node: androidx.constraintlayout.solver.widgets.analyzer.DependencyNode): void;
						public constructor(run: androidx.constraintlayout.solver.widgets.analyzer.WidgetRun);
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export module analyzer {
					export class BasicMeasure extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure>;
						public static UNSPECIFIED: number;
						public static EXACTLY: number;
						public static AT_MOST: number;
						public static MATCH_PARENT: number;
						public static WRAP_CONTENT: number;
						public static FIXED: number;
						public constructor(constraintWidgetContainer: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer);
						public solverMeasure(layout: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer, optimizationLevel: number, paddingX: number, paddingY: number, widthMode: number, widthSize: number, heightMode: number, heightSize: number, lastMeasureWidth: number, lastMeasureHeight: number): number;
						public updateHierarchy(layout: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer): void;
					}
					export module BasicMeasure {
						export class Measure extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure.Measure>;
							public horizontalBehavior: androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour;
							public verticalBehavior: androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour;
							public horizontalDimension: number;
							public verticalDimension: number;
							public measuredWidth: number;
							public measuredHeight: number;
							public measuredBaseline: number;
							public measuredHasBaseline: boolean;
							public measuredNeedsSolverPass: boolean;
							public useCurrentDimensions: boolean;
							public constructor();
						}
						export class MeasureType {
							public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure.MeasureType>;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static values(): androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure.MeasureType[];
							public static valueOf(name: string): androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure.MeasureType;
						}
						export class Measurer extends java.lang.Object {
							public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure.Measurer>;
							/**
							 * Constructs a new instance of the androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure$Measurer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								measure(param0: androidx.constraintlayout.solver.widgets.ConstraintWidget, param1: androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure.Measure): void;
								didMeasures(): void;
							});
							public constructor();
							public didMeasures(): void;
							public measure(param0: androidx.constraintlayout.solver.widgets.ConstraintWidget, param1: androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure.Measure): void;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export module analyzer {
					export class ChainRun extends androidx.constraintlayout.solver.widgets.analyzer.WidgetRun {
						public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.ChainRun>;
						public applyToWidget(): void;
						public constructor(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget);
						public getWrapDimension(): number;
						public update(param0: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public update(dependency: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public toString(): string;
						public constructor(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget, orientation: number);
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export module analyzer {
					export class Dependency extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.Dependency>;
						/**
						 * Constructs a new instance of the androidx.constraintlayout.solver.widgets.analyzer.Dependency interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							update(param0: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						});
						public constructor();
						public update(param0: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export module analyzer {
					export class DependencyGraph extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.DependencyGraph>;
						public defineTerminalWidgets(horizontalBehavior: androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour, verticalBehavior: androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour): void;
						public setMeasurer(measurer: androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure.Measurer): void;
						public directMeasure(optimizeWrap: boolean): boolean;
						public invalidateMeasures(): void;
						public directMeasureWithOrientation(optimizeWrap: boolean, orientation: number): boolean;
						public buildGraph(runs: java.util.ArrayList<androidx.constraintlayout.solver.widgets.analyzer.WidgetRun>): void;
						public constructor(container: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer);
						public directMeasureSetup(optimizeWrap: boolean): boolean;
						public measureWidgets(): void;
						public invalidateGraph(): void;
						public buildGraph(): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export module analyzer {
					export class DependencyNode extends java.lang.Object implements androidx.constraintlayout.solver.widgets.analyzer.Dependency {
						public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.DependencyNode>;
						public updateDelegate: androidx.constraintlayout.solver.widgets.analyzer.Dependency;
						public delegateToWidgetRun: boolean;
						public readyToSolve: boolean;
						public value: number;
						public resolved: boolean;
						public resolve(value: number): void;
						public update(node: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public name(): string;
						public update(param0: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public clear(): void;
						public addDependency(dependency: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public constructor(run: androidx.constraintlayout.solver.widgets.analyzer.WidgetRun);
						public toString(): string;
					}
					export module DependencyNode {
						export class Type {
							public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.DependencyNode.Type>;
							public static UNKNOWN: androidx.constraintlayout.solver.widgets.analyzer.DependencyNode.Type;
							public static HORIZONTAL_DIMENSION: androidx.constraintlayout.solver.widgets.analyzer.DependencyNode.Type;
							public static VERTICAL_DIMENSION: androidx.constraintlayout.solver.widgets.analyzer.DependencyNode.Type;
							public static LEFT: androidx.constraintlayout.solver.widgets.analyzer.DependencyNode.Type;
							public static RIGHT: androidx.constraintlayout.solver.widgets.analyzer.DependencyNode.Type;
							public static TOP: androidx.constraintlayout.solver.widgets.analyzer.DependencyNode.Type;
							public static BOTTOM: androidx.constraintlayout.solver.widgets.analyzer.DependencyNode.Type;
							public static BASELINE: androidx.constraintlayout.solver.widgets.analyzer.DependencyNode.Type;
							public static values(): androidx.constraintlayout.solver.widgets.analyzer.DependencyNode.Type[];
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static valueOf(name: string): androidx.constraintlayout.solver.widgets.analyzer.DependencyNode.Type;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export module analyzer {
					export class DimensionDependency extends androidx.constraintlayout.solver.widgets.analyzer.DependencyNode {
						public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.DimensionDependency>;
						public wrapValue: number;
						public resolve(value: number): void;
						public update(node: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public update(param0: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public constructor(run: androidx.constraintlayout.solver.widgets.analyzer.WidgetRun);
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export module analyzer {
					export class GuidelineReference extends androidx.constraintlayout.solver.widgets.analyzer.WidgetRun {
						public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.GuidelineReference>;
						public applyToWidget(): void;
						public constructor(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget);
						public update(param0: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public update(dependency: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export module analyzer {
					export class HelperReferences extends androidx.constraintlayout.solver.widgets.analyzer.WidgetRun {
						public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.HelperReferences>;
						public applyToWidget(): void;
						public constructor(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget);
						public update(param0: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public update(dependency: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export module analyzer {
					export class HorizontalWidgetRun extends androidx.constraintlayout.solver.widgets.analyzer.WidgetRun {
						public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.HorizontalWidgetRun>;
						public applyToWidget(): void;
						public constructor(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget);
						public update(param0: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public update(dependency: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export module analyzer {
					export class RunGroup extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.RunGroup>;
						public static START: number;
						public static END: number;
						public static BASELINE: number;
						public static index: number;
						public position: number;
						public dual: boolean;
						public constructor(run: androidx.constraintlayout.solver.widgets.analyzer.WidgetRun, dir: number);
						public computeWrapSize(container: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer, orientation: number): number;
						public defineTerminalWidgets(horizontalCheck: boolean, verticalCheck: boolean): void;
						public add(run: androidx.constraintlayout.solver.widgets.analyzer.WidgetRun): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export module analyzer {
					export class VerticalWidgetRun extends androidx.constraintlayout.solver.widgets.analyzer.WidgetRun {
						public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.VerticalWidgetRun>;
						public baseline: androidx.constraintlayout.solver.widgets.analyzer.DependencyNode;
						public applyToWidget(): void;
						public constructor(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget);
						public update(param0: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public update(dependency: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module solver {
			export module widgets {
				export module analyzer {
					export abstract class WidgetRun extends java.lang.Object implements androidx.constraintlayout.solver.widgets.analyzer.Dependency {
						public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.WidgetRun>;
						public matchConstraintsType: number;
						public dimensionBehavior: androidx.constraintlayout.solver.widgets.ConstraintWidget.DimensionBehaviour;
						public orientation: number;
						public start: androidx.constraintlayout.solver.widgets.analyzer.DependencyNode;
						public end: androidx.constraintlayout.solver.widgets.analyzer.DependencyNode;
						public mRunType: androidx.constraintlayout.solver.widgets.analyzer.WidgetRun.RunType;
						public isCenterConnection(): boolean;
						public updateRunEnd(dependency: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public getTarget(anchor: androidx.constraintlayout.solver.widgets.ConstraintAnchor, orientation: number): androidx.constraintlayout.solver.widgets.analyzer.DependencyNode;
						public addTarget(node: androidx.constraintlayout.solver.widgets.analyzer.DependencyNode, target: androidx.constraintlayout.solver.widgets.analyzer.DependencyNode, marginFactor: number, dimensionDependency: androidx.constraintlayout.solver.widgets.analyzer.DimensionDependency): void;
						public getLimitedDimension(dimension: number, orientation: number): number;
						public getTarget(anchor: androidx.constraintlayout.solver.widgets.ConstraintAnchor): androidx.constraintlayout.solver.widgets.analyzer.DependencyNode;
						public addTarget(node: androidx.constraintlayout.solver.widgets.analyzer.DependencyNode, target: androidx.constraintlayout.solver.widgets.analyzer.DependencyNode, margin: number): void;
						public updateRunStart(dependency: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public wrapSize(direction: number): number;
						public isResolved(): boolean;
						public constructor(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget);
						public isDimensionResolved(): boolean;
						public getWrapDimension(): number;
						public update(param0: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
						public updateRunCenter(dependency: androidx.constraintlayout.solver.widgets.analyzer.Dependency, startAnchor: androidx.constraintlayout.solver.widgets.ConstraintAnchor, endAnchor: androidx.constraintlayout.solver.widgets.ConstraintAnchor, orientation: number): void;
						public update(dependency: androidx.constraintlayout.solver.widgets.analyzer.Dependency): void;
					}
					export module WidgetRun {
						export class RunType {
							public static class: java.lang.Class<androidx.constraintlayout.solver.widgets.analyzer.WidgetRun.RunType>;
							public static NONE: androidx.constraintlayout.solver.widgets.analyzer.WidgetRun.RunType;
							public static START: androidx.constraintlayout.solver.widgets.analyzer.WidgetRun.RunType;
							public static END: androidx.constraintlayout.solver.widgets.analyzer.WidgetRun.RunType;
							public static CENTER: androidx.constraintlayout.solver.widgets.analyzer.WidgetRun.RunType;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static valueOf(name: string): androidx.constraintlayout.solver.widgets.analyzer.WidgetRun.RunType;
							public static values(): androidx.constraintlayout.solver.widgets.analyzer.WidgetRun.RunType[];
						}
					}
				}
			}
		}
	}
}

//Generics information:
//androidx.constraintlayout.solver.Pools.Pool:1
//androidx.constraintlayout.solver.Pools.SimplePool:1


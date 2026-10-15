/// <reference path="./index.d.ts" />

/** Opt in only in scripts that call jsox.extend('Array') or jsox.extendAll(). */
interface ArrayConstructor {
    ensureArray: Internal.Arrayx['ensureArray'];
}

interface Array<T> {
    distinct(): T[];
    distinctBy<U>(selector: (value: T) => U): T[];
    union<U>(...others: (U | U[])[]): (T | U)[];
    intersect<U>(...others: (U | U[])[]): (T & U)[];
    subtract(other: readonly unknown[]): T[];
    differ<U>(other: U[]): (T | U)[];
    sortBy<U>(selector: (value: T) => U): this;
    sortByDescending<U>(selector: (value: T) => U): this;
    sortDescending(): this;
    sorted(): T[];
    sortedDescending(): T[];
    sortedBy<U>(selector: (value: T) => U): T[];
    sortedByDescending<U>(selector: (value: T) => U): T[];
    shuffle(): this;
}

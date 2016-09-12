// Type definitions for seamless-immutable v6.1.1
// Project: https://github.com/rtfeldman/seamless-immutable
// Definitions by: Alexander Grimalovsky <https://github.com/FlyingDR>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ImmutableOptions {
    prototype?: Object;
}

interface WithoutFunc {
    (value: any, key: string): boolean;
}

interface ImmutableCommons<T> {
    from(obj: T, options?: ImmutableOptions, stackRemaining?: number): T;
    isImmutable(target: T): boolean;
    ImmutableError(message: string): Error;
    set(key: string, value: any): T;
    setIn(key: Array<string>, value: any): T;
    update(key: string, func: Function, ...args: any[]): T;
    updateIn(key: Array<string>, func: Function, ...args: any[]): T;
}

export interface ImmutableArray<T extends Array<any>> extends ImmutableCommons<T>, Array<any> {
    flatMap(callback: Function): T;
    asObject(callback: Function): ImmutableObject<Object>;
    asMutable(options?: {deep: boolean}): Array<any>;
}

export interface ImmutableObject<T extends Object> extends ImmutableCommons<T>, Object {
    merge(args: Array<Object>): T;
    merge(args: Object): T;
    without(key: string): T;
    without(key: Array<string>): T;
    without(...args: string[]): T;
    without(key: WithoutFunc): T;
    asMutable(): T;
    instantiateEmptyObject(): Object;
}

//noinspection JSUnusedGlobalSymbols
export function Immutable<T extends Array<any>>(array: T): ImmutableArray<T>;
//noinspection JSUnusedGlobalSymbols
export function Immutable<T extends Object>(obj: T, options?: ImmutableOptions, stackRemaining?: number): ImmutableObject<T>;

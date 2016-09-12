// Type definitions for seamless-immutable v6.1.1
// Project: https://github.com/rtfeldman/seamless-immutable
// Definitions by: Alexander Grimalovsky <https://github.com/FlyingDR>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {ImmutableOptions, ImmutableObject, ImmutableArray} from "./interfaces";

//noinspection JSUnusedLocalSymbols
function Immutable<T extends ImmutableObject<Object>>(obj: T, options?: ImmutableOptions, stackRemaining?: number): T;
//noinspection JSUnusedLocalSymbols
function Immutable<T extends Array<any>>(array: T): ImmutableArray<T>;
function Immutable<T extends Object>(obj: T, options?: ImmutableOptions, stackRemaining?: number): ImmutableObject<T>;

export = Immutable;

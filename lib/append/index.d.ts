/// <reference path="../_internal/_types/index.d.ts" />
import * as I from 'nanoutils/_internal/_types/index'

declare function append<T>(): I.CurriedFunction2<T, T[], T[]>
declare function append<T>(t: T): I.CurriedFunction1<T[], T[]>
declare function append<T>(t: T, array: T[]): T[]

export default append

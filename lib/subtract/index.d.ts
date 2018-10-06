/// <reference path="../_internal/_types/index.d.ts" />
import * as I from 'nanoutils/interfaces'

declare function subtract<T1, T2>(): I.CurriedFunction2<T1, T2, number>
declare function subtract<T1, T2>(t1: T1): I.CurriedFunction1<T2, number>
declare function subtract<T1, T2>(t1: T1, t2: T2): number

export default subtract

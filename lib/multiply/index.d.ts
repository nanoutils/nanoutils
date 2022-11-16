import { CurriedFunction1, CurriedFunction2 } from '../../misc/types/fn'

declare function multiply<T1, T2>(): CurriedFunction2<T1, T2, number>
declare function multiply<T1, T2>(t1: T1): CurriedFunction1<T2, number>
declare function multiply<T1, T2>(t1: T1, t2: T2): number

export = multiply

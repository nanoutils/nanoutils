import {
  CurriedFunction1,
  CurriedFunction2,
  Fn,
  Predicate,
  MixedArray
} from '../../misc/types/fn'

declare function adjustIn<T1, T2>(fn: Fn<T1, T2>): CurriedFunction2<Predicate<T1>, Array<T1>, MixedArray<T1, T2>>
declare function adjustIn<T1, T2>(fn: Fn<T1, T2>, predicate: Predicate<T1>): CurriedFunction1<Array<T1>, MixedArray<T1, T2>>
declare function adjustIn<T1, T2>(fn: Fn<T1, T2>, predicate: Predicate<T1>, array: Array<T1>): MixedArray<T1, T2>

export default adjustIn
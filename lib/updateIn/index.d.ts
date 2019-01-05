import {
  CurriedFunction1,
  CurriedFunction2,
  Predicate,
  MixedArray
} from '../../misc/types/fn'

declare function updateIn<T1, T2>(predicate: Predicate<T1>): CurriedFunction2<T2, Array<T1>, MixedArray<T1, T2>>
declare function updateIn<T1, T2>(predicate: Predicate<T1>, value: T2): CurriedFunction1<Array<T1>, MixedArray<T1, T2>>
declare function updateIn<T1, T2>(predicate: Predicate<T1>, value: T2, array: Array<T1>): MixedArray<T1, T2>

export default updateIn
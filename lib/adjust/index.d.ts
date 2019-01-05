import {
  CurriedFunction1,
  CurriedFunction2,
  Index,
  Fn,
  MixedArray
} from '../../misc/types/fn'

declare function adjust<T1, T2>(fn: Fn<T1, T2>): CurriedFunction2<number, Array<T1>, MixedArray<T1, T2>>
declare function adjust<T1, T2>(fn: Fn<T1, T2>, index: Index): CurriedFunction1<Array<T1>, MixedArray<T1, T2>>
declare function adjust<T1, T2>(fn: Fn<T1, T2>, index: Index, array: Array<T1>): MixedArray<T1, T2>

export default adjust
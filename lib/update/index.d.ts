import {
  CurriedFunction1,
  CurriedFunction2,
  Index,
  MixedArray
} from '../../misc/types/fn'

declare function update<T1, T2>(index: Index): CurriedFunction2<T2, Array<T1>, MixedArray<T1, T2>>
declare function update<T1, T2>(index: Index, value: T2): CurriedFunction1<Array<T1>, MixedArray<T1, T2>>
declare function update<T1, T2>(index: Index, value: T2, array: Array<T1>): MixedArray<T1, T2>

export default update
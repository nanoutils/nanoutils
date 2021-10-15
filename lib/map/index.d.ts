import {
  CurriedFunction1,
  CurriedFunction2,
  Functor,
} from '../../misc/types/fn'

export default function map<T1, T2>(): CurriedFunction2<
  CurriedFunction1<T1, T2>,
  Functor<T1>,
  Functor<T2>
>

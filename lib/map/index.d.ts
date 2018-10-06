/// <reference path="../_internal/_types/index.d.ts" />
import * as I from 'nanoutils/_internal/_types/index'

declare function map<T1, T2>(): I.CurriedFunction2<I.CurriedFunction1<T1, T2>, I.Functor<T1>, I.Functor<T2>>
declare function map<T1, T2>(f: I.CurriedFunction1<T1, T2>): I.CurriedFunction1<I.Functor<T1>, I.Functor<T2>>
declare function map<T1, T2>(f: I.CurriedFunction1<T1, T2>, functor: I.Functor<T2>): I.Functor<T2>

export default map

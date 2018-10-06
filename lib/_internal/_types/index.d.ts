export interface CurriedFunction1<T1, R> {
  (): CurriedFunction1<T1, R>;
  (t1: T1): R;
}

export interface CurriedFunction2<T1, T2, R> {
  (): CurriedFunction2<T1, T2, R>;
  (t1: T1): CurriedFunction1<T2, R>;
  (t1: T1, t2: T2): R;
}

export interface CurriedFunction3<T1, T2, T3, R> {
  (): CurriedFunction3<T1, T2, T3, R>;
  (t1: T1): CurriedFunction2<T2, T3, R>;
  (t1: T1, t2: T2): CurriedFunction1<T3, R>;
  (t1: T1, t2: T2, t3: T3): R;
}

export interface CurriedFunction4<T1, T2, T3, T4, R> {
  (): CurriedFunction4<T1, T2, T3, T4, R>;
  (t1: T1): CurriedFunction3<T2, T3, T4, R>;
  (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
  (t1: T1, t2: T2, t3: T3): CurriedFunction1<T4, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): R;
}

export interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
  (): CurriedFunction5<T1, T2, T3, T4, T5, R>;
  (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
  (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
  (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction1<T5, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
}

export interface CurriedFunction6<T1, T2, T3, T4, T5, T6, R> {
  (): CurriedFunction6<T1, T2, T3, T4, T5, T6, R>;
  (t1: T1): CurriedFunction5<T2, T3, T4, T5, T6, R>;
  (t1: T1, t2: T2): CurriedFunction4<T3, T4, T5, T6, R>;
  (t1: T1, t2: T2, t3: T3): CurriedFunction3<T4, T5, T6, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction2<T5, T6, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): CurriedFunction1<T6, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): R;
}

export interface CurriedFunction7<T1, T2, T3, T4, T5, T6, T7, R> {
  (): CurriedFunction7<T1, T2, T3, T4, T5, T6, T7, R>;
  (t1: T1): CurriedFunction6<T2, T3, T4, T5, T6, T7, R>;
  (t1: T1, t2: T2): CurriedFunction5<T3, T4, T5, T6, T7, R>;
  (t1: T1, t2: T2, t3: T3): CurriedFunction4<T4, T5, T6, T7, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction3<T5, T6, T7, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): CurriedFunction2<T6, T7, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): CurriedFunction1<T7, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7): R;
}

export interface CurriedFunction8<T1, T2, T3, T4, T5, T6, T7, T8, R> {
  (): CurriedFunction8<T1, T2, T3, T4, T5, T6, T7, T8, R>;
  (t1: T1): CurriedFunction7<T2, T3, T4, T5, T6, T7, T8, R>;
  (t1: T1, t2: T2): CurriedFunction6<T3, T4, T5, T6, T7, T8, R>;
  (t1: T1, t2: T2, t3: T3): CurriedFunction5<T4, T5, T6, T7, T8, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction4<T5, T6, T7, T8, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): CurriedFunction3<T6, T7, T8, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): CurriedFunction2<T7, T8, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7): CurriedFunction1<T8, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8): R;
}


export interface CurriedFunction9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> {
  (): CurriedFunction9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>;
  (t1: T1): CurriedFunction8<T2, T3, T4, T5, T6, T7, T8, T9, R>;
  (t1: T1, t2: T2): CurriedFunction7<T3, T4, T5, T6, T7, T8, T9, R>;
  (t1: T1, t2: T2, t3: T3): CurriedFunction6<T4, T5, T6, T7, T8, T9, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction5<T5, T6, T7, T8, T9, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): CurriedFunction4<T6, T7, T8, T9, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): CurriedFunction3<T7, T8, T9, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7): CurriedFunction2<T8, T9, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8): CurriedFunction1<T9, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9): R;
}

export interface CurriedFunction10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> {
  (): CurriedFunction10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>;
  (t1: T1): CurriedFunction9<T2, T3, T4, T5, T6, T7, T8, T9, T10, R>;
  (t1: T1, t2: T2): CurriedFunction8<T3, T4, T5, T6, T7, T8, T9, T10, R>;
  (t1: T1, t2: T2, t3: T3): CurriedFunction7<T4, T5, T6, T7, T8, T9, T10, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction6<T5, T6, T7, T8, T9, T10, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): CurriedFunction5<T6, T7, T8, T9, T10, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): CurriedFunction4<T7, T8, T9, T10, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7): CurriedFunction3<T8, T9, T10, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8): CurriedFunction2<T9, T10, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9): CurriedFunction1<T10, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9, t10: T10): R;
}

export interface Functor<T> {
  (t: T): T[] | Object;
}

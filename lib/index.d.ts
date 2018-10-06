declare let nanoutils: Nanoutils.Static;

declare namespace Nanoutils {
  type Function1<T1, R> = (t1: T1) => R;
  type Function2<T1, T2, R> = (t1: T1, t2: T2) => R;
  type Function3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;

  type Functor<T1> = (t: T1) => T1[] | Object;

  type Predicate1<T1> = (t1: T1) => boolean;
  type Predicate2<T1, T2> = (t1: T1, t2: T2) => boolean;

  type Index = number;

  type MixedArray<T1, T2> = (T1 | T2)[]
  
  interface CurriedFunction2<T1, T2, R> {
    (t1: T1): Function1<T2, R>;
    (t1: T1, t2: T2): R;
  }
  
  interface CurriedFunction3<T1, T2, T3, R> {
    (t1: T1): CurriedFunction2<T2, T3, R>;
    (t1: T1, t2: T2): Function1<T3, R>;
    (t1: T1, t2: T2, t3: T3): R;
  }
  
  interface CurriedFunction4<T1, T2, T3, T4, R> {
    (): CurriedFunction4<T1, T2, T3, T4, R>;
    (t1: T1): CurriedFunction3<T2, T3, T4, R>;
    (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
    (t1: T1, t2: T2, t3: T3): Function1<T4, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4): R;
  }
  
  interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
    (): CurriedFunction5<T1, T2, T3, T4, T5, R>;
    (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
    (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
    (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4): Function1<T5, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
  }
  
  interface CurriedFunction6<T1, T2, T3, T4, T5, T6, R> {
    (): CurriedFunction6<T1, T2, T3, T4, T5, T6, R>;
    (t1: T1): CurriedFunction5<T2, T3, T4, T5, T6, R>;
    (t1: T1, t2: T2): CurriedFunction4<T3, T4, T5, T6, R>;
    (t1: T1, t2: T2, t3: T3): CurriedFunction3<T4, T5, T6, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction2<T5, T6, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): Function1<T6, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): R;
  }
  
  interface CurriedFunction7<T1, T2, T3, T4, T5, T6, T7, R> {
    (): CurriedFunction7<T1, T2, T3, T4, T5, T6, T7, R>;
    (t1: T1): CurriedFunction6<T2, T3, T4, T5, T6, T7, R>;
    (t1: T1, t2: T2): CurriedFunction5<T3, T4, T5, T6, T7, R>;
    (t1: T1, t2: T2, t3: T3): CurriedFunction4<T4, T5, T6, T7, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction3<T5, T6, T7, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): CurriedFunction2<T6, T7, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): Function1<T7, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7): R;
  }
  
  interface CurriedFunction8<T1, T2, T3, T4, T5, T6, T7, T8, R> {
    (): CurriedFunction8<T1, T2, T3, T4, T5, T6, T7, T8, R>;
    (t1: T1): CurriedFunction7<T2, T3, T4, T5, T6, T7, T8, R>;
    (t1: T1, t2: T2): CurriedFunction6<T3, T4, T5, T6, T7, T8, R>;
    (t1: T1, t2: T2, t3: T3): CurriedFunction5<T4, T5, T6, T7, T8, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction4<T5, T6, T7, T8, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): CurriedFunction3<T6, T7, T8, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): CurriedFunction2<T7, T8, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7): Function1<T8, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8): R;
  }
  
  interface CurriedFunction9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> {
    (): CurriedFunction9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>;
    (t1: T1): CurriedFunction8<T2, T3, T4, T5, T6, T7, T8, T9, R>;
    (t1: T1, t2: T2): CurriedFunction7<T3, T4, T5, T6, T7, T8, T9, R>;
    (t1: T1, t2: T2, t3: T3): CurriedFunction6<T4, T5, T6, T7, T8, T9, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction5<T5, T6, T7, T8, T9, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): CurriedFunction4<T6, T7, T8, T9, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): CurriedFunction3<T7, T8, T9, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7): CurriedFunction2<T8, T9, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8): Function1<T9, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9): R;
  }
  
  interface CurriedFunction10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R> {
    (): CurriedFunction10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>;
    (t1: T1): CurriedFunction9<T2, T3, T4, T5, T6, T7, T8, T9, T10, R>;
    (t1: T1, t2: T2): CurriedFunction8<T3, T4, T5, T6, T7, T8, T9, T10, R>;
    (t1: T1, t2: T2, t3: T3): CurriedFunction7<T4, T5, T6, T7, T8, T9, T10, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction6<T5, T6, T7, T8, T9, T10, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): CurriedFunction5<T6, T7, T8, T9, T10, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): CurriedFunction4<T7, T8, T9, T10, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7): CurriedFunction3<T8, T9, T10, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8): CurriedFunction2<T9, T10, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9): Function1<T10, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9, t10: T10): R;
  }  

  interface Static {
    // add
    add(first: number): Function1<number, number>;
    add(first: number, second: number): number;

    // addIndex
    addIndex<T1, T2>(iterator: Function2<T1, T1[], T2[]>): CurriedFunction2<Function2<T1, Index, T2>, T1[], T2[]>
    addIndex<T1, T2>(iterator: Function2<T1, T1[], T2[]>, reducer: Function2<T1, Index, T2>): Function1<T1[], T2[]>
    addIndex<T1, T2>(iterator: Function2<T1, T1[], T2[]>, reducer: Function2<T1, Index, T2>, array: T1[]): T2[]

    // adjust
    adjust<T1, T2>(change: Function1<T1, T2>): CurriedFunction2<Index, T1[], MixedArray<T1, T2>>
    adjust<T1, T2>(change: Function1<T1, T2>, index: Index): Function1<T1[], MixedArray<T1, T2>>
    adjust<T1, T2>(change: Function1<T1, T2>, index: Index, array: T1[]): MixedArray<T1, T2>

    // adjustIn
    adjust<T1, T2>(change: Function1<T1, T2>): CurriedFunction2<Predicate1<T1>, T1[], MixedArray<T1, T2>>
    adjust<T1, T2>(change: Function1<T1, T2>, predicate: Predicate1<T1>): Function1<T1[], MixedArray<T1, T2>>
    adjust<T1, T2>(change: Function1<T1, T2>, predicate: Predicate1<T1>, array: T1[]): MixedArray<T1, T2>

    // all
    all<T1>(predicate: Predicate1<T1>): Function1<T1[], boolean>
    all<T1>(predicate: Predicate1<T1>, array: T1[]): boolean
  }
}

export = nanoutils
export as namespace Nanoutils
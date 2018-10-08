declare let nanoutils: Nanoutils.Static

declare namespace Nanoutils {
  interface Predicate1<T1> {
    (value: T1): boolean
  }

  // addIndex
  interface ArrayIterator<T1, T2> {
    (change: (value: T1) => T2, array: ReadonlyArray<T1>): any[]
  }

  interface IndexReducer<T1, T2> {
    (value: T1, index: number): T2
  }

  interface AddIndexCurried2<T1, T2> {
    (reducer: IndexReducer<T1, T2>): (array: ReadonlyArray<T1>) => T2[]
    (reducer: IndexReducer<T1, T2>, array: ReadonlyArray<T1>): T2[]
  }

  // adjust
  interface AdjustCurried2<T1, T2> {
    (index: number): (array: ReadonlyArray<T1>) => T2[]
    (index: number, array: ReadonlyArray<T1>): T2[]
  }

  // adjustIn
  interface AdjustInCurried2<T1, T2> {
    (predicate: Predicate1<T1>): (array: ReadonlyArray<T1>) => T2[]
    (predicate: Predicate1<T1>, array: ReadonlyArray<T1>): T2[]
  }

  // applySpec
  interface ApplySpecObject<T1> {
    [key: string]: T1 | ApplySpecObject<T1>
  }

  // ascend
  interface Comparator<T1> {
    (first: T1, second: T1): -1 | 0 | 1
  }

  // assocPath
  interface AssocPathObject<T1> {
    [key: string]: T1 | AssocPathObject<T1>
  }

  // call
  interface CallFunction<T1, T2> {
    (): CallFunction<T1, T2>
    (...array: T1[]): T2
  }

  interface Static {
    // add
    add(first: number): (second: number) => number
    add(first: number, second: number): number

    // addIndex
    addIndex<T1, T2>(iterator: ArrayIterator<T1, T2>): AddIndexCurried2<T1, T2>
    addIndex<T1, T2>(iterator: ArrayIterator<T1, T2>, reducer: IndexReducer<T1, T2>): (array: ReadonlyArray<T1>) => any[]
    addIndex<T1, T2>(iterator: ArrayIterator<T1, T2>, reducer: IndexReducer<T1, T2>, array: ReadonlyArray<T1>): any[]

    // adjust
    adjust<T1, T2>(change: (value: T1) => T2): AdjustCurried2<T1, T2>
    adjust<T1, T2>(change: (value: T1) => T2, index: number): (array: ReadonlyArray<T1>) => (T1 | T2)[]
    adjust<T1, T2>(change: (value: T1) => T2, index: number, array: ReadonlyArray<T1>): (T1 | T2)[]

    // adjustIn
    adjust<T1, T2>(change: (value: T1) => T2): AdjustInCurried2<T1, T2>
    adjust<T1, T2>(change: (value: T1) => T2, predicate: Predicate1<T1>): (array: ReadonlyArray<T1>) => T2[]
    adjust<T1, T2>(change: (value: T1) => T2, predicate: Predicate1<T1>, array: ReadonlyArray<T1>): T2[]

    // all
    all<T1>(predicate: Predicate1<T1>): (predicate: Predicate1<T1>) => boolean
    all<T1>(predicate: Predicate1<T1>, predicate: Predicate1<T1>): boolean

    // allPass
    allPass<T1>(callbacks: ReadonlyArray<(value: T1) => boolean>): (value: T1) => boolean
    allPass<T1>(callbacks: ReadonlyArray<(value: T1) => boolean>, value: T1): boolean

    // always
    always<T1>(value: T1): () => T1

    // and
    and(first: boolean): (second: boolean) => boolean
    and(first: boolean, second: boolean): boolean

    // any
    any<T1>(callback: (value: T1) => boolean): (array: ReadonlyArray<T1>) => boolean
    any<T1>(callback: (value: T1) => boolean, array: ReadonlyArray<T1>): boolean

    // anyPass
    anyPass<T1>(callbacks: ReadonlyArray<(value: T1) => boolean>): (value: T1) => boolean
    anyPass<T1>(callbacks: ReadonlyArray<(value: T1) => boolean>, value: T1): boolean

    // ap
    ap<T1, T2>(callbacks: ReadonlyArray<(value: T1) => T2>): (array: ReadonlyArray<T1>) => T2[]
    ap<T1, T2>(callbacks: ReadonlyArray<(value: T1) => T2>, array: ReadonlyArray<T1>): T2[]

    // aperture
    aperture<T1>(size: number): (array: ReadonlyArray<T1>) => T1[][]
    aperture<T1>(size: number, array: ReadonlyArray<T1>): T1[][]

    // concat
    concat<T1>(value: T1): (array: ReadonlyArray<T1>) => T1[]
    concat<T1>(value: T1, array: ReadonlyArray<T1>): T1[]

    // apply
    apply<T1, T2>(change: (value: T1) => T2): (value: T1) => T2
    apply<T1, T2>(change: (value: T1) => T2, value: T1): T2

    // applySpec
    applySpec<T1, T2>(callbacks: ApplySpecObject<(...array: T1[]) => T2>): (...array: T1[]) => T2
    applySpec<T1, T2>(callbacks: ApplySpecObject<(...array: T1[]) => T2>, ...array: T1[]): T2

    // applyTo
    applyTo<T1, T2>(value: T1): (change: (value: T1) => T2) => T2
    applyTo<T1, T2>(value: T1, change: (value: T1) => T2): T2

    // ascend
    ascend<T1, T2>(callback: (value: T1) => T2): Comparator<T2>

    // assoc
    assoc<T1>(path: number, value: T1, array: ReadonlyArray<T1>): T1[]
    assoc<T1>(path: string, value: T1, object: { [key: string]: T1 }): { [key: string]: T1 }

    // assocPath
    // TODO: make stricter
    assocPath<T1>(paths: number[], value: any, array: ReadonlyArray<T1>): T1[]
    assocPath<T1>(paths: string[], value: any, object: AssocPathObject<any>): AssocPathObject<any>
    assocPath(paths: (number | string)[], value: any, functor: ReadonlyArray<any> | AssocPathObject<any>): any[] | AssocPathObject<any>

    // az
    az<T1>(propper: (value: T1) => string): Comparator<T1>

    // binary
    binary<T1, T2, T3>(callback: (first: T1, second: T2) => T3): (first: T1, second: T2) => T3
    binary<T1, T2, T3>(callback: (first: T1, second: T2) => T3, first: T1, second: T2): T3

    // bind
    bind(callback: Function): (context: any) => Function
    bind(callback: Function, context: any): Function

    // both
    both<T1>(first: (...array: T1[]) => boolean, second: (...array: T1[]) => boolean): (...array: T1[]) => boolean
    both<T1>(first: (...array: T1[]) => boolean, second: (...array: T1[]) => boolean, ...array: T1[]): boolean

    // call
    call<T1, T2>(callback: (...args: T1[]) => T2): CallFunction<T1, T2>
  }
}

export = nanoutils
export as namespace Nanoutils
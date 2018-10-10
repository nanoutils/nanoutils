declare let nanoutils: Nanoutils.Static

declare namespace Nanoutils {
  // applySpec
  interface ApplySpecObject<T1> {
    [key: string]: T1 | ApplySpecObject<T1>
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

  // compact
  type Falsy = false | 0 | NaN | '' | null | undefined
  type Truthy<T> = T extends Falsy ? never : T

  // composeT
  interface Transducer<T1> {
    (change: (value: any) => any): (reducer: (accumulator: T1, value: any) => T1) => (accumulator: T1, value: any) => T1
  }

  interface Static {
    // add
    add(first: number): (second: number) => number
    add(first: number, second: number): number

    // addIndex
    addIndex<T1, T2>(iterator: (change: (...arguments: T1[]) => T2[], array: ReadonlyArray<T1>) => any[]): (reducer: (value: T1, index: number) => T2) => (array: ReadonlyArray<T1>) => T2[]
    addIndex<T1, T2>(iterator: (change: (...arguments: T1[]) => T2[], array: ReadonlyArray<T1>) => any[]): (reducer: (value: T1, index: number) => T2, array: ReadonlyArray<T1>) => T2[]
    addIndex<T1, T2>(iterator: (change: (...arguments: T1[]) => T2[], array: ReadonlyArray<T1>) => any[], reducer: (value: T1, index: number) => T2): (array: ReadonlyArray<T1>) => any[]
    addIndex<T1, T2>(iterator: (change: (...arguments: T1[]) => T2[], array: ReadonlyArray<T1>) => any[], reducer: (value: T1, index: number) => T2, array: ReadonlyArray<T1>): any[]

    // adjust
    adjust<T1, T2>(change: (...arguments: T1[]) => T2[]): (index: number) => (array: ReadonlyArray<T1>) => (T1 | T2)[]
    adjust<T1, T2>(change: (...arguments: T1[]) => T2[]): (index: number, array: ReadonlyArray<T1>) => (T1 | T2)[]
    adjust<T1, T2>(change: (...arguments: T1[]) => T2[], index: number): (array: ReadonlyArray<T1>) => (T1 | T2)[]
    adjust<T1, T2>(change: (...arguments: T1[]) => T2[], index: number, array: ReadonlyArray<T1>): (T1 | T2)[]

    // adjustIn
    adjust<T1, T2>(change: (...arguments: T1[]) => T2[]): (predicate: (value: T1) => boolean) => (array: ReadonlyArray<T1>) => T2[]
    adjust<T1, T2>(change: (...arguments: T1[]) => T2[]): (predicate: (value: T1) => boolean, array: ReadonlyArray<T1>) => T2[]
    adjust<T1, T2>(change: (...arguments: T1[]) => T2[], predicate: (value: T1) => boolean): (array: ReadonlyArray<T1>) => T2[]
    adjust<T1, T2>(change: (...arguments: T1[]) => T2[], predicate: (value: T1) => boolean, array: ReadonlyArray<T1>): T2[]

    // all
    all<T1>(predicate: (value: T1) => boolean): (array: ReadonlyArray<T1>) => boolean
    all<T1>(predicate: (value: T1) => boolean, array: ReadonlyArray<T1>): boolean

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
    ap<T1, T2>(callbacks: ReadonlyArray<(...arguments: T1[]) => T2[]>): (array: ReadonlyArray<T1>) => T2[]
    ap<T1, T2>(callbacks: ReadonlyArray<(...arguments: T1[]) => T2[]>, array: ReadonlyArray<T1>): T2[]

    // aperture
    aperture<T1>(size: number): (array: ReadonlyArray<T1>) => T1[][]
    aperture<T1>(size: number, array: ReadonlyArray<T1>): T1[][]

    // concat
    concat<T1>(value: T1): (array: ReadonlyArray<T1>) => T1[]
    concat<T1>(value: T1, array: ReadonlyArray<T1>): T1[]

    // apply
    apply<T1, T2>(change: (...arguments: T1[]) => T2[]): (...arguments: T1[]) => T2[]
    apply<T1, T2>(change: (...arguments: T1[]) => T2[], value: T1): T2

    // applySpec
    applySpec<T1, T2>(callbacks: ApplySpecObject<(...array: T1[]) => T2>): (...array: T1[]) => T2
    applySpec<T1, T2>(callbacks: ApplySpecObject<(...array: T1[]) => T2>, ...array: T1[]): T2

    // applyTo
    applyTo<T1, T2>(value: T1): (change: (...arguments: T1[]) => T2[]) => T2
    applyTo<T1, T2>(value: T1, change: (...arguments: T1[]) => T2[]): T2

    // ascend
    ascend<T1, T2>(callback: (...arguments: T1[]) => T2[]): (first: T1, second: T1) => -1 | 0 | 1

    // assoc
    assoc<T1>(path: number, value: T1, array: ReadonlyArray<T1>): T1[]
    assoc<T1>(path: string, value: T1, object: { [key: string]: T1 }): { [key: string]: T1 }

    // assocPath
    // TODO: make stricter
    assocPath<T1>(paths: number[], value: any, array: ReadonlyArray<T1>): T1[]
    assocPath<T1>(paths: string[], value: any, object: AssocPathObject<any>): AssocPathObject<any>
    assocPath(paths: (number | string)[], value: any, functor: ReadonlyArray<any> | AssocPathObject<any>): any[] | AssocPathObject<any>

    // az
    az<T1>(propper: (value: T1) => string): (first: T1, second: T1) => -1 | 0 | 1

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

    // camelCase
    camelCase (string: string): string

    // chain
    chain<T1, T2, T3, T4>(callback: (first: T2) => (second: T3) => T4): (extractor: (array: T1) => T2) => (...arguments: T3[]) => T4[]
    chain<T1, T2, T3, T4>(callback: (first: T2) => (second: T3) => T4, extractor: (array: T1) => T2): (...arguments: T3[]) => T4[]
    chain<T1, T2>(callback: (...arguments: T1[]) => T2[] | T2[]): (array: T1[]) => T2[]
    chain<T1, T2>(callback: (...arguments: T1[]) => T2[] | T2[], array: T1[]): T2[]

    // clamp
    clamp(minimum: number): (maximum: number) => (value: number) => number
    clamp(minimum: number, maximum: number): (value: number) => number
    clamp(minimum: number, maximum: number, value: number): number

    // clone
    clone<T1>(value: T): T

    // compact
    compact<T1>(array: T1[]): Truthy<T1>[]

    // comparator
    comparator<T1>(compare: (first: T1, second: T1) => boolean): -1 | 0 | 1

    // complement
    complement<T1>(callback: (...args: T1[]) => boolean): boolean

    // compose
    compose<T1>(): (value: T1) => T1
    compose<T1, T2>(first: (value: T1) => T2): (value: T1) => T2
    compose<T1, T2, T3>(second: (value: T2) => T3, first: (value: T1) => T2): (value: T1) => T3
    compose<T1, T2, T3, T4>(third: (value: T3) => T4, second: (value: T2) => T3, first: (value: T1) => T2): (value: T1) => T4
    compose<T1, T2, T3, T4, T5>(fourth: (value: T4) => T5, third: (value: T3) => T4, second: (value: T2) => T3, first: (value: T1) => T2): (value: T1) => T5
    compose<T1, T2, T3, T4, T5, T6>(fifth: (value: T5) => T6, fourth: (value: T4) => T5, third: (value: T3) => T4, second: (value: T2) => T3, first: (value: T1) => T2): (value: T1) => T6
    compose<T1, T2, T3, T4, T5, T6, T7>(sixth: (value: T6) => T7, fifth: (value: T5) => T6, fourth: (value: T4) => T5, third: (value: T3) => T4, second: (value: T2) => T3, first: (value: T1) => T2): (value: T1) => T7
    compose<T1, T2, T3, T4, T5, T6, T7, T8>(seventh: (value: T7) => T8, sixth: (value: T6) => T7, fifth: (value: T5) => T6, fourth: (value: T4) => T5, third: (value: T3) => T4, second: (value: T2) => T3, first: (value: T1) => T2): (value: T1) => T8
    compose<T1, T2, T3, T4, T5, T6, T7, T8, T9>(eighth: (value: T8) => T9, seventh: (value: T7) => T8, sixth: (value: T6) => T7, fifth: (value: T5) => T6, fourth: (value: T4) => T5, third: (value: T3) => T4, second: (value: T2) => T3, first: (value: T1) => T2): (value: T1) => T9
    compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(nineth: (value: T9) => T10, eighth: (value: T8) => T9, seventh: (value: T7) => T8, sixth: (value: T6) => T7, fifth: (value: T5) => T6, fourth: (value: T4) => T5, third: (value: T3) => T4, second: (value: T2) => T3, first: (value: T1) => T2): (value: T1) => T10
    compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(tenth: (value: T10) => T11, nineth: (value: T9) => T10, eighth: (value: T8) => T9, seventh: (value: T7) => T8, sixth: (value: T6) => T7, fifth: (value: T5) => T6, fourth: (value: T4) => T5, third: (value: T3) => T4, second: (value: T2) => T3, first: (value: T1) => T2): (value: T1) => T11
    compose(...callbacks: ((value: any) => any)[]): (value: any) => any

    // composeP
    composeP<T1>(): (value: T1) => Promise<T1>
    composeP<T1, T2>(first: (value: T1) => Promise<T2>): (value: T1) => Promise<T2>
    composeP<T1, T2, T3>(second: (value: T2) => Promise<T3>, first: (value: T1) => Promise<T2 | T2>): (value: T1) => Promise<T3>
    composeP<T1, T2, T3, T4>(third: (value: T3) => Promise<T4>, second: (value: T2) => Promise<T3>, first: (value: T1) => Promise<T2>): (value: T1) => Promise<T4>
    composeP<T1, T2, T3, T4, T5>(fourth: (value: T4) => Promise<T5>, third: (value: T3) => Promise<T4>, second: (value: T2) => Promise<T3>, first: (value: T1) => Promise<T2>): (value: T1) => Promise<T5>
    composeP<T1, T2, T3, T4, T5, T6>(fifth: (value: T5) => Promise<T6>, fourth: (value: T4) => Promise<T5>, third: (value: T3) => Promise<T4>, second: (value: T2) => Promise<T3>, first: (value: T1) => Promise<T2>): (value: T1) => Promise<T6>
    composeP<T1, T2, T3, T4, T5, T6, T7>(sixth: (value: T6) => Promise<T7>, fifth: (value: T5) => Promise<T6>, fourth: (value: T4) => Promise<T5>, third: (value: T3) => Promise<T4>, second: (value: T2) => Promise<T3>, first: (value: T1) => Promise<T2>): (value: T1) => Promise<T7>
    composeP<T1, T2, T3, T4, T5, T6, T7, T8>(seventh: (value: T7) => Promise<T8>, sixth: (value: T6) => Promise<T7>, fifth: (value: T5) => Promise<T6>, fourth: (value: T4) => Promise<T5>, third: (value: T3) => Promise<T4>, second: (value: T2) => Promise<T3>, first: (value: T1) => Promise<T2>): (value: T1) => Promise<T8>
    composeP<T1, T2, T3, T4, T5, T6, T7, T8, T9>(eighth: (value: T8) => Promise<T9>, seventh: (value: T7) => Promise<T8>, sixth: (value: T6) => Promise<T7>, fifth: (value: T5) => Promise<T6>, fourth: (value: T4) => Promise<T5>, third: (value: T3) => Promise<T4>, second: (value: T2) => Promise<T3>, first: (value: T1) => Promise<T2>): (value: T1) => Promise<T9>
    composeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(nineth: (value: T9) => Promise<T10>, eighth: (value: T8) => Promise<T9>, seventh: (value: T7) => Promise<T8>, sixth: (value: T6) => Promise<T7>, fifth: (value: T5) => Promise<T6>, fourth: (value: T4) => Promise<T5>, third: (value: T3) => Promise<T4>, second: (value: T2) => Promise<T3>, first: (value: T1) => Promise<T2>): (value: T1) => Promise<T10>
    composeP<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(tenth: (value: T10) => Promise<T11>, nineth: (value: T9) => Promise<T10 | T10>, eighth: (value: T8) => Promise<T9>, seventh: (value: T7) => Promise<T8>, sixth: (value: T6) => Promise<T7>, fifth: (value: T5) => Promise<T6>, fourth: (value: T4) => Promise<T5>, third: (value: T3) => Promise<T4>, second: (value: T2) => Promise<T3>, first: (value: T1) => Promise<T2>): (value: T1) => Promise<T11>
    composeP(...callbacks: ((value: any) => Promise<any>)[]): (value: any) => any

    // composeT
    composeT<T1, T2, T3>(...transducers: (
      (transducer: 
        (extractor: (value: T2) => T3) =>
          (reducer: (accumulator: T1, value: T3) => any) =>
            (accumulator: T1, value: T2) =>
              any
      ) => any)[]): (reducer: (accumulator: T1, value: T3) => any) => any
  }
}

export = nanoutils
export as namespace Nanoutils
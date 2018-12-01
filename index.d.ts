import drop from "./lib/drop";
import either from "./lib/either";
import evolve from "./lib/evolve";
import fill from "./lib/fill";

declare let nanoutils: Nanoutils.Static

declare namespace Nanoutils {
  // call
  interface CallFunction<T1, T2> {
    (): CallFunction<T1, T2>
    (...array: T1[]): T2
  }

  // compact
  type Falsy = false | 0 | NaN | '' | null | undefined
  type Truthy<T> = T extends Falsy ? never : T

  // composeT
  interface Transducer<T1, T2, T3> {
    (extractor: (value: T2) => T3): (reducer: (accumulator: T1, value: T3) => T1) => (accumulator: T1, value: T2) => T1
  }

  // debounce
  interface Cancelable {
    cancel(): void
  }

  // evolve
  interface EvolveObject<T1, T2> {
    [key: keyof T1]: (value: T1) => T2 | EvolveObject<keyof T1>
  }

  interface RecursiveObject<T1> {
    [key: keyof T1]: T1 | RecursiveObject<T1[key]>
    /* [key: keyof T1]: T1 | RecursiveObject<Pick<T1, key>> */
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

    // apply
    apply<T1, T2>(change: (...arguments: T1[]) => T2[]): (...arguments: T1[]) => T2[]
    apply<T1, T2>(change: (...arguments: T1[]) => T2[], value: T1): T2

    // applySpec
    applySpec<T1, T2>(callbacks: RecursiveObject<(...array: T1[]) => T2>): (...array: T1[]) => T2
    applySpec<T1, T2>(callbacks: RecursiveObject<(...array: T1[]) => T2>, ...array: T1[]): T2

    // applyTo
    applyTo<T1, T2>(value: T1): (change: (...arguments: T1[]) => T2[]) => T2
    applyTo<T1, T2>(value: T1, change: (...arguments: T1[]) => T2[]): T2

    // ascend
    ascend<T1, T2 extends string | number>(callback: (value: T1) => T2): (first: T1, second: T1) => -1 | 0 | 1

    // assoc
    assoc<T1>(path: number, value: T1, array: ReadonlyArray<T1>): T1[]
    assoc<T1>(path: string, value: T1, object: { [key: string]: T1 }): { [key: string]: T1 }

    // assocPath
    // TODO: make stricter
    assocPath<T1>(paths: number[], value: any, array: ReadonlyArray<T1>): T1[]
    assocPath<T1>(paths: string[], value: any, object: RecursiveObject<any>): RecursiveObject<any>
    assocPath(paths: (number | string)[], value: any, functor: ReadonlyArray<any> | RecursiveObject<any>): any[] | RecursiveObject<any>

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
    composeT<T1>(): (value: T1) => T1
    composeT<T1, T2, T3>(first: Transducer<T1, T2, T3>): (reducer: (accumulator: T1, value: T3) => T1) => (accumulator: T1, value: T2) => T1
    // TODO: complete types
    composeT<T1, T2, T3>(...transducers:  Transducer<T1, T2, T3>[]): (reducer: (accumulator: T1, value: T3) => T1) => (accumulator: T1, value: T2) => T1

    // concat
    concat(first: string): (second: string) => string
    concat(first: string, second: string): string
    concat<T1>(first: ReadonlyArray<T1>): (second: ReadonlyArray<T1>) => ReadonlyArray<T1>
    concat<T1>(first: ReadonlyArray<T1>, second: ReadonlyArray<T1>): ReadonlyArray<T1>

    // cond
    cond<T1, T2>(...conditions: [(value: T1) => boolean, () => T2][]): (value: T1) => T2

    // construct
    construct<T1>(constructor: new(...parameters: any[]) => T1): (...parameters: any[]) => T1

    // constructN
    // TODO

    // contains
    contains<T1>(value: T1): (array: ReadonlyArray<T1>) => boolean
    contains<T1>(value: T1, array: ReadonlyArray<T1>): boolean

    // converge
    converge<T1, T2, T3>(callback: (first: T2) => T3): (enhancers: [(value: T1) => T2]) => (value: T1) => T3
    converge<T1, T2, T3>(callback: (first: T2) => T3, enhancers: [(value: T1) => T2]): (value: T1) => T3
    converge<T1, T2, T3, T4>(callback: (first: T2, second: T3) => T4): (enhancers: [(value: T1) => T2, (value: T1) => T3]) => (value: T1) => T4
    converge<T1, T2, T3, T4>(callback: (first: T2, second: T3) => T4, enhancers: [(value: T1) => T2, (value: T1) => T3]): (value: T1) => T4
    converge<T1, T2, T3, T4, T5>(callback: (first: T2, second: T3, third: T4) => T5): (enhancers: [(value: T1) => T2, (value: T1) => T3, (value: T1) => T4]) => (value: T1) => T5
    converge<T1, T2, T3, T4, T5>(callback: (first: T2, second: T3, third: T4) => T5, enhancers: [(value: T1) => T2, (value: T1) => T3, (value: T1) => T4]): (value: T1) => T5
    converge<T1, T2, T3, T4, T5, T6>(callback: (first: T2, second: T3, third: T4, fourth: T5) => T6): (enhancers: [(value: T1) => T2, (value: T1) => T3, (value: T1) => T4, (value: T1) => T5]) => (value: T1) => T6
    converge<T1, T2, T3, T4, T5, T6>(callback: (first: T2, second: T3, third: T4, fourth: T5) => T6, enhancers: [(value: T1) => T2, (value: T1) => T3, (value: T1) => T4, (value: T1) => T5]): (value: T1) => T6
    converge<T1, T2, T3, T4, T5, T6, T7>(callback: (first: T2, second: T3, third: T4, fourth: T5, fifth: T6) => T7): (enhancers: [(value: T1) => T2, (value: T1) => T3, (value: T1) => T4, (value: T1) => T5, (value: T1) => T6]) => (value: T1) => T7
    converge<T1, T2, T3, T4, T5, T6, T7>(callback: (first: T2, second: T3, third: T4, fourth: T5, fifth: T6) => T7, enhancers: [(value: T1) => T2, (value: T1) => T3, (value: T1) => T4, (value: T1) => T5, (value: T1) => T6]): (value: T1) => T7
    converge<T1, T2, T3, T4, T5, T6, T7, T8>(callback: (first: T2, second: T3, third: T4, fourth: T5, fifth: T6, sixth: T7) => T8): (enhancers: [(value: T1) => T2, (value: T1) => T3, (value: T1) => T4, (value: T1) => T5, (value: T1) => T6, (value: T1) => T7]) => (value: T1) => T8
    converge<T1, T2, T3, T4, T5, T6, T7, T8>(callback: (first: T2, second: T3, third: T4, fourth: T5, fifth: T6, sixth: T7) => T8, enhancers: [(value: T1) => T2, (value: T1) => T3, (value: T1) => T4, (value: T1) => T5, (value: T1) => T6, (value: T1) => T7]): (value: T1) => T8
    converge<T1, T2, T3, T4, T5, T6, T7, T8, T9>(callback: (first: T2, second: T3, third: T4, fourth: T5, fifth: T6, sixth: T7, seventh: T8) => T9): (enhancers: [(value: T1) => T2, (value: T1) => T3, (value: T1) => T4, (value: T1) => T5, (value: T1) => T6, (value: T1) => T7, (value: T1) => T8]) => (value: T1) => T9
    converge<T1, T2, T3, T4, T5, T6, T7, T8, T9>(callback: (first: T2, second: T3, third: T4, fourth: T5, fifth: T6, sixth: T7, seventh: T8) => T9, enhancers: [(value: T1) => T2, (value: T1) => T3, (value: T1) => T4, (value: T1) => T5, (value: T1) => T6, (value: T1) => T7, (value: T1) => T8]): (value: T1) => T9
    converge<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(callback: (first: T2, second: T3, third: T4, fourth: T5, fifth: T6, sixth: T7, seventh: T8, eighth: T9) => T10): (enhancers: [(value: T1) => T2, (value: T1) => T3, (value: T1) => T4, (value: T1) => T5, (value: T1) => T6, (value: T1) => T7, (value: T1) => T8, (value: T1) => T9]) => (value: T1) => T10
    converge<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(callback: (first: T2, second: T3, third: T4, fourth: T5, fifth: T6, sixth: T7, seventh: T8, eighth: T9) => T10, enhancers: [(value: T1) => T2, (value: T1) => T3, (value: T1) => T4, (value: T1) => T5, (value: T1) => T6, (value: T1) => T7, (value: T1) => T8, (value: T1) => T9]): (value: T1) => T10
    converge<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(callback: (first: T2, second: T3, third: T4, fourth: T5, fifth: T6, sixth: T7, seventh: T8, eighth: T9, nineth: T10) => T11): (enhancers: [(value: T1) => T2, (value: T1) => T3, (value: T1) => T4, (value: T1) => T5, (value: T1) => T6, (value: T1) => T7, (value: T1) => T8, (value: T1) => T9, (value: T1) => T10]) => (value: T1) => T11
    converge<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(callback: (first: T2, second: T3, third: T4, fourth: T5, fifth: T6, sixth: T7, seventh: T8, eighth: T9, nineth: T10) => T11, enhancers: [(value: T1) => T2, (value: T1) => T3, (value: T1) => T4, (value: T1) => T5, (value: T1) => T6, (value: T1) => T7, (value: T1) => T8, (value: T1) => T9, (value: T1) => T10]): (value: T1) => T11
    converge<T1, T2>(callback: (...array: any[]) => T2): (enhancers: ReadonlyArray<(value: T1) => any>) => (value: T1) => T2
    converge<T1, T2>(callback: (...array: any[]) => T2, enhancers: ReadonlyArray<(value: T1) => any>): (value: T1) => T2

    // countBy
    countBy<T1, T2 extends number | string>(counter: (value: T1) => T2): (array: ReadonlyArray<T1>) => { [times: T2]: number }
    countBy<T1, T2 extends number | string>(counter: (value: T1) => T2, array: ReadonlyArray<T1>): { [times: T2]: number }

    // curry
    // TODO

    // curryN
    // TODO

    // debounce
    debounce(time: number, callback: (...array: any[]) => void, options: { leading: boolean }): Cancelable

    // dec
    dec(value: number): number

    // defaultTo
    defaultTo<T1>(defaultValue: T1): (value: undefined | null | T1) => T1
    defaultTo<T1>(defaultValue: T1, value: undefined | null | T1): T1

    // descend
    descend<T1, T2 extends string | number>(callback: (value: T1) => T2): (first: T1, second: T1) => -1 | 0 | 1

    // difference
    difference<T1>(first: ReadonlyArray<T1>): (second: ReadonlyArray<T1>) => T1[]
    difference<T1>(first: ReadonlyArray<T1>, second: ReadonlyArray<T1>): T1[]

    // differenceWith
    differenceWith<T1>(compare: (first: T1, second: T1) => boolean): (first: ReadonlyArray<T1>) => (second: ReadonlyArray<T1>) => T1[]
    differenceWith<T1>(compare: (first: T1, second: T1) => boolean): (first: ReadonlyArray<T1>, second: ReadonlyArray<T1>) => T1[]
    differenceWith<T1>(compare: (first: T1, second: T1) => boolean, first: ReadonlyArray<T1>): (second: ReadonlyArray<T1>) => T1[]
    differenceWith<T1>(compare: (first: T1, second: T1) => boolean, first: ReadonlyArray<T1>, second: ReadonlyArray<T1>): T1[]

    // dissoc
    dissoc(deletedKey: string | number): (object: { [key: string | number]: any }) => { [key: string | number]: any }
    dissoc(deletedKey: string | number, object: { [key: string | number]: any }): { [key: string | number]: any }

    // dissocPath
    dissocPath(path: ReadonlyArray<string>): (object: { [key: string | number]: any }) => { [key: string | number]: any }
    dissocPath(path: ReadonlyArray<string>, object: { [key: string | number]: any }): { [key: string | number]: any }

    // divide
    divide(first: number): (second: number) => number
    divide(first: number, second: number): number

    // drop
    drop<T1>(size: number): (array: ReadonlyArray<T1>) => T1[]
    drop<T1>(size: number, array: ReadonlyArray<T1>): T1[]
    drop(size: number): (string: string) => string
    drop(size: number, string: string): string
    
    // dropLast
    dropLast<T1>(size: number): (array: ReadonlyArray<T1>) => T1[]
    dropLast<T1>(size: number, array: ReadonlyArray<T1>): T1[]
    dropLast(size: number): (string: string) => string
    dropLast(size: number, string: string): string

    // dropLastWhile
    dropLastWhile<T1>(predicate: (value: T1) => boolean): (array: ReadonlyArray<T1>) => T1[]
    dropLastWhile<T1>(predicate: (value: T1) => boolean, array: ReadonlyArray<T1>): T1[]
    dropLastWhile(predicate: (value: string) => boolean): (string: string) => string
    dropLastWhile(predicate: (value: string) => boolean, string: string): string

    // dropRepeats
    dropRepeats<T1>(array: ReadonlyArray<T1>): T1[]
    dropRepeats(string: string): string

    // dropRepeatsWith
    dropRepeatsWith<T>(equal: (first: T, second: T) => boolean): (array: ReadonlyArray<T>) => T[]
    dropRepeatsWith<T>(equal: (first: T, second: T) => boolean, array: ReadonlyArray<T>): T[]
    dropRepeatsWith(equal: (first: string, second: string) => boolean): (string: string) => string
    dropRepeatsWith(equal: (first: string, second: string) => boolean, string: string): string

    // either
    either(first: (...array: T1[]) => boolean, second: (...array: T1[]) => boolean): (...array: T1[]) => boolean

    // empty
    empty<T1>(value: T1): T1

    // endsWith
    endsWith<T1>(suffix: ReadonlyArray<T1>): (array: ReadonlyArray<T1>) => boolean
    endsWith<T1>(suffix: ReadonlyArray<T1>, array: ReadonlyArray<T1>): boolean
    endsWith(suffix: string): (string: string) => boolean
    endsWith(suffix: string, string: string): boolean

    // eqBy
    eqBy<T1, T2>(getter: (value: T1) => T2): (first: T1) => (second: T1) => boolean
    eqBy<T1, T2>(getter: (value: T1) => T2): (first: T1, second: T1) => boolean
    eqBy<T1, T2>(getter: (value: T1) => T2, first: T1): (second: T1) => boolean
    eqBy<T1, T2>(getter: (value: T1) => T2, first: T1, second: T1): boolean

    // eqLens
    eqLens<T1>(lens: (object: Object) => { get(): T1 }): (value: T1) => (object: Object) => boolean
    eqLens<T1>(lens: (object: Object) => { get(): T1 }): (value: T1, object: Object) => boolean
    eqLens<T1>(lens: (object: Object) => { get(): T1 }, value: T1): (object: Object) => boolean
    eqLens<T1>(lens: (object: Object) => { get(): T1 }, value: T1, object: Object): boolean

    // eqProps
    eqProps<T1>(key: keyof T1): (first: T1) => (second: T1) => boolean
    eqProps<T1>(key: keyof T1): (first: T1, second: T1) => boolean
    eqProps<T1>(key: keyof T1, first: T1): (second: T1) => boolean
    eqProps<T1>(key: keyof T1, first: T1, second: T1): boolean

    // equals
    equals<T1>(first: T1): (second: T1) => boolean
    equals<T1>(first: T1, second: T1): boolean

    // eqWith
    eqWith<T1, T2>(compare: (first: T1, second: T2) => boolean): (first: T1) => (second: T2) => boolean
    eqWith<T1, T2>(compare: (first: T1, second: T2) => boolean): (first: T1, second: T2) => boolean
    eqWith<T1, T2>(compare: (first: T1, second: T2) => boolean, first: T1): (second: T2) => boolean
    eqWith<T1, T2>(compare: (first: T1, second: T2) => boolean, first: T1, second: T2): boolean

    // evolve
    evolve<T1, T2>(callbacks: EvolveObject<T1, T2>): (object: RecursiveObject<T1>) => RecursiveObject<T2>
    evolve<T1, T2>(callbacks: EvolveObject<T1, T2>, object: RecursiveObject<T1>): RecursiveObject<T2>

    // false
    F(): false

    // fill
    fill<T1>(value: T1, start: number, end: number): (array: ReadonlyArray<T1>) => T1[]

    // filter
    filter<T1>(predicate: (value: T1) => boolean): (array: ReadonlyArray<T1>) => T1[]
    filter<K1 extends string | number | symbol, T1>(predicate: (value: T1) => boolean): (object: Record<K1, T1>) => Record<K1, T1>
    filter<T1>(predicate: (value: T1) => boolean, array: ReadonlyArray<T1>): T1[]
    filter<K1 extends string | number | symbol, T1>(predicate: (value: T1) => boolean, object: Record<K1, T1>): Record<K1, T1>

    // filterT
    filterT<T1, T2>(predicate: (value: T1) => boolean): (reducer: (accumulator: T1, value: T2) => T1) => (accumulator: T1, value: T2) => T1

    // find
    find<T1>(predicate: (value: T1) => boolean): (array: ReadonlyArray<T1>) => T1 | undefined
    find<T1>(predicate: (value: T1) => boolean, array: ReadonlyArray<T1>): T1 | undefined

    // findIndex
    findIndex<T1>(predicate: (value: T1) => boolean): (array: ReadonlyArray<T1>) => number
    findIndex<T1>(predicate: (value: T1) => boolean, array: ReadonlyArray<T1>): number

    // findLast
    findLast<T1>(predicate: (value: T1) => boolean): (array: ReadonlyArray<T1>) => T1 | undefined
    findLast<T1>(predicate: (value: T1) => boolean, array: ReadonlyArray<T1>): T1 | undefined

    // findLastIndex
    findLastIndex<T1>(predicate: (value: T1) => boolean): (array: ReadonlyArray<T1>) => number
    findLastIndex<T1>(predicate: (value: T1) => boolean, array: ReadonlyArray<T1>): number

    // flatten
    flatten(array: any[]): any[]

    // flattenObj
    flattenObj(object: Object): Object

    // flip
    flip<T1, T2>(fn: (...args: T1[]) => T2): (...args: T1[]) => T2

    // forEach
    forEach<T1>(fn: (value: T1) => void): (array: ReadonlyArray<T1>) => T1[]
    forEach<T1>(fn: (value: T1) => void, array: ReadonlyArray<T1>): T1[]

    // forEachObjIndexed
    forEachObjIndexed<K1 extends string | number | symbol, T1>(fn: (value: T1, key: K1, object: Record<K1, T1>) => void): (object: Record<K1, T1>) => Record<K1, T1>
    forEachObjIndexed<K1 extends string | number | symbol, T1>(fn: (value: T1, key: K1, object: Record<K1, T1>) => void, object: Record<K1, T1>): Record<K1, T1>

    // fromPairs
    fromPairs<K1 extends string | number | symbol, T1>(array: ReadonlyArray<[K1, T1]>): Record<K1, T1>

    // groupBy
    groupBy<K1 extends string | number | symbol, T1>(groupifier: (value: T1) => K1): (array: ReadonlyArray<T1>) => Record<K1, T1>
    groupBy<K1 extends string | number | symbol, T1>(groupifier: (value: T1) => K1, array: ReadonlyArray<T1>): Record<K1, T1>

    // groupWith
    groupWith<T1>(comparator: (left: T1, right: T1) => boolean): (array: ReadonlyArray<T1>) => T1[][]
    groupWith<T1>(comparator: (left: T1, right: T1) => boolean, array: ReadonlyArray<T1>): T1[][]

    // gt
    gt<T1>(first: T1): (second: T1) => boolean
    gt<T1>(first: T1, second: T1): boolean

    // gte
    gte<T1>(first: T1): (second: T1) => boolean
    gte<T1>(first: T1, second: T1): boolean

    // has
    has<K1 extends string | number | symbol>(key: K1): (object: Record<K1, any>) => boolean
    has<K1 extends string | number | symbol>(key: K1, object: Record<K1, any>): boolean

    // hasIn
    hasIn<K1 extends string | number | symbol>(key: K1): (object: Record<K1, any>) => boolean
    hasIn<K1 extends string | number | symbol>(key: K1, object: Record<K1, any>): boolean

    // head
    head<T1>(array: ReadonlyArray<T1>): T1
    head(string: string): string

    // identical
    identical<T1>(first: T1): (second: T1) => boolean
    identical<T1>(first: T1, second: T1): boolean

    // identity
    identity<T1>(value: T1): T1

    // ifElse
    ifElse<T1, T2, T3>(predicate: (value: T1) => boolean): (thenFunction: (value: T1) => T2) => (elseFunction: (value: T1) => T3) => (value: T1) => T2 | T3
    ifElse<T1, T2, T3>(predicate: (value: T1) => boolean, thenFunction: (value: T1) => T2): (elseFunction: (value: T1) => T3) => (value: T1) => T2 | T3
    ifElse<T1, T2, T3>(predicate: (value: T1) => boolean, thenFunction: (value: T1) => T2, elseFunction: (value: T1) => T3): (value: T1) => T2 | T3

    // inc
    inc(value: number): number

    // indexBy
    indexBy<K1 extends string | number | symbol, T1>(indexifier: (value: T1) => K1): (array: ReadonlyArray<T1>) => Record<K1, T1>
    indexBy<K1 extends string | number | symbol, T1>(indexifier: (value: T1) => K1, array: ReadonlyArray<T1>): Record<K1, T1>

    // indexed
    indexed<T1, T2>(fn: (value: T1, index: number) => T2): (value: T1) => T2

    // indexOf
    indexOf<T1>(value: T1): (array: ReadonlyArray<T1>) => number
    indexOf(value: string): (array: string) => number
    indexOf<T1>(value: T1, array: ReadonlyArray<T1>): number
    indexOf(value: string, array: string): number

    // init
    init<T1>(array: ReadonlyArray<T1>): T1[]
    init(array: string): string

    // innerJoin
    innerJoin<T1, T2>(comparator: (first: T1, second: T2) => boolean): (array: ReadonlyArray<T1>) => (checkArray: ReadonlyArray<T2>) => T1[]
    innerJoin<T1, T2>(comparator: (first: T1, second: T2) => boolean, array: ReadonlyArray<T1>): (checkArray: ReadonlyArray<T2>) => T1[]
    innerJoin<T1, T2>(comparator: (first: T1, second: T2) => boolean, array: ReadonlyArray<T1>, checkArray: ReadonlyArray<T2>): T1[]

    // insert
    insert<T1>(index: number): (value: T1) => (array: ReadonlyArray<T1>) => T1[]
    insert<T1>(index: number, value: T1): (array: ReadonlyArray<T1>) => T1[]
    insert<T1>(index: number, value: T1, array: ReadonlyArray<T1>): T1[]

    // insertAll
    insertAll<T1>(index: number): (values: ReadonlyArray<T1>) => (array: ReadonlyArray<T1>) => T1[]
    insertAll<T1>(index: number, values: ReadonlyArray<T1>): (array: ReadonlyArray<T1>) => T1[]
    insertAll<T1>(index: number, values: ReadonlyArray<T1>, array: ReadonlyArray<T1>): T1[]

    // intersection
    intersection<T1>(first: ReadonlyArray<T1>): (second: ReadonlyArray<T1>) => T1[]
    intersection<T1>(first: ReadonlyArray<T1>, second: ReadonlyArray<T1>): T1[]

    // intersperse
    intersperse<T1>(separator: T1): (array: ReadonlyArray<T1>) => T1[]
    intersperse<T1>(separator: T1, array: ReadonlyArray<T1>): T1[]
  }
}

export = nanoutils
export as namespace Nanoutils
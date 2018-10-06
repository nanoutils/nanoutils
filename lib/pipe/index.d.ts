// 0-argument first function
declare function pipe<R1, R2>(f1: () => R1, f2: (a: R1) => R2): () => R2
declare function pipe<R1, R2, R3>(
  f1: () => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3
): () => R3
declare function pipe<R1, R2, R3, R4>(
  f1: () => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4
): () => R4
declare function pipe<R1, R2, R3, R4, R5>(
  f1: () => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5
): () => R5
declare function pipe<R1, R2, R3, R4, R5, R6>(
  f1: () => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6
): () => R6
declare function pipe<R1, R2, R3, R4, R5, R6, R7>(
  f1: () => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7
): () => R7
declare function pipe<R1, R2, R3, R4, R5, R6, R7>(
  f1: () => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7,
  ...funcs: Array<(a: any) => any>
): () => any
// 1-argument first function
declare function pipe<A1, R1, R2>(
  f1: (a1: A1) => R1,
  f2: (a: R1) => R2
): (a1: A1) => R2
declare function pipe<A1, R1, R2, R3>(
  f1: (a1: A1) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3
): (a1: A1) => R3
declare function pipe<A1, R1, R2, R3, R4>(
  f1: (a1: A1) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4
): (a1: A1) => R4
declare function pipe<A1, R1, R2, R3, R4, R5>(
  f1: (a1: A1) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5
): (a1: A1) => R5
declare function pipe<A1, R1, R2, R3, R4, R5, R6>(
  f1: (a1: A1) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6
): (a1: A1) => R6
declare function pipe<A1, R1, R2, R3, R4, R5, R6, R7>(
  f1: (a1: A1) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7
): (a1: A1) => R7
declare function pipe<A1, R1, R2, R3, R4, R5, R6, R7>(
  f1: (a1: A1) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7,
  ...funcs: Array<(a: any) => any>
): (a1: A1) => any
// 2-argument first function
declare function pipe<A1, A2, R1, R2>(
  f1: (a1: A1, a2: A2) => R1,
  f2: (a: R1) => R2
): (a1: A1, a2: A2) => R2
declare function pipe<A1, A2, R1, R2, R3>(
  f1: (a1: A1, a2: A2) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3
): (a1: A1, a2: A2) => R3
declare function pipe<A1, A2, R1, R2, R3, R4>(
  f1: (a1: A1, a2: A2) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4
): (a1: A1, a2: A2) => R4
declare function pipe<A1, A2, R1, R2, R3, R4, R5>(
  f1: (a1: A1, a2: A2) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5
): (a1: A1, a2: A2) => R5
declare function pipe<A1, A2, R1, R2, R3, R4, R5, R6>(
  f1: (a1: A1, a2: A2) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6
): (a1: A1, a2: A2) => R6
declare function pipe<A1, A2, R1, R2, R3, R4, R5, R6, R7>(
  f1: (a1: A1, a2: A2) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7
): (a1: A1, a2: A2) => R7
declare function pipe<A1, A2, R1, R2, R3, R4, R5, R6, R7>(
  f1: (a1: A1, a2: A2) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7,
  ...funcs: Array<(a: any) => any>
): (a1: A1, a2: A2) => any
// 3-argument first function
declare function pipe<A1, A2, A3, R1, R2>(
  f1: (a1: A1, a2: A2, a3: A3) => R1,
  f2: (a: R1) => R2
): (a1: A1, a2: A2, a3: A3) => R2
declare function pipe<A1, A2, A3, R1, R2, R3>(
  f1: (a1: A1, a2: A2, a3: A3) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3
): (a1: A1, a2: A2, a3: A3) => R3
declare function pipe<A1, A2, A3, R1, R2, R3, R4>(
  f1: (a1: A1, a2: A2, a3: A3) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4
): (a1: A1, a2: A2, a3: A3) => R4
declare function pipe<A1, A2, A3, R1, R2, R3, R4, R5>(
  f1: (a1: A1, a2: A2, a3: A3) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5
): (a1: A1, a2: A2, a3: A3) => R5
declare function pipe<A1, A2, A3, R1, R2, R3, R4, R5, R6>(
  f1: (a1: A1, a2: A2, a3: A3) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6
): (a1: A1, a2: A2, a3: A3) => R6
declare function pipe<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(
  f1: (a1: A1, a2: A2, a3: A3) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7
): (a1: A1, a2: A2, a3: A3) => R7
declare function pipe<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(
  f1: (a1: A1, a2: A2, a3: A3) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7,
  ...funcs: Array<(a: any) => any>
): (a1: A1, a2: A2, a3: A3) => any
// 4-argument first function
declare function pipe<A1, A2, A3, A4, R1, R2>(
  f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
  f2: (a: R1) => R2
): (a1: A1, a2: A2, a3: A3, a4: A4) => R2
declare function pipe<A1, A2, A3, A4, R1, R2, R3>(
  f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3
): (a1: A1, a2: A2, a3: A3, a4: A4) => R3
declare function pipe<A1, A2, A3, A4, R1, R2, R3, R4>(
  f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4
): (a1: A1, a2: A2, a3: A3, a4: A4) => R4
declare function pipe<A1, A2, A3, A4, R1, R2, R3, R4, R5>(
  f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5
): (a1: A1, a2: A2, a3: A3, a4: A4) => R5
declare function pipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(
  f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6
): (a1: A1, a2: A2, a3: A3, a4: A4) => R6
declare function pipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(
  f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7
): (a1: A1, a2: A2, a3: A3, a4: A4) => R7
declare function pipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(
  f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7,
  ...funcs: Array<(a: any) => any>
): (a1: A1, a2: A2, a3: A3, a4: A4) => any
// any-argument first function
declare function pipe<A1, A2, A3, A4, R1, R2>(
  f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
  f2: (a: R1) => R2
): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R2
declare function pipe<A1, A2, A3, A4, R1, R2, R3>(
  f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3
): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R3
declare function pipe<A1, A2, A3, A4, R1, R2, R3, R4>(
  f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4
): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R4
declare function pipe<A1, A2, A3, A4, R1, R2, R3, R4, R5>(
  f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5
): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R5
declare function pipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(
  f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6
): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R6
declare function pipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(
  f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7
): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R7
declare function pipe<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(
  f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1,
  f2: (a: R1) => R2,
  f3: (a: R2) => R3,
  f4: (a: R3) => R4,
  f5: (a: R4) => R5,
  f6: (a: R5) => R6,
  f7: (a: R6) => R7,
  ...funcs: Array<(a: any) => any>
): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => any
declare function pipe(
  funcs: Array<(...args: any[]) => any>
): (...args: any[]) => any

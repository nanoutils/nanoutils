export default function descend<T, U>(
  cb: (payload: T) => U
): (a: T, b: T) => number

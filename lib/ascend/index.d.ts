export default function ascend<T, U>(
  cb: (payload: T) => U
): (a: T, b: T) => number

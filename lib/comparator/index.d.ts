export default function comparator<T>(
  cb: (a: T, b: T) => boolean
): (a: T, b: T) => number

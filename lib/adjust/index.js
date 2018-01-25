import curryN from '../curryN'

export default curryN(3, function adjust(fn, i, arr) {
  return !!arr[i]
    ? arr.map((it, k) => k === i ? fn(it) : it)
    : arr
})

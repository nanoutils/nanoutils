import curryN from '../curryN'

export default curryN(2, function fill(arr, value) {
  return Array.isArray(arr)
    ? value
      ? arr.fill(value)
      : arr
    : []
})

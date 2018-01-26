import curryN from '../curryN'

export default curryN(2, function fill(arr, value) {
  return value
    ? arr.slice(0).fill(value)
    : []
})

import curryN from '../curryN'

export default curryN(3, function adgust(fn, i, arr) {
  if (i >= arr.length || i < 0) return arr
  arr.splice(i, 1, fn(arr[i]))
  return arr
})

import curryN from '../curryN'
import toArray from '../toArray'

export default curryN(3, function adgust(fn, i, arr) {
  var a = toArray(arr)
  return a[i]
    ? a.slice(0, i).concat(fn(a[i]), a.slice(++i))
    : arr
})

import curryN from '../curryN'
import flatten from '../flatten'

export default curryN(2, function flattenDepth(num, arr) {
  return Array.isArray(arr)
    ? num === 0 ||
      arr.every(function(item) {
        return !Array.isArray(item)
      })
      ? arr
      : flattenDepth(num - 1, flatten(arr))
    : []
})

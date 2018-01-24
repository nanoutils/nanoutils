import curryN from '../curryN'
import unnest from '../unnest'

export default curryN(2, function unnestN (num, arr) {
  return Array.isArray(arr)
    ? num === 0 ||
      arr.every(function (item) {
        return !Array.isArray(item)
      })
      ? arr
      : unnestN(num - 1, unnest(arr))
    : []
})

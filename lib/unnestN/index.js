import curry2 from '../_internal/_curry2'
import unnest from '../unnest'

export default curry2(function unnestN (num, arr) {
  return Array.isArray(arr)
    ? num === 0 ||
      arr.every(function (item) {
        return !Array.isArray(item)
      })
      ? arr
      : unnestN(num - 1, unnest(arr))
    : []
})

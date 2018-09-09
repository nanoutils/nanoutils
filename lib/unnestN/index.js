import curry2 from '../_internal/_curry2'
import compose from '../compose'
import unnest from '../unnest'
import not from '../not'

export default curry2(function unnestN(num, arr) {
  if (!Array.isArray(arr) || num < 0) {
    return []
  }
  var res = arr
  var i = 0
  while (i < num && !res.every(compose(not, Array.isArray))) {
    res = unnest(res)
    i += 1
  }
  return res
})

import curry2 from '../_internal/_curry2'
import toArray from '../toArray'

export default curry2(function all(cb, data) {
  return toArray(data).every(cb)
})

import curry2 from '../_internal/_curry2'
import indexOf from '../indexOf/indexOf'

export default curry2(function includes(val, obj) {
  return indexOf(val, obj) !== -1
})

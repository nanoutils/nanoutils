import curry2 from '../_internal/_curry2'
import getLens from '../getLens'
import lensPath from '../lensPath'

export default curry2(function get(path, obj) {
  return getLens(lensPath(path), obj)
})

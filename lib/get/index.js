import curry from '../curry'
import getLens from '../getLens'
import lensPath from '../lensPath'

export default curry(function get(path, obj) {
  return getLens(lensPath(path), obj)
})

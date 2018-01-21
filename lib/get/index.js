import curryN from '../curryN'
import getLens from '../getLens'
import lensPath from '../lensPath'

export default curryN(2, function get(path, obj) {
  return getLens(lensPath(path), obj)
})

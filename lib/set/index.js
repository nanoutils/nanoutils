import curryN from '../curryN'
import setLens from '../setLens'
import lensPath from '../lensPath'

export default curryN(3, function getPath(path, val, obj) {
  return setLens(lensPath(path), val, obj)
})

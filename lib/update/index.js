import curryN from '../curryN'
import lensPath from '../lensPath'
import updateLens from '../updateLens'

export default curryN(3, function getPath(path, cb, obj) {
  return updateLens(lensPath(path), cb, obj)
})

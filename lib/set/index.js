import curry from '../curry'
import setLens from '../setLens'
import lensPath from '../lensPath'

export default curry(function getPath(path, val, obj) {
  return setLens(lensPath(path), val, obj)
})

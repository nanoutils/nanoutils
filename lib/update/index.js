import curry from '../curry'
import lensPath from '../lensPath'
import updateLens from '../updateLens'

export default curry(function getPath(path, cb, obj) {
  return updateLens(lensPath(path), cb, obj)
})

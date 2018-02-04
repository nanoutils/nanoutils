import curry3 from '../_internal/_curry3'
import lensPath from '../lensPath'
import updateLens from '../updateLens'

export default curry3(function getPath(path, cb, obj) {
  return updateLens(lensPath(path), cb, obj)
})

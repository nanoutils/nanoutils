import curry3 from '../_internal/_curry3'
import lensPath from '../lensPath'
import updateLens from '../updateLens/updateLens'

export default curry3(function over(path, cb, obj) {
  return updateLens(lensPath(path), cb, obj)
})

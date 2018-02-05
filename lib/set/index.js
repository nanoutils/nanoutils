import curry3 from '../_internal/_curry3'
import setLens from '../setLens'
import lensPath from '../lensPath'

export default curry3(function getPath(path, val, obj) {
  return setLens(lensPath(path), val, obj)
})

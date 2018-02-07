import curry3 from '../_internal/_curry3'
import set from '../set'
import lensPath from '../lensPath'

export default curry3(function assoc(path, val, obj) {
  return set(lensPath(path), val, obj)
})

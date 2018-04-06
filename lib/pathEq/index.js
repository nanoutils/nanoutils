import _curry3 from '../_internal/_curry3'
import equals from '../equals'
import path from '../path'

export default _curry3(function pathEq(pathList, value, obj) {
  return equals(value, path(pathList, obj))
})

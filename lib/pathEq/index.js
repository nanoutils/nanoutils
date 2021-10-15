import _curry3 from '../_internal/_curry3'
import equals from '../equals'
import path from '../path/path'

export default _curry3((pathList, value, obj) =>
  equals(value, path(pathList, obj)),
)

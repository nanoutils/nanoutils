import _curry3 from '../_internal/_curry3'
import path from '../path/path'

export default _curry3(function pathOr(def, arr, obj) {
  return path(arr, obj) || def
})

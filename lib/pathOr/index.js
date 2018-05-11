import _curry3 from "../_internal/_curry3"
import path from "../path/path"

export default _curry3(function pathOr(def, arr, obj) {
  var res = path(arr, obj)
  return res == null ? def : res
})

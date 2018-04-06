import _curry3 from '../_internal/_curry3'
import path from '../path'

export default _curry3(function pathSatisfies(func, arr, obj) {
  return func(path(arr, obj))
})

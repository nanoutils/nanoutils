import _curry3 from '../_internal/_curry3'
import path from '../path/path'

export default _curry3((func, arr, obj) => func(path(arr, obj)))

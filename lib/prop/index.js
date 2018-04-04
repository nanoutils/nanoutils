import curry2 from '../_internal/_curry2'
import view from '../view'
import lensPath from '../lensPath'

export default curry2(function prop(path, obj) {
  if (!Array.isArray(path)) throw new TypeError('Path should be an array')
  return view(lensPath(path), obj)
})

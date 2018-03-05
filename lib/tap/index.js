import _curry2 from '../_internal/_curry2'

export default _curry2(function tap(cb, data) {
  cb.apply(cb, Array.prototype.slice.call(arguments, 1))
  return data
})

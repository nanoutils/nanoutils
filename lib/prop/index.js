import _curry2 from '../_internal/_curry2'

export default _curry2(function prop(p, obj) {
  if (typeof p !== 'string' && typeof p !== 'number') {
    throw new TypeError('Property should be either string or number')
  }
  return obj[p]
})

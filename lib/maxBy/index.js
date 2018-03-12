import _curry3 from '../_internal/_curry3'

export default _curry3(function maxBy(f, a, b) {
  return f(a) > f(b) ? a : b
})

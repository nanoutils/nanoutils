import _curry2 from '../_internal/_curry2'

export default _curry2(function nth(n, list) {
  var idx = n < 0 ? list.length + n : n
  return typeof list === 'string' && !list[idx]
    ? ''
    : list[idx]
})

import _curry2 from '../_internal/_curry2'

export default _curry2(function drop(n, from) {
  if (n <= 0) {
    return from
  }
  var arr = [].slice.call(from, n)
  return typeof from === 'string'
    ? arr.join('')
    : arr
})

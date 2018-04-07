import curry2 from '../_internal/_curry2'

export default curry2(function takeLast(n, from) {
  if (n < 0) {
    return from
  }
  var arr = [].slice.call(from, -n)
  return typeof from === 'string'
    ? arr.join('')
    : arr
})

import curry2 from '../_internal/_curry2'

export default curry2((n, from) => {
  if (n < 0) {
    return from
  }
  var arr = [].slice.call(from, 0, n)
  return typeof from === 'string'
    ? arr.join('')
    : arr
})

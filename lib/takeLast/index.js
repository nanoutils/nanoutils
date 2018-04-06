import curry2 from '../_internal/_curry2'
import toArray from '../toArray'

export default curry2(function takeLast(n, from) {
  return n < 0
    ? from
    : typeof from === 'string'
      ? toArray(from)
        .slice(-n)
        .join('')
      : toArray(from).slice(-n)
})

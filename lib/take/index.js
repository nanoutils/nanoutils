import curryN from '../curryN'
import toArray from '../toArray'

export default curryN(2, function take(n, from) {
  return n < 0
    ? from
    : typeof from === 'string'
      ? toArray(from)
          .slice(0, n)
          .join('')
      : toArray(from).slice(0, n)
})

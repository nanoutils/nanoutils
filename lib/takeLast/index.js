import curryN from '../curryN'
import toArray from '../toArray'

export default curryN(2, function takeLast (n, from) {
  return n < 0
    ? from
    : typeof from === 'string'
      ? toArray(from)
        .slice(-n)
        .join('')
      : toArray(from).slice(-n)
})

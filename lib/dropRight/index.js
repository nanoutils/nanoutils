import curry from '../curry'
import toArray from '../toArray'

export default curry(function dropRight(n, from) {
  return n <= 0
    ? from
    : typeof from === 'string'
      ? toArray(from)
          .slice(0, -n)
          .join('')
      : toArray(from).slice(0, -n)
})

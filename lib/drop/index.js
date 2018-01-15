import curry from '../curry'
import toArray from '../toArray'

export default curry(function drop(n, from) {
  return n <= 0
    ? from
    : typeof from === 'string'
      ? toArray(from)
          .slice(n)
          .join('')
      : toArray(from).slice(n)
})

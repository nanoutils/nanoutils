import curryN from '../curryN'
import toArray from '../toArray'

export default curryN(2, function concat(arg) {
  return arg.concat.apply(arg, toArray(arguments).slice(1))
})

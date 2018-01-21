import curryN from '../curryN'
import toArray from '../toArray'

export default curryN(2, function apply(fn) {
  return fn.call(fn, toArray(arguments).slice(1))
})

import curry from '../curry'
import toArray from '../toArray'

export default curry(function apply(fn, arg) {
  return fn.call(fn, toArray(arguments).slice(1))
})

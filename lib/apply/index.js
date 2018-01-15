import curry from '../curry'
import toArray from '../toArray'

export default curry(function apply(fn, arg) {
  return fn.apply(fn, arg)
})

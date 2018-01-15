import eq from '../eq'
import curry from '../curry'

export default curry(function eqLens(lens, val, obj) {
  return eq(lens(obj).get(), val)
})

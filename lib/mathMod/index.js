import curry2 from '../_internal/_curry2'
import isInteger from '../isInteger'

export default curry2(function mathMod(a, b) {
  return !isInteger(a) || !isInteger(b) || b < 1 ? NaN : (a % b + b) % b
})

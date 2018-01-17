import curry from '../curry'
import isInteger from '../isInteger'

export default curry(function mathMod(a, b) {
  return !isInteger(a) || !isInteger(b) || b < 1 ? NaN : (a % b + b) % b
})

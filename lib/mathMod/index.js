import curryN from '../curryN'
import isInteger from '../isInteger'

export default curryN(2, function mathMod(a, b) {
  return !isInteger(a) || !isInteger(b) || b < 1 ? NaN : (a % b + b) % b
})

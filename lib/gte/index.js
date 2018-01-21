import curryN from '../curryN'

export default curryN(2, function gte(a, b) {
  return a >= b
})

import curryN from '../curryN'

export default curryN(2, function gt(a, b) {
  return a > b
})

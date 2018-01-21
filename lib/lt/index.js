import curryN from '../curryN'

export default curryN(2, function lt(a, b) {
  return a < b
})

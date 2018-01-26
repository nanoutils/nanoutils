import curryN from '../curryN'

export default curryN(2, function join(d, arr) {
  return arr.join(d)
})

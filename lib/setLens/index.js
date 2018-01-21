import curryN from '../curryN'

export default curryN(3, function setLens(lens, val, from) {
  return lens(from).set(val)
})

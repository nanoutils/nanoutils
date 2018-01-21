import curryN from '../curryN'

export default curryN(3, function updateLens(lens, cb, value) {
  var l = lens(value)
  return l.set(cb(l.get()))
})

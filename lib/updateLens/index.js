import curry from '../curry'

export default curry(function updateLens(lens, cb, value) {
  var l = lens(value)
  return l.set(cb(l.get()))
})

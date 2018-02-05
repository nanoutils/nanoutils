import curry3 from '../_internal/_curry3'

export default curry3(function updateLens(lens, cb, value) {
  var l = lens(value)
  return l.set(cb(l.get()))
})

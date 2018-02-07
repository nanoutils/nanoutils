import curry3 from '../_internal/_curry3'

export default curry3(function set(lens, val, from) {
  return lens(from).set(val)
})

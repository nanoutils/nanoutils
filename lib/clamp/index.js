import curry3 from '../_internal/_curry3'

export default curry3(function clamp(min, max, val) {
  return val < min ? min : val > max ? max : val
})

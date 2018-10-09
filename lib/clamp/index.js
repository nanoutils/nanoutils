import curry3 from '../_internal/_curry3'

export default curry3(function clamp(minimum, maximum, value) {
  return value < minimum ? minimum : value > maximum ? maximum : value
})

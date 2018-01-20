import curry from '../curry'

export default curry(function clamp(min, max, val) {
  return val < min ? min : val > max ? max : val
})

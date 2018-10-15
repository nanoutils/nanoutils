import curry2 from '../_internal/_curry2'

export default curry2(function drop(size, arrayOrString) {
  if (size <= 0) {
    return arrayOrString
  }
  return arrayOrString.slice(size)
})

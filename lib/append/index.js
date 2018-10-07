import curry2 from '../_internal/_curry2'

export default curry2(function append(value, array) {
  return array.concat([value])
})

import curry2 from '../_internal/_curry2'

export default curry2(function pluck(property, array) {
  return array.map(value => value[property])
})

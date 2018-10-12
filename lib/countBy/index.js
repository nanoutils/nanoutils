import curry2 from '../_internal/_curry2'

export default curry2(function countBy(counter, array) {
  return array.reduce(function(accumulator, value) {
    var times = counter(value)
    accumulator[times] = (accumulator[times] || 0) + 1
    return accumulator
  }, {})
})

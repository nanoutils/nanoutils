import curry2 from '../_internal/_curry2'

export default curry2(function countBy(cb, arr) {
  return arr.reduce((acc, cur) => {
    var k = cb(cur)
    acc[k] = (acc[k] || 0) + 1
    return acc
  }, {})
})

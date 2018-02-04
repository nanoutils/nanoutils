import curry2 from '../_internal/_curry2'
import eq from '../equals'

export default curry2(function contains (data, list) {
  return list.some(function (item) {
    return eq(item, data)
  })
})

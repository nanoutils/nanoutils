import eq from '../equals'
import curryN from '../curryN'

export default curryN(2, function contains (data, list) {
  return list.some(function (item) {
    return eq(item, data)
  })
})

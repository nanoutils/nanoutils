import curryN from '../curryN'

export default curryN(3, function differenceWith(cb, a, b) {
  return a.filter(function(itemA) {
    return b.every(function(itemB) {
      return !cb(itemA, itemB)
    })
  })
})

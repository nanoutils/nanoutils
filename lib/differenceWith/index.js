import curry from '../curry'

export default curry(function differenceWith(cb, a, b) {
  return a.filter(function(itemA) {
    return b.every(function(itemB) {
      return !cb(itemA, itemB)
    })
  })
})

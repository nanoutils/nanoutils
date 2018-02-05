import curry3 from '../_internal/_curry3'

export default curry3(function differenceWith(cb, a, b) {
  return a.filter(function(itemA) {
    return b.every(function(itemB) {
      return !cb(itemA, itemB)
    })
  })
})

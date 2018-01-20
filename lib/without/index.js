import curry from '../curry'

export default curry(function without(a, b) {
  return b.filter(function(item) {
    return !a.includes(item)
  })
})

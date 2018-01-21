import curryN from '../curryN'

export default curryN(2, function without(a, b) {
  return b.filter(function(item) {
    return !a.includes(item)
  })
})

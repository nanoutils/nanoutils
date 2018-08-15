import curry2 from '../_internal/_curry2'

export default curry2(function chain(fn, item) {
  return typeof item === 'function'
    ? function(arr) {
      return fn(item(arr))(arr)
    }
    : item.reduce(function(acc, item) {
      return acc.concat(fn(item))
    }, [])
})

import _curry2 from '../_internal/_curry2'

export default _curry2(function union(arr1, arr2) {
  return arr1.concat(arr2).reduce(function(acc, item) {
    return acc.indexOf(item) === -1
      ? acc.concat(item)
      : acc
  }, [])
})

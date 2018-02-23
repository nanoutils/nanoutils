import _curry3 from '../_internal/_curry3'

export default _curry3(function unionWith(func, arr1, arr2) {
  return arr1.concat(arr2).reduce(function(acc, item) {
    return acc.some(function(comparing) {
      return func(item, comparing)
    })
      ? acc
      : acc.concat(item)
  }, [])
})

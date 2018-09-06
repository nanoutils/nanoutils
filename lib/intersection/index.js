import curry2 from '../_internal/_curry2'
import equals from '../equals/equals'
import identical from '../identical/identical'

export default curry2(function intersection(arr1, arr2) {
  var compare = function(value1, value2) {
    if (Array.isArray(value1)) {
      return value1 + '' === value2 + ''
    }
    if (typeof value1 === 'object' && value1 instanceof Object) {
      return equals(value1, value2)
    }
    return identical(value1, value2)
  }
  var arr1clean = []
  var i = 0
  while (i < arr1.length) {
    if (!arr1clean.some(function(comparing) {
      return compare(arr1[i], comparing)
    })) {
      arr1clean.push(arr1[i])
    }
    i++
  }
  var res = []
  for (i = 0; i < arr2.length; i++) {
    var isNew = arr1clean.some(function(comparing) {
      return compare(arr2[i], comparing)
    }) && !res.some(function(comparing) {
        return compare(arr2[i], comparing)
      })
    if (isNew) {
      res.push(arr2[i])
    }
  }
  return res
})

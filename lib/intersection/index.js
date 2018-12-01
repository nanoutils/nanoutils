import curry2 from '../_internal/_curry2'
import equals from '../equals/equals'
import identical from '../identical/identical'

export default curry2(function intersection(firstArray, secondArray) {
  var compare = function(firstValue, secondValue) {
    if (Array.isArray(firstValue)) {
      return firstValue + '' === secondValue + ''
    }
    if (typeof firstValue === 'object' && firstValue instanceof Object) {
      return equals(firstValue, secondValue)
    }
    return identical(firstValue, secondValue)
  }
  var firstArrayClean = []
  var index = 0
  while (index < firstArray.length) {
    if (!firstArrayClean.some(function(comparing) {
      return compare(firstArray[index], comparing)
    })) {
      firstArrayClean.push(firstArray[index])
    }
    index++
  }
  var intersectionArray = []
  for (index = 0; index < secondArray.length; index++) {
    var isNewValue = firstArrayClean.some(function(comparing) {
      return compare(secondArray[index], comparing)
    }) && !intersectionArray.some(function(comparing) {
        return compare(secondArray[index], comparing)
      })
    if (isNewValue) {
      intersectionArray.push(secondArray[index])
    }
  }
  return intersectionArray
})

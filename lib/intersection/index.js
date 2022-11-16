import curry2 from '../_internal/_curry2'
import equals from '../equals/equals'
import identical from '../identical/identical'

export default curry2((arr1, arr2) => {
  var compare = (value1, value2) =>
    Array.isArray(value1)
      ? value1 + '' === value2 + ''
      : typeof value1 === 'object' && value1 instanceof Object
      ? equals(value1, value2)
      : identical(value1, value2)

  var arr1clean = []
  var i = 0
  while (i < arr1.length) {
    if (!arr1clean.some((comparing) => compare(arr1[i], comparing))) {
      arr1clean.push(arr1[i])
    }
    i++
  }
  var res = []
  for (i = 0; i < arr2.length; i++) {
    if (
      arr1clean.some((comparing) => compare(arr2[i], comparing)) &&
      !res.some((comparing) => compare(arr2[i], comparing))
    ) {
      res.push(arr2[i])
    }
  }
  return res
})

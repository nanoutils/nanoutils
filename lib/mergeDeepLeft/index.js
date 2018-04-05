import _curry2 from '../_internal/_curry2'

export default _curry2(function mergeDeepLeft(first, second) {
  var result = {}
  for (var fKey in first) result[fKey] = first[fKey]
  for (var sKey in second) {
    if (sKey in result) {
      if (!Array.isArray(result[sKey]) && typeof result[sKey] === 'object' && typeof second[sKey] === 'object') {
        result[sKey] = mergeDeepLeft(result[sKey], second[sKey])
      }
      continue
    }
    result[sKey] = second[sKey]
  }
  return result
})

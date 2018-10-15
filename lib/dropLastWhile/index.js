import curry2 from '../_internal/_curry2'

export default curry2(function dropLastWhile(predicate, arrayOrString) {
  if (!arrayOrString.length) {
    return Array.isArray(arrayOrString) ? [] : ''
  }

  var length = 0
  while (predicate(arrayOrString[arrayOrString.length - length - 1])) {
    length++
  }
  return arrayOrString.slice(0, -length)
})

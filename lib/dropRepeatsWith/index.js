import curry2 from '../_internal/_curry2'

export default curry2(function dropRepeatsWith(equal, array) {
  var result = []
  for (var index = 0; index < array.length; index++) {
    if (equal(array[index - 1], array[index])) continue
    result.push(array[index])
  }
  return typeof array === 'string'
    ? result.join('')
    : result
})

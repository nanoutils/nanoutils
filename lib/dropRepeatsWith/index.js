import curry2 from '../_internal/_curry2'

export default curry2((fn, list) => {
  var result = []
  for (var i = 0; i < list.length; i++) {
    if (fn(list[i - 1], list[i])) continue
    result.push(list[i])
  }
  return typeof list === 'string'
    ? result.join('')
    : result
})

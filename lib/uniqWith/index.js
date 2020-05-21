import curry2 from '../_internal/_curry2'

export default curry2((func, list) => {
  var result = [list[0]]
  for (var i = 1; i < list.length; i++) {
    for (var k = 0; k < result.length; k++) {
      if (func(list[i], result[k])) break
    }
    if (k === result.length) result.push(list[i])
  }
  return result
})

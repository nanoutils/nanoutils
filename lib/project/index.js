import curry2 from '../_internal/_curry2'

export default curry2(function project(query, list) {
  var result = []
  for (var i = 0; i < list.length; i++) {
    result[i] = {}
    for (var k = 0; k < query.length; k++) {
      result[i][query[k]] = list[i][query[k]]
    }
  }
  return result
})

import _curry3 from '../_internal/_curry3'

export default _curry3(function innerJoin(func, list, checkList) {
  var result = []

  for (var i = 0; i < list.length; i++) {
    for (var k = 0; k < checkList.length; k++) {
      if (func(list[i], checkList[k])) {
        result.push(list[i])
        break
      }
    }
  }

  return result
})

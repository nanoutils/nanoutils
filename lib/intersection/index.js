import _curry2 from '../_internal/_curry2'
import equals from '../equals'
import identical from '../identical'

export default _curry2(function intersection(list1, list2) {
  var resObj = {}

  for (var i = 0; i < list1.length; i++) {
    for (var k = 0; k < list2.length; k++) {
      var equality
      if (Array.isArray(list1[i])) equality = list1[i] + '' === list2[k] + ''
      else if (typeof list1[i] === 'object' && list1[i] instanceof Object) equality = equals(list1[i] === list2[k])
      else equality = identical(list1[i], list2[k])

      if (equality) {
        if (resObj.hasOwnProperty(list1[i])) {
          if (resObj[list1[i]] !== list1[i]) resObj[list1[i] + i] = list1[i]
          break
        }
        resObj[list1[i]] = list1[i]
        break
      }
    }
  }

  return Object.keys(resObj).map(function(item) {
    return resObj[item]
  })
})

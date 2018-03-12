import _curry2 from '../_internal/_curry2'

export default _curry2(function groupBy(func, list) {
  var obj = {}
  for (var i = 0; i < list.length; i++) {
    var key = func(list[i])
    obj.hasOwnProperty(key)
      ? obj[key].push(list[i])
      : obj[key] = [list[i]]
  }
  return obj
})

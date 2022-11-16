import curry2 from '../_internal/_curry2'

export default curry2((func, list) => {
  var obj = {}
  for (var i = 0; i < list.length; i++) {
    var key = func(list[i])
    key in obj ? obj[key].push(list[i]) : (obj[key] = [list[i]])
  }
  return obj
})

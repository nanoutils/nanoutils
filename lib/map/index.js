import curry2 from '../_internal/_curry2'

export default curry2(function map(f, element) {
  var res
  var i = 0
  if (Array.isArray(element)) {
    res = new Array(element.length)
    while (i < res.length) {
      res[i] = f(element[i++])
    }
    return res
  }
  res = {}
  for (var key in element) {
    if (element.hasOwnProperty(key)) {
      res[key] = f(element[key])
    }
  }
  return res
})

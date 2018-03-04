import _curry3 from '../_internal/_curry3'

export default _curry3(function assocPath(path, value, obj) {
  var pathObj = path.reverse().reduce(function(acc, item, i) {
    i === 0
      ? acc[item] = value
      : acc = { [item]: acc }
    return acc
  }, {})

  return Object.keys(obj).reduce(function(acc, key, i, arr) {
    pathObj.hasOwnProperty(key)
      ? acc[key] = pathObj[key]
      : acc[key] = obj[key]
    return acc
  }, {})
})

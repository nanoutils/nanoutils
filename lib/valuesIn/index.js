export default function valuesIn(obj) {
  var values = Object.keys(obj).map(function(key) {
    return obj[key]
  })
  var prototype = Object.getPrototypeOf(obj)

  return prototype
    ? values.concat(valuesIn(prototype))
    : values
}

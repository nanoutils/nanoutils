export default function toPairsIn(obj) {
  var values = Object.keys(obj).reduce(function(acc, key) {
    return acc.concat([[key, obj[key]]])
  }, [])
  var prototype = Object.getPrototypeOf(obj)

  return prototype
    ? values.concat(toPairsIn(prototype))
    : values
}

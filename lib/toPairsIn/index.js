export default function toPairsIn(obj) {
  const values = Object.keys(obj).reduce(function(acc, key) {
    return acc.concat([[key, obj[key]]])
  }, [])
  const prototype = Object.getPrototypeOf(obj)

  return prototype
    ? values.concat(toPairsIn(prototype))
    : values
}

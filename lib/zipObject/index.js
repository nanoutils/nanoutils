module.exports = function zipObject(keys, values) {
  return keys.reduce(function(acc, key, index) {
    acc[key] = values[index]
    return acc
  }, {})
}

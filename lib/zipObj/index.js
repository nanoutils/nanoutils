export default (keys, values) =>
  keys.reduce((acc, key, index) => {
    acc[key] = values[index]
    return acc
  }, {})

export default function zipObj(keys, values) {
  return keys.reduce((acc, key, index) => {
    acc[key] = values[index]
    return acc
  }, {})
}

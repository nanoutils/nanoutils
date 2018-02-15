import assoc from '../assoc'

export default function zipObjDeep(keys, values) {
  return keys.reduce(function(acc, key, index) {
    return assoc(key, values[index], acc)
  }, {})
}

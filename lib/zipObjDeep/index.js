import assocPath from '../assocPath/assocPath'

export default function zipObjDeep(keys, values) {
  return keys.reduce(function(acc, key, index) {
    return assocPath(key, values[index], acc)
  }, {})
}

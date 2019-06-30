import assocPath from '../assocPath/assocPath'

export default function zipObjDeep(keys, values) {
  return keys.reduce((acc, key, index) => assocPath(key, values[index], acc), {})
}

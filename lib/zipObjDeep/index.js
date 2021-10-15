import assocPath from '../assocPath/assocPath'

export default (keys, values) =>
  keys.reduce((acc, key, index) => assocPath(key, values[index], acc), {})

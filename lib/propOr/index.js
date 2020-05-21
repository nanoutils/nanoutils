import _curry3 from '../_internal/_curry3'

export default _curry3((def, key, obj) =>
  obj.hasOwnProperty(key)
    ? obj[key]
    : def
)

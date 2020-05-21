import _curry3 from '../_internal/_curry3'

export default _curry3((type, key, obj) => obj[key] != null && (obj[key].constructor === type || obj[key] instanceof type))

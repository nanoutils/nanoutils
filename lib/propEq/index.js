import _curry3 from '../_internal/_curry3'
import equals from '../equals/equals'

export default _curry3((key, value, obj) => equals(obj[key], value))

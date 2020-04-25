import curry3 from '../_internal/_curry3'
import equals from '../equals/equals'

export default curry3((lens, val, obj) => equals(lens(obj).get(), val))

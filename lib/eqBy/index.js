import curry3 from '../_internal/_curry3'
import equals from '../equals/equals'

export default curry3((cb, a, b) => equals(cb(a), cb(b)))

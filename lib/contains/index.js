import curry2 from '../_internal/_curry2'
import equals from '../equals/equals'

export default curry2((data, list) => list.some(item => equals(item, data)))

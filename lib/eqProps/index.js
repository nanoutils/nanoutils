import curry3 from '../_internal/_curry3'
import equals from '../equals/equals'

export default curry3((prop, obj1, obj2) => equals(obj1[prop], obj2[prop]))

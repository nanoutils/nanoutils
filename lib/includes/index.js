import curry2 from '../_internal/_curry2'
import indexOf from '../indexOf/indexOf'

export default curry2((val, obj) => indexOf(val, obj) !== -1)

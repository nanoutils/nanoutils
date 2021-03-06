import curry3 from '../_internal/_curry3'
import update from '../update/update'
import findIndex from '../findIndex/findIndex'

export default curry3((predicate, value, list) => update(findIndex(predicate, list), value, list))

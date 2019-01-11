import curry3 from '../_internal/_curry3'
import update from '../update/update'
import findIndex from '../findIndex/findIndex'

export default curry3(function updateBy(predicate, value, list) {
  return update(findIndex(predicate, list), value, list)
})

import curry3 from '../_internal/_curry3'
import adjust from '../adjust/adjust'
import findIndex from '../findIndex/findIndex'

export default curry3((fn, predicate, arr) =>
  adjust(fn, findIndex(predicate, arr), arr),
)

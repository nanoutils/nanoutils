import _merge from '../_internal/_merge'

const mergeDeepLeft = (left, right) => {
  var cb = (l, r) => {
    if (!Array.isArray(l) && typeof l === 'object' && typeof r === 'object') {
      return mergeDeepLeft(l, r)
    }
    return l
  }
  return _merge(left, right, cb)
}

export default mergeDeepLeft

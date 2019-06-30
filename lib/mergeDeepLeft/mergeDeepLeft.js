import _merge from '../_internal/_merge'

export default function mergeDeepLeft(left, right) {
  var cb = (l, r) => {
    if (!Array.isArray(l) && typeof l === 'object' && typeof r === 'object') {
      return mergeDeepLeft(l, r)
    }
    return l
  }
  return _merge(left, right, cb)
}

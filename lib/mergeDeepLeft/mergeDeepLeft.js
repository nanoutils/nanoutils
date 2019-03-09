import _merge from '../_internal/_merge'

function mergeDeepLeftStrategy(left, right) {
  if (typeof left === 'object' && typeof right === 'object') {
    if (!Array.isArray(left) && !Array.isArray(right)) {
      return mergeDeepLeft(left, right)
    }
  }
  return left
}

export default function mergeDeepLeft(left, right) {
  return _merge(left, right, mergeDeepLeftStrategy)
}

import _merge from '../_internal/_merge'

function mergeDeepRightStrategy(left, right) {
  if (typeof left === 'object' && typeof right === 'object') {
    if (!Array.isArray(left) && !Array.isArray(right)) {
      return mergeDeepRight(left, right)
    }
  }
  return right
}

export default function mergeDeepRight(left, right) {
  return _merge(left, right, mergeDeepRightStrategy)
}

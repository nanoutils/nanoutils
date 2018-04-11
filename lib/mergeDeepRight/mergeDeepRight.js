import mergeDeepLeft from '../mergeDeepLeft/mergeDeepLeft'

export default function mergeDeepRight(left, right) {
  return mergeDeepLeft(right, left)
}

import mergeDeepLeft from '../mergeDeepLeft/mergeDeepLeft'

export default function mergeDeepRight(first, second) {
  return mergeDeepLeft(second, first)
}

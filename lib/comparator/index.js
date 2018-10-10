export default function comparator(compare) {
  return function(a, b) {
    if (compare(a, b)) {
      return -1
    }
    if (compare(b, a)) {
      return 1
    }
    return 0
  }
}

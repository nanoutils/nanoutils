export default function filterT(predicate) {
  return reducer => (acc, v) => predicate(v) ? reducer(acc, v) : acc
}

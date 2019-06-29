export default function identityT() {
  return reducer => (acc, v) => reducer(acc, v)
}

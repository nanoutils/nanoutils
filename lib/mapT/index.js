export default function mapT(f) {
  return reducer => (acc, v) => reducer(acc, f(v))
}

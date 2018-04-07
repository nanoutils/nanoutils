export default function unnest(arr) {
  return Array.isArray(arr)
    ? [].concat.apply([], arr)
    : []
}

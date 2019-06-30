export default function compact(arr) {
  return Array.isArray(arr)
    ? arr.filter(i => i)
    : []
}

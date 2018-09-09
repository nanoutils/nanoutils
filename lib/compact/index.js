export default function compact(arr) {
  return Array.isArray(arr)
    ? arr.filter(function(i) {
      return i
    })
    : []
}

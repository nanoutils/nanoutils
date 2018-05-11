export default function compact(arr) {
  return arr && Array.isArray(arr)
    ? arr.filter(function(i) {
      return i
    })
    : []
}

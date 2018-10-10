export default function compact(array) {
  return Array.isArray(array)
    ? array.filter(function(i) {
      return i
    })
    : []
}

export default function flatten(arr) {
  return Array.isArray(arr)
    ? arr.reduce(function(arr, cur) {
        return arr.concat(cur)
      }, [])
    : []
}

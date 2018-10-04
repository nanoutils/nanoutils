export default function adjust(fn, idx, arr) {
  var result = arr.slice()
  if (!arr[idx]) return result
  result[idx] = fn(result[idx])
  return result
}

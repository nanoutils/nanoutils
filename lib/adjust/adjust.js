export default function adjust(fn, idx, arr) {
  if (process.env.NODE_ENV !== 'production') {
    require('../_internal/_error').checkTypes('adjust', {
      fn: [fn, ['function'], typeof fn !== 'function'],
      i: [idx, ['string', 'number'], typeof idx !== 'string' && typeof idx !== 'number'],
      arr: [arr, ['array'], !Array.isArray(arr)]
    })
  }
  var result = arr.slice()
  if (!arr[idx]) return result
  result[idx] = fn(result[idx])
  return result
}

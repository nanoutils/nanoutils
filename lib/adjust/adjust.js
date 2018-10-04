export default function adjust(fn, index, array) {
  if (process.env.NODE_ENV !== 'production') {
    require('../_internal/_error').checkTypes('adjust', {
      fn: [fn, ['function'], typeof fn !== 'function'],
      index: [index, ['number'], typeof index !== 'number'],
      arr: [array, ['array'], !Array.isArray(array)]
    })
  }
  var result = array.slice()
  if (!(index in array)) return result
  result[index] = fn(result[index])
  return result
}

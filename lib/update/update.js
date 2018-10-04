export default function update(index, value, array) {
  if (process.env.NODE_ENV !== 'production') {
    require('../_internal/_error').checkTypes('update', {
      index: [index, ['number'], typeof index !== 'number'],
      value: [value, ['any'], false],
      array: [array, ['array'], !Array.isArray(array)]
    })
  }
  var result = array.slice()
  if (index >= 0 && index < result.length) {
    result[index] = value
  }
  return result
}

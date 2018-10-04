import curry3 from '../_internal/_curry3'
import update from '../update/update'
import findIndex from '../findIndex/findIndex'

export default curry3(function updateIn(predicate, value, array) {
  if (process.env.NODE_ENV !== 'production') {
    require('../_internal/_error').checkTypes('updateIn', {
      predicate: [predicate, ['function'], typeof predicate !== 'function'],
      value: [value, ['any'], false],
      array: [array, ['array'], !Array.isArray(array)]
    })
  }
  return update(findIndex(predicate, array), value, array)
})

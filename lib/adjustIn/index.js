import curry3 from '../_internal/_curry3'
import adjust from '../adjust/adjust'
import findIndex from '../findIndex/findIndex'

export default curry3(function adjustIn(fn, predicate, array) {
  if (process.env.NODE_ENV !== 'production') {
    require('../_internal/_error').checkTypes('adjustIn', {
      fn: [fn, ['function'], typeof fn !== 'function'],
      predicate: [predicate, ['function'], typeof predicate !== 'function'],
      array: [array, ['array'], !Array.isArray(array)]
    })
  }
  return adjust(fn, findIndex(predicate, array), array)
})

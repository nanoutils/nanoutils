const {
  generators: { getArrays, getNestedObjects },
  times: { TIMES_1K },
  types: { TYPE_SHE }
} = require('../_internal/helpers/performance')

const lensPath = require('../../cjs/lensPath')
const R = require('ramda')

module.exports = function() {
  const [keys1, keys2, keys3] = getArrays(TIMES_1K, i => i).map(arr => arr.reverse())
  const [big1, big2, big3] = getNestedObjects(TIMES_1K)
  const cb = obj => Object.assign({}, obj, { a: 2 })

  return {
    type: TYPE_SHE,
    argss: [
      {
        f1: [lensPath(keys1), cb, big1],
        f2: [R.lensPath(keys1), cb, big1]
      },
      {
        f1: [lensPath(keys2), cb, big2],
        f2: [R.lensPath(keys2), cb, big2]
      },
      {
        f1: [lensPath(keys3), cb, big3],
        f2: [R.lensPath(keys3), cb, big3]
      }
    ]
  }
}

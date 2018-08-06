const {
  generators: { getSameLengthArrays },
  time: { TIME_100K },
  types: { TYPE_SHE }
} = require('../_internal/helpers/performance')

module.exports = function() {
  const [arr1, arr2, arr3] = getSameLengthArrays(TIME_100K, i => i)
  const atIndex = index => i => i === index

  return {
    type: TYPE_SHE,
    argss: [
      [atIndex(0), arr1], // first element
      [atIndex(TIME_100K / 2), arr2], // middle element
      [atIndex(TIME_100K - 1), arr3] // last element
    ]
  }
}

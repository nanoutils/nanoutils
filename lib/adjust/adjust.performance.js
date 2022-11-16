const {
  generators: { getSameLengthArrays },
  time: { TIME_1M },
  types: { TYPE_SHE },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const [start, half, end] = [0, TIME_1M / 2, TIME_1M - 1]
  const [arr1, arr2, arr3] = getSameLengthArrays()
  const add10 = (x) => x + 10

  return {
    type: TYPE_SHE,
    argss: [
      [add10, start, arr1], // first element
      [add10, half, arr2], // middle element
      [add10, end, arr3], // last element
    ],
  }
}

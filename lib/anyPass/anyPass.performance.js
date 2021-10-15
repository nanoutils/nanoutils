const {
  generators: { getSameLengthArrays },
  time: { TIME_1M },
  types: { TYPE_SHE },
} = require('../_internal/helpers/performance')

module.exports = function getData() {
  const [arr1, arr2, arr3] = getSameLengthArrays(TIME_1M, (i) => () => i > 5)
  const truthy = (i) => i < 5

  arr1.unshift(truthy)
  arr2.splice(TIME_1M / 2, 0, truthy)
  arr3.push(truthy)

  return {
    type: TYPE_SHE,
    argss: [
      [arr1, 3],
      [arr2, 3],
      [arr3, 3],
    ],
  }
}

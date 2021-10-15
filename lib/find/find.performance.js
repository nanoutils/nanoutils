const {
  generators: { getSameLengthArrays },
  time: { TIME_1M },
  types: { TYPE_SHE },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const nextOdd = (i) => 2 * i + 1
  const fValues = (i) => [
    i === 0 ? 2 : nextOdd(i),
    i === TIME_1M / 2 ? 2 : nextOdd(i),
    i === TIME_1M - 1 ? 2 : nextOdd(i),
  ]
  const [big1, big2, big3] = getSameLengthArrays(TIME_1M, fValues)
  const isEven = (value) => value % 2 === 0

  return {
    type: TYPE_SHE,
    argss: [
      [isEven, big1],
      [isEven, big2],
      [isEven, big3],
    ],
  }
}

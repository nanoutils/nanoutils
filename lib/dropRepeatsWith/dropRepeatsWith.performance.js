const {
  generators: { getArrays },
  times: { TIMES_1M },
  types: { TYPE_1M },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const fValues = (x) => TIMES_1M.map((length) => (x < length / 2 ? 1 : -1))
  const [small, medium, big] = getArrays(TIMES_1M, fValues)
  const abs = (x) => Math.abs(x)

  return {
    type: TYPE_1M,
    argss: [
      [abs, small],
      [abs, medium],
      [abs, big],
    ],
  }
}

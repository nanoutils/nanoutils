const {
  generators: { getArrays },
  times: { TIMES_10K },
  types: { TYPE_10K },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const [small, medium, big] = getArrays(TIMES_10K)
  const chainF = (n) => [n, n + 1, n + 2]

  return {
    type: TYPE_10K,
    argss: [
      [chainF, small],
      [chainF, medium],
      [chainF, big],
    ],
  }
}

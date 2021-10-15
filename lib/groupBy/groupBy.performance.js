const {
  generators: { getArrays },
  times: { TIMES_1M },
  types: { TYPE_1M },
} = require('../_internal/helpers/performance')

module.exports = function getObject() {
  const [big1, big2, big3] = getArrays(TIMES_1M, (i) => i)
  const func = (x) => (x % 2 === 0 ? 'even' : 'odd')

  return {
    type: TYPE_1M,
    argss: [
      [func, big1],
      [func, big2],
      [func, big3],
    ],
  }
}

const {
  times: { TIMES_1M },
  types: { TYPE_1M }
} = require('../_internal/helpers/performance')

module.exports = function() {
  const [time1, time2, time3] = TIMES_1M
  const getValues = i => i

  return {
    type: TYPE_1M,
    argss: [
      [getValues, time1],
      [getValues, time2],
      [getValues, time3]
    ]
  }
}

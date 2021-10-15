const {
  times: { TIMES_1M },
  types: { TYPE_1M },
} = require('../_internal/helpers/performance')

module.exports = function () {
  const [time1, time2, time3] = TIMES_1M
  const cond = (time) => (value) => value > time
  const inc = (value) => value + 1
  const value = 1

  return {
    type: TYPE_1M,
    argss: [
      [cond(time1), inc, value],
      [cond(time2), inc, value],
      [cond(time3), inc, value],
    ],
  }
}

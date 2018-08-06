const {
  generators: { getArrays },
  time: { TIME_100K, TIME_1M },
  times: { TIMES_100K },
  types: { TYPE_100K },
  utils: { getRandom }
} = require('../_internal/helpers/performance')

module.exports = function getData() {
  const [big1, big2, big3] = getArrays(TIMES_100K, () => getRandom(TIME_100K, TIME_1M))
  const sum = (a, b) => a + b

  return {
    type: TYPE_100K,
    argss: [
      [ sum, big1, big1 ],
      [ sum, big2, big2 ],
      [ sum, big3, big3 ]
    ]
  }
}

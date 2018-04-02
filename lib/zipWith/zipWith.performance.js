const { generateArrays, times: { TIME_100K }, types: { TYPE_100K } } = require('../_internal/helpers/performance')

module.exports = function getData() {
  const getRandom = () => Math.random() * 1e6 + 1e5
  const [big1, big2, big3] = generateArrays(TIME_100K, getRandom)
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

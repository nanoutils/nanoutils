const { generateArrays, times: { TIME_1M }, types: { TYPE_1M } } = require('../_internal/helpers/performance')

module.exports = function getData() {
  const [big1, big2, big3] = generateArrays(TIME_1M, () => i => i < 5)

  return {
    type: TYPE_1M,
    argss: [
      [ big1, 3 ],
      [ big2, 3 ],
      [ big3, 3 ]
    ]
  }
}

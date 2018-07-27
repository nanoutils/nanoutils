const { generateArrays, times: { TIME_1M }, types: { TYPE_1M } } = require('../_internal/helpers/performance')

module.exports = function() {
  const generateFunc = (x) => x % 2 === 0 ? { id: 'a', title: x } : { id: 'b', title: x }
  const [small, medium, big] = generateArrays(TIME_1M, generateFunc)
  const cb = (i) => i.id

  return {
    type: TYPE_1M,
    argss: [
      [cb, small],
      [cb, medium],
      [cb, big]
    ]
  }
}

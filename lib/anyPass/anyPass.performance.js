const { generateArrays, times: { TIME_1M }, types: { TYPE_1M } } = require('../_internal/helpers/performance')

module.exports = function getData() {
  const length = TIME_1M[2]
  const [big1, big2, big3] = generateArrays([length, length, length], () => i => i > 5)
  const truthy = i => i < 5

  big1.unshift(truthy)
  big2.splice(length / 2, 0, truthy)
  big3.push(truthy)

  return {
    type: 'start_half_end',
    argss: [
      [ big1, 3 ],
      [ big2, 3 ],
      [ big3, 3 ]
    ]
  }
}

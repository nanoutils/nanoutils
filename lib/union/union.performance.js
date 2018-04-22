const { times: { TIME_10K }, types: { TYPE_10K } } = require('../_internal/helpers/performance')

module.exports = function getData() {
  // TODO: replace with array generation
  let big1 = []
  let big2 = []
  let big3 = []
  for (let i = 0; i < TIME_10K[2]; i++) {
    const element = i + 'aaaaa'
    big1.push(element)
    big2.push(i < 500 ? element : element + 'a')
    big3.push(element + 'a')
  }

  return {
    type: TYPE_10K,
    argss: [
      [ big1, big3 ], // 0% common
      [ big1, big2 ], // 50% common
      [ big1, big1 ] // 100% common
    ]
  }
}

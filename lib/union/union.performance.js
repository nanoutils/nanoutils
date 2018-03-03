const { performance } = require('perf_hooks')

module.exports = function getTime(f1, f2) {
  // TODO: replace with array generation
  let big1 = []
  let big2 = []
  let big3 = []
  for (let i = 0; i < 1000; i++) {
		const element = i + 'aaaaa'
    big1.push(element)
    big2.push(i < 500 ? element : element + 'a')
    big3.push(element + 'a')
  }

  const sets = [
    // 50% common elements
    [ big1, big2 ],
    // no common
    [ big1, big3 ],
    // all common
    [ big1, big1 ]
  ]
  
  return sets
}

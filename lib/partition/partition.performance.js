module.exports = function getData() {
  // TODO: replace with array generation
  let big1 = []
  let big2 = []
  let big3 = []
  for (let i = 0; i < 100000; i++) {
    if (i < 1000) {
      big1.push(i % 2 === 0 ? 'a' : 'b')
    }
    if (i < 10000) {
      big2.push(i % 2 === 0 ? 'a' : 'b')
    }
    big3.push(i % 2 === 0 ? 'a' : 'b')
  }

  const sets = [
    // 1000
    [ a => a === 'a', big1 ],
    // 10000
    [ a => a === 'a', big2 ],
    // 100000
    [ a => a === 'a', big3 ]
  ]

  return {
    type: '1e4_1e5_1e6',
    argss: sets
  }
}

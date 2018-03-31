module.exports = function getData() {
  // TODO: replace with array generation
  let big1 = []
  let big2 = []
  let big3 = []
  for (let i = 0; i < 100000; i++) {
    const element = Math.random() * 1e6 + 1e5
    if (i < 1000) {
      big1.push(element)
    }
    if (i < 10000) {
      big2.push(element)
    }
    big3.push(element)
  }

  const f = (a, b) => a + b

  const sets = [
    // 1000
    [ f, big1, big1 ],
    // 10000
    [ f, big2, big2 ],
    // 100000
    [ f, big3, big3 ]
  ]

  return {
    type: '1e4_1e5_1e6',
    argss: sets
  }
}

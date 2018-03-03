module.exports = function getData() {
  // TODO: replace with array generation
  let big1 = []
  let big2 = []
  let big3 = []
  for (let i = 0; i < 100000; i++) {
    if (i < 1000) {
      big1.push(i => i < 5)
    }
    if (i < 10000) {
      big2.push(i => i < 5)
    }
    big3.push(i => i < 5)
  }

  const sets = [
    // 1000
    [ big1, 3 ],
    // 10000
    [ big2, 3 ],
    // 100000
    [ big3, 3 ]
  ]
  
  return {
    type: 'two_array_size',
    argss: sets
  }
}

var construct = require('.')

test('no tests yet', () => {
  function A(a, b, c, d) {
    this.args = [a, b, c, d]
  }
  const res = construct(A)(1, 2, 3, 4)
  expect(res.args).toEqual([1, 2, 3, 4])
})

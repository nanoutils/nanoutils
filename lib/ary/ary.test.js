var ary = require('.')

function sum(x, y, z) {
  return x + y + (z || 0)
}

test('should ignore extra args', () => {
  expect(ary(2, sum)(1, 2, 3)).toBe(3)
})

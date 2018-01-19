var partial = require('.')

test('partial applies arguments to a function', () => {
  const parted = partial((a, b, c, d) => a + b + c + d, [1, 2])
  expect(parted(3, 4)).toBe(10)
})

var max = require('.')

test('count max', () => {
  expect(max(1, 2)).toBe(2)
  expect(max(1, -2)).toBe(1)
  expect(max(-1, -2)).toBe(-1)
  expect(max(-1, 2)).toBe(2)
})

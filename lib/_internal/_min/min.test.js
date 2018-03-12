var min = require('.')

test('count min', () => {
  expect(min(1, 2)).toBe(1)
  expect(min(1, -2)).toBe(-2)
  expect(min(-1, -2)).toBe(-2)
  expect(min(-1, 2)).toBe(-1)
})

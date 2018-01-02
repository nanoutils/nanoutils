var not = require('.')

test('should return inverted boolean', () => {
  expect(not(true)).toBe(false)
  expect(not(false)).toBe(true)
})

test('should return bool for another data', () => {
  expect(not(0)).toBe(true)
  expect(not([])).toBe(false)
  expect(not({})).toBe(false)
})

var clamp = require('.')

test('returns min number if number is less', () => {
  expect(clamp(5, 10, 2)).toBe(5)
})

test('returns max number if number is greater', () => {
  expect(clamp(5, 10, 12)).toBe(10)
})

test('returns number if number is in range', () => {
  expect(clamp(5, 10, 7)).toBe(7)
})

test('correctly works with extreme points', () => {
  expect(clamp(5, 10, 5)).toBe(5)
  expect(clamp(5, 10, 10)).toBe(10)
})

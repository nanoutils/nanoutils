var lastIndexOf = require('.')

test('returns the last index of matched value or -1', () => {
  expect(indexOf('a', 'abca')).toBe(3)
  expect(indexOf('a', ['a', 'b', 'c', 'a'])).toBe(3)
  expect(indexOf('d', 'abc')).toBe(-1)
  expect(indexOf('d', null)).toBe(-1)
})

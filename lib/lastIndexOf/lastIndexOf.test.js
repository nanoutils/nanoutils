import lastIndexOf from '../../cjs/lastIndexOf'

test('returns the last index of matched value or -1', () => {
  expect(lastIndexOf('a', 'abca')).toBe(3)
  expect(lastIndexOf('a', ['a', 'b', 'c', 'a'])).toBe(3)
  expect(lastIndexOf('d', 'abc')).toBe(-1)
  expect(lastIndexOf('d', null)).toBe(-1)
})

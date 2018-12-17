import indexOf from '.'

it('returns the first index of matched value or -1', () => {
  expect(indexOf('a', 'abca')).toBe(0)
  expect(indexOf('a', ['a', 'b', 'c', 'a'])).toBe(0)
  expect(indexOf('d', 'abc')).toBe(-1)
  expect(indexOf('d', null)).toBe(-1)
  expect(indexOf('a', {})).toBe(-1)
})

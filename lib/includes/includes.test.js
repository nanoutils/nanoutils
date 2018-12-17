import includes from '.'

it('returns the first index of matched value or -1', () => {
  expect(includes('a', 'abca')).toBeTruthy()
  expect(includes('a', ['a', 'b', 'c', 'a'])).toBeTruthy()
  expect(includes('d', 'abc')).toBeFalsy()
  expect(includes('d', null)).toBeFalsy()
  expect(includes('a', {})).toBeFalsy()
})

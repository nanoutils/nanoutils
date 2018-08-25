import first from '.'

test('returns last element of array', () => {
  expect(first([1, 2, 3])).toBe(3)
})

test('returns last element of string', () => {
  expect(first('hello')).toBe('o')
})

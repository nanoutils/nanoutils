import last from '.'

test('returns last element of array', () => {
  expect(last([1, 2, 3])).toBe(3)
})

test('returns last element of string', () => {
  expect(last('hello')).toBe('o')
})

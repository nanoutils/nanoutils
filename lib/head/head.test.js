import head from '.'

test('returns first element of array', () => {
  expect(head([1, 2, 3])).toBe(1)
})

test('returns first element of string', () => {
  expect(head('hello')).toBe('h')
})

import max from '.'

test('calculates for strings', () => {
  expect(max('a', 'b')).toBe('b')
  expect(max('a')('b')).toBe('b')
})

test('calculates for numbers', () => {
  expect(max(1, 2)).toBe(2)
  expect(max(1)(2)).toBe(2)
})

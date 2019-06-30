import min from '../../cjs/min'

test('calculates for strings', () => {
  expect(min('a', 'b')).toBe('a')
  expect(min('a')('b')).toBe('a')
})

test('calculates for numbers', () => {
  expect(min(1, 2)).toBe(1)
  expect(min(1)(2)).toBe(1)
})

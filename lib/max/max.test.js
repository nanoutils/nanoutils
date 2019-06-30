import max from '../../cjs/max'

it('returns maximum for strings', () => {
  expect(max('a', 'b')).toBe('b')
  expect(max('a')('b')).toBe('b')
})

it('returns maximum for numbers', () => {
  expect(max(1, 2)).toBe(2)
  expect(max(1)(2)).toBe(2)
})

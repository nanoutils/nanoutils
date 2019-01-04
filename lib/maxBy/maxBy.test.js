import maxBy from '.'

it('returns maximum for strings', () => {
  const code = ch => ch.charCodeAt(0)
  expect(maxBy(code, 'a', 'b')).toBe('b')
  expect(maxBy(code, 'a')('b')).toBe('b')
  expect(maxBy(code)('a', 'b')).toBe('b')
  expect(maxBy(code)('a')('b')).toBe('b')
})

it('returns maximum for numbers', () => {
  const sqr = x => x * x
  expect(maxBy(sqr, -1, 2)).toBe(2)
  expect(maxBy(sqr, -1)(2)).toBe(2)
  expect(maxBy(sqr)(-1, 2)).toBe(2)
  expect(maxBy(sqr)(-1)(2)).toBe(2)
})

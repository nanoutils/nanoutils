import maxBy from '.'

test('calculates for strings', () => {
  const code = ch => ch.charCodeAt(0)
  expect(maxBy(code, 'a', 'b')).toBe('b')
  expect(maxBy(code, 'a')('b')).toBe('b')
  expect(maxBy(code)('a', 'b')).toBe('b')
  expect(maxBy(code)('a')('b')).toBe('b')
})

test('calculates for numbers', () => {
  const sqr = x => x * x
  expect(maxBy(sqr, -1, 2)).toBe(2)
  expect(maxBy(sqr, -1)(2)).toBe(2)
  expect(maxBy(sqr)(-1, 2)).toBe(2)
  expect(maxBy(sqr)(-1)(2)).toBe(2)
})

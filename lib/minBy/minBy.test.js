import minBy from '../../cjs/minBy'

test('calculates for strings', () => {
  const code = (ch) => ch.charCodeAt(0)
  expect(minBy(code, 'a', 'b')).toBe('a')
  expect(minBy(code, 'a')('b')).toBe('a')
  expect(minBy(code)('a', 'b')).toBe('a')
  expect(minBy(code)('a')('b')).toBe('a')
})

test('calculates for numbers', () => {
  const sqr = (x) => x * x
  expect(minBy(sqr, -1, 2)).toBe(-1)
  expect(minBy(sqr, -1)(2)).toBe(-1)
  expect(minBy(sqr)(-1, 2)).toBe(-1)
  expect(minBy(sqr)(-1)(2)).toBe(-1)
})

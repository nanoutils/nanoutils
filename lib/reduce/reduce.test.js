var reduce = require('.')

test('reduces array', () => {
  const val = reduce((res, cur) => res + cur, 0, [1, 2, 3, 4, 5])
  expect(val).toBe(15)
})

test('reduces string', () => {
  const val = reduce((res, cur) => cur + res, '', 'abcde')
  expect(val).toBe('edcba')
})

test('returns initial value for empty array', () => {
  const val = reduce((res, cur) => cur + res, 'lol', [])
  expect(val).toBe('lol')
})

test('throws error when non-iterable data is passed', () => {
  const val = () => reduce((res, cur) => cur + res, 'lol', 255)
  expect(val).toThrow(new TypeError('List should be iterable'))
})

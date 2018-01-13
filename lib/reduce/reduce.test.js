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

test('returns initial value for another data types passed', () => {
  const val = reduce((res, cur) => cur + res, 'lol', 255)
  expect(val).toBe('lol')
})

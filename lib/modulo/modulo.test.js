var modulo = require('.')

test('returns remainder of division', () => {
  expect(modulo(4, -3)).toEqual(1)
  expect(modulo(4, 2)).toEqual(0)
})

test('works with strings', () => {
  expect(modulo('4', '-3')).toEqual(1)
  expect(modulo('4', '2')).toEqual(0)
})

var pick = require('.')

test('returns object with picked properties', () => {
  expect(pick(['a', 'b'], { a: 1, b: 2, c: 3 })).toEqual({ a: 1, b: 2 })
})

test('sets undefined for missed properties', () => {
  expect(pick(['a', 'b'], { a: 1, c: 3 })).toEqual({ a: 1, b: undefined })
})

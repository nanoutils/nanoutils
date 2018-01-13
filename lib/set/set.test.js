var set = require('.')

test('sets value by its path', () => {
  expect(set('a.b', 3, { a: { b: 2 } })).toEqual({ a: { b: 3 } })
})

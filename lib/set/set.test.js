var set = require('.')

test('sets value by its path', () => {
  expect(set('a.b', 3, { a: { b: 2 } })).toEqual({ a: { b: 3 } })
})

test('works correctly for arrays', () => {
  var val = set(0, 11, [1, 2, 3])
  expect(val).toEqual([11, 2, 3])
})

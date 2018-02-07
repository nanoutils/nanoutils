var prop = require('.')

test('returns value by its path', () => {
  expect(prop('a.b', { a: { b: 3 } })).toBe(3)
})

test('works correctly for arrays', () => {
  var val = prop(0, [1, 2, 3])
  expect(val).toEqual(1)
})

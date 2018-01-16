var get = require('.')

test('returns value by its path', () => {
  expect(get('a.b', { a: { b: 3 } })).toBe(3)
})

test('works correctly for arrays', () => {
  var val = get(0, [1, 2, 3])
  expect(val).toEqual(1)
})

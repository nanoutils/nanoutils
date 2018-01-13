var get = require('.')

test('returns value by its path', () => {
  expect(get('a.b', { a: { b: 3 } })).toBe(3)
})

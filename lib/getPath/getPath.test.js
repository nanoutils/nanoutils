var getPath = require('.')

test('returns value by its path', () => {
  expect(getPath('a.b', { a: { b: 3 } })).toBe(3)
})

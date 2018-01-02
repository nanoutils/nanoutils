var getPath = require('.')

test('it should return value by its path', () => {
  expect(getPath('a.b', { a: { b: 3 } })).toBe(3)
})

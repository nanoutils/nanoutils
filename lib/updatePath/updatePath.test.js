var updatePath = require('.')

test('updates value by its path', () => {
  expect(updatePath('a.b', i => i + 1, { a: { b: 2 } })).toEqual({
    a: { b: 3 }
  })
})

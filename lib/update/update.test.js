var update = require('.')

test('updates value by its path', () => {
  expect(update('a.b', i => i + 1, { a: { b: 2 } })).toEqual({
    a: { b: 3 }
  })
})

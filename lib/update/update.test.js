var update = require('.')

test('updates value by its path', () => {
  var val = update('a.b', i => i + 1, { a: { b: 2 } })
  expect(val).toEqual({
    a: { b: 3 }
  })
})

test('works correctly for arrays', () => {
  var val = update(0, i => i + 10, [1, 2, 3])
  expect(val).toEqual([11, 2, 3])
})

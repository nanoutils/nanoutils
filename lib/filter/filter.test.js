var filter = require('.')

test('filters arrays', () => {
  var isEven = i => i % 2 === 0
  expect(filter(isEven, [1, 2, 3, 4])).toEqual([2, 4])
})

test('filters objects', () => {
  var isEven = i => i % 2 === 0
  expect(filter(isEven, { a: 1, b: 2, c: 3, d: 4 })).toEqual({ b: 2, d: 4 })
})

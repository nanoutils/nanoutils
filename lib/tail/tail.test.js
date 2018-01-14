var tail = require('.')

test('returns all but first items of array', () => {
  expect(tail([1, 2, 3])).toEqual([2, 3])
})

test('returns all but first letters of string', () => {
  expect(tail('123')).toEqual('23')
})

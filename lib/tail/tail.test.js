var tail = require('.')

test('returns all but last items of array', () => {
  expect(tail([1, 2, 3])).toEqual([1, 2])
})

test('returns all but last letters of string', () => {
  expect(tail('123')).toEqual('12')
})

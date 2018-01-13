var init = require('.')

test('returns all but first items of array', () => {
  expect(init([1, 2, 3])).toEqual([2, 3])
})

test('returns all but first letters of string', () => {
  expect(init('123')).toEqual('23')
})

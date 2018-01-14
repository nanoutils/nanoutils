var drop = require('.')

test('returns all but first N elements', () => {
  expect(drop(2)([1, 2, 3, 4, 5, 6])).toEqual([3, 4, 5, 6])
  expect(drop(2)('123456')).toEqual('3456')
})

test('returns empty array/string when N > data.length', () => {
  expect(drop(8)([1, 2, 3, 4])).toEqual([])
  expect(drop(8)('1234')).toEqual('')
})

test('returns the value "as is" when N < 0', () => {
  expect(drop(-8)([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(drop(-8)('1234')).toEqual('1234')
})

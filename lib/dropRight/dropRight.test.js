var dropRight = require('.')

test('returns all but last N elements', () => {
  expect(drop(2)([1, 2, 3, 4])).toEqual([1, 2])
  expect(drop(2)('1234')).toEqual('12')
})

test('returns empty array/string when N > data.length', () => {
  expect(drop(8)([1, 2, 3, 4])).toEqual([])
  expect(drop(8)('1234')).toEqual('')
})

test('returns the value "as is" when N < 0', () => {
  expect(drop(-8)([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(drop(-8)('1234')).toEqual('1234')
})

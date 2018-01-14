var takeRight = require('.')

test('takeRights N last elements', () => {
  expect(takeRight(2)([1, 2, 3, 4, 5, 6])).toEqual([5, 6])
  expect(takeRight(2)('123456')).toEqual('56')
})

test('returns full array/string when N > data.length', () => {
  expect(takeRight(8)([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(takeRight(8)('1234')).toEqual('1234')
})

test('returns the value "as is" when N < 0', () => {
  expect(takeRight(-8)([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(takeRight(-8)('1234')).toEqual('1234')
})

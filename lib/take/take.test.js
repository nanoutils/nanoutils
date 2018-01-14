var take = require('.')

test('takes N first elements', () => {
  expect(take(2)([1, 2, 3, 4, 5, 6])).toEqual([1, 2])
  expect(take(2)('123456')).toEqual('12')
})

test('returns full array/string when N > data.length', () => {
  expect(take(8)([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(take(8)('1234')).toEqual('1234')
})

test('returns the value "as is" when N < 0', () => {
  expect(take(-8)([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(take(-8)('1234')).toEqual('1234')
})

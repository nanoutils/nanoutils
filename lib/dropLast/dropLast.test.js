import dropLast from '.'

test('returns all but last N elements', () => {
  expect(dropLast(2)([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4])
  expect(dropLast(2)('123456')).toEqual('1234')
})

test('returns empty array/string when N > data.length', () => {
  expect(dropLast(8)([1, 2, 3, 4])).toEqual([])
  expect(dropLast(8)('1234')).toEqual('')
})

test('returns the value "as is" when N < 0', () => {
  expect(dropLast(-8)([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(dropLast(-8)('1234')).toEqual('1234')
})

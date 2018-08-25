import init from '.'

test('returns all but last items of array', () => {
  expect(init([1, 2, 3])).toEqual([1, 2])
})

test('returns all but last letters of string', () => {
  expect(init('123')).toEqual('12')
})

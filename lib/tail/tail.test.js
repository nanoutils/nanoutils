import tail from '../../cjs/tail'

it('returns all but first item of array', () => {
  expect(tail([1, 2, 3])).toEqual([2, 3])
})

it('returns all but first letter of string', () => {
  expect(tail('123')).toEqual('23')
})

import props from '.'

test('it doesn\'t extract props if element of keys is not an array', () => {
  expect(() => props('a', { a: 1, b: 2 })).toThrowError('Properties should be an array')
  expect(() => props([['a'], ['b']], { a: 1, b: 2 })).toThrowError('Property should be either string or number')
  expect(() => props([['a', 'a1'], ['b', 'b2']], { a: { a1: 1 }, b: { b2: 2 } }))
    .toThrowError('Property should be either string or number')
})

test('it extracts props using keys', () => {
  expect(props(['a', 'b'], { a: 1, b: 2 })).toEqual([1, 2])
})

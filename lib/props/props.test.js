import props from '.'

test('it doesn\'t extract props if element of keys is not an array', () => {
  expect(() => props('a', { a: 1, b: 2 })).toThrowError('Path should be an array')
  expect(() => props(['a', 'b'], { a: 1, b: 2 })).toThrowError('Path should be an array')
})

test('it extracts props using keys', () => {
  expect(props([['a'], ['b']], { a: 1, b: 2 })).toEqual([1, 2])
})

test('it can extract deep props using keys', () => {
  expect(props([['a', 'a1'], ['b', 'b2']], { a: { a1: 1 }, b: { b2: 2 } })).toEqual([1, 2])
})

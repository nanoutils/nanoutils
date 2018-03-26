import invert from '.'

test('inverts object keys: makes all values as keys, all keys puts in array under this value', () => {
  const obj = { a: 1, b: 2, c: 1 }
  const result = { 1: ['a', 'c'], 2: ['b'] }

  expect(invert(obj)).toMatchObject(result)
})

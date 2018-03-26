import invert from '.'

test('inverts object and array keys: makes all values as keys, all keys puts in array under this value', () => {
  const obj = { a: 1, b: 2, c: 1 }
  const list = ['a', 'b', 'a']

  expect(invert(obj)).toMatchObject({ 1: ['a', 'c'], 2: ['b'] })
  expect(invert(list)).toMatchObject({ a: ['0', '2'], b: ['1'] })
})

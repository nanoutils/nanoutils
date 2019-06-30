import endsWith from '../../cjs/endsWith'

test('checks if a suffix works for both strings and arrays', () => {
  expect(endsWith('c', 'abc')).toBeTruthy()
  expect(endsWith('b', 'abc')).toBeFalsy()
  expect(endsWith([2, 3], [1, 2, 3])).toBeTruthy()
  expect(endsWith([2, 3])([1, 2, 3])).toBeTruthy()
})

test('returns nothing if a suffix is neither a string nor an array', () => {
  expect(endsWith(1, 'abc')).toBeUndefined()
  expect(endsWith(false, 'abc')).toBeUndefined()
  expect(endsWith({ b: 2, c: 3 }, 'abc')).toBeUndefined()
  expect(endsWith(function() {}, 'abc')).toBeUndefined()
})

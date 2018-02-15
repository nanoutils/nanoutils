var concat = require('.')

const arr = [1, 2, 3, 4, 5]
const str = 'hello'

test('concat two arrays', () => {
  expect(concat(arr, arr)).toEqual([...arr, ...arr])
})

test('doesn\'t concat array and non array', () => {
  expect(concat(arr, str)).toEqual(null)
  expect(concat(arr, 'a')).toEqual(null)
  expect(concat(arr, 1)).toEqual(null)
  expect(concat(arr, false)).toEqual(null)
  expect(concat(arr, { a: 1 })).toEqual(null)
  expect(concat(arr, undefined)).toEqual(null)
  expect(concat(arr, null)).toEqual(null)
})

test('concat two strings', () => {
  expect(concat(str, str)).toEqual(str.concat(str))
})

test('doesn\'t concat string and non-string', () => {
  expect(concat(str, arr)).toEqual(null)
  expect(concat(str, 1)).toEqual(null)
  expect(concat(str, false)).toEqual(null)
  expect(concat(str, { a: 1 })).toEqual(null)
  expect(concat(str, undefined)).toEqual(null)
  expect(concat(str, null)).toEqual(null)
})

test('returns a function if one argument specified', () => {
  const concatWithArr = concat(arr)
  const concatWithStr = concat(str)
  expect(concatWithArr([6])).toEqual([1, 2, 3, 4, 5, 6])
  expect(concatWithStr(' there')).toBe('hello there')
})

test('skip all parameters but first two', () => {
  expect(concat(arr, arr, ['b'], [['c']])).toEqual([...arr, ...arr])
  expect(concat(str, str, ['b'], [['c']])).toEqual(str.concat(str))
})

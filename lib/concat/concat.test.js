var concat = require('.')

const arr = [1, 2, 3, 4, 5]
const str = 'hello'

test('concats array with any number of arguments', () => {
  expect(concat(arr, 'a')).toEqual([...arr, 'a'])
  expect(concat(arr, 'a', 'b')).toEqual([...arr, 'a', 'b'])
  expect(concat(arr, 'a', 'b', 'c')).toEqual([...arr, 'a', 'b', 'c'])
  expect(concat(arr, 'a', 'b', 'c', 'd')).toEqual([...arr, 'a', 'b', 'c', 'd'])
})

test('concats all to string if the first arg is a string', () => {
  expect(concat(str, arr)).toBe('hello1,2,3,4,5')
})

test('returns a function if one argument specified', () => {
  const concatWithArr = concat(arr)
  const concatWithStr = concat(str)
  expect(concatWithArr([6])).toEqual([1, 2, 3, 4, 5, 6])
  expect(concatWithStr(' there')).toBe('hello there')
})

test('unfold array passed as arguments, but only first level', () => {
  expect(concat(arr, 'a', ['b'], [['c']])).toEqual([...arr, 'a', 'b', ['c']])
})

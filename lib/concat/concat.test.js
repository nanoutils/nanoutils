var concat = require('.')

const arr = [1, 2, 3, 4, 5];
const str = 'hello';

test("concats array with any number of arguments", () => {
  expect(concat(arr, 'a')).toEqual([...arr, 'a'])
  expect(concat(arr, 'a', 'b')).toEqual([...arr, 'a', 'b'])
  expect(concat(arr, 'a', 'b', 'c')).toEqual([...arr, 'a', 'b', 'c'])
  expect(concat(arr, 'a', 'b', 'c', 'd')).toEqual([...arr, 'a', 'b', 'c', 'd'])
})

test("concats all to string if the first arg is a string", () => {
  expect(concat(str, arr)).toBe('hello1,2,3,4,5')
})

test("returns the same value if no values to concat given", () => {
  expect(concat(arr)).toEqual(arr)
  expect(concat(str)).toBe(str)
})

test("unfold array passed as arguments, but only first level", () => {
  expect(concat(arr, 'a', ['b'], [['c']])).toEqual([...arr, 'a', 'b', ['c']])
})

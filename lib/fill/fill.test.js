var fill = require('.')

test("fills array with value", () => {
  const arr = [1, 2, 3, 4, 5]
  expect(fill(arr, '*')).toEqual(['*', '*', '*', '*', '*'])
  expect(fill(arr, 'a')).toEqual(['a', 'a', 'a', 'a', 'a'])
})

test("return empty array if not array is given", () => {
  expect(fill('hello', 'a')).toEqual([])
})

test("return array itself if value is undefined", () => {
  const arr = [1, 2, 3, 4, 5]
  expect(fill(arr, undefined)).toBe(arr)
})

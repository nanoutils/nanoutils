var fill = require('.')

test("fills array with value", () => {
  const arr = [1, 2, 3, 4, 5]
  expect(fill(arr, '*')).toEqual(['*', '*', '*', '*', '*'])
  expect(fill(arr, 'a')).toEqual(['a', 'a', 'a', 'a', 'a'])
})

test("return empty array if is not array given", () => {
  expect(fill('hello')).toEqual([])
})

test("return array itself if no more arguments", () => {
  const arr = [1, 2, 3, 4, 5]
  expect(fill(arr)).toBe(arr)
})

test("fills and mutates array with value from start index", () => {
  const arr = [1, 2, 3, 4, 5]
  expect(fill(arr, '*', 2)).toEqual([1, 2, '*', '*', '*'])
  expect(fill(arr, 'a', 4)).toEqual([1, 2, '*', '*', 'a'])
})

test("fills and mutates array with value from start to end (not included) indexes", () => {
  const arr = [1, 2, 3, 4, 5]
  expect(fill(arr, '*', 2, 3)).toEqual([1, 2, '*', 4, 5])
  expect(fill(arr, 'a', 3, 4)).toEqual([1, 2, '*', 'a', 5])
})

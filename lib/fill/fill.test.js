var fill = require('.')

test("fills and mutates array with value", () => {
  const arr = [1, 2, 3, 4, 5];
  expect(fill(arr, '*')).toBe(arr.fill('*'))
  expect(fill(arr, 'a')).toBe(arr.fill('a'))
})

test("return array itself if no more arguments", () => {
  const arr = [1, 2, 3, 4, 5];
  expect(fill(arr)).toEqual(arr)
})

test("fills and mutates array with value from start index", () => {
  const arr = [1, 2, 3, 4, 5];
  expect(fill(arr, '*', 2)).toEqual([1, 2, '*', '*', '*'])
  expect(fill(arr, 'a', 4)).toEqual([1, 2, '*', '*', 'a'])
})

test("fills and mutates array with value from start to end indexes", () => {
  const arr = [1, 2, 3, 4, 5];
  expect(fill(arr, '*', 2)).toBe(arr.fill('*', 2, 3))
  expect(fill(arr, 'a', 5)).toBe(arr.fill('*', 1, 2))
})

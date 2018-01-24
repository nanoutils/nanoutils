var append = require('.')

test("add a value to an array", () => {
  var arr = [0, 1, 2, 3]
  expect(append(arr[arr.length - 1], arr.slice(0, -1))).toEqual(arr)
})

test("add a value to an empty array", () => {
  var arr = [1]
  expect(append(arr[arr.length - 1], arr.slice(0, -1))).toEqual(arr)
})

test("add an array to an empty array", () => {
  var arr = [1, [2, 3, 4]]
  expect(append(arr[arr.length - 1], arr.slice(0, -1))).toEqual(arr)
})
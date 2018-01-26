var append = require('.')

test("add a value to an array", () => {
  var arr = [0, 1, 2, 3]
  expect(append(4, arr)).toEqual([0, 1, 2, 3, 4])
})

test("add a value to an empty array", () => {
  expect(append(1, [])).toEqual([1])
})

test("add an array to an empty array", () => {
  expect(append([2, 3, 4], [1])).toEqual([1, [2, 3, 4])
})

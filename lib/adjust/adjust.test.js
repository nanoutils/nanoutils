var adjust = require('.')
var add = require('../add')
var multiply = require('../multiply')

var addTen = add(10)
var multiplyByTwo = multiply(2)

test("applies function to array item by index", () => {
  expect(adjust(addTen, 2, [2, 3, 4, 5, 6])).toEqual([2, 3, 14, 5, 6])

  expect(adjust(multiplyByTwo, 4, [2, 3, 4, 5, 6])).toEqual([2, 3, 4, 5, 12])
})

test("return array itself if no element by index does not exist", () => {
  expect(adjust(addTen, 10, [2, 3, 4, 5, 6])).toEqual([2, 3, 4, 5, 6])
  expect(adjust(multiplyByTwo, 10, [2, 3, 4, 5, 6])).toEqual([2, 3, 4, 5, 6])
})

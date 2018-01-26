var __ = require('../../__')
var placehold = require('.')

var first = (a, b, c) => a
var second = (a, b, c) => b
var third = (a, b, c) => c

test('correctly placehold function', () => {
  expect(placehold(first)(__, 2, 3)(1)).toBe(1)
  expect(placehold(second)(__, 2, 3)(1)).toBe(2)
  expect(placehold(third)(__, 2, 3)(1)).toBe(3)

  expect(placehold(first)(1, __, 3)(2)).toBe(1)
  expect(placehold(second)(1, __, 3)(2)).toBe(2)
  expect(placehold(third)(1, __, 3)(2)).toBe(3)

  expect(placehold(first)(1, 2, __)(3)).toBe(1)
  expect(placehold(second)(1, 2, __)(3)).toBe(2)
  expect(placehold(third)(1, 2, __)(3)).toBe(3)
})

test('await for all arguments', () => {
  expect(placehold(third)(__, __, __)(1)(2)(3)).toBe(3)
})

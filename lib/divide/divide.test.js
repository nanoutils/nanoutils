var divide = require('.')

test('divides two numbers', () => {
  expect(divide(4)(2)).toEqual(2)
})

test('divides two numbers from string', () => {
  expect(divide('4')(2)).toEqual(2)
})

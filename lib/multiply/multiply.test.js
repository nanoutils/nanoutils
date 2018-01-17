var multiply = require('.')

test('multiplies two numbers', () => {
  expect(multiply(4)(3)).toEqual(12)
})

test('multiplies two numbers from string', () => {
  expect(multiply('4')(3)).toEqual(12)
})

var add = require('.')

test('sums two numbers', () => {
  expect(add(4)(3)).toEqual(7)
})

test('sums two numbers from string', () => {
  expect(add('4')(3)).toEqual(7)
})

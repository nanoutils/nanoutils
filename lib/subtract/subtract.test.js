var subtract = require('.')

test('subtracts two numbers', () => {
  expect(subtract(4)(3)).toEqual(1)
})

test('subtracts two numbers from string', () => {
  expect(subtract('4')(3)).toEqual(1)
})

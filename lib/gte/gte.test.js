var gte = require('.')

test('checks if 1st arg is greater or equals to 2nd', () => {
  expect(gte(1)(2)).toBeFalsy()
  expect(gte(2)(2)).toBeTruthy()
  expect(gte(3)(2)).toBeTruthy()
})

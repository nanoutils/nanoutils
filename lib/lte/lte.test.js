var lte = require('.')

test('checks if 1st arg is less or equals to 2nd', () => {
  expect(lte(1)(2)).toBeTruthy()
  expect(lte(2)(2)).toBeTruthy()
  expect(lte(3)(2)).toBeFalsy()
})

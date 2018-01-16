var gt = require('.')

test('checks if 1st arg is greater than 2nd', () => {
  expect(gt(1)(2)).toBeFalsy()
  expect(gt(2)(2)).toBeFalsy()
  expect(gt(3)(2)).toBeTruthy()
})

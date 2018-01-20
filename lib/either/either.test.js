var either = require('.')

test('confirms that some of functions returns true', () => {
  var isIn5_15or10_20 = either(i => i < 15 && i > 5, i => i > 10 && i < 20)
  expect(isIn5_15or10_20(13)).toBeTruthy()
  expect(isIn5_15or10_20(17)).toBeTruthy()
  expect(isIn5_15or10_20(6)).toBeTruthy()
  expect(isIn5_15or10_20(-2)).toBeFalsy()
})

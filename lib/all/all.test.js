var all = require('.')

test('checks if all array items conforms to cb', () => {
  var allGt5 = all(i => i > 5)
  expect(allGt5([6, 7, 8, 9, 10])).toBeTruthy()
  expect(allGt5([6, 7, 4, 9, 10])).toBeFalsy()
})

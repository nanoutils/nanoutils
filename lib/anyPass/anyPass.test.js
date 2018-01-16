var anyPass = require('.')

test('checks if any array items conforms to cb', () => {
  var gt5Lt10 = anyPass([i => i === 10, i => i === 5])
  expect(gt5Lt10(5)).toBeTruthy()
  expect(gt5Lt10(10)).toBeTruthy()
  expect(gt5Lt10(200)).toBeFalsy()
})

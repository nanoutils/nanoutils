var any = require('.')

test('checks if any of array items conforms to cb', () => {
  var anyGt5 = any(i => i > 5)
  expect(anyGt5([1, 2, 3, 4, 5, 6])).toBeTruthy()
  expect(anyGt5([1, 2, 3, 4])).toBeFalsy()
})

var always = require('.')

test('should return value', () => {
  expect(always(1)()).toBe(1)
})

var always = require('./always')

test('should return value', () => {
  expect(always(1)()).toBe(1)
})

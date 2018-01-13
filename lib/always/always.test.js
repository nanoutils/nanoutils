var always = require('.')

test('returns value given in 1st argument', () => {
  expect(always(1)()).toBe(1)
})

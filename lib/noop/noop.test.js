var noop = require('.')

test('always return undefined', () => {
  expect(noop()).toBe(undefined)
})

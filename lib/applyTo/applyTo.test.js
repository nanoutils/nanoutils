var applyTo = require('.')

test('applies callback from 2rd argument to value from 1st', () => {
  const res = applyTo(41)(x => x + 1)
  expect(res).toBe(42)
})

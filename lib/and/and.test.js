var and = require('.')

test('confirms that both of arguments are true', () => {
  expect(and(true, true)).toBeTruthy()
  expect(and(true, false)).toBeFalsy()
  expect(and(false, true)).toBeFalsy()
  expect(and(false, false)).toBeFalsy()
})

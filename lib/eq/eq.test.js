var eq = require('.')

test('confirms variables are equal', () => {
  expect(eq(1, 1)).toBeTruthy()
})

test('confirms that variables are not equal', () => {
  expect(eq(1, 'lol')).toBeFalsy()
})

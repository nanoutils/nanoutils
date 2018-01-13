var eqBy = require('.')

const eqFirst = eqBy(i => i[0])

test('confirms that variables are equals with callback', () => {
  expect(eqFirst([1, 2], [1, 3])).toBeTruthy()
})

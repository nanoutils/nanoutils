import eqWith from '.'

const eqFirst = eqWith((a, b) => a[0] === b[0])

test('confirms that variables are equals with callback', () => {
  expect(eqFirst([1, 2], [1, 3])).toBeTruthy()
})

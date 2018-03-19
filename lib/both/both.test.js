import both from '.'

test('confirms that both of functions returns true', () => {
  var isGt5Lt10 = both(i => i > 5 && i > 0, i => i < 10)
  expect(isGt5Lt10(7)).toBeTruthy()
  expect(isGt5Lt10(3)).toBeFalsy()
  expect(isGt5Lt10(12)).toBeFalsy()
  expect(isGt5Lt10(-2)).toBeFalsy()
})

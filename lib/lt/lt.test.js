import lt from '.'

it('checks if value is less than another one', () => {
  const isLessThan2 = lt(2)

  expect(isLessThan2(5)).toBeFalsy()
  expect(isLessThan2(2)).toBeFalsy()
  expect(isLessThan2(0)).toBeTruthy()
})

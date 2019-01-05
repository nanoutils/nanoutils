import gt from '.'

it('checks if value is greater than another one', () => {
  const isGreaterThan2 = gt(2)

  expect(isGreaterThan2(5)).toBeTruthy()
  expect(isGreaterThan2(2)).toBeFalsy()
  expect(isGreaterThan2(0)).toBeFalsy()
})

import lte from '.'

it('checks if value is less than or equals to another one', () => {
  const isLessOrEquals2 = lte(2)

  expect(isLessOrEquals2(5)).toBeFalsy()
  expect(isLessOrEquals2(2)).toBeTruthy()
  expect(isLessOrEquals2(0)).toBeTruthy()
})

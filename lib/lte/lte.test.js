import lte from '.'

it('checks if value is less than or equals to another one', () => {
  const isLessOrEquals2 = lte(2)

  expect(isLessThanOrEqualsTo2(5)).toBeFalsy()
  expect(isLessThanOrEqualsTo2(2)).toBeTruthy()
  expect(isLessThanOrEqualsTo2(0)).toBeTruthy()
})

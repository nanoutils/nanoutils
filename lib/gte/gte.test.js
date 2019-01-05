import gte from '.'

it('checks if value is greater than or equals to another one', () => {
  const isGreaterThanOrEqualsTo2 = gte(2)

  expect(isGreaterThanOrEqualsTo2(5)).toBeTruthy()
  expect(isGreaterThanOrEqualsTo2(2)).toBeTruthy()
  expect(isGreaterThanOrEqualsTo2(0)).toBeFalsy()
})

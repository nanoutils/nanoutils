import gte from '.'

it('checks if value is greater than or equals to another one', () => {
  const isGreaterOrEquals2 = gte(2)

  expect(isGreaterOrEquals2(5)).toBeTruthy()
  expect(isGreaterOrEquals2(2)).toBeTruthy()
  expect(isGreaterOrEquals2(0)).toBeFalsy()
})

import composeP from '.'

test('composes promises from functions', () => {
  expect.assertions(1)
  const plusOne = num => Promise.resolve(num + 1)
  const getNumber = num => Promise.resolve(num)
  const fn = composeP(plusOne, getNumber)
  fn(1).then(res => {
    expect(res).toBe(2)
  })
})

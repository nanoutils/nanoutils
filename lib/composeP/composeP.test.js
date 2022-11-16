import composeP from '../../cjs/composeP'

test('composes promises from functions', () => {
  expect.assertions(1)
  var plusOne = (num) => Promise.resolve(num + 1)
  var getNumber = (num) => Promise.resolve(num)
  var fn = composeP(plusOne, getNumber)
  fn(1).then((res) => {
    expect(res).toBe(2)
  })
})

import pipeP from '.'

test('pipes promises from functions', () => {
  expect.assertions(1)
  var plusOne = num => Promise.resolve(num + 1)
  var getNumber = num => Promise.resolve(num)
  var fn = pipeP(getNumber, plusOne)
  fn(1).then(res => {
    expect(res).toBe(2)
  })
})

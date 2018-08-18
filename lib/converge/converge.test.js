import converge from '.'

test("enhance arguments with callbacks from 2rd argument and call 1st with 'em", () => {
  var a = converge((a, b) => a + b, [
    i => i.toUpperCase(),
    i => i.toLowerCase()
  ])
  expect(a('abc')).toBe('ABCabc')
})

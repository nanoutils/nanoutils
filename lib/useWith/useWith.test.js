var useWith = require('.')

test("enhance arguments with callbacks from 2rd argument and call 1st with 'em", () => {
  var a = useWith(Math.pow, [i => i - 1, i => i + 1])
  expect(a(3, 4)).toBe(32)
})

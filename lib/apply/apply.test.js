var apply = require('.')

test('applies array of arguments to cb', () => {
  var a = apply(function() {
    return Array.prototype.slice.call(arguments)
  })
  expect(a([1, 2, 3])).toEqual([1, 2, 3])
})

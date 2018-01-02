var argsToArray = require('.')

test('should create array of args', () => {
  var a = function() {
    return argsToArray(arguments)
  }
  var arr = a(1, 2, 3)
  expect(Array.isArray(arr)).toBe(true)
  expect(arr).toEqual([1, 2, 3])
})

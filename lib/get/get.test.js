var get = require('.')
var lens = require('../lens')

var obj = {
  a: 2
}

var lens = lens(obj => obj.a)

test('correctly returns value by lens getter', () => {
  expect(get(lens, obj)).toBe(2)
})

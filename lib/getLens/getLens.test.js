var lens = require('../lens')
var getLens = require('.')

var obj = {
  a: 2
}

var lens = lens(obj => obj.a)

test('correctly returns value by lens getter', () => {
  expect(getLens(lens, obj)).toBe(2)
})

var get = require('./get')
var lens = require('./lens')

var obj = {
  a: 2
}

var lens = lens(obj => obj.a)

test('should correctly get value by lens getter', () => {
  expect(get(lens, obj)).toBe(2)
})

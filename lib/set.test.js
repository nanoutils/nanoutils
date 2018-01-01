var set = require('./set')
var lens = require('./lens')

var obj = {
  a: 1
}

var lens = lens(obj => obj.a, (a, obj) => ({ ...obj, a }))

test('should correctly set value by lens setter', () => {
  expect(set(lens, 2, obj)).toEqual({ a: 2 })
})

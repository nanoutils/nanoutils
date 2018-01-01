var lens = require('./lens')
var update = require('./update')

var obj = {
  a: 2
}

var lens = lens(obj => obj.a, (a, obj) => ({ ...obj, a }))

test('should correctly update value by lens setter', () => {
  expect(update(lens, i => i + 1, obj)).toEqual({ a: 3 })
})

var lens = require('./lens')

var obj = {
  a: 2,
  b: 3
}

var lens = lens(obj => obj.a, (b, obj) => ({ ...obj, b }))

test('should correctly return value by getter', () => {
  expect(lens(obj).get()).toBe(2)
})

test('should correctly change value by setter', () => {
  expect(lens(obj).set(2)).toEqual({ a: 2, b: 2 })
})

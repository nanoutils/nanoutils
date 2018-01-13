var lens = require('.')

var obj = {
  a: 2,
  b: 3
}

var lens = lens(obj => obj.a, (b, obj) => ({ ...obj, b }))

test('returns value by getter', () => {
  expect(lens(obj).get()).toBe(2)
})

test('changes value by setter', () => {
  expect(lens(obj).set(2)).toEqual({ a: 2, b: 2 })
})

test("doesn't mutate real object", () => {
  lens(obj).set(2)
  expect(obj).toEqual({ a: 2, b: 3 })
})

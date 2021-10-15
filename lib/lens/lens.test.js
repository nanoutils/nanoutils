import lens from '../../cjs/lens'

var obj = {
  a: 2,
  b: 3,
}

var getAndSet = lens(
  (obj) => obj.a,
  (b, obj) => ({ ...obj, b }),
)

test('returns value by getter', () => {
  expect(getAndSet(obj).get()).toBe(2)
})

test('changes value by setter', () => {
  expect(getAndSet(obj).set(2)).toEqual({ a: 2, b: 2 })
})

test("doesn't mutate real object", () => {
  getAndSet(obj).set(2)
  expect(obj).toEqual({ a: 2, b: 3 })
})

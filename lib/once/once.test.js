import once from '../../cjs/once'

it('returns function, that could be invokated only once and will return that value every time', () => {
  var addOne = (x) => x + 1
  var wrapped = once(addOne)
  var res1 = wrapped(1)
  var res2 = wrapped(10)

  expect(res1).toBe(2)
  expect(res2).toBe(2)
})

it('supports functions of any arity', () => {
  var sum1 = once((x, y) => x + y)
  var sum2 = once((x, y, z) => x + y + z)

  expect(sum1(1, 1)).toBe(2)
  expect(sum1(2, 2)).toBe(2)

  expect(sum2(1, 1, 1)).toBe(3)
  expect(sum2(2, 2, 2)).toBe(3)
})

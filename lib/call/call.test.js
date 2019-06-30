import call from '../../cjs/call'

test('calls function with all passed args', () => {
  const func1 = (a) => a * 2
  const func2 = (a, b, c) => a + b + c

  expect(call(func1, 2)).toBe(4)
  expect(call(func1)(2)).toBe(4)

  expect(call(func2, 1, 2, 3)).toBe(6)
  expect(call(func2)(1, 2, 3)).toBe(6)
})

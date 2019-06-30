import curry from '../../cjs/curry'

function sum(x, y, z) {
  return x + y + z
}

var curriedSum = curry(sum)

test('curriedSum(1, 2, 3) to equal 6', () => {
  expect(curriedSum(1, 2, 3)).toBe(6)
})

test('curriedSum(1)(2, 3) to equal 6', () => {
  expect(curriedSum(1)(2, 3)).toBe(6)
})

test('curriedSum(1, 2)(3) to equal 6', () => {
  expect(curriedSum(1, 2)(3)).toBe(6)
})

test('curriedSum(1)(2)(3) to equal 6', () => {
  expect(curriedSum(1)(2)(3)).toBe(6)
})

test('sees arguments until arguments with values by default', () => {
  const add3 = curry((a, b = 2, c = 3) => a + b + c)

  expect(add3(1)).toBe(6)
  expect(add3(1, 3, 4)).toBe(8)
  expect(add3(1, 3)).toBe(7)
})

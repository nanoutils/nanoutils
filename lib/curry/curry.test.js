import curry from '.'

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

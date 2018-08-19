import curryN from '.'

function sum(x, y, z, missed) {
  return x + y + z + (missed || 0)
}

var curry3Sum = curryN(3, sum)

test('curry3Sum(1, 2, 3) to equal 6', () => {
  expect(curry3Sum(1, 2, 3)).toBe(6)
})

test('curry3Sum(1)(2, 3) to equal 6', () => {
  expect(curry3Sum(1)(2, 3)).toBe(6)
})

test('curry3Sum(1, 2)(3) to equal 6', () => {
  expect(curry3Sum(1, 2)(3)).toBe(6)
})

test('curry3Sum(1)(2)(3) to equal 6', () => {
  expect(curry3Sum(1)(2)(3)).toBe(6)
})

/* NOTE: should or not? */
test('accepts extra args at the end', () => {
  expect(curry3Sum(1, 2)(3, 4)).toBe(/* 6 */ 10)
})

test('works with arguments with values by default', () => {
  const add3 = curryN(1, (a, b = 2, c = 3) => a + b + c)

  expect(add3(1, 3, 4)).toBe(8)
  expect(add3(1, 3)).toBe(7)
  expect(add3(1)).toBe(6)
})

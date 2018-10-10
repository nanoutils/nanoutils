import compose from '.'
import not from '../not'
import add from '../add'
import multiply from '../multiply'

const arrify = f => arr => f(...arr)

test('accepts functions from right to left', () => {
  const plus1 = add(1)
  const times2 = multiply(2)

  expect(compose(plus1, times2)(1)).toBe(3)
})

test('accepts functions which take more than 1 parameters', () => {
  const plus1 = add(1)

  expect(compose(plus1, arrify(multiply))([1, 2])).toBe(3)
})

test('instead of accepting functions with more than 1 parameters accepts an array', () => {
  const squareBoth = (a, b) => [multiply(a, a), multiply(b, b)]

  expect(compose(arrify(add), arrify(squareBoth))([1, 2])).toBe(5)
})

test('returns gcd based on recursive repeating compose', () => {
  const gcdIteration = arrify((a, b) =>
    a > b
      ? gcdIteration([b, a])
      : a < 1
        ? b
        : [b % a, a]
  )

  const gcd = (a, b) => {
    const f = compose(gcdIteration)
    const value = f([a, b])
    if (Array.isArray(value)) {
      return gcd(...value)
    }
    return value
  }

  expect(gcd(10, 3)).toBe(1)
  expect(compose(gcdIteration, gcdIteration, gcdIteration)([10, 3])).toBe(1)

  expect(gcd(10, 4)).toBe(2)
  expect(compose(gcdIteration, gcdIteration, gcdIteration)([10, 4])).toBe(2)

  expect(gcd(15, 15)).toBe(15)
  expect(compose(gcdIteration, gcdIteration)([15, 15])).toBe(15)

  expect(gcd(15, 20)).toBe(5)
  expect(compose(gcdIteration, gcdIteration, gcdIteration)([15, 20])).toBe(5)

  expect(gcd(15, 31)).toBe(1)
  expect(compose(gcdIteration, gcdIteration, gcdIteration)([15, 31])).toBe(1)
})

test('checks if a value is not an array', () => {
  const isNotArray = compose(not, Array.isArray)

  expect(isNotArray(1)).toBeTruthy()
  expect(isNotArray([1, 2, 3])).toBeFalsy()
})

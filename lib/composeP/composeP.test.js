import composeP from '.'
import compose from '../compose'
import add from '../add'
import multiply from '../multiply'

const promisify = f => args => Promise.resolve(f(args))
const arrify = f => args => f(...args)

test('accepts promises from right to left', () => {
  const plus1 = compose(promisify, add(1))
  const times2 = compose(promisify, multiply(2))

  composeP(plus1, times2)(1).then(result => {
    expect(result).toBe(3)
  })
})

test('accepts promises which take more than 1 parameters', () => {
  const plus1 = compose(promisify, add(1))
  const multiplyP = compose(promisify, arrify(multiply))

  composeP(plus1, multiplyP)([1, 2]).then(result => {
    expect(result).toBe(3)
  })
})

test('instead of accepting promises with more than 1 parameters accepts an array', () => {
  const addP = compose(promisify, arrify(add))
  const squareBothP = compose(promisify, arrify((a, b) => [multiply(a, a), multiply(b, b)]))

  composeP(addP, squareBothP)([1, 2]).then(result => {
    expect(result).toBe(5)
  })
})

test('returns gcd based on recursive repeating composeP', () => {
  const gcdIteration = arrify((a, b) =>
    a > b
      ? gcdIteration([b, a])
      : a < 1
        ? Promise.resolve(b)
        : Promise.resolve([b % a, a])
  )

  const gcdP = (a, b) => {
    const f = composeP(gcdIteration)
    return f(a, b).then(value => {
      if (Array.isArray(value)) {
        return gcdP(...value)
      }
      return value
    })
  }

  Promise.all([
    composeP(gcdIteration, gcdIteration, gcdIteration)([10, 3]),
    gcdP(10, 3),
    composeP(gcdIteration, gcdIteration, gcdIteration)([10, 4]),
    gcdP(10, 4),
    composeP(gcdIteration, gcdIteration)([15, 15]),
    gcdP(15, 15),
    composeP(gcdIteration, gcdIteration, gcdIteration)([15, 20]),
    gcdP(15, 20),
    composeP(gcdIteration, gcdIteration, gcdIteration)([15, 31]),
    gcdP(15, 31)
  ]).then(result => {
    expect(result).toEqual([
      1, 1,
      2, 2,
      15, 15,
      5, 5,
      1, 1
    ])
  })
})

import memoize from '.'

it('memoizes pure functions', () => {
  let counter = 0
  const countableFact = n => {
    counter++
    let result = 1
    for (let i = 2; i <= n; i++) {
      result *= i
    }
    return result
  }
  const memoisedFact = memoize(countableFact)
  expect(counter).toBe(0)
  expect(memoisedFact(5)).toBe(120)
  expect(counter).toBe(1)
  expect(memoisedFact(5)).toBe(120)
  expect(counter).toBe(1)
})

it('supports undefined and null as result values', () => {
  let counter = 0
  const unFunc = value => {
    counter++
    return value
  }
  const memoisedUnFunc = memoize(unFunc)
  expect(counter).toBe(0)
  expect(memoisedUnFunc(undefined)).toBe(undefined)
  expect(counter).toBe(1)
  expect(memoisedUnFunc(undefined)).toBe(undefined)
  expect(counter).toBe(1)
  expect(memoisedUnFunc(null)).toBe(null)
  expect(counter).toBe(2)
  expect(memoisedUnFunc(null)).toBe(null)
  expect(counter).toBe(2)
})

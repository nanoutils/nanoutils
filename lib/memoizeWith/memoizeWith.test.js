import memoizeWith from '../../cjs/memoizeWith'
import identity from '../../cjs/identity'
import plainMean from '../../cjs/mean'
import ascend from '../../cjs/ascend'

it('memoizes pure functions', () => {
  let counter = 0
  const countableFact = (n) => {
    counter++
    let result = 1
    for (let i = 2; i <= n; i++) {
      result *= i
    }
    return result
  }
  const memoisedFact = memoizeWith(identity, countableFact)
  expect(counter).toBe(0)
  expect(memoisedFact(5)).toBe(120)
  expect(counter).toBe(1)
  expect(memoisedFact(5)).toBe(120)
  expect(counter).toBe(1)
})

it('supports undefined and null as result values', () => {
  let counter = 0
  const unFunc = (value) => {
    counter++
    return value
  }
  const keyFunc = (value) => (value === null ? 0 : 1)
  const memoisedUnFunc = memoizeWith(keyFunc, unFunc)
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

it('memoizes values with custom hash generator', () => {
  const getHash = (args) => [...args].sort(ascend(identity)).join('-')
  let counter = 0
  const mean = memoizeWith(getHash, (args) => {
    counter++
    return plainMean(args)
  })
  expect(counter).toBe(0)
  expect(mean([1, 2, 3])).toBe(2)
  expect(counter).toBe(1)
  expect(mean([1, 2, 3])).toBe(2)
  expect(mean([1, 3, 2])).toBe(2)
  expect(mean([2, 1, 3])).toBe(2)
  expect(mean([2, 3, 1])).toBe(2)
  expect(mean([3, 1, 2])).toBe(2)
  expect(mean([3, 2, 1])).toBe(2)
  expect(counter).toBe(1)
})

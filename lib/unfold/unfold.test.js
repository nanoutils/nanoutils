import cond from '../../cjs/cond'
import F from '../../cjs/F'
import lt from '../../cjs/lt'
import T from '../../cjs/T'
import unfold from '../../cjs/unfold'

const gt_ = (than) => (what) => lt(than, what)
const iteration = (a) => (a > 50 ? false : [a, a + 10])

it('unfolds the value into a list through iteration function', () => {
  expect(unfold(iteration, 10)).toEqual([10, 20, 30, 40, 50])
  expect(unfold(iteration)(10)).toEqual([10, 20, 30, 40, 50])
})

it('unfolds iterable with cond', () => {
  const condIteration = cond([
    [gt_(50), F],
    [T, (value) => [value, value + 10]],
  ])

  expect(unfold(condIteration, 10)).toEqual([10, 20, 30, 40, 50])
})

it('unfolds iterable with &&', () => {
  const condIteration = (value) => value <= 50 && [value, value + 10]

  expect(unfold(condIteration, 10)).toEqual([10, 20, 30, 40, 50])
})

it('does not mutate original value', () => {
  let value = 10

  unfold(iteration, value)
  expect(value).toBe(10)
})

import juxt from '../../cjs/juxt'
import mean from '../../cjs/mean'
import median from '../../cjs/median'

test('applies a list of functions to a list of values', () => {
  const range = juxt([Math.min, Math.max])
  expect(range(3, 4, 9, -3)).toEqual([-3, 9])
})

test('works for docs', () => {
  const args = [1, 2, 2, 4]
  const acceptArguments = f => (...args) => f(args)
  const statistics = [mean, median].map(acceptArguments)

  expect(juxt(statistics, ...args)).toEqual([2.25, 2])
  expect(juxt(statistics)(...args)).toEqual([2.25, 2])
})

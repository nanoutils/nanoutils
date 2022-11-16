import mean from '../../cjs/mean'
import unapply from '../../cjs/unapply'
import unzipWith from '../../cjs/unzipWith'

it('unzips with callback', () => {
  const val = unzipWith(
    (a, b) => a + b,
    [
      [1, 10, 100],
      [2, 20, 200],
    ],
  )
  expect(val).toEqual([3, 30, 300])
})

it('works for docs', () => {
  const company1 = [300e12, 350e12, 200e12]
  const company2 = [400e12, 350e12, 300e12]

  const meanArgs = unapply(mean)

  expect(unzipWith(meanArgs, [company1, company2])).toEqual([
    350e12, 350e12, 250e12,
  ])
})

import multiply from '../multiply'
import scan from '.'

it('returns array of successively reduced values', () => {
  expect(scan(multiply, 1, [1, 2, 3, 4])).toEqual([1, 1, 2, 6, 24])
})

it('can generate factorials', () => {
  const factorials = n => scan(
    multiply,
    1,
    Array(Math.max(0, n - 1)).fill(0).map((_, i) => i + 1)
  )

  expect(factorials(5)).toEqual([1, 1, 2, 6, 24])
})

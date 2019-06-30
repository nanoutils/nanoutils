import { expectNumberOfArgs } from '../../cjs/_internal/_test'
import aperture from '../../cjs/aperture'

test('it accepts exact 2 arguments', () => {
  expectNumberOfArgs(
    aperture,
    2,
    [2, [1, 2, 3]]
  )
})

test('returns array of n-tuples', () => {
  const val2 = aperture(2, [1, 2, 3, 4, 5])
  const val3 = aperture(3, [1, 2, 3, 4, 5])
  expect(val2).toEqual([[1, 2], [2, 3], [3, 4], [4, 5]])
  expect(val3).toEqual([[1, 2, 3], [2, 3, 4], [3, 4, 5]])
})

test('returns empty array if n > arr.length', () => {
  expect(aperture(7, [1, 2])).toEqual([])
})

import over from '../../cjs/over'
import lensPath from '../../cjs/lensPath'

it('updates value by its path', () => {
  const abPath = lensPath(['a', 'b'])
  const val = over(abPath, i => i + 1, { a: { b: 2 } })
  expect(val).toEqual({
    a: { b: 3 }
  })
})

it('works correctly for arrays', () => {
  const firstPath = lensPath([0])
  const val = over(firstPath, i => i + 10, [1, 2, 3])
  expect(val).toEqual([11, 2, 3])
})

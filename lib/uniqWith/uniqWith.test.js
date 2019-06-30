import eqBy from '../../cjs/eqBy'
import prop from '../../cjs/prop'
import uniqWith from '../../cjs/uniqWith'

it('returns new list, containing only one copy of each element based on predicate comparison. All items compared pairly. First item is prefered', () => {
  const list = [1, 2, '1', 4]
  const compare = (a, b) => a + '' === b + ''
  expect(uniqWith(compare, list)).toEqual([1, 2, 4])
})

it('filters values by prop', () => {
  const eqByFilename = eqBy(prop('filename'))

  const images = [
    { filename: '1', extension: 'png' },
    { filename: '2', extension: 'png' },
    { filename: '1', extension: 'jpeg' },
    { filename: '2', extension: 'jpeg' }
  ]

  expect(uniqWith(eqByFilename, images)).toEqual([
    { filename: '1', extension: 'png' },
    { filename: '2', extension: 'png' }
  ])
})

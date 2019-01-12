import prop from '../prop'
import uniqBy from '.'

it('returns the list with all duplicated values filtered according to \'equals\'. Values compared with predicate applied to them,', () => {
  const list = [1, -1, 2, -2]
  expect(uniqBy(Math.abs, list)).toEqual([1, 2])
})

it('filters values by prop', () => {
  const images = [
    { filename: '1', extension: 'png' },
    { filename: '2', extension: 'png' },
    { filename: '1', extension: 'jpeg' },
    { filename: '2', extension: 'jpeg' }
  ]

  expect(uniqBy(prop('filename'), images)).toEqual(['1', '2'])
})

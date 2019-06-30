import zip from '../../cjs/zip'

it('returns array of 1st, 2nd, 3rd etc arguments', () => {
  expect(zip(['a', 'b', 'c'])([1, 2, 3])).toEqual([['a', 1], ['b', 2], ['c', 3]])
  expect(zip(['a', 'b', 'c'], [1, 2, 3])).toEqual([['a', 1], ['b', 2], ['c', 3]])
})

it('works for docs', () => {
  const company1 = [300e12, 350e12, 200e12]
  const company2 = [400e12, 350e12, 300e12]

  expect(zip(company1, company2)).toEqual([
    [300e12, 400e12], [350e12, 350e12], [200e12, 300e12]
  ])
})

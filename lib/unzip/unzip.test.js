import unzip from '../../cjs/unzip'

it('returns pre-zip array', () => {
  expect(
    unzip([
      ['a', 1, true],
      ['b', 2, false],
      ['c', 3, null, 'troll'],
    ]),
  ).toEqual([
    ['a', 'b', 'c'],
    [1, 2, 3],
    [true, false, null],
    [undefined, undefined, 'troll'],
  ])
})

it('works for docs', () => {
  const company1 = [300e12, 350e12, 200e12]
  const company2 = [400e12, 350e12, 300e12]

  expect(unzip([company1, company2])).toEqual([
    [300e12, 400e12],
    [350e12, 350e12],
    [200e12, 300e12],
  ])
})

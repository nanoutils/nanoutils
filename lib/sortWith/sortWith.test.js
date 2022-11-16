import sortWith from '../../cjs/sortWith'
import ascend from '../../cjs/ascend'
import prop from '../../cjs/prop'
import sortBy from '../../cjs/sortBy'

it('equals to sortBy if the number of comparators equals 1', () => {
  const array = [{ b: 4 }, { b: 3 }, { b: 2 }, { b: 1 }]

  const sortByArray = sortBy(ascend(prop('b')), array)
  const sortWithOneComparator = sortWith([ascend(prop('b'))], array)

  expect(sortByArray).toEqual(sortWithOneComparator)
})

it('compares with several comparators', () => {
  const array = [
    { a: 4, z: 3 },
    { a: 3, z: 3 },
    { a: 2, z: 2 },
    { a: 1, z: 2 },
  ]

  const sortWithSeveralComparators = sortWith([
    ascend(prop('z')),
    ascend(prop('a')),
  ])

  expect(sortWithSeveralComparators(array)).toEqual([
    { a: 1, z: 2 },
    { a: 2, z: 2 },
    { a: 3, z: 3 },
    { a: 4, z: 3 },
  ])
})

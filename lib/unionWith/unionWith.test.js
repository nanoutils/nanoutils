import unionWith from '../../cjs/unionWith'

it('returns array with no duplicates according to provided equality function', () => {
  const arr1 = [{ a: 1 }, { a: 2 }]
  const arr2 = [{ a: 1 }, { a: 3 }]

  const isASame = (item1, item2) => item1.a === item2.a

  const result = [{ a: 1 }, { a: 2 }, { a: 3 }]

  expect(unionWith(isASame, arr1, arr2)).toEqual(result)
  // curring
  expect(unionWith(isASame, arr1)(arr2)).toEqual(result)
  expect(unionWith(isASame)(arr1, arr2)).toEqual(result)
  expect(unionWith(isASame)(arr1)(arr2)).toEqual(result)
})

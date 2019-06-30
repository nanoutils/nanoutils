import identityT from '../../cjs/identityT'

it('reduces values as is', () => {
  const pushReducer = (array, value) => {
    array.push(value)
    return array
  }
  const transducer = identityT()
  const rootReducer = transducer(pushReducer)

  expect(rootReducer([], 1)).toEqual([1])
  expect(rootReducer([1], 2)).toEqual([1, 2])
  expect(rootReducer([1, 2], 3)).toEqual([1, 2, 3])
  expect(rootReducer([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
  expect(rootReducer([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4, 5])
})

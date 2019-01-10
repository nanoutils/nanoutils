import dropT from '.'

it('returns a transducer', () => {
  const pushReducer = (array, value) => {
    array.push(value)
    return array
  }
  const transducer = dropT(2)
  const rootReducer = transducer(pushReducer)

  expect(rootReducer([], 1)).toEqual([])
  expect(rootReducer([], 2)).toEqual([])
  expect(rootReducer([], 3)).toEqual([3])
  expect(rootReducer([3], 4)).toEqual([3, 4])
  expect(rootReducer([3, 4], 5)).toEqual([3, 4, 5])
})

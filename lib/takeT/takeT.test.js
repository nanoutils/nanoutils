import takeT from '.'

it('returns a transducer', () => {
  const pushReducer = (array, value) => {
    array.push(value)
    return array
  }
  const transducer = takeT(2)
  const rootReducer = transducer(pushReducer)

  expect(rootReducer([], 1)).toEqual([1])
  expect(rootReducer([1], 2)).toEqual([1, 2])
  expect(rootReducer([1, 2], 3)).toEqual([1, 2])
  expect(rootReducer([1, 2], 4)).toEqual([1, 2])
  expect(rootReducer([1, 2], 5)).toEqual([1, 2])
})

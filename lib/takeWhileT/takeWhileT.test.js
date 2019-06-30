import takeWhileT from '../../cjs/takeWhileT'

it('returns a transducer', () => {
  const transducer = takeWhileT(value => value < 3)
  const rootReducer = transducer((array, value) => {
    array.push(value)
    return array
  })

  expect(rootReducer([], 1)).toEqual([1])
  expect(rootReducer([1], 2)).toEqual([1, 2])
  expect(rootReducer([1, 2], 3)).toEqual([1, 2])
  expect(rootReducer([1, 2], 2)).toEqual([1, 2])
  expect(rootReducer([1, 2], 1)).toEqual([1, 2])
})
